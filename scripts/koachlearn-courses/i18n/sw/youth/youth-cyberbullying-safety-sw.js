"use strict";

// Koach Learn course (Swahili translation of youth/youth-cyberbullying-safety.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "youth-cyberbullying-safety-sw",
  lang: "sw",
  translationOf: "youth-cyberbullying-safety",
  category: "Youth",
  name: "Kujilinda dhidi ya Uonevu Mtandaoni",
  skills: "Kutambua uonevu mtandaoni, Kutulia na kutolipiza kisasi, Kuhifadhi ushahidi, Kuzuia na kuripoti kwenye apps, Kumwambia mtu mzima unayemwamini na shule, Kumsaidia mwingine kama mtetezi",
  outcome: "kutambua uonevu mtandaoni, kujibu bila kuufanya kuwa mbaya zaidi, kuhifadhi ushahidi, kumzuia (block) na kumripoti mtu kwenye app, kumwambia mtu mzima unayemwamini na shule, kujua lini ni jambo la polisi, na kumsaidia rafiki anayeonewa.",
  about: [
    "Uonevu mtandaoni (cyberbullying) ni uonevu unaofanyika kupitia simu, kompyuta na michezo: ujumbe mfupi, makundi ya gumzo, mitandao ya kijamii, maoni (comments), majukwaa na michezo ya mtandaoni. Kwa kuwa unaweza kukufuata hadi nyumbani na kuenea haraka, unaweza kuhisi kama hakuna pa kukimbilia. Kuna mengi unayoweza kufanya, na huhitaji kulishughulikia peke yako.",
    "Kozi hii ni kwa vijana, na kwa wazazi, makocha, washauri na wafanyakazi wa vijana wanaowasaidia. Utajifunza uonevu mtandaoni ni nini, jinsi ya kujibu kwa usalama, jinsi ya kuhifadhi ushahidi, jinsi ya kuzuia na kuripoti, umwambie nani na jinsi ya kumsaidia mwingine.",
    "Ukiwahi kujisikia si salama au kufikiria kujidhuru, mwambie mtu mzima unayemwamini mara moja. Marekani unaweza kupiga simu au kutuma ujumbe kwa 988 wakati wowote. Mtu akiwa katika hatari ya haraka, piga 911 (au namba ya dharura ya nchi yako).",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Kuna jaribio fupi la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Andika mpango wako binafsi wa usalama dhidi ya uonevu mtandaoni: jinsi ya kuhifadhi ushahidi kwenye simu yako (hatua za kupiga picha ya skrini na mahali utakapozihifadhi), vitufe vya kuzuia na kuripoti viko wapi kwenye apps mbili unazotumia zaidi, majina ya watu wazima wawili unaowaamini ambao ungewaambia (na mtu mmoja shuleni), ungewaambia nini, lini ungeenda polisi, na jambo moja ungefanya kumsaidia rafiki anayeonewa.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Vijana wanaotumia simu, mitandao ya kijamii, makundi ya gumzo na michezo ya mtandaoni, pamoja na wazazi, makocha, washauri na wafanyakazi wa vijana wanaowasaidia.",
    startingPoint: "Wanatumia apps na michezo kila siku na wameona au kupokea ujumbe wa kuumiza mtandaoni. Wengi hujibu kwa hasira, husambaza machapisho ya kuumiza, hufuta ujumbe kabla ya kuhifadhi ushahidi, au hawamwambii mtu mzima.",
    gap: "Uonevu mtandaoni unaweza kuwafuata vijana hadi nyumbani, kuenea haraka na kudhuru hisia zao, usalama wao na masomo yao. Kujua kujibu kwa utulivu, kuhifadhi ushahidi, kuzuia na kuripoti, kumwambia mtu mzima sahihi, kutambua lini ni jambo la polisi na kumsaidia rafiki kunawasaidia kubaki salama na kutokabiliana nalo peke yao.",
    constraints: [
      "Mada nyeti kihisia: wanafunzi wanaojisikia si salama au wasio na matumaini wanaelekezwa kwa mtu mzima wanayemwamini, 988 Marekani, au 911 wakati wa dharura",
      "Picha za ngono za vijana hazipaswi kamwe kuhifadhiwa wala kusambazwa, hata kama ushahidi",
      "Menyu za apps hubadilika; wanafunzi wanatafuta katika kituo cha msaada au usalama cha kila app",
      "Faragha: hakuna maudhui halisi ya kuumiza yanayoonyeshwa darasani",
      "Masomo mafupi na maneno rahisi kwa vijana na watu wazima wanaowasaidia"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa hali mbalimbali za mtandaoni", action: "kutambua zipi ni uonevu mtandaoni na zipi ni ugomvi wa kawaida", standard: "ukieleza kwa nini kwa kutumia nia, kujirudia na tofauti ya nguvu" },
    { id: "O2", condition: "Mtu anapokutumia ujumbe wa kuumiza", action: "kujiweka mbali badala ya kujibu, kulipiza kisasi au kusambaza chapisho", standard: "ukitaja mambo matatu hutafanya na hatua zinazofuata utakazochukua" },
    { id: "O3", condition: "Uonevu mtandaoni unapotokea", action: "kuhifadhi ushahidi kwa picha za skrini na daftari rahisi kabla ya kuzuia chochote", standard: "ukionyesha jina la mtumiaji, tarehe na saa, na bila kamwe kuhifadhi wala kusambaza picha za ngono za kijana" },
    { id: "O4", condition: "Kwenye apps mbili unazotumia zaidi", action: "kupata njia za kuzuia na kuripoti na kukagua mipangilio yako ya faragha", standard: "bila msaada" },
    { id: "O5", condition: "Wewe au rafiki yako mnapoonewa mtandaoni", action: "kumwambia mtu mzima unayemwamini ukiwa na ushahidi wako na kuamua lini jambo linapelekwa shuleni au polisi", standard: "ukitaja watu wazima wawili unaowaamini na mtu mmoja shuleni" },
    { id: "O6", condition: "Mtu mwingine anapoonewa", action: "kumsaidia kama mtetezi na kuandika mpango wako mwenyewe wa usalama", standard: "ukijumuisha kila sehemu ya mpango" }
  ],
  chapters: [
    {
      name: "Sura 1: Kutambua uonevu mtandaoni na kujibu kwa usalama",
      lessons: [
        {
          objectives: ["O1"],
          title: "Uonevu mtandaoni ni nini (na si nini)",
          minutes: 5,
          goal: "Tofautisha uonevu mtandaoni na kutokubaliana kwa kawaida.",
          text: [
            "Uonevu mtandaoni ni kutumia teknolojia kumuumiza, kumuaibisha, kumtisha au kumlenga mtu, kwa kawaida zaidi ya mara moja. Mifano: ujumbe mbaya au wa vitisho, kueneza uvumi, kuweka picha au video za kuaibisha, kufungua akaunti bandia za kumdhihaki mtu, kumwacha mtu nje ya kundi la gumzo makusudi ili kumuumiza, au kusambaza ujumbe au picha za faragha bila ruhusa.",
            "Mara nyingi unafanyika kupitia ujumbe mfupi, mitandao ya kijamii, maoni, ujumbe wa moja kwa moja (DM), majukwaa na michezo. Machapisho ya mtandaoni yanaweza kubaki milele na kuonekana na wote yasiporipotiwa na kuondolewa, na yanaweza kuenea kwa watu wengi haraka.",
            "Si kila ubishi wa mtandaoni ni uonevu. Kutokubaliana mara moja kati ya watu walio sawa ni ugomvi. Uonevu ni kumuumiza mtu makusudi, mara nyingi tena na tena, na mara nyingi kukiwa na tofauti ya nguvu: watu wengi zaidi, umaarufu zaidi, au taarifa za siri za kutumia dhidi yake. Baadhi ya uonevu mtandaoni, kama vitisho au unyanyasaji kwa sababu ya rangi, dini, jinsia, mwelekeo wa kimapenzi au ulemavu, unaweza kuwa kinyume cha sheria."
          ],
          steps: ["Uliza: je, hili linakusudia kuumiza, kuaibisha au kutisha?", "Uliza: je, linatokea zaidi ya mara moja, au linaenea?", "Uliza: je, kuna tofauti ya nguvu (kundi, umaarufu, taarifa za siri)?", "Jibu likiwa ndiyo, lichukulie kama uonevu mtandaoni na utumie hatua za kozi hii."],
          words: [["Uonevu mtandaoni (cyberbullying)", "kutumia simu, kompyuta au michezo kumuumiza, kumuaibisha, kumtisha au kumlenga mtu."], ["Unyanyasaji", "tabia inayojirudia inayomkasirisha, kumtisha au kumwogopesha mtu."], ["Ugomvi", "kutokubaliana kati ya watu; si sawa na uonevu."]],
          slides: [
            { title: "Uonevu mtandaoni unaonekanaje", bullets: ["Ujumbe mbaya au wa vitisho, uvumi", "Picha au video za kuaibisha zinawekwa mtandaoni", "Akaunti bandia, kumwacha mtu nje makusudi", "Kusambaza ujumbe au picha za faragha"] },
            { title: "Unafanyika wapi", bullets: ["Ujumbe mfupi na makundi ya gumzo", "Mitandao ya kijamii, maoni, DM", "Majukwaa na michezo ya mtandaoni"] },
            { title: "Uonevu au ugomvi?", bullets: ["Unakusudia kuumiza?", "Unajirudia au unaenea?", "Kuna tofauti ya nguvu?"] },
            { title: "Baadhi yake ni kinyume cha sheria", bullets: ["Vitisho", "Unyanyasaji kwa sababu ya rangi, dini, jinsia, mwelekeo wa kimapenzi au ulemavu"] }
          ],
          sources: [
            { name: "MedlinePlus: Bullying (uonevu)", url: "https://medlineplus.gov/bullying.html" },
            { name: "StopBullying.gov: What Is Cyberbullying (uonevu mtandaoni ni nini)", url: "https://www.stopbullying.gov/cyberbullying/what-is-it" }
          ],
          tryIt: "Soma hali hizi tatu na uandike kila moja kama uonevu au ugomvi: (1) rafiki hakubaliani na maoni yako kuhusu mchezo mara moja; (2) kundi linaendelea kuweka akaunti bandia inayomdhihaki mwanafunzi mwenzao; (3) mtu anaendelea kukutumia vitisho baada ya kumwambia aache. Andika kwa nini kwa kila moja.",
          youCanNow: "kutambua uonevu mtandaoni na kuutofautisha na kutokubaliana kwa kawaida.",
          quickCheck: [
            { objective: "O1", q: "Kwa kawaida ni nini kinachofanya jambo kuwa uonevu mtandaoni badala ya ugomvi?", options: ["Linakusudia kuumiza, mara nyingi linajirudia, na mara nyingi kuna tofauti ya nguvu", "Marafiki wawili hawakubaliani mara moja", "Mtu anaweka maoni usiyoyapenda", "Mchezo unaisha kwa kushindwa"], answer: 0, why: "Uonevu ni kumuumiza mtu makusudi, mara nyingi tena na tena, mara nyingi kukiwa na tofauti ya nguvu." },
            { objective: "O1", q: "Mwanafunzi mwenzako anaachwa nje ya kundi la gumzo makusudi, kila wiki, ili kumuumiza. Unaliitaje?", options: ["Ugomvi wa kawaida", "Si jambo la kuhangaikia", "Uonevu mtandaoni", "Mchezo"], answer: 2, why: "Kumwacha mtu nje makusudi ili kumuumiza, tena na tena, ni aina ya uonevu mtandaoni." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kujibu bila kufanya mambo kuwa mabaya zaidi",
          minutes: 5,
          goal: "Jibu ujumbe wa kuumiza kwa kujiweka mbali badala ya kulipiza kisasi.",
          text: [
            "Mtu anapokushambulia mtandaoni, ni kawaida kutaka kulipiza. Lakini kujibu kwa hasira, kumtukana naye au kuandika kumhusu kwa kawaida hufanya mambo kuwa mabaya zaidi, na kunaweza kukufanya uonekane kuwa sehemu ya tatizo. KidsHealth inashauri usijibu wala usilipize kisasi, ujiweke mbali na usisambaze ujumbe huo.",
            "Kwanza, jiweke mbali na skrini. Vuta pumzi polepole mara kadhaa. Jikumbushe: hili linahusu tabia yao, si thamani yako, na si kosa lako. Kisha fuata mpango: hifadhi ushahidi, zuia, ripoti na mwambie mtu. Utajifunza kila hatua katika kozi hii.",
            "Usisambaze wala kushiriki chapisho la kuumiza, hata kuwaonyesha marafiki jinsi lilivyo baya; hilo linalieneza zaidi. Na usijifanye mtu mwingine wala kufungua akaunti bandia ili kulipiza kisasi."
          ],
          steps: ["Usijibu wala kulipiza kisasi.", "Jiweke mbali na vuta pumzi.", "Jikumbushe kwamba si kosa lako.", "Usisambaze wala kushiriki chapisho.", "Kisha: hifadhi ushahidi, zuia, ripoti, mwambie mtu mzima."],
          words: [["Kulipiza kisasi", "kumuumiza mtu naye baada ya yeye kukuumiza."], ["Kusambaza (forward)", "kutuma ujumbe au chapisho kwa watu wengine."]],
          slides: [
            { title: "Usilipize kisasi", bullets: ["Kujibu kwa hasira kwa kawaida hufanya mambo kuwa mabaya zaidi", "Kunaweza kukufanya uonekane kuwa sehemu ya tatizo"] },
            { title: "Jiweke mbali", bullets: ["Weka simu chini", "Vuta pumzi polepole", "Si kosa lako"] },
            { title: "Usilieneze", bullets: ["Usisambaze wala kushiriki chapisho", "Hakuna akaunti bandia za kulipiza kisasi"] },
            { title: "Kisha fuata mpango", bullets: ["Hifadhi ushahidi", "Zuia na ripoti", "Mwambie mtu mzima unayemwamini"] }
          ],
          sources: [{ name: "KidsHealth (Nemours): Cyberbullying (kwa vijana)", url: "https://kidshealth.org/en/teens/cyberbullying.html" }],
          tryIt: "Mtu anaandika maoni \"wewe ni kichekesho, kila mtu anakuchukia\" chini ya chapisho lako. Andika mambo matatu HUTAFANYA na utakachoFANYA katika dakika tano zijazo.",
          youCanNow: "kutulia, kuepuka kulipiza kisasi au kueneza jambo hilo, na kuhamia kwenye mpango salama.",
          quickCheck: [
            { objective: "O2", q: "Kwa nini kujibu kwa matusi si wazo zuri?", options: ["Daima kunamaliza uonevu", "Kwa kawaida kunafanya mambo kuwa mabaya zaidi na kunaweza kukufanya uonekane sehemu ya tatizo", "Apps huzuia matusi yenyewe", "Kunahifadhi ushahidi"], answer: 1, why: "Kulipiza kisasi kwa kawaida kunafanya mambo kuwa mabaya zaidi." },
            { objective: "O2", q: "Chapisho la kuumiza kukuhusu linazunguka. Rafiki anakuomba ulimtumie ili alione. Unafanya nini?", options: ["Kulisambaza kwa marafiki wachache", "Kuliweka kwenye ukurasa wako", "Kufungua akaunti bandia ya kujibu", "Kutolisambaza; kuhifadhi ushahidi na kufuata mpango wako"], answer: 3, why: "Kusambaza chapisho la kuumiza kunalieneza zaidi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuhifadhi ushahidi",
          minutes: 5,
          goal: "Piga na uhifadhi picha za skrini zinazothibitisha kilichotokea.",
          text: [
            "Ushahidi unawasaidia watu wazima, shule, apps na polisi kuchukua hatua. Kabla ya kuzuia au kufuta chochote, hifadhi ushahidi. KidsHealth inashauri kupiga picha za skrini (screenshots) au kumwomba mzazi anakili au ahifadhi ujumbe huo.",
            "Picha nzuri ya skrini inaonyesha: ujumbe au chapisho, jina la mtumiaji au jina la akaunti (na ukurasa wa wasifu au kiungo ukiweza), na tarehe na saa. Hifadhi kila tukio, si lile baya zaidi tu. Weka daftari rahisi: tarehe, app, kilichotokea, nani aliona. Hifadhi picha za skrini katika folda ya siri au zimtumie mtu mzima unayemwamini.",
            "Kuna jambo moja muhimu tofauti: mtu akituma au kusambaza picha ya ngono ya kijana, USIPIGE picha ya skrini, usihifadhi wala usisambaze picha yenyewe; hilo linaweza kuwa kinyume cha sheria hata kwako. Hifadhi jina la mtumiaji, kiungo na ujumbe unaoizunguka, na mwambie mtu mzima unayemwamini mara moja. Mtu akitishia kusambaza picha za ngono usipolipa au usipotuma zaidi, usilipe wala usitume chochote; mzuie lakini usifute ujumbe, na utafute msaada. Marekani, ripoti kwenye report.cybertip.org, na tumia huduma ya bure ya Take It Down (takeitdown.ncmec.org) kusaidia kuondoa picha zilizopigwa ulipokuwa chini ya miaka 18."
          ],
          steps: ["Kabla ya kuzuia, piga picha ya skrini ya kila ujumbe au chapisho.", "Hakikisha inaonyesha jina la mtumiaji, tarehe na saa.", "Hifadhi kiungo cha wasifu ukiweza.", "Andika daftari fupi: tarehe, app, kilichotokea.", "Lihifadhi kwa siri au mtumie mtu mzima unayemwamini."],
          words: [["Ushahidi", "uthibitisho wa kilichotokea, kama picha za skrini na ujumbe uliohifadhiwa."], ["Picha ya skrini (screenshot)", "picha ya kile kilicho kwenye skrini yako."], ["Sextortion", "kutishia kusambaza picha za ngono za mtu asipolipa au asipotuma zaidi; ni uhalifu."]],
          slides: [
            { title: "Hifadhi ushahidi kwanza", bullets: ["Kabla ya kuzuia au kufuta", "Ushahidi unawasaidia watu wazima, shule, apps na polisi kuchukua hatua"] },
            { title: "Picha nzuri ya skrini inaonyesha", bullets: ["Ujumbe au chapisho", "Jina la mtumiaji au akaunti", "Tarehe na saa"] },
            { title: "Weka daftari", bullets: ["Tarehe, app, kilichotokea, nani aliona", "Lihifadhi kwa siri au mpe mtu mzima"] },
            { title: "Picha za ngono: sheria tofauti", bullets: ["Usipige picha ya skrini wala kusambaza picha hiyo", "Hifadhi jina la mtumiaji, kiungo na ujumbe; mwambie mtu mzima", "Ripoti: report.cybertip.org; Take It Down"] }
          ],
          sources: [
            { name: "KidsHealth (Nemours): Cyberbullying (kwa vijana)", url: "https://kidshealth.org/en/teens/cyberbullying.html" },
            { name: "NCMEC: Sextortion", url: "https://www.missingkids.org/theissues/sextortion" },
            { name: "NCMEC: Take It Down", url: "https://takeitdown.ncmec.org/" }
          ],
          tryIt: "Fanya mazoezi ya kupiga picha ya skrini kwenye simu yako ya skrini yoyote isiyo na madhara (kama app ya hali ya hewa). Tafuta ilipohifadhiwa. Fungua folda au albamu ya siri inayoitwa \"ushahidi\" na uandike hatua ili uzikumbuke.",
          youCanNow: "kupiga picha za skrini zinazothibitisha kilichotokea, kuweka daftari, na kushughulikia picha za ngono kwa usalama kwa kumwambia mtu mzima badala ya kuzihifadhi.",
          quickCheck: [
            { objective: "O3", q: "Daftari zuri la ushahidi ni lipi?", options: ["Orodha ya tarehe, app, kilichotokea na nani aliona", "Historia ya simu zako", "Orodha ya nywila zako", "Nakala ya anwani ya mwonevu"], answer: 0, why: "Daftari rahisi linawasaidia watu wazima, shule, apps na polisi kuchukua hatua." },
            { objective: "O3", q: "Unakaribia kumzuia mtu aliyekutumia vitisho. Unafanya nini kwanza?", options: ["Kufuta ujumbe wote", "Kumjibu mara ya mwisho", "Kupiga picha ya skrini ya ujumbe inayoonyesha jina la mtumiaji, tarehe na saa", "Kuwasambazia darasa zima"], answer: 2, why: "Hifadhi ushahidi kabla ya kuzuia au kufuta chochote." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kutambua uonevu mtandaoni na kujibu kwa usalama",
        questions: [
          { objective: "O1", q: "Kipi ni mfano wa uonevu mtandaoni?", options: ["Rafiki hakubaliani nawe mara moja kuhusu filamu", "Kundi linaendelea kuweka akaunti bandia ya kumdhihaki mwanafunzi mwenzao", "Mtu anasahau kujibu ujumbe", "Mwalimu anaweka kazi ya nyumbani mtandaoni"], answer: 1, why: "Linajirudia, linakusudia kuumiza, na kuna kundi nyuma yake." },
          { objective: "O2", q: "Mtu anaandika maoni mabaya kukuhusu. Hatua bora ya kwanza ni ipi?", options: ["Kumtukana naye", "Kulisambaza kwa kila mtu", "Kufungua akaunti bandia ya kulipiza kisasi", "Kutojibu; kujiweka mbali na kufuata mpango wako wa usalama"], answer: 3, why: "Kulipiza kisasi kwa kawaida kunafanya mambo kuwa mabaya zaidi; kujiweka mbali kunakuweka katika udhibiti." },
          { objective: "O3", q: "Unapaswa kuhifadhi ushahidi lini?", options: ["Kabla ya kuzuia au kufuta chochote", "Kamwe", "Baada ya mwezi mmoja tu", "Likitokea mara kumi tu"], answer: 0, why: "Ukishazuia au kufuta, ushahidi unaweza kupotea." },
          { objective: "O3", q: "Picha nzuri ya skrini inapaswa kuonyesha nini?", options: ["Jibu lako tu", "Skrini yako ya mwanzo", "Ujumbe, jina la mtumiaji, na tarehe na saa", "Nywila yako"], answer: 2, why: "Maelezo hayo yanathibitisha nani alituma nini na lini." },
          { objective: "O3", q: "Mtu anakutumia picha ya ngono ya mwanafunzi mwenzako. Unapaswa kufanya nini?", options: ["Kuipiga picha ya skrini na kuisambaza kama ushahidi", "Kuituma kwa marafiki wa mwanafunzi huyo", "Kuiweka mtandaoni kuwaonya wengine", "Kutoihifadhi wala kuisambaza picha; kuandika jina la mtumiaji na kumwambia mtu mzima unayemwamini mara moja"], answer: 3, why: "Kuhifadhi au kusambaza picha kama hizo kunaweza kuwa kinyume cha sheria; watu wazima na huduma za kuripoti wanaweza kuchukua hatua." }
        ]
      }
    },
    {
      name: "Sura 2: Kuchukua hatua na kupata msaada",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuzuia na kuripoti kwenye apps",
          minutes: 5,
          goal: "Pata na utumie njia za kuzuia na kuripoti kwenye apps unazotumia.",
          text: [
            "Karibu kila app ya mitandao ya kijamii, app ya ujumbe na mchezo wa mtandaoni unakuruhusu kuzuia (block), kunyamazisha (mute) na kuripoti (report). Kuzuia kunamzuia mtu kuwasiliana nawe au kuona machapisho yako. Kunyamazisha kunamficha bila kumwambia. Kuripoti kunaiambia kampuni kwamba mtu amevunja sheria zake; kampuni inaweza kuondoa machapisho au kufunga akaunti. KidsHealth pia inashauri kuripoti kwa kampuni ya simu yako au ya barua pepe uonevu unapokuja kupitia huko.",
            "Kwa kawaida njia hizi zinapatikana kwa kugusa vitone vitatu au jina au wasifu wa mtu, au kwa kubonyeza na kushikilia ujumbe. Majina ya menyu hubadilika, kwa hiyo usipoyapata, tafuta \"block\" na \"report\" katika kituo cha msaada au usalama cha app.",
            "Pia linda faragha yako: fanya akaunti zako ziwe za faragha (private) ukiweza, punguza nani anaweza kutoa maoni au kukutumia ujumbe, usimpe mtu yeyote nywila zako (hata marafiki), na fikiri kabla ya kuweka taarifa binafsi kama shule yako, anwani yako au mahali ulipo sasa hivi."
          ],
          steps: ["Hifadhi ushahidi kwanza.", "Fungua wasifu wa mtu au ujumbe, kisha menyu (mara nyingi vitone vitatu).", "Chagua Report na uchague sababu inayofaa.", "Chagua Block (au Mute kama kuzuia kungefanya mambo kuwa mabaya zaidi).", "Kagua mipangilio yako ya faragha: nani anaweza kukutumia ujumbe, kutoa maoni au kuona machapisho yako."],
          words: [["Kuzuia (block)", "kumzuia mtu kuwasiliana nawe au kuona machapisho yako."], ["Kuripoti (report)", "kuiambia app au kampuni kwamba mtu amevunja sheria zake."], ["Mipangilio ya faragha", "machaguo yanayodhibiti nani anaweza kuona machapisho yako na kuwasiliana nawe."]],
          slides: [
            { title: "Zana tatu", bullets: ["Block (zuia): hawezi kuwasiliana nawe", "Mute (nyamazisha): mfiche kimya kimya", "Report (ripoti): iambie kampuni amevunja sheria"] },
            { title: "Mahali pa kuzipata", bullets: ["Gusa vitone vitatu, jina au wasifu", "Au bonyeza na ushikilie ujumbe", "Huzipati? Tafuta katika kituo cha usalama cha app"] },
            { title: "Linda faragha yako", bullets: ["Akaunti ya faragha ukiweza", "Punguza nani anaweza kukutumia ujumbe au kutoa maoni", "Usimpe mtu nywila, hata marafiki"] }
          ],
          sources: [{ name: "KidsHealth (Nemours): Cyberbullying (kwa vijana)", url: "https://kidshealth.org/en/teens/cyberbullying.html" }],
          tryIt: "Kwenye apps mbili unazotumia zaidi, tafuta (lakini usitumie) njia za kuzuia na kuripoti akaunti. Kisha kagua mpangilio mmoja wa faragha kwenye kila app, kama nani anaweza kukutumia ujumbe, na uubadilishe ukitaka.",
          youCanNow: "kupata na kutumia block, mute na report kwenye apps zako na kuimarisha mipangilio yako ya faragha.",
          quickCheck: [
            { objective: "O4", q: "Kumnyamazisha (mute) mtu kunafanya nini?", options: ["Kunafuta akaunti yake", "Kunaficha machapisho yake bila kumwambia", "Kunamripoti kwa polisi", "Kunamruhusu aone machapisho yako zaidi"], answer: 1, why: "Kunyamazisha kunamficha bila kumwambia; kuzuia kunamzuia kuwasiliana nawe." },
            { objective: "O4", q: "Watu usiowajua wanaendelea kutoa maoni kwenye machapisho yako. Hatua ipi ya faragha inasaidia zaidi?", options: ["Kumpa rafiki nywila yako", "Kuweka jina la shule yako", "Kuwasha kushiriki mahali ulipo", "Kupunguza nani anaweza kutoa maoni au kukutumia ujumbe"], answer: 3, why: "Kupunguza nani anaweza kukutumia ujumbe au kutoa maoni kunakulinda." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kumwambia mtu mzima unayemwamini, shule, na lini kwenda polisi",
          minutes: 6,
          goal: "Mwambie mtu mzima unayemwamini kinachoendelea na ujue lini jambo linapelekwa shuleni au polisi.",
          text: [
            "Vijana wengi hawamwambii mtu yeyote kwa sababu wanaogopa mambo yatakuwa mabaya zaidi, watanyang'anywa simu, au wanaona aibu. Lakini watu wazima wanaweza kufanya mambo wewe huwezi: kuzungumza na shule, kuwasiliana na app, au kwenda polisi. KidsHealth inasema endelea kusema hadi upate mtu anayekusaidia.",
            "Watu wazima unaoweza kuwaamini ni pamoja na mzazi au mlezi, mwanafamilia mwingine, mwalimu, mshauri wa shule, kocha, mshauri (mentor) au kiongozi wa vijana. Anza kwa urahisi: \"Kuna mtu anaendelea kunitumia ujumbe mbaya na sijui nifanye nini. Unaweza kunisaidia? Nimehifadhi picha za skrini.\" Mtu mzima wa kwanza asipokusaidia, mwambie mwingine. Shule nyingi zina sera dhidi ya uonevu, hasa unapohusisha wanafunzi; mshauri wa shule au mkuu wa shule anaweza kuchukua hatua.",
            "Nenda polisi, pamoja na mtu mzima, jambo linapohusu vitisho vya vurugu, picha au ujumbe wa ngono, picha au video zilizopigwa mahali pa faragha (kama bafuni au chumba cha kubadilishia nguo), kunyemelewa (stalking), au chuki kwa sababu ya wewe ni nani. StopBullying.gov inaeleza lini kuripoti kwa polisi na sheria za uonevu za jimbo lako. Mtu yeyote akiwa katika hatari ya haraka, piga 911 (au namba ya dharura ya nchi yako). Uonevu ukikuacha ukijisikia huna matumaini au ukifikiria kujidhuru, mwambie mtu mzima sasa; Marekani, piga simu au tuma ujumbe kwa 988."
          ],
          steps: ["Chagua mtu mzima unayemwamini.", "Mwambie kilichotokea na umwonyeshe ushahidi wako.", "Mwombe akusaidie kuwasiliana na shule kama wanafunzi wanahusika.", "Nenda polisi na mtu mzima kwa vitisho, picha za ngono, kunyemelewa au chuki.", "Hatari sasa: piga 911. Huna matumaini: piga simu au tuma ujumbe kwa 988."],
          words: [["Mtu mzima unayemwamini", "mtu mzima unayejisikia salama naye anayeweza kusaidia, kama mzazi, mwalimu, mshauri au kocha."], ["Kunyemelea (stalking)", "kumfuata, kumtazama au kuwasiliana na mtu tena na tena kwa namna inayomtia hofu."]],
          slides: [
            { title: "Kwa nini umwambie mtu mzima", bullets: ["Anaweza kuwasiliana na shule, app au polisi", "Endelea kusema hadi mtu akusaidie"] },
            { title: "Nani na jinsi gani", bullets: ["Mzazi, mwalimu, mshauri wa shule, kocha, mentor", "\"Kuna mtu anaendelea kunitumia ujumbe mbaya.\"", "Onyesha picha zako za skrini"] },
            { title: "Lini kwenda polisi", bullets: ["Vitisho vya vurugu", "Picha au ujumbe wa ngono", "Picha za mahali pa faragha, kunyemelewa, chuki"] },
            { title: "Msaada wa haraka", bullets: ["Hatari sasa: piga 911", "Huna matumaini: piga simu au tuma ujumbe kwa 988 (Marekani)"] }
          ],
          sources: [
            { name: "StopBullying.gov: How to Report Cyberbullying (jinsi ya kuripoti)", url: "https://www.stopbullying.gov/cyberbullying/how-to-report" },
            { name: "StopBullying.gov: Laws, Policies and Regulations (sheria na sera)", url: "https://www.stopbullying.gov/resources/laws" },
            { name: "KidsHealth (Nemours): Cyberbullying (kwa vijana)", url: "https://kidshealth.org/en/teens/cyberbullying.html" },
            { name: "988 Suicide and Crisis Lifeline (simu ya msaada wa dharura)", url: "https://988lifeline.org/" }
          ],
          tryIt: "Andika majina ya watu wazima wawili unaowaamini na mtu mmoja shuleni ambao ungeweza kuwaambia. Kisha andika sentensi mbili au tatu kamili ambazo ungesema kuanza mazungumzo.",
          youCanNow: "kumwambia mtu mzima unayemwamini ukiwa na ushahidi wako, kuihusisha shule, na kujua lini ni jambo la polisi au la msaada wa dharura.",
          quickCheck: [
            { objective: "O5", q: "Yupi kati ya hawa ni mtu mzima unayeweza kumwamini?", options: ["Mshauri wa shule unayejisikia salama naye", "Mtu usiyemjua mtandaoni anayejitolea kusaidia", "Mtu anayekuonea", "Yeyote katika sehemu ya maoni"], answer: 0, why: "Watu wazima wa kuaminika ni pamoja na mzazi au mlezi, mwanafamilia, mwalimu, mshauri, kocha, mentor au kiongozi wa vijana." },
            { objective: "O5", q: "Mtu anakutumia ujumbe akitishia kukuumiza baada ya shule. Unafanya nini?", options: ["Kusubiri uone kama itakoma", "Kumjibu kwa kitisho", "Kumwambia mtu mzima unayemwamini sasa na kwenda polisi pamoja naye", "Kufuta ujumbe"], answer: 2, why: "Vitisho vya vurugu vinapelekwa polisi, pamoja na mtu mzima." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuwa mtetezi na kuandika mpango wako wa usalama",
          minutes: 5,
          goal: "Msaidie mtu anayeonewa na uandike mpango wako mwenyewe wa usalama.",
          text: [
            "Uonevu mwingi mtandaoni una watazamaji. Mtazamaji anaangalia tu. Mtetezi anasaidia. Huhitaji kumkabili mwonevu hadharani ili kusaidia; mara nyingi msaada salama zaidi ni wa kimya kimya.",
            "Njia za kuwa mtetezi: usipende (like), usishiriki wala usitoe maoni kwenye chapisho la kuumiza; liripoti; mtumie anayeonewa ujumbe wa faragha (\"Nimeona hilo. Si sawa. Uko salama?\"); mkaribishe mtembee pamoja au akae nawe; msaidie kuhifadhi ushahidi na kumwambia mtu mzima unayemwamini. Ukiona vitisho au dalili kwamba anaweza kujidhuru, mwambie mtu mzima mara moja.",
            "Sasa weka kila kitu pamoja katika mpango wako mwenyewe, ili ujue hasa la kufanya likikutokea wewe au rafiki yako."
          ],
          steps: ["Usipende, usishiriki wala usitoe maoni kwenye chapisho.", "Liripoti kwenye app.", "Mtumie anayeonewa ujumbe wa faragha wa kumtia moyo.", "Msaidie kuhifadhi ushahidi na kumwambia mtu mzima unayemwamini.", "Andika mpango wako mwenyewe wa usalama."],
          words: [["Mtazamaji", "mtu anayeona uonevu lakini hafanyi chochote."], ["Mtetezi", "mtu anayeona uonevu na kumsaidia kwa usalama anayeonewa."]],
          slides: [
            { title: "Mtazamaji au mtetezi?", bullets: ["Mtazamaji: anaangalia tu", "Mtetezi: anasaidia kwa usalama"] },
            { title: "Njia za kimya za kusaidia", bullets: ["Usipende wala kushiriki chapisho; liripoti", "Mtumie ujumbe: \"Si sawa. Uko salama?\"", "Msaidie kuhifadhi ushahidi na kumwambia mtu mzima"] },
            { title: "Mpango wako wa usalama", bullets: ["Jinsi ya kupiga picha ya skrini na mahali pa kuihifadhi", "Kuzuia na kuripoti kwenye apps zako mbili kuu", "Watu wazima wawili unaowaamini na utakachosema"] }
          ],
          tryIt: "Kazi ya mwisho: andika mpango wako wa usalama dhidi ya uonevu mtandaoni: hatua za kupiga picha ya skrini na mahali utakapozihifadhi, block na report ziko wapi kwenye apps zako mbili kuu, watu wazima wawili unaowaamini na mtu mmoja shuleni pamoja na utakachosema, lini ungeenda polisi, na njia moja ya kumsaidia rafiki.",
          youCanNow: "kumsaidia rafiki anayeonewa na kufuata mpango wako mwenyewe wa usalama dhidi ya uonevu mtandaoni.",
          quickCheck: [
            { objective: "O6", q: "Kuna tofauti gani kati ya mtazamaji na mtetezi?", options: ["Hakuna tofauti", "Mtazamaji anaangalia; mtetezi anasaidia", "Mtetezi anajiunga na uonevu", "Mtazamaji anaripoti"], answer: 1, why: "Uonevu mwingi mtandaoni una watazamaji; watetezi wanamsaidia anayeonewa." },
            { objective: "O6", q: "Chapisho la rafiki linasema anajisikia kujidhuru baada ya kuonewa. Unafanya nini?", options: ["Kupenda (like) chapisho", "Kusubiri hadi kesho", "Kulifanya siri", "Kumwambia mtu mzima unayemwamini mara moja"], answer: 3, why: "Dalili kwamba mtu anaweza kujidhuru zinahitaji mtu mzima mara moja." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuchukua hatua na kupata msaada",
        questions: [
          { objective: "O4", q: "Kumzuia (block) mtu kunafanya nini?", options: ["Kunamzuia kuwasiliana nawe au kuona machapisho yako", "Kunafuta akaunti yake", "Kunamtumia onyo kutoka kwa polisi", "Kunashiriki picha zako za skrini"], answer: 0, why: "Kuzuia kunakata mawasiliano yake nawe." },
          { objective: "O4", q: "Huwezi kupata kitufe cha kuripoti kwenye app. Unafanya nini?", options: ["Kukata tamaa", "Kuweka nywila yako mtandaoni", "Kutafuta \"report\" katika kituo cha msaada au usalama cha app", "Kumtumia mwonevu ujumbe kumuuliza"], answer: 2, why: "Majina ya menyu hubadilika; kituo cha msaada au usalama kinaonyesha yako wapi." },
          { objective: "O5", q: "Mtu mzima wa kwanza unayemwambia hakusaidii. Sasa nini?", options: ["Kutomwambia mtu yeyote tena kamwe", "Kumwambia mtu mzima mwingine unayemwamini", "Kulipiza kisasi kwa mwonevu mwenyewe", "Kufuta ushahidi wako"], answer: 1, why: "Endelea kusema hadi mtu akusaidie." },
          { objective: "O5", q: "Hali ipi inapaswa kupelekwa polisi, pamoja na mtu mzima?", options: ["Mtu ameacha kukufuata (unfollow)", "Rafiki hakujibu", "Mwanafunzi mwenzako hakukubaliana nawe katika kundi la gumzo", "Mtu anatishia kukuumiza"], answer: 3, why: "Vitisho vya vurugu ni jambo la polisi." },
          { objective: "O6", q: "Unaona mwanafunzi mwenzako akidhihakiwa kwenye maoni. Hatua nzuri ya mtetezi ni ipi?", options: ["Kupenda chapisho ili ufanane na wengine", "Kuliripoti na kumtumia mwanafunzi huyo ujumbe wa faragha wa kumtia moyo", "Kulishiriki kwa watu wengi zaidi", "Kuongeza utani wako mwenyewe"], answer: 1, why: "Kuripoti na msaada wa kimya kunasaidia bila kulieneza." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kujilinda dhidi ya Uonevu Mtandaoni",
    questions: [
      { objective: "O1", q: "Uonevu mtandaoni ni:", options: ["Kutokubaliana kokote mtandaoni", "Kutumia teknolojia kumuumiza, kumuaibisha, kumtisha au kumlenga mtu", "Kusahau kujibu ujumbe", "Kuandika kuhusu wikendi yako"], answer: 1, why: "Ni kumuumiza au kumlenga mtu kupitia teknolojia." },
      { objective: "O1", q: "Kipi kinafanya jambo liwe zaidi uonevu kuliko ugomvi?", options: ["Linajirudia na linakusudia kuumiza", "Linatokea mara moja kati ya watu walio sawa", "Watu wote wawili wanataniana pamoja", "Linahusu matokeo ya michezo"], answer: 0, why: "Uonevu kwa kawaida ni wa makusudi, unajirudia, na una tofauti ya nguvu." },
      { objective: "O1", q: "Kwa nini uonevu mtandaoni unaweza kuhisi kuwa mgumu sana kuukwepa?", options: ["Simu ni nzito", "Unatokea shuleni tu", "Unaweza kukufuata hadi nyumbani na kuenea haraka", "Daima hauna jina la mtu"], answer: 2, why: "Machapisho ya mtandaoni yanakufikia popote na yanaweza kuenea kwa watu wengi." },
      { objective: "O1", q: "Ipi ni tofauti ya nguvu katika uonevu?", options: ["Watu wote wawili wana umri sawa", "Hakuna anayemjua mwenzake", "Wote wawili ni marafiki", "Kundi linalomlenga mtu mmoja"], answer: 3, why: "Watu wengi zaidi, umaarufu au taarifa za siri zinampa mwonevu nguvu." },
      { objective: "O2", q: "Kujibu kwa matusi kwa kawaida:", options: ["Kunamaliza uonevu", "Kunafanya mambo kuwa mabaya zaidi", "Kunafanya chapisho liondolewe", "Kunatakiwa na app"], answer: 1, why: "Kulipiza kisasi mara nyingi kunaongeza tatizo." },
      { objective: "O2", q: "Kwa nini usisambaze chapisho la kuumiza kwa marafiki?", options: ["Kunalieneza zaidi", "Kunagharimu pesa", "Kunaharibu simu yako", "Ni polepole mno"], answer: 0, why: "Kusambaza kunaweka maudhui ya kuumiza mbele ya watu wengi zaidi." },
      { objective: "O2", q: "Unapolengwa, inasaidia kukumbuka kwamba:", options: ["Ulistahili", "Hakuna anayeweza kusaidia", "Si kosa lako", "Unapaswa kulishughulikia peke yako"], answer: 2, why: "Uonevu unahusu tabia ya mwonevu, si thamani yako." },
      { objective: "O3", q: "Unapaswa kufanya nini kabla ya kumzuia mtu?", options: ["Kufuta ujumbe wote", "Kumtumia anwani yako", "Kuandika kumhusu mtandaoni", "Kuhifadhi ushahidi kwa picha za skrini"], answer: 3, why: "Kuzuia kunaweza kufanya ushahidi kuwa mgumu zaidi kupatikana." },
      { objective: "O3", q: "Maelezo yapi ni muhimu zaidi katika picha ya skrini?", options: ["Jina la mtumiaji, na tarehe na saa", "Kiwango cha betri yako", "Picha ya nyuma ya skrini yako", "Hali ya hewa"], answer: 0, why: "Nani aliutuma na lini kunathibitisha kilichotokea." },
      { objective: "O3", q: "Mtu anatishia kusambaza picha zako za faragha usipotuma pesa. Unapaswa kufanya nini?", options: ["Kulipa mara moja", "Kutuma picha zaidi", "Kutolipa; kuhifadhi ujumbe, kumzuia, kumwambia mtu mzima unayemwamini na kuripoti", "Kufuta kila kitu na kunyamaza"], answer: 2, why: "NCMEC inasema kulipa mara chache kunakomesha jambo hili; hifadhi ushahidi na utafute msaada." },
      { objective: "O3", q: "Marekani, unaweza kuripoti wapi unyonyaji wa kingono wa kijana mtandaoni?", options: ["report.cybertip.org", "Sehemu yoyote ya maoni", "DM za mwonevu", "Popote pale hapana"], answer: 0, why: "CyberTipline, inayoendeshwa na NCMEC, inapokea ripoti hizi." },
      { objective: "O3", q: "Take It Down (takeitdown.ncmec.org) inasaidia nini?", options: ["Kufuta simu yako yote", "Kupata marafiki wapya", "Kumlipa mtu anayekutishia", "Kuondoa picha za ngono zilizopigwa ulipokuwa chini ya miaka 18"], answer: 3, why: "Ni huduma ya bure ya NCMEC ya kusaidia kuondoa picha kama hizo." },
      { objective: "O4", q: "Kumripoti mtu kwenye app kunamaanisha:", options: ["Kumpigia simu", "Kuiambia kampuni kwamba amevunja sheria zake", "Kumfuata naye", "Kushiriki chapisho lake"], answer: 1, why: "Kampuni inaweza kuondoa machapisho au kufunga akaunti." },
      { objective: "O4", q: "Hatua ipi ya faragha inasaidia kukulinda?", options: ["Kumpa rafiki yako wa karibu nywila yako", "Kuweka anwani ya nyumbani kwako mtandaoni", "Kupunguza nani anaweza kukutumia ujumbe au kutoa maoni kwenye machapisho yako", "Kufanya kila akaunti iwe wazi kwa wote"], answer: 2, why: "Kupunguza mawasiliano kunawazuia waonevu wengi." },
      { objective: "O5", q: "Mtu mzima unayemwamini ni nani?", options: ["Mtu usiyemjua uliyekutana naye katika mchezo", "Mzazi, mwalimu, mshauri wa shule au kocha unayejisikia salama naye", "Mtu anayekuonea", "Akaunti isiyo na jina"], answer: 1, why: "Watu wazima unaowaamini wanaweza kuwasiliana na shule, app au polisi." },
      { objective: "O5", q: "Unapaswa kuleta nini unapomwambia mtu mzima?", options: ["Hakuna kitu", "Nywila yako", "Ushahidi wako: picha za skrini na daftari lako", "Zawadi"], answer: 2, why: "Ushahidi unawasaidia kuchukua hatua haraka." },
      { objective: "O5", q: "Uonevu mtandaoni unapaswa kupelekwa polisi lini?", options: ["Mtu anapotoka kwenye kundi la gumzo", "Mtu anapoandika maoni mabaya kuhusu mchezo", "Mtu asipokubaliana nawe", "Unapohusu vitisho, picha za ngono, kunyemelewa au chuki"], answer: 3, why: "Haya yanaweza kuwa uhalifu; StopBullying.gov inaeleza lini kuripoti kwa polisi." },
      { objective: "O5", q: "Marekani, uonevu ukikuacha ukijisikia huna matumaini, unaweza kupiga simu au kutuma ujumbe kwa:", options: ["988", "411", "611", "211 wikendi tu"], answer: 0, why: "988 ni Suicide and Crisis Lifeline, simu ya msaada ya bure saa 24 kila siku." },
      { objective: "O6", q: "Mtetezi ni mtu ambaye:", options: ["Anaangalia na hafanyi chochote", "Anamsaidia kwa usalama anayeonewa", "Anajiunga na uonevu", "Anarekodi ili apate watazamaji"], answer: 1, why: "Watetezi wanasaidia, mara nyingi kimya kimya." },
      { objective: "O6", q: "Ipi ni njia ya kimya na salama ya kumsaidia rafiki anayeonewa mtandaoni?", options: ["Kuweka ujumbe wake wa faragha mtandaoni", "Kuandika maoni mabaya zaidi", "Kupenda chapisho", "Kumtumia ujumbe wa faragha na kumsaidia kumwambia mtu mzima"], answer: 3, why: "Msaada wa faragha na kumhusisha mtu mzima kunasaidia bila kueneza jambo hilo." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 1, 4, 7, 9, 12, 14, 16, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Kuhifadhi ushahidi", objective: "O3", notYet: "Hakuna hatua za kupiga picha ya skrini, au hakuna mahali pa kuzihifadhi.", meets: "Hatua za kupiga picha ya skrini zinazoonyesha jina la mtumiaji, tarehe na saa, na mahali pa siri pa kuzihifadhi.", exceeds: "Pia kuna daftari rahisi na sheria ya kutohifadhi kamwe picha za ngono." },
      { name: "Kuzuia na kuripoti", objective: "O4", notYet: "Njia za kuzuia na kuripoti hazikupatikana kwenye apps mbili kuu.", meets: "Mahali block na report zilipo kwenye apps zote mbili, na mpangilio mmoja wa faragha umekaguliwa.", exceeds: "Pia anasema lini kunyamazisha (mute) badala ya kuzuia." },
      { name: "Nani wa kumwambia", objective: "O5", notYet: "Hakuna watu wazima waliotajwa, au hakuna la kusema.", meets: "Watu wazima wawili unaowaamini na mtu mmoja shuleni, pamoja na maneno ya kuanza mazungumzo.", exceeds: "Pia anasema afanye nini mtu mzima wa kwanza asipomsaidia." },
      { name: "Lini kwenda polisi", objective: "O5", notYet: "Haipo au si sahihi.", meets: "Vitisho, picha za ngono, kunyemelewa au chuki vinapelekwa polisi na mtu mzima; hatari ya sasa inamaanisha 911.", exceeds: "Pia anataja 988 kwa kujisikia huna matumaini na mahali pa kuripoti unyonyaji mtandaoni." },
      { name: "Kumsaidia rafiki", objective: "O6", notYet: "Hakuna hatua ya mtetezi, au hatua hiyo inaeneza chapisho.", meets: "Njia moja salama ya kumsaidia rafiki, kama ujumbe wa faragha na kumsaidia kumwambia mtu mzima.", exceeds: "Njia mbili au zaidi salama, ikiwemo kuripoti chapisho." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (rubric)",
      "Wanafunzi wanaoripoti kuzuia, kuripoti au kumwambia mtu mzima kuhusu uonevu mtandaoni katika ufuatiliaji wa siku 30",
      "Wanafunzi wanaoripoti kumsaidia rafiki aliyeonewa (utafiti wa ufuatiliaji)",
      "Shule au programu za vijana zinazoripoti wanafunzi zaidi wakijitokeza wakiwa na ushahidi uliohifadhiwa"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kifaa cha mwanafunzi mwenyewe kwa kupata mipangilio ya kuzuia, kuripoti na faragha",
      "Karatasi au app ya maandishi ya faragha kwa mpango wa usalama",
      "Orodha ya watu wa karibu wa kuaminika: mshauri wa shule, wafanyakazi wa programu, simu za msaada wa dharura",
      "Takriban dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Usiwaombe kamwe wanafunzi kuonyesha ujumbe au picha halisi za kuumiza darasani; tumia mifano ya kubuni ya kozi hii.",
      "Kabla ya kuanza, taja nani wanafunzi wanaweza kuzungumza naye kwa faragha, na waeleze 988 na namba za dharura za eneo lenu.",
      "Kuwa tayari kufuata sheria za shirika lako za kuripoti na kulinda watoto mwanafunzi akieleza kuhusu uonevu, vitisho au picha za ngono.",
      "Sisitiza kwamba picha za ngono za vijana hazipaswi kamwe kuhifadhiwa wala kusambazwa, hata kama ushahidi.",
      "Waache wanafunzi waweke mipango yao ya usalama kwa faragha; ikague mmoja mmoja kwa rubric wakikubali."
    ]
  }
};
