"use strict";

// Koach Learn course, Hausa (ha) translation of underserved/underserved-ai-education.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "underserved-ai-education-ha",
  lang: "ha",
  translationOf: "underserved-ai-education",
  category: "Undeserved Community",
  name: "AI don Ilimi da Koyo",
  skills: "Amfani da AI a matsayin malami mai haƙuri, Yin tambayoyin atisaye, Nemo shafukan koyo kyauta, Tsara jadawalin karatu, Taimakon yaro ya koya ba tare da yi masa aikin ba",
  outcome: "amfani da mataimakin AI kyauta da shafin koyo kyauta don koyon sabon abu: samun bayanin abu mai wuya, yin atisaye da tambayoyin da AI ya yi, da bin jadawalin karatu mai sauƙi na makonni biyu da ku da kanku kuka tsara.",
  about: [
    "Ba a taɓa makara wajen koyo ba. Wataƙila kuna son kammala takardar shaidar makaranta (diploma), inganta Turancinku, koyon sana'a, ko ku iya bin aikin gida na yaronku. Kayan AI na kyauta za su iya zama malami mai haƙuri da ba ya gajiya da tambayoyinku.",
    "Za ku koyi neman AI ya bayyana abubuwa a matakinku, ya yi muku tambayoyin atisaye, nemo shafukan koyo kyauta, tsara jadawalin karatu da ya dace da rayuwa mai cike da aiki, da taimakon yaro ya koya ba tare da AI ya yi masa aikin gida ba.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku zaɓi abu ɗaya da kuke son koya. Ku tsara jadawalin karatu na makonni biyu tare da mataimakin AI, wanda ke amfani da shafin koyo kyauta ɗaya (kamar Khan Academy ko LearnFree) na minti 20 a kowace rana. Sannan ku nemi AI ya ba ku tambayoyin atisaye biyar kan batun farko, ku amsa su da kanku, sannan ku duba amsoshinku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya a al'ummomin da ba a kula da su sosai ba da ke son koyon sabon abu: masu kammala diploma, masu inganta Turanci, masu koyon sana'a, ko masu taimakon 'ya'yansu da aikin gida. Da yawa suna aiki, suna renon yara ko suna kula da iyali.",
    startingPoint: "Suna iya amfani da waya da intanet kaɗan. Wasu sun sha wahala a makaranta ko sun bar makaranta da wuri, kuma kaɗan ne suka taɓa amfani da mataimakin AI ko shafin koyo kyauta don karatu.",
    gap: "Kayan AI na kyauta da shafukan koyo za su iya zama malami mai haƙuri, amma masu koyo ba su san yadda ake neman bayani a matakinsu ba, yin atisaye maimakon sake karatu kawai, ko tsara jadawalin karatu da ya dace da rayuwa mai cike da aiki. Idan babu wannan, da yawa suna haƙura da burin koyo da zai taimaki aikinsu da iyalansu.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 5 zuwa 6)",
      "Na'urori: wayar zamani ko kwamfutar ɗakin karatu",
      "Lokaci: ɗan gajeren karatu kowace rana, sau da yawa minti 20 ko ƙasa da haka",
      "AI yana iya yin kuskure a lissafi da bayanai; masu koyo suna duba matakai da majiyoyi amintattu",
      "Makarantu suna da nasu dokokin AI, kuma kayan AI da yawa suna da iyakar shekaru ga yara"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da mataimakan AI ba za su iya fara ɗaukar kwas ɗin \"Introduction to AI and Digital Empowerment\" (Gabatarwa ga AI da Ƙarfafawa a Fasahar Zamani)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku wani abu da kuke ganin yana da wuya", action: "neman mataimakin AI ya bayyana shi a matakinku da misali na yau da kullum, da faɗin wane sashe ne har yanzu bai bayyana muku ba", standard: "har sai kun iya sake bayyana shi da kalmominku" },
    { id: "O2", condition: "Bayan kun koyi wani abu", action: "neman mataimakin AI ya ba ku tambayoyin atisaye ɗaya bayan ɗaya, amsa su da kanku da duba amsoshin", standard: "kuna amsawa kafin ku duba, kuma kuna tabbatar da duk amsar da ta yi kama da kuskure" },
    { id: "O3", condition: "Idan aka ba ku wata ƙwarewa da kuke son koya", action: "nemo kwas kyauta a shafin koyo ko a ɗakin karatu", standard: "kuna buɗe darasinsa na farko" },
    { id: "O4", condition: "Idan aka ba ku ainihin lokacin da kuke da shi kowane mako", action: "tsara jadawalin karatu na makonni biyu tare da mataimakin AI ta amfani da shafin koyo kyauta ɗaya", standard: "da ƙaramin batu ɗaya a kowace rana, kwanakin hutu, kuma an sa jadawalin a inda za ku gan shi" },
    { id: "O5", condition: "Idan aka ba ku batun aikin gida na yaro", action: "amfani da mataimakin AI don ya bayyana muku abin don ku iya koyar da shi, ba tare da ba yaron amsoshin ba", standard: "kuna bin dokokin makarantar game da AI" },
    { id: "O6", condition: "A ƙarshen makon karatu", action: "duba ci gabanku da ɗan gajeren gwaji da gyara jadawalinku", standard: "kuna sake duba kowane batu da kuka kasa" }
  ],
  chapters: [
    {
      name: "Babi na 1: AI a matsayin malaminku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Samun bayanin abu mai wuya a matakinku",
          minutes: 5,
          goal: "Neman mataimakin AI ya bayyana abu mai wuya ta hanyar da kuke fahimta.",
          text: [
            "Malami mai koyarwa ɗaya-ɗaya (tutor) shi ne wanda ke bayyana abubuwa ga mutum ɗaya. Mataimakin AI kyauta zai iya zama kamar malami mai haƙuri. Kuna iya yin tambaya ɗaya sau da yawa, kuma ba ya yi muku hukunci.",
            "Ku faɗa masa matakinku: \"Ka bayyana mini kason lamba (fractions) kamar yanzu nake farawa\" ko \"Ka bayyana shi da misali game da girki.\" Misalai daga rayuwarku ta yau da kullum suna sa abubuwa su zauna a kai.",
            "Idan har yanzu bai bayyana ba, ku faɗi sashen da ba ku gane ba: \"Na gane sashe na farko, amma ban gane dalilin da yasa muke juya kason lamba na biyu ba.\""
          ],
          steps: ["Ku faɗi abin da kuke son koya.", "Ku faɗa wa AI matakinku ku nemi misali na yau da kullum.", "Ku karanta amsar a hankali.", "Ku faɗi daidai sashen da har yanzu bai bayyana ba, ku sake tambaya."],
          words: [["Malami ɗaya-ɗaya (tutor)", "malamin da ke taimakon mutum ɗaya a lokaci ɗaya."], ["Misali", "wani abu na rayuwa ta gaske da ke nuna yadda wani abu yake aiki."]],
          slides: [
            { title: "AI zai iya zama malami mai haƙuri", bullets: ["Ku tambaya sau nawa kuke buƙata", "Ba ya yi muku hukunci"] },
            { title: "Ku faɗa masa matakinku", bullets: ["\"Ka bayyana shi kamar yanzu nake farawa\"", "\"Ka yi amfani da misali game da girki ko aiki\""] },
            { title: "Har yanzu bai bayyana ba?", bullets: ["Ku faɗi sashen da ba ku gane ba", "Ku nemi wani misali daban"] }
          ],
          tryIt: "Ku zaɓi abu ɗaya da koyaushe kuke ganin yana da wuya (kashi cikin ɗari, wata dokar nahawu, yadda ruwan bashi (interest) yake aiki). Ku nemi mataimakin AI ya bayyana shi a matakin mai farawa, da misali daga rayuwarku ta yau da kullum.",
          youCanNow: "samun bayanin abu mai wuya a matakinku, da yin tambayoyin biyo baya har ya bayyana.",
          quickCheck: [
            { objective: "O1", q: "Wane ne malami ɗaya-ɗaya (tutor)?", options: ["Wanda ke bayyana abubuwa ga mutum ɗaya", "Gwajin da ake yi a makaranta", "Wani nau'in na'urar lissafi", "Ginin makaranta"], answer: 0, why: "Malami ɗaya-ɗaya yana taimakon mutum ɗaya ya koya, kuma mataimakin AI zai iya zama kamar malami mai haƙuri." },
            { objective: "O1", q: "Kun gane sashe na farko na bayani amma ba na biyu ba. Me za ku tambaya?", options: ["\"Ka sake bayyana komai.\"", "\"Na gane sashe na farko, amma ban gane dalilin da yasa muke juya kason lamba na biyu ba.\"", "\"Ba komai.\"", "\"Ka ba ni amsar.\""], answer: 1, why: "Faɗin daidai sashen da bai bayyana ba yana taimakon AI ya bayyana wannan sashen." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Yin atisaye da tambayoyin da AI ya yi",
          minutes: 5,
          goal: "Neman mataimakin AI ya gwada ku ya kuma duba amsoshinku.",
          text: [
            "Karatu ba ɗaya yake da koyo ba. Kuna tuna abu fiye da haka idan kun yi atisaye: amsa tambayoyi yana sa ƙwaƙwalwarku ta sake fito da abin.",
            "Ku tambaya: \"Ka ba ni tambayoyin atisaye biyar game da kashi cikin ɗari, ɗaya bayan ɗaya. Ka jira amsata, sannan ka faɗa mini ko na yi daidai da dalili.\"",
            "AI yana iya yin kuskure a lissafi da bayanai. Idan wata amsa ta yi kama da kuskure, ku nemi ya nuna matakan, ko ku duba a shafin koyo amintacce ko ku tambayi malami."
          ],
          steps: ["Ku nemi ƙananan tambayoyi kaɗan, ɗaya bayan ɗaya.", "Ku amsa kowace tambaya da kanku kafin ku nemo komai.", "Ku nemi AI ya duba amsarku ya bayyana.", "Idan amsarsa ta yi kama da kuskure, ku nemi ya nuna matakan ko ku duba wata majiya."],
          words: [["Tambayar atisaye", "tambayar da kuke amsawa don taimakon ku tuna da gwada abin da kuka koya."]],
          slides: [
            { title: "Atisaye ya fi sake karatu", bullets: ["Amsawa tana fito da abin daga ƙwaƙwalwarku", "Kuna tuna abu fiye da haka"] },
            { title: "Ku nemi AI ya gwada ku", bullets: ["\"Ka ba ni tambayoyi biyar, ɗaya bayan ɗaya\"", "\"Ka jira amsata, sannan ka bayyana\""] },
            { title: "AI ma yana iya yin kuskure", bullets: ["Ku nemi ya nuna matakan", "Ku duba a shafin koyo ko ku tambayi malami"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya ba ku tambayoyin atisaye uku kan abin da kuka koya a Darasi na 1, ɗaya bayan ɗaya. Ku amsa kowace kafin ya faɗa muku amsar.",
          youCanNow: "amfani da mataimakin AI don gwada kanku da duba abin da kuka koya.",
          quickCheck: [
            { objective: "O2", q: "Me yasa za ku nemi tambayoyin atisaye ɗaya bayan ɗaya?", options: ["AI zai iya rubuta ɗaya kawai", "Yana rage kuɗi", "Kuna amsa kowace kafin ku ga ta gaba", "Yana sa tambayoyin su fi wuya"], answer: 2, why: "Ɗaya bayan ɗaya yana bar ku amsa kowace tambaya da kanku kafin ku ci gaba." },
            { objective: "O2", q: "AI ya ce kashi 25 cikin ɗari na 80 shi ne 25. Me za ku yi?", options: ["Ku yarda da shi", "Ku daina atisaye", "Ku goge hirar", "Ku nemi ya nuna matakan ko ku duba wata majiya"], answer: 3, why: "AI yana iya yin kuskure a lissafi, don haka ku nemi matakan ko ku duba majiya amintacciya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Nemo shafukan koyo kyauta",
          minutes: 4,
          goal: "Nemo shafin koyo kyauta da ke da darussa kan ƙwarewar da kuke so.",
          text: [
            "AI mataimaki ne mai kyau, amma ya fi amfani tare da darussa na gaske. Shafukan koyo kyauta suna ba ku kwasa-kwasai a jere, da bidiyo da atisaye.",
            "Khan Academy ƙungiya ce da ba ta neman riba, mai kwasa-kwasai kyauta a lissafi, kimiyya, karatu, tattalin arziki, kwamfuta da shirin jarabawa. LearnFree yana da darussa kyauta da kuke yi a gudunku kan kwamfuta, Microsoft Office, kayan Google, neman aiki, ka'idojin kuɗi, karatu da lissafi.",
            "Ɗakin karatu na jama'a na unguwarku ma yana iya ba da azuzuwa kyauta, koyarwa ɗaya-ɗaya ko asusun koyo ta intanet. Idan kuna tunanin zuwa jami'a (college), ku tambayi ofishin tallafin kuɗi (financial aid) na makarantar game da taimakon biyan kuɗi, ko ku duba studentaid.gov, shafin hukuma na Ma'aikatar Ilimi ta Amurka."
          ],
          steps: ["Ku yanke ƙwarewar da kuke son koya.", "Ku nemo ta a Khan Academy ko LearnFree.", "Ku zaɓi kwas ku duba darasinsa na farko.", "Ku tambayi ɗakin karatu irin azuzuwa ko koyarwa kyauta da yake bayarwa."],
          words: [["A gudunku (self-paced)", "kuna tafiya a gudunku, a kowane lokaci na rana."], ["Ƙungiya mara riba (nonprofit)", "ƙungiyar da ke aiki don wata manufa, ba don samar wa masu ita kuɗi ba."]],
          sources: [
            { name: "Khan Academy: Game da mu (About)", url: "https://www.khanacademy.org/about" },
            { name: "LearnFree (darussa kyauta da kuke yi a gudunku)", url: "https://www.learnfree.org/en/" },
            { name: "Federal Student Aid (Ma'aikatar Ilimi ta Amurka)", url: "https://studentaid.gov/" }
          ],
          slides: [
            { title: "Ku yi amfani da AI tare da darussa na gaske", bullets: ["Kwasa-kwasai a jere", "Bidiyo da atisaye"] },
            { title: "Shafukan koyo kyauta", bullets: ["Khan Academy: lissafi, kimiyya, karatu, shirin jarabawa", "LearnFree: kwamfuta, aiki, kuɗi, karatu, lissafi"] },
            { title: "Ƙarin taimako kyauta", bullets: ["Azuzuwa da koyarwa a ɗakin karatu", "Tambayoyin kuɗin jami'a: ofishin financial aid na makarantar ko studentaid.gov"] }
          ],
          tryIt: "Ku je Khan Academy ko LearnFree ku nemo kwas ɗaya kan ƙwarewar da kuke so. Ku buɗe darasin farko ku rubuta sunansa.",
          youCanNow: "nemo shafin koyo kyauta da ke da kwas kan ƙwarewar da kuke so.",
          quickCheck: [
            { objective: "O3", q: "Me LearnFree yake bayarwa?", options: ["Darussa kyauta kan kwamfuta, neman aiki, ka'idojin kuɗi, karatu da lissafi", "Digirin jami'a na kuɗi", "Wayoyi kyauta", "Samar da aiki kawai"], answer: 0, why: "LearnFree yana da darussa kyauta da kuke yi a gudunku kan ƙwarewar yau da kullum." },
            { objective: "O3", q: "Kuna son taimako kyauta ido da ido don inganta karatu. A ina za ku tambaya?", options: ["Wurin sayar da motoci", "Ɗakin karatu na jama'a", "Tallan kafar sada zumunta", "Banki"], answer: 1, why: "Ɗakunan karatu na jama'a sau da yawa suna ba da azuzuwa, koyarwa ko asusun koyo ta intanet kyauta." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: AI a matsayin malaminku",
        questions: [
          { objective: "O1", q: "Bayanin AI ya yi wuya sosai. Me ya kamata ku tambaya?", options: ["Babu komai; ku haƙura", "\"Ka bayyana shi kamar yanzu nake farawa, da misali daga girki.\"", "\"Ka yi amfani da manyan kalmomi.\"", "\"Ka tsawaita shi.\""], answer: 1, why: "Faɗa masa matakinku da neman misali na yau da kullum yana sa ya fi bayyana." },
          { objective: "O2", q: "Me yasa atisaye da tambayoyi ya fi taimako fiye da sake karatu?", options: ["Tsallakewa ya fi sauri", "Yana da kyan gani", "Amsawa tana sa ƙwaƙwalwarku ta sake fito da abin, don haka kuna tuna shi fiye da haka", "Yana rage kuɗi"], answer: 2, why: "Atisaye yana ƙarfafa ƙwaƙwalwa." },
          { objective: "O2", q: "AI ya ce amsarku ta lissafi ba daidai ba ce, amma kuna ganin daidai ce. Me za ku yi?", options: ["Ku nemi ya nuna matakan, ko ku duba wata majiya", "Ku yarda da AI koyaushe", "Ku daina koyon lissafi", "Ku goge manhajar"], answer: 0, why: "AI yana iya yin kuskure a lissafi; duba matakan yana nuna wanda ya yi daidai." },
          { objective: "O3", q: "Wanne ne shafin koyo kyauta na ƙungiya mara riba?", options: ["Shafin sayayya", "Manhajar sada zumunta", "Shagon wasanni", "Khan Academy"], answer: 3, why: "Khan Academy shafin koyo ne kyauta na ƙungiya mara riba." },
          { objective: "O3", q: "Mene ne ma'anar \"a gudunku\" (self-paced)?", options: ["Dole ku gama a rana ɗaya", "Kuna tafiya a gudunku", "Malami ne ke tsara kowane lokaci", "Kuna biya a kowane minti"], answer: 1, why: "Darussan da ake yi a gudunku suna dacewa da jadawalinku." }
        ]
      }
    },
    {
      name: "Babi na 2: Koyon da ya dace da rayuwarku",
      lessons: [
        {
          objectives: ["O4"],
          title: "Tsara jadawalin karatu da ya dace da rayuwa mai cike da aiki",
          minutes: 5,
          goal: "Tsara jadawalin karatu mai sauƙi na makonni biyu tare da mataimakin AI.",
          text: [
            "Manya da yawa suna koyo yayin da suke aiki, suna renon yara kuma suna kula da iyali. Gajeren karatu mai ɗorewa ya fi dogon zama da ba za ku iya ci gaba da shi ba.",
            "Ku nemi AI ya ba ku jadawalin da ya dace da ainihin makonku: \"Ina aiki da yamma, kuma ina da minti 20 kowace safiya. Ka tsara mini jadawalin makonni biyu don koyon ka'idojin farko na Excel a LearnFree. Ƙaramin batu ɗaya a kowace rana, da ranar hutu ɗaya a kowane mako.\"",
            "Ku sa jadawalin a inda za ku gan shi: a kalandar wayarku, a jikin firij, ko a littafin rubutu. Ku yi alama a kowace rana da kuka gama."
          ],
          steps: ["Ku zaɓi ƙwarewa ɗaya da shafin koyo kyauta ɗaya.", "Ku faɗa wa AI lokacin da kuke da shi da yaushe.", "Ku nemi jadawalin makonni biyu da ƙaramin batu ɗaya a kowace rana da kwanakin hutu.", "Ku sa shi a kalandarku ko a firij, ku yi alama a kowace rana."],
          words: [["Jadawalin karatu", "tsarin abin da za ku koya da lokacin da za ku koya shi."]],
          slides: [
            { title: "Gajere mai ɗorewa ya fi", bullets: ["Minti 20 a kowace rana ya fi awa 3 sau ɗaya", "Ku tsara a kewayen aiki da iyali"] },
            { title: "Ku nemi AI ya tsara jadawali", bullets: ["Ƙwarewarku da shafin koyo", "Lokacin da kuke da shi da yaushe", "Ƙaramin batu ɗaya a kowace rana, da kwanakin hutu"] },
            { title: "Ku sa shi a gabanku", bullets: ["Kalandar waya, firij ko littafin rubutu", "Ku yi alama a kowace rana"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya tsara jadawalin karatu na makonni biyu don kwas ɗin da kuka nemo a Darasi na 3, bisa ainihin lokacin da kuke da shi kowace rana.",
          youCanNow: "tsara jadawalin karatu da ya dace da ainihin makonku.",
          quickCheck: [
            { objective: "O4", q: "Me yasa gajerun zaman karatu masu ɗorewa suke aiki ga manya masu yawan aiki?", options: ["Koyaushe sun fi sauƙi", "Ba sa buƙatar jadawali", "Kuna iya ci gaba da su kowace rana", "Suna maye gurbin atisaye"], answer: 2, why: "Gajerun zama suna dacewa da ainihin mako, don haka kuna ci gaba maimakon haƙura." },
            { objective: "O4", q: "Kuna da minti 15 kawai a lokacin cin abincin rana. Me za ku faɗa wa AI idan kuna neman jadawali?", options: ["Babu komai game da lokacinku", "Cewa kuna iya karatu awa 3 a rana", "Batun kawai", "Cewa kuna da minti 15 a lokacin cin abincin rana kowace rana"], answer: 3, why: "Faɗa wa AI ainihin lokacinku yana bar shi ya tsara jadawalin da za ku iya bi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Taimakon yaro ya koya ba tare da yi masa aikin ba",
          minutes: 5,
          goal: "Amfani da AI don taimakon yaro ya fahimci aikin gida maimakon ba shi amsoshi.",
          text: [
            "AI zai iya taimakon ku don ku taimaki yaronku, har ma a darussan da ba ku taɓa koya ba ko kuka manta. Muhimmin abu shi ne ku yi amfani da shi don bayani, ba don yin aikin gida ba.",
            "Makarantu suna da dokoki game da AI. Da yawa ba sa barin ɗalibai su miƙa aikin da AI ya rubuta. Ku tambayi malamin yaronku mene ne dokokin. Ku kuma duba iyakar shekaru: kayan AI da yawa na mutane masu shekaru 13 zuwa sama ne kawai, wasu kuma suna buƙatar izinin iyaye ga matasa; ku karanta sharuɗɗan kayan.",
            "Prompt masu kyau ga iyaye: \"Ka bayyana yadda ake nemo fadin (area) murabba'i mai tsawo (rectangle) don in koya wa ɗana mai shekara 10. Kada ka ba da amsar wannan tambayar.\" Ko kuma: \"Ka ba ni tambayoyi uku masu sauƙi don in duba ko yarona ya fahimta.\""
          ],
          steps: ["Ku karanta aikin gida tare da yaronku.", "Ku nemi AI ya bayyana muku abin, ba ya warware tambayar ba.", "Ku bayyana wa yaronku da kalmominku.", "Ku bar yaronku ya yi aikin; ku yi amfani da tambayoyin da AI ya yi don duba fahimta.", "Ku bi dokokin makarantar game da amfani da AI."],
          words: [["Sharuɗɗa (terms)", "dokokin da kuke amincewa da su idan kuna amfani da manhaja ko shafin intanet, har da iyakar shekaru."]],
          slides: [
            { title: "Ku bayyana, kada ku yi", bullets: ["Ku yi amfani da AI don ku fahimci abin da kanku", "Yaronku ne ke yin aikin"] },
            { title: "Ku bi dokoki", bullets: ["Ku tambayi malami game da dokokin AI", "Kayan AI da yawa na masu shekaru 13 zuwa sama ne", "Ku karanta sharuɗɗan kayan"] },
            { title: "Prompt ga iyaye", bullets: ["\"Ka bayyana wannan don in koya wa ɗana mai shekara 10\"", "\"Kada ka ba da amsar\"", "\"Ka ba ni tambayoyi uku masu sauƙi na dubawa\""] }
          ],
          tryIt: "Ku ɗauki batun aikin gida ɗaya (ko wani batu daga ajin yaronku). Ku nemi AI ya bayyana shi don ku iya koyar da shi, ba tare da warware tambayar ba. Ku rubuta yadda za ku bayyana shi da kalmominku.",
          youCanNow: "amfani da AI don taimakon yaro ya koya yayin da kuke bin dokokin makaranta, aikin kuma ya kasance nasa.",
          quickCheck: [
            { objective: "O5", q: "Mene ne muhimmiyar doka wajen amfani da AI da aikin gida na yaro?", options: ["Ku yi amfani da shi don bayani, ba don yin aikin ba", "Ku bar shi ya rubuta dukan amsar", "Ku yi amfani da shi a jarabawa kawai", "Kada ku taɓa duba aikin gida"], answer: 0, why: "AI ya kamata ya taimake ku bayyana abin; yaronku ne har yanzu zai yi aikin." },
            { objective: "O5", q: "Yaronku mai shekara 11 yana son amfani da kayan AI shi kaɗai. Me za ku fara dubawa?", options: ["Launukansa", "Iyakar shekarunsa da sharuɗɗansa, da dokokin AI na makarantar", "Yadda yake rubutu da sauri", "Ko yana da wasanni"], answer: 1, why: "Kayan AI da yawa na masu shekaru 13 zuwa sama ne, kuma makarantu suna da nasu dokokin." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ci gaba a hanya da duba ci gabanku",
          minutes: 5,
          goal: "Duba ci gabanku da kanku da gyara jadawalinku.",
          text: [
            "Bayan mako ɗaya, ku waiwaya baya. Waɗanne ranaku kuka yi karatu? Me za ku iya yi yanzu da ba za ku iya yi a da ba? Ƙananan nasarori ma suna da muhimmanci.",
            "Ku nemi AI ya gwada ku kan dukan makon: \"Na yi karatun waɗannan batutuwa biyar. Ka ba ni tambaya ɗaya kan kowanne.\" Tambayoyin da kuka kasa suna nuna muku abin da za ku sake dubawa.",
            "Idan jadawalin ya yi yawa, ku rage shi. Idan ya yi sauƙi, ku ƙara kaɗan. Jadawalin da ke canjawa har yanzu jadawali ne."
          ],
          steps: ["Ku ƙirga ranakun da kuka yi karatu.", "Ku nemi AI ya ba ku tambaya ɗaya kan kowane batu da kuka karanta.", "Ku yi alama a waɗanda kuka kasa ku sake duba su.", "Ku rage ko ku ƙara jadawalin don ya dace da rayuwarku."],
          words: [["Ci gaba (progress)", "nisan da kuka yi zuwa ga burinku."], ["Sake dubawa (review)", "sake bin wani abu don ku fi tuna shi."]],
          slides: [
            { title: "Ku waiwaya kowane mako", bullets: ["Waɗanne ranaku kuka yi karatu?", "Me za ku iya yi yanzu?", "Ƙananan nasarori suna da muhimmanci"] },
            { title: "Ku gwada dukan makon", bullets: ["Tambaya ɗaya a kowane batu", "Tambayoyin da kuka kasa suna nuna abin da za ku sake duba"] },
            { title: "Ku gyara jadawalinku", bullets: ["Ya yi yawa? Ku rage shi", "Ya yi sauƙi? Ku ƙara kaɗan"] }
          ],
          tryIt: "Aikin ƙarshe: ku tsara jadawalin karatunku na makonni biyu tare da mataimakin AI da shafin koyo kyauta ɗaya, sannan ku nemi tambayoyin atisaye biyar kan batun farko, ku amsa su da kanku, sannan ku duba amsoshinku.",
          youCanNow: "koyon sabuwar ƙwarewa da jadawalin karatu, darussa kyauta da atisayen AI, da gyara jadawalin yayin da kuke ci gaba.",
          quickCheck: [
            { objective: "O6", q: "Me tambayoyin da kuka kasa a gwajin mako suke nuna muku?", options: ["Cewa ya kamata ku daina", "Cewa AI ya yi kuskure", "Abin da za ku sake dubawa a gaba", "Cewa jadawalin ya cika daidai"], answer: 2, why: "Tambayoyin da aka kasa suna nuna batutuwan da za a sake dubawa." },
            { objective: "O6", q: "Jadawalinku ya yi muku sauƙi sosai a wannan makon. Me za ku yi?", options: ["Ku daina karatu", "Ku fara sabon darasi", "Kada ku yi komai", "Ku ƙara kaɗan a jadawalin"], answer: 3, why: "Jadawali ya kamata ya canja don ya dace da ku; idan ya yi sauƙi, ku ƙara kaɗan." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Koyon da ya dace da rayuwarku",
        questions: [
          { objective: "O4", q: "Wane jadawalin karatu ne ya fi yiwuwa ya yi aiki ga uba ko uwa mai yawan aiki?", options: ["Awa uku kowane dare", "Minti 20 a kowace rana da kwanakin hutu", "A lokacin hutu kawai", "Babu jadawali kwata-kwata"], answer: 1, why: "Gajeren karatu mai ɗorewa yana dacewa da rayuwa mai cike da aiki." },
          { objective: "O4", q: "Me ya kamata ku faɗa wa AI idan kuna neman jadawalin karatu?", options: ["Kalmar sirrinku", "Bayanan bankinku", "Ƙwarewar, shafin, da lokacin da kuke da shi", "Babu komai"], answer: 2, why: "Waɗannan bayanai suna sa jadawalin ya dace da ainihin makonku." },
          { objective: "O5", q: "Yaronku yana da aikin gida na lissafi. Mene ne hanya mafi kyau ta amfani da AI?", options: ["Ku sa ya bayyana muku abin don ku iya koyar da shi", "Ku sa ya rubuta wa yaronku amsoshin", "Ku kwafa amsoshin a aikin gidan", "Ku yi watsi da aikin gidan"], answer: 0, why: "Amfani da AI don bayani yana bar koyo da aikin a hannun yaronku." },
          { objective: "O5", q: "A ina za ku san dokokin makaranta game da AI?", options: ["Wani rubutu a kafar sada zumunta", "AI ɗin da kansa", "Baƙo a intanet", "Ku tambayi malami ko makarantar"], answer: 3, why: "Kowace makaranta tana tsara nata dokokin." },
          { objective: "O6", q: "Gwajin makonku ya nuna kun kasa batutuwa biyu. Me ke biye?", options: ["Ku daina", "Ku sake duba waɗannan batutuwa biyu", "Ku tsallake su har abada", "Ku fara sabuwar ƙwarewa"], answer: 1, why: "Tambayoyin da aka kasa suna nuna abin da za a sake dubawa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Ilimi da Koyo",
    questions: [
      { objective: "O1", q: "Malami ɗaya-ɗaya (tutor) shi ne:", options: ["Wanda ke taimakon mutum ɗaya ya koya", "Wani nau'in kwamfuta", "Gwaji", "Ginin makaranta"], answer: 0, why: "Malami ɗaya-ɗaya yana koyar da mutum ɗaya." },
      { objective: "O1", q: "Don samun bayani mafi sarari, ku faɗa wa AI:", options: ["Adireshinku", "Matakinku, ku kuma nemi misali na yau da kullum", "Ya yi amfani da kalmomi masu wuya", "Babu komai"], answer: 1, why: "Matakinku da misali suna sa ya fi bayyana." },
      { objective: "O1", q: "Kun fahimci wani sashe na amsa amma ba duka ba. Ku faɗi:", options: ["\"Ba komai.\"", "\"Ka tsawaita ta.\"", "Daidai sashen da bai bayyana ba", "\"Ka yi amfani da ƙarin lambobi.\""], answer: 2, why: "Faɗin sashen da bai bayyana ba yana kawo bayani mafi kyau na biyo baya." },
      { objective: "O1", q: "Me yasa malamin AI mai haƙuri yake da amfani?", options: ["Yana ba da maki ga aikin makarantarku", "Yana ba ku diploma", "Yana karɓar kuɗi a kowace tambaya", "Kuna iya yin tambaya ɗaya sau da yawa"], answer: 3, why: "Ba ya gajiya kuma ba ya yi muku hukunci." },
      { objective: "O2", q: "Wane prompt ne ke sa AI ya gwada ku da kyau?", options: ["\"Ka ba ni tambayoyi biyar, ɗaya bayan ɗaya, ka duba amsoshina.\"", "\"Ka faɗa mini duk amsoshin.\"", "\"Gwaji.\"", "\"Ka yi mini jarabawata.\""], answer: 0, why: "Ɗaya bayan ɗaya, tare da dubawa, shi ne atisaye na gaske." },
      { objective: "O2", q: "Kafin AI ya faɗa muku amsar, ya kamata ku:", options: ["Nemo ta", "Amsa ta da kanku", "Tsallake ta", "Rufe hirar"], answer: 1, why: "Amsawa da farko ita ce ke sa atisaye ya yi aiki." },
      { objective: "O2", q: "Idan amsar lissafi ta AI ta yi kama da kuskure:", options: ["Ku yarda da ita duk da haka", "Ku daina koyo", "Ku nemi ya nuna matakan ko ku duba wata majiya", "Ku kai ƙarar abokinku"], answer: 2, why: "AI yana iya yin kuskure a lissafi." },
      { objective: "O3", q: "Khan Academy shi ne:", options: ["Jami'a mai biyan kuɗi", "Wasa", "Shago", "Shafin koyo kyauta na ƙungiya mara riba"], answer: 3, why: "Yana ba da kwasa-kwasai kyauta a matsayin ƙungiya mara riba." },
      { objective: "O3", q: "LearnFree yana ba da darussa kyauta kan:", options: ["Kwamfuta, neman aiki, ka'idojin kuɗi, karatu da lissafi", "Girki kawai", "Wasanni kawai", "Babu komai ga manya"], answer: 0, why: "LearnFree ya ƙunshi ƙwarewa da yawa ta yau da kullum da ta aiki." },
      { objective: "O3", q: "A ina kuma za ku iya samun azuzuwa ko koyarwa kyauta?", options: ["Wurin wanke mota", "Ɗakin karatu na jama'a", "Harabar banki", "Tallan da ke tasowa (pop-up)"], answer: 1, why: "Ɗakunan karatu sau da yawa suna ba da azuzuwa da koyarwa kyauta." },
      { objective: "O3", q: "Don tambayoyi game da biyan kuɗin jami'a, a ina za ku duba?", options: ["Wani shafin da ke neman kuɗi", "Tes daga baƙo", "Ofishin financial aid na makarantar ko studentaid.gov", "Wasan bidiyo"], answer: 2, why: "Waɗannan su ne majiyoyin hukuma." },
      { objective: "O4", q: "Jadawalin karatu mai kyau ga yawancin manya shi ne:", options: ["Awa biyar kowace Lahadi", "A duk lokacin da kuka ga dama", "Duka a dare ɗaya", "Gajeren karatu kowace rana da kwanakin hutu"], answer: 3, why: "Gajeren karatu mai ɗorewa ya fi sauƙin ci gaba da shi." },
      { objective: "O4", q: "A ina ya kamata ku ajiye jadawalin karatunku?", options: ["A inda za ku gan shi, kamar kalanda ko firij", "A ɓoye a cikin aljihun tebur", "A kanku kawai", "A kwandon shara"], answer: 0, why: "Ganin sa yana tunatar da ku ku yi karatu." },
      { objective: "O4", q: "Idan kuna neman AI ya tsara jadawalin karatu, ku haɗa da:", options: ["Lambar Social Security ɗinku", "Ainihin lokacin da kuke da shi da yaushe", "Lambar PIN ta bankinku", "Cikakken adireshinku"], answer: 1, why: "Ainihin lokacinku yana kawo jadawalin da za ku iya bi." },
      { objective: "O5", q: "Kayan AI da yawa suna da iyakar shekaru ta:", options: ["5 zuwa sama", "10 zuwa sama", "13 zuwa sama, wani lokaci da izinin iyaye", "Babu iyaka kwata-kwata"], answer: 2, why: "Kayan AI da yawa na masu shekaru 13 zuwa sama ne; ku duba sharuɗɗan kowane kayan." },
      { objective: "O5", q: "Idan kuna amfani da AI da aikin gida na yaronku, AI ya kamata:", options: ["Ya rubuta aikin gidan", "Ya yi jarabawar", "Ya aika wa malami imel a madadinku", "Ya bayyana abin, ba ya yi aikin ba"], answer: 3, why: "Bayani yana bar koyo a hannun yaronku." },
      { objective: "O5", q: "Wanne ne prompt mai kyau ga iyaye?", options: ["\"Ka bayyana wannan don in koya wa ɗana mai shekara 10. Kada ka ba da amsar.\"", "\"Ka yi aikin gida na yarona.\"", "\"Ka rubuta maƙalar.\"", "\"Ka ba da duk amsoshin.\""], answer: 0, why: "Yana neman bayani, ba amsoshi ba." },
      { objective: "O6", q: "A ƙarshen makon karatu, ya kamata ku:", options: ["Goge bayananku", "Waiwaya abin da kuka yi, ku gwada kanku", "Sake farawa daga farko", "Daina karatu"], answer: 1, why: "Waiwaya yana nuna ci gaba da abin da za a sake dubawa." },
      { objective: "O6", q: "Jadawalinku ya yi yawa ga makonku. Me za ku yi?", options: ["Ku daina", "Ku ji baƙin ciki", "Ku rage shi", "Ku ninka shi"], answer: 2, why: "Jadawali ya kamata ya dace da rayuwarku; gyara shi abu ne na yau da kullum." },
      { objective: "O2", q: "A aikin ƙarshe, bayan AI ya ba da tambayoyin atisaye biyar, ku:", options: ["Kwafi amsoshinsa", "Tsallake su", "Raba su a intanet", "Amsa su da kanku, sannan ku duba amsoshinku"], answer: 3, why: "Amsawa da kanku da dubawa suna tabbatar da koyo." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [1, 4, 7, 11, 13, 15, 17, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Shafin koyo kyauta", objective: "O3", notYet: "Babu shafin koyo, ko na biyan kuɗi ne.", meets: "Ya ambaci shafin koyo kyauta ɗaya da kwas ko darussan da aka yi amfani da su.", exceeds: "Ya kuma ambaci aji ko koyarwa kyauta a ɗakin karatu." },
      { name: "Jadawalin makonni biyu", objective: "O4", notYet: "Babu jadawali, ko jadawalin da bai dace da ainihin lokacin mai koyo ba.", meets: "Makonni biyu, kusan minti 20 a kowace rana, ƙaramin batu ɗaya a kowace rana, da kwanakin hutu.", exceeds: "An sa shi a kalanda ko a firij, kuma an yi alama a ranakun da aka gama." },
      { name: "Tambayoyin atisaye", objective: "O2", notYet: "An fara duba amsoshin, ko ba a amsa tambayoyin ba.", meets: "An amsa tambayoyi biyar kafin dubawa, kuma an duba kowacce.", exceeds: "An nemi AI ya nuna matakai kan duk amsar da ta yi kama da kuskure." },
      { name: "Duba ci gaba", objective: "O6", notYet: "Ba a waiwayi abin da aka kasa ba.", meets: "Ya jera tambayoyin da aka kasa da abin da za a sake dubawa.", exceeds: "Ya faɗi yadda jadawalin zai canja bisa sakamakon." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka bi jadawalin karatunsu aƙalla kwanaki 10 cikin 14 (binciken biyo baya)",
      "Masu koyo da suka yi rajista a kwas kyauta, ajin GED ko na Turanci, ko shirin jami'a cikin kwanaki 90",
      "Iyaye da suka ce sun taimaki yaro da aikin gida ta amfani da AI don bayani, ba don amsa ba"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani mai intanet, ko kwamfutar ɗakin karatu ko ta cibiyar al'umma",
      "Mataimakin AI kyauta: Microsoft Copilot, ChatGPT ko Google Gemini",
      "Shafin koyo kyauta kamar Khan Academy ko LearnFree",
      "Littafin rubutu ko kalanda don jadawalin karatu",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku fara da tambayar kowane mai koyo abin da yake son koya, ku yi amfani da wannan ƙwarewar a kowane aikin atisaye.",
      "Ku nuna yadda ake neman bayani mafi sauƙi; masu koyo da yawa suna jin kunyar sake tambaya.",
      "Ga iyaye, ku jaddada cewa AI yana bayani ne, yaro kuma ke yin aikin, kuma dokokin makaranta su ne na farko.",
      "Ku bincika bayan mako ɗaya don ganin waɗanda suka bi jadawalinsu, ku taimake su su rage ko ƙara shi.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
