"use strict";

// Koach Learn course, Hausa (ha) translation of shared/ai-certifications.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "ai-certifications-ha",
  lang: "ha",
  translationOf: "ai-certifications",
  category: "Re-Entry",
  name: "Takardun Shaidar AI: Wacce Za Ku Samu da Yadda Za Ku Shirya",
  skills: "Daidaita takardar shaida da burin aiki, Karanta shafin jarrabawa na hukuma, Kwatanta kuɗi da lokaci, Samun horo da gwaje-gwajen atisaye kyauta, Yin tsarin karatu, Shiryawa don ranar jarrabawa",
  outcome: "zaɓar takardar shaidar AI (certificate ko certification) da ta dace da burin aiki na gaske, karanta shafin jarrabawarta na hukuma don gano kuɗinta, tsarinta da ƙwarewar da take gwadawa, yin tsarin karatu da horo kyauta na hukuma, da shiryawa don ranar jarrabawa.",
  about: [
    "Takardun shaida suna nuna wa masu ɗaukar aiki cewa kuna da wata ƙwarewa. Wannan yana taimakawa sosai idan akwai giɓi a tarihin aikinku, ba ku da digiri, ko kuna da tarihin laifi. A fannin AI, manyan kamfanonin fasaha da ƙungiyoyin horo yanzu suna ba da takardun shaida na masu farawa.",
    "Wannan kwas ɗin na mutanen da ke dawowa gida daga gidan yari ne, masu neman aiki a shirye-shiryen horar da ma'aikata, da masu son canja sana'a. Ba ya koyar da abin da ke cikin jarrabawar kanta. Yana koya muku yadda ake zaɓar takardar shaida da ta dace, yadda ake guje wa ɓata kuɗi, da yadda ake shiryawa cikin hikima.",
    "Sunaye, farashi da bayanan jarrabawa suna canjawa sau da yawa, don haka za ku koyi duba shafin hukuma kowane lokaci. Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku zaɓi takardar shaidar AI ɗaya da ta dace da tallar aiki ta gaske da kuke so. Daga shafinta na hukuma, ku rubuta ainihin sunanta, mai bayarwa, kuɗinta, tsawon jarrabawa da tsarinta, ƙwarewar da ake gwadawa, sharuɗɗan katin shaida, da tsawon lokacin da take aiki. Sannan ku yi tsarin karatu na mako huɗu da horo kyauta na hukuma da aƙalla gwajin atisaye ɗaya, kuma ku sa ranar zaman atisaye ko ranar jarrabawa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke dawowa gida daga gidan yari (re-entry) da suke son takardar shaida da aka sani don nuna wa masu ɗaukar aiki sababbin ƙwarewa. Sau da yawa suna neman aikin ofis, hidimar abokan ciniki, gudanarwa, IT ko cloud (ayyukan kwamfuta ta intanet).",
    startingPoint: "Wasu sun yi amfani da mataimakin AI ko sun gama gajeren kwas a intanet; wasu sun sami takardun shaida lokacin da suke tsare. Yawancinsu ba su taɓa zaɓa, biya ko zana jarrabawa mai sa ido ba, kuma wataƙila ba su da katin shaida mai hoto da ke aiki yanzu.",
    gap: "Takardar shaida za ta iya taimakawa wajen bayanin giɓi a aiki da nuna ƙwarewar yanzu, amma mutane sau da yawa suna zaɓar wadda ba ta dace ba, suna biyan horon da ba sa buƙata, sharuɗɗan katin shaida suna hana su, ko 'yan damfara masu sayar da amsoshin jarrabawa suna yaudarar su. Masu koyo suna buƙatar zaɓar takardar shaida da ta dace da tallace-tallacen aiki na gaske, su sami bayanai daga shafin hukuma, su yi karatu da horo kyauta, kuma su kasance a shirye a ranar jarrabawa.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayyana takardun shaida na fasaha a sauƙaƙe",
      "Na'urori: wataƙila suna da waya mai sauƙi kawai, ko kwamfutar ɗakin karatu mai ƙayyadadden lokaci; jarrabawar intanet tana buƙatar kwamfuta mai dacewa da ɗaki shiru",
      "Kuɗi: kuɗin jarrabawa ya bambanta; masu koyo suna tambayar shirye-shiryen ma'aikata, na masu dawowa gida ko na tsoffin sojoji game da taimako kafin su biya",
      "Bayanan jarrabawa suna canjawa; shafin jarrabawa na hukuma ne kaɗai majiya amintacciya",
      "Katin shaida: sau da yawa ana buƙatar katin shaida mai hoto na gwamnati da ke aiki, mai suna iri ɗaya da na rajista"
    ],
    prerequisites: "Babu. Kwas ɗin \"Introduction to AI and Digital Confidence\" (Gabatarwa ga AI da Ƙarfin Gwiwa a Fasahar Zamani) yana taimakawa masu koyo da suke sababbi ga kayan AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku bayanin wata takardar shaida", action: "bayyana ko takardar kammala kwas ce ko certification mai jarrabawa mai sa ido, da abin da take nuna wa mai ɗaukar aiki", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O2", condition: "Idan aka ba ku takardun shaidar AI na masu farawa da yawa", action: "kwatanta su ta mai bayarwa, kuɗi, lokaci da mataki", standard: "kuna faɗin wadda ta dace da mai farawa da wadda ta fi zama ta fasaha" },
    { id: "O3", condition: "Idan aka ba ku tallace-tallacen aiki biyar na gaske, kasafin kuɗinku da lokacinku", action: "zaɓar takardar shaida ɗaya da gano wanda zai iya taimakawa wajen biyan kuɗinta", standard: "da dalili da ya dogara da tallace-tallacen aikin" },
    { id: "O4", condition: "Ta amfani da shafin jarrabawa na hukuma na takardar shaidar", action: "rubuta takardar bayanai mai shafi ɗaya mai sunan jarrabawar, kuɗinta, tsarinta, ƙwarewar da ake auna, sharuɗɗan katin shaida da na sake zana jarrabawa, da tsawon lokacin da take aiki", standard: "kowane bayani daga shafin hukuma ne, da ranar da kuka duba" },
    { id: "O5", condition: "Idan aka ba ku ƙwarewar da ake auna da horo kyauta na hukuma", action: "yin tsarin karatu na mako huɗu da ke amfani da AI a matsayin malami kuma yana da gwajin atisaye", standard: "lokacin karatu ya yi daidai da nauyin kowane batu a jarrabawa" },
    { id: "O6", condition: "Kafin jarrabawa da bayanta", action: "shiryawa don ranar jarrabawa da saka takardar shaidar a CV ɗinku", standard: "da ainihin sunanta, mai bayarwa da kwanan wata" }
  ],
  chapters: [
    {
      name: "Babi na 1: Zaɓar takardar shaida da ta dace",
      lessons: [
        {
          objectives: ["O1"],
          title: "Certificate da certification, da dalilin da suke da muhimmanci",
          minutes: 4,
          goal: "Bambanta takardar kammala kwas da certification mai jarrabawa mai sa ido, da bayyana abin da kowacce take nuna wa mai ɗaukar aiki.",
          text: [
            "Takardar kammala kwas (certificate) tana nuna cewa kun gama wani kwas. Certification yawanci tana nufin kun ci jarrabawa mai sa ido (proctored) da ke gwada ƙwarewarku. Masu ɗaukar aiki sau da yawa sun fi daraja certification, amma certificate mai kyau ma tana nuna ƙoƙari da sababbin ƙwarewa.",
            "Takardun shaidar AI sun fara daga na masu farawa (\"mene ne AI kuma yaya zan yi amfani da shi a wurin aiki\") har zuwa na fasaha (\"gina hanyoyin AI a cloud\"). Na masu farawa suna taimakawa a aikin ofis, hidimar abokan ciniki, tallace-tallace da gudanarwa. Na fasaha suna taimakawa a ayyukan IT da cloud, kuma sau da yawa suna buƙatar ɗan ilimin rubuta code ko na cloud tun farko.",
            "Takardar shaida ba tabbacin samun aiki ba ce. Ta fi aiki tare da CV da ke nuna yadda kuka yi amfani da ƙwarewar, ko da a ƙaramin aiki ne. Ku haɗa ta da atisaye na gaske."
          ],
          words: [["Certificate (takardar kammala kwas)", "shaidar cewa kun gama wani kwas ko shiri."], ["Certification", "takardar shaida da ake samu ta hanyar cin jarrabawa da ke gwada ƙwarewarku."], ["Jarrabawa mai sa ido (proctored exam)", "jarrabawa da mutum ko kyamara ke kallo don hana satar amsa."], ["Takardar shaida (credential)", "kowace certificate, certification ko lasisi da ke tabbatar da ƙwarewa."]],
          slides: [
            { title: "Certificate da certification", bullets: ["Certificate: kun gama kwas", "Certification: kun ci jarrabawa mai sa ido"] },
            { title: "Na masu farawa da na fasaha", bullets: ["Na masu farawa: amfani da AI a wurin aiki", "Na fasaha: gina hanyoyin AI; wataƙila yana buƙatar code"] },
            { title: "Ba tabbacin aiki ba ce", bullets: ["Ku haɗa ta da atisaye na gaske", "Ku nuna yadda kuka yi amfani da ƙwarewar"] }
          ],
          tryIt: "Ku rubuta aiki ɗaya da kuke so. A gefensa, ku rubuta ko takardar shaidar AI ta masu farawa ce ta fi dacewa ko ta fasaha, da dalili.",
          youCanNow: "bambanta certificate da certification, da zaɓar matakin da ya dace da burin aiki.",
          quickCheck: [
            { objective: "O1", q: "Me takardar kammala kwas (certificate) take nunawa?", options: ["Cewa kun ci jarrabawa mai sa ido", "Cewa kuna da aiki", "Cewa jiha ta ba ku lasisi", "Cewa kun gama wani kwas"], answer: 3, why: "Takardar kammala kwas tana nuna cewa kun gama wani kwas." },
            { objective: "O1", q: "Mai ɗaukar aiki ya tambayi me sabuwar takardar shaidarku ta AI take tabbatarwa. Kun ci jarrabawa mai sa ido. Me za ku ce?", options: ["Ba ta tabbatar da komai ba", "Tana nuna na ci jarrabawa mai sa ido da ta gwada ƙwarewata", "Tana nufin tabbas zan sami aikin", "Tana nufin na kalli wasu bidiyo"], answer: 1, why: "Certification yawanci tana nufin cin jarrabawa mai sa ido da ke gwada ƙwarewa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rangadin sanannun takardun shaidar AI na masu farawa",
          minutes: 6,
          goal: "Kwatanta takardun shaidar AI na masu farawa da yawa ta mai bayarwa, kuɗi, lokaci da mataki.",
          text: [
            "An duba waɗannan a shafukan hukuma a Oktoba 2026; koyaushe ku sake duba kafin ku biya. Google AI Essentials kwas ne na Google a Coursera da kuke yi a lokacinku, ƙasa da awa 5, kuma yana da certificate. A Amurka da Kanada kuɗinsa $49 a wata bayan gwaji kyauta na kwana 7. Ya dace da mutanen da suke son amfani da kayan AI a wurin aiki.",
            "AWS Certified AI Practitioner certification ce ta matakin farko ta Amazon Web Services (AWS): jarrabawa ta minti 90 mai tambayoyi 65, kuɗinta $100. Generative AI Leader ta Google Cloud ba ta da sharaɗin farko: minti 90, tambayoyi 50-60, $99, tana aiki shekara 3, kuma ana zana ta a intanet ko a cibiyar jarrabawa.",
            "Microsoft Certified: Azure AI Fundamentals yanzu tana amfani da jarrabawar AI-901, wadda aka sabunta a Afrilu 2026. Kuɗinta ya dogara da ƙasarku, makin cin jarrabawa 700 ne, kuma yanzu tana sa ran ɗan ilimin Python da Azure, don haka ta fi zama ta fasaha fiye da da. Microsoft yana ba da gwajin atisaye kyauta idan kun shiga asusu."
          ],
          words: [["Matakin farko (foundational)", "matakin shiga na jerin certification."], ["Sharaɗin farko (prerequisite)", "abin da dole ne ku samu ko ku sani kafin ku fara."]],
          slides: [
            { title: "Google AI Essentials", bullets: ["Kwas na Google a Coursera, ƙasa da awa 5", "Amurka/Kanada: $49 a wata bayan gwaji na kwana 7", "Certificate; amfani da AI a wurin aiki"] },
            { title: "AWS Certified AI Practitioner", bullets: ["Certification ta matakin farko ta AWS", "Minti 90, tambayoyi 65, $100"] },
            { title: "Google Cloud Generative AI Leader", bullets: ["Babu sharaɗin farko", "Minti 90, tambayoyi 50-60, $99", "Tana aiki shekara 3"] },
            { title: "Azure AI Fundamentals (AI-901)", bullets: ["An sabunta a Afrilu 2026; kuɗi ya bambanta bisa ƙasa", "Makin cin jarrabawa 700; tana sa ran ɗan Python", "Gwajin atisaye kyauta bayan shiga asusu"] }
          ],
          sources: [{ name: "Grow with Google: Google AI Essentials", url: "https://grow.google/ai-essentials/" }, { name: "AWS Certified AI Practitioner", url: "https://aws.amazon.com/certification/certified-ai-practitioner/" }, { name: "Google Cloud: Generative AI Leader", url: "https://cloud.google.com/learn/certification/generative-ai-leader" }, { name: "Microsoft Learn: Exam AI-901", url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-901/" }],
          tryIt: "Ku buɗe shafin hukuma na biyu daga cikin waɗannan takardun shaida. Ga kowacce, ku rubuta ainihin sunanta, mai bayarwa, kuɗi, tsawo da waɗanda take dacewa da su. Ku lura da duk abin da ya canja tun da aka rubuta wannan kwas.",
          youCanNow: "kwatanta takardun shaidar AI na masu farawa ta amfani da shafukansu na hukuma.",
          quickCheck: [
            { objective: "O2", q: "Wace takardar shaida a darasin ce kwas da kuke yi a lokacinku mai certificate, ba jarrabawa mai sa ido ba?", options: ["Google AI Essentials", "AWS Certified AI Practitioner", "Google Cloud Generative AI Leader", "Microsoft Azure AI Fundamentals (AI-901)"], answer: 0, why: "Google AI Essentials kwas ne a Coursera da kuke yi a lokacinku, kuma yana ƙarewa da certificate." },
            { objective: "O2", q: "Kun kasance sababbi ga AI kwata-kwata kuma kuna son amfani da kayan AI a aikin ofis. Wace ce ta fi rashin dacewa yanzu?", options: ["Gajeren kwas na AI na masu farawa", "Google AI Essentials", "Microsoft Azure AI Fundamentals (AI-901), wadda yanzu tana sa ran ɗan Python da Azure", "Horo kyauta na masu farawa tukuna"], answer: 2, why: "AI-901 yanzu tana sa ran ɗan ilimin Python da Azure, don haka ta fi zama ta fasaha." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Daidaita takardar shaida da aiki da kasafin kuɗi",
          minutes: 5,
          goal: "Zaɓi takardar shaida ɗaya ta amfani da tallace-tallacen aiki na gaske, kasafin kuɗinku da lokacinku.",
          text: [
            "Ku fara daga ayyuka, ba daga takardun shaida ba. Ku nemi ayyukan da kuke so, ku ƙirga waɗanne takardun shaida da ƙwarewa suke bayyana a tallace-tallacen. Idan da yawa suna ambaton wani dandalin cloud, takardar shaidar wannan dandalin za ta iya cancanta.",
            "Sannan ku kwatanta jimillar kuɗi (kuɗin jarrabawa, kuɗin sake zana ta, da kowane horo), lokacin shiryawa, da matakinku na yanzu. Idan kun kasance sababbi kwata-kwata, gajeren kwas na masu farawa tukuna zai iya hana ku rasa kuɗin jarrabawa da kuka fadi.",
            "Ku nemi taimakon biyan kuɗi. Shirye-shiryen horar da ma'aikata, American Job Centers (cibiyoyin aiki na Amurka), shirye-shiryen masu dawowa gida, tallafin tsoffin sojoji, ɗakunan karatu da wasu masu ɗaukar aiki za su iya biyan horo ko jarrabawa; wasu masu bayarwa suna ba da rangwame ko tallafin karatu. Ku tambaya kafin ku biya, kuma kada ku taɓa biyan wanda ya ce \"tabbas\" za ku ci ko yake sayar da amsoshin jarrabawa: zamba ce, kuma za ta iya sa a soke takardar shaidarku."
          ],
          steps: ["Ku nemo tallace-tallacen aiki biyar da kuke so.", "Ku ƙirga waɗanne takardun shaida da ƙwarewa suke ambato.", "Ku kwatanta jimillar kuɗi, lokaci da mataki na biyun farko.", "Ku tambayi shirinku na ma'aikata ko na masu dawowa gida game da biyan kuɗin.", "Ku zaɓi ɗaya."],
          words: [["Kuɗin sake zana jarrabawa (retake fee)", "abin da kuke biya don sake zana jarrabawa idan ba ku ci ba."], ["Tallafin karatu (financial aid)", "taimako wajen biyan kuɗin ilimi ko horo."]],
          slides: [
            { title: "Ku fara daga ayyuka", bullets: ["Ku nemo tallace-tallacen aiki biyar", "Ku ƙirga takardun shaidar da suke ambato"] },
            { title: "Ku kwatanta jimillar kuɗi", bullets: ["Kuɗin jarrabawa, sake zana ta, horo", "Lokaci da matakinku na yanzu"] },
            { title: "Ku nemi taimakon biya", bullets: ["Shirye-shiryen ma'aikata, masu dawowa gida, tsoffin sojoji", "Masu ɗaukar aiki, ɗakunan karatu, rangwamen masu bayarwa", "Kada ku taɓa biyan cin jarrabawa da aka ce \"tabbas\""] }
          ],
          tryIt: "Ku nemo tallace-tallacen aiki biyar da kuke so, ku jera takardun shaidar AI ko na fasaha da suke ambato. Ku zaɓi takardar shaida ɗaya, ku rubuta jimillar kuɗinta da wanda zai iya taimakawa wajen biyanta.",
          youCanNow: "zaɓar takardar shaida da ta dace da ayyuka na gaske, kasafin kuɗinku da lokacinku.",
          quickCheck: [
            { objective: "O3", q: "Me ke cikin jimillar kuɗin takardar shaida?", options: ["Kuɗin jarrabawa kawai", "Horo kawai", "Kuɗin jarrabawa, kowane kuɗin sake zana ta, da kowane horo", "Babu komai idan kun ci"], answer: 2, why: "Jimillar kuɗi ta haɗa da kuɗin jarrabawa, sake zana ta, da horo." },
            { objective: "O3", q: "Uku daga cikin tallace-tallacen aikinku biyar suna ambaton dandalin cloud iri ɗaya. Me za ku yi tunani a kai?", options: ["Takardar shaidar wannan dandalin, da tambayar shirin ma'aikata game da taimakon biya", "Kowace takardar shaida daga talla", "Sayen amsoshin jarrabawa don rage lokaci", "Barin takardun shaida gaba ɗaya"], answer: 0, why: "Ku fara daga tallace-tallacen aiki; dandalin da ake yawan ambato zai iya sa takardar shaidarsa ta cancanta." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Zaɓar takardar shaida da ta dace",
        questions: [
          { objective: "O1", q: "Mene ne babban bambanci tsakanin certificate da certification?", options: ["Babu bambanci", "Certificate koyaushe ta fi daraja", "Certification yawanci tana buƙatar cin jarrabawa mai sa ido", "Certification ba ta taɓa samun jarrabawa"], answer: 2, why: "Certification tana gwada ƙwarewa da jarrabawa mai sa ido." },
          { objective: "O2", q: "Bisa shafin AWS, kuɗin jarrabawar AWS Certified AI Practitioner shi ne:", options: ["$100", "$1,000", "Kyauta", "$10"], answer: 0, why: "AWS ya rubuta kuɗin $100." },
          { objective: "O2", q: "Shafin wace takardar shaida ne ya ce yanzu tana sa ran ɗan ilimin Python da Azure?", options: ["Google AI Essentials", "Babu ɗayansu da ke da shafi", "Katin masu sarrafa abinci", "Microsoft Azure AI Fundamentals (AI-901)"], answer: 3, why: "Shafin AI-901 ya lissafa sanin Python da Azure." },
          { objective: "O3", q: "Daga ina ya kamata ku fara idan kuna zaɓar takardar shaida?", options: ["Wadda ta fi tsada", "Tallace-tallacen aiki na gaske da kuke so", "Duk abin da baƙo ya ba da shawara", "Kowace talla"], answer: 1, why: "Tallace-tallacen aiki suna nuna abin da masu ɗaukar aiki suke so." },
          { objective: "O3", q: "Wani ya ce zai sayar muku da amsoshin jarrabawa da suka \"tabbatar\" za ku ci. Wannan:", options: ["Hanya ce mai wayo ta gajarta", "Zamba ce da za ta iya sa a soke takardar shaidarku", "An yarda da ita", "Horo ne kyauta"], answer: 1, why: "Sayen amsoshi satar amsa ce, kuma sau da yawa zamba ce." }
        ]
      }
    },
    {
      name: "Babi na 2: Shiryawa da cin jarrabawa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Karanta shafin jarrabawa na hukuma",
          minutes: 5,
          goal: "Ciro muhimman bayanai daga shafin jarrabawa na hukuma zuwa takardar bayanai mai shafi ɗaya.",
          text: [
            "Shafin jarrabawa na hukuma ne kaɗai majiyar da ya kamata ku amince da ita don bayanan jarrabawa. Ku nemi: ainihin suna da lambar jarrabawa (exam code), farashi, tsawo da yawan tambayoyi, makin cin jarrabawa, harsuna, yadda za ku zana ta (a intanet ko a cibiyar jarrabawa), ƙwarewar da ake auna da nauyinsu, da tsawon lokacin da takardar shaidar take aiki.",
            "Jerin ƙwarewar da ake auna (skills measured), wanda wani lokaci ake kira jagorar jarrabawa ko jagorar karatu, shi ne taswirarku. Idan wani batu shi ne kashi 40% na jarrabawa, ya cancanci kusan kashi 40% na lokacin karatunku.",
            "Ku duba sharuɗɗan ma: katin shaida da ake buƙata (sau da yawa katin shaida mai hoto na gwamnati da ke aiki, mai suna iri ɗaya da na rajistarku), dokokin ɗakin zana jarrabawa a intanet, wa'adin canja rana, da dokokin sake zana jarrabawa. Idan batun katin shaidarku yana da wuya, ku warware shi da wuri."
          ],
          steps: ["Ku buɗe shafin jarrabawa na hukuma na mai bayarwa.", "Ku rubuta suna, lambar jarrabawa, farashi, tsawo, tambayoyi da makin cin jarrabawa.", "Ku kwafi ƙwarewar da ake auna tare da kashi-kashinsu.", "Ku lura da dokokin katin shaida, zana jarrabawa da sake zana ta.", "Ku ajiye hanyar haɗin shafin da ranar da kuka duba."],
          words: [["Lambar jarrabawa (exam code)", "gajeriyar lambar jarrabawa, kamar AI-901."], ["Ƙwarewar da ake auna (skills measured)", "jerin batutuwan da jarrabawa take gwadawa, sau da yawa da kashi-kashi."], ["Makin cin jarrabawa (passing score)", "makin da kuke buƙata don ku ci."]],
          slides: [
            { title: "Ku amince da shafin hukuma", bullets: ["Suna, lambar jarrabawa, farashi", "Tsawo, tambayoyi, makin cin jarrabawa", "A intanet ko a cibiyar jarrabawa"] },
            { title: "Ƙwarewar da ake auna = taswirarku", bullets: ["Batutuwa da nauyinsu", "40% na jarrabawa = 40% na lokacin karatu"] },
            { title: "Ku duba sharuɗɗan da wuri", bullets: ["Katin shaida mai hoto da suna iri ɗaya", "Dokokin ɗaki a intanet", "Dokokin canja rana da sake zana jarrabawa"] }
          ],
          tryIt: "Ku yi takardar bayanai mai shafi ɗaya don takardar shaidar da kuka zaɓa daga shafinta na hukuma, har da ƙwarewar da ake auna da kashi-kashinsu, dokokin katin shaida, da ranar da kuka duba.",
          youCanNow: "karanta shafin jarrabawa na hukuma da mayar da shi takardar bayanai.",
          quickCheck: [
            { objective: "O4", q: "Mene ne jerin ƙwarewar da ake auna a shafin jarrabawa?", options: ["Jerin cibiyoyin jarrabawa", "Taswirarku ta abin da jarrabawar take gwadawa da yawan nauyin kowane batu", "Jerin waɗanda suka zana jarrabawar a baya", "Amsoshin jarrabawar"], answer: 1, why: "Jerin ƙwarewar da ake auna yana nuna kowane batu da nauyinsa a jarrabawar." },
            { objective: "O4", q: "Katin shaidarku yana da sunan iyali daban da wanda za ku yi rajista da shi. Me za ku yi?", options: ["Ku yi fatan babu wanda zai duba", "Ku yi amfani da katin shaidar aboki", "Ku tsallake dokokin katin shaida", "Ku warware shi da wuri, domin sunan katin shaida dole ya yi daidai da na rajista"], answer: 3, why: "Sau da yawa sunan katin shaida dole ya yi daidai da na rajista, don haka ku gyara shi da wuri." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Yin tsarin karatu da horo kyauta da AI",
          minutes: 6,
          goal: "Yi tsarin karatu na mako huɗu ta amfani da horo kyauta na hukuma, AI a matsayin malami, da gwaje-gwajen atisaye.",
          text: [
            "Yawancin masu bayarwa suna ba da horo kyauta. Microsoft Learn yana da hanyoyin koyo (learning paths) kyauta da gwajin atisaye kyauta don jarrabawa da yawa; AWS Skill Builder da Google ma suna ba da koyo kyauta. Ku fara a can kafin ku biya kowane abu.",
            "Ku yi amfani da AI a matsayin malami, ba don satar amsa ba. Ku tambaya: \"Ka bayyana [batu daga jerin ƙwarewa] da kalmomi masu sauƙi tare da misali na rayuwa ta gaske. Sannan ka gwada ni da tambayoyi biyar masu zaɓi, ka bayyana kurakuraina.\" Ku duba duk abin da bai yi daidai ba da horon hukuma, domin AI yana iya yin kuskure ko ya zama tsoho.",
            "Ku tsara makonni huɗu: makonni 1-3 ku karanta batutuwa bisa nauyinsu a jarrabawa, kaɗan kowace rana; mako na 4 don gwaje-gwajen atisaye da sake duba wuraren da kuke da rauni. Ku yi ƙoƙarin samun maki mai kyau a gwajin atisaye na hukuma kafin ku sa ranar jarrabawa ta gaske."
          ],
          steps: ["Ku jera ƙwarewar da ake auna da nauyinsu.", "Ku nemo horo kyauta na hukuma na kowanne.", "Ku tsara minti 30-60 a rana don makonni 1-3, batutuwa mafi nauyi da farko.", "Ku yi amfani da AI don bayani da gwada ku; ku duba da horon hukuma.", "Mako na 4: gwaje-gwajen atisaye da wuraren rauni."],
          words: [["Hanyar koyo (learning path)", "jerin darussa a tsari kan batu ɗaya."], ["Gwajin atisaye (practice test)", "samfurin jarrabawa da ke nuna yadda ta gaske take."]],
          slides: [
            { title: "Horo kyauta tukuna", bullets: ["Microsoft Learn, AWS Skill Builder, Google", "Gwaje-gwajen atisaye kyauta inda akwai"] },
            { title: "AI a matsayin malami", bullets: ["Bayani da kalmomi masu sauƙi da misalai", "Gwada ni ka bayyana kurakurai", "Ku duba da horon hukuma"] },
            { title: "Tsarin mako huɗu", bullets: ["Makonni 1-3: batutuwa bisa nauyi", "Mako na 4: gwaje-gwajen atisaye da wuraren rauni", "Ku sa rana idan makin atisaye ya yi kyau"] }
          ],
          tryIt: "Ku rubuta tsarin karatu na mako huɗu don takardar shaidarku. Sannan ku nemi mataimakin AI ya bayyana batu ɗaya daga jerin ƙwarewa ya gwada ku da tambayoyi biyar.",
          youCanNow: "yin tsarin karatu da horo kyauta, AI a matsayin malami, da gwaje-gwajen atisaye.",
          quickCheck: [
            { objective: "O5", q: "A tsarin mako huɗu, mako na 4 na menene?", options: ["Koyon sababbin batutuwa", "Hutawa", "Sa ranar jarrabawa ta biyu", "Gwaje-gwajen atisaye da sake duba wuraren rauni"], answer: 3, why: "Mako na 4 na gwaje-gwajen atisaye ne da wuraren rauni." },
            { objective: "O5", q: "AI ya bayyana wani batu ta wata hanya, amma horon hukuma ya faɗi wani abu daban. Me za ku yi?", options: ["Ku amince da AI", "Ku amince da horon hukuma", "Ku tsallake batun", "Ku sake tambayar AI har ya yarda"], answer: 1, why: "AI yana iya yin kuskure ko ya zama tsoho; horon hukuma ne majiya amintacciya." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Shiryawa don ranar jarrabawa da amfani da takardar shaidarku",
          minutes: 5,
          goal: "Shirya don ranar jarrabawa kuma ku saka sabuwar takardar shaidarku a CV ɗinku da shafukanku.",
          text: [
            "Kafin ranar jarrabawa, idan za ku zana ta a intanet, ku gwada na'urorinku: yawancin masu bayarwa suna da gwajin na'ura (system check). Ku share teburinku da ɗakinku kamar yadda dokokin suka ce. Don cibiyar jarrabawa, ku tsara hanyarku, ku isa da wuri da katin shaida da ya dace.",
            "A lokacin jarrabawa: ku karanta kowace tambaya sau biyu, ku amsa masu sauƙi da farko, ku yi alama a masu wuya ku dawo gare su, kuma kada ku bar kowace babu amsa sai dai idan dokoki sun ce amsar da ba daidai ba tana rage maki.",
            "Bayan kun ci, ku saka ta a CV ɗinku ƙarƙashin \"Certifications\" da ainihin sunanta, mai bayarwa da kwanan wata, kuma ku karɓi kowace lambar yabo ta intanet (digital badge) da mai bayarwa yake bayarwa don rabawa a intanet. Idan ba ku ci ba, ku karanta rahoton maki, ku karanta wuraren rauni, ku yi amfani da dokar sake zana jarrabawa. Mutane da yawa suna ci a ƙoƙari na biyu."
          ],
          steps: ["Ku yi gwajin na'ura na intanet ko ku tsara hanyarku.", "Ku shirya katin shaidarku da ɗakinku kamar yadda dokoki suka buƙata.", "A jarrabawa, ku karanta sau biyu, masu sauƙi da farko, ku yi alama a masu wuya.", "Bayan kun ci, ku saka ta a CV da ainihin suna, mai bayarwa da kwanan wata.", "Idan ba ku ci ba, ku karanta wuraren rauni daga rahoton maki ku sake zana ta."],
          words: [["Gwajin na'ura (system check)", "gwaji cewa kwamfutarku, kyamara da intanet suna aiki don jarrabawar intanet."], ["Lambar yabo ta intanet (digital badge)", "hoto a intanet da ke tabbatar da kun sami takardar shaida."], ["Rahoton maki (score report)", "sakamakon da ke nuna yadda kuka yi a kowane sashe na jarrabawa."]],
          slides: [
            { title: "Kafin ranar jarrabawa", bullets: ["A intanet: ku yi gwajin na'ura", "Cibiyar jarrabawa: ku tsara hanya, ku isa da wuri", "Katin shaida da ya dace, ɗaki a share"] },
            { title: "A lokacin jarrabawa", bullets: ["Ku karanta kowace tambaya sau biyu", "Masu sauƙi da farko; ku yi alama a masu wuya", "Kada ku bar wata babu amsa"] },
            { title: "Bayan jarrabawa", bullets: ["Kun ci: ku saka ta a CV ku karɓi lambar yabo", "Ba tukuna ba: ku karanta wuraren rauni ku sake zana ta"] }
          ],
          tryIt: "Aikin ƙarshe: ku kammala takardar bayananku da tsarin karatunku na mako huɗu, ku yi gwajin atisaye na hukuma ɗaya ko gwajin AI, ku sa ranar fara karatu ko ranar jarrabawa. Ku rubuta yadda takardar shaidar za ta bayyana a CV ɗinku.",
          youCanNow: "zaɓa, shirya wa, da amfani da takardar shaidar AI da ta dace da burin aikinku.",
          quickCheck: [
            { objective: "O6", q: "Me ya kamata ku yi kafin jarrabawa mai sa ido ta intanet?", options: ["Ku yi gwajin na'ura na mai bayarwa ku shirya ɗakinku", "Ku sauko da amsoshin jarrabawa", "Ku gayyaci aboki ya taimaka", "Ku yi amfani da kowane katin shaida da kuke da shi"], answer: 0, why: "Gwajin na'ura da ɗakin da aka shirya bisa dokoki suna hana matsaloli a ranar jarrabawa." },
            { objective: "O6", q: "Kun ci. Ta yaya za ku rubuta ta a CV ɗinku?", options: ["\"Wani abu na AI\"", "Alamar mai bayarwa kawai", "Ƙarƙashin Certifications, da ainihin suna, mai bayarwa da kwanan wata", "Ku bar ta har sai wani ya tambaya"], answer: 2, why: "Ku rubuta ainihin suna, mai bayarwa da kwanan wata ƙarƙashin Certifications." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Shiryawa da cin jarrabawa",
        questions: [
          { objective: "O4", q: "Mene ne majiya mafi aminci don farashi da tsarin jarrabawa?", options: ["Rubutu a kafofin sada zumunta", "Amsar hira da AI", "Tunanin aboki", "Shafin jarrabawa na hukuma na mai bayarwa"], answer: 3, why: "Shafukan hukuma suna da bayanan yanzu." },
          { objective: "O4", q: "Wani batu shi ne 40% na jarrabawa. Nawa ne lokacin karatu ya kamata ya samu?", options: ["Kusan 40%", "Babu", "5%", "Duka"], answer: 0, why: "Lokacin karatu ya kamata ya bi nauyin jarrabawa." },
          { objective: "O5", q: "Ta yaya ya kamata ku yi amfani da AI yayin karatu?", options: ["Don ya zana jarrabawar a madadinku", "Don nemo amsoshin da aka fallasa", "A matsayin malami da ke bayani da gwada ku, kuna dubawa da horon hukuma", "Kada ku yi amfani da shi kwata-kwata"], answer: 2, why: "AI zai iya koyarwa, amma dole ku duba shi, kuma kada ku taɓa satar amsa." },
          { objective: "O6", q: "Me ya kamata ku yi kafin jarrabawa mai sa ido ta intanet?", options: ["Babu komai", "Ku gayyaci abokai su taimaka", "Ku buɗe rubuce-rubuce a teburinku", "Ku yi gwajin na'ura na mai bayarwa"], answer: 3, why: "Gwajin na'ura yana hana matsalolin fasaha." },
          { objective: "O6", q: "Ba ku ci ba. Mene ne mataki mafi kyau na gaba?", options: ["Ku haƙura har abada", "Ku sayi amsoshin jarrabawa", "Ku karanta wuraren rauni daga rahoton maki ku sake zana ta", "Ku yi ƙarya a CV ɗinku"], answer: 2, why: "Mutane da yawa suna ci a ƙoƙari na biyu da karatu mai mayar da hankali." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Takardun Shaidar AI: Wacce Za Ku Samu da Yadda Za Ku Shirya",
    questions: [
      { objective: "O1", q: "Takardar kammala kwas (certificate) tana nuna:", options: ["Kun ci jarrabawa mai sa ido", "Kun gama wani kwas", "Kuna da lasisin aikin lauya", "Babu komai"], answer: 1, why: "Certificate tana nuna kammala kwas." },
      { objective: "O1", q: "Jarrabawa mai sa ido ita ce:", options: ["Wadda mutum ko kyamara ke kallo don hana satar amsa", "Gwaji da littafi a buɗe tare da abokai", "Bincike (survey)", "Hirar neman aiki"], answer: 0, why: "Sa ido yana sa jarrabawar ta kasance mai adalci." },
      { objective: "O1", q: "Shin takardar shaida tana tabbatar da samun aiki?", options: ["Eh, koyaushe", "Ranar Litinin kawai", "A'a, ku haɗa ta da atisaye na gaske da CV mai ƙarfi", "Sai idan tana da tsada"], answer: 2, why: "Takardun shaida suna taimakawa amma ba sa tabbatar da aiki." },
      { objective: "O2", q: "Bisa shafin Google, a wane dandali ake ba da Google AI Essentials?", options: ["Coursera", "Banki", "Tashar talabijin", "Kamfanin layin waya"], answer: 0, why: "Google yana ba da shi a Coursera." },
      { objective: "O2", q: "Bisa Google, tsawon kwas ɗin Google AI Essentials nawa ne?", options: ["Shekara huɗu", "Minti biyar", "Zangon karatu biyu", "Ƙasa da awa 5"], answer: 3, why: "Google ya ce ƙasa da awa 5 ne, kuma kuna yi a lokacinku." },
      { objective: "O2", q: "Tsawon jarrabawar AWS Certified AI Practitioner nawa ne?", options: ["Kwana 3", "Awa 8", "Minti 10", "Minti 90"], answer: 3, why: "AWS ya rubuta minti 90." },
      { objective: "O2", q: "Wane sharaɗin farko ne Generative AI Leader ta Google Cloud ta lissafa?", options: ["Digiri a kimiyyar kwamfuta", "Babu", "Shekara biyar na rubuta code", "Wata certification ta Google"], answer: 1, why: "Google ya ce babu sharaɗin farko." },
      { objective: "O2", q: "Bisa Google Cloud, har yaushe certification ta Generative AI Leader take aiki?", options: ["Har abada", "Wata 1", "Shekara 10", "Shekara 3"], answer: 3, why: "Google ya rubuta tana aiki shekara 3." },
      { objective: "O2", q: "Jarrabawar Microsoft Certified: Azure AI Fundamentals yanzu ita ce:", options: ["AI-901", "AZ-104", "Babu jarrabawa", "PMP"], answer: 0, why: "Microsoft ya lissafa AI-901 a matsayin jarrabawar da ake buƙata." },
      { objective: "O2", q: "Farashin jarrabawar Azure AI Fundamentals:", options: ["Koyaushe kyauta ne", "$5 ne a ko'ina", "Ya dogara da ƙasar da kuke zana ta", "Ana biya da katin kyauta"], answer: 2, why: "Microsoft yana sa farashin jarrabawa bisa ƙasa ko yanki." },
      { objective: "O4", q: "Me yasa za ku sake duba shafukan hukuma kafin ku biya?", options: ["Shafuka ba sa canjawa", "Don ɓata lokaci", "Ba a buƙata", "Sunaye, farashi da bayanai suna canjawa"], answer: 3, why: "Ana sabunta takardun shaida sau da yawa." },
      { objective: "O3", q: "Idan kuna zaɓar takardar shaida, ku fara da:", options: ["Alamar da ta fi ƙyalli", "Jarrabawa mafi tsawo", "Tallace-tallacen aiki na ayyukan da kuke so", "Zaɓi kawai ba tare da tunani ba"], answer: 2, why: "Buƙatun masu ɗaukar aiki ne ke jagorantar zaɓin." },
      { objective: "O3", q: "Jimillar kuɗin takardar shaida ta haɗa da:", options: ["Kuɗin jarrabawa kawai", "Kuɗin jarrabawa, sake zana ta da horo", "Babu komai", "Kuɗin hayar gidanku"], answer: 1, why: "Ku tsara don dukkan kuɗaɗe." },
      { objective: "O3", q: "Wane ne zai iya taimakawa wajen biyan horo ko jarrabawa?", options: ["Shirye-shiryen ma'aikata, na masu dawowa gida ko na tsoffin sojoji, ko mai ɗaukar aiki", "Babu kowa har abada", "'Yan damfara", "Wani baƙo da ya kira"], answer: 0, why: "Shirye-shirye da yawa suna biyan kuɗin horo." },
      { objective: "O4", q: "Jerin ƙwarewar da ake auna shi ne:", options: ["Jerin ayyukan da ake ɗauka", "Amsoshin jarrabawa", "Taswirarku ta abin da za ku karanta", "Ba dole a karanta ba"], answer: 2, why: "Yana nuna abin da jarrabawar take gwadawa." },
      { objective: "O4", q: "Wace matsalar katin shaida ya kamata ku warware da wuri?", options: ["Tabbatar cewa katin shaidarku mai hoto yana da suna iri ɗaya da na rajistarku", "Launin da kuka fi so", "Murfin wayarku", "Rubutun imel ɗinku"], answer: 0, why: "Rashin daidaiton katin shaida zai iya hana ku zana jarrabawa." },
      { objective: "O5", q: "A ina ya kamata ku fara nemo horo?", options: ["Makarantun horo masu tsada marasa hukuma kawai", "Shafukan amsoshin da aka fallasa", "Babu inda", "Horo kyauta na hukuma daga mai bayarwa"], answer: 3, why: "Horo kyauta na hukuma yana dacewa da jarrabawar." },
      { objective: "O5", q: "AI ya bayyana wani batu daban da horon hukuma. Ya kamata ku:", options: ["Amince da AI", "Amince da horon hukuma", "Tsallake batun", "Kai ƙarar mai bayarwa"], answer: 1, why: "AI yana iya yin kuskure ko ya zama tsoho." },
      { objective: "O6", q: "A lokacin jarrabawa, dabara mai kyau ita ce:", options: ["Ɓata dukkan lokacinku kan tambaya ta 1", "Amsa tambayoyi masu sauƙi da farko ku yi alama a masu wuya", "Barin da yawa babu amsa", "Yin hasashe ba tare da karantawa ba"], answer: 1, why: "Wannan yana amfani da lokacinku da kyau." },
      { objective: "O6", q: "Bayan kun ci, ku rubuta takardar shaidar a CV ɗinku da:", options: ["Maki na ƙarya", "\"Abubuwan AI\" kawai", "Babu komai", "Ainihin suna, mai bayarwa da kwanan wata"], answer: 3, why: "Ainihin bayanai ana iya tabbatar da su, kuma suna nuna ƙwarewa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      5,
      9,
      10,
      11,
      13,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Takardar shaida ta dace da aiki",
        objective: "O3",
        notYet: "Takardar shaidar ba ta da alaƙa da tallar aiki ta gaske.",
        meets: "An zaɓi takardar shaida ɗaya kuma an haɗa ta da tallar aiki ta gaske da mai koyo yake so.",
        exceeds: "An kwatanta zaɓi biyu ta jimillar kuɗi, lokaci da mataki, kuma an tambayi wani shiri game da taimakon biya."
      },
      {
        name: "Bayanan hukuma",
        objective: "O4",
        notYet: "Bayanai sun ɓace ko sun fito daga wani wuri ba shafin hukuma ba.",
        meets: "Ainihin suna, mai bayarwa, kuɗi, tsawo da tsari, ƙwarewar da ake auna, dokokin katin shaida da tsawon lokacin aiki, daga shafin hukuma.",
        exceeds: "Ya haɗa da hanyar haɗin shafin, ranar da aka duba da dokar sake zana jarrabawa."
      },
      {
        name: "Tsarin karatu na mako huɗu",
        objective: "O5",
        notYet: "Babu tsari, ko babu gwajin atisaye.",
        meets: "Makonni huɗu da horo kyauta na hukuma, batutuwa mafi nauyi da farko, tare da aƙalla gwajin atisaye ɗaya.",
        exceeds: "Ya haɗa da prompts na AI a matsayin malami da dubawa da horon hukuma."
      },
      {
        name: "An sa rana kuma an shirya",
        objective: "O6",
        notYet: "Babu zaman atisaye ko ranar jarrabawa.",
        meets: "An sa ranar zaman atisaye ko jarrabawa, kuma an san buƙatun katin shaida.",
        exceeds: "An yi gwajin na'ura ko an tsara hanya, kuma akwai bayani kan yadda takardar shaidar za ta bayyana a CV."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka yi gwajin atisaye ko suka sa ranar jarrabawa cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka sami takardar shaidar cikin kwanaki 90, da yawan waɗanda suka sami taimakon biyan kuɗinta",
      "Masu koyo da suka saka takardar shaidar a CV kuma suka nemi aikin da ya ambace ta"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani ko kwamfuta mai intanet; kwamfuta mai dacewa da ɗaki shiru don jarrabawar intanet",
      "Horo kyauta na hukuma (kamar Microsoft Learn, AWS Skill Builder ko koyo kyauta na Google)",
      "Mataimakin AI kyauta don koyarwa da gwaje-gwaje",
      "Takarda da alƙalami, ko takarda a kwamfuta, don takardar bayanai da tsarin karatu",
      "Kusan minti 60 don darussa da gwaje-gwaje, tare da makonni huɗu na karatu"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku yi babi ɗaya a kowane zama; ku buɗe shafin jarrabawa na hukuma ɗaya tare a allon da kowa yake gani.",
      "Ku tunatar da masu koyo cewa farashi da bayanan jarrabawa a darussan za su iya canjawa; koyaushe ku sake duba shafin hukuma kafin biya.",
      "Ku taimaka wa masu koyo su duba da wuri ko katin shaidarsu mai hoto ya cika dokokin jarrabawa, kuma ku haɗa su da taimakon katin shaida idan ana buƙata.",
      "Ku haɗa masu koyo da American Job Centers, shirye-shiryen ma'aikata ko na masu dawowa gida da za su iya biyan kuɗin jarrabawa; ku gargaɗe su game da duk mai sayar da amsoshin jarrabawa.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
