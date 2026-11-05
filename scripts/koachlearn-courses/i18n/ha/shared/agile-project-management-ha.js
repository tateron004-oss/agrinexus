"use strict";

// Koach Learn course, Hausa (ha) translation of shared/agile-project-management.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "agile-project-management-ha",
  lang: "ha",
  translationOf: "agile-project-management",
  category: "Veterans (military)",
  name: "Gudanar da Ayyuka ta Hanyar Agile",
  skills: "Rubuta user story, Gina backlog, Tsara sprint, Gudanar da allon ayyuka, Yin bita da retrospective",
  outcome: "gudanar da ƙaramin aiki ta hanyar Agile: mayar da aikin jerin user story bisa muhimmanci (backlog), tsara sprint na mako ɗaya ko biyu, bin diddigin sa a allon ayyuka, da rufe shi da bita (review) da retrospective.",
  about: [
    "Agile hanya ce ta gudanar da ayyuka a gajerun zagaye, ana duba sakamako akai-akai, ana kuma canja hanya idan an koyi sabon abu. Masu ɗaukar aiki da yawa a fannin fasaha, gwamnati, kiwon lafiya da sufurin kaya suna amfani da ita, kuma tallace-tallacen neman aiki sukan nemi ta.",
    "Wannan kwas ɗin na duk wanda ke jagoranci ko aiki a cikin ƙungiya ne: tsofaffin sojoji da ke shiga ayyukan farar hula na gudanar da ayyuka, ma'aikatan da ke neman aikin mai tsarawa (coordinator) ko mai nazari (analyst), da mutanen da ke gudanar da wani aiki a wurin aiki, coci ko a cikin al'umma. Al'adun tsara aiki na soja, kamar bayanin manufa (mission brief) da bitar bayan aiki (after-action review), sun dace sosai da Agile.",
    "Za ku yi atisaye a kan ƙaramin aiki ɗaya na gaske naku tun daga darasin farko har zuwa na ƙarshe. Kowane darasi yana ɗaukar kusan minti biyar, yana ƙarewa da aikin \"Gwada yanzu\", kuma akwai gwajin ilimi bayan kowane babi da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku zaɓi aiki na gaske da zai ɗauki mako biyu zuwa shida (misali ƙoƙarin gyara takardar bayanin aiki (résumé) da neman aiki, wani taron al'umma ko ƙaramin shafin intanet). Ku gina backlog na aƙalla user story takwas bisa muhimmanci, ku tsara sprint na mako ɗaya da burin sprint, ku gudanar da shi a allon ayyuka kyauta, sannan ku gama da rubutaccen bitar sprint (sprint review) da retrospective da ke lissafa abu ɗaya da za a ci gaba da shi, ɗaya da za a daina, da ɗaya da za a gwada.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Tsofaffin sojoji da sojojin da ke barin aiki suna shiga ayyukan farar hula kamar mai tsara ayyuka (project coordinator), ayyukan gudanarwa (operations), IT ko gudanar da shirye-shirye (program management). Da yawa sun jagoranci ƙungiyoyi, sun gudanar da ayyukan soja, kuma sun yi bitar bayan aiki (after-action review).",
    startingPoint: "Suna da ƙwarewa wajen tsara aiki, ba da bayani (briefing), tsarin wanda ke da alhakin me, da bitar bayan aiki. Yawancinsu ba su yi amfani da kalmomin Agile, user story ko allon ayyuka na intanet ba.",
    gap: "Masu ɗaukar aiki na farar hula da yawa suna gudanar da ayyuka ta hanyar Agile, kuma suna neman ƙwarewa a Scrum ko Kanban a tallace-tallacen aiki. Masu koyo suna buƙatar nuna cewa za su iya gudanar da ƙaramin aiki a sprint da kalmomin farar hula, da haɗa hakan da ƙwarewar jagoranci da suke da ita, don su yi gogayya a waɗannan ayyuka.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi; ana bayanin kalmomin Agile a karon farko",
      "Na'urori: waya ko kwamfuta don kayan allon ayyuka kyauta, ko takardun manne (sticky notes) a bango",
      "Lokaci: darussa na minti 5, da sprint na mako ɗaya don aikin ƙarshe",
      "Kuɗin takardar shaida (certification) da sharuɗɗanta suna canjawa; masu koyo su duba shafin hukumar da ke bayarwa",
      "Babu bayanan sirri ko na asirin gwamnati (classified) a ayyukan atisaye ko a prompt na AI"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku bayanin wani aiki", action: "bayyana yadda Agile ke gudanar da aiki a gajerun zagaye, da lokacin da waterfall ya fi dacewa", standard: "da kalmominku, da misali ɗaya na kowanne" },
    { id: "O2", condition: "Idan aka ba ku ƙaramar ƙungiyar Scrum", action: "ambaci alhaki uku na Scrum, abubuwa (events) biyar da kayayyakin aiki (artifacts) uku", standard: "kuna samun aƙalla 9 cikin 11 daidai" },
    { id: "O3", condition: "Don aiki na gaske na mako biyu zuwa shida", action: "rubuta backlog na aƙalla user story takwas tare da ma'aunin kammalawa, bisa muhimmanci", standard: "kowane story yana bin tsarin \"A matsayina na..., ina so... domin...\"" },
    { id: "O4", condition: "Idan kuna da backlog ɗinku da sa'o'in da kuke da su a zahiri", action: "tsara sprint na mako ɗaya da burin sprint na jimla ɗaya da ayyuka na kwana ɗaya ko ƙasa da haka", standard: "ta yadda aikin da aka tsara ya dace da lokacin da kuke da shi" },
    { id: "O5", condition: "A lokacin sprint ɗinku", action: "bin diddigin aikin a allon ayyuka mai iyakar WIP da ganawar yau da kullum ta minti 15", standard: "kuna motsa kowane kati yayin da aikin ke tafiya" },
    { id: "O6", condition: "A ƙarshen sprint ɗinku", action: "yin bitar sprint da retrospective na Keep, Stop, Try, da ƙara gyara ɗaya a sprint na gaba", standard: "da rubuta ra'ayoyin mutane a cikin backlog" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tsara aiki ta hanyar Agile",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mene ne Agile, da yadda ya bambanta da babban tsari",
          minutes: 4,
          goal: "Bayyana da kalmominku yadda Agile ke gudanar da aiki a gajerun zagaye.",
          text: [
            "A aikin gargajiya ko na \"waterfall\", kuna tsara komai tun farko, sannan ku gina shi, sannan ku gwada shi, sannan ku miƙa shi a ƙarshe. Wannan yana aiki idan aikin sananne ne, kamar zuba harsashin gini. Yana lalacewa idan buƙatu suka canja a tsakiyar aiki.",
            "Agile yana miƙa aiki a gajerun zagaye, sau da yawa mako ɗaya zuwa huɗu. Kowane zagaye yana samar da abin da za a iya amfani da shi, ƙungiyar tana nuna shi ga mutanen da aka yi dominsu, kuma ana gyara tsarin bisa abin da suka faɗa. Agile Manifesto (2001) ya faɗa a sauƙaƙe: sakamako mai aiki da karɓar canji sun fi muhimmanci fiye da bin tsari ɗaya ba tare da canji ba.",
            "Scrum da Kanban su ne hanyoyi biyu da aka fi amfani da su wajen yin Agile. Scrum yana amfani da zagaye masu tsayin lokaci ɗaya da ake kira sprint. Kanban yana amfani da allo da tafiyar aiki a hankali, tare da iyaka kan yawan aikin da ake yi a lokaci ɗaya. Kuna iya amfani da dabaru daga duka biyun."
          ],
          words: [["Agile", "hanyar gudanar da ayyuka a gajerun zagaye, da dubawa da canje-canje akai-akai."], ["Waterfall", "hanyar gudanar da ayyuka inda ake gama kowane mataki kafin a fara na gaba."], ["Scrum", "hanyar Agile da ke aiki a zagaye masu tsayin lokaci ɗaya da ake kira sprint."], ["Kanban", "hanyar Agile da ke amfani da allo kuma tana iyakance yawan aikin da ake yi a lokaci ɗaya."]],
          slides: [
            { title: "Waterfall da Agile", bullets: ["Waterfall: tsara duka, gina duka, miƙa a ƙarshe", "Agile: miƙa abin amfani bayan 'yan makonni", "Agile yana gyara tsarin yayin da kuke koyo"] },
            { title: "Dalilin da yasa ƙungiyoyi ke amfani da Agile", bullets: ["Buƙatu suna canjawa a tsakiyar aiki", "Matsaloli suna bayyana da wuri, ba a ƙarshe ba", "Mutanen da kuke yi wa hidima suna ganin ci gaba akai-akai"] },
            { title: "Hanyoyi biyu da aka saba", bullets: ["Scrum: sprint mai tsayin lokaci ɗaya, wata ɗaya ko ƙasa da haka", "Kanban: allo da iyaka kan aikin da ake yi"] }
          ],
          sources: [{ name: "Manifesto for Agile Software Development", url: "https://agilemanifesto.org/" }, { name: "The Scrum Guide (2020)", url: "https://scrumguides.org/scrum-guide.html" }],
          tryIt: "Ku zaɓi aiki ɗaya na gaske da kuke son gamawa cikin mako biyu zuwa shida masu zuwa. Ku rubuta jimla ɗaya da ke bayanin sa, da jimla ɗaya game da waɗanda aka yi shi dominsu.",
          youCanNow: "bayyana yadda Agile ya bambanta da babban tsari na farko, da ambaton Scrum da Kanban.",
          quickCheck: [
            { objective: "O1", q: "Mene ne Kanban?", options: ["Tsari ɗaya na mako huɗu", "Wani nau'in user story", "Jarabawar takardar shaida", "Hanyar yin Agile da allo da iyaka kan aikin da ake yi"], answer: 3, why: "Kanban yana amfani da allo da tafiyar aiki a hankali, tare da iyaka kan yawan aikin da ake yi." },
            { objective: "O1", q: "Ƙungiyarku ta tsofaffin sojoji tana gina sabon shafin intanet, kuma 'yan ƙungiyar suna ta canja abin da suke so. Wace hanya ce ta dace?", options: ["Waterfall: tsara duka tun farko ku miƙa a ƙarshe", "Agile: miƙa a gajerun zagaye ku gyara bayan kowanne", "Babu tsari kwata-kwata", "Jira har kowa ya yarda da komai"], answer: 1, why: "Agile ya dace da aikin da buƙatunsa ke canjawa, domin ana nuna kowane zagaye kuma ana gyara tsarin." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ayyuka, abubuwa da kayayyakin aiki a Scrum",
          minutes: 5,
          goal: "Ambaci wanda ke yin me a Scrum, da abubuwa biyar da sprint ke amfani da su.",
          text: [
            "Scrum Guide (bugun 2020) ya ambaci alhaki uku. Product Owner (mai kula da samfur) yana yanke abin da ya fi muhimmanci kuma yana tsara jerin aiki. Developers (masu aiwatarwa) su ne mutanen da ke yin aikin, na kowane iri, ba software kaɗai ba. Scrum Master yana taimaka wa ƙungiyar ta bi Scrum kuma yana cire abubuwan da ke hana aiki.",
            "Akwai abubuwa (events) biyar. Sprint shi ne ma'ajin duka, wata ɗaya ko ƙasa da haka. Sprint Planning yana saita burin sprint kuma yana zaɓar aikin. Daily Scrum duba ne na minti 15 kan ci gaba zuwa ga burin. Sprint Review yana nuna sakamakon ga mutanen da aka yi aikin dominsu. Sprint Retrospective yana duba yadda ƙungiyar ta yi aiki kuma yana zaɓar gyare-gyare.",
            "Akwai kayayyakin aiki (artifacts) uku: Product Backlog (duk aikin, bisa tsari), Sprint Backlog (aikin da aka zaɓa don wannan sprint) da Increment (sakamako mai amfani). A ƙaramin aiki, mutum ɗaya yana iya riƙe matsayi fiye da ɗaya. Wannan ba laifi ba ne, muddin an yi kowane aiki."
          ],
          words: [["Product Owner", "mutumin da ke yanke wane aiki ne ya fi muhimmanci kuma yana tsara backlog."], ["Scrum Master", "mutumin da ke taimaka wa ƙungiyar ta yi amfani da Scrum da kyau kuma yana cire abubuwan da ke hana aiki."], ["Increment", "sakamako mai amfani da sprint ke samarwa."], ["Retrospective", "taro a ƙarshen sprint game da yadda ƙungiyar ta yi aiki; yana kama da bitar bayan aiki (after-action review)."]],
          slides: [
            { title: "Alhaki uku", bullets: ["Product Owner: abin da ya fi muhimmanci", "Developers: suna yin aikin", "Scrum Master: yana taimaka wa ƙungiyar kuma yana cire cikas"] },
            { title: "Abubuwa biyar", bullets: ["Sprint: wata ɗaya ko ƙasa da haka", "Sprint Planning da Daily Scrum (minti 15)", "Sprint Review da Sprint Retrospective"] },
            { title: "Kayayyakin aiki uku", bullets: ["Product Backlog: duk aikin, bisa tsari", "Sprint Backlog: aikin wannan sprint", "Increment: sakamako mai amfani"] }
          ],
          sources: [{ name: "The Scrum Guide (2020)", url: "https://scrumguides.org/scrum-guide.html" }],
          tryIt: "Don aikinku, ku rubuta wanda zai zama Product Owner, Scrum Master da Developers. Idan ku kaɗai ne, ku rubuta wace hula za ku sa a kowane abu (event).",
          youCanNow: "ambaci alhaki uku na Scrum, abubuwa biyar da kayayyakin aiki uku, da raba su a aikinku.",
          quickCheck: [
            { objective: "O2", q: "Mene ne Increment a Scrum?", options: ["Sakamako mai amfani da sprint ya samar", "Jerin duk aikin", "Taron yau da kullum", "Rahoton Scrum Master"], answer: 0, why: "Increment shi ne sakamako mai amfani; Product Backlog shi ne jerin duk aikin." },
            { objective: "O2", q: "Ku kaɗai ne a wani ƙaramin aiki. Me za ku yi game da matsayin Scrum?", options: ["Ku tsaya, domin Scrum yana buƙatar aƙalla mutum uku", "Ku fara ɗaukar Scrum Master aiki", "Ku riƙe matsayi fiye da ɗaya ku tabbata an yi kowane aiki", "Ku tsallake aikin Product Owner"], answer: 2, why: "A ƙaramin aiki mutum ɗaya yana iya riƙe matsayi fiye da ɗaya, muddin an yi kowane aiki." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Rubuta user story da gina backlog",
          minutes: 6,
          goal: "Mayar da aiki jerin user story bisa muhimmanci, kowanne da layin kammalawa a sarari.",
          text: [
            "User story yana bayanin wani yanki na aiki daga ra'ayin mutumin da yake taimaka wa: \"A matsayina na [irin mutum], ina so [wani abu] domin [dalili].\" Misali: \"A matsayina na mai ɗaukar ma'aikata, ina so takardar bayanin aiki (résumé) mai shafi ɗaya domin in ga ƙwarewar mai nema da sauri.\"",
            "Kowane story yana buƙatar ma'aunin kammalawa (acceptance criteria): bincike biyu ko uku da ke faɗin lokacin da ya kammala. Don story na résumé: ya isa shafi ɗaya, ya lissafa sakamako uku da za a iya aunawa, babu kuskuren rubutu. Layukan kammalawa a sarari suna hana jayayya daga baya.",
            "Ku jera story ɗin bisa tsari: mafi daraja da mafi gaggawa a sama. Mataimakin AI kamar ChatGPT, Microsoft Copilot ko Google Gemini zai iya taimaka muku rubuta daftarin story daga bayanin aiki, amma ku ne kuke yanke tsarin, kuma ku duba cewa kowane story aiki ne na gaske."
          ],
          steps: ["Ku lissafa duk abin da aikin ke buƙata, abu ɗaya a kowane layi.", "Ku sake rubuta kowane abu a matsayin \"A matsayina na..., ina so... domin...\".", "Ku ƙara ma'aunin kammalawa biyu ko uku ga kowanne.", "Ku raba duk story da ya yi girma sosai da ba za a gama shi a sprint ɗaya ba.", "Ku jera story ɗin bisa muhimmanci, daga sama zuwa ƙasa."],
          words: [["User story", "gajeren bayanin aiki daga ra'ayin mutumin da yake taimaka wa."], ["Acceptance criteria (ma'aunin kammalawa)", "binciken da ke faɗin cewa story ya kammala."], ["Backlog", "jerin duk aikin aiki, bisa tsari."]],
          slides: [
            { title: "Tsarin user story", bullets: ["A matsayina na [irin mutum]", "ina so [wani abu]", "domin [dalili]"] },
            { title: "Ma'aunin kammalawa", bullets: ["Bincike biyu ko uku da ke nufin \"an gama\"", "Misali: ya isa shafi ɗaya, sakamako uku, babu kuskuren rubutu"] },
            { title: "Jera backlog", bullets: ["Mafi daraja da gaggawa a sama", "Ku raba story da suka yi girma don sprint ɗaya", "AI zai iya rubuta daftari; ku ne kuke yanke tsarin"] }
          ],
          tryIt: "Ku rubuta aƙalla user story takwas don aikinku, kowanne da ma'aunin kammalawa, ku jera su bisa muhimmanci. Kuna iya tambayar mataimakin AI: \"Ka mayar da wannan aikin user story tare da acceptance criteria\" sannan ku gyara abin da ya bayar.",
          youCanNow: "rubuta user story tare da ma'aunin kammalawa, da jera su a cikin backlog.",
          quickCheck: [
            { objective: "O3", q: "Me sashen \"domin\" na user story yake bayarwa?", options: ["Ranar ƙarshe", "Mutumin da ke yin aikin", "Dalilin da yasa aikin yake da muhimmanci", "Kuɗin aikin"], answer: 2, why: "\"Domin\" yana faɗin dalili ko amfanin aikin ga mutumin da story ɗin ke taimaka wa." },
            { objective: "O3", q: "Mataimakin AI ya rubuta story don taron al'ummarku. Ɗaya yana cewa \"Tsara taron gaba ɗaya\". Me za ku yi?", options: ["Ku raba shi zuwa ƙananan story da za su dace da sprint ɗaya", "Ku bar shi a matsayin story na farko", "Ku goge duk story ɗin AI", "Ku ƙara shi a kowane sprint"], answer: 0, why: "Story da ya yi girma sosai don sprint ɗaya ya kamata a raba shi zuwa ƙananan sassa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tsara aiki ta hanyar Agile",
        questions: [
          { objective: "O1", q: "Mene ne babban bambanci tsakanin Agile da waterfall?", options: ["Agile ba shi da tsari kwata-kwata", "Agile yana miƙa aiki a gajerun zagaye kuma yana gyara tsari yayin da yake koyo", "Waterfall yana amfani da sprint", "Agile yana aiki ne a software kaɗai"], answer: 1, why: "Agile yana aiki a gajerun zagaye, kowanne yana miƙa wani abu, sannan yana gyara tsarin." },
          { objective: "O2", q: "A cewar Scrum Guide, tsawon lokacin sprint nawa ne?", options: ["Wata ɗaya ko ƙasa da haka", "Kowane tsawo da shugaba ya ga dama", "Shekara ɗaya", "Wata shida daidai"], answer: 0, why: "Scrum Guide ya ce sprint wata ɗaya ne ko ƙasa da haka." },
          { objective: "O2", q: "Wane ne ke yanke wane aiki ya fi muhimmanci kuma yana tsara backlog?", options: ["Duk wanda ya fara gamawa", "Scrum Master", "Lauyan abokin ciniki", "Product Owner"], answer: 3, why: "Product Owner shi ne ke tsara Product Backlog." },
          { objective: "O3", q: "Wanne ne user story da aka rubuta da kyau?", options: ["\"Résumé\"", "\"Gyara abubuwa\"", "\"A matsayina na mai ɗaukar ma'aikata, ina so résumé mai shafi ɗaya domin in ga ƙwarewa da sauri\"", "\"Yi komai kafin Juma'a\""], answer: 2, why: "Yana ambaton mutumin, abin da yake so da dalili." },
          { objective: "O3", q: "Wani story ya yi girma sosai da ba za a gama shi a sprint ɗaya ba. Me za ku yi?", options: ["Ku mayar da sprint ɗin shekara ɗaya", "Ku goge shi", "Ku raba shi zuwa ƙananan story", "Ku tsallake ma'aunin kammalawa"], answer: 2, why: "Ana raba manyan story don a iya gama kowane sashe a sprint." }
        ]
      }
    },
    {
      name: "Babi na 2: Gudanar da sprint",
      lessons: [
        {
          objectives: ["O4"],
          title: "Tsara sprint da buri a sarari",
          minutes: 5,
          goal: "Tsara sprint na mako ɗaya ko biyu da burin sprint da adadin aiki da ya dace.",
          text: [
            "Sprint Planning yana amsa tambayoyi uku: me yasa wannan sprint yake da daraja (burin sprint), me za a iya yi (wane story), da yaya za a yi shi (ayyukan).",
            "Burin sprint jimla ɗaya ce, kamar manufar kwamanda (commander's intent): \"Kafin Juma'a, ina da résumé da ya kammala, kuma na aika takardun neman aiki biyar da aka dace da kowane aiki.\" Idan tsare-tsare suka canja a tsakiya, burin yana faɗa wa kowa abin da har yanzu yake da muhimmanci.",
            "Ku ɗauki story daga saman backlog har lokacin ƙungiyar ya cika, kuma ku bar ɗan sarari. Sababbin ƙungiyoyi kusan koyaushe suna tsara aiki fiye da kima. Ku raba kowane story zuwa ayyuka na kwana ɗaya ko ƙasa da haka."
          ],
          steps: ["Ku yanke tsawon sprint (mako ɗaya ko biyu yana da kyau ga masu farawa).", "Ku rubuta burin sprint na jimla ɗaya.", "Ku ɗauko story daga saman backlog da ke taimaka wa burin.", "Ku raba kowane story zuwa ayyuka na kwana ɗaya ko ƙasa da haka.", "Ku kwatanta jimillar da sa'o'in da kuke da su a zahiri, ku rage idan ya cancanta."],
          words: [["Burin sprint (sprint goal)", "jimla ɗaya da ke faɗin abin da ake son sprint ya cimma."], ["Capacity (ƙarfin aiki)", "yawan lokacin da ƙungiyar take da shi a zahiri a lokacin sprint."]],
          slides: [
            { title: "Sprint Planning yana amsawa", bullets: ["Me yasa: burin sprint", "Me: wane story", "Yaya: ayyukan"] },
            { title: "Burin sprint mai kyau", bullets: ["Jimla ɗaya, kamar manufar kwamanda", "Yana faɗin abin da har yanzu yake da muhimmanci idan tsari ya canja"] },
            { title: "Kada ku ɗora fiye da kima", bullets: ["Ku ɗauko daga saman backlog", "Ayyuka na kwana ɗaya ko ƙasa", "Ku bar sarari: sababbin ƙungiyoyi suna tsara fiye da kima"] }
          ],
          tryIt: "Ku tsara sprint na mako ɗaya don aikinku: ku rubuta burin sprint, ku zaɓi story, ku raba su zuwa ayyuka, sannan ku kwatanta su da sa'o'in da kuke da su a zahiri a wannan makon.",
          youCanNow: "tsara sprint da buri, story da aka zaɓa da ayyukan da suka dace da lokacinku na gaske.",
          quickCheck: [
            { objective: "O4", q: "Har tsawon wane lokaci ya kamata aiki ɗaya a tsarin sprint ya ɗauka?", options: ["Sprint gaba ɗaya", "Kwana ɗaya ko ƙasa da haka", "Aƙalla mako ɗaya", "Wata ɗaya"], answer: 1, why: "Raba story zuwa ayyuka na kwana ɗaya ko ƙasa yana sauƙaƙa bin diddigin ci gaba." },
            { objective: "O4", q: "A tsakiyar sprint, tsare-tsare sun canja. Me ke faɗa wa ƙungiyar abin da har yanzu yake da muhimmanci?", options: ["Katin da ya fi daɗewa a allo", "Duk wanda ya fi ɗaga murya", "Retrospective na bara", "Burin sprint"], answer: 3, why: "Kamar manufar kwamanda, burin sprint yana faɗin abin da har yanzu yake da muhimmanci idan tsare-tsare suka canja." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gudanar da aiki a allon ayyuka",
          minutes: 5,
          goal: "Kafa allon ayyuka ku yi amfani da ganawar yau da kullum don aiki ya ci gaba da tafiya.",
          text: [
            "Allon ayyuka (task board) yana nuna aiki a layuka (columns): To Do (za a yi), In Progress (ana yi) da Done (an gama). Kowane aiki kati ne da ke motsawa zuwa dama yayin da aikin ke tafiya. Kuna iya amfani da takardun manne a bango, maƙunshi (spreadsheet), ko kayan allo kyauta kamar Trello, Microsoft Planner ko GitHub Projects.",
            "Kanban yana ƙara iyakar aikin da ake yi (WIP limit): misali, kada katuna fiye da biyu su kasance a In Progress ga kowane mutum. Gama aiki ya fi fara sabon aiki.",
            "Daily Scrum minti 15 ne. Kowane mutum yana faɗin ci gabansa zuwa ga burin sprint, abin da zai yi a gaba, da duk abin da ke hana shi aiki (blocker). Ana warware abubuwan da ke hana aiki bayan taron, ba a lokacin sa ba."
          ],
          steps: ["Ku yi layuka uku: To Do, In Progress, Done.", "Ku ƙara kati ɗaya ga kowane aiki daga tsarin sprint ɗinku.", "Ku saita iyakar WIP, kamar katuna biyu a In Progress.", "Kowace rana, ku motsa katuna ku yi ganawa ta minti 15.", "Ku rubuta abubuwan da ke hana aiki da wanda zai cire su."],
          words: [["Allon ayyuka (task board)", "allo mai layuka da ke nuna inda kowane aiki yake."], ["Iyakar WIP (WIP limit)", "iyaka kan ayyuka nawa za a iya yi a lokaci ɗaya. WIP gajartawar work in progress ce (aikin da ake yi)."], ["Blocker (cikas)", "duk abin da ke hana aiki ci gaba."]],
          slides: [
            { title: "Allon ayyuka mai sauƙi", bullets: ["To Do, In Progress, Done", "Kati ɗaya ga kowane aiki", "Takardun manne, maƙunshi ko kayan allo kyauta"] },
            { title: "Ku iyakance aikin da ake yi", bullets: ["Misali: katuna biyu ga kowane mutum", "Ku gama aiki kafin ku fara sabo"] },
            { title: "Daily Scrum na minti 15", bullets: ["Ci gaba zuwa ga burin sprint", "Abin da za a yi a gaba", "Cikas: ku warware su bayan taron"] }
          ],
          tryIt: "Ku gina allon ayyuka don sprint ɗinku mai layuka uku da kati ɗaya ga kowane aiki. Ku saita iyakar WIP. A kwanaki uku masu zuwa, ku motsa katunan ku rubuta ganawar yau da kullum ta layi biyu.",
          youCanNow: "gudanar da sprint a allon ayyuka mai iyakar WIP da gajeriyar ganawar yau da kullum.",
          quickCheck: [
            { objective: "O5", q: "Waɗanne abubuwa uku ne kowane mutum ke faɗa a Daily Scrum?", options: ["Albashinsa, matsayinsa da sa'o'insa", "Kowane ɗan bayani na kowane aiki", "Ra'ayinsa game da Product Owner", "Ci gaba zuwa ga burin, abin da ke gaba da duk wani cikas"], answer: 3, why: "Daily Scrum gajeren duba ne kan ci gaba zuwa ga burin sprint, matakai na gaba da cikas." },
            { objective: "O5", q: "Kun gama wani aiki. Me za ku yi da katinsa?", options: ["Ku bar shi a In Progress", "Ku motsa shi zuwa Done", "Ku jefar da shi kafin kowa ya gani", "Ku mayar da shi To Do"], answer: 1, why: "Katuna suna motsawa zuwa dama yayin da aiki ke tafiya, don haka aikin da aka gama yana zuwa Done." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rufe sprint: bita da retrospective",
          minutes: 5,
          goal: "Yin bitar sprint da retrospective, da mayar da su canji ɗaya a sprint na gaba.",
          text: [
            "Sprint Review yana nuna aikin da aka gama ga mutanen da aka yi shi dominsu kuma yana tambayar ra'ayinsu. Ku nuna aikin da ya cika ma'aunin kammalawarsa kaɗai. Ra'ayoyinsu suna komawa cikin backlog.",
            "Sprint Retrospective game da yadda kuka yi aiki ne, ba abin da kuka gina ba. Yana aiki kamar bitar bayan aiki (after-action review): me ya kamata ya faru, me ya faru, me yasa, da me za a yi daban. Tsari mai sauƙi shi ne Keep, Stop, Try (Ci gaba, Daina, Gwada).",
            "Ku zaɓi gyara ɗaya ku saka shi a sprint na gaba a matsayin aiki na gaske. Retrospective da bai canja komai ba taro ne kawai. Takardun shaida na Agile, kamar Certified ScrumMaster daga Scrum Alliance ko Professional Scrum Master daga Scrum.org, za su iya zuwa daga baya; ku duba shafukansu don sharuɗɗa da kuɗaɗe na yanzu."
          ],
          steps: ["Ku lissafa abin da aka gama kuma ya cika ma'aunin kammalawarsa.", "Ku nuna shi ga mutanen da aka yi shi dominsu ku rubuta ra'ayoyinsu.", "Ku ƙara ra'ayoyin a cikin backlog.", "Ku yi retrospective na Keep / Stop / Try.", "Ku saka gyara ɗaya a sprint na gaba."],
          words: [["Sprint Review", "taro don nuna aikin da aka gama da samun ra'ayoyi."], ["Bitar bayan aiki (after-action review)", "bitar soja kan abin da aka tsara, abin da ya faru da abin da za a canja."], ["Keep / Stop / Try", "tsari mai sauƙi na retrospective: abin da za a ci gaba da shi, abin da za a daina, abin da za a gwada."]],
          slides: [
            { title: "Sprint Review", bullets: ["Ku nuna aikin da aka gama kaɗai", "Ku tambayi mutanen da aka yi dominsu", "Ra'ayoyi suna shiga backlog"] },
            { title: "Retrospective = bitar bayan aiki", bullets: ["Game da yadda kuka yi aiki", "Keep, Stop, Try"] },
            { title: "Ku sa ya yi amfani", bullets: ["Ku zaɓi gyara ɗaya", "Ku saka shi a sprint na gaba a matsayin aiki"] }
          ],
          sources: [{ name: "Scrum Alliance: Certified ScrumMaster", url: "https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster" }, { name: "Scrum.org assessments", url: "https://www.scrum.org/assessments" }],
          tryIt: "Aikin ƙarshe: ku gama sprint ɗinku na mako ɗaya. Ku rubuta gajeren bitar sprint (abin da aka gama, wanda ya gani, abin da suka faɗa) da retrospective na Keep / Stop / Try, sannan ku ƙara gyara ɗaya a sprint na gaba.",
          youCanNow: "rufe sprint da bita da retrospective, da ɗaukar gyara ɗaya zuwa sprint na gaba.",
          quickCheck: [
            { objective: "O6", q: "Retrospective ya fi kama da wace al'adar soja?", options: ["Bitar bayan aiki (after-action review)", "Bikin canjin kwamanda", "Neman kayan aiki", "Duba kayan sarki (uniform)"], answer: 0, why: "Kamar bitar bayan aiki, yana tambayar me aka tsara, me ya faru, me yasa, da me za a canja." },
            { objective: "O6", q: "Ƙungiyarku ta lissafa abubuwa biyar da za a gwada a sprint na gaba. Me ke sa retrospective ya yi amfani?", options: ["Ku gwada duka biyar a lokaci ɗaya", "Ku rubuta su ku manta da su", "Ku zaɓi ɗaya ku ƙara shi a sprint na gaba a matsayin aiki na gaske", "Ku yi wani taro don tattauna su"], answer: 2, why: "Gyara ɗaya da aka mayar aiki na gaske shi ne ke canja yadda ƙungiyar ke aiki." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gudanar da sprint",
        questions: [
          { objective: "O4", q: "Mene ne burin sprint?", options: ["Jerin kowane aiki", "Albashin ƙungiyar", "Jimla ɗaya da ke faɗin abin da ya kamata sprint ya cimma", "Ranar ƙarshe ta aikin gaba ɗaya"], answer: 2, why: "Burin sprint manufa ce ta jimla ɗaya da ke jagorantar zaɓi a lokacin sprint." },
          { objective: "O4", q: "Ƙungiyarku ta tsara aikin sa'o'i 60 amma sa'o'i 40 kawai take da su. Me ya kamata ku yi?", options: ["Ku riƙe duka sa'o'i 60 ku yi aiki a ƙarshen mako", "Ku rage story har tsarin ya dace da lokacin gaske", "Ku tsallake Daily Scrum", "Ku tsawaita sprint ba tare da faɗa wa kowa ba"], answer: 1, why: "Ku tsara bisa ƙarfin aiki na gaske; sprint da aka ɗora wa nauyi fiye da kima yana kasawa." },
          { objective: "O5", q: "Me iyakar WIP ke yi?", options: ["Tana iyakance ayyuka nawa za a iya yi a lokaci ɗaya", "Tana iyakance mutane nawa za su iya shiga", "Tana saita kasafin kuɗin aikin", "Tana cire layin Done"], answer: 0, why: "Iyakar WIP tana tura ƙungiyar ta gama aiki kafin ta fara wani." },
          { objective: "O5", q: "Wani a ƙungiyar ya faɗi cikas a Daily Scrum. Yaushe ya kamata a warware shi?", options: ["A lokacin taron, na sa'a ɗaya", "Ba za a taɓa ba", "A ƙarshen aikin", "Bayan taron, ta hannun mutanen da za su iya taimakawa"], answer: 3, why: "Daily Scrum yana tsayawa a minti 15; ana magance cikas nan da nan bayansa." },
          { objective: "O6", q: "Game da me retrospective yake?", options: ["Sayar da samfurin", "Zaɓar sabon Product Owner", "Rubuta kasafin kuɗi", "Yadda ƙungiyar ta yi aiki da abin da za a canja"], answer: 3, why: "Retrospective yana duba yadda ƙungiyar ta yi aiki, kamar bitar bayan aiki." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gudanar da Ayyuka ta Hanyar Agile",
    questions: [
      { objective: "O1", q: "Ayyukan Agile suna miƙa:", options: ["Komai a ƙarshe kawai", "Takardu kawai", "Abin amfani a gajerun zagaye", "Babu komai har sai an kashe kasafin kuɗi"], answer: 2, why: "Agile yana miƙa aiki mai amfani bayan 'yan makonni." },
      { objective: "O1", q: "Wane yanayi ne waterfall ya fi dacewa fiye da Agile?", options: ["Sabuwar manhaja inda buƙatun masu amfani ba su bayyana ba", "Aiki sananne da ba zai canja ba, kamar zuba harsashin gini", "Gwajin tallace-tallace da ba a san sakamakonsa ba", "Aikin da ra'ayoyi ke canja tsarinsa kowane mako"], answer: 1, why: "Waterfall yana aiki idan aikin sananne ne kuma ba ya canjawa." },
      { objective: "O1", q: "Scrum da Kanban su ne:", options: ["Hanyoyi biyu da aka saba na yin Agile", "Harsunan shirye-shiryen kwamfuta biyu", "Jarabawar takardar shaida biyu", "Nau'ikan kasafin kuɗi biyu"], answer: 0, why: "Dukansu sanannun hanyoyin Agile ne." },
      { objective: "O2", q: "Wane ne ke taimaka wa ƙungiyar ta yi amfani da Scrum da kyau kuma yana cire cikas?", options: ["Product Owner", "Akanta", "Abokin ciniki", "Scrum Master"], answer: 3, why: "Wannan aikin Scrum Master ne." },
      { objective: "O2", q: "A Scrum, \"Developers\" na nufin:", options: ["Masu rubuta software kaɗai", "Manajoji", "Masu gina gidaje", "Mutanen da ke yin aikin, na kowane iri"], answer: 3, why: "Developers su ne duk wanda ke yin aikin sprint." },
      { objective: "O2", q: "Tsawon Daily Scrum nawa ne?", options: ["Kwana guda", "Sa'o'i biyu", "Minti 15", "Babu iyaka"], answer: 2, why: "Scrum Guide ya saita Daily Scrum a minti 15." },
      { objective: "O2", q: "Wanne BA ɗaya daga cikin kayayyakin aiki uku na Scrum ba ne?", options: ["Product Backlog", "Rahoton shekara", "Increment", "Sprint Backlog"], answer: 1, why: "Kayayyakin aikin su ne Product Backlog, Sprint Backlog da Increment." },
      { objective: "O3", q: "Ku cika tsarin user story: \"A matsayina na ___, ina so ___ ...\"", options: ["\"...domin [dalili]\"", "\"...kafin Juma'a\"", "\"...kyauta\"", "\"...ko kuma\""], answer: 0, why: "Tsarin yana ƙarewa da dalili: domin..." },
      { objective: "O3", q: "Ma'aunin kammalawa (acceptance criteria) su ne:", options: ["Binciken da ke faɗin cewa story ya kammala", "Takardun neman aikin ƙungiyar", "Farashin aikin", "Jerin 'yan ƙungiya"], answer: 0, why: "Suna bayyana lokacin da story ke ƙidaya a matsayin wanda ya kammala." },
      { objective: "O3", q: "Mataimakin AI ya rubuta muku user story goma. Mene ne aikinku?", options: ["Ku yi amfani da su ba tare da karantawa ba", "Ku nemi AI ya gudanar da sprint", "Ku goge backlog", "Ku duba su, ku gyara su, ku yanke tsarinsu"], answer: 3, why: "AI zai iya rubuta daftari; ku ne kuke duba aikin kuke saita muhimmanci." },
      { objective: "O3", q: "Abubuwan saman backlog ya kamata su zama:", options: ["Mafi sauƙi", "Waɗanda aka zaɓa ba tare da tsari ba", "Mafi daraja da mafi gaggawa", "Mafi daɗewa"], answer: 2, why: "Ana jera backlog bisa daraja da gaggawa." },
      { objective: "O4", q: "Sprint Planning yana amsa waɗanne tambayoyi uku?", options: ["Wane ne, a ina, yaushe", "Me yasa, me, da yaya", "Kuɗi, farashi, riba", "Fara, tsaya, dakata"], answer: 1, why: "Me yasa (burin), me (story ɗin), yaya (ayyukan)." },
      { objective: "O4", q: "Burin sprint ya fi kama da wane ra'ayin soja?", options: ["Duba kayan sarki (uniform)", "Manufar kwamanda (commander's intent)", "Matakin albashi", "Neman hutu"], answer: 1, why: "Dukansu suna faɗin abin da ke da muhimmanci idan tsare-tsare suka canja." },
      { objective: "O4", q: "Ayyuka a sprint ya kamata su ɗauki:", options: ["Kwana ɗaya ko ƙasa da haka", "Wata ɗaya kowanne", "Shekara ɗaya", "Babu lokaci"], answer: 0, why: "Ƙananan ayyuka suna nuna ci gaba kuma suna bayyana matsaloli da wuri." },
      { objective: "O5", q: "Allon ayyuka na asali yana da waɗanne layuka?", options: ["Ja, fari, shuɗi", "Ee da A'a", "Litinin zuwa Juma'a", "To Do, In Progress, Done"], answer: 3, why: "Waɗannan layuka uku suna nuna inda kowane aiki yake." },
      { objective: "O5", q: "Kuna da katuna biyar a In Progress kuma iyakar WIP biyu ce. Me ya kamata ku yi?", options: ["Ku fara aiki na shida", "Ku cire iyakar", "Ku gama aiki kafin ku fara wani sabo", "Ku motsa su duka zuwa Done"], answer: 2, why: "Iyakar WIP na nufin gamawa ya fi farawa." },
      { objective: "O6", q: "A Sprint Review ya kamata ku nuna:", options: ["Babu komai; taron tsarawa ne", "Aikin da aka yi rabi kamar an gama", "Aikin da ya cika ma'aunin kammalawarsa kaɗai", "Jadawalin kowane ɗan ƙungiya"], answer: 2, why: "Ana nuna aikin da aka gama kaɗai, don ra'ayoyi su zama na gaskiya." },
      { objective: "O6", q: "Ra'ayoyi daga Sprint Review suna zuwa:", options: ["Kwandon shara", "Cikin backlog", "Cikin retrospective kaɗai", "Wurin lauya"], answer: 1, why: "Sababbin ra'ayoyi suna zama abubuwa a cikin backlog." },
      { objective: "O6", q: "Keep / Stop / Try tsari ne na:", options: ["Retrospective", "Kasafin kuɗi", "Ɗaukar ma'aikata", "User story"], answer: 0, why: "Hanya ce mai sauƙi ta gudanar da retrospective." },
      { objective: "O6", q: "A ina ya kamata ku tabbatar da sharuɗɗa da kuɗin takardar shaidar Agile na yanzu?", options: ["Wani rubutu a dandalin tattaunawa na intanet", "Tallar kafofin sada zumunta", "Amsar hirar AI ita kaɗai", "Shafin hukuma na hukumar da ke bayarwa, kamar Scrum Alliance ko Scrum.org"], answer: 3, why: "Sharuɗɗa da kuɗaɗe suna canjawa; shafin hukuma shi ne majiyar." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      1,
      3,
      6,
      7,
      11,
      12,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Backlog na user story",
        objective: "O3",
        notYet: "Story ƙasa da takwas, ko an rubuta abubuwa a matsayin ayyuka kawai ba tare da \"domin\" ba.",
        meets: "Aƙalla story takwas a cikin tsarin, kowanne da ma'aunin kammalawa biyu ko uku, bisa muhimmanci.",
        exceeds: "An raba manyan story, kuma mai koyo zai iya bayyana dalilin da yasa story na farko yake a sama."
      },
      {
        name: "Tsarin sprint",
        objective: "O4",
        notYet: "Babu burin sprint, ko aikin ya fi lokacin da ake da shi.",
        meets: "Burin sprint na jimla ɗaya, story daga saman backlog, da ayyuka na kwana ɗaya ko ƙasa da suka dace da sa'o'in.",
        exceeds: "Ya bar ɗan sarari kuma ya faɗi abin da za a fara cirewa."
      },
      {
        name: "Allon ayyuka",
        objective: "O5",
        notYet: "An kafa allon amma ba a motsa katuna a cikin makon ba.",
        meets: "Layukan To Do, In Progress da Done, iyakar WIP, da katunan da ake motsawa kowace rana.",
        exceeds: "An rubuta cikas tare da wanda ya cire su."
      },
      {
        name: "Bita da retrospective",
        objective: "O6",
        notYet: "Babu bitar ko retrospective.",
        meets: "Rubutaccen bita da aka ƙara ra'ayoyinsa a backlog, kuma an lissafa Keep, Stop da Try.",
        exceeds: "Gyara ɗaya ya riga ya zama aiki a sprint na gaba."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ƙara ƙwarewar Agile ko Scrum a résumé ko bayanin LinkedIn cikin kwanaki 30",
      "Masu koyo da suka nemi ko suka fara aikin gudanar da ayyuka, shirye-shirye ko gudanarwa (operations) cikin kwanaki 90",
      "Masu koyo da suka ci gaba zuwa takardar shaidar Agile kamar Certified ScrumMaster ko Professional Scrum Master"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kayan allon ayyuka kyauta (Trello, Microsoft Planner ko GitHub Projects), maƙunshi (spreadsheet), ko takardun manne a bango",
      "Waya ko kwamfuta; mataimakin AI zaɓi ne don rubuta daftarin story",
      "Takarda da alƙalami, ko wata takarda a kwamfuta, don backlog, tsarin sprint, bita da retrospective",
      "Kusan minti 60 don darussa da gwaje-gwaje, da mako ɗaya don gudanar da sprint"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku yi babi ɗaya a kowane zama; ku nuna samfurin allo a allon da kowa ke gani.",
      "Ku haɗa kowane ra'ayi da ƙwarewar soja: burin sprint da manufar kwamanda, retrospective da bitar bayan aiki.",
      "Ku sa masu koyo su zaɓi aiki na gaske na kansu ko na al'umma, don sprint ɗin ya zama aiki na gaske.",
      "Ku yi gajeriyar ganawar ƙungiya a lokacin makon sprint don masu koyo su yi atisayen Daily Scrum da babbar murya.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
