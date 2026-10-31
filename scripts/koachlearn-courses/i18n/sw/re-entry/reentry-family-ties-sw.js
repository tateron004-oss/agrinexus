"use strict";

// Koach Learn course (Swahili translation of re-entry/reentry-family-ties.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "reentry-family-ties-sw",
  lang: "sw",
  translationOf: "reentry-family-ties",
  category: "Re-Entry",
  name: "Kujenga Upya Mahusiano na Familia na Jamii",
  skills: "Kupanga mawasiliano ya kwanza, Kuungana tena na watoto wako, Kuomba mapitio ya malipo ya matunzo ya mtoto, Kusikiliza na kuomba msamaha, Kupata washauri na vikundi vya jamii, Kuweka mipaka yenye afya",
  outcome: "kupanga jinsi ya kuungana tena na familia na watoto, kuchukua hatua ya kwanza kuhusu malipo ya matunzo ya mtoto ikiwa yanakuhusu, kupata washauri na msaada wa jamii, na kuweka mipaka inayolinda maendeleo yako.",
  about: [
    "Kurudi nyumbani si kazi na mahali pa kuishi tu. Watu wanaokuzunguka ni muhimu vile vile. Familia, watoto, marafiki, washauri na vikundi vya jamii wanaweza kukusaidia kubaki kwenye njia nzuri, na kujenga upya mahusiano hayo ni ujuzi unaoweza kujifunza.",
    "Katika kozi hii utapanga mawasiliano ya kwanza, utajifunza kuungana tena na watoto wako kwa kasi yao, utaomba mapitio ya malipo ya matunzo ya mtoto ikiwa amri yako haiendani tena na kipato chako, utafanya mazoezi ya kusikiliza na kuomba msamaha, utapata washauri na vikundi vya jamii, na utaweka mipaka yenye afya. Pia utaandika orodha ya msaada yenye 988, simu ya msaada wa dharura ya kujiua na shida (988 Suicide and Crisis Lifeline).",
    "Kila familia ni tofauti. Baadhi ya watu watakupokea haraka, wengine wanahitaji muda, na mawasiliano mengine huenda si salama au hayaruhusiwi. Fuata amri za mahakama kila wakati, na muulize mshauri nasaha, msaada wa kisheria (legal aid) au afisa wako wa parole au probation unapokuwa na shaka.",
    "Kila somo linachukua kama dakika tano na linaishia na kazi unayoifanya mara moja. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Andika mpango wa ukurasa mmoja wa kuungana tena na msaada: mwanafamilia wa kwanza utakayewasiliana naye na ujumbe wako wa kwanza kwake, hatua moja kuhusu malezi au malipo ya matunzo ya mtoto ikiwa inakuhusu, misaada miwili ya jamii (mshauri, kikundi au jumuiya ya imani), mipaka miwili utakayoishika, na orodha ya msaada ya watu na namba za kupiga, pamoja na 988.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaorudi nyumbani kutoka gerezani (kurudi katika jamii) wanaotaka kuungana tena na familia, watoto, marafiki na jamii. Baadhi ni wazazi wenye amri za malipo ya matunzo ya mtoto; wengine wana amri za mahakama zinazozuia mawasiliano.",
    startingPoint: "Wanawajua watu wanaotaka kuwafikia na huenda wana mawasiliano kidogo kwa simu au barua. Wengi hawana uhakika jinsi ya kuanza, wanaogopa kukataliwa, na hawajui jinsi mapitio ya malipo ya matunzo ya mtoto, ushauri wa mshauri au vikundi vya msaada vinavyofanya kazi.",
    gap: "Mahusiano imara na familia na jamii yanawasaidia watu kubaki kwenye njia nzuri baada ya kuachiliwa, lakini mawasiliano ya kwanza ya haraka au yasiyopangwa vizuri yanaweza kuumiza mahusiano, na malipo ya matunzo ya mtoto yanayopuuzwa yanaweza kukua kuwa deni kubwa. Wanafunzi wanahitaji mpango wa kuungana tena kwa kasi ya wengine, kujenga upya uaminifu, kupata msaada na kulinda maendeleo yao.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 5 hadi 6)",
      "Vifaa: simu ya kawaida au simu janja; karatasi na kalamu pia zinafaa",
      "Muda: masomo ya kama dakika 5 yanayoingia kati ya kazi na miadi",
      "Amri za mahakama, amri za kutowasiliana na masharti ya parole au probation yanatangulia kila wakati",
      "Mada za hisia: wanafunzi wanashiriki tu kile wanachochagua, na 988 iko kwenye kila orodha ya msaada"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa watu unaotaka kuungana nao tena", action: "kuchagua utakayewasiliana naye kwanza na kuandika ujumbe wa kwanza mfupi wenye heshima", standard: "bila kudai pesa, kulaumu wala kushinikiza, na ukifuata amri yoyote ya mahakama" },
    { id: "O2", condition: "Ukipewa mtoto unayetaka kuungana naye tena", action: "kupanga ziara au simu ya kwanza inayotanguliza mahitaji ya mtoto", standard: "ukiwa na maswali kwa mlezi wa mtoto na ahadi moja ndogo unayoweza kuitimiza" },
    { id: "O3", condition: "Ukipewa amri ya malipo ya matunzo ya mtoto isiyoendana tena na kipato chako", action: "kuomba ofisi yako ya malipo ya matunzo ya mtoto ifanye mapitio", standard: "ukiwa na mawasiliano ya ofisi, karatasi zinazohitajika na tarehe ya kuwasiliana nao" },
    { id: "O4", condition: "Ukipewa mazungumzo magumu", action: "kutumia usikivu, sentensi za \"mimi\" na kuomba msamaha kwa sehemu tatu", standard: "bila neno \"lakini\" katika kuomba msamaha na bila kudai usamehewe" },
    { id: "O5", condition: "Ukitumia 211, msimamizi wako wa kesi (case manager) au vikundi vya mahali ulipo", action: "kupata mshauri na kikundi kimoja cha jamii na kumwomba mshauri ahadi maalum", standard: "ukiwa na mawasiliano ya kila mmoja na maneno kamili ya ombi lako" },
    { id: "O6", condition: "Ukipewa watu au hali zinazoweza kukurudisha nyuma", action: "kuweka mipaka miwili yenye afya na kuandika orodha ya msaada yenye 988", standard: "ukiwa umeiweka orodha kwenye simu yako na kwenye karatasi" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuungana tena na familia na watoto",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kupanga mawasiliano yako ya kwanza",
          minutes: 5,
          goal: "Chagua utakayewasiliana naye kwanza na uandike ujumbe wa kwanza mfupi wenye heshima.",
          text: [
            "Ulipokuwa mbali, familia yako iliendelea kuishi. Watoto walikua, watu walihama, mahusiano mengine yaliimarika na mengine yaliumia. Kuungana tena kunaenda vizuri zaidi unapokupanga badala ya kufika ghafla bila taarifa.",
            "Anza kwa kuandika orodha ya watu unaotaka warudi katika maisha yako. Karibu na kila jina, andika jinsi mambo yalivyoachwa na kama kuna amri yoyote ya mahakama, kama amri ya kutowasiliana au amri ya malezi ya watoto. Fuata kila amri. Ukiwa na shaka, muulize afisa wako wa parole au probation au msaada wa kisheria.",
            "Chagua mtu mmoja ambaye huenda yuko tayari kukupokea, na uanze kidogo: barua, ujumbe mfupi au simu fupi. Sema umerudi nyumbani, sema ungependa muungane tena, na umwache achague kasi. Usiombe pesa wala mahali pa kulala katika ujumbe wa kwanza.",
            "Tarajia hisia mchanganyiko, hata zako mwenyewe. Mtu akiwa bado hayuko tayari, mshukuru na uache mlango wazi. Huo si mwisho; ni mwanzo."
          ],
          steps: ["Andika orodha ya watu unaotaka kuungana nao tena.", "Andika jinsi mambo yalivyoachwa na amri zozote za mahakama; fuata kila amri.", "Chagua mtu mmoja ambaye huenda yuko tayari.", "Andika ujumbe mfupi: umerudi nyumbani, ungependa muungane tena, yeye anaweza kuchagua kasi.", "Utume, kisha mpe muda wa kujibu."],
          words: [["Amri ya kutowasiliana (no-contact order)", "amri ya mahakama inayosema huruhusiwi kuwasiliana na mtu fulani."], ["Amri ya malezi (custody order)", "amri ya mahakama kuhusu watoto wanaishi na nani na nani anafanya maamuzi kwa ajili yao."], ["Kasi", "jinsi jambo linavyotokea haraka au polepole."]],
          slides: [
            { title: "Panga, usishtukize", bullets: ["Familia iliendelea kuishi ulipokuwa mbali", "Mawasiliano ya kwanza yaliyopangwa yanaenda vizuri zaidi"] },
            { title: "Andika orodha yako", bullets: ["Unataka nani arudi katika maisha yako", "Jinsi mambo yalivyoachwa", "Amri zozote za mahakama: zifuate zote"] },
            { title: "Anza kidogo", bullets: ["Barua, ujumbe mfupi au simu fupi", "Sema umerudi na unataka muungane tena", "Mwache achague kasi"] },
            { title: "Kama bado hayuko tayari", bullets: ["Mshukuru", "Acha mlango wazi", "Jaribu tena baadaye, kwa upole"] }
          ],
          tryIt: "Andika orodha yako ya watu, kisha chagua mtu mmoja na uandike ujumbe wa kwanza wa sentensi tatu au nne. Usome kwa sauti. Ondoa chochote kinachoomba pesa, kinachomlaumu mtu au kinachoshinikiza jibu la haraka.",
          youCanNow: "kupanga mawasiliano ya kwanza, kufuata amri zozote za mahakama, na kuandika ujumbe mfupi wenye heshima unaomwacha mtu mwingine achague kasi.",
          quickCheck: [
            { objective: "O1", q: "Ujumbe wa kwanza kwa mwanafamilia unapaswa kuwa na nini?", options: ["Ombi la kukaa kwake", "Kwamba umerudi nyumbani na ungependa muungane tena", "Orodha ya makosa aliyoyafanya", "Kudai jibu leo"], answer: 1, why: "Ujumbe mfupi wenye heshima unafungua mlango bila shinikizo." },
            { objective: "O1", q: "Kaka yako anajibu kwamba anahitaji muda kabla ya kuzungumza. Ungefanya nini?", options: ["Kumpigia kila siku hadi ajibu", "Kufika nyumbani kwake", "Kumshukuru na kuacha mlango wazi", "Kuwaomba wanafamilia wengine wamshinikize"], answer: 2, why: "Kuheshimu kasi yake kunaacha mlango wazi kwa baadaye." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuungana tena na watoto wako",
          minutes: 6,
          goal: "Panga ziara au simu ya kwanza na mtoto wako inayotanguliza mahitaji ya mtoto.",
          text: [
            "Watoto wanahitaji mambo matatu kutoka kwa mzazi anayerudi: usalama, ukweli wanaoweza kuuelewa, na mzazi anayejitokeza tena na tena. Kuwa thabiti ni muhimu zaidi kuliko zawadi kubwa au ahadi kubwa.",
            "Shirikiana na mtu mzima anayemtunza mtoto wako sasa. Muulize mtoto anajua nini, yuko tayari kwa nini, na saa zipi zinafaa. Zungumza kwa heshima kuhusu mzazi mwingine au mlezi mbele ya mtoto, hata inapokuwa vigumu.",
            "Sema ukweli kwa maneno yanayofaa umri wa mtoto. Mtoto mdogo huenda anahitaji tu: Nilifanya kosa, nilikuwa mbali, na sasa niko hapa. Watoto wakubwa zaidi wanaweza kuwa na maswali au hasira. Sikiliza, usibishane, na usitoe ahadi usizoweza kutimiza.",
            "Ukihitaji ziara au badiliko la malezi, tovuti ya kujisaidia (self-help) ya mahakama ya jimbo lako inaeleza fomu, na wasaidizi wa sheria ya familia (family law facilitators) au msaada wa kisheria wanaweza kusaidia. Kamwe usimchukue mtoto wala kumshinikiza mlezi nje ya amri ya mahakama."
          ],
          steps: ["Zungumza kwanza na mlezi wa mtoto.", "Uliza mtoto anajua nini na yuko tayari kwa nini.", "Panga ziara au simu fupi ya kwanza katika saa inayomfaa mtoto.", "Tumia maneno ya kweli yanayofaa umri wa mtoto.", "Timiza kila ahadi, ukianza na ndogo, kama kupiga simu ulipoahidi."],
          words: [["Mlezi", "mtu mzima anayemtunza mtoto kila siku."], ["Ziara (visitation)", "muda ambao mzazi anakaa na mtoto asiyeishi naye, mara nyingi unapangwa na mahakama."], ["Msaidizi wa sheria ya familia (family law facilitator)", "msaidizi wa mahakama anayeeleza fomu za sheria ya familia, mara nyingi bure."]],
          slides: [
            { title: "Watoto wanahitaji nini", bullets: ["Usalama", "Ukweli wanaoweza kuuelewa", "Mzazi anayejitokeza tena na tena"] },
            { title: "Shirikiana na mlezi", bullets: ["Uliza mtoto anajua nini na yuko tayari kwa nini", "Kubalianeni saa", "Zungumza kumhusu kwa heshima"] },
            { title: "Maneno ya kweli yanayofaa umri", bullets: ["Mdogo: nilikuwa mbali, sasa niko hapa", "Mkubwa zaidi: sikiliza maswali na hasira", "Hakuna ahadi usizoweza kutimiza"] },
            { title: "Ziara na malezi", bullets: ["Tumia tovuti ya kujisaidia ya mahakama ya jimbo lako", "Muulize msaidizi wa sheria ya familia au msaada wa kisheria", "Fuata amri za mahakama kila wakati"] }
          ],
          tryIt: "Andika maswali matatu ya kumuuliza mlezi wa mtoto wako kabla ya ziara au simu ya kwanza, na ahadi moja ndogo unayojua unaweza kuitimiza, kama kupiga simu kila Jumapili saa 6 pm (saa 12 jioni).",
          youCanNow: "kupanga ziara au simu ya kwanza inayomtanguliza mtoto wako, kushirikiana na mlezi, na kutimiza ahadi ndogo zinazojenga uaminifu.",
          quickCheck: [
            { objective: "O2", q: "Nini kinajenga zaidi uaminifu wa mtoto baada ya mzazi kurudi nyumbani?", options: ["Zawadi za bei ghali", "Ahadi kubwa kuhusu siku zijazo", "Ziara moja ndefu", "Kutimiza ahadi ndogo tena na tena"], answer: 3, why: "Watoto wanamwamini mzazi anayeendelea kujitokeza na kutimiza ahadi ndogo." },
            { objective: "O2", q: "Unataka kumpigia binti yako simu kwa mara ya kwanza baada ya miaka mingi. Ungefanya nini kwanza?", options: ["Kuzungumza na mlezi wake", "Kupiga simu shuleni kwake", "Kumtumia ujumbe kwenye mitandao ya kijamii", "Kufika baada ya shule"], answer: 0, why: "Mlezi anaweza kusaidia kupanga mawasiliano yanayotanguliza mahitaji ya mtoto." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Malipo ya matunzo ya mtoto: kuomba mapitio",
          minutes: 5,
          goal: "Omba ofisi yako ya malipo ya matunzo ya mtoto ifanye mapitio wakati amri yako haiendani tena na kipato chako.",
          text: [
            "Malipo ya matunzo ya mtoto (child support) hayasimami yenyewe kipato chako kinapobadilika. Malipo yasiyolipwa yanaweza kujilimbikiza kuwa deni kubwa na kuleta mambo kama kusimamishwa kwa leseni ya udereva. Kuyapuuza kunafanya hali iwe mbaya zaidi. Kuomba mapitio ndiyo hatua sahihi.",
            "Huko California, mzazi yeyote kati ya wawili anaweza kuiomba ofisi ya malipo ya matunzo ya mtoto ya eneo lake ifanye mapitio na marekebisho, yanayoitwa modification. Hakuna malipo. Yanaweza kufanyika amri ikibadilika kwa 20% au $50, kile kilicho kidogo zaidi. Mabadiliko yanayohesabika ni pamoja na kupoteza au kuanza kazi, badiliko la kipato, mabadiliko ya malezi, ulemavu, kufungwa gerezani na kupelekwa kazini jeshini. Mzazi atakayefungwa kwa siku 60 au zaidi mfululizo anaweza kuomba amri ya chini zaidi kwa kutumia fomu ya Incarcerated Parent's Request to Review Child Support.",
            "Leta uthibitisho wa kipato na matumizi yako, kama hati za mshahara (pay stubs) au barua ya mafao. Wazazi wote wawili wakikubaliana, wanaweza kusaini makubaliano kwa ajili ya mahakama; wasipokubaliana, mahakama inaamua. Msaidizi wa sheria ya familia wa kaunti yako anaweza kusaidia.",
            "Nje ya California, wasiliana na ofisi ya malipo ya matunzo ya mtoto ya jimbo lako au ya kabila lako (tribal) na uulize jinsi ya kuomba mapitio. Uliza mapema: katika maeneo mengi badiliko linahesabika tu kuanzia tarehe uliyoomba, si tangu kipato chako kilipopungua."
          ],
          steps: ["Tafuta ofisi ya malipo ya matunzo ya mtoto ya eneo lako (huko California, childsupport.ca.gov).", "Piga simu au andika kuomba mapitio na marekebisho.", "Kusanya uthibitisho wa kipato na matumizi.", "Weka nakala na uandike tarehe uliyoomba.", "Lipa unachoweza wakati unasubiri, na uweke kumbukumbu za kila malipo."],
          words: [["Amri ya malipo ya matunzo ya mtoto (child support order)", "amri ya mahakama inayosema mzazi analipa kiasi gani kusaidia kumtunza mtoto."], ["Marekebisho (modification)", "badiliko katika amri ya malipo ya matunzo ya mtoto."], ["Malimbikizo (arrears)", "malipo ya matunzo ya mtoto yaliyodaiwa na hayakulipwa."]],
          slides: [
            { title: "Usipuuze malipo ya matunzo ya mtoto", bullets: ["Hayasimami yenyewe", "Malipo yasiyolipwa yanakuwa deni kubwa", "Kuomba mapitio ndiyo hatua sahihi"] },
            { title: "Mapitio na marekebisho huko California", bullets: ["Mzazi yeyote anaweza kuomba; hakuna malipo", "Mabadiliko: kazi, kipato, malezi, kufungwa gerezani", "Gerezani siku 60+ mfululizo: omba amri ya chini zaidi"] },
            { title: "Cha kuleta", bullets: ["Uthibitisho wa kipato na matumizi", "Msaada: msaidizi wa sheria ya familia wa kaunti yako"] },
            { title: "Nje ya California", bullets: ["Wasiliana na ofisi ya malipo ya matunzo ya mtoto ya jimbo au kabila lako", "Uliza mapema: mara nyingi mabadiliko yanahesabika tu tangu ulipoomba"] }
          ],
          sources: [
            { name: "California Department of Child Support Services: Modify my payment", url: "https://childsupport.ca.gov/overview/modify-my-payment/" },
            { name: "California Department of Child Support Services: Home", url: "https://childsupport.ca.gov/" }
          ],
          tryIt: "Tafuta tovuti au namba ya simu ya ofisi yako ya malipo ya matunzo ya mtoto. Andika jinsi ya kuomba mapitio, karatasi wanazotaka, na tarehe utakayowasiliana nao. Kama huna amri, andika njia moja unayoweza kumsaidia mtoto wako mwezi huu.",
          youCanNow: "kuomba ofisi yako ya malipo ya matunzo ya mtoto ifanye mapitio na kuleta uthibitisho sahihi, badala ya kuacha malipo yasiyolipwa yajilimbikize.",
          quickCheck: [
            { objective: "O3", q: "Nini kinaweza kutokea ukipuuza malipo ya matunzo ya mtoto baada ya kipato chako kupungua?", options: ["Amri inasimama yenyewe", "Malipo yasiyolipwa yanaweza kujilimbikiza kuwa deni kubwa", "Ofisi ya malipo ya matunzo ya mtoto inasahau", "Mtoto wako analipa"], answer: 1, why: "Malipo yanayopuuzwa yanaendelea kuongezeka, kwa hiyo kuomba mapitio ni muhimu." },
            { objective: "O3", q: "Umepunguziwa saa kazini na amri yako ya malipo ya matunzo ya mtoto sasa iko juu sana. Ungefanya nini?", options: ["Kuacha kulipa na kusubiri", "Kulipa tu unapoweza", "Kumwomba rafiki akupigie simu", "Kuwasiliana na ofisi yako ya malipo ya matunzo ya mtoto na kuomba mapitio"], answer: 3, why: "Mapitio ndiyo njia rasmi ya kulinganisha amri na kipato chako." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuungana tena na familia na watoto",
        questions: [
          { objective: "O1", q: "Unataka kuungana tena na binamu ambaye hujazungumza naye kwa miaka mingi. Hatua bora ya kwanza ni ipi?", options: ["Kufika nyumbani kwake usiku sana", "Kutuma ujumbe mfupi unaosema umerudi nyumbani na ungependa muungane tena", "Kumwomba pesa mara moja", "Kuandika kumhusu mtandaoni"], answer: 1, why: "Ujumbe mfupi wenye heshima unamwacha achague kasi." },
          { objective: "O1", q: "Kuna amri ya kutowasiliana na mwanafamilia. Unapaswa kufanya nini?", options: ["Kufuata amri hiyo", "Kuipuuza ukijisikia uko tayari", "Kumwomba rafiki apeleke ujumbe", "Kuwasiliana naye mara moja kueleza"], answer: 0, why: "Amri za mahakama lazima zifuatwe kila wakati; muulize msaada wa kisheria au afisa wako ukiwa na shaka." },
          { objective: "O2", q: "Nini ni muhimu zaidi kwa mtoto mzazi anaporudi nyumbani?", options: ["Zawadi za bei ghali", "Ahadi kubwa", "Kujitokeza tena na tena", "Kumsema vibaya mlezi"], answer: 2, why: "Kuwa thabiti kunajenga uaminifu wa mtoto kuliko zawadi au ahadi." },
          { objective: "O3", q: "Kipato chako kimepungua na huwezi kulipa malipo ya matunzo ya mtoto. Unafanya nini?", options: ["Kuacha kulipa na kunyamaza", "Kusubiri hadi deni liwe kubwa", "Kuhama", "Kuomba ofisi yako ya malipo ya matunzo ya mtoto ifanye mapitio"], answer: 3, why: "Mapitio yanaweza kupunguza amri; kuipuuza kunaacha deni likue." },
          { objective: "O3", q: "Huko California, kuomba mapitio ya malipo ya matunzo ya mtoto kunagharimu kiasi gani?", options: ["$500", "Hakuna kitu", "Malipo ya mwezi mmoja", "Inategemea jaji"], answer: 1, why: "Mapitio na marekebisho ya California ni bure." }
        ]
      }
    },
    {
      name: "Sura 2: Jamii, mipaka na msaada",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kusikiliza, kuomba msamaha na kujenga upya uaminifu",
          minutes: 5,
          goal: "Tumia usikivu, sentensi za \"mimi\" na msamaha wa kweli katika mazungumzo magumu.",
          text: [
            "Uaminifu unajengwa upya kwa vitendo kwa muda, si katika mazungumzo moja. Mawasiliano mazuri yanasaidia vitendo hivyo vionekane.",
            "Sikiliza kwanza. Mwache mtu mwingine amalize, kisha rudia ulichosikia: Kwa hiyo ulijisikia nimekuangusha nilipokosa sherehe yako ya kuhitimu. Hii inaonyesha unaelewa, hata kama unaona jambo tofauti.",
            "Tumia sentensi za \"mimi\" kueleza hisia zako bila kulaumu: Mimi najisikia wasiwasi kuhusu hili, badala ya Wewe kila mara unafanya hili kuwa gumu. Msamaha wa kweli unataja ulichofanya, unasema jinsi kilivyomuumiza, na unasema utafanya nini tofauti. Hauna neno lakini, na haudai kusamehewa.",
            "Baadhi ya watu watahitaji muda mrefu. Kuwa mvumilivu. Endelea kujitokeza, timiza neno lako, na uache uaminifu urudi kwa kasi yao."
          ],
          steps: ["Mwache mtu mwingine amalize kuzungumza.", "Rudia ulichosikia.", "Eleza hisia zako kwa sentensi za \"mimi\".", "Omba msamaha: ulichofanya, jinsi kilivyoumiza, utafanya nini tofauti.", "Usiongeze lakini; usidai kusamehewa.", "Timiza neno lako baadaye."],
          words: [["Sentensi ya \"mimi\"", "njia ya kueleza hisia zako kuanzia na \"mimi\", bila kulaumu."], ["Kurudia (reflect back)", "kusema kwa maneno yako mwenyewe kile mtu alichosema, ili kuonyesha umeelewa."], ["Uaminifu", "kuamini kwamba mtu atafanya anachosema."]],
          slides: [
            { title: "Uaminifu unarudi kupitia vitendo", bullets: ["Si katika mazungumzo moja", "Mawasiliano yanasaidia vitendo vionekane"] },
            { title: "Sikiliza kwanza", bullets: ["Mwache amalize", "Rudia ulichosikia"] },
            { title: "Msamaha wa kweli", bullets: ["Taja ulichofanya", "Sema jinsi kilivyomuumiza", "Sema utafanya nini tofauti", "Hakuna lakini; usidai kusamehewa"] },
            { title: "Kuwa mvumilivu", bullets: ["Wengine wanahitaji muda mrefu", "Endelea kujitokeza na timiza neno lako"] }
          ],
          tryIt: "Andika msamaha wa kweli kwa mtu mmoja, ukitumia sehemu tatu: ulichofanya, jinsi kilivyomuumiza, na utafanya nini tofauti. Hakikisha hauna neno lakini na hauombi kusamehewa. Utaamua baadaye kama na lini utaushiriki.",
          youCanNow: "kusikiliza na kurudia ulichosikia, kuzungumza kwa sentensi za \"mimi\", na kuomba msamaha wa kweli unaosaidia kujenga upya uaminifu.",
          quickCheck: [
            { objective: "O4", q: "Sehemu tatu za msamaha wa kweli ni zipi?", options: ["Ulichofanya, jinsi kilivyomuumiza, na utafanya nini tofauti", "Kwa nini ulifanya, nani mwingine alikosea, na yeye afanye nini", "Samahani, lakini, na tafadhali nisamehe", "Zawadi, kukumbatia na ahadi ya kusahau"], answer: 0, why: "Msamaha wa kweli unataja madhara na badiliko bila visingizio." },
            { objective: "O4", q: "Mama yako anaanza kukueleza jinsi alivyoumia. Ungefanya nini kwanza?", options: ["Kueleza upande wako mara moja", "Kubadilisha mada", "Kusikiliza na kumwacha amalize", "Kutoka chumbani"], answer: 2, why: "Kusikiliza kwanza kunaonyesha heshima na kunasaidia kujenga upya uaminifu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Washauri, imani na vikundi vya jamii",
          minutes: 5,
          goal: "Pata mshauri na kikundi kimoja cha jamii unachoweza kujiunga nacho mwezi huu.",
          text: [
            "Mshauri (mentor) ni mtu aliyekutangulia hatua chache ambaye anaweza kukupa ushauri, kukuulizia hali yako na kukutia moyo. Programu nyingi za kurudi katika jamii zinawaunganisha watu na washauri, mara nyingi watu ambao nao walirudi nyumbani kutoka gerezani.",
            "Vikundi vya jamii vinakupa mahali pa kuwa sehemu ya kitu: vikundi vya msaada vya kurudi katika jamii, mikutano ya kupona uraibu, jumuiya za imani, timu za michezo, vikundi vya kujitolea, madarasa ya malezi na vikundi vya wahitimu wa programu ulizomaliza. Kuwa karibu na watu wanaojenga maisha mazuri kunarahisisha wewe kufanya vivyo hivyo.",
            "Kuvipata, uliza programu yako ya kurudi katika jamii, msimamizi wako wa kesi au afisa wako wa parole, piga 211, au uliza jumuiya ya imani iliyo karibu nawe. Nenda mara moja, kisha nenda tena. Vikundi vingi vinaonekana vigeni mwanzoni na vinakuwa bora kufikia ziara ya tatu.",
            "Unapomwomba mtu awe mshauri wako, kuwa wazi: Tunaweza kuzungumza kwa dakika 30 mara moja kwa mwezi? Ninajitahidi kuitunza kazi yangu na kuungana tena na watoto wangu."
          ],
          steps: ["Uliza programu yako ya kurudi katika jamii au msimamizi wa kesi kuhusu washauri.", "Piga 211 au uliza jumuiya ya imani kuhusu vikundi vilivyo karibu nawe.", "Chagua kikundi kimoja na uende angalau mara tatu.", "Mwombe mshauri unayemfikiria ahadi ndogo iliyo wazi.", "Washukuru watu wanaokusaidia."],
          words: [["Mshauri (mentor)", "mtu unayemwamini anayekupa ushauri na msaada unapokua."], ["Kikundi cha msaada", "watu wenye uzoefu unaofanana wanaokutana kusaidiana."], ["Jumuiya ya imani", "kanisa, msikiti, hekalu au mahali pengine pa ibada na waumini wake."]],
          slides: [
            { title: "Kwa nini mshauri", bullets: ["Mtu aliyekutangulia hatua chache", "Ushauri, kukuulizia hali na kukutia moyo", "Mara nyingi mtu ambaye naye alirudi nyumbani"] },
            { title: "Mahali pa kuwa sehemu ya kitu", bullets: ["Vikundi vya kurudi katika jamii na vya kupona uraibu", "Jumuiya za imani na kujitolea", "Michezo, malezi na vikundi vya wahitimu"] },
            { title: "Jinsi ya kuvipata", bullets: ["Uliza programu yako au msimamizi wako wa kesi", "Piga 211", "Nenda angalau mara tatu"] },
            { title: "Kumwomba mtu awe mshauri wako", bullets: ["Kuwa wazi na omba kitu kidogo", "Dakika 30 mara moja kwa mwezi", "Sema unajitahidi kufanya nini"] }
          ],
          sources: [
            { name: "211: Find local help", url: "https://www.211.org/" }
          ],
          tryIt: "Tafuta mshauri mmoja unayemfikiria na kikundi kimoja cha jamii. Andika jinsi ya kumfikia kila mmoja. Kisha andika maneno kamili utakayotumia kumwomba mshauri ahadi ndogo iliyo wazi.",
          youCanNow: "kupata mshauri na kikundi cha jamii na kuomba msaada kwa njia iliyo wazi na mahususi.",
          quickCheck: [
            { objective: "O5", q: "Mshauri ni nani?", options: ["Mtu anayekulipia bili zako", "Mtu unayemwamini aliyekutangulia hatua chache anayekupa ushauri na msaada", "Afisa wako wa parole", "Mtu yeyote unayekutana naye mara moja"], answer: 1, why: "Mshauri amepita njia inayofanana na anakusaidia kukuongoza." },
            { objective: "O5", q: "Unataka mtu wa kanisani kwako awe mshauri wako. Ungesema nini?", options: ["Utarekebisha maisha yangu?", "Unaweza kuwepo kwa ajili yangu wakati wowote ninapokuhitaji?", "Unaweza kunikopesha pesa?", "Tunaweza kukutana kwa dakika 30 mara moja kwa mwezi kuhusu malengo yangu?"], answer: 3, why: "Ombi dogo lililo wazi ni rahisi kwa mshauri kukubali." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mipaka yenye afya na kupata msaada",
          minutes: 6,
          goal: "Weka mipaka miwili yenye afya na uandike orodha ya msaada yenye 988.",
          text: [
            "Mpaka ni mstari unaouchora kulinda afya yako, uhuru wako na maendeleo yako. Baadhi ya marafiki wa zamani, mahali na tabia vinaweza kukurudisha nyuma. Mpaka unaweza kuwa: Siendi tena mtaa ule, au Sitabeba kitu chochote kwenye gari langu kwa ajili ya mtu yeyote.",
            "Sema mpaka kwa urahisi na kwa upole: Ninakujali, na siwezi kuwa karibu na pombe kwa sasa. Huhitaji kubishana wala kueleza mara nyingi. Mipaka pia ni ya pande zote mbili: heshimu mipaka ambayo familia yako inaweka nawe.",
            "Kurudi nyumbani kuna msongo wa mawazo. Kuhisi wasiwasi, hasira, huzuni au upweke ni kawaida, na kutafuta msaada ni jambo la kawaida. 988 Suicide and Crisis Lifeline (simu ya msaada wa dharura ya kujiua na shida) ni bure, ni ya siri na iko wazi saa 24 kwa siku, kila siku. Unaweza kupiga simu au kutuma ujumbe mfupi kwa 988, au kuzungumza kwa maandishi (chat) kwenye 988lifeline.org, kwa ajili yako au mtu unayemhofia. Katika dharura, piga 911.",
            "Andika orodha ya msaada: watu wawili au watatu unaowaamini, mshauri wako au kikundi chako, msimamizi wako wa kesi, na 988. Iweke kwenye simu yako na kwenye karatasi."
          ],
          steps: ["Taja hali mbili zinazoweza kukurudisha nyuma.", "Andika mpaka kwa kila moja.", "Fanya mazoezi ya kusema kila mmoja kwa upole na kwa urahisi.", "Andika orodha yako ya msaada: watu unaowaamini, mshauri au kikundi, msimamizi wa kesi, 988.", "Weka orodha kwenye simu yako na kwenye karatasi."],
          words: [["Mpaka", "kikomo unachoweka kulinda afya yako, usalama wako na maendeleo yako."], ["988", "Suicide and Crisis Lifeline (simu ya msaada wa dharura); piga simu, tuma ujumbe au chat bure, saa 24 kila siku."], ["Kichocheo (trigger)", "mtu, mahali au hisia inayofanya tabia ya zamani ijisikie kuwa na nguvu zaidi."]],
          slides: [
            { title: "Mpaka ni nini", bullets: ["Mstari unaolinda maendeleo yako", "Mfano: Siendi tena mtaa ule"] },
            { title: "Kuusema", bullets: ["Kwa urahisi na kwa upole", "Huhitaji kubishana au kueleza tena na tena", "Heshimu mipaka ya familia yako pia"] },
            { title: "988: msaada wakati wowote", bullets: ["Piga simu au tuma ujumbe kwa 988, au chat kwenye 988lifeline.org", "Bure, ya siri, saa 24 kila siku", "Dharura: piga 911"] },
            { title: "Orodha yako ya msaada", bullets: ["Watu wawili au watatu unaowaamini", "Mshauri, kikundi na msimamizi wa kesi", "988, kwenye simu yako na kwenye karatasi"] }
          ],
          sources: [
            { name: "988 Suicide and Crisis Lifeline", url: "https://988lifeline.org/" }
          ],
          tryIt: "Kazi ya mwisho: andika mpango wako wa ukurasa mmoja wa kuungana tena na msaada wenye mwanafamilia wa kwanza utakayewasiliana naye na ujumbe wako, hatua moja ya malezi au malipo ya matunzo ya mtoto ikiwa inakuhusu, misaada miwili ya jamii, mipaka miwili, na orodha yako ya msaada yenye 988.",
          youCanNow: "kuweka mipaka yenye afya, kuisema kwa upole, na kutafuta msaada, pamoja na 988, mambo yanapokuwa magumu.",
          quickCheck: [
            { objective: "O6", q: "Mpaka ni nini?", options: ["Kikomo unachoweka kulinda afya na maendeleo yako", "Sheria ambayo familia yako inakuwekea", "Amri ya mahakama", "Njia ya kuwaadhibu watu"], answer: 0, why: "Mipaka ni vikomo unavyochagua kujilinda wewe na maendeleo yako." },
            { objective: "O6", q: "Rafiki wa zamani anaendelea kukualika mahali panapoweza kukuingiza matatani. Ungefanya nini?", options: ["Kwenda mara moja ili aache kuuliza", "Kukataa kwa upole na kupendekeza kitu kingine, au kujiweka mbali", "Kwenda lakini kuondoka mapema", "Kumzuia (block) kila mtu unayemjua"], answer: 1, why: "Kukataa kwa uwazi na kwa upole kunalinda maendeleo yako." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Jamii, mipaka na msaada",
        questions: [
          { objective: "O4", q: "Upi ni msamaha wa kweli?", options: ["Samahani, lakini wewe ndiye ulinifanya nifanye hivyo", "Samahani kama ulikasirika", "Tunaweza tu kusahau?", "Nilikosa siku zako za kuzaliwa. Najua ilikuumiza. Sasa nitapiga simu kila wiki."], answer: 3, why: "Unataja ulichofanya, jinsi kilivyoumiza na utafanya nini tofauti." },
          { objective: "O4", q: "Ipi ni sentensi ya \"mimi\"?", options: ["Wewe hunisikilizi kamwe", "Mimi najisikia wasiwasi kuhusu mazungumzo haya", "Wewe kila mara unaharibu mambo", "Kila mtu yuko dhidi yangu"], answer: 1, why: "Sentensi ya \"mimi\" inaeleza hisia zako bila kulaumu." },
          { objective: "O5", q: "Njia nzuri ya kumwomba mtu awe mshauri wako ni ipi?", options: ["Tunaweza kuzungumza dakika 30 mara moja kwa mwezi kuhusu kuitunza kazi yangu?", "Rekebisha maisha yangu", "Nipe pesa", "Uwepo kwa ajili yangu wakati wote"], answer: 0, why: "Ombi dogo lililo wazi ni rahisi kukubali." },
          { objective: "O6", q: "Rafiki wa zamani anataka umbebee kitu kwenye gari lako. Mpaka wenye afya ni:", options: ["Kukubali ili kulinda urafiki", "Kukubali mara hii moja tu", "Kukataa kwa upole: Siwezi kufanya hivyo tena", "Kupuuza masharti yako ya parole"], answer: 2, why: "Kukataa kwa uwazi na kwa upole kunalinda uhuru na maendeleo yako." },
          { objective: "O6", q: "Unajisikia kukata tamaa usiku sana. Unaweza kufanya nini?", options: ["Kusubiri hadi mwezi ujao", "Kupiga simu au kutuma ujumbe kwa 988", "Kuliweka moyoni peke yako", "Kutafuta jukwaa lolote mtandaoni"], answer: 1, why: "988 ni bure, ni ya siri na iko wazi saa 24 kila siku kwa simu, ujumbe au chat." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kujenga Upya Mahusiano na Familia na Jamii",
    questions: [
      { objective: "O1", q: "Kwa nini upange mawasiliano yako ya kwanza badala ya kufika ghafla bila taarifa?", options: ["Mpango unamheshimu mtu mwingine na unaenda vizuri zaidi", "Mipango inatakiwa kisheria", "Ni haraka zaidi kuwashtukiza watu", "Haijalishi"], answer: 0, why: "Mawasiliano yaliyopangwa na yenye heshima yanaupa uhusiano mwanzo bora." },
      { objective: "O1", q: "Ujumbe wa kwanza HAUPASWI kuwa na nini?", options: ["Kwamba umerudi nyumbani", "Kwamba ungependa muungane tena", "Kudai pesa au mahali pa kulala", "Kwamba anaweza kuchagua kasi"], answer: 2, why: "Kuomba pesa au makazi kwanza kunamwekea shinikizo." },
      { objective: "O1", q: "Mwanafamilia anasema bado hayuko tayari kuzungumza. Jibu bora ni lipi?", options: ["Kuendelea kupiga simu kila saa", "Kukasirika", "Kuwaomba wengine wamshinikize", "Kumshukuru na kuacha mlango wazi"], answer: 3, why: "Kuheshimu kasi yake kunaacha mlango wazi kwa baadaye." },
      { objective: "O2", q: "Kabla ya ziara yako ya kwanza na mtoto wako, unapaswa kwanza kuzungumza na:", options: ["Mlezi wa mtoto", "Mtu usiyemjua mtandaoni", "Marafiki zako wa zamani", "Hakuna mtu"], answer: 0, why: "Mlezi anajua mtoto yuko tayari kwa nini na saa zipi zinafaa." },
      { objective: "O2", q: "Mtoto mdogo anauliza ulikuwa wapi. Jibu zuri ni:", options: ["Hadithi ndefu yenye kila undani", "Nilifanya kosa, nilikuwa mbali, na sasa niko hapa", "Lilikuwa kosa la mama yako", "Kutosema chochote"], answer: 1, why: "Maneno rahisi ya kweli yanafaa umri wa mtoto mdogo." },
      { objective: "O2", q: "Unataka ziara za mara kwa mara zilizopangwa na mahakama. Unaweza kuanzia wapi?", options: ["Kikundi cha mitandao ya kijamii", "Mfungwa mwenzako wa zamani", "Tovuti ya kujisaidia ya mahakama ya jimbo lako au msaidizi wa sheria ya familia", "Duka la kuweka rehani vitu"], answer: 2, why: "Tovuti za kujisaidia za mahakama na wasaidizi wa sheria ya familia wanaeleza fomu." },
      { objective: "O2", q: "Nini kinajenga zaidi uaminifu wa mtoto?", options: ["Ahadi kubwa", "Zawadi kubwa mara moja kwa mwaka", "Kumsema vibaya mlezi", "Kutimiza ahadi ndogo tena na tena"], answer: 3, why: "Kuwa thabiti kunamwonyesha mtoto kwamba anaweza kukutegemea." },
      { objective: "O3", q: "Nini kinatokea kwa malipo ya matunzo ya mtoto ukiyapuuza baada ya kipato chako kupungua?", options: ["Malipo yasiyolipwa yanaweza kujilimbikiza kuwa deni kubwa", "Yanasimama yenyewe", "Yanasamehewa moja kwa moja", "Hakuna kinachotokea"], answer: 0, why: "Amri zinabaki hadi zibadilishwe, kwa hiyo malipo yasiyolipwa yanajilimbikiza." },
      { objective: "O3", q: "Huko California, nani anaweza kuomba mapitio ya malipo ya matunzo ya mtoto?", options: ["Jaji peke yake", "Mzazi yeyote kati ya wawili", "Mtoto peke yake", "Wakili peke yake"], answer: 1, why: "Mzazi yeyote anaweza kuiomba ofisi ya malipo ya matunzo ya mtoto ya eneo lake ifanye mapitio." },
      { objective: "O3", q: "Huko California, mzazi aliyefungwa gerezani kwa siku 60 au zaidi mfululizo anaweza:", options: ["Kutobadilisha amri kamwe", "Kupuuza amri", "Kuomba amri ya chini zaidi kwa fomu ya Incarcerated Parent's Request to Review Child Support", "Kulipa mara mbili"], answer: 2, why: "California ina fomu maalum kwa wazazi walio gerezani kuomba mapitio." },
      { objective: "O3", q: "Nje ya California, unauliza wapi kuhusu kubadilisha amri ya malipo ya matunzo ya mtoto?", options: ["Kwa mwajiri wako", "Kwa mwenye nyumba wako", "Kwenye kituo cha redio", "Kwenye ofisi ya malipo ya matunzo ya mtoto ya jimbo au kabila lako"], answer: 3, why: "Ofisi za malipo ya matunzo ya mtoto za majimbo na makabila zinashughulikia mapitio." },
      { objective: "O4", q: "Unapaswa kufanya nini kwanza katika mazungumzo magumu?", options: ["Kusikiliza na kumwacha amalize", "Kumkatiza ili kueleza", "Kuondoka", "Kupaza sauti"], answer: 0, why: "Kusikiliza kwanza kunaonyesha heshima na kunakusaidia kuelewa." },
      { objective: "O4", q: "Kusema tena ulichosikia kunaitwa:", options: ["Kubishana", "Kurudia (reflect back)", "Kupuuza", "Kulaumu"], answer: 1, why: "Kurudia kunamwonyesha mtu mwingine kwamba umeelewa." },
      { objective: "O4", q: "Neno lipi unapaswa kuliacha nje ya msamaha?", options: ["Samahani", "Nitafanya", "Lakini", "Mimi"], answer: 2, why: "Lakini linageuza msamaha kuwa kisingizio." },
      { objective: "O5", q: "Mshauri ni:", options: ["Afisa wako wa parole", "Mtu anayekulipia bili zako", "Jaji", "Mtu unayemwamini aliyekutangulia hatua chache anayekupa ushauri na msaada"], answer: 3, why: "Washauri wanatoa ushauri na kukutia moyo unapokua." },
      { objective: "O5", q: "Ulienda kwenye kikundi cha msaada mara moja na ukajisikia mgeni. Hatua nzuri inayofuata ni ipi?", options: ["Kwenda angalau mara mbili zaidi kabla ya kuamua", "Kutoenda tena kamwe", "Kulalamika mtandaoni", "Kuwaambia wengine wasiende"], answer: 0, why: "Vikundi vingi vinakuwa bora kufikia ziara ya tatu." },
      { objective: "O5", q: "Ipi ni njia ya kupata vikundi vya jamii?", options: ["Kumwomba pesa mtu usiyemjua", "Kupiga 211 au kumuuliza msimamizi wako wa kesi", "Kusubiri mtu akupate", "Kurudi kwenye vijiwe vya zamani"], answer: 1, why: "211 na wasimamizi wa kesi wanajua vikundi na programu za eneo lako." },
      { objective: "O6", q: "Mpaka ni nini?", options: ["Uzio unaozunguka nyumba yako", "Sheria ambayo wengine wanakuwekea", "Kikomo unachoweka kulinda afya na maendeleo yako", "Aina ya amri ya mahakama"], answer: 2, why: "Mpaka unalinda afya yako, usalama wako na maendeleo yako." },
      { objective: "O6", q: "Lipi ni kweli kuhusu 988?", options: ["Inagharimu pesa", "Inafanya kazi siku za kazi tu", "Ni kwa dharura zinazohusisha polisi tu", "Unaweza kupiga simu, kutuma ujumbe au chat bure, saa 24 kila siku"], answer: 3, why: "988 ni bure, ni ya siri na iko wazi saa 24 kila siku kwa simu, ujumbe au chat." },
      { objective: "O6", q: "Unapaswa kuweka orodha yako ya msaada wapi?", options: ["Kwenye simu yako na kwenye karatasi", "Kichwani mwako tu", "Popote pale hapana", "Kwa mtu usiyemjua"], answer: 0, why: "Kuwa nayo mahali pawili kunamaanisha unaweza kuifikia unapoihitaji." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 1, 3, 6, 7, 10, 11, 13, 14, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Mawasiliano ya kwanza", objective: "O1", notYet: "Hakuna ujumbe, au unaomba pesa, unalaumu au unashinikiza.", meets: "Anataja atakayewasiliana naye kwanza na ujumbe mfupi wenye heshima.", exceeds: "Ujumbe ulisomwa kwa sauti na unampa mtu nafasi ya kuchukua muda wake." },
      { name: "Hatua ya malezi au malipo ya matunzo ya mtoto", objective: "O3", notYet: "Hakuna hatua wakati inamhusu.", meets: "Hatua moja iliyo wazi, kama kuwasiliana na mlezi au kuiomba ofisi ifanye mapitio, pamoja na tarehe.", exceeds: "Anaorodhesha karatasi zinazohitajika au maswali kwa mlezi." },
      { name: "Misaada ya jamii", objective: "O5", notYet: "Misaada isiyofika miwili.", meets: "Misaada miwili, kama mshauri, kikundi au jumuiya ya imani, pamoja na jinsi ya kuwafikia.", exceeds: "Ina maneno kamili ya kumwomba mshauri ahadi maalum." },
      { name: "Mipaka", objective: "O6", notYet: "Mipaka isiyofika miwili, au haiko wazi.", meets: "Mipaka miwili iliyo wazi inayolinda maendeleo ya mwanafunzi.", exceeds: "Kila mpaka una maneno ambayo mwanafunzi atatumia kuushika." },
      { name: "Orodha ya msaada", objective: "O6", notYet: "Hakuna orodha, au 988 haipo.", meets: "Orodha ya watu na namba za kupiga, pamoja na 988.", exceeds: "Imehifadhiwa kwenye simu na kwenye karatasi." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoripoti kuwasiliana na mwanafamilia au mtoto ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaojiunga na programu ya washauri, kikundi cha msaada au jumuiya ya imani ndani ya siku 60",
      "Wanafunzi wanaoomba mapitio ya malipo ya matunzo ya mtoto wakati amri yao haiendani tena na kipato chao"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Karatasi na kalamu, au app ya maelezo kwenye simu",
      "Simu ya kuhifadhi orodha ya msaada",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Mada hizi zinaweza kuleta hisia kali; waache wanafunzi washiriki tu kile wanachochagua na uweke 988 mahali panapoonekana.",
      "Wakumbushe wanafunzi kwamba amri za mahakama, amri za kutowasiliana na masharti ya parole au probation yanatangulia.",
      "Kuwa na mawasiliano ya ofisi ya malipo ya matunzo ya mtoto ya eneo lako, msaada wa kisheria na 211 tayari.",
      "Fanyeni mazoezi ya kusikiliza na sentensi za \"mimi\" wawili wawili kwa kutumia hali za kubuni, si migogoro halisi ya familia.",
      "Pima mpango kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
