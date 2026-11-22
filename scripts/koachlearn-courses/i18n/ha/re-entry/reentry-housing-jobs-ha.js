"use strict";

// Koach Learn course, Hausa (ha) translation of re-entry/reentry-housing-jobs.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "reentry-housing-jobs-ha",
  lang: "ha",
  translationOf: "reentry-housing-jobs",
  category: "Re-Entry",
  name: "Neman Gidan Zama da Ayyukan Dama ta Biyu",
  skills: "Neman taimakon gidaje ta 211, Neman gida idan kuna da tarihin laifi, Haɗa fayil ɗin haya, Amfani da American Job Centers, Neman masu ɗaukar aiki na dama ta biyu, Bayyana WOTC da federal bonding ga mai ɗaukar aiki",
  outcome: "nemo gidan da za ku iya nema duk da tarihin laifi, haɗa fayil ɗin haya, nemo masu ɗaukar aiki na dama ta biyu da taimakon neman aiki kusa da ku, da faɗa wa mai ɗaukar aiki game da tallafin ɗaukar aiki da ke tare da ku.",
  about: [
    "Wurin zama mai aminci da aiki mai ɗorewa su ne abubuwa biyu da suka fi taimakawa bayan an sake ku. Duka biyun suna iya zama kamar ba za a same su ba idan kuna da tarihin laifi (record), amma akwai shirye-shirye, dokoki da masu ɗaukar aiki da aka kafa don su taimaka.",
    "A wannan kwas ɗin za ku yi amfani da 211 don samun taimakon gidaje na yankinku, ku koyi dokokin gidajen gwamnati (public housing) game da tarihin laifi, ku haɗa fayil ɗin haya da ke amsa damuwar mai gida, ku nemo American Job Center, ku nemi masu ɗaukar aiki na dama ta biyu, kuma ku koyi yadda Work Opportunity Tax Credit da Federal Bonding Program za su iya sa mai ɗaukar aiki ya fi son ɗaukar ku.",
    "Dokoki suna canjawa, kuma sun bambanta a kowace jiha da birni. Kowane darasi yana nuna inda za ku duba dokokin yanzu. Don tambayoyin shari'a, ku tambayi lauyoyin taimako kyauta (legal aid) ko mai ba da shawara ga masu dawowa gida.",
    "Kowane darasi yana ɗaukar kusan minti biyar, kuma yana ƙarewa da aikin da za ku yi nan take. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku yi tsarin gidaje da aiki a shafi ɗaya: zaɓuɓɓukan gidaje biyu tare da bayanan tuntuɓa da abin da za a kawo, jerin takardun fayil ɗin haya, American Job Center mafi kusa da ku, masu ɗaukar aiki na dama ta biyu ko damar aiki uku, da jimloli biyu da ke faɗa wa mai ɗaukar aiki game da Work Opportunity Tax Credit da Federal Bonding Program.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke dawowa gida daga gidan yari (re-entry) da ke buƙatar wurin zama mai aminci da aiki mai ɗorewa, sau da yawa da tarihin laifi da ke sa duka biyun su yi wuyar samu. Wasu suna kan parole ko probation (sakin sharaɗi).",
    startingPoint: "Suna iya yin kira da amfani da waya mai sauƙi. Yawancinsu ba su san 211 ba, ko dokokin gidajen gwamnati game da tarihin laifi, ko fayil ɗin haya, ko American Job Centers, ko Work Opportunity Tax Credit, ko Federal Bonding Program.",
    gap: "Gida da aiki su ne abubuwa biyu da suka fi taimakawa bayan an sake mutum, amma mutane da yawa suna haƙura bayan an ƙi su a farko, ko kuma 'yan damfarar haya suna yaudarar su. Masu koyo suna buƙatar nemo shirye-shirye, dokoki da masu ɗaukar aiki da aka kafa don su taimaka, kuma su gabatar da kansu da ƙarfin gwiwa da gaskiya.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 5 zuwa 6)",
      "Na'urori: waya mai sauƙi ko wayar zamani, wani lokaci kwamfutar ɗakin karatu",
      "Lokaci: darussa na kusan minti 5 da suka dace da ganawa da aiki",
      "Dokoki sun bambanta a kowace jiha da birni, kuma suna canjawa; tambayoyin shari'a a kai su ga legal aid ko mai ba da shawara ga masu dawowa gida",
      "Sharuɗɗan parole ko probation suna iya iyakance inda masu koyo za su zauna; sirri: babu lambobin shari'a a cikin kayan AI"
    ],
    prerequisites: "Babu. Kwas ɗin \"Everyday AI Tools\" (Kayan AI na Yau da Kullum) yana taimakon masu koyo da ke son amfani da taswira da tunatarwa don zuwa ganawa."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da 211 da shirye-shiryen masu dawowa gida", action: "jera zaɓuɓɓukan gidaje da za ku iya nema", standard: "tare da lambar waya, kuɗi, dokoki da abin da za a kawo ga kowanne" },
    { id: "O2", condition: "Idan an ba ku mai ba da gidaje da dokokin game da tarihin laifi", action: "bayyana abin da dokokin suka ce game da tarihin laifi, da neman a duba takardar neman gidanku da adalci", standard: "kuna tambaya ko akwai rubutacciyar manufa (policy) da ko za ku iya ba da shaidar gyaruwa" },
    { id: "O3", condition: "Idan an ba ku takardun da kuke da su", action: "haɗa fayil ɗin haya da gane zambar haya", standard: "tare da jerin takardu da gajeriyar wasiƙa game da abin da kuka yi tun daga lokacin, kuma ba biyan kuɗi kafin ganin wurin" },
    { id: "O4", condition: "Ta amfani da CareerOneStop ko 211", action: "nemo American Job Center mafi kusa da ku da damar ayyukan dama ta biyu", standard: "tare da adireshi, lambar waya, lokutan aiki da tambayoyin da za ku yi a ziyararku ta farko" },
    { id: "O5", condition: "Idan an ba ku Work Opportunity Tax Credit da Federal Bonding Program", action: "bayyana wa mai ɗaukar aiki yadda za su taimake shi ya ɗauke ku aiki", standard: "a cikin jimloli biyu, bayan kun duba irs.gov ko WOTC yana aiki yanzu" },
    { id: "O6", condition: "Idan an yi muku tambaya game da tarihin laifinku a hirar neman aiki", action: "amsa ta a taƙaice da gaskiya", standard: "kuna faɗin abin da ya faru, abin da kuka yi tun daga lokacin da dalilin da yasa kuka shirya, ba tare da rubuta lambobin shari'a a AI ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Neman wurin zama",
      lessons: [
        {
          objectives: ["O1"],
          title: "Zaɓuɓɓukan gidajenku da inda za ku fara",
          minutes: 5,
          goal: "Yi amfani da 211 da shirye-shiryen masu dawowa gida don jera zaɓuɓɓukan gidaje uku da za ku iya nema.",
          text: [
            "Yawancin mutanen da ke dawowa gida suna bi ta fiye da nau'in gida ɗaya: zama da iyali, matsuguni (shelter), gidan wucin gadi ko na masu dawowa gida, gidan masu barin shaye-shaye (sober living), hayar ɗaki, sannan daga baya gidansu na kansu. Kowane mataki ba laifi ba ne. Manufar ita ce wuri mai aminci yanzu, da wuri mafi kyau a gaba.",
            "211 shi ne wuri mafi sauƙi don farawa. Kuna iya kiran 211 ko ku je 211.org don samun mai taimako na yankinku da zai haɗa ku da taimakon gidaje, abinci, kuɗin wuta da ruwa, kiwon lafiya da sauransu. Kiran sirri ne. Ku faɗa musu cewa kuna dawowa gida daga gidan yari, ku tambayi game da gidajen masu dawowa gida.",
            "Gidajen gwamnati (public housing) da Housing Choice Vouchers (tallafin haya, wanda ake kira Section 8) ofishin gidaje na yankinku ne ke gudanar da su, wato Public Housing Agency (PHA). Jerin masu jira yana iya yin tsawo ko a rufe shi, don haka ku shiga da wuri, kuma ku riƙa sabunta bayanan tuntuɓarku.",
            "Idan kuna kan parole ko probation, jami'inku yana iya buƙatar ya amince da inda za ku zauna. Ku tambaya kafin ku sa hannu a kowace takarda."
          ],
          steps: ["Ku kira 211 ko ku ziyarci 211.org, ku tambayi game da gidajen masu dawowa gida da na wucin gadi.", "Ku nemi jerin gidaje daga shirin masu dawowa gida ko jami'in parole ko probation ɗinku.", "Ku nemo Public Housing Agency na yankinku, ku tambayi yadda ake shiga jerin masu jira.", "Ku rubuta zaɓuɓɓuka uku: suna, lambar waya, kuɗi, dokoki da abin da za a kawo.", "Ku tabbatar da jami'inku cewa an yarda da adireshin."],
          words: [["211", "hidimar waya da intanet kyauta, ta sirri, da ke haɗa ku da taimakon yankinku."], ["Gidan wucin gadi (transitional housing)", "gida na ɗan lokaci mai tallafi, sau da yawa don mutanen da ke dawowa gida."], ["Public Housing Agency (PHA)", "ofishin yanki da ke gudanar da gidajen gwamnati da tallafin haya."], ["Housing Choice Voucher", "taimakon biyan haya ga mai gida mai zaman kansa, wanda ake kira Section 8."]],
          slides: [
            { title: "Gida kamar tsani ne", bullets: ["Iyali, matsuguni, gidan masu dawowa gida ko sober living", "Ɗaki, sannan gida", "Aminci yanzu, mafi kyau a gaba"] },
            { title: "Ku fara da 211", bullets: ["Ku kira 211 ko ku ziyarci 211.org", "Taimakon yanki na sirri", "Ku tambayi game da gidajen masu dawowa gida"] },
            { title: "Gidajen gwamnati da tallafin haya", bullets: ["Public Housing Agency na yankinku ne ke gudanar da su", "Jerin jira yana iya yin tsawo: ku nema da wuri", "Ku riƙa sabunta bayanan tuntuɓarku"] },
            { title: "Kuna kan parole ko probation?", bullets: ["Jami'inku yana iya buƙatar ya amince da adireshin", "Ku tambaya kafin ku sa hannu"] }
          ],
          sources: [
            { name: "211: Nemo taimakon yankinku", url: "https://www.211.org/" },
            { name: "HUD: Shirin gidajen gwamnati (public housing)", url: "https://www.hud.gov/topics/rental_assistance/phprog" }
          ],
          tryIt: "Ku kira 211 ko ku ziyarci 211.org, ku nemi gidajen masu dawowa gida ko na wucin gadi kusa da ku. Ku rubuta zaɓuɓɓuka uku tare da lambar waya, kuɗi, dokoki da abin da kowanne yake neman ku kawo.",
          youCanNow: "amfani da 211 da Public Housing Agency na yankinku don nemo zaɓuɓɓukan gidaje, da jera abin da kowanne yake buƙata.",
          quickCheck: [
            { objective: "O1", q: "Mene ne gidan wucin gadi (transitional housing)?", options: ["Otal da kuke biya kowane dare", "Gida na ɗan lokaci mai tallafi, sau da yawa don mutanen da ke dawowa gida", "Gidan da kuke saya", "Matsugunin da ake buɗewa a lokacin sanyi kawai"], answer: 1, why: "Gidan wucin gadi gida ne na ɗan lokaci mai tallafi yayin da kuke daidaita rayuwarku." },
            { objective: "O1", q: "Kuna kan parole, sai aboki ya ba ku ɗaki. Me za ku yi kafin ku shiga?", options: ["Ku shiga yau da dare", "Ku sa hannu a yarjejeniyar haya nan take", "Ku tabbatar cewa jami'inku ya amince da adireshin", "Kada ku faɗa wa kowa"], answer: 2, why: "Sharuɗɗan parole suna iya iyakance inda za ku zauna, don haka ku fara tabbatarwa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Neman gida idan kuna da tarihin laifi",
          minutes: 6,
          goal: "Bayyana abin da dokokin gidaje suka ce game da tarihin laifi, da yadda ake neman a duba takardar neman gidanku da adalci.",
          text: [
            "Dokokin gwamnatin tarayya sun wajabta wa ofisoshin gidajen gwamnati su ƙi wasu rukunoni kaɗan: duk wanda dole ya yi rajista a matsayin mai laifin jima'i har tsawon rayuwarsa; duk wanda aka taɓa kama da laifin yin methamphetamine (meth) a filin gidajen da gwamnatin tarayya ke tallafawa; da kuma, har shekaru uku, iyalin da aka kora daga gidan da gwamnatin tarayya ke tallafawa saboda harkar ƙwayoyi, sai dai idan mutumin ya kammala shirin gyaran shaye-shaye da aka amince da shi, ko yanayin ya canja. Suna kuma iya ƙin duk wanda ke amfani da ƙwayoyi ba bisa doka ba a yanzu.",
            "Don yawancin sauran tarihin laifi, ofishin gidaje ne ke yanke shawara da rubutacciyar manufarsa (policy). Kafin ya ƙi ku saboda tarihin laifi, dole ya faɗa muku, ya ba ku kwafin tarihin, kuma ya ba ku damar ƙalubalantarsa. Ba zai iya karɓar kuɗi daga gare ku don duba tarihin ba. Ku nemi manufarsa, kuma ku nemi a sake duba idan an ƙi ku.",
            "Masu gidaje masu zaman kansu yawanci suna iya duba tarihin laifi. Tarihin laifi ba rukunin da doka ke karewa ba ne a ƙarƙashin Fair Housing Act na tarayya, kuma HUD ta ce tana kawo ƙarshen tsohuwar jagorar tarayya da ta iyakance binciken tarihi. Dokokin jiha da birni suna iya ƙara kare ku. A California, masu gida ba za su iya amfani da kamun da bai kai ga hukunci ba, ko tarihin da aka rufe ko aka goge, ko tarihin lokacin ƙuruciya; ba za su iya hana duk mai tarihin laifi ba; kuma dole su nuna cewa hukuncin yana da alaƙa kai tsaye da zama mai haya nagari.",
            "Idan kuna ganin wani mai gida a California ya karya waɗannan dokokin, kuna iya tuntuɓar California Civil Rights Department (ofishin haƙƙin jama'a na California), yawanci cikin shekara ɗaya. A sauran jihohi, ku tambayi legal aid ko ofishin haƙƙin jama'a na jiharku."
          ],
          steps: ["Ku nemi rubutacciyar manufa game da tarihin laifi daga kowane mai ba da gidaje.", "Ku fara karanta tarihinku da kanku don kada wani abu ya ba ku mamaki.", "Ku kawo shaidar gyaruwa tare da takardar neman gida.", "Idan an ƙi ku, ku nemi a rubuce dalilin, kwafin tarihin da aka yi amfani da shi, da sake dubawa.", "Idan kuna ganin an karya doka, ku tuntuɓi legal aid ko ofishin haƙƙin jama'a na jiharku."],
          words: [["Fair Housing Act", "dokar tarayya da ke hana nuna wariya a gidaje saboda launin fata, launi, ƙasar asali, addini, jinsi, yanayin iyali ko nakasa."], ["Rukunin da doka ke karewa (protected class)", "rukunin mutane da doka ke kare su daga nuna wariya."], ["Gidan da gwamnatin tarayya ke tallafawa", "gidan da shirye-shiryen gwamnatin tarayya ke biyan wani ɓangare na kuɗinsa, kamar gidajen gwamnati."], ["Sake dubawa (informal review)", "ganawa don neman ofishin gidaje ya sake duba ƙin da ya yi."]],
          slides: [
            { title: "Gidajen gwamnati: ƙin da ya zama dole", bullets: ["Rajistar mai laifin jima'i har tsawon rayuwa", "Yin meth a filin gidan da gwamnatin tarayya ke tallafawa", "Korar gida saboda ƙwayoyi: shekaru 3, da wasu keɓancewa"] },
            { title: "Yawancin sauran tarihi: PHA ce ke yanke shawara", bullets: ["Ku nemi rubutacciyar manufa", "Dole su nuna muku tarihin, su bar ku ƙalubalantarsa", "Ku nemi a sake duba idan an ƙi ku"] },
            { title: "Masu gidaje masu zaman kansu", bullets: ["Yawanci suna iya duba tarihin laifi", "Jagorar tarayya ta canja: ku duba hud.gov", "Dokokin jiha da birni suna iya ƙara kare ku"] },
            { title: "Kariyar California", bullets: ["Ba kamun da babu hukunci, tarihin da aka rufe ko na ƙuruciya", "Ba hana duk mai tarihin laifi gaba ɗaya", "Ƙorafi: California Civil Rights Department"] }
          ],
          sources: [
            { name: "24 CFR 960.204: Ƙin karɓa saboda aikata laifi ko shaye-shaye (Cornell LII)", url: "https://www.law.cornell.edu/cfr/text/24/960.204" },
            { name: "HUD: Bayani game da Fair Housing Act", url: "https://www.hud.gov/helping-americans/fair-housing-act-overview" },
            { name: "California Civil Rights Department: Gidaje", url: "https://calcivilrights.ca.gov/housing/" }
          ],
          tryIt: "Ku kira ko ku ziyarci shafin intanet na mai ba da gidaje ɗaya daga jerinku, ku tambaya: Kuna da rubutacciyar manufa game da tarihin laifi? Zan iya ba ku shaidar gyaruwa tare da takardar neman gida? Ku rubuta amsoshin.",
          youCanNow: "bayyana manyan dokokin gidaje game da tarihin laifi, neman manufar mai ba da gida, da neman a sake duba idan an ƙi ku.",
          quickCheck: [
            { objective: "O2", q: "Wane ne ke gudanar da gidajen gwamnati da Housing Choice Vouchers a yankinku?", options: ["Public Housing Agency na yankinku", "Ofishin 'yan sanda", "Jami'in parole ɗinku", "IRS (hukumar haraji)"], answer: 0, why: "Public Housing Agency na yankinku ne ke gudanar da waɗannan shirye-shirye, kuma shi ke kafa manufarsa." },
            { objective: "O2", q: "Kuna son neman gida daga wani mai ba da gidaje amma kuna damuwa da tarihinku. Me za ku yi?", options: ["Ku ɓoye tarihin ku yi fata", "Ku haƙura kada ku nema", "Ku biya ƙarin kuɗi don a tsallake binciken", "Ku nemi rubutacciyar manufarsu da ko za ku iya ƙara shaidar gyaruwa"], answer: 3, why: "Tambaya game da manufar da ba da shaida suna taimakawa a duba ku da adalci." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Haɗa fayil ɗin haya",
          minutes: 5,
          goal: "Haɗa fayil ɗin haya da ke amsa damuwar mai gida kafin ya tambaya.",
          text: [
            "Mai gida yana son sanin abubuwa uku: za ku biya a kan lokaci? za ku kula da wurin? za ku zauna lafiya da maƙwabta? Fayil ɗin haya yana amsa duka uku a cikin fayil ɗaya.",
            "Ku saka: katin shaida mai hoto; shaidar samun kuɗi kamar takardar albashi (pay stub), wasiƙar tayin aiki ko wasiƙar tallafi; wasiƙun shaida (references) daga mai ɗaukar aiki, mai kula da shari'arku (case manager), ma'aikatan shiri ko shugaban addini; takardun shaidar kammala shirye-shirye; da gajeriyar wasiƙa game da tarihinku da ke faɗin abin da ya faru, abin da kuka yi tun daga lokacin, da dalilin da yasa za ku zama mai haya nagari.",
            "Ku yi hankali da zambar haya. Kada ku taɓa aika kuɗi ta wire (tura kuɗi ta banki), katin kyauta (gift card) ko manhajar biyan kuɗi kafin ku ga wurin da idanunku kuma ku sa hannu a yarjejeniyar haya. Ku yi hankali da duk tayin da ya yi arha fiye da kima ko ke gaggauta ku.",
            "Ku san abin da za ku iya biya. Shirye-shirye da yawa suna amfani da ƙa'idar cewa haya ta zama kusan kashi ɗaya cikin uku na kuɗin shigarku ko ƙasa da haka. Ku tambayi duk kuɗin shiga gida: ajiya (deposit), hayar wata na farko da kuɗin takardar nema."
          ],
          steps: ["Ku samo fayil ku yi kwafin katin shaidarku da shaidar samun kuɗi.", "Ku nemi mutane biyu ko uku su rubuta muku wasiƙun shaida.", "Ku ƙara takardun shaidar shirye-shiryen da kuka kammala.", "Ku rubuta gajeriyar wasiƙa game da tarihinku, ku ƙare da dalilin da yasa za ku zama mai haya nagari.", "Kafin ku biya komai, ku ga wurin da idanunku, ku samu rubutacciyar yarjejeniyar haya."],
          words: [["Fayil ɗin haya (rental packet)", "fayil na takardu da ke nuna wa mai gida cewa ku mai haya nagari ne."], ["Mai ba da shaida (reference)", "mutumin da zai iya faɗin abu mai kyau game da ku."], ["Ajiya (security deposit)", "kuɗin da kuke biya kafin ku shiga gida, mai gida yana riƙe da shi idan an yi ɓarna."], ["Yarjejeniyar haya (lease)", "rubutacciyar yarjejeniyar haya."]],
          slides: [
            { title: "Abin da ke damun mai gida", bullets: ["Za ku biya a kan lokaci?", "Za ku kula da wurin?", "Za ku zauna lafiya da maƙwabta?"] },
            { title: "Fayil ɗin hayarku", bullets: ["Katin shaida mai hoto da shaidar samun kuɗi", "Wasiƙun shaida da takardun shaidar shirye-shirye", "Gajeriyar wasiƙa game da tarihinku"] },
            { title: "Alamun zambar haya", bullets: ["Biya kafin ku ga wurin", "Wire, katin kyauta ko manhajar biya kawai", "Arha fiye da kima, gaggawa fiye da kima"] },
            { title: "Ku san lissafinku", bullets: ["Haya kusan kashi ɗaya cikin uku na kuɗin shiga ko ƙasa", "Ku tambayi ajiya, wata na farko da kuɗaɗe"] }
          ],
          tryIt: "Ku fara fayil ɗin hayarku. Ku yi jerin takardun da kuke da su da waɗanda har yanzu kuke buƙata. Ku rubuta daftarin farko na gajeriyar wasiƙarku: jimla ɗaya game da abin da ya faru, biyu game da abin da kuka yi tun daga lokacin, da ɗaya game da dalilin da yasa za ku zama mai haya nagari.",
          youCanNow: "haɗa fayil ɗin haya da ke nuna wa mai gida cewa za ku biya, ku kula da wurin, ku zama maƙwabci nagari, da gane zambar haya.",
          quickCheck: [
            { objective: "O3", q: "Wanne ya kamata ya kasance a cikin fayil ɗin haya?", options: ["Shaidar samun kuɗi da wasiƙun shaida", "Dukan fayil ɗin shari'arku", "Kalmar sirrin bankinku", "Kwafin katin Social Security ɗinku ga kowa"], answer: 0, why: "Shaidar samun kuɗi da wasiƙun shaida suna amsa manyan damuwar mai gida." },
            { objective: "O3", q: "Wani mai gida yana son ajiya ta wire kafin ku ga gidan. Me za ku yi?", options: ["Ku aika da sauri kafin wani ya riga ku", "Ku aika rabi", "Ku ƙi, ku nemi wani wuri", "Ku aika ta katin kyauta a maimakon haka"], answer: 2, why: "Neman biya kafin ku ga wurin alamar gargaɗin zamba ce." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Neman wurin zama",
        questions: [
          { objective: "O1", q: "Kun dawo gida yanzu kuma kuna buƙatar taimakon gida yau da dare. Mene ne mataki mai kyau na farko?", options: ["Ku jira wata ɗaya", "Ku kira 211 ko ku ziyarci 211.org", "Ku sa hannu a kowace yarjejeniyar haya da kuka gani a intanet", "Ku aika ajiya ta katin kyauta"], answer: 1, why: "211 yana haɗa ku da taimakon gidaje da sauran taimako na yankinku." },
          { objective: "O2", q: "Wane ne ke gudanar da gidajen gwamnati da Housing Choice Vouchers a yankinku?", options: ["Public Housing Agency na yankinku", "Gidan waya", "Bankinku", "DMV (ofishin motoci)"], answer: 0, why: "Public Housing Agency na yankinku ne ke gudanar da waɗannan shirye-shirye da jerin masu jira." },
          { objective: "O2", q: "Kafin ofishin gidajen gwamnati ya ƙi ku saboda tarihin laifi, dole ya:", options: ["Karɓi kuɗi daga gare ku don binciken", "Saka shi a intanet", "Faɗa muku, ya ba ku kwafin tarihin da damar ƙalubalantarsa", "Kira iyalinku"], answer: 2, why: "Dokokin sun wajabta sanarwa, kwafin tarihin da damar ƙalubalantarsa." },
          { objective: "O2", q: "A California, wanne ne mai gida BA zai iya amfani da shi a kanku ba?", options: ["Kuɗin shigarku", "Wasiƙun shaidarku", "Tarihin hayarku", "Tarihin laifin da aka rufe"], answer: 3, why: "California ba ta yarda masu gida su yi amfani da tarihin da aka rufe ko aka goge, kamun da babu hukunci, ko tarihin ƙuruciya ba." },
          { objective: "O3", q: "Wani mai gida yana neman ku biya ajiya da katin kyauta kafin ku ga gidan. Me za ku yi?", options: ["Ku biya da sauri don kada ya wuce ku", "Ku biya rabi", "Ku ƙi; alamar gargaɗin zamba ce", "Ku aika kalmar sirrin bankinku"], answer: 2, why: "Biya kafin ganin wurin, da katin kyauta, sanannar zambar haya ce." }
        ]
      }
    },
    {
      name: "Babi na 2: Neman aikin dama ta biyu",
      lessons: [
        {
          objectives: ["O4"],
          title: "American Job Centers da shirye-shiryen aiki na masu dawowa gida",
          minutes: 5,
          goal: "Nemo American Job Center mafi kusa da ku da shirin aiki na masu dawowa gida, ku kuma san abin da za ku tambaye su.",
          text: [
            "American Job Centers ofisoshin aiki ne na gwamnati da ke ko'ina a ƙasar. Suna taimakawa wajen neman aiki, rubuta takardar bayanin aiki (résumé), horo, kuma wani lokaci horo mai biyan kuɗi ko taimakon tufafin aiki da kayan aiki. Kuna iya nemo mafi kusa a CareerOneStop (careeronestop.org), shafin intanet na US Department of Labor (ma'aikatar ƙwadago ta Amurka), ko ta kiran 211.",
            "Department of Labor kuma tana ɗaukar nauyin shirye-shiryen aiki na masu dawowa gida, don manya da matasa da suka taɓa zaman gidan yari. Ƙungiyoyin masu dawowa gida, kwalejojin al'umma (community colleges) da wasu ƙungiyoyin ma'aikata (unions) su ma suna gudanar da horon aiki da koyon sana'a (apprenticeship).",
            "Idan kun je, ku tambaya: Wane horo ne kyauta gare ni? Kuna aiki da masu ɗaukar aiki da ke ɗaukar mutane masu tarihin laifi? Za ku iya taimaka min da wasiƙar bonding ko takardun Work Opportunity Tax Credit? Za ku iya taimakawa da tufafin aiki, kayan aiki ko tikitin bas?"
          ],
          steps: ["Ku je careeronestop.org ku nemi American Job Center kusa da ku, ko ku kira 211.", "Ku tambayi shirin masu dawowa gida waɗanne shirye-shiryen aiki yake aiki da su.", "Ku kawo katin shaidarku, duk résumé da kuke da shi, da takardun shaida.", "Ku yi tambayoyi huɗu na wannan darasi, ku rubuta amsoshin.", "Ku sa ranar ziyararku ta gaba."],
          words: [["American Job Center", "ofishin gwamnati kyauta da ke taimakon mutane samun aiki da horo."], ["CareerOneStop", "shafin intanet na US Department of Labor don ayyuka, horo da neman ofisoshin aiki."], ["Koyon sana'a (apprenticeship)", "aiki mai biyan kuɗi da kuke koyon sana'a yayin da kuke aiki."]],
          slides: [
            { title: "American Job Centers", bullets: ["Ofisoshin aiki na gwamnati a ko'ina a ƙasar", "Neman aiki, résumé, horo", "Ku nemo ɗaya a careeronestop.org ko ku kira 211"] },
            { title: "Shirye-shiryen aiki na masu dawowa gida", bullets: ["Shirye-shiryen Department of Labor na masu dawowa gida", "Ƙungiyoyin masu dawowa gida da kwalejoji", "Ƙungiyoyin ma'aikata da koyon sana'a"] },
            { title: "Ku tambaye su", bullets: ["Wane horo ne kyauta gare ni?", "Waɗanne masu ɗaukar aiki ke ɗaukar masu tarihin laifi?", "Taimako da takardun bonding ko tax credit?", "Taimako da tufafi, kayan aiki ko tikitin bas?"] }
          ],
          sources: [
            { name: "CareerOneStop: Nemo American Job Centers", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" },
            { name: "US Department of Labor: Aikin masu dawowa gida", url: "https://www.dol.gov/agencies/eta/reentry" }
          ],
          tryIt: "Ku nemo American Job Center mafi kusa da ku. Ku rubuta adireshinsa, lambar waya da lokutan aiki, da tambayoyi huɗu da za ku yi a ziyararku ta farko.",
          youCanNow: "nemo American Job Center da shirin aiki na masu dawowa gida, da neman su taimakon da kuke buƙata.",
          quickCheck: [
            { objective: "O4", q: "Me American Job Center ke bayarwa?", options: ["Ayyuka masu biyan kuɗi a cibiyar kawai", "Taimako kyauta wajen neman aiki, résumé da horo", "Tallafin haya", "Bashin mota"], answer: 1, why: "American Job Centers suna ba da taimako kyauta wajen neman aiki, résumé da horo." },
            { objective: "O4", q: "Kuna ofishin aiki a karon farko. Wace tambaya za ku yi?", options: ["Za ku iya goge min tarihin laifi?", "Nawa kuke karɓa?", "Zan iya tsallake takardar nema?", "Waɗanne masu ɗaukar aiki a nan ke ɗaukar masu tarihin laifi?"], answer: 3, why: "Ma'aikatan ofishin aiki sau da yawa sun san masu ɗaukar aiki na dama ta biyu a yankin." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Masu ɗaukar aiki na dama ta biyu, WOTC da federal bonding",
          minutes: 6,
          goal: "Bayyana wa mai ɗaukar aiki yadda Work Opportunity Tax Credit da Federal Bonding Program za su taimake shi ya ɗauke ku aiki.",
          text: [
            "Mai ɗaukar aiki na dama ta biyu kamfani ne da ke shirye ya ɗauki mutane masu tarihin laifi aiki. Ku neme su ta ofisoshin aiki, shirye-shiryen masu dawowa gida, kamfanonin samar da ma'aikata da ke aiki da masu dawowa gida, ƙungiyoyin ma'aikata, da tallace-tallacen aiki da ke cewa fair chance ko second chance.",
            "Work Opportunity Tax Credit (WOTC) rangwamen haraji ne na gwamnatin tarayya ga masu ɗaukar aiki, ba kuɗi da ake biyan ku ba. Ɗaya daga cikin rukunonin da yake rufewa shi ne tsofaffin masu manyan laifuka (qualified ex-felons): mutanen da aka ɗauka aiki cikin shekara ɗaya da hukuncin babban laifi ko sakinsu daga gidan yari. Mai ɗaukar aiki da ku kuna cike IRS Form 8850 a ranar tayin aiki ko kafin ta, kuma mai ɗaukar aiki yana aika shi ga jiha cikin kwanaki 28 bayan kun fara aiki. Shafin IRS ya ce rangwamen ya rufe mutanen da suka fara aiki kafin 31 December 2025. Ku duba irs.gov don ganin ko an sabunta shi kafin ku ambace shi.",
            "Federal Bonding Program yana ba masu ɗaukar aiki fidelity bond kyauta, wato wani nau'in inshora daga satar ma'aikaci, na watanni shida na farko na aiki. Kowane bond yana rufe har $5,000 ba tare da deductible ba (kuɗin da mai ɗaukar aiki zai fara biya da kansa), kuma babu takardun da za ku cike. Mutane masu tarihin laifi suna ɗaya daga cikin rukunonin da yake hidimtawa. Mai shirya bonding na jiharku (state bonding coordinator), wanda aka jera a bonds4jobs.com, shi ke shirya shi.",
            "Masu ɗaukar aiki da yawa ba su taɓa jin labarin waɗannan shirye-shirye ba. Faɗa musu yana nuna cewa kun yi bincike, kuma yana rage haɗarinsu."
          ],
          steps: ["Ku yi jerin masu ɗaukar aiki na dama ta biyu daga ofisoshin aiki, shirye-shiryen masu dawowa gida da tallace-tallacen aiki.", "Ku duba irs.gov don ganin ko WOTC yana aiki yanzu.", "Ku nemo mai shirya bonding na jiharku a bonds4jobs.com.", "Ku gwada faɗin jimloli biyu game da WOTC da bonding.", "Ku kawo Form 8850 da bayanan bonding zuwa hirar neman aiki."],
          words: [["Mai ɗaukar aiki na dama ta biyu (second-chance employer)", "kamfani da ke shirye ya ɗauki mutane masu tarihin laifi aiki."], ["Work Opportunity Tax Credit (WOTC)", "rangwamen haraji na gwamnatin tarayya ga masu ɗaukar aiki da ke ɗaukar mutane daga wasu rukunoni."], ["Fidelity bond", "inshora da ke kare mai ɗaukar aiki daga asara saboda satar ma'aikaci."], ["Form 8850", "takardar IRS da ake amfani da ita don fara aikin WOTC."]],
          slides: [
            { title: "Masu ɗaukar aiki na dama ta biyu", bullets: ["Suna shirye su ɗauki masu tarihin laifi aiki", "Ku neme su ta ofisoshin aiki da shirye-shiryen masu dawowa gida", "Ku nemi fair chance ko second chance a tallace-tallacen aiki"] },
            { title: "Work Opportunity Tax Credit", bullets: ["Rangwamen haraji ga mai ɗaukar aiki, ba albashi gare ku ba", "Yana rufe waɗanda aka ɗauka cikin shekara ɗaya da hukunci ko saki", "Form 8850 a ranar tayin aiki ko kafin ta; ku duba irs.gov"] },
            { title: "Federal Bonding Program", bullets: ["Bond kyauta na watanni shida na farko", "Har $5,000, babu deductible", "Mai shirya bonding na jiharku ne ke shirya shi"] },
            { title: "Me yasa za ku faɗa wa mai ɗaukar aiki", bullets: ["Da yawa ba su taɓa jin labarinsu ba", "Yana rage haɗarinsu", "Yana nuna cewa kun yi bincike"] }
          ],
          sources: [
            { name: "IRS: Work Opportunity Tax Credit", url: "https://www.irs.gov/businesses/small-businesses-self-employed/work-opportunity-tax-credit" },
            { name: "US Department of Labor: Work Opportunity Tax Credit", url: "https://www.dol.gov/agencies/eta/wotc" },
            { name: "Federal Bonding Program: Game da mu", url: "https://bonds4jobs.com/about-us" }
          ],
          tryIt: "Ku rubuta jimlolinku biyu ga mai ɗaukar aiki. Misali: Idan kun ɗauke ni aiki, kuna iya samun Work Opportunity Tax Credit. Zan kuma iya zuwa da bond kyauta na Federal Bonding Program da ke rufe watanni shida na farko na aikina. Sannan ku nemo mai shirya bonding na jiharku a bonds4jobs.com.",
          youCanNow: "nemo masu ɗaukar aiki na dama ta biyu, da bayyana WOTC da federal bonding ga mai ɗaukar aiki da kalmomi masu sauƙi.",
          quickCheck: [
            { objective: "O5", q: "Wane ne ke samun Work Opportunity Tax Credit?", options: ["Ma'aikaci", "Ofishin parole", "Mai ɗaukar aiki", "Ofishin aiki"], answer: 2, why: "WOTC rangwamen haraji ne da mai ɗaukar aiki zai iya nema saboda ya ɗauke ku aiki." },
            { objective: "O5", q: "Kuna shirin faɗa wa mai ɗaukar aiki game da WOTC a hirar neman aiki. Me za ku fara yi?", options: ["Ku duba irs.gov don ganin ko yana aiki yanzu", "Ku yi masa alƙawarin wani adadin kuɗi", "Ku nemi AI ya cike Form 8850 da bayananku", "Ku bar shi domin masu ɗaukar aiki ba su damu ba"], answer: 0, why: "Dokokin WOTC suna iya canjawa, don haka ku duba irs.gov kafin ku ambace shi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Neman aiki da amsa tambayoyi game da tarihinku",
          minutes: 6,
          goal: "Nemi aikin dama ta biyu kuma ku amsa tambayoyi game da tarihinku da ƙarfin gwiwa.",
          text: [
            "Ku nemi ayyuka da yawa kowane mako. Ku riƙe jeri mai sauƙi: mai ɗaukar aiki, aikin, ranar da kuka nema, da abin da zai biyo baya. Idan ba ku ji komai ba bayan kusan mako ɗaya, ku sake tuntuɓarsu (follow up).",
            "Jihohi da birane da yawa suna da dokokin fair chance ko ban the box da ke jinkirta tambayoyi game da tarihin laifi har sai daga baya a lokacin ɗaukar aiki. Ku koyi dokar yankinku. Idan tambayar ta zo, ku faɗi gaskiya. Yin ƙarya game da tarihin laifi dalili ne da aka saba gani na rasa aiki daga baya.",
            "Ku amsa a sassa uku gajeru: abin da ya faru, a jimla ɗaya ba tare da hujjoji ba; abin da kuka yi tun daga lokacin, kamar shirye-shirye, aiki, makaranta da kasancewa a kan hanya madaidaiciya; da dalilin da yasa kuka shirya don wannan aikin. Sannan ku koma kan ƙwarewarku. Ku gwada faɗin sa da babbar murya har ya zama kuna faɗin sa cikin natsuwa.",
            "Ku kawo shaida: takardun shaida, wasiƙar shaida, da bayanan WOTC da bonding. Mataimakin AI zai iya taimaka muku ku gwada tambayoyin hira, amma kada ku taɓa rubuta lambobin shari'arku ko wasu bayanan sirri a cikinsa."
          ],
          steps: ["Ku nemi ayyuka da yawa kowane mako, ku bibiye su a jeri.", "Ku koyi dokar fair chance ta jiharku ko birninku.", "Ku rubuta amsarku mai sassa uku game da tarihinku.", "Ku gwada faɗin ta da babbar murya tare da mutum ko mataimakin AI, ba tare da bayanan sirri ba.", "Ku kawo takardun shaida, wasiƙun shaida, da bayanan WOTC da bonding zuwa hirar."],
          words: [["Sake tuntuɓa (follow up)", "sake tuntuɓar mai ɗaukar aiki don jin halin da takardar neman aikinku take ciki."], ["Dokar fair chance", "dokar da ke iyakance lokacin da masu ɗaukar aiki za su iya tambaya game da tarihin laifi."], ["Wasiƙar shaida (reference letter)", "wasiƙa daga wanda zai iya faɗin abu mai kyau game da aikinku ko halinku."]],
          slides: [
            { title: "Ku ci gaba da nema", bullets: ["Takardun nema da yawa kowane mako", "Ku bibiyi mai ɗaukar aiki, aiki, rana da mataki na gaba", "Ku sake tuntuɓa bayan kusan mako ɗaya"] },
            { title: "Idan tambayar tarihin laifi ta zo", bullets: ["Ku san dokar fair chance ta yankinku", "Ku faɗi gaskiya: ƙarya na iya sa ku rasa aikin daga baya"] },
            { title: "Amsarku mai sassa uku", bullets: ["Abin da ya faru: jimla ɗaya, ba hujjoji", "Abin da kuka yi tun daga lokacin", "Dalilin da yasa kuka shirya don wannan aikin"] },
            { title: "Ku kawo shaida", bullets: ["Takardun shaida da wasiƙar shaida", "Bayanan WOTC da bonding", "Ku gwada da AI, amma babu bayanan sirri"] }
          ],
          tryIt: "Aikin ƙarshe: ku yi tsarin gidaje da aiki a shafi ɗaya tare da zaɓuɓɓukan gidaje biyu, jerin takardun fayil ɗin hayarku, American Job Center mafi kusa da ku, masu ɗaukar aiki na dama ta biyu ko damar aiki uku, da jimlolinku biyu game da WOTC da bonding. Sannan ku faɗi amsarku mai sassa uku game da tarihinku da babbar murya sau ɗaya.",
          youCanNow: "neman ayyukan dama ta biyu, bibiyar takardun neman aikinku, da amsa tambayoyi game da tarihinku da gaskiya da natsuwa.",
          quickCheck: [
            { objective: "O6", q: "Mene ne sassa uku na amsa mai kyau game da tarihinku?", options: ["Lambar shari'arku, hukuncinku da ranar sakinku", "Abin da ya faru, abin da kuka yi tun daga lokacin da dalilin da yasa kuka shirya", "Wane ne ke da laifi, yadda ba a yi adalci ba da tsawon lokacin da ya wuce", "Babu komai, domin bai kamata ku amsa ba"], answer: 1, why: "Amsa gajeriya ta gaskiya mai sassa uku tana nuna ci gaba da shiri." },
            { objective: "O6", q: "Kuna son AI ya taimaka muku ku gwada amsoshin hira. Me za ku yi?", options: ["Ku rubuta lambobin shari'arku don ya san tarihinku", "Ku liƙa dukan tarihinku a cikinsa", "Ku yi amfani da kalmomi na gama-gari, ku bar lambobin shari'a a waje", "Ku nemi ya ƙirƙiro muku tarihi mai tsabta"], answer: 2, why: "Kuna iya gwadawa da AI ba tare da raba bayanan sirri na shari'arku ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Neman aikin dama ta biyu",
        questions: [
          { objective: "O4", q: "A ina za ku iya nemo American Job Center mafi kusa da ku?", options: ["Kasuwar zamani (mall)", "Mai gidanku", "CareerOneStop (careeronestop.org) ko 211", "Tes daga baƙo"], answer: 2, why: "CareerOneStop, shafin Department of Labor, da 211 suna iya nuna muku ofishin aiki." },
          { objective: "O5", q: "Wane ne ke samun Work Opportunity Tax Credit?", options: ["Mai ɗaukar aiki", "Mai neman aiki, a matsayin kuɗi hannu", "Ofishin parole", "Mai gida"], answer: 0, why: "WOTC rangwamen haraji ne ga masu ɗaukar aiki da ke ɗaukar mutane daga wasu rukunoni." },
          { objective: "O5", q: "Me Federal Bonding Program ke ba mai ɗaukar aiki?", options: ["Mota kyauta", "Bashi", "Takardar biyan haraji", "Bond kyauta na watanni shida na farko na aikin"], answer: 3, why: "Shirin yana ba da fidelity bond kyauta da ke rufe watanni shida na farko." },
          { objective: "O6", q: "Mai hira yana tambaya game da tarihin laifinku. Wace hanya ce mafi kyau?", options: ["Ku musanta", "Ku faɗi gaskiya: abin da ya faru, abin da kuka yi tun daga lokacin, dalilin da yasa kuka shirya", "Ku yi fushi", "Ku bar hirar"], answer: 1, why: "Amsa gajeriya ta gaskiya da ke mai da hankali kan canji da shiri tana gina amincewa." },
          { objective: "O6", q: "Wanne ne kada ku TAƁA rubutawa mataimakin AI yayin da kuke gwada hirar neman aiki?", options: ["\"Ka yi mini tambayar hira da aka saba yi\"", "\"Ka gajarta amsata\"", "Lambobin shari'arku", "\"Ka ba ni ra'ayinka\""], answer: 2, why: "Lambobin shari'a da sauran bayanan sirri su kasance a waje da kayan AI." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Neman Gidan Zama da Ayyukan Dama ta Biyu",
    questions: [
      { objective: "O1", q: "Mene ne 211?", options: ["Hidima kyauta ta sirri da ke haɗa ku da taimakon yankinku", "Layin 'yan sanda", "Banki", "Shafin tallar aiki"], answer: 0, why: "211 yana haɗa mutane da taimakon gidaje, abinci da sauran taimako na yankinsu." },
      { objective: "O1", q: "Gidan wucin gadi (transitional housing) shi ne:", options: ["Otal na masu yawon buɗe ido", "Gida na ɗan lokaci mai tallafi, sau da yawa don mutanen da ke dawowa gida", "Ɗakin ajiyar kaya", "Mota"], answer: 1, why: "Gidan wucin gadi mataki ne na ɗan lokaci mai tallafi." },
      { objective: "O1", q: "Kuna kan parole kuma kun sami ɗakin haya. Me ya kamata ku yi kafin ku sa hannu?", options: ["Ku sa hannu nan take", "Ku ɓoye shi", "Ku tabbatar cewa jami'inku ya amince da adireshin", "Ku biya baƙo kuɗi hannu"], answer: 2, why: "Parole ko probation yana iya buƙatar jami'inku ya amince da inda kuke zama." },
      { objective: "O1", q: "Jerin masu jiran gidajen gwamnati yana iya yin tsawo. Mene ne hikima?", options: ["Kada ku taɓa nema", "Ku nema sai kun rasa gida kawai", "Ku nema sau ɗaya ku canja lambar wayarku", "Ku nema da wuri, ku riƙa sabunta bayanan tuntuɓarku"], answer: 3, why: "Shiga jeri da wuri da kasancewa ana iya samun ku yana kiyaye matsayinku." },
      { objective: "O2", q: "Wanne ne ƙin da ya zama dole a gidajen gwamnatin tarayya?", options: ["Rajistar mai laifin jima'i har tsawon rayuwa", "Kowace tarar laifin hanya", "Rashin aiki", "Samun 'ya'ya"], answer: 0, why: "Dokokin tarayya sun wajabta ƙin duk wanda ke ƙarƙashin rajistar mai laifin jima'i har tsawon rayuwa." },
      { objective: "O2", q: "Don yawancin sauran tarihin laifi, wane ne ke yanke shawara kan takardar neman gidan gwamnati?", options: ["FBI", "Public Housing Agency na yankinku, da manufarsa", "Maƙwabtanku", "Mai neman gidan"], answer: 1, why: "Ban da ƙin da ya zama dole, ofishin gidaje ne ke yanke shawara da rubutacciyar manufarsa." },
      { objective: "O2", q: "Ofishin gidajen gwamnati zai iya karɓar kuɗi daga gare ku don duba tarihin laifinku?", options: ["E, kowane adadi", "A ƙarshen mako kawai", "A'a, ba zai iya karɓar kuɗi daga gare ku ba", "Kuɗi hannu kawai"], answer: 2, why: "Dokar ta ce ofishin ba zai iya karɓar kuɗi daga mai nema don duba tarihi ba." },
      { objective: "O2", q: "Shin tarihin laifi rukunin da doka ke karewa ne a ƙarƙashin Fair Housing Act na tarayya?", options: ["E, koyaushe", "Don tallafin haya kawai", "A lokacin rani kawai", "A'a; dokokin jiha da birni suna iya ƙara kariya"], answer: 3, why: "Fair Housing Act na tarayya bai jera tarihin laifi a matsayin rukunin da doka ke karewa ba." },
      { objective: "O2", q: "A California, wani mai gida yana son ya ƙi duk mai kowane tarihin laifi. Wannan:", options: ["Ba a yarda ba: hana kowa gaba ɗaya ba a yarda da shi ba", "Doka ce ta wajabta", "Manufa ce mai kyau", "An yarda a gidajen bene kawai"], answer: 0, why: "California ba ta yarda a hana duk mai tarihin laifi gaba ɗaya ba." },
      { objective: "O3", q: "Wanne ya kamata ya kasance a cikin fayil ɗin haya?", options: ["Lambar katin Social Security ɗinku a rubuce a bango", "Shaidar samun kuɗi da wasiƙun shaida", "Kalmar sirrin bankinku", "Babu komai"], answer: 1, why: "Shaidar samun kuɗi da wasiƙun shaida suna amsa manyan damuwar mai gida." },
      { objective: "O3", q: "Ƙa'idar da shirye-shirye da yawa ke amfani da ita game da haya ita ce:", options: ["Dukan kuɗin shigarku", "Ninki biyu na kuɗin shigarku", "Kusan kashi ɗaya cikin uku na kuɗin shigarku ko ƙasa da haka", "Haya ba ta da muhimmanci"], answer: 2, why: "Riƙe haya kusan kashi ɗaya cikin uku na kuɗin shiga ko ƙasa yana barin kuɗi don sauran buƙatu." },
      { objective: "O3", q: "Mene ne alamar zambar haya?", options: ["Kun ga wurin da idanunku tukuna", "Kun samu rubutacciyar yarjejeniyar haya", "Mai gida ya ba da rasit", "Suna son biya ta wire kafin ku ga wurin"], answer: 3, why: "Biya ta wire ko katin kyauta kafin ganin wurin sanannar zamba ce." },
      { objective: "O4", q: "Me American Job Center ke bayarwa?", options: ["Taimako kyauta wajen neman aiki, résumé da horo", "Motoci kyauta", "Bashin hutu", "Takardun mallakar gida"], answer: 0, why: "American Job Centers ofisoshin gwamnati ne da ke taimakawa da aiki da horo." },
      { objective: "O4", q: "Wace tambaya ce mai kyau a yi a ofishin aiki?", options: ["Za ku iya yi wa masu ɗaukar aiki ƙarya a madadina?", "Waɗanne masu ɗaukar aiki a nan ke ɗaukar masu tarihin laifi?", "Zan iya ƙin zuwa aiki?", "Za ku iya biyan hayata har abada?"], answer: 1, why: "Ofisoshin aiki sau da yawa sun san masu ɗaukar aiki na dama ta biyu a yankin." },
      { objective: "O4", q: "Mai ɗaukar aiki na dama ta biyu shi ne:", options: ["Mai ɗaukar aiki da ke ɗaukar aiki sau ɗaya kawai", "Gidan yarin gwamnati", "Kamfani da ke shirye ya ɗauki masu tarihin laifi aiki", "Aikin wucin gadi da ba ya biya"], answer: 2, why: "Masu ɗaukar aiki na dama ta biyu suna shirye su ɗauki mutane masu tarihin laifi aiki." },
      { objective: "O5", q: "Wace takardar IRS ce ke fara aikin WOTC?", options: ["Form 1040", "Form W-2", "Form 1099", "Form 8850"], answer: 3, why: "Ana cike Form 8850 a ranar tayin aiki ko kafin ta." },
      { objective: "O5", q: "Kafin ku faɗa wa mai ɗaukar aiki game da WOTC, ya kamata ku:", options: ["Duba irs.gov don ganin ko yana aiki yanzu", "Yi masa alƙawarin wani adadin kuɗi", "Cike masa harajinsa", "Bar shi"], answer: 0, why: "Rangwamen yana da ranar ƙarewa kuma dole doka ta sabunta shi, don haka ku duba halin da yake ciki yanzu." },
      { objective: "O5", q: "Nawa bond na Federal Bonding Program ke ci wa mai ɗaukar aiki?", options: ["$500", "Babu komai; kyauta ne", "Rabin albashinku", "$5,000"], answer: 1, why: "Bond ɗin kyauta ne ga mai ɗaukar aiki da mai neman aiki; $5,000 shi ne iyakar abin da yake rufewa." },
      { objective: "O5", q: "Wane ne ke shirya federal bond a jiharku?", options: ["Mai gidanku", "Banki", "Mai shirya bonding na jiharku", "Likitanku"], answer: 2, why: "Masu shirya bonding na jihohi, waɗanda aka jera a bonds4jobs.com, su ke shirya bond." },
      { objective: "O6", q: "Hanya mafi kyau ta amsa tambaya game da tarihinku ita ce:", options: ["Ku ce bai taɓa faruwa ba", "Ku ba da labarin dukan rayuwarku", "Ku canja magana", "Ku faɗi a taƙaice abin da ya faru, abin da kuka yi tun daga lokacin da dalilin da yasa kuka shirya"], answer: 3, why: "Amsa gajeriya ta gaskiya mai sassa uku tana gina amincewa kuma tana komawa kan ƙwarewarku." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      5,
      7,
      9,
      11,
      12,
      13,
      17,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Zaɓuɓɓukan gidaje",
        objective: "O1",
        notYet: "Ƙasa da zaɓuɓɓuka biyu, ko babu bayanan tuntuɓa.",
        meets: "Zaɓuɓɓukan gidaje biyu tare da bayanan tuntuɓa da abin da za a kawo.",
        exceeds: "Ya kuma rubuta kuɗi da dokoki, da cewa an tabbatar da adireshin da parole idan ana buƙata."
      },
      {
        name: "Jerin takardun fayil ɗin haya",
        objective: "O3",
        notYet: "Babu jeri.",
        meets: "Jerin takardun da kuke da su da waɗanda har yanzu kuke buƙata.",
        exceeds: "Ya haɗa da daftarin farko na gajeriyar wasiƙa game da abin da kuka yi tun daga lokacin."
      },
      {
        name: "Taimakon aiki da damar aiki",
        objective: "O4",
        notYet: "Babu ofishin aiki, ko ƙasa da damar aiki uku.",
        meets: "American Job Center mafi kusa da masu ɗaukar aiki na dama ta biyu ko damar aiki uku.",
        exceeds: "Ya haɗa da tambayoyin da za ku yi a ziyararku ta farko."
      },
      {
        name: "Jimloli ga mai ɗaukar aiki",
        objective: "O5",
        notYet: "Babu jimloli, ko suna alƙawarin wani adadin kuɗi.",
        meets: "Jimloli biyu game da WOTC da Federal Bonding Program.",
        exceeds: "Ya kuma ambaci mai shirya bonding na jiha, kuma ya nuna cewa an duba WOTC a irs.gov."
      },
      {
        name: "Amsa game da tarihinku",
        objective: "O6",
        notYet: "Ba a gwada ba, ko ta yi tsawo, tana ɗora laifi, ko ba gaskiya ba ce.",
        meets: "An faɗe ta da babbar murya sau ɗaya: abin da ya faru, abin da kuka yi tun daga lokacin, dalilin da yasa kuka shirya.",
        exceeds: "Gajeriya, cikin natsuwa, kuma an gwada ta fiye da sau ɗaya."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka shiga gida mai ɗorewa ko na wucin gadi cikin kwanaki 90 (binciken biyo baya)",
      "Masu koyo da suka ziyarci American Job Center ko suka samu aiki cikin kwanaki 90",
      "Masu ɗaukar aiki da suka yi amfani da WOTC ko federal bond don ɗaukar mai koyo, kamar yadda abokan aiki suka bayar da rahoto"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya don kiran 211 da ofisoshin aiki, ko kwamfuta mai intanet",
      "Takarda da alƙalami, ko fayil, don tsarin da fayil ɗin haya",
      "Kusan minti 60 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku shirya lambar 211 ta yankinku, American Job Center mafi kusa da mai shirya bonding na jiha kafin zaman.",
      "Ku gwada amsar tarihin laifi mai sassa uku bibbiyu; tana gina ƙarfin gwiwa da sauri.",
      "Dokoki sun bambanta a kowace jiha da birni; ku tura tambayoyin shari'a ga legal aid ko mai ba da shawara ga masu dawowa gida.",
      "Ku tunatar da masu koyo da ke kan parole ko probation su fara tabbatar da kowane sabon adireshi da jami'insu.",
      "Ku ba da maki ga tsarin da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
