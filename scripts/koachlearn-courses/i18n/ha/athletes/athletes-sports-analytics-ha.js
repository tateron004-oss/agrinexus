"use strict";

// Koach Learn course, Hausa (ha) translation of athletes/athletes-sports-analytics.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "athletes-sports-analytics-ha",
  lang: "ha",
  translationOf: "athletes-sports-analytics",
  category: "Athletes",
  name: "Tushen Nazarin Bayanan Wasanni (Sports Analytics)",
  skills: "Yin tambayar nazari, Tsabtace teburin bayanan wasanni, Lissafin matsakaici, kashi da adadi a kowane wasa, Yin zane-zanen jadawali (chart) mai sarari, Bayanin sakamako da gaskiya",
  outcome: "amsa tambaya ɗaya ta gaske game da ɗan wasa ko ƙungiya da bayanai: tattarawa da tsabtace ƙaramin tebur, lissafin matsakaici, kashi da adadi a kowane wasa a Google Sheets, yin chart ɗaya mai sarari, da bayanin sakamakon da iyakokinsa a jimloli uku.",
  about: [
    "Wannan kwas ɗin na 'yan wasa ne, masu horarwa (koci), manajojin ƙungiya da masoya wasanni da ke son fahimtar lambobin da ke bayan wasanni da amfani da su da kyau. Ba a buƙatar lissafi fiye da ƙari, ragi, ninkawa da raba na yau da kullum.",
    "Nazarin bayanai ba wai samun lambobi mafi yawa ba ne. Yana nufin yin tambaya mai kyau, amfani da bayanai masu tsabta, yin lissafi mai sauƙi daidai, nuna shi a sarari, da faɗin gaskiya game da abin da bai tabbatar ba. Za ku yi amfani da Google Sheets (shirin tebur na lissafi kyauta) da mataimakin AI a matsayin mai taimako.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku amsa tambaya ɗaya game da ƙungiyarku ko ƙungiyar da kuke so da bayanai: ku rubuta tambayar, ku tattara bayanan aƙalla wasanni 10 daga box score ko shafin ƙididdiga na hukuma, ku tsabtace su, ku lissafa aƙalla matsakaici ɗaya, kashi ɗaya da adadi ɗaya a kowane wasa, ku yi chart ɗaya, sannan ku rubuta sakamako a jimloli uku da ke ɗauke da iyaka ɗaya ta bayananku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "'Yan wasa, masu horarwa, manajojin ƙungiya da masoya wasanni da ke son amfani da lambobin wasanni da kyau. Da yawa suna bin ƙididdiga (stats) tuni amma ba su taɓa aiki da su a cikin tebur na lissafi (spreadsheet) ba.",
    startingPoint: "Suna iya karanta box score da yin lissafi na yau da kullum. Ba sa amfani da dabarun lissafi (formula) ko chart a spreadsheet sosai, ko kwata-kwata, kuma ba su saba da auna ko wata lamba tana tabbatar da wani abu ba.",
    gap: "Maganar wasanni cike take da lambobin da ke ruɗarwa: ƙananan samfura, kashi da aka lissafa matsakaicinsa ba daidai ba, da ɗaukar alaƙa (correlation) a matsayin dalili. Masu koyo suna buƙatar amsa tambaya ɗaya ta gaske da bayanai masu tsabta, lissafi mai sauƙi daidai, chart mai sarari da iyaka ta gaskiya, ta yadda sakamakonsu zai taimaki koci ko ƙungiya maimakon ruɗa su.",
    constraints: [
      "Lissafi: lissafi na yau da kullum kaɗai; ana nuna dabarun lissafi mataki-mataki",
      "Na'urori: waya ko kwamfuta mai Google Sheets kyauta",
      "Lokaci: kusan minti biyar a kowane darasi, da lokacin shigar da bayanan wasanni 10",
      "Dole bayanai su fito daga ƙididdigar hukuma ta ƙungiya, gasa (league) ko makaranta",
      "Ana raba bayanan ɗan wasa ɗaya a fili ne kawai da izininsa"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da spreadsheet ba za su iya fara ɗaukar kwas na farko na Google Sheets."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da ƙungiya ko ɗan wasa da kuke bi", action: "rubuta takamaiman tambayar nazari da bayanan box score za su iya amsawa", standard: "kuna ambaton ƙididdigar, wasannin da kwatancen" },
    { id: "O2", condition: "Ta amfani da majiyar ƙididdiga ta hukuma da Google Sheets", action: "tattara bayanan aƙalla wasanni 10 da tsabtace su", standard: "wasa ɗaya a kowane layi, kuma an gyara kowane gibi ko rashin daidaito daga majiyar" },
    { id: "O3", condition: "Idan kuna da tebur mai tsabta", action: "lissafin matsakaici, kashi da adadi a kowane wasa da dabarun lissafi na spreadsheet", standard: "kuma an duba sakamako ɗaya da hannu a na'urar lissafi (calculator)" },
    { id: "O4", condition: "Idan kuna da sakamakon lissafinku", action: "zaɓa da yin chart ɗaya da ke amsa tambayarku", standard: "da taken da ke faɗin sakamakon, kuma an rubuta sunan kowane gefe (axis) biyu" },
    { id: "O5", condition: "Idan kuna da sakamako", action: "duba shi don ƙananan samfura, ɗaukar alaƙa a matsayin dalili, da rashin cikakken yanayi", standard: "kuna rubuta girman samfurin da aƙalla wasu bayanai biyu da za su iya bayyana shi" },
    { id: "O6", condition: "Idan kuna da chart ɗinku da binciken da kuka yi", action: "rubutawa da raba sakamako a jimloli uku tare da iyakokinsa", standard: "da lamba, dalilin da yasa yake da muhimmanci, da iyaka ɗaya ta bayanan" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tambayoyi da bayanai",
      lessons: [
        {
          objectives: ["O1"],
          title: "Farawa da tambaya mai kyau",
          minutes: 4,
          goal: "Rubuta tambayar nazari mai sarari da za ku iya amsawa da bayanai.",
          text: [
            "Nazarin bayanai yana farawa da tambaya, ba da spreadsheet ba. Tambaya mai kyau takamaimai ce kuma ana iya amsa ta: \"Shin ƙungiyarmu tana da kashi mafi kyau na harbin maki uku a gida ko a waje?\" \"Shin daidaiton serve ɗina ya fi kyau a set na farko ko na uku?\"",
            "Ku guji tambayoyin da suka yi girma sosai (\"Wane ne ɗan wasa mafi kyau a tarihi?\") ko waɗanda bayanai ba za su iya amsawa ba (\"Wane ne ya fi ƙoƙari?\").",
            "Ku rubuta bayanan da kuke buƙata don amsa ta: waɗanne ƙididdiga, wasanni nawa, da inda za ku samo su."
          ],
          steps: ["Ku rubuta tambaya game da ƙungiyarku ko wani ɗan wasa.", "Ku sa ta zama takamaimai: wane ne, wace ƙididdiga, wane kwatance.", "Ku duba cewa bayanai za su iya amsa ta.", "Ku jera bayanan da kuke buƙata da inda za ku samo su."],
          words: [["Nazarin bayanai (analytics)", "amfani da bayanai don amsa tambayoyi da yanke shawarwari mafi kyau."], ["Bayanai (data)", "gaskiya da lambobi, kamar maki, ƙoƙari da nasarori."]],
          slides: [
            { title: "Tambaya da farko", bullets: ["Ba spreadsheet ba", "Takamaimai kuma ana iya amsawa"] },
            { title: "Mai kyau da mai girma da yawa", bullets: ["Mai kyau: kashin maki 3 a gida da a waje", "Mai girma da yawa: \"ɗan wasa mafi kyau a tarihi?\"", "Ba ta bayanai ba: \"wa ya fi ƙoƙari?\""] },
            { title: "Ku tsara bayanan", bullets: ["Waɗanne ƙididdiga", "Wasanni nawa", "Inda za ku samo su"] }
          ],
          tryIt: "Ku rubuta tambayoyin nazari uku game da ƙungiyarku ko ƙungiyar da kuke so. Ku tambayi mataimakin AI wace ce ta fi sauƙin amsawa da box score. Ku zaɓi ɗaya ku jera bayanan da kuke buƙata.",
          youCanNow: "rubuta takamaiman tambayar nazari da tsara bayanan da za su amsa ta.",
          quickCheck: [
            { objective: "O1", q: "Me ke sa tambayar nazari ta zama mai yiwuwar amsawa?", options: ["Tana ambaton ƙididdiga da kwatancen da za ku iya ƙirgawa", "Tana tambayar wane ne mutum mafi kyau", "Tana tambaya game da ji", "Babu lambobi a cikinta"], answer: 0, why: "Tambaya mai kyau tana nuna bayanan da za ku iya tattarawa ku kwatanta." },
            { objective: "O1", q: "Tambayarku ita ce \"Shin ƙungiyarmu tana da kyau?\". Me za ku yi?", options: ["Ku bar ta yadda take", "Ku sa ta zama takamaimai, kamar kwatanta rebound a kowane wasa a gida da a waje", "Ku nemi masoya su jefa ƙuri'a", "Ku tsallake tambayar ku fara zana chart"], answer: 1, why: "Tambaya takamaimai tana faɗa muku ainihin bayanan da za ku tattara." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Tattarawa da tsabtace bayanai",
          minutes: 6,
          goal: "Tattara bayanan aƙalla wasanni 10 da tsabtace su don su shirya don amfani.",
          text: [
            "Ku samo bayanai daga majiyoyi amintattu: ƙididdigar hukuma ta ƙungiyarku, shafukan intanet na gasa ko na wasannin makaranta, ko box score na hukuma. Ku rubuta inda kowace lamba ta fito.",
            "Ku saka su a Google Sheets: layi ɗaya a kowane wasa, ginshiƙi (column) ɗaya a kowace ƙididdiga, da layin kanun bayanai (Date, Opponent, Home/Away, 3PA, 3PM). Tsabtacewa tana nufin gyara matsaloli: kuskuren rubutu, lambobin da suka ɓace, ƙungiya ɗaya da aka rubuta sunanta ta hanyoyi biyu, lambobin da aka ajiye a matsayin rubutu, ko layukan da aka maimaita.",
            "Mataimakin AI zai iya taimaka muku ganin matsaloli: ku liƙa teburin ku tambaya, \"Find any typos, duplicates, missing values or inconsistent names. Don't change the numbers, just list the problems.\" (Nemo kuskuren rubutu, maimaitawa, lambobin da suka ɓace ko sunayen da ba su yi daidai ba. Kada ka canja lambobin, ka jera matsalolin kawai.) Sannan ku gyara su da kanku, ta amfani da ainihin majiyar."
          ],
          steps: ["Ku nemo majiyar hukuma ta ƙididdigarku.", "Ku shirya layi ɗaya a kowane wasa, ginshiƙi ɗaya a kowace ƙididdiga.", "Ku shigar da aƙalla wasanni 10.", "Ku duba kuskuren rubutu, maimaitawa, lambobin da suka ɓace da sunayen da ba su yi daidai ba.", "Ku gyara su ta amfani da majiyar, ba da hasashe ba."],
          words: [["Box score", "teburin ƙididdiga na wasa ɗaya."], ["Tsabtace bayanai (data cleaning)", "gyara kurakurai da giɓi a bayanai kafin amfani da su."], ["Lambar da ta ɓace (missing value)", "wuri mara komai inda ya kamata lamba ta kasance."]],
          slides: [
            { title: "Majiyoyi amintattu", bullets: ["Ƙididdigar hukuma ta ƙungiya", "Shafukan gasa ko na wasannin makaranta", "Ku rubuta majiyar"] },
            { title: "Tsarin tebur", bullets: ["Layi ɗaya a kowane wasa", "Ginshiƙi ɗaya a kowace ƙididdiga", "Layin kanun bayanai da sunaye masu sarari"] },
            { title: "Ku tsabtace shi", bullets: ["Kuskuren rubutu, maimaitawa, wuraren da babu komai", "Suna ɗaya da aka rubuta ta hanyoyi biyu", "AI yana jera matsaloli; ku ne kuke gyarawa daga majiyar"] }
          ],
          tryIt: "Ku shigar da bayanan aƙalla wasanni 10 a Google Sheets daga majiyar hukuma. Ku nemi AI ya jera matsaloli, sannan ku gyara kowanne daga majiyar.",
          youCanNow: "tattara bayanan wasanni daga majiyoyi amintattu da tsabtace su.",
          quickCheck: [
            { objective: "O2", q: "Me ya kamata kowane layi na teburin ƙididdigarku ya ɗauka?", options: ["Kakar wasa (season) ɗaya", "Duk tarihin wasan ɗan wasa ɗaya", "Wasa ɗaya", "Sunan ƙungiya ɗaya"], answer: 2, why: "Wasa ɗaya a kowane layi yana sa bayanan su zama masu sauƙin ƙirgawa da dubawa." },
            { objective: "O2", q: "Wasa na 7 bai da lambar ƙoƙarin harbi. Me za ku yi?", options: ["Ku yi hasashen lamba", "Ku yi amfani da ƙiyasin AI", "Ku goge dukkan wasannin", "Ku nemo ta a box score na hukuma"], answer: 3, why: "Ana gyara giɓi daga ainihin majiyar, ba da hasashe ba." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Matsakaici, kashi da adadi",
          minutes: 6,
          goal: "Lissafin matsakaici, kashi da adadi a kowane wasa a Google Sheets.",
          text: [
            "Matsakaici (average): ku haɗa lambobin ku raba da yawansu. A Sheets, =AVERAGE(B2:B11) yana ba da matsakaicin waɗannan ƙwayoyin (cells).",
            "Kashi (percentage): nasarori raba da ƙoƙari. Kashin harbin maki uku = 3PM / 3PA. Ku fara haɗa jimlar duka, sannan ku raba: =SUM(E2:E11)/SUM(D2:D11). Lissafin matsakaicin kashin kowane wasa yana iya ba da amsa marar daidai idan yawan ƙoƙari ya bambanta sosai.",
            "Adadi (rate): ƙididdiga a kowane wasa, kowane minti ko kowane ƙoƙari tana sa kwatance ya zama mai adalci idan lokacin wasa ya bambanta. Maki a kowane wasa = jimlar maki / wasannin da aka buga. Mataimakin AI zai iya bayyana kowace dabarar lissafi; ku duba sakamako a layi ɗaya da na'urar lissafi."
          ],
          steps: ["Ku yi amfani da =AVERAGE() don matsakaici.", "Don kashi, ku raba jimlar nasarori da jimlar ƙoƙari.", "Don adadi, ku raba jimla da yawan wasanni ko minti.", "Ku tsara kashi a matsayin percent (%).", "Ku duba sakamako ɗaya da na'urar lissafi."],
          words: [["Matsakaici (average, mean)", "jimla raba da yawan lambobin."], ["Kashi (percentage)", "sashe daga cikin 100, kamar nasarori daga cikin ƙoƙari."], ["Adadi (rate)", "ƙididdiga a kowane ma'auni, kamar a kowane wasa ko kowane minti."]],
          slides: [
            { title: "Matsakaici", bullets: ["Jimla / yawan lambobin", "=AVERAGE(B2:B11)"] },
            { title: "Kashi", bullets: ["Jimlar nasarori / jimlar ƙoƙari", "=SUM(makes)/SUM(attempts)", "Kada ku lissafa matsakaicin kashin kowane wasa"] },
            { title: "Adadi", bullets: ["A kowane wasa, kowane minti, kowane ƙoƙari", "Adalci ne idan lokacin wasa ya bambanta", "Ku duba ɗaya da na'urar lissafi"] }
          ],
          tryIt: "A cikin teburinku, ku lissafa matsakaici ɗaya, kashi ɗaya (hanyar jimla) da adadi ɗaya a kowane wasa. Ku duba ɗaya da na'urar lissafi.",
          youCanNow: "lissafin matsakaici, kashi da adadi daidai a spreadsheet.",
          quickCheck: [
            { objective: "O3", q: "Mene ne adadi a kowane wasa?", options: ["Jimla raba da yawan wasanni", "Sakamakon wasan ƙarshe", "Lamba mafi girma a ginshiƙi", "Hasashe game da wasa na gaba"], answer: 0, why: "Adadi yana raba jimla a kan wasanni don a kwatanta 'yan wasa da adalci." },
            { objective: "O3", q: "Kun lissafa kashin ƙungiya da dabarar lissafi. Ta yaya za ku duba shi?", options: ["Ku amince da dabarar kawai", "Ku lissafa sakamako ɗaya da na'urar lissafi", "Ku tambayi wani masoyin wasa", "Ku canja bayanan har su yi kama da daidai"], answer: 1, why: "Duba sakamako ɗaya da hannu yana kama kurakuran dabarar lissafi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tambayoyi da bayanai",
        questions: [
          { objective: "O1", q: "Wace ce tambayar nazari mai kyau?", options: ["\"Wane ne mafi kyau a tarihi?\"", "\"Wane ne ya fi ƙoƙari?\"", "\"Shin muna harbin maki uku mafi kyau a gida ko a waje?\"", "\"Shin wasanni suna da daɗi?\""], answer: 2, why: "Takamaimai ce kuma bayanai za su iya amsa ta." },
          { objective: "O2", q: "Daga ina ya kamata bayananku su fito?", options: ["Ƙididdigar hukuma ta ƙungiya, gasa ko makaranta", "Daga ƙwaƙwalwa kawai", "Daga wani sharhi na bazata", "Daga hasashe"], answer: 0, why: "Majiyoyi amintattu suna kawo amsoshi amintattu." },
          { objective: "O2", q: "Tsabtace bayanai yana nufin:", options: ["Goge dukkan bayanai", "Ƙara girman lambobi", "Canja majiyar", "Gyara kurakurai da giɓi kafin amfani da bayanai"], answer: 3, why: "Bayanai masu tsabta suna ba da sakamako daidai." },
          { objective: "O3", q: "Hanya mafi kyau ta samun kashin harbin maki uku na ƙungiya a wasanni 10 ita ce:", options: ["Lissafin matsakaicin kashin kowane wasa", "Jimlar nasarori raba da jimlar ƙoƙari", "Haɗa kashin duka", "Hasashe"], answer: 1, why: "Jimla tana kula da wasannin da yawan ƙoƙarinsu ya bambanta daidai." },
          { objective: "O3", q: "Me yasa ake amfani da adadi a kowane wasa ko kowane minti?", options: ["Don ƙara girman lambobi", "Don kwatanta da adalci idan lokacin wasa ya bambanta", "Domin abu ne na zamani", "Don ɓoye bayanai"], answer: 1, why: "Adadi yana daidaita bambancin dama." }
        ]
      }
    },
    {
      name: "Babi na 2: Nunawa da bayani",
      lessons: [
        {
          objectives: ["O4"],
          title: "Yin chart mai sarari",
          minutes: 5,
          goal: "Yin chart ɗaya da ke amsa tambayarku a kallo ɗaya.",
          text: [
            "Ku zaɓi chart ɗin da ya dace da tambayar. Kwatanta ƙungiyoyi (gida da waje): chart na sanduna (bar chart). Canji a tsawon lokaci (maki wasa bayan wasa): chart na layi (line chart). Sassan abu guda: yawanci bar chart ya fi sarari fiye da chart na da'ira (pie).",
            "Ku sa shi ya kasance mai sarari: taken da ke faɗin sakamakon (\"Muna harbin maki uku da kashi 6 mafi kyau a gida\"), gefuna (axis) masu suna, gefen tsaye (y-axis) yana farawa daga sifili a bar chart, kuma babu ƙarin ado.",
            "A Google Sheets, ku zaɓi bayananku ku saka chart (Insert > Chart), sannan ku zaɓi nau'in chart ku gyara sunaye. Kuna iya tambayar mataimakin AI wane nau'in chart ne ya dace da tambayarku."
          ],
          steps: ["Ku yanke: kwatanta ƙungiyoyi ne ko canji a tsawon lokaci?", "Ku zaɓi bar ko line.", "Ku saka chart a Sheets.", "Ku rubuta taken da ke faɗin sakamakon.", "Ku rubuta sunayen gefuna; ku fara bar chart daga sifili."],
          words: [["Bar chart", "chart mai sanduna don kwatanta ƙungiyoyi."], ["Line chart", "chart mai layi don nuna canji a tsawon lokaci."], ["Gefe (axis)", "layin da ke gefe ko ƙasan chart, mai sunaye."]],
          slides: [
            { title: "Ku zaɓi chart", bullets: ["Kwatanta ƙungiyoyi: bar", "Canji a tsawon lokaci: line", "Bar yawanci ya fi pie sarari"] },
            { title: "Ku sa shi mai sarari", bullets: ["Taken yana faɗin sakamakon", "Gefuna masu suna", "Sanduna suna farawa daga sifili"] },
            { title: "A Sheets", bullets: ["Ku zaɓi bayanai, ku saka chart", "Ku zaɓi nau'i, ku gyara sunaye"] }
          ],
          tryIt: "Ku yi chart ɗaya da ke amsa tambayarku. Ku ba shi taken da ke faɗin sakamakon, ku rubuta sunayen gefuna biyu.",
          youCanNow: "yin chart mai sarari da ke amsa tambaya a kallo ɗaya.",
          quickCheck: [
            { objective: "O4", q: "Me ya kamata taken chart mai kyau ya yi?", options: ["Ya ce \"Chart 1\" kawai", "Ya jera kowace lamba", "Ya faɗi sakamakon", "A bar shi babu komai"], answer: 2, why: "Taken da ke faɗin sakamakon yana sa mutane su fahimci chart ɗin a kallo ɗaya." },
            { objective: "O4", q: "Kuna kwatanta harbi a gida da a waje. Wane chart za ku zaɓa?", options: ["Pie chart", "Taswira (map)", "Tebur ba tare da chart ba", "Bar chart"], answer: 3, why: "Bar chart yana kwatanta 'yan ƙungiyoyi gefe da gefe a sarari." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Alaƙa, girman samfuri da sauran tarkuna",
          minutes: 5,
          goal: "Gane tarkuna uku da aka saba da su da ke sa lambobi su ruɗar.",
          text: [
            "Ƙananan samfura: wasanni uku ba su isa su tabbatar da abu mai yawa ba. Ɗan wasan da ya ci 4 daga cikin 5 ba tabbataccen mai harbin kashi 80 ba ne. Ƙarin wasanni suna ƙara muku tabbaci.",
            "Alaƙa ba dalili ba ce (correlation is not causation): idan ƙungiya tana yawan cin nasara idan ta saka riga shuɗiya, wataƙila rigar ba ita ce dalili ba. Abubuwa biyu da ke tafiya tare ba ya nufin ɗaya ne ke haddasa ɗayan; ku nemi wasu bayanai, kamar ƙarfin abokan karawa ko wasannin gida.",
            "Yanayi yana da muhimmanci: ƙididdiga ba sa kama komai, kamar ƙoƙarin tsaro, raunuka, ko ƙarfin abokan karawa. Mataimakin AI zai iya taimaka muku jera wasu bayanai: \"Me kuma zai iya bayyana wannan tsarin?\""
          ],
          steps: ["Ku duba girman samfurin.", "Ku tambaya: shin wani abu dabam zai iya bayyana shi?", "Ku duba yanayi: abokan karawa, raunuka, gida ko waje.", "Ku nemi AI ya ba da wasu bayanai.", "Ku rubuta yawan tabbacinku."],
          words: [["Girman samfuri (sample size)", "wasanni ko ƙoƙari nawa ne bayananku suka ƙunsa."], ["Alaƙa (correlation)", "abubuwa biyu da ke yawan tafiya tare."], ["Dalili (causation)", "lokacin da wani abu ne ainihin yake haddasa wani."]],
          slides: [
            { title: "Ƙananan samfura", bullets: ["4 daga 5 ba tabbataccen kashi 80% ba ne", "Ƙarin wasanni, ƙarin tabbaci"] },
            { title: "Alaƙa ba dalili ba ce", bullets: ["Riga shuɗiya ba ta cin wasanni", "Ku nemi wasu bayanai"] },
            { title: "Yanayi", bullets: ["Abokan karawa, raunuka, gida ko waje", "Ba koyaushe ake ƙirga ƙoƙari da tsaro ba"] }
          ],
          tryIt: "Ku duba sakamakonku. Ku rubuta girman samfurin, abubuwa biyu dabam da za su iya bayyana shi, da yawan tabbacinku (ƙasa, matsakaici, sama).",
          youCanNow: "gane ƙananan samfura, haɗa alaƙa da dalili, da rashin cikakken yanayi.",
          quickCheck: [
            { objective: "O5", q: "Mene ne tarkon ƙaramin samfuri?", options: ["Yanke babban hukunci daga wasanni ko ƙoƙari kaɗan", "Amfani da bayanan hukuma", "Yin bar chart", "Rubuta sunayen gefuna"], answer: 0, why: "'Yan wasanni ko ƙoƙari kaɗan suna iya canjawa saboda sa'a." },
            { objective: "O5", q: "Ƙungiyarku ta ci maki fiye bayan sabon motsa jiki na farko (warm-up), amma kuma ta buga da abokan karawa marasa ƙarfi. Me za ku rubuta?", options: ["Motsa jikin ne ya haddasa shi", "Abokan karawa marasa ƙarfi su ma za su iya bayyana shi", "Babu komai; an tabbatar", "Ku goge sakamakon"], answer: 1, why: "Wasu abubuwa za su iya bayyana tsari, don haka ku ambace su." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Bayanin sakamakonku",
          minutes: 5,
          goal: "Rubutawa da raba sakamako a jimloli uku tare da iyakokinsa.",
          text: [
            "Sakamako mai kyau yana da jimloli uku: 1. Abin da kuka gano, da lamba. 2. Dalilin da yasa zai iya zama mai muhimmanci ga ƙungiyar. 3. Iyaka ɗaya ta bayanan. Misali: \"A wasanni 12 mun harba kashi 38% na maki uku a gida da kashi 31% a waje. Idan haka ya ci gaba, yin atisayen al'adun wasannin waje zai iya taimakawa. Da wasannin waje 6 kawai, wannan zai iya zama sa'a.\"",
            "Ku nemi mataimakin AI ya sa jimlolinku su fi sarari, sannan ku duba lambobin da kanku. Ku nuna chart ɗin tare da shi.",
            "Ku raba shi da kocinku a matsayin bayani, ba umarni ba. Masu horarwa suna haɗa lambobi da abin da suke gani. Kada ku taɓa raba bayanan ɗan wasa ɗaya a fili ba tare da izini ba."
          ],
          steps: ["Jimla ta 1: abin da kuka gano, da lamba.", "Jimla ta 2: dalilin da yasa zai iya zama mai muhimmanci.", "Jimla ta 3: iyaka ɗaya.", "Ku ƙara chart ɗinku.", "Ku raba da kocinku, ba a fili ba."],
          words: [["Sakamako (finding)", "abin da nazarinku ya nuna."], ["Iyaka (limit)", "dalilin da yasa sakamakon ba zai iya zama cikakken amintacce ba."]],
          slides: [
            { title: "Jimloli uku", bullets: ["1. Abin da kuka gano, da lamba", "2. Dalilin da yasa zai iya zama mai muhimmanci", "3. Iyaka ɗaya"] },
            { title: "Ku goge shi", bullets: ["AI yana sa shi ya fi sarari", "Ku ne kuke duba lambobin", "Ku ƙara chart ɗinku"] },
            { title: "Ku raba da kyau", bullets: ["Bayani, ba umarni ba", "Koci yana haɗa bayanai da abin da yake gani", "Babu bayanan ɗan wasa a fili ba tare da izini ba"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta sakamakonku a jimloli uku tare da chart ɗinku, girman samfurin da majiyar, sannan ku raba shi da kocinku ko abokin wasa a ƙungiya.",
          youCanNow: "bayanin sakamakon bayanai da gaskiya, tare da iyakokinsa.",
          quickCheck: [
            { objective: "O6", q: "Mene ne sassa uku na sakamako mai kyau?", options: ["Barkwanci, chart da hasashe", "Lamba mafi girma kawai", "Lamba, dalilin da yasa yake da muhimmanci da iyaka", "Umarni, wa'adi da suna"], answer: 2, why: "Waɗannan sassa uku suna sa sakamako ya zama mai sarari da gaskiya." },
            { objective: "O6", q: "Kuna son saka ƙididdigar abokin wasanku a intanet. Me za ku fara yi?", options: ["Ku saka su nan take", "Ku ɗan canja sunansa", "Ku saka munanan wasanni kawai", "Ku nemi izininsa"], answer: 3, why: "Ana raba bayanan ɗan wasa ɗaya a fili ne kawai da izini." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Nunawa da bayani",
        questions: [
          { objective: "O4", q: "Wane chart ne ya dace da \"maki wasa bayan wasa a tsawon kakar wasa\"?", options: ["Pie chart", "Babu chart", "Taswira (map)", "Line chart"], answer: 3, why: "Line chart yana nuna canji a tsawon lokaci." },
          { objective: "O4", q: "Taken chart mai kyau:", options: ["Yana faɗin sakamakon", "Yana cewa \"Chart 1\"", "Babu komai a ciki", "Barkwanci ne"], answer: 0, why: "Yana faɗa wa mai karatu abin da zai gani." },
          { objective: "O5", q: "Ɗan wasa ya ci 4 daga cikin 5 a wasa ɗaya. Wannan yana tabbatar da:", options: ["Shi mai harbin kashi 80% ne", "Ya kamata ya yi kowane harbi", "Ba abu mai yawa ba; samfurin ƙarami ne", "Babu komai game da kowane abu har abada"], answer: 2, why: "Ƙananan samfura suna iya ruɗarwa." },
          { objective: "O5", q: "Ƙungiya tana yawan cin nasara a riga shuɗiya. Mafi yiwuwa:", options: ["Shuɗi yana kawo nasara", "Kada a taɓa saka ja", "Bayanan na bogi ne", "Wani abu dabam ne yake bayyana shi"], answer: 3, why: "Alaƙa ba dalili ba ce." },
          { objective: "O6", q: "Jimla ta 3 ta sakamako ita ce:", options: ["Umarni ga koci", "Iyaka ɗaya ta bayanan", "Barkwanci", "Kalmar sirrinku (password)"], answer: 1, why: "Sakamako na gaskiya yana ɗauke da iyakoki." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tushen Nazarin Bayanan Wasanni (Sports Analytics)",
    questions: [
      { objective: "O1", q: "Nazarin bayanai yana farawa da:", options: ["Spreadsheet", "Chart", "Tambaya", "Hasashe"], answer: 2, why: "Tambayar ce ke jagorantar komai." },
      { objective: "O1", q: "Wace tambaya ce bayanai BA za su iya amsawa da kyau ba?", options: ["\"Wane ne ya fi ƙoƙari?\"", "\"Shin muna cin maki fiye a gida?\"", "\"Shin serve ɗina ya fi kyau a set na 1?\"", "\"Shin muna yawan rasa ƙwallo a kashi na 4?\""], answer: 0, why: "Ba a auna ƙoƙari a box score." },
      { objective: "O2", q: "Box score shi ne:", options: ["Teburin ƙididdiga na wasa ɗaya", "Akwatin kyauta", "Wani nau'in chart", "Benci na ƙungiya"], answer: 0, why: "Yana jera ƙididdigar wasa ɗaya." },
      { objective: "O2", q: "A teburinku, kowane layi ya kamata ya zama:", options: ["Kakar wasa ɗaya", "Lamba ɗaya ta bazata", "Wasa ɗaya", "Chart ɗaya"], answer: 2, why: "Layi ɗaya a kowane wasa yana sa shi ya kasance cikin tsari." },
      { objective: "O2", q: "\"Lincoln HS\" da \"Lincoln High\" a ginshiƙi ɗaya su ne:", options: ["Babu matsala", "Sunayen da ba su yi daidai ba da ake buƙatar tsabtacewa", "Chart", "Dabarar lissafi"], answer: 1, why: "Ƙungiya ɗaya da rubutu biyu yana ɓata ƙirgawa." },
      { objective: "O2", q: "AI ya gano lambar da ta ɓace. Kuna gyara ta ta hanyar:", options: ["Hasashe", "Barin AI ya ƙirƙiro ta", "Goge ginshiƙin", "Duba ainihin majiyar"], answer: 3, why: "Ku gyara daga majiyar, ba da hasashe ba." },
      { objective: "O3", q: "=AVERAGE(B2:B11) yana ba da:", options: ["Jimlar", "Lamba mafi girma", "Matsakaicin waɗannan ƙwayoyin", "Chart ɗin"], answer: 2, why: "AVERAGE yana lissafin matsakaici." },
      { objective: "O3", q: "Kashin harbin maki uku daidai yake da:", options: ["3PA raba da 3PM", "3PM da 3PA", "Maki raba da wasanni", "3PM raba da 3PA"], answer: 3, why: "Nasarori raba da ƙoƙari." },
      { objective: "O3", q: "Me yasa ba za a lissafa matsakaicin kashin kowane wasa ba?", options: ["Wasannin da yawan ƙoƙarinsu ya bambanta suna samun nauyi ba daidai ba", "Ya saɓa wa doka", "Koyaushe daidai yake", "Sheets ba zai iya yi ba"], answer: 0, why: "Ku yi amfani da jimla don samun kashi na gaskiya." },
      { objective: "O3", q: "Maki a kowane wasa shi ne:", options: ["Kashi", "Adadi (rate)", "Chart", "Box score"], answer: 1, why: "Ƙididdiga ce a kowane wasa." },
      { objective: "O3", q: "Ana duba dabarar lissafi ta hanyar:", options: ["Amincewa da ita kawai", "Goge ta", "Lissafin layi ɗaya da na'urar lissafi", "Tambayar wani masoyin wasa"], answer: 2, why: "Dubawa ɗaya da hannu yana kama kurakurai." },
      { objective: "O4", q: "Don kwatanta gida da waje, ku yi amfani da:", options: ["Bar chart", "Line chart na tsawon lokaci kawai", "Babu chart", "Hoto"], answer: 0, why: "Sanduna suna kwatanta ƙungiyoyi." },
      { objective: "O4", q: "Bar chart yawanci ya kamata ya fara gefen tsaye (y-axis) daga:", options: ["Lamba mafi ƙanƙanta", "100", "Ko'ina", "Sifili"], answer: 3, why: "Idan ba haka ba, bambance-bambance suna yin kama da sun fi yadda suke girma." },
      { objective: "O4", q: "Yawanci ya fi pie chart sarari:", options: ["Pie mai 3D", "Bar chart", "Gajimaren kalmomi (word cloud)", "Shafi mara komai"], answer: 1, why: "Sanduna sun fi sauƙin kwatantawa." },
      { objective: "O5", q: "Girman samfuri yana nufin:", options: ["Girman takalminku", "Wasanni ko ƙoƙari nawa ne ke cikin bayananku", "Girman chart", "Girman ƙungiya"], answer: 1, why: "Ƙarin bayanai yana nufin ƙarin tabbaci." },
      { objective: "O5", q: "Alaƙa (correlation) tana nufin:", options: ["Ɗaya yana haddasa ɗayan", "Wani nau'in chart", "Matakin tsabtacewa", "Abubuwa biyu suna yawan tafiya tare"], answer: 3, why: "Tafiya tare ba haddasawa ba ce." },
      { objective: "O5", q: "Wanne ne yanayin da ƙididdiga za su iya rasawa?", options: ["Ƙarfin abokan karawa da raunuka", "Maki", "Rebound", "Sakamakon ƙarshe"], answer: 0, why: "Yanayi yana bayyana lambobi." },
      { objective: "O6", q: "Sakamako mai kyau yana ɗauke da:", options: ["Ra'ayoyi kawai", "Kowace ƙididdiga", "Lamba, dalilin da yasa yake da muhimmanci da iyaka", "Babu lambobi"], answer: 2, why: "Wannan shi ne tsarin jimloli uku." },
      { objective: "O6", q: "Kuna raba sakamako da kocinku a matsayin:", options: ["Umarni", "Saƙo a kafofin sada zumunta", "Sirri", "Bayani, ba umarni ba"], answer: 3, why: "Masu horarwa suna haɗa bayanai da abin da suke gani." },
      { objective: "O6", q: "Ya kamata a raba bayanan ɗan wasa ɗaya a fili:", options: ["Koyaushe", "Da izini kawai", "Ga ƙungiyoyin abokan hamayya", "A cikin sharhi"], answer: 1, why: "Bayanan ɗan wasa na sirri ne." }
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
      8,
      11,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Tambaya",
        objective: "O1",
        notYet: "Tambayar ba ta da sarari ko ba za a iya amsa ta da ƙididdiga ba.",
        meets: "Tambayar tana ambaton ƙididdiga, wasannin da kwatance.",
        exceeds: "Tana kuma faɗin dalilin da yasa amsar take da muhimmanci ga ƙungiyar."
      },
      {
        name: "Bayanai masu tsabta",
        objective: "O2",
        notYet: "Wasanni ƙasa da 10, babu majiya, ko an bar giɓi da sunayen da ba su yi daidai ba.",
        meets: "Aƙalla wasanni 10 daga majiyar hukuma, ɗaya a kowane layi, an tsabtace su.",
        exceeds: "An rubuta kowane gyara da aka yi da inda aka duba shi."
      },
      {
        name: "Lissafi",
        objective: "O3",
        notYet: "Akwai lissafin da ya ɓace, ko an lissafa kashi ta hanyar matsakaicin kashin kowane wasa.",
        meets: "Matsakaici, kashi ta hanyar jimla da adadi a kowane wasa, kuma an duba ɗaya da hannu.",
        exceeds: "An rubuta sunayen dabarun lissafi ta yadda wani zai iya bin su."
      },
      {
        name: "Chart",
        objective: "O4",
        notYet: "Nau'in chart ba daidai ba, babu take, ko gefuna ba su da suna.",
        meets: "Chart ɗaya da ya dace, da taken sakamako da gefuna masu suna.",
        exceeds: "Bar chart yana farawa daga sifili kuma babu wani ƙarin abu da ke ɗauke hankali daga sakamakon."
      },
      {
        name: "Sakamako na gaskiya",
        objective: "O6",
        notYet: "Yana cewa an tabbatar, ko ya bar girman samfuri da iyakoki.",
        meets: "Jimloli uku: lamba, dalilin da yasa yake da muhimmanci da iyaka ɗaya, tare da majiyar.",
        exceeds: "Yana kuma ambaton wasu bayanai masu yiwuwa da matakin tabbaci."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka raba sakamakon bayanai da koci ko ƙungiya cikin kwanaki 30 (binciken biyo baya)",
      "Masu horarwa ko ƙungiyoyin da suka ce sun yi amfani da nazarin mai koyo wajen yanke shawara",
      "Masu koyo da suka fara wani kwas na Koach Learn na 'yan wasa ko na bayanai cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai Google Sheets kyauta",
      "Damar shiga shafin ƙididdiga na hukuma na ƙungiya, gasa ko makaranta",
      "Na'urar lissafi (calculator) da mataimakin AI kyauta",
      "Kusan minti 60 don darussa, gwaje-gwaje da jarabawa, da lokacin shigar da bayanan wasanni 10"
    ],
    facilitatorNotes: [
      "Ku bar ƙananan ƙungiyoyi su zaɓi ƙungiya ɗaya su raba aikin shigar da bayanai, sannan su kwatanta teburorinsu da aka tsabtace.",
      "Ku nuna hanyar jimla ta lissafin kashi a gaban kowa; ita ce kuskure da aka fi yi.",
      "Ku yi amfani da ƙididdigar ƙungiya ko ta jama'a don atisaye; ku nemi izini kafin raba lambobin kowane ɗan wasa ɗaya.",
      "Ku nemi kowace ƙungiya ta karanta sakamakonta da babbar murya ta ambaci iyaka ɗaya kafin ta raba shi da koci.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
