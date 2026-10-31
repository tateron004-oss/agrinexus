"use strict";

// Koach Learn course (Swahili translation of entrepreneurs/entrepreneurs-scaling-ai-business.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "entrepreneurs-scaling-ai-business-sw",
  lang: "sw",
  translationOf: "entrepreneurs-scaling-ai-business",
  category: "Entrepreneurs",
  name: "Kukuza Biashara Inayotumia AI",
  skills: "Kujua namba zako muhimu, Kupata kizuizi kikuu, Kugeuza kazi kuwa mifumo, Kuongeza msaada, Kuongeza wateja hatua kwa hatua, Kulinda ubora unapokua",
  outcome: "kutumia AI kusoma namba muhimu za biashara yako, kupata kinachozuia ukuaji, kugeuza kazi yako kuwa mifumo ambayo wengine wanaweza kuiendesha, na kuandika mpango halisi wa siku 90 wa kukua wenye ukaguzi wa ubora.",
  about: [
    "Kukuza biashara (scaling) maana yake ni kuongeza mauzo bila gharama, saa za kazi na makosa kuongezeka kwa kasi ileile. Kozi hii ni kwa wamiliki ambao biashara yao tayari inafanya kazi na wako tayari kuikuza, huku AI ikifanya zaidi ya kazi za kawaida.",
    "Katika Sura 1 utatumia AI kuelewa namba zako, kupata kizuizi kimoja kinachokuchelewesha, na kugeuza kazi yako kuwa mifumo iliyoandikwa. Katika Sura 2 utapanga msaada (wakandarasi, wafanyakazi na zana za AI), utachagua njia za kukua, na utaweka ukaguzi wa ubora na hatari ili ukuaji usiharibu kile wateja wanachopenda.",
    "Kila somo linachukua kama dakika tano, na lina kazi ya kufanya kwenye biashara yako mwenyewe. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Mambo ya kodi, ajira na sheria yanaunganishwa na vyanzo rasmi; muulize mhasibu au wakili kuhusu hali yako."
  ],
  finalTask: "Andika mpango wa ukurasa mmoja wa kukua kwa siku 90: namba zako tano muhimu leo na malengo yake, kizuizi chako kikuu na jinsi utakavyokiondoa, mifumo miwili utakayoiandika, msaada utakaoongeza (mtu au zana ya AI) na gharama yake, njia moja ya kukua utakayoijaribu, na ukaguzi wa ubora mitatu utakaoufuatilia kila wiki.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wamiliki wa biashara ndogo nchini Marekani ambazo tayari zinafanya kazi na zina wateja wa kudumu, walio tayari kukua na wanaotaka AI ifanye zaidi ya kazi za kawaida.",
    startingPoint: "Wanauza, wanahudumia wateja na wanafanya kazi nyingi muhimu wao wenyewe. Wengi hawafuatilii namba zao muhimu kila mwezi, wana mifumo michache iliyoandikwa, na hawajapanga kuajiri wala majaribio ya kukua.",
    gap: "Kukuza biashara inayopoteza pesa kwa kila mauzo, au inayotegemea muda wa mmiliki kwa kila kazi, hufanya matatizo kuwa makubwa zaidi, si madogo. Wamiliki wanahitaji kusoma namba zao, kurekebisha kizuizi kikuu, kuandika mifumo, kuongeza msaada unaofaa na kujaribu ukuaji wakiwa na ukaguzi wa ubora, ili biashara ikue bila kuvunjika.",
    constraints: [
      "Maneno rahisi na hesabu za msingi za lahajedwali (spreadsheet)",
      "Vifaa: kompyuta yenye lahajedwali na msaidizi wa AI wa bure",
      "Muda: kama dakika tano kwa kila somo, pamoja na kazi kwenye namba na mifumo ya mmiliki mwenyewe",
      "Mambo ya kodi na ajira (kama hadhi ya mfanyakazi) yanaunganishwa na vyanzo rasmi; wamiliki wanamuuliza mhasibu au wakili",
      "Majina ya wateja yanaondolewa kabla taarifa yoyote ya biashara haijaingizwa kwenye AI"
    ],
    prerequisites: "Inashauriwa kozi \"AI kwa Tija ya Biashara\" (AI for Business Productivity), pamoja na biashara yenye mauzo ya angalau miezi sita."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa namba za biashara za miezi sita bila majina ya wateja", action: "kufuatilia namba tano muhimu kwenye lahajedwali na kutumia AI kueleza mwelekeo wake", standard: "ukikagua hesabu za AI na kusema kama kila mauzo yanaleta faida" },
    { id: "O2", condition: "Ukipewa hatua za kazi yako kuu pamoja na muda wa kila hatua", action: "kutambua kizuizi kikuu na kuchagua suluhisho moja: kuondoa, kuendesha kwa mashine au kumkabidhi mtu", standard: "suluhisho likiwa tayari kujaribiwa mwezi huu" },
    { id: "O3", condition: "Ukipewa kazi mbili muhimu unazozifanya mwenyewe", action: "kuandika kila moja kama mfumo wenye hatua, orodha ya ukaguzi na kiwango cha ubora", standard: "ili mtu mwingine aweze kuufuata bila kuuliza maswali" },
    { id: "O4", condition: "Ukipewa msaada ambao biashara yako inauhitaji zaidi", action: "kuchagua kati ya zana ya AI na mtu na kuandaa maelezo ya kazi yaliyo ya haki", standard: "kwa maneno yanayohusu kazi tu na maelezo ya hadhi ya mfanyakazi kwa kutumia makundi matatu ya IRS" },
    { id: "O5", condition: "Ukipewa njia mbalimbali za kukua", action: "kupanga jaribio la siku 30 la njia moja lenye lengo, kipimo na kikomo cha matumizi", standard: "ukilinganisha gharama kwa kila mteja mpya na namba zako muhimu" },
    { id: "O6", condition: "Kwa mpango wako wa kukua wa siku 90", action: "kuweka ukaguzi wa ubora mitatu wa kila wiki na ukaguzi wa zana za AI na taarifa za wateja", standard: "ukiupitia mpango kila baada ya wiki mbili" }
  ],
  chapters: [
    {
      name: "Sura 1: Jiandae kukua",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kujua namba zako muhimu",
          minutes: 5,
          goal: "Fuatilia namba tano muhimu na utumie AI kueleza maana yake.",
          text: [
            "Huwezi kukuza kitu usichokipima. Namba tano ni muhimu kwa biashara ndogo nyingi: mapato ya mwezi (pesa zinazoingia), gharama, faida (kinachobaki), idadi ya wateja, na thamani ya kila mteja kwa muda ukilinganisha na gharama ya kumpata.",
            "Weka miezi sita iliyopita kwenye lahajedwali. Kisha omba AI ikusaidie kuisoma: \"Haya ni mapato yangu ya kila mwezi, gharama na idadi ya wateja (bila majina). Unaona mwelekeo gani? Namba ipi inapaswa kunitia wasiwasi?\" Kagua hesabu zake wewe mwenyewe.",
            "Biashara iko tayari kukua pale kila mauzo yanapoleta faida na wateja wanaendelea kurudi au wanakupendekeza kwa wengine. Kama kila mauzo yanapoteza pesa, kukua kunaifanya hasara kuwa kubwa zaidi."
          ],
          steps: ["Tengeneza lahajedwali yenye mapato, gharama, faida na idadi ya wateja ya miezi sita.", "Hesabu wastani wa mauzo na gharama ya kumpata mteja.", "Omba AI ieleze mwelekeo na hatari (bila majina ya wateja).", "Rudia hesabu zozote wewe mwenyewe.", "Andika sentensi moja: je, kila mauzo yanaleta faida?"],
          words: [["Mapato", "pesa zote zinazoingia kutokana na mauzo."], ["Faida", "mapato ukitoa gharama."], ["Gharama ya kumpata mteja", "unachotumia, kwa wastani, kumpata mteja mmoja mpya (kwa Kiingereza: customer acquisition cost)."], ["Kukuza (scale)", "kuongeza mauzo kwa kasi kuliko gharama na juhudi."]],
          slides: [
            { title: "Namba tano muhimu", bullets: ["Mapato na gharama", "Faida", "Idadi ya wateja", "Thamani ya mteja dhidi ya gharama ya kumpata"] },
            { title: "AI inasoma mwelekeo", bullets: ["Miezi sita kwenye lahajedwali", "Omba AI ieleze mwelekeo na hatari", "Kagua hesabu wewe mwenyewe"] },
            { title: "Uko tayari kukua?", bullets: ["Kila mauzo yanaleta faida", "Wateja wanarudi au wanakupendekeza", "Mauzo yakipoteza pesa, kukua kunaongeza hasara"] }
          ],
          tryIt: "Tengeneza lahajedwali ya namba zako za miezi sita, omba AI ionyeshe mwelekeo na hatari moja, kagua hesabu zake, na uandike kama kila mauzo yanaleta faida.",
          youCanNow: "kufuatilia namba zako muhimu na kuamua kama biashara yako iko tayari kukua.",
          quickCheck: [
            { objective: "O1", q: "Gharama ya kumpata mteja ni nini?", options: ["Unachotumia kwa wastani kumpata mteja mmoja mpya", "Bei anayolipa mteja", "Kodi yako ya pango", "Idadi ya wateja ulio nao"], answer: 0, why: "Inaonyesha kila mteja mpya anakugharimu kiasi gani kumpata." },
            { objective: "O1", q: "AI inasema faida yako iliongezeka mara mbili mwezi uliopita, lakini unahisi si sawa. Unafanya nini?", options: ["Sherehekea na uajiri mara moja", "Kagua hesabu wewe mwenyewe kwenye lahajedwali", "Iombe AI iseme tena", "Puuza namba zako"], answer: 1, why: "Daima kagua hesabu za AI kabla ya kuzitumia." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kupata kizuizi kikuu",
          minutes: 5,
          goal: "Pata hatua moja inayozuia zaidi kiasi cha kazi ambacho biashara yako inaweza kubeba.",
          text: [
            "Kizuizi (bottleneck) ni sehemu nyembamba zaidi inayozuia kila kitu kingine. Katika biashara ya keki inaweza kuwa nafasi ya oveni; katika biashara ya huduma mara nyingi ni muda wa mmiliki wa kutoa makadirio ya bei, kufuatilia au kukagua ubora.",
            "Orodhesha hatua kuanzia mawasiliano ya kwanza hadi mteja aliyeridhika, na muda ambao kila hatua inachukua kwa kila mteja. Uliza AI: \"Hizi ni hatua zangu na muda wake. Kizuizi kiko wapi, na ni njia gani tatu za kukirekebisha: kuondoa hatua, kuiendesha kwa mashine, au kumkabidhi mtu?\"",
            "Rekebisha kizuizi kwanza. Kuharakisha hatua nyingine yoyote hakusaidii, kwa sababu kazi bado inarundikana kwenye sehemu nyembamba."
          ],
          steps: ["Orodhesha kila hatua kuanzia mawasiliano ya kwanza hadi kazi kukamilika.", "Andika muda ambao kila hatua inachukua kwa kila mteja na nani anaifanya.", "Omba AI ipate kizuizi na ipendekeze masuluhisho.", "Chagua kuondoa, kuendesha kwa mashine au kumkabidhi mtu.", "Panga suluhisho moja la kujaribu mwezi ujao."],
          words: [["Kizuizi (bottleneck)", "hatua ya polepole zaidi, inayopunguza kiasi ambacho biashara nzima inaweza kufanya."], ["Kumkabidhi mtu", "kumpa mtu mwingine kazi aifanye."]],
          slides: [
            { title: "Sehemu nyembamba zaidi", bullets: ["Inazuia kila kitu kingine", "Mara nyingi ni muda wa mmiliki"] },
            { title: "Kipate", bullets: ["Orodhesha hatua na muda kwa kila mteja", "Uliza AI kazi inarundikana wapi"] },
            { title: "Kirekebishe kwanza", bullets: ["Ondoa, endesha kwa mashine au mkabidhi mtu", "Kuharakisha hatua nyingine hakusaidii"] }
          ],
          tryIt: "Andika hatua zako na muda wake, omba AI ipate kizuizi, na uchague suluhisho moja (kuondoa, kuendesha kwa mashine au kumkabidhi mtu) la kujaribu mwezi huu.",
          youCanNow: "kupata hatua inayozuia ukuaji wako na kuchagua suluhisho.",
          quickCheck: [
            { objective: "O2", q: "Kizuizi (bottleneck) ni nini?", options: ["Hatua yako ya haraka zaidi", "Aina ya chupa", "Hatua ya polepole zaidi inayozuia kila kitu kingine", "Mteja mpya"], answer: 2, why: "Kazi inarundikana kwenye kizuizi, kwa hiyo kinazuia ukuaji." },
            { objective: "O2", q: "Kila makadirio ya bei yanakusubiri wewe uyaandike, na oda zinarundikana. Unaweza kuchagua suluhisho gani?", options: ["Harakisha usafirishaji badala yake", "Pokea oda zaidi", "Acha kutuma makadirio ya bei", "Tumia kiolezo cha makadirio au mkabidhi msaidizi aliyefunzwa kazi ya makadirio"], answer: 3, why: "Kuendesha kwa mashine au kukabidhi hatua ya kizuizi kunafungua mtiririko wa kazi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kugeuza kazi yako kuwa mifumo",
          minutes: 5,
          goal: "Andika kazi mbili muhimu kama mifumo ambayo mtu mwingine (au zana ya AI) anaweza kuiendesha.",
          text: [
            "Kama kila kitu kiko kichwani mwako, biashara haiwezi kukua kupita wewe. Mfumo ni njia iliyoandikwa ya kufanya kazi: hatua, zana, orodha ya ukaguzi na jinsi \"kazi nzuri\" inavyoonekana.",
            "Jirekodi ukifanya kazi, au andika maelezo ya haraka, kisha omba AI iyageuze kuwa utaratibu wa kawaida wa kazi (SOP) wenye orodha ya ukaguzi na kiwango cha ubora. Weka alama kwenye hatua ambazo zana za AI zinaweza kufanya na mahali ambapo mtu lazima akague.",
            "Jaribu kila mfumo kwa kumwacha mtu mwingine aufuate huku wewe ukitazama kimya. Kila swali analouliza linaonyesha hatua iliyokosekana. Weka mifumo yote mahali pamoja panapoweza kufikiwa na wote."
          ],
          steps: ["Chagua kazi mbili zinazochukua muda wako mwingi zaidi.", "Rekodi au andika maelezo unapofanya kila moja.", "Omba AI igeuze maelezo kuwa SOP yenye orodha ya ukaguzi na kiwango cha ubora.", "Weka alama kwenye hatua za AI na ukaguzi wa mtu.", "Jaribu na mtu mwingine na ujaze mapengo."],
          words: [["Mfumo", "njia iliyoandikwa ya kufanya kazi inayoweza kurudiwa."], ["SOP", "standard operating procedure (utaratibu wa kawaida wa kazi): hatua zilizoandikwa za kufanya kazi fulani."], ["Kiwango cha ubora", "maelezo wazi ya jinsi kazi nzuri inavyoonekana."]],
          slides: [
            { title: "Itoe kichwani mwako", bullets: ["Mfumo = hatua, zana, orodha ya ukaguzi, kiwango", "Biashara inaweza kukua kupita wewe"] },
            { title: "Ujenge kwa AI", bullets: ["Rekodi au andika maelezo ya haraka", "AI inayageuza kuwa SOP", "Weka alama: hatua za AI na ukaguzi wa mtu"] },
            { title: "Ujaribu", bullets: ["Mtu mwingine anaufuata", "Kila swali = hatua iliyokosekana", "Weka mifumo yote mahali pamoja"] }
          ],
          tryIt: "Geuza moja ya kazi zako mbili kubwa kuwa SOP kwa msaada wa AI, pamoja na orodha ya ukaguzi na kiwango cha ubora. Mwombe mtu aijaribu ukiweza.",
          youCanNow: "kugeuza ujuzi wako kuwa mifumo ambayo wengine au zana za AI wanaweza kuiendesha.",
          quickCheck: [
            { objective: "O3", q: "Kiwango cha ubora katika SOP ni nini?", options: ["Maelezo wazi ya jinsi matokeo mazuri yanavyoonekana", "Bei ya zana", "Sahihi ya mmiliki", "Orodha ya wateja"], answer: 0, why: "Kiwango cha ubora kinamwambia mtu maana ya kazi iliyofanywa vizuri." },
            { objective: "O3", q: "Msaidizi anaendelea kukupigia simu na maswali anapofuata SOP yako. Unafanya nini?", options: ["Fanya kazi hiyo wewe mwenyewe tena", "Ongeza maelezo yaliyokosekana kwenye SOP na uijaribu tena", "Mfukuze msaidizi", "Tupa SOP"], answer: 1, why: "Maswali yanaonyesha mahali ambapo SOP bado haijakamilika." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Jiandae kukua",
        questions: [
          { objective: "O1", q: "Kila mauzo yanapoteza pesa kidogo. Nini kinatokea ukikuza biashara?", options: ["Faida inajitokeza yenyewe", "Hasara zinaongezeka", "Hakuna kinachobadilika", "Gharama zinatoweka"], answer: 1, why: "Ukuaji unazidisha chochote kinachotokea kwa kila mauzo." },
          { objective: "O1", q: "Faida ni nini?", options: ["Idadi ya wateja", "Pesa zote zinazoingia", "Bei yako", "Mapato ukitoa gharama"], answer: 3, why: "Faida ni kinachobaki baada ya gharama." },
          { objective: "O1", q: "AI inasema gharama zako zilipanda kwa 40%. Unapaswa kufanya nini?", options: ["Kagua hesabu wewe mwenyewe kwenye lahajedwali", "Iamini na uingiwe na hofu", "Futa lahajedwali", "Ipuuze"], answer: 0, why: "Hesabu za AI zinaweza kuwa na makosa; hakikisha." },
          { objective: "O2", q: "Kizuizi (bottleneck) ni nini?", options: ["Mteja wako bora", "Aina ya chupa", "Hatua ya polepole zaidi inayozuia kila kitu kingine", "Njia ya masoko"], answer: 2, why: "Ni sehemu nyembamba zaidi katika mchakato wako." },
          { objective: "O3", q: "Unajuaje kwamba SOP imekamilika?", options: ["AI ndiyo iliyoiandika", "Ni ndefu sana", "Mtu mwingine anaweza kuifuata bila kuuliza maswali", "Ina kichwa kizuri"], answer: 2, why: "Maswali wakati wa kujaribu yanaonyesha hatua zilizokosekana." }
        ]
      }
    },
    {
      name: "Sura 2: Kua bila kuvunjika",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuongeza msaada: watu na zana za AI",
          minutes: 6,
          goal: "Amua msaada gani wa kuongeza na uandae maelezo ya kazi.",
          text: [
            "Baadhi ya kazi zinafaa zaidi kukabidhiwa zana ya AI au mashine (kupanga, kuandika rasimu, kupanga ratiba). Nyingine zinahitaji mtu (kufanya maamuzi, kazi ya mikono, uhusiano na wateja). Tumia kizuizi chako na mifumo yako kuamua ipi ni ipi.",
            "Ukiajiri mtu, AI inaweza kuandika rasimu ya maelezo ya kazi yaliyo wazi kutoka kwenye SOP zako: kazi, ujuzi, saa na kiwango cha mshahara. Kagua kama maneno ni ya haki na hayabagui mtu, na ondoa chochote kisichohusu kazi.",
            "Mkandarasi au mfanyakazi? IRS (mamlaka ya kodi ya Marekani) inaangalia aina tatu za ushahidi: udhibiti wa tabia (je, unadhibiti jinsi kazi inavyofanywa?), udhibiti wa fedha (nani anadhibiti malipo, matumizi na zana?) na aina ya uhusiano (mikataba, marupurupu, kazi ya kudumu na kuu). Ukikosea hapa unaweza kulipa kodi na faini; soma ukurasa wa IRS, na muulize mhasibu au wakili. Sheria za jimbo zinaweza kuwa kali zaidi."
          ],
          steps: ["Orodhesha kazi unazotaka kuacha kuzifanya wewe.", "Weka alama kwa kila moja: zana ya AI, mkandarasi au mfanyakazi.", "Omba AI iandike rasimu ya maelezo ya kazi kutoka kwenye SOP zako.", "Kagua maneno kama ni ya haki na ondoa masharti yasiyohusu kazi.", "Soma ukurasa wa IRS kuhusu hadhi ya mfanyakazi na muulize mhasibu kabla ya kuajiri."],
          words: [["Mkandarasi", "mtu anayejiendeshea biashara yake na anakufanyia kazi, kwa kawaida akiamua mwenyewe jinsi ya kuifanya (kwa Kiingereza: contractor)."], ["Mfanyakazi", "mtu ambaye unadhibiti kazi yake; wewe unakata na kulipa kodi za ajira (kwa Kiingereza: employee)."], ["Maelezo ya kazi", "muhtasari ulioandikwa wa majukumu, ujuzi, saa na mshahara wa kazi fulani."]],
          slides: [
            { title: "Mtu au zana ya AI?", bullets: ["AI: kupanga, kuandika rasimu, kupanga ratiba", "Watu: maamuzi, kazi ya mikono, uhusiano"] },
            { title: "Maelezo ya kazi kwa AI", bullets: ["Rasimu kutoka kwenye SOP zako", "Majukumu, ujuzi, saa, kiwango cha mshahara", "Kagua kama maneno ni ya haki na yanahusu kazi"] },
            { title: "Mkandarasi au mfanyakazi? (IRS)", bullets: ["Udhibiti wa tabia", "Udhibiti wa fedha", "Aina ya uhusiano", "Muulize mhasibu; sheria za jimbo zinaweza kuwa kali zaidi"] }
          ],
          sources: [{ name: "IRS: Independent Contractor (Self-Employed) or Employee?", url: "https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-self-employed-or-employee" }],
          tryIt: "Chagua msaada unaouhitaji zaidi. Ikiwa ni mtu, omba AI iandike rasimu ya maelezo ya kazi kutoka kwenye SOP yako na uikague kama ni ya haki; andika kama unafikiri ni kazi ya mkandarasi au ya mfanyakazi na kwa nini, ukitumia makundi matatu ya IRS.",
          youCanNow: "kuamua kati ya zana za AI na watu kwa ajili ya kukua, na kuandaa maelezo ya kazi yaliyo ya haki.",
          quickCheck: [
            { objective: "O4", q: "Kazi ipi kwa kawaida inahitaji mtu badala ya AI?", options: ["Kupanga barua pepe", "Kuandika rasimu ya kiolezo", "Kujenga uhusiano na wateja muhimu", "Kufupisha maelezo"], answer: 2, why: "Uhusiano unahitaji maamuzi ya mtu na uaminifu." },
            { objective: "O4", q: "Maelezo ya kazi ya AI yanasema \"mwanatimu kijana mwenye nguvu\". Unafanya nini?", options: ["Yaache hivyo", "Ongeza maneno mengine ya sifa", "Yachapishe kama yalivyo", "Yabadilishe yawe maneno ya haki yanayohusu kazi"], answer: 3, why: "Maelezo ya kazi yanapaswa kuwa ya haki na kuhusu kazi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuongeza wateja hatua kwa hatua",
          minutes: 5,
          goal: "Chagua njia moja ya kukua na upange jaribio dogo linaloweza kupimwa.",
          text: [
            "Njia za kukua ni njia ambazo wateja wapya wanakupata: mapendekezo ya wateja, ushirikiano, utafutaji wa karibu na orodha kwenye ramani, mitandao ya kijamii, barua pepe, matangazo ya kulipia, na masoko ya mtandaoni. Biashara ndogo nyingi hukua vizuri zaidi kupitia njia moja au mbili zinazofanywa vizuri.",
            "Uliza AI: \"Biashara yangu ni [aina] inayohudumia [mteja]. Pendekeza njia tano za kukua, jinsi kila moja ingefanya kazi kwangu, gharama yake, na jinsi ningeipima.\" Chagua ile inayofaa mteja wako na bajeti yako.",
            "Fanya jaribio dogo kwa siku 30 lenye lengo wazi: \"Waombe wateja 20 wa zamani wanipendekeze; lengo: wateja watarajiwa 5 wapya.\" Pima matokeo, linganisha gharama kwa kila mteja mpya na namba zako za Somo 1, na hapo ndipo utumie zaidi."
          ],
          steps: ["Omba AI ikupe njia tano za kukua pamoja na gharama na vipimo.", "Chagua moja inayofaa mteja wako na bajeti yako.", "Weka jaribio la siku 30 lenye lengo wazi.", "Fuatilia matokeo na gharama kwa kila mteja mpya.", "Amua: iongeze, ibadilishe au isimamishe."],
          words: [["Njia ya kukua", "njia ambayo wateja wapya wanakupata na kununua kwako."], ["Pendekezo (referral)", "mteja anapokupendekeza kwa mtu mwingine."], ["Jaribio", "jaribio dogo la muda maalum lenye lengo wazi."]],
          slides: [
            { title: "Njia ambazo wateja wanakupata", bullets: ["Mapendekezo na ushirikiano", "Utafutaji wa karibu, mitandao ya kijamii, barua pepe", "Matangazo ya kulipia na masoko ya mtandaoni"] },
            { title: "Chagua moja au mbili", bullets: ["Omba AI chaguo, gharama na vipimo", "Chagua inayofaa mteja wako na bajeti"] },
            { title: "Jaribu kidogo kwanza", bullets: ["Siku 30, lengo wazi", "Fuatilia gharama kwa kila mteja mpya", "Ongeza, badilisha au simamisha"] }
          ],
          tryIt: "Chagua njia moja ya kukua kwa msaada wa AI na uandike jaribio la siku 30: utakachofanya, lengo, jinsi utakavyolipima, na kiasi cha juu kabisa utakachotumia.",
          youCanNow: "kuchagua njia ya kukua na kuijaribu kabla ya kutumia zaidi.",
          quickCheck: [
            { objective: "O5", q: "Jaribio zuri la kukua la siku 30 lina nini?", options: ["Lengo wazi na kikomo cha matumizi", "Matumizi makubwa kadiri iwezekanavyo", "Hakuna njia ya kulipima", "Njia zote kwa wakati mmoja"], answer: 0, why: "Lengo na kikomo vinakuonyesha kama njia inafanya kazi bila hatari kubwa." },
            { objective: "O5", q: "Jaribio lako linaleta wateja, lakini kila mmoja anagharimu zaidi ya thamani yake kwako. Unafanya nini?", options: ["Tumia zaidi kwenye njia hiyo", "Simamisha au badilisha njia kabla ya kutumia zaidi", "Puuza namba", "Shusha bei zako"], answer: 1, why: "Linganisha gharama kwa kila mteja mpya na thamani ya mteja kabla ya kukuza njia." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kulinda ubora unapokua",
          minutes: 5,
          goal: "Weka ukaguzi wa ubora wa kila wiki na mpango wa hatari za AI na taarifa unapokua.",
          text: [
            "Ukuaji mara nyingi huharibu ubora: kazi ya haraka haraka, majibu ya polepole, rasimu za AI ambazo hakuna anayezikagua. Chagua namba tatu za ubora za kufuatilia kila wiki, kama wastani wa alama za maoni ya wateja, muda wa kujibu, na kiwango cha kurudia kazi au kurudisha pesa.",
            "Kazi nyingi zaidi zinapopita kwenye zana za AI, hatari nazo zinaongezeka: taarifa nyingi zaidi za wateja katika zana nyingi zaidi, maudhui mengi zaidi ya AI yanayotoka nje. Kagua zana zipi zina taarifa za wateja, nani anaweza kuzifikia, na kwamba mtu bado anakagua chochote ambacho wateja wanakiona.",
            "Viunganishe vyote katika mpango wa siku 90. Omba AI ikusaidie kuupanga, lakini kila namba na tarehe iwe ile unayoiamini. Upitie kila baada ya wiki mbili na urekebishe."
          ],
          steps: ["Chagua namba tatu za ubora za kufuatilia kila wiki.", "Orodhesha zana zipi zina taarifa za wateja na nani anaweza kuzifikia.", "Hakikisha mtu anakagua kila kitu ambacho wateja wanakiona.", "Omba AI ipange mpango wako wa siku 90 kutoka kwenye maelezo yako.", "Weka mapitio kila baada ya wiki mbili."],
          words: [["Ukaguzi wa ubora", "kuangalia mara kwa mara namba au sampuli ya kazi ili kuhakikisha viwango vinadumu."], ["Kiwango cha kurudisha pesa", "sehemu ya mauzo ambayo ulilazimika kurudisha pesa."]],
          slides: [
            { title: "Ukuaji unaweza kuharibu ubora", bullets: ["Kazi ya haraka haraka, majibu ya polepole", "Rasimu za AI ambazo hakuna anayezikagua"] },
            { title: "Fuatilia namba tatu kila wiki", bullets: ["Alama za maoni ya wateja", "Muda wa kujibu", "Kiwango cha kurudia kazi au kurudisha pesa"] },
            { title: "Hatari za AI na taarifa zinaongezeka pia", bullets: ["Zana zipi zina taarifa za wateja?", "Nani anaweza kuzifikia?", "Mtu anakagua kile wateja wanachokiona"] },
            { title: "Mpango wako wa siku 90", bullets: ["AI inaupanga; wewe unaweka namba halisi", "Upitie kila baada ya wiki mbili"] }
          ],
          tryIt: "Kazi ya mwisho: andika mpango wako wa ukurasa mmoja wa kukua kwa siku 90: namba muhimu na malengo, suluhisho la kizuizi, mifumo miwili, msaada utakaoongeza, jaribio moja la kukua, na ukaguzi wa ubora mitatu wa kila wiki.",
          youCanNow: "kupanga na kusimamia ukuaji kwa kutumia AI huku ukilinda ubora na taarifa za wateja.",
          quickCheck: [
            { objective: "O6", q: "Ipi ni namba ya ubora ya kila wiki?", options: ["Rangi unayoipenda", "Idadi ya wafuasi kwenye mitandao ya kijamii", "Kiwango cha kurudia kazi au kurudisha pesa", "Ukubwa wa ofisi"], answer: 2, why: "Viwango vya kurudia kazi na kurudisha pesa vinaonyesha kama ubora unashuka." },
            { objective: "O6", q: "Mauzo yanaongezeka, lakini malalamiko yameongezeka mara mbili mwezi huu. Mpango wako unakuambia ufanye nini?", options: ["Endelea kukua kwa kasi zaidi", "Puuza hadi robo ijayo ya mwaka", "Ondoa ukaguzi wa ubora", "Tafuta chanzo na ukirekebishe kabla ya kuongeza wateja zaidi"], answer: 3, why: "Ukaguzi wa ubora upo ili ukuaji usiharibu kile wateja wanachopenda." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kua bila kuvunjika",
        questions: [
          { objective: "O4", q: "Kazi ipi inafaa zaidi kukabidhiwa zana ya AI?", options: ["Kupanga maombi yanayoingia", "Kujenga uaminifu na mteja wako mkubwa zaidi", "Kazi ya mikono ya kutengeneza vitu", "Kuamua nani wa kuajiri"], answer: 0, why: "Kupanga kazi za kawaida kunafaa AI; maamuzi na uhusiano vinahitaji watu." },
          { objective: "O4", q: "Lipi ni moja ya makundi matatu ya IRS ya hadhi ya mfanyakazi?", options: ["Aina ya simu", "Rangi unayoipenda", "Miaka ya shule", "Udhibiti wa tabia"], answer: 3, why: "Udhibiti wa tabia, udhibiti wa fedha na aina ya uhusiano ndiyo makundi matatu." },
          { objective: "O5", q: "Kabla ya kutumia zaidi kwenye njia ya kukua unapaswa:", options: ["Kutumia bajeti yako yote", "Kufanya jaribio dogo linalopimwa", "Kumuiga mshindani", "Kuacha kupima"], answer: 1, why: "Majaribio yanaonyesha kama njia inafanya kazi kabla hujawekeza." },
          { objective: "O6", q: "Ipi ni namba nzuri ya ubora ya kila wiki?", options: ["Wastani wa muda wa kuwajibu wateja", "Idadi ya apps unazotumia", "Ukubwa wa nembo yako", "Urefu wa maelezo yako kwenye mitandao ya kijamii"], answer: 0, why: "Muda wa kujibu unaonyesha kama huduma inashuka." },
          { objective: "O6", q: "Kazi nyingi zaidi zinapopita kwenye zana za AI, unapaswa:", options: ["Kuipa kila zana taarifa zako zote", "Kuacha kukagua kazi ya AI", "Kukagua zana zipi zina taarifa za wateja na nani anaweza kuzifikia", "Kuondoa ukaguzi wa mtu"], answer: 2, why: "Hatari za taarifa na ubora zinaongezeka kadiri biashara inavyokua." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kukuza Biashara Inayotumia AI",
    questions: [
      { objective: "O1", q: "Kukuza biashara (scaling) maana yake:", options: ["Kupandisha bei tu", "Kuongeza mauzo kwa kasi kuliko gharama na juhudi", "Kufanya kazi saa nyingi zaidi", "Kununua zana zaidi"], answer: 1, why: "Hiyo ndiyo maana inayotumika katika kozi hii." },
      { objective: "O1", q: "Mapato ni:", options: ["Idadi ya wateja wako", "Kinachobaki baada ya gharama", "Bili ya zana zako", "Pesa zote zinazoingia kutokana na mauzo"], answer: 3, why: "Mapato ni pesa zinazoingia." },
      { objective: "O1", q: "Gharama ya kumpata mteja ni:", options: ["Kodi ya serikali", "Bei yako", "Kodi yako ya pango", "Unachotumia kwa wastani kumpata mteja mmoja mpya"], answer: 3, why: "Hiyo ndiyo maana yake." },
      { objective: "O1", q: "Kabla ya kuomba AI ichambue namba zako, unapaswa:", options: ["Kuongeza namba za kadi", "Kuondoa majina ya wateja", "Kuongeza nywila", "Kuziweka mtandaoni"], answer: 1, why: "Usiweke taarifa za siri kwenye zana za AI." },
      { objective: "O1", q: "Biashara iko tayari kukua pale:", options: ["Ina apps nyingi", "Ina nembo mpya", "Kila mauzo yanaleta faida na wateja wanarudi au wanapendekeza", "Mmiliki wake anafanya kazi saa 80"], answer: 2, why: "Mauzo yenye faida yanayojirudia yanaweza kukua." },
      { objective: "O2", q: "Katika biashara ya huduma, kizuizi mara nyingi ni:", options: ["Muda wa mmiliki", "Rangi ya gari la kazi", "Mwandiko wa herufi wa tovuti", "Idadi ya wafuasi"], answer: 0, why: "Mara nyingi wamiliki hutoa makadirio ya bei, hufuatilia na hukagua wao wenyewe." },
      { objective: "O2", q: "Njia tatu za kurekebisha kizuizi ni:", options: ["Kupandisha, kushusha au kusimamisha bei", "Kupuuza, kuficha au kuchelewesha", "Kuondoa, kuendesha kwa mashine au kumkabidhi mtu", "Kununua, kuuza au kukodisha"], answer: 2, why: "Hizi zinaondoa kikwazo." },
      { objective: "O2", q: "Kwa nini urekebishe kizuizi kwanza?", options: ["Kuharakisha hatua nyingine hakusaidii wakati kazi inarundikana pale", "Ni hatua ya bei nafuu zaidi", "Ndiyo inayofurahisha zaidi", "AI inasema hivyo"], answer: 0, why: "Sehemu nyembamba zaidi inazuia mchakato mzima." },
      { objective: "O3", q: "Mfumo ni:", options: ["Chapa ya kompyuta", "Njia iliyoandikwa ya kufanya kazi inayoweza kurudiwa", "Njia ya mauzo", "Fomu ya kodi"], answer: 1, why: "Hiyo ndiyo maana yake." },
      { objective: "O3", q: "SOP inapaswa kuwa na:", options: ["Namba za kadi za wateja", "Kichwa tu", "Nywila zako", "Hatua, orodha ya ukaguzi na kiwango cha ubora"], answer: 3, why: "Hivi vinafanya kazi iweze kurudiwa na kukaguliwa." },
      { objective: "O3", q: "Katika SOP, unaweka alama kwenye hatua za AI na:", options: ["Mahali ambapo mtu lazima akague", "Nyimbo unazozipenda", "Bei za washindani", "Hakuna kingine"], answer: 0, why: "Ukaguzi wa mtu unalinda ubora." },
      { objective: "O4", q: "Kazi ipi inahitaji mtu badala ya AI?", options: ["Kufupisha maelezo", "Kupanga barua pepe", "Kuandika rasimu ya ratiba", "Kujenga uhusiano na wateja"], answer: 3, why: "Uhusiano na maamuzi vinahitaji watu." },
      { objective: "O4", q: "AI inapoandika rasimu ya maelezo ya kazi unapaswa:", options: ["Kuongeza vikomo vya umri", "Kuyachapisha bila kubadilisha", "Kuyakagua kama maneno ni ya haki na yanahusu kazi", "Kuondoa kiwango cha mshahara"], answer: 2, why: "Maneno ya haki yanaepusha matatizo ya ubaguzi." },
      { objective: "O4", q: "Ili kuiomba IRS iamue hadhi ya mfanyakazi, upande wowote unaweza kujaza:", options: ["Fomu 1040-ES", "Fomu SS-8", "Fomu W-2", "Mpango wa biashara"], answer: 1, why: "Ukurasa wa IRS unataja Fomu SS-8." },
      { objective: "O4", q: "Kukosea hadhi ya mfanyakazi kunaweza kuleta:", options: ["Hakuna kitu", "Matangazo ya bure", "Gharama ndogo milele", "Kodi na faini"], answer: 3, why: "Kumweka mfanyakazi katika kundi lisilo sahihi kuna madhara ya kodi." },
      { objective: "O5", q: "Ipi ni njia ya kukua?", options: ["SOP yako", "Lahajedwali yako", "Mapendekezo kutoka kwa wateja", "Kizuizi chako"], answer: 2, why: "Mapendekezo yanaleta wateja wapya." },
      { objective: "O5", q: "Jaribio zuri la siku 30 lina:", options: ["Lengo wazi na kikomo cha matumizi", "Hakuna vipimo", "Bajeti isiyo na kikomo", "Hakuna tarehe ya mwisho"], answer: 0, why: "Malengo na vikomo vinafanya majaribio yawe na manufaa." },
      { objective: "O5", q: "Baada ya jaribio la kukua, unalinganisha gharama kwa kila mteja mpya na:", options: ["Nembo ya mshindani wako", "Namba zako muhimu, kama thamani ya mteja", "Hali ya hewa", "Bili yako ya simu"], answer: 1, why: "Njia inafaa kama wateja wana thamani zaidi ya gharama ya kuwapata." },
      { objective: "O6", q: "Ipi ni namba ya ubora ya kufuatilia unapokua?", options: ["Idadi ya mitindo ya herufi", "Kiwango cha kurudia kazi au kurudisha pesa", "Idadi ya mimea ofisini", "Urefu wa sahihi ya barua pepe"], answer: 1, why: "Kurudia kazi na kurudisha pesa kunaonyesha ubora unashuka." },
      { objective: "O6", q: "Unapaswa kupitia mpango wako wa siku 90 mara ngapi?", options: ["Kila baada ya wiki mbili", "Kamwe", "Mara moja tu mwishoni", "Kila saa"], answer: 0, why: "Mapitio ya mara kwa mara yanakuwezesha kurekebisha." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 2, 4, 5, 8, 9, 11, 13, 16, 18]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Namba muhimu", objective: "O1", notYet: "Namba chini ya tano, hakuna malengo, au hesabu za AI hazikukaguliwa.", meets: "Namba tano muhimu za leo na malengo ya siku 90, hesabu zimekaguliwa.", exceeds: "Anasema wazi kama kila mauzo yanaleta faida na kwa nini." },
      { name: "Suluhisho la kizuizi", objective: "O2", notYet: "Hakuna kizuizi kilichotajwa, au suluhisho halieleweki.", meets: "Kizuizi kikuu na suluhisho moja: kuondoa, kuendesha kwa mashine au kumkabidhi mtu.", exceeds: "Anaonyesha muda wa hatua unaothibitisha kuwa hicho ndicho kizuizi." },
      { name: "Mifumo", objective: "O3", notYet: "Mifumo chini ya miwili, au inakosa hatua au kiwango cha ubora.", meets: "Mifumo miwili imetajwa, kila mmoja na hatua, orodha ya ukaguzi na kiwango cha ubora.", exceeds: "Angalau mmoja ulijaribiwa na mtu mwingine." },
      { name: "Msaada na jaribio la kukua", objective: "O5", notYet: "Hakuna gharama ya msaada, au jaribio la kukua halina lengo wala kikomo.", meets: "Msaada wa kuongeza pamoja na gharama yake, na jaribio moja la kukua lenye lengo, kipimo na kikomo.", exceeds: "Hadhi ya mfanyakazi imeandikwa kwa makundi ya IRS, na kuna mpango wa kulinganisha gharama kwa kila mteja mpya." },
      { name: "Ukaguzi wa ubora", objective: "O6", notYet: "Ukaguzi chini ya mitatu, au hakuna tarehe ya mapitio.", meets: "Ukaguzi wa ubora mitatu wa kila wiki na mapitio kila baada ya wiki mbili.", exceeds: "Pia una ukaguzi wa zana zipi za AI zina taarifa za wateja." }
    ]
  },
  evaluation: {
    results: [
      "Wamiliki wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wamiliki wanaokamilisha suluhisho la kizuizi na jaribio moja la kukua ndani ya siku 90 (utafiti wa kufuatilia)",
      "Mabadiliko ya mapato na faida kwa kila mauzo yanayoripotiwa na wamiliki baada ya siku 90",
      "Wamiliki wanaoongeza msaada (mtu au zana ya AI) wenye mfumo ulioandikwa wa kufuata"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye lahajedwali na msaidizi wa AI wa bure",
      "Takwimu za mauzo na gharama za miezi sita bila majina ya wateja",
      "Kiolezo cha mpango wa ukurasa mmoja wa siku 90",
      "Kama dakika 75 kwa masomo na majaribio, pamoja na muda wa kufanya kazi kwenye namba za mmiliki mwenyewe"
    ],
    facilitatorNotes: [
      "Waombe wamiliki walete namba za miezi sita kabla ya kipindi cha kwanza.",
      "Hakikisha majina ya wateja yameondolewa kabla taarifa yoyote haijaingizwa kwenye AI.",
      "Elekeza maswali ya hadhi ya mfanyakazi, kodi na ajira kwenye kurasa za IRS na kwa mhasibu au wakili.",
      "Wamiliki waonyeshe mpango wao wa siku 90 katika vikundi vidogo ili wapate maoni.",
      "Pima mpango kwa rubriki, mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
