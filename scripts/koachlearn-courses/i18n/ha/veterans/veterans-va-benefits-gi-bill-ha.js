"use strict";

// Koach Learn course, Hausa (ha) translation of veterans/veterans-va-benefits-gi-bill.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// US course: VA, form numbers, phone numbers and program names stay as in the English.

module.exports = {
  id: "veterans-va-benefits-gi-bill-ha",
  lang: "ha",
  translationOf: "veterans-va-benefits-gi-bill",
  category: "Veterans (military)",
  name: "Tallafin VA da GI Bill",
  skills: "Shirya takardunku, Shigar da buƙatar diyyar nakasa, Neman kiwon lafiya na VA, Fahimtar GI Bill, Neman tallafin karatu, Samun taimako kyauta daga VSO da VA ta amince da shi",
  outcome: "yin shirin aiki na tallafin VA ku fara aiwatar da shi: tattara takardunku, neman diyyar nakasa, kiwon lafiya ko GI Bill ta hanyar da ta dace, da samun taimako kyauta daga jami'in hidimar tsofaffin sojoji (VSO) da VA ta amince da shi, maimakon biyan wani don ya shigar muku.",
  about: [
    "Wannan kwas na tsofaffin sojoji ne, da sojojin da ke shirin barin aiki, da 'yan iyali masu taimaka musu. Tsofaffin sojoji da yawa ba sa taɓa neman tallafin da suka cancanta, ko suna jira shekaru, domin hanyar tana kama da mai ruɗarwa.",
    "Za ku tattara takardun da VA (Ma'aikatar Kula da Tsofaffin Sojoji ta Amurka) take nema, ku koyi hanyoyin shigar da buƙatar diyyar nakasa da neman kiwon lafiya, ku koyi abin da GI Bill zai iya biya da yadda ake nema, kuma ku nemo wakili kyauta da VA ta amince da shi don ya taimake ku. Za ku kuma koyi alamun gargaɗi na mutanen da ke karɓar kuɗi don shigar da buƙata.",
    "Kowane darasi yana ɗaukar kusan minti biyar, kuma yana ƙarewa da aikin \"Gwada yanzu\". Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Dokokin VA, fom-fom da lokutan aiki suna canjawa, don haka ku tabbatar da bayanai a va.gov ko wurin wakilin da VA ta amince da shi kafin ku shigar."
  ],
  finalTask: "Ku yi shirin aikinku na tallafin VA: (1) jerin takardunku, farawa da DD214 ɗinku; (2) kowane tallafi da za ku nema (diyyar nakasa, kiwon lafiya, karatu) da yadda za ku nema; (3) idan za ku yi amfani da GI Bill, wane shiri, wace makaranta ko horo, da abin da kuke buƙata don shi; (4) suna da hanyar tuntuɓar wakili ko VSO da VA ta amince da shi da kuka samo da kayan bincike na VA; (5) alamun gargaɗi uku na wanda bai kamata a biya shi don shigar da buƙatarku ba. Sannan ku ɗauki matakin farko kan tallafi ɗaya.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Tsofaffin sojoji, sojojin da ke shirin barin aiki, da 'yan iyali masu taimaka musu. Da yawa ba su taɓa neman tallafin da suka cancanta ba, ko sun jira shekaru domin hanyar tana kama da mai ruɗarwa.",
    startingPoint: "Suna iya amfani da waya ko kwamfuta, kuma suna da DD214 ko za su iya nema. Yawancinsu ba su san fom-fom da za su yi amfani da su ba, yadda ake kare ranar fara buƙata, bambancin shirye-shiryen GI Bill, ko cewa taimakon wakilan da VA ta amince da su kyauta ne.",
    gap: "Tsofaffin sojoji suna rasa kuɗi da kulawa saboda rashin nema, wuce ranar ƙarshe, ko biyan mutanen da bai kamata su karɓi kuɗi don shigar da buƙata ba. Masu koyo suna buƙatar shirin aiki a sarari: takardu a shirye, hanyar da ta dace ta neman kowane tallafi, shirin GI Bill, da wakili kyauta da VA ta amince da shi.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kalmomin VA",
      "Na'urori: waya ko kwamfuta; an kuma yi bayanin neman da takarda",
      "Sirri: babu lambar Social Security, bayanan lafiya ko bayanan shiga va.gov a cikin AI chatbot ko wurin masu taimako da VA ba ta amince da su ba",
      "Fom-fom, dokoki da lambobin waya suna canjawa, don haka masu koyo suna tabbatar da su a va.gov kafin su yi aiki",
      "Shawarwarin lafiya da na shari'a suna zuwa wurin VA ko wakilin da VA ta amince da shi, ba kwas ɗin ba"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Kafin ku nemi kowane tallafin VA", action: "tattara takardun da VA take nema, farawa da DD214 ɗinku, da rubuta jerin tallafin da za ku iya nema", standard: "tare da alamar takardun da suka ɓace, da ajiye kwafi a wuri mai aminci" },
    { id: "O2", condition: "Don cututtukan da kuke ganin suna da alaƙa da aikin sojanku", action: "zaɓar yadda za ku shigar da buƙatar diyyar nakasa da rubuta shaida ga kowace cuta", standard: "ta amfani da hanyar hukuma ta shigarwa da kare ranar fara buƙatarku" },
    { id: "O3", condition: "Ta amfani da jerin atisaye", action: "shirya bayanan neman kiwon lafiya na VA (10-10EZ) da zaɓar yadda za ku nema", standard: "tare da tarihin aikin soja, abubuwa masu cutarwa da kuka haɗu da su, inshora da kuɗin shiga, kowanne da alamar \"a shirye\" ko \"har yanzu ana buƙata\"" },
    { id: "O4", condition: "Idan aka ba ku burin aikinku", action: "bayyana manyan shirye-shiryen GI Bill da nau'o'in horo biyu da za su iya biya", standard: "tare da ambaton horon da ya dace da burinku" },
    { id: "O5", condition: "Idan aka ba ku makarantu ko shirye-shiryen horo biyu", action: "kwatanta su a GI Bill Comparison Tool da shirya neman tallafin karatunku", standard: "tare da bayanai biyu game da kowanne, da duba takardar nemanku kafin ku tura ta" },
    { id: "O6", condition: "Idan kuna son taimako da buƙatarku", action: "nemo wakili kyauta da VA ta amince da shi da gane alamun gargaɗi na wanda bai kamata a biya shi ba", standard: "tare da rubuta sunan wakili da hanyar tuntuɓarsa, da alamun gargaɗi uku" }
  ],
  chapters: [
    {
      name: "Babi na 1: Neman tallafin VA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Shiri: takardunku da jerin tallafinku",
          minutes: 5,
          goal: "Tattara takardun da VA take nema, da rubuta jerin tallafin da za ku iya nema.",
          text: [
            "Tallafin VA abubuwa ne da kuka cancanta ta aikin sojanku. Na yau da kullum sun haɗa da diyyar nakasa (kuɗi duk wata saboda cututtukan da aikin soja ya jawo ko ya ƙara tsanantawa), kiwon lafiya na VA, tallafin karatu kamar GI Bill, da Veteran Readiness and Employment (shirin shiryawa da samun aiki). Akwai wasu, kamar taimakon lamunin gida, fansho da tallafin jana'iza. Kowanne yana da nasa dokoki.",
            "Takarda mafi muhimmanci ita ce DD214 ɗinku ko wasu takardun barin aiki. VA tana amfani da ita don tabbatar da aikin sojanku. Ku ajiye kwafi a wuri mai aminci. Idan ba ku samu taku ba, va.gov tana bayanin yadda ake neman bayanan aikin sojanku.",
            "Wasu abubuwan da VA za ta iya nema: lambar Social Security ɗinku, bayanan banki don karɓar kuɗi kai tsaye, bayanan lafiyarku da sunayen likitocinku, bayanai game da matarku ko mijinku da masu dogaro da ku, katunan inshora, da kuɗin shigarku na bara don wasu shawarwarin kiwon lafiya.",
            "Ku buɗe asusun shiga a va.gov don ku iya nema ta intanet, ku ɗora takardu, ku kuma duba yadda abubuwa suke tafiya. Ku yi amfani da shafin hukuma kaɗai. Kada ku ba kowa bayanan shigarku, kuma kada ku taɓa rubuta lambar Social Security ko bayanan lafiyarku a cikin AI chatbot."
          ],
          steps: ["Ku nemo DD214 ɗinku ko wasu takardun barin aiki, ku yi kwafi.", "Ku tattara bayanan lafiya da jerin likitocinku.", "Ku rubuta tallafin da kuke son dubawa: nakasa, kiwon lafiya, karatu, da sauransu.", "Ku buɗe asusun shiga a va.gov.", "Ku ajiye komai a fayil ɗaya."],
          words: [["DD214", "takardar da ke nuna aikin sojanku da yadda kuka bar aiki."], ["Diyyar nakasa (disability compensation)", "kuɗi duk wata, ba tare da haraji ba, saboda cututtukan da aikin soja ya jawo ko ya ƙara tsanantawa."], ["Mai dogaro da ku (dependent)", "mata ko miji, yaro ko wani ɗan iyali da ke dogaro da ku."]],
          slides: [
            { title: "Tallafin da kuka cancanta", bullets: ["Diyyar nakasa", "Kiwon lafiya na VA", "Karatu: GI Bill", "Veteran Readiness and Employment, da sauransu"] },
            { title: "Takardarku mafi muhimmanci", bullets: ["DD214 ko wasu takardun barin aiki", "Ku ajiye kwafi a wuri mai aminci", "Ta ɓace? va.gov tana bayanin yadda ake neman bayanai"] },
            { title: "Wasu abubuwan da VA za ta iya nema", bullets: ["Bayanan lafiya da likitoci", "Bayanan mata ko miji da masu dogaro da ku", "Bayanan banki don karɓar kuɗi kai tsaye"] },
            { title: "Asusunku na va.gov", bullets: ["Ku nema, ku ɗora takardu, ku duba matsayi ta intanet", "Ku yi amfani da shafin hukuma kaɗai", "Kada ku taɓa ba kowa bayanan shigarku"] }
          ],
          sources: [{ name: "VA: Yadda ake shigar da buƙatar diyyar nakasa", url: "https://www.va.gov/disability/how-to-file-claim/" }],
          tryIt: "Ku yi fayil (na takarda ko fayil mai tsaro a kwamfutarku) ku saka a ciki, ko ku rubuta abin da ya rage: DD214 ɗinku, bayanan lafiya, jerin likitocinku da bayanan masu dogaro da ku. Ku rubuta tallafin da kuke son dubawa.",
          youCanNow: "tattara takardun da VA take nema da rubuta jerin tallafin da za ku iya nema.",
          quickCheck: [
            { objective: "O1", q: "Me yasa za ku ajiye kwafin DD214 ɗinku a wuri mai aminci?", options: ["Don ku saka ta a intanet", "Don AI ya karanta ta", "VA tana amfani da ita don tabbatar da aikin sojanku, kuma za ku sake buƙatarta", "Tana ƙarewa bayan shekara ɗaya"], answer: 2, why: "DD214 ɗinku tana tabbatar da aikin sojanku don tallafi da yawa, don haka ku ajiye kwafi lafiya." },
            { objective: "O1", q: "Kuna son AI chatbot ya taimake ku fahimtar tallafinku. Me za ku bari a waje?", options: ["Lambar Social Security ɗinku da bayanan lafiyarku", "Sunan tallafin", "Kalmar \"tsohon soja\"", "Tambayarku"], answer: 0, why: "Lambobin sirri da bayanan lafiya ba sa shiga AI chatbot ko kaɗan." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Shigar da buƙatar diyyar nakasa",
          minutes: 6,
          goal: "Zaɓi yadda za ku shigar da buƙatar diyyar nakasa ku kuma kare ranar farawarku.",
          text: [
            "Kuna iya shigar da buƙatar diyyar nakasa ta intanet a va.gov, ta gidan waya da VA Form 21-526EZ, da kanku a ofishin VA na yanki, ko tare da taimakon wakilin da VA ta amince da shi. VA ta ce fara fom ɗin ta intanet yana saita ranar fara aiki (effective date) ɗinku kai tsaye.",
            "Ranar fara aiki tana da muhimmanci domin tana iya yanke daga lokacin da za a fara ƙirga kuɗinku. Idan kun fara ta intanet, VA za ta yi amfani da ranar da kuka fara a matsayin ranar buƙatarku, muddin kun gama cikin kwanaki 365. Idan kuna shigarwa da takarda, kuna iya fara tura sanarwar niyyar shigarwa (intent to file) don riƙe yiwuwar ranar fara aiki yayin da kuke tattara shaida.",
            "Shaida ita ce ke sa buƙata ta yi nasara ko ta faɗi. VA tana duba DD214 ko takardun barin aiki, da bayanan jinyar ku a lokacin aikin soja. Ku ƙara abin da kuke da shi: bayanan likitanku na kanku, da bayanan rubutu daga gare ku ko daga mutanen da suka ga yadda cutar take shafar ku. Ku rubuta kowace cuta da kuke ganin tana da alaƙa da aikin sojanku.",
            "Bayan kun shigar, VA za ta iya sa muku ranar gwajin lafiya. Ku je. Ku duba matsayin buƙatarku a va.gov. VA tana bayyana matsakaicin lokacin da take ɗauka, wanda yake canjawa, don haka ku duba va.gov don sabon adadin. Idan ba ku yarda da hukunci ba, akwai hanyoyin neman a sake dubawa; wakilin da VA ta amince da shi zai iya taimakawa."
          ],
          steps: ["Ku yanke yadda za ku shigar: ta intanet, ta gidan waya (VA Form 21-526EZ), da kanku, ko tare da wakilin da VA ta amince da shi.", "Idan ta intanet ne, ku fara fom ɗin don saita ranarku, ku gama cikin kwanaki 365.", "Idan da takarda ne, ku yi tunanin fara tura sanarwar niyyar shigarwa (intent to file).", "Ku rubuta kowace cuta ku tattara shaidarku.", "Ku je kowane gwajin lafiya na VA, ku duba matsayinku a va.gov."],
          words: [["Ranar fara aiki (effective date)", "ranar da VA take amfani da ita don yanke daga lokacin da za a fara ƙirga kuɗin tallafinku."], ["Sanarwar niyyar shigarwa (intent to file)", "sanarwa ga VA cewa kuna shirin shigar da buƙata, wadda za ta iya riƙe ranar fara aikinku yayin da kuke tattara shaida."], ["Shaida (evidence)", "bayanai da rubuce-rubucen da ke goyon bayan buƙatarku."], ["Alaƙa da aikin soja (service connection)", "dangantaka tsakanin wata cuta da aikin sojanku."]],
          slides: [
            { title: "Hanyoyi huɗu na shigarwa", bullets: ["Ta intanet a va.gov", "Ta gidan waya: VA Form 21-526EZ", "Da kanku a ofishin VA na yanki", "Tare da wakilin da VA ta amince da shi"] },
            { title: "Ku kare ranar farawarku", bullets: ["Intanet: ranar farawa tana ƙirguwa idan kun gama cikin kwanaki 365", "Takarda: ku yi tunanin fara tura intent to file"] },
            { title: "Shaida ce ke cin buƙata", bullets: ["DD214 da bayanan jinya na lokacin aikin soja", "Bayanan likitanku na kanku", "Bayanan rubutu daga gare ku da shaidu"] },
            { title: "Bayan kun shigar", bullets: ["Ku je gwajin lafiyarku na VA", "Ku duba matsayi a va.gov", "Ba ku yarda ba? Ku tambayi wakili da VA ta amince da shi game da sake dubawa"] }
          ],
          sources: [{ name: "VA: Yadda ake shigar da buƙatar diyyar nakasa", url: "https://www.va.gov/disability/how-to-file-claim/" }],
          tryIt: "Ku rubuta kowace cutar lafiya da kuke ganin tana iya kasancewa da alaƙa da aikin sojanku. A gefen kowacce, ku rubuta shaida ɗaya da kuke da ita ko za ku iya samu. Sannan ku yanke hanyar da za ku bi wajen shigarwa, ku rubuta ta a sama.",
          youCanNow: "zaɓar yadda za ku shigar da buƙatar diyyar nakasa, kare ranar fara aikinku da tattara shaida ga kowace cuta.",
          quickCheck: [
            { objective: "O2", q: "Wace ce hanyar hukuma ta shigar da buƙatar diyyar nakasa?", options: ["Tura tes ga baƙon da ke cewa zai taimaka", "Saka rubutu a ƙungiyar kafofin sada zumunta", "Aika imel ga kamfanin da ke karɓar kaso", "Ta intanet a va.gov"], answer: 3, why: "Shigarwa ta intanet a va.gov ɗaya ce daga cikin hanyoyin hukuma na VA." },
            { objective: "O2", q: "Kun rubuta ciwon gwiwa daga aikin soja. Me za ku rubuta a gefensa?", options: ["Babu komai; VA za ta nemo komai", "Shaida ɗaya, kamar bayanan jinya na aikin soja ko na likita", "Hasashen matakin nakasarku (rating)", "Kalmar sirrinku ta va.gov"], answer: 1, why: "Kowace cuta tana buƙatar shaida, kamar bayanan jinya na aikin soja ko na likita." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Neman kiwon lafiya na VA",
          minutes: 4,
          goal: "Nemi kiwon lafiya na VA tare da bayanan da suka dace a shirye.",
          text: [
            "Kiwon lafiya na VA takardar nema ce daban da ta diyyar nakasa. Ana nema da VA Form 10-10EZ, wato Application for Health Benefits (takardar neman tallafin lafiya).",
            "Kuna iya nema ta intanet a va.gov, ta waya ta layin tallafin lafiya na VA a 877-222-8387 (VA ta ce Litinin zuwa Juma'a, ƙarfe 8:00 na safe zuwa 8:00 na dare, agogon Eastern), ta gidan waya, ko da kanku a asibitin VA ko asibitin shan magani. Wakilin da VA ta amince da shi ma zai iya taimakawa.",
            "Ku shirya: DD214 da tarihin aikin sojanku, har da duk wani abu mai guba ko mai haɗari da kuka haɗu da shi; lambobin Social Security naku, na matarku ko mijinku da na masu dogaro da ku da suka cancanta; katunan inshorarku, har da Medicare ko inshorar wurin aiki; da kuɗin shigar gidanku na bara. VA ta ce kuna iya barin kuɗin shiga, amma za ta iya buƙatarsa don yanke hukunci kan takardarku.",
            "Misali: wani Marine (sojan ruwa) da ya yi aiki a ƙasar waje yana da asma kuma yana son likitan kulawa ta farko. Ya nemi kiwon lafiya ta intanet a makon da ya shigar da buƙatar diyyar nakasarsa, ya rubuta tarihin abubuwa masu cutarwa da ya haɗu da su, kuma ya ɗauki ranar ganin likita ta farko da zarar an yi masa rajista."
          ],
          steps: ["Ku tattara DD214, tarihin abubuwa masu cutarwa da kuka haɗu da su, lambobin Social Security da katunan inshora.", "Ku rubuta kuɗin shigar gidanku na bara.", "Ku nema ta intanet a va.gov, ta waya a 877-222-8387, ta gidan waya, ko da kanku.", "Ku jira hukuncin VA, ku ɗauki ranar ganin likita ta farko."],
          words: [["VA Form 10-10EZ", "takardar neman tallafin lafiya na VA."], ["Haɗuwa da abu mai guba (toxic exposure)", "haɗuwa a lokacin aikin soja da abubuwa masu cutarwa kamar ramin ƙona shara (burn pits), sinadarai ko hasken nukiliya (radiation)."]],
          slides: [
            { title: "Takardar nema ce daban", bullets: ["Kiwon lafiya ba ɗaya yake da buƙatar diyyar nakasa ba", "Fom: VA Form 10-10EZ"] },
            { title: "Hanyoyin nema", bullets: ["Ta intanet a va.gov", "Waya: 877-222-8387", "Gidan waya, ko da kanku a cibiyar VA"] },
            { title: "Ku shirya", bullets: ["DD214 da tarihin abubuwa masu cutarwa", "Lambobin Social Security da katunan inshora", "Kuɗin shigar gidanku na bara"] }
          ],
          sources: [{ name: "VA: Yadda ake neman kiwon lafiya na VA", url: "https://www.va.gov/health-care/how-to-apply/" }],
          tryIt: "Ku cike jerin atisaye don 10-10EZ: DD214 (kuna da ita ko babu), tarihin abubuwa masu cutarwa, katunan inshora, kuɗin shigar gidanku na bara. Ku sa alama kan abin da kuke da shi da abin da har yanzu kuke buƙata, ku kuma zaɓi yadda za ku nema.",
          youCanNow: "neman kiwon lafiya na VA tare da bayanan da suka dace, da sanin hanyoyin nema.",
          quickCheck: [
            { objective: "O3", q: "Me ake yi da VA Form 10-10EZ?", options: ["Shigar da buƙatar diyyar nakasa", "Neman kiwon lafiya na VA", "Neman GI Bill", "Zaɓar VSO"], answer: 1, why: "10-10EZ ita ce takardar neman kiwon lafiya na VA." },
            { objective: "O3", q: "Kuna cike jerinku na kiwon lafiya. Me za ku saka game da aikin sojanku?", options: ["Babu komai game da aikin sojanku", "Muƙaminku kawai", "Sansanin da kuka fi so kawai", "Tarihin aikin sojanku, har da duk wani abu mai guba ko mai haɗari da kuka haɗu da shi"], answer: 3, why: "VA tana tambaya game da tarihin aikin sojanku da abubuwan da kuka haɗu da su idan kuna neman kiwon lafiya." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Neman tallafin VA",
        questions: [
          { objective: "O1", q: "Wace takarda ce VA take amfani da ita don tabbatar da aikin sojanku?", options: ["Lasisin tuƙinku", "Takardar albashi daga aikin farar hula", "DD214 ɗinku ko wasu takardun barin aiki", "Katin shiga wurin motsa jiki"], answer: 2, why: "VA tana duba DD214 ko takardun barin aiki." },
          { objective: "O2", q: "Kun fara buƙatar diyyar nakasa ta intanet amma kuna buƙatar lokaci don samun bayanai. Kwanaki nawa kuke da su don gamawa da kare ranar farawarku?", options: ["Kwanaki 365", "Kwanaki 7", "Kwanaki 30", "Babu ranar farawa"], answer: 0, why: "VA ta ce ranar da kuka fara tana ƙirguwa idan kun gama cikin kwanaki 365." },
          { objective: "O2", q: "Me ake yi da VA Form 21-526EZ?", options: ["Neman GI Bill", "Neman kiwon lafiya na VA", "Canja adireshinku", "Neman diyyar nakasa ta gidan waya"], answer: 3, why: "Ita ce Application for Disability Compensation (takardar neman diyyar nakasa)." },
          { objective: "O3", q: "Wane fom ake amfani da shi don neman kiwon lafiya na VA?", options: ["DD214", "VA Form 10-10EZ", "VA Form 22-1990", "W-2"], answer: 1, why: "10-10EZ ita ce Application for Health Benefits (takardar neman tallafin lafiya)." },
          { objective: "O2", q: "Kun shigar da buƙatar diyyar nakasa. Me kuma ya kamata ku yi?", options: ["Ku je duk wani gwajin lafiya da VA ta sa muku", "Ku yi watsi da wasiƙun VA", "Ku biya wani don ya gaggauta ta", "Ku shigar da buƙata iri ɗaya sau da yawa"], answer: 0, why: "Gwajin lafiya wani ɓangare ne na hukuncin; rashin zuwa zai iya cutar da buƙatarku." }
        ]
      }
    },
    {
      name: "Babi na 2: GI Bill da taimako kyauta",
      lessons: [
        {
          objectives: ["O4"],
          title: "Fahimtar GI Bill",
          minutes: 5,
          goal: "Ambaci manyan shirye-shiryen GI Bill da abin da za su iya biya.",
          text: [
            "GI Bill yana taimakawa wajen biyan kuɗin makaranta da horo. Babban shirin yau shi ne Post-9/11 GI Bill (Chapter 33), na mutanen da suka yi aikin soja na cikakken lokaci (active duty) bayan 10 ga Satumba, 2001. Zai iya taimakawa wajen biyan makaranta da kuɗaɗen da kuke kashewa yayin da kuke horo don aiki.",
            "Sauran shirye-shirye sun haɗa da Montgomery GI Bill Active Duty (Chapter 30) da Montgomery GI Bill Selected Reserve (Chapter 1606) na membobin sojojin ko-ta-kwana (Reserve) da National Guard. Wanda za ku iya amfani da shi ya dogara da aikin sojanku.",
            "GI Bill ba na jami'a ta shekara huɗu kaɗai ba ne. VA ta lissafa amfani kamar digiri na farko da na gaba, shirye-shiryen da ba na digiri ba, horo a wurin aiki da koyon sana'a (apprenticeship), jarabawar lasisi da takardar shaida, horon tuƙin jirgin sama, karatu ta intanet da sauransu. Yellow Ribbon Program zai iya taimakawa wajen biyan kuɗin makarantar da Post-9/11 GI Bill bai rufe ba, a makarantun da ke cikin shirin.",
            "Wasu sojoji suna iya tura ragowar tallafin Post-9/11 ga matansu ko mazajensu ko 'ya'yansu. Idan kuna da tallafin Post-9/11 tuni, ku duba nawa ya rage muku a GI Bill Statement of Benefits (bayanin tallafinku) a va.gov."
          ],
          words: [["GI Bill", "tallafin karatu na VA da ke taimakawa wajen biyan makaranta ko horo."], ["Post-9/11 GI Bill", "GI Bill na mutanen da suka yi aikin soja na cikakken lokaci bayan 10 ga Satumba, 2001 (Chapter 33)."], ["Yellow Ribbon Program", "shirin da zai iya biyan kuɗin makarantar da Post-9/11 GI Bill bai rufe ba, a makarantun da ke cikin shirin."], ["Koyon sana'a (apprenticeship)", "horo a wurin aiki da ake biyan ku, don wata sana'a ta ƙwarewa."]],
          slides: [
            { title: "Manyan shirye-shiryen GI Bill", bullets: ["Post-9/11 GI Bill (Chapter 33)", "Montgomery GI Bill Active Duty (Chapter 30)", "Montgomery GI Bill Selected Reserve (Chapter 1606)"] },
            { title: "Ba jami'a kaɗai ba", bullets: ["Digiri da shirye-shiryen da ba na jami'a ba", "Koyon sana'a da horo a wurin aiki", "Jarabawar lasisi da takardar shaida"] },
            { title: "Ƙarin taimako", bullets: ["Yellow Ribbon: kuɗin makarantar da GI Bill bai rufe ba", "Turawa ga mata ko miji ko 'ya'ya, ga wasu"] },
            { title: "Ku duba abin da ya rage muku", bullets: ["GI Bill Statement of Benefits a va.gov"] }
          ],
          sources: [{ name: "VA: Game da tallafin GI Bill", url: "https://www.va.gov/education/about-gi-bill-benefits/" }],
          tryIt: "Ku rubuta aikin da kuke so. Sannan ku rubuta nau'o'in horo biyu da GI Bill zai iya biya da za su kai ku can, misali koyon sana'ar wutar lantarki da shirin takardar shaida, ko digiri da jarabawar lasisi.",
          youCanNow: "ambaton manyan shirye-shiryen GI Bill da haɗa horon da GI Bill zai iya biya da burin aiki.",
          quickCheck: [
            { objective: "O4", q: "Da wane suna kuma ake kiran Post-9/11 GI Bill?", options: ["Chapter 33", "Form 10-10EZ", "VetCert", "Chapter 1"], answer: 0, why: "Post-9/11 GI Bill shi ne Chapter 33." },
            { objective: "O4", q: "Kuna son zama mai aikin wutar lantarki ba tare da digiri na shekara huɗu ba. Me za ku rubuta a shirinku?", options: ["GI Bill yana biyan digiri kaɗai", "Ku haƙura da GI Bill", "Koyon sana'a ko horo a wurin aiki da GI Bill zai iya taimakawa da shi", "Ku biya komai da kanku"], answer: 2, why: "GI Bill zai iya taimakawa da koyon sana'a da horo a wurin aiki, ba digiri kaɗai ba." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Neman GI Bill da zaɓar makaranta",
          minutes: 5,
          goal: "Nemi tallafin karatu ku kwatanta makarantu kafin ku yi rajista.",
          text: [
            "Ku nemi tallafin karatu ta intanet a va.gov. Idan kuna nema ta gidan waya, ku yi amfani da VA Form 22-1990, wato Application for VA Education Benefits (takardar neman tallafin karatu na VA), don Post-9/11 GI Bill da shirye-shiryen Montgomery GI Bill. 'Yan iyali da ke amfani da tallafin da aka tura musu suna amfani da wani fom daban, VA Form 22-1990e.",
            "Ku shirya: lambar Social Security ɗinku, bayanan banki don karɓar kuɗi kai tsaye, tarihin karatunku da na aikin soja, da muhimman bayanai game da makarantar ko shirin horon. VA ta ce ba za ku iya canja takardar ba bayan kun tura ta, don haka ku fara dubawa.",
            "VA ta ce tana ɗaukar kusan kwanaki 30 a matsakaici don duba buƙatun karatu, amma ku duba va.gov don lokutan yanzu. Idan an amince, VA tana aiko Certificate of Eligibility (takardar cancanta). Ku ba da kwafi ga jami'in tabbatarwa na makarantarku (certifying official), wanda sau da yawa yake a ofishin tsofaffin sojoji ko na hidimar soja.",
            "Kafin ku yi rajista, ku kwatanta makarantu da GI Bill Comparison Tool na VA (kayan kwatanta makarantu) a va.gov, ku kuma tambayi makarantar game da kuɗi, sakamakon samun aiki, da ko tana cikin Yellow Ribbon. Ku yi hankali da makarantun da ke matsa muku ku yi rajista da sauri."
          ],
          steps: ["Ku zaɓi shirinku da makaranta ko horo.", "Ku kwatanta shi da GI Bill Comparison Tool a va.gov.", "Ku tattara lambar Social Security, bayanan banki, tarihin karatu da na aikin soja.", "Ku nema ta intanet, ko ta gidan waya da VA Form 22-1990.", "Ku ba jami'in tabbatarwa na makarantar Certificate of Eligibility ɗinku."],
          words: [["Certificate of Eligibility (COE)", "wasiƙar VA da ke nuna wane tallafin karatu kuke da shi da yawansa."], ["Jami'in tabbatarwa na makaranta (school certifying official)", "mutumin da ke makaranta da yake gaya wa VA cewa kun yi rajista."], ["VA Form 22-1990", "takardar neman tallafin karatu na VA."]],
          slides: [
            { title: "Yadda ake nema", bullets: ["Ta intanet a va.gov", "Ta gidan waya: VA Form 22-1990", "'Yan iyali masu tallafin da aka tura musu: 22-1990e"] },
            { title: "Ku shirya", bullets: ["Lambar Social Security da bayanan banki", "Tarihin karatu da na aikin soja", "Bayanan makaranta ko shirin horo"] },
            { title: "Bayan kun nema", bullets: ["Kusan kwanaki 30 a matsakaici; ku duba va.gov", "Za ku sami Certificate of Eligibility", "Ku ba jami'in tabbatarwa na makarantar"] },
            { title: "Ku kwatanta kafin rajista", bullets: ["GI Bill Comparison Tool a va.gov", "Ku tambaya game da kuɗi, sakamakon aiki, Yellow Ribbon", "Ku ƙi idan ana matsa muku ku sa hannu da sauri"] }
          ],
          sources: [
            { name: "VA: Yadda ake neman GI Bill da tallafin da ke da alaƙa", url: "https://www.va.gov/education/how-to-apply/" },
            { name: "VA: GI Bill Comparison Tool", url: "https://www.va.gov/education/gi-bill-comparison-tool/" }
          ],
          tryIt: "Ku zaɓi makarantu ko shirye-shiryen horo biyu don burin aikinku. Ku nemi kowanne a GI Bill Comparison Tool a va.gov, ku rubuta bayanai biyu game da kowanne, da tambaya ɗaya da za ku yi wa ofishin tsofaffin sojoji na makarantar.",
          youCanNow: "neman tallafin GI Bill, kwatanta makarantu kafin rajista da amfani da Certificate of Eligibility ɗinku.",
          quickCheck: [
            { objective: "O5", q: "Me GI Bill Comparison Tool yake taimaka muku ku yi?", options: ["Shigar da buƙatar diyyar nakasa", "Nemo VSO", "Kwatanta makarantu da shirye-shiryen horo kafin ku yi rajista", "Canja GI Bill ɗinku bayan kun tura"], answer: 2, why: "Comparison Tool yana nuna bayanai game da makarantu da shirye-shirye don ku kwatanta su." },
            { objective: "O5", q: "Kun gama takardar neman GI Bill. Me za ku yi kafin ku tura?", options: ["Ku duba ta da kyau, domin ba za ku iya canja ta ba bayan kun tura", "Ku tura ta da sauri ku gyara daga baya", "Ku nemi baƙo ya tura ta", "Ku bar wurare babu komai"], answer: 0, why: "Ba za ku iya canja takardar ba bayan kun tura ta, don haka ku fara dubawa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Samun taimako kyauta, da guje wa masu karɓar kuɗin shigarwa",
          minutes: 5,
          goal: "Nemo wakili kyauta da VA ta amince da shi, ku kuma gane mutanen da bai kamata a biya su ba.",
          text: [
            "Ba dole ne ku shigar da buƙata ku kaɗai ba. VA tana amincewa da nau'o'in wakilai uku: wakilan Veterans Service Organization (VSO, ƙungiyar hidimar tsofaffin sojoji), lauyoyi, da wakilan buƙatu (claims agents). VA ta ce hidimar wakilin VSO da VA ta amince da shi kan buƙatarku koyaushe kyauta ce. Suna iya taimakawa wajen tattara shaida, shigar da buƙata, neman sake duba hukunci, da magana da VA a madadinku. Jihohi da gundumomi da yawa ma suna da jami'an hidimar tsofaffin sojoji.",
            "Ku nemo ɗaya da kayan bincike na VA, \"Find a VA-accredited representative or VSO\" (nemo wakili ko VSO da VA ta amince da shi), a va.gov. VA ta ce ku tabbatar duk wanda ke taimakawa da buƙatarku VA ta amince da shi kafin ku zaɓe shi.",
            "Lauyoyi da wakilan buƙatu suna iya karɓar kuɗi, amma VA ta ce sai bayan VA ta yanke hukunci kan buƙatarku ta farko, kuma sai da yarjejeniyar kuɗi da aka sa hannu. Wannan yana nufin duk wanda ya karɓi kuɗi don shigar da buƙatarku ta farko, ko ya yi alƙawarin ƙarin matakin nakasa (rating) don kuɗi, alamar gargaɗi ce. Wasu mutanen da VA ba ta amince da su ba, wani lokaci ana kiransu \"claim sharks\" (masu damfarar buƙatu), suna neman kaso daga kuɗin baya (back pay) da za ku samu, bayanan shigarku, ko kuɗi tun kafin aiki.",
            "Kada ku taɓa ba kowa bayanan shigarku na va.gov. Idan kuna ganin wani wakili ya yi abin da bai dace ba ko ya karɓi kuɗi ba bisa adalci ba, kuna iya tuntuɓar Office of General Counsel na VA (ofishin shari'a na VA), kuma dole ku yi sauri kan rikicin kuɗi."
          ],
          steps: ["Ku buɗe kayan bincike na VA, \"Find a VA-accredited representative or VSO\", a va.gov.", "Ku nema kusa da ku, ku zaɓi wakilin VSO (kyauta).", "Ku tabbatar VA ta amince da su kafin ku raba komai.", "Kada ku taɓa biyan kuɗin shigar da buƙata ta farko, kuma kada ku taɓa raba bayanan shigarku na va.gov.", "Ku kai rahoton matsala ga Office of General Counsel na VA."],
          words: [["VSO", "Veterans Service Organization: ƙungiyar da wakilanta da VA ta amince da su suke taimaka wa tsofaffin sojoji da buƙatu kyauta."], ["Wanda VA ta amince da shi (accredited)", "wanda VA ta ba izinin taimakawa da buƙatun VA."], ["Claim shark (mai damfarar buƙatu)", "mutum ko kamfani da VA ba ta amince da shi ba da ke karɓar kuɗi daga tsofaffin sojoji don shigar da buƙatu."]],
          slides: [
            { title: "Akwai taimako kyauta", bullets: ["Wakilan VSO da VA ta amince da su koyaushe kyauta ne", "Suna tattara shaida, suna shigarwa, suna magana da VA"] },
            { title: "Ku nemo ɗaya", bullets: ["Kayan bincike na VA: Find a VA-accredited representative", "Ku tabbatar VA ta amince da shi kafin ku zaɓa"] },
            { title: "Alamun gargaɗi", bullets: ["Yana karɓar kuɗi don shigar da buƙatarku ta farko", "Yana alƙawarin ƙarin matakin nakasa don kuɗi", "Yana son bayanan shigarku na va.gov ko kaso daga kuɗin baya"] },
            { title: "Ku kare kanku", bullets: ["Kada ku taɓa raba bayanan shigarku na va.gov", "Ku kai rahoton matsala ga Office of General Counsel na VA"] }
          ],
          sources: [
            { name: "VA: Tambayoyi game da wakilan da VA ta amince da su", url: "https://www.va.gov/resources/va-accredited-representative-faqs/" },
            { name: "VA: Nemo wakili ko VSO da VA ta amince da shi", url: "https://www.va.gov/get-help-from-accredited-representative/find-rep/" }
          ],
          tryIt: "Aikin ƙarshe: ku yi amfani da kayan bincike na VA, \"Find a VA-accredited representative or VSO\", don nemo wakili ɗaya kyauta kusa da ku, ku rubuta sunansa da yadda za a same shi. Sannan ku kammala shirin aikinku na tallafin VA da jerin takardunku, tallafin da za ku nema da yadda za ku nema, shirin GI Bill ɗinku idan kuna da shi, da alamun gargaɗi uku na claim sharks. Ku ɗauki matakin farko kan tallafi ɗaya.",
          youCanNow: "nemo VSO kyauta da VA ta amince da shi, gane mutanen da bai kamata a biya su don shigar da buƙata ba, da fara shirin aikinku na tallafin VA.",
          quickCheck: [
            { objective: "O6", q: "Su wane ne VA take amincewa da su don taimakawa da buƙatu?", options: ["Duk wanda ke da shafin intanet", "Duk kamfanin da ke talla ga tsofaffin sojoji", "Abokan da suka shigar a baya", "Wakilan VSO, lauyoyi da wakilan buƙatu"], answer: 3, why: "VA tana amincewa da wakilan VSO, lauyoyi da wakilan buƙatu." },
            { objective: "O6", q: "Wani mai taimako ya ce zai shigar da buƙatarku ta farko da sauri idan kun ba shi bayanan shigarku na va.gov. Me za ku yi?", options: ["Ku ba shi don ku ajiye lokaci", "Ku ƙi, ku nemo wakili kyauta da VA ta amince da shi da kayan bincike na VA", "Ku ba shi kalmar sirrinku kawai", "Ku fara biyan sa"], answer: 1, why: "Kada ku taɓa raba bayanan shigarku; akwai taimako kyauta daga wakilan da VA ta amince da su ta kayan bincike na VA." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: GI Bill da taimako kyauta",
        questions: [
          { objective: "O4", q: "Post-9/11 GI Bill na su wane ne?", options: ["Duk wanda ke zaune a Amurka", "Hafsoshi kaɗai", "Mata ko mazajen sojoji kaɗai", "Mutanen da suka yi aikin soja na cikakken lokaci bayan 10 ga Satumba, 2001"], answer: 3, why: "VA ta ce Post-9/11 GI Bill na aikin soja na cikakken lokaci ne bayan 10 ga Satumba, 2001." },
          { objective: "O4", q: "Wanne daga cikin waɗannan GI Bill zai iya taimakawa wajen biya?", options: ["Lamunin mota", "Koyon sana'a ko jarabawar lasisi", "Kuɗin haya a gidan iyayenku", "Kuɗin wayarku"], answer: 1, why: "VA ta lissafa koyon sana'a, horo a wurin aiki da jarabawar lasisi cikin amfanin GI Bill." },
          { objective: "O5", q: "Bayan an amince muku da GI Bill, wa zai sami kwafin Certificate of Eligibility ɗinku?", options: ["Mai ɗaukar sojoji (recruiter)", "Mai gidan hayarku", "Jami'in tabbatarwa na makarantarku", "Babu kowa"], answer: 2, why: "Jami'in tabbatarwa na makaranta yana amfani da ita don gaya wa VA cewa kun yi rajista." },
          { objective: "O6", q: "Nawa wakilin VSO da VA ta amince da shi yake karɓa don taimakawa da buƙatarku?", options: ["Babu komai; koyaushe kyauta ne", "Kaso daga kuɗin bayanku", "Kuɗi kafin shigarwa", "Kuɗin wata ɗaya"], answer: 0, why: "VA ta ce hidimar wakilan VSO da VA ta amince da su koyaushe kyauta ce." },
          { objective: "O6", q: "Wani kamfani ya ce zai shigar da buƙatar diyyar nakasarku ta farko akan kashi 20% na kuɗin bayanku. Mene ne wannan?", options: ["Kuɗin VA na yau da kullum", "Shirin VA", "Alamar gargaɗi; ku yi amfani da VSO kyauta da VA ta amince da shi maimakon haka", "Doka ce ta tilasta"], answer: 2, why: "Ana iya karɓar kuɗi ne kawai bayan VA ta yanke hukunci kan buƙata ta farko, da yarjejeniyar da aka sa hannu, kuma daga lauyoyi ko wakilai da VA ta amince da su kaɗai." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tallafin VA da GI Bill",
    questions: [
      { objective: "O2", q: "Mene ne diyyar nakasa?", options: ["Katin kyauta na sau ɗaya", "Kuɗi duk wata saboda cututtukan da aikin soja ya jawo ko ya ƙara tsanantawa", "Lamunin makaranta", "Tayin aiki"], answer: 1, why: "Tana biyan tsofaffin sojoji saboda cututtukan da ke da alaƙa da aikin soja." },
      { objective: "O1", q: "Me ya kamata ku yi da DD214 ɗinku?", options: ["Ku ajiye kwafi a wuri mai aminci", "Ku zubar da ita bayan kun bar aiki", "Ku saka ta a intanet", "Ku ba da ainihin takardar ga duk wanda ya nema"], answer: 0, why: "VA tana amfani da ita don tabbatar da aikin sojanku, don haka ku ajiye ta lafiya." },
      { objective: "O1", q: "A ina ya kamata ku nemi tallafin VA ta intanet?", options: ["Duk shafin da ke da tuta", "Hanyar haɗi a cikin saƙon tes", "Shafin hukuma va.gov", "Shafin kafofin sada zumunta"], answer: 2, why: "Ku yi amfani da shafin hukuma na VA kaɗai." },
      { objective: "O1", q: "Me bai kamata ku TAƁA rubutawa a AI chatbot ba?", options: ["\"Ka bayyana mene ne effective date\"", "\"Ka taimake ni in jera tambayoyi ga VSO ɗina\"", "\"Mene ne GI Bill?\"", "Lambar Social Security ɗinku ko bayanan lafiyarku"], answer: 3, why: "Ku bar bayanan sirri a waje da kayan AI." },
      { objective: "O2", q: "Wanne BA ɗaya daga cikin hanyoyin shigar da buƙatar diyyar nakasa ba ne?", options: ["Ta intanet a va.gov", "Ta gidan waya da VA Form 21-526EZ", "Da kanku a ofishin VA na yanki", "Ta tura tes ga baƙon da ke cewa zai taimaka"], answer: 3, why: "Ku shigar ta intanet, ta gidan waya, da kanku ko tare da wakilin da VA ta amince da shi." },
      { objective: "O2", q: "Kuna shirin shigarwa da takarda amma kuna buƙatar lokaci don tattara shaida. Me zai iya taimakawa wajen kare ranar fara aikinku?", options: ["Sanarwar niyyar shigarwa (intent to file)", "Jira shekaru kaɗan", "Rashin shigar da komai", "Kiran claim shark"], answer: 0, why: "Intent to file zai iya riƙe yiwuwar ranar fara aiki." },
      { objective: "O2", q: "Wace ce shaida mai kyau don buƙatar diyyar nakasa?", options: ["Hasashen abin da VA take so", "Bayanan jinya na aikin soja da bayanan likita", "Rubutu a kafofin sada zumunta", "Hukuncin buƙatar wani abokinku"], answer: 1, why: "Bayanai da bayanan rubutu na shaidu suna goyon bayan buƙatarku." },
      { objective: "O2", q: "VA ta sa ranar gwajin lafiya don buƙatarku. Ya kamata ku:", options: ["Ƙi zuwa", "Tura wani a madadinku", "Je gwajin", "Nemi claim shark ya je"], answer: 2, why: "Gwajin lafiya wani ɓangare ne na hukuncin." },
      { objective: "O3", q: "Wace takardar nema ake amfani da ita don kiwon lafiya na VA?", options: ["VA Form 10-10EZ", "VA Form 22-1990", "VA Form 21-526EZ", "DD214"], answer: 0, why: "10-10EZ ita ce Application for Health Benefits (takardar neman tallafin lafiya)." },
      { objective: "O3", q: "Idan kuna neman kiwon lafiya na VA, me za ku saka game da aikin sojanku?", options: ["Muƙaminku kawai", "Babu komai", "Sansanin da kuka fi so", "Tarihin aikin sojanku, har da duk wani abu mai guba ko mai haɗari da kuka haɗu da shi"], answer: 3, why: "VA tana neman tarihin aikin soja da abubuwan da kuka haɗu da su." },
      { objective: "O3", q: "Wace lambar waya ce VA ta bayar don taimakon neman kiwon lafiya?", options: ["911", "988", "877-222-8387", "411"], answer: 2, why: "VA ta bayar da 877-222-8387 a matsayin layin tallafin lafiya." },
      { objective: "O4", q: "Ana kuma kiran Post-9/11 GI Bill da:", options: ["Chapter 1606", "Chapter 33", "Form 10-10EZ", "DD214"], answer: 1, why: "Post-9/11 GI Bill shi ne Chapter 33." },
      { objective: "O4", q: "Wata tsohuwar soja tana son zama mai aikin wutar lantarki ba tare da digiri na shekara huɗu ba. GI Bill zai iya taimaka mata?", options: ["A'a, yana biyan jami'a ta shekara huɗu kaɗai", "Eh, zai iya taimakawa da koyon sana'a da horo a wurin aiki", "Sai idan ta koma ƙasar waje", "Na hafsoshi kaɗai"], answer: 1, why: "VA ta lissafa koyon sana'a da horo a wurin aiki cikin amfanin GI Bill." },
      { objective: "O4", q: "Yellow Ribbon Program zai iya:", options: ["Biyan kuɗin hayarku", "Maye gurbin DD214 ɗinku", "Gaggauta buƙatun diyyar nakasa", "Taimakawa wajen biyan kuɗin makarantar da Post-9/11 GI Bill bai rufe ba, a makarantun da ke cikin shirin"], answer: 3, why: "Yellow Ribbon yana taimakawa da kuɗin makarantar da ya wuce abin da GI Bill ke rufewa." },
      { objective: "O5", q: "Idan kuna neman GI Bill ta gidan waya, wane fom za ku yi amfani da shi?", options: ["VA Form 22-1990", "VA Form 10-10EZ", "VA Form 21-526EZ", "Fom ɗin haraji"], answer: 0, why: "VA Form 22-1990 ita ce Application for VA Education Benefits (takardar neman tallafin karatu)." },
      { objective: "O5", q: "Kafin ku yi rajista a makaranta da GI Bill, ya kamata ku:", options: ["Yi rajista a ranar da mai ɗaukar ɗalibai ya kira", "Ƙi kwatantawa", "Kwatanta ta da GI Bill Comparison Tool ku tambaya game da kuɗi da sakamakon samun aiki", "Biya ajiya kafin ku karanta komai"], answer: 2, why: "Kwatantawa da farko yana kare tallafinku." },
      { objective: "O5", q: "Kuna iya canja takardar neman GI Bill bayan kun tura ta?", options: ["Eh, kowane lokaci", "Eh, ta kiran makaranta", "A ƙarshen mako kaɗai", "A'a, don haka ku duba ta kafin ku tura"], answer: 3, why: "VA ta ce ba za ku iya yin canje-canje bayan kun tura ba." },
      { objective: "O6", q: "Wanne daga cikin waɗannan ne VA ta amince da shi don taimakawa da buƙatu?", options: ["Wakilan VSO, lauyoyi da wakilan buƙatu", "Kowane shafin intanet", "Duk wanda ya yi aikin soja", "Masu sayar da mota"], answer: 0, why: "Office of General Counsel na VA yana amincewa da waɗannan nau'o'i uku." },
      { objective: "O6", q: "Yaushe lauya ko wakilin buƙatu da VA ta amince da shi zai iya karɓar kuɗi?", options: ["Kafin shigar da buƙatarku ta farko", "Sai bayan VA ta yanke hukunci kan buƙatarku ta farko, kuma da yarjejeniyar kuɗi da aka sa hannu", "Kowane lokaci da suke so", "Ba a taɓa yarda ba a kowace doka"], answer: 1, why: "VA ta ce kuɗi yana iya zuwa ne kawai bayan hukuncin farko, da yarjejeniyar da aka sa hannu." },
      { objective: "O6", q: "Wani da ke taimakawa da buƙatarku yana neman bayanan shigarku na va.gov. Ya kamata ku:", options: ["Ba shi don ya yi aiki da sauri", "Rubuta su a takarda ku ba shi", "Ƙi; kada ku taɓa raba bayanan shigarku", "Canja su zuwa wani abu mafi sauƙi"], answer: 2, why: "Kada ku taɓa ba kowa bayanan shigarku na va.gov." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      3,
      5,
      8,
      9,
      12,
      15,
      18,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Jerin takardu",
        objective: "O1",
        notYet: "Babu jeri, ko DD214 ba ta cikinsa.",
        meets: "Jeri da ya fara da DD214, da alamar takardun da suka ɓace.",
        exceeds: "Yana rubuta inda kowace takarda take, da yadda za a samo waɗanda suka ɓace."
      },
      {
        name: "Tallafi da yadda ake nema",
        objective: "O2",
        notYet: "An rubuta tallafi ba tare da yadda za a nema ba.",
        meets: "Kowane tallafi (diyyar nakasa, kiwon lafiya, karatu) tare da hanyar hukuma ta nema.",
        exceeds: "Ya haɗa da yadda mai koyo zai kare ranar farawa ko wane fom zai yi amfani da shi."
      },
      {
        name: "Shirin GI Bill",
        objective: "O5",
        notYet: "Ba a ambaci shiri ko makaranta ba, idan mai koyo zai yi amfani da GI Bill.",
        meets: "Shirin, makarantar ko horon, da abin da ake buƙata don shi.",
        exceeds: "Zaɓuɓɓuka biyu da aka kwatanta a GI Bill Comparison Tool."
      },
      {
        name: "Taimako kyauta daga wanda VA ta amince da shi",
        objective: "O6",
        notYet: "Babu wakili, ko kamfanin da ake biya wanda VA ba ta amince da shi ba.",
        meets: "Suna da hanyar tuntuɓar wakili ko VSO da VA ta amince da shi daga kayan bincike na VA.",
        exceeds: "Mai koyo ya tuntuɓe su ko ya ɗauki ranar ganawa."
      },
      {
        name: "Alamun gargaɗi na claim sharks",
        objective: "O6",
        notYet: "Alamun gargaɗi ƙasa da uku.",
        meets: "Alamun gargaɗi uku na wanda bai kamata a biya shi don shigar da buƙata ba.",
        exceeds: "Mai koyo ya bayyana yaushe lauya ko wakilin buƙatu da VA ta amince da shi zai iya karɓar kuɗi."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka tura aƙalla takardar neman VA ɗaya ko intent to file cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka tuntuɓi wakili ko VSO kyauta da VA ta amince da shi cikin kwanaki 30",
      "Masu koyo da suka yi rajista a horon da GI Bill ke biya cikin watanni 6"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Fayil (na takarda, ko fayil mai tsaro a kwamfutar mai koyo) don takardu",
      "DD214 ko wasu takardun barin aiki na mai koyo, idan yana da su",
      "Shafin va.gov na kyauta, har da GI Bill Comparison Tool da kayan binciken wakilan da VA ta amince da su",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Kada ku taɓa karɓa ko duba DD214, bayanan lafiya ko lambobin Social Security na masu koyo; masu koyo suna riƙe fayilolinsu da kansu.",
      "Ku gayyaci VSO da VA ta amince da shi zuwa zama na ƙarshe don masu koyo su haɗu da taimako kyauta ido da ido.",
      "Ku tabbatar da fom-fom, lambobin waya da dokoki a va.gov yayin zaman, domin suna iya canjawa.",
      "Kada ku ba da shawara kan tambayoyin lafiya ko na shari'a; ku tura su zuwa VA ko wakilin da VA ta amince da shi.",
      "Ku ba da maki ga shirin aiki da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
