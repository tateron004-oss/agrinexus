"use strict";

// Koach Learn course (Swahili translation of re-entry/reentry-ai-continuing-education.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "reentry-ai-continuing-education-sw",
  lang: "sw",
  translationOf: "reentry-ai-continuing-education",
  category: "Re-Entry",
  name: "AI na Kuendelea na Masomo",
  skills: "Kuweka lengo la kujifunza linalohusiana na kazi, Kupata programu za bure na za gharama nafuu, Kutumia AI kama mwalimu wa masomo, Kutengeneza mpango wa kusoma, Kukagua programu kabla ya kujiandikisha, Kujiandaa kuomba msaada wa kifedha",
  outcome: "kuchagua lengo la kujifunza linaloelekea kazini, kupata programu halisi (darasa la kulingana na sekondari, cheti au kozi ya chuo) na kuikagua kabla ya kujiandikisha, na kutumia msaidizi wa AI kama mwalimu pamoja na mpango wa kusoma wa kila wiki.",
  about: [
    "Watu wengi wanarudi nyumbani wakiwa tayari kujifunza: kumaliza mtihani wa kulingana na sekondari, kupata cheti cha ufundi, kuanza chuo cha jamii, au kujifunza ujuzi wa kompyuta. Elimu inaweza kufungua milango ya kazi bora.",
    "Utaweka lengo linaloelekea kazini, utapata programu za bure na za gharama nafuu, utakagua programu kabla ya kujiandikisha, utajiandaa kwa msaada wa kifedha, na utatumia msaidizi wa AI wa bure kama ChatGPT, Microsoft Copilot au Google Gemini kama mwalimu mvumilivu.",
    "Kila somo linachukua kama dakika tano. AI ni msaidizi wa kusoma, si njia ya kukufanyia kazi zako za shule; shule zina sheria kuhusu hilo. Usiandike kamwe namba za binafsi au maelezo ya kesi yako ndani ya AI. Kila sura inaishia na jaribio la maarifa, na kozi inaishia na mtihani wa maswali 20."
  ],
  finalTask: "Chagua lengo moja la kujifunza linalohusiana na kazi. Tafuta programu moja halisi kwa lengo hilo na uikague kwa maswali matano (gharama, muda, ratiba, unapata nini mwishoni, na inakusaidiaje kuajiriwa). Kisha muombe msaidizi wa AI mpango wa kusoma wa wiki nne, uutumie kukufundisha na kukujaribu kwenye mada ya kwanza, na uweke vipindi vyako viwili vya kwanza vya kusoma kwenye kalenda yako.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaorudi nyumbani kutoka gerezani (kurudi katika jamii) wanaotaka kuendelea kujifunza: kumaliza mtihani wa kulingana na sekondari, kupata cheti cha ufundi, kuanza chuo cha jamii au kujifunza ujuzi wa kompyuta ili kupata kazi bora.",
    startingPoint: "Wanaweza kutumia simu ya kawaida na baadhi ya apps. Wengi hawajasoma shuleni kwa miaka mingi, hawajui jinsi ya kukagua programu au kuomba msaada wa kifedha, na hawana uzoefu mwingi wa kutumia AI kama msaidizi wa kusoma.",
    gap: "Elimu inaweza kufungua milango ya kazi bora, lakini watu wanaorudi nyumbani wanaweza kupoteza muda na pesa kwenye programu zisizoelekea kazini, au kwenye ulaghai wenye mikopo mikubwa. Wanafunzi wanahitaji kuweka lengo linalohusiana na kazi, kupata na kukagua programu halisi, kusoma na AI kwa uaminifu, na kujiandaa kwa msaada wa kifedha.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 5 hadi 6)",
      "Vifaa: simu janja au kompyuta ya maktaba yenye intaneti",
      "Muda: masomo ya kama dakika 5 yanayoingia kati ya kazi na miadi",
      "Sheria za shule: AI ni msaidizi wa kusoma, si njia ya kufanya kazi za shule",
      "Faragha: usiandike kamwe namba za binafsi, taarifa za kodi au maelezo ya kesi ndani ya AI; fomu za msaada ziwe tu kwenye studentaid.gov"
    ],
    prerequisites: "Kozi \"Utangulizi wa AI na Kujiamini katika Teknolojia\" inasaidia lakini si lazima."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa kazi unayoitaka", action: "kuandika lengo la kujifunza linalohusiana na kazi hiyo", standard: "kwa sentensi moja, na sheria zozote za leseni zikiwa zimekaguliwa na bodi ya jimbo" },
    { id: "O2", condition: "Ukitumia careeronestop.org, maktaba, shule za watu wazima au vyuo vya jamii", action: "kupata angalau programu mbili halisi zinazolingana na lengo lako", standard: "na namba za simu zilizochukuliwa kutoka tovuti zao rasmi" },
    { id: "O3", condition: "Ukipewa programu moja", action: "kuikagua kwa maswali matano kuhusu gharama, muda, ratiba, unachopata mwishoni na jinsi inavyokusaidia kuajiriwa", standard: "kwa majibu kutoka kwa programu yenyewe, na shinikizo lolote la kusaini mkopo mkubwa likichukuliwa kama dalili ya hatari" },
    { id: "O4", condition: "Ukipewa mada kutoka lengo lako", action: "kumwomba msaidizi wa AI aieleze, atoe mfano na akujaribu kwa maswali", standard: "bila AI kukufanyia kazi zako za shule, na ukikagua makosa kwa mwalimu wako au kitabu cha kiada" },
    { id: "O5", condition: "Ukizingatia kazi yako na miadi yako", action: "kutengeneza mpango wa kusoma wa wiki nne kwa msaada wa AI", standard: "wenye vipindi vifupi vya mara kwa mara, na viwili vya kwanza vikiwa kwenye kalenda yako" },
    { id: "O6", condition: "Ukitumia studentaid.gov", action: "kuorodhesha mahali pa kuomba msaada wa serikali kuu kwa wanafunzi na unachohitaji kuandaa", standard: "pamoja na maswali matatu kwa ofisi ya msaada wa kifedha, na taarifa binafsi zikiandikwa tu kwenye studentaid.gov" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuchagua njia yako",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuweka lengo la kujifunza linaloelekea kazini",
          minutes: 5,
          goal: "Chagua lengo la kujifunza linalohusiana na kazi halisi.",
          text: [
            "Kujifunza kuna manufaa zaidi kunapoelekea mahali fulani. Anza na kazi unayoitaka, kisha rudi nyuma hadi ujue unachohitaji kujifunza.",
            "Uliza AI: \"Nataka kufanya kazi ya kuendesha forklift au kuwa kiongozi katika ghala. Watu kwa kawaida hupata mafunzo au vyeti gani kwa kazi hiyo? Vipi ni vifupi na vya gharama nafuu?\" Au: \"Nataka kuwa fundi umeme. Hatua za kawaida ni zipi?\"",
            "Baadhi ya kazi zinahitaji leseni, na baadhi ya sheria za leseni zinaangalia rekodi ya mtu. Uliza bodi ya leseni ya jimbo lako au programu ya kurudi katika jamii kabla ya kuweka muda na pesa. AI inaweza kukupa orodha ya kuanzia, lakini bodi rasmi ndiyo yenye neno la mwisho."
          ],
          steps: ["Taja kazi unayoitaka.", "Uliza AI watu kwa kawaida hupata mafunzo gani kwa kazi hiyo.", "Chagua hatua inayofuata iliyo fupi zaidi na yenye manufaa.", "Ikiwa inahitaji leseni, uliza bodi ya leseni ya jimbo lako.", "Andika lengo lako kwa sentensi moja."],
          words: [["Cheti", "uthibitisho kwamba ulimaliza programu ya mafunzo ya ujuzi fulani."], ["Kulingana na sekondari (high school equivalency)", "mtihani, kama GED, unaoonyesha una ujuzi wa kiwango cha shule ya sekondari."]],
          slides: [
            { title: "Anza na kazi", bullets: ["Kisha rudi nyuma", "Ninahitaji kujifunza nini?"] },
            { title: "Uliza AI", bullets: ["\"Watu hupata mafunzo gani kwa kazi hii?\"", "\"Njia zipi ni fupi na za gharama nafuu?\""] },
            { title: "Kagua leseni", bullets: ["Baadhi ya kazi zinahitaji leseni", "Sheria zinaweza kuangalia rekodi", "Uliza bodi ya jimbo lako au programu ya kurudi katika jamii"] }
          ],
          tryIt: "Andika kazi unayoitaka. Muulize msaidizi wa AI watu kwa kawaida hupata mafunzo gani kwa kazi hiyo, na uandike lengo lako la kujifunza kwa sentensi moja.",
          youCanNow: "kuweka lengo la kujifunza linaloelekea kazini.",
          quickCheck: [
            { objective: "O1", q: "Cheti ni nini?", options: ["Shahada ya chuo", "Uthibitisho kwamba ulimaliza mafunzo ya ujuzi fulani", "Ofa ya kazi", "Mkopo"], answer: 1, why: "Cheti kinaonyesha ulimaliza mafunzo ya ujuzi fulani." },
            { objective: "O1", q: "Unataka kuwa fundi umeme. Ungeanzaje lengo lako la kujifunza?", options: ["Kujiandikisha kwenye darasa la kwanza unaloliona", "Kumuuliza rafiki darasa lipi ni rahisi zaidi", "Kuanza na kazi, kisha kutafuta mafunzo yanayohitajika na kuuliza bodi ya leseni ya jimbo", "Kusubiri hadi mtu akupe mafunzo"], answer: 2, why: "Kuanza na kazi na kuuliza bodi ya leseni kunakuongoza kwenye mafunzo sahihi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kupata programu za bure na za gharama nafuu",
          minutes: 5,
          goal: "Pata angalau programu mbili halisi zinazolingana na lengo lako.",
          text: [
            "Kuna mahali pengi pa kujifunza kwa pesa kidogo au bila pesa: vituo vya elimu ya watu wazima (mara nyingi kwa mtihani wa kulingana na sekondari na Kiingereza), maktaba za umma, vyuo vya jamii, programu za kurudi katika jamii, na American Job Centers (vituo vya kazi), vinavyoweza kutoa ushauri wa kazi na kukuelekeza kwenye mafunzo.",
            "Tafuta American Job Center iliyo karibu nawe kwa kitafutaji cha CareerOneStop kwenye careeronestop.org, tovuti ya Wizara ya Kazi ya Marekani, au piga simu ya msaada 1-877-872-5627. Huduma zinatofautiana kati ya vituo, kwa hiyo piga simu au tembelea ili uhakikishe kituo chako kinatoa nini.",
            "Mtandaoni, tovuti nyingi zinazoaminika zinatoa masomo ya bure, kama Khan Academy kwa hesabu na kusoma, na kozi za bure kutoka vyuo vya jamii. Muombe AI mawazo, kisha nenda kwenye tovuti ya kila programu yenyewe kuhakikisha ipo na gharama yake."
          ],
          steps: ["Uliza AI watu wa eneo lako wanaweza kujifunza ujuzi wako wapi.", "Tafuta American Job Center iliyo karibu nawe kwenye careeronestop.org.", "Angalia maktaba yako, shule ya watu wazima na chuo cha jamii.", "Andika programu mbili.", "Hakikisha kila moja kwenye tovuti yake au kwa simu."],
          words: [["American Job Center", "ofisi inayofadhiliwa na Wizara ya Kazi ya Marekani inayosaidia kupata kazi na mafunzo."], ["Chuo cha jamii (community college)", "chuo cha eneo lako chenye gharama ndogo, chenye vyeti na shahada za miaka miwili."]],
          slides: [
            { title: "Mahali pa kujifunza kwa gharama nafuu", bullets: ["Elimu ya watu wazima na maktaba", "Vyuo vya jamii", "Programu za kurudi katika jamii na American Job Centers"] },
            { title: "American Job Centers", bullets: ["Tafuta kimoja kwenye careeronestop.org", "Simu ya msaada: 1-877-872-5627", "Huduma zinatofautiana: piga simu kuhakikisha"] },
            { title: "Mtandaoni", bullets: ["Masomo ya bure kama Khan Academy", "Hakikisha programu kwenye tovuti zao wenyewe"] }
          ],
          sources: [{ name: "CareerOneStop: American Job Center Finder (US Department of Labor)", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/american-job-centers.aspx" }],
          tryIt: "Tafuta American Job Center iliyo karibu nawe kwenye careeronestop.org na programu nyingine moja (maktaba, shule ya watu wazima au chuo cha jamii) kwa lengo lako. Andika zote mbili, pamoja na namba za simu kutoka tovuti zao rasmi.",
          youCanNow: "kupata programu za bure na za gharama nafuu kwa lengo lako la kujifunza.",
          quickCheck: [
            { objective: "O2", q: "Chuo cha jamii ni nini?", options: ["Chuo cha eneo lako chenye gharama ndogo", "Shule ya mtandaoni tu", "Wakala binafsi wa kazi", "Shule ya sekondari ya watu wazima tu"], answer: 0, why: "Vyuo vya jamii viko karibu na kwa kawaida vina gharama ndogo kuliko vyuo vingine." },
            { objective: "O2", q: "AI inapendekeza programu ya mafunzo karibu nawe. Ungefanya nini?", options: ["Kujiandikisha mara moja", "Kulipa amana ili kushikilia nafasi", "Kuisambaza bila kukagua", "Kuihakikisha kwenye tovuti ya programu yenyewe"], answer: 3, why: "AI inaweza kukosea, kwa hiyo unahakikisha programu kwenye tovuti yake rasmi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kukagua programu kabla ya kujiandikisha",
          minutes: 5,
          goal: "Uliza maswali matano kukagua kama programu ni halisi na inafaa.",
          text: [
            "Baadhi ya programu ni nzuri sana. Nyingine zinagharimu pesa nyingi na haziongozi popote, na chache ni ulaghai unaowalenga watu wanaotaka mwanzo mpya. Kagua kabla ya kusaini au kulipa.",
            "Uliza maswali matano: Gharama yote ni kiasi gani, pamoja na vitabu na ada? Inachukua muda gani, na ratiba ni ipi? Nitapata nini mwishoni (cheti, leseni au credits)? Je, shule imeidhinishwa (accredited) au cheti kinatambuliwa na waajiri? Wahitimu wangapi wanapata kazi, na je, inasaidia kutafutia kazi?",
            "AI inaweza kukusaidia kuandaa maswali na kueleza maneno kama \"imeidhinishwa\". Lakini majibu lazima yatoke kwa programu yenyewe, kwa maandishi, na kutoka ukaguzi wako mwenyewe. Jihadhari na shinikizo la kusaini leo au kuchukua mkopo mkubwa."
          ],
          steps: ["Uliza gharama yote.", "Uliza muda na ratiba.", "Uliza utapata nini mwishoni.", "Uliza kama imeidhinishwa au inatambuliwa na waajiri.", "Uliza kuhusu matokeo ya kazi na msaada wa kutafutiwa kazi."],
          words: [["Imeidhinishwa (accredited)", "imekubaliwa na kikundi rasmi kinachokagua ubora wa shule."], ["Kutafutiwa kazi (job placement)", "msaada wa kupata kazi baada ya kumaliza."]],
          slides: [
            { title: "Kagua kabla ya kusaini", bullets: ["Baadhi ya programu haziongozi popote", "Baadhi ni ulaghai"] },
            { title: "Maswali matano", bullets: ["Gharama yote? Muda na ratiba?", "Nitapata nini mwishoni?", "Imeidhinishwa au inatambuliwa?", "Matokeo ya kazi na kutafutiwa kazi?"] },
            { title: "Dalili za hatari", bullets: ["Shinikizo la kusaini leo", "Mikopo mikubwa kwa kozi fupi", "Hakuna majibu kwa maandishi"] }
          ],
          tryIt: "Chagua programu moja kutoka Somo la 2. Muombe msaidizi wa AI akusaidie kugeuza maswali matano kuwa maneno mafupi ya kusema kwenye simu, kisha piga simu au angalia tovuti ya programu na uandike majibu.",
          youCanNow: "kukagua programu kwa maswali matano kabla ya kujiandikisha.",
          quickCheck: [
            { objective: "O3", q: "\"Imeidhinishwa\" (accredited) inamaanisha nini?", options: ["Imekubaliwa na kikundi rasmi cha ubora", "Ni bure", "Ni mtandaoni tu", "Inaendeshwa na serikali"], answer: 0, why: "Kuidhinishwa kunamaanisha kikundi rasmi kilikagua ubora wa programu." },
            { objective: "O3", q: "Shule inasema lazima usaini mkopo mkubwa leo ili usipoteze nafasi yako. Ungefanya nini?", options: ["Kusaini ili usipoteze nafasi", "Kusaini lakini upange kutolipa", "Kuichukulia kama dalili ya hatari na kuchukua muda kukagua", "Kuiomba AI isaini kwa niaba yako"], answer: 2, why: "Shinikizo la kusaini mkopo mkubwa mara moja ni dalili ya hatari." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuchagua njia yako",
        questions: [
          { objective: "O1", q: "Mahali bora pa kuanzia lengo la kujifunza ni wapi?", options: ["Darasa lolote tu", "Kozi inayotangazwa zaidi", "Kazi unayoitaka, kisha urudi nyuma", "Programu ndefu zaidi"], answer: 2, why: "Lengo la kazi linafanya kujifunza kuwe na manufaa." },
          { objective: "O1", q: "AI inasema kazi fulani inahitaji leseni. Nani ana neno la mwisho kuhusu sheria?", options: ["Bodi ya leseni ya jimbo lako", "AI", "Rafiki", "Chapisho kwenye mitandao ya kijamii"], answer: 0, why: "Bodi rasmi ndizo zinazoweka sheria za leseni." },
          { objective: "O2", q: "Unaweza kupata American Job Center iliyo karibu nawe wapi?", options: ["Tovuti ya kadi za zawadi", "Tangazo linalojitokeza ghafla", "Ujumbe mfupi wowote", "careeronestop.org"], answer: 3, why: "CareerOneStop ni kitafutaji cha Wizara ya Kazi." },
          { objective: "O3", q: "Swali lipi linakagua thamani ya programu?", options: ["\"Jengo lina rangi gani?\"", "\"Wahitimu wangapi wanapata kazi?\"", "\"Naweza kusaini leo bila kusoma?\"", "\"Mna eneo la kuegesha magari?\""], answer: 1, why: "Matokeo ya kazi yanaonyesha kama programu inaongoza mahali fulani." },
          { objective: "O3", q: "Programu inakushinikiza usaini mkopo mkubwa leo. Hii ni:", options: ["Ofa nzuri sana", "Dalili ya hatari", "Lazima", "Kawaida kwa shule zote"], answer: 1, why: "Shinikizo na mikopo mikubwa ni dalili za onyo." }
        ]
      }
    },
    {
      name: "Sura 2: Kujifunza na AI",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kutumia AI kama mwalimu wa masomo",
          minutes: 5,
          goal: "Muombe AI akueleze, akupe mifano na akujaribu, bila kukufanyia kazi yako.",
          text: [
            "Msaidizi wa AI anaweza kuwa mwalimu mvumilivu, saa yoyote ya siku. Muombe aeleze mada kwa urahisi, atoe mfano, na akujaribu: \"Ninasoma sehemu (fractions) kwa ajili ya mtihani wangu wa kulingana na sekondari. Nieleze jinsi ya kujumlisha sehemu kwa hatua rahisi, nipe mfano mmoja, kisha nipe maswali matatu ya mazoezi moja baada ya jingine.\"",
            "Usipoelewa, sema hivyo: \"Nieleze kwa njia nyingine.\" \"Tumia pesa kama mfano.\" Kadiri unavyojaribu maswali wewe mwenyewe, ndivyo unavyojifunza zaidi.",
            "Usimwache AI aandike kazi zako za shule au afanye mitihani yako. Shule zinaona hilo kama udanganyifu, na unakosa kujifunza. Pia kagua ukweli: AI inaweza kukosea, hata katika hesabu. Kitabu chako cha kiada na mwalimu wako ndio wenye neno la mwisho."
          ],
          steps: ["Sema unasoma nini na kiwango chako.", "Omba maelezo rahisi na mfano mmoja.", "Omba maswali ya mazoezi moja baada ya jingine.", "Ukikwama, omba maelezo kwa njia nyingine.", "Fanya kazi zako mwenyewe; kagua ukweli kwa mwalimu au kitabu chako."],
          words: [["Mwalimu wa ziada (tutor)", "mwalimu anayemsaidia mtu mmoja kujifunza kwa kasi yake mwenyewe."], ["Uaminifu wa kitaaluma", "kufanya kazi yako mwenyewe na kufuata sheria za shule yako."]],
          slides: [
            { title: "Mwalimu saa yoyote", bullets: ["Eleza kwa urahisi", "Toa mfano", "Nijaribu swali moja baada ya jingine"] },
            { title: "Umekwama?", bullets: ["\"Nieleze kwa njia nyingine.\"", "\"Tumia pesa kama mfano.\""] },
            { title: "Jifunze, usidanganye", bullets: ["Fanya kazi na mitihani yako mwenyewe", "AI inaweza kukosea", "Mwalimu na kitabu cha kiada wana neno la mwisho"] }
          ],
          tryIt: "Chagua mada moja kutoka lengo lako. Muombe msaidizi wa AI aieleze kwa urahisi, atoe mfano mmoja na akujaribu kwa maswali matatu moja baada ya jingine.",
          youCanNow: "kutumia AI kama mwalimu wa masomo kwa njia ya uaminifu.",
          quickCheck: [
            { objective: "O4", q: "Ombi zuri la kufundishwa linapaswa kuwa na nini?", options: ["Neno \"msaada\" tu", "Kazi yako ya shule ili AI iimalize", "Namba yako ya mwanafunzi", "Unasoma nini na kiwango chako"], answer: 3, why: "Ukiiambia AI mada na kiwango chako, unapata maelezo yanayokufaa." },
            { objective: "O4", q: "Una insha ya kuwasilisha na unashawishika kuiacha AI iiandike. Ungefanya nini?", options: ["Kuiacha AI iiandike na kuiwasilisha", "Kuiomba AI ikueleze mada na ikujaribu, kisha uiandike mwenyewe", "Kunakili insha ya mwanafunzi mwenzako", "Kuruka kazi hiyo"], answer: 1, why: "Kuiacha AI iandike kazi za shule kunavunja sheria za shule na kunakukosesha kujifunza." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kutengeneza mpango wa kusoma unaofaa maisha yako",
          minutes: 5,
          goal: "Tengeneza mpango wa kusoma wa kila wiki unaozunguka kazi na shughuli nyingine.",
          text: [
            "Unapofanya kazi, kuhudhuria miadi na kutunza familia, muda wa kusoma lazima upangwe. Vipindi vifupi vya mara kwa mara vinafanya kazi vizuri kuliko kukariri kwa haraka dakika za mwisho.",
            "Uliza AI: \"Ninafanya kazi saa 1 asubuhi hadi saa 9:30 alasiri (7 am hadi 3:30 pm) siku za kazi na nina miadi Jumanne mchana. Nitengenezee mpango wa kusoma wa wiki nne kwa hesabu ya mtihani wangu wa kulingana na sekondari, wenye vipindi vya dakika 30 mara nne kwa wiki na marudio mafupi kila mwisho wa wiki.\"",
            "Weka vipindi kwenye kalenda ya simu yako pamoja na vikumbusho. Soma mahali patulivu, kama maktaba, na tumia Wi-Fi na kompyuta za bure za maktaba ukizihitaji. Ukikosa kipindi, usikate tamaa; fanya tu kinachofuata."
          ],
          steps: ["Orodhesha saa zako za kazi na miadi isiyobadilika.", "Muombe AI mpango wa wiki nne wenye vipindi vifupi.", "Weka vipindi kwenye kalenda yako pamoja na vikumbusho.", "Tafuta mahali patulivu pa kusoma.", "Ukikosa kimoja, fanya tu kinachofuata."],
          words: [["Kipindi cha kusoma", "muda maalum unaoutumia kujifunza."], ["Kukariri kwa haraka (cramming)", "kujaribu kujifunza mengi dakika za mwisho."]],
          slides: [
            { title: "Panga muda wako wa kusoma", bullets: ["Vipindi vifupi vya mara kwa mara ni bora kuliko kukariri dakika za mwisho"] },
            { title: "Muombe AI mpango", bullets: ["Saa zako za kazi na miadi", "Vipindi vifupi, mara chache kwa wiki", "Marudio mwisho wa wiki"] },
            { title: "Endelea nao", bullets: ["Vikumbusho vya kalenda", "Mahali patulivu, kama maktaba", "Umekosa kimoja? Fanya kinachofuata"] }
          ],
          tryIt: "Muombe msaidizi wa AI mpango wa kusoma wa wiki nne unaofaa kazi na miadi yako. Weka vipindi vyako viwili vya kwanza kwenye kalenda ya simu yako.",
          youCanNow: "kutengeneza na kufuata mpango wa kusoma unaofaa maisha yako.",
          quickCheck: [
            { objective: "O5", q: "Kukariri kwa haraka (cramming) ni nini?", options: ["Kusoma kidogo kila siku", "Kuandika maelezo darasani", "Kujifunza mengi dakika za mwisho", "Kumwomba mwalimu msaada"], answer: 2, why: "Cramming ni kujaribu kujifunza mengi muda mfupi kabla ya mtihani." },
            { objective: "O5", q: "Ulikosa kipindi cha kusoma cha Jumanne kwa sababu ya kazi. Ungefanya nini?", options: ["Kufanya tu kipindi kinachofuata", "Kuacha mpango", "Kusoma kwa saa sita Jumatano", "Kuanza mpango wote upya"], answer: 0, why: "Kukosa kipindi kimoja si tatizo; cha muhimu ni kurudi kwenye mpango." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kujiandaa kuomba msaada wa kifedha",
          minutes: 5,
          goal: "Jua mahali pa kuomba msaada wa serikali kuu kwa wanafunzi na orodhesha unachohitaji kuandaa.",
          text: [
            "Kwa vyuo na shule nyingi za ufundi nchini Marekani, hatua ya kwanza ya msaada wa kifedha ni FAFSA, yaani Free Application for Federal Student Aid (Fomu ya Bure ya Kuomba Msaada wa Serikali Kuu kwa Wanafunzi). Kama jina linavyosema, ni bure. Omba tu kwenye tovuti rasmi, studentaid.gov; usilipe tovuti yoyote ikujazie.",
            "Sheria kuhusu hatia za uhalifu na msaada kwa wanafunzi zimebadilika miaka ya karibuni. Usidhani kwamba huwezi kupata msaada. Kagua sheria za sasa kwenye studentaid.gov, au uliza ofisi ya msaada wa kifedha ya shule; wanasaidia wanafunzi kwa maswali haya kila siku.",
            "AI inaweza kukusaidia kuelewa maneno (\"Pell Grant ni nini?\" \"Kuna tofauti gani kati ya ruzuku na mkopo?\") na kutengeneza orodha ya maswali kwa ofisi ya msaada wa kifedha. Andika taarifa zako binafsi na za kodi tu kwenye studentaid.gov, kamwe si ndani ya AI. Ruzuku hazilipwi tena; mikopo inalipwa."
          ],
          steps: ["Nenda tu studentaid.gov kwa FAFSA; ni bure.", "Kagua sheria za sasa kuhusu hatia huko au kwa ofisi ya msaada wa kifedha ya shule.", "Tumia AI kueleza maneno na kupanga maswali.", "Andika taarifa binafsi tu kwenye tovuti rasmi.", "Jua tofauti: ruzuku hazilipwi tena, mikopo inalipwa."],
          words: [["FAFSA", "Free Application for Federal Student Aid, fomu ya bure ya kuomba msaada wa serikali kuu kwa wanafunzi, kwenye studentaid.gov."], ["Ruzuku (grant)", "pesa za shule ambazo kwa kawaida hazihitaji kurudishwa."], ["Ofisi ya msaada wa kifedha", "ofisi ya shule inayosaidia wanafunzi kulipia masomo."]],
          slides: [
            { title: "Anza na FAFSA", bullets: ["Free Application for Federal Student Aid", "Tu kwenye studentaid.gov", "Usilipe kamwe tovuti ikujazie"] },
            { title: "Hatia za uhalifu na msaada", bullets: ["Sheria zimebadilika miaka ya karibuni", "Usidhani huwezi kupata msaada", "Kagua studentaid.gov au ofisi ya msaada"] },
            { title: "Tumia AI kwa busara", bullets: ["Eleza maneno kama Pell Grant", "Panga maswali kwa ofisi ya msaada", "Taarifa binafsi tu kwenye tovuti rasmi"] }
          ],
          sources: [{ name: "Federal Student Aid: studentaid.gov", url: "https://studentaid.gov/" }],
          tryIt: "Kazi ya mwisho: andika lengo lako la kujifunza linalohusiana na kazi, kagua programu moja halisi kwa maswali matano, muombe AI mpango wa kusoma wa wiki nne, mwache akufundishe na akujaribu kwenye mada ya kwanza, na weka vipindi vyako viwili vya kwanza kwenye kalenda. Ikiwa programu ni chuo au shule ya ufundi, ongeza maswali matatu kwa ofisi yake ya msaada wa kifedha.",
          youCanNow: "kupanga, kupata, kukagua na kulipia elimu ya kuendelea, na kusoma na AI kama mwalimu wako.",
          quickCheck: [
            { objective: "O6", q: "FAFSA inasimama kwa nini?", options: ["Federal Aid for Students and Adults", "Free Application for Federal Student Aid", "First Approved Funding for School Admission", "Financial Account for Student Assistance"], answer: 1, why: "FAFSA ni Free Application for Federal Student Aid." },
            { objective: "O6", q: "Tovuti inaomba ada ili ikujazie FAFSA. Ungefanya nini?", options: ["Kulipa ili kuokoa muda", "Kuwapa taarifa zako za kodi", "Kuiomba AI iijaze kwa namba yako ya Social Security", "Kuijaza bure kwenye studentaid.gov"], answer: 3, why: "FAFSA ni bure kwenye studentaid.gov, na taarifa binafsi zinaandikwa huko tu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kujifunza na AI",
        questions: [
          { objective: "O4", q: "Lipi ni matumizi ya uaminifu ya AI kwa shule?", options: ["Kunakili majibu yake kwenye kazi ya nyumbani", "Kuiacha iandike insha yako uiwasilishe", "Kuiacha ifanye mtihani wako", "Kuiomba ikueleze mada na ikujaribu"], answer: 3, why: "Kueleza na kujaribu kunakusaidia kujifunza." },
          { objective: "O4", q: "Huelewi maelezo fulani. Unaomba nini?", options: ["\"Nieleze kwa njia nyingine.\"", "\"Nifanyie kazi yangu ya nyumbani.\"", "\"Nywila yangu ni ipi?\"", "Hakuna; naacha"], answer: 0, why: "Maelezo mapya mara nyingi yanasaidia." },
          { objective: "O5", q: "Mpango upi wa kusoma unafanya kazi vizuri zaidi?", options: ["Kusoma tu unapojisikia", "Usiku mmoja mrefu kabla ya mtihani", "Vipindi vifupi vya mara kwa mara", "Bila mpango"], answer: 2, why: "Vipindi vya mara kwa mara ni bora kuliko kukariri dakika za mwisho." },
          { objective: "O6", q: "Unajaza FAFSA wapi?", options: ["Kiungo kwenye ujumbe mfupi", "Tovuti yoyote inayotoza ada", "Ndani ya mazungumzo na AI", "studentaid.gov, bure"], answer: 3, why: "FAFSA ni bure kwenye tovuti rasmi." },
          { objective: "O6", q: "Una hatia ya uhalifu na unataka msaada. Unafanya nini?", options: ["Kumuuliza mtu usiyemjua", "Kudhani huwezi kupata msaada", "Kukagua sheria za sasa kwenye studentaid.gov au kuuliza ofisi ya msaada wa kifedha", "Kuacha shule"], answer: 2, why: "Sheria zimebadilika; vyanzo rasmi vinajua sheria za sasa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI na Kuendelea na Masomo",
    questions: [
      { objective: "O1", q: "Lengo zuri la kujifunza ni:", options: ["La kubahatisha", "Linalohusiana na kazi unayoitaka", "Lolote linalotangazwa zaidi", "Refu iwezekanavyo"], answer: 1, why: "Malengo ya kazi yanafanya kujifunza kuwe na manufaa." },
      { objective: "O1", q: "Cheti ni:", options: ["Uthibitisho kwamba ulimaliza mafunzo ya ujuzi fulani", "Mkopo", "Ofa ya kazi", "Namba ya gari"], answer: 0, why: "Vyeti vinawaonyesha waajiri ujuzi wako." },
      { objective: "O1", q: "Mtihani wa kulingana na sekondari, kama GED:", options: ["Unaonyesha ujuzi wa kiwango cha sekondari", "Ni mtihani wa udereva", "Ni maombi ya kazi", "Ni mkopo"], answer: 0, why: "Ni njia mbadala ya cheti cha kumaliza sekondari." },
      { objective: "O1", q: "Kwa kazi inayohitaji leseni, kagua:", options: ["AI tu", "Bodi ya leseni ya jimbo lako", "Uvumi", "Hakuna kitu"], answer: 1, why: "Bodi zinaweka na kueleza sheria." },
      { objective: "O2", q: "American Job Centers zinafadhiliwa na:", options: ["Kampuni ya mitandao ya kijamii", "Benki binafsi", "Wizara ya Kazi ya Marekani", "Mkopeshaji wa mikopo ya haraka"], answer: 2, why: "Ni sehemu ya mtandao wa Wizara ya Kazi." },
      { objective: "O2", q: "Huduma katika American Job Centers:", options: ["Ziko mtandaoni tu", "Ni sawa kila mahali", "Zinagharimu pesa nyingi", "Zinatofautiana, kwa hiyo piga simu au tembelea kuhakikisha"], answer: 3, why: "Kila kituo kinatoa huduma tofauti." },
      { objective: "O2", q: "Chuo cha jamii ni:", options: ["Benki", "Programu ya gerezani tu", "Chuo cha eneo lako chenye gharama ndogo", "Wakala wa kazi"], answer: 2, why: "Vyuo vya jamii vinatoa vyeti na shahada." },
      { objective: "O2", q: "Baada ya AI kupendekeza programu, unapaswa:", options: ["Kuihakikisha kwenye tovuti ya programu yenyewe", "Kujiandikisha mara moja", "Kumlipa mtu usiyemjua", "Kuipuuza"], answer: 0, why: "AI inaweza kuorodhesha programu ambazo hazipo." },
      { objective: "O3", q: "\"Imeidhinishwa\" (accredited) inamaanisha:", options: ["Bure", "Ghali", "Mtandaoni tu", "Imekubaliwa na kikundi rasmi cha ubora"], answer: 3, why: "Kuidhinishwa kunakagua ubora." },
      { objective: "O3", q: "Kutafutiwa kazi (job placement) kunamaanisha:", options: ["Meza", "Msaada wa kupata kazi baada ya kumaliza", "Mtihani", "Mkopo"], answer: 1, why: "Kunawaunganisha wahitimu na kazi." },
      { objective: "O3", q: "Majibu kuhusu gharama ya programu yanapaswa kutoka kwa:", options: ["AI tu", "Programu yenyewe, kwa maandishi", "Uvumi", "Tangazo linalojitokeza ghafla"], answer: 1, why: "Majibu ya maandishi kutoka kwa programu yanaaminika." },
      { objective: "O4", q: "Ombi zuri la kufundishwa linasema:", options: ["Namba ya kesi yako", "Namba yako ya Social Security", "\"Msaada\" tu", "Unasoma nini na kiwango chako"], answer: 3, why: "Mada na kiwango vinasaidia AI kufundisha vizuri." },
      { objective: "O4", q: "AI imekosea jibu la hesabu. Nani ana neno la mwisho?", options: ["Mwalimu wako na kitabu cha kiada", "AI", "Mtu usiyemjua mtandaoni", "Hakuna mtu"], answer: 0, why: "AI inaweza kukosea, hata katika hesabu." },
      { objective: "O4", q: "Kuiacha AI iandike kazi yako ya shule ni:", options: ["Lazima", "Inaruhusiwa kila wakati", "Kinyume na sheria za shule, na unakosa kujifunza", "Mazoezi mazuri"], answer: 2, why: "Uaminifu wa kitaaluma ni kufanya kazi yako mwenyewe." },
      { objective: "O5", q: "Kukariri kwa haraka (cramming) kunamaanisha:", options: ["Maktaba", "Kusoma kwa vipindi vifupi vya mara kwa mara", "Kikundi cha kusoma", "Kujifunza mengi dakika za mwisho"], answer: 3, why: "Cramming haifanyi kazi vizuri kama kusoma mara kwa mara." },
      { objective: "O5", q: "Ili kufuata mpango wa kusoma, unaweza:", options: ["Kuacha kupanga", "Kutegemea kumbukumbu tu", "Kuweka vipindi kwenye kalenda pamoja na vikumbusho", "Kusoma siku ya mtihani tu"], answer: 2, why: "Vikumbusho vinakuweka kwenye njia." },
      { objective: "O5", q: "Ukikosa kipindi cha kusoma, unapaswa:", options: ["Kuacha programu", "Kufanya tu kinachofuata", "Kuanza upya kutoka sifuri", "Kuhisi hakuna matumaini"], answer: 1, why: "Kukosa kipindi kimoja hakumalizi maendeleo yako." },
      { objective: "O6", q: "FAFSA inasimama kwa:", options: ["Free Application for Federal Student Aid", "Fast Application for Student Accounts", "Federal Account for Savings", "Financial Aid Service Agency"], answer: 0, why: "Ni fomu ya bure ya kuomba msaada wa serikali kuu." },
      { objective: "O6", q: "Ruzuku (grant) kwa kawaida:", options: ["Haihitaji kurudishwa", "Lazima irudishwe pamoja na riba", "Ni aina ya kadi ya mkopo", "Ni ada"], answer: 0, why: "Ruzuku hazilipwi tena; mikopo inalipwa." },
      { objective: "O6", q: "Taarifa binafsi na za kodi kwa FAFSA zinapaswa kuandikwa:", options: ["Ndani ya AI", "Tu kwenye studentaid.gov", "Kwa ujumbe kwa mtu usiyemjua", "Kwenye tovuti yoyote"], answer: 1, why: "Taarifa binafsi zinaandikwa tu kwenye tovuti rasmi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 5, 7, 8, 10, 11, 13, 15, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Lengo linalohusiana na kazi", objective: "O1", notYet: "Lengo halieleweki vizuri au halihusiani na kazi.", meets: "Sentensi moja inayotaja kazi na mafunzo inayohitaji.", exceeds: "Inataja kama kazi inahitaji leseni ya jimbo na mahali pa kukagua." },
      { name: "Programu imekaguliwa", objective: "O3", notYet: "Hakuna programu, au chini ya maswali matano yamejibiwa.", meets: "Programu moja halisi imekaguliwa kwa maswali yote matano, yaliyojibiwa na programu yenyewe.", exceeds: "Majibu kuhusu gharama yako kwa maandishi, na programu ya pili ililinganishwa." },
      { name: "AI kama mwalimu", objective: "O4", notYet: "AI ilifanya kazi, au hakuna jaribio lililofanywa.", meets: "AI ilieleza mada ya kwanza, ikatoa mfano na ikamjaribu mwanafunzi.", exceeds: "Mwanafunzi aliiomba AI ieleze kwa njia nyingine alipokwama." },
      { name: "Mpango wa kusoma kwenye kalenda", objective: "O5", notYet: "Hakuna mpango, au hakuna vipindi kwenye kalenda.", meets: "Mpango wa wiki nne wenye vipindi vifupi vya mara kwa mara, na vipindi viwili vya kwanza kwenye kalenda.", exceeds: "Vipindi vina vikumbusho na vinaendana na kazi na miadi." },
      { name: "Maswali ya msaada wa kifedha", objective: "O6", notYet: "Hayapo wakati programu ni chuo au shule ya ufundi.", meets: "Maswali matatu kwa ofisi ya msaada wa kifedha.", exceeds: "Pia inataja mahali pa kujaza FAFSA bure." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaojiandikisha katika programu ya kulingana na sekondari, cheti au chuo ndani ya siku 90 (utafiti wa kufuatilia)",
      "Wanafunzi wanaokamilisha FAFSA au kuomba msaada mwingine ndani ya siku 90",
      "Wanafunzi wanaoripoti kutumia AI kama mwalimu wa masomo kila wiki (utafiti wa kufuatilia)"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja au kompyuta yenye intaneti na app ya kalenda",
      "Msaidizi wa AI wa bure: Microsoft Copilot, ChatGPT au Google Gemini",
      "Karatasi na kalamu kwa lengo na maswali kuhusu programu",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Kuwa na mawasiliano ya American Job Center, shule ya watu wazima na chuo cha jamii vilivyo karibu tayari.",
      "Eleza kwamba AI ni msaidizi wa kusoma tu; kuitumia kufanya kazi za shule kunavunja sheria za shule.",
      "Usiwaombe wanafunzi kamwe kuandika namba za Social Security, taarifa za kodi au maelezo ya kesi ndani ya AI; kazi ya FAFSA inafanywa tu kwenye studentaid.gov, kwa faragha.",
      "Peleka maswali kuhusu hatia za uhalifu na msaada kwa studentaid.gov au ofisi ya msaada wa kifedha, kwa sababu sheria hubadilika.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
