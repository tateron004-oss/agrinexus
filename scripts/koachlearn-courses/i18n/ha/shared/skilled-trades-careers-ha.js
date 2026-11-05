"use strict";

// Koach Learn course, Hausa (ha) translation of shared/skilled-trades-careers.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "skilled-trades-careers-ha",
  lang: "ha",
  translationOf: "skilled-trades-careers",
  category: "Re-Entry",
  name: "Fara Sana'a a Ayyukan Hannu na Ƙwarewa",
  skills: "Kwatanta sana'o'in hannu, Duba albashi da horo a shafukan hukuma, Fahimtar koyon sana'a (apprenticeship) da shirin shiri gare shi, Sanin matakan lasisi da takardar shaida, Aiki lafiya da kayan aiki, Nemo shiri da neman shiga",
  outcome: "zaɓar sana'ar hannu da ta dace da ku, duba ainihin albashinta da hanyar horonta a shafukan hukuma, nemo shirin koyon sana'a (apprenticeship) ko shirin shiri gare shi kusa da ku, da yin tsari mataki-mataki don neman shiga, har da hanyoyin dama ta biyu idan kuna da tarihin laifi.",
  about: [
    "Sana'o'in hannu na ƙwarewa (skilled trades) ayyuka ne na hannu kamar mai aikin wutar lantarki, mai aikin famfo, ma'aikacin HVAC (dumama da sanyaya ɗaki), mai walda, mai saka hasken rana (solar), kafinta da direban babbar mota. Da yawa suna barin ku samu kuɗi yayin da kuke koyo, ba tare da digiri na jami'a na shekaru huɗu ba.",
    "Wannan kwas ɗin na matasa ne masu zaɓar hanya, tsoffin sojoji masu komawa aikin farar hula, mutanen da ke dawowa gida daga gidan yari, da duk wanda ke shirye ya yi aiki da hannunsa. Za ku kwatanta sana'o'i, ku koyi yadda koyon sana'a da lasisi suke aiki, ku koyi kayan aiki da al'adun tsaro na farko, sannan ku gina tsari don shiga wani shiri.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta darasin, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Dokoki, albashi da lasisi sun bambanta daga jiha zuwa jiha kuma suna canjawa, don haka kowane darasi yana nuna muku wurin hukuma da za ku duba."
  ],
  finalTask: "Ku yi \"Tsarin Fara Sana'a\" (Trade Start Plan) mai shafi ɗaya don sana'a ɗaya: yadda aikin yake, matsakaicin albashinsa (median pay) da makomar aikinsa daga bls.gov/ooh, lasisi ko takardar shaidar da yake buƙata a jiharku, shirye-shiryen koyon sana'a ko na shiri gare shi guda biyu kusa da ku daga apprenticeship.gov ko cibiyar aiki ta yankinku, kayan kariya da kayan aiki na farko da za ku buƙata, duk wani taimakon dama ta biyu da ya shafe ku, da matakanku uku na farko tare da ranaku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matasa masu zaɓar hanya, tsoffin sojoji masu komawa aikin farar hula, mutanen da ke dawowa gida daga gidan yari, da duk wanda ke shirye ya yi aikin hannu a sana'a kamar wutar lantarki, famfo, HVAC, walda, saka hasken rana, kafinta ko tuƙin babbar mota.",
    startingPoint: "Suna son aikin hannu, kuma wataƙila suna da gogewa daga ayyuka, aikin soja, wasanni ko shirye-shiryen da suka yi a gidan yari. Yawancinsu ba su san ainihin albashin sana'o'i ba, yadda koyon sana'a da lasisi suke aiki, ko yadda ake nemo shiri kusa da su.",
    gap: "Sana'o'in hannu suna ba da horo da ake biya da kyakkyawar sana'a ba tare da digiri na shekaru huɗu ba, amma mutane suna rasa su ko su ɓata kuɗi a horon da bai dace ba. Masu koyo suna buƙatar zaɓar sana'a, duba albashinta da hanyarta a shafukan hukuma, da tsara yadda za su shiga shiri, har da hanyoyin dama ta biyu idan suna da tarihin laifi.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Albashi, lasisi da dokoki sun bambanta daga jiha zuwa jiha kuma suna canjawa; masu koyo suna duba shafukan hukuma (bls.gov/ooh, apprenticeship.gov, hukumomin lasisi na jiha)",
      "Na'urori: waya ko kwamfutar ɗakin karatu mai intanet",
      "Masu koyo masu tarihin laifi suna tambayar hukumar lasisi ta jiha kafin su biya kuɗin horo",
      "Lokaci: darussa na kusan minti biyar, da lokacin bincike"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku sana'o'i bakwai da aka saba da su, da abubuwan da kuke so da iyakokinku", action: "bayyana abin da kowace sana'a take yi da zaɓar biyu da suka dace da ku", standard: "tare da dalili ɗaya ga kowane zaɓi" },
    { id: "O2", condition: "Ta amfani da littafin Occupational Outlook Handbook a bls.gov/ooh", action: "duba matsakaicin albashin sana'a, horon da aka saba, buƙatun lasisi da makomar aikinta", standard: "tare da rubuta shekarar da albashin yake" },
    { id: "O3", condition: "Don sana'arku ta farko", action: "bayyana yadda koyon sana'arta, shirin shiri gare shi da lasisi ko takardar shaidarta suke aiki", standard: "tare da nemo shafin hukuma na hukumar jiha" },
    { id: "O4", condition: "Don sana'arku ta farko", action: "jera kayan kariya, al'adun tsaro da kayan aiki na farko da aikin yake buƙata", standard: "an kwatanta da jerin kayan aiki na hukuma na wani shiri" },
    { id: "O5", condition: "Idan ku ko wanda kuke taimaka wa yana da tarihin laifi", action: "nemo shirye-shiryen dama ta biyu da tsara tambayoyi ga hukumar lasisi", standard: "tare da ambaton Federal Bonding Program da Work Opportunity Tax Credit" },
    { id: "O6", condition: "Ta amfani da apprenticeship.gov ko cibiyar aiki ta yankinku", action: "nemo shirye-shirye biyu kusa da ku da rubuta matakanku uku na farko don neman shiga", standard: "tare da rana ga kowane mataki da ranakun neman shiga na kowane shiri" }
  ],
  chapters: [
    {
      name: "Babi na 1: Zaɓar sana'a",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mene ne sana'o'in hannu na ƙwarewa",
          minutes: 5,
          goal: "Bayyana sana'o'i bakwai da aka saba da su, da zaɓar biyu da suka dace da ku.",
          text: [
            "Masu aikin wutar lantarki (electricians) suna saka da gyara wayoyin lantarki, fitilu da wuta a gidaje da gine-gine. Masu aikin famfo (plumbers) suna saka da gyara bututu, injin dumama ruwa da magudanan ruwa. Ma'aikatan HVAC suna aiki kan dumama ɗaki, shigar iska, sanyaya ɗaki (AC) da firiji. Masu walda (welders) suna haɗa ƙarfe da zafi don gine-gine, jiragen ruwa, bututun mai da masana'antu.",
            "Masu saka hasken rana (solar installers) suna saka faranti na hasken rana a kan rufi da ƙasa kuma suna haɗa su. Kafintoci suna gini da gyara kwarangwal na gini, benaye, matakala da kabad. Direbobin manyan motoci masu CDL suna ɗaukar kaya cikin gari ko a faɗin ƙasa da lasisin tuƙin kasuwanci.",
            "Ku yi tunani kan abin da ya dace da ku. Kuna son aiki a waje ko a ciki? A sama, ko a ƙasa? Kuna son lissafi da warware matsaloli? Za ku iya yin kwanaki nesa da gida, kamar yadda direbobin tafiya mai nisa sukan yi? Kuna son gyara wa abokan ciniki abubuwa ko gina sababbin abubuwa? Amsoshinku suna nuna muku sana'a.",
            "Ƙwarewa da yawa suna tafiya tare da ku. Aikin injiniya da jigilar kaya a soja, ladabi da aiki tare a wasanni, da ayyuka ko shirye-shiryen horo da aka yi a gidan yari (gyaran gini, kicin, sana'o'in gini) duk suna da amfani."
          ],
          words: [["Sana'ar hannu ta ƙwarewa (skilled trade)", "aikin da ke buƙatar horo na musamman na hannu, kamar mai aikin wutar lantarki ko mai walda."], ["HVAC", "heating, ventilation and air conditioning: dumama ɗaki, shigar iska da sanyaya ɗaki."], ["CDL", "commercial driver's license: lasisin tuƙin kasuwanci, wanda ake buƙata don tuƙa manyan motoci da bas."]],
          slides: [
            { title: "Ayyuka a cikin gine-gine", bullets: ["Mai aikin wutar lantarki: wayoyi, fitilu da wuta", "Mai aikin famfo: bututu, injin dumama ruwa, magudanan ruwa", "HVAC: dumama, sanyaya ɗaki, firiji"] },
            { title: "Gini da jigila", bullets: ["Mai walda: yana haɗa ƙarfe da zafi", "Mai saka hasken rana: yana saka faranti yana haɗa su", "Kafinta: kwarangwal, benaye, matakala, kabad", "Direban CDL: yana ɗaukar kaya da babbar mota"] },
            { title: "Me ya dace da ku?", bullets: ["A ciki ko a waje? A sama ko a ƙasa?", "Lissafi da warware matsaloli?", "Gida kowane dare, ko nesa na kwanaki?"] },
            { title: "Ƙwarewarku tana tafiya tare da ku", bullets: ["Aikin injiniya da jigilar kaya a soja", "Ladabi da aiki tare a wasanni", "Ayyuka da shirye-shiryen horo a gidan yari"] }
          ],
          tryIt: "Ku amsa tambayoyin \"Me ya dace da ku?\" a rubuce. Sannan ku zaɓi sana'o'i biyu da suka fi dacewa da amsoshinku, ku rubuta jimla ɗaya ga kowanne kuna faɗin dalili.",
          youCanNow: "bayyana sana'o'in hannu da aka saba da su, da zaɓar biyu da suka dace da yadda kuke son aiki.",
          quickCheck: [
            { objective: "O1", q: "Me mai aikin wutar lantarki yake yawan aiki a kai?", options: ["Wayoyin lantarki, wuta da fitilu", "Bututun ruwa da magudanan ruwa", "Injinan dumama da sanyaya ɗaki", "Haɗa ƙarfe da zafi"], answer: 0, why: "Masu aikin wutar lantarki suna saka da gyara wayoyi, wuta da fitilu." },
            { objective: "O1", q: "Kuna son warware matsaloli, ba ku damu da wurare masu matsi ba, kuma kuna son aiki a kusa. Ta yaya za ku zaɓa?", options: ["Ku zaɓi sana'ar da aboki ya zaɓa", "Ku zaɓi wadda ta fi kyakkyawan suna", "Ku kwatanta sana'o'i da amsoshinku ku zaɓi biyu da suka dace", "Ku zaɓi tuƙin mota mai nisa saboda yana biya"], answer: 2, why: "Daidaita sana'o'i da abubuwan da kuke so da iyakokinku yana ba da zaɓi mafi dacewa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Duba albashi da horo a shafukan hukuma",
          minutes: 5,
          goal: "Duba albashin sana'a, horonta da makomar aikinta a littafin Occupational Outlook Handbook.",
          text: [
            "Kada ku amince da lambobin albashi daga talla ko kafofin sada zumunta. Hukumar Kididdigar Ma'aikata ta Amurka (US Bureau of Labor Statistics) tana wallafa littafin Occupational Outlook Handbook a bls.gov/ooh. Kyauta ne, kuma ana sabunta shi akai-akai.",
            "Kowane aiki yana da shafin bayani mai shafuka (tabs). \"Pay\" yana nuna matsakaicin albashi (median pay), wato rabin ma'aikata suna samun fiye da shi, rabi kuma ƙasa da shi. \"How to Become One\" yana nuna horon, kamar koyon sana'a, da ko ana buƙatar lasisi. \"Job Outlook\" yana nuna ko ana sa ran yawan ayyuka zai ƙaru. \"State and Area Data\" yana nuna albashi a inda kuke zaune.",
            "Misali, shafin masu aikin wutar lantarki ya ce yawancinsu suna koyo a shirin koyon sana'a na shekaru 4 ko 5, kuma yawancin jihohi suna buƙatar su sami lasisi. Albashin farko na mai koyon sana'a ya fi matsakaicin ƙasa, kuma yawanci yana ƙaruwa yayin da ƙwarewarku take ƙaruwa.",
            "Mataimakan AI za su iya taimakawa wajen bayanin kalmomin da ke waɗannan shafuka, amma ku ɗauki lambobi daga shafin hukuma, ba daga AI ba."
          ],
          steps: ["Ku je bls.gov/ooh.", "Ku nemi sana'ar, misali \"electricians\" ko \"plumbers\".", "Ku buɗe shafin bayanin ku karanta shafin Pay: ku rubuta matsakaicin albashi da shekararsa.", "Ku karanta How to Become One: ku rubuta horon da lasisin.", "Ku karanta Job Outlook da State and Area Data."],
          words: [["Matsakaicin albashi (median pay)", "albashin tsakiya: rabin ma'aikata suna samun fiye da shi, rabi kuma ƙasa da shi."], ["Makomar aiki (job outlook)", "ko ana sa ran yawan ayyuka a wani fanni zai ƙaru ko ya ragu."], ["BLS", "US Bureau of Labor Statistics: ofishin gwamnatin Amurka da ke tattara bayanan ayyuka da albashi."]],
          slides: [
            { title: "Ku yi amfani da littafin hukuma", bullets: ["bls.gov/ooh: kyauta kuma ana sabunta shi akai-akai", "Ba talla ko saƙonnin kafofin sada zumunta ba"] },
            { title: "Ku karanta kowane shafin bayani", bullets: ["Pay: matsakaicin albashi", "How to Become One: horo da lasisi", "Job Outlook da State and Area Data"] },
            { title: "Misali: masu aikin wutar lantarki", bullets: ["Yawancinsu suna koyo a shirin koyon sana'a na shekaru 4 ko 5", "Yawancin jihohi suna buƙatar lasisi", "Albashin mai koyo yawanci yana ƙaruwa da ƙwarewa"] },
            { title: "AI yana bayani, ba ya ba da lambobi", bullets: ["Ku nemi AI ya bayyana kalmomi masu wuya", "Ku ɗauki lambobi daga shafin hukuma"] }
          ],
          sources: [
            { name: "US Bureau of Labor Statistics: Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" },
            { name: "Occupational Outlook Handbook: Masu aikin wutar lantarki (Electricians)", url: "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm" }
          ],
          tryIt: "Ku duba sana'o'inku biyu daga Darasi na 1 a bls.gov/ooh. Ga kowacce, ku rubuta matsakaicin albashi da shekarar da yake, horon da aka saba, ko ana buƙatar lasisi, da makomar aikinta.",
          youCanNow: "nemo ainihin matsakaicin albashin sana'a, hanyar horonta da makomar aikinta a littafin hukuma.",
          quickCheck: [
            { objective: "O2", q: "Me makomar aiki (job outlook) take faɗa muku?", options: ["Launin kayan aiki", "Yadda ake sa ran ayyuka a sana'ar za su ƙaru", "Albashin ma'aikaci ɗaya", "Inda makarantar horo take"], answer: 1, why: "Makomar aiki tana nuna ko ana sa ran yawan ayyuka zai ƙaru ko ya ragu." },
            { objective: "O2", q: "Wani bidiyo ya ce duk masu aikin famfo suna samun kuɗi mai yawan gaske. Me za ku yi?", options: ["Ku yarda saboda ya shahara", "Ku tambayi masu sharhi a bidiyon", "Ku zaɓi aikin famfo nan take", "Ku duba matsakaicin albashi da shekararsa a bls.gov/ooh"], answer: 3, why: "Bayanan albashi na hukuma a bls.gov/ooh su ne wurin dubawa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Koyon sana'a, shirin shiri gare shi, da lasisi",
          minutes: 6,
          goal: "Bayyana yadda koyon sana'a, shirin shiri gare shi da lasisi suke aiki don sana'arku.",
          text: [
            "Registered Apprenticeship (koyon sana'a mai rajista) aiki ne da ake biya tare da horo. Shafin apprenticeship.gov na Ma'aikatar Ƙwadago ta Amurka ya ce masu koyo suna samun gogewar aiki da ake biya tare da jagora (mentor), albashin da ke ƙaruwa yayin da ƙwarewarsu take ƙaruwa, da takardar shaida da ake amincewa da ita a ƙasa baki ɗaya a ƙarshe. Kuna koyo a wurin aiki da cikin aji.",
            "Shirin shiri gare shi (pre-apprenticeship) yana shirya ku don shiga koyon sana'a. Yana iya ɗaukar makonni kaɗan zuwa watanni kaɗan, kuma wataƙila ana biya ko ba a biya. Sau da yawa yana koyar da lissafi na farko, amfani da kayan aiki, tsaro, da shirin aiki, kuma yana iya taimaka a karɓe ku. Shirye-shiryen masu dawowa gida da kwalejojin al'umma (community colleges) da yawa suna gudanar da su.",
            "Lasisi da takardun shaida sun bambanta bisa sana'a da jiha. Masu aikin wutar lantarki da na famfo yawanci suna buƙatar lasisin jiha ko na yanki bayan horonsu. Ma'aikatan HVAC da ke taɓa sinadaran sanyaya (refrigerants) dole su sami takardar shaidar EPA Section 608. Sababbin direbobin manyan motoci dole su kammala horon direba na matakin farko tare da mai horarwa da ke cikin Training Provider Registry na gwamnatin tarayya kafin su yi jarabawar CDL. Masu walda da masu saka hasken rana sukan sami takardun shaida na masana'antu da masu ɗaukar aiki suke nema.",
            "Tsoffin sojoji: hukumar VA ta ce ana iya amfani da tallafin GI Bill don yawancin shirye-shiryen koyon sana'a da horo a wurin aiki, kuma Helmets to Hardhats yana haɗa tsoffin sojoji da shirye-shiryen koyon sana'o'in gini."
          ],
          words: [["Registered Apprenticeship", "aiki da ake biya tare da horo, wanda Ma'aikatar Ƙwadago ko jiha ta amince da shi, kuma yana ƙarewa da takardar shaida da ake amincewa da ita."], ["Pre-apprenticeship (shirin shiri gare shi)", "gajeren shiri da ke shirya ku don shiga koyon sana'a."], ["Lasisi", "izinin hukuma daga jiha ko birni don yin wani aiki, kamar aikin wutar lantarki."], ["Takardar shaida (certification)", "shaidar cewa kun ci jarabawa ko horo don wata ƙwarewa."]],
          slides: [
            { title: "Registered Apprenticeship", bullets: ["Aiki da ake biya tare da jagora", "Albashi yana ƙaruwa yayin da ƙwarewarku take ƙaruwa", "Takardar shaida da ake amincewa da ita a ƙasa baki ɗaya"] },
            { title: "Shirin shiri gare shi (pre-apprenticeship)", bullets: ["Makonni kaɗan zuwa watanni kaɗan", "Lissafi, kayan aiki, tsaro, shirin aiki", "Yana taimaka muku shiga koyon sana'a"] },
            { title: "Lasisi da takardun shaida", bullets: ["Wutar lantarki, famfo: lasisin jiha ko na yanki", "HVAC: EPA Section 608 don sinadaran sanyaya", "CDL: horon matakin farko tare da mai horarwa mai rajista"] },
            { title: "Ga tsoffin sojoji", bullets: ["GI Bill zai iya biyan yawancin shirye-shiryen koyon sana'a", "Helmets to Hardhats: sana'o'in gini"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Masu neman sana'a (Career seekers)", url: "https://www.apprenticeship.gov/career-seekers" },
            { name: "Apprenticeship.gov: Mene ne pre-apprenticeship?", url: "https://www.apprenticeship.gov/help/what-pre-apprenticeship" },
            { name: "EPA: Takardar shaidar ma'aikaci ta Section 608", url: "https://www.epa.gov/section608/section-608-technician-certification-0" },
            { name: "FMCSA Training Provider Registry: wanda ke buƙatar horon direba na matakin farko", url: "https://tpr.fmcsa.dot.gov/Drivers/Applicability" },
            { name: "VA: Horo a wurin aiki da koyon sana'a", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/on-the-job-training-apprenticeships/" }
          ],
          tryIt: "Don sana'arku ta farko, ku rubuta: shin yawanci ana koyon ta ta hanyar koyon sana'a (apprenticeship)? Wane lasisi ko takardar shaida take buƙata? Sannan ku nemi \"[jiharku] [sana'a] license\" ku nemo shafin hukuma na hukumar jiha (ku nemi adireshin da ke ƙarewa da .gov).",
          youCanNow: "bayyana yadda koyon sana'a, shirin shiri gare shi da lasisi suke aiki, da nemo shafin lasisi na jiharku.",
          quickCheck: [
            { objective: "O3", q: "Ta yaya koyon sana'a (apprenticeship) ya bambanta da aji na yau da kullum?", options: ["Kuna biyan kuɗi fiye", "Ba ku koyon wata ƙwarewa", "Kuna aiki kuna samun albashi yayin da kuke koyo", "Ba ya taɓa kaiwa ga takardar shaida"], answer: 2, why: "Ana biyan masu koyon sana'a su yi aiki yayin da suke koyon sana'ar." },
            { objective: "O3", q: "Kuna son sanin lasisin da sana'arku take buƙata a jiharku. Me za ku yi?", options: ["Ku nemo shafin hukuma na hukumar jiha da ke ƙarewa da .gov", "Ku tambayi wata ƙungiyar kafofin sada zumunta kawai", "Ku ɗauka cewa ba a buƙatar lasisi", "Ku sayi kwas na farko da kuka gani a intanet"], answer: 0, why: "Shafin hukuma na hukumar jiha yana da ainihin dokokin lasisi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Zaɓar sana'a",
        questions: [
          { objective: "O1", q: "Wace sana'a ce ke aiki kan dumama, sanyaya ɗaki da firiji?", options: ["Kafinta", "Mai walda", "Ma'aikacin HVAC", "Mai saka hasken rana"], answer: 2, why: "HVAC na nufin heating, ventilation and air conditioning (dumama, shigar iska da sanyaya ɗaki)." },
          { objective: "O2", q: "A ina ne wuri mafi kyau don duba ainihin albashin sana'a?", options: ["Tallar kafofin sada zumunta", "bls.gov/ooh", "Hasashen aboki", "Kowace amsar hirar AI"], answer: 1, why: "Occupational Outlook Handbook shi ne majiyar hukuma, kuma kyauta ne." },
          { objective: "O2", q: "Me \"matsakaicin albashi\" (median pay) yake nufi?", options: ["Albashi mafi yawa a sana'ar", "Albashin farko a rana ta ɗaya", "Albashi bayan haraji", "Tsakiya: rabi suna samun fiye, rabi kuma ƙasa"], answer: 3, why: "Median ita ce ƙimar tsakiya." },
          { objective: "O3", q: "Mene ne Registered Apprenticeship?", options: ["Aiki da ake biya tare da horo, mai ƙarewa da takardar shaida da ake amincewa da ita", "Aikin koyo da ba a biya", "Digiri na jami'a na shekaru huɗu", "Ajin tsaro guda ɗaya"], answer: 0, why: "Masu koyon sana'a suna samun kuɗi yayin da suke koyo, kuma suna samun takardar shaida." },
          { objective: "O3", q: "Ma'aikacin HVAC zai taɓa sinadaran sanyaya (refrigerants). Me yake buƙata?", options: ["CDL", "Takardar shaidar EPA Section 608", "Takardar shaidar walda", "Babu komai"], answer: 1, why: "EPA tana buƙatar ma'aikatan da za su iya sakin sinadaran sanyaya su sami takardar shaida." }
        ]
      }
    },
    {
      name: "Babi na 2: Shiga da kasancewa lafiya",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kayan aiki da tsaro a wurin aiki",
          minutes: 5,
          goal: "Ambaci kayan kariya da al'adun tsaro na farko da kowace sana'a take tsammani.",
          text: [
            "Kowace sana'a tana tsammanin ku yi aiki lafiya tun rana ta farko. Kayan kariya na jiki (PPE) da aka saba sun haɗa da gilashin kare ido, hular kwano mai ƙarfi (hard hat), safar hannu, takalma masu ƙarfen kare yatsu, kayan kare kunne da riguna masu haske. Masu walda kuma suna buƙatar hular walda da tufafin da ba sa kama wuta da sauri. Ma'aikata a kan rufi suna buƙatar kariya daga faɗuwa.",
            "Al'adu na farko: ku duba kayan aikinku kafin amfani; ku tsaftace wurin aikinku; kada ku taɓa cire murfin kariya (guard) daga inji; ku yi amfani da tsani da ya dace kuma ku riƙe shi a wurare uku (hannaye biyu da ƙafa ɗaya, ko ƙafafu biyu da hannu ɗaya); kuma ku ɗaga kaya da ƙafafunku, ba da bayanku ba. Masu aikin wutar lantarki da ma'aikatan gyara dole su bi dokokin lockout/tagout, waɗanda ke kiyaye inji da wuta a kashe yayin da wani yake aiki a kansu.",
            "Masu ɗaukar aiki da ƙungiyoyin ma'aikata (unions) da yawa suna neman sababbin ma'aikata su yi kwas ɗin tsaro na OSHA na awa 10. Katin horo ne, ba lasisi ba, amma yana nuna kun san abubuwan farko.",
            "Mai ɗaukar ku aiki dole ya ba ku kayan kariya da horon da ake buƙata. Ku tambayi shirinku waɗanne kayan aiki za ku saya da kanku; masu koyon sana'a sukan fara da ƙananan kayan hannu, kamar tef na aunawa, wuƙar aiki, filaya, sukudireba da jakar kayan aiki."
          ],
          steps: ["Ku saka PPE da aikin yake buƙata kafin ku fara.", "Ku duba kayan aiki da wayoyinsu don lalacewa.", "Ku bar murfin kariya a kan inji, kuma ku tsaftace wurin aiki.", "Ku riƙe tsani a wurare uku.", "Ku tambaya kafin ku yi duk abin da ba a horar da ku a kai ba."],
          words: [["PPE", "personal protective equipment: kayan kariya na jiki kamar gilashi, safar hannu da hular kwano da ke kare ku."], ["Lockout/tagout", "matakan da ke kiyaye inji ko wuta a kashe kuma a kulle yayin da wani yake aiki a kai."], ["OSHA 10", "kwas ɗin horon tsaro na farko na awa 10 don ma'aikata, tare da katin kammalawa."]],
          slides: [
            { title: "PPE da aka saba", bullets: ["Gilashin kare ido, hular kwano, safar hannu", "Takalma masu kare yatsu, kayan kare kunne", "Hular walda; kariya daga faɗuwa a sama"] },
            { title: "Al'adun tsaro", bullets: ["Ku duba kayan aiki kafin amfani", "Kada ku taɓa cire murfin kariya na inji", "Ku riƙe tsani a wurare uku", "Ku ɗaga kaya da ƙafafunku"] },
            { title: "Lockout/tagout da OSHA 10", bullets: ["Wuta a kashe kuma a kulle kafin aiki", "OSHA 10: katin tsaro na farko da masu ɗaukar aiki da yawa ke nema"] },
            { title: "Kayan farkonku", bullets: ["Mai ɗaukar aiki yana ba da kayan kariya da ake buƙata", "Ku tambayi waɗanne kayan hannu za ku kawo"] }
          ],
          tryIt: "Don sana'arku ta farko, ku jera PPE da za ku saka da kayan hannu biyar da wataƙila za ku buƙata. Sannan ku tambayi wani shiri kusa da ku, ko ku duba shafinsa na intanet, don jerin kayan aikinsa na hukuma.",
          youCanNow: "ambaci kayan kariya da al'adun tsaro da sana'arku take tsammani, da shirya jerin kayan aiki na farko.",
          quickCheck: [
            { objective: "O4", q: "Wace ce al'adar tsaro ta farko a sana'o'in hannu?", options: ["Cire murfin kariya don yin aiki da sauri", "Saka PPE da ya dace da aikin", "Ƙin halartar horon tsaro", "Aiki kan wuta mai rai don ajiye lokaci"], answer: 1, why: "Saka PPE da ya dace yana kare ku daga haɗurra da aka saba." },
            { objective: "O4", q: "Shirinku ya aiko da jerin kayan aiki na farko, amma wani shago ya ba da shawarar kayan aiki masu tsada. Me za ku yi?", options: ["Ku sayi kayan masu tsada", "Kada ku sayi kowane kayan aiki", "Ku ari kayan aiki ba tare da tambaya ba", "Ku bi jerin kayan aiki na hukuma na shirin"], answer: 3, why: "Jerin shirin yana faɗa muku abin da kuke buƙata da gaske." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Hanyoyin dama ta biyu idan kuna da tarihin laifi",
          minutes: 5,
          goal: "Nemo shirye-shirye da tallafin dama ta biyu, da tsara yadda za ku tunkari tarihin laifi a sana'o'in hannu.",
          text: [
            "Tarihin laifi ba lallai ne ya hana ku sana'ar hannu ba. Shirye-shiryen koyon sana'a, ƙungiyoyin ma'aikata da masu ɗaukar aiki da yawa suna ɗaukar mutane masu tarihin laifi, kuma ƙungiyoyin masu dawowa gida da yawa suna gudanar da shirye-shiryen pre-apprenticeship ga mutanen da ke dawowa gida.",
            "Kayan aiki biyu na gwamnatin tarayya suna taimaka wa masu ɗaukar aiki su ce eh. Federal Bonding Program zai iya ba mai ɗaukar aiki inshorar amana (bond) kyauta na watanni shida na farko na aiki, ba tare da kuɗi gare ku ko ga mai ɗaukar aiki ba, kamar yadda EEOC ta faɗa. Work Opportunity Tax Credit yana ba masu ɗaukar aiki rangwamen haraji don ɗaukar wasu mutane aiki, har da \"qualified ex-felon\" (wanda aka taɓa yanke wa hukuncin babban laifi) da aka ɗauka cikin shekara ɗaya bayan hukuncin babban laifi ko sakinsa. Mai ɗaukar aiki da mai neman aiki suna cike fom ɗin IRS Form 8850 a ranar tayin aikin ko kafin ta, don haka ku faɗa wa masu ɗaukar aiki cewa wataƙila kun cancanta.",
            "Lasisi da wasu ayyuka suna duba tarihin laifi. Hukumomin lasisi na jihohi da yawa suna duba tarihin laifi ɗaya bayan ɗaya. Kafin ku kashe kuɗi kan horo, ku tuntuɓi hukumar sana'arku ku tambayi yadda suke duba tarihin laifi. Wasu ƙarin izinin CDL (endorsements), kamar na ɗaukar abubuwa masu haɗari, suna buƙatar binciken tarihi na gwamnatin tarayya.",
            "Ku tambayi ofishin taimakon shari'a (legal aid) ko shirinku na masu dawowa gida ko za a iya rufe ko share tarihin laifinku (sealing ko expungement) a jiharku, kuma ku yi atisayen gajeriyar amsa ta gaskiya game da tarihin laifinku don hirar neman aiki."
          ],
          steps: ["Ku nemi shirye-shiryen pre-apprenticeship na masu dawowa gida ko na dama ta biyu kusa da ku.", "Ku tambayi masu ɗaukar aiki ko suna amfani da Federal Bonding Program ko Work Opportunity Tax Credit.", "Ku tuntuɓi hukumar lasisi ta jiha ta sana'arku ku tambayi yadda take duba tarihin laifi.", "Ku tambayi legal aid game da rufewa ko share tarihin laifi.", "Ku yi atisayen gajeriyar amsa ta gaskiya game da tarihin laifinku."],
          words: [["Federal Bonding Program", "shirin kyauta na Ma'aikatar Ƙwadago ta Amurka da ke ba masu ɗaukar aiki inshora a watannin farko idan sun ɗauki mutane masu tarihin laifi ko wasu matsaloli."], ["Work Opportunity Tax Credit", "rangwamen haraji na gwamnatin tarayya da masu ɗaukar aiki za su iya samu don ɗaukar mutane daga wasu rukunoni, har da wasu masu hukuncin babban laifi."], ["Hukumar lasisi (licensing board)", "ofishin jiha da ke bayarwa da duba lasisin sana'o'i."]],
          slides: [
            { title: "Tarihin laifi ba ƙarshe ba ne", bullets: ["Shirye-shirye, ƙungiyoyi da masu ɗaukar aiki da yawa suna ɗaukar masu tarihin laifi", "Ku nemi shirye-shiryen pre-apprenticeship na masu dawowa gida"] },
            { title: "Abubuwan da ke taimaka wa masu ɗaukar aiki", bullets: ["Federal Bonding Program: inshorar amana kyauta na watanni 6", "Work Opportunity Tax Credit: rangwamen haraji ga masu ɗaukar aiki", "Ana cike Form 8850 kafin ko a ranar tayin aiki"] },
            { title: "Ku duba kafin ku biya horo", bullets: ["Ku tambayi hukumar lasisi yadda take duba tarihin laifi", "Wasu ƙarin izinin CDL suna buƙatar binciken tarihi"] },
            { title: "Matakai na gaba", bullets: ["Ku tambayi legal aid game da rufewa ko share tarihi", "Ku yi atisayen gajeriyar amsa ta gaskiya"] }
          ],
          sources: [
            { name: "EEOC: Tarihin kamu da hukunci (ya ambaci Federal Bonding Program)", url: "https://www.eeoc.gov/arrestandconviction" },
            { name: "IRS: Work Opportunity Tax Credit", url: "https://www.irs.gov/businesses/small-businesses-self-employed/work-opportunity-tax-credit" },
            { name: "Ma'aikatar Ƙwadago ta Amurka: Work Opportunity Tax Credit", url: "https://www.dol.gov/agencies/eta/wotc" }
          ],
          tryIt: "Ku rubuta tambayoyi uku da za ku yi wa hukumar lasisi ta jiha ta sana'arku game da yadda take duba tarihin laifi. Sannan ku rubuta jimloli biyu da za ku iya faɗa wa mai ɗaukar aiki game da Federal Bonding Program da Work Opportunity Tax Credit. (Idan ba ku da tarihin laifi, ku yi wannan don aboki ko a matsayin atisaye.)",
          youCanNow: "ambaci hanyoyin dama ta biyu a sana'o'in hannu, da duba yadda hukumar lasisi take duba tarihin laifi kafin ku biya horo.",
          quickCheck: [
            { objective: "O5", q: "Mene ne Work Opportunity Tax Credit?", options: ["Bashi ga ma'aikata", "Rangwamen haraji da masu ɗaukar aiki za su iya samu don ɗaukar mutane daga wasu rukunoni", "Kayan aiki kyauta", "Lasisin sana'a"], answer: 1, why: "WOTC yana ba masu ɗaukar aiki rangwamen haraji don ɗaukar mutane daga wasu rukunoni, har da wasu masu tarihin laifi." },
            { objective: "O5", q: "Kuna da tarihin laifi kuma kuna son lasisin sana'a. Me za ku yi kafin ku biya horo?", options: ["Ku tambayi hukumar lasisi ta jiha yadda take duba tarihin laifi", "Ku ɓoye tarihin a fom ɗin neman", "Ku biya horo ku yi fata", "Ku daina neman sana'o'in hannu"], answer: 0, why: "Hukumomi da yawa suna duba tarihin laifi ɗaya bayan ɗaya, don haka ku fara tambaya." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Nemo shiri da neman shiga",
          minutes: 5,
          goal: "Nemo shirye-shirye biyu kusa da ku, da yin tsarin neman shiga.",
          text: [
            "Ku fara a apprenticeship.gov. Apprenticeship Job Finder ɗinsa yana barin ku nema bisa sana'a da wuri, kuma ku nemi shiga kai tsaye tare da mai ɗaukar aiki ko shirin. Idan ba ku sami wanda ya dace ba, Partner Finder ɗinsa yana nuna ƙungiyoyin da ke karɓar sababbin buƙatun masu koyon sana'a.",
            "Sauran wuraren dubawa: American Job Center na yankinku (taimakon neman aiki kyauta, wani lokaci har da kuɗin horo), kwalejojin al'umma, cibiyoyin horo na ƙungiyoyin ma'aikata na kowace sana'a, shirye-shiryen masu dawowa gida, da shirye-shiryen tsoffin sojoji.",
            "Shirye-shirye sukan nemi takardar kammala sakandare ko GED, katin shaida mai inganci, lasisin tuƙi don wasu sana'o'i, jarabawar lissafi ta farko, gwajin ƙwayoyi (drug test), da hira. Ku gano matakan da ranakun neman shiga, domin wasu shirye-shiryen koyon sana'a suna karɓar buƙatu a wasu lokuta na shekara kawai.",
            "Ku shirya: ku sake koyon lissafi na farko (ɓangarori/fractions, aunawa, algebra mai sauƙi), ku tattara takardunku, kuma ku yi atisayen amsoshin hira game da tsaro, amincewa, da dalilin da yasa kuke son sana'ar."
          ],
          steps: ["Ku nema a apprenticeship.gov bisa sana'a da wuri.", "Ku rubuta shirye-shirye biyu, buƙatunsu da ranakun neman shiga.", "Ku tuntuɓi American Job Center na yankinku ko cibiyar horo ta ƙungiyar ma'aikata.", "Ku tattara takardunku: katin shaida, takardar sakandare ko GED, lasisin tuƙi idan ana buƙata.", "Ku yi atisayen lissafi na farko da amsoshin hirarku.", "Ku nemi shiga, sannan ku saka ranar biyo baya a kalandarku."],
          words: [["American Job Center", "ofishi kyauta da gwamnati take ɗaukar nauyinsa, mai taimaka wa mutane samun aiki da horo."], ["GED", "jarabawa da ke ba ku takardar shaida daidai da kammala sakandare."], ["Cibiyar horo ta ƙungiyar ma'aikata (union training center)", "makarantar da ƙungiyar ma'aikatan sana'a da masu ɗaukar aiki suke gudanarwa don horar da masu koyon sana'a."]],
          slides: [
            { title: "Ku fara a apprenticeship.gov", bullets: ["Apprenticeship Job Finder: ku nema bisa sana'a da wuri", "Partner Finder: shirye-shiryen da ke karɓar buƙatu"] },
            { title: "Sauran wuraren dubawa", bullets: ["American Job Centers", "Kwalejojin al'umma da cibiyoyin horo na ƙungiyoyin ma'aikata", "Shirye-shiryen masu dawowa gida da na tsoffin sojoji"] },
            { title: "Abin da shirye-shirye sukan nema", bullets: ["Takardar sakandare ko GED, katin shaida, wani lokaci lasisin tuƙi", "Jarabawar lissafi, gwajin ƙwayoyi, hira", "Ranakun neman shiga: wasu suna buɗewa a wasu lokuta kawai"] },
            { title: "Ku shirya", bullets: ["Ku yi atisayen ɓangarori (fractions) da aunawa", "Ku tattara takardu", "Ku yi atisayen amsoshin hira"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Apprenticeship Job Finder", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "CareerOneStop: Nemo American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }
          ],
          tryIt: "Aikin ƙarshe: ku yi Tsarin Fara Sana'a naku mai shafi ɗaya. Ku haɗa da sana'ar, matsakaicin albashinta da makomarta daga bls.gov/ooh, lasisi ko takardar shaida, shirye-shirye biyu kusa da ku, kayan kariyarku da kayan aiki na farko, duk wani taimakon dama ta biyu, da matakanku uku na farko tare da ranaku.",
          youCanNow: "nemo shirye-shiryen koyon sana'a da na pre-apprenticeship kusa da ku, da yin tsarin neman shiga mai ranaku.",
          quickCheck: [
            { objective: "O6", q: "Me yasa za ku rubuta ranakun neman shiga na kowane shiri?", options: ["Wasu shirye-shirye suna karɓar buƙatu a wasu lokuta kawai", "Shirye-shirye ba sa taɓa rufewa", "Ranaku ba su da muhimmanci", "Don nuna wa abokanku"], answer: 0, why: "Rasa lokacin neman shiga na iya nufin jira na watanni." },
            { objective: "O6", q: "Wani shiri kusa da ku yana da jarabawar shiga mai aunawa da ɓangarori (fractions). Me za ku yi?", options: ["Ku ƙi yin jarabawar", "Ku yi fata za ta yi sauƙi", "Ku yi atisayen ɓangarori, aunawa da algebra mai sauƙi kafin jarabawar", "Ku nemi wata sana'a daban"], answer: 2, why: "Yin atisayen lissafin tun da wuri yana taimaka muku cin jarabawar shiga." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Shiga da kasancewa lafiya",
        questions: [
          { objective: "O4", q: "Me PPE yake nufi?", options: ["Paid Program for Electricians (shirin biya ga masu aikin wutar lantarki)", "Personal protective equipment (kayan kariya na jiki)", "Public plumbing exam (jarabawar famfo ta jama'a)", "Power plant engineering (injiniyan tashar wuta)"], answer: 1, why: "PPE kayan kariya ne kamar gilashi, safar hannu da hular kwano da ke kare ku." },
          { objective: "O4", q: "Mene ne lockout/tagout?", options: ["Kulle akwatin kayan aiki da dare", "Zaɓen ƙungiyar ma'aikata", "Kiyaye inji ko wuta a kashe kuma a kulle yayin da wani yake aiki a kai", "Hanyar sa hannun tashi daga aiki"], answer: 2, why: "Yana hana inji tashi yayin da wani yake aiki a kai." },
          { objective: "O5", q: "Me Federal Bonding Program zai iya ba mai ɗaukar aiki da ya ɗauki mai tarihin laifi?", options: ["Inshorar amana kyauta na watanni shida na farko", "Babbar mota kyauta", "Lasisi ga ma'aikacin", "Babu komai"], answer: 0, why: "Inshorar kyauta ce ga ma'aikaci da mai ɗaukar aiki, kuma tana rufe watanni shida na farko." },
          { objective: "O5", q: "Kuna da tarihin laifi kuma kuna son lasisin aikin wutar lantarki. Me ya kamata ku yi kafin ku biya horo?", options: ["Ku ɓoye tarihin", "Ku haƙura", "Ku fara biya ku tambaya daga baya", "Ku tambayi hukumar lasisi ta jiha yadda take duba tarihin laifi"], answer: 3, why: "Hukumomi sukan duba ɗaya bayan ɗaya; tambaya da farko yana kare lokacinku da kuɗinku." },
          { objective: "O6", q: "A ina za ku iya neman shirye-shiryen koyon sana'a bisa sana'a da wuri?", options: ["Ƙungiyar kafofin sada zumunta kawai", "Apprenticeship Job Finder a apprenticeship.gov", "Shafin IRS", "Tallar talabijin"], answer: 1, why: "Shi ne kayan nema na hukuma daga Ma'aikatar Ƙwadago." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Fara Sana'a a Ayyukan Hannu na Ƙwarewa",
    questions: [
      { objective: "O1", q: "Wace sana'a ce ke haɗa ƙarfe da zafi?", options: ["Mai aikin famfo", "Mai walda", "Kafinta", "Ma'aikacin HVAC"], answer: 1, why: "Masu walda suna haɗa ƙarfe da zafi." },
      { objective: "O1", q: "Me CDL yake bar ku ku yi?", options: ["Saka wayoyin lantarki", "Gyara bututu", "Tuƙa manyan motoci da bas", "Walda ƙarfe"], answer: 2, why: "Ana buƙatar lasisin tuƙin kasuwanci don manyan motoci da bas." },
      { objective: "O1", q: "Ba ku son tsayi, kuma kuna son kasancewa a gida kowane dare. Wanne ne wataƙila bai dace da ku ba?", options: ["Tuƙin babbar mota mai nisa da saka hasken rana a kan rufi", "Gyaran famfo a cikin gida", "Walda a cikin shago", "Kafintancin kabad"], answer: 0, why: "Tuƙi mai nisa yana nisantar da ku na kwanaki, kuma aikin rufi yana sama." },
      { objective: "O1", q: "Wace gogewa ce za ta iya taimakawa a sana'ar hannu?", options: ["Ayyukan farar hula da aka biya kawai", "Babu komai kafin shekara 25", "Ajujuwan jami'a kawai", "Aikin injiniya a soja, aiki tare a wasanni, da shirye-shiryen horo a gidan yari"], answer: 3, why: "Ƙwarewar hannu da ladabi suna tafiya tare da ku daga wurare da yawa." },
      { objective: "O2", q: "Wane shafi ne majiyar hukuma kuma kyauta don albashi da makomar sana'o'i?", options: ["bls.gov/ooh", "Tallar aiki", "Sharhi a bidiyo", "Hira da aboki"], answer: 0, why: "Bureau of Labor Statistics ne ke gudanar da Occupational Outlook Handbook." },
      { objective: "O2", q: "A shafin bayani na littafin, wane shafi (tab) ne ke nuna horon da kuke buƙata?", options: ["Pay", "Job Outlook", "How to Become One", "Similar Occupations"], answer: 2, why: "How to Become One yana bayanin ilimi, horo da lasisi." },
      { objective: "O2", q: "Mataimakin AI ya ba ku adadin albashin masu walda. Me ya kamata ku yi?", options: ["Ku amince da shi", "Ku saka shi a intanet", "Ku yi amfani da shi a tsarinku kamar yadda yake", "Ku duba lambar a bls.gov/ooh"], answer: 3, why: "Ku ɗauki lambobi daga shafin hukuma; AI yana iya yin kuskure ko ya tsufa." },
      { objective: "O3", q: "A cewar littafin, yawancin masu aikin wutar lantarki suna koyon sana'ar ta hanyar:", options: ["Ajin ƙarshen mako", "Koyon sana'a na shekaru 4 ko 5", "Bidiyon intanet kawai", "Digiri na jami'a na shekaru huɗu"], answer: 1, why: "Shafin BLS ya ce yawancinsu suna koyo a shirin koyon sana'a na shekaru 4 ko 5." },
      { objective: "O3", q: "Ta yaya ake yawan biyan masu koyon sana'a?", options: ["Suna biyan kuɗi don yin aiki", "Ba a taɓa biyan su ba", "Da albashin da ke ƙaruwa yayin da ƙwarewarsu take ƙaruwa", "Sai bayan sun kammala kawai"], answer: 2, why: "Masu koyon sana'a suna samun kuɗi yayin da suke koyo, tare da ƙarin albashi." },
      { objective: "O3", q: "Mene ne pre-apprenticeship?", options: ["Gajeren shiri da ke taimaka muku shiga koyon sana'a", "Lasisi", "Fom ɗin haraji", "Kuɗin ƙungiyar ma'aikata"], answer: 0, why: "Yana shirya ku da abubuwan farko kamar lissafi, kayan aiki da tsaro." },
      { objective: "O3", q: "Sabon direban babbar mota yana son CDL na Class A. Kafin jarabawar dole ya:", options: ["Sayi babbar mota", "Kammala horon direba na matakin farko tare da mai horarwa mai rajista", "Sami katin EPA 608", "Yi jarabawar walda"], answer: 1, why: "Dokokin tarayya suna buƙatar horo tare da mai horarwa da ke cikin Training Provider Registry." },
      { objective: "O3", q: "Su wane ne sukan iya amfani da tallafin GI Bill don koyon sana'a?", options: ["Sojoji masu aiki a yanzu kawai", "Babu kowa", "Mutane sama da shekara 65 kawai", "Tsoffin sojoji da yawa"], answer: 3, why: "VA ta ce tallafin GI Bill zai iya biyan yawancin shirye-shiryen koyon sana'a da horo a wurin aiki." },
      { objective: "O4", q: "Wanne ne PPE?", options: ["Tef na aunawa", "Gilashin kare ido", "Takardar albashi", "Takardar bayanin aiki (CV)"], answer: 1, why: "Gilashin kare ido yana kare idanunku; kayan kariya na jiki ne." },
      { objective: "O4", q: "Murfin kariya na injin goge ƙarfe (grinder) yana hana ku aiki. Ya kamata ku:", options: ["Bar murfin a kai, ku nemi taimako idan aikin yana buƙatar wani kayan aiki daban", "Cire murfin", "Yi amfani da hannunku don riƙe ruwan wuƙar", "Yi aiki da sauri"], answer: 0, why: "Cire murfin kariya yana jawo munanan raunuka." },
      { objective: "O4", q: "Mene ne OSHA 10?", options: ["Lasisin aiki a matsayin mai aikin wutar lantarki", "Ƙarin izinin CDL", "Kwas ɗin tsaro na farko na awa 10 tare da katin kammalawa", "Rangwamen haraji"], answer: 2, why: "Horon tsaro ne, ba lasisi ba." },
      { objective: "O5", q: "Wane ne ke cike IRS Form 8850 don Work Opportunity Tax Credit, kuma yaushe?", options: ["Ma'aikaci kaɗai, bayan shekara ɗaya", "Jiha, a ƙarshen shekara", "Babu kowa; yana faruwa da kansa", "Mai ɗaukar aiki da mai neman aiki, a ranar tayin aiki ko kafin ta"], answer: 3, why: "IRS ta ce ana cike fom ɗin a ranar tayin aiki ko kafin ta." },
      { objective: "O5", q: "Hukumomin lasisi na jihohi da yawa suna duba tarihin laifi:", options: ["Ba sa taɓa dubawa", "Ɗaya bayan ɗaya", "Ga masu aikin famfo kawai", "A intanet kawai"], answer: 1, why: "Ku tambayi hukumar yadda take duba tarihin laifi kafin ku biya horo." },
      { objective: "O6", q: "Waɗanne wurare ne za su iya taimaka muku nemo shirin sana'ar hannu?", options: ["Tallace-tallace masu zaman kansu kawai", "Caca kawai", "American Job Centers, kwalejojin al'umma, cibiyoyin horo na ƙungiyoyin ma'aikata da shirye-shiryen masu dawowa gida", "Babu; dole ku jira a kira ku"], answer: 2, why: "Waɗannan wurare ne da aka saba, kyauta ko masu araha, don farawa." },
      { objective: "O6", q: "Wasu shirye-shiryen koyon sana'a suna karɓar buƙatu a wasu lokuta kawai. Don haka ya kamata ku:", options: ["Rubuta ranakun neman shiga na kowane shiri", "Nemi shiga duk lokacin da kuka tuna", "Ƙyale shirye-shiryen da ke da ranaku", "Nemi shiga a lokacin bazara kawai"], answer: 0, why: "Sanin ranakun yana hana ku rasa lokacin neman shiga." },
      { objective: "O6", q: "Wane lissafi ne ya fi dacewa a yi atisaye kafin jarabawar shiga sana'ar hannu?", options: ["Calculus", "Ɓangarori (fractions), aunawa da algebra mai sauƙi", "Ka'idar ƙididdiga (statistics)", "Ba a taɓa amfani da lissafi ba"], answer: 1, why: "Sana'o'in hannu suna amfani da ɓangarori, aunawa da algebra na farko kowace rana." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      2,
      4,
      6,
      8,
      9,
      12,
      13,
      16,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Sana'a da dacewa",
        objective: "O1",
        notYet: "Babu sana'a a sarari, ko babu sanin yadda aikin yake.",
        meets: "Sana'a ɗaya tare da gajeren bayanin aikin da dalilin da yasa ta dace.",
        exceeds: "Ya kwatanta ta da sana'a ta biyu kuma ya bayyana zaɓin."
      },
      {
        name: "Albashi da makoma",
        objective: "O2",
        notYet: "Babu albashi, ko daga majiyar da ba ta hukuma ba ce, ko babu shekararsa.",
        meets: "Matsakaicin albashi tare da shekararsa da makomar aiki daga bls.gov/ooh.",
        exceeds: "Ya kuma rubuta horon da aka saba daga littafin."
      },
      {
        name: "Lasisi da shirye-shirye",
        objective: "O3",
        notYet: "Ba a duba lasisi ba, ko shirye-shiryen ba su kai biyu ba.",
        meets: "Lasisi ko takardar shaida daga shafin hukuma na jiha, da shirye-shirye biyu kusa da shi.",
        exceeds: "Ya haɗa ranakun neman shiga da buƙatun kowane shiri."
      },
      {
        name: "Kayan kariya da kayan aiki",
        objective: "O4",
        notYet: "Babu PPE ko kayan aiki.",
        meets: "Ya jera PPE da kayan aiki na farko na sana'ar.",
        exceeds: "An kwatanta da jerin kayan aiki na hukuma na wani shiri."
      },
      {
        name: "Taimakon dama ta biyu",
        objective: "O5",
        notYet: "Babu taimakon a inda ya shafe shi.",
        meets: "Ya jera duk wani taimakon dama ta biyu da ya shafe shi, ko ya rubuta cewa babu wanda ya shafe shi.",
        exceeds: "Ya haɗa tambayoyi ga hukumar lasisi da abin da zai faɗa wa mai ɗaukar aiki."
      },
      {
        name: "Matakai uku na farko",
        objective: "O6",
        notYet: "Matakan ba su da sarari ko babu ranaku.",
        meets: "Matakai uku a sarari tare da ranaku.",
        exceeds: "An riga an yi mataki na farko."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka nemi shiga shirin pre-apprenticeship, koyon sana'a ko na sana'ar hannu cikin kwanaki 60 (binciken biyo baya)",
      "Masu koyo da suka fara shirin sana'ar hannu ko aikin sana'a cikin watanni 6",
      "Masu koyo da suka tuntuɓi hukumar lasisi ta jiha, American Job Center ko cibiyar horo ta ƙungiyar ma'aikata cikin kwanaki 30",
      "Masu koyo da suka fara wani kwas na sana'o'in hannu na Koach Learn cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Shafukan hukuma: bls.gov/ooh, apprenticeship.gov da hukumar lasisi ta jiharku",
      "Takarda da alƙalami ko takardar kwamfuta don Tsarin Fara Sana'a",
      "Kusan minti 60 don darussa da gwaje-gwaje, da lokacin bincike"
    ],
    facilitatorNotes: [
      "Ku gayyaci cibiyar horo ta ƙungiyar ma'aikata, kwalejin al'umma ko shirin pre-apprenticeship na yankinku don yin magana da rukunin.",
      "Ku taimaka wa masu koyo su yi amfani da bls.gov/ooh da apprenticeship.gov kai tsaye a aji; albashi da shirye-shirye suna canjawa.",
      "Ga masu koyo masu tarihin laifi, ku jaddada tambayar hukumar lasisi ta jiha kafin biyan kowane horo.",
      "Ku taimaka wa tsoffin sojoji su duba tallafin GI Bill don koyon sana'a ta majiyoyin hukuma na VA.",
      "Ku ba da maki ga Tsarin Fara Sana'a da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
