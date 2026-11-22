"use strict";

// Koach Learn course, Hausa (ha) translation of athletes/athletes-influencer-marketing.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "athletes-influencer-marketing-ha",
  lang: "ha",
  translationOf: "athletes-influencer-marketing",
  category: "Athletes",
  name: "Tallata Kaya ta Kafofin Sada Zumunta ga 'Yan Wasa",
  skills: "Nemo kamfanonin da suka dace da ku, Gina takardar bayani (media kit) mai shafi ɗaya, Rubuta saƙon neman haɗin gwiwa da AI, Gane alamun haɗari a kwangila, Bayyana posts na tallafi da bin dokokin NIL",
  outcome: "gina takardar bayani (media kit) mai shafi ɗaya, aika saƙon neman haɗin gwiwa ga kamfani ɗaya da ya dace da ku ta amfani da daftarin AI, duba yarjejeniya don alamun haɗari tare da babba amintacce, da sanya post na tallafi tare da bayyanawa a sarari irin ta FTC, yayin da kuke bin dokokin NIL na makarantarku da jiharku.",
  about: [
    "Wannan kwas ɗin na 'yan wasa ne da ke son yin aiki da kamfanoni a kafofin sada zumunta ta yarjejeniyar NIL (suna, hoto da kamanni), da kuma kociyoyi da iyayen da ke yi musu jagora.",
    "Tallata kaya ta masu tasiri (influencer marketing) na nufin kamfani ya biya ku, da kuɗi ko kaya, don ku nuna kayansa ga masu bin ku. Za ku koyi yadda ake nemo kamfanonin da suka dace, nuna darajarku da takardar bayani (media kit), neman haɗin gwiwa cikin ladabi, gane mugayen yarjejeniyoyi, da kasancewa masu gaskiya cikin dokoki.",
    "Dokokin NIL sun bambanta tsakanin makarantar sakandare, matakan jami'a da jihohi, kuma suna canjawa. Wannan kwas yana koyar da ƙwarewa kuma yana nuna muku shafukan hukuma; koyaushe ku tabbatar da dokokin yanzu da ofishin ƙa'idoji (compliance office) na makarantarku ko ƙungiyar wasannin sakandare ta jiharku kafin ku sa hannu a komai. Wannan ba shawarar shari'a ko ta haraji ba ce."
  ],
  finalTask: "Ku ƙirƙiri takardar bayani (media kit) mai shafi ɗaya, ku zaɓi kamfani ɗaya da ya dace da ra'ayoyinku da masu bin ku, ku rubuta saƙon neman haɗin gwiwa da AI sannan ku gyara shi da salon maganarku, sannan ku rubuta jerin alamun haɗari da dokokin da za ku duba kafin sa hannu (har da wanda za ku tambaya a makarantarku ko jiharku). Idan kun sami yarjejeniya, ku sanya ta a post tare da bayyanawa a sarari a cikin post ɗin kansa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "'Yan wasa na makarantar sakandare da na jami'a da ke son yin aiki da kamfanoni a kafofin sada zumunta ta yarjejeniyar NIL (suna, hoto da kamanni), da kociyoyi da iyayen da ke yi musu jagora.",
    startingPoint: "Suna da asusun kafofin sada zumunta da wasu masu bin su, kuma sun ji labarin yarjejeniyar NIL. Kaɗan ne suka san dokokin NCAA ko na jiha, suke da takardar bayani (media kit), suka taɓa neman haɗin gwiwa da kamfani, ko za su iya gane alamun haɗari a kwangila.",
    gap: "'Yan wasa za su iya rasa cancantar yin wasa, kuɗi ko ikon amfani da hotonsu idan suka sa hannu a mugayen yarjejeniyoyi, suka karya dokokin makaranta ko jiha, ko suka ƙi bayyana tallafi. Sanin dokoki, nuna lambobi na gaskiya, da duba yarjejeniya tare da babba amintacce suna ba su damar samun kuɗi lafiya da gaskiya.",
    constraints: [
      "Kalmomi masu sauƙi a kusan matakin karatu na aji 8",
      "Waya mai kafofin sada zumunta, mataimakin AI kyauta da Canva",
      "Kusan minti 60 gaba ɗaya",
      "Dokokin NIL na NCAA, NAIA, ƙungiyoyin jiha da makarantu sun bambanta kuma suna canjawa; ku tambayi ofishin ƙa'idoji ko daraktan wasanni",
      "'Yan wasa 'yan ƙasa da shekara 18 su sa iyaye ko masu kula da su; wannan ilimi ne, ba shawarar shari'a ko haraji ba"
    ],
    prerequisites: "Babu. Kwas ɗin \"Gina Suna (Brand) a Kafofin Sada Zumunta ga 'Yan Wasa\" mataki ne na farko mai amfani."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka yi la'akari da matakin wasanku", action: "bayyana mene ne yarjejeniyar NIL da waɗanne dokoki suka shafe ku, har da abin da ba a yarda da shi ba", standard: "kuna ambaton wanda za ku tambaya a makarantarku ko jiharku, da cewa kuɗin NIL yawanci ana biyan haraji a kansa" },
    { id: "O2", condition: "Idan aka yi la'akari da kaya da kasuwancin yankinku da kuke amfani da su", action: "rubuta jerin kamfanoni biyar da suka dace da ra'ayoyinku da masu bin ku", standard: "tare da goge kowane rukuni da makarantarku ko jiharku ta hana" },
    { id: "O3", condition: "Ta amfani da ƙididdigar manhajarku (insights) da samfurin Canva", action: "ƙirƙirar takardar bayani (media kit) mai shafi ɗaya mai taƙaitaccen bayaninku, tasharku, lambobi na gaskiya, masu bin ku, abin da kuke bayarwa da hanyar tuntuɓa mai aminci", standard: "kowace lamba ta gaskiya ce, ta yanzu, kuma tana da kwanan wata" },
    { id: "O4", condition: "Ta amfani da daftarin AI", action: "rubuta saƙon neman haɗin gwiwa zuwa adireshin tuntuɓa na hukuma na kamfani ɗaya", standard: "ƙasa da kalmomi 150, da salon maganarku, da dalili na gaskiya mai sarari, ra'ayi ɗaya da takardar bayaninku, kuma da iyaye a ciki idan ba ku kai shekara 18 ba" },
    { id: "O5", condition: "Idan aka ba ku rubutacciyar yarjejeniya", action: "duba ta don alamun haɗari tare da babba amintacce kafin sa hannu", standard: "kuna duba aiki, biya, tsawon lokaci da yadda ake kawo ƙarshenta, kuma kuna ƙin sa hannu idan ana matsa muku" },
    { id: "O6", condition: "Ga duk post da kamfani ya ba ku wani abu a kansa", action: "rubuta post na tallafi tare da bayyanawa a sarari kusa da farko", standard: "an faɗa kuma an nuna a bidiyo, ba a ɓoye a cikin hashtags ko bayanin shafinku (bio) ba, kuma babu iƙirarin da ba za ku iya tabbatarwa ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Shirya yin aiki da kamfanoni",
      lessons: [
        {
          objectives: ["O1"],
          title: "Yadda yarjejeniyoyin tallata kaya na 'yan wasa ke aiki",
          minutes: 5,
          goal: "Bayyana mene ne yarjejeniyar NIL da abin da aka yarda da shi ga 'yan wasan jami'a.",
          text: [
            "Yarjejeniyar NIL tana biyan ku, da kuɗi, kaya ko hidima, don barin kasuwanci ya yi amfani da sunanku, hotonku ko kamanninku: posts a kafofin sada zumunta, bayyana a taruka, sansanonin koyarwa (camps), sa hannu (autograph) ko tallace-tallace.",
            "Ga 'yan wasan jami'a na NCAA, shafin NIL na NCAA ya ce yarjejeniya ya kamata ta biya ku don amfani da NIL ɗinku, ta kasance da manufar kasuwanci ta gaske, kuma ta biya cikin adadi mai ma'ana. Biya-don-wasa (pay-for-play), wato biyan ku don shiga ko yin wasa a wata makaranta ko biyan da ke da alaƙa da yadda kuka yi wasa, ba a yarda da shi ba. A lokacin rubuta wannan, 'yan wasan Division I dole su ba da rahoton yarjejeniyoyin wasu kamfanoni na $600 ko fiye ta NIL Go, wanda College Sports Commission ke gudanarwa; ku tambayi ofishin ƙa'idoji don bayanan yanzu.",
            "Dokokin NIL na makarantar sakandare ƙungiyar wasannin sakandare ta kowace jiha da dokar jiha ne suke kafa su; wasu jihohi sun yarda da shi da iyaka. Ku duba naku kafin kowace yarjejeniya. Kuɗin NIL yawanci ana biyan haraji a kansa, don haka ku ajiye bayanan kuɗi ku yi magana da ƙwararren haraji."
          ],
          steps: ["Ku gano matakinku: sakandare, matakin NCAA, NAIA, kwalejin shekara biyu (junior college) ko ƙwararru.", "Ku karanta manufar NIL ta makarantarku ko dokokin ƙungiyar jiharku.", "Ku yi magana da ofishin ƙa'idoji ko daraktan wasanni.", "Ku ajiye bayanin kowace yarjejeniya da kowane biya."],
          words: [["NIL", "suna, hoto da kamanni (name, image and likeness): samun kuɗi daga sunanku, hotonku ko sunan da kuka gina."], ["Biya-don-wasa (pay-for-play)", "biya don shiga ko yin gasa a wata makaranta, ko biyan da ke da alaƙa da yadda kuka yi wasa; dokokin NCAA ba su yarda da shi ba."], ["Ofishin ƙa'idoji (compliance office)", "ofishin makaranta da ke bayani da kuma duba dokokin wasanni."]],
          slides: [
            { title: "Yarjejeniyar NIL", bullets: ["Ana biya da kuɗi, kaya ko hidima", "Posts, bayyana a taruka, sansanonin koyarwa, sa hannu"] },
            { title: "Muhimman dokokin NCAA (ku duba na yanzu)", bullets: ["Manufar kasuwanci ta gaske, biya mai ma'ana", "Babu biya-don-wasa", "DI: ku ba da rahoton yarjejeniya ta $600+ ta NIL Go"] },
            { title: "Sakandare da haraji", bullets: ["Ƙungiyar jiharku ce ke kafa dokoki", "Kuɗin NIL yawanci ana biyan haraji a kansa", "Ku ajiye bayanai; ku tambayi ƙwararren haraji"] }
          ],
          sources: [
            { name: "NCAA: Suna, Hoto da Kamanni (NIL)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" },
            { name: "College Sports Commission: Yarjejeniyoyin NIL na 'yan wasa", url: "https://www.collegesportscommission.org/nil/" },
            { name: "IRS: Cibiyar haraji ga masu aiki da kansu", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }
          ],
          tryIt: "Ku nemo shafin NIL na makarantarku ko na ƙungiyar jiharku, ku rubuta dokoki uku da suka shafe ku, da wanda za ku tambaya idan kuna da tambayoyi.",
          youCanNow: "bayyana yadda yarjejeniyoyin NIL na 'yan wasa ke aiki, da nemo dokokin da suka shafe ku.",
          quickCheck: [
            { objective: "O1", q: "Da me yarjejeniyar NIL za ta iya biyan ku?", options: ["Tsabar kuɗi kawai", "Makin makaranta kawai", "Tikitin wasa kawai", "Kuɗi, kaya ko hidima"], answer: 3, why: "Yarjejeniyoyin NIL na iya biya da kuɗi, kaya ko hidima don amfani da sunanku, hotonku ko kamanninku." },
            { objective: "O1", q: "Kun sami biyan NIL na farko. Me za ku yi?", options: ["Ku ajiye bayaninsa ku yi magana da ƙwararren haraji", "Ku kashe shi ku manta", "Ku ɓoye shi daga makarantarku", "Ku mayar da shi"], answer: 0, why: "Kuɗin NIL yawanci ana biyan haraji a kansa, don haka ku ajiye bayanai ku nemi shawarar haraji." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Nemo kamfanonin da suka dace da ku",
          minutes: 5,
          goal: "Yin jerin kamfanoni biyar da suka dace da ra'ayoyinku da masu bin ku.",
          text: [
            "Mafi kyawun yarjejeniyoyi suna tare da kamfanonin da kuke amfani da su kuma kuka yarda da su, waɗanda masu bin ku suke damuwa da su. Wurin motsa jiki (gym) na yankinku, abin sha na wasanni da kuke sha da gaske, manhajar atisaye da kuke amfani da ita, ko gidan abinci na iyali kusa da makarantarku.",
            "Ku fara daga yankinku. Kasuwancin yanki sau da yawa sun fi buɗewa ga matasa 'yan wasa, kuma masu bin ku na yanki suna da muhimmanci a gare su. Manyan kamfanoni sau da yawa suna aiki ta hukumomi (agencies) ko kasuwannin NIL da makarantarku za ta iya amfani da su; ku tambayi ofishin ƙa'idoji waɗanne aka amince da su.",
            "Ku guji kamfanonin da suka saɓa da ra'ayoyinku, dokokin makarantarku ko shekarunku. Makarantu da jihohi da yawa suna hana rukunoni kamar barasa, taba, vape, caca da kayan manya."
          ],
          steps: ["Ku rubuta kaya da kasuwancin yanki da kuke amfani da su da gaske.", "Ku yi alama a kan waɗanda masu bin ku suke damuwa da su.", "Ku goge duk rukunin da makarantarku ko jiharku ta hana.", "Ku ajiye guda biyar mafi kyau."],
          words: [["Dacewar kamfani (brand fit)", "yadda kamfani ya dace da ra'ayoyinku, sunanku da masu bin ku."], ["Kasuwar NIL (NIL marketplace)", "shafin intanet ko manhaja da ke haɗa 'yan wasa da kamfanoni don yarjejeniya."]],
          slides: [
            { title: "Mafi dacewa", bullets: ["Kamfanonin da kuke amfani da su kuma kuka yarda da su", "Masu bin ku suna damuwa da su"] },
            { title: "Ku fara daga yankinku", bullets: ["Wuraren motsa jiki, gidajen abinci, shaguna kusa da ku", "Ku tambayi ofishin ƙa'idoji game da kasuwannin da aka amince"] },
            { title: "Ku guji", bullets: ["Kamfanonin da suka saɓa da ra'ayoyinku", "Rukunonin da aka hana: barasa, vape, caca"] }
          ],
          tryIt: "Ku rubuta jerin kaya ko kasuwanci goma da kuke amfani da su. Ku tambayi mataimakin AI waɗanne suka fi dacewa da masu bin ku irin naku, sannan ku zaɓi guda biyar mafi kyau da kanku.",
          youCanNow: "zaɓar kamfanonin da suka dace da ra'ayoyinku, masu bin ku da dokoki.",
          quickCheck: [
            { objective: "O2", q: "Me yasa za ku fara da kasuwancin yanki?", options: ["Ba sa taɓa cewa a'a", "Sau da yawa suna buɗe ga matasa 'yan wasa kuma suna damuwa da masu bin ku na yanki", "Su ne ke biya mafi yawa", "Ba sa buƙatar kwangila"], answer: 1, why: "Kasuwancin yanki sau da yawa sun fi buɗewa ga matasa 'yan wasa, kuma suna daraja masu bi na yanki." },
            { objective: "O2", q: "Shagon vape ya ba ku tayin yarjejeniya. Me za ku yi?", options: ["Ku karɓa idan biyan yana da kyau", "Ku nemi ƙarin kuɗi", "Ku goge shi; makarantu da jihohi da yawa sun hana wannan rukuni", "Ku yi post game da shi ba tare da yarjejeniya ba"], answer: 2, why: "Ku guji rukunonin da makarantarku ko jiharku ta hana, kamar vape." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Gina takardar bayaninku (media kit)",
          minutes: 6,
          goal: "Yin takardar bayani mai shafi ɗaya da ke nuna wa kamfanoni darajarku.",
          text: [
            "Takardar bayani (media kit) taƙaitaccen bayani ne mai shafi ɗaya da kamfanoni ke amfani da shi don yanke shawara ko kun dace. Tana nuna ko wane ne ku, su wane ne masu bin ku, da abin da za ku iya yi musu.",
            "Ku saka: hoto mai kyau da gajeren bayani game da ku; wasanku, ƙungiyarku da nasarorinku; tasharku tare da yawan masu bi da matsakaicin hulɗa (likes, comments, shares ko kallo a kowane post) daga ƙididdigar manhajarku (insights); su wane ne masu bin ku (wuri, rukunin shekaru idan manhajar ta nuna); haɗin gwiwar da kuka yi a baya; abin da kuke bayarwa (posts, bidiyo, bayyana a taruka, sansanonin koyarwa); da bayanan tuntuɓa, ta amfani da imel na wasanni ko na iyaye ko wakili (agent) ga 'yan ƙasa da shekara 18.",
            "Ku yi amfani da samfurin Canva don tsara ta, da mataimakin AI don gyara kalmomin. Kowace lamba dole ta zama ta gaskiya kuma ta yanzu. Kada ku sayi masu bi; kamfanoni suna duba hulɗa."
          ],
          steps: ["Ku tattara lambobinku na gaskiya daga ƙididdigar manhajarku.", "Ku rubuta bayani game da ku mai jimloli biyu.", "Ku rubuta jerin abin da kuke bayarwa.", "Ku tsara ta a samfurin media kit na Canva.", "Ku duba kowace lamba; ku saka kwanan wata."],
          words: [["Takardar bayani (media kit)", "taƙaitaccen bayani mai shafi ɗaya game da ko wane ne ku, masu bin ku da abin da kuke bayarwa ga kamfanoni."], ["Yawan hulɗa (engagement rate)", "yadda mutane ke hulɗa da posts ɗinku idan aka kwatanta da yawan masu bin ku ko masu ganin su."]],
          slides: [
            { title: "Abin da takardar bayani ke nunawa", bullets: ["Ko wane ne ku", "Su wane ne masu bin ku", "Abin da za ku iya yi wa kamfani"] },
            { title: "Ku saka", bullets: ["Hoto, bayani game da ku, wasa da nasarori", "Tashoshi, masu bi, matsakaicin hulɗa", "Abin da kuke bayarwa da tuntuɓa mai aminci"] },
            { title: "Gaskiya", bullets: ["Lambobi na gaskiya, na yanzu", "Kada ku taɓa sayen masu bi", "Kamfanoni suna duba hulɗa"] }
          ],
          tryIt: "Ku gina takardar bayaninku mai shafi ɗaya a Canva da lambobinku na gaskiya. Ku tambayi mataimakin AI ya gajarta bayaninku kuma ya sa shi ya fi sarari.",
          youCanNow: "gina takardar bayani (media kit) ta gaskiya mai shafi ɗaya.",
          quickCheck: [
            { objective: "O3", q: "Me hulɗa (engagement) ke nunawa a takardar bayaninku?", options: ["Yadda mutane ke hulɗa da posts ɗinku", "Kamfanoni nawa kuka sani", "Matsakaicin makinku na makaranta", "Lambar rigarku"], answer: 0, why: "Hulɗa ita ce likes, comments, shares ko kallo a kowane post." },
            { objective: "O3", q: "Yawan masu bin ku ya canja tun da kuka yi takardar bayaninku watan jiya. Me za ku yi?", options: ["Ku bar tsohuwar lambar", "Ku ƙara mata sosai", "Ku sayi masu bi don ta yi daidai", "Ku sabunta ta da lambar gaskiya ta yanzu da kwanan wata"], answer: 3, why: "Kowace lamba dole ta zama ta gaskiya kuma ta yanzu." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Shirya yin aiki da kamfanoni",
        questions: [
          { objective: "O1", q: "Me NIL ke nufi?", options: ["National Influencer League", "New Income Law", "Suna, hoto da kamanni (name, image and likeness)", "No Ink Limits"], answer: 2, why: "NIL shi ne samun kuɗi daga sunanku, hotonku da kamanninku." },
          { objective: "O1", q: "A ƙarƙashin dokokin NCAA, wanne BA a yarda da shi ba?", options: ["Biyan ku don shiga wata makaranta ta musamman", "Posts na biya ga shagon yanki", "Gudanar da sansanin koyarwa na biya", "Sa hannu (autograph) don biya"], answer: 0, why: "Wannan biya-don-wasa ne, wanda dokokin NCAA ba su yarda da shi ba." },
          { objective: "O1", q: "Ɗan wasan sakandare yana son yarjejeniyar NIL. Dokokin wa ne suke da muhimmanci?", options: ["Na kamfanin kawai", "Babu na kowa", "Na ƙungiyar ƙwararru", "Na ƙungiyar wasannin sakandare ta jiharsa da makarantarsa"], answer: 3, why: "Dokokin NIL na sakandare sun bambanta daga jiha zuwa jiha." },
          { objective: "O2", q: "Wane kamfani ne zai fi dacewa a matsayin na farko?", options: ["Kamfanin vape", "Wurin motsa jiki na yanki da kuke atisaye a ciki kuma kuka yarda da shi", "Wani kamfani da ba ku taɓa amfani da shi ba", "Manhajar caca"], answer: 1, why: "Amfani na gaske da masu bi na yanki su ne mafi kyawun dacewa." },
          { objective: "O3", q: "Yaya kowace lamba a takardar bayaninku dole ta kasance?", options: ["An ƙara mata sosai", "Ta gaskiya kuma ta yanzu", "Hasashe", "Daga asusun aboki"], answer: 1, why: "Kamfanoni suna dubawa, kuma amana ita ce komai." }
        ]
      }
    },
    {
      name: "Babi na 2: Neman haɗin gwiwa, yarjejeniyoyi da bayyanawa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Neman haɗin gwiwa da kamfani",
          minutes: 5,
          goal: "Rubuta gajeren saƙo mai ladabi na neman haɗin gwiwa zuwa kamfani ɗaya.",
          text: [
            "Saƙon neman haɗin gwiwa (pitch) gajeren saƙo ne da ke neman a yi aiki tare. Ku aika shi daga imel ɗinku na aiki zuwa adireshin tuntuɓa na hukuma na kamfanin, ba saƙonnin DM barkatai ga ma'aikata ba.",
            "Saƙo mai kyau: ko wane ne ku a layi ɗaya; me yasa kuke son wannan kamfani (wani abu na musamman kuma na gaskiya); masu bin ku da lamba ɗaya; ra'ayi ɗaya a sarari (\"bidiyon atisaye uku ta amfani da manhajarku ta murmurewa\"); da takardar bayaninku a haɗe. Ku sa ya kasance ƙasa da kalmomi 150.",
            "Ku tambayi mataimakin AI ya rubuta daftari, sannan ku sake rubuta shi da salon maganarku. Idan ba ku kai shekara 18 ba, ku sa iyaye ko mai kula da ku a ciki. Ku tuna musu sau ɗaya bayan mako ɗaya ko biyu. Kamfanoni da yawa za su ce a'a ko ba za su amsa ba; wannan abu ne na yau da kullum."
          ],
          steps: ["Ku nemo adireshin tuntuɓa na hukuma na kamfanin.", "Ku tambayi AI gajeren saƙo ƙasa da kalmomi 150.", "Ku ƙara dalili na musamman kuma na gaskiya da yasa kuke son kamfanin.", "Ku haɗa takardar bayaninku.", "Ku tuna musu sau ɗaya bayan mako ɗaya zuwa biyu."],
          words: [["Saƙon neman haɗin gwiwa (pitch)", "gajeren saƙo da ke ba da shawarar a yi aiki tare."], ["Tunatarwa (follow-up)", "tunatarwa ɗaya mai ladabi idan ba ku ji daga gare su ba."]],
          slides: [
            { title: "Inda za ku aika", bullets: ["Imel ɗinku na aiki", "Adireshin tuntuɓa na hukuma na kamfanin"] },
            { title: "Saƙo mai kyau", bullets: ["Ko wane ne ku", "Me yasa kuke son kamfanin (gaskiya)", "Masu bin ku da lamba ɗaya", "Ra'ayi ɗaya a sarari + takardar bayani"] },
            { title: "Bayan haka", bullets: ["Ƙasa da shekara 18: iyaye a ciki", "Ku tuna musu sau ɗaya", "Rashin amsa abu ne na yau da kullum"] }
          ],
          tryIt: "Ku zaɓi ɗaya daga cikin kamfanoninku biyar. Ku yi amfani da AI don rubuta daftarin saƙo, ku sake rubuta shi da salon maganarku, sannan ku sa koci ko iyaye su karanta shi kafin ku aika.",
          youCanNow: "rubuta da aika gajeren saƙo mai ladabi na neman haɗin gwiwa da kamfani.",
          quickCheck: [
            { objective: "O4", q: "Ina ya kamata ku aika saƙon neman haɗin gwiwa?", options: ["Saƙonnin DM barkatai ga ma'aikata", "Adireshin tuntuɓa na hukuma na kamfanin", "Kamfanin da ke gasa da shi", "Sharhi a fili (comment)"], answer: 1, why: "Ku aika shi daga imel ɗinku na aiki zuwa adireshin tuntuɓa na hukuma na kamfanin." },
            { objective: "O4", q: "Kamfani bai amsa saƙonku ba bayan mako biyu. Me za ku yi?", options: ["Ku aika musu saƙo kowace rana", "Ku yi post game da su cikin fushi", "Ku tuna musu sau ɗaya, sannan ku ci gaba idan babu amsa", "Ku aika shi ga kowane ma'aikaci"], answer: 2, why: "Ku tuna musu sau ɗaya; kamfanoni da yawa za su ce a'a ko ba za su amsa ba, kuma wannan abu ne na yau da kullum." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Karanta yarjejeniya: alamun haɗari",
          minutes: 6,
          goal: "Gane alamun haɗari a yarjejeniya kafin ku sa hannu.",
          text: [
            "Kafin ku yarda da komai, ku nemi a rubuta shi ku karanta shi tare da babba amintacce. Ga manyan yarjejeniyoyi, lauya, wakili (agent) ko taimakon NIL na makarantarku za su iya taimakawa. Kada ku sa hannu idan ana matsa muku.",
            "Alamun haɗari: suna neman ku fara biyan kuɗi; suna neman kalmomin sirrinku (password) ko lambobin shiga (login code); yarjejeniyar tana da tsawo sosai ko ta ce sun mallaki sunanku ko hotonku har abada; ba za ku iya yin post ga wasu kamfanoni kwata-kwata ba (keɓancewa, exclusivity) ba tare da biya mai adalci ba; biyan ba a sarari yake ba ko \"a san ku\" (exposure) kawai ne; suna son ku yi post na abubuwan da ba gaskiya ba; ko duk abin da dokokin makarantarku ko jiharku ba su yarda da shi ba, kamar amfani da tambarin makaranta ba tare da izini ba.",
            "Ku duba abin da dole ku yi (posts nawa, yaushe, me), yadda da lokacin da za a biya ku, tsawon lokacin da za ta ɗauka, da yadda ake kawo ƙarshenta. 'Yan wasan jami'a: ku duba ko dole a ba da rahotonta, ku yi haka a kan lokaci."
          ],
          steps: ["Ku nemi a rubuta yarjejeniyar.", "Ku karanta ta tare da babba amintacce ko mai ba da shawara.", "Ku duba aiki, biya, tsawon lokaci da yadda ake kawo ƙarshenta.", "Ku nemi alamun haɗari.", "Ku duba dokokin makarantarku da jiharku da duk wani rahoto.", "Kada ku taɓa sa hannu idan ana matsa muku."],
          words: [["Kwangila (contract)", "rubutacciyar yarjejeniya da dole ɓangarorin biyu su bi."], ["Keɓancewa (exclusivity)", "doka da ke cewa ba za ku iya aiki da kamfanonin da ke gasa da su ba."], ["Haƙƙin amfani (usage rights)", "yadda kuma har yaushe kamfani zai iya amfani da hotunanku, bidiyonku da sunanku."]],
          slides: [
            { title: "Kafin ku sa hannu", bullets: ["Ku nemi a rubuta ta", "Ku karanta ta tare da babba amintacce", "Kada ku taɓa sa hannu idan ana matsa muku"] },
            { title: "Alamun haɗari", bullets: ["Ku ne za ku fara biya, ko suna neman kalmomin sirri", "Sun mallaki hotonku har abada", "Biya ba a sarari ba ko \"a san ku\" kawai", "Ana neman ku faɗi abin da ba gaskiya ba"] },
            { title: "Ku duba", bullets: ["Aiki, biya, tsawon lokaci, yadda ake kawo ƙarshe", "Dokokin makaranta da jiha", "Ƙarshen lokacin ba da rahoto"] }
          ],
          sources: [
            { name: "NCAA: Suna, Hoto da Kamanni (NIL)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" },
            { name: "College Sports Commission: Yarjejeniyoyin NIL na 'yan wasa", url: "https://www.collegesportscommission.org/nil/" }
          ],
          tryIt: "Ku tambayi mataimakin AI ya rubuta gajeren samfurin yarjejeniyar NIL mai alamun haɗari uku a ɓoye (atisaye ne). Ku nemo su, sannan ku rubuta jerin alamun haɗarinku na kanku.",
          youCanNow: "gane alamun haɗari a yarjejeniya, da sanin wanda za ku karanta ta tare da shi kafin sa hannu.",
          quickCheck: [
            { objective: "O5", q: "Wanne ne alamar haɗari a yarjejeniya?", options: ["Suna neman kalmomin sirrinku ko lambobin shiga", "Biya da ranaku a sarari", "Hanyar kawo ƙarshen yarjejeniyar", "Ƙayyadadden adadin posts"], answer: 0, why: "Kada ku taɓa ba kamfani kalmomin sirrinku ko lambobin shiga." },
            { objective: "O5", q: "Kamfani ya ce dole ku sa hannu yau ko ku rasa yarjejeniyar. Me za ku yi?", options: ["Ku sa hannu yanzu", "Ku sa hannu ku karanta daga baya", "Ku nemi aboki ya sa hannu a madadinku", "Kada ku sa hannu idan ana matsa muku; ku fara karanta ta tare da babba amintacce"], answer: 3, why: "Kada ku taɓa sa hannu idan ana matsa muku; ku nemi a rubuta ta ku karanta ta tare da babba." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Bayyana posts na tallafi ta hanyar da ta dace",
          minutes: 5,
          goal: "Rubuta post na tallafi tare da bayyanawa a sarari kuma daidai.",
          text: [
            "FTC, hukumar Amurka da ke tabbatar da bin dokar talla, ta ce dole ku bayyana duk wata muhimmiyar alaƙa da kamfani, wadda ta haɗa da biya, kaya kyauta ko na rangwame, ko alaƙar iyali ko aiki, a duk lokacin da kuka ambaci kamfanin.",
            "Ku sa ta a sarari kuma mai sauƙin gani: ku saka ta tare da post ɗin, kusa da farko, da kalmomi masu sauƙi kamar \"Ad\", \"Sponsored\" ko \"Na gode [kamfani] don takalman kyauta\". A bidiyo, ku faɗe ta kuma ku nuna ta a allo; a watsa kai tsaye (live stream), ku maimaita ta. A hotuna da stories, ku saka ta a kan hoton. Kada ku ɓoye ta cikin tarin hashtags, a bayanin shafinku (bio) kawai, ko bayan \"more\". Kalmomi marasa sarari kamar \"sp\", \"collab\" ko \"ambassador\" su kaɗai ba su da sarari.",
            "Ku faɗi abin da ke gaskiya kawai: kada ku tallata kayan da ba ku gwada ba, kuma kada ku taɓa yin iƙirarin lafiya da kamfanin ba zai iya tabbatarwa ba, kamar \"wannan abin sha yana warkar da ciwon tsoka (cramps)\"."
          ],
          steps: ["Ku yanke shawara: akwai wani biya, kaya kyauta ko alaƙa? To ku bayyana.", "Ku saka \"Ad\" ko godiya a sarari kusa da farkon rubutun post (caption).", "A bidiyo: ku faɗe ta kuma ku nuna ta.", "Ku kuma yi amfani da alamar haɗin gwiwar biya (paid partnership) ta manhajar, idan tana da ita.", "Ku duba cewa kowane iƙirari gaskiya ne."],
          words: [["Muhimmiyar alaƙa (material connection)", "alaƙa da kamfani, kamar biya, kaya kyauta ko iyali, wadda mutane ba za su yi tsammani ba."], ["Post na tallafi (sponsored post)", "post da kamfani ya biya ko ya ba ku wani abu a kansa."]],
          slides: [
            { title: "Lokacin bayyanawa", bullets: ["Biya, kaya kyauta ko na rangwame", "Alaƙar iyali ko aiki da kamfanin"] },
            { title: "Yadda ake", bullets: ["\"Ad\" ko \"Na gode [kamfani] don...\" kusa da farko", "Bidiyo: ku faɗe ta kuma ku nuna ta", "Ba a ɓoye a hashtags ko bio ba"] },
            { title: "Ku kasance masu gaskiya", bullets: ["Kayan da kuka gwada kawai", "Babu iƙirarin lafiya da ba za su iya tabbatarwa ba"] }
          ],
          sources: [
            { name: "FTC: Muhimman abubuwan bayyanawa ga masu tasiri a kafofin sada zumunta", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" },
            { name: "FTC: Jagororin goyon baya (Endorsement Guides), tambayoyin da mutane ke yi", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides" }
          ],
          tryIt: "Aikin ƙarshe: ku kammala takardar bayaninku, saƙon neman haɗin gwiwa da jerin alamun haɗari (tare da sunayen waɗanda za ku tambaya a makarantarku ko jiharku). Sannan ku rubuta rubutun post na tallafi na atisaye tare da bayyanawa daidai.",
          youCanNow: "sanya post na tallafi tare da bayyanawa a sarari kuma daidai, da kasancewa cikin dokokin NIL.",
          quickCheck: [
            { objective: "O6", q: "Wanne ne muhimmiyar alaƙa da dole ku bayyana?", options: ["Kayan da kuka saya da kanku", "Kaya kyauta ko na rangwame daga kamfanin", "Kamfanin da ba ku taɓa jin labarinsa ba", "Ƙungiyar da kuka fi so"], answer: 1, why: "Biya, kaya kyauta ko na rangwame, ko alaƙar iyali ko aiki dole a bayyana su." },
            { objective: "O6", q: "Kuna yin watsa kai tsaye (live stream) na tallafi. Yaya za ku bayyana?", options: ["Sau ɗaya a bayanin shafinku (bio)", "A hashtags kawai", "Ku ce \"collab\" sau ɗaya", "Ku bayyana a sarari kuma ku maimaita yayin watsawar"], answer: 3, why: "A watsa kai tsaye, ku maimaita bayyanawar." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Neman haɗin gwiwa, yarjejeniyoyi da bayyanawa",
        questions: [
          { objective: "O4", q: "Me ya kamata saƙon neman haɗin gwiwa ya ƙunsa?", options: ["Rubutu mai shafi 3", "Kalmar sirrinku", "Buƙatar a fara biyan ku kuɗi", "Ko wane ne ku, me yasa kuke son kamfanin, masu bin ku, ra'ayi ɗaya da takardar bayaninku"], answer: 3, why: "Saƙo gajere, na musamman kuma mai ladabi yana samun amsa." },
          { objective: "O5", q: "Wani \"kamfani\" yana neman ku biya kuɗi don shiga shirinsa na 'yan wasa. Wannan:", options: ["Alamar haɗari ce", "Abu ne na yau da kullum", "NCAA ce ta buƙace shi", "Yarjejeniya ce mai kyau sosai"], answer: 0, why: "Kamfanoni na gaske suna biyan ku, ba ku ne ke biyan su ba." },
          { objective: "O5", q: "Kwangila ta ce kamfanin ya mallaki hotonku har abada. Ya kamata ku:", options: ["Ku sa hannu da sauri", "Ku yi watsi da shi", "Ku ɗauke shi alamar haɗari ku nemi shawara", "Ku nemi ƙarin har abada"], answer: 2, why: "Haƙƙin amfani har abada babbar alamar haɗari ce." },
          { objective: "O6", q: "Wace bayyanawa ce a sarari?", options: ["\"#sp\" a ƙarshe", "\"collab\"", "A bayanin shafinku (bio) kawai", "\"Ad\" kusa da farkon rubutun post"], answer: 3, why: "FTC ta ce a sarari kuma mai sauƙin gani." },
          { objective: "O6", q: "A bidiyon tallafi, bayyanawar ya kamata ta kasance:", options: ["A bayanin bidiyon (description) kawai", "An faɗe ta kuma an nuna ta a cikin bidiyon", "A sharhi (comment)", "Ba a saka ta ba"], answer: 1, why: "Bayyanawar bidiyo tana cikin bidiyon kansa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tallata Kaya ta Kafofin Sada Zumunta ga 'Yan Wasa",
    questions: [
      { objective: "O1", q: "Tallata kaya ta masu tasiri (influencer marketing) na nufin:", options: ["Sayen masu bi", "Horar da ƙungiya", "Kamfani ya biya ku don ku nuna kayansa ga masu bin ku", "Sayar da tikiti"], answer: 2, why: "Kamfanoni suna biyan isarku ga mutane da amincewar da suke yi muku." },
      { objective: "O1", q: "Yarjejeniyoyin NIL na NCAA ya kamata su kasance da:", options: ["Manufar kasuwanci ta gaske da biya mai ma'ana", "Babu aikin da ake buƙata", "Biya da ke da alaƙa da maki da aka ci", "Biya don zaɓar makaranta"], answer: 0, why: "Haka NCAA ke bayyana yarjejeniyoyin da aka yarda da su." },
      { objective: "O1", q: "Biya da ke da alaƙa da yadda kuka yi wasa:", options: ["Biya-don-wasa ne, ba a yarda da shi a dokokin NCAA ba", "Ana ƙarfafa shi", "Dole ne", "Takardar haraji ce"], answer: 0, why: "Dokokin NCAA sun hana biya-don-wasa." },
      { objective: "O1", q: "Ina 'yan wasan Division I ke ba da rahoton yarjejeniyoyin NIL na wasu kamfanoni (a lokacin rubuta wannan)?", options: ["A bayanin shafinsu (bio)", "A hirar rukuni (group chat)", "NIL Go, wanda College Sports Commission ke gudanarwa", "Ba ko'ina"], answer: 2, why: "Ku tabbatar da bayanan yanzu da ofishin ƙa'idoji." },
      { objective: "O1", q: "Kuɗin NIL yawanci:", options: ["Ba a taɓa biyan haraji a kansa", "Ana biyan haraji a kansa", "Haramun ne", "Ana biyan makarantar"], answer: 1, why: "NCAA ta ce kuɗin NIL yawanci ana biyan haraji a kansa." },
      { objective: "O1", q: "Wa ke kafa dokokin NIL na makarantar sakandare?", options: ["NFL", "Kamfanin", "Babu kowa", "Ƙungiyar sakandare ta kowace jiha da dokar jiha"], answer: 3, why: "Sun bambanta daga jiha zuwa jiha." },
      { objective: "O2", q: "Kamfanoni na farko mafi kyau sau da yawa su ne:", options: ["Kamfanonin da ba ku taɓa jin labarinsu ba", "Manhajojin caca", "Kasuwancin yanki da kuke amfani da su kuma kuka yarda da su", "Shagunan vape"], answer: 2, why: "Dacewa ta yanki da amfani na gaske suna kawo yarjejeniyoyi masu ƙarfi." },
      { objective: "O2", q: "Wane rukuni ne makarantu da jihohi da yawa suka hana?", options: ["Gidajen burodi na yanki", "Shagunan littattafai", "Takalman gudu", "Caca da barasa"], answer: 3, why: "Rukunonin da aka hana sun zama ruwan dare a dokokin NIL." },
      { objective: "O3", q: "Takardar bayani (media kit) ita ce:", options: ["Taƙaitaccen bayani mai shafi ɗaya game da ku, masu bin ku da abin da kuke bayarwa", "Akwatin agajin gaggawa", "Jakar kyamara", "Kwangila"], answer: 0, why: "Kamfanoni suna amfani da ita don yanke shawara ko kun dace." },
      { objective: "O3", q: "Yawan hulɗa (engagement rate) yana nuna:", options: ["Tsawonku", "Yadda mutane ke hulɗa idan aka kwatanta da masu bi ko kallo", "Matsakaicin makinku (GPA)", "Lambar rigarku"], answer: 1, why: "Kamfanoni sun fi damuwa da hulɗa fiye da yawan masu bi kawai." },
      { objective: "O3", q: "Sayen masu bi:", options: ["Dabarar talla ce mai wayo", "Dole ne", "Rashin gaskiya ne kuma kamfanoni za su iya gane shi", "Kyauta ne"], answer: 2, why: "Masu bi na bogi suna lalata amana." },
      { objective: "O4", q: "Ina ya kamata ku aika saƙon neman haɗin gwiwa?", options: ["Adireshin tuntuɓa na hukuma na kamfanin", "DM na kashin kai na ma'aikata barkatai", "Kamfanonin da ke gasa da su", "Ba ko'ina"], answer: 0, why: "Adireshin tuntuɓa na hukuma yana da ladabi kuma lafiya." },
      { objective: "O4", q: "Saƙon neman haɗin gwiwa ya kamata ya kasance kusan:", options: ["Shafi biyar", "Emoji ɗaya", "Kiran bidiyo da tsakar dare", "Ƙasa da kalmomi 150"], answer: 3, why: "Ana karanta gajerun saƙonni." },
      { objective: "O4", q: "Idan ba ku kai shekara 18 ba lokacin neman haɗin gwiwa, ya kamata ku:", options: ["Ku ɓoye shi", "Ku sa iyaye ko mai kula da ku a ciki", "Ku yi ƙarya game da shekarunku", "Ku yi amfani da sunan bogi"], answer: 1, why: "Manya suna taimakawa wajen kare yara a yarjejeniyoyi." },
      { objective: "O5", q: "Kafin ku sa hannu a yarjejeniya ya kamata ku:", options: ["Ku sa hannu nan take", "Ku nemi a rubuta ta ku karanta ta tare da babba amintacce", "Ku raba kalmar sirrinku", "Ku biya kuɗi"], answer: 1, why: "Rubutattun sharuɗɗa suna kare ku." },
      { objective: "O5", q: "Keɓancewa (exclusivity) na nufin:", options: ["Za a ƙara muku biya", "Yarjejeniyar gajeriya ce", "Ku ne kuka mallaki kamfanin", "Ba za ku iya aiki da kamfanonin da ke gasa da su ba"], answer: 3, why: "Tana iyakance wasu yarjejeniyoyi, don haka ya kamata ta zama mai adalci." },
      { objective: "O5", q: "Yarjejeniya tana biya da \"a san ku\" (exposure) kawai. Wannan:", options: ["Alamar haɗari ce", "Biya ne mai kyau", "Dole ne", "Dokar haraji ce"], answer: 0, why: "Biya marar sarari alamar gargaɗi ce." },
      { objective: "O6", q: "Kamfani ya ba ku takalma kyauta. Shin dole ku bayyana?", options: ["A'a, tsabar kuɗi kaɗai ake ƙirgawa", "Sai idan kuna son su", "Ee, kaya kyauta ma ana ƙirga su", "A TikTok kawai"], answer: 2, why: "FTC ta ce kaya kyauta muhimmiyar alaƙa ce." },
      { objective: "O6", q: "A ina bai kamata bayyanawa ta kasance KAWAI ba?", options: ["Kusa da farkon rubutun post", "A kan hoto a cikin story", "An faɗe ta a bidiyo", "A ɓoye cikin hashtags ko bayanin shafinku (bio)"], answer: 3, why: "Bayyanawa dole ta kasance mai sauƙin gani." },
      { objective: "O6", q: "Kamfani yana neman ku ce abin shansa yana warkar da ciwon tsoka. Ku:", options: ["Ku faɗa", "Ku ƙi; kada ku yi iƙirarin lafiya da ba za su iya tabbatarwa ba", "Ku faɗa da ƙarfi", "Ku faɗa ba tare da bayyanawa ba"], answer: 1, why: "FTC tana gargaɗi game da iƙirarin lafiya da ba a tabbatar ba." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      5,
      6,
      8,
      12,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Takardar bayani (media kit)",
        objective: "O3",
        notYet: "Lambobi sun ɓace, an ƙirƙira su ko sun tsufa, ko an nuna bayanan tuntuɓa na sirri.",
        meets: "Shafi ɗaya mai bayani game da ɗan wasan, tashoshi, lambobi na gaskiya masu kwanan wata, masu bi, abin da ake bayarwa da tuntuɓa mai aminci.",
        exceeds: "Ya haɗa da matsakaicin hulɗa a kowane post da jerin haɗin gwiwar baya ko aikin al'umma a sarari."
      },
      {
        name: "Dacewar kamfani",
        objective: "O2",
        notYet: "Kamfanin da aka zaɓa ya saɓa da ra'ayoyin ɗan wasan ko yana cikin rukunin da aka hana.",
        meets: "Kamfani ɗaya da ɗan wasan ke amfani da shi da gaske, wanda ya dace da masu binsa da dokokin makaranta da jiha.",
        exceeds: "Zaɓin yana da goyon bayan jerin kamfanoni biyar da suka dace tare da dalilai."
      },
      {
        name: "Saƙon neman haɗin gwiwa",
        objective: "O4",
        notYet: "Dogo ne, na gama-gari ko rubutun AI da aka kwafa, ko an aika shi ta DM barkatai.",
        meets: "Ƙasa da kalmomi 150, da salon maganar ɗan wasan, da dalili na gaskiya, ra'ayi ɗaya da takardar bayani, zuwa adireshin tuntuɓa na hukuma.",
        exceeds: "Iyaye ko mai kula suna ciki inda ake buƙata, kuma an saka ranar tunatarwa."
      },
      {
        name: "Jerin alamun haɗari da dokoki",
        objective: "O5",
        notYet: "Babu muhimman alamun haɗari, ko bai ambaci wanda za a tambaya ba.",
        meets: "Ya lissafa alamun haɗari, abin da za a duba (aiki, biya, tsawon lokaci, ƙarshe) da wanda za a tambaya a makaranta ko jiha.",
        exceeds: "Ya ƙara ƙarshen lokacin ba da rahoto da ajiye bayanai don haraji."
      },
      {
        name: "Bayyanawa",
        objective: "O6",
        notYet: "Babu bayyanawa, ko an ɓoye ta ko ba ta da sarari.",
        meets: "\"Ad\" ko godiya a sarari kusa da farko, an faɗa kuma an nuna a bidiyo, da iƙirari na gaskiya kawai.",
        exceeds: "Ya kuma yi amfani da alamar haɗin gwiwar biya (paid partnership) ta manhajar kuma ya duba kowane iƙirari tare da kamfanin."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala aikin ƙarshe kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric",
      "Masu koyo da suka ce sun aika saƙon neman haɗin gwiwa ga aƙalla kamfani ɗaya cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ce sun duba yarjejeniya tare da babba amintacce ko ofishin ƙa'idoji, ko sun ƙi mummunar yarjejeniya",
      "Masu koyo da suka ce kowane post na tallafi yana da bayyanawa a sarari, kuma an ba da rahoton kowace yarjejeniya da ake buƙata a kan lokaci"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya mai manhajojin kafofin sada zumunta da ƙididdigarsu (insights)",
      "Asusun Canva kyauta",
      "Mataimakin AI kyauta (ChatGPT, Microsoft Copilot ko Google Gemini)",
      "Manufar NIL ta makarantarku ko dokokin ƙungiyar jiharku",
      "Kusan minti 60"
    ],
    facilitatorNotes: [
      "Ku gayyaci ofishin ƙa'idoji ko daraktan wasanni don bayyana dokokin NIL na yanzu da yadda ake ba da rahoto; dokoki da iyakokin kuɗi suna canjawa.",
      "Ga 'yan wasa 'yan ƙasa da shekara 18, ku sa iyaye ko masu kula a kowane saƙon neman haɗin gwiwa da kowace yarjejeniya.",
      "Kada ku taɓa gaya wa ɗan wasa cewa wata yarjejeniya ba ta da matsala; ku tura kwangiloli ga babba amintacce, lauya, wakili ko taimakon NIL na makaranta.",
      "Ku koyar da cewa sayen masu bi ko ƙara lambobi rashin gaskiya ne kuma zai iya kawo ƙarshen yarjejeniyoyi.",
      "Ku yi atisayen rubuta bayyanawa tare, kuma ku duba daftarin posts na tallafi kafin a sanya su."
    ]
  }
};
