"use strict";

// Koach Learn course, Hausa (ha) translation of athletes/athletes-ai-tools.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "athletes-ai-tools-ha",
  lang: "ha",
  translationOf: "athletes-ai-tools",
  category: "Athletes",
  name: "Kayan Aikin AI ga 'Yan Wasa",
  skills: "Zaɓar kayan aikin AI da ya dace da aiki, Amfani da mataimakin AI don tsara lokaci, Yin hotunan talla da Canva, Bin diddigin ƙididdiga a Google Sheets, Auna sirri da kuɗin manhaja",
  outcome: "zaɓa da amfani da kayan aikin AI guda uku masu kyauta don aikin ɗan wasa na gaske: mai tsara lokaci, kayan zane da takardar ƙididdiga, da kuma auna ko sabuwar manhaja tana da aminci kuma ta cancanta kafin ku yi rajista.",
  about: [
    "Wannan kwas na 'yan wasa da masu horarwa (koci) ne da ke yawan jin labarin manhajojin AI kuma suke son sanin waɗanda ke da amfani da gaske, da yadda ake amfani da su.",
    "Za ku gina ƙaramin akwatin kayan aiki kyauta: mataimakin AI don tsara lokaci da rubutu, kayan zane don hotunan talla, da takardar lissafi (spreadsheet) don bin diddigin lambobinku. Za ku kuma koyi gajeren gwaji don kowace sabuwar manhaja kafin ku ba ta bayananku ko kuɗinku.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin hannu na \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku gina akwatin kayan aikinku na ɗan wasa: ku yi amfani da mataimakin AI don tsara mako mai zuwa, ku yi hoton ranar wasa ɗaya a Canva, ku kuma kafa takardar Google Sheet da ke bin ƙididdiga ɗaya a cikin zaman atisaye biyar. Sannan ku yi gwajin manhaja mai tambayoyi biyar kan sabuwar manhajar wasanni ɗaya, ku rubuta ko za ku yi amfani da ita.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "'Yan wasan makarantar sakandare, na jami'a da na ƙungiyoyi (club), da masu horarwa da ke aiki tare da su, waɗanda ke jin labarin manhajojin AI kuma suke son sanin waɗanda ke da amfani da gaske.",
    startingPoint: "Suna amfani da wayar zamani kullum don saƙonni, kafofin sada zumunta (social media) da bidiyo. Da yawa sun gwada mataimakin AI sau ɗaya ko biyu, amma kaɗan ne ke amfani da kayan zane, takardar lissafi ko gwajin sirri da gangan.",
    gap: "Ana sayar wa 'yan wasa manhajoji da yawa da ke alƙawarin sakamako, kuma sau da yawa suna bayar da bayanan jikinsu ko kuɗinsu ba tare da dubawa ba. Ƙaramin akwatin kayan aiki kyauta da aka yi amfani da shi da kyau yana rage lokacin tsarawa, rubutun talla da bin diddigi, kuma gajeren gwajin manhaja yana kare bayanansu, kuɗinsu da cancantarsu ta yin wasa.",
    constraints: [
      "Kalmomi masu sauƙi a kusan matakin karatu na aji 7",
      "Waya ko kwamfuta mai intanet; nau'ikan kayan aiki na kyauta kaɗai",
      "Kusan minti 60 gaba ɗaya, a gajerun darussa da suka dace da lokacin atisaye da makaranta",
      "Dokokin makaranta, ƙungiyar gasa (league) da koci game da tambari (logo), canjin atisaye da shawarar lafiya su ne farko",
      "Bayanan jiki, lafiya da wuri (location) na sirri ne, kuma a raba su ne kawai idan kun zaɓa"
    ],
    prerequisites: "Babu"
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku jerin ayyukan da 'yan wasa ko koci ke yi", action: "gane wane irin kayan aiki ya dace da kowane aiki: mataimakin AI, kayan zane, takardar lissafi ko na'urar bin diddigi", standard: "kuna samun aƙalla ayyuka 4 cikin 5 daidai" },
    { id: "O2", condition: "Ta amfani da mataimakin AI kyauta da jadawalinku na gaske", action: "yin tsarin mako a tebur da inganta shi da buƙatun biyo baya", standard: "tare da kowane ƙayyadadden lokaci a ciki, ba tare da canja atisayen da koci ya tsara ba" },
    { id: "O3", condition: "Ta amfani da samfurin (template) Canva kyauta", action: "yin hoton ranar wasa da ke nuna su wane ne, yaushe da kuma ina, tare da hoto ɗaya mai ƙarfi", standard: "ana iya karanta shi a waya cikin daƙiƙa biyu, kuma da hotuna da tambarin da kuke da izinin amfani da su kaɗai" },
    { id: "O4", condition: "Ta amfani da Google Sheets", action: "kafa takardar da ke bin ƙididdiga ɗaya bisa kwanan wata da zana jadawalin (chart) yanayin canjinta", standard: "tare da aƙalla zama uku da aka shigar, ana auna ƙididdigar hanya ɗaya kowane lokaci, kuma ana raba takardar ne kawai da mutanen da kuka zaɓa" },
    { id: "O5", condition: "Idan aka ba ku sabuwar manhajar wasanni ko ta AI", action: "duba wanda ya yi ta, bayanai, kuɗi, dacewarta da ƙungiya da alƙawuranta ta amfani da gwajin manhaja mai tambayoyi biyar", standard: "kuna amsa dukkan tambayoyi biyar kuma kuna rubuta shawara a sarari: a yi amfani da ita, a gwada ta a hankali, ko a ƙyale ta" },
    { id: "O6", condition: "A cikin mako ɗaya na gaske", action: "tsara al'adar mako da ke amfani da mai tsara lokacinku, kayan zanenku da takardar ƙididdigarku tare", standard: "kowane kayan aiki yana da ranarsa ko lokacinsa, kuma ana raba bayanan ƙungiya ne kawai da ma'aikatan da ke buƙatarsu" }
  ],
  chapters: [
    {
      name: "Babi na 1: Akwatin kayan aikin AI ɗinku na kyauta",
      lessons: [
        {
          objectives: ["O1"],
          title: "Daidaita kayan aiki da aiki",
          minutes: 4,
          goal: "Raba ayyukan 'yan wasa da aka saba zuwa irin kayan aikin da ya dace.",
          text: [
            "Akwai manhajojin AI ɗaruruwa, amma yawancinsu suna cikin 'yan iri kaɗan. Mataimakan AI (ChatGPT, Microsoft Copilot, Google Gemini) suna rubutu, bayani da tsarawa. Kayan zane (kamar Canva) suna yin hotunan talla da gajerun bidiyo. Takardun lissafi (Google Sheets, Microsoft Excel) suna ajiye lambobinku kuma suna zana su a jadawali. Na'urorin bin diddigin motsa jiki (fitness tracker) da manhajojin bidiyon ƙungiya suna tattara bayanai daga jikinku ko wasanninku.",
            "Ku fara da aikin, ba manhajar ba. \"Ina buƙatar tsarin mako\" yana nuna mataimakin AI. \"Ina buƙatar rubutun talla na ranar wasa\" yana nuna kayan zane. \"Ina son ganin ko lokacin gudu na yana inganta\" yana nuna takardar lissafi.",
            "Nau'ikan kyauta yawanci sun isa don farawa. Ku koyi kayan aiki ɗaya na kowane iri sosai kafin ku ƙara wasu."
          ],
          words: [["Mataimakin AI", "shirin AI da kuke hira da shi don rubutu, bayani ko tsarawa."], ["Takardar lissafi (spreadsheet)", "teburin layuka da ginshiƙai don ajiye lambobi da zana su a jadawali."]],
          slides: [
            { title: "Iri huɗu na kayan aiki", bullets: ["Mataimakin AI: rubutu, bayani, tsarawa", "Kayan zane: hotunan talla da gajerun bidiyo", "Takardar lissafi: bin lambobi da zana su", "Na'urorin bin diddigi da manhajojin bidiyo: tattara bayanai"] },
            { title: "Ku fara da aikin", bullets: ["Tsarin mako -> mataimakin AI", "Rubutun talla na ranar wasa -> kayan zane", "Lokacina yana inganta? -> takardar lissafi"] },
            { title: "Ku sauƙaƙa shi", bullets: ["Nau'ikan kyauta sun isa don farawa", "Ku koyi kayan aiki ɗaya na kowane iri sosai"] }
          ],
          tryIt: "Ku rubuta ayyuka biyar da kuke yi a matsayin ɗan wasa ko koci kowane mako (misali tsara atisaye, rubutu a kafofin sada zumunta, bin wata ƙididdiga). A gefen kowanne, ku rubuta irin kayan aikin da ya dace.",
          youCanNow: "daidaita aikin ɗan wasa da irin kayan aikin AI da ya dace.",
          quickCheck: [
            { objective: "O1", q: "Wane irin kayan aiki ne ke ajiye lambobinku kuma ya mayar da su jadawali?", options: ["Mataimakin AI", "Takardar lissafi", "Kayan zane", "Na'urar bin diddigin motsa jiki"], answer: 1, why: "Takardun lissafi kamar Google Sheets da Excel suna ajiye lambobi kuma suna zana su a jadawali." },
            { objective: "O1", q: "Abokin wasanku yana son gwada sababbin manhajoji biyar a wannan makon. Me za ku ba shi shawara?", options: ["Ya sauke dukkan biyar yau", "Ya biya wadda ta fi tsada", "Ya fara da aikin, sannan ya koyi kayan aiki ɗaya na kyauta na wannan iri sosai", "Ya guji duk kayan aiki"], answer: 2, why: "Darasin ya ce a fara da aikin, kuma a koyi kayan aiki ɗaya na kowane iri sosai tukuna." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Mataimakin AI a matsayin mai tsara lokacinku",
          minutes: 5,
          goal: "Yi amfani da mataimakin AI don mayar da jadawalinku tsarin mako a sarari.",
          text: [
            "Mataimakin AI yana da ƙwarewa sosai wajen mayar da jerin abubuwa a cakuɗe zuwa tsari. Ku ba shi lokutan atisaye, wasanni, darussan makaranta da lokutan aikinku, ku nemi tsarin mako a tebur.",
            "Ku faɗi a sarari: \"Ni ɗan wasan volleyball ne a jami'a. Atisaye daga ƙarfe 2 zuwa 5 na yamma, Litinin zuwa Juma'a, wasanni ranar Asabar. Darussa daga 9 zuwa 12. Ka yi teburin mako da lokutan karatu, abinci da barci.\" Sannan ku inganta shi da buƙatun biyo baya kamar \"Ka ƙara minti 30 na kallon bidiyon wasa ranar Laraba.\"",
            "Mataimakin yana tsarawa; koci ne ke tsara atisaye. Kada ku nemi ya canja atisayen da kocinku ya rubuta, kuma ku tambayi mai kula da lafiyar 'yan wasa (athletic trainer) game da duk wani abu na lafiya ko hutu."
          ],
          steps: ["Ku rubuta ƙayyadaddun lokutanku: atisaye, wasanni, darussa, aiki.", "Ku nemi tsarin mako a tebur.", "Ku nemi canji ɗaya a lokaci ɗaya.", "Ku kwafi tsarin ƙarshe zuwa kalandarku ko bayanan rubutunku."],
          words: [["Buƙatar biyo baya (follow-up)", "buƙata ta biyu da ke canja amsar ko ke ginuwa a kanta."]],
          slides: [
            { title: "Ku ba shi ƙayyadaddun lokutanku", bullets: ["Atisaye da wasanni", "Darussa da lokutan aiki", "Ranakun tafiya"] },
            { title: "Ku nemi tebur", bullets: ["Lokutan karatu, abinci, barci", "Sannan canji ɗaya a lokaci ɗaya"] },
            { title: "Wa ke yanke me", bullets: ["AI yana tsara makonku", "Koci yana tsara atisaye", "Mai kula da lafiyar 'yan wasa don lafiya da hutu"] }
          ],
          tryIt: "Ku rubuta ƙayyadaddun lokutanku na gaske na mako mai zuwa a mataimakin AI, ku nemi tsarin mako a tebur. Ku nemi ingantawa ɗaya.",
          youCanNow: "mayar da jadawalinku tsarin mako da mataimakin AI.",
          quickCheck: [
            { objective: "O2", q: "Me ke sa buƙatar tsarawa ga mataimakin AI ta yi aiki da kyau?", options: ["Faɗin wasanku da ƙayyadaddun lokutanku a sarari", "Rubuta kalma ɗaya kawai", "Neman ya sake rubuta atisayen kocinku", "Barin darussanku a waje"], answer: 0, why: "Cikakken bayani game da jadawalinku yana kawo tsarin da ya dace da makonku na gaske." },
            { objective: "O2", q: "Tsarinku yana buƙatar minti 30 na kallon bidiyon wasa ranar Laraba. Me za ku yi?", options: ["Ku fara sabuwar hira daga farko", "Ku goge tsarin gaba ɗaya", "Ku nemi mai kula da lafiyar 'yan wasa ya rubuta shi", "Ku nemi mataimakin wannan canjin ɗaya a matsayin buƙatar biyo baya"], answer: 3, why: "Buƙatun biyo baya da ke neman canji ɗaya a lokaci ɗaya suna inganta tsarin." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Yin hoton ranar wasa da Canva",
          minutes: 5,
          goal: "Yi hoto mai sauƙi na ranar wasa ta amfani da samfurin zane kyauta.",
          text: [
            "Canva kayan zane ne kyauta a intanet da kuma a matsayin manhaja. Yana da samfura (templates) da aka riga aka shirya don rubutun kafofin sada zumunta, takardun talla (flyer) da labarai (stories), kuma yana da fasalolin AI da ke iya ba da shawarar rubutu ko hotuna.",
            "Hoton ranar wasa mai tsabta yana da abubuwa huɗu: su wane ne ke wasa, yaushe, ina, da hoto ɗaya mai ƙarfi. Ku yi amfani da launukan ƙungiyarku, manyan rubutu masu sauƙin karantawa, ba komai fiye da haka.",
            "Ku yi amfani da hotunan da ku kuka ɗauka ko waɗanda kuke da izinin amfani da su kaɗai. Makarantu da yawa suna da dokoki game da amfani da tambarin makaranta da sunanta, don haka ku tambayi sashen wasanni na makarantarku kafin ku saka hoto mai tambarin hukuma."
          ],
          steps: ["Ku buɗe Canva ku nemi samfura da \"game day\".", "Ku zaɓi samfurin da girmansa ya dace da dandalin da kuke amfani da shi.", "Ku canja rubutun: abokin hamayya, kwanan wata, lokaci, wuri.", "Ku saka hotonku da launukan ƙungiyarku.", "Ku sauke shi ku duba shi a wayarku kafin ku saka shi."],
          words: [["Samfuri (template)", "zane da aka riga aka shirya da kuke canjawa don ya zama naku."], ["Izini", "\"eh\" daga mai shi don amfani da hotonsa, tambarinsa ko sunansa."]],
          slides: [
            { title: "Canva a layi ɗaya", bullets: ["Kayan zane kyauta mai samfura a shirye", "A intanet da kuma manhajar waya"] },
            { title: "Hoton ranar wasa mai tsabta", bullets: ["Su wane ne, yaushe, ina", "Hoto ɗaya mai ƙarfi", "Launukan ƙungiya, manyan rubutu"] },
            { title: "Ku bi dokoki", bullets: ["Ku yi amfani da hotunanku ko waɗanda aka ba ku izini", "Ku tambaya kafin amfani da tambarin makaranta"] }
          ],
          tryIt: "Ku yi hoton ranar wasa a Canva don wasanku ko atisayenku na gaba. Ku duba shi a wayarku: kuna iya karanta lokaci da wurin cikin daƙiƙa biyu?",
          youCanNow: "yin hoton ranar wasa mai tsabta daga samfuri, da amfani da hotuna da tambari ta hanyar da ta dace.",
          quickCheck: [
            { objective: "O3", q: "Mene ne Canva?", options: ["Kayan zane kyauta mai samfura don rubutun talla da takardun talla", "Takardar lissafin ƙididdiga", "Na'urar bin diddigin motsa jiki", "Dokar makaranta game da tambari"], answer: 0, why: "Canva kayan zane ne kyauta a intanet da kuma a matsayin manhaja, mai samfuran da aka riga aka shirya." },
            { objective: "O3", q: "Kun gama hotonku. Me ya kamata ku yi kafin ku saka shi?", options: ["Ku ƙara rubutu da launuka", "Ku saka shi nan take", "Ku sauke shi ku duba shi a wayarku", "Ku saka hoton da kuka samu a intanet"], answer: 2, why: "Duba shi a waya yana nuna ko ana iya karanta lokaci da wurin da sauri." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Akwatin kayan aikin AI ɗinku na kyauta",
        questions: [
          { objective: "O1", q: "Kuna son ganin ko lokacin gudunku yana inganta. Wane irin kayan aiki ya fi dacewa?", options: ["Kayan zane", "Manhajar waƙa", "Takardar lissafi", "Matatar hoto (filter)"], answer: 2, why: "Takardun lissafi suna ajiye lambobi kuma suna zana su a jadawali a tsawon lokaci." },
          { objective: "O1", q: "Da me ya kamata ku fara idan kuna zaɓar kayan aiki?", options: ["Aikin da kuke buƙatar a yi", "Manhajar da ta fi shahara", "Manhajar da ta fi tsada", "Duk abin da baƙo ya ba da shawara"], answer: 0, why: "Ku fara da aikin, sannan ku zaɓi irin kayan aikin da ya dace da shi." },
          { objective: "O2", q: "Mataimakin AI ya ba da shawarar canja atisayen da kocinku ya rubuta. Me za ku yi?", options: ["Ku bi AI", "Ku ƙi zuwa atisaye", "Ku saka labarin a intanet", "Ku riƙe atisayen koci, ku tambayi kocinku idan kuna da tambayoyi"], answer: 3, why: "AI yana tsara makonku; koci ne ke tsara atisaye." },
          { objective: "O3", q: "Waɗanne abubuwa huɗu ne ya kamata su kasance a hoton ranar wasa?", options: ["Kalmar sirrinku, adireshinku, lambar waya, imel", "Su wane ne, yaushe, ina, hoto ɗaya mai ƙarfi", "Hotuna goma da nau'ikan rubutu biyar", "Tambari kawai"], answer: 1, why: "Bayanai a sarari da hoto ɗaya mai ƙarfi suna sa hoto ya zama mai sauƙin karantawa." },
          { objective: "O3", q: "Kuna son amfani da tambarin makarantarku a rubutun talla. Me ya kamata ku fara yi?", options: ["Ku kwafe shi daga shafin intanet", "Ku tambayi sashen wasanni na makarantarku", "Ku canja launukansa", "Ku yi amfani da shi kuna fata ba matsala"], answer: 1, why: "Makarantu da yawa suna da dokoki game da tambarinsu, don haka ku tambaya tukuna." }
        ]
      }
    },
    {
      name: "Babi na 2: Bin diddigi, auna manhajoji da gina akwatin kayan aikinku",
      lessons: [
        {
          objectives: ["O4"],
          title: "Bin ƙididdiga ɗaya a Google Sheets",
          minutes: 5,
          goal: "Kafa takardar da ke bin ƙididdiga ɗaya kuma ta nuna ta a jadawali.",
          text: [
            "Ku zaɓi ƙididdiga ɗaya da ke da muhimmanci a gare ku kuma za ku iya auna ta hanya ɗaya kowane lokaci: kwallayen free-throw da suka shiga cikin 20, lokacin gudun yadi 40, lokacin gudun mil ɗaya, ko daidaiton serve.",
            "A Google Sheets, ku yi ginshiƙai biyu: Date (kwanan wata) da ƙididdigarku. Ku ƙara layi bayan kowane zama. Idan kuna da 'yan layuka, ku zaɓi ginshiƙan biyu ku saka jadawali (chart) don ganin yanayin canji.",
            "Kuna iya neman mataimakin AI ya bayyana matakan takardar lissafi ko wani tsarin lissafi (formula), kamar yadda ake samun matsakaicinku (average). Ku bar takardar a sirri sai dai idan kun zaɓi raba ta da kocinku."
          ],
          steps: ["Ku buɗe Google Sheets ku fara takarda mara komai.", "Ku rubuta \"Date\" a A1 da sunan ƙididdigarku a B1.", "Ku ƙara layi ɗaya bayan kowane zama.", "Ku zaɓi ginshiƙan biyu ku saka jadawali.", "Ku raba ta da kocinku kaɗai idan kuna son ra'ayinsa."],
          words: [["Yanayin canji (trend)", "hanyar da lambobinku ke bi a tsawon lokaci: sama, ƙasa ko a daidai."], ["Tsarin lissafi (formula)", "gajeren umarni a cikin akwati (cell) da ke yin lissafi, kamar matsakaici."]],
          slides: [
            { title: "Ku zaɓi ƙididdiga ɗaya", bullets: ["Ana auna ta hanya ɗaya kowane lokaci", "Misalai: free-throw cikin 20, lokacin gudun mil"] },
            { title: "Ku kafa takardar", bullets: ["Ginshiƙi A: Date (kwanan wata)", "Ginshiƙi B: ƙididdigarku", "Layi ɗaya na kowane zama"] },
            { title: "Ku ga yanayin canji", bullets: ["Ku zaɓi ginshiƙan biyu ku saka jadawali", "Ku nemi AI ya bayyana formula idan kun makale"] }
          ],
          tryIt: "Ku kafa Google Sheet don ƙididdiga ɗaya. Ku shigar da aƙalla zaman da suka wuce guda uku (ko lambobin atisaye) ku saka jadawali.",
          youCanNow: "bin ƙididdiga ɗaya a takardar lissafi da zana ta a jadawali don ganin yanayin canjinku.",
          quickCheck: [
            { objective: "O4", q: "Waɗanne ginshiƙai biyu ne takardar ƙididdigarku ke farawa da su?", options: ["Suna da ƙungiya", "Abokin hamayya da sakamako", "Koci da matsayi", "Kwanan wata da ƙididdigarku"], answer: 3, why: "Kwanan wata a ginshiƙi A da ƙididdiga a ginshiƙi B suna ba ku damar ganin yanayin canji a tsawon lokaci." },
            { objective: "O4", q: "Kuna son ra'ayi kan takardar ƙididdigarku. Me za ku yi?", options: ["Ku saka hanyar haɗin (link) a fili ga kowa", "Ku raba ta da kocinku kaɗai", "Ku tura ta ga ɗayan ƙungiyar", "Ku buga ta ku manna a bangon ɗakin sauya kaya"], answer: 1, why: "Ku bar takardar a sirri, ku raba ta ne kawai da mutanen da kuka zaɓa, kamar kocinku." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gwajin manhaja mai tambayoyi biyar",
          minutes: 5,
          goal: "Auna sabuwar manhajar wasanni ko ta AI kafin ku ba ta bayanai ko kuɗi.",
          text: [
            "Sababbin manhajoji suna alƙawarin sa ku yi sauri, sa a ɗauke ku (recruit) zuwa ƙungiya ko makaranta, ko ƙara mabiyanku. Kafin ku yi rajista, ku yi gajeren gwaji mai tambayoyi biyar.",
            "1. Wa ya yi ta, kuma tana cikin shagon manhajoji na hukuma? 2. Waɗanne bayanai take tattarawa, kuma kuna iya goge su? (Ku karanta taƙaitaccen bayanin manufar sirri.) 3. Nawa take ci bayan gwajin kyauta? 4. Kocinku ko makarantarku sun riga sun yi amfani da wani abu makamancinta? 5. Tana alƙawarin sakamakon da ya yi kyau fiye da gaskiya, kamar tabbacin samun tallafin karatu (scholarship)?",
            "Bayanan jiki da lafiya, kamar bugun zuciya, barci da wurin da kuke, na sirri ne. Ku raba su ne kawai da manhajojin da kuka amince da su, kuma ku kashe raba wurin da ba ku buƙata."
          ],
          steps: ["Ku duba wa ya yi ta, da cewa tana cikin shagon hukuma.", "Ku karanta waɗanne bayanai take tattarawa da yadda ake goge su.", "Ku nemo farashinta bayan kowane gwajin kyauta.", "Ku tambayi kocinku abin da ƙungiyar ke amfani da shi tuni.", "Ku guji duk wadda ke tabbatar da sakamako."],
          words: [["Manufar sirri (privacy policy)", "bayanin manhajar game da bayanan da take tattarawa da abin da take yi da su."], ["Gwajin kyauta (free trial)", "gajeren lokaci na kyauta kafin manhajar ta fara cajin kuɗi."]],
          slides: [
            { title: "Kafin ku yi rajista", bullets: ["Wa ya yi ta? Tana shagon hukuma?", "Waɗanne bayanai take tattarawa?", "Nawa take ci bayan gwajin kyauta?"] },
            { title: "Ƙarin tambayoyi biyu", bullets: ["Ƙungiyata ta riga tana amfani da wani abu?", "Tana alƙawarin abu da yawa fiye da kima?"] },
            { title: "Ku kare bayanan jiki", bullets: ["Bugun zuciya, barci, wuri na sirri ne", "Ku kashe raba wurin da ba ku buƙata"] }
          ],
          tryIt: "Ku zaɓi manhajar wasanni ko ta AI ɗaya da kuka ga tallarta. Ku amsa tambayoyi biyar game da ita a rubuce, ku yanke shawara: a yi amfani da ita, a gwada ta a hankali, ko a ƙyale ta.",
          youCanNow: "duba wanda ya yi sabuwar manhaja, bayananta, kuɗinta da alƙawuranta kafin ku yi rajista.",
          quickCheck: [
            { objective: "O5", q: "Wanne a cikin waɗannan yana ɗaya daga cikin tambayoyi biyar na gwajin manhaja?", options: ["Wane launi ne tambarin?", "Tallace-tallace nawa take nunawa?", "Nawa take ci bayan gwajin kyauta?", "Tana da yanayin duhu (dark mode)?"], answer: 2, why: "Farashi bayan gwajin kyauta shi ne tambaya ta 3 a gwajin mai tambayoyi biyar." },
            { objective: "O5", q: "Manhajar atisaye tana neman raba wurin da kuke a kowane lokaci, amma ba ta buƙatarsa. Me za ku yi?", options: ["Ku kashe raba wurin", "Ku bari don manhajar ta yi sauri", "Ku raba bugun zuciyarku ma", "Ku ba ta kalmar sirrinku"], answer: 0, why: "Wuri bayanan sirri ne, don haka ku kashe rabawar da ba ku buƙata." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Haɗa akwatin kayan aikinku wuri ɗaya",
          minutes: 5,
          goal: "Yi amfani da dukkan kayan aiki uku tare na mako ɗaya na gaske.",
          text: [
            "Akwatin kayan aikinku ya fi aiki a matsayin al'adar mako. Lahadi: ku yi amfani da mataimakin AI don tsara makon. Kafin wasa: ku yi hoton. Bayan kowane zama: ku ƙara ƙididdigarku a takardar.",
            "Ku rubuta gajeren jerin kayan aikinku da abin da kowanne yake yi, don kada ku riƙa gwada sababbin manhajoji kowane mako. Ku ƙara sabon kayan aiki ne kawai idan kuna da aikin da akwatinku ba zai iya yi ba.",
            "Koci za su iya amfani da akwatin kayan aiki iri ɗaya don ƙungiya: tsarin mako ga ma'aikata, hoto ɗaya na kowane wasa, da takardar da ake rabawa don ƙididdigar ƙungiya. Ku raba takardun ƙungiya ne kawai da ma'aikatan da ke buƙatarsu."
          ],
          steps: ["Ku rubuta jerin kayan aikinku: mai tsara lokaci, kayan zane, takardar lissafi.", "Lahadi: ku tsara makon da mataimakin AI.", "Makon wasa: ku yi hoto ɗaya.", "Bayan kowane zama: ku ƙara ƙididdigarku.", "Ku duba jadawalin tare da kocinku bayan 'yan makonni."],
          words: [["Al'ada (routine)", "matakan da kuke maimaitawa a lokaci ɗaya kowane mako."], ["Akwatin kayan aiki (toolkit)", "ƙaramin rukunin kayan aikin da kuke amfani da su akai-akai."]],
          slides: [
            { title: "Al'adarku ta mako", bullets: ["Lahadi: tsara makon", "Makon wasa: hoto ɗaya", "Bayan kowane zama: ƙara ƙididdigarku"] },
            { title: "Ku bar akwatin ƙarami", bullets: ["Ku rubuta abin da kowane kayan aiki yake yi", "Ku ƙara kayan aiki ne kawai don sabon aiki"] },
            { title: "Ga koci", bullets: ["Tsarin mako na ma'aikata", "Hoto ɗaya na kowane wasa", "Takardar ƙididdiga da ake rabawa da ma'aikata kaɗai"] }
          ],
          tryIt: "Aikin ƙarshe: ku tsara mako mai zuwa da mataimakin AI, ku yi hoton ranar wasa ɗaya a Canva, ku kafa takardar da ke bin ƙididdiga ɗaya, kuma ku yi gwajin tambayoyi biyar kan sabuwar manhaja ɗaya.",
          youCanNow: "amfani da ƙaramin rukunin kayan aikin AI na kyauta tare a matsayin al'adar mako.",
          quickCheck: [
            { objective: "O6", q: "A al'adar mako, yaushe kuke ƙara ƙididdigarku a takardar?", options: ["Sau ɗaya a kakar wasa", "Kafin wasanni kawai", "Sai kun kafa sabon tarihi (record)", "Bayan kowane zama"], answer: 3, why: "Ƙara ƙididdiga bayan kowane zama yana sa yanayin canjin ya cika." },
            { objective: "O6", q: "Kuna da aikin da akwatin kayan aikinku na yanzu ba zai iya yi ba. Me za ku yi?", options: ["Ku ci gaba da gwada sabuwar manhaja kowane mako duk da haka", "Ku ƙara sabon kayan aiki ɗaya don wannan aikin, ku yi gwajin manhaja", "Ku haƙura da aikin", "Ku canja akwatin gaba ɗaya"], answer: 1, why: "Ku ƙara sabon kayan aiki ne kawai idan kuna da aikin da akwatinku ba zai iya yi ba, kuma ku duba shi tukuna." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Bin diddigi, auna manhajoji da gina akwatin kayan aikinku",
        questions: [
          { objective: "O4", q: "Me ke sa ƙididdiga ta yi kyau don bin diddigi?", options: ["Ana canja yadda ake auna ta kowane mako", "Kocinku kaɗai ne zai iya ganinta", "Hasashe ce kawai", "Kuna iya auna ta hanya ɗaya kowane lokaci"], answer: 3, why: "Auna ta hanya ɗaya yana sa yanayin canjin ya zama mai ma'ana." },
          { objective: "O4", q: "A takardarku, me ke shiga ginshiƙi A?", options: ["Kwanan wata", "Kalmar sirrinku", "Sunan abokin hamayyarku", "Adireshin gidanku"], answer: 0, why: "Kwanan wata a ginshiƙi A da ƙididdiga a ginshiƙi B suna ba ku damar zana yanayin canji." },
          { objective: "O5", q: "Wata manhaja tana alƙawarin tabbataccen tallafin karatu idan kun biya. Me gwajin manhaja ya ce?", options: ["Ku biya nan take", "Ku raba wurin da kuke", "Tana alƙawarin abu da yawa, don haka ku guje ta", "Ku ba ta code ɗin shigarku"], answer: 2, why: "Tabbatar da sakamako alamar gargaɗi ce." },
          { objective: "O5", q: "Wanne ne bayanan jiki na sirri?", options: ["Launin rigar wasanku", "Sunan ƙungiyarku", "Atisayen da kuka fi so", "Bugun zuciyarku da barcinku"], answer: 3, why: "Bugun zuciya, barci da wuri bayanan sirri ne." },
          { objective: "O6", q: "Yaushe ya kamata ku ƙara sabon kayan aiki a akwatinku?", options: ["Kowane mako", "Idan kuna da aikin da akwatinku ba zai iya yi ba", "Idan aboki ya saka labarin wani", "Ba har abada"], answer: 1, why: "Ƙaramin akwatin da kuka san shi sosai ya fi manhajoji da yawa da da ƙyar kuke amfani da su." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Kayan Aikin AI ga 'Yan Wasa",
    questions: [
      { objective: "O1", q: "Wane irin kayan aiki ne ke rubutu, bayani da tsarawa?", options: ["Agogon auna lokaci (stopwatch)", "Takardar lissafi kawai", "Mataimakin AI", "Kyamara"], answer: 2, why: "Mataimakan AI kamar ChatGPT, Copilot da Gemini suna rubutu da tsarawa." },
      { objective: "O1", q: "Wanne ne kayan zane kyauta mai samfura?", options: ["Canva", "Na'urar lissafi (calculator)", "Allon sakamako", "Littafin dabarun wasa (playbook)"], answer: 0, why: "Canva yana da samfura kyauta don rubutun talla da takardun talla." },
      { objective: "O1", q: "\"Ina buƙatar rubutun talla na ranar wasa\" yana nuna:", options: ["Kayan zane", "Takardar lissafi", "Na'urar bin diddigin motsa jiki", "Na'urar auna bugun zuciya"], answer: 0, why: "Hotunan talla aikin kayan zane ne." },
      { objective: "O1", q: "Kayan aiki nawa na kowane iri ya kamata ku fara koya?", options: ["Biyar", "Iya yawan da za ku iya", "Ɗaya, sosai", "Babu"], answer: 2, why: "Koyon ɗaya na kowane iri sosai shi ne farawa mafi sauri." },
      { objective: "O2", q: "Me ya kamata ku ba mataimakin AI don yin tsarin mako?", options: ["Kalmar sirrinku", "Ƙayyadaddun lokutanku: atisaye, wasanni, darussa", "Bayanan asibitinku", "Lambar bankinku"], answer: 1, why: "Ƙayyadaddun lokuta suna ba shi damar gina tsarin a kewayen makonku." },
      { objective: "O2", q: "Wa ke tsara atisayenku?", options: ["AI", "Talla", "Wata manhaja kawai", "Kocinku"], answer: 3, why: "Mataimakin yana tsara lokaci; koci ne ke tsara atisaye." },
      { objective: "O2", q: "Hanya mafi kyau ta inganta tsarin AI ita ce:", options: ["Karɓar na farko", "Rubuta kalmar sirrinku", "Canji ɗaya a lokaci ɗaya", "Fara faɗa da shi"], answer: 2, why: "Canji ɗaya a sarari a lokaci ɗaya yana riƙe shi a kan hanya." },
      { objective: "O3", q: "Hoton ranar wasa mai sauƙin karantawa yana da:", options: ["Ƙananan rubutu da hotuna goma", "Emoji kawai", "Lambar wayarku", "Su wane ne, yaushe, ina da hoto ɗaya mai ƙarfi"], answer: 3, why: "Bayanai a sarari da hoto ɗaya suna da sauƙin karantawa da sauri." },
      { objective: "O3", q: "Waɗanne hotuna za ku iya amfani da su a hotonku?", options: ["Hotunanku ko waɗanda kuke da izinin amfani da su", "Kowane hoto a intanet", "Hotuna daga shafin abokan hamayya", "Hotunan baƙi"], answer: 0, why: "Ku yi amfani da hotunan da kuka mallaka ko kuke da izinin amfani da su." },
      { objective: "O3", q: "Kafin ku yi amfani da tambarin makarantarku, ya kamata ku:", options: ["Sake zana shi", "Tambayi sashen wasanni na makarantarku", "Yi amfani da shi duk da haka", "Saye shi a intanet"], answer: 1, why: "Makarantu sau da yawa suna da dokoki game da tambari." },
      { objective: "O4", q: "Wace ƙididdiga ce mai sauƙin bi ta hanya ɗaya kowane lokaci?", options: ["Yadda kuka ji game da tafiyar bas", "Abin da 'yan kallo suka yi tunani", "Free-throw da suka shiga cikin 20", "Yanayin zuciyar abokin hamayyarku"], answer: 2, why: "Ƙayyadadden gwaji kamar kwallayen da suka shiga cikin 20 yana tafiya daidai kowane lokaci." },
      { objective: "O4", q: "Ta yaya za ku ga yanayin canjinku a Google Sheets?", options: ["Ku zaɓi ginshiƙan ku saka jadawali", "Ku buga shi", "Ku goge tsofaffin layuka", "Ku tura shi ga baƙo ta imel"], answer: 0, why: "Jadawali yana nuna hanyar da lambobinku ke bi." },
      { objective: "O4", q: "Kun makale kan formula don matsakaicinku. Mataki mai kyau shi ne:", options: ["Daina bin diddigi", "Yin hasashen lambar", "Raba kalmar sirrinku", "Neman mataimakin AI ya bayyana formula ɗin"], answer: 3, why: "Mataimakan AI suna bayyana matakan takardar lissafi da kyau." },
      { objective: "O4", q: "Wa ya kamata ya ga takardar ƙididdigarku ta sirri?", options: ["Kowa a intanet", "Mutanen da kuka zaɓa kaɗai, kamar kocinku", "Ƙungiyoyin abokan hamayya", "Baƙi"], answer: 1, why: "Ku bar ta a sirri, ku raba ta ne kawai idan kun zaɓa." },
      { objective: "O5", q: "Me manufar sirri (privacy policy) ke faɗa muku?", options: ["Launukan manhajar", "Bayanan da manhajar ke tattarawa da abin da take yi da su", "Atisayenku", "Sakamakon wasa"], answer: 1, why: "Tana bayyana yadda manhajar ke sarrafa bayananku." },
      { objective: "O5", q: "Kafin gwajin kyauta, ya kamata ku duba:", options: ["Tambarin manhajar", "Manhajar abokin hamayyarku", "Babu komai", "Farashi bayan gwajin ya ƙare"], answer: 3, why: "Manhajoji da yawa suna fara cajin kuɗi bayan gwajin kyauta." },
      { objective: "O5", q: "Wane alƙawarin manhaja ne alamar gargaɗi?", options: ["\"Tabbataccen tallafin karatu\"", "\"Ku bi diddigin gudunku\"", "\"Ku yi hotunan talla\"", "\"Samfura kyauta\""], answer: 0, why: "Babu wanda zai iya tabbatar da tallafin karatu." },
      { objective: "O5", q: "Raba wurin da ba ku buƙata ya kamata a:", options: ["Raba shi da kowa", "Saka shi a intanet", "Kashe shi", "Bar shi a kunne har abada"], answer: 2, why: "Wuri bayanan sirri ne; ku raba shi ne kawai idan ana buƙata." },
      { objective: "O6", q: "A al'adar mako, yaushe kuke tsara makon?", options: ["Bayan kakar wasa", "Ba har abada", "Lokacin wasa", "Lahadi, tare da mataimakin AI ɗinku"], answer: 3, why: "Tsarawa a farkon mako yana shirya komai." },
      { objective: "O6", q: "Koci yana raba takardar ƙididdigar ƙungiya. Wa ya kamata ya sami damar shiga?", options: ["Duk wanda ke da hanyar haɗin a intanet", "Ma'aikatan da ke buƙatarta kaɗai", "Kocin abokan hamayya", "Masoya ƙungiya (fans)"], answer: 1, why: "Bayanan ƙungiya su je ne kawai ga mutanen da ke buƙatarsu." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 4, 7, 10, 14, 16, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Tsarin mako", objective: "O2", notYet: "Tsarin ba shi da wasu ƙayyadaddun lokuta, ko yana canja atisayen koci.", meets: "Teburin mako mai dukkan ƙayyadaddun lokuta, karatu, abinci da barci, wanda aka inganta da aƙalla buƙatar biyo baya ɗaya.", exceeds: "An kwafi tsarin zuwa kalanda, kuma an rubuta tambayoyin lafiya ko hutu don mai kula da lafiyar 'yan wasa." },
      { name: "Hoton ranar wasa", objective: "O3", notYet: "Babu su wane ne, yaushe ko ina, yana da wuyar karantawa a waya, ko yana amfani da hotuna ko tambari ba tare da izini ba.", meets: "Yana nuna su wane ne, yaushe, ina da hoto ɗaya mai ƙarfi, ana iya karanta shi a waya cikin daƙiƙa biyu, da hotunan da aka ba da izini kaɗai.", exceeds: "Yana amfani da launukan ƙungiya, girmansa ya dace da dandalin, kuma sashen wasanni ya amince da amfani da tambarin." },
      { name: "Takardar ƙididdiga", objective: "O4", notYet: "Babu kwanan wata, ƙasa da zama uku, ko babu jadawali.", meets: "Ginshiƙan kwanan wata da ƙididdiga, aƙalla zama uku da aka auna ta hanya ɗaya, da jadawalin yanayin canji.", exceeds: "An shigar da zama biyar, an ƙara matsakaici, kuma an raba takardar da koci kaɗai don ra'ayi." },
      { name: "Gwajin manhaja", objective: "O5", notYet: "Ba a amsa wasu daga cikin tambayoyi biyar ba, ko babu shawara.", meets: "An amsa dukkan tambayoyi biyar, kuma akwai shawara a sarari: a yi amfani da ita, a gwada ta a hankali, ko a ƙyale ta.", exceeds: "Shawarar tana ba da dalilai daga manufar sirri da farashi, kuma an kashe raba bayanan da ba a buƙata." },
      { name: "Al'adar kayan aiki", objective: "O6", notYet: "Babu jerin kayan aiki, ko babu ƙayyadadden lokaci na kowane kayan aiki.", meets: "Jerin kayan aiki a rubuce, da ƙayyadaddiyar rana ko lokaci don tsarawa, hotuna da ƙididdiga.", exceeds: "Al'adar ta haɗa da duba jadawali akai-akai tare da koci, da doka game da lokacin ƙara sabon kayan aiki." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala aikin ƙarshe kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric",
      "Masu koyo da har yanzu suke amfani da tsarin mako da takardar ƙididdiga bayan kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ce sun ƙyale ko sun goge wata manhaja, ko sun kashe raba bayanai, bayan sun yi gwajin manhaja",
      "Masu koyo da suka ɗauki wani kwas na gaba na 'Yan Wasa, kamar \"AI don Atisaye da Ƙwazo a Wasanni\""
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Mataimakin AI kyauta (ChatGPT, Microsoft Copilot ko Google Gemini)",
      "Asusun Canva kyauta",
      "Asusun Google kyauta don Google Sheets",
      "Jadawalinku na mako mai zuwa da ƙididdiga ɗaya da za ku iya aunawa",
      "Kusan minti 60, a raba cikin 'yan kwanaki"
    ],
    facilitatorNotes: [
      "Ku yi shi a matsayin zaman ƙungiya: kowa yana amfani da kayan aiki uku iri ɗaya na kyauta don 'yan wasa su taimaki juna.",
      "Ku tunatar da 'yan wasa cewa mataimakin yana tsara makon amma koci ne ke tsara atisaye; ku tura tambayoyin lafiya da hutu ga mai kula da lafiyar 'yan wasa.",
      "Ku duba dokokin makaranta ko na ƙungiyar gasa game da tambari da rubutun 'yan wasa kafin darasin hoto.",
      "Kada ku tattara bayanan jiki ko na lafiyar 'yan wasa da kanku; takardun ƙididdiga su kasance a sirri sai dai idan ɗan wasan ya zaɓi raba su.",
      "Ku sa 'yan wasa su fara takardar ƙididdiga da wuri don su sami zama uku zuwa biyar kafin aikin ƙarshe."
    ]
  }
};
