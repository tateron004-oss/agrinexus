"use strict";

// Koach Learn course (Swahili translation of africa-life/afr-malaria-prevention.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const WHO_MALARIA = { name: "Shirika la Afya Duniani (WHO): Taarifa kuhusu malaria (kuenea, dalili, dalili za hatari, vyandarua, unyunyiziaji, dawa za kinga, chanjo, vipimo)", url: "https://www.who.int/news-room/fact-sheets/detail/malaria" };
const CDC_MALARIA = { name: "CDC: Kuhusu malaria (kuuma jioni na usiku, dalili, kutafuta matibabu haraka)", url: "https://www.cdc.gov/malaria/about/index.html" };
const WHO_WATER = { name: "Shirika la Afya Duniani (WHO): Taarifa kuhusu maji ya kunywa (vyombo vya maji nyumbani kama mazalio ya mbu; vifunike)", url: "https://www.who.int/news-room/fact-sheets/detail/drinking-water" };

module.exports = {
  id: "afr-malaria-prevention-sw",
  lang: "sw",
  translationOf: "afr-malaria-prevention",
  category: "Africa: Life and Work",
  name: "Kuzuia Malaria katika Familia Yako",
  skills: "Kujua jinsi malaria inavyoenea na walio hatarini, Kutumia chandarua chenye dawa kila usiku, Kupunguza mbu kuzunguka nyumba, Kutumia huduma za kliniki kwa wajawazito na watoto, Kupima kila homa siku hiyo hiyo, Kutambua dalili za hatari za malaria kali",
  outcome: "kulinda familia yako dhidi ya malaria: kulala ndani ya chandarua chenye dawa kila usiku, kupunguza mbu kuzunguka nyumba yako, kutumia huduma za kliniki kwa wajawazito na watoto wadogo, kupima kila homa siku hiyo hiyo, na kutambua dalili za hatari zinazomaanisha uende kliniki sasa hivi.",
  about: [
    "Malaria inaenezwa na kuumwa na mbu, na Afrika ina sehemu kubwa ya wagonjwa na vifo vya malaria duniani. WHO inasema kwamba mwaka 2024 Kanda ya Afrika ya WHO ilikuwa na karibu 95% ya wagonjwa na vifo vya malaria duniani, na kwamba watoto chini ya miaka 5 walikuwa karibu vifo vitatu kati ya vinne huko. Malaria inaweza kuzuiwa, na inaweza kutibiwa ikigunduliwa mapema. Kozi hii ni kwa akina mama, akina baba, babu na bibi, walezi na vijana nchini Nigeria, DR Congo, Kenya, Ghana, Burkina Faso, Mali, Cameroon na kote Afrika.",
    "Utajifunza jinsi malaria inavyoenea na nani yuko hatarini zaidi, kutundika na kutunza chandarua chenye dawa, kupunguza mahali ambapo mbu huzaliana na kuuma kuzunguka nyumba yako, kujua huduma za kliniki zinazowalinda wajawazito na watoto wadogo, kupima kila homa siku hiyo hiyo, na kutambua dalili za hatari za malaria kali.",
    "Kozi hii inafundisha kinga na wakati wa kutafuta msaada. Haikuambii dawa gani utumie wala kiasi gani: ni mhudumu wa afya tu anayeweza kupima malaria na kuamua matibabu. Kila somo linachukua kama dakika tano na linaishia na kazi ya \"Jaribu sasa\", na kwa pamoja yanajenga mpango wa malaria wa nyumba yako."
  ],
  finalTask: "Tengeneza mpango wa malaria wa nyumba yako kwenye ukurasa mmoja: nani nyumbani kwako yuko hatarini zaidi; una vyandarua vyenye dawa vingapi na unahitaji vingapi, kila mtu analala chini ya kipi, na utavitunzaje; mambo matatu utakayofanya kupunguza mbu kuzunguka nyumba yako; ziara za kliniki zilizopangwa kwa mjamzito au mtoto mdogo yeyote; utakachofanya siku hiyo hiyo mtu yeyote akipata homa; na kadi ya dalili za hatari yenye jina na namba ya kliniki iliyo karibu au ya mhudumu wa afya ya jamii.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Akina mama, akina baba, babu na bibi, walezi na vijana kote Afrika, hasa katika maeneo yenye malaria nyingi, vijijini, mijini na katika makazi yasiyo rasmi. Wengi wamewahi kuugua malaria wenyewe na wanawatunza watoto wadogo au mwanafamilia mjamzito.",
    startingPoint: "Wanajua kwamba mbu wanasababisha malaria na wengi wana chandarua. Lakini mara nyingi vyandarua havitumiwi kila usiku au na kila mtu, vyandarua vina matundu, maji yaliyotuama yapo kuzunguka nyumba, homa zinatibiwa nyumbani kwa dawa zilizobaki au za sokoni bila kipimo, na dalili za hatari zinaonekana kuchelewa.",
    gap: "Malaria bado inaua watoto wengi wadogo na inawadhuru wajawazito na watoto wao. Familia zinahitaji tabia rahisi za kila siku (chandarua kila usiku, mbu wachache) na hatua za haraka (kipimo kwa kila homa, kliniki mara moja kwa dalili za hatari) ili kuzuia vifo. Tabia hizi ni za bure au za gharama ndogo na zinafanya kazi vizuri zaidi zikitumiwa pamoja.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; wanafunzi wengi wanazungumza lugha nyingine kama lugha yao ya kwanza",
      "Vifaa: simu ya kawaida yenye data ya gharama; masomo yanafanya kazi bila intaneti yakishapakuliwa",
      "Pesa: bajeti ndogo; vyandarua, vipimo na huduma nyingi ni za bure au za gharama ndogo kupitia kliniki na programu za kitaifa, lakini hii inatofautiana",
      "Afya: kinga na dalili za tahadhari tu; hakuna majina ya dawa za kujitibu, hakuna vipimo vya dawa (dozi), hakuna mipango ya matibabu, hakuna utambuzi wa ugonjwa; wanafunzi wanafuata kliniki yao, mhudumu wa afya ya jamii na wizara ya afya",
      "Muda: masomo ya dakika 4 hadi 6 yanayoingia kati ya kazi za nyumbani na kazi"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukiangalia nyumba yako mwenyewe", action: "kueleza jinsi malaria inavyoenea na kuorodhesha nani nyumbani kwako yuko hatarini zaidi", standard: "ukitaja kuumwa na mbu usiku na ukiwataja watoto wadogo na wajawazito" },
    { id: "O2", condition: "Ukipewa chandarua chenye dawa na mahali familia yako inapolala", action: "kutundika chandarua chenye dawa, kukichomeka chini na kuziba matundu yoyote", standard: "kila mtu, kuanzia watoto wadogo na wajawazito, akilala ndani ya chandarua kila usiku" },
    { id: "O3", condition: "Ukiangalia eneo linalozunguka nyumba yako", action: "kuondoa au kufunika mahali ambapo mbu huzaliana na kuziba njia zao za kuingia ndani ya nyumba", standard: "ukifanya angalau hatua tatu ndani ya wiki moja" },
    { id: "O4", condition: "Ukiwa na mjamzito au mtoto mdogo katika familia yako", action: "kuorodhesha huduma za malaria ambazo kliniki yako inawapa na kupanga ziara", standard: "ukitaja kuanza kliniki ya wajawazito mapema na kuuliza kuhusu chanjo na dawa za kinga zinapotolewa" },
    { id: "O5", condition: "Ukiwa na mwanafamilia mwenye homa katika eneo lenye malaria", action: "kumpeleka mtu huyo kupimwa malaria siku hiyo hiyo na kufuata matibabu ya mhudumu wa afya", standard: "bila kamwe kutibu kwa dawa zilizobaki au zisizojulikana na bila kamwe kuacha mapema" },
    { id: "O6", condition: "Ukiwa na mwanafamilia mgonjwa", action: "kutambua dalili za hatari za malaria kali na kumpeleka mtu huyo kliniki mara moja", standard: "ukitaja angalau dalili nne za hatari na kliniki iliyo karibu au mhudumu wa afya ya jamii" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuzuia kuumwa na mbu",
      lessons: [
        {
          title: "Jinsi malaria inavyoenea na nani yuko hatarini zaidi",
          objectives: ["O1"],
          minutes: 5,
          goal: "Eleza jinsi malaria inavyoenea na orodhesha nani nyumbani kwako yuko hatarini zaidi.",
          text: [
            "Malaria inasababishwa na kimelea kidogo sana. Inaenezwa na kuumwa na aina fulani ya mbu jike (Anopheles). Mbu anamuuma mtu mwenye malaria, kisha anamuuma mtu mwingine na kumwambukiza. Haipiti moja kwa moja kutoka mtu kwa mtu kwa kugusana, chakula au hewa.",
            "Mbu hawa wanauma zaidi jioni sana na usiku, mara nyingi watu wakiwa wamelala. Dalili za malaria kwa kawaida zinaanza siku 10 hadi 15 baada ya kuumwa, kwa homa, kutetemeka kwa baridi na maumivu ya kichwa.",
            "WHO inasema walio hatarini zaidi kupata malaria kali ni watoto wachanga na watoto chini ya miaka 5, wajawazito, watu wenye VVU (HIV), na wasafiri wanaotoka mahali pasipo na malaria. Afrika, vifo vingi vya malaria ni vya watoto wadogo. WHO inaripoti kwamba Nigeria na DR Congo peke yake zilikuwa na zaidi ya 40% ya vifo vya malaria vya kanda hiyo mwaka 2024. Katika sehemu kubwa ya Afrika Kaskazini malaria ya ndani ni nadra, lakini watu kutoka Morocco, Misri au Tunisia wanaosafiri kwenda maeneo yenye malaria wako hatarini sana na wanapaswa kumwona mhudumu wa afya kabla ya kwenda."
          ],
          words: [["Kimelea", "kiumbe hai kidogo sana kinachoishi ndani ya mwili mwingine na kuudhuru."], ["Anopheles", "aina ya mbu anayeeneza malaria."], ["Hatarini", "kuwa na uwezekano mkubwa zaidi wa kuugua au kuugua sana."]],
          slides: [
            { title: "Jinsi malaria inavyoenea", bullets: ["Kimelea kinachobebwa na mbu aina ya Anopheles", "Anamuuma mgonjwa, kisha anamuuma mtu anayefuata", "Si kwa kugusana, chakula wala hewa"] },
            { title: "Wanapouma", bullets: ["Zaidi jioni sana na usiku", "Dalili zinaanza siku 10 hadi 15 baada ya kuumwa", "Homa, kutetemeka kwa baridi, maumivu ya kichwa"] },
            { title: "Walio hatarini zaidi", bullets: ["Watoto wachanga na watoto chini ya miaka 5", "Wajawazito", "Watu wenye VVU; wasafiri kutoka mahali pasipo na malaria"] }
          ],
          sources: [WHO_MALARIA, CDC_MALARIA],
          tryIt: "Andika majina ya kila mtu anayelala nyumbani kwako. Zungushia duara walio hatarini zaidi: watoto chini ya miaka 5, mjamzito yeyote, yeyote mwenye VVU, na wageni kutoka mahali pasipo na malaria.",
          youCanNow: "kueleza jinsi malaria inavyoenea na kusema nani nyumbani kwako yuko hatarini zaidi.",
          quickCheck: [
            { objective: "O1", q: "Malaria inaeneaje?", options: ["Kwa kusalimiana kwa mikono", "Kwa kuumwa na aina fulani ya mbu", "Kwa kula maembe", "Kwa mvua ya baridi"], answer: 1, why: "Malaria inaambukizwa kwa kuumwa na mbu aina ya Anopheles wenye vimelea, si kwa kugusana, chakula wala hali ya hewa." },
            { objective: "O1", q: "Nani katika familia yuko hatarini zaidi kupata malaria kali?", options: ["Watoto wadogo chini ya miaka 5 na wajawazito", "Wavulana vijana tu", "Babu na bibi tu", "Hakuna aliye hatarini zaidi"], answer: 0, why: "WHO inawataja watoto wadogo na wajawazito miongoni mwa walio hatarini zaidi." }
          ]
        },
        {
          title: "Chandarua chenye dawa kila usiku",
          objectives: ["O2"],
          minutes: 5,
          goal: "Tundika chandarua chenye dawa, kichomeke chini na uzibe matundu yoyote.",
          text: [
            "Chandarua kilichowekwa dawa ya kuua wadudu (mara nyingi kinaitwa ITN au chandarua cha muda mrefu) ni mojawapo ya njia kuu ambazo WHO inapendekeza kuzuia malaria. Chandarua kinazuia mbu wasikufikie ukiwa umelala, na dawa inaua au kudhoofisha wale wanaotua juu yake. WHO inasema aina mpya za vyandarua zinalinda vizuri zaidi mahali ambapo mbu hawafi tena kwa dawa ya zamani.",
            "Chandarua kinafanya kazi tu kikitumiwa kila usiku, mwaka mzima, si wakati wa mvua tu. Kitundike juu ya kitanda au mkeka ili kifike sakafuni, chomeka kingo chini ya godoro au mkeka kabla ya giza, na uingie bila kuacha mianya. Kama hakuna vyandarua vya kutosha kwa kila mtu, watoto wadogo na wajawazito walale ndani ya chandarua kwanza, kisha jitahidi kupata vyandarua kwa wengine.",
            "Kitunze: kagua matundu kila wiki na uyashone au uyafunge kwa fundo mara moja. Kioshe kwa upole na si mara nyingi, na ukianike kivulini, ukifuata maelekezo yaliyo kwenye pakiti au ya mhudumu wako wa afya. Usitumie vyandarua kuvua samaki, kujenga uzio au kwa bustani. Programu nyingi za kitaifa zinatoa vyandarua bure kliniki, katika kliniki ya wajawazito, shuleni au katika kampeni: uliza kliniki yako au mhudumu wa afya ya jamii."
          ],
          steps: ["Tundika chandarua juu ya kitanda au mkeka ili kifike sakafuni.", "Chomeka kingo chini ya godoro au mkeka kabla ya giza.", "Ingia bila kuacha mianya, kila usiku.", "Kagua matundu kila wiki na uyazibe mara moja.", "Osha kwa upole, si mara nyingi, na uanike kivulini.", "Uliza kliniki yako au mhudumu wa afya ya jamii kuhusu vyandarua vya bure."],
          words: [["Dawa ya kuua wadudu", "kemikali inayoua wadudu."], ["ITN (chandarua chenye dawa)", "chandarua kilichowekwa dawa ya kuua wadudu ili kuwafukuza na kuwaua mbu."], ["Kampeni", "kipindi ambapo wahudumu wa afya wanagawa vyandarua au huduma kwa watu wengi."]],
          slides: [
            { title: "Kwa nini chandarua chenye dawa kinafanya kazi", bullets: ["Kinazuia mbu ukiwa umelala", "Dawa inawaua au kuwadhoofisha", "Mojawapo ya njia kuu za WHO za kuzuia malaria"] },
            { title: "Kila usiku, mwaka mzima", bullets: ["Chandarua kifike sakafuni", "Kichomekwe kabla ya giza, bila mianya", "Vyandarua havitoshi? Watoto na wajawazito kwanza"] },
            { title: "Kitunze", bullets: ["Kagua matundu kila wiki; yazibe", "Osha kwa upole, si mara nyingi; anika kivulini", "Kamwe usikitumie kuvua samaki au kwa bustani"] },
            { title: "Kupata vyandarua", bullets: ["Kliniki, kliniki ya wajawazito, shule, kampeni", "Uliza kliniki yako au mhudumu wa afya ya jamii"] }
          ],
          sources: [WHO_MALARIA],
          tryIt: "Usiku wa leo, kagua kila chandarua nyumbani kwako. Tundika kila kimoja ili kifike sakafuni, kichomeke chini na uzibe matundu yoyote. Hesabu familia yako inahitaji vyandarua vingapi zaidi.",
          youCanNow: "kutundika, kuchomeka na kutunza chandarua chenye dawa ili kila mtu, kuanzia walio hatarini zaidi, alale ndani yake kila usiku.",
          quickCheck: [
            { objective: "O2", q: "Familia yako inapaswa kulala ndani ya chandarua lini?", options: ["Wakati wa mvua tu", "Mtu akiwa mgonjwa tu", "Kila usiku, mwaka mzima", "Mwishoni mwa wiki tu"], answer: 2, why: "Mbu wanaweza kuuma na kueneza malaria mwaka mzima; chandarua kinafanya kazi tu kikitumiwa kila usiku." },
            { objective: "O2", q: "Unaona tundu dogo kwenye chandarua. Unafanya nini?", options: ["Kukitupa chandarua", "Kukitumia kuvua samaki", "Kusubiri tundu liwe kubwa", "Kulishona au kulifunga kwa fundo mara moja"], answer: 3, why: "Mbu wanapita kwenye matundu madogo; kuyaziba mara moja kunafanya chandarua kiendelee kufanya kazi." }
          ]
        },
        {
          title: "Mbu wachache na kuumwa kidogo kuzunguka nyumba",
          objectives: ["O3"],
          minutes: 5,
          goal: "Ondoa au funika mahali ambapo mbu huzaliana na uzibe njia zao za kuingia ndani ya nyumba.",
          text: [
            "Mbu hutaga mayai yao katika maji yaliyotuama. Madimbwi, matairi ya zamani, makopo, vyungu vilivyovunjika, mitaro iliyoziba, mapipa ya maji yasiyofunikwa na ndoo vyote vinaweza kuwa mazalio karibu na mahali familia yako inapolala.",
            "Kuzunguka nyumba: mwaga au pindua vitu vinavyoweka maji; funika mapipa ya maji, ndoo na matangi kwa mfuniko au kitambaa kilichobana; safisha mifereji na mitaro iliyoziba; fukia madimbwi kwa udongo. Fanya hivi kila wiki, hasa wakati wa mvua, na ushirikiane na majirani, kwa sababu mbu wanaruka kati ya nyumba.",
            "Wazuie wasiingie na epuka kuumwa: funga milango na madirisha jioni na weka nyavu za madirisha na kwenye mianya ya juu ya kuta ukiweza. Jioni, vaa nguo za mikono mirefu na suruali ndefu au kanga ndefu. Dawa za kufukuza mbu zenye DEET, IR3535 au icaridin zinaweza kusaidia baada ya jioni; zitumie kama lebo inavyosema. Vijiti vya moshi (coils) na vifaa vya mvuke vinaweza kusaidia pia, lakini kamwe havichukui nafasi ya chandarua. Timu za unyunyiziaji za programu ya afya zikija kunyunyizia dawa ndani ya nyumba (unyunyiziaji wa ukoko wa ndani), waruhusu waingie na ufuate ushauri wao kuhusu kutoosha wala kupaka rangi kuta baadaye."
          ],
          steps: ["Zunguka nyumba yako na utafute kila kitu kinachoweka maji yaliyotuama.", "Kimwage, kipindue, kifunike au kiondoe.", "Safisha mitaro iliyoziba na fukia madimbwi.", "Funga milango na madirisha jioni; weka nyavu ukiweza.", "Funika mikono na miguu jioni; tumia dawa ya kufukuza mbu kama lebo inavyosema.", "Ziruhusu timu za unyunyiziaji za programu ya afya ziingie."],
          words: [["Mazalio", "maji yaliyotuama ambapo mbu hutaga mayai."], ["Dawa ya kufukuza mbu", "krimu au dawa ya kupuliza inayowazuia mbu wasikae kwenye ngozi yako."], ["Unyunyiziaji wa ukoko wa ndani (IRS)", "wahudumu wa afya wakinyunyizia dawa ya kuua wadudu kwenye kuta za ndani ili kuua mbu wanaopumzika hapo."]],
          slides: [
            { title: "Mbu huzaliana katika maji yaliyotuama", bullets: ["Madimbwi, matairi, makopo, vyungu vilivyovunjika", "Mitaro iliyoziba, mapipa na ndoo zilizo wazi"] },
            { title: "Kila wiki kuzunguka nyumba", bullets: ["Mwaga au pindua vitu vinavyoweka maji", "Funika mapipa, ndoo na matangi", "Safisha mitaro; fukia madimbwi; shirikiana na majirani"] },
            { title: "Wazuie wasiingie, epuka kuumwa", bullets: ["Funga milango na madirisha jioni; nyavu", "Mikono mirefu na suruali ndefu jioni", "Dawa ya kufukuza mbu kama lebo inavyosema; si badala ya chandarua"] },
            { title: "Timu za unyunyiziaji", bullets: ["Unyunyiziaji wa ndani unaua mbu wanaopumzika", "Waruhusu timu za programu ya afya waingie", "Fuata ushauri wao baadaye"] }
          ],
          sources: [WHO_MALARIA, WHO_WATER],
          tryIt: "Zunguka nyumba yako sasa. Andika kila mahali penye maji yaliyotuama. Mwaga, funika au ondoa angalau vitu vitatu leo, na panga kukagua tena kila wiki.",
          youCanNow: "kuondoa mazalio ya mbu kuzunguka nyumba yako na kupunguza kuumwa jioni.",
          quickCheck: [
            { objective: "O3", q: "Mbu hutaga mayai yao wapi?", options: ["Katika mchanga mkavu", "Katika maji yaliyotuama kama madimbwi, matairi na ndoo zilizo wazi", "Katika moto wa kupikia", "Katika mkate"], answer: 1, why: "Mbu wanahitaji maji yaliyotuama ili kutaga mayai yao." },
            { objective: "O3", q: "Unatumia kijiti cha moshi cha mbu (coil) jioni. Kipi ni kweli?", options: ["Kinaweza kusaidia, lakini bado unalala ndani ya chandarua", "Huhitaji tena chandarua", "Kinatibu malaria", "Lazima kiwake usiku mzima karibu na mtoto"], answer: 0, why: "Vijiti vya moshi na dawa za kufukuza mbu vinaongeza kinga lakini kamwe havichukui nafasi ya chandarua." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuzuia kuumwa na mbu",
        questions: [
          { objective: "O1", q: "Mbu wa malaria wanauma zaidi lini?", options: ["Mchana", "Asubuhi tu", "Jioni sana na usiku", "Wakati wa kiangazi tu"], answer: 2, why: "Mbu aina ya Anopheles wanauma zaidi jioni sana na usiku, mara nyingi watu wakiwa wamelala." },
          { objective: "O2", q: "Familia yako ina vyandarua vitatu na watu watano. Nani analala ndani ya vyandarua kwanza?", options: ["Baba na wana wakubwa", "Wageni", "Yeyote anayelala kwanza", "Watoto wadogo na mjamzito"], answer: 3, why: "Watoto wadogo na wajawazito wako hatarini zaidi, kwa hiyo wanatangulia wakati mnatafuta vyandarua zaidi." },
          { objective: "O2", q: "Chandarua kinapaswa kutundikwa vipi?", options: ["Kifike sakafuni na kichomekwe kabla ya giza", "Kikunjwe juu ya kitanda", "Nusu juu ya kitanda", "Juu ya uso tu"], answer: 0, why: "Chandarua kinachofika sakafuni na kuchomekwa hakiachi mianya kwa mbu." },
          { objective: "O3", q: "Kuna matairi ya zamani yaliyojaa maji ya mvua nyuma ya nyumba yako. Unafanya nini?", options: ["Kuyaacha; si yako", "Kuyamwaga na kuyahifadhi yakiwa makavu, au kuyaondoa", "Kuongeza maji", "Kuyafunika kwa chandarua"], answer: 1, why: "Maji ndani ya matairi ni mazalio; kuyamwaga au kuyaondoa kunazuia mbu kuzaliana." },
          { objective: "O3", q: "Wahudumu wa afya wanakuja kunyunyizia dawa kwenye kuta za ndani za nyumba yako. Unafanya nini?", options: ["Kuwakataa", "Kuosha kuta mara moja baadaye", "Kuwaruhusu waingie na kufuata ushauri wao baadaye", "Kupaka rangi juu ya dawa siku hiyo hiyo"], answer: 2, why: "Unyunyiziaji wa ukoko wa ndani ni hatua kuu ya WHO; kuosha au kupaka rangi kuta kunaizuia kufanya kazi." }
        ]
      }
    },
    {
      name: "Sura 2: Kuwalinda walio hatarini zaidi na kuchukua hatua haraka",
      lessons: [
        {
          title: "Kuwalinda wajawazito na watoto wadogo",
          objectives: ["O4"],
          minutes: 5,
          goal: "Orodhesha huduma za malaria ambazo kliniki yako inawapa wajawazito na watoto wadogo na panga ziara.",
          text: [
            "Malaria wakati wa ujauzito inaweza kumdhuru mama na mtoto: WHO inasema inaweza kusababisha mtoto azaliwe kabla ya wakati au akiwa mdogo sana. Mjamzito anapaswa kuanza kliniki ya wajawazito mapema na kuhudhuria kila ziara. Katika kliniki ya wajawazito katika nchi nyingi anaweza kupata chandarua chenye dawa, kipimo cha malaria na, pale programu ya kitaifa inapotoa, dawa ya kinga dhidi ya malaria wakati wa ujauzito (WHO inaiita IPTp). Mhudumu wa afya ndiye anayeamua anachohitaji na lini. Kamwe usinywe dawa ya malaria wakati wa ujauzito bila mhudumu wa afya.",
            "Kwa watoto wadogo: WHO inapendekeza chanjo mbili za malaria (RTS,S na R21) kwa watoto katika maeneo yenye malaria nyingi, na zinaongezwa katika chanjo za kawaida za watoto katika nchi nyingi za Afrika. Katika baadhi ya maeneo, kwa mfano sehemu za Sahel kama Burkina Faso na Mali, wahudumu wa afya pia wanawapa watoto wadogo dawa ya kinga wakati wa mvua (kinga ya malaria ya msimu kwa dawa). Uliza kliniki yako kinachotolewa unapoishi na uhakikishe kadi ya afya ya mtoto imesasishwa.",
            "Chanjo na dawa za kinga zinaongeza ulinzi, lakini WHO inasema zinafanya kazi vizuri zaidi pamoja na vyandarua. Endelea kutumia chandarua kila usiku. Andika tarehe za kliniki katika mpango wako, na muulize mhudumu wa afya ya jamii kama huwezi kufika kliniki."
          ],
          steps: ["Mjamzito: anza kliniki ya wajawazito mapema na uhudhurie kila ziara.", "Uliza katika kliniki ya wajawazito kuhusu chandarua, kipimo na dawa ya kinga dhidi ya malaria.", "Mtoto: uliza kliniki kama chanjo za malaria zinatolewa unapoishi na uhakikishe kadi ya afya imesasishwa.", "Uliza kama kuna kampeni za dawa za kinga za msimu wa mvua katika eneo lako.", "Andika kila tarehe ya kliniki katika mpango wako na endelea kutumia vyandarua."],
          words: [["Kliniki ya wajawazito", "uchunguzi wa afya kwa mwanamke wakati wa ujauzito."], ["Chanjo", "dawa, kwa kawaida sindano, inayosaidia mwili kujilinda dhidi ya ugonjwa."], ["Dawa ya kinga", "dawa ambayo mhudumu wa afya anatoa kuzuia ugonjwa kabla haujaanza."], ["Kadi ya afya", "kadi au kijitabu ambapo kliniki inaandika chanjo na uchunguzi wa mtoto."]],
          slides: [
            { title: "Malaria wakati wa ujauzito", bullets: ["Inaweza kumdhuru mama na mtoto", "Mtoto kuzaliwa kabla ya wakati au akiwa mdogo sana", "Anza kliniki ya wajawazito mapema; hudhuria kila ziara"] },
            { title: "Kliniki ya wajawazito, uliza kuhusu", bullets: ["Chandarua chenye dawa na kipimo cha malaria", "Dawa ya kinga inapotolewa (IPTp)", "Kamwe usinywe dawa ya malaria bila mhudumu wa afya"] },
            { title: "Watoto wadogo", bullets: ["Chanjo za malaria RTS,S na R21 zinapotolewa", "Dawa ya kinga ya msimu wa mvua katika baadhi ya maeneo", "Hakikisha kadi ya afya imesasishwa"] },
            { title: "Bado tumia chandarua", bullets: ["Chanjo na dawa zinafanya kazi vizuri zaidi na vyandarua", "Andika tarehe za kliniki katika mpango wako", "Omba msaada kwa mhudumu wa afya ya jamii"] }
          ],
          sources: [WHO_MALARIA],
          tryIt: "Kama kuna mtu nyumbani kwako aliye mjamzito au chini ya miaka 5, andika tarehe inayofuata ya kliniki kwa kila mmoja na maswali utakayouliza kuhusu vyandarua, chanjo na dawa za kinga. Kama hakuna, iandike kwa jirani au ndugu unayeweza kumsaidia.",
          youCanNow: "kutaja huduma za kliniki zinazowalinda wajawazito na watoto wadogo dhidi ya malaria na kupanga ziara.",
          quickCheck: [
            { objective: "O4", q: "Mwanamke katika familia yako ni mjamzito. Hatua ya kwanza ya kumlinda dhidi ya malaria ni ipi?", options: ["Kusubiri hadi mwezi wa mwisho", "Kununua dawa ya malaria sokoni", "Kuanza kliniki ya wajawazito mapema, kulala ndani ya chandarua na kuuliza kuhusu kinga ya malaria", "Kuacha kula matunda"], answer: 2, why: "Kliniki ya wajawazito mapema pamoja na chandarua vinampa kinga ambayo kliniki inatoa." },
            { objective: "O4", q: "Mtoto wako amepata chanjo ya malaria. Na chandarua je?", options: ["Kukitupa", "Kukitumia wakati wa mvua tu", "Kuwapa majirani", "Kuendelea kukitumia kila usiku; chanjo zinafanya kazi vizuri zaidi na vyandarua"], answer: 3, why: "WHO inasema chanjo zinaleta faida kubwa zaidi zikitumiwa pamoja na vyandarua na hatua nyingine." }
          ]
        },
        {
          title: "Homa: pima siku hiyo hiyo",
          objectives: ["O5"],
          minutes: 5,
          goal: "Mpeleke mwanafamilia mwenye homa kupimwa malaria siku hiyo hiyo.",
          text: [
            "Katika eneo lenye malaria, chukulia kila homa kuwa huenda ni malaria hadi kipimo kiseme vinginevyo. Malaria mara nyingi inaanza kama magonjwa mengine mengi, kwa homa, kutetemeka kwa baridi, maumivu ya kichwa na maumivu ya mwili, kwa hiyo huwezi kujua kwa kuangalia tu. WHO inapendekeza kwamba kila mgonjwa anayeshukiwa kuwa na malaria athibitishwe kwa kipimo, kipimo cha haraka au darubini, kabla ya matibabu.",
            "Nenda siku hiyo hiyo kwenye kliniki, kituo cha afya au kwa mhudumu wa afya ya jamii aliyefunzwa anayeweza kupima. Kipimo cha haraka kinachukua tone la damu kutoka kidoleni na kinatoa jibu kwa dakika chache. Kwa mtoto chini ya miaka 5, homa kamwe isisubiri hadi kesho.",
            "Kipimo kikionyesha malaria, mhudumu wa afya anachagua dawa na anakuambia jinsi ya kuinywa. Inywe yote, sawasawa na ulivyoambiwa, hata mtu akijisikia vizuri. Usitumie dawa iliyobaki, dawa ya mtu mwingine, au dawa isiyojulikana kutoka sokoni au kwa mchuuzi: inaweza kuwa aina isiyo sahihi, kidogo mno au bandia. Kipimo kikionyesha hana malaria, mhudumu wa afya anatafuta chanzo kingine. Mtu asipopata nafuu, au akizidi kuumwa, rudi."
          ],
          steps: ["Homa katika eneo lenye malaria? Ichukulie kuwa huenda ni malaria.", "Nenda siku hiyo hiyo kwenye kliniki au kwa mhudumu wa afya ya jamii anayeweza kupima.", "Malaria ikigunduliwa: kunywa dawa sawasawa na mhudumu wa afya anavyosema, yote.", "Kamwe usitumie dawa iliyobaki, ya kuazima au isiyojulikana.", "Hajapata nafuu au amezidi? Rudi mara moja."],
          words: [["Kipimo cha haraka (RDT)", "kipimo cha haraka kwa tone la damu kutoka kidoleni kinachoonyesha malaria kwa dakika chache."], ["Jibu hasi", "kipimo hakikupata malaria."], ["Dawa bandia", "dawa inayoonekana halisi lakini ina kiasi kisicho sahihi au haina kitu kinachofanya kazi."]],
          slides: [
            { title: "Kila homa inaweza kuwa malaria", bullets: ["Homa, kutetemeka kwa baridi, maumivu ya kichwa na mwili", "Huwezi kujua kwa kuangalia", "WHO: pima kabla ya matibabu"] },
            { title: "Pima siku hiyo hiyo", bullets: ["Kliniki au mhudumu wa afya ya jamii aliyefunzwa", "Kipimo cha haraka: tone la damu, dakika chache", "Mtoto chini ya miaka 5: kamwe usisubiri hadi kesho"] },
            { title: "Ikiwa ni malaria", bullets: ["Mhudumu wa afya anachagua dawa", "Inywe yote sawasawa na ulivyoambiwa", "Hajapata nafuu au amezidi? Rudi"] },
            { title: "Kamwe", bullets: ["Dawa iliyobaki au ya kuazima", "Dawa isiyojulikana kutoka kwa mchuuzi", "Inaweza kuwa si sahihi, kidogo mno au bandia"] }
          ],
          sources: [WHO_MALARIA, CDC_MALARIA],
          tryIt: "Tafuta mahali familia yako inaweza kupima malaria siku hiyo hiyo: kliniki iliyo karibu au mhudumu wa afya ya jamii, saa za kufungua, na jinsi utakavyofika huko. Andika katika mpango wako.",
          youCanNow: "kupima kila homa siku hiyo hiyo na kufuata matibabu ya mhudumu wa afya tu, yote.",
          quickCheck: [
            { objective: "O5", q: "Mtoto wako ana homa jioni. Unafanya nini?", options: ["Kumpimisha malaria siku hiyo hiyo kwenye kliniki au kwa mhudumu wa afya ya jamii", "Kusubiri siku tatu", "Kumpa dawa iliyobaki kutoka mara iliyopita", "Kununua dawa kwa mchuuzi"], answer: 0, why: "WHO inashauri kupima kabla ya matibabu, na homa ya mtoto haipaswi kusubiri." },
            { objective: "O5", q: "Baada ya siku mbili za dawa ya malaria, mume wako anajisikia vizuri. Afanye nini?", options: ["Kuacha na kuweka iliyobaki kwa wakati ujao", "Kumaliza yote sawasawa na mhudumu wa afya alivyosema", "Kumpa jirani iliyobaki", "Kuongeza mara mbili kiasi kinachofuata"], answer: 1, why: "Kuacha mapema kunaweza kufanya malaria irudi; inywe yote kama ulivyoambiwa." }
          ]
        },
        {
          title: "Dalili za hatari za malaria kali na mpango wa familia yako",
          objectives: ["O6"],
          minutes: 5,
          goal: "Tambua dalili za hatari za malaria kali na umfikishe mtu huyo kliniki mara moja.",
          text: [
            "Malaria inaweza kuwa kali haraka, hasa kwa watoto wadogo na wajawazito. Malaria kali ni dharura.",
            "WHO inaorodhesha dalili hizi za hatari. Nenda kliniki au hospitali SASA, mchana au usiku, kama mtu: amechoka sana au ni dhaifu sana, au hawezi kukaa wala kusimama; amechanganyikiwa, ana usingizi mzito sana au ni vigumu kumwamsha; ana degedege (kifafa cha ghafla), hasa zaidi ya mara moja; ana shida ya kupumua; ana mkojo mweusi au wenye damu; ana macho au ngozi ya manjano; au anatokwa na damu isivyo kawaida. Mtoto asiyeweza kunywa wala kunyonya, au anayetapika kila kitu, pia anahitaji kliniki sasa.",
            "Jiandae kabla haijatokea: andika dalili za hatari na jina, mahali na namba ya simu ya kliniki, hospitali na mhudumu wa afya ya jamii aliye karibu kwenye kadi ukutani; jua jinsi utakavyofika huko usiku; na weka pesa za usafiri pembeni ukiweza. Kisha weka kila kitu kutoka kozi hii katika mpango wa malaria wa nyumba yako."
          ],
          steps: ["Jifunze dalili za hatari.", "Ukiona yoyote: nenda kliniki au hospitali sasa, mchana au usiku.", "Tengeneza kadi yenye dalili na majina na namba za kliniki na mhudumu wa afya aliye karibu.", "Panga jinsi utakavyosafiri usiku na weka pesa za usafiri ukiweza.", "Andika mpango wa malaria wa nyumba yako."],
          words: [["Malaria kali", "malaria iliyokuwa hatari kwa maisha na inahitaji hospitali au kliniki mara moja."], ["Degedege (kifafa cha ghafla)", "kutetemeka kwa ghafla kwa mwili ambako mtu hawezi kuzuia."], ["Manjano (jaundice)","rangi ya manjano machoni au kwenye ngozi."]],
          slides: [
            { title: "Malaria kali ni dharura", bullets: ["Inaweza kutokea haraka", "Hatari zaidi kwa watoto wadogo na wajawazito"] },
            { title: "Nenda SASA, mchana au usiku, kama", bullets: ["Udhaifu mkubwa; amechanganyikiwa au ni vigumu kumwamsha", "Degedege; shida ya kupumua", "Mkojo mweusi au wenye damu; macho au ngozi ya manjano; kutokwa damu", "Mtoto hawezi kunywa wala kunyonya, au anatapika kila kitu"] },
            { title: "Jiandae", bullets: ["Kadi ya dalili za hatari ukutani", "Namba za kliniki, hospitali na mhudumu wa afya", "Mpango wa usafiri wa usiku; pesa pembeni ukiweza"] }
          ],
          sources: [WHO_MALARIA],
          tryIt: "Tengeneza kadi yako ya dalili za hatari sasa yenye angalau dalili nne na jina na namba ya kliniki iliyo karibu au ya mhudumu wa afya ya jamii. Kisha andika mpango kamili wa malaria wa nyumba yako kutoka kazi ya mwisho.",
          youCanNow: "kutambua dalili za hatari za malaria kali, kupata msaada mara moja, na kuwa na mpango wa malaria wa nyumba yako.",
          quickCheck: [
            { objective: "O6", q: "Mtoto mwenye malaria anaanza kupata degedege. Unafanya nini?", options: ["Kusubiri uone kama itakoma", "Kumpa zaidi dawa ile ile", "Kwenda kliniki au hospitali sasa", "Kumwacha alale hadi apone"], answer: 2, why: "Degedege ni dalili ya hatari ya malaria kali; ni dharura." },
            { objective: "O6", q: "Ipi ni dalili ya hatari ya malaria kali?", options: ["Maumivu kidogo ya kichwa", "Kuhisi joto kidogo baada ya kazi", "Kutaka kula", "Macho ya manjano, au mkojo mweusi au wenye damu"], answer: 3, why: "WHO inaorodhesha manjano na mkojo mweusi au wenye damu kama dalili za hatari zinazohitaji huduma ya dharura." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuwalinda walio hatarini zaidi na kuchukua hatua haraka",
        questions: [
          { objective: "O4", q: "Mjamzito anaweza kupata nini katika kliniki ya wajawazito katika nchi nyingi?", options: ["Nyavu za bure za kuvua samaki", "Chandarua chenye dawa, kipimo cha malaria na dawa ya kinga pale programu inapotoa", "Dawa ya malaria ya kuweka nyumbani", "Hakuna kitu kuhusu malaria"], answer: 1, why: "Kliniki ya wajawazito ndipo programu nyingi zinapotoa vyandarua, vipimo na dawa za kinga wakati wa ujauzito." },
          { objective: "O4", q: "WHO inapendekeza chanjo gani dhidi ya malaria kwa watoto katika maeneo yenye malaria nyingi?", options: ["RTS,S na R21", "Polio na surua", "Pepopunda tu", "Hakuna chanjo ya malaria"], answer: 0, why: "WHO inapendekeza RTS,S (tangu 2021) na R21 (tangu 2023) kwa watoto katika maeneo yenye malaria ya wastani hadi nyingi." },
          { objective: "O5", q: "Kwa nini upime kabla ya kutibu homa?", options: ["Vipimo vinafurahisha", "Ili uweze kuuza dawa", "Kwa sababu magonjwa mengi yanafanana na malaria; kipimo kinaonyesha kama ni malaria", "Vipimo vinachukua nafasi ya vyandarua"], answer: 2, why: "Malaria inafanana na homa nyingine; kipimo kinahakikisha matibabu sahihi yanatolewa." },
          { objective: "O5", q: "Mchuuzi anakuuzia vidonge vya malaria vya bei nafuu. Unafanya nini?", options: ["Kuvinunua kwa ajili ya familia", "Kuvinunua kwa ajili ya watoto tu", "Kuwagawia majirani", "Kutovinunua; kupimwa na kutibiwa na mhudumu wa afya"], answer: 3, why: "Dawa isiyojulikana inaweza kuwa si sahihi au bandia; kipimo na matibabu ya mhudumu wa afya ni salama." },
          { objective: "O6", q: "Usiku wa manane binti yako mwenye malaria amechanganyikiwa na ni vigumu sana kumwamsha. Unafanya nini?", options: ["Kwenda kliniki au hospitali sasa", "Kusubiri asubuhi", "Kumpa dawa zaidi", "Kumweka ndani ya chandarua na kumwacha alale"], answer: 0, why: "Kuchanganyikiwa na kuwa vigumu kuamka ni dalili za hatari; nenda sasa, mchana au usiku." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kuzuia Malaria katika Familia Yako",
    questions: [
      { objective: "O1", q: "Nini kinabeba malaria kutoka mtu mmoja kwenda kwa mwingine?", options: ["Nzi", "Aina fulani ya mbu (Anopheles)", "Maji machafu", "Kukohoa"], answer: 1, why: "Malaria inaambukizwa kwa kuumwa na mbu aina ya Anopheles wenye vimelea." },
      { objective: "O1", q: "Kwa kawaida dalili za malaria zinaanza muda gani baada ya kuumwa?", options: ["Saa hiyo hiyo", "Baada ya mwaka mmoja", "Siku 10 hadi 15", "Kamwe"], answer: 2, why: "WHO inasema dalili kwa kawaida zinaonekana siku 10 hadi 15 baada ya kuumwa na mbu mwenye vimelea." },
      { objective: "O1", q: "Binamu kutoka Tunisia, ambako malaria ya ndani ni nadra, anakutembelea katika eneo lenye malaria. Kipi ni kweli?", options: ["Yuko salama kwa sababu ni mtu mzima", "Hawezi kupata malaria", "Anahitaji chandarua wakati wa mvua tu", "Yuko hatarini sana na anapaswa kumwona mhudumu wa afya kabla ya kusafiri na kulala ndani ya chandarua"], answer: 3, why: "Wasafiri kutoka mahali pasipo na malaria wako hatarini sana, kwa hiyo wanapanga na mhudumu wa afya." },
      { objective: "O2", q: "Dawa iliyo kwenye chandarua chenye dawa inafanya nini?", options: ["Inaua au kudhoofisha mbu wanaotua juu yake", "Inafanya chandarua kinukie vizuri", "Inatibu malaria", "Inaweka chandarua kikiwa safi"], answer: 0, why: "Dawa inaua au kudhoofisha mbu, kwa hiyo chandarua kinalinda zaidi." },
      { objective: "O2", q: "Unapaswa kuanika chandarua kilichooshwa vipi?", options: ["Kwenye jua kali kwa wiki moja", "Kivulini, baada ya kukiosha kwa upole", "Juu ya moto wa kupikia", "Kikiwa kibichi, juu ya kitanda"], answer: 1, why: "Kuosha kwa upole na kuanika kivulini kunasaidia chandarua kiendelee kufanya kazi." },
      { objective: "O2", q: "Matumizi gani ya chandarua si sahihi?", options: ["Juu ya mkeka wa kulalia", "Juu ya kitanda cha mtoto mchanga", "Kuzungushia bustani ya mboga", "Juu ya kitanda cha mjamzito"], answer: 2, why: "Vyandarua ni vya kulalia ndani yake; kuvitumia kwa bustani au kuvua samaki kunaacha watu bila kinga." },
      { objective: "O3", q: "Kazi ipi inapunguza mazalio ya mbu nyumbani?", options: ["Kuacha ndoo wazi", "Kuweka matairi ya zamani uwanjani", "Kulala nje", "Kumwaga, kufunika au kuondoa vitu vinavyoweka maji yaliyotuama"], answer: 3, why: "Kuondoa maji yaliyotuama kunaondoa mahali ambapo mbu hutaga mayai." },
      { objective: "O3", q: "Unapaswa kufunga milango na madirisha lini ili kuzuia mbu wasiingie?", options: ["Jioni", "Mchana", "Jumapili tu", "Kamwe"], answer: 0, why: "Mbu wa malaria wanauma zaidi kuanzia jioni sana na usiku." },
      { objective: "O3", q: "Kwa nini ushirikiane na majirani kuhusu maji yaliyotuama?", options: ["Ili kuazima matairi yao", "Kwa sababu mbu wanaruka kati ya nyumba", "Ili walipe gharama", "Haijalishi"], answer: 1, why: "Mazalio ya nyumba ya jirani bado yanaleta mbu nyumbani kwako." },
      { objective: "O4", q: "WHO inasema malaria wakati wa ujauzito inaweza kusababisha...", options: ["Hakuna kitu kabisa", "Mapacha", "Mtoto kuzaliwa kabla ya wakati au akiwa mdogo sana", "Mafua kidogo tu"], answer: 2, why: "Malaria wakati wa ujauzito inaweza kusababisha kuzaliwa kabla ya wakati na uzito mdogo wa kuzaliwa." },
      { objective: "O4", q: "Unaweza kujua wapi kama chanjo za malaria zinatolewa kwa watoto unapoishi?", options: ["Ujumbe kwenye mitandao ya kijamii", "Sokoni", "Kukisia kwa jirani", "Kliniki yako au mhudumu wa afya ya jamii"], answer: 3, why: "Programu za chanjo zinatofautiana kwa mahali; kliniki inajua kinachotolewa." },
      { objective: "O4", q: "Katika sehemu za Sahel, wahudumu wa afya wanawapa watoto wadogo nini wakati wa mvua?", options: ["Dawa ya kinga ya malaria kupitia kampeni", "Simu za bure", "Nyavu za kuvua samaki", "Hakuna kitu"], answer: 0, why: "Kinga ya malaria ya msimu kwa dawa inatolewa kwa watoto wadogo wakati wa misimu yenye hatari kubwa katika baadhi ya maeneo." },
      { objective: "O5", q: "WHO inapendekeza nini kabla ya kutibu mgonjwa anayeshukiwa kuwa na malaria?", options: ["Kusubiri wiki moja", "Kipimo kwa kipimo cha haraka au darubini", "Kumuuliza jirani", "Kununua aina mbili za dawa"], answer: 1, why: "WHO inapendekeza kuthibitisha kila mgonjwa anayeshukiwa kwa kipimo kabla ya matibabu." },
      { objective: "O5", q: "Una vidonge vilivyobaki kutoka malaria ya mwaka jana. Mwanao ana homa. Unafanya nini?", options: ["Kumpa vidonge vya zamani", "Kumpa nusu ya vidonge vya zamani", "Kumpeleka kupimwa leo; kutotumia dawa iliyobaki", "Kusubiri uone"], answer: 2, why: "Dawa iliyobaki inaweza kuwa aina isiyo sahihi au kidogo mno; pima kwanza na ufuate mhudumu wa afya." },
      { objective: "O5", q: "Kipimo cha malaria kilionyesha hana malaria lakini mtoto wako bado ana homa siku mbili baadaye. Unafanya nini?", options: ["Kuacha kuwa na wasiwasi", "Kumpa dawa ya malaria hata hivyo", "Kusubiri wiki nyingine", "Kurudi kwa mhudumu wa afya"], answer: 3, why: "Homa ikiendelea au ikizidi, mhudumu wa afya anahitaji kumchunguza tena." },
      { objective: "O5", q: "Nani anaamua dawa gani ya malaria inywewe na kiasi gani?", options: ["Mhudumu wa afya aliyefunzwa baada ya kipimo", "Mtu aliye mgonjwa", "Muuzaji wa sokoni", "Ujumbe mfupi wa simu"], answer: 0, why: "Ni mhudumu wa afya tu anayeweza kuchagua dawa sahihi na kiasi sahihi baada ya kipimo." },
      { objective: "O6", q: "Kipi kati ya hivi kinamaanisha uende kliniki sasa?", options: ["Mafua ya pua", "Shida ya kupumua", "Kuhisi njaa", "Jeraha dogo"], answer: 1, why: "Shida ya kupumua ni dalili ya hatari ya malaria kali." },
      { objective: "O6", q: "Mtoto mchanga mwenye homa hanyonyi na anatapika kila kitu. Unafanya nini?", options: ["Kujaribu tena kesho", "Kumpa maji tu na kusubiri", "Kwenda kliniki sasa", "Kumpa dawa ya watu wazima"], answer: 2, why: "Mtoto asiyeweza kunywa au anayetapika kila kitu anahitaji kliniki mara moja." },
      { objective: "O6", q: "Nini kinakusaidia kuchukua hatua haraka usiku wakati wa dharura?", options: ["Hakuna; utakumbuka", "Orodha ya dawa na dozi", "Namba yako ya siri (PIN) ya pesa kwa simu", "Kadi ya dalili za hatari yenye namba za kliniki na mpango wa usafiri wa usiku"], answer: 3, why: "Kujua dalili, nani wa kumpigia na jinsi ya kufika huko kunaokoa muda." },
      { objective: "O1", q: "Je, malaria inaweza kupita kutoka mtu kwa mtu kwa kugusana au kushiriki chakula?", options: ["Hapana; inaenezwa kwa kuumwa na mbu", "Ndiyo, kwa kugusana", "Ndiyo, kwa kushiriki chakula", "Ndiyo, kupitia hewa"], answer: 0, why: "WHO inasema malaria haienei moja kwa moja kutoka mtu kwa mtu; mbu ndio wanaoibeba." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 2, 3, 6, 9, 12, 13, 16] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Walio hatarini", objective: "O1", notYet: "Hakuna aliyewekwa alama kuwa hatarini zaidi, au mpango hausemi jinsi malaria inavyoenea.", meets: "Watoto wadogo, wajawazito na watu wengine walio hatarini nyumbani wametajwa, na kuumwa na mbu usiku kama chanzo.", exceeds: "Pia unapanga kwa wageni au wasafiri kutoka mahali pasipo na malaria." },
      { name: "Vyandarua kila usiku", objective: "O2", notYet: "Vyandarua vimehesabiwa lakini si nani analala ndani yake, au matundu hayajatajwa.", meets: "Kila mahali pa kulala pameorodheshwa pamoja na chandarua, walio hatarini zaidi kwanza, na ukaguzi wa matundu kila wiki na utunzaji wa upole.", exceeds: "Vyandarua vinavyokosekana vimehesabiwa na mwanafunzi ameuliza kliniki au mhudumu wa afya ya jamii jinsi ya kuvipata." },
      { name: "Mbu wachache", objective: "O3", notYet: "Hatua chini ya tatu, au hatua zisizoondoa maji yaliyotuama wala kuzuia kuumwa.", meets: "Angalau hatua tatu, kama kumwaga vyombo, kufunika mapipa, kusafisha mitaro na kufunga milango jioni.", exceeds: "Siku ya ukaguzi ya kila wiki imepangwa na majirani wameshirikishwa." },
      { name: "Huduma za kliniki", objective: "O4", notYet: "Hakuna ziara za kliniki zilizopangwa kwa mjamzito au mtoto mdogo nyumbani.", meets: "Ziara za kliniki ya wajawazito na tarehe za kliniki ya mtoto zimeandikwa, pamoja na maswali kuhusu vyandarua, chanjo na dawa za kinga.", exceeds: "Ziara zimepangwa au zimefanyika, na kadi ya afya ya mtoto imesasishwa." },
      { name: "Hatua ya homa", objective: "O5", notYet: "Mpango unajumuisha kutibu nyumbani kwa dawa iliyobaki au ya sokoni, au kusubiri kuona.", meets: "Kipimo siku hiyo hiyo kwenye kliniki au kwa mhudumu wa afya ya jamii aliyetajwa, na matibabu kamili kama mhudumu wa afya anavyosema.", exceeds: "Saa za kufungua na mahali pa akiba pa kupima vimeandikwa pia." },
      { name: "Kadi ya dalili za hatari", objective: "O6", notYet: "Dalili za hatari chini ya nne, au hakuna mawasiliano ya kliniki.", meets: "Angalau dalili nne za hatari na jina na namba ya kliniki iliyo karibu au ya mhudumu wa afya.", exceeds: "Pia mpango wa usafiri wa usiku, bila majina ya dawa wala dozi kwenye kadi." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Nyumba ambazo kila mtu, kuanzia watoto wadogo na wajawazito, analala ndani ya chandarua siku 30 baadaye (utafiti wa kufuatilia)",
      "Familia zinazopima malaria siku hiyo hiyo kwa homa ya mtoto, kama zinavyoripoti familia au wahudumu wa afya ya jamii",
      "Wajawazito zaidi wanaoanza kliniki ya wajawazito mapema na watoto zaidi waliopata chanjo zote pale chanjo za malaria zinapotolewa",
      "Watoto wachache wanaofika kliniki wakiwa wamechelewa na malaria kali katika msimu ujao wa mvua"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Chandarua chenye dawa cha kufanyia mazoezi ya kutundika na kukagua (au cha mwanafunzi mwenyewe)",
      "Sindano na uzi wa kuziba matundu",
      "Karatasi na kalamu kwa mpango wa nyumba na kadi ya dalili za hatari",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Inafaa vizuri kwa vikundi vya akina mama, vikundi vya kliniki ya wajawazito, shule, vikundi vya dini, vikundi vya wakulima na ziara za wahudumu wa afya ya jamii; fanyeni jaribio la awali pamoja.",
      "Tundikeni chandarua pamoja katika Somo la 2 na zungukeni mahali pa mkutano kutafuta maji yaliyotuama katika Somo la 3.",
      "Mwalike mhudumu wa afya ya jamii wa eneo hilo au muuguzi wa kliniki aseme kliniki inatoa nini: vyandarua vya bure, vipimo, chanjo na dawa za kinga vinatofautiana kwa nchi na eneo.",
      "Usitaje majina ya dawa za malaria wala kutoa dozi; peleka maswali yote ya matibabu kwa kliniki, mhudumu wa afya ya jamii au wizara ya afya.",
      "Tumia ujumbe wa sasa wa programu ya kitaifa ya malaria wakati wa kampeni na msimu wa mvua.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
