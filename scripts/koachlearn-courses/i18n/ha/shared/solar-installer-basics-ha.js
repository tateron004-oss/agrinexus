"use strict";

// Koach Learn course, Hausa (ha) translation of shared/solar-installer-basics.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "solar-installer-basics-ha",
  lang: "ha",
  translationOf: "solar-installer-basics",
  category: "Workforce Development",
  name: "Tushen Aikin Saka Fanalan Hasken Rana (Solar)",
  skills: "Sanin sassan tsarin solar, Gane haɗurra a wurin aikin solar, Yin lissafin solar mai sauƙi, Bin matakan saka solar, Tsara hanyar samun takardar shaidar solar",
  outcome: "bayanin yadda tsarin solar na gida yake aiki, gane manyan haɗurra a aikin solar, yin lissafin solar mai sauƙi na atisaye, jera matakan saka solar a kan rufin gida bisa tsari, da rubuta naku shirin da ranaku don fara aikin solar na farko da takardar shaidar NABCEP PV Associate.",
  about: [
    "Masu saka solar suna ɗora fanalan hasken rana (solar panels) a kan rufin gida da kan ƙasa, kuma suna taimakawa wajen haɗa su. Mutane da yawa suna farawa a matsayin mataimaki (helper) a cikin ƙungiyar masu saka solar, suna koyo yayin aiki. Wannan kwas ɗin na masu neman aiki ne, tsoffin sojoji, matasa, masu dawowa gida daga gidan yari, da duk wanda yake son aiki a waje da hannuwansa.",
    "Za ku koyi sassan tsarin solar, ƙa'idodin tsaro da ke kiyaye rayukan masu saka solar, lissafin da ƙungiyoyi ke amfani da shi, matakan saka solar a kan rufi, da takardun shaida na gaske da masu ɗaukar aiki ke nema, kamar NABCEP PV Associate. Wannan kwas yana shirya ku ne; ba ya ba ku lasisi ko takardar shaida. Waɗannan suna fitowa daga NABCEP, jiharku da shirye-shiryen horo da aka amince da su.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta shi, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\" da takarda da alƙalami ko na'urar lissafi ta waya kyauta. Akwai ɗan gwaji bayan kowane darasi da kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin. Darasi na ƙarshe yana gina muku naku Shirin Fara Aikin Solar."
  ],
  finalTask: "Ku yi Shirin Fara Aikin Solar naku a shafi ɗaya: (1) ku bayyana a jimloli 3 zuwa 4 yadda tsarin solar na gida da ke haɗe da layin wutar lantarki (grid-tied) yake aiki, kuna ambaton manyan sassansa; (2) ku cike jerin binciken tsaro na wurin aiki don aikin rufi na atisaye; (3) ku warware matsalolin lissafin girman tsari guda biyu na atisaye, ku nuna yadda kuka yi; (4) ku jera matakan saka solar a kan rufi bisa tsari; (5) ku rubuta hanyar samun takardar shaidarku da ranaku na gaske (shirin horo, ranar da kuke son yin jarabawar NABCEP PV Associate, da duk wani sharaɗin jiha ko na mai ɗaukar aiki da kuka duba a shafin hukuma); (6) ku rubuta sashen \"Ƙwarewar solar\" mai layuka 3 don takardar bayanin aikinku (résumé).",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke neman aikin hannu a fannin makamashi mai tsabta: masu neman aiki, tsoffin sojoji, matasa, masu dawowa gida daga gidan yari, baƙin haure da manya da ke komawa karatu. Yawancinsu ba su da ƙwarewar solar; wasu sun yi aikin gini, rufi ko mataimakin mai aikin lantarki.",
    startingPoint: "Suna iya yin lissafi mai sauƙi da na'urar lissafi, kuma suna iya karanta gajerun umarni. Yawancinsu ba su taɓa zuwa wurin aikin solar ba, kuma ba su san sassan tsarin solar, ƙa'idodin tsaro ko takardun shaidar da masu ɗaukar aiki ke nema ba.",
    gap: "Ƙungiyoyin solar suna ɗaukar mataimakan da suka riga sun san kalmomin farko, suke mutunta ƙa'idodin tsaro, kuma suke da shirin horo. Masu koyo suna buƙatar isasshen ilimi don yin magana da ƙarfin gwiwa a hirar neman aiki, su kasance lafiya a makonnin farko a cikin ƙungiya, kuma su zaɓi matakan horo da takardar shaida da suka dace ba tare da ɓata kuɗi ba.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 6 zuwa 8)",
      "Babu aikin hannu a kan rufi ko na lantarki a wannan kwas: ana koyon saka solar na gaske a cikin ƙungiya mai kulawa ko a shirin horo da aka amince da shi",
      "Kayan aiki kyauta kaɗai: takarda, alƙalami, na'urar lissafi ta waya da shafukan intanet na hukuma",
      "Sharuɗɗan lasisi, kuɗaɗe da takardun shaida suna canjawa kuma sun bambanta daga jiha zuwa jiha: masu koyo suna duba shafukan hukuma",
      "Lokaci: darussa na minti 4 zuwa 6 da suka dace da aiki da ganawa"
    ],
    prerequisites: "Babu. Kwas ɗin \"Skilled Trades Careers\" (Sana'o'in Hannu) da \"Tushen Tsaro a Wurin Aiki (OSHA)\" suna taimakawa, amma ba dole ba ne."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku zane ko jerin sassan tsarin solar na gida da ke haɗe da grid", action: "faɗin sunan kowane babban sashe da abin da yake yi", standard: "kuna samun aƙalla sassa 5 cikin 6 daidai" },
    { id: "O2", condition: "Idan aka ba ku labarin aikin solar na atisaye", action: "jera haɗurran da matakin tsaro na kowanne", standard: "kuna ambaton faɗuwa, girgizar lantarki, zafi da ɗaukar kaya, da matakin tsaro daidai na kowanne" },
    { id: "O3", condition: "Idan aka ba ku lambobin atisaye na fanalai, volt da amp", action: "lissafa watt, girman tsari da voltage na string", standard: "ba tare da kuskuren lissafi ba, kuna nuna yadda kuka yi" },
    { id: "O4", condition: "Idan aka ba ku matakan saka solar a kan rufi a gauraye", action: "jera matakan bisa tsari da faɗin wanda yake yin kowanne", standard: "ba tare da mataki fiye da ɗaya ya kauce wurinsa ba" },
    { id: "O5", condition: "Ta amfani da shafukan intanet na hukuma na NABCEP da na jiharku", action: "jera takardun shaida da lasisin da ake buƙata don aikin solar na farko a inda kuke zaune", standard: "kuna ambaton shafin majiyar kowanne" },
    { id: "O6", condition: "Ta amfani da rubuce-rubucenku daga wannan kwas", action: "rubuta Shirin Fara Aikin Solar mai ranaku da sashen ƙwarewa na résumé", standard: "kuna cika kowane layi na ma'aunin rubric" }
  ],
  chapters: [
    {
      name: "Babi na 1: Yadda solar ke aiki da yadda ake kasancewa lafiya",
      lessons: [
        {
          title: "Sassan tsarin solar na gida",
          objectives: ["O1"],
          minutes: 5,
          goal: "Faɗin sunayen manyan sassan tsarin solar da ke haɗe da grid da abin da kowanne yake yi.",
          text: [
            "Fanalan solar, wanda ake kira modules, suna mayar da hasken rana zuwa wutar lantarki. Irin wutar da suke yi ita ce DC (direct current). Gidaje suna amfani da AC (alternating current), don haka inverter yana mayar da DC zuwa AC.",
            "Fanalan suna zaune a kan racking, wato firam na ƙarfe da aka ƙulle a kan rufi ko aka kafa a ƙasa. Wayoyi suna tafiya daga fanalan zuwa inverter, sannan zuwa babban akwatin wutar lantarki na gidan. Maɓallan katsewa (disconnect) suna bar ma'aikata su kashe wasu sassan tsarin. Mita tana ƙirga wutar da gidan ke amfani da ita da wadda yake turawa zuwa grid.",
            "Yawancin tsarin gidaje suna haɗe da grid (grid-tied): suna nan a haɗe da layukan kamfanin wutar lantarki, wanda ake kira grid. Ƙarin wuta yana iya gudana zuwa grid, kuma gidan yana amfani da wutar grid da dare. Wasu gidaje kuma suna ƙara batir don ajiye wuta don gaba ko lokacin da wuta ta ɗauke."
          ],
          words: [["Fanalin solar (module)", "fanali mai faɗi da ke mayar da hasken rana zuwa wutar lantarki."], ["PV (photovoltaic)", "fasahar da ke yin wutar lantarki daga haske; fanalan solar fanalan PV ne."], ["DC (direct current)", "wutar lantarki da ke gudana ta hanya ɗaya, kamar daga batir ko fanalin solar."], ["AC (alternating current)", "wutar lantarki da ke canja hanya sau da yawa a cikin daƙiƙa ɗaya; gidaje suna amfani da AC."], ["Inverter", "akwatin da ke mayar da DC daga fanalan zuwa AC don gidan."], ["Racking", "firam na ƙarfe da ke riƙe fanalan."], ["Grid-tied (haɗe da grid)", "a haɗe da layukan kamfanin wutar lantarki."], ["Disconnect (maɓallin katsewa)", "maɓalli da ke yanke wuta zuwa wani sashe na tsari."]],
          slides: [
            { title: "Fanalai suna yin wutar DC", bullets: ["Fanalan solar (modules) suna mayar da hasken rana zuwa wutar DC", "PV yana nufin photovoltaic: wuta daga haske"] },
            { title: "Daga rufi zuwa gida", bullets: ["Racking yana riƙe fanalan", "Wayoyi suna tafiya zuwa inverter", "Inverter yana mayar da DC zuwa AC don gidan"] },
            { title: "Maɓallan tsaro da mita", bullets: ["Disconnect yana kashe wasu sassan tsarin", "Mita tana ƙirga wutar da aka yi amfani da ita da wadda aka tura zuwa grid"] },
            { title: "Tsarin da ke haɗe da grid", bullets: ["Suna nan a haɗe da layukan kamfanin wutar lantarki", "Ƙarin wuta yana iya gudana zuwa grid", "Batir zaɓi ne, don amfani daga baya ko lokacin ɗaukewar wuta"] }
          ],
          sources: [{ name: "U.S. Department of Energy: Homeowner's Guide to Going Solar", url: "https://www.energy.gov/eere/solar/homeowners-guide-going-solar" }],
          tryIt: "A takarda, ku zana gida mai sauƙi da fanalai a kan rufinsa. Ku zana ku rubuta sunan akwatuna shida bisa tsari: fanalai, racking, inverter, disconnect, babban akwatin wutar lantarki, mita. Kusa da kowanne, ku rubuta gajeren layi ɗaya kan abin da yake yi. Sannan ku rufe sunayen ku faɗi kowane sashe da babbar murya.",
          youCanNow: "faɗin sunayen manyan sassan tsarin solar da ke haɗe da grid da abin da kowanne yake yi.",
          quickCheck: [
            { objective: "O1", q: "Wane sashe ne yake mayar da DC daga fanalan zuwa AC don gidan?", options: ["Racking", "Mita", "Inverter", "Disconnect"], answer: 2, why: "Inverter yana mayar da DC na fanalan zuwa AC da gidaje ke amfani da shi." },
            { objective: "O1", q: "Mene ne ma'anar \"grid-tied\"?", options: ["Tsarin yana haɗe da layukan kamfanin wutar lantarki", "An ɗaure fanalan da igiya", "Gidan ba shi da mita", "Tsarin yana aiki da dare kawai"], answer: 0, why: "Tsarin grid-tied yana nan a haɗe da grid na kamfanin wuta, don haka ƙarin wuta yana iya fita, kuma wutar grid tana iya shigowa." }
          ]
        },
        {
          title: "Kasancewa lafiya a wurin aikin solar",
          objectives: ["O2"],
          minutes: 6,
          goal: "Jera manyan haɗurra a aikin solar da matakin tsaro na kowanne.",
          text: [
            "Faɗuwa ita ce babbar haɗari a aikin solar. A aikin gini, OSHA tana buƙatar kariya daga faɗuwa idan kuna aiki a ƙafa 6 ko fiye sama da ƙasan da ke ƙarƙashinku. A kan rufi, yawanci wannan yana nufin tsarin kama faɗuwa na mutum (personal fall arrest system): harness na dukan jiki, lanyard (igiyar haɗi) da anga (anchor) a kan rufi, wanda ƙwararren mutum ya kafa. Ku duba harness ɗinku kafin kowane amfani.",
            "Girgizar lantarki ita ce babbar haɗari ta biyu. Fanalan solar suna yin wutar lantarki duk lokacin da haske ya taɓa su, kuma ba za ku iya kashe rana ba. Wayoyin da ke fitowa daga fanalan suna iya ɗauke da wuta da rana ko da maɓalli a kashe yake. A matsayinku na sabon mataimaki, ba ku haɗa ko taɓa wayoyi: ƙwararrun ma'aikata masu horo ne kaɗai ke yin aikin lantarki, suna bin matakan lockout da tagout.",
            "Tsani: ku ɗora shi a kan ƙasa mai ƙarfi da daidaito, sandunan gefensa su wuce bakin rufi da aƙalla ƙafa 3, kuma ku riƙe wurare uku a koyaushe (hannu biyu da ƙafa ɗaya, ko ƙafa biyu da hannu ɗaya). Zafi: ku riƙa shan ruwa, ku huta a inuwa, kuma ku faɗa wa shugabanku idan kuna jin jiri ko ciwo. Ɗaukar kaya: fanalai manya ne kuma iska tana kama su, don haka mutane biyu su ɗauke su, kuma ku ɗaga da ƙafafunku.",
            "Ku sa kayan kariyarku (PPE): hular kwano, gilashin kariya, safar hannu ta aiki da takalma masu riƙo. Ku dakatar da aiki ku faɗa wa shugabanku duk lokacin da wani abu bai yi kama da lafiya ba."
          ],
          steps: ["Kafin ku hau: ku duba tsani, yanayi da harness ɗinku.", "A kan rufi: ku kasance a ɗaure da anga duk lokacin da kuke ƙafa 6 ko fiye a sama.", "Ku ɗauki kowane fanali da waya kamar suna ɗauke da wuta; kada ku taɓa haɗin wayoyi sai idan ku ƙwararru ne.", "Ku sha ruwa, ku huta a inuwa, kuma ku ɗauki fanalai tare da abokin aiki.", "Ku tsaya ku faɗa wa shugabanku game da duk wata haɗari."],
          words: [["OSHA", "U.S. Occupational Safety and Health Administration, hukumar tarayyar Amurka ta tsaro a wurin aiki."], ["Kariya daga faɗuwa (fall protection)", "kaya da tsare-tsaren da ke hana ku faɗuwa ko suke tsayar da faɗuwa lafiya."], ["Personal fall arrest system", "harness na dukan jiki, lanyard da anga da ke kama ku idan kun faɗi."], ["PPE", "personal protective equipment: kayan kariyar da kuke sawa, kamar hular kwano da safar hannu."], ["Lockout/tagout", "matakan kashe wuta da kulle ta don kada wani ya sake kunna ta yayin da ake aiki."], ["Mai ɗauke da wuta (live)", "yana ɗauke da wutar lantarki."]],
          slides: [
            { title: "Faɗuwa: babbar haɗari", bullets: ["OSHA: kariya daga faɗuwa a ƙafa 6 ko fiye a aikin gini", "Harness, lanyard da anga a kan rufi", "Ku duba harness ɗinku kafin kowane amfani"] },
            { title: "Girgizar lantarki", bullets: ["Fanalai suna yin wuta duk lokacin da haske ya taɓa su", "Wayoyi suna iya ɗauke da wuta ko da maɓalli a kashe yake", "Ƙwararrun ma'aikata ne kaɗai ke yin aikin lantarki"] },
            { title: "Tsani, zafi da ɗaukar kaya", bullets: ["Sandunan tsani su wuce bakin rufi da ƙafa 3; ƙasa mai ƙarfi da daidaito", "Ruwa, inuwa da hutu", "Mutane biyu su ɗauki fanali"] },
            { title: "Ku sa kaya, ku yi magana", bullets: ["Hular kwano, gilashin kariya, safar hannu, takalma masu riƙo", "Ku dakatar da aiki ku faɗa wa shugaba idan wani abu ba lafiya ba ne"] }
          ],
          sources: [
            { name: "OSHA: Fall protection", url: "https://www.osha.gov/fall-protection" },
            { name: "OSHA: 29 CFR 1926.501, duty to have fall protection (construction)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.501" },
            { name: "OSHA: 29 CFR 1926.1053, ladders", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1053" },
            { name: "OSHA: Heat", url: "https://www.osha.gov/heat-exposure" },
            { name: "U.S. Bureau of Labor Statistics: Solar photovoltaic installers", url: "https://www.bls.gov/ooh/construction-and-extraction/solar-photovoltaic-installers.htm" }
          ],
          tryIt: "Labarin atisaye: safiya ce mai zafi a watan Yuli. Ƙungiyarku tana saka fanalai 18 a kan rufin gida mai hawa biyu. Tsanin yana kan ciyawa mai laushi, wani abokin aiki ba shi da harness, kuma wayoyin wani fanali suna rataye a sake. A takarda, ku yi jerin bincike mai ginshiƙai biyu: Haɗari da Matakin tsaro. Ku rubuta aƙalla layuka huɗu (faɗuwa, girgizar lantarki, zafi, ɗaukar kaya, da tsani).",
          youCanNow: "gane manyan haɗurra a aikin solar da faɗin matakin tsaro na kowanne.",
          quickCheck: [
            { objective: "O2", q: "A aikin gini, a wane tsawo ne OSHA take buƙatar kariya daga faɗuwa?", options: ["Ƙafa 10", "Ƙafa 20", "A saman rufi kaɗai", "Ƙafa 6"], answer: 3, why: "Dokar OSHA ta aikin gini tana buƙatar kariya daga faɗuwa a ƙafa 6 ko fiye sama da ƙasan da ke ƙarƙashi." },
            { objective: "O2", q: "Rana tana haskakawa kuma maɓallin disconnect a kashe yake. Shin wayoyin fanali ba su da haɗarin taɓawa?", options: ["Eh, maɓallin yana sa komai ya zama lafiya", "A'a, fanalai suna yin wuta duk lokacin da haske ya taɓa su, don haka ku ɗauki wayoyi kamar suna da wuta", "Eh, idan kun sa safar hannu ta aiki", "Sai dai idan inverter ba ya ƙara"], answer: 1, why: "Fanalai suna ci gaba da yin wuta a cikin haske, don haka wayoyinsu suna iya ɗauke da wuta har yanzu." }
          ]
        },
        {
          title: "Lissafin solar mai sauƙi (na atisaye kawai)",
          objectives: ["O3"],
          minutes: 6,
          goal: "Lissafa watt, girman tsari da voltage na string daga lambobin atisaye.",
          text: [
            "Ƙungiyoyi suna amfani da wasu dabarun lissafi masu sauƙi kowace rana. Duk lambobin da ke cikin wannan darasi an ƙirƙira su ne don atisaye kawai. Zane na gaske yana amfani da alamar fanalin, takardar bayanin mai ƙera shi (data sheet) da ƙa'idar lantarki (electrical code), kuma ƙwararren mai zane ne ke duba shi.",
            "Ƙarfin wuta: watts = volts x amps. Fanalin atisaye da ke yin volt 40 a amp 10 yana yin 40 x 10 = watt 400. Watt 1,000 shi ne kilowatt 1 (kW).",
            "Girman tsari: yawan fanalai x watt na kowane fanali. Fanalan atisaye 20 masu watt 400 kowanne = watt 8,000, wato 8 kW.",
            "Strings: fanalan da aka haɗa a jere (series) suna yin string. A series, voltage suna haɗuwa (ƙari) kuma amps suna nan daidai. Fanalan atisaye uku masu volt 40 kowanne a series = volt 120. A parallel (gefe da gefe), amps suna haɗuwa kuma voltage yana nan daidai."
          ],
          steps: ["Ku fara rubuta dabarar lissafin.", "Ku saka lambobin da alamominsu (V, A, W).", "Ku yi lissafin a na'urar lissafi.", "Ku mayar da watt zuwa kilowatt ta raba da 1,000.", "Ku duba: shin amsar tana da ma'ana?"],
          words: [["Volt (V)", "ma'aunin turawa ko matsin wutar lantarki."], ["Amp (A)", "ma'aunin yawan wutar lantarki da ke gudana."], ["Watt (W)", "ma'aunin ƙarfin wuta: volts sau amps."], ["Kilowatt (kW)", "watt 1,000."], ["Series", "haɗawa ƙarshe zuwa ƙarshe a layi ɗaya; voltage suna haɗuwa."], ["Parallel", "haɗawa gefe da gefe; amps suna haɗuwa."], ["String", "rukunin fanalai da aka haɗa a series."]],
          slides: [
            { title: "Na atisaye kawai", bullets: ["Lambobin da aka ƙirƙira don koyon hanyar lissafi", "Zane na gaske yana amfani da data sheet, code da ƙwararren mai zane"] },
            { title: "Watts = volts x amps", bullets: ["40 V x 10 A = 400 W", "1,000 W = 1 kW"] },
            { title: "Girman tsari", bullets: ["Fanalai x watt na kowane fanali", "20 x 400 W = 8,000 W = 8 kW"] },
            { title: "Series da parallel", bullets: ["Series: volt suna haɗuwa, amps suna nan daidai", "3 x 40 V a series = 120 V", "Parallel: amps suna haɗuwa, volt suna nan daidai"] }
          ],
          tryIt: "Na atisaye kawai. Ku warware a takarda ku nuna yadda kuka yi: (a) Fanali yana yin volt 36 a amp 11. Watt nawa? (b) Gida yana da fanalai 24 masu watt 350. Mene ne girman tsarin a kW? (c) Fanalai biyar masu volt 40 kowanne an haɗa su a series. Mene ne voltage na string? Amsoshi don ku duba kanku: (a) 396 W, (b) 8,400 W = 8.4 kW, (c) 200 V.",
          youCanNow: "lissafa watt, girman tsari da voltage na string daga lambobin atisaye da nuna yadda kuka yi.",
          quickCheck: [
            { objective: "O3", q: "Na atisaye kawai: fanalai 15 masu watt 400 kowanne. Mene ne girman tsarin?", options: ["4 kW", "6 kW", "15 kW", "400 kW"], answer: 1, why: "15 x 400 W = 6,000 W, kuma 6,000 / 1,000 = 6 kW." },
            { objective: "O3", q: "Na atisaye kawai: fanalai huɗu masu volt 40 kowanne an haɗa su a series. Mene ne voltage na string?", options: ["40 V", "80 V", "10 V", "160 V"], answer: 3, why: "A series voltage suna haɗuwa: 4 x 40 V = 160 V." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Yadda solar ke aiki da yadda ake kasancewa lafiya",
        questions: [
          { objective: "O1", q: "Wane irin wutar lantarki ne fanalan solar suke yi?", options: ["AC", "DC", "Wutar gas", "Wutar batir kawai"], answer: 1, why: "Fanalai suna yin DC (direct current); inverter yana mayar da ita zuwa AC." },
          { objective: "O1", q: "Mene ne aikin racking?", options: ["Yana riƙe fanalan a kan rufi ko ƙasa", "Yana ƙirga wutar da aka tura zuwa grid", "Yana mayar da DC zuwa AC", "Yana ajiye wuta da dare"], answer: 0, why: "Racking firam ne na ƙarfe da ke riƙe fanalan." },
          { objective: "O2", q: "Kuna kan rufi a tsawon ƙafa 12. Me dole ku yi amfani da shi?", options: ["Babu komai idan kuna da hankali", "Hular kwano kawai", "Kariya daga faɗuwa, kamar harness da aka ɗaure da anga", "Tsani mafi tsawo"], answer: 2, why: "A ƙafa 6 ko fiye a aikin gini kuna buƙatar kariya daga faɗuwa." },
          { objective: "O2", q: "A matsayinku na sabon mataimaki, wani abokin aiki ya ce ku haɗa wayoyin fanali biyu. Me za ku yi?", options: ["Ku haɗa su da sauri da safar hannu", "Ku jira har gajimare ya wuce", "Ku nemi mai gidan ya taimaka", "Ku ƙi, ku faɗa wa shugabanku, domin ƙwararrun ma'aikata ne kaɗai ke yin aikin lantarki"], answer: 3, why: "Haɗin wayoyin lantarki na ƙwararrun ma'aikata masu horo ne; sababbin mataimaka ba sa taɓa wayoyi." },
          { objective: "O3", q: "Na atisaye kawai: fanali yana yin volt 50 a amp 8. Watt nawa ke nan?", options: ["58 W", "400 W", "42 W", "800 W"], answer: 1, why: "Watts = volts x amps, don haka 50 x 8 = 400 W." }
        ]
      }
    },
    {
      name: "Babi na 2: Daga rufi zuwa aikinku na farko",
      lessons: [
        {
          title: "Matakan saka solar a kan rufi",
          objectives: ["O4"],
          minutes: 5,
          goal: "Jera matakan saka solar a kan rufi bisa tsari da faɗin wanda yake yin kowanne.",
          text: [
            "Kowane aikin saka solar yana bin hanya. Da farko, binciken wuri (site assessment): wani yana duba shekarun rufin da yanayinsa, inda yake fuskanta, inuwar bishiyoyi, da babban akwatin wutar lantarki na gidan. Sannan mai zane yana tsara wurin fanalan da wayoyin.",
            "Na gaba kuma izini (permit). Ofishin gine-gine na birni ko ƙaramar hukuma (county) yana duba zanen kafin a fara aiki. A ranar saka solar, ƙungiyar tana kafa kayan tsaro, tana yi wa rufin alama, kuma tana ƙulle abubuwan haɗi a cikin rafters (katakan rufi). Ana yi wa kowane abin haɗi flashing kuma a toshe shi don kada rufin ya yi yoyo. Sannan ƙungiyar tana ƙulle racking ta ɗora fanalan.",
            "Ƙwararren mai aikin lantarki ko ma'aikaci mai lasisi ne yake yin haɗin wutar lantarki, yana bin National Electrical Code (NEC) da dokokin wurin. Sannan jami'in gine-gine na wurin yana duba tsarin (inspection). A ƙarshe, kamfanin wutar lantarki (utility) yana amincewa a haɗa tsarin da grid, wanda ake yawan kira permission to operate (izinin aiki). Sai bayan haka ne ake kunna tsarin.",
            "Mataimaka galibi suna ɗauka da shirya kayan aiki, suna taimakawa wajen kafa racking da fanalai, suna tsaftace wurin, kuma suna bin umarnin shugaba."
          ],
          steps: ["Binciken wuri: rufi, inda yake fuskanta, inuwa, akwatin wutar lantarki.", "Zane: tsarin wurin fanalai da shirin wayoyi.", "Izini daga birni ko ƙaramar hukuma.", "Kafa kayan tsaro, sannan abubuwan haɗi a rufi, da flashing da toshewa.", "Racking, sannan a ɗora fanalai.", "Haɗin wutar lantarki ta hannun ƙwararrun ma'aikata.", "Dubawa daga jami'in wurin.", "Amincewar kamfanin wuta (permission to operate), sannan a kunna."],
          words: [["Binciken wuri (site assessment)", "ziyara don duba ko rufi ko fili ya dace da solar."], ["Izini (permit)", "izinin hukuma daga birni ko ƙaramar hukuma don yin aikin."], ["Flashing", "ƙarfe ko wani abu da ke hana ruwa shiga inda wani abu ya ratsa rufi."], ["Rafter", "ɗaya daga cikin katakan da ke riƙe rufi."], ["NEC", "National Electrical Code (NFPA 70), ƙa'idodin aikin lantarki lafiya da jihohi da birane ke ɗauka."], ["Dubawa (inspection)", "binciken da jami'i ke yi don tabbatar da cewa aikin ya cika code."], ["Permission to operate", "amincewar kamfanin wuta don kunna tsarin da ke haɗe da grid."]],
          slides: [
            { title: "Kafin ƙungiyar ta iso", bullets: ["Binciken wuri: rufi, fuskanta, inuwa, akwatin wuta", "Zane: wurin fanalai da wayoyi", "Izini daga birni ko ƙaramar hukuma"] },
            { title: "Ranar saka solar", bullets: ["Kafa kayan tsaro da farko", "Abubuwan haɗi a cikin rafters, da flashing da toshewa", "Racking, sannan fanalai"] },
            { title: "Kammalawa", bullets: ["Aikin lantarki ta hannun ƙwararru, bisa NEC", "Dubawa daga jami'in wurin", "Amincewar kamfanin wuta, sannan a kunna"] },
            { title: "Abin da mataimaka ke yi", bullets: ["Ɗauka da shirya kayan aiki", "Taimakawa wajen kafa racking da fanalai", "Tsaftace wurin; bin umarnin shugaba"] }
          ],
          sources: [
            { name: "U.S. Department of Energy: Homeowner's Guide to Going Solar", url: "https://www.energy.gov/eere/solar/homeowners-guide-going-solar" },
            { name: "NFPA 70: National Electrical Code (check which edition your state uses)", url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" }
          ],
          tryIt: "Ku rubuta kowane ɗaya daga cikin matakai 8 na saka solar a kan ɗan ƙaramin takarda nasa. Ku gauraya su, sannan ku sake jera su bisa tsari ba tare da kallon darasin ba. Kusa da kowanne, ku rubuta wanda yake yin sa: mai zane, birni ko ƙaramar hukuma, ƙungiya, ƙwararren mai aikin lantarki, jami'in dubawa ko kamfanin wuta. Ku kwatanta tsarinku da darasin.",
          youCanNow: "jera matakan saka solar a kan rufi bisa tsari da faɗin wanda yake yin kowanne.",
          quickCheck: [
            { objective: "O4", q: "Me yake zuwa kafin ranar saka solar kai tsaye?", options: ["Samun izini (permit)", "Dubawa ta ƙarshe", "Izinin aiki daga kamfanin wuta", "Kunna tsarin"], answer: 0, why: "Izinin birni ko ƙaramar hukuma yana zuwa kafin a fara aiki a kan rufi." },
            { objective: "O4", q: "Me yasa ake yi wa abubuwan haɗi a rufi flashing da toshewa?", options: ["Don fanalan su yi sheƙi", "Don kada rufin ya yi yoyo", "Don hanzarta dubawa", "Don fanalan su ƙara yin wuta"], answer: 1, why: "Flashing da toshewa suna hana ruwa shiga inda ƙusoshi suka ratsa rufi." }
          ]
        },
        {
          title: "Takardun shaida, lasisi da horo",
          objectives: ["O5"],
          minutes: 5,
          goal: "Jera takardun shaida da lasisin aikin solar na farko a inda kuke zaune, da majiyar hukuma ta kowanne.",
          text: [
            "Masu saka solar da yawa suna farawa a matsayin mataimaka kuma suna koyo yayin aiki, sau da yawa daga wata ɗaya zuwa shekara ɗaya. Wasu suna fara ɗaukar gajeren kwas a kwalejin al'umma (community college), makarantar fasaha ko shirin koyon sana'a (apprenticeship). Masu aikin lantarki, masu aikin rufi da ma'aikatan gini sau da yawa suna iya shiga solar da sauri.",
            "NABCEP (North American Board of Certified Energy Practitioners) tana ba da sanannun takardun shaidar solar. Ta farko ita ce NABCEP PV Associate. Kuna iya cancanta ta hanyar kammala kwas tare da NABCEP Associate Registered Training Provider (makarantar horo da NABCEP ta yi wa rajista), ko ta nuna aƙalla watanni shida na cikakken aikin solar, sannan ku ci jarabawar. Daga baya, ƙwararrun masu saka solar suna iya neman NABCEP Board Certification, kamar PV Installation Professional.",
            "Jihohi ne suke tsara lasisi, da wasu birane. Wasu jihohi suna buƙatar lasisin solar ko na lantarki don wasu ayyuka; wasu ba sa buƙata. Kuɗaɗe, ƙa'idodin jarabawa da sharuɗɗa suna canjawa, don haka ku duba shafin hukuma na NABCEP da hukumar lasisi ta jiharku da kanku kafin ku biya kuɗin komai.",
            "Wannan kwas yana shirya ku don farawa. Ba ya ba ku takardar shaida ko lasisi."
          ],
          steps: ["Ku karanta shafin shirin NABCEP Associate.", "Ku nemo makarantar horo da aka yi wa rajista ko ku ƙirga watannin aikinku na solar.", "Ku nemi hukumar lasisin 'yan kwangila ko ta lantarki ta jiharku don ƙa'idodin solar.", "Ku rubuta kowane sharaɗi da shafin da kuka same shi.", "Ku tambayi masu ɗaukar aikin solar na kusa da ku wace takardar shaida suke so."],
          words: [["NABCEP", "North American Board of Certified Energy Practitioners, ƙungiyar da ke ba da takardun shaidar solar."], ["Takardar shaida (credential)", "shaida cewa kun ci jarabawa ko kun cika wani mizani."], ["Lasisi (license)", "izini daga jiha ko birni don yin wani aiki."], ["Apprenticeship", "aiki mai albashi tare da horo, inda kuke koyo daga ƙwararrun ma'aikata."], ["Registered training provider", "makarantar da NABCEP ta lissafa a matsayin wadda aka amince ta shirya ku don jarabawarta ta associate."]],
          slides: [
            { title: "Hanyoyin shiga", bullets: ["Ku fara a matsayin mataimaki ku koya yayin aiki", "Gajerun kwasa-kwasai, kwalejojin al'umma, apprenticeship", "Aikin lantarki, rufi ko gini yana taimakawa"] },
            { title: "NABCEP PV Associate", bullets: ["Takardar shaidar solar ta farko", "Ku cancanta ta kwas mai rajista ko watanni 6 na aikin solar", "Sannan ku ci jarabawar"] },
            { title: "Lasisi na wuri ne", bullets: ["Jiharku ce ke tsara shi, wani lokaci har da birninku", "Wasu jihohi suna buƙatar lasisin solar ko na lantarki"] },
            { title: "Ku duba kafin ku biya", bullets: ["Shafin hukuma na NABCEP da hukumar lasisi ta jiharku", "Ku rubuta kowane sharaɗi da majiyarsa", "Wannan kwas yana shirya ku; ba ya ba ku lasisi"] }
          ],
          sources: [
            { name: "NABCEP: Associate program (PV Associate)", url: "https://www.nabcep.org/certification/associate-program/" },
            { name: "NABCEP: Certifications", url: "https://www.nabcep.org/certifications/" },
            { name: "U.S. Bureau of Labor Statistics: How to become a solar photovoltaic installer", url: "https://www.bls.gov/ooh/construction-and-extraction/solar-photovoltaic-installers.htm" },
            { name: "CareerOneStop: License Finder", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" }
          ],
          tryIt: "Ku buɗe shafin shirin NABCEP Associate ku rubuta hanyoyin cancanta don PV Associate. Sannan ku nemi sunan jiharku tare da \"solar contractor license\" ku nemo shafin hukuma na hukumar lasisi ta jiharku (sau da yawa yana ƙarewa da .gov). Ku rubuta layi ɗaya kan abin da ya faɗa, da adireshin shafin.",
          youCanNow: "faɗin sunan takardar shaidar NABCEP ta farko, faɗin yadda ake cancanta da ita, da nemo ƙa'idodin lasisi na jiharku a shafin hukuma.",
          quickCheck: [
            { objective: "O5", q: "Wace ce takardar shaidar solar PV ta farko ta NABCEP?", options: ["EPA Section 608", "CDL Class A", "NABCEP PV Associate", "CompTIA A+"], answer: 2, why: "NABCEP PV Associate ita ce takardar shaidar solar PV ta farko." },
            { objective: "O5", q: "A ina za ku duba ko jiharku tana buƙatar lasisi don aikin solar?", options: ["Wani rubutu a kafofin sada zumunta", "Tallar wani gajeren kwas na intanet", "Aboki a wata jiha", "Shafin hukuma na hukumar lasisi ta jiharku"], answer: 3, why: "Kowace jiha ce ke tsara lasisi, don haka shafin hukuma na hukumar jihar shi ne majiyar da za a amince da ita." }
          ]
        },
        {
          title: "Shirin Fara Aikin Solar naku",
          objectives: ["O6"],
          minutes: 6,
          goal: "Rubuta Shirin Fara Aikin Solar mai ranaku da sashen ƙwarewa na résumé.",
          text: [
            "Yanzu ku haɗa komai a shafi ɗaya da za ku iya kai wa shirin horo ko hirar neman aiki. Shiri mai ranaku na gaske yana nuna wa mai ɗaukar aiki cewa da gaske kuke.",
            "Shirinku yana da sassa shida: yadda solar ke aiki da kalmominku; jerin binciken tsaro; matsalolin lissafi na atisaye guda biyu da yadda kuka yi su; matakan saka solar bisa tsari; hanyar samun takardar shaidarku da ranaku da majiyoyi; da sashen \"Ƙwarewar solar\" na résumé.",
            "Don sashen résumé, ku rubuta abubuwan gaskiya da za ku iya yi yanzu, a gajerun layuka da ke farawa da kalmar aiki. Misali: \"Na san sassan tsarin PV da ke haɗe da grid da yadda DC ke zama AC.\" \"Na sami horo kan haɗurran wurin aikin solar: kariya daga faɗuwa, girgizar lantarki, zafi da ɗaukar kaya lafiya.\" \"Ina iya lissafa girman tsari da voltage na string.\" Ku ƙara aikin da kuka yi a baya da ke taimakawa: gini, rufi, aikin soja, rumbun ajiyar kaya ko duk aikin da ya shafi kayan aiki, tsawo ko aiki tare.",
            "Tsoffin sojoji da masu tarihin laifi: masu ɗaukar aikin solar da yawa suna ɗaukar mutane daga waɗannan rukunoni. Ku faɗi gaskiya a takardun neman aiki, kuma ku tambayi cibiyar neman aiki ta wurinku ko shirin taimakon masu dawowa gida game da taimakon horo."
          ],
          steps: ["Ku rubuta bayaninku na jimloli 3 zuwa 4 game da tsarin da ke haɗe da grid.", "Ku kwafo jerin binciken tsaronku daga Darasi na 2 ku kammala shi.", "Ku ƙara matsalolin lissafi na atisaye guda biyu da yadda kuka yi su.", "Ku jera matakan saka solar 8 bisa tsari.", "Ku rubuta hanyar samun takardar shaidarku da ranakun da kuke nufi da shafukan majiya.", "Ku rubuta layukan résumé 3 da ke farawa da kalmar aiki."],
          words: [["Résumé", "gajeriyar takarda da ke jera ƙwarewarku, aikinku da horonku don masu ɗaukar aiki."], ["Ranar da ake nufi (target date)", "ranar da kuke shirin kammala wani mataki."], ["Cibiyar neman aiki (workforce center)", "ofishin jama'a kyauta da ke taimakon mutane su sami aiki da horo; da yawa ana kiransu American Job Centers."]],
          slides: [
            { title: "Shafi ɗaya, sassa shida", bullets: ["Yadda solar ke aiki; jerin binciken tsaro", "Lissafin atisaye; matakan saka solar", "Hanyar takardar shaida da ranaku; sashen résumé"] },
            { title: "Ranaku na gaske", bullets: ["Lokacin da za ku fara horo", "Lokacin da kuke son yin jarabawar NABCEP PV Associate", "Lokacin da za ku nemi aikin mataimaki"] },
            { title: "Résumé: Ƙwarewar solar", bullets: ["Gajerun layuka da ke farawa da kalmar aiki", "Abubuwan gaskiya kaɗai da za ku iya yi", "Ku ƙara aikin baya da kayan aiki, tsawo ko aiki tare"] },
            { title: "Ku nemi taimako", bullets: ["American Job Centers da shirye-shiryen masu dawowa gida", "Ku tambaya game da taimakon horo da masu ɗaukar aiki na wurin"] }
          ],
          sources: [{ name: "CareerOneStop: Find an American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }],
          tryIt: "Aikin ƙarshe: ku yi Shirin Fara Aikin Solar naku na shafi ɗaya mai dukkan sassa shida. Ku saka rana ta gaske kusa da kowane matakin takardar shaida da na aiki, da adireshin shafin kowane sharaɗi da kuka duba. Ku karanta layukan résumé ɗinku da babbar murya kamar kuna cikin hirar neman aiki.",
          youCanNow: "nuna wa mai ɗaukar aiki ko shirin horo rubutaccen shirin fara aikin solar, mai ranaku, majiyoyi da sashen ƙwarewa na résumé.",
          quickCheck: [
            { objective: "O6", q: "Wanne ne mafi kyawun layin résumé don aikin mataimakin solar?", options: ["\"Mai ƙwazon aiki.\"", "\"Na sami horo kan haɗurran wurin aikin solar: kariya daga faɗuwa, girgizar lantarki, zafi da ɗaukar kaya lafiya.\"", "\"Mai aikin lantarkin solar mai lasisi.\" (alhali ba ku da lasisi)", "\"Ina son rana.\""], answer: 1, why: "Gaskiya ne, takamaimai ne kuma yana farawa da kalmar aiki; kada ku taɓa da'awar lasisin da ba ku da shi." },
            { objective: "O6", q: "Me yake ƙarfafa Shirin Fara Aikin Solar?", options: ["Ranaku na gaske da shafin majiyar kowane sharaɗi", "Babu ranaku, don ku sami sassauci", "Kwafar shirin aboki", "Barin sashen tsaro"], answer: 0, why: "Ranaku da majiyoyin hukuma suna mayar da buri zuwa shirin da mai ɗaukar aiki zai amince da shi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Daga rufi zuwa aikinku na farko",
        questions: [
          { objective: "O4", q: "Wane ne yake ba da amincewa ta ƙarshe don haɗa tsarin grid-tied da grid?", options: ["Mataimaki", "Mai ƙera fanalai", "Maƙwabcin mai gidan", "Kamfanin wutar lantarki (utility)"], answer: 3, why: "Kamfanin wuta yana ba da permission to operate kafin a kunna tsarin." },
          { objective: "O4", q: "Wane mataki ne yake zuwa da farko?", options: ["Ɗora fanalai", "Dubawa", "Binciken wuri", "Kunna tsarin"], answer: 2, why: "Binciken wuri yana duba rufi, inda yake fuskanta, inuwa da akwatin wutar lantarki kafin komai." },
          { objective: "O5", q: "Mece ce hanya ɗaya ta cancanta don jarabawar NABCEP PV Associate?", options: ["Kammala kwas tare da NABCEP Associate Registered Training Provider", "Sayen fanalin solar", "Kallon bidiyo ɗaya a intanet", "Aiki kwana ɗaya a kan rufi"], answer: 0, why: "Hanyar karatu ita ce kwas tare da makarantar horo mai rajista; wata hanya kuma ita ce aƙalla watanni shida na aikin solar." },
          { objective: "O5", q: "Shin wannan kwas yana ba ku lasisin solar?", options: ["Eh, bayan jarabawa", "A'a; yana shirya ku ne, kuma lasisi yana fitowa daga jiharku ko birninku", "Eh, idan kun gama a rana ɗaya", "A jihohi masu rana kawai"], answer: 1, why: "Kwas ɗin yana shirya ku; takardun shaida suna fitowa daga NABCEP, lasisi kuma daga jiha ko birni." },
          { objective: "O6", q: "Shirinku ya ce \"Yi jarabawar PV Associate.\" Me ya kamata ku ƙara?", options: ["Babu komai", "Sunan aboki", "Ranar da kuke nufi da shafin hukuma da kuka duba", "Hoton fanali"], answer: 2, why: "Rana da majiya suna sa matakin ya zama na gaske kuma mai yiwuwar dubawa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tushen Aikin Saka Fanalan Hasken Rana (Solar)",
    questions: [
      { objective: "O1", q: "Me fanalan solar ke mayar da hasken rana zuwa gare shi?", options: ["Zafi kawai", "Wutar lantarki ta DC", "Iskar gas", "Wutar AC ba tare da inverter ba"], answer: 1, why: "Fanalan solar PV suna yin wutar lantarki ta DC (direct current)." },
      { objective: "O1", q: "Wane sashe ne yake ƙirga wutar da gida ke amfani da ita da wadda yake turawa zuwa grid?", options: ["Mita", "Racking", "Flashing", "Harness"], answer: 0, why: "Mita tana auna wutar da ke shigowa da fita." },
      { objective: "O1", q: "Tsarin gida da ke nan a haɗe da layukan kamfanin wuta ana kiransa:", options: ["Off-road", "Free-standing", "Battery-only", "Grid-tied"], answer: 3, why: "Tsarin grid-tied suna haɗe da grid na kamfanin wuta." },
      { objective: "O1", q: "Me ake amfani da batir a kai a wasu gidajen solar?", options: ["Riƙe fanalai a kan rufi", "Mayar da AC zuwa DC don mita", "Ajiye wuta don gaba ko lokacin ɗaukewar wuta", "Maye gurbin inverter"], answer: 2, why: "Batir yana ajiye wuta don amfani daga baya, kamar da dare ko lokacin ɗaukewar wuta." },
      { objective: "O2", q: "Mece ce babbar haɗari a aikin saka solar?", options: ["Yankewar takarda", "Faɗuwa daga rufi da tsani", "Ƙarar kiɗa", "Ruwan sama a kan mota"], answer: 1, why: "Faɗuwa ita ce babbar haɗari ga masu saka solar." },
      { objective: "O2", q: "Wane kaya ne yake cikin personal fall arrest system?", options: ["Gilashin kariya", "Takalman aiki", "Harness na dukan jiki, lanyard da anga", "Bel ɗin kayan aiki"], answer: 2, why: "Harness, lanyard da anga tare suna kama faɗuwa." },
      { objective: "O2", q: "Akwai zafi sosai kuma wani abokin aiki yana jin jiri. Me za ku yi?", options: ["Ku faɗa wa shugaba, ku kai shi inuwa ku ba shi ruwa", "Ku ce masa ya ci gaba da aiki", "Ku tura shi ya hau tsani", "Ku ƙyale har lokacin cin abinci"], answer: 0, why: "Jiri yana iya zama ciwon zafi: inuwa, ruwa, hutu da faɗa wa shugaba su ne farko." },
      { objective: "O2", q: "Yaya ya kamata ku ɗauki babban fanalin solar?", options: ["Kai kaɗai, a saman kanku", "A bakin rufi mai iska", "Ta riƙe wayoyinsa", "Tare da abokin aiki, kuna ɗagawa da ƙafafunku"], answer: 3, why: "Fanalai manya ne kuma iska tana kama su, don haka mutane biyu suke ɗaukarsu da ƙafafunsu." },
      { objective: "O3", q: "Na atisaye kawai: volt 30 x amp 9 = ?", options: ["39 W", "270 W", "21 W", "2,700 W"], answer: 1, why: "Watts = volts x amps: 30 x 9 = 270 W." },
      { objective: "O3", q: "Na atisaye kawai: fanalai 25 masu watt 400. Mene ne girman tsarin?", options: ["10 kW", "4 kW", "25 kW", "1 kW"], answer: 0, why: "25 x 400 W = 10,000 W = 10 kW." },
      { objective: "O3", q: "A string na series, me yake faruwa da voltage?", options: ["Yana nan daidai", "Yana komawa sifili", "Voltage suna haɗuwa", "Yana raguwa da rabi"], answer: 2, why: "A series, voltage na kowane fanali yana haɗuwa zuwa voltage na string." },
      { objective: "O3", q: "Watt nawa ne a cikin kilowatt 1?", options: ["10", "100", "10,000", "1,000"], answer: 3, why: "Kilo yana nufin 1,000, don haka 1 kW = 1,000 W." },
      { objective: "O4", q: "Me yake faruwa kafin a fara aiki a kan rufi?", options: ["Izini (permit) daga birni ko ƙaramar hukuma", "Dubawa ta ƙarshe", "Permission to operate", "Kunna tsarin"], answer: 0, why: "Ana amincewa da izini kafin a fara saka solar." },
      { objective: "O4", q: "Wane ne yake yin haɗin wutar lantarki a aikin saka solar?", options: ["Kowane sabon mataimaki", "Mai gidan", "Ƙwararren mai aikin lantarki ko ma'aikaci mai lasisi", "Mai karanta mitar kamfanin wuta"], answer: 2, why: "Ƙwararrun ma'aikata ne ke yin aikin lantarki, suna bin NEC da dokokin wurin." },
      { objective: "O4", q: "Mene ne mataki na ƙarshe kafin a kunna tsarin?", options: ["Binciken wuri", "Zane", "Kafa racking", "Permission to operate daga kamfanin wuta"], answer: 3, why: "Amincewar kamfanin wuta tana zuwa bayan dubawa kuma kafin a kunna." },
      { objective: "O5", q: "Me NABCEP take bayarwa?", options: ["Lasisin tuƙi", "Takardun shaidar solar kamar PV Associate", "Izinin gini", "Takardun kuɗin wuta"], answer: 1, why: "NABCEP tana ba da takardun shaidar solar da board certifications." },
      { objective: "O5", q: "Wane ne yake tsara ƙa'idodin lasisi don aikin solar da na lantarki?", options: ["Kowace jiha, wani lokaci har da birni", "Mai ƙera fanalai", "NABCEP don kowace jiha", "Mai gidan"], answer: 0, why: "Jihohi ne ke tsara lasisi, wani lokaci har da ƙananan hukumomi." },
      { objective: "O5", q: "Wata talla a intanet ta ce za ku zama \"mai saka solar mai lasisi cikin kwana 2\". Me za ku yi?", options: ["Ku biya nan take", "Ku raba ta ga abokai", "Ku ba su lambar Social Security ɗinku", "Ku duba wannan da'awar a shafukan NABCEP da hukumar lasisi ta jiharku"], answer: 3, why: "Shafukan hukuma suna faɗa muku ainihin sharuɗɗa kafin ku biya." },
      { objective: "O6", q: "Wanne ne ya dace a cikin Shirin Fara Aikin Solar naku?", options: ["Kalmar sirrin bankinku", "Ranakun da kuke nufi don horo da jarabawar PV Associate", "Jerin waƙoƙin da kuke so", "Lasisin da ba ku da shi"], answer: 1, why: "Ranaku na kowane mataki suna sa shirin ya zama na gaske." },
      { objective: "O6", q: "Layin résumé mai kyau ya kamata ya zama:", options: ["Mai tsawo kuma ba shi da sarari", "Wanda aka kwafo daga baƙo", "Na gaskiya, takamaimai, kuma yana farawa da kalmar aiki", "Game da ƙwarewar da kuke shirin koya wata rana"], answer: 2, why: "Masu ɗaukar aiki suna amincewa da gajerun layuka na gaskiya masu takamaimai." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani game da solar?", from: [0, 2, 4, 6, 8, 10, 13, 15, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Yadda solar ke aiki", objective: "O1", notYet: "Bayanin ya rasa inverter ko ya gauraya AC da DC.", meets: "Yana ambaton fanalai, racking, inverter, disconnect, mita da grid, kuma yana faɗin abin da kowanne yake yi.", exceeds: "Yana kuma bayyana, da kalmominsa, dalilin da yasa disconnect yake da muhimmanci don tsaro lokacin gyara, da dalilin da yasa fanalai suke da wuta duk lokacin da akwai hasken rana." },
      { name: "Jerin binciken tsaro", objective: "O2", notYet: "Ya rasa faɗuwa ko girgizar lantarki, ko bai ba da matakin tsaro ba.", meets: "Ya jera faɗuwa, girgizar lantarki, zafi da ɗaukar kaya, kowanne da matakin tsaro daidai (har da kariya daga faɗuwa a ƙafa 6).", exceeds: "Ya ƙara yadda ake kafa tsani da ƙa'idar dakatar da aiki, kuma ya faɗi wanda za a faɗa wa." },
      { name: "Lissafin atisaye", objective: "O3", notYet: "Akwai kuskuren lissafi, ko ba a nuna yadda aka yi ba.", meets: "Matsalolin biyu daidai ne, tare da dabarar lissafi da alamomin ma'auni.", exceeds: "Ya kuma duba cewa kowace amsa tana da ma'ana, kuma ya mayar da watt zuwa kW daidai." },
      { name: "Matakan saka solar", objective: "O4", notYet: "Matakai biyu ko fiye ba a wurinsu suke ba, ko an rasa izini ko dubawa.", meets: "Duk matakai 8 bisa tsari, ɗaya kawai a mafi yawa ba a wurinsa ba, da wanda yake yin kowanne.", exceeds: "Ya bayyana dalilin da yasa flashing da amincewar kamfanin wuta suke da muhimmanci." },
      { name: "Hanyar takardar shaida", objective: "O5", notYet: "Babu ranaku, ko sharuɗɗa ba tare da majiya ba.", meets: "Ya ambaci NABCEP PV Associate da hanyar cancanta, da duba lasisin jiha, kowanne da ranar da ake nufi da adireshin shafi.", exceeds: "Ya ambaci takamaiman makarantar horo mai rajista ko mai ɗaukar aiki na wurin, da shirin madadi." },
      { name: "Sashen résumé", objective: "O6", notYet: "Layukan ba su da sarari ko suna da'awar lasisi ko takardar shaidar da mai koyo ba shi da ita.", meets: "Layuka uku na gaskiya da ke farawa da kalmar aiki kuma sun dace da aikin solar.", exceeds: "Ya haɗa aikin baya (gini, aikin soja, rumbun ajiyar kaya) da ayyukan solar." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka shiga shirin horon solar ko apprenticeship cikin kwanaki 90",
      "Masu koyo da suka ci jarabawar NABCEP PV Associate cikin watanni 12 (bisa faɗin kansu)",
      "Masu koyo da aka ɗauka aiki a matsayin mataimakan solar ko masu saka solar cikin watanni 6 (binciken biyo baya ko rahoton abokan aiki)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya, tablet ko kwamfuta mai intanet don karanta darussa da duba shafukan hukuma",
      "Takarda, alƙalami da na'urar lissafi (na'urar lissafi ta waya ta isa)",
      "Zaɓi: hoton tsarin solar na gida da aka buga don a rubuta sunayen sassansa",
      "Kusan minti 60 zuwa 75 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Babu wanda zai hau rufi ko ya taɓa sassan lantarki a wannan kwas. Idan kun nuna kayan aiki na gaske, ku tabbata ba a haɗa su da wuta ba, babu haske a kansu, kuma suna kan ƙasa.",
      "Ku yi gwajin farko tare, sannan ku yi babi ɗaya a kowane zama, kuma ku yi lissafin atisaye a kan farin allo.",
      "Ku sa masu koyo su nemo shafin lasisi na jiharsu kai tsaye; sharuɗɗa sun bambanta daga jiha zuwa jiha.",
      "Ku gayyaci mai saka solar na wurin, cibiyar horon ƙungiyar ma'aikata (union) ko makarantar horo mai rajista ta NABCEP don yin magana game da ɗaukar aiki.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya.",
      "Ga masu koyo da ke da tarihin laifi ko suke ƙarƙashin kulawa (parole ko probation): ku nuna musu shirye-shiryen masu dawowa gida da na neman aiki, kuma ku tunatar da su su faɗi gaskiya a takardun neman aiki."
    ]
  }
};
