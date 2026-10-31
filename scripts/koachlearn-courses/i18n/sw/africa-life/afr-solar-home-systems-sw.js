"use strict";

// Koach Learn course (Swahili translation of africa-life/afr-solar-home-systems.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const VERASOL = { name: "VeraSol: uhakikisho huru wa ubora wa sola isiyounganishwa na gridi (mrithi wa Lighting Global Quality Assurance)", url: "https://verasol.org/" };
const VERASOL_DB = { name: "Hifadhidata ya bidhaa ya VeraSol: tafuta vifaa vya nishati ya jua vilivyothibitishwa", url: "https://data.verasol.org/" };
const NFPA = { name: "NFPA: Usalama wa betri za lithium-ion (dalili za hatari; usizitupe kwenye takataka, zirejeleze)", url: "https://www.nfpa.org/education-and-research/home-fire-safety/lithium-ion-batteries" };
const GOGLA_CP = { name: "GOGLA: Ulinzi wa wateja katika sola isiyounganishwa na gridi (mauzo ya kuwajibika, uwazi, kutendewa kwa haki, huduma nzuri, ubora)", url: "https://www.gogla.org/what-we-do/business-environment-and-consumer-protection/consumer-protection/" };
const EPRA = { name: "Mamlaka ya Udhibiti wa Nishati na Petroli (EPRA), Kenya: nishati mbadala na leseni", url: "https://www.epra.go.ke/" };
const WHO_EWASTE = { name: "Taarifa ya WHO: Taka za kielektroniki (e-waste), pamoja na hatari za kuzichoma na kuzitupa ovyo", url: "https://www.who.int/news-room/fact-sheets/detail/electronic-waste-(e-waste)" };

