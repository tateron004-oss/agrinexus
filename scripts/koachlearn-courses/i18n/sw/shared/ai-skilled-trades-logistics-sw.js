"use strict";

// Koach Learn course (Swahili translation of shared/ai-skilled-trades-logistics.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-skilled-trades-logistics-sw",
  lang: "sw",
  translationOf: "ai-skilled-trades-logistics",
  category: "Re-Entry",
  name: "AI kwa Kazi za Ufundi na Usafirishaji",
  skills: "Kueleza miongozo na vipimo kwa AI, Kuandika makadirio ya bei ya kazi, Kutengeneza orodha ya usalama, Kurekodi kazi kwa picha na maelezo, Kupanga njia na mizigo, Kutafuta mafunzo ya uanagenzi na kazi za ufundi",
  outcome: "kutumia msaidizi wa AI wa bure kwenye simu yako kuelewa mwongozo (manual), kuandika makadirio ya bei yaliyo wazi, kutengeneza orodha ya usalama wa kazi unayoikagua dhidi ya sheria rasmi, kuweka rekodi ya kazi, kupanga njia ya usambazaji au ya huduma, na kutafuta mafunzo ya uanagenzi na kazi za ufundi.",
  about: [
    "Kazi za ufundi (umeme, mabomba, HVAC yaani mifumo ya joto na hewa baridi, useremala, uchomeleaji, ufundi magari) na usafirishaji (maghala, forklift, usambazaji, malori, usafirishaji wa mizigo) zinahitajika sana, na njia nyingi zinaanza na uanagenzi au mafunzo mafupi badala ya shahada ya chuo. Waajiri wengi katika fani hizi huajiri watu wenye rekodi za uhalifu.",
    "AI haipigi nyundo wala haiendeshi lori. Lakini kwenye simu inaweza kueleza mwongozo kwa maneno rahisi, kuandika makadirio na maelezo ya kazi, kuandaa rasimu ya orodha za usalama, na kusaidia kupanga njia. Hii inaokoa muda na inakusaidia kuonekana mtaalamu.",
    "Kozi hii ni kwa watu wanaorudi nyumbani kutoka gerezani, wafanyakazi katika programu za ajira na yeyote anayeanza kazi ya ufundi au usafirishaji. Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi. Sheria za usalama zinatoka kwa mwajiri wako, mtengenezaji na OSHA (ofisi ya usalama kazini ya Marekani), si kutoka kwa AI."
  ],
  finalTask: "Kwa kazi moja halisi au ya mazoezi ya ufundi au usafirishaji, tengeneza faili ya kazi kwa msaada wa AI: muhtasari kwa maneno rahisi wa sehemu ya mwongozo au vipimo, makadirio ya bei au agizo la kazi lililoandikwa, orodha ya usalama wa kazi iliyokaguliwa dhidi ya chanzo rasmi, ingizo la rekodi ya kazi lenye maelezo ya picha za kabla na baada, na mpango wa njia au wa mzigo. Kisha tafuta nafasi moja ya uanagenzi au kazi ya ufundi unayoweza kuiomba.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wanaorudi nyumbani kutoka gerezani, wafanyakazi katika programu za ajira na yeyote anayeanza kazi ya ufundi (umeme, mabomba, HVAC, useremala, uchomeleaji, ufundi magari) au kazi ya usafirishaji (ghala, forklift, usambazaji, malori).",
    startingPoint: "Wanaweza kutumia simu kupiga simu, kutuma ujumbe na kupiga picha, na wengi wana uzoefu wa kazi za mikono. Wachache wametumia msaidizi wa AI kusoma miongozo, kuandika makadirio au kupanga njia.",
    gap: "Wafanyakazi wa ufundi na usafirishaji wanatarajiwa kusoma miongozo ya kiufundi, kuandika makadirio na maelezo ya kazi, kufuata sheria za usalama na kupanga njia. Kutumia AI kwenye simu, na kuikagua dhidi ya vyanzo rasmi, kunaokoa muda, kunaonekana kitaalamu na kunawasaidia wanafunzi kuingia katika uanagenzi na kazi za ufundi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Vifaa: mara nyingi ni simu tu, inayotumika kazini au ndani ya lori",
      "Sheria za usalama, torque, voltage na mipaka ya uzito zinatoka kwenye mwongozo, kwa mwajiri na OSHA, kamwe si kutoka kwa AI",
      "Faragha: hakuna nyaraka binafsi za mteja wala taarifa zake katika picha au prompt za AI",
      "Muda: masomo ya kama dakika tano yanayoingia kati ya zamu za kazi"
    ],
    prerequisites: "Hakuna. Wanafunzi wapya kwa zana za AI wanaweza kuanza na kozi \"Utangulizi wa AI na Kujiamini katika Teknolojia\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa sehemu ya mwongozo au karatasi ya vipimo", action: "kutumia AI kuieleza kwa maneno rahisi na kukagua kila namba dhidi ya mwongozo", standard: "kila namba ikilingana na chanzo" },
    { id: "O2", condition: "Kwa kazi halisi au ya mazoezi", action: "kuandika makadirio ya bei au agizo la kazi lenye gharama ya kazi, vipuri, jumla, kinachojumuishwa na tarehe ya mwisho", standard: "hesabu ikiwa imekaguliwa kwa mkono na kila sehemu inayohitajika ikiwemo" },
    { id: "O3", condition: "Kwa kazi moja halisi", action: "kuandaa rasimu ya orodha ya usalama wa kazi kwa AI na kuikagua dhidi ya mwongozo au chanzo rasmi cha usalama", standard: "ukiongeza chochote AI ilichokosa kabla kazi haijaanza" },
    { id: "O4", condition: "Baada ya kazi", action: "kuandika ingizo la rekodi ya kazi lenye tarehe, mahali, kazi iliyofanyika, vifaa, matatizo, hatua zinazofuata na maelezo ya picha", standard: "kila sehemu ikiwemo na bila taarifa binafsi za mteja" },
    { id: "O5", condition: "Ukipewa vituo au vitu kadhaa", action: "kupanga njia na orodha rahisi ya mzigo au ya bidhaa, kisha kukagua njia kwenye app ya ramani", standard: "mizigo ikipangwa kinyume na mpangilio wa vituo na muda wa safari ukiwa umekaguliwa" },
    { id: "O6", condition: "Ukitumia Apprenticeship.gov au programu ya eneo lako", action: "kutafuta nafasi moja ya uanagenzi au kazi ya ufundi unayoweza kuiomba", standard: "na kuandika masharti yake na jinsi ya kuiomba" }
  ],
  chapters: [
    {
      name: "Sura 1: AI kazini",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuelewa miongozo na vipimo kwa AI",
          minutes: 5,
          goal: "Tumia AI kueleza mwongozo wa kiufundi au vipimo kwa maneno rahisi, kisha ukague dhidi ya chanzo.",
          text: [
            "Miongozo, karatasi za vipimo na maelekezo ya ufungaji yamejaa maneno magumu. AI inaweza kuyaeleza. Nakili au andika sehemu moja, au piga picha kama app yako ya AI inasoma picha, kisha uliza: \"Nieleze hii kwa maneno rahisi. Hatua ni zipi, nahitaji zana gani, na tahadhari ni zipi?\"",
            "Uliza maswali ya kufuatilia: \"'Torque to 25 ft-lbs' inamaanisha nini?\" au \"Kuna tofauti gani kati ya soketi ya GFCI na soketi ya kawaida?\" AI ni mwalimu mzuri wa maneno na dhana.",
            "Lakini mwongozo ndio mshindi. Namba kama torque, voltage, shinikizo, nafasi zinazohitajika na mipaka ya uzito lazima zitoke kwenye mwongozo wa mtengenezaji, kanuni (code) zinazotumika eneo lako, au kwa msimamizi wako. AI na mwongozo vikitofautiana, fuata mwongozo na umuulize msimamizi wako."
          ],
          steps: ["Nakili, andika au piga picha sehemu ya mwongozo.", "Iombe AI iieleze kwa maneno rahisi: hatua, zana, tahadhari.", "Uliza maswali ya kufuatilia kuhusu maneno usiyoyajua.", "Kagua kila namba dhidi ya mwongozo.", "Vikitofautiana, fuata mwongozo na umuulize msimamizi wako."],
          words: [["Karatasi ya vipimo (spec sheet)", "hati inayoorodhesha vipimo halisi na mahitaji ya bidhaa."], ["Torque", "jinsi kitu kinavyokazwa kwa kuzungushwa, kama bolti."], ["Kanuni (code)", "sheria rasmi za ujenzi au za umeme zinazotakiwa katika eneo fulani."]],
          slides: [
            { title: "AI kama mwalimu wako wa mwongozo", bullets: ["Bandika, andika au piga picha ya sehemu", "Uliza hatua, zana na tahadhari", "Uliza maana ya maneno"] },
            { title: "Mwongozo ndio mshindi", bullets: ["Torque, voltage, shinikizo, mipaka ya uzito", "Zinatoka kwenye mwongozo, kanuni au kwa msimamizi"] },
            { title: "Vikitofautiana", bullets: ["Fuata mwongozo", "Muulize msimamizi wako"] }
          ],
          tryIt: "Tafuta mwongozo wa kitu unachomiliki (zana, kifaa cha nyumbani au gari) mtandaoni au kwenye droo. Iombe AI ieleze sehemu moja kwa maneno rahisi, kisha kagua kila namba dhidi ya mwongozo.",
          youCanNow: "kutumia AI kuelewa miongozo na vipimo huku ukiamini namba rasmi.",
          quickCheck: [
            { objective: "O1", q: "Karatasi ya vipimo (spec sheet) ni nini?", options: ["Tangazo la mauzo lenye bei", "Orodha ya vipimo halisi na mahitaji ya bidhaa", "Bango la usalama la chumba cha mapumziko", "Maoni ya mteja kuhusu bidhaa"], answer: 1, why: "Karatasi ya vipimo inatoa vipimo halisi na mahitaji unayopaswa kutimiza." },
            { objective: "O1", q: "AI inaeleza sehemu ya mwongozo lakini inatoa voltage tofauti na ile ya mwongozo. Ungefanya nini?", options: ["Kutumia voltage ya mwongozo na kumuuliza msimamizi wako", "Kutumia namba ya AI kwa sababu ni mpya zaidi", "Kuchukua wastani wa namba hizo mbili", "Kuruka hatua hiyo"], answer: 0, why: "Namba kama voltage zinatoka kwenye mwongozo, si AI; muulize msimamizi wako kama huna uhakika." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuandika makadirio ya bei au agizo la kazi lililo wazi",
          minutes: 5,
          goal: "Andika makadirio ya bei au agizo la kazi la kitaalamu kwa msaada wa AI.",
          text: [
            "Wateja na wasimamizi wanawaamini wafanyakazi wanaoandika mambo. Makadirio ya bei yanamwambia mteja utakachofanya na gharama yake kabla hujaanza. Agizo la kazi linarekodi kazi: kilichoombwa, kilichofanyika, vifaa vilivyotumika na muda uliotumika.",
            "Iambie AI ukweli na uiache ipange: \"Andika makadirio rahisi ya kubadilisha bomba la maji la bafuni. Kazi saa 2 kwa $60 kwa saa. Vipuri: bomba $85, mipira ya maji $15. Halali kwa siku 30. Mteja lazima achague aina ya bomba.\" Kagua hesabu na kila undani.",
            "Kuwa mkweli: orodhesha kinachojumuishwa na kisichojumuishwa, na useme bei inaweza kubadilika ukipata matatizo yaliyofichika, lakini kwanza kwa idhini ya mteja. Tumia kiolezo cha bure katika Google Docs au Word na uhifadhi nakala ya kila moja."
          ],
          steps: ["Andika kazi, saa za kazi na kiwango kwa saa, na vipuri pamoja na bei zake.", "Iombe AI ipange makadirio rahisi au agizo la kazi.", "Kagua hesabu na maelezo.", "Ongeza kinachojumuishwa, kisichojumuishwa, na tarehe ya mwisho.", "Hifadhi nakala."],
          words: [["Makadirio ya bei", "bei iliyoandikwa ya kazi kabla haijaanza."], ["Agizo la kazi", "rekodi ya kazi: kilichoombwa, kilichofanyika, vifaa na muda."], ["Gharama ya kazi (labor)", "gharama ya muda wa mfanyakazi."]],
          slides: [
            { title: "Andika kila kitu", bullets: ["Makadirio: kabla ya kazi", "Agizo la kazi: rekodi ya kazi"] },
            { title: "Iache AI ipange", bullets: ["Ipe gharama ya kazi, kiwango na vipuri", "Kagua hesabu"] },
            { title: "Kuwa mkweli", bullets: ["Kinachojumuishwa na kisichojumuishwa", "Mabadiliko kwa idhini ya mteja tu", "Hifadhi kila nakala"] }
          ],
          tryIt: "Andika makadirio ya bei ya kazi halisi au ya mazoezi kwa msaada wa AI: gharama ya kazi, vipuri, jumla, kinachojumuishwa na tarehe ya mwisho. Kagua hesabu kwa mkono.",
          youCanNow: "kuandika makadirio ya bei au agizo la kazi lililo wazi na la kweli kwa msaada wa AI.",
          quickCheck: [
            { objective: "O2", q: "\"Vipuri\" vinamaanisha nini kwenye makadirio ya bei?", options: ["Muda wa mfanyakazi", "Kodi ya kazi", "Vifaa vinavyohitajika kwa kazi", "Muda wa safari"], answer: 2, why: "Vipuri ni vifaa; gharama ya kazi ni muda wa mfanyakazi." },
            { objective: "O2", q: "AI inajumlisha makadirio yako kuwa $310, lakini hesabu yako ya mkono inasema $280. Ungefanya nini?", options: ["Kutuma $310 kwa sababu AI ni hodari wa hesabu", "Kutuma $280 bila kukagua", "Kumtumia mteja namba zote mbili", "Kukagua upya kila mstari na kutuma jumla sahihi"], answer: 3, why: "Kagua hesabu mstari kwa mstari kila wakati kabla ya kutuma makadirio." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kutengeneza orodha ya usalama wa kazi",
          minutes: 6,
          goal: "Andaa rasimu ya orodha ya usalama wa kazi kwa AI na uikague dhidi ya vyanzo rasmi vya usalama.",
          text: [
            "Kazi nyingi za ufundi na za ghala zinatumia uchambuzi wa usalama wa kazi (au wa hatari): orodhesha hatua za kazi, hatari katika kila hatua, na jinsi ya kuzidhibiti. Mifano ya hatari: kuanguka, shoti ya umeme, majeraha ya kubeba mizigo, mashine zinazotembea kama forklift, kemikali na joto.",
            "AI inaweza kuandaa rasimu: \"Tengeneza orodha ya usalama wa kazi ya kubadilisha taa ya darini: hatua, hatari na udhibiti, pamoja na vifaa vya kujikinga.\" Mara nyingi itajumuisha mambo mazuri ya msingi kama kuzima breaker na kupima kwamba umeme umezimwa.",
            "Lakini AI si mamlaka ya usalama. Kagua orodha na msimamizi wako, maelekezo ya mtengenezaji na vyanzo rasmi kama OSHA (osha.gov). Madarasa ya OSHA Outreach ya saa 10 na saa 30 yanafundisha misingi ya usalama; OSHA inasema kadi yake ni ya hiari na si cheti wala leseni, ingawa baadhi ya waajiri na majimbo yanaihitaji."
          ],
          steps: ["Orodhesha hatua za kazi.", "Iombe AI hatari na udhibiti katika kila hatua, pamoja na vifaa vya kujikinga.", "Ikague na msimamizi wako, mwongozo na osha.gov.", "Rekebisha chochote kinachokosekana au kilicho kosa.", "Ipitieni pamoja na timu kabla ya kuanza."],
          words: [["Hatari", "kitu kinachoweza kumuumiza mtu."], ["PPE", "vifaa vya kujikinga binafsi (personal protective equipment), kama glavu, miwani ya usalama, kofia ngumu na buti zenye chuma mbele."], ["Uchambuzi wa usalama wa kazi", "orodha ya hatua za kazi, hatari zake na udhibiti."]],
          slides: [
            { title: "Uchambuzi wa usalama wa kazi", bullets: ["Hatua za kazi", "Hatari katika kila hatua", "Udhibiti na PPE"] },
            { title: "AI inaandaa rasimu, watu wanaamua", bullets: ["AI inaorodhesha hatari za kawaida", "Msimamizi, mwongozo na OSHA wanathibitisha"] },
            { title: "Kadi za OSHA Outreach", bullets: ["Madarasa ya usalama ya saa 10 na saa 30", "Ni ya hiari; si cheti wala leseni", "Baadhi ya waajiri na majimbo yanaihitaji"] }
          ],
          sources: [{ name: "OSHA Outreach Training Program", url: "https://www.osha.gov/training/outreach" }, { name: "OSHA Outreach Training Program FAQs", url: "https://www.osha.gov/training/outreach/faq" }],
          tryIt: "Iombe AI orodha ya usalama wa kazi kwa kazi moja halisi (kama kubeba masanduku mazito au kubadilisha tairi). Kisha tafuta ukurasa mmoja rasmi wa usalama au mwongozo wa kazi hiyo na uongeze chochote AI ilichokosa.",
          youCanNow: "kuandaa rasimu ya orodha ya usalama wa kazi kwa AI na kuikagua dhidi ya vyanzo rasmi.",
          quickCheck: [
            { objective: "O3", q: "Uchambuzi wa usalama wa kazi unaorodhesha mambo gani matatu?", options: ["Hatua, hatari na udhibiti", "Zana, bei na muda", "Wafanyakazi, zamu na mapumziko", "Wateja, anwani na namba za simu"], answer: 0, why: "Uchambuzi wa usalama wa kazi unaorodhesha kila hatua, hatari zake na udhibiti wake." },
            { objective: "O3", q: "Orodha yako ya usalama ya AI ya kubeba masanduku haitaji glavu, lakini sheria ya mwajiri inazihitaji. Ungefanya nini?", options: ["Kuacha glavu kwa sababu AI haikuziorodhesha", "Kuiuliza AI tena hadi ikubali", "Kuongeza glavu kwenye orodha na kufuata sheria ya mwajiri", "Kuvaa glavu kwa masanduku mazito tu"], answer: 2, why: "Sheria rasmi na za mwajiri ndizo zinashinda; ongeza kile AI ilichokosa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: AI kazini",
        questions: [
          { objective: "O1", q: "AI inasema ukaze bolti kwa torque ya 40 ft-lbs, lakini mwongozo unasema 25. Unafanya nini?", options: ["Kufuata AI", "Kuchagua wastani", "Kufuata mwongozo na kumuuliza msimamizi wako", "Kukaza kwa nguvu zako zote"], answer: 2, why: "Namba rasmi zinatoka kwenye mwongozo." },
          { objective: "O2", q: "Makadirio ya bei ni nini?", options: ["Bei iliyoandikwa ya kazi kabla haijaanza", "Risiti baada ya malipo", "Sheria ya usalama", "Aina ya zana"], answer: 0, why: "Makadirio yanaweka matarajio kabla kazi haijaanza." },
          { objective: "O2", q: "Unagundua tatizo lililofichika linaloongeza bei. Unapaswa kufanya nini?", options: ["Kutoza zaidi bila kumwambia", "Kuacha kazi", "Kuficha tatizo", "Kupata idhini ya mteja kabla ya kufanya kazi ya ziada"], answer: 3, why: "Mabadiliko ya bei yanahitaji idhini ya mteja." },
          { objective: "O3", q: "PPE inamaanisha:", options: ["Mfanyakazi wa umma anayelipwa", "Vifaa vya kujikinga binafsi", "Kiongezeo cha plagi ya umeme", "Kuingia katika mali binafsi"], answer: 1, why: "PPE ni vifaa kama glavu na miwani ya usalama." },
          { objective: "O3", q: "Kulingana na OSHA, kadi ya OSHA ya saa 10 ni:", options: ["Leseni ya serikali kuu", "Ya hiari na si cheti wala leseni", "Leseni ya udereva", "Inahitajika na OSHA kwa kila kazi"], answer: 1, why: "OSHA inasema kadi ya Outreach si cheti wala leseni." }
        ]
      }
    },
    {
      name: "Sura 2: Usafirishaji, rekodi na ajira",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuweka rekodi ya kazi kwa picha na maelezo",
          minutes: 5,
          goal: "Weka rekodi ya kazi ya kila siku yenye picha na maelezo mafupi, ukitumia AI kuyapanga vizuri.",
          text: [
            "Rekodi nzuri ya kazi inakulinda na inawavutia waajiri: inaonyesha ulichofanya, lini, na kwamba kilifanyika vizuri. Piga picha za kabla na baada, andika vifaa vilivyotumika, matatizo uliyopata, na muda uliotumika.",
            "Tumia kipengele cha sauti-kwa-maandishi kwenye simu yako kusema maelezo yako mwishoni mwa kazi, kisha iulize AI: \"Geuza maelezo haya kuwa ingizo fupi la kitaalamu la rekodi ya kazi lenye tarehe, mahali, kazi iliyofanyika, vifaa, matatizo na hatua zinazofuata.\" Hakikisha ni sahihi.",
            "Fuata sheria za mwajiri wako kuhusu picha: baadhi ya maeneo ya kazi hayaruhusu picha, na kamwe usipige picha wateja, nyaraka zao binafsi au mifumo ya ulinzi bila ruhusa. Hifadhi rekodi mahali mwajiri wako anaposema."
          ],
          steps: ["Piga picha za kabla na baada pale inaporuhusiwa.", "Sema au andika maelezo mafupi mwishoni mwa kazi.", "Iombe AI ipange ingizo la rekodi ya kazi.", "Hakikisha ni sahihi.", "Lihifadhi mahali mwajiri wako anaposema."],
          words: [["Rekodi ya kazi", "kumbukumbu ya kila siku ya kazi uliyofanya."], ["Sauti-kwa-maandishi", "kipengele cha simu kinachogeuza maneno unayosema kuwa maandishi."]],
          slides: [
            { title: "Kwa nini uweke rekodi", bullets: ["Inathibitisha ulichofanya na lini", "Inakulinda na inawavutia waajiri"] },
            { title: "Kurekodi haraka", bullets: ["Picha za kabla na baada", "Sema maelezo yako", "AI inapanga ingizo"] },
            { title: "Sheria za picha", bullets: ["Fuata sheria za eneo la kazi", "Hakuna wateja, nyaraka binafsi au mifumo ya ulinzi", "Hifadhi mahali mwajiri wako anaposema"] }
          ],
          tryIt: "Fanya kazi ndogo nyumbani (rekebisha, safisha au panga kitu). Piga picha za kabla na baada, sema maelezo yako, na uiache AI iyageuze kuwa ingizo la rekodi ya kazi.",
          youCanNow: "kuweka rekodi ya kazi ya kitaalamu yenye picha na maelezo yaliyopangwa na AI.",
          quickCheck: [
            { objective: "O4", q: "Picha ya kabla katika rekodi ya kazi inaonyesha nini?", options: ["Jinsi ulivyofanya kazi haraka", "Hali ilivyokuwa kabla hujaanza kazi", "Uso wa mteja", "Zana zako zinazouzwa"], answer: 1, why: "Picha za kabla na baada zinaonyesha ulichobadilisha na kwamba kilifanyika vizuri." },
            { objective: "O4", q: "Taarifa ya benki ya mteja iko juu ya meza unapofanyia kazi. Ungefanya nini kabla ya kupiga picha?", options: ["Kupiga picha; ni kwa ajili ya rekodi tu", "Kuiuliza AI kama ni sawa", "Kuikuza taarifa hiyo ili ionekane wazi", "Kusogea ili isionekane kwenye picha au kumwomba mteja aiondoe"], answer: 3, why: "Usipige picha nyaraka binafsi bila ruhusa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kupanga njia, mizigo na bidhaa",
          minutes: 5,
          goal: "Tumia apps za ramani na AI kupanga njia na orodha rahisi ya mzigo au ya bidhaa.",
          text: [
            "Madereva wa usambazaji, mafundi wa huduma na wafanyakazi wa ghala hupanga njia na mizigo kila siku. Apps za ramani za bure kama Google Maps zinakuruhusu kuongeza vituo kadhaa na zinaonyesha msongamano wa magari. Kampuni nyingi zinatumia programu zao wenyewe za kupanga njia; ijifunze unapoanza kazi.",
            "AI inaweza kukusaidia kufikiri: \"Nina simu 6 za huduma: [maeneo na muda wa kufika]. Pendekeza mpangilio unaopunguza uendeshaji na unaotimiza muda huo.\" Kisha ukague kwenye app ya ramani. Kwa mizigo: \"Tengeneza orodha ya kupakia kwa usambazaji huu ili vitu vya kituo cha mwisho viingie kwanza.\"",
            "Kwa bidhaa, karatasi rahisi yenye kitu, mahali (njia, rafu), idadi na kiwango cha kuagiza tena inasaidia. Kamwe usiiache AI ipindue mipaka ya uzito, sheria za kufunga mizigo, au sheria za saa za kazi za madereva; hizo zinatoka kwa mwajiri wako na sheria rasmi za usafirishaji."
          ],
          steps: ["Orodhesha vituo pamoja na maeneo na muda wa kufika.", "Iombe AI ipendekeze mpangilio.", "Ukague kwenye app ya ramani yenye taarifa za msongamano.", "Tengeneza orodha ya mzigo: kituo cha mwisho kinapakiwa kwanza.", "Fuata sheria za uzito, kufunga mizigo na saa za kuendesha kutoka kwa mwajiri wako."],
          words: [["Njia", "mpangilio na mwelekeo wa vituo."], ["Kufunga mzigo", "kufunga mizigo kwa nguvu ili isiweze kuhama wala kuanguka."], ["Saa za kazi za madereva (hours of service)", "sheria zinazopunguza muda ambao madereva wa magari ya biashara wanaweza kuendesha na kufanya kazi."]],
          slides: [
            { title: "Panga njia", bullets: ["Orodhesha vituo na muda wa kufika", "AI inapendekeza mpangilio", "Kagua kwenye app ya ramani"] },
            { title: "Panga mzigo", bullets: ["Kituo cha mwisho kinapakiwa kwanza", "Bidhaa: kitu, mahali, idadi"] },
            { title: "Sheria kwanza", bullets: ["Mipaka ya uzito na kufunga mizigo", "Saa za kazi za madereva", "Kutoka kwa mwajiri wako na sheria rasmi"] }
          ],
          tryIt: "Chagua maeneo matano halisi katika eneo lako. Iombe AI ipendekeze mpangilio bora wa kuyatembelea, kisha ukague kwenye app ya ramani ya bure na ulinganishe muda wa safari.",
          youCanNow: "kupanga njia na mzigo kwa AI na apps za ramani huku ukifuata sheria.",
          quickCheck: [
            { objective: "O5", q: "Bidhaa zilizopo (inventory) inamaanisha nini?", options: ["Orodha ya vitu ulivyo navyo ghalani na idadi yake", "Njia ya haraka zaidi", "Saa za dereva", "Sheria ya usalama ya kupakia"], answer: 0, why: "Inventory ni hesabu ya vitu ulivyo navyo." },
            { objective: "O5", q: "AI inapendekeza mpangilio wa njia kwa vituo vitano. Ungefanya nini baadaye?", options: ["Kuufuata bila kuangalia", "Kuukagua kwenye app ya ramani yenye msongamano kabla ya kuendesha", "Kuwaomba wateja wachague", "Kuendesha hadi kituo cha mbali zaidi kwanza"], answer: 1, why: "Mawazo ya njia kutoka AI yanahitaji kukaguliwa kwenye app ya ramani yenye msongamano wa sasa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kutafuta uanagenzi na kazi za ufundi",
          minutes: 5,
          goal: "Tafuta uanagenzi uliosajiliwa au kazi ya ufundi na ujiandae kuomba.",
          text: [
            "Uanagenzi Uliosajiliwa (Registered Apprenticeship) unakuwezesha kupata mshahara huku ukijifunza ufundi, ukiwa na mafunzo ya darasani na cheti kinachotambuliwa mwishoni. Tovuti ya Wizara ya Kazi ya Marekani, Apprenticeship.gov, ina Apprenticeship Job Finder (kitafutaji cha nafasi). Vyama vya wafanyakazi, vyuo vya jamii na programu za maandalizi ya uanagenzi pia zinatoa njia.",
            "Iombe AI ikueleze ufundi: \"Mwanagenzi wa HVAC anafanya nini kila siku, anatumia zana gani, na kuna hesabu gani?\" Kisha iombe ikusaidie kugeuza uzoefu wako kuwa wasifu wa kazi (résumé) wa ufundi, ukiweka kila kitu kuwa kweli.",
            "Baadhi ya kazi za ufundi na udereva zinahitaji leseni, mitihani au rekodi safi ya udereva, na baadhi ya leseni zinaangalia rekodi za uhalifu; kagua na ofisi ya leseni ya jimbo lako na uliza programu yako ya kurudi katika jamii au ya ajira ni waajiri na programu zipi zinawakaribisha watu wenye rekodi. Fika kwa uaminifu na ukiwa tayari kujifunza: katika ufundi, hilo ndilo muhimu zaidi."
          ],
          steps: ["Tafuta kwenye kitafutaji cha Apprenticeship.gov na programu za vyama au vyuo vya eneo lako.", "Iombe AI ikueleze ufundi na ujuzi unaohitajika.", "Kagua sheria za leseni na rekodi na ofisi ya jimbo lako.", "Uliza programu yako ya kurudi katika jamii au ya ajira kuhusu waajiri wa nafasi ya pili (fair-chance).", "Tengeneza wasifu wa kazi wa ufundi ulio wa kweli kwa msaada wa AI."],
          words: [["Uanagenzi Uliosajiliwa", "kazi yenye mshahara na mafunzo inayoongoza kwenye cheti kinachotambuliwa."], ["Maandalizi ya uanagenzi (pre-apprenticeship)", "programu fupi inayokuandaa kuingia katika uanagenzi."], ["Fundi kamili (journeyworker)", "mfanyakazi aliyemaliza mafunzo yote ya ufundi wake."]],
          slides: [
            { title: "Pata mshahara huku ukijifunza", bullets: ["Uanagenzi Uliosajiliwa: mshahara pamoja na mafunzo", "Cheti kinachotambuliwa mwishoni"] },
            { title: "Mahali pa kutafuta", bullets: ["Apprenticeship.gov Job Finder", "Vyama vya wafanyakazi na vyuo vya jamii", "Programu za maandalizi ya uanagenzi"] },
            { title: "Kagua sheria", bullets: ["Leseni, mitihani, rekodi ya udereva", "Ofisi ya leseni ya jimbo", "Waajiri wa nafasi ya pili kupitia programu yako"] }
          ],
          sources: [{ name: "Apprenticeship.gov (U.S. Department of Labor)", url: "https://www.apprenticeship.gov/" }],
          tryIt: "Kazi ya mwisho: tafuta kwenye Apprenticeship.gov au programu ya eneo lako nafasi moja ya uanagenzi au kazi ya ufundi unayoweza kuiomba. Kisha maliza faili yako ya kazi: muhtasari wa mwongozo, makadirio au agizo la kazi, orodha ya usalama iliyokaguliwa, ingizo la rekodi ya kazi na mpango wa njia au mzigo.",
          youCanNow: "kutumia AI kufanya kazi kwa akili zaidi katika kazi ya ufundi au usafirishaji na kupata njia ya kuingia katika kazi hiyo.",
          quickCheck: [
            { objective: "O6", q: "Maandalizi ya uanagenzi (pre-apprenticeship) ni nini?", options: ["Leseni ya kufanya kazi peke yako", "Kazi yenye mshahara kama msimamizi", "Programu inayokuandaa kuingia katika uanagenzi", "Mtihani unaofanya baada ya uanagenzi"], answer: 2, why: "Maandalizi ya uanagenzi yanajenga misingi ili uweze kuingia katika uanagenzi." },
            { objective: "O6", q: "Unataka kujua kama leseni ya ufundi unayohitaji inaangalia rekodi ya uhalifu. Ungefanya nini?", options: ["Kubahatisha kutokana na hadithi ya rafiki", "Kuiuliza AI na kuamini jibu lake", "Kuacha ufundi huo", "Kukagua na ofisi ya leseni ya jimbo lako"], answer: 3, why: "Ofisi ya leseni ya jimbo ina sheria rasmi za leseni hiyo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Usafirishaji, rekodi na ajira",
        questions: [
          { objective: "O4", q: "Kwa nini uweke picha za kabla na baada katika rekodi ya kazi?", options: ["Kupata likes kwenye mitandao ya kijamii", "Zinahitajika na kila sheria", "Kupiga picha wateja", "Zinaonyesha ulichofanya na kwamba kilifanyika vizuri"], answer: 3, why: "Picha zinathibitisha kazi." },
          { objective: "O5", q: "Unapopakia lori kwa vituo kadhaa, vitu vipi vinaingia kwanza?", options: ["Vitu vya kituo cha mwisho", "Vitu vya kituo cha kwanza", "Vitu vyepesi zaidi kila wakati", "Mpangilio wowote"], answer: 0, why: "Kituo cha mwisho kikiingia kwanza, vitu vya kituo cha kwanza vinafikika kwa urahisi." },
          { objective: "O5", q: "Mipaka ya uzito na sheria za saa za kuendesha zinatoka wapi?", options: ["Chatbot ya AI", "Marafiki zako", "Mwajiri wako na sheria rasmi za usafirishaji", "App ya ramani"], answer: 2, why: "Sheria rasmi ndizo zinaweka mipaka hii." },
          { objective: "O6", q: "Uanagenzi Uliosajiliwa ni nini?", options: ["Mafunzo kazini yasiyolipwa tu", "Shahada ya chuo", "Mtihani wa leseni", "Kazi yenye mshahara na mafunzo inayoongoza kwenye cheti kinachotambuliwa"], answer: 3, why: "Wanagenzi wanapata mshahara huku wakijifunza." },
          { objective: "O6", q: "Tovuti ipi ina Apprenticeship Job Finder ya Wizara ya Kazi ya Marekani?", options: ["App ya mitandao ya kijamii", "Blogu yoyote", "Apprenticeship.gov", "Tovuti ya manunuzi"], answer: 2, why: "Apprenticeship.gov inaendeshwa na Wizara ya Kazi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Kazi za Ufundi na Usafirishaji",
    questions: [
      { objective: "O6", q: "Ipi ni kazi ya ufundi?", options: ["Mshawishi wa mitandao ya kijamii", "Fundi umeme", "Mkosoaji wa filamu", "Mchezaji wa bahati nasibu"], answer: 1, why: "Kazi ya umeme ni kazi ya ufundi." },
      { objective: "O1", q: "AI inawezaje kusaidia na mwongozo mgumu?", options: ["Kuueleza kwa maneno rahisi", "Kubadilisha namba za mwongozo", "Kukufanyia kazi", "Kuidhinisha usalama"], answer: 0, why: "AI ni mwalimu mzuri wa maneno na hatua." },
      { objective: "O1", q: "Karatasi ya vipimo inaorodhesha:", options: ["Ratiba yako ya kazi", "Mshahara wako", "Vipimo halisi na mahitaji ya bidhaa", "Maoni ya wateja"], answer: 2, why: "Vipimo vinatoa mahitaji halisi." },
      { objective: "O1", q: "Namba zipi lazima zitoke kwenye mwongozo au kanuni, si AI?", options: ["Voltage, torque na mipaka ya uzito", "Tarehe", "Jina lako", "Rangi ya lori"], answer: 0, why: "Namba muhimu za usalama zinahitaji vyanzo rasmi." },
      { objective: "O2", q: "Gharama ya kazi (labor) kwenye makadirio inamaanisha:", options: ["Vipuri", "Kodi", "Anwani ya mteja", "Gharama ya muda wa mfanyakazi"], answer: 3, why: "Gharama ya kazi ni muda unaolipwa." },
      { objective: "O2", q: "Saa 2 kwa $60 pamoja na $100 za vipuri ni:", options: ["$62", "$120", "$160", "$220"], answer: 3, why: "2 x 60 = 120, ukiongeza 100 = 220." },
      { objective: "O2", q: "Makadirio mazuri pia yanasema:", options: ["Hakuna chochote kuhusu kazi", "Kinachojumuishwa, kisichojumuishwa, na tarehe ya mwisho", "Namba yako ya Social Security", "Bei isiyobadilika kwa hali yoyote"], answer: 1, why: "Masharti yaliyo wazi yanazuia migogoro." },
      { objective: "O3", q: "Uchambuzi wa usalama wa kazi unaorodhesha:", options: ["Bei tu", "Siku za kuzaliwa za timu", "Maoni ya wateja", "Hatua, hatari na udhibiti"], answer: 3, why: "Unapanga usalama kwa kila hatua." },
      { objective: "O3", q: "Kipi ni PPE?", options: ["Miwani ya usalama", "Kava ya simu", "Sanduku la chakula cha mchana", "App ya ramani"], answer: 0, why: "Miwani ya usalama inalinda macho yako." },
      { objective: "O3", q: "Nani anathibitisha orodha ya usalama iliyoandaliwa na AI?", options: ["Hakuna mtu", "AI yenyewe", "Msimamizi wako, mwongozo na vyanzo rasmi kama OSHA", "Video yoyote"], answer: 2, why: "AI si mamlaka ya usalama." },
      { objective: "O3", q: "Darasa la OSHA Outreach la saa 10:", options: ["Ni leseni ya mkandarasi", "Linachukua nafasi ya mafunzo yote ya kazi", "Linaendeshwa na AI", "Linafundisha misingi ya usalama; kadi ni ya hiari"], answer: 3, why: "OSHA inalieleza kama mafunzo ya hiari." },
      { objective: "O4", q: "Sauti-kwa-maandishi inakusaidia:", options: ["Kufanya simu kuwa nafuu", "Kuendesha kwa kasi zaidi", "Kusema maelezo badala ya kuandika", "Kusoma miongozo kwa sauti tu"], answer: 2, why: "Inageuza maneno yanayosemwa kuwa maandishi." },
      { objective: "O4", q: "Picha ipi HUPASWI kupiga bila ruhusa?", options: ["Matengenezo yaliyokamilika", "Nyaraka binafsi za mteja", "Kipuri kilichoharibika", "Sanduku lako la zana"], answer: 1, why: "Heshimu faragha ya mteja." },
      { objective: "O4", q: "Ingizo la rekodi ya kazi linajumuisha:", options: ["Tarehe, mahali, kazi iliyofanyika, vifaa, matatizo na hatua zinazofuata", "Maoni yako tu", "Nywila za mteja", "Hakuna kitu"], answer: 0, why: "Maingizo kamili ni rekodi zenye manufaa." },
      { objective: "O5", q: "Baada ya AI kupendekeza mpangilio wa njia, unapaswa:", options: ["Kuufuata bila kuangalia", "Kupuuza muda wa kufika", "Kuukagua kwenye app ya ramani yenye msongamano", "Kuendesha kwa kasi zaidi"], answer: 2, why: "Apps za ramani zinaonyesha muda halisi wa safari na msongamano." },
      { objective: "O5", q: "Kufunga mzigo kunamaanisha:", options: ["Kufunga mizigo kwa nguvu ili isiweze kuhama wala kuanguka", "Kufunga ofisi", "Kupata mkopo", "Kuhifadhi faili"], answer: 0, why: "Mizigo iliyofungwa vizuri inazuia ajali." },
      { objective: "O5", q: "Sheria za saa za kazi za madereva zinapunguza:", options: ["Saa za kufungua maduka", "Mapumziko ya chakula kwa wafanyakazi wa ofisi tu", "Matumizi ya intaneti", "Muda ambao madereva wa magari ya biashara wanaweza kuendesha na kufanya kazi"], answer: 3, why: "Zinazuia uchovu wa madereva." },
      { objective: "O6", q: "Maandalizi ya uanagenzi:", options: ["Ni leseni kamili", "Yanakuandaa kuingia katika uanagenzi", "Ni programu ya mikopo", "Ni aina ya zana"], answer: 1, why: "Yanajenga ujuzi wa kuingia katika uanagenzi." },
      { objective: "O6", q: "Unakagua wapi kama leseni ya ufundi inaangalia rekodi za uhalifu?", options: ["Kubahatisha kwa AI", "Ofisi ya leseni ya jimbo lako", "Maoni kwenye tangazo la kazi", "Hakuna mahali"], answer: 1, why: "Ofisi za jimbo ndizo zinaweka sheria za leseni." },
      { objective: "O6", q: "Katika ufundi, ni nini muhimu zaidi kwa waajiri wengi mwanzoni?", options: ["Kumiliki zana za bei ghali", "Kuwa na shahada", "Kumjua kila mtu", "Kufika kwa uaminifu na ukiwa tayari kujifunza"], answer: 3, why: "Uaminifu na mtazamo mzuri vinafungua milango." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [1, 3, 5, 7, 9, 13, 14, 17, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Muhtasari wa mwongozo", objective: "O1", notYet: "Muhtasari una namba isiyolingana na mwongozo, au hauna chanzo.", meets: "Muhtasari kwa maneno rahisi, kila namba ikiwa imekaguliwa dhidi ya mwongozo.", exceeds: "Pia unaonyesha hatua ipi inahitaji msimamizi au mfanyakazi mwenye leseni." },
      { name: "Makadirio au agizo la kazi", objective: "O2", notYet: "Inakosa gharama ya kazi, vipuri, jumla, kinachojumuishwa au tarehe ya mwisho, au hesabu si sahihi.", meets: "Sehemu zote zipo na hesabu imekaguliwa kwa mkono.", exceeds: "Pia inasema kisichojumuishwa na jinsi mabadiliko yatakavyoidhinishwa." },
      { name: "Orodha ya usalama", objective: "O3", notYet: "Imenakiliwa kutoka AI bila ukaguzi rasmi.", meets: "Imekaguliwa dhidi ya mwongozo au chanzo rasmi, na chochote kilichokosekana kimeongezwa.", exceeds: "Inataja chanzo na PPE kwa kila hatari." },
      { name: "Rekodi ya kazi", objective: "O4", notYet: "Inakosa tarehe, kazi iliyofanyika, vifaa, matatizo au hatua zinazofuata, au inaonyesha taarifa binafsi.", meets: "Ingizo kamili lenye maelezo ya picha za kabla na baada na bila taarifa binafsi.", exceeds: "Mfanyakazi mwingine angeweza kuendeleza kazi kwa ingizo hili pekee." },
      { name: "Mpango wa njia au mzigo", objective: "O5", notYet: "Njia haijakaguliwa, au mzigo uko katika mpangilio usio sahihi.", meets: "Njia imekaguliwa kwenye app ya ramani na mizigo imepangwa kinyume na mpangilio wa vituo.", exceeds: "Pia inaorodhesha idadi za bidhaa na inataja sheria kutoka kwa mwajiri." },
      { name: "Kazi inayofuata imepatikana", objective: "O6", notYet: "Hakuna uanagenzi wala kazi iliyopatikana.", meets: "Uanagenzi mmoja halisi au kazi ya ufundi pamoja na masharti yake na jinsi ya kuiomba.", exceeds: "Pia inaorodhesha hatua ya kwanza atakayochukua wiki hii." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaoomba uanagenzi, maandalizi ya uanagenzi au kazi ya ufundi ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoanza uanagenzi au kazi ya ufundi ndani ya siku 90",
      "Wanafunzi wanaoripoti kutumia AI kuandika makadirio, rekodi ya kazi au orodha ya usalama kazini",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya ufundi au ajira ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja yenye kamera na intaneti",
      "Msaidizi wa AI wa bure kama ChatGPT, Microsoft Copilot au Google Gemini, na app ya ramani ya bure",
      "Mwongozo wa zana, kifaa cha nyumbani au gari (wa karatasi au mtandaoni)",
      "Karatasi na kalamu au app ya maelezo kwa ajili ya faili ya kazi",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Sisitiza katika kila kipindi kwamba namba na sheria za usalama zinatoka kwenye mwongozo, kwa mwajiri na OSHA, si kutoka kwa AI.",
      "Leta miongozo halisi na mifano ya makadirio kutoka kwa mafundi wa eneo lako ili wanafunzi wafanye mazoezi kwa nyaraka halisi.",
      "Usiwaruhusu wanafunzi kufanya kazi ya umeme, gesi au kazi nyingine inayohitaji leseni kama mazoezi; tumia kazi salama za nyumbani.",
      "Waunganishe wanafunzi na programu za maandalizi ya uanagenzi za eneo lako na waajiri wanaoajiri watu wenye rekodi.",
      "Pima faili ya kazi kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
