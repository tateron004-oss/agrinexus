"use strict";

// Koach Learn course, Hausa (ha) translation of shared/customer-service-excellence.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "customer-service-excellence-ha",
  lang: "ha",
  translationOf: "customer-service-excellence",
  category: "Re-Entry",
  name: "Ƙwarewa a Hidimar Abokan Ciniki",
  skills: "Gaishe abokan ciniki, Sauraro don gane ainihin buƙata, Warware matsaloli, Kwantar da hankalin abokin ciniki mai fushi da LAST, Hidima ta waya, chat da imel, Bin diddigi",
  outcome: "yi wa abokin ciniki hidima daga farko har ƙarshe, ido da ido, ta waya, chat ko imel: gaishe shi da fara'a, gane abin da yake buƙata, warware matsalar ko miƙa ta ga wanda ya dace, kwantar da hankalin abokin ciniki mai fushi da hanyar LAST, da bin diddigi don ya dawo.",
  about: [
    "Kusan kowane aiki yana da abokan ciniki: masu sayayya a shago, masu cin abinci a gidan abinci, masu kira zuwa cibiyar kira (call centre), baƙi a teburin karɓar baƙi na ofis, da abokan ciniki na ƙaramin kasuwanci. Hidimar abokan ciniki mai kyau tana ɗaya daga cikin ƙwarewar da ake nema sosai a aiki, kuma tana taimaka muku samun aiki, riƙe shi da samun ci gaba.",
    "Wannan kwas ɗin na masu fara aiki ne, matasa, mutanen da ke komawa aiki bayan gidan yari, da masu ƙananan kasuwanci da ke yi wa abokan cinikinsu hidima da kansu. Misalan sun fito ne daga shaguna, gidajen abinci, cibiyoyin kira da ofisoshi.",
    "Za ku yi atisayen gaisuwa, sauraro, warware matsaloli, kwantar da hankalin abokan ciniki masu fushi da hanyar LAST (Listen = Saurara, Apologize = Ba da haƙuri, Solve = Warware, Thank = Gode), hidima ta waya, chat da imel, da bin diddigi. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da atisaye. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku yi wasan kwaikwayo da aboki inda shi ne abokin ciniki mai fushi (misali an kawo abinci ba daidai ba, an makara wajen kawo kaya, ko an yi kuskure a lissafin kuɗi). Ku gaishe shi, ku yi amfani da LAST (Saurara, Ba da haƙuri, Warware, Gode), ku yarda kan gyara, sannan ku rubuta gajeren imel ko saƙon bin diddigi da za ku aika washegari.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu fara aiki, matasa, mutanen da ke komawa aiki bayan gidan yari, da masu ƙananan kasuwanci da ke yi wa abokan cinikinsu hidima da kansu a shaguna, gidajen abinci, cibiyoyin kira da ofisoshi.",
    startingPoint: "Suna magana da mutane kowace rana kuma su kansu sun taɓa zama abokan ciniki. Da yawa ba a taɓa koya musu yadda ake gaisuwa, gane ainihin buƙatar abokin ciniki, ɗaukar nauyin matsala, kwantar da hankalin abokin ciniki mai fushi ko rubuta imel na hidima ba.",
    gap: "Hidimar abokan ciniki mai kyau tana ɗaya daga cikin ƙwarewar da ake nema sosai a aiki; tana taimaka wa mutane samun aiki, riƙe shi da samun ci gaba, kuma tana taimaka wa ƙananan kasuwanci riƙe abokan ciniki. Masu koyo suna buƙatar hanya mai sauƙi da za a iya maimaitawa don yi wa abokan ciniki hidima ido da ido, ta waya, chat da imel, da kuma bin diddigi.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Ana yin atisaye ta wasan kwaikwayo da aboki ko ɗan iyali",
      "Tsaro: manaja ko jami'an tsaro ne ke kula da barazana, ba ku kaɗai ba",
      "Sirri: babu lambobin kati na gaske ko bayanan abokan ciniki a atisaye ko a kayan AI",
      "Lokaci: darussa na kusan minti biyar da gajerun atisaye"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan abokin ciniki ya iso ko ya kira", action: "gaishe shi da fara'a cikin 'yan daƙiƙoƙi, ido da ido ko ta waya", standard: "tare da sunanku ko sunan kasuwancin da tayin taimako" },
    { id: "O2", condition: "Idan abokin ciniki ya yi buƙata marar sarari", action: "yin tambayoyi buɗaɗɗu da rufaffu da maimaita ainihin buƙatar abokin ciniki", standard: "har abokin ciniki ya tabbatar kun gane daidai" },
    { id: "O3", condition: "Idan abokin ciniki yana da matsalar da ba ku ne kuka jawo ta ba", action: "ɗaukar nauyin matsalar da ba da mafita a sarari, zaɓuɓɓuka ko wanda ya dace ya taimaka", standard: "tare da mataki na gaba da lokacin da za ku cika" },
    { id: "O4", condition: "Idan abokin ciniki yana fushi", action: "kwantar da hankalin abokin ciniki da LAST: Saurara, Ba da haƙuri, Warware, Gode", standard: "kuna amfani da dukkan matakai huɗu kuma kuna neman taimako idan akwai barazana" },
    { id: "O5", condition: "Ta waya, chat ko imel", action: "rubuta ko ba da amsa a sarari mai daɗi, da amsar a farko da mataki na gaba", standard: "an tabbatar da kowane bayani kuma ba a bayyana bayanan sirri ba" },
    { id: "O6", condition: "Bayan an gyara matsala", action: "rubuta saƙon bin diddigi da ke duba gyaran da gayyatar abokin ciniki ya dawo", standard: "an aika shi a lokacin da kuka yi alƙawari" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tushen hidima mai kyau",
      lessons: [
        {
          objectives: ["O1"],
          title: "Gaishe abokan ciniki da kyakkyawan farko",
          minutes: 4,
          goal: "Gaishe abokin ciniki da fara'a cikin 'yan daƙiƙoƙi, ido da ido ko ta waya.",
          text: [
            "Abokan ciniki suna yanke yadda suke ji game da kasuwanci a cikin 'yan daƙiƙoƙin farko. Gaisuwa mai daɗi tana nuna musu suna da muhimmanci. Ido da ido, ku gaishe mutane da sauri, ko da kuna aiki: ku kalle su a ido, ku yi murmushi ku ce sannu. Idan kuna tare da wani, ɗaga kai da cewa \"Ina zuwa wurinku yanzu\" yana hana mutum na gaba jin an yi watsi da shi.",
            "Ku yi amfani da gaisuwa mai sauƙi da daɗi: \"Sannu, barka da zuwa! Yaya zan taimake ku yau?\" A gidan abinci: \"Barka da yamma, maraba! Mutum nawa ne?\" A teburin karɓar baƙi na ofis: \"Barka da safiya, wa kuka zo gani?\" A waya, ku faɗi sunan kasuwancin da sunanku: \"Na gode da kiran Main Street Pharmacy, ni ce Dana. Yaya zan taimake ku?\"",
            "Ku nuna kun shirya: ku ajiye waya, ku tsaya ko ku zauna a miƙe, kuma wurin ya kasance tsaftatacce. Ku yi amfani da sunan abokin ciniki idan ya faɗa. Ƙananan abubuwa suna haɗuwa su ba da kyakkyawan farko."
          ],
          steps: ["Ku lura da abokin ciniki da sauri.", "Ku kalle shi a ido ku yi murmushi.", "Ku yi gaisuwa mai daɗi ku ba da taimako.", "Kuna aiki? Ku ɗaga kai ku ce \"Ina zuwa wurinku yanzu.\"", "A waya: sunan kasuwanci, sunanku, tayin taimako."],
          words: [["Kyakkyawan farko (first impression)", "yadda wani yake ji game da ku ko kasuwanci a cikin 'yan daƙiƙoƙin farko."], ["Gaisuwa", "kalmomin farko masu daɗi da kuke faɗa wa abokin ciniki."]],
          slides: [
            { title: "Daƙiƙoƙin farko suna da muhimmanci", bullets: ["Abokan ciniki suna yanke yadda suke ji da sauri", "Gaisuwa mai daɗi tana nuna suna da muhimmanci"] },
            { title: "Ido da ido", bullets: ["Kallo a ido da murmushi", "\"Sannu, barka da zuwa! Yaya zan taimake ku yau?\"", "Kuna aiki? \"Ina zuwa wurinku yanzu.\""] },
            { title: "A waya", bullets: ["Sunan kasuwanci da sunanku", "\"Na gode da kiran Main Street Pharmacy, ni ce Dana.\"", "\"Yaya zan taimake ku?\""] },
            { title: "Ku nuna kun shirya", bullets: ["Ku ajiye waya", "Wuri tsaftatacce", "Ku yi amfani da sunan abokin ciniki"] }
          ],
          tryIt: "Ku rubuta gaisuwa uku: ɗaya don shago ko gidan abinci, ɗaya don teburin karɓar baƙi na ofis, ɗaya kuma don amsa waya a wani kasuwanci. Ku faɗi kowace da babbar murya kuna murmushi har ta yi kama da ta saba.",
          youCanNow: "gaishe abokan ciniki da fara'a ido da ido da kuma ta waya.",
          quickCheck: [
            { objective: "O1", q: "Me yasa gaisuwa mai daɗi take da muhimmanci?", options: ["Abokan ciniki suna auna kasuwanci a cikin 'yan daƙiƙoƙin farko", "Tana sa layi ya yi tafiyar hawainiya", "Ana buƙatar ta ne ga abokan ciniki na yau da kullum kawai", "Tana maye gurbin warware matsala"], answer: 0, why: "Kyakkyawan farko yana tsara yadda abokan ciniki ke ji game da dukkan ziyarar." },
            { objective: "O1", q: "Waya ta yi ƙara yayin da kuke gyara kaya a kanta. Me za ku ce idan kun ɗauka?", options: ["\"Eh?\"", "\"Jira.\"", "\"Na gode da kira, ni ne Sam. Yaya zan taimake ku?\"", "Babu komai har sai sun yi magana"], answer: 2, why: "Gaisuwa mai kyau tana faɗin sunan kasuwanci ko naku kuma tana ba da taimako." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Sauraro don gane ainihin buƙata",
          minutes: 5,
          goal: "Yi tambayoyi da maimaitawa don gane abin da abokin ciniki yake buƙata da gaske.",
          text: [
            "Abokan ciniki ba koyaushe suke faɗin ainihin abin da suke buƙata ba. Mai sayayya yana neman \"cajar waya\" amma yana buƙatar wadda ta dace da tsohuwar waya. Mai kira yana cewa \"lissafin kuɗina ba daidai ba ne\" amma a gaskiya yana son sanin dalilin da ya sa ya ƙaru. Sauraro da kyau yana adana lokaci kuma yana hana kuskure.",
            "Ku bar abokin ciniki ya gama ba tare da katse shi ba. Sannan ku yi tambayoyi buɗaɗɗu: \"Me za ku yi amfani da shi?\" \"Yaushe kuka fara lura da matsalar?\" Ku yi tambaya rufaffiya don tabbatar da wani bayani: \"Odar ranar Talata ce?\"",
            "Sannan ku maimaita: \"To, kuna buƙatar caja don iPhone 8, kuma kuna son ta yau. Haka ne?\" Maimaitawa tana nuna kun saurara kuma tana kama kuskure kafin ya faru. A gidan abinci, karanta odar ga abokin ciniki yana hana kawo abincin da ba daidai ba zuwa tebur."
          ],
          steps: ["Ku bar abokin ciniki ya gama.", "Ku yi tambayoyi buɗaɗɗu don gane buƙatar.", "Ku yi tambayoyi rufaffu don tabbatar da bayanai.", "Ku maimaita abin da kuka ji.", "Ku tambaya: \"Haka ne?\""],
          words: [["Tambaya buɗaɗɗiya", "tambayar da ke buƙatar fiye da amsar eh ko a'a."], ["Tambaya rufaffiya", "tambayar da ake amsawa da eh, a'a ko ɗan gajeren bayani."], ["Maimaitawa", "faɗin buƙatar abokin ciniki gare shi don tabbatar kun gane."]],
          slides: [
            { title: "Ku gane ainihin buƙata", bullets: ["\"Caja\" na iya nufin wadda ta dace da tsohuwar waya", "\"Lissafina ba daidai ba ne\" na iya nufin \"me yasa ya ƙaru?\""] },
            { title: "Ku yi tambayoyi masu kyau", bullets: ["Buɗaɗɗiya: \"Me za ku yi amfani da shi?\"", "Rufaffiya: \"Odar ranar Talata ce?\""] },
            { title: "Ku maimaita", bullets: ["\"To, kuna buƙatar... Haka ne?\"", "Gidan abinci: ku karanta odar", "Tana kama kuskure da wuri"] }
          ],
          tryIt: "Ku nemi aboki ko ɗan iyali ya yi kamar abokin ciniki mai buƙata marar sarari (\"Ina buƙatar wani abu don kicin ɗina\"). Ku yi tambayoyi buɗaɗɗu biyu da rufaffiya ɗaya, sannan ku maimaita ainihin buƙatarsa.",
          youCanNow: "amfani da tambayoyi da maimaitawa don gane abin da abokin ciniki yake buƙata da gaske.",
          quickCheck: [
            { objective: "O2", q: "Mece ce tambaya rufaffiya?", options: ["Tambayar da ke gayyatar dogon labari", "Tambaya mai gajeriyar amsa, kamar eh, a'a ko rana", "Tambayar da kuke yi bayan an rufe shago", "Tambayar da abokin ciniki ba zai iya amsawa ba"], answer: 1, why: "Tambayoyi rufaffu suna tabbatar da bayanai da sauri." },
            { objective: "O2", q: "Abokin ciniki ya ce, \"Ina buƙatar kyauta don mahaifina.\" Me za ku fara tambaya?", options: ["\"Kuɗi nawa kuke da shi?\"", "\"Kuna son mafi tsada?\"", "\"Za ku iya dawowa daga baya?\"", "\"Me mahaifinku yake son yi?\""], answer: 3, why: "Tambaya buɗaɗɗiya tana taimaka muku gane ainihin buƙata." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Warware matsalar",
          minutes: 5,
          goal: "Ɗauki nauyin matsalar abokin ciniki ku ba da mafita a sarari ko mataki na gaba.",
          text: [
            "Abokan ciniki suna tuna yadda kuka bi da matsalarsu fiye da matsalar kanta. Ku ɗauki nauyinta: ku ce \"Bari in taimake ku da wannan,\" ko da wani ne ya jawo ta. Kada ku taɓa cewa \"Wannan ba sashena ba ne\" ku tafi.",
            "Ku san abin da za ku iya yi. Ku koyi ƙa'idodin wurin aikinku (policy) game da mayar da kaya, mayar da kuɗi, musanya da rangwame, da wanda za ku kira idan wani abu ya fi ƙarfinku. Ku ba da zaɓuɓɓuka idan za ku iya: \"Zan iya canja muku shi yau, ko in mayar da kuɗin a katinku. Wanne kuka fi so?\" Idan dole ku miƙa abokin ciniki ga wani, ku bayyana dalili, ku gabatar da su, ku kuma faɗa wa sabon mutumin bayanan don kada abokin ciniki ya maimaita komai.",
            "Kada ku taɓa yin alƙawarin abin da ba za ku iya cikawa ba. \"Zan bincika in kira ku kafin ƙarfe 3 na rana\" ya fi \"Komai zai yi daidai\" idan ba ku da tabbas. Sannan ku cika alƙawarinku."
          ],
          steps: ["Ku ɗauki nauyi: \"Bari in taimake ku da wannan.\"", "Ku duba abin da ƙa'idar wurin aikinku ta yarda da shi.", "Ku ba da zaɓi ɗaya ko biyu a sarari.", "Idan ya fi ƙarfinku, ku miƙa shi tare da dukkan bayanai.", "Ku yi alƙawarin abin da za ku iya cikawa kawai, tare da lokaci."],
          words: [["Ƙa'ida (policy)", "dokokin kasuwanci, kamar na mayar da kaya ko mayar da kuɗi."], ["Miƙa sama (escalate)", "miƙa matsala ga manaja ko wanda zai iya yin fiye da haka."], ["Ɗaukar nauyi (ownership)", "ɗaukar matsalar abokin ciniki kamar taku ce ku warware."]],
          slides: [
            { title: "Ku ɗauki nauyi", bullets: ["\"Bari in taimake ku da wannan.\"", "Kada ku taɓa cewa \"Wannan ba sashena ba ne\""] },
            { title: "Ku san zaɓuɓɓukanku", bullets: ["Ku koyi ƙa'idodin mayar da kaya, mayar da kuɗi, musanya", "Ku ba da zaɓi: \"Canji yau ko mayar da kuɗi?\""] },
            { title: "Miƙa wa wani", bullets: ["Ku bayyana dalili ku gabatar da mutum na gaba", "Ku ba shi bayanan", "Kada abokin ciniki ya maimaita komai"] },
            { title: "Alƙawari", bullets: ["Ku yi alƙawarin abin da za ku iya cikawa kawai", "\"Zan kira ku kafin ƙarfe 3 na rana\" kuma ku yi"] }
          ],
          tryIt: "Ku zaɓi matsalar da aka saba gani a aikin da kuke yi ko kuke so (girman da bai dace ba, abinci mai sanyi, ganawar da aka rasa, tambaya game da lissafin kuɗi). Ku rubuta abin da za ku faɗa don ɗaukar nauyinta, zaɓi biyu da za ku iya bayarwa, da wanda za ku miƙa wa idan ya zama dole.",
          youCanNow: "ɗaukar nauyin matsalar abokin ciniki da ba da zaɓuɓɓuka a sarari ko mataki na gaba.",
          quickCheck: [
            { objective: "O3", q: "Mene ne ma'anar ɗaukar nauyin matsala?", options: ["Ɗora laifi kan wani sashe", "Cewa ba aikinku ba ne", "Ɗaukar matsalar kamar taku ce ku taimaka a warware ta", "Biyan kuɗin matsalar da kanku"], answer: 2, why: "Ɗaukar nauyi yana nufin kuna taimaka wa abokin ciniki ko da ba ku ne kuka jawo matsalar ba." },
            { objective: "O3", q: "Abokin ciniki yana buƙatar amsar da ba ku sani ba. Me za ku ce?", options: ["\"Zan bincika in kira ku kafin ƙarfe 3 na rana.\"", "\"Ban sani ba.\"", "\"Ku duba a intanet.\"", "\"Wataƙila wani zai kira ku wani lokaci.\""], answer: 0, why: "Alƙawari a sarari tare da lokaci yana gina amana." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tushen hidima mai kyau",
        questions: [
          { objective: "O1", q: "Kuna taimakon abokin ciniki ɗaya sai wani ya iso. Me za ku yi?", options: ["Ku yi watsi da shi har sai kun gama", "Ku ɗaga kai ku ce \"Ina zuwa wurinku yanzu\"", "Ku ce masa ya dawo daga baya", "Ku bar abokin ciniki na farko"], answer: 1, why: "Ɗaga kai da kalma ɗaya suna hana abokin ciniki na gaba jin an yi watsi da shi." },
          { objective: "O1", q: "Wace ce gaisuwa mai kyau a waya?", options: ["\"Eh?\"", "\"Me kuke so?\"", "\"Hello?\" sannan ku jira", "\"Na gode da kiran Main Street Pharmacy, ni ce Dana. Yaya zan taimake ku?\""], answer: 3, why: "Tana faɗin sunan kasuwanci, sunanku kuma tana ba da taimako." },
          { objective: "O2", q: "Me yasa za ku maimaita odar abinci a gidan abinci?", options: ["Don kama kuskure kafin a dafa abincin", "Don rage gudun abokin ciniki", "Domin tana da daɗi", "Don nuna ƙwaƙwalwarku"], answer: 0, why: "Maimaitawa tana kama kuskure da wuri." },
          { objective: "O2", q: "Wace ce tambaya buɗaɗɗiya?", options: ["\"Mai shuɗi ne?\"", "\"A nan kuka saye shi?\"", "\"Me za ku yi amfani da shi?\"", "\"Shi ke nan?\""], answer: 2, why: "Tana buƙatar fiye da eh ko a'a." },
          { objective: "O3", q: "Ba ku ne kuka jawo matsalar abokin ciniki ba. Me ya kamata ku ce?", options: ["\"Wannan ba sashena ba ne.\"", "\"Bari in taimake ku da wannan.\"", "\"Ba laifina ba ne.\"", "Babu komai"], answer: 1, why: "Ɗaukar nauyin matsalar yana gina amana." }
        ]
      }
    },
    {
      name: "Babi na 2: Lokuta masu wuya da kowace hanyar sadarwa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Abokan ciniki masu fushi da hanyar LAST",
          minutes: 6,
          goal: "Kwantar da hankalin abokin ciniki mai fushi da LAST: Saurara, Ba da haƙuri, Warware, Gode.",
          text: [
            "Abokan ciniki masu fushi yawanci suna fushi ne da abin da ya faru, ba da ku ba. Natsuwa aikinku ce kuma ƙarfinku ce. Hanyar LAST tana ba ku matakai huɗu masu sauƙi (haruffan sun fito daga kalmomin Turanci: Listen, Apologize, Solve, Thank).",
            "Listen (Saurara): ku bar shi ya yi magana ba tare da katse shi ba; ku gyaɗa kai ku maimaita: \"Odarku ta zo da jinkirin minti 40 kuma abincin ya yi sanyi.\" Apologize (Ba da haƙuri): ku ce ku yi haƙuri da gaske game da yadda abin ya shafe shi: \"Ku yi haƙuri sosai, bai kamata ku sami irin wannan ba.\" Kuna iya ba da haƙuri ba tare da ɗora laifi kan kowa ba. Solve (Warware): ku ba da gyara bisa ƙa'idar wurin aiki, ko ku kira manaja: \"Zan iya sake yi muku shi yanzu, ko in cire shi daga lissafinku.\" Thank (Gode): ku gode masa don ya faɗa muku: \"Na gode da kuka sanar da mu. Yana taimaka mana mu gyara.\"",
            "Ku yi magana a hankali da ƙaramar murya, kada ku yi gardama ko ku ɗauke shi a kanku, kuma ku yi amfani da sunansa. Idan abokin ciniki ya fara barazana ko zagi, ba dole ku jure ba: ku kira manaja ko jami'an tsaro ku bi ƙa'idodin tsaro na wurin aikinku."
          ],
          steps: ["Saurara: ku bar shi ya gama, sannan ku maimaita.", "Ba da haƙuri da gaske game da yadda abin ya shafe shi.", "Warware: ku ba da gyara ko ku kira manaja.", "Gode masa don ya faɗa muku.", "Barazana ko zagi: ku kira manaja ko jami'an tsaro."],
          words: [["LAST", "Listen (Saurara), Apologize (Ba da haƙuri), Solve (Warware), Thank (Gode): matakai huɗu don abokin ciniki mai fushi."], ["Da gaske (sincere)", "da gaskiya kuma daga zuciya."]],
          slides: [
            { title: "Abin da ya faru ne, ba ku ba", bullets: ["Ku natsu: aikinku ne kuma ƙarfinku ne", "Ku yi amfani da LAST"] },
            { title: "L da A", bullets: ["Listen (Saurara): ku bar shi ya gama, ku maimaita", "Apologize (Ba da haƙuri): \"Ku yi haƙuri sosai, wannan bai dace ba.\""] },
            { title: "S da T", bullets: ["Solve (Warware): \"Zan iya sake yi muku shi ko in cire shi daga lissafi.\"", "Thank (Gode): \"Na gode da kuka sanar da mu.\""] },
            { title: "Ku kasance lafiya", bullets: ["Murya ƙarama a hankali; kada ku yi gardama", "Barazana ko zagi: ku kira manaja ko jami'an tsaro"] }
          ],
          tryIt: "Ku rubuta rubutun LAST don ɗaya daga cikin waɗannan: abinci mai sanyi, kayan da ba su iso ba, ko karɓar kuɗi fiye da kima. Ku rubuta jimla ɗaya don kowane harafi, sannan ku faɗi dukkan rubutun da babbar murya.",
          youCanNow: "kwantar da hankalin abokin ciniki mai fushi da Saurara, Ba da haƙuri, Warware, Gode.",
          quickCheck: [
            { objective: "O4", q: "Mene ne ma'anar S a cikin LAST?", options: ["Smile (Murmushi)", "Solve (Warware)", "Stop (Tsaya)", "Say sorry again (Sake ba da haƙuri)"], answer: 1, why: "LAST shi ne Listen, Apologize, Solve da Thank (Saurara, Ba da haƙuri, Warware, Gode)." },
            { objective: "O4", q: "Abokin ciniki yana fushi saboda kayansa ba su iso ba. Me za ku fara yi?", options: ["Ku ba da mayar da kuɗi kafin ya gama", "Ku ce laifin kamfanin kawo kaya ne", "Ku miƙa kiransa nan take", "Ku saurare shi sosai ku maimaita abin da ya faru"], answer: 3, why: "LAST yana farawa da sauraro don abokin ciniki ya ji an saurare shi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Hidima ta waya, chat da imel",
          minutes: 5,
          goal: "Ba da hidima a sarari mai daɗi ta waya, chat da imel.",
          text: [
            "Waya: abokan ciniki ba sa ganin fuskarku, don haka muryarku ce ke aiki. Ku yi murmushi yayin magana; yana canja sautin muryarku da gaske. Ku yi magana a sarari, kuma kafin ku sa wani ya jira, ku tambaya: \"Zan iya sa ku ku ɗan jira yayin da nake dubawa?\" ku kuma gode masa idan kun dawo. Idan dole ku miƙa kiran, ku faɗa masa wurin wa za ku miƙa shi da dalili.",
            "Chat (hira ta rubutu): ku amsa da sauri, saƙonni su zama gajeru, ku yi amfani da kalmomi masu daɗi. Ku duba kafin ku rufe: \"Akwai wani abu kuma da zan taimaka da shi?\" Imel: ku yi amfani da taken saƙo (subject) a sarari, ku gaishe shi da sunansa, ku amsa tambayar a layukan farko, ku ba da mataki na gaba, ku sa sunanku a ƙarshe. Ku karanta shi sau ɗaya kafin ku aika. Mataimakin AI zai iya taimaka muku rubuta ko gyara amsa, amma ku tabbatar da kowane bayani kuma kada ku taɓa saka bayanan sirri na abokin ciniki a ciki.",
            "A kowace hanya, ku kare sirri. Ku bi matakan kamfaninku don tabbatar da wanda kuke magana da shi, kuma kada ku taɓa neman cikakkiyar lambar kati ko kalmar sirri (password) ta chat ko imel."
          ],
          steps: ["Waya: ku yi murmushi, ku yi magana a sarari, ku tambaya kafin sa jira, ku gode bayan haka.", "Miƙa kira: ku faɗi wurin wa da dalili.", "Chat: da sauri, gajere, mai daɗi; ku tambaya \"Akwai wani abu kuma?\"", "Imel: take a sarari, suna, amsa a farko, mataki na gaba, sunanku.", "Ku kare sirri: ku bi binciken tantancewa, babu lambar kati ko kalmar sirri ta chat ko imel."],
          words: [["Sa jira (hold)", "dakatar da kira yayin da kuke duba wani abu."], ["Miƙa kira (transfer)", "tura kira ga wani mutum ko wata ƙungiya."], ["Hanyar sadarwa (channel)", "hanyar da abokan ciniki ke tuntuɓar ku: ido da ido, waya, chat, imel ko kafofin sada zumunta."]],
          slides: [
            { title: "Waya", bullets: ["Ku yi murmushi: yana canja muryarku", "\"Zan iya sa ku ku ɗan jira?\"", "Miƙa kira: ku faɗi wurin wa da dalili"] },
            { title: "Chat", bullets: ["Ku amsa da sauri, gajere", "Kalmomi masu daɗi", "\"Akwai wani abu kuma da zan taimaka da shi?\""] },
            { title: "Imel", bullets: ["Take a sarari da sunansa", "Amsa a farko, sannan mataki na gaba", "Ku sa sunanku; ku karanta kafin aikawa"] },
            { title: "Kowace hanya", bullets: ["AI zai iya taimakawa rubutu; ku ne ke tabbatar da bayanai", "Ku bi binciken tantancewa", "Babu lambar kati ko kalmar sirri ta chat ko imel"] }
          ],
          tryIt: "Wani abokin ciniki ya aiko da imel: \"Na yi odar jaket mai shuɗi amma an kawo mini ja. Yanzu me zan yi?\" Ku rubuta gajeriyar amsa mai take, gaisuwa, ba da haƙuri, mafita, mataki na gaba da sunanku.",
          youCanNow: "yi wa abokan ciniki hidima mai kyau ta waya, chat da imel yayin da kuke kare sirrinsu.",
          quickCheck: [
            { objective: "O5", q: "Me ya kamata ya fara zuwa a jikin imel na hidimar abokan ciniki?", options: ["Amsar tambayarsu", "Dogon labari game da kamfaninku", "Matsayinku a aiki", "Jerin dokoki"], answer: 0, why: "Abokan ciniki suna son amsar a farko, sannan mataki na gaba." },
            { objective: "O5", q: "Kun yi amfani da mataimakin AI don rubuta amsar chat. Me za ku yi kafin ku aika?", options: ["Ku aika nan take", "Ku saka lambar katin abokin ciniki", "Ku tabbatar da kowane bayani ku cire bayanan sirri", "Ku tura ta ga dukkan abokan ciniki"], answer: 2, why: "Dole a duba rubutun AI kuma kada a bar bayanan sirri a ciki." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Bin diddigi da gina aminci",
          minutes: 5,
          goal: "Bi diddigi bayan matsala ku mayar da abokin ciniki mai dawowa akai-akai.",
          text: [
            "Matsalar da aka gyara da kyau na iya sa abokin ciniki ya fi aminci fiye da idan babu abin da ya lalace. Bin diddigi shi ne yadda kuke kammala aikin.",
            "Idan kun yi alƙawarin kira ko sabon labari, ku yi shi a kan lokaci, ko da labarin shi ne \"har yanzu muna kan aikin\". Bayan gyara, ku sake tuntuɓar sa idan ya dace: \"Ina son in tabbata sabon ɓangaren ya iso kuma yana aiki.\" Ku riƙa rubuta bayanai masu sauƙi a tsarin kamfaninku ko a littafi: suna, matsala, abin da kuka yi, da abin da ke biye, don kowa a ƙungiyar ya iya taimakawa.",
            "Ƙananan ƙarin abubuwa suna gina aminci: tuna abin da abokin ciniki na yau da kullum ya saba saya, gode wa abokin ciniki da ya daɗe, ko sanar da abokin ciniki idan kayan da yake so sun dawo. Idan kuna da kasuwancinku, ku nemi abokan ciniki masu farin ciki su rubuta ra'ayinsu (review), kuma ku ɗauki koke-koke a matsayin shawara kyauta kan abin da za ku gyara."
          ],
          steps: ["Ku cika kowane alƙawarin kira ko sabon labari, a kan lokaci.", "Ku sake tuntuɓa bayan gyara.", "Ku rubuta bayanai masu sauƙi: suna, matsala, mataki, mataki na gaba.", "Ku tuna abokan ciniki na yau da kullum ku gode musu.", "Ku yi amfani da koke-koke don ingantawa."],
          words: [["Bin diddigi (follow-up)", "sake tuntuɓar abokin ciniki don dubawa ko ba shi sabon labari."], ["Aminci (loyalty)", "lokacin da abokan ciniki ke ci gaba da dawowa kuma suna ba da shawarar ku ga wasu."]],
          slides: [
            { title: "Bin diddigi yana kammala aikin", bullets: ["Matsalar da aka gyara da kyau tana gina aminci"] },
            { title: "Ku cika alƙawari", bullets: ["Kira ko sabon labari a kan lokaci", "Ko da \"har yanzu muna kan aikin\" ne", "Ku sake tuntuɓa bayan gyara"] },
            { title: "Ku rubuta bayanai", bullets: ["Suna, matsala, mataki, mataki na gaba", "Kowa a ƙungiyar zai iya taimakawa"] },
            { title: "Ku gina aminci", bullets: ["Ku tuna abokan ciniki na yau da kullum", "Ku gode wa abokan ciniki da suka daɗe", "Koke-koke shawara ce kyauta"] }
          ],
          tryIt: "Aikin ƙarshe: ku yi wasan kwaikwayo da aboki inda shi ne abokin ciniki mai fushi, kuna amfani da gaisuwa da LAST, ku yarda kan gyara, sannan ku rubuta saƙon bin diddigi da za ku aika washegari.",
          youCanNow: "bin diddigi bayan matsala da gina amincin abokan ciniki.",
          quickCheck: [
            { objective: "O6", q: "Me yasa matsalar da aka gyara da kyau za ta iya sa abokin ciniki ya fi aminci?", options: ["Zai sami abubuwa kyauta har abada", "Yana ganin kasuwancin ya damu kuma yana cika alƙawari", "Zai manta matsalar ta faru", "Ba shi da wani zaɓi"], answer: 1, why: "Bin da matsala da kyau yana nuna ana iya amincewa da kasuwancin." },
            { objective: "O6", q: "Jiya kun canja wa abokin ciniki odar da ba daidai ba. Me za ku yi yau?", options: ["Babu komai; an gama", "Ku aika takardar rangwame (coupon) ba tare da saƙo ba", "Ku nemi ya rubuta ra'ayinsa nan take", "Ku aika gajeren saƙo don dubawa ko komai yana daidai yanzu"], answer: 3, why: "Bin diddigi yana duba gyaran kuma yana nuna kun damu." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Lokuta masu wuya da kowace hanyar sadarwa",
        questions: [
          { objective: "O4", q: "Mene ne LAST yake nufi?", options: ["Look, Ask, Sell, Talk (Duba, Tambaya, Sayar, Magana)", "Leave, Argue, Stop, Try (Tafi, Gardama, Tsaya, Gwada)", "Listen, Apologize, Solve, Thank (Saurara, Ba da haƙuri, Warware, Gode)", "Learn, Answer, Smile, Tell (Koya, Amsa, Murmushi, Faɗa)"], answer: 2, why: "LAST shi ne Listen, Apologize, Solve, Thank (Saurara, Ba da haƙuri, Warware, Gode)." },
          { objective: "O4", q: "Mai cin abinci mai fushi ya ce abincin ya yi sanyi. Mene ne mataki na farko?", options: ["Ku bayyana cewa kicin yana da aiki sosai", "Ku saurara ku maimaita abin da ya faɗa", "Ku ba da takardar rangwame kafin ya gama", "Ku tafi"], answer: 1, why: "Sauraro ne ke farawa a LAST." },
          { objective: "O5", q: "Kafin ku sa mai kira ya jira, ya kamata ku:", options: ["Danna maɓallin jira kawai", "Katse waya ku sake kira", "Miƙa shi ko'ina", "Tambaya \"Zan iya sa ku ku ɗan jira yayin da nake dubawa?\""], answer: 3, why: "Tambaya da farko ladabi ne kuma yana riƙe amana." },
          { objective: "O5", q: "Abokin ciniki a chat yana son ba ku cikakkiyar lambar katinsa. Me za ku yi?", options: ["Ku faɗa masa kada ya raba ta a chat, ku bi matakan tsaro na kamfaninku", "Ku kwafe ta a bayananku", "Ku saka ta a kayan AI", "Ku karanta masa ita"], answer: 0, why: "Kada a taɓa raba lambobin kati ta chat ko imel." },
          { objective: "O6", q: "Kun yi wa abokin ciniki alƙawarin sabon labari kafin ranar Juma'a amma babu labari tukuna. Me za ku yi?", options: ["Ku jira har sai kun sami labari", "Ku tuntuɓe shi ranar Juma'a da labarin \"har yanzu muna kan aikin\"", "Ku yi watsi da shi", "Ku nemi abokin aiki ya yi kamar an gyara"], answer: 1, why: "Cika alƙawari a kan lokaci yana gina amana ko da babu labari." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Ƙwarewa a Hidimar Abokan Ciniki",
    questions: [
      { objective: "O1", q: "Me yasa gaisuwa take da muhimmanci haka?", options: ["Abokan ciniki suna auna kasuwanci a daƙiƙoƙin farko", "Doka ce", "Ita ce ke ɗaukar lokaci mafi tsawo", "Tana maye gurbin warware matsaloli"], answer: 0, why: "Kyakkyawan farko yana tsara yadda abokan ciniki ke ji." },
      { objective: "O1", q: "Wace ce gaisuwa mai kyau a teburin karɓar baƙi na ofis?", options: ["Ku ci gaba da rubutu ba tare da cewa komai ba", "\"Barka da safiya, wa kuka zo gani?\"", "\"Me?\"", "\"Muna da aiki.\""], answer: 1, why: "Tana da daɗi kuma tana kai ga buƙatarsu." },
      { objective: "O1", q: "Wanne yake nuna kun shirya yin hidima?", options: ["Kuna duba wayarku", "Kuna cin abinci a kanta", "Waya a ajiye kuma wuri tsaftatacce", "Kuna jingina da bango"], answer: 2, why: "Nuna kun shirya yana ba da kyakkyawan farko." },
      { objective: "O2", q: "Mai sayayya ya nemi \"caja\". Mene ne mataki mafi kyau na gaba?", options: ["Ku ba shi kowace caja", "Ku ce ba ku da ita", "Ku nuna masa layin kaya", "Ku tambaye shi wace waya ce"], answer: 3, why: "Tambaya tana gano ainihin buƙata." },
      { objective: "O2", q: "\"To, kuna buƙatar manyan pizza biyu a kawo kafin ƙarfe 6. Haka ne?\" misali ne na:", options: ["Maimaitawa", "Ƙara sayarwa (upselling)", "Miƙa sama", "Gaisuwa rufaffiya"], answer: 0, why: "Tana tabbatar da odar kafin a yi aiki." },
      { objective: "O2", q: "Tambaya rufaffiya tana da amfani don:", options: ["Fara dogon labari", "Tabbatar da wani bayani, kamar rana", "Kwantar da hankalin abokin ciniki mai fushi", "Gaishe wani"], answer: 1, why: "Tambayoyi rufaffu suna tabbatar da bayanai da sauri." },
      { objective: "O3", q: "Wace magana ce ke nuna ɗaukar nauyi?", options: ["\"Wannan ba aikina ba ne.\"", "\"Ku kira wani.\"", "\"Bari in taimake ku da wannan.\"", "\"Ku gwada shafin intanet.\""], answer: 2, why: "Ɗaukar nauyin matsalar yana kwantar wa abokin ciniki hankali." },
      { objective: "O3", q: "Me yasa za ku ba da zaɓi kamar \"canji ko mayar da kuɗi\"?", options: ["Don ruɗa shi", "Yana ba abokin ciniki ɗan iko", "Don jinkirta gyaran", "Koyaushe ana buƙatar haka"], answer: 1, why: "Zaɓuɓɓuka suna sa abokan ciniki su ji ana girmama su." },
      { objective: "O3", q: "Idan kuna miƙa abokin ciniki ga manaja, ya kamata ku:", options: ["Sa shi ya sake bayyana komai", "Kada ku ce komai", "Ku tafi ba tare da bayani ba", "Ku bayyana dalili, ku gabatar da su, ku raba bayanan"], answer: 3, why: "Miƙawa mai kyau tana hana abokin ciniki maimaitawa." },
      { objective: "O3", q: "Wane alƙawari ne ya fi kyau idan ba ku da tabbas game da amsa?", options: ["\"Zan bincika in kira ku kafin ƙarfe 3 na rana.\"", "\"Tabbas komai zai yi daidai.\"", "\"Kyauta ne, kada ku damu.\"", "\"Babu wanda ya sani.\""], answer: 0, why: "Ku yi alƙawarin abin da za ku iya cikawa kawai, tare da lokaci." },
      { objective: "O4", q: "A cikin LAST, A tana nufin:", options: ["Argue (Gardama)", "Apologize (Ba da haƙuri)", "Ask for ID (Neman katin shaida)", "Agree with everything (Yarda da komai)"], answer: 1, why: "Ba da haƙuri da gaske yana taimakawa kwantar da hankalin abokin ciniki." },
      { objective: "O4", q: "Za ku iya ba da haƙuri ba tare da ɗora laifi kan kowa ba?", options: ["A'a, dole ku faɗi wanda ya jawo shi", "Manajoji ne kaɗai ke iya ba da haƙuri", "Eh: \"Ku yi haƙuri da abin da ya same ku.\"", "Ba a taɓa yarda a ba da haƙuri ba"], answer: 2, why: "Ba da haƙuri da gaske game da abin da abokin ciniki ya fuskanta ne." },
      { objective: "O4", q: "Abokin ciniki mai fushi ya fara barazana. Me ya kamata ku yi?", options: ["Ku mayar masa da gardama", "Ku yi watsi da shi ku ci gaba da hidima", "Ku yi masa barazana", "Ku kira manaja ko jami'an tsaro ku bi ƙa'idodin tsaro"], answer: 3, why: "Tsaronku ne farko." },
      { objective: "O4", q: "A cikin LAST, T tana nufin:", options: ["Thank (Ku gode masa don ya faɗa muku)", "Tell (Ku faɗa masa ya yi kuskure)", "Transfer (Ku miƙa kiran)", "Take a break (Ku huta)"], answer: 0, why: "Godiya tana kammalawa da kyau." },
      { objective: "O5", q: "Me yasa za ku yi murmushi a waya?", options: ["Abokin ciniki yana ganin ku", "Yana canja sautin muryarku", "Dokar kamfani ce a ko'ina", "Yana gajarta kira"], answer: 1, why: "Murmushi yana sa muryarku ta yi daɗi." },
      { objective: "O5", q: "Wanne ya dace a imel mai kyau ga abokin ciniki?", options: ["Babu take", "Dogon labari kafin amsa", "Take a sarari, sunansa, amsa a farko da mataki na gaba", "Duk manyan haruffa"], answer: 2, why: "Tsari a sarari yana sa imel ya zama mai sauƙin aiki da shi." },
      { objective: "O5", q: "Idan kuna amfani da mataimakin AI don rubuta amsa, ya kamata ku:", options: ["Saka lambar katin abokin ciniki", "Aika ta ba tare da karantawa ba", "Bar ta ta yi alƙawarin mayar da kuɗi", "Tabbatar da kowane bayani ku bar bayanan sirri a waje"], answer: 3, why: "Ku ne ke da alhakin bayanai da sirri." },
      { objective: "O6", q: "Me yasa za ku riƙa rubuta bayanai kan kowace matsalar abokin ciniki?", options: ["Don kowa a ƙungiyar ya iya taimakawa a gaba", "Don gulma", "Don rage gudu", "Bayanai ba su da amfani"], answer: 0, why: "Bayanai suna sa hidima ta kasance iri ɗaya." },
      { objective: "O6", q: "Matsalar da aka gyara da kyau na iya sa abokin ciniki:", options: ["Ba zai taɓa dawowa ba", "Ya fi aminci fiye da da", "Ya ƙara fushi", "Ya manta kasuwancinku"], answer: 1, why: "Gyara mai kyau yana gina amana da aminci." },
      { objective: "O6", q: "Ga mai ƙaramin kasuwanci, ya fi kyau a ɗauki koke-koke a matsayin:", options: ["Hare-hare da za a yi watsi da su", "Dalilan gardama", "Shawara kyauta kan abin da za a gyara", "Abin da za a goge"], answer: 2, why: "Koke-koke suna nuna abin da za a inganta." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      3,
      5,
      7,
      10,
      12,
      15,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Gaisuwa",
        objective: "O1",
        notYet: "Babu gaisuwa, ko gaisuwa marar daɗi ko ta gaggawa.",
        meets: "Gaisuwa mai daɗi cikin 'yan daƙiƙoƙi tare da suna da tayin taimako.",
        exceeds: "Gaisuwar ta dace da wurin kuma tana kama da ta saba."
      },
      {
        name: "Saurara da Ba da haƙuri",
        objective: "O4",
        notYet: "An katse shi, an yi gardama ko an ɗora laifi.",
        meets: "An saurara sosai, an maimaita matsalar kuma an ba da haƙuri ba tare da ɗora laifi ba.",
        exceeds: "An faɗi yadda abokin ciniki yake ji kuma an natsu har ƙarshe."
      },
      {
        name: "Warware",
        objective: "O3",
        notYet: "Babu gyara a sarari ko mataki na gaba.",
        meets: "An ɗauki nauyin matsalar kuma an yarda kan gyara a sarari ko mataki na gaba.",
        exceeds: "An ba da zaɓuɓɓuka kuma an faɗi lokaci ga kowane alƙawari."
      },
      {
        name: "Gode",
        objective: "O4",
        notYet: "An gama ba tare da gode wa abokin ciniki ba.",
        meets: "An gode wa abokin ciniki don ya kawo matsalar.",
        exceeds: "An kammala da tambaya ko akwai wani abu kuma da ake buƙata."
      },
      {
        name: "Saƙon bin diddigi",
        objective: "O6",
        notYet: "Babu bin diddigi, ko ba shi da manufa a sarari.",
        meets: "Gajeren saƙo washegari da ke duba gyaran kuma yana gayyatar sa ya dawo.",
        exceeds: "Na musamman ne ga mutumin, cikakke kuma babu kuskure."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka sami ko suka riƙe aikin hidimar abokan ciniki cikin kwanaki 90 (binciken biyo baya)",
      "Masu ƙananan kasuwanci da suka ce koke-koke sun ragu ko abokan ciniki masu dawowa sun ƙaru",
      "Masu koyo da suka ce sun yi amfani da LAST da abokin ciniki na gaske cikin kwanaki 30",
      "Masu koyo da suka fara wani kwas na sana'a na Koach Learn cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Abokin atisaye don wasan kwaikwayo (aboki, ɗan iyali ko abokin karatu)",
      "Takarda da alƙalami ko waya don rubutun magana da saƙon bin diddigi",
      "Kusan minti 60 gaba ɗaya"
    ],
    facilitatorNotes: [
      "Ku yi wasan kwaikwayo bibbiyu kuma ku musanya matsayi don kowa ya zama abokin ciniki mai fushi sau ɗaya.",
      "Ku yi amfani da misalai daga ayyukan gida da masu koyo ke so: shaguna, gidajen abinci, cibiyoyin kira da teburin karɓar baƙi.",
      "Ku koyar cewa manaja ko jami'an tsaro ne ke kula da barazana; masu koyo ba sa kula da su su kaɗai.",
      "Ku yi amfani da odoji da asusu na ƙirƙira kawai; babu lambobin kati na gaske a atisaye.",
      "Ku ba da maki ga wasan kwaikwayo na ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