module.exports = {
  id: "afr-solar-home-systems-sw",
  lang: "sw",
  translationOf: "afr-solar-home-systems",
  category: "Africa: Life and Work",
  name: "Mifumo ya Sola ya Nyumbani: Kufunga, Kuuza na Biashara za Nishati Nje ya Gridi",
  skills: "Kutaja sehemu za mfumo wa sola wa nyumbani na kukagua ubora, Kukadiria ukubwa wa mfumo kutokana na matumizi ya nishati ya kila siku, Kufunga mfumo mdogo wa DC kwa usalama, Kutunza mfumo na kutafuta hitilafu, Kuuza kwa uaminifu kwa pesa taslimu au kulipa kidogo kidogo",
  outcome: "kusaidia familia kuchagua, kufunga na kutunza mfumo mdogo wa sola wa nyumbani: kukagua kama kifaa kimethibitishwa, kukadiria ukubwa wake kutokana na nishati ambayo familia inatumia kila siku, kukifunga kwa usalama, kukifanya kiendelee kufanya kazi, na kukiuza kwa uaminifu kwa bei na masharti yaliyo wazi.",
  about: [
    "Kozi hii ni kwa vijana, wasaidizi wa mafundi umeme, wenye maduka na mawakala wa mauzo kote Afrika wanaotaka kupata kipato kutokana na sola ndogo isiyounganishwa na gridi: taa, kuchaji simu, redio, TV ndogo au feni kwa nyumba na vibanda visivyo na umeme wa gridi wa kuaminika, vijijini Kenya, kaskazini mwa Nigeria, Upper East ya Ghana, Casamance ya Senegal au Far North ya Cameroon.",
    "Sura 1 inaeleza jinsi mfumo wa sola wa nyumbani unavyofanya kazi: sehemu zake na jinsi ya kukagua ubora, jinsi ya kukadiria ukubwa wa mfumo kutokana na kile familia inachotumia kila siku, na jinsi ya kufunga mfumo mdogo kwa usalama. Sura 2 inaeleza jinsi ya kuufanya uendelee kufanya kazi na kuendesha biashara: matunzo na kutafuta hitilafu, kuuza kwa pesa taslimu au kulipa kidogo kidogo, na kuandika nukuu ya bei iliyo ya kweli.",
    "Kozi hii ni kwa mifumo midogo ya nyumbani tu. Haifundishi kazi ya gridi, nyaya za umeme wa nyumba (mains) wala mifumo mikubwa; kazi hizo zinahitaji fundi umeme mwenye leseni. Nchi nyingine zinatoa leseni kwa mafundi wa sola, kwa hiyo uliza mamlaka ya nishati ya nchi yako. Namba zote za ukubwa na bei ni mifano tu. Kila somo linachukua kama dakika tano na linaishia na kazi. Kuna maswali mafupi baada ya kila somo, jaribio la maarifa mwishoni mwa kila sura na mtihani wa maswali 20 mwishoni mwa kozi."
  ],
  finalTask: "Andika nukuu ya bei kwa familia moja halisi au ya mfano (kwa mfano familia ya watu watano Kitui, Kenya, au kibanda Kaolack, Senegal): jedwali la vitu wanavyotaka kuwasha pamoja na wati na saa kwa siku, jumla ya nishati ya kila siku, ukubwa wa paneli na betri uliouchagua na jinsi ulivyoukokotoa, kifaa kilichothibitishwa kutoka hifadhidata ya VeraSol au kifaa chenye dhamana iliyo wazi, orodha ya usalama ya ufungaji, bei ya pesa taslimu na masharti yoyote ya kulipa kidogo kidogo pamoja na jumla ambayo mteja atalipa, na kadi ya matunzo na dhamana kwa mteja.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Vijana, wasaidizi wa mafundi umeme, wenye maduka na mawakala wa mauzo ya sola katika miji na vijiji kote Afrika (Kenya, Nigeria, Ghana, Senegal, Cameroon, Morocco na kwingineko) wanaouza, wanaofunga au wanaotaka kuanza biashara ndogo ya sola.",
    startingPoint: "Wengi wameona taa za sola na vifaa vya sola, na baadhi wanaviuza. Wachache wanaweza kukadiria ukubwa wa mfumo kutokana na matumizi ya nishati ya familia, kukagua kama kifaa kimethibitishwa, kufunga mfumo mdogo kwa usalama, kutafuta hitilafu rahisi, au kueleza kwa uaminifu masharti ya kulipa kidogo kidogo.",
    gap: "Vifaa vidogo mno au bandia vinaharibika haraka, na wateja wanapoteza pesa na imani; ufungaji mbaya unasababisha moto wa betri na shoti za umeme; masharti yasiyo wazi ya kulipa kidogo kidogo yanaingiza familia kwenye madeni. Fundi na muuzaji mwaminifu aliyefunzwa anapata wateja wanaorudi na anasaidia familia kupata mwanga na umeme safi wa kuaminika.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; hesabu rahisi (kuzidisha, kujumlisha, kugawanya), kila neno la kitaalamu linaelezwa",
      "Vifaa: simu ya kawaida yenye kikokotoo; data ni ghali, kwa hiyo ukaguzi wa hifadhidata ni mfupi",
      "Upeo na usalama: mifumo midogo ya nyumbani tu; hakuna gridi, nyaya za umeme wa nyumba wala mifumo mikubwa; sheria za leseni zinatofautiana kwa nchi na wanafunzi wanauliza mamlaka ya nishati",
      "Pesa: bei na namba za ukubwa ni mifano; hakuna ushauri wa uwekezaji; masharti ya kulipa kidogo kidogo yanaelezwa kwa uaminifu",
      "Kozi pia imetafsiriwa kwa Kifaransa na Kiarabu, kwa hiyo mifano inajumuisha wateja wa nchi zinazozungumza Kifaransa na wa Afrika Kaskazini"
    ],
    prerequisites: "Hesabu za msingi. Hakuna mafunzo ya umeme yanayohitajika kuanza; ufungaji kwa vitendo unapaswa kufanyiwa mazoezi pamoja na fundi mwenye uzoefu."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa kifaa cha mfumo wa sola wa nyumbani", action: "kutaja kila sehemu (paneli, kidhibiti chaji, betri, inverter, taa na vifaa vya umeme) na kukagua kama kifaa kimethibitishwa kwenye hifadhidata ya VeraSol", standard: "ukitaja sehemu zote kwa usahihi na kuandika matokeo ya uthibitisho" },
    { id: "O2", condition: "Ukipewa orodha ya vitu ambavyo familia inataka kuwasha", action: "kukokotoa mahitaji ya nishati ya kila siku kwa wati-saa na kuchagua ukubwa wa paneli na betri", standard: "hesabu zikiwa sahihi na nyongeza kwa ajili ya upotevu" },
    { id: "O3", condition: "Unapofunga mfumo mdogo wa sola wa DC wa nyumbani", action: "kufuata orodha ya usalama kwa mahali pa paneli, nyaya, fyuzi na mahali pa betri", standard: "bila kuruka hatua yoyote na bila kazi yoyote kwenye gridi au nyaya za umeme wa nyumba" },
    { id: "O4", condition: "Mfumo usipofanya kazi vizuri", action: "kufanya matunzo ya kawaida na kutafuta hitilafu rahisi hatua kwa hatua", standard: "ukikagua paneli, viunganishi, kidhibiti na betri kwa mpangilio huo" },
    { id: "O5", condition: "Unapomuuzia mteja mfumo", action: "kuandika nukuu ya bei ya kweli yenye bei ya pesa taslimu, masharti yoyote ya kulipa kidogo kidogo, gharama yote na dhamana", standard: "ili mteja aweze kusema jumla atakayolipa kabla ya kusaini" }
  ],
  chapters: [
    {
      name: "Sura 1: Jinsi mfumo wa sola wa nyumbani unavyofanya kazi",
      lessons: [
        {
          title: "Sehemu za mfumo wa sola wa nyumbani, na ubora",
          objectives: ["O1"],
          minutes: 5,
          goal: "Taja sehemu za mfumo wa sola wa nyumbani na ukague kama kifaa kimethibitishwa.",
          text: [
            "Mfumo wa sola wa nyumbani unageuza mwanga wa jua kuwa umeme kwa nyumba au duka dogo. Una sehemu tano kuu. Paneli ya sola inatengeneza umeme kutokana na mwanga wa jua mchana. Kidhibiti chaji (charge controller) kinapeleka umeme huo kwenye betri kwa usalama na kinazuia betri isijazwe kupita kiasi au isimalizwe kabisa. Betri inahifadhi nishati kwa ajili ya usiku. Taa na vifaa vya umeme (mizigo) vinatumia nishati hiyo. Mifumo mingine ina inverter, inayobadilisha umeme wa DC wa betri kuwa umeme wa AC kwa soketi za kawaida.",
            "Vifaa vingi vidogo vinakuja kama boksi moja lenye kidhibiti na betri ndani yake, pamoja na taa za DC, sehemu ya kuchaji simu, na wakati mwingine redio, TV au feni ya DC. Vifaa vya DC vinatumia nishati kidogo kuliko vifaa vya AC vinavyotumia inverter, kwa hiyo vinasaidia mfumo mdogo kufanya kazi zaidi.",
            "Vifaa bandia na vya ubora duni ni vingi. Kabla ya kuuza au kufunga kifaa, kagua kama kimethibitishwa na VeraSol, mpango huru wa ubora ulioanzia Lighting Global. Hifadhidata yake ya bure mtandaoni (data.verasol.org) inaorodhesha vifaa vya nishati ya jua vilivyothibitishwa. Kifaa kilichothibitishwa kimejaribiwa kwa utendaji wake halisi, uimara wake na madai ya kweli. Kama kifaa hakimo kwenye orodha, omba dhamana yake kwa maandishi na matokeo ya majaribio.",
            "Mfano: Fatou wa Kaolack, Senegal, analinganisha vifaa viwili vya ukubwa mmoja. Kimoja kimo kwenye hifadhidata ya VeraSol na kina dhamana ya maandishi; kingine hakina lebo wala dhamana. Anachagua kifaa kilichothibitishwa kwa ajili ya wateja wake."
          ],
          words: [["Paneli ya sola", "bamba bapa linalotengeneza umeme kutokana na mwanga wa jua."], ["Kidhibiti chaji", "kisanduku kidogo kinachochaji betri kwa usalama na kuilinda."], ["Inverter", "kifaa kinachobadilisha umeme wa DC wa betri kuwa umeme wa AC kwa soketi za kawaida."], ["DC na AC", "DC ni umeme thabiti kutoka kwa betri na paneli; AC ni umeme wa gridi na wa soketi nyingi za kawaida."]],
          slides: [
            { title: "Sehemu tano kuu", bullets: ["Paneli: inatengeneza umeme kutokana na jua", "Kidhibiti chaji: kinachaji betri kwa usalama", "Betri: inahifadhi umeme kwa usiku; mizigo inautumia"] },
            { title: "Inverter na vifaa vya DC", bullets: ["Inverter: DC ya betri kuwa AC kwa soketi za kawaida", "Taa, redio, TV, feni za DC zinatumia nishati kidogo", "Vifaa vingi vinakuja kama boksi moja"] },
            { title: "Kagua ubora: VeraSol", bullets: ["Mpango huru wa ubora (kutoka Lighting Global)", "Hifadhidata ya bure: data.verasol.org", "Hakimo? Omba dhamana ya maandishi na matokeo ya majaribio"] }
          ],
          sources: [VERASOL, VERASOL_DB],
          tryIt: "Angalia kifaa cha sola (dukani, nyumbani, au picha mtandaoni) na uandike jina la kila sehemu. Kama una data, tafuta kifaa kimoja kwenye hifadhidata ya VeraSol na uandike kama kimo.",
          youCanNow: "kutaja kila sehemu ya mfumo wa sola wa nyumbani na kukagua kama kifaa kimethibitishwa.",
          quickCheck: [
            { objective: "O1", q: "Sehemu ipi inazuia betri isijazwe kupita kiasi?", options: ["Balbu ya taa", "Fremu ya paneli", "Kidhibiti chaji", "Waya wa chaja ya simu"], answer: 2, why: "Kidhibiti chaji kinachaji betri kwa usalama na kuilinda isijazwe kupita kiasi wala isimalizwe kabisa." },
            { objective: "O1", q: "Unaweza kukagua wapi kama kifaa cha sola kimethibitishwa?", options: ["Hifadhidata ya bidhaa ya VeraSol", "Rangi ya boksi", "Neno la muuzaji tu", "Uzito wa paneli"], answer: 0, why: "Hifadhidata ya bure ya VeraSol inaorodhesha vifaa vilivyojaribiwa na kuthibitishwa na watu huru." }
          ]
        },
        {
          title: "Kukadiria ukubwa wa mfumo kutokana na matumizi ya familia",
          objectives: ["O2"],
          minutes: 6,
          goal: "Kokotoa mahitaji ya nishati ya kila siku ya familia na uchague ukubwa wa paneli na betri.",
          text: [
            "Kadiria ukubwa wa mfumo kutokana na kile familia inachotaka kuwasha kweli. Kwa kila kitu, zidisha nguvu yake kwa wati (W) kwa saa kinazotumika kila siku. Hiyo inakupa wati-saa (Wh) kwa siku. Kisha jumlisha.",
            "Mfano (namba ni mifano tu): balbu 3 za LED za W 3 kwa saa 5 = Wh 45. Kuchaji simu 2, kama Wh 10 kila moja = Wh 20. Redio, W 5 kwa saa 4 = Wh 20. TV ya DC, W 20 kwa saa 3 = Wh 60. Jumla: Wh 145 kwa siku. Ongeza kama 30% kwa upotevu kwenye nyaya, kidhibiti na betri: kama Wh 190 kwa siku.",
            "Paneli: gawanya mahitaji ya kila siku kwa saa za jua kali mahali mteja anapoishi (saa za jua lenye nguvu kamili kwa siku). Kama kuna saa za jua kali kama 5: 190 / 5 = W 38. Panda hadi ukubwa wa paneli unaofuata, kwa mfano paneli ya W 50. Saa za jua kali zinabadilika kwa mahali na msimu; kagua taarifa za eneo lako au muulize fundi mwenye uzoefu, na ukadirie kwa ajili ya miezi yenye mawingu mengi zaidi.",
            "Betri: lazima iweze kubeba mahitaji ya usiku mmoja angalau. Betri nyingi hazipaswi kumalizwa kabisa. Betri ya lithium mara nyingi inatumika hadi kama 80%; ya lead-acid hadi kama 50% (kagua namba ya mtengenezaji). Kwa Wh 190 na lithium: 190 / 0.8 = kama Wh 238. Kwa betri ya V 12, gawanya kwa 12: kama Ah 20. Ongeza zaidi kama familia inataka umeme siku za mawingu."
          ],
          steps: ["Orodhesha kila kitu, wati zake na saa zake kwa siku.", "Zidisha wati kwa saa kwa kila kimoja, kisha jumlisha: Wh kwa siku.", "Ongeza kama 30% kwa upotevu.", "Paneli: mahitaji ya kila siku / saa za jua kali, kisha panda juu.", "Betri: mahitaji ya kila siku / sehemu inayotumika (kwa mfano 0.8), kisha / 12 kupata ampea-saa kwa V 12."],
          words: [["Wati (W)", "kiasi cha nguvu ambacho kitu kinatumia wakati mmoja."], ["Wati-saa (Wh)", "nishati iliyotumika: wati zikizidishwa kwa saa."], ["Saa za jua kali", "idadi ya saa za jua lenye nguvu kamili kwa siku mahali fulani."], ["Ampea-saa (Ah)", "kiasi cha chaji ambacho betri inabeba; Wh = Ah x volti."]],
          slides: [
            { title: "Mahitaji ya nishati ya kila siku", bullets: ["Wati x saa = Wh kwa kila kitu", "Jumlisha vyote", "Mfano: Wh 145; +30% upotevu = kama Wh 190"] },
            { title: "Ukubwa wa paneli", bullets: ["Wh za kila siku / saa za jua kali", "Mfano: 190 / 5 = W 38: chagua W 50", "Kadiria kwa ajili ya miezi yenye mawingu mengi zaidi"] },
            { title: "Ukubwa wa betri", bullets: ["Usiimalize kabisa: lithium kama 80%, lead-acid kama 50%", "Mfano: 190 / 0.8 = kama Wh 238", "Kwa V 12: 238 / 12 = kama Ah 20"] },
            { title: "Namba ni mifano", bullets: ["Kagua wati za kila kifaa kwenye lebo yake", "Kagua saa za jua za eneo lako", "Kagua namba za mtengenezaji wa betri"] }
          ],
          tryIt: "Tengeneza jedwali la nishati kwa nyumba yako au ya jirani: kila kitu, wati, saa, Wh. Jumlisha, ongeza 30%, na ukokotoe ukubwa wa paneli na betri ukitumia hatua hizi.",
          youCanNow: "kukokotoa mahitaji ya nishati ya kila siku ya familia na kuchagua ukubwa wa paneli na betri kwa ajili yake.",
          quickCheck: [
            { objective: "O2", q: "Balbu ya W 4 inatumika kwa saa 6 kwa siku. Hiyo ni wati-saa ngapi?", options: ["Wh 10", "Wh 2", "Wh 46", "Wh 24"], answer: 3, why: "W 4 x saa 6 = Wh 24." },
            { objective: "O2", q: "Familia inahitaji Wh 200 kwa siku na kuna saa 5 za jua kali. Paneli ndogo kabisa kwa hesabu hii ni ipi?", options: ["W 40", "W 1,000", "W 5", "W 200"], answer: 0, why: "200 / 5 = W 40; kisha panda hadi ukubwa wa paneli unaofuata unaopatikana." }
          ]
        },
        {
          title: "Kufunga mfumo mdogo kwa usalama",
          objectives: ["O3"],
          minutes: 6,
          goal: "Funga mfumo mdogo wa sola wa DC wa nyumbani ukifuata orodha ya usalama.",
          text: [
            "Paneli: iweke mahali inapopata jua kamili sehemu kubwa ya siku, bila kivuli cha miti, kuta au nyaya. Ielekeze upande wa ikweta: katika nchi zilizo kaskazini mwa ikweta, ielekeze kusini; kusini mwa ikweta, ielekeze kaskazini. Iinamishe angalau kidogo, ili mvua ioshe vumbi. Ifunge imara ili upepo usiweze kuiinua. Juu ya paa, tumia ngazi salama, mtu mwingine aishike, na usifanye kazi kamwe wakati wa mvua au upepo.",
            "Betri: iweke ndani ya nyumba, mahali pakavu, penye kivuli na hewa inayopita, juu ya sakafu na mbali na watoto, mbali na moto wa kupikia. Betri za lead-acid zinatoa gesi inayowaka zinapochajiwa na zina asidi: hakikisha hewa inapita, vaa kinga ya macho na glavu, na weka moto mbali. Shoti kati ya ncha za betri inaweza kuyeyusha nyaya na kuanzisha moto.",
            "Nyaya: tumia ukubwa wa waya ambao mtengenezaji wa kifaa anasema, waya mwekundu kwa chanya (+) na mweusi kwa hasi (-), na weka fyuzi au breaker ambayo mtengenezaji anatoa, karibu na betri. Kwa vifaa vingi vyenye kidhibiti cha peke yake, unganisha betri na kidhibiti kwanza, kisha paneli, kisha mizigo; fuata mwongozo wa mtengenezaji kama unasema vingine. Funga nyaya imara ili zisivutwe wala kutafunwa.",
            "Mipaka: kozi hii ni kwa mifumo midogo ya DC tu. Usiunganishe kamwe mfumo wa sola na gridi au nyaya za umeme wa nyumba, na usifungue kamwe inverter. Kazi hizo zinahitaji fundi umeme mwenye leseni. Nchi nyingine zinatoa leseni kwa mafundi wa sola; Kenya, uliza EPRA, na kwingineko uliza mamlaka ya nishati ya nchi yako."
          ],
          steps: ["Chagua mahali penye jua bila kivuli; elekeza paneli upande wa ikweta ikiwa imeinama kidogo; ifunge imara.", "Fanya kazi juu tu ukiwa na ngazi salama na msaidizi; kamwe wakati wa mvua au upepo.", "Weka betri ndani: pakavu, penye kivuli, hewa inapita, juu ya sakafu, mbali na watoto na moto.", "Tumia waya sahihi, mwekundu kwa +, mweusi kwa -, na weka fyuzi karibu na betri.", "Unganisha betri na kidhibiti kwanza, kisha paneli, kisha mizigo, isipokuwa mwongozo unasema vingine.", "Hakuna kuunganisha na gridi wala nyaya za umeme wa nyumba; hakuna kufungua inverter."],
          words: [["Polariti", "waya upi ni chanya (+) na upi ni hasi (-). Ukikosea unaweza kuharibu sehemu."], ["Fyuzi", "kipande kidogo cha usalama kinachokata mzunguko wa umeme ukipita mkondo mwingi mno."], ["Hewa inapita", "hewa safi inaingia na kutoka, ili gesi zisijikusanye."]],
          slides: [
            { title: "Mahali pa paneli", bullets: ["Jua kamili, bila kivuli", "Elekea ikweta: kusini ukiwa kaskazini mwake, kaskazini ukiwa kusini mwake", "Imeinama kidogo; imefungwa imara; ngazi salama na msaidizi"] },
            { title: "Mahali pa betri", bullets: ["Ndani: pakavu, penye kivuli, hewa inapita, juu ya sakafu", "Mbali na watoto na moto wa kupikia", "Lead-acid: asidi na gesi; miwani ya kinga, glavu, hakuna moto"] },
            { title: "Nyaya", bullets: ["Waya sahihi; mwekundu +, mweusi -", "Fyuzi karibu na betri", "Betri na kidhibiti kwanza, kisha paneli, kisha mizigo (au kama mwongozo unavyosema)"] },
            { title: "Mipaka yako", bullets: ["Mifumo midogo ya DC tu", "Kamwe gridi au nyaya za umeme wa nyumba; kamwe usifungue inverter", "Leseni: Kenya EPRA; kwingineko mamlaka ya nishati ya nchi yako"] }
          ],
          sources: [EPRA, NFPA],
          tryIt: "Andika orodha yako ya usalama ya ufungaji yenye mistari angalau minane kutoka somo hili. Ukiweza, tembea kuzunguka nyumba na uchague mahali bora kwa paneli na betri, na uandike kwa nini.",
          youCanNow: "kufunga mfumo mdogo wa sola wa DC wa nyumbani kwa usalama ukifuata orodha, na kujua kazi zipi za kumwachia fundi umeme mwenye leseni.",
          quickCheck: [
            { objective: "O3", q: "Nyumba ya mteja iko Nairobi, kidogo kusini mwa ikweta. Paneli inapaswa kuelekea upande gani?", options: ["Kusini", "Moja kwa moja chini", "Kaskazini, kuelekea ikweta", "Kwenye kivuli"], answer: 2, why: "Paneli zinaelekea ikweta; kusini mwa ikweta, hiyo ina maana kuelekea kaskazini." },
            { objective: "O3", q: "Mteja anakuomba uunganishe kifaa chake cha sola na nyaya za gridi nyumbani kwake. Unafanya nini?", options: ["Kufanya haraka", "Kukataa: kazi ya gridi na nyaya za umeme wa nyumba inahitaji fundi umeme mwenye leseni", "Kufanya usiku", "Kufungua inverter kwanza"], answer: 1, why: "Kozi hii ni kwa mifumo midogo ya DC tu; kazi ya gridi na nyaya za umeme wa nyumba inahitaji fundi umeme mwenye leseni." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Jinsi mfumo wa sola wa nyumbani unavyofanya kazi",
        questions: [
          { objective: "O1", q: "Inverter inafanya nini?", options: ["Inahifadhi umeme", "Inatengeneza umeme kutokana na jua", "Inapima mwanga wa jua", "Inabadilisha umeme wa DC wa betri kuwa AC kwa soketi za kawaida"], answer: 3, why: "Inverter inageuza DC kuwa AC." },
          { objective: "O1", q: "Kwa nini uchague kifaa kilicho kwenye hifadhidata ya VeraSol?", options: ["Kimejaribiwa na watu huru kwa utendaji, uimara na madai ya kweli", "Ni cha bei nafuu zaidi kila wakati", "Hakihitaji matunzo kamwe", "Kinafanya kazi bila jua"], answer: 0, why: "VeraSol inathibitisha vifaa baada ya majaribio huru." },
          { objective: "O2", q: "Familia inahitaji Wh 120 kwa siku kabla ya upotevu. Ni kama ngapi ukiongeza 30%?", options: ["Wh 90", "Wh 150", "Wh 156", "Wh 360"], answer: 2, why: "120 x 1.3 = Wh 156." },
          { objective: "O2", q: "Kwa nini betri ya lithium isimalizwe kabisa kila usiku?", options: ["Inafanya taa ziwake zaidi", "Ni kwa mchana tu", "Ni kinyume cha sheria", "Kuimaliza kabisa kunafupisha maisha yake, kwa hiyo unakadiria kwa matumizi ya kama 80%"], answer: 3, why: "Kubakiza chaji kiasi kwenye betri kunailinda, kwa hiyo ukadiriaji unazingatia sehemu inayotumika." },
          { objective: "O3", q: "Fyuzi inapaswa kuwekwa wapi?", options: ["Karibu na betri, kama mtengenezaji anavyosema", "Juu ya paa", "Ndani ya balbu ya taa", "Popote, au isiwekwe kabisa"], answer: 0, why: "Fyuzi karibu na betri inalinda nyaya dhidi ya shoti kwenye betri." }
        ]
      }
    },
    {
      name: "Sura 2: Kuufanya ufanye kazi na kuendesha biashara ya sola",
      lessons: [
        {
          title: "Matunzo na kutafuta hitilafu rahisi",
          objectives: ["O4"],
          minutes: 5,
          goal: "Fanya matunzo ya kawaida na utafute hitilafu rahisi hatua kwa hatua.",
          text: [
            "Mfumo unaotunzwa vizuri unadumu miaka mingi. Mfundishe mteja: safisha paneli kwa maji na kitambaa laini inapokuwa na vumbi, asubuhi mapema au jioni wakati ni baridi (kamwe usitumie sabuni inayoacha utando, na kamwe usisimame juu yake). Kata matawi yanayoleta kivuli kipya. Weka betri safi na kavu. Zima vifaa visivyohitajika.",
            "Mteja akisema \"taa zinazimika mapema\", kagua kwa mpangilio huu: (1) Paneli: ni chafu au iko kwenye kivuli sasa? (2) Viunganishi: kuna nyaya au plagi zilizolegea, zilizovunjika au zenye kutu? (3) Kidhibiti: taa zake au skrini yake inaonyesha nini? Soma mwongozo ujue maana yake. (4) Betri: ni ya zamani, imevimba, ina joto au inavuja? (5) Mizigo: familia imeongeza TV kubwa zaidi au balbu nyingi kuliko mfumo ulivyokadiriwa?",
            "Hitilafu nyingi ni uchafu, kivuli, plagi zilizolegea au mizigo ya ziada. Betri iliyovimba, yenye joto sana au inayovuja lazima ibadilishwe; kamwe usiichaji wala kuifungua. Betri za zamani ni taka za kielektroniki (e-waste): kamwe usizichome, usizifukie wala kuzitupa ovyo, na uzipe mkusanyaji aliyeidhinishwa au mpango wa kampuni ya kifaa wa kurudisha bidhaa za zamani.",
            "Mfano: Chinedu wa Kano anapigiwa simu kwamba taa zinazimika kufikia saa 2 usiku (8 pm). Anakuta tawi jipya la mti likifunika paneli kwa kivuli na TV ya pili imeongezwa. Analikata tawi kwa ruhusa ya mwenye nyumba na anaeleza ukubwa wa mfumo; familia inaamua kuongeza paneli ya pili."
          ],
          steps: ["Kagua paneli: ni safi na haina kivuli?", "Kagua viunganishi: vimelegea, vimevunjika au vina kutu?", "Kagua taa au skrini ya kidhibiti ukilinganisha na mwongozo.", "Kagua betri: ya zamani, imevimba, ina joto au inavuja?", "Kagua mizigo: vitu vingi zaidi au vikubwa zaidi kuliko ilivyopangwa?"],
          words: [["Kutu", "ganda la kijani au jeupe kwenye viunganishi vya chuma linalozuia umeme kupita vizuri."], ["Mpango wa kurudisha (take-back)", "mpango wa kampuni wa kukusanya bidhaa zake za zamani ili zirejelezwe kwa usalama."]],
          slides: [
            { title: "Matunzo ya kawaida", bullets: ["Safisha paneli kwa maji na kitambaa laini wakati ni baridi", "Kata kivuli kipya; weka betri safi na kavu", "Zima visivyohitajika"] },
            { title: "Kutafuta hitilafu kwa mpangilio", bullets: ["1. Paneli: chafu au kwenye kivuli?", "2. Viunganishi: vimelegea au vina kutu?", "3. Taa za kidhibiti; 4. Betri; 5. Mizigo ya ziada"] },
            { title: "Onyo kuhusu betri", bullets: ["Imevimba, ina joto sana au inavuja: ibadilishe", "Kamwe usichaji wala kufungua betri iliyoharibika", "Betri za zamani: mkusanyaji aliyeidhinishwa au mpango wa kurudisha"] }
          ],
          sources: [NFPA, WHO_EWASTE],
          tryIt: "Andika kadi ya matunzo kwa mteja (mistari minne ya matunzo ya kawaida) na orodha ya hatua tano za kutafuta hitilafu utakayobeba kila unapoitwa.",
          youCanNow: "kumfundisha mteja jinsi ya kutunza mfumo wake na kutafuta hitilafu rahisi kwa mpangilio sahihi.",
          quickCheck: [
            { objective: "O4", q: "Taa zinazimika mapema. Kitu cha kwanza cha kukagua ni kipi?", options: ["Rangi ya betri", "Kama paneli ni chafu au iko kwenye kivuli", "Simu ya mteja", "Bei ya kifaa"], answer: 1, why: "Anza na paneli: uchafu na kivuli kipya ni sababu za kawaida na rahisi." },
            { objective: "O4", q: "Unakuta betri iliyovimba na yenye joto. Unafanya nini?", options: ["Kuibadilisha; usiichaji wala kuifungua", "Kuichaji muda mrefu zaidi", "Kuifungua uangalie ndani", "Kuichoma"], answer: 0, why: "Betri iliyovimba na yenye joto ni hatari na lazima ibadilishwe kwa usalama." }
          ]
        },
        {
          title: "Kuuza kwa uaminifu: pesa taslimu na kulipa kidogo kidogo",
          objectives: ["O5"],
          minutes: 5,
          goal: "Eleza bei ya pesa taslimu na masharti ya kulipa kidogo kidogo ili mteja aweze kusema jumla atakayolipa.",
          text: [
            "Familia nyingi haziwezi kulipa bei yote mara moja, kwa hiyo kampuni nyingi zinauza vifaa kwa mpango wa kulipa kidogo kidogo (PAYGo, pay-as-you-go). Mteja analipa amana, kisha malipo madogo, mara nyingi kila siku, kila wiki au kila mwezi kwa pesa ya simu (mobile money). Malipo yakisimama, kifaa kinajifunga hadi alipe tena. Baada ya malipo ya mwisho, kifaa ni mali ya mteja.",
            "PAYGo inasaidia familia kupata sola mapema, lakini jumla kwa kawaida ni zaidi ya bei ya pesa taslimu. Muuzaji mwaminifu anaonyesha zote mbili. Mfano (namba ni mifano tu): bei ya pesa taslimu KES 20,000. PAYGo: amana KES 2,000, kisha KES 1,500 kwa mwezi kwa miezi 18: 2,000 + (1,500 x 18) = KES 29,000 kwa jumla. Mteja anapaswa kuweza kusema jumla hiyo kabla ya kusaini.",
            "GOGLA, chama cha sekta ya sola isiyounganishwa na gridi, kina kanuni za ulinzi wa wateja zilizojengwa juu ya mauzo na bei za kuwajibika (usiuze zaidi ya kile familia inaweza kumudu), uwazi (taarifa wazi na za kweli), kutendewa kwa haki na heshima, huduma nzuri na ubora wa bidhaa. Zifuate hata kama kampuni yako haijazisaini.",
            "Kamwe usiahidi zaidi ya kile mfumo unaweza kuwasha. Kamwe usimwombe mteja PIN yake ya pesa ya simu; malipo yanaenda kwenye namba rasmi au till ya kampuni, na kampuni halisi haiombi PIN kamwe."
          ],
          steps: ["Onyesha bei ya pesa taslimu.", "Onyesha amana ya PAYGo, kiasi cha malipo, mara ngapi na kwa muda gani.", "Kokotoa gharama yote ya PAYGo pamoja na mteja.", "Eleza kinachotokea malipo yakikosekana, na dhamana.", "Hakikisha mteja anaweza kumudu malipo; kamwe usiombe PIN."],
          words: [["PAYGo (pay-as-you-go, kulipa kidogo kidogo)", "kununua kifaa kwa amana na malipo madogo; kinajifunga malipo yakisimama na ni chako baada ya malipo ya mwisho."], ["Amana", "malipo ya kwanza kabla mteja hajachukua kifaa."], ["Ulinzi wa wateja", "sheria na tabia zinazowatendea wateja kwa haki na uaminifu."]],
          slides: [
            { title: "Jinsi PAYGo inavyofanya kazi", bullets: ["Amana, kisha malipo madogo kwa pesa ya simu", "Kifaa kinajifunga malipo yakisimama", "Mteja anakimiliki baada ya malipo ya mwisho"] },
            { title: "Onyesha jumla", bullets: ["Gharama yote ya PAYGo kwa kawaida ni zaidi ya pesa taslimu", "Mfano: 2,000 + 1,500 x 18 = KES 29,000 dhidi ya KES 20,000 taslimu", "Mteja anaweza kusema jumla kabla ya kusaini"] },
            { title: "Uza kwa haki (kanuni za GOGLA)", bullets: ["Mauzo ya kuwajibika: kile tu wanachoweza kumudu", "Uwazi; kutendewa kwa haki na heshima", "Huduma nzuri na ubora"] },
            { title: "Kamwe", bullets: ["Usiahidi zaidi ya kile mfumo unaweza kuwasha", "Usiombe PIN ya pesa ya simu"] }
          ],
          sources: [GOGLA_CP],
          tryIt: "Kwa kifaa unachokijua (au kwa mfano huu), andika bei ya pesa taslimu na masharti ya PAYGo kando kwa kando, na ukokotoe gharama yote ya PAYGo. Jizoeze kuieleza kwa sauti chini ya dakika moja.",
          youCanNow: "kueleza kwa uaminifu bei ya pesa taslimu na ya kulipa kidogo kidogo ili mteja ajue jumla kabla ya kusaini.",
          quickCheck: [
            { objective: "O5", q: "Amana ya PAYGo XOF 10,000, kisha XOF 5,000 kwa mwezi kwa miezi 12. Jumla ni ngapi?", options: ["XOF 15,000", "XOF 60,000", "XOF 50,000", "XOF 70,000"], answer: 3, why: "10,000 + (5,000 x 12) = 70,000." },
            { objective: "O5", q: "Lipi ni kuuza kwa uaminifu?", options: ["Kuficha gharama yote ya PAYGo", "Kuahidi kifaa kitawasha friji wakati hakiwezi", "Kuonyesha bei ya pesa taslimu na gharama yote ya PAYGo kando kwa kando", "Kuiuzia familia zaidi ya kile inachoweza kulipa"], answer: 2, why: "Uwazi ni kuonyesha bei zote mbili kwa uwazi." }
          ]
        },
        {
          title: "Kuandika nukuu ya bei na kuendesha biashara yako ya sola",
          objectives: ["O5", "O2"],
          minutes: 5,
          goal: "Andika nukuu ya bei kamili na ya kweli kwa familia moja.",
          text: [
            "Nukuu nzuri ya bei inajenga imani. Inamwonyesha mteja kile alichoomba kuwasha, jedwali la nishati, mfumo uliouchagua na kwa nini, bei, masharti ya malipo na dhamana. Pia ina jina lako, namba yako ya simu na tarehe.",
            "Bei yako ya ufungaji lazima ilipe kifaa, nyaya na vifaa vya kufungia, usafiri hadi nyumbani kwa mteja, muda wako, na faida. Mfano (namba ni mifano tu): kifaa MAD 2,500, nyaya na vifaa vya kufungia MAD 300, usafiri MAD 150, kazi ya mikono MAD 400: gharama MAD 3,350. Ongeza faida ya MAD 400: MAD 3,750.",
            "Baada ya ufungaji, mpe mteja kadi: hatua za matunzo, maana ya taa za kidhibiti, dhamana, na namba yako kwa matatizo. Rudi baada ya mwezi mmoja kukagua. Wateja walioridhika wanawaleta majirani; hivyo ndivyo biashara za sola zinavyokua vijijini kuanzia Kitui hadi Kaolack.",
            "Weka kumbukumbu rahisi ya kila kazi: mteja, kifaa na namba yake ya serial, tarehe, bei na kila ulipoitwa tena. Inakusaidia kuheshimu dhamana na kuona vifaa vipi vinaharibika."
          ],
          steps: ["Andika jedwali la nishati na ukadiriaji ulioufanya.", "Taja kifaa, na kama kimethibitishwa au kina dhamana ya maandishi.", "Ongeza orodha yako ya usalama.", "Onyesha bei ya pesa taslimu na masharti yoyote ya PAYGo pamoja na jumla.", "Ambatisha kadi ya matunzo na dhamana, yenye jina lako, namba yako na tarehe."],
          words: [["Nukuu ya bei", "ofa ya maandishi inayoonyesha utakachotoa na kufanya, na bei."], ["Namba ya serial", "namba ya kipekee kwenye bidhaa, inayotumika kwa dhamana yake."], ["Kuitwa tena", "kurudi kwa mteja kurekebisha tatizo baada ya ufungaji."]],
          slides: [
            { title: "Nukuu ya bei inaonyesha nini", bullets: ["Wanachotaka kuwasha: jedwali la nishati", "Mfumo na kwa nini; umethibitishwa au una dhamana", "Bei, masharti, dhamana; jina lako, namba, tarehe"] },
            { title: "Bei yako ya ufungaji", bullets: ["Kifaa + nyaya + usafiri + kazi ya mikono + faida", "Mfano: gharama MAD 3,350 + MAD 400 = MAD 3,750", "Namba ni mifano tu"] },
            { title: "Baada ya kazi", bullets: ["Kadi ya matunzo na dhamana", "Tembelea tena baada ya mwezi mmoja", "Kumbukumbu: mteja, kifaa, namba ya serial, tarehe, bei"] }
          ],
          tryIt: "Andika nukuu yako kamili ya bei kwa familia moja, kama ilivyoelezwa katika kazi ya mwisho. Msomee rafiki na umwombe akuambie jumla ambayo angelipa.",
          youCanNow: "kuandika nukuu ya bei kamili na ya kweli kwa mfumo wa sola wa nyumbani na kuweka kumbukumbu nzuri za kila kazi.",
          quickCheck: [
            { objective: "O5", q: "Kitu kipi kinapaswa kuwa kwenye kila nukuu ya bei?", options: ["PIN ya pesa ya simu ya mteja", "Jumla ambayo mteja atalipa, na dhamana", "Ahadi ya umeme wa bure milele", "Bei za washindani wako tu"], answer: 1, why: "Gharama yote na dhamana zinamwezesha mteja kuamua kwa haki." },
            { objective: "O2", q: "Kwa nini uweke jedwali la nishati kwenye nukuu ya bei?", options: ["Linaonyesha jinsi ulivyokadiria mfumo kulingana na matumizi halisi ya familia", "Ili nukuu iwe ndefu zaidi", "Wateja wanapenda namba", "Halihitajiki"], answer: 0, why: "Jedwali linaonyesha kwamba mfumo unalingana na kile familia itakachowasha." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuufanya ufanye kazi na kuuza",
        questions: [
          { objective: "O4", q: "Mteja anapaswa kusafishaje paneli yenye vumbi?", options: ["Kwa sabuni saa sita mchana", "Kwa kusimama juu yake na kusugua", "Kwa maji na kitambaa laini wakati ni baridi", "Kwa mchanga"], answer: 2, why: "Maji na kitambaa laini, wakati ni baridi, vinasafisha bila kuharibu." },
          { objective: "O4", q: "Taa zinazimika mapema na paneli ni safi na haina kivuli. Unakagua nini baadaye?", options: ["Chaneli ya TV ya mteja", "Viunganishi: nyaya zilizolegea, zilizovunjika au zenye kutu", "Utabiri wa hali ya hewa", "Hakuna kingine"], answer: 1, why: "Viunganishi vinafuata katika mpangilio wa kutafuta hitilafu." },
          { objective: "O4", q: "Betri ya zamani ya sola inapaswa kufanywa nini?", options: ["Kuichoma", "Kuifukia", "Kuitupa mtoni", "Kumpa mkusanyaji aliyeidhinishwa au mpango wa kurudisha"], answer: 3, why: "Betri za zamani ni taka za kielektroniki na zinahitaji kurejelezwa kwa usalama." },
          { objective: "O5", q: "Nini kinatokea kwenye PAYGo malipo yakisimama?", options: ["Kifaa kinajifunga hadi mteja alipe tena", "Mteja anakimiliki mara moja", "Paneli inavunjika", "Hakuna kinachotokea"], answer: 0, why: "Vifaa vya PAYGo vinajifunga malipo yakisimama na vinafunguka yakilipwa." },
          { objective: "O5", q: "Mteja anaweza kumudu nusu tu ya malipo ya kila mwezi. Mauzo ya kuwajibika yanamaanisha nini?", options: ["Kumuuzia kifaa kikubwa hata hivyo", "Kuficha kiasi cha malipo", "Kumpa kifaa kidogo au mpango anaoweza kumudu", "Kuomba PIN yake"], answer: 2, why: "Mauzo ya kuwajibika ni kutouza zaidi ya kile familia inaweza kumudu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Mifumo ya Sola ya Nyumbani: Kufunga, Kuuza na Biashara za Nishati Nje ya Gridi",
    questions: [
      { objective: "O1", q: "Sehemu ipi inahifadhi nishati kwa ajili ya usiku?", options: ["Paneli", "Betri", "Fyuzi", "Taa"], answer: 1, why: "Betri inahifadhi nishati ya kutumia wakati hakuna jua." },
      { objective: "O1", q: "VeraSol ni nini?", options: ["Aina ya betri", "Kampuni ya sola inayouza kwa PAYGo", "Mpango huru wa ubora unaothibitisha vifaa vya sola visivyounganishwa na gridi", "Kodi ya serikali"], answer: 2, why: "VeraSol ni mpango huru wa uhakikisho wa ubora wa sola isiyounganishwa na gridi." },
      { objective: "O1", q: "Kifaa hakina lebo, hakina uthibitisho wala dhamana. Unafanya nini?", options: ["Kuomba dhamana ya maandishi na matokeo ya majaribio, au kuchagua kifaa kilichothibitishwa", "Kukiuza kama kilichothibitishwa", "Kukiuza kwa bei ya juu zaidi", "Kukifunga bila kumwambia mtu"], answer: 0, why: "Bila uthibitisho wa ubora, omba dhamana na matokeo ya majaribio, au chagua kifaa kilichothibitishwa." },
      { objective: "O1", q: "Kwa nini vifaa vidogo mara nyingi vinatumia vifaa vya umeme vya DC?", options: ["Vina sauti kubwa zaidi", "Vinahitaji gridi", "Ni bure kila wakati", "Vinatumia nishati kidogo kuliko vifaa vya AC vinavyotumia inverter"], answer: 3, why: "Vifaa vya DC vinaepuka upotevu wa inverter na vinatumia nishati kidogo." },
      { objective: "O2", q: "Redio inatumia W 5 kwa saa 6 kwa siku. Ni Wh ngapi?", options: ["Wh 11", "Wh 30", "Wh 56", "Wh 1"], answer: 1, why: "5 x 6 = Wh 30." },
      { objective: "O2", q: "Kwa nini uongeze kama 30% kwenye jumla ya kila siku?", options: ["Kwa upotevu kwenye nyaya, kidhibiti na betri", "Kwa faida", "Kwa kodi", "Kwa salio la simu la mteja"], answer: 0, why: "Nishati inapotea njiani, kwa hiyo mfumo lazima utengeneze zaidi ya kile mizigo inachotumia." },
      { objective: "O2", q: "Mahitaji ya kila siku Wh 300, saa 5 za jua kali. Paneli ndogo kabisa kwa hesabu hii ni ipi?", options: ["W 1,500", "W 30", "W 6", "W 60"], answer: 3, why: "300 / 5 = W 60; kisha panda hadi ukubwa wa paneli unaofuata." },
      { objective: "O2", q: "Mahitaji ya kila siku Wh 240, betri ya lithium inatumika hadi 80%, V 12. Ni kama ampea-saa ngapi?", options: ["Kama Ah 25", "Kama Ah 12", "Kama Ah 300", "Kama Ah 2"], answer: 0, why: "240 / 0.8 = Wh 300; 300 / 12 = Ah 25." },
      { objective: "O3", q: "Mteja anaishi kaskazini mwa Ghana, kaskazini mwa ikweta. Paneli inapaswa kuelekea upande gani?", options: ["Kaskazini", "Moja kwa moja juu bila kuinama kabisa", "Kusini, kuelekea ikweta", "Mashariki tu"], answer: 2, why: "Kaskazini mwa ikweta, paneli zinaelekea kusini, kuelekea ikweta, zikiwa zimeinama kidogo." },
      { objective: "O3", q: "Betri inapaswa kuwekwa wapi?", options: ["Juu ya paa kwenye jua", "Karibu na moto wa kupikia", "Ndani, pakavu, penye kivuli, hewa inapita, juu ya sakafu, mbali na watoto", "Ndani ya boksi lililofungwa bila hewa"], answer: 2, why: "Mahali pakavu, penye kivuli na hewa inapita, mbali na watoto na moto, ni salama zaidi." },
      { objective: "O3", q: "Katika vifaa vingi vyenye kidhibiti cha peke yake, unaunganisha nini kwanza?", options: ["Paneli na mizigo", "Betri na kidhibiti", "Mizigo na gridi", "Paneli moja kwa moja na betri"], answer: 1, why: "Kuunganisha betri na kidhibiti kwanza kunakiwezesha kidhibiti kujiweka tayari; kisha paneli, kisha mizigo, isipokuwa mwongozo unasema vingine." },
      { objective: "O3", q: "Kazi ipi iko nje ya kozi hii na inahitaji fundi umeme mwenye leseni?", options: ["Kusafisha paneli", "Kuweka betri", "Kuweka fyuzi ya mtengenezaji", "Kuunganisha mfumo na gridi au nyaya za umeme wa nyumba"], answer: 3, why: "Kazi ya gridi na nyaya za umeme wa nyumba ni kwa mafundi umeme wenye leseni tu." },
      { objective: "O3", q: "Kwa nini betri za lead-acid ziwe mahali hewa inapopita na mbali na moto?", options: ["Zinatoa gesi inayowaka zinapochajiwa", "Zinapata baridi mno", "Zinavutia wadudu", "Zinahitaji mwanga wa jua"], answer: 0, why: "Kuchaji betri za lead-acid kunatoa gesi inayowaka." },
      { objective: "O4", q: "Wakati gani ni bora kusafisha paneli?", options: ["Saa sita mchana kwenye jua kali", "Asubuhi mapema au jioni, wakati ni baridi", "Wakati wa dhoruba", "Kamwe"], answer: 1, why: "Paneli iliyo baridi ni salama zaidi kuigusa na kuisafisha kuliko iliyo na joto kwenye jua kali." },
      { objective: "O4", q: "Mpangilio sahihi wa kutafuta hitilafu ni upi?", options: ["Betri, kisha kubahatisha", "Mizigo, kisha kununua kifaa kipya", "Paneli, viunganishi, kidhibiti, betri, mizigo", "Kidhibiti tu"], answer: 2, why: "Kukagua kwa mpangilio huu kunapata kwanza sababu za kawaida na rahisi." },
      { objective: "O4", q: "Familia iliongeza TV kubwa na sasa taa zinazimika mapema. Sababu inayowezekana ni ipi?", options: ["Paneli imepinduliwa", "Jua ni dhaifu zaidi", "Fyuzi ina nguvu mno", "Mzigo mkubwa kuliko mfumo ulivyokadiriwa"], answer: 3, why: "Mizigo ya ziada inatumia nishati zaidi kuliko mfumo unavyotengeneza na kuhifadhi." },
      { objective: "O5", q: "Bei ya pesa taslimu NGN 150,000. PAYGo: amana NGN 20,000, kisha NGN 12,000 kwa mwezi kwa miezi 12. Jumla ya PAYGo ni ngapi?", options: ["NGN 164,000", "NGN 144,000", "NGN 32,000", "NGN 150,000"], answer: 0, why: "20,000 + (12,000 x 12) = 164,000." },
      { objective: "O5", q: "Nani atamwomba mteja PIN yake ya pesa ya simu?", options: ["Kampuni ya sola", "Meneja wako", "Hakuna kampuni halisi: walaghai tu", "Fundi"], answer: 2, why: "Kampuni halisi haiombi PIN kamwe." },
      { objective: "O5", q: "Kipi ni sehemu ya kanuni za GOGLA za ulinzi wa wateja?", options: ["Kumuuzia kila mtu kifaa kikubwa zaidi", "Uwazi: taarifa wazi na za kweli", "Kuficha bei yote", "Hakuna huduma baada ya mauzo"], answer: 1, why: "Uwazi na mauzo ya kuwajibika ni kanuni kuu." },
      { objective: "O5", q: "Kifaa EGP 4,000, nyaya EGP 500, usafiri EGP 300, kazi ya mikono EGP 700, faida EGP 500. Bei yako ni ngapi?", options: ["EGP 5,500", "EGP 4,500", "EGP 5,000", "EGP 6,000"], answer: 3, why: "4,000 + 500 + 300 + 700 + 500 = 6,000." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 1, 4, 6, 8, 11, 14, 16, 18] },
  rubric: {
    mastery: "Inakidhi au Inazidi kwenye kila safu. Kama safu ni Bado, rekebisha sehemu hiyo ya nukuu yako ya bei na ujaribu tena.",
    criteria: [
      { name: "Ubora umekaguliwa", objective: "O1", notYet: "Kifaa hakijatajwa, au ubora haujakaguliwa.", meets: "Kifaa na sehemu zake zimetajwa, na nukuu inaandika kama kimo kwenye hifadhidata ya VeraSol au kina dhamana ya maandishi.", exceeds: "Pia inamweleza mteja kwa nini kifaa kilichothibitishwa ni muhimu." },
      { name: "Ukubwa umekadiriwa sahihi", objective: "O2", notYet: "Hakuna jedwali la nishati, au hesabu si sahihi.", meets: "Jedwali la nishati, nyongeza ya 30%, na ukubwa wa paneli na betri vimekokotolewa kwa usahihi.", exceeds: "Pia inazingatia siku za mawingu au miezi yenye mawingu mengi zaidi, na inasema namba ya saa za jua ilitoka wapi." },
      { name: "Ufungaji salama", objective: "O3", notYet: "Hakuna orodha, au ina kazi ya gridi au nyaya za umeme wa nyumba.", meets: "Orodha inahusu mahali pa paneli, usalama wa ngazi, mahali pa betri, polariti, fyuzi na mpangilio wa kuunganisha, bila kazi ya gridi.", exceeds: "Pia inataja mamlaka ya nishati ya kuuliza kuhusu leseni." },
      { name: "Matunzo na hitilafu", objective: "O4", notYet: "Hakuna kadi ya matunzo, au ushauri si salama.", meets: "Kadi inatoa matunzo ya kawaida na mpangilio wa hatua tano wa kutafuta hitilafu, na inasema jinsi betri za zamani zinavyoshughulikiwa.", exceeds: "Pia inaeleza taa za kidhibiti kwa kifaa hiki." },
      { name: "Bei na masharti ya kweli", objective: "O5", notYet: "Gharama yote ya PAYGo au dhamana haipo, au hesabu si sahihi.", meets: "Bei ya pesa taslimu, masharti yoyote ya PAYGo na jumla sahihi vinaonyeshwa kando kwa kando, pamoja na dhamana na namba ya fundi.", exceeds: "Pia inahakikisha malipo yanaingia kwenye bajeti ya familia na inasema kinachotokea malipo yakikosekana." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (rubric)",
      "Wanafunzi wanaoripoti kuandika nukuu ya bei yenye jedwali la nishati kwa mteja halisi ndani ya siku 30 (utafiti wa ufuatiliaji)",
      "Wanafunzi wanaoripoti kuuza au kufunga kifaa kilichothibitishwa ndani ya siku 90",
      "Wanafunzi wanaoripoti kutokuwa na moto wa betri, shoti za umeme wala malalamiko ya wateja kuhusu gharama zilizofichwa kwa siku 90"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu ya kawaida yenye kikokotoo; data kwa utafutaji mfupi kwenye hifadhidata ya VeraSol ikiwezekana",
      "Karatasi na kalamu kwa jedwali la nishati, orodha ya usalama, kadi ya matunzo na nukuu ya bei",
      "Ikiwezekana, kifaa kidogo cha sola kilichothibitishwa cha kuangalia na kutaja sehemu zake",
      "Kama dakika 60 hadi 75 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Katika kikundi cha vijana, cha mafunzo ya ufundi au cha wanawake: fanyeni jaribio la awali pamoja, kisha sura moja kwa kila kipindi, wanafunzi wakikadiria mfumo kwa nyumba halisi wanayoijua.",
      "Ufungaji kwa vitendo ufanyiwe mazoezi chini ya fundi mwenye uzoefu tu, kwenye vifaa vidogo vya DC; kamwe usiwaruhusu wanafunzi kufanya kazi kwenye gridi, nyaya za umeme wa nyumba au inverter.",
      "Kabla ya kozi, tafuta kama nchi yako inatoa leseni kwa mafundi wa sola na ni wakusanyaji gani wa taka za kielektroniki au mipango gani ya kurudisha inayohudumia eneo lako.",
      "Kamwe usiwaombe wanafunzi kushiriki PIN au nywila darasani.",
      "Pima kazi ya mwisho kwa rubric, na utoe maoni kuhusu safu moja ya Bado kwa wakati mmoja."
    ]
  }
};
