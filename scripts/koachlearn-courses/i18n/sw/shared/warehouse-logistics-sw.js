"use strict";

// Koach Learn course (Swahili translation of shared/warehouse-logistics.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const BLS_MOVERS = { name: "U.S. Bureau of Labor Statistics: Wafanyakazi wa mikono na wahamishaji wa mizigo", url: "https://www.bls.gov/ooh/transportation-and-material-moving/hand-laborers-and-material-movers.htm" };
const BLS_CLERKS = { name: "U.S. Bureau of Labor Statistics: Makarani wa kumbukumbu za bidhaa", url: "https://www.bls.gov/ooh/office-and-administrative-support/material-recording-clerks.htm" };
const MSSC_CLT = { name: "MSSC: Certified Logistics Technician (CLT) na Certified Logistics Associate (CLA)", url: "https://www.msscusa.org/certified-logistics-technician-clt/" };
const OSHA_OUTREACH = { name: "OSHA Outreach Training Program (madarasa ya saa 10 na saa 30)", url: "https://www.osha.gov/training/outreach" };
const OSHA_WAREHOUSE = { name: "OSHA: Kazi za ghala", url: "https://www.osha.gov/warehousing" };
const OSHA_WH_HAZARDS = { name: "OSHA: Hatari za ghala na suluhisho zake", url: "https://www.osha.gov/warehousing/hazards-solutions" };
const OSHA_HEAT = { name: "OSHA: Kufanya kazi kwenye joto", url: "https://www.osha.gov/heat-exposure" };
const OSHA_178 = { name: "OSHA 29 CFR 1910.178: Magari ya viwandani yenye injini (breki za trela na vizuizi vya magurudumu)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.178" };
const AJC = { name: "CareerOneStop: tafuta American Job Center iliyo karibu nawe", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" };

module.exports = {
  id: "warehouse-logistics-sw",
  lang: "sw",
  translationOf: "warehouse-logistics",
  category: "Workforce Development",
  name: "Kazi za Ghala na Usafirishaji wa Bidhaa",
  skills: "Kujua kazi za ghala na vyeti vyake, Kupata bidhaa kwa SKU na msimbo wa mahali, Kupokea mzigo na kuukagua, Kupanga paleti salama, Kufanya kazi kwa usalama na kwa kasi",
  outcome: "kutaja kazi kuu za ghala na vyeti vinavyokusaidia kuzipata, kufuatilia bidhaa kuanzia kupokelewa hadi kusafirishwa, kupata bidhaa kwa kutumia SKU yake na msimbo wa mahali, kukagua mzigo uliofika dhidi ya karatasi zake na kuandika matatizo yoyote, kupanga mzigo salama wa paleti, na kutengeneza mpango wa kuajiriwa.",
  about: [
    "Maghala na vituo vya usambazaji vinahamisha bidhaa tunazonunua kila siku, na vinaajiri mwaka mzima. Kozi hii ni kwa wanaotafuta kazi, watu wanaorudi nyumbani kutoka gerezani, wanajeshi wastaafu na yeyote anayetaka kazi ya kwanza ya kudumu katika usafirishaji wa bidhaa (logistics) yenye nafasi ya kukua.",
    "Utajifunza kazi zilizopo ghalani, jinsi bidhaa zinavyotoka kwenye lori hadi kwenye rafu hadi kwa mteja, jinsi ya kusoma misimbo ya mahali, jinsi ya kupokea mzigo na kuhesabu bidhaa kwa usahihi, jinsi ya kupanga paleti salama, na jinsi ya kubaki salama huku ukienda na kasi ya kazi.",
    "Kozi hii inakuandaa. Haikupi cheti. Ukitaka cheti, Manufacturing Skill Standards Council (MSSC, baraza la kitaifa la viwango vya ujuzi nchini Marekani) inatoa Certified Logistics Associate (CLA) na Certified Logistics Technician (CLT). Kuendesha forklift kunahitaji mafunzo ya mwajiri; tazama kozi yetu \"Misingi ya Kuendesha Forklift\".",
    "Kila somo linachukua kama dakika tano na linaisha na kazi ya \"Jaribu sasa\" unayoweza kuifanya kwa karatasi na penseli. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tengeneza kifurushi cha kuanzia kazi ya ghala: ripoti ya kupokea mzigo wa mazoezi (hesabu zilizokaguliwa dhidi ya orodha ya mzigo, na kila upungufu, ziada na uharibifu umeandikwa), orodha ya kuchukua bidhaa uliyoipanga kwa mpangilio wa kutembea kwa kutumia misimbo ya mahali, mchoro wa mpango wa paleti salama wenye uzito na matabaka, na mpango wa ukurasa mmoja wa kuajiriwa wenye waajiri au programu tatu, cheti utakacholenga, na mistari miwili ya kweli ya CV.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaotafuta kazi ya kwanza katika ghala, kituo cha usambazaji au usafirishaji wa bidhaa: wanaotafuta kazi, watu wanaorudi nyumbani kutoka gerezani, wanajeshi wastaafu na walio jeshini wenye uzoefu wa vifaa, vijana wazima na watu wanaobadilisha kazi.",
    startingPoint: "Wanaweza kuhesabu, kusoma namba na lebo, na kufuata maelekezo. Wana uzoefu mdogo wa misimbo ya mahali, karatasi za kupokea mzigo, kuhesabu bidhaa au kupanga paleti. Baadhi wamefanya kazi za nguvu lakini hawajajifunza kunyanyua kwa usalama.",
    gap: "Maghala yanaajiri watu wengi, lakini wafanyakazi wapya wanaokosea kuhesabu, wanaochanganya mahali au wanaoumia hawadumu. Wanafunzi wanahitaji tabia za msingi za usahihi na usalama, na njia wazi ya kupata cheti na kupandishwa cheo, ili waajiriwe na wabaki kazini.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno gumu limeelezwa",
      "Hesabu: namba nzima, kujumlisha na kuzidisha kwa urahisi; namba za mazoezi ni za kubuni",
      "Hakuna vifaa vinavyohitajika: fanya mazoezi kwa karatasi, vitu vya nyumbani au maboksi",
      "Hakuna matumizi ya forklift wala mashine zenye injini katika kozi hii",
      "Vifaa: simu au kompyuta ya maktaba kwa kurasa rasmi na kutafuta kazi"
    ],
    prerequisites: "Hakuna. \"Misingi ya Usalama Kazini (OSHA)\" na \"Misingi ya Kuendesha Forklift\" ni kozi nzuri za kufuata."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa orodha ya matangazo ya kazi za ghala", action: "kutambua nafasi za kazi, kile kila moja inafanya na vyeti vinavyokusaidia kuajiriwa", standard: "ukitaja angalau nafasi nne na cheti kimoja halisi pamoja na anayekitoa" },
    { id: "O2", condition: "Ukipewa orodha ya kuchukua bidhaa yenye SKU na misimbo ya mahali", action: "kupata mahali pa kila bidhaa na kupanga uchukuaji kwa mpangilio wa kutembea", standard: "ukisoma kila msimbo wa mahali kwa usahihi" },
    { id: "O3", condition: "Ukipewa mzigo wa mazoezi na orodha yake ya mzigo", action: "kupokea mzigo na kuandika upungufu, ziada au uharibifu wowote", standard: "kila hesabu na kila maelezo yakiwa sahihi" },
    { id: "O4", condition: "Ukipewa maboksi na uzito wake", action: "kupanga mzigo salama wa paleti wenye vitu vizito chini na usiozidi kikomo cha uzito", standard: "ukitimiza kila sharti la orodha ya ukaguzi wa paleti" },
    { id: "O5", condition: "Ukipewa kazi au hatari ya ghalani", action: "kuchagua njia salama ya kunyanyua, kuhamisha au kuripoti huku ukienda na kasi ya kazi", standard: "ukipata angalau hali 4 kati ya 5 sahihi" }
  ],
  chapters: [
    {
      name: "Sura 1: Jinsi ghala linavyofanya kazi",
      lessons: [
        {
          title: "Kazi za ghala na vyeti vinavyosaidia",
          objectives: ["O1"],
          minutes: 5,
          goal: "Tambua kazi kuu za ghala na cheti kimoja kinachoweza kukusaidia kuajiriwa.",
          text: [
            "Kazi za kuanzia zinazojulikana: mhamishaji wa bidhaa au msaidizi wa ghala (kuhamisha bidhaa), mchukuaji na mfungaji (kujaza oda za wateja), mpangaji wa rafu au mjazaji wa oda, karani wa kupokea na kusafirisha (kukagua bidhaa zinazoingia na kutoka), karani wa bidhaa (kuhesabu na kurekebisha kumbukumbu) na dereva wa forklift. Ukipata uzoefu unaweza kuwa kiongozi wa kikundi, msimamizi au mratibu wa bidhaa au wa usafirishaji.",
            "Kazi nyingi za kuanzia hazihitaji shahada. Kwa kawaida watu hujifunza kazini, mara nyingi kwa mwezi mmoja au chini, na hujifunza sheria za usalama zinazotokana na viwango vya OSHA (ofisi ya serikali ya Marekani ya usalama kazini). Waajiri wanatafuta watu wanaofika kwa wakati, wanaohesabu kwa makini na wanaofanya kazi kwa usalama.",
            "Vyeti vinaweza kukusaidia kuonekana. Manufacturing Skill Standards Council (MSSC) inatoa Certified Logistics Associate (CLA) na Certified Logistics Technician (CLT); unafaulu CLA kabla ya kufanya CLT. Darasa la OSHA Outreach la saa 10 linakupa kadi ya kumaliza mafunzo; ni la hiari, na OSHA inasema si cheti cha uthibitisho. Kuendesha forklift daima kunahitaji mafunzo na tathmini ya mwajiri mwenyewe.",
            "Mshahara na nafasi za kazi zinatofautiana kwa mahali. Angalia Occupational Outlook Handbook rasmi kwenye bls.gov kwa mshahara na matarajio ya kazi, na matangazo halisi ya kazi karibu nawe."
          ],
          words: [["Logistics (usafirishaji wa bidhaa)", "kupanga na kuhamisha bidhaa kutoka zinapotengenezwa hadi zinapohitajika."], ["Kituo cha usambazaji", "ghala kubwa linalotuma bidhaa kwa maduka au kwa wateja."], ["Cheti", "karatasi au kadi inayoonyesha kuwa ulifaulu mtihani au ulimaliza mafunzo."], ["MSSC", "Manufacturing Skill Standards Council, kikundi cha kitaifa nchini Marekani kinachotoa vyeti vya CLA na CLT."]],
          slides: [
            { title: "Kazi za kuanzia", bullets: ["Mhamishaji wa bidhaa, mchukuaji, mfungaji, mpangaji wa rafu", "Karani wa kupokea na kusafirisha, karani wa bidhaa", "Dereva wa forklift (kwa mafunzo ya mwajiri)"] },
            { title: "Watu wanavyoanza", bullets: ["Kwa kawaida shahada haihitajiki", "Hujifunza kazini, mara nyingi kwa mwezi mmoja au chini", "Kufika kwa wakati, kuhesabu kwa makini, kazi salama"] },
            { title: "Vyeti vinavyosaidia", bullets: ["MSSC: CLA kwanza, kisha CLT", "Kadi ya OSHA ya saa 10: ya hiari, si cheti cha uthibitisho", "Forklift: mafunzo na tathmini ya mwajiri"] },
            { title: "Kagua ukweli", bullets: ["Mshahara na matarajio: Occupational Outlook Handbook ya bls.gov", "Matangazo halisi ya kazi karibu nawe"] }
          ],
          sources: [BLS_MOVERS, BLS_CLERKS, MSSC_CLT, OSHA_OUTREACH],
          tryIt: "Tafuta matangazo matatu ya kazi za ghala karibu nawe. Kwa kila moja, andika jina la kazi, zamu, kazi inafanya nini kwa mstari mmoja, na cheti au ujuzi wowote unaoombwa. Kisha fungua ukurasa wa MSSC CLT na uandike nani anatoa CLA na CLT.",
          youCanNow: "kutaja kazi kuu za ghala, kile kila moja inafanya, na vyeti vinavyoweza kukusaidia kuajiriwa.",
          quickCheck: [
            { objective: "O1", q: "Kazi ipi inakagua bidhaa zinazoingia na kutoka dhidi ya karatasi?", options: ["Karani wa kupokea na kusafirisha", "Mfungaji", "Fundi wa forklift", "Mlinzi"], answer: 0, why: "Makarani wa kupokea na kusafirisha hufuatilia mizigo inayoingia na kutoka na kuikagua." },
            { objective: "O1", q: "Nani anatoa cheti cha Certified Logistics Technician (CLT)?", options: ["OSHA", "IRS", "Manufacturing Skill Standards Council (MSSC)", "Wakala wowote wa ajira"], answer: 2, why: "CLT, na CLA inayotangulia, ni vyeti vya MSSC." }
          ]
        },
        {
          title: "Mtiririko wa bidhaa na misimbo ya mahali",
          objectives: ["O2"],
          minutes: 5,
          goal: "Pata bidhaa kwa kutumia SKU yake na msimbo wa mahali, na panga uchukuaji kwa mpangilio wa kutembea.",
          text: [
            "Bidhaa hupita ghalani kwa mpangilio uleule kila siku. Kupokea: bidhaa zinafika na kukaguliwa. Kuweka mahali (putaway): zinahifadhiwa mahali maalum. Kuhifadhi. Kuchukua (picking): wafanyakazi wanatoa bidhaa kwa ajili ya oda. Kufunga. Kusafirisha: oda zinaondoka kwa malori.",
            "Kila bidhaa ina SKU (stock keeping unit), msimbo wa bidhaa hiyo hasa, kwa mfano shati la bluu la saizi kubwa. Kila sehemu ya kuhifadhi ina msimbo wa mahali. Maghala mengi hutumia eneo, njia, rafu na ngazi, kwa hiyo A-12-03-B inaweza kumaanisha eneo A, njia 12, rafu 3, ngazi B. Ghala lako litakufundisha mpangilio wake.",
            "Maghala mengi hutumia skana. Unaskani mahali na bidhaa ili mfumo wa kompyuta (mfumo wa usimamizi wa ghala) ujue nini kimehama. Kama bidhaa iliyopo haifanani na SKU, simama na umwambie kiongozi wako; usichukue kitu kinachofanana tu.",
            "Ili kuokoa hatua, chukua kwa mpangilio wa kutembea: panga orodha yako kwa njia, kisha kwa rafu, ili upite kila njia mara moja tu."
          ],
          steps: ["Soma SKU na msimbo wa mahali kwa kila mstari.", "Gawa msimbo wa mahali katika sehemu zake: eneo, njia, rafu, ngazi.", "Panga orodha kwa eneo, kisha njia, kisha rafu.", "Kila mahali, skani au kagua kwamba SKU inalingana kabla ya kuchukua.", "Kama hailingani au mahali ni patupu, ripoti."],
          words: [["SKU", "stock keeping unit: msimbo wa bidhaa moja hasa."], ["Msimbo wa mahali", "anwani ya sehemu ya kuhifadhi, kama eneo, njia, rafu na ngazi."], ["Putaway (kuweka mahali)", "kuhamisha bidhaa zilizopokelewa hadi mahali pake pa kuhifadhi."], ["Picking (kuchukua)", "kutoa bidhaa kutoka hifadhini ili kujaza oda."], ["Mfumo wa usimamizi wa ghala (WMS)", "mfumo wa kompyuta unaofuatilia kila bidhaa iko wapi."]],
          slides: [
            { title: "Mtiririko wa bidhaa", bullets: ["Kupokea, kuweka mahali, kuhifadhi", "Kuchukua, kufunga, kusafirisha"] },
            { title: "Misimbo unayotumia", bullets: ["SKU: bidhaa hasa", "Mahali: eneo, njia, rafu, ngazi", "Mfano: A-12-03-B"] },
            { title: "Chukua sahihi, chukua kwa akili", bullets: ["Skani mahali na bidhaa", "Bidhaa si sahihi au mahali patupu? Ripoti", "Panga kwa njia ili upite kila njia mara moja"] }
          ],
          sources: [BLS_CLERKS],
          tryIt: "Mazoezi tu. Panga orodha hii ya kuchukua kwa mpangilio wa kutembea (eneo, njia, rafu, ngazi): B-04-02-A, A-12-03-B, A-03-01-C, B-01-05-A, A-12-01-A. Kisha andika kila sehemu ya A-12-03-B inamaanisha nini. Jibu: mpangilio unaanza A-03-01-C, A-12-01-A, A-12-03-B.",
          youCanNow: "kusoma msimbo wa mahali, kupata bidhaa kwa SKU yake na kupanga orodha ya kuchukua kwa mpangilio wa kutembea.",
          quickCheck: [
            { objective: "O2", q: "SKU ni nini?", options: ["Aina ya forklift", "Msimbo wa bidhaa moja hasa", "Lori la kusafirisha", "Sheria ya usalama"], answer: 1, why: "Stock keeping unit ni msimbo wa bidhaa moja hasa." },
            { objective: "O2", q: "Unafika mahali na bidhaa haifanani na SKU kwenye orodha yako. Unafanya nini?", options: ["Chukua kitu kinachofanana", "Ruka mstari na usiseme kitu", "Chukua viwili vya kitu kingine", "Simama na umripoti kwa kiongozi wako"], answer: 3, why: "Kutolingana lazima kuripotiwe ili oda na kumbukumbu zibaki sahihi." }
          ]
        },
        {
          title: "Kupokea mzigo na kuhesabu bidhaa",
          objectives: ["O3"],
          minutes: 6,
          goal: "Kagua mzigo uliofika dhidi ya orodha yake ya mzigo na uandike tatizo lolote.",
          text: [
            "Lori linapofika, idara ya kupokea inakagua kwamba kilichokuja ndicho kilichoagizwa. Unalinganisha bidhaa na orodha ya mzigo (na oda ya ununuzi, kama unayo). Dereva pia anakupa bill of lading, karatasi ya usafirishaji unayoitia sahihi.",
            "Hesabu kila mstari. Kagua SKU, idadi na hali. Kama boksi limebonyea, limelowa au liko wazi, piga picha kama eneo lako la kazi linaruhusu na uandike. Kama umepata pungufu ya iliyoorodheshwa, ni upungufu; zaidi ni ziada. Andika kila tatizo kwenye karatasi kabla ya kutia sahihi, kama utaratibu wa eneo lako unavyosema. Kutia sahihi risiti safi kunaweza kumaanisha ulikubali kila kitu kuwa sawa.",
            "Kuhesabu bidhaa hufanya kazi vivyo hivyo. Cycle count ni kuhesabu sehemu chache kila siku badala ya ghala zima kwa mara moja. Kama hesabu yako hailingani na mfumo, hesabu tena, kisha ripoti. Hapa usahihi ni muhimu kuliko kasi."
          ],
          steps: ["Pata orodha ya mzigo (na oda ya ununuzi kama unayo).", "Hesabu kila mstari: SKU sahihi, idadi sahihi.", "Kagua hali ya kila boksi.", "Andika kila upungufu, ziada au uharibifu kwenye karatasi.", "Fuata utaratibu wa eneo lako kabla ya kutia sahihi bill of lading.", "Ripoti matatizo kwa kiongozi wako."],
          words: [["Orodha ya mzigo (packing list)", "orodha ya vilivyomo ndani ya mzigo."], ["Oda ya ununuzi (PO)", "oda ya mnunuzi inayoonyesha kilichonunuliwa na kiasi gani."], ["Bill of lading (BOL)", "karatasi ya usafirishaji anayotoa msafirishaji; kuitia sahihi kunasema ulipokea bidhaa."], ["Upungufu", "bidhaa zilizofika ni chache kuliko karatasi inavyosema."], ["Ziada", "bidhaa zilizofika ni nyingi kuliko karatasi inavyosema."], ["Cycle count", "kuhesabu sehemu chache kwa wakati mmoja ili kumbukumbu zibaki sahihi."]],
          slides: [
            { title: "Ukaguzi wa kupokea", bullets: ["SKU sahihi", "Idadi sahihi", "Hali nzuri"] },
            { title: "Matatizo ya kuandika", bullets: ["Upungufu: chache kuliko iliyoorodheshwa", "Ziada: nyingi kuliko iliyoorodheshwa", "Uharibifu: limebonyea, limelowa au liko wazi"] },
            { title: "Kabla ya kutia sahihi", bullets: ["Andika kila tatizo", "Fuata utaratibu wa eneo lako", "Sahihi safi inaweza kumaanisha yote yalikuwa sawa"] },
            { title: "Kuhesabu bidhaa", bullets: ["Cycle count: sehemu chache kila siku", "Hailingani? Hesabu tena, kisha ripoti", "Usahihi kabla ya kasi"] }
          ],
          sources: [BLS_CLERKS],
          tryIt: "Mazoezi tu. Orodha ya mzigo inasema: SKU 1001, kesi 12; SKU 1002, kesi 8; SKU 1003, kesi 20. Unahesabu 12 za 1001, 6 za 1002, na 21 za 1003, na kesi moja ya 1003 imebonyea. Andika ripoti ya kupokea: kila mstari, kilichotarajiwa, kilichofika, na tatizo. Jibu: 1002 pungufu 2; 1003 ziada 1 na 1 imeharibika.",
          youCanNow: "kukagua mzigo uliofika dhidi ya orodha yake ya mzigo na kuandika upungufu, ziada na uharibifu.",
          quickCheck: [
            { objective: "O3", q: "Orodha ya mzigo inasema kesi 10, lakini zilifika 8. Hii inaitwaje?", options: ["Ziada", "Upungufu", "Cycle count", "Kuweka mahali"], answer: 1, why: "Bidhaa chache kuliko karatasi inavyoorodhesha ni upungufu." },
            { objective: "O3", q: "Boksi moja katika mzigo limelowa na kuchanika. Unafanya nini?", options: ["Andika uharibifu kwenye karatasi kabla ya kutia sahihi, kama utaratibu wa eneo lako unavyosema", "Tia sahihi na usiseme kitu", "Litupe boksi", "Lifiche nyuma"], answer: 0, why: "Uharibifu lazima uandikwe ili udaiwe na usilaumiwe ghala." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Jinsi ghala linavyofanya kazi",
        questions: [
          { objective: "O1", q: "Unahitaji nini kabla ya kuendesha forklift ghalani?", options: ["Kadi ya mtandaoni tu", "Hakuna kitu", "Leseni ya gari", "Mafunzo na tathmini ya mwajiri mwenyewe"], answer: 3, why: "OSHA inamtaka mwajiri amfundishe na amtathmini kila dereva wa forklift." },
          { objective: "O1", q: "Nini ni kweli kuhusu kadi ya OSHA ya saa 10?", options: ["Ni leseni ya forklift", "Ni mafunzo ya hiari na si cheti cha uthibitisho", "Inahitajika kisheria kwa kila kazi", "Inatolewa na MSSC"], answer: 1, why: "OSHA inasema mafunzo ya Outreach ni ya hiari na si cheti cha uthibitisho." },
          { objective: "O2", q: "Katika msimbo A-12-03-B, 12 huenda ni nini?", options: ["Njia", "Bei", "SKU", "Uzito"], answer: 0, why: "Katika mpangilio wa eneo-njia-rafu-ngazi, sehemu ya pili ni njia." },
          { objective: "O2", q: "Hatua ipi inakuja moja kwa moja baada ya kupokea?", options: ["Kusafirisha", "Kufunga", "Kuweka mahali", "Kuchukua"], answer: 2, why: "Baada ya bidhaa kupokelewa, zinawekwa mahali pake pa kuhifadhi." },
          { objective: "O3", q: "Cycle count yako inaonyesha 14, lakini mfumo unasema 16. Unafanya nini kwanza?", options: ["Badilisha mfumo uwe 14", "Andika 16 ili ilingane", "Puuza", "Hesabu tena, kisha ripoti kama bado hailingani"], answer: 3, why: "Hesabu tena kwanza; kama bado hailingani, ripoti ili ikaguliwe." }
        ]
      }
    },
    {
      name: "Sura 2: Kufanya kazi kwa usalama na kuajiriwa",
      lessons: [
        {
          title: "Kunyanyua kwa usalama na hatari za ghala",
          objectives: ["O5"],
          minutes: 5,
          goal: "Chagua njia salama ya kunyanyua, kuhamisha na kuripoti hatari ghalani.",
          text: [
            "OSHA inataja hatari kuu za ghala: forklift na magari mengine yenye injini, kunyanyua na kuchoka kwa misuli kwa kurudia kazi ileile, kushughulikia mizigo, kemikali, kuteleza, kujikwaa na kuanguka, na roboti na mikanda ya kusafirisha (conveyors). Majeraha yanayotokea zaidi ni kuumia misuli kwa kunyanyua na kugongwa na forklift.",
            "Nyanyua kwa akili. Panga unyanyuaji na njia. Sogea karibu na mzigo, kunja magoti, weka mgongo wima na mzigo karibu na mwili, na usijipinde: geuka kwa miguu. Tumia toroli, hand truck au pallet jack inapowezekana. Kwa vitu vizito au visivyoshikika vizuri, omba kunyanyua kwa pamoja.",
            "Karibu na mashine: kaa kwenye njia za watembea kwa miguu, tazamana macho na madereva wa forklift, na usipite kamwe chini ya uma ulioinuliwa. Weka mikono mbali na conveyors zinazotembea. Kwenye joto, kunywa maji mara kwa mara, chukua mapumziko yako na mwambie mtu ukihisi kizunguzungu au kuumwa.",
            "Kasi ni muhimu, lakini usichukue kamwe njia ya mkato isiyo salama. Ripoti hatari kama vitu vilivyomwagika, rafu zilizoharibika au milango ya dharura iliyozibwa kwa kiongozi wako mara moja."
          ],
          steps: ["Panga: ni mzito kiasi gani, unaenda wapi, njia iko wazi?", "Sogea karibu, kunja magoti, mgongo wima.", "Nyanyua kwa miguu, mzigo karibu na mwili.", "Geuka kwa miguu; usijipinde.", "Tumia toroli au pallet jack, au omba kunyanyua kwa pamoja, kwa mizigo mizito.", "Ripoti hatari mara moja."],
          words: [["Ergonomics", "kupanga kazi ilingane na mwili ili kuzuia kuumia misuli na majeraha."], ["Pallet jack", "kifaa kinachosukumwa kwa mkono au chenye injini kinachoinua na kuhamisha paleti umbali mfupi."], ["Kunyanyua kwa pamoja", "watu wawili au zaidi wakinyanyua pamoja kitu kimoja kizito au kisichoshikika vizuri."], ["Ugonjwa wa joto", "kuumwa kutokana na kufanya kazi kwenye joto, kama uchovu wa joto au kiharusi cha joto."]],
          slides: [
            { title: "Hatari kuu za ghala", bullets: ["Forklift na magari yenye injini", "Kunyanyua na kuchoka kwa kurudia kazi ileile", "Kuteleza, kujikwaa, kuanguka, conveyors, joto"] },
            { title: "Nyanyua kwa akili", bullets: ["Panga, sogea karibu, kunja magoti", "Mzigo karibu; geuka kwa miguu", "Toroli, pallet jack au kunyanyua kwa pamoja kwa mizigo mizito"] },
            { title: "Karibu na mashine", bullets: ["Kaa kwenye njia za watembea; tazamana macho na madereva", "Kamwe usipite chini ya uma ulioinuliwa", "Mikono mbali na conveyors zinazotembea"] },
            { title: "Kasi salama", bullets: ["Maji na mapumziko kwenye joto", "Hakuna njia za mkato zisizo salama", "Ripoti hatari mara moja"] }
          ],
          sources: [OSHA_WAREHOUSE, OSHA_WH_HAZARDS, OSHA_HEAT],
          tryIt: "Fanya mazoezi kwa boksi tupu au lenye vitu vichache nyumbani. Linyanyue ukifuata kila hatua, na sema kila hatua kwa sauti. Kisha andika hatari tatu unazoweza kuona ghalani na utakachofanya kwa kila moja.",
          youCanNow: "kunyanyua na kuhamisha vitu kwa usalama na kuripoti hatari za ghala kwa njia sahihi.",
          quickCheck: [
            { objective: "O5", q: "Unahitaji kugeuka ukiwa umebeba boksi. Unafanyaje?", options: ["Jipinde kiunoni", "Geuka kwa miguu", "Litupe boksi", "Liinue juu ya kichwa kwanza"], answer: 1, why: "Kugeuka kwa miguu kunalinda mgongo wako; kujipinda ukinyanyua kunasababisha majeraha." },
            { objective: "O5", q: "Unaona forklift ikija kwenye njia yako. Nini ni salama zaidi?", options: ["Tembea nyuma yake haraka", "Ingia chini ya uma ulioinuliwa", "Kaa kwenye njia ya watembea na utazamane macho na dereva", "Punga mkono na uendelee kutembea mbele yake"], answer: 2, why: "Njia za watembea na kutazamana macho humsaidia dereva akuone na kukuweka mbali na njia yake." }
          ]
        },
        {
          title: "Kupanga mzigo salama wa paleti",
          objectives: ["O4"],
          minutes: 6,
          goal: "Panga mzigo wa paleti wenye vitu vizito chini, matabaka sawa na jumla isiyozidi kikomo cha uzito.",
          text: [
            "Paleti nzuri inafika ikiwa nzima na inaweka watu salama. Kwanza kagua paleti yenyewe: hakuna mbao zilizovunjika wala misumari iliyojitokeza.",
            "Maboksi mazito yanakaa chini, mepesi juu. Tengeneza matabaka sawa na bapa. Weka maboksi ndani ya kingo za paleti (yasining'inie nje). Geuza kila tabaka la pili ili maboksi yapishane (hii inaitwa interlocking); inasaidia rundo kushikamana. Kaa chini ya vikomo vya urefu na uzito vya eneo lako.",
            "Jumlisha uzito. Mfano (mazoezi tu): maboksi 20 ya lb 25 kila moja ni lb 500, pamoja na paleti ya karibu lb 40 ni lb 540. Hakikisha uko chini ya kikomo cha paleti, rafu na mashine.",
            "Funga mzigo kwa stretch wrap, kwa kubana kutoka chini hadi juu, na uufunge pamoja na paleti. Weka lebo zikitazama nje mahali zinapoweza kuskaniwa. Kabla ya malori kupakiwa, breki za trela zinawekwa na magurudumu yake yanazuiwa kwa vizuizi (chocks); mizigo inasambazwa sawasawa ndani ya trela."
          ],
          steps: ["Kagua paleti: hakuna mbao zilizovunjika wala misumari.", "Maboksi mazito zaidi kwenye tabaka la chini.", "Matabaka sawa, ndani ya kingo, yanayopishana.", "Jumlisha uzito wote na kagua vikomo.", "Funga stretch wrap kwa kubana, chini hadi juu, pamoja na paleti.", "Lebo zikitazama nje."],
          words: [["Paleti", "msingi bapa wa mbao au plastiki ambao bidhaa hupangwa juu yake ili zihamishwe pamoja."], ["Interlocking (kupishanisha)", "kugeuza kila tabaka la maboksi ili lipishane na tabaka la chini."], ["Kuning'inia nje (overhang)", "maboksi yanayotoka nje ya kingo za paleti."], ["Stretch wrap", "plastiki nyembamba inayozungushwa kwenye mzigo ili kuushikilia pamoja."]],
          slides: [
            { title: "Anza sawa", bullets: ["Kagua paleti kama ina mbao zilizovunjika na misumari", "Maboksi mazito zaidi chini"] },
            { title: "Panga sawa", bullets: ["Matabaka sawa na bapa", "Hakuna kuning'inia nje", "Pishanisha matabaka"] },
            { title: "Kagua uzito", bullets: ["Maboksi x uzito, pamoja na paleti", "Chini ya vikomo vya paleti, rafu na mashine"] },
            { title: "Maliza sawa", bullets: ["Funga kwa kubana, chini hadi juu", "Lebo zikitazama nje"] }
          ],
          sources: [OSHA_WH_HAZARDS, OSHA_178],
          tryIt: "Mazoezi tu. Una maboksi 8 ya lb 50, maboksi 12 ya lb 20 na maboksi 6 ya lb 10. Chora paleti ukiitazama kwa upande: maboksi yapi yanakaa kwenye tabaka lipi. Jumlisha uzito wote pamoja na paleti ya lb 40 na uhakikishe uko chini ya kikomo cha lb 1,000. Jibu: 400 + 240 + 60 + 40 = lb 740.",
          youCanNow: "kupanga mzigo salama wa paleti wenye vitu vizito chini, matabaka sawa na jumla isiyozidi kikomo.",
          quickCheck: [
            { objective: "O4", q: "Maboksi mazito zaidi yanakaa wapi kwenye paleti?", options: ["Kwenye tabaka la juu", "Yakining'inia nje ya kingo", "Kwenye tabaka la kati tu", "Kwenye tabaka la chini"], answer: 3, why: "Vitu vizito chini vinafanya mzigo uwe imara na vinalinda maboksi mepesi." },
            { objective: "O4", q: "Mazoezi: maboksi 30 ya lb 20 juu ya paleti ya lb 40. Uzito wote ni kiasi gani?", options: ["lb 640", "lb 600", "lb 540", "lb 60"], answer: 0, why: "30 x 20 = lb 600, pamoja na paleti ya lb 40 = lb 640." }
          ]
        },
        {
          title: "Kuajiriwa na kupanda cheo",
          objectives: ["O1", "O5"],
          minutes: 5,
          goal: "Andika mpango wa kuajiriwa wenye waajiri, lengo la cheti na mistari ya kweli ya CV.",
          text: [
            "Mahali pa kutafuta: tovuti za ajira za wauzaji wakubwa na wasafirishaji, mbao za matangazo ya kazi za eneo lako, mawakala wa ajira na American Job Center ya eneo lako (ofisi ya umma ya bure ya ajira nchini Marekani), ambayo wakati mwingine inaweza pia kusaidia kulipia mafunzo na vyeti. Maghala mengi huajiri watu wenye rekodi za uhalifu; uliza kituo cha ajira kuhusu waajiri wa nafasi ya pili.",
            "Waajiri wanachotaka: kufika kwa wakati, kuhesabu kwa makini, tabia za usalama na kasi inayodumu. Maghala mara nyingi hupima kiwango chako (rate), kama bidhaa unazochukua kwa saa. Kifikie kwa kufanya kazi kwa akili (mpangilio wa kutembea, kuskani kwa makini) na kamwe si kwa kuruka usalama.",
            "Fanya CV yako ilingane na kazi. Tumia maneno ya vitendo na mifano halisi: \"Counted and checked deliveries against packing lists\" (Nilihesabu na kukagua mizigo dhidi ya orodha za mzigo) au \"Completed warehouse safety and logistics training (Koach Learn), 2026\" (Nilimaliza mafunzo ya usalama wa ghala na usafirishaji wa bidhaa). Wanajeshi wastaafu: kazi za vifaa, karakana ya magari na usafirishaji zinahesabika, kwa hiyo ziandike kwa maneno ya kawaida.",
            "Panga ukuaji wako. Cheti kama MSSC CLA, kisha CLT, na mafunzo ya forklift ya mwajiri vinaweza kukupeleka kwenye nafasi zenye mshahara mkubwa zaidi kama kiongozi wa kikundi, udhibiti wa bidhaa au mratibu wa usafirishaji."
          ],
          steps: ["Orodhesha waajiri au programu tatu karibu nawe, pamoja na American Job Center yako.", "Chagua lengo la cheti (kwa mfano MSSC CLA) na tarehe unayolenga.", "Andika mistari miwili ya kweli ya CV kutoka kozi hii au kazi za zamani.", "Fanya mazoezi ya jibu la sekunde 30: \"Unabakije sahihi na salama kwenye kasi kubwa?\""],
          words: [["Kiwango (rate)", "kiasi cha kazi unachofanya kwa muda fulani, kama bidhaa unazochukua kwa saa."], ["American Job Center", "ofisi ya umma ya bure nchini Marekani inayosaidia watu kupata kazi na mafunzo."], ["Mwajiri wa nafasi ya pili", "biashara inayoajiri watu wenye rekodi za uhalifu."]],
          slides: [
            { title: "Mahali pa kutafuta", bullets: ["Tovuti za ajira za kampuni na mbao za matangazo ya kazi", "Mawakala wa ajira", "American Job Center ya eneo lako"] },
            { title: "Waajiri wanachotaka", bullets: ["Kwa wakati, sahihi, salama", "Fikia kiwango kwa kufanya kazi kwa akili", "Kamwe si kwa kuruka usalama"] },
            { title: "CV yako", bullets: ["Maneno ya vitendo na mifano halisi", "Kweli kuhusu mafunzo na vyeti", "Wanajeshi wastaafu: eleza kazi za vifaa na usafirishaji"] },
            { title: "Panda cheo", bullets: ["MSSC CLA, kisha CLT", "Mafunzo ya forklift ya mwajiri", "Kiongozi, udhibiti wa bidhaa, mratibu"] }
          ],
          sources: [AJC, MSSC_CLT, BLS_MOVERS],
          tryIt: "Andika mpango wako wa kuajiriwa: waajiri au programu tatu karibu nawe, lengo lako la cheti na tarehe, mistari miwili ya kweli ya CV, na jibu lako la sekunde 30 kwa \"Unabakije sahihi na salama kwenye kasi kubwa?\" Soma jibu kwa sauti.",
          youCanNow: "kuandika mpango wa kuajiriwa ghalani, wenye lengo la cheti na mistari ya kweli ya CV.",
          quickCheck: [
            { objective: "O5", q: "Uko nyuma ya kiwango chako cha bidhaa kwa saa. Njia sahihi ya kufikia ni ipi?", options: ["Ruka kuskani ili uende haraka", "Kimbia kwenye njia", "Chukua kwa mpangilio wa kutembea na skani kwa makini", "Panda rafu badala ya kutumia ngazi"], answer: 2, why: "Kufanya kazi kwa akili kunaokoa muda; njia za mkato zisizo salama husababisha majeraha na makosa." },
            { objective: "O1", q: "Mstari upi wa CV ni wa kweli na wenye nguvu?", options: ["\"MSSC CLT certified\" (kabla hujafaulu)", "\"Mchapakazi\"", "\"Forklift certified\" (bila tathmini ya mwajiri)", "\"Nilihesabu na kukagua mizigo dhidi ya orodha za mzigo\""], answer: 3, why: "Unatumia neno la vitendo na kazi halisi, na haudai kitu usichokuwa nacho." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kufanya kazi kwa usalama na kuajiriwa",
        questions: [
          { objective: "O5", q: "Boksi ni zito mno kunyanyua peke yako. Unafanya nini?", options: ["Linyanyue haraka kabla halijakuumiza", "Tumia toroli au pallet jack, au omba kunyanyua kwa pamoja", "Liburute ukiwa umepinda mgongo", "Liache kwenye njia"], answer: 1, why: "Tumia vifaa au kunyanyua kwa pamoja kwa mizigo mizito ili kuzuia majeraha ya mgongo." },
          { objective: "O5", q: "Unaona kitu kilichomwagika kwenye njia. Hatua sahihi ni ipi?", options: ["Kipite pembeni na usiseme kitu", "Subiri mtu mwingine akione", "Waweke watu mbali na uripoti mara moja", "Kifunike kwa boksi"], answer: 2, why: "Ripoti hatari mara moja ili zisafishwe kabla mtu hajateleza." },
          { objective: "O4", q: "Kupishanisha matabaka kwenye paleti kunafanya nini?", options: ["Kunasaidia rundo kushikamana", "Kunaliongezea uzito", "Kunaficha lebo", "Kunaruhusu maboksi kuning'inia nje ya kingo"], answer: 0, why: "Matabaka yanayopishana hufunga rundo pamoja ili lisitengane." },
          { objective: "O4", q: "Paleti ipi iko tayari kuhamishwa?", options: ["Maboksi yakining'inia nje ya kingo", "Maboksi mepesi chini", "Iliyolegea, haijafungwa", "Maboksi mazito chini, matabaka sawa, imefungwa, lebo nje"], answer: 3, why: "Inafuata kila sharti: vizito chini, sawa, imefungwa na ina lebo." },
          { objective: "O1", q: "Ofisi ipi inaweza kukusaidia kupata kazi za ghala na mafunzo bure?", options: ["American Job Center ya eneo lako", "Ofisi ya tiketi", "DMV (ofisi ya leseni za magari)", "Benki"], answer: 0, why: "American Job Centers ni ofisi za umma za bure kwa kazi na mafunzo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kazi za Ghala na Usafirishaji wa Bidhaa",
    questions: [
      { objective: "O1", q: "Kazi ipi inajaza oda za wateja kwa kutoa bidhaa kwenye rafu?", options: ["Karani wa kupokea", "Mchukuaji (picker)", "Fundi wa malori", "Mlinzi"], answer: 1, why: "Wachukuaji hutoa bidhaa hifadhini ili kujaza oda." },
      { objective: "O1", q: "Cheti kipi lazima ufaulu kabla ya kufanya MSSC CLT?", options: ["CDL", "Kadi ya OSHA ya saa 30", "MSSC Certified Logistics Associate (CLA)", "Kadi ya forklift"], answer: 2, why: "MSSC inahitaji CLA kabla ya tathmini ya CLT." },
      { objective: "O1", q: "Unapaswa kuangalia wapi mshahara na matarajio ya kazi za ghala?", options: ["Occupational Outlook Handbook ya bls.gov", "Chapisho la mitandao ya kijamii", "Kubahatisha kwa rafiki", "Mchezo wa video"], answer: 0, why: "Kitabu cha BLS ndicho chanzo rasmi cha mshahara na matarajio." },
      { objective: "O2", q: "Mpangilio sahihi wa mtiririko wa bidhaa ni upi?", options: ["Kusafirisha, kuchukua, kupokea", "Kufunga, kupokea, kuweka mahali", "Kuchukua, kupokea, kuhifadhi", "Kupokea, kuweka mahali, kuhifadhi, kuchukua, kufunga, kusafirisha"], answer: 3, why: "Bidhaa zinaingia, zinahifadhiwa, kisha zinachukuliwa, zinafungwa na kusafirishwa." },
      { objective: "O2", q: "Mazoezi: mahali papi ni pa kwanza kwa mpangilio wa kutembea?", options: ["B-02-01-A", "A-07-04-C", "A-02-06-B", "B-01-01-A"], answer: 2, why: "Panga kwa eneo, kisha njia: eneo A njia 02 inakuja kabla ya A njia 07 na eneo B lote." },
      { objective: "O2", q: "Kwa nini unaskani mahali na bidhaa unapochukua?", options: ["Ili mfumo ujue hasa nini kimehama", "Ili kukuchelewesha", "Ili kuangalia saa", "Ni kwa kujifurahisha tu"], answer: 0, why: "Kuskani kunaweka kumbukumbu za mfumo wa usimamizi wa ghala sahihi." },
      { objective: "O2", q: "Mahali pa SKU yako ni patupu. Unafanya nini?", options: ["Chukua bidhaa yoyote iliyo karibu", "Ripoti kwa kiongozi wako", "Weka alama kuwa oda imekamilika", "Acha mstari wazi na usiseme kitu"], answer: 1, why: "Mahali patupu panaripotiwa ili bidhaa zipatikane na kumbukumbu zirekebishwe." },
      { objective: "O3", q: "Bill of lading ni nini?", options: ["Orodha ya manunuzi", "Ishara ya usalama", "Hati ya mshahara", "Karatasi ya usafirishaji unayoitia sahihi kwa mzigo uliofika"], answer: 3, why: "Bill of lading ni hati ya usafirishaji ya msafirishaji." },
      { objective: "O3", q: "Orodha inasema kesi 15; zilifika 17. Hii ni nini?", options: ["Ziada", "Upungufu", "Uharibifu", "Kuweka mahali"], answer: 0, why: "Zaidi ya inavyoorodhesha karatasi ni ziada." },
      { objective: "O3", q: "Unakagua mambo gani matatu kwa kila mstari unapopokea?", options: ["Rangi, saizi na harufu", "SKU sahihi, idadi sahihi, hali nzuri", "Bei, kodi na bakshishi", "Jina la dereva, rangi ya lori, saa"], answer: 1, why: "Kupokea kunakagua bidhaa, idadi na hali." },
      { objective: "O3", q: "Cycle count ni nini?", options: ["Kuhesabu baiskeli", "Kuhesabu ghala zima mara moja kwa mwaka tu", "Kuhesabu sehemu chache kwa wakati mmoja ili kumbukumbu zibaki sahihi", "Kuhesabu saa zako za kazi"], answer: 2, why: "Cycle count hukagua sehemu chache kila siku ili kumbukumbu zibaki sahihi." },
      { objective: "O4", q: "Unakagua nini kwanza unapopanga paleti?", options: ["Rangi ya lebo", "Kwamba paleti haina mbao zilizovunjika wala misumari iliyojitokeza", "Hali ya hewa", "Redio ya lori"], answer: 1, why: "Paleti iliyoharibika inaweza kuvunjika na kuangusha mzigo." },
      { objective: "O4", q: "Mazoezi: maboksi 10 ya lb 30 na maboksi 10 ya lb 15 juu ya paleti ya lb 40. Jumla?", options: ["lb 450", "lb 300", "lb 490", "lb 45"], answer: 2, why: "300 + 150 + 40 = lb 490." },
      { objective: "O4", q: "Kwa nini maboksi hayapaswi kuning'inia nje ya kingo za paleti?", options: ["Kuning'inia nje kunabonyeza maboksi na kunaweza kufanya mzigo usiwe imara", "Kunaonekana vibaya tu, basi", "Kunafanya mzigo uwe mwepesi", "Ni haraka zaidi kufunga"], answer: 0, why: "Maboksi yanayoning'inia hayana msaada, hubonyea na yanaweza kufanya mzigo uanguke." },
      { objective: "O4", q: "Stretch wrap inapaswa kufungwaje?", options: ["Kuzunguka tabaka la juu tu", "Kwa kulegea, ili itoke kwa urahisi", "Juu ya lebo ili zisisomeke", "Kwa kubana, chini hadi juu, na kuzunguka paleti pia"], answer: 3, why: "Kufunga kwa kubana na pamoja na paleti hushikilia mzigo wote pamoja." },
      { objective: "O5", q: "Kwa mujibu wa OSHA, majeraha gani yanatokea zaidi ghalani?", options: ["Kukatwa na karatasi", "Kuumia misuli kwa kunyanyua na kugongwa na forklift", "Kuungua na jua", "Uchovu wa macho kutokana na skrini"], answer: 1, why: "OSHA inataja kuumia misuli kwa kunyanyua na kugongwa na magari yenye injini kuwa yanayotokea zaidi." },
      { objective: "O5", q: "Unapaswa kunyanyuaje boksi kutoka sakafuni?", options: ["Sogea karibu, kunja magoti, weka mgongo wima na mzigo karibu", "Inama kiunoni huku miguu ikiwa imenyooka", "Jipinde unaponyanyua", "Lishike mbali na mwili wako"], answer: 0, why: "Kutumia miguu na kuweka mzigo karibu kunalinda mgongo wako." },
      { objective: "O5", q: "Kuna joto kali sana ghalani na unahisi kizunguzungu. Unafanya nini?", options: ["Endelea kufanya kazi ili ufikie kiwango chako", "Ruka mapumziko yako", "Mwambie mtu, kunywa maji na upumzike mahali penye ubaridi", "Nenda nyumbani bila kumwambia mtu"], answer: 2, why: "Kizunguzungu kinaweza kuwa ugonjwa wa joto; mwambie mtu, poa na unywe maji." },
      { objective: "O5", q: "Njia salama ya kudumisha kiwango chako ni ipi?", options: ["Ruka kuskani", "Panda juu ya pallet jack", "Panda rafu kufikia bidhaa", "Fanya kazi kwa akili: mpangilio wa kutembea, kuskani kwa makini, hakuna njia za mkato zisizo salama"], answer: 3, why: "Njia za akili zinaokoa muda bila kuhatarisha majeraha au makosa." },
      { objective: "O1", q: "Nini ni kweli kuhusu kadi ya OSHA Outreach ya saa 10?", options: ["Ni mafunzo ya hiari na OSHA inasema si cheti cha uthibitisho", "Inakuruhusu kuendesha forklift yoyote", "Ni sawa na MSSC CLT", "Inahitajika kwa kila kazi ya ghala na sheria ya serikali kuu"], answer: 0, why: "OSHA inasema madarasa ya Outreach ni ya hiari na hakuna hata moja lililo cheti cha uthibitisho." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 4, 8, 9, 11, 12, 15, 16] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ukague tena.",
    criteria: [
      { name: "Ripoti ya kupokea", objective: "O3", notYet: "Hesabu moja si sahihi au upungufu, ziada au uharibifu umesahaulika.", meets: "Kila mstari unaonyesha kilichotarajiwa na kilichopokelewa, na kila tatizo limeandikwa.", exceeds: "Pia inaeleza cha kufanya kabla ya kutia sahihi bill of lading na nani wa kumwambia." },
      { name: "Orodha ya kuchukua kwa mpangilio wa kutembea", objective: "O2", notYet: "Mahali hayako kwa mpangilio au msimbo umesomwa vibaya.", meets: "Uchukuaji wote umepangwa kwa eneo, njia, rafu na ngazi, na kila msimbo umesomwa sahihi.", exceeds: "Inaeleza cha kufanya kama bidhaa hailingani au mahali ni patupu." },
      { name: "Mpango wa mzigo wa paleti", objective: "O4", notYet: "Maboksi mazito juu, yananing'inia nje, au uzito wote si sahihi au umezidi kikomo.", meets: "Maboksi mazito chini, matabaka sawa yanayopishana, jumla sahihi chini ya kikomo, imefungwa na ina lebo.", exceeds: "Inaongeza ukaguzi wa paleti na hatua za usalama za trela." },
      { name: "Mpango wa kuajiriwa", objective: "O1", notYet: "Hakuna waajiri, hakuna lengo la cheti, au mstari wa CV unaodai kitu kisicho kweli.", meets: "Waajiri au programu tatu, cheti halisi pamoja na anayekitoa na tarehe, mistari miwili ya kweli ya CV.", exceeds: "Inajumuisha jibu la sekunde 30 lililofanyiwa mazoezi kuhusu usahihi na usalama." },
      { name: "Kazi salama", objective: "O5", notYet: "Mpango unapendekeza njia za mkato zisizo salama ili kufikia kiwango.", meets: "Jibu la sekunde 30 na mpango vinaweka usalama kwanza, kwa kunyanyua kwa usalama na kuripoti hatari.", exceeds: "Inataja hatari maalum kutoka ukurasa wa OSHA wa kazi za ghala na jinsi ya kuizuia." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kifurushi cha kuanzia kinachotimiza rubriki",
      "Wanafunzi wanaoomba angalau kazi tatu za ghala ndani ya siku 30 (utafiti wa ufuatiliaji)",
      "Wanafunzi walioajiriwa katika kazi za ghala au usafirishaji wa bidhaa ndani ya siku 90 (ripoti za washirika na za ufuatiliaji)",
      "Wanafunzi wanaojiandikisha kwa MSSC CLA au wanaoanza mafunzo ya forklift ya mwajiri"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Karatasi, penseli na kikokotoo (kikokotoo cha simu kinatosha)",
      "Simu au kompyuta yenye intaneti kwa kutafuta kazi na kurasa rasmi",
      "Si lazima: maboksi machache matupu au karatasi za kubandika (sticky notes) kwa mazoezi ya matabaka ya paleti na njia za kuchukua",
      "Jumla ya kama dakika 60"
    ],
    facilitatorNotes: [
      "Tengeneza ghala dogo lenye rafu zenye lebo (sticky notes kama A-01-01-A) na fanya shindano la kuchukua kwa muda, likipimwa kwanza kwa usahihi.",
      "Tumia orodha ya mzigo ya mazoezi iliyochapishwa na boksi lenye vitu mchanganyiko kwa zoezi la kupokea.",
      "Fanya mazoezi ya kunyanyua kwa maboksi matupu au mepesi tu.",
      "Mwalike msimamizi wa ghala wa eneo lako au mfanyakazi wa American Job Center aongee kuhusu kuajiri, viwango na kuajiri watu wa nafasi ya pili.",
      "Pima kifurushi cha kuanzia kwa rubriki na pitia mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
