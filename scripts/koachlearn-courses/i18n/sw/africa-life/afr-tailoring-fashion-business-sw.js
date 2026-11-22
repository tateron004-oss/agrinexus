"use strict";

// Koach Learn course (Swahili translation of africa-life/afr-tailoring-fashion-business.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const KE_BRS = { name: "Business Registration Service (Kenya): usajili wa jina la biashara kupitia eCitizen", url: "https://brs.go.ke/" };
const NG_CAC = { name: "Corporate Affairs Commission (Nigeria): usajili wa majina ya biashara na kampuni", url: "https://www.cac.gov.ng/" };
const GH_ORC = { name: "Office of the Registrar of Companies (Ghana): majina ya biashara (biashara za mtu mmoja)", url: "https://orc.gov.gh/" };

module.exports = {
  id: "afr-tailoring-fashion-business-sw",
  lang: "sw",
  translationOf: "afr-tailoring-fashion-business",
  category: "Africa: Life and Work",
  name: "Kuendesha Biashara ya Ushonaji na Mitindo",
  skills: "Kuweka karakana salama, Kupima vipimo na kujaza kadi ya oda, Kukokotoa gharama na bei ya vazi, Kupanga oda na tarehe za kukabidhi, Kuweka kumbukumbu za pesa kwa usalama, Kuonyesha kazi yako kwa wateja",
  outcome: "kuendesha kazi yako ya ushonaji kama biashara: kuweka karakana salama, kupokea oda kwenye kadi ya oda iliyo wazi, kuweka bei ya kila vazi inayolipa, kupanga wiki yako ili ukabidhi kwa wakati, kuweka kumbukumbu za pesa, na kuonyesha kazi yako kwa wateja wapya.",
  about: [
    "Mafundi cherehani wengi hushona vizuri sana lakini bado wanahangaika: bei isiyolipia bitana na uzi, mteja asiyerudi kuchukua nguo yake, oda tatu za harusi zinazotakiwa Jumamosi moja, malipo ya awali ambayo hakuna aliyeyaandika. Kozi hii ni kwa mafundi cherehani, washonaji, wabunifu wa mitindo na wanafunzi wa ufundi mijini na vijijini Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire, Cameroon, Morocco na kote Afrika.",
    "Utaifanya karakana yako kuwa salama zaidi, utatumia kadi ya oda kwa kila kazi, utakokotoa gharama halisi ya vazi na bei ya kutoza, utapanga wiki yako kulingana na saa zako, utaweka daftari rahisi la pesa, utalinda pesa za simu dhidi ya ulaghai, utajua jinsi ya kusajili jina la biashara yako, na utaonyesha kazi yako kwenye WhatsApp au dukani kwako.",
    "Kozi hii inahusu kuendesha biashara, si mbinu za kushona. Kila somo linachukua kama dakika tano na linaishia na kazi ya \"Jaribu sasa\" kwa karakana yako mwenyewe. Kiasi chote cha pesa ni mifano tu, si bei halisi."
  ],
  finalTask: "Tengeneza kifurushi cha kuanzia biashara yako ya ushonaji: orodha ya bei ya angalau mavazi matano unayoshona, kila moja na gharama yake imekokotolewa; kadi tupu ya oda utakayotumia kwa kila kazi; mpango wa wiki moja yenye kazi nyingi unaoendana na saa zako halisi; ukurasa wa daftari la pesa wenye malipo ya awali na matumizi; na tangazo moja au bidhaa moja ya katalogi inayoonyesha vazi lililokamilika, pamoja na bei yake na jinsi ya kuagiza.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Mafundi cherehani, washonaji, wabunifu wa mitindo, wanafunzi wa ufundi na vijana wanaomaliza mafunzo ya ufundi, mijini na vijijini kote Afrika. Wengi wanafanya kazi peke yao au na msaidizi mmoja au wawili, katika duka dogo, kibanda cha sokoni au nyumbani.",
    startingPoint: "Wanaweza kushona na kumalizia mavazi, na tayari wanapokea oda kadhaa kutoka kwa familia, majirani na waumini wa kanisa au msikiti. Wengi huweka bei kwa mazoea au kwa kufuata wengine wanavyotoza, huandika vipimo kwenye vipande vya karatasi na huweka hesabu ya pesa kichwani au mfukoni.",
    gap: "Bila kukokotoa gharama, kadi za oda, mpango wa wiki na kumbukumbu za pesa, mafundi hupoteza pesa kwa kazi yenye bei ya chini, hukosa tarehe za kukabidhi katika misimu ya kazi nyingi, hubishana na wateja kuhusu kilichokubaliwa na hawawezi kumwonyesha mkopeshaji au mteja mkubwa jinsi biashara inavyoendelea. Zana hizi rahisi hugeuza ujuzi wa kushona kuwa kipato cha kudumu.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; wanafunzi wengi wanatumia lugha hii kama lugha ya pili",
      "Vifaa: simu ya kawaida au simu janja, mara nyingi na data ya gharama kubwa; daftari, kalamu na kikokotoo",
      "Pesa: bajeti ndogo; hakuna programu wala vifaa vya gharama vinavyohitajika",
      "Sheria: masharti na ada za kusajili biashara zinatofautiana kwa nchi na hubadilika; wanafunzi wanakagua na msajili wa nchi yao",
      "Muda: masomo ya dakika 4 hadi 6 yanayoingia kati ya wateja"
    ],
    prerequisites: "Anaweza kushona angalau aina moja ya vazi kutoka mwanzo hadi mwisho. Kujumlisha, kuzidisha na kugawanya kwa msingi."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa sehemu yako ya kushonea, cherehani na zana zako", action: "kukagua karakana ya ushonaji kwa hatari za sindano, mikasi, pasi, umeme na moto, na kuzirekebisha", standard: "ukipata na kurekebisha angalau hatari tatu" },
    { id: "O2", condition: "Ukipewa mteja anayetaka kushonewa vazi", action: "kupima vipimo vya mteja na kujaza kadi ya oda yenye mtindo, kitambaa, bei, malipo ya awali na tarehe ya kukabidhi", standard: "kila sehemu ikiwa imejazwa na kusomwa kwa mteja" },
    { id: "O3", condition: "Ukipewa vifaa, muda na gharama za uendeshaji za vazi moja", action: "kukokotoa gharama kamili ya vazi na kuweka bei inayoilipia pamoja na faida", standard: "ukihesabu vifaa, muda wako na gharama za uendeshaji, na kulinganisha na soko la eneo lako" },
    { id: "O4", condition: "Ukipewa oda zako zilizo wazi na saa unazoweza kufanya kazi", action: "kupanga wiki ya oda zenye tarehe za kukabidhi zinazowezekana", standard: "bila kuchukua kazi zaidi ya saa zako, na muda ukiwa umewekwa kwa vipimo vya kujaribu nguo na misimu ya kazi nyingi" },
    { id: "O5", condition: "Ukipewa wiki moja ya malipo ya awali, malipo na matumizi", action: "kuandika pesa zinazoingia na zinazotoka katika daftari la pesa na kutambua ulaghai wa pesa za simu", standard: "salio likiwa sahihi na bila kumpa mtu yeyote PIN" },
    { id: "O6", condition: "Ukipewa vazi lililokamilika na simu", action: "kutengeneza tangazo au bidhaa ya katalogi inayoonyesha vazi, bei yake na jinsi ya kuagiza", standard: "ikiwa na picha iliyo wazi na bila kuonyesha taarifa binafsi za mteja bila ruhusa" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupokea oda zinazolipa",
      lessons: [
        {
          title: "Karakana salama na nadhifu",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kagua karakana yako kwa hatari za usalama na urekebishe angalau tatu.",
          text: [
            "Mikono, macho na mgongo wako ndio biashara yako. Jeraha linaweza kusimamisha kazi yako kwa wiki kadhaa, na moto unaweza kuunguza kitambaa cha kila mteja. Mazoea machache yanakulinda wewe na wanafunzi wako wa ufundi.",
            "Zana zenye ncha kali: weka vidole mbali na sindano na tumia kibonyezo (presser foot); usishone kamwe juu ya pini; weka mikasi, viwembe na vifumuo mahali pamoja, ncha zikielekea chini; weka sindano na pini kwenye mto wa pini au kopo, kamwe si mdomoni. Tupa sindano zilizovunjika ndani ya kopo lililofungwa, si sakafuni ambapo watoto na wateja wanapita.",
            "Joto na umeme: usiache kamwe pasi ya moto au pasi ya mkaa peke yake, na isimamishe mahali isipoweza kuanguka; weka kitambaa na karatasi mbali nayo. Kagua nyaya za cherehani na pasi kama zina mipasuko au plagi zilizolegea. Usiweke plagi nyingi kwenye soketi moja. Chomoa cherehani na pasi unapofunga. Weka ndoo ya mchanga au maji, au kizima moto ukiweza, karibu na mlango.",
            "Mwili wako: kaa mgongo ukiwa umeegemezwa na meza ikiwa usawa wa kiwiko, tumia mwanga mzuri, na simama ujinyooshe kila saa. Acha njia za kupita wazi bila mikunjo ya vitambaa wala nyaya ili mtu yeyote asijikwae."
          ],
          steps: ["Tembea polepole kuzunguka karakana yako.", "Tafuta zana zenye ncha kali, pasi za moto, nyaya zilizoharibika, soketi zilizojaa plagi, vitu vya kujikwaa na mwanga hafifu.", "Andika kila hatari unayoiona.", "Rekebisha tatu leo, kwa mfano kopo la pini, kisimamo salama cha pasi na njia zilizo wazi.", "Wafundishe wanafunzi wako wa ufundi sheria hizo hizo."],
          words: [["Kibonyezo (presser foot)", "sehemu ya cherehani inayoshikilia kitambaa kikiwa bapa chini ya sindano."], ["Soketi iliyojaa kupita kiasi", "plagi nyingi mno kwenye sehemu moja ya umeme; inaweza kupata joto na kuanzisha moto."], ["Mwanafunzi wa ufundi", "kijana anayejifunza kazi kwa kufanya kazi pamoja nawe."]],
          slides: [
            { title: "Mwili wako ndio biashara yako", bullets: ["Jeraha linaweza kusimamisha kazi kwa wiki kadhaa", "Moto unaweza kuunguza kitambaa cha kila mteja", "Mazoea rahisi yanakulinda"] },
            { title: "Zana zenye ncha kali", bullets: ["Vidole mbali na sindano; usishone juu ya pini", "Mikasi na viwembe mahali pamoja, ncha chini", "Pini kwenye mto au kopo, kamwe si mdomoni"] },
            { title: "Joto na umeme", bullets: ["Usiache pasi ya moto au ya mkaa peke yake", "Kagua nyaya; usijaze soketi moja kwa plagi", "Chomoa unapofunga; mchanga, maji au kizima moto mlangoni"] },
            { title: "Mwili wako na eneo lako", bullets: ["Mgongo umeegemezwa, mwanga mzuri", "Simama ujinyooshe kila saa", "Njia wazi: hakuna vitambaa wala nyaya chini"] }
          ],
          tryIt: "Tembea kuzunguka karakana yako sasa. Andika kila hatari ya usalama unayoiona. Rekebisha tatu kati yake leo na uziwekee alama ya vema kwenye orodha yako.",
          youCanNow: "kukagua karakana yako kwa hatari za zana zenye ncha kali, joto, umeme na kujikwaa, na kuzirekebisha.",
          quickCheck: [
            { objective: "O1", q: "Unapaswa kuweka pini wapi unapofanya kazi?", options: ["Kwenye mto wa pini au kopo", "Mdomoni, ili uzipate haraka", "Sakafuni kando ya kiti chako", "Ndani ya mkunjo wa kitambaa"], answer: 0, why: "Mto au kopo huweka pini mbali na mdomo wako, sakafu na kitambaa cha mteja." },
            { objective: "O1", q: "Plagi tano ziko kwenye soketi moja na inahisi joto. Unafanya nini?", options: ["Endelea; ni kawaida", "Chomoa baadhi na uzisambaze au tumia kiendelezi salama", "Imwagie maji ipoe", "Ifunike kwa kitambaa"], answer: 1, why: "Soketi yenye joto na plagi nyingi inaweza kuanzisha moto; punguza mzigo na usitumie maji karibu na umeme kamwe." }
          ]
        },
        {
          title: "Vipimo na kadi ya oda",
          objectives: ["O2"],
          minutes: 5,
          goal: "Pima vipimo vya mteja na ujaze kadi kamili ya oda.",
          text: [
            "Mabishano mengi na wateja huanza kwa sababu hakuna kilichoandikwa. \"Nilisema mikono mirefu.\" \"Ulisema Ijumaa.\" \"Nilikulipa nusu.\" Kadi ya oda inazuia hili. Ni ukurasa mmoja au kadi moja kwa kila kazi, pamoja na nakala au picha kwa mteja.",
            "Kadi ya oda inaonyesha: jina la mteja na namba yake ya simu; tarehe; mtindo (mchoro au picha ya mtindo anaoutaka); vipimo; kitambaa (nani analeta, yadi au mita ngapi, kipande kidogo kimebanwa kwa stepla); bei, malipo ya awali yaliyolipwa na salio; tarehe ya kujaribu nguo na tarehe ya kukabidhi; na sahihi yako na yake.",
            "Pima vipimo kwa njia ile ile kila wakati, kwa mpangilio ule ule, kwa utepe mzuri wa kupimia. Andika kipimo (cm au inchi). Msomee mteja vipimo na maelezo kabla hajaondoka. Kwa oda ya aso ebi Lagos, kaba na slit Kumasi au boubou Dakar kwa ajili ya Tabaski, kadi ni ile ile: mteja na wewe nyote mnajua hasa kilichokubaliwa."
          ],
          steps: ["Andika jina la mteja, namba yake ya simu na tarehe.", "Chora mtindo au ambatisha picha.", "Pima kwa mpangilio wako wa kawaida na uandike kipimo (cm au inchi).", "Andika maelezo ya kitambaa na ubane kipande kidogo kwa stepla.", "Andika bei, malipo ya awali, salio, tarehe ya kujaribu na tarehe ya kukabidhi.", "Msomee yote, nyote msaini, na umpe mteja nakala au umruhusu apige picha."],
          words: [["Kadi ya oda", "kumbukumbu iliyoandikwa ya kazi moja: nini, kwa ajili ya nani, kiasi gani na lini."], ["Malipo ya awali", "pesa inayolipwa kabla hujaanza kazi."], ["Salio", "pesa inayobaki kudaiwa baada ya malipo ya awali."]],
          slides: [
            { title: "Kwa nini uandike", bullets: ["\"Nilisema mikono mirefu.\" \"Ulisema Ijumaa.\"", "Kadi inamaliza ubishi", "Kadi moja kwa kila kazi; nakala kwa mteja"] },
            { title: "Kadi inaonyesha nini", bullets: ["Jina, simu, tarehe; mchoro au picha ya mtindo", "Vipimo pamoja na kipimo (cm au inchi)", "Maelezo ya kitambaa na kipande kidogo"] },
            { title: "Pesa na tarehe", bullets: ["Bei, malipo ya awali, salio", "Tarehe ya kujaribu na tarehe ya kukabidhi", "Nyote msaini"] },
            { title: "Kabla mteja hajaondoka", bullets: ["Msomee kila maelezo", "Rekebisha kosa lolote sasa", "Mteja anabaki na nakala au picha"] }
          ],
          tryIt: "Chora kadi yako ya oda kwenye ukurasa mmoja yenye kila sehemu ya somo hili. Ijaze kwa ajili ya rafiki au mwanafamilia kana kwamba ameagiza vazi, kisha umsomee.",
          youCanNow: "kupima vipimo kwa njia ile ile kila wakati na kujaza kadi ya oda ambayo wewe na mteja mnakubaliana nayo.",
          quickCheck: [
            { objective: "O2", q: "Mteja anasema, \"Hukuwahi kuniambia Ijumaa.\" Nini kingezuia hili?", options: ["Bango kubwa zaidi la duka", "Kushona haraka zaidi", "Kadi ya oda yenye tarehe ya kukabidhi ambayo nyote mlisaini", "Kutoza bei ndogo"], answer: 2, why: "Kadi iliyosainiwa yenye tarehe ya kukabidhi inaonyesha kilichokubaliwa." },
            { objective: "O2", q: "Umemaliza kupima. Unafanya nini kabla mteja hajaondoka?", options: ["Tupa kipande cha karatasi", "Omba bei kamili tu", "Anza kukata mara moja", "Msomee kila maelezo na umpe nakala au picha ya kadi"], answer: 3, why: "Kusoma tena kunakamata makosa, na nakala inamaanisha nyote mna kumbukumbu ile ile." }
          ]
        },
        {
          title: "Kukokotoa gharama na bei ya vazi",
          objectives: ["O3"],
          minutes: 6,
          goal: "Kokotoa gharama kamili ya vazi moja na uweke bei inayoleta faida.",
          text: [
            "Mafundi wengi huiga bei ya duka la jirani. Lakini kama gharama zako ni kubwa zaidi, huenda unafanya kazi bure. Kokotoa gharama yako kwanza, kisha uamue bei.",
            "Vifaa: kila kitu kinachoingia kwenye vazi ukikinunua, kama bitana, kitambaa cha kuimarisha (interfacing), uzi, zipu, vifungo, uzi wa kudarizi na vifungashio. Mteja akileta kitambaa, usihesabu kitambaa, lakini hesabu kila kitu kingine.",
            "Muda wako: saa ngapi vazi linachukua (kukata, kushona, kujaribu, kumalizia) mara kiasi unachotaka kupata kwa saa. Gharama za uendeshaji: kodi ya pango, umeme au mafuta ya jenereta, matengenezo ya cherehani, sindano, data ya simu, sehemu kwa kila vazi. Njia rahisi: jumlisha gharama za uendeshaji za mwezi mmoja na ugawanye kwa idadi ya mavazi unayoshona kwa mwezi.",
            "Mfano (kiasi ni mifano tu): gauni la mwanamke nchini Kenya. Vifaa KES 450, muda saa 4 kwa KES 200 = KES 800, gharama za uendeshaji KES 250. Gharama = KES 1,500. Ongeza faida, kwa mfano 30%, ambayo ni KES 450. Bei = KES 1,950. Kisha linganisha na soko. Kama bei ya soko iko chini sana, tafuta njia nafuu zaidi au mtindo rahisi zaidi. Usishushe tu bei yako chini ya gharama."
          ],
          steps: ["Orodhesha na ujumlishe vifaa vya vazi moja.", "Zidisha saa kwa kiasi unachotaka kupata kwa saa.", "Ongeza sehemu ya gharama za uendeshaji za mwezi mmoja.", "Jumlisha hivyo vitatu: hiyo ndiyo gharama yako.", "Ongeza faida ili upate bei yako.", "Linganisha na soko na ubadilishe mtindo au njia, si faida tu."],
          words: [["Gharama", "pesa na muda wote unaohitajika kushona vazi moja."], ["Gharama za uendeshaji", "pesa unayotumia kuweka karakana wazi, kama kodi ya pango na umeme."], ["Faida", "kinachobaki kwako na kwa biashara baada ya kulipa gharama zote."], ["Kiwango cha faida", "faida unayoongeza juu ya gharama."]],
          slides: [
            { title: "Gharama kwanza, bei baadaye", bullets: ["Kuiga duka la jirani kunaweza kumaanisha kufanya kazi bure", "Ijue gharama yako mwenyewe"] },
            { title: "Sehemu tatu za gharama", bullets: ["Vifaa: bitana, uzi, zipu, vifungo, vifungashio", "Muda wako: saa x unachotaka kwa saa", "Gharama za uendeshaji: pango, umeme, matengenezo, data"] },
            { title: "Mfano (KES, mfano tu)", bullets: ["Vifaa 450 + muda 800 + uendeshaji 250 = 1,500", "Ongeza faida ya 30%: 450", "Bei: KES 1,950"] },
            { title: "Kama soko liko chini", bullets: ["Mtindo rahisi zaidi au njia nafuu zaidi", "Tafuta wateja wanaothamini ubora wako", "Usiweke bei chini ya gharama kamwe"] }
          ],
          tryIt: "Chagua vazi unaloshona mara nyingi zaidi. Kokotoa vifaa vyake, muda wako na sehemu yake ya gharama za uendeshaji. Ongeza faida na uandike bei. Ilinganishe na unachotoza sasa.",
          youCanNow: "kukokotoa gharama halisi ya vazi moja na kuweka bei inayokulipa wewe na biashara.",
          quickCheck: [
            { objective: "O3", q: "Mteja analeta kitambaa chake mwenyewe. Bado unahesabu nini katika vifaa?", options: ["Hakuna kitu kabisa", "Bitana, uzi, zipu na vifungo unavyonunua", "Kitambaa tu", "Nauli ya mteja"], answer: 1, why: "Ukinunua bitana, uzi, zipu na vifungo, ni gharama zako hata kama kitambaa si chako." },
            { objective: "O3", q: "Vifaa GHS 60, muda GHS 90, gharama za uendeshaji GHS 30. Gharama kabla ya faida ni ngapi? (Kiasi cha mfano.)", options: ["GHS 150", "GHS 120", "GHS 180", "GHS 90"], answer: 2, why: "60 + 90 + 30 = 180; faida inaongezwa juu ya hii." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupokea oda zinazolipa",
        questions: [
          { objective: "O1", q: "Mwanafunzi wako wa ufundi anaacha pasi ya mkaa imesimama juu ya rundo la vitambaa huku akijibu simu. Unamfundisha nini?", options: ["Pasi ziko salama juu ya kitambaa", "Igeuze pasi ilale kifudifudi mezani", "Usiache kamwe pasi ya moto peke yake, na isimamishe mahali isipoweza kuanguka, mbali na kitambaa", "Jibu simu haraka zaidi"], answer: 2, why: "Pasi ya moto ikiachwa juu au karibu na kitambaa inaweza kuanzisha moto kwa sekunde chache." },
          { objective: "O2", q: "Kipi kati ya hivi kinafaa kuwa kwenye kadi ya oda?", options: ["PIN ya mteja", "Tarehe ya kukabidhi, bei, malipo ya awali na salio", "Bei za jirani yako", "Namba ya kitambulisho cha mteja"], answer: 1, why: "Kadi inaandika kazi, pesa na tarehe; namba za binafsi haziwekwi juu yake." },
          { objective: "O2", q: "Kwa nini ubane kipande kidogo cha kitambaa kwenye kadi?", options: ["Ili ulinganishe kitambaa sahihi na oda sahihi", "Kitumike kama mto wa pini", "Kwa sababu sheria inataka", "Ili utoze zaidi"], answer: 0, why: "Kipande kinazuia mchanganyiko wakati vitambaa vya wateja wengi viko dukani." },
          { objective: "O3", q: "Jirani yako anatoza NGN 8,000 kwa mtindo unaokugharimu NGN 9,000 kuushona. Unafanya nini? (Kiasi cha mfano.)", options: ["Toza NGN 7,500 upate wateja", "Toza NGN 8,000 na upoteze NGN 1,000 kila mara", "Acha kushona mtindo huo milele", "Tafuta njia nafuu zaidi au mtindo rahisi zaidi, na uweke bei juu ya gharama yako"], answer: 3, why: "Kuweka bei chini ya gharama kunapoteza pesa kwa kila vazi; badilisha njia au mtindo badala yake." },
          { objective: "O3", q: "Unawezaje kukokotoa sehemu ya kila vazi katika kodi ya pango na umeme?", options: ["Kisia namba", "Jumlisha gharama za uendeshaji za mwezi na ugawanye kwa mavazi unayoshona kwa mwezi", "Mwombe mteja alipe kodi ya pango", "Iache; ni ndogo"], answer: 1, why: "Kugawanya gharama za uendeshaji za mwezi kwa mavazi ya mwezi kunatoa sehemu ya haki kwa kila moja." }
        ]
      }
    },
    {
      name: "Sura 2: Kuendesha biashara",
      lessons: [
        {
          title: "Kupanga wiki yako na tarehe zako za kukabidhi",
          objectives: ["O4"],
          minutes: 5,
          goal: "Panga wiki ya oda ili kila tarehe ya kukabidhi iendane na saa zako halisi.",
          text: [
            "Nyakati zenye kazi nyingi zaidi, kama Krismasi, Idi, Tabaski, Pasaka, kufunguliwa kwa shule na msimu wa harusi, ndipo mafundi hupoteza wateja kwa kuahidi mengi mno. Mpango rahisi wa wiki unakusaidia kukubali tu kile unachoweza kumaliza.",
            "Kwanza, hesabu saa zako halisi za kushona kwa wiki, bila kuhesabu muda wa wateja, kununua vifaa, kukatika kwa umeme na kupumzika. Kisha, andika saa ngapi kila oda iliyo wazi inahitaji (kutoka kwenye ukokotoaji wako wa gharama). Kisha weka kila oda kwenye siku, ile yenye tarehe ya kukabidhi ya mapema zaidi kwanza, na kujaribu nguo kabla ya kumalizia. Acha kama saa moja kati ya kila tano wazi kwa ajili ya mambo yasiyotarajiwa kama kukatika kwa umeme au cherehani kuharibika.",
            "Wiki ikijaa, imejaa. Toa tarehe inayofuata iliyo wazi, omba malipo ya awali ili kushikilia nafasi, au kataa kwa adabu. Katika msimu wenye kazi nyingi, weka siku ya mwisho ya oda mpya, kwa mfano wiki mbili kabla ya Tabaski Dakar au kabla ya Krismasi Accra, na uwaambie wateja mapema kupitia status yako na dukani."
          ],
          steps: ["Hesabu saa zako halisi za kushona wiki hii.", "Orodhesha oda zilizo wazi pamoja na saa kila moja inazohitaji na tarehe ya kukabidhi.", "Weka oda kwenye siku, tarehe ya kukabidhi ya mapema kwanza, kujaribu nguo kabla ya kumalizia.", "Acha kama saa moja kati ya kila tano wazi kwa mambo yasiyotarajiwa.", "Wiki ikijaa, toa tarehe inayofuata iliyo wazi au kataa kwa adabu."],
          words: [["Tarehe ya kukabidhi", "siku uliyoahidi kwamba vazi litakuwa tayari."], ["Kujaribu nguo", "mteja anapovaa vazi kujaribu ili uweze kulirekebisha."], ["Siku ya mwisho ya oda", "siku ya mwisho unayopokea oda mpya kabla ya sikukuu yenye kazi nyingi."]],
          slides: [
            { title: "Misimu ya kazi nyingi huvunja ahadi", bullets: ["Krismasi, Idi, Tabaski, Pasaka, harusi, kufunguliwa kwa shule", "Ahidi tu kile saa zako zinaruhusu"] },
            { title: "Panga wiki", bullets: ["Hesabu saa zako halisi za kushona", "Saa zinazohitajika kwa kila oda", "Tarehe ya mapema kwanza; kujaribu kabla ya kumalizia"] },
            { title: "Acha muda wazi", bullets: ["Kama saa moja kati ya kila tano kwa mambo yasiyotarajiwa", "Kukatika kwa umeme, cherehani kuharibika, siku za ugonjwa"] },
            { title: "Wiki ikijaa", bullets: ["Toa tarehe inayofuata iliyo wazi", "Malipo ya awali yanashikilia nafasi", "Tangaza mapema siku ya mwisho ya oda za sikukuu"] }
          ],
          tryIt: "Andika saa zako halisi za kushona kwa wiki ijayo. Orodhesha oda zako zilizo wazi pamoja na saa kila moja inazohitaji na tarehe yake ya kukabidhi. Ziweke kwenye siku. Kuna kitakachochelewa? Amua sasa utamwambia nini mteja huyo.",
          youCanNow: "kupanga wiki ya oda inayoendana na saa zako na kuweka siku ya mwisho ya oda katika msimu wenye kazi nyingi.",
          quickCheck: [
            { objective: "O4", q: "Una saa 30 halisi za kushona wiki hii na oda zinazohitaji saa 40. Unafanya nini?", options: ["Ahidi zote hata hivyo", "Shona usiku kucha kila usiku", "Puuza tarehe za kukabidhi", "Sogeza baadhi ya tarehe na wateja sasa, au usipokee oda mpya"], answer: 3, why: "Kuwaambia wateja mapema na kutochukua zaidi ya saa zako kunalinda ahadi zako na jina lako." },
            { objective: "O4", q: "Kwa nini uache kama saa moja kati ya kila tano wazi katika mpango wako?", options: ["Kwa mambo yasiyotarajiwa kama kukatika kwa umeme au cherehani kuharibika", "Ili uende sokoni", "Kwa sababu wateja wanapenda kusubiri", "Haihitajiki"], answer: 0, why: "Muda ulio wazi unabeba mambo yasiyotarajiwa ili yasichelewesha oda." }
          ]
        },
        {
          title: "Kumbukumbu za pesa, usalama wa pesa za simu na usajili",
          objectives: ["O5"],
          minutes: 6,
          goal: "Andika pesa zinazoingia na zinazotoka kwa wiki moja na utambue ulaghai wa pesa za simu.",
          text: [
            "Tenganisha pesa za biashara na pesa za familia. Daftari rahisi la pesa lina safu nne: tarehe, ilikuwa nini, pesa iliyoingia, pesa iliyotoka. Andika kila malipo ya awali, salio lililolipwa na ununuzi siku hiyo hiyo. Mwisho wa wiki, jumlisha pesa iliyoingia, toa pesa iliyotoka, na ulinganishe jibu na pesa taslimu na pesa za simu ulizo nazo kweli. Côte d'Ivoire au Senegal unaweza kuandika kwa XOF; Cameroon kwa XAF; njia ni ile ile.",
            "Pesa za simu ni za haraka, na walaghai wanajua hilo. Dalili za hatari: ujumbe unaosema pesa zilitumwa kwako \"kwa makosa\" na kukuomba uzirudishe (kagua salio lako halisi kwanza, na umwombe mtoa huduma wako azirudishe, usizitume wewe mwenyewe kamwe); mtu yeyote anayekuomba PIN yako au msimbo uliotumwa kwenye simu yako; simu kutoka kwa \"wakala wa huduma kwa wateja\" kwa namba ya kawaida; oda kubwa ya haraka kutoka kwa mgeni anayetaka ulipe \"ada ya usafirishaji\" kwanza. Mtoa huduma halisi wa pesa za simu hakuombi PIN yako kamwe.",
            "Kusajili jina la biashara yako kunaweza kukusaidia kufungua akaunti ya benki ya biashara, kuomba zabuni za shule na kampuni, na kuonekana makini kwa wateja. Kenya, Business Registration Service inashughulikia hili kupitia eCitizen; Nigeria, Corporate Affairs Commission; Ghana, Office of the Registrar of Companies; Senegal, uliza APIX. Masharti, hatua na ada hubadilika, kwa hiyo kagua tovuti rasmi au ofisi, na jihadhari na mawakala bandia wanaotoa \"usajili wa bure\"."
          ],
          steps: ["Fungua daftari au kumbukumbu ya simu yenye safu nne: tarehe, nini, iliyoingia, iliyotoka.", "Andika kila malipo ya awali, malipo na ununuzi siku hiyo hiyo.", "Mwisho wa wiki: jumla iliyoingia toa jumla iliyotoka.", "Linganisha jibu na pesa taslimu halisi na salio la pesa za simu.", "Usimpe mtu PIN yako kamwe; kagua \"pesa zilizotumwa kimakosa\" na mtoa huduma wako kabla ya kufanya lolote."],
          words: [["Daftari la pesa", "kumbukumbu rahisi ya pesa zinazoingia na zinazotoka."], ["PIN", "namba yako ya siri ya pesa za simu; ni wewe tu unayepaswa kuijua."], ["Kurudisha muamala", "mtoa huduma anaporudisha pesa zilizokwenda kwa mtu asiye sahihi."], ["Usajili wa jina la biashara", "kuweka jina la biashara yako kwenye orodha rasmi ya serikali."]],
          slides: [
            { title: "Daftari rahisi la pesa", bullets: ["Tarehe, nini, iliyoingia, iliyotoka", "Andika siku hiyo hiyo", "Pesa za biashara mbali na pesa za familia"] },
            { title: "Kagua kila wiki", bullets: ["Jumla iliyoingia toa jumla iliyotoka", "Linganisha na pesa taslimu na pesa za simu halisi", "Tafuta pengo ukiwa bado unakumbuka"] },
            { title: "Dalili za ulaghai wa pesa za simu", bullets: ["\"Zimetumwa kwa makosa, tafadhali zirudishe\"", "Mtu yeyote anayeomba PIN yako au msimbo", "\"Huduma kwa wateja\" kwa namba ya kawaida; ada kabla ya oda kubwa", "Mtoa huduma halisi hakuombi PIN yako kamwe"] },
            { title: "Sajili jina la biashara yako", bullets: ["Kenya: BRS kupitia eCitizen; Nigeria: CAC", "Ghana: Registrar of Companies; Senegal: uliza APIX", "Masharti na ada hubadilika: kagua tovuti rasmi"] }
          ],
          sources: [KE_BRS, NG_CAC, GH_ORC],
          tryIt: "Anza daftari lako la pesa leo. Andika kila kiasi cha siku tatu zilizopita unachoweza kukumbuka. Kisha andika msajili rasmi wa nchi yako na jambo moja utakalokagua huko.",
          youCanNow: "kuweka daftari la pesa la kila wiki, kutambua ulaghai wa pesa za simu na kujua ofisi gani inasajili majina ya biashara katika nchi yako.",
          quickCheck: [
            { objective: "O5", q: "Ujumbe unasema KES 5,000 zilitumwa kwako kwa makosa na unakuomba uzirudishe. Unafanya nini kwanza?", options: ["Zirudishe mara moja", "Wape PIN yako ili warekebishe", "Kagua salio lako halisi na uwasiliane na mtoa huduma wako kupitia namba yake rasmi", "Jibu kwa namba yako ya kitambulisho"], answer: 2, why: "Jumbe nyingi za \"pesa zilizotumwa kimakosa\" ni bandia; mtoa huduma ndiye anayeshughulikia urudishaji halisi." },
            { objective: "O5", q: "Mwisho wa wiki daftari lako la pesa linaonyesha pesa nyingi kuliko ulizo nazo kweli. Unafanya nini?", options: ["Lipuuze", "Tafuta malipo au ununuzi uliosahau kuandika", "Chana ukurasa", "Kopa ili hesabu ilingane"], answer: 1, why: "Pengo mara nyingi linamaanisha kitu hakikuandikwa; kitafute ukiwa bado unakumbuka." }
          ]
        },
        {
          title: "Kuonyesha kazi yako na kupata wateja",
          objectives: ["O6"],
          minutes: 5,
          goal: "Tengeneza tangazo au bidhaa ya katalogi inayoonyesha vazi lililokamilika, bei yake na jinsi ya kuagiza.",
          text: [
            "Tangazo lako bora ni kazi yako. Picha iliyo wazi ya vazi lililokamilika, ikishirikiwa kwenye status ya WhatsApp, katalogi ya WhatsApp Business, Facebook, Instagram au TikTok, au ikichapishwa ukutani dukani kwako, inaleta wateja wapya. Mbunifu Casablanca anaweza kuonyesha kaftani, na fundi Kumasi gauni la kente, kwa njia ile ile.",
            "Picha nzuri: mwanga wa mchana, mandhari ya rangi moja, vazi zima, kisha picha moja ya karibu ya urembo au umaliziaji. Kama mteja amelivaa, muulize kwanza kama unaweza kushiriki picha, na usishiriki kamwe jina lake, namba yake ya simu wala vipimo vyake. Baadhi ya wateja watakataa; heshimu hilo.",
            "Kila tangazo linasema ni nini, bei au bei ya \"kuanzia\", linachukua muda gani, na jinsi ya kuagiza (namba yako ya simu au \"nitumie ujumbe\"). Orodha ya bei ukutani au kama picha kwenye simu yako inasaidia pia: mavazi yako makuu matano hadi kumi pamoja na bei zake, kutokana na ukokotoaji wako wa gharama. Punguza gharama za data kwa kushiriki picha moja nzuri badala ya nyingi."
          ],
          steps: ["Chagua vazi moja lililokamilika.", "Piga picha katika mwanga wa mchana kwenye mandhari ya rangi moja, pamoja na picha moja ya karibu.", "Omba ruhusa kama mteja yuko kwenye picha.", "Andika ni nini, bei, muda unaochukua na jinsi ya kuagiza.", "Litangaze, au uliongeze kwenye katalogi yako au orodha ya bei."],
          words: [["Katalogi", "orodha ya bidhaa zako yenye picha na bei, kwa mfano kwenye WhatsApp Business."], ["Orodha ya bei", "orodha ya mavazi yako makuu na bei ya kuagiza kila moja."], ["Ruhusa", "mteja kukubali kabla hujashiriki picha yake."]],
          slides: [
            { title: "Kazi yako ndiyo tangazo lako", bullets: ["Status au katalogi ya WhatsApp, Facebook, Instagram, TikTok", "Au ichapishwe ukutani dukani kwako"] },
            { title: "Picha nzuri", bullets: ["Mwanga wa mchana, mandhari ya rangi moja", "Vazi zima pamoja na picha moja ya karibu", "Mteja yumo? Uliza kwanza"] },
            { title: "Kila tangazo linasema nini", bullets: ["Ni nini", "Bei au bei ya \"kuanzia\"; muda unaochukua", "Jinsi ya kuagiza"] },
            { title: "Linda wateja", bullets: ["Hakuna majina, namba za simu wala vipimo kwenye matangazo", "Wakikataa, usishiriki"] }
          ],
          tryIt: "Piga picha ya vazi moja lililokamilika katika mwanga wa mchana. Andika tangazo lenye ni nini, bei kutoka kwenye ukokotoaji wako wa gharama, muda unaochukua na jinsi ya kuagiza. Lishiriki kwenye status yako au lihifadhi kwa ajili ya katalogi yako.",
          youCanNow: "kuonyesha kazi yako kwa picha iliyo wazi, bei na jinsi ya kuagiza, huku ukilinda faragha ya wateja wako.",
          quickCheck: [
            { objective: "O6", q: "Tangazo kuhusu vazi lako lazima liwe na nini?", options: ["Vipimo vya mteja", "Picha tu, hakuna kingine", "Bei uliyonunulia uzi", "Ni nini, bei, muda unaochukua na jinsi ya kuagiza"], answer: 3, why: "Wateja wanahitaji kujua ni nini, linagharimu kiasi gani, watalipata lini na jinsi ya kuagiza." },
            { objective: "O6", q: "Unataka kushiriki picha ya mteja aliyevaa gauni lako. Unafanya nini?", options: ["Muulize kwanza, na usishiriki jina wala namba ya simu", "Litangaze pamoja na jina lake ili watu wamuulize", "Litangaze; ni mteja wako", "Tangaza vipimo vyake pia"], answer: 0, why: "Picha na taarifa za mteja ni zake; uliza kwanza na uache taarifa binafsi nje." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuendesha biashara",
        questions: [
          { objective: "O4", q: "Tabaski imebaki wiki tatu na wiki yako tayari imejaa. Mteja mpya anataka boubou. Unafanya nini?", options: ["Muahidi kwa Tabaski hata hivyo", "Mpe kwa uaminifu tarehe inayofuata iliyo wazi, au kataa kwa adabu", "Ichukue na umpe msaidizi asiye na mafunzo", "Chukua malipo ya awali na usiseme lolote kuhusu tarehe"], answer: 1, why: "Tarehe za kweli zinalinda jina lako; kuahidi kupita kiasi katika msimu wenye kazi nyingi kunapoteza wateja." },
          { objective: "O4", q: "Katika mpango wako wa wiki, oda ipi inakuja kwanza?", options: ["Ile yenye tarehe ya kukabidhi ya mapema zaidi", "Ile rahisi zaidi", "Ile ya rafiki yako", "Ile inayolipa zaidi"], answer: 0, why: "Tarehe ya mapema zaidi kwanza inafanya kila ahadi itimizwe kwa wakati." },
          { objective: "O5", q: "Mtu anayepiga simu kama \"huduma kwa wateja wa pesa za simu\" anaomba PIN yako ili kurekebisha akaunti yako. Kipi ni kweli?", options: ["Lazima umpe", "Mpe nusu ya PIN tu", "Mpe kama anajua jina lako", "Mtoa huduma halisi hakuombi PIN yako kamwe; kata simu"], answer: 3, why: "Mtu yeyote anayeomba PIN yako ni mlaghai, hata kama anajua jina lako." },
          { objective: "O5", q: "Kwa nini utenganishe pesa za biashara na pesa za familia?", options: ["Ili uone kama biashara inapata faida kweli", "Kwa sababu benki inasema hivyo", "Ili familia isile", "Haijalishi"], answer: 0, why: "Kuzichanganya kunaficha kama biashara inapata au inapoteza pesa." },
          { objective: "O6", q: "Picha ipi inaonyesha kazi yako vizuri zaidi?", options: ["Iliyopigwa usiku kwa flash katika chumba kichafu", "Nusu ya vazi kwenye mandhari ya soko lenye shughuli nyingi", "Mwanga wa mchana, mandhari ya rangi moja, vazi zima pamoja na picha ya karibu", "Picha ya kazi ya mtu mwingine"], answer: 2, why: "Mwanga mzuri, mandhari ya rangi moja na picha ya karibu vinaonyesha ubora wa kazi yako." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kuendesha Biashara ya Ushonaji na Mitindo",
    questions: [
      { objective: "O1", q: "Mahali salama zaidi kwa sindano zilizovunjika ni wapi?", options: ["Sakafuni", "Ndani ya kopo lililofungwa", "Ndani ya mkoba wa mteja", "Mfukoni mwako"], answer: 1, why: "Kopo lililofungwa huweka sindano zilizovunjika mbali na miguu, mikono na watoto." },
      { objective: "O1", q: "Unaona waya wa cherehani wenye mpasuko unaoonyesha nyaya za ndani. Unafanya nini?", options: ["Uzungushie kitambaa na uendelee kushona", "Endelea kuutumia kwa uangalifu", "Uchomoe na urekebishwe au ubadilishwe kabla ya kuutumia", "Mwache mwanafunzi wa ufundi autumie badala yako"], answer: 2, why: "Nyaya zilizoharibika zinaweza kukupiga shoti au kuanzisha moto; simama na urekebishe kwanza." },
      { objective: "O1", q: "Mazoea gani yanalinda mgongo na macho yako?", options: ["Kushona kwenye kona yenye giza", "Kukaa umeinama kwa saa sita", "Kufanya kazi usiku tu", "Mwanga mzuri, mgongo ulioegemezwa na kujinyoosha kila saa"], answer: 3, why: "Mwanga, mkao na mapumziko vinazuia uchovu wa mwili katika siku ndefu za kushona." },
      { objective: "O2", q: "Nini kinaingia kwenye kadi ya oda?", options: ["Mtindo, vipimo, kitambaa, bei, malipo ya awali, salio, tarehe ya kujaribu na tarehe ya kukabidhi", "Jina la mteja tu", "Bei tu", "PIN ya benki ya mteja"], answer: 0, why: "Kadi kamili inaandika makubaliano yote; namba za binafsi haziwekwi juu yake kamwe." },
      { objective: "O2", q: "Kwa nini uandike kipimo (cm au inchi) pamoja na vipimo?", options: ["Kinapendeza", "Ili wewe au msaidizi msikate ukubwa usio sahihi", "Mteja anakiomba", "Hakihitajiki"], answer: 1, why: "Kuchanganya cm na inchi kunaharibu vazi." },
      { objective: "O2", q: "Mteja anasema alilipa zaidi ya kinachoonyeshwa kwenye kadi. Nini kinasaidia zaidi?", options: ["Kupiga kelele", "Kukataa kumaliza gauni", "Kadi iliyosainiwa na maandishi ya daftari lako la pesa ya siku hiyo", "Kumuuliza jirani"], answer: 2, why: "Kumbukumbu zilizoandikwa na kusainiwa zinaonyesha kilicholipwa na lini." },
      { objective: "O2", q: "Kabla mteja wa aso ebi hajaondoka, unafanya nini na kadi ya oda?", options: ["Ifiche", "Itupe baada ya kukata", "Ijaze baadaye kwa kukumbuka", "Msomee, nyote msaini, na umpe nakala au umruhusu apige picha"], answer: 3, why: "Kusoma na kushiriki kadi kunamaanisha nyote mnakubaliana maelezo yale yale." },
      { objective: "O3", q: "Sehemu tatu zipi zinaunda gharama ya vazi?", options: ["Vifaa, muda wako na gharama za uendeshaji", "Kitambaa, faida na usafiri", "Kodi ya pango, simu na chakula", "Vifaa tu"], answer: 0, why: "Vifaa, muda na gharama za uendeshaji pamoja ndizo gharama halisi; faida inaongezwa juu." },
      { objective: "O3", q: "Gharama ni GHS 200 na unaongeza faida ya 25%. Bei ni ngapi? (Kiasi cha mfano.)", options: ["GHS 225", "GHS 250", "GHS 275", "GHS 200"], answer: 1, why: "25% ya 200 ni 50, kwa hiyo bei ni 250." },
      { objective: "O3", q: "Kwa nini uhesabu muda wako mwenyewe katika gharama?", options: ["Haihitajiki kama duka ni lako", "Muda wa wanafunzi wa ufundi tu ndio unahesabiwa", "Saa zako za kazi zina thamani ya pesa; bila hizo unafanya kazi bure", "Wateja wanaomba kuuona"], answer: 2, why: "Kama muda wako haumo kwenye bei, biashara haikulipi." },
      { objective: "O3", q: "Bei yako iko juu ya soko. Hatua nzuri ya kwanza ni ipi?", options: ["Shuka chini ya gharama yako", "Funga biashara", "Iga mitindo ya fundi mwingine", "Angalia mtindo rahisi zaidi au njia nafuu zaidi, au wateja wanaothamini ubora wako"], answer: 3, why: "Badilisha jinsi unavyoshona au unaowauzia kabla ya kukata gharama yako." },
      { objective: "O4", q: "Hatua ya kwanza katika kupanga wiki yako ni ipi?", options: ["Hesabu saa zako halisi za kushona", "Pokea kila oda inayokuja", "Nunua vitambaa zaidi", "Tangaza kwenye mitandao ya kijamii"], answer: 0, why: "Huwezi kupanga oda hadi ujue una saa ngapi kweli." },
      { objective: "O4", q: "Kwa nini uweke siku ya mwisho ya oda kabla ya Krismasi au Idi?", options: ["Kuwaudhi wateja", "Ili upokee tu kile unachoweza kumaliza kwa wakati", "Kupandisha bei", "Ni sheria"], answer: 1, why: "Siku ya mwisho inalinda ahadi zako katika wiki zenye kazi nyingi zaidi." },
      { objective: "O4", q: "Kujaribu nguo kunakaa wapi katika mpango wako?", options: ["Baada ya tarehe ya kukabidhi", "Hakuhitajiki", "Kabla ya kumalizia, pamoja na muda wa kurekebisha", "Saa ile ile ya kukabidhi"], answer: 2, why: "Kujaribu kabla ya kumalizia kunaacha muda wa kufanya mabadiliko kabla ya tarehe ya kukabidhi." },
      { objective: "O5", q: "Ipi ni dalili ya ulaghai wa pesa za simu?", options: ["Salio lako mwenyewe kupanda baada ya mauzo", "Risiti kutoka namba rasmi ya mtoa huduma wako", "Mteja kulipa salio", "Mgeni anayekuomba ulipe \"ada ya usafirishaji\" kabla ya oda kubwa"], answer: 3, why: "Mgeni kuomba ada kwanza ni mtindo wa kawaida wa ulaghai." },
      { objective: "O5", q: "Unapaswa kuandika kwenye daftari lako la pesa mara ngapi?", options: ["Siku ile ile ya kila malipo ya awali, malipo au ununuzi", "Mara moja kwa mwaka", "Pale tu kuna tatizo", "Kamwe; iweke kichwani"], answer: 0, why: "Kuandika siku ile ile kunaweka kumbukumbu sahihi na kamili." },
      { objective: "O5", q: "Unataka kusajili jina la biashara yako Nigeria. Unakagua wapi hatua na ada za sasa?", options: ["Kwa mtu fulani kituo cha basi", "Tovuti rasmi au ofisi ya Corporate Affairs Commission", "Ukurasa wowote wa mitandao ya kijamii", "Kwa wateja wako"], answer: 1, why: "Msajili rasmi anatoa masharti na ada za sasa; mawakala bandia ni wengi." },
      { objective: "O6", q: "Orodha ya bei inapaswa kuonyesha nini?", options: ["Bei za washindani wako", "Majina ya wateja", "Mavazi yako makuu pamoja na bei kutokana na ukokotoaji wako wa gharama", "Daftari lako la pesa"], answer: 2, why: "Orodha ya bei iliyotokana na ukokotoaji wa gharama inawaambia wateja watarajie nini na inalinda faida yako." },
      { objective: "O6", q: "Data ni ghali kwa wateja wako. Unatangazaje?", options: ["Tuma video ishirini kwa siku", "Usitangaze chochote", "Tuma kila picha uliyopiga", "Shiriki picha moja iliyo wazi pamoja na bei na jinsi ya kuagiza"], answer: 3, why: "Picha moja nzuri yenye maelezo wazi inafanya kazi na inaokoa data." },
      { objective: "O6", q: "Nini kisionekane kamwe kwenye tangazo kuhusu vazi la mteja?", options: ["Jina lake, namba yake ya simu au vipimo vyake bila ruhusa", "Jina la mtindo", "Bei", "Jinsi ya kuagiza"], answer: 0, why: "Taarifa binafsi za mteja ni zake; usizishiriki kamwe bila ruhusa." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [1, 3, 7, 9, 11, 14, 17, 19] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Karakana salama", objective: "O1", notYet: "Hakuna hatari za usalama zilizoorodheshwa, au hatari zimeorodheshwa lakini hakuna iliyorekebishwa.", meets: "Angalau hatari tatu zimepatikana na kurekebishwa, kama kopo la pini, kisimamo salama cha pasi na njia zilizo wazi.", exceeds: "Hatari zote zimeorodheshwa na kurekebishwa, na wanafunzi wa ufundi wamefundishwa sheria." },
      { name: "Kadi ya oda", objective: "O2", notYet: "Kadi inakosa bei, malipo ya awali, salio au tarehe ya kukabidhi.", meets: "Kadi ina mtindo, vipimo pamoja na kipimo (cm au inchi), kitambaa, bei, malipo ya awali, salio, tarehe ya kujaribu na ya kukabidhi, na nafasi ya sahihi zote mbili.", exceeds: "Imetumika na mteja halisi, imesomwa kwake na kushirikiwa kama nakala au picha." },
      { name: "Orodha ya bei iliyokokotolewa", objective: "O3", notYet: "Bei zimeigwa au kukisiwa, bila gharama kukokotolewa.", meets: "Angalau mavazi matano, kila moja na vifaa, muda na gharama za uendeshaji zimekokotolewa na bei iko juu ya gharama.", exceeds: "Kila bei pia imelinganishwa na soko la eneo, na maelezo ya kitakachobadilishwa kama iko juu mno." },
      { name: "Mpango wa wiki", objective: "O4", notYet: "Mpango una saa za kazi nyingi kuliko saa zilizopo, au hauna tarehe za kukabidhi.", meets: "Oda zimepangwa kwa tarehe ya kukabidhi ndani ya saa halisi, kujaribu kabla ya kumalizia na muda fulani ukiachwa wazi.", exceeds: "Ina siku ya mwisho ya oda kwa msimu ujao wenye kazi nyingi na jinsi wateja watakavyoambiwa." },
      { name: "Daftari la pesa", objective: "O5", notYet: "Hakuna kumbukumbu, au pesa za biashara na za familia zimechanganywa.", meets: "Wiki moja ya malipo ya awali, malipo na matumizi yenye salio sahihi, na sheria ya PIN imeandikwa.", exceeds: "Salio limelinganishwa na pesa taslimu na pesa za simu halisi, na msajili wa nchi ya mwanafunzi ameandikwa." },
      { name: "Kuonyesha kazi", objective: "O6", notYet: "Hakuna picha, au picha bila bei wala njia ya kuagiza.", meets: "Picha iliyo wazi ya mchana yenye ni nini, bei, muda na jinsi ya kuagiza, bila taarifa binafsi za mteja.", exceeds: "Imeongezwa kwenye katalogi au orodha ya bei, na ruhusa imeandikwa kwa mteja yeyote aliye kwenye picha." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaotumia kadi ya oda kwa kila kazi ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaopandisha au kusahihisha angalau bei moja baada ya kuikokotoa",
      "Oda chache zilizochelewa na mabishano machache na wateja yanayoripotiwa katika msimu ujao wenye kazi nyingi",
      "Wanafunzi wanaosajili jina la biashara au kufungua akaunti ya biashara ndani ya miezi 6"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Daftari, kalamu na kikokotoo (au kikokotoo cha simu)",
      "Utepe wa kupimia na karakana ya mwanafunzi mwenyewe ya kukagua",
      "Simu yenye kamera kwa tangazo la mwisho (simu ya kawaida na picha zilizochapishwa pia zinafaa)",
      "Kama dakika 60 hadi 90 kwa jumla, katika vipindi vifupi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Inafaa sana kwa vyama vya mafundi cherehani, vikundi vya wanawake na vijana, vyuo vya ufundi na programu za mafunzo ya ufundi; fanyeni jaribio la awali pamoja.",
      "Waombe wanafunzi walete bei zao halisi na oda moja halisi; kukokotoa gharama ya vazi lao wenyewe ndipo wengi hugundua kwamba bei zao ziko chini mno.",
      "Tumia sarafu ya eneo lenu na sikukuu (Krismasi, Idi, Tabaski, Pasaka, msimu wa harusi) katika kila mfano.",
      "Usiwaombe wanafunzi kamwe kuonyesha PIN yao, salio au namba za binafsi kwa kikundi; fanyeni mazoezi kwa kiasi cha mfano.",
      "Masharti na ada za usajili hubadilika: kagua tovuti rasmi ya msajili wa kitaifa kabla ya kipindi na ushiriki tu kile inachosema.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
