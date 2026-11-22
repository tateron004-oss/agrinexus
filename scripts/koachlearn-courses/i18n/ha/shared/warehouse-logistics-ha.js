"use strict";

// Koach Learn course, Hausa (ha) translation of shared/warehouse-logistics.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const BLS_MOVERS = { name: "Hukumar Ƙididdigar Aiki ta Amurka (BLS): Ma'aikatan hannu da masu ɗaukar kaya", url: "https://www.bls.gov/ooh/transportation-and-material-moving/hand-laborers-and-material-movers.htm" };
const BLS_CLERKS = { name: "Hukumar Ƙididdigar Aiki ta Amurka (BLS): Masu rubuta bayanan kaya", url: "https://www.bls.gov/ooh/office-and-administrative-support/material-recording-clerks.htm" };
const MSSC_CLT = { name: "MSSC: Certified Logistics Technician (CLT) da Certified Logistics Associate (CLA)", url: "https://www.msscusa.org/certified-logistics-technician-clt/" };
const OSHA_OUTREACH = { name: "Shirin Horon OSHA Outreach (azuzuwan awa 10 da awa 30)", url: "https://www.osha.gov/training/outreach" };
const OSHA_WAREHOUSE = { name: "OSHA: Rumbunan ajiyar kaya (Warehousing)", url: "https://www.osha.gov/warehousing" };
const OSHA_WH_HAZARDS = { name: "OSHA: Haɗurran rumbun ajiyar kaya da maganinsu", url: "https://www.osha.gov/warehousing/hazards-solutions" };
const OSHA_HEAT = { name: "OSHA: Aiki a cikin zafi", url: "https://www.osha.gov/heat-exposure" };
const OSHA_178 = { name: "OSHA 29 CFR 1910.178: Motocin masana'antu masu inji (birkin tirela da toshe tayoyi)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.178" };
const AJC = { name: "CareerOneStop: nemo American Job Center kusa da ku", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" };

module.exports = {
  id: "warehouse-logistics-ha",
  lang: "ha",
  translationOf: "warehouse-logistics",
  category: "Workforce Development",
  name: "Ayyukan Rumbun Ajiyar Kaya da Jigilar Kaya (Logistics)",
  skills: "Sanin ayyukan rumbun kaya da takardun shaida, Nemo kaya ta SKU da lambar wuri, Karɓar kayan da aka kawo, Gina pallet lafiya, Aiki lafiya cikin sauri",
  outcome: "faɗin manyan ayyukan rumbun ajiyar kaya da takardun shaidar da ke taimaka muku samun su, bin kaya daga karɓa har zuwa aikawa, nemo kaya ta amfani da SKU da lambar wurinsa, duba kayan da aka kawo da takardunsu ku rubuta duk wata matsala, tsara ɗora kaya lafiya a kan pallet, da yin shirin samun aiki.",
  about: [
    "Rumbunan ajiyar kaya (warehouses) da cibiyoyin rarraba kaya suna motsa kayan da muke saya kowace rana, kuma suna ɗaukar ma'aikata duk shekara. Wannan kwas na masu neman aiki ne, mutanen da ke dawowa gida daga gidan yari, tsoffin sojoji, da duk mai son aiki na farko mai ɗorewa a jigilar kaya (logistics) wanda zai iya ci gaba.",
    "Za ku koyi ayyukan da ke cikin rumbun kaya, yadda kaya ke tafiya daga mota zuwa kanta zuwa ga mai saya, yadda ake karanta lambobin wuri, yadda ake karɓar kayan da aka kawo da ƙidaya kaya daidai, yadda ake gina pallet lafiya, da yadda ake zama lafiya yayin da kuke aiki cikin sauri.",
    "Wannan kwas yana shirya ku ne. Ba ya ba ku takardar shaida. Idan kuna son ɗaya, Manufacturing Skill Standards Council (MSSC) tana bayar da Certified Logistics Associate (CLA) da Certified Logistics Technician (CLT). Tuƙa forklift (motar ɗaga kaya) yana buƙatar horon mai ɗaukar aiki; ku duba kwas ɗinmu \"Tushen Aikin Tuƙa Forklift\".",
    "Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\" da za ku iya yi da takarda da fensir. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku haɗa fakitin fara aikin rumbun kaya: rahoton karɓar kaya na wani kayan gwaji da aka kawo (ƙididdiga da aka duba da packing list, tare da rubuta kowane ragi, ƙari da lalacewa), jerin ɗauko kaya (pick list) da kuka jera bisa hanyar tafiya ta amfani da lambobin wuri, zanen shirin ɗora kaya lafiya a kan pallet tare da nauyi da hawa-hawa, da shirin samun aiki mai shafi ɗaya mai masu ɗaukar aiki ko shirye-shirye uku, takardar shaidar da za ku nema, da layuka biyu na gaskiya don takardar bayanin aikinku (résumé).",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke neman aikinsu na farko a rumbun ajiyar kaya, cibiyar rarraba kaya ko jigilar kaya: masu neman aiki, mutanen da ke dawowa gida daga gidan yari, tsoffin sojoji da sojoji masu ƙwarewa a samar da kayayyaki, matasa, da masu sauya sana'a.",
    startingPoint: "Suna iya ƙidaya, karanta lambobi da alamomi (labels), kuma su bi umarni. Ba su da ƙwarewa sosai da lambobin wuri, takardun karɓar kaya, ƙidayar kaya ko gina pallet. Wasu sun yi aikin ƙarfi amma ba su koyi ɗaga kaya lafiya ba.",
    gap: "Rumbunan kaya suna ɗaukar mutane da yawa, amma sabbin ma'aikatan da ke yin kuskuren ƙidaya, rikita wurare ko jin rauni ba sa daɗewa. Masu koyo suna buƙatar ɗabi'un daidaito da tsaro na asali, da hanya a sarari zuwa takardar shaida da ƙarin girma, don a ɗauke su aiki kuma su daɗe.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kowace kalma ta musamman",
      "Lissafi: lambobi cikakku, ƙari da ninkawa masu sauƙi; lambobin atisaye ƙirƙirarru ne",
      "Ba a buƙatar kayan aiki: atisaye da takarda, kayan gida ko kwalaye",
      "Babu amfani da forklift ko wani inji mai ƙarfi a wannan kwas",
      "Na'urori: waya ko kwamfutar ɗakin karatu don shafukan hukuma da neman aiki"
    ],
    prerequisites: "Babu. \"Tushen Tsaro a Wurin Aiki (OSHA)\" da \"Tushen Aikin Tuƙa Forklift\" kwasa-kwasai ne masu kyau na gaba."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku jerin tallace-tallacen ayyukan rumbun kaya", action: "gane ayyukan, abin da kowanne ke yi, da takardun shaidar da ke taimaka muku samun aiki", standard: "kuna ambaton aƙalla ayyuka huɗu da takardar shaida ɗaya ta gaske tare da wanda ke bayar da ita" },
    { id: "O2", condition: "Idan aka ba ku jerin ɗauko kaya mai SKU da lambobin wuri", action: "nemo wurin kowane kaya da jera abubuwan da za a ɗauko bisa hanyar tafiya", standard: "kuna karanta kowane wuri daidai" },
    { id: "O3", condition: "Idan aka ba ku kayan gwaji da aka kawo da packing list ɗinsu", action: "karɓar kayan da rubuta duk wani ragi, ƙari ko lalacewa", standard: "kowace ƙididdiga da kowane bayani daidai" },
    { id: "O4", condition: "Idan aka ba ku kwalaye da nauyinsu", action: "tsara ɗora kaya lafiya a kan pallet, masu nauyi a ƙasa kuma cikin iyakar nauyi", standard: "kuna cika kowace doka a jerin duba pallet" },
    { id: "O5", condition: "Idan aka ba ku wani aikin rumbun kaya ko wani haɗari", action: "zaɓar hanya mai aminci ta ɗagawa, motsawa ko kai rahoto yayin da kuke tafiya da sauri", standard: "kuna samun aƙalla yanayi 4 cikin 5 daidai" }
  ],
  chapters: [
    {
      name: "Babi na 1: Yadda rumbun ajiyar kaya ke aiki",
      lessons: [
        {
          title: "Ayyukan rumbun kaya da takardun shaidar da ke taimakawa",
          objectives: ["O1"],
          minutes: 5,
          goal: "Gane manyan ayyukan rumbun kaya da takardar shaida ɗaya da za ta iya taimaka muku samun aiki.",
          text: [
            "Ayyukan farko da aka saba: mai sarrafa kaya ko ma'aikacin rumbu (yana motsa kaya), mai ɗauko kaya (picker) da mai haɗa kaya (packer) (suna cike odar masu saya), mai jera kaya a kanta ko mai cike oda, ma'aikacin aikawa da karɓar kaya (yana duba kayan da ke shigowa da fita), ma'aikacin ƙidayar kaya (yana ƙidaya kuma yana gyara bayanai) da mai tuƙa forklift. Idan kun sami gogewa, kuna iya zama shugaban ƙungiya (lead), mai kula (supervisor), ko mai tsara kaya ko jigilar kaya.",
            "Yawancin ayyukan farko ba sa buƙatar digiri. Mutane yawanci suna koyo a bakin aiki, sau da yawa cikin wata ɗaya ko ƙasa da haka, kuma suna koyon dokokin tsaro da suka ginu kan ƙa'idodin OSHA (hukumar tsaron wurin aiki ta Amurka). Masu ɗaukar aiki suna neman mutanen da ke zuwa a kan lokaci, ke ƙidaya a hankali, kuma ke aiki lafiya.",
            "Takardun shaida suna iya sa ku fice. Manufacturing Skill Standards Council (MSSC) tana bayar da Certified Logistics Associate (CLA) da Certified Logistics Technician (CLT); sai kun ci CLA kafin ku yi CLT. Ajin OSHA Outreach na awa 10 yana ba ku katin kammalawa; ba dole ba ne, kuma OSHA ta ce ba takardar shaida (certification) ba ne. Tuƙa forklift koyaushe yana buƙatar horo da tantancewa daga mai ɗaukar aikin da kansa.",
            "Albashi da guraben aiki sun bambanta daga wuri zuwa wuri. Ku duba littafin hukuma Occupational Outlook Handbook a bls.gov don albashi da makomar aiki, da tallace-tallacen ayyuka na gaske kusa da ku."
          ],
          words: [["Logistics (jigilar kaya)", "tsarawa da motsa kaya daga inda ake yin su zuwa inda ake buƙatarsu."], ["Cibiyar rarraba kaya (distribution center)", "babban rumbun kaya da ke aika kaya zuwa shaguna ko masu saya."], ["Takardar shaida (credential)", "takardar shaida ko kati da ke nuna kun ci jarabawa ko kun kammala horo."], ["MSSC", "Manufacturing Skill Standards Council, ƙungiyar ƙasa (a Amurka) da ke bayar da takardun shaidar CLA da CLT."]],
          slides: [
            { title: "Ayyukan farko", bullets: ["Mai sarrafa kaya, mai ɗauko kaya, mai haɗa kaya, mai jera kaya", "Ma'aikacin aikawa da karɓar kaya, ma'aikacin ƙidayar kaya", "Mai tuƙa forklift (tare da horon mai ɗaukar aiki)"] },
            { title: "Yadda mutane ke farawa", bullets: ["Yawanci ba a buƙatar digiri", "Koyo a bakin aiki, sau da yawa cikin wata ɗaya ko ƙasa", "Zuwa a kan lokaci, ƙidaya a hankali, aiki lafiya"] },
            { title: "Takardun shaida masu taimako", bullets: ["MSSC: CLA da farko, sannan CLT", "Katin OSHA na awa 10: ba dole ba ne, ba takardar shaida ba ne", "Forklift: horo da tantancewa daga mai ɗaukar aiki"] },
            { title: "Ku tabbatar da bayanai", bullets: ["Albashi da makoma: Occupational Outlook Handbook a bls.gov", "Tallace-tallacen ayyuka na gaske kusa da ku"] }
          ],
          sources: [BLS_MOVERS, BLS_CLERKS, MSSC_CLT, OSHA_OUTREACH],
          tryIt: "Ku nemo tallace-tallacen ayyukan rumbun kaya uku kusa da ku. Ga kowanne, ku rubuta sunan aikin, lokacin aiki (shift), abin da aikin ke yi a layi ɗaya, da duk wata takardar shaida ko ƙwarewa da yake nema. Sannan ku buɗe shafin MSSC CLT ku rubuta wanda ke bayar da CLA da CLT.",
          youCanNow: "faɗin manyan ayyukan rumbun kaya, abin da kowanne ke yi, da takardun shaidar da za su iya taimaka muku samun aiki.",
          quickCheck: [
            { objective: "O1", q: "Wane aiki ne ke duba kayan da ke shigowa da fita da takardunsu?", options: ["Ma'aikacin aikawa da karɓar kaya", "Mai haɗa kaya", "Makanikin forklift", "Mai gadi"], answer: 0, why: "Ma'aikatan aikawa da karɓar kaya suna bin diddigin kayan da ke shigowa da fita kuma suna duba su." },
            { objective: "O1", q: "Wane ne ke bayar da takardar shaidar Certified Logistics Technician (CLT)?", options: ["OSHA", "IRS (hukumar haraji ta Amurka)", "Manufacturing Skill Standards Council (MSSC)", "Kowace hukumar samar da ma'aikata"], answer: 2, why: "CLT, da CLA da ke zuwa kafinta, takardun shaida ne na MSSC." }
          ]
        },
        {
          title: "Tafiyar kaya da lambobin wuri",
          objectives: ["O2"],
          minutes: 5,
          goal: "Nemo kaya ta amfani da SKU da lambar wurinsa, da jera abubuwan da za a ɗauko bisa hanyar tafiya.",
          text: [
            "Kaya suna tafiya cikin rumbun kaya bisa tsari iri ɗaya kowace rana. Karɓa (receiving): kaya suna isowa ana duba su. Ajiyewa (putaway): ana ajiye su a wurin da aka tsara. Ajiya. Ɗauko (picking): ma'aikata suna ɗauko kaya don oda. Haɗawa (packing). Aikawa (shipping): oda suna tafiya a manyan motoci.",
            "Kowane kaya yana da SKU (stock keeping unit), lambar wannan kaya daidai, misali riga shuɗiya babba (large). Kowane wurin ajiya yana da lambar wuri. Rumbunan kaya da yawa suna amfani da yanki (zone), layi (aisle), kanta (rack ko bay) da hawa (level), don haka A-12-03-B na iya nufin yanki A, layi 12, kanta 3, hawa B. Rumbun kayanku zai koya muku nasa tsarin.",
            "Yawancin rumbunan kaya suna amfani da na'urar scanner. Kuna scan wurin da kayan don tsarin kwamfuta (warehouse management system) ya san abin da ya motsa. Idan kayan da ke wurin bai yi daidai da SKU ba, ku tsaya ku gaya wa shugabanku; kada ku ɗauki abin da ya yi kama da shi kawai.",
            "Don rage tafiya, ku ɗauko bisa hanyar tafiya: ku jera jerinku bisa layi, sannan bisa kanta, don ku bi kowane layi sau ɗaya."
          ],
          steps: ["Ku karanta SKU da lambar wuri na kowane layi.", "Ku raba lambar wuri zuwa sassanta: yanki, layi, kanta, hawa.", "Ku jera jerin bisa yanki, sannan layi, sannan kanta.", "A kowane wuri, ku scan ko ku duba cewa SKU ya yi daidai kafin ku ɗauko.", "Idan bai yi daidai ba ko wurin babu komai, ku kai rahoto."],
          words: [["SKU", "stock keeping unit: lambar kaya ɗaya daidai."], ["Lambar wuri (location code)", "adireshin wurin ajiya, kamar yanki, layi, kanta da hawa."], ["Putaway (ajiyewa)", "kai kayan da aka karɓa zuwa wurin ajiyarsu."], ["Picking (ɗauko kaya)", "fitar da kaya daga ajiya don cike oda."], ["Warehouse management system (WMS)", "tsarin kwamfuta da ke bin diddigin inda kowane kaya yake."]],
          slides: [
            { title: "Tafiyar kaya", bullets: ["Karɓa, ajiyewa, ajiya", "Ɗauko, haɗawa, aikawa"] },
            { title: "Lambobin da kuke amfani da su", bullets: ["SKU: kayan daidai", "Wuri: yanki, layi, kanta, hawa", "Misali: A-12-03-B"] },
            { title: "Ku ɗauko daidai, cikin hikima", bullets: ["Ku scan wurin da kayan", "Kaya ba daidai ba ko wuri babu komai? Ku kai rahoto", "Ku jera bisa layi don ku bi kowane layi sau ɗaya"] }
          ],
          sources: [BLS_CLERKS],
          tryIt: "Atisaye kawai. Ku jera wannan jerin ɗauko kaya bisa hanyar tafiya (yanki, layi, kanta, hawa): B-04-02-A, A-12-03-B, A-03-01-C, B-01-05-A, A-12-01-A. Sannan ku rubuta abin da kowane sashe na A-12-03-B ke nufi. Amsa: jerin yana farawa da A-03-01-C, A-12-01-A, A-12-03-B.",
          youCanNow: "karanta lambar wuri, nemo kaya ta SKU ɗinsa, da jera jerin ɗauko kaya bisa hanyar tafiya.",
          quickCheck: [
            { objective: "O2", q: "Mene ne SKU?", options: ["Wani nau'in forklift", "Lambar kaya ɗaya daidai", "Babbar motar jigilar kaya", "Dokar tsaro"], answer: 1, why: "Stock keeping unit lamba ce ta kaya ɗaya daidai." },
            { objective: "O2", q: "Kun je wani wuri, kuma kayan bai yi daidai da SKU da ke jerinku ba. Me za ku yi?", options: ["Ku ɗauki abin da ya yi kama da shi", "Ku tsallake layin ba tare da cewa komai ba", "Ku ɗauki biyu na wani abu daban", "Ku tsaya ku kai rahoto ga shugabanku"], answer: 3, why: "Dole a kai rahoton rashin daidaito don oda da bayanai su kasance daidai." }
          ]
        },
        {
          title: "Karɓar kayan da aka kawo da ƙidaya kaya",
          objectives: ["O3"],
          minutes: 6,
          goal: "Duba kayan da aka kawo da packing list ɗinsu da rubuta duk wata matsala.",
          text: [
            "Idan babbar mota ta iso, sashen karɓa yana duba cewa abin da ya zo shi ne abin da aka yi oda. Kuna kwatanta kayan da packing list (jerin abin da ke ciki), da purchase order (takardar oda) idan kuna da ita. Direban kuma yana ba da bill of lading, takardar jigilar kaya da kuke sa hannu a kai.",
            "Ku ƙidaya kowane layi. Ku duba SKU, yawa da yanayin kayan. Idan kwali ya matse, ya jike ko ya buɗe, ku ɗauki hoto idan wurin aikinku ya yarda, ku rubuta. Idan abin da kuka samu ya gaza abin da aka jera, ragi ne (shortage); idan ya fi, ƙari ne (overage). Ku rubuta kowace matsala a kan takardun kafin ku sa hannu, kamar yadda tsarin wurin aikinku ya ce. Sa hannu a takardar karɓa marar bayani na iya nufin kun karɓi komai a matsayin lafiya.",
            "Ƙidayar kaya (inventory) tana aiki haka ma. Cycle count shi ne ƙidaya wurare kaɗan kowace rana maimakon dukkan rumbun kaya lokaci ɗaya. Idan ƙididdigarku ba ta yi daidai da tsarin kwamfuta ba, ku sake ƙidaya, sannan ku kai rahoto. A nan daidaito ya fi sauri muhimmanci."
          ],
          steps: ["Ku karɓi packing list (da purchase order idan kuna da shi).", "Ku ƙidaya kowane layi: SKU daidai, yawa daidai.", "Ku duba yanayin kowane kwali.", "Ku rubuta kowane ragi, ƙari ko lalacewa a kan takardun.", "Ku bi tsarin wurin aikinku kafin ku sa hannu a bill of lading.", "Ku kai rahoton matsaloli ga shugabanku."],
          words: [["Packing list", "jerin abin da ke cikin kayan da aka kawo."], ["Purchase order (PO)", "odar mai saya da ke nuna abin da aka saya da yawansa."], ["Bill of lading (BOL)", "takardar jigilar kaya da kamfanin jigila ke bayarwa; sa hannu a kai yana nufin kun karɓi kayan."], ["Ragi (shortage)", "kayan da suka iso sun gaza abin da takardun suka ce."], ["Ƙari (overage)", "kayan da suka iso sun fi abin da takardun suka ce."], ["Cycle count", "ƙidaya wurare kaɗan a lokaci ɗaya don bayanai su kasance daidai."]],
          slides: [
            { title: "Abin da ake duba a karɓa", bullets: ["SKU daidai", "Yawa daidai", "Yanayi mai kyau"] },
            { title: "Matsalolin da za a rubuta", bullets: ["Ragi: ƙasa da abin da aka jera", "Ƙari: fiye da abin da aka jera", "Lalacewa: ya matse, ya jike ko ya buɗe"] },
            { title: "Kafin ku sa hannu", bullets: ["Ku rubuta kowace matsala", "Ku bi tsarin wurin aikinku", "Sa hannu marar bayani na iya nufin komai lafiya"] },
            { title: "Ƙidaya kaya", bullets: ["Cycle count: wurare kaɗan kowace rana", "Bai yi daidai ba? Ku sake ƙidaya, sannan ku kai rahoto", "Daidaito kafin sauri"] }
          ],
          sources: [BLS_CLERKS],
          tryIt: "Atisaye kawai. Packing list ya ce: SKU 1001, kwalaye 12; SKU 1002, kwalaye 8; SKU 1003, kwalaye 20. Kun ƙidaya 12 na 1001, 6 na 1002, da 21 na 1003, kuma kwali ɗaya na 1003 ya matse. Ku rubuta rahoton karɓa: kowane layi, abin da ake tsammani, abin da ya zo, da matsalar. Amsa: 1002 ya yi ragin 2; 1003 ya yi ƙarin 1 kuma 1 ya lalace.",
          youCanNow: "duba kayan da aka kawo da packing list ɗinsu da rubuta ragi, ƙari da lalacewa.",
          quickCheck: [
            { objective: "O3", q: "Packing list ya ce kwalaye 10, amma 8 suka iso. Me ake kiran wannan?", options: ["Ƙari (overage)", "Ragi (shortage)", "Cycle count", "Ajiyewa (putaway)"], answer: 1, why: "Kayan da suka gaza abin da takardun suka jera ragi ne." },
            { objective: "O3", q: "Kwali ɗaya a cikin kayan da aka kawo ya jike kuma ya yage. Me za ku yi?", options: ["Ku rubuta lalacewar a kan takardun kafin ku sa hannu, kamar yadda tsarin wurin aikinku ya ce", "Ku sa hannu a takardar ba tare da cewa komai ba", "Ku jefar da kwalin", "Ku ɓoye shi a baya"], answer: 0, why: "Dole a rubuta lalacewa don a iya neman diyya kuma kada a ɗora laifin a kan rumbun kaya." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Yadda rumbun ajiyar kaya ke aiki",
        questions: [
          { objective: "O1", q: "Me kuke buƙata kafin ku tuƙa forklift a rumbun kaya?", options: ["Katin intanet kawai", "Babu komai", "Lasisin tuƙa mota", "Horo da tantancewa daga mai ɗaukar aikin da kansa"], answer: 3, why: "OSHA ta wajabta wa mai ɗaukar aiki ya horar kuma ya tantance kowane mai tuƙa forklift." },
          { objective: "O1", q: "Mene ne gaskiya game da katin OSHA na awa 10?", options: ["Lasisin forklift ne", "Horo ne da ba dole ba, kuma ba takardar shaida ba ne", "Doka ta wajabta shi ga kowane aiki", "MSSC ce ke bayar da shi"], answer: 1, why: "OSHA ta ce horon Outreach ba dole ba ne, kuma ba takardar shaida ba ne." },
          { objective: "O2", q: "A lambar A-12-03-B, me 12 ke nufi mafi yiwuwa?", options: ["Layi (aisle)", "Farashi", "SKU", "Nauyi"], answer: 0, why: "A tsarin yanki-layi-kanta-hawa, sashe na biyu shi ne layi." },
          { objective: "O2", q: "Wane mataki ne ke zuwa nan take bayan karɓa?", options: ["Aikawa", "Haɗawa", "Ajiyewa (putaway)", "Ɗauko"], answer: 2, why: "Bayan an karɓi kaya, ana ajiye su a wurin ajiyarsu." },
          { objective: "O3", q: "Cycle count ɗinku ya nuna 14, amma tsarin kwamfuta ya ce 16. Me za ku fara yi?", options: ["Ku canja tsarin zuwa 14", "Ku rubuta 16 don ya yi daidai", "Ku yi watsi da shi", "Ku sake ƙidaya, sannan ku kai rahoto idan har yanzu bai yi daidai ba"], answer: 3, why: "Ku fara sake ƙidaya; idan har yanzu bai yi daidai ba, ku kai rahoto don a duba." }
        ]
      }
    },
    {
      name: "Babi na 2: Aiki lafiya da samun aiki",
      lessons: [
        {
          title: "Ɗaga kaya lafiya da haɗurran rumbun kaya",
          objectives: ["O5"],
          minutes: 5,
          goal: "Zaɓi hanya mai aminci ta ɗagawa, motsawa da kai rahoton haɗurra a rumbun kaya.",
          text: [
            "OSHA ta ambaci manyan haɗurran rumbun kaya: forklift da sauran motoci masu inji, ɗaga kaya da gajiyar maimaita motsi, sarrafa kaya, sinadarai, zamewa, tuntuɓe da faɗuwa, da robot da bel mai motsa kaya (conveyor). Raunukan da aka fi samu su ne ciwon tsoka daga ɗaga kaya da bugun forklift.",
            "Ku ɗaga cikin hikima. Ku tsara ɗagawar da hanyar. Ku matso kusa da kayan, ku lanƙwasa gwiwoyinku, ku riƙe bayanku a miƙe da kayan kusa da jikinku, kuma kada ku murɗa jiki: ku juya da ƙafafunku. Ku yi amfani da keken tura kaya (cart), hand truck ko pallet jack idan za ku iya. Don kaya masu nauyi ko marasa daɗin riƙewa, ku nemi a ɗaga tare (team lift).",
            "Kusa da injuna: ku zauna a hanyoyin tafiya, ku haɗa ido da direbobin forklift, kuma kada ku taɓa wucewa ƙarƙashin cokulan forklift da aka ɗaga. Ku nisanta hannuwanku daga conveyor da ke motsi. A lokacin zafi, ku riƙa shan ruwa, ku ɗauki hutunku, ku gaya wa wani idan kuna jin jiri ko rashin lafiya.",
            "Sauri yana da muhimmanci, amma kada ku taɓa bin gajeriyar hanya marar aminci. Ku kai rahoton haɗurra kamar zubewar ruwa, kantocin da suka lalace ko ƙofofin fita da aka toshe ga shugabanku nan take."
          ],
          steps: ["Ku tsara: nauyinsa nawa, ina za a kai, hanyar a buɗe take?", "Ku matso kusa, ku lanƙwasa gwiwoyi, baya a miƙe.", "Ku ɗaga da ƙafafunku, kaya kusa da jikinku.", "Ku juya da ƙafafunku; kada ku murɗa jiki.", "Ku yi amfani da cart ko pallet jack, ko ku nemi team lift, don kaya masu nauyi.", "Ku kai rahoton haɗurra nan take."],
          words: [["Ergonomics", "daidaita aiki da jiki don hana gajiyar tsoka da rauni."], ["Pallet jack", "kayan aiki na turawa da hannu ko mai inji da ke ɗagawa da motsa pallet zuwa ɗan nisa."], ["Team lift (ɗagawa tare)", "mutane biyu ko fiye suna ɗaga kaya ɗaya mai nauyi ko marar daɗin riƙewa tare."], ["Rashin lafiyar zafi", "ciwo daga aiki a cikin zafi, kamar gajiyar zafi (heat exhaustion) ko bugun zafi (heat stroke)."]],
          slides: [
            { title: "Manyan haɗurran rumbun kaya", bullets: ["Forklift da motoci masu inji", "Ɗaga kaya da gajiyar maimaita motsi", "Zamewa, tuntuɓe, faɗuwa, conveyor, zafi"] },
            { title: "Ku ɗaga cikin hikima", bullets: ["Ku tsara, ku matso kusa, ku lanƙwasa gwiwoyi", "Kaya kusa da jiki; ku juya da ƙafafunku", "Cart, pallet jack ko team lift don kaya masu nauyi"] },
            { title: "Kusa da injuna", bullets: ["Ku zauna a hanyoyin tafiya; ku haɗa ido da direbobi", "Kada ku taɓa wucewa ƙarƙashin cokulan da aka ɗaga", "Hannuwa nesa da conveyor da ke motsi"] },
            { title: "Sauri mai aminci", bullets: ["Ruwa da hutu a lokacin zafi", "Babu gajerun hanyoyi marasa aminci", "Ku kai rahoton haɗurra nan take"] }
          ],
          sources: [OSHA_WAREHOUSE, OSHA_WH_HAZARDS, OSHA_HEAT],
          tryIt: "Ku yi atisaye da kwali mara komai ko mai ɗan kaya kaɗan a gida. Ku ɗaga shi ta bin kowane mataki, kuna faɗin kowane mataki da babbar murya. Sannan ku rubuta haɗurra uku da za ku iya gani a rumbun kaya da abin da za ku yi game da kowanne.",
          youCanNow: "ɗagawa da motsa kaya lafiya da kai rahoton haɗurran rumbun kaya ta hanyar da ta dace.",
          quickCheck: [
            { objective: "O5", q: "Kuna buƙatar juyawa yayin da kuke ɗauke da kwali. Yaya za ku yi?", options: ["Ku murɗa kugu", "Ku juya da ƙafafunku", "Ku jefa kwalin", "Ku fara ɗaga shi sama da kanku"], answer: 1, why: "Juyawa da ƙafafu yana kare bayanku; murɗa jiki yayin ɗagawa yana jawo rauni." },
            { objective: "O5", q: "Kun ga forklift yana zuwa a layinku. Mene ne ya fi aminci?", options: ["Ku bi bayansa da sauri", "Ku shiga ƙarƙashin cokulan da aka ɗaga", "Ku zauna a hanyar tafiya ku haɗa ido da direban", "Ku ɗaga hannu ku ci gaba da tafiya a hanyarsa"], answer: 2, why: "Hanyoyin tafiya da haɗa ido suna taimaka wa direban ya gan ku, kuma suna nisanta ku daga hanyarsa." }
          ]
        },
        {
          title: "Gina pallet mai aminci",
          objectives: ["O4"],
          minutes: 6,
          goal: "Tsara ɗora kaya a kan pallet, masu nauyi a ƙasa, hawa-hawa daidai, kuma jimillar nauyi cikin iyaka.",
          text: [
            "Pallet mai kyau yana isa ba tare da ya watse ba kuma yana kiyaye mutane. Da farko ku duba pallet ɗin kansa: babu katakai da suka karye ko ƙusoshin da suka fito waje.",
            "Kwalaye masu nauyi a ƙasa, marasa nauyi a sama. Ku yi hawa-hawa daidai kuma lebur. Ku riƙe kwalaye a cikin gefunan pallet (kada su rataya waje). Ku juya kowane hawa na biyu don kwalayen su ƙetare juna (ana kiran wannan interlocking); yana taimaka wa tari ya riƙe juna. Ku zauna ƙasa da iyakar tsayi da nauyi na wurin aikinku.",
            "Ku haɗa nauyin. Misali (atisaye kawai): kwalaye 20 kowanne 25 lb (fam) suna 500 lb, tare da pallet mai kusan 40 lb ya zama 540 lb. Ku duba cewa ya yi ƙasa da iyakar pallet, kanta da injin.",
            "Ku naɗe kayan da stretch wrap (lilin roba), da ƙarfi daga ƙasa zuwa sama, kuma ku naɗe shi har da pallet ɗin. Ku sa alamomi (labels) suna fuskantar waje inda za a iya scan su. Kafin a ɗora kaya a manyan motoci, ana ja birkin tirela kuma ana toshe tayoyinta (chock); ana rarraba kaya daidai a cikin tirelar."
          ],
          steps: ["Ku duba pallet: babu katakai da suka karye ko ƙusoshi.", "Kwalaye mafi nauyi a hawan ƙasa.", "Hawa-hawa daidai, cikin gefuna, interlocked.", "Ku haɗa jimillar nauyi ku duba iyakoki.", "Ku naɗe da stretch wrap da ƙarfi, daga ƙasa zuwa sama, har da pallet.", "Alamomi suna fuskantar waje."],
          words: [["Pallet", "shimfiɗaɗɗen gindi na katako ko roba da ake tara kaya a kai don a motsa su tare."], ["Interlocking", "juya kowane hawa na kwalaye don su rufe hawan da ke ƙasa."], ["Overhang (ratayewa)", "kwalayen da ke rataye a gefen pallet."], ["Stretch wrap", "siririn lilin roba da ake naɗe kaya da shi don ya riƙe su tare."]],
          slides: [
            { title: "Ku fara daidai", bullets: ["Ku duba pallet don katakai da suka karye da ƙusoshi", "Kwalaye mafi nauyi a ƙasa"] },
            { title: "Ku tara daidai", bullets: ["Hawa-hawa daidai kuma lebur", "Babu ratayewa", "Ku yi interlocking na hawa-hawa"] },
            { title: "Ku duba nauyi", bullets: ["Kwalaye x nauyi, tare da pallet", "Ƙasa da iyakar pallet, kanta da injin"] },
            { title: "Ku gama daidai", bullets: ["Ku naɗe da ƙarfi, daga ƙasa zuwa sama", "Alamomi suna fuskantar waje"] }
          ],
          sources: [OSHA_WH_HAZARDS, OSHA_178],
          tryIt: "Atisaye kawai. Kuna da kwalaye 8 na 50 lb, kwalaye 12 na 20 lb da kwalaye 6 na 10 lb. Ku zana pallet ɗin daga gefe: waɗanne kwalaye ne a kowane hawa. Ku haɗa jimillar nauyi tare da pallet na 40 lb ku duba cewa ya yi ƙasa da iyakar 1,000 lb. Amsa: 400 + 240 + 60 + 40 = 740 lb.",
          youCanNow: "tsara ɗora kaya lafiya a kan pallet, masu nauyi a ƙasa, hawa-hawa daidai, kuma jimilla cikin iyaka.",
          quickCheck: [
            { objective: "O4", q: "A ina kwalaye mafi nauyi ke zuwa a kan pallet?", options: ["A hawan sama", "Rataye a gefe", "A hawan tsakiya kawai", "A hawan ƙasa"], answer: 3, why: "Kaya masu nauyi a ƙasa suna sa tarin ya tsaya daram kuma suna kare kwalaye marasa nauyi." },
            { objective: "O4", q: "Atisaye: kwalaye 30 kowanne 20 lb a kan pallet na 40 lb. Mene ne jimillar nauyi?", options: ["640 lb", "600 lb", "540 lb", "60 lb"], answer: 0, why: "30 x 20 = 600 lb, tare da pallet na 40 lb = 640 lb." }
          ]
        },
        {
          title: "Samun aiki da ci gaba",
          objectives: ["O1", "O5"],
          minutes: 5,
          goal: "Rubuta shirin samun aiki mai masu ɗaukar aiki, burin takardar shaida da layukan résumé na gaskiya.",
          text: [
            "Inda za ku nema: shafukan ɗaukar aiki na manyan shaguna da kamfanonin jigila, allunan ayyuka na gida, hukumomin samar da ma'aikata (staffing agencies) da American Job Center na yankinku (ofishin aiki na jama'a kyauta), wanda a wasu lokuta zai iya taimakawa wajen biyan horo da takardun shaida. Rumbunan kaya da yawa suna ɗaukar mutanen da ke da tarihin laifi; ku tambayi ofishin aikin game da masu ɗaukar aiki na dama ta biyu (second-chance).",
            "Abin da masu ɗaukar aiki ke so: zuwa a kan lokaci, ƙidaya a hankali, ɗabi'un tsaro da sauri mai ɗorewa. Rumbunan kaya sau da yawa suna auna rate ɗinku (yawan aiki), kamar yawan ɗauko kaya a awa ɗaya. Ku cimma shi ta aiki cikin hikima (hanyar tafiya, scan a hankali), kuma kada ku taɓa yin haka ta tsallake tsaro.",
            "Ku sa résumé ɗinku ya dace da aikin. Ku yi amfani da kalmomin aiki da misalai na gaske: \"Na ƙidaya kuma na duba kayan da aka kawo da packing list\" ko \"Na kammala horon tsaro da jigilar kaya a rumbun kaya (Koach Learn), 2026\". Tsoffin sojoji: ayyukan samar da kayayyaki, wurin ajiye motoci (motor pool) da jigilar kaya suna da amfani, don haka ku rubuta su da kalmomin yau da kullum.",
            "Ku tsara ci gabanku. Takardar shaida kamar MSSC CLA, sannan CLT, da horon forklift na mai ɗaukar aiki na iya kai ku zuwa ayyuka masu albashi mafi girma kamar shugaban ƙungiya, kula da kaya (inventory control) ko mai tsara jigilar kaya."
          ],
          steps: ["Ku jera masu ɗaukar aiki ko shirye-shirye uku kusa da ku, har da American Job Center ɗinku.", "Ku zaɓi burin takardar shaida (misali MSSC CLA) da ranar da kuke son cimmawa.", "Ku rubuta layukan résumé biyu na gaskiya daga wannan kwas ko aikin da kuka yi a baya.", "Ku yi atisayen amsa ta daƙiƙa 30: \"Yaya kuke kasancewa daidai da lafiya cikin sauri?\""],
          words: [["Rate (yawan aiki)", "yawan aikin da kuke yi a wani lokaci, kamar yawan ɗauko kaya a awa ɗaya."], ["American Job Center", "ofishin jama'a kyauta (a Amurka) da ke taimaka wa mutane samun aiki da horo."], ["Mai ɗaukar aiki na dama ta biyu (second-chance employer)", "kamfanin da ke ɗaukar mutanen da ke da tarihin laifi aiki."]],
          slides: [
            { title: "Inda za ku nema", bullets: ["Shafukan ɗaukar aiki na kamfanoni da allunan ayyuka", "Hukumomin samar da ma'aikata", "American Job Center na yankinku"] },
            { title: "Abin da masu ɗaukar aiki ke so", bullets: ["Kan lokaci, daidai, lafiya", "Ku cimma rate ta aiki cikin hikima", "Kada ku taɓa tsallake tsaro"] },
            { title: "Résumé ɗinku", bullets: ["Kalmomin aiki da misalai na gaske", "Gaskiya game da horo da takardun shaida", "Tsoffin sojoji: ku fassara ayyukan samar da kaya da jigila"] },
            { title: "Ku ci gaba", bullets: ["MSSC CLA, sannan CLT", "Horon forklift na mai ɗaukar aiki", "Shugaban ƙungiya, kula da kaya, mai tsarawa"] }
          ],
          sources: [AJC, MSSC_CLT, BLS_MOVERS],
          tryIt: "Ku rubuta shirinku na samun aiki: masu ɗaukar aiki ko shirye-shirye uku kusa da ku, burin takardar shaidarku da rana, layukan résumé biyu na gaskiya, da amsarku ta daƙiƙa 30 ga \"Yaya kuke kasancewa daidai da lafiya cikin sauri?\" Ku karanta amsar da babbar murya.",
          youCanNow: "rubuta shirin samun aiki a rumbun kaya, tare da burin takardar shaida da layukan résumé na gaskiya.",
          quickCheck: [
            { objective: "O5", q: "Kuna baya a rate ɗinku na ɗauko kaya a awa ɗaya. Mece ce hanya daidai ta kamawa?", options: ["Ku tsallake scan don ku yi sauri", "Ku yi gudu a layuka", "Ku ɗauko bisa hanyar tafiya ku scan a hankali", "Ku hau kantoci maimakon amfani da tsani"], answer: 2, why: "Aiki cikin hikima yana rage lokaci; gajerun hanyoyi marasa aminci suna jawo rauni da kurakurai." },
            { objective: "O1", q: "Wane layin résumé ne na gaskiya kuma mai ƙarfi?", options: ["\"Ina da takardar shaidar MSSC CLT\" (kafin ku ci ta)", "\"Mai ƙwazon aiki\"", "\"Ina da takardar shaidar forklift\" (ba tare da tantancewar mai ɗaukar aiki ba)", "\"Na ƙidaya kuma na duba kayan da aka kawo da packing list\""], answer: 3, why: "Yana amfani da kalmar aiki da aiki na gaske, kuma bai yi da'awar abin da ba ku da shi ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Aiki lafiya da samun aiki",
        questions: [
          { objective: "O5", q: "Wani kwali ya yi nauyi da yawa don ku ɗaga shi kaɗai. Me za ku yi?", options: ["Ku ɗaga shi da sauri kafin ya yi ciwo", "Ku yi amfani da cart ko pallet jack, ko ku nemi team lift", "Ku ja shi da bayanku a lanƙwashe", "Ku bar shi a layi"], answer: 1, why: "Ku yi amfani da kayan aiki ko team lift don kaya masu nauyi don hana raunin baya." },
          { objective: "O5", q: "Kun ga zubewar ruwa a wani layi. Mene ne mataki daidai?", options: ["Ku zagaye ta ba tare da cewa komai ba", "Ku jira wani ya gan ta", "Ku nisanta mutane ku kai rahoto nan take", "Ku rufe ta da kwali"], answer: 2, why: "Ku kai rahoton haɗurra nan take don a share su kafin wani ya zame." },
          { objective: "O4", q: "Me interlocking na hawa-hawa a kan pallet ke yi?", options: ["Yana taimaka wa tari ya riƙe juna", "Yana ƙara masa nauyi", "Yana ɓoye alamomi", "Yana bar kwalaye su rataya a gefe"], answer: 0, why: "Hawa-hawan da suka rufe juna suna ɗaure tarin don kada ya rabu." },
          { objective: "O4", q: "Wane pallet ne a shirye don a motsa?", options: ["Kwalaye na rataye a gefe", "Kwalaye marasa nauyi a ƙasa", "Ba a ɗaure ba, ba a naɗe ba", "Kwalaye masu nauyi a ƙasa, hawa-hawa daidai, an naɗe, alamomi a waje"], answer: 3, why: "Yana bin kowace doka: masu nauyi a ƙasa, daidai, an naɗe kuma yana da alamomi." },
          { objective: "O1", q: "Wane ofishi ne zai iya taimaka muku samun ayyukan rumbun kaya da horo kyauta?", options: ["American Job Center na yankinku", "Ofishin sayar da tikiti", "DMV (ofishin motoci)", "Banki"], answer: 0, why: "American Job Centers ofisoshin jama'a ne kyauta don aiki da horo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Ayyukan Rumbun Ajiyar Kaya da Jigilar Kaya (Logistics)",
    questions: [
      { objective: "O1", q: "Wane aiki ne ke cike odar masu saya ta hanyar ɗauko kaya daga kantoci?", options: ["Ma'aikacin karɓar kaya", "Mai ɗauko kaya (picker)", "Makanikin manyan motoci", "Mai gadi"], answer: 1, why: "Masu ɗauko kaya suna fitar da kaya daga ajiya don cike oda." },
      { objective: "O1", q: "Wace takardar shaida ne dole ku ci kafin ku yi MSSC CLT?", options: ["CDL (lasisin manyan motoci)", "Katin OSHA na awa 30", "MSSC Certified Logistics Associate (CLA)", "Katin forklift"], answer: 2, why: "MSSC tana buƙatar CLA kafin jarabawar CLT." },
      { objective: "O1", q: "A ina ya kamata ku duba albashi da makomar ayyukan rumbun kaya?", options: ["Occupational Outlook Handbook a bls.gov", "Wani saƙo a kafofin sada zumunta", "Hasashen aboki", "Wasan bidiyo"], answer: 0, why: "Littafin BLS shi ne majiyar hukuma don albashi da makomar aiki." },
      { objective: "O2", q: "Mene ne tsari daidai na tafiyar kaya?", options: ["Aikawa, ɗauko, karɓa", "Haɗawa, karɓa, ajiyewa", "Ɗauko, karɓa, ajiya", "Karɓa, ajiyewa, ajiya, ɗauko, haɗawa, aikawa"], answer: 3, why: "Kaya suna shigowa, ana ajiye su, sannan a ɗauko su, a haɗa su kuma a aika su." },
      { objective: "O2", q: "Atisaye: wane wuri ne na farko bisa hanyar tafiya?", options: ["B-02-01-A", "A-07-04-C", "A-02-06-B", "B-01-01-A"], answer: 2, why: "Ku jera bisa yanki, sannan layi: yanki A layi 02 yana zuwa kafin A layi 07 da dukkan yanki B." },
      { objective: "O2", q: "Me yasa kuke scan wurin da kayan idan kuna ɗauko kaya?", options: ["Don tsarin kwamfuta ya san ainihin abin da ya motsa", "Don ya rage muku sauri", "Don duba lokaci", "Don nishaɗi kawai"], answer: 0, why: "Scan yana sa bayanan warehouse management system su kasance daidai." },
      { objective: "O2", q: "Wurin SKU ɗinku babu komai. Me za ku yi?", options: ["Ku ɗauki kowane kaya da ke kusa", "Ku kai rahoto ga shugabanku", "Ku rubuta cewa odar ta kammala", "Ku bar layin babu komai ba tare da cewa komai ba"], answer: 1, why: "Ana kai rahoton wuri marar komai don a nemo kayan kuma a gyara bayanai." },
      { objective: "O3", q: "Mene ne bill of lading?", options: ["Jerin cefane", "Alamar tsaro", "Takardar albashi", "Takardar jigilar kaya da kuke sa hannu a kai idan an kawo kaya"], answer: 3, why: "Bill of lading takardar jigilar kaya ce ta kamfanin jigila." },
      { objective: "O3", q: "Jerin ya ce kwalaye 15; 17 suka iso. Mene ne wannan?", options: ["Ƙari (overage)", "Ragi (shortage)", "Lalacewa", "Ajiyewa (putaway)"], answer: 0, why: "Abin da ya fi abin da takardun suka jera ƙari ne." },
      { objective: "O3", q: "Waɗanne abubuwa uku kuke dubawa a kowane layi idan kuna karɓar kaya?", options: ["Launi, girma da ƙamshi", "SKU daidai, yawa daidai, yanayi mai kyau", "Farashi, haraji da tukuici", "Sunan direba, launin mota, lokaci"], answer: 1, why: "Karɓa yana duba kayan, ƙididdiga da yanayi." },
      { objective: "O3", q: "Mene ne cycle count?", options: ["Ƙidaya kekuna", "Ƙidaya dukkan rumbun kaya sau ɗaya a shekara kawai", "Ƙidaya wurare kaɗan a lokaci ɗaya don bayanai su kasance daidai", "Ƙidaya awoyin aikinku"], answer: 2, why: "Cycle count yana duba wurare kaɗan kowace rana don bayanai su kasance daidai." },
      { objective: "O4", q: "Me kuke fara dubawa idan kuna gina pallet?", options: ["Launin alama", "Cewa pallet ɗin babu katakai da suka karye ko ƙusoshin da suka fito", "Yanayin sararin samaniya", "Rediyon babbar motar"], answer: 1, why: "Pallet da ya lalace na iya karyewa ya zubar da kayan." },
      { objective: "O4", q: "Atisaye: kwalaye 10 na 30 lb da kwalaye 10 na 15 lb a kan pallet na 40 lb. Jimilla?", options: ["450 lb", "300 lb", "490 lb", "45 lb"], answer: 2, why: "300 + 150 + 40 = 490 lb." },
      { objective: "O4", q: "Me yasa kwalaye ba za su rataya a gefen pallet ba?", options: ["Ratayewa tana matse kwalaye kuma na iya sa kayan su rasa daidaito", "Ba ya da kyan gani kawai", "Yana rage nauyin kayan", "Yana sa naɗewa ya yi sauri"], answer: 0, why: "Kwalayen da ke rataye ba su da tallafi, suna matsewa, kuma na iya sa kayan su faɗi." },
      { objective: "O4", q: "Yaya ya kamata a naɗe stretch wrap?", options: ["A kewayen hawan sama kawai", "A sake, don ya fita cikin sauƙi", "A kan alamomi don kada a iya karanta su", "Da ƙarfi, daga ƙasa zuwa sama, har da kewayen pallet"], answer: 3, why: "Naɗewa da ƙarfi har da pallet yana riƙe dukkan kayan tare." },
      { objective: "O5", q: "Waɗanne raunuka ne aka fi samu a rumbun kaya, a cewar OSHA?", options: ["Yankan takarda", "Ciwon tsoka daga ɗaga kaya da bugun forklift", "Ƙunar rana", "Gajiyar ido daga allon kwamfuta"], answer: 1, why: "OSHA ta ambaci ciwon tsoka daga ɗaga kaya da bugun motoci masu inji a matsayin mafi yawa." },
      { objective: "O5", q: "Yaya ya kamata ku ɗaga kwali daga ƙasa?", options: ["Ku matso kusa, ku lanƙwasa gwiwoyi, ku riƙe baya a miƙe da kayan kusa", "Ku sunkuya daga kugu da ƙafafu a miƙe", "Ku murɗa jiki yayin ɗagawa", "Ku riƙe shi nesa da jikinku"], answer: 0, why: "Amfani da ƙafafu da riƙe kaya kusa yana kare bayanku." },
      { objective: "O5", q: "Akwai zafi sosai a rumbun kaya kuma kuna jin jiri. Me za ku yi?", options: ["Ku ci gaba da aiki don ku cimma rate ɗinku", "Ku tsallake hutunku", "Ku gaya wa wani, ku sha ruwa ku huta a wuri mai sanyi", "Ku tafi gida ba tare da gaya wa kowa ba"], answer: 2, why: "Jiri na iya zama rashin lafiyar zafi; ku gaya wa wani, ku huce kuma ku sha ruwa." },
      { objective: "O5", q: "Mece ce hanya mai aminci ta riƙe rate ɗinku?", options: ["Ku tsallake scan", "Ku hau kan pallet jack", "Ku hau kantoci don kai wa kaya", "Ku yi aiki cikin hikima: hanyar tafiya, scan a hankali, babu gajerun hanyoyi marasa aminci"], answer: 3, why: "Hanyoyin hikima suna rage lokaci ba tare da haɗarin rauni ko kurakurai ba." },
      { objective: "O1", q: "Mene ne gaskiya game da katin OSHA Outreach na awa 10?", options: ["Horo ne da ba dole ba, kuma OSHA ta ce ba takardar shaida ba ne", "Yana ba ku damar tuƙa kowane forklift", "Daidai yake da MSSC CLT", "Dokar tarayya ta wajabta shi ga kowane aikin rumbun kaya"], answer: 0, why: "OSHA ta ce azuzuwan Outreach ba dole ba ne, kuma babu ɗaya daga cikinsu da ke takardar shaida." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 4, 8, 9, 11, 12, 15, 16] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake dubawa.",
    criteria: [
      { name: "Rahoton karɓar kaya", objective: "O3", notYet: "Wata ƙididdiga ba daidai ba ce, ko an manta wani ragi, ƙari ko lalacewa.", meets: "Kowane layi yana nuna abin da ake tsammani da abin da aka karɓa, kuma an rubuta kowace matsala.", exceeds: "Yana kuma faɗin abin da za a yi kafin sa hannu a bill of lading da wanda za a gaya wa." },
      { name: "Jerin ɗauko kaya bisa hanyar tafiya", objective: "O2", notYet: "Wurare ba a jere suke ba, ko an karanta wata lamba ba daidai ba.", meets: "An jera dukkan abubuwan ɗauko bisa yanki, layi, kanta da hawa, kuma an karanta kowace lamba daidai.", exceeds: "Yana bayanin abin da za a yi idan kaya bai yi daidai ba ko wuri babu komai." },
      { name: "Shirin ɗora kaya a kan pallet", objective: "O4", notYet: "Kwalaye masu nauyi a sama, akwai ratayewa, ko jimillar nauyi ba daidai ba ce ko ta wuce iyaka.", meets: "Kwalaye masu nauyi a ƙasa, hawa-hawa daidai da interlocking, jimilla daidai ƙasa da iyaka, an naɗe kuma an sa alamomi.", exceeds: "Ya ƙara duba pallet da matakan tsaron tirela." },
      { name: "Shirin samun aiki", objective: "O1", notYet: "Babu masu ɗaukar aiki, babu burin takardar shaida, ko akwai layin résumé da ke da'awar abin da ba gaskiya ba.", meets: "Masu ɗaukar aiki ko shirye-shirye uku, takardar shaida ta gaske tare da wanda ke bayar da ita da rana, layukan résumé biyu na gaskiya.", exceeds: "Ya haɗa da amsar daƙiƙa 30 da aka yi atisaye game da daidaito da tsaro." },
      { name: "Aiki lafiya", objective: "O5", notYet: "Shirin yana ba da shawarar gajerun hanyoyi marasa aminci don cimma rate.", meets: "Amsar daƙiƙa 30 da shirin suna sa tsaro a gaba, tare da ɗaga kaya lafiya da kai rahoton haɗurra.", exceeds: "Ya ambaci wani takamaiman haɗari daga shafin OSHA na rumbunan kaya da yadda ake hana shi." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin da fakitin fara aiki da ya cika ma'aunin rubric",
      "Masu koyo da suka nemi aƙalla ayyukan rumbun kaya uku cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da aka ɗauka aiki a rumbun kaya ko jigilar kaya cikin kwanaki 90 (rahotannin abokan aiki da na biyo baya)",
      "Masu koyo da suka yi rajistar MSSC CLA ko suka fara horon forklift na mai ɗaukar aiki"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Takarda, fensir da na'urar lissafi (na'urar lissafin waya ma ta isa)",
      "Waya ko kwamfuta mai intanet don neman aiki da shafukan hukuma",
      "Zaɓi: wasu kwalaye marasa komai ko takardun manna (sticky notes) don atisayen hawa-hawan pallet da hanyoyin ɗauko kaya",
      "Kusan minti 60 gaba ɗaya"
    ],
    facilitatorNotes: [
      "Ku shirya ƙaramin rumbun kaya da kantoci masu alamomi (takardun manna kamar A-01-01-A) ku yi tseren ɗauko kaya da agogo, inda ake ba da maki kan daidaito da farko.",
      "Ku yi amfani da packing list na atisaye da aka buga da kwali mai kaya iri-iri don aikin karɓar kaya.",
      "Ku yi atisayen ɗaga kaya da kwalaye marasa komai ko marasa nauyi kawai.",
      "Ku gayyaci mai kula da rumbun kaya na yankin ko ma'aikacin American Job Center don ya yi magana game da ɗaukar aiki, rate da ɗaukar aiki na dama ta biyu.",
      "Ku ba da maki ga fakitin fara aiki da ma'aunin rubric, kuma ku duba layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
