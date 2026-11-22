"use strict";

// Koach Learn course (Swahili translation of shared/emotional-intelligence.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "emotional-intelligence-sw",
  lang: "sw",
  translationOf: "emotional-intelligence",
  category: "Athletes",
  name: "Akili ya Kihisia",
  skills: "Kutaja hisia zako, Kutambua vichochezi vyako, Kutulia kabla ya kujibu, Kusikiliza kwa huruma, Kushughulikia mzozo kwa kauli za \"Mimi\", Kutoa na kupokea maoni",
  outcome: "kutaja unachohisi, kutulia kabla ya kujibu, kusikiliza ili mtu mwingine ahisi umemwelewa, na kushughulikia mazungumzo magumu kazini, kwenye timu au nyumbani kwa kauli tulivu za \"Mimi\" na ombi lililo wazi.",
  about: [
    "Akili ya kihisia ni ujuzi wa kutambua na kudhibiti hisia zako na kuelewa hisia za watu wengine. Si kuficha hisia wala kuwa mpole kila wakati. Ni kutumia hisia kama taarifa, ili uchague utakachofanya badala ya kujibu kwa haraka.",
    "Ina maana kila mahali: mwanamichezo anayepokea mafunzo makali, meneja anayetoa maoni, mfanyakazi mpya mbele ya mteja mwenye hasira, kiongozi wa kujitolea anayeiweka timu pamoja, mwanajeshi mstaafu anayezoea kazi ya kiraia, mtu anayerudi nyumbani na kujenga upya uaminifu wa familia, kijana katika mabishano ya kikundi cha WhatsApp. Waajiri mara nyingi wanathamini ujuzi huu wa watu kama ujuzi wa kiufundi.",
    "Utafanya mazoezi ya ujuzi sita: kutaja hisia, kutambua vichochezi, kutulia, kusikiliza kwa huruma, kushughulikia mzozo, na kutoa na kupokea maoni. Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Kuna jaribio fupi la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Panga na ufanye mazungumzo moja halisi ambayo umekuwa ukiyaahirisha (na mwenzako wa timu, mfanyakazi mwenzako, mwanafamilia au rafiki). Kabla yake, andika unachohisi na kilichokichochea. Ndani yake, tulia kabla ya kujibu, rudia kwa maneno yako anachosema mwenzako, na tumia kauli moja ya \"Ninahisi ... wakati ... kwa sababu ... Tunaweza ...?\". Baada yake, andika kilichoenda vizuri na jambo moja la kufanya tofauti.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanamichezo na makocha, mameneja na wafanyakazi wapya, viongozi wa kujitolea, wanajeshi wastaafu wanaozoea kazi ya kiraia, watu wanaorudi nyumbani na kujenga upya uaminifu wa familia, na vijana.",
    startingPoint: "Wanahisi hisia kali na wanashughulika na watu wengine kila siku. Wengi wanaeleza hisia kama nzuri, mbaya, salama au hasira tu, wanajibu haraka wanapochochewa, na hawajisikii vizuri kupokea maoni au kufanya mazungumzo magumu.",
    gap: "Waajiri wanathamini ujuzi wa watu kama ujuzi wa kiufundi, na majibu ya haraka yanaharibu timu, kazi na familia. Wanafunzi wanahitaji kutaja na kudhibiti hisia zao, kusikiliza kwa huruma, na kushughulikia mzozo na maoni kwa utulivu, ili wachague watakachofanya badala ya kujibu kwa haraka.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Mazoezi yanatumia hali halisi lakini zinazowezekana; hakuna anayelazimika kusema mambo yake ya siri",
      "Hii si tiba; wanafunzi wenye dhiki inayoendelea wanaelekezwa kwa mshauri au kwa kozi ya afya ya akili na msongo",
      "Muda: masomo ya kama dakika tano na mazoezi mafupi ya kila siku"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Mara tatu katika siku moja", action: "kutaja unachohisi kwa neno sahihi la hisia na dalili ya mwili inayoambatana nayo", standard: "bila kutumia nzuri, mbaya, salama au hasira" },
    { id: "O2", condition: "Ukitazama nyuma majibu yako makali ya hivi karibuni", action: "kutambua vichochezi vyako viwili na kile kila kimoja kinagusa, kama heshima au haki", standard: "ukiwa na jibu ulilopanga na kuandika kwa kila kimoja" },
    { id: "O3", condition: "Katika wakati wa hasira", action: "kutumia kituo cha STOP kuchagua jibu lako", standard: "kabla ya kusema au kutuma ujumbe" },
    { id: "O4", condition: "Mtu anapokueleza tatizo lake", action: "kurudia kwa maneno yako anachohisi na kuuliza swali la wazi", standard: "hadi aseme umemwelewa" },
    { id: "O5", condition: "Ukiwa na tatizo halisi na mtu mwingine", action: "kusema kinachokusumbua kwa kauli tulivu ya \"Mimi\" na ombi lililo wazi", standard: "ukitumia mpangilio wa Ninahisi, wakati, kwa sababu, Tunaweza" },
    { id: "O6", condition: "Unapotoa au kupokea maoni", action: "kutoa maoni mahususi na ya upole na kujibu maoni magumu bila kujitetea", standard: "ukieleza vitendo, si mtu mwenyewe" }
  ],
  chapters: [
    {
      name: "Sura 1: Kujijua na kujidhibiti",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kutaja unachohisi",
          minutes: 5,
          goal: "Taja hisia yako kwa neno sahihi, si \"salama\" au \"nina hasira\" tu.",
          text: [
            "Akili ya kihisia inaanza na kujitambua: kujua unachohisi wakati unakihisi. Wengi wetu tunatumia maneno machache tu, kama nzuri, mbaya, salama au hasira. Lakini \"hasira\" inaweza kuwa aibu, kudharauliwa, wasiwasi au uchovu.",
            "Mara nyingi mwili wako unajua kwanza. Taya zilizokazika, uso wenye joto, ngumi zilizokunjwa, tumbo lililofundo au moyo unaodunda kwa kasi ni dalili. Ukiona moja, jiulize: \"Ninahisi nini sasa hivi?\" na utafute neno sahihi zaidi.",
            "Kutaja hisia waziwazi kunakusaidia kuituliza na kuamua cha kufanya. Mchezaji anayejua \"Nimejikasirikia mimi mwenyewe, si kocha\" anashughulikia mazoezi tofauti na yule anayehisi tu hasira kwa kila mtu."
          ],
          steps: ["Tambua dalili ya mwili: taya zilizokazika, uso wenye joto, tumbo lililofundo.", "Jiulize: ninahisi nini sasa hivi?", "Tafuta neno sahihi zaidi kuliko nzuri, mbaya au hasira.", "Jiambie: \"Ninahisi ...\""],
          words: [["Akili ya kihisia", "ujuzi wa kutambua na kudhibiti hisia zako na kuelewa hisia za watu wengine."], ["Kujitambua", "kujua unachohisi na kwa nini, wakati kinapotokea."]],
          slides: [
            { title: "Akili ya kihisia", bullets: ["Tambua na udhibiti hisia zako", "Elewa hisia za wengine", "Chagua jibu lako badala ya kujibu kwa haraka"] },
            { title: "Mwili wako unajua kwanza", bullets: ["Taya zilizokazika, uso wenye joto, ngumi zilizokunjwa", "Tumbo lililofundo, moyo unaodunda kwa kasi"] },
            { title: "Zaidi ya \"hasira\"", bullets: ["Aibu, kudharauliwa, wasiwasi, uchovu?", "Kuchanganyikiwa, woga, kuvunjika moyo, wivu?", "Neno sahihi linakusaidia kuituliza"] }
          ],
          tryIt: "Mara tatu leo, simama na uandike neno moja sahihi la hisia na dalili ya mwili iliyoambatana nalo (kwa mfano: \"woga - moyo unadunda kabla ya zamu yangu\"). Jaribu kutotumia nzuri, mbaya, salama au hasira.",
          youCanNow: "kutambua dalili za mwili na kutaja hisia yako kwa neno sahihi.",
          quickCheck: [
            { objective: "O1", q: "Ni neno gani sahihi zaidi kwa kujisikia vibaya kabla ya mtihani mkubwa?", options: ["Salama", "Woga", "Sawa", "Vibaya"], answer: 1, why: "\"Woga\" unataja hisia halisi, na hilo linakusaidia kuishughulikia." },
            { objective: "O1", q: "Unahisi kifua kimebana na moyo unadunda haraka kabla ya zamu yako. Ungefanya nini?", options: ["Kupuuza na kutumaini itapita", "Kumwambia kila mtu uko salama", "Kutaja hisia kwa neno sahihi, kama wasiwasi", "Kuacha kwenda zamu yako"], answer: 2, why: "Kutaja hisia kutokana na dalili ya mwili ni hatua ya kwanza ya kuidhibiti." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kutambua vichochezi vyako",
          minutes: 5,
          goal: "Tambua hali mbili zinazoamsha ndani yako majibu makali.",
          text: [
            "Kichochezi ni hali, neno au kitendo kinachoamsha hisia kali haraka: kukatizwa unapoongea, kurekebishwa mbele ya wengine, mtu kuchelewa, sauti fulani, kupoteza mchezo uliokaribiana, kuhisi kupuuzwa.",
            "Mara nyingi vichochezi vinahusiana na mambo muhimu kwako, kama heshima, haki au usalama, au na mambo yaliyokupata zamani. Kwa mtu anayerudi kutoka gerezani, kuongeleshwa kwa dharau kunaweza kuuma sana. Kwa mwanajeshi mstaafu, kelele kubwa ya ghafla inaweza. Hiyo ni hali ya kibinadamu, si kasoro.",
            "Ukijua vichochezi vyako, vinapoteza nguvu kidogo. Unaweza kupanga mapema: \"Meneja wangu akinirekebisha mbele ya timu, nitavuta pumzi, nitasema 'nimeelewa', na nitaomba tuongee baadaye.\""
          ],
          steps: ["Fikiria mara mbili za mwisho ulipojibu kwa ukali.", "Andika kilichotokea kabla tu ya hapo.", "Andika kiligusa nini: heshima, haki, usalama, kusikilizwa?", "Andika mpango wa wakati ujao."],
          words: [["Kichochezi", "hali au kitendo kinachoamsha hisia kali haraka."], ["Mtindo", "jambo linalotokea tena na tena kwa namna inayofanana."]],
          slides: [
            { title: "Kichochezi ni nini", bullets: ["Kinaamsha hisia kali haraka", "Kukatizwa, kurekebishwa hadharani, kupuuzwa", "Wenzako wanaochelewa, sauti fulani"] },
            { title: "Kwa nini vichochezi vinauma", bullets: ["Vinagusa heshima, haki au usalama", "Au mambo yaliyokupata zamani", "Hiyo ni ya kibinadamu, si kasoro"] },
            { title: "Panga mapema", bullets: ["Jua vichochezi vyako vikuu", "Amua jibu lako mapema", "\"Vuta pumzi, sema 'nimeelewa', ongea baadaye\""] }
          ],
          tryIt: "Andika vichochezi vyako viwili vikuu. Kwa kila kimoja, andika kinagusa nini (heshima, haki, usalama, kusikilizwa) na sentensi moja kuhusu jinsi utakavyojibu wakati ujao.",
          youCanNow: "kutaja vichochezi vyako, kuona vinagusa nini, na kupanga jibu bora mapema.",
          quickCheck: [
            { objective: "O2", q: "Mara nyingi vichochezi vinahusiana na nini?", options: ["Mambo muhimu kwako, kama heshima au haki", "Hali ya hewa", "Bahati tu", "Njaa peke yake"], answer: 0, why: "Kwa kawaida vichochezi vinagusa jambo unalolijali sana." },
            { objective: "O2", q: "Kuongelewa juu yako kwenye mikutano kunakukasirisha kila wakati. Ungefanya nini?", options: ["Kuacha kwenda mikutanoni", "Kuwaongelea wengine juu yao kwanza", "Kutumaini haitatokea tena", "Kuiandika kama kichochezi na kupanga jinsi utakavyojibu wakati ujao"], answer: 3, why: "Kupanga mapema kunakiondolea kichochezi nguvu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kutulia kabla ya kujibu",
          minutes: 5,
          goal: "Tumia kituo cha STOP kuchagua jibu lako katika wakati wa hasira.",
          text: [
            "Kati ya kinachotokea na unachofanya, kuna nafasi ndogo sana. Kujidhibiti ni kuifanya nafasi hiyo iwe kubwa zaidi. Zana moja rahisi ni STOP (neno la Kiingereza la \"simama\"): S - Stop, simama. T - Take a breath, vuta pumzi. O - Observe, angalia unachohisi na kinachotokea. P - Proceed, endelea kwa kuchagua.",
            "Wakati huo huo, pumzi chache za polepole, kuhesabu hadi kumi, au kusema \"Nipe dakika moja\" kunakupa muda. Kama una hasira mno kuongea vizuri, ni sawa kusema \"Nataka tuongee kuhusu hili, lakini kwanza nahitaji dakika kumi\" kisha urudi. Kurudi ndiyo sehemu muhimu.",
            "Kutulia si sawa na kuzificha hisia ndani. Bado unaishughulikia hisia; unafanya hivyo tu wakati unaweza kufikiri vizuri. Wanamichezo wanaita hili kubaki mtulivu; mchezaji mtulivu anafanya maamuzi bora mwishoni mwa mchezo."
          ],
          steps: ["Stop (simama): usiseme kitu wala usibonyeze kutuma bado.", "Take a breath: vuta pumzi moja ya polepole, au tatu.", "Observe (angalia): ninahisi nini? Kweli kinachotokea ni nini?", "Proceed (endelea): chagua cha kusema au kufanya, au omba mapumziko mafupi kisha urudi."],
          words: [["Kujidhibiti", "kuchagua unachofanya hata unapohisi hisia kali."], ["Utulivu", "kubaki mtulivu na mwenye akili timamu chini ya shinikizo."]],
          slides: [
            { title: "Ifanye nafasi iwe kubwa", bullets: ["Jambo linatokea", "Tulia", "Kisha chagua jibu lako"] },
            { title: "STOP", bullets: ["Stop: simama", "Take a breath: vuta pumzi", "Observe: angalia", "Proceed: endelea kwa kuchagua"] },
            { title: "Unahitaji muda zaidi?", bullets: ["\"Nahitaji dakika kumi, kisha tuongee.\"", "Rudi kwenye jambo hilo kila wakati"] },
            { title: "Kutulia si kuficha hisia", bullets: ["Ishughulikie hisia", "Wakati unaweza kufikiri vizuri"] }
          ],
          tryIt: "Fikiria ujumbe au maneno yaliyokukasirisha hivi karibuni. Pitia STOP kwenye karatasi: ulichohisi, kilichokuwa kinatokea kweli, na ungesema nini sasa. Ikitokea tena kweli, tumia STOP kabla ya kujibu.",
          youCanNow: "kutumia STOP kutulia na kuchagua jibu lako badala ya kujibu kwa haraka.",
          quickCheck: [
            { objective: "O3", q: "Herufi S katika STOP inasimamia nini?", options: ["Stop: simama", "Shout: piga kelele", "Smile: tabasamu", "Sleep: lala"], answer: 0, why: "STOP inaanza kwa kusimama kabla ya kujibu." },
            { objective: "O3", q: "Ujumbe wa matusi unafika na unaanza kuandika jibu la hasira. Ungefanya nini?", options: ["Kulituma haraka kabla hujabadili nia", "Kusimama, kuvuta pumzi na kuamua cha kusema ukishatulia", "Kuwatumia marafiki ujumbe huo", "Kumzuia (block) mtu huyo mara moja"], answer: 1, why: "Kutulia kunakuwezesha kuchagua jibu lako badala ya kujibu kwa haraka." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kujijua na kujidhibiti",
        questions: [
          { objective: "O1", q: "Akili ya kihisia hasa ni:", options: ["Kuficha hisia zako zote", "Kuwa mpole kila wakati", "Kutambua na kudhibiti hisia zako na kuelewa za wengine", "Kuwa na sauti kubwa kuliko wote chumbani"], answer: 2, why: "Ni kutumia hisia kama taarifa ili kuchagua jibu lako." },
          { objective: "O1", q: "Ni neno lipi la hisia lililo sahihi zaidi?", options: ["Vibaya", "Aibu", "Salama", "Sijali"], answer: 1, why: "Neno sahihi kama aibu linakuambia kinachoendelea kweli." },
          { objective: "O2", q: "Kichochezi ni nini?", options: ["Hali inayoamsha hisia kali haraka", "Aina ya mazoezi ya mwili", "Wakati wa utulivu", "Cheo cha kazi"], answer: 0, why: "Vichochezi vinaamsha hisia kali haraka." },
          { objective: "O3", q: "Katika STOP, herufi T inasimamia nini?", options: ["Talk loudly: ongea kwa sauti kubwa", "Text back fast: jibu ujumbe haraka", "Tell everyone: mwambie kila mtu", "Take a breath: vuta pumzi"], answer: 3, why: "Stop, Take a breath, Observe, Proceed: simama, vuta pumzi, angalia, endelea." },
          { objective: "O3", q: "Una hasira mno kuongea vizuri. Hatua nzuri ni ipi?", options: ["Kusema chochote kinachokuja akilini", "Kutoongea naye tena kamwe", "Kuomba dakika kumi kisha kurudi kuongea", "Kuandika kuhusu jambo hilo mtandaoni"], answer: 2, why: "Mapumziko mafupi na kisha kurudi kunakuwezesha kuongea vizuri." }
        ]
      }
    },
    {
      name: "Sura 2: Kuelewa na kufanya kazi na wengine",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kusikiliza kwa huruma",
          minutes: 5,
          goal: "Sikiliza na urudie kwa maneno yako ili mwenzako ahisi umemwelewa.",
          text: [
            "Huruma (empathy) ni kuelewa anachohisi mtu mwingine na kwa nini, hata kama wewe ungehisi tofauti. Huhitaji kukubaliana naye ili umwelewe.",
            "Watu wengi wanasikiliza ili kujibu. Kusikiliza kwa huruma ni kusikiliza ili kuelewa. Weka simu chini, mtazame mtu, na umwache amalize. Kisha rudia: sema ulichosikia na hisia uliyoiona. \"Kwa hiyo umekuwa ukifanya zamu za ziada na hakuna aliyegundua. Inaonekana inakatisha tamaa sana.\"",
            "Kisha uliza swali la wazi: \"Nini kingesaidia?\" au \"Nini kilitokea baadaye?\" Epuka kukimbilia kutoa ushauri, kujilinganisha (\"hilo si kitu, mimi siku moja...\") au kusema \"tulia\". Kocha, mhudumu wa wateja, kiongozi wa kujitolea na mzazi wote wanafika mbali zaidi watu wakihisi wamesikilizwa kwanza."
          ],
          steps: ["Weka kando vitu vinavyovuruga na umtazame mtu.", "Mwache amalize bila kumkatiza.", "Rudia ulichosikia na hisia: \"Inaonekana ...\"", "Uliza swali la wazi: \"Nini kingesaidia?\""],
          words: [["Huruma (empathy)", "kuelewa anachohisi mtu mwingine na kwa nini."], ["Kurudia kwa maneno yako", "kusema tena ulichosikia kwa maneno yako mwenyewe."], ["Swali la wazi", "swali ambalo haliwezi kujibiwa kwa ndiyo au hapana tu."]],
          slides: [
            { title: "Huruma", bullets: ["Elewa anachohisi na kwa nini", "Huhitaji kukubaliana naye"] },
            { title: "Sikiliza ili kuelewa", bullets: ["Simu chini, macho juu", "Mwache amalize", "Rudia: \"Inaonekana hilo lilikukatisha tamaa.\""] },
            { title: "Kisha uliza", bullets: ["\"Nini kingesaidia?\"", "\"Nini kilitokea baadaye?\""] },
            { title: "Epuka", bullets: ["Kukimbilia kutoa ushauri", "\"Hilo si kitu, mimi siku moja...\"", "\"Tulia\""] }
          ],
          tryIt: "Katika mazungumzo yako halisi yajayo, fanya mazoezi ya kurudia mara moja (\"Inaonekana ulihisi ...\") na swali moja la wazi. Baadaye, andika alichosema mwenzako na jinsi alivyoitikia.",
          youCanNow: "kusikiliza ili kuelewa, kurudia alichosema na kuhisi mtu, na kuuliza swali la wazi.",
          quickCheck: [
            { objective: "O4", q: "Kurudia kwa maneno yako kunamaanisha nini?", options: ["Kutoa ushauri mara moja", "Kubadilisha mada iwe hadithi yako", "Kusema kwa maneno yako anachohisi mwenzako na kwa nini", "Kurudia neno lake la mwisho"], answer: 2, why: "Kurudia kunamwonyesha mtu kwamba umemwelewa." },
            { objective: "O4", q: "Mfanyakazi mwenzako anasema, \"Nimechoka kufanya usafi wote peke yangu.\" Ungesema nini kwanza?", options: ["\"Tulia, si jambo kubwa.\"", "\"Mimi nafanya zaidi yako.\"", "\"Unapaswa kumwambia bosi.\"", "\"Inaonekana unahisi kazi haigawanywi kwa haki. Nini kimekuwa kikitokea?\""], answer: 3, why: "Kurudia hisia na kuuliza swali la wazi kunaonyesha huruma." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kushughulikia mzozo kwa kauli za \"Mimi\"",
          minutes: 5,
          goal: "Sema kinachokusumbua kwa kauli tulivu ya \"Mimi\" na ombi lililo wazi.",
          text: [
            "Mzozo ni jambo la kawaida katika timu yoyote, familia yoyote na biashara yoyote. Ukishughulikiwa vizuri, unatatua matatizo. Ukishughulikiwa vibaya, unavunja uaminifu.",
            "Kauli za \"Wewe\" zinasikika kama lawama: \"Wewe huniachia kufunga kila mara.\" Watu wanajitetea na kuacha kusikiliza. Kauli za \"Mimi\" zinaeleza upande wako: \"Ninahisi msongo ninapofunga peke yangu usiku tatu mfululizo, kwa sababu ninakosa basi langu. Tunaweza kupokezana?\"",
            "Mpangilio ni: Ninahisi [hisia] wakati [kitendo mahususi] kwa sababu [kwa nini ni muhimu]. Tunaweza [ombi]? Shikilia jambo moja, eleza vitendo si tabia ya mtu (\"ulichelewa mara mbili\" si \"wewe ni mvivu\"), na usikilize upande wake kwa ujuzi wa somo lililopita. Tafuteni suluhisho mnaloweza kukubali nyote wawili."
          ],
          steps: ["Chagua jambo moja.", "Andika: Ninahisi ... wakati ... kwa sababu ... Tunaweza ...?", "Chagua wakati tulivu na mahali pa faragha.", "Lisema, kisha sikiliza na urudie upande wake.", "Kubalianeni hatua moja inayofuata."],
          words: [["Kauli ya \"Mimi\"", "njia ya kusema jinsi jambo linavyokuathiri bila kumlaumu mwenzako."], ["Mzozo", "kutokubaliana kati ya watu wanaohitaji au wanaotaka vitu tofauti."]],
          slides: [
            { title: "\"Wewe\" au \"Mimi\"", bullets: ["\"Wewe huniachia kufunga kila mara.\" (lawama)", "\"Ninahisi msongo ninapofunga peke yangu...\" (upande wako)"] },
            { title: "Mpangilio", bullets: ["Ninahisi [hisia]", "wakati [kitendo mahususi]", "kwa sababu [kwa nini ni muhimu]", "Tunaweza [ombi]?"] },
            { title: "Iwe ya haki", bullets: ["Jambo moja kwa wakati mmoja", "Eleza vitendo, si tabia ya mtu", "Sikiliza na urudie upande wake"] },
            { title: "Malizia kwa hatua", bullets: ["Tafuteni suluhisho mnaloweza kukubali nyote", "Kubalianeni hatua moja inayofuata"] }
          ],
          tryIt: "Fikiria tatizo halisi na mwenzako wa timu, mfanyakazi mwenzako au mwanafamilia. Liandike kwanza kama kauli ya \"Wewe\", kisha liandike upya kama \"Ninahisi ... wakati ... kwa sababu ... Tunaweza ...?\" Soma zote mbili kwa sauti na uone tofauti.",
          youCanNow: "kugeuza malalamiko kuwa kauli tulivu ya \"Mimi\" yenye ombi lililo wazi, na kufanya kazi kuelekea hatua inayofuata mnayokubaliana.",
          quickCheck: [
            { objective: "O5", q: "Ni sehemu gani ya kauli ya \"Mimi\" iliyo ombi lililo wazi?", options: ["Ninahisi", "Wakati", "Kwa sababu", "Tunaweza"], answer: 3, why: "\"Tunaweza ...?\" inaomba badiliko mahususi." },
            { objective: "O5", q: "Mwanafamilia anaendelea kukagua simu yako. Ungesema nini?", options: ["\"Ninahisi wasiwasi simu yangu inapokaguliwa, kwa sababu ninataka kuaminiana. Tunaweza kuongea kuhusu hilo?\"", "\"Wewe unanipeleleza kila mara.\"", "\"Acha la sivyo utaona.\"", "Kunyamaza na kubaki na uchungu"], answer: 0, why: "Kauli tulivu ya \"Mimi\" inataja hisia yako na kuomba badiliko bila lawama." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kutoa na kupokea maoni",
          minutes: 6,
          goal: "Toa maoni mahususi na ya upole, na upokee maoni bila kujitetea.",
          text: [
            "Maoni yanawasaidia watu kukua. Maoni mazuri ni mahususi, yanahusu vitendo, na yana manufaa. Badala ya \"Kazi nzuri\" au \"Hiyo ilikuwa mbaya\", sema kilichotokea na matokeo yake: \"Muhtasari wako mwanzoni mwa mkutano uliwafanya wote wafuate mada.\" \"Ripoti ilikuwa na jumla tatu zisizo sahihi, kwa hiyo mteja alipiga simu mara mbili. Unaweza kukagua jumla tena kabla ya kutuma?\"",
            "Kupokea maoni ni kugumu zaidi. Hisia yako ya kwanza inaweza kuwa kujitetea. Tumia STOP, sikiliza yote, yarudie kwa maneno yako, na uulize swali: \"Unaweza kunipa mfano?\" Sema asante, hata kama bado hukubaliani. Kisha amua utakachotumia. Wanamichezo wanaopokea mafunzo vizuri wanaboreka haraka zaidi.",
            "Ukikosea, rekebisha. Kuomba msamaha kwa kweli kunataja ulichofanya, matokeo yake na utakachofanya tofauti: \"Nilikujibu kwa ukali kwenye mkutano. Hilo lilikuaibisha. Wakati ujao nitaomba tuongee baadaye.\" Sasa uko tayari kwa kazi yako ya mwisho."
          ],
          steps: ["Kutoa: sema kitendo mahususi na matokeo yake.", "Ongeza ombi lililo wazi au shukrani.", "Kupokea: tulia, sikiliza yote, rudia, omba mfano, sema asante.", "Kurekebisha: taja ulichofanya, matokeo yake na utakachofanya tofauti."],
          words: [["Maoni (feedback)", "taarifa kuhusu jinsi mtu alivyofanya, inayotolewa ili aboreke au aendelee kufanya vizuri."], ["Kujitetea", "kujikinga haraka dhidi ya ukosoaji badala ya kusikiliza."], ["Kurekebisha uhusiano", "kutengeneza uhusiano baada ya kosa, mara nyingi kwa kuomba msamaha kwa kweli."]],
          slides: [
            { title: "Kutoa maoni", bullets: ["Kitendo mahususi + matokeo yake", "\"Muhtasari wako ulitufanya tufuate mada.\"", "Ongeza ombi lililo wazi au shukrani"] },
            { title: "Kupokea maoni", bullets: ["Tulia, sikiliza yote", "Rudia kwa maneno yako na uombe mfano", "Sema asante, kisha amua utakachotumia"] },
            { title: "Rekebisha kwa kuomba msamaha kweli", bullets: ["Nilichofanya", "Matokeo yake", "Nitakachofanya tofauti"] }
          ],
          tryIt: "Kazi ya mwisho: panga na ufanye mazungumzo moja ambayo umekuwa ukiyaahirisha. Kabla yake, andika unachohisi na kilichokichochea. Ndani yake, tulia, rudia anachosema mwenzako, na tumia kauli moja ya \"Ninahisi ... wakati ... kwa sababu ... Tunaweza ...?\". Baada yake, andika kilichoenda vizuri na jambo moja la kufanya tofauti.",
          youCanNow: "kutoa maoni mahususi, kupokea maoni bila kujitetea, kurekebisha kosa, na kushughulikia mazungumzo magumu kwa akili ya kihisia.",
          quickCheck: [
            { objective: "O6", q: "Ni maoni gani yanayohusu vitendo, si mtu?", options: ["\"Wewe ni mzembe.\"", "\"Wewe hujaribu kamwe.\"", "\"Oda mbili zilitoka jana bila lebo.\"", "\"Wewe ndiye mbaya zaidi kwenye timu.\""], answer: 2, why: "Maoni mazuri yanaeleza vitendo mahususi vinavyoweza kubadilika." },
            { objective: "O6", q: "Kocha wako anasema ulinzi wako ulikuwa dhaifu katika mchezo uliopita. Ungefanya nini kwanza?", options: ["Kubishana kwamba kocha amekosea", "Kusikiliza, kurudia kwa maneno yako na kuomba mfano", "Kuacha timu", "Kumlaumu mwenzako wa timu"], answer: 1, why: "Kusikiliza na kuomba mfano kunakusaidia kujifunza badala ya kujitetea." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuelewa na kufanya kazi na wengine",
        questions: [
          { objective: "O4", q: "Huruma (empathy) inamaanisha:", options: ["Kukubaliana na kila kitu", "Kuelewa anachohisi mtu na kwa nini", "Kujihurumia mwenyewe", "Kutoa ushauri haraka"], answer: 1, why: "Unaweza kumwelewa mtu bila kukubaliana naye." },
          { objective: "O4", q: "Mwenzako wa timu anakuambia anahisi ametengwa. Jibu lipi linaonyesha kusikiliza kwa huruma?", options: ["\"Hilo si kitu, mimi nimepitia mabaya zaidi.\"", "\"Tulia.\"", "\"Hiki ndicho unachopaswa kufanya...\"", "\"Inaonekana ulihisi umetengwa. Nini kilitokea?\""], answer: 3, why: "Linarudia hisia yake na kuuliza swali la wazi." },
          { objective: "O5", q: "Ipi ni kauli ya \"Mimi\"?", options: ["\"Ninahisi msongo ninapofunga peke yangu kwa sababu ninakosa basi langu. Tunaweza kupokezana?\"", "\"Wewe husaidii kamwe.\"", "\"Wewe ni mvivu sana.\"", "\"Kila mtu anafikiri umekosea.\""], answer: 0, why: "Inataja hisia yako, kitendo, kwa nini ni muhimu na ombi." },
          { objective: "O6", q: "Maoni yapi yana manufaa zaidi?", options: ["\"Kazi mbaya.\"", "\"Sijali.\"", "\"Ripoti ilikuwa na jumla tatu zisizo sahihi; tafadhali kagua jumla tena kabla ya kutuma.\"", "\"Wewe ni mbaya sana katika hili.\""], answer: 2, why: "Yanataja kitendo mahususi na ombi lililo wazi." },
          { objective: "O6", q: "Kipi ni kuomba msamaha kwa kweli?", options: ["\"Samahani kwa kuwa ulikasirika.\"", "\"Nilikujibu kwa ukali; hilo lilikuaibisha; wakati ujao nitaomba tuongee baadaye.\"", "\"Samahani, lakini wewe ndiye ulianza.\"", "Kunyamaza tu"], answer: 1, why: "Kunataja kitendo, matokeo yake na kitakachobadilika." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Akili ya Kihisia",
    questions: [
      { objective: "O1", q: "Kujitambua kunamaanisha:", options: ["Kujua unachohisi na kwa nini wakati kinapotokea", "Kujifikiria wewe tu", "Kupuuza hisia", "Kujitazama kwenye kioo"], answer: 0, why: "Kujitambua ni kutambua hisia zako wakati huo huo." },
      { objective: "O1", q: "Ipi ni dalili ya mwili ya hisia kali?", options: ["Shati safi", "Taya zilizokazika au moyo unaodunda kwa kasi", "Betri ya simu iliyojaa", "Siku yenye jua"], answer: 1, why: "Mara nyingi mwili wako unaonyesha hisia kabla hujaitaja." },
      { objective: "O1", q: "Kwa nini utaje hisia kwa neno sahihi?", options: ["Ili kushinda mabishano", "Ili usikike mwerevu", "Inakusaidia kuituliza na kuamua cha kufanya", "Inaifanya hisia iwe kali zaidi"], answer: 2, why: "Kutaja hisia kwa usahihi kunakusaidia kuidhibiti." },
      { objective: "O1", q: "\"Hasira\" inaweza kweli kuwa:", options: ["Njaa ya pizza", "Usingizi tu", "Furaha", "Aibu, kudharauliwa au wasiwasi"], answer: 3, why: "Mara nyingi hasira inafunika hisia iliyo sahihi zaidi." },
      { objective: "O2", q: "Mara nyingi vichochezi vinahusiana na:", options: ["Mambo muhimu kwako, kama heshima au haki", "Hali ya hewa tu", "Namba za bahati", "Aina ya simu yako"], answer: 0, why: "Vichochezi vinagusa maadili kama heshima, haki au usalama, au mambo yaliyokupata zamani." },
      { objective: "O2", q: "Kwa nini upange mapema jibu lako kwa kichochezi?", options: ["Ili usihisi kitu chochote kamwe", "Ili uweze kuwalaumu wengine", "Ili kichochezi kiwe na nguvu kidogo na ujibu vizuri zaidi", "Haisaidii"], answer: 2, why: "Mpango uliofanywa ukiwa mtulivu unakuongoza kichochezi kinapotokea." },
      { objective: "O3", q: "Katika STOP, herufi O inasimamia:", options: ["Order: amuru", "Observe: angalia", "Overreact: kupita kiasi", "Open your phone: fungua simu yako"], answer: 1, why: "Stop, Take a breath, Observe, Proceed: simama, vuta pumzi, angalia, endelea." },
      { objective: "O3", q: "Kutulia kabla ya kujibu ni:", options: ["Sawa na kuficha hisia milele", "Ishara ya udhaifu", "Kwa wanamichezo tu", "Kuchagua jibu wakati unaweza kufikiri vizuri"], answer: 3, why: "Bado unaishughulikia hisia, ila kwa wakati bora zaidi." },
      { objective: "O3", q: "Baada ya kuomba mapumziko ya dakika kumi katika mabishano, jambo muhimu ni:", options: ["Kurudi na kuongea", "Kutorudi kamwe", "Kulalamika kwa wengine", "Kubadilisha mada milele"], answer: 0, why: "Mapumziko yanasaidia tu ukirudi kwenye mazungumzo." },
      { objective: "O4", q: "Kusikiliza kwa huruma ni kusikiliza ili:", options: ["Kujibu haraka", "Kutafuta makosa", "Kuelewa", "Kungoja zamu yako"], answer: 2, why: "Kusikiliza ili kuelewa kunamsaidia mtu ahisi amesikilizwa." },
      { objective: "O4", q: "Lipi ni swali la wazi?", options: ["\"Uko sawa?\"", "\"Nini kingesaidia?\"", "\"Umemaliza?\"", "\"Leo ni Jumanne?\""], answer: 1, why: "Maswali ya wazi hayawezi kujibiwa kwa ndiyo au hapana tu." },
      { objective: "O4", q: "Mtu anapokueleza tatizo, ni kipi kwa kawaida uepuke mwanzoni?", options: ["Kumtazama", "Kumwacha amalize", "Kurudia alichosema", "Kusema \"tulia\""], answer: 3, why: "\"Tulia\" inaweza kuwafanya watu wahisi wamepuuzwa." },
      { objective: "O5", q: "Kwa nini kauli za \"Wewe\" mara nyingi hazifanyi kazi?", options: ["Ni fupi mno", "Zina adabu mno", "Zinasikika kama lawama, kwa hiyo watu wanajitetea", "Zina hisia ndani yake"], answer: 2, why: "Lawama zinawafanya watu wajitetee na waache kusikiliza." },
      { objective: "O5", q: "Kamilisha mpangilio: Ninahisi ... wakati ... kwa sababu ...", options: ["Tunaweza ...?", "Wewe kila mara ...", "Kila mtu anajua ...", "Achana nalo."], answer: 0, why: "Mpangilio unamalizika kwa ombi lililo wazi." },
      { objective: "O5", q: "Mazungumzo mazuri ya mzozo yanaeleza:", options: ["Tabia ya mtu (\"wewe ni mvivu\")", "Kila kitu kilichowahi kwenda vibaya", "Uvumi", "Vitendo mahususi (\"ulichelewa mara mbili\")"], answer: 3, why: "Vitendo vinaweza kubadilika; kushambulia tabia ya mtu kunaumiza tu." },
      { objective: "O5", q: "Ni mahali gani pazuri kwa mazungumzo magumu?", options: ["Kikundi cha WhatsApp", "Mahali tulivu na pa faragha", "Mbele ya timu nzima", "Mabishano ya kelele baada ya kushindwa"], answer: 1, why: "Utulivu na faragha vinawasaidia wote wawili kusikiliza." },
      { objective: "O6", q: "Maoni mazuri ni:", options: ["Mahususi, yanahusu vitendo, na yana manufaa", "Yasiyo wazi na ya jumla", "Yanayohusu tabia ya mtu", "Yanayotolewa tu ukiwa na hasira"], answer: 0, why: "Maoni mahususi yanawaambia watu hasa cha kuendeleza au kubadilisha." },
      { objective: "O6", q: "Unapokea maoni magumu kutoka kwa kocha au bosi wako. Jibu zuri la kwanza ni:", options: ["Kubishana mara moja", "Kuondoka", "Kusikiliza, kurudia kwa maneno yako na kuomba mfano", "Kupuuza"], answer: 2, why: "Kusikiliza na kuuliza maswali kunakusaidia kujifunza kutokana nayo." },
      { objective: "O6", q: "Kuomba msamaha kwa kweli kunajumuisha:", options: ["Kisingizio", "Kumlaumu mwenzako", "\"Samahani kwa jinsi unavyojisikia\"", "Ulichofanya, matokeo yake na utakachofanya tofauti"], answer: 3, why: "Sehemu hizo tatu zinarejesha uaminifu." },
      { objective: "O6", q: "Kurekebisha baada ya kosa kunasaidia kwa sababu:", options: ["Kunathibitisha ulikuwa sahihi", "Kunajenga upya uaminifu katika uhusiano", "Kunamaliza mizozo yote ya baadaye", "Kunatakiwa na sheria"], answer: 1, why: "Kurekebisha kunaonyesha heshima na kujenga upya uaminifu." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [1, 3, 4, 7, 10, 13, 16, 17]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Hisia na kichochezi vimetajwa", objective: "O1", notYet: "Alitumia neno lisilo wazi kama mbaya au hasira, au hakuandika kichochezi.", meets: "Aliandika neno sahihi la hisia na kilichokichochea kabla ya mazungumzo.", exceeds: "Pia alitaja kichochezi kinagusa nini, kama heshima au haki." },
      { name: "Alitulia kabla ya kujibu", objective: "O3", notYet: "Alijibu haraka au alipandisha sauti.", meets: "Alitulia angalau mara moja kabla ya kujibu katika wakati mgumu.", exceeds: "Aliomba mapumziko mafupi na akarudi kumaliza mazungumzo." },
      { name: "Alirudia kwa maneno yake", objective: "O4", notYet: "Hakuhakikisha mwenzake alimaanisha nini.", meets: "Alirudia hisia ya mwenzake angalau mara moja.", exceeds: "Mwenzake alisema alihisi ameeleweka." },
      { name: "Kauli ya \"Mimi\"", objective: "O5", notYet: "Alitumia kauli za \"Wewe\" zenye lawama.", meets: "Alitumia kauli moja kamili ya \"Ninahisi ... wakati ... kwa sababu ... Tunaweza ...?\".", exceeds: "Ombi lilileta hatua inayofuata iliyo wazi waliyokubaliana wote wawili." },
      { name: "Tathmini baadaye", objective: "O6", notYet: "Hakuandika tathmini.", meets: "Aliandika kilichoenda vizuri na jambo moja la kufanya tofauti.", exceeds: "Alimwomba mwenzake maoni na akayaandika kwa utulivu." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaoripoti kufanya mazungumzo waliyokuwa wakiyaahirisha ndani ya siku 30 (utafiti wa ufuatiliaji)",
      "Wanafunzi wanaoripoti kutulia kabla ya kujibu katika wakati mgumu",
      "Makocha, mameneja au wafanyakazi wa programu wanaoripoti ushirikiano bora wa timu au milipuko michache ya hasira",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya ujuzi wa watu ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Karatasi au app ya kuandika kwa ajili ya maneno ya hisia, vichochezi na mpango",
      "Orodha ya maneno ya hisia (si lazima)",
      "Kama dakika 60 kwa jumla, pamoja na muda wa mazungumzo halisi"
    ],
    facilitatorNotes: [
      "Fanyeni mazoezi wawili wawili kwa hali za kubuni kwanza; hakuna anayelazimika kusema hadithi zake za siri.",
      "Onyesha wewe mwenyewe kwanza jinsi ya kurudia kwa maneno yako na kutumia kauli za \"Mimi\" kabla ya kuwaomba wanafunzi wajaribu.",
      "Wakumbushe wanafunzi kwamba mazungumzo yanayohusu hatari au unyanyasaji yanahitaji msaada wa nje, si mazungumzo ya ana kwa ana.",
      "Mwanafunzi akionekana kuwa na dhiki inayoendelea, mwelekeze kwa mshauri, kwa kozi ya afya ya akili na msongo, au kwa simu ya dharura ya msaada ya eneo lako.",
      "Pima kazi ya mwisho kwa rubriki na utoe maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
