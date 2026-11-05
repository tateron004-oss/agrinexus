"use strict";

// Koach Learn course (Igbo translation of africa-life/afr-phone-repair-business.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Money figures are examples only, exactly as in the English. No added prices, fees or facts.

const NFPA = { name: "NFPA (US National Fire Protection Association, ụlọ ọrụ America na-ahụ maka nchekwa site n'ọkụ): nchekwa batrị lithium-ion (ihe ịrịba ama; atụbala ya n'ebe mkpofu, nyeghachi ya ka e megharịa ya)", url: "https://www.nfpa.org/education-and-research/home-fire-safety/lithium-ion-batteries" };
const WHO_EWASTE = { name: "Akwụkwọ nkọwa WHO: Ihe mkpofu eletrọnịkị (e-waste): nde tọn 62 na 2022, 22.3% ka e dere na e megharịrị; ihe egwu dị n'ịgba ya ọkụ", url: "https://www.who.int/news-room/fact-sheets/detail/electronic-waste-(e-waste)" };
const NDPC = { name: "Nigeria Data Protection Commission (ụlọ ọrụ na-echebe ozi nzuzo ndị mmadụ na Naịjirịa; Nigeria Data Protection Act 2023)", url: "https://ndpc.gov.ng/" };
const GH_DPC = { name: "Data Protection Commission Ghana (Data Protection Act, 2012, Act 843; ndị na-edebe ozi nzuzo ndị mmadụ ga-edebanye aha ha)", url: "https://dpc.gov.gh/" };
const KE_ODPC = { name: "Office of the Data Protection Commissioner, Kenya (ọfịs na-echebe ozi nzuzo ndị mmadụ na Kenya)", url: "https://www.odpc.go.ke/" };

module.exports = {
  id: "afr-phone-repair-business-ig",
  lang: "ig",
  translationOf: "afr-phone-repair-business",
  category: "Africa: Life and Work",
  name: "Ịmalite Azụmahịa Idozi Ekwentị",
  skills: "Ịhazi tebụl ndozi na-enweghị ihe egwu, Ijikwa batrị lithium n'enweghị ihe egwu, Ịchọta nsogbu na ide kaadị ọrụ, Ichebe ozi ndị ahịa, Ịkpebi ọnụahịa ndozi na nkwa (warranty), Ijikwa ihe mkpofu eletrọnịkị n'enweghị ihe egwu",
  outcome: "ịrụ obere azụmahịa idozi ekwentị na-enweghị ihe egwu ma bụrụ nke ezi omume: ịrụ ọrụ na tebụl na-enweghị ihe egwu, ijikwa batrị lithium n'enweghị ihe egwu ọkụ, ịchọta nsogbu ndị a na-ahụkarị ma dee ọrụ ọ bụla na kaadị ọrụ, ichebe ozi onye ahịa ọ bụla, ịkpebi ọnụahịa ndozi na nkwa doro anya, na iwepụ batrị nwụrụ anwụ na akụkụ mebiri emebi n'enweghị ihe egwu.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị ntorobịa, ndị ọrụ aka na ndị nwe obere azụmahịa n'Afrịka niile na-edozi ekwentị, ma ọ bụ chọrọ ime ya, n'obere ụlọ ahịa, n'ahịa ma ọ bụ n'obere shọp: na Luthuli Avenue dị na Nairobi, Computer Village dị na Lagos, Circle dị na Accra, Adjamé dị na Abidjan ma ọ bụ Akwa dị na Douala.",
    "Isi 1 na-akụzi ọrụ na-enweghị ihe egwu: tebụl gị na ngwaọrụ gị, ihe egwu dị na batrị lithium, na otu esi achọta nsogbu nzọụkwụ n'otu n'otu ma dee ya na kaadị ọrụ. Isi 2 na-akụzi azụmahịa ahụ: ichebe ozi ndị ahịa, ọnụahịa na nkwa (warranty), ịjụ ekwentị e zuru ezu, na ijikwa ihe mkpofu eletrọnịkị.",
    "Nke a abụghị ihe ọmụmụ eletrọnịkị zuru ezu. Ọ na-enye gị omume nchekwa na nka azụmahịa na-eche gị, ndị ahịa gị na ụlọ ahịa gị nche, ka nka gị wee nweta gị ezigbo aha. Ọnụ ego niile bụ naanị ọmụmaatụ. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ. Obere nnwale na-esote nkuzi ọ bụla, nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ a."
  ],
  finalTask: "Mee ngwugwu mmalite ụlọ ahịa gị: (1) ndepụta ọnụahịa maka opekata mpe ndozi ise a na-emekarị (dịka ọmụmaatụ ihuenyo, ọdụ chaja, batrị, igwe okwu, ịtọgharị sọftwia), nke ọ bụla nwere ọnụ akụkụ, ụgwọ ọrụ, ọnụahịa na ụbọchị nkwa; (2) kaadị ọrụ otu peeji ị ga-eji maka ekwentị ọ bụla; (3) nkwa ozi ndị ahịa nwere opekata mpe ahịrị anọ; na (4) kaadị nchekwa maka mgbidi nwere iwu batrị gị na ebe batrị nwụrụ anwụ na akụkụ mebiri emebi ga-aga.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ntorobịa, ndị ọrụ aka na ndị nwe obere azụmahịa n'obodo nta na obodo ukwu n'Afrịka niile (Kenya, Naịjirịa, Ghana, Côte d'Ivoire, Cameroon, Senegal, Egypt na ndị ọzọ) na-edozi ekwentị ma ọ bụ chọrọ ịmalite, ọtụtụ mgbe n'obere ụlọ ahịa ma ọ bụ n'ahịa.",
    startingPoint: "Ọtụtụ mụtara ụfọdụ ndozi n'aka enyi ma ọ bụ site n'ịmụ ọrụ n'aka onye isi (apprenticeship), ma ọ bụ amụtabeghị ihe ọ bụla. Ọ bụ mmadụ ole na ole nwere usoro tebụl na-enweghị ihe egwu, maara otu batrị lithium mebiri emebi si dị egwu, na-ede kaadị ọrụ, na-echebe ozi ndị ahịa, na-enye ọnụahịa na nkwa, ma ọ bụ maara ebe ihe mkpofu eletrọnịkị kwesịrị ịga.",
    gap: "Ọkụ batrị na-agba ụlọ ahịa ma na-emerụ ndị mmadụ ahụ; ozi ndị ahịa furu efu ma ọ bụ gbasaa na-emebi ntụkwasị obi; ịkọ ọnụahịa na-eme ka ego fuo; ịzụta ekwentị e zuru ezu na-ebute nsogbu na ndị uwe ojii; ịgba ihe mkpofu eletrọnịkị ọkụ na-eme ezinụlọ nsi. Omume nchekwa na ngwaọrụ azụmahịa dị mfe na-eme ka nka ghọọ azụmahịa a tụkwasịrị obi, nke ga-adịgide.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu teknụzụ ọ bụla",
      "Ngwaọrụ: ekwentị Android nkịtị; obere ebe a na-ekerịta, ọtụtụ mgbe na-enweghị ihe mgbanyụ ọkụ",
      "Iwu gbasara nchekwa ozi, ikike azụmahịa na ihe mkpofu eletrọnịkị dị iche iche n'obodo ọ bụla ma na-agbanwe: ndị na-amụ ihe na-ajụ ọfịs ndị a kpọrọ aha",
      "Nchekwa: ọ dịghị ọrụ a na-arụ na batrị zara aza ma ọ bụ mebiri emebi karịa iwepụ ya n'enweghị ihe egwu; ọ dịghị ịgba ihe mkpofu eletrọnịkị ọkụ",
      "A sụgharịkwara ihe ọmụmụ a n'asụsụ French na Arabic, ya mere ọmụmaatụ gụnyere ụlọ ahịa ndị na-asụ French na ndị North Africa"
    ],
    prerequisites: "Ọ dịghị maka nka nchekwa na nka azụmahịa. Nka ndozi aka na-esi n'omume ma ọ bụ n'ịmụ ọrụ n'aka onye isi."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Tupu na n'oge ndozi ọ bụla", action: "ịhazi tebụl na-enweghị ihe egwu ma jikwaa batrị lithium n'enweghị ihe egwu, na-ahụ batrị zara aza, na-ekpo ọkụ ma ọ bụ mebiri emebi", standard: "na-agbaso iwu ọ bụla dị na kaadị nchekwa batrị gị" },
    { id: "O2", condition: "Mgbe onye ahịa wetara gị ekwentị", action: "ịchọta nsogbu nwere ike ịdị site na nlele nzọụkwụ n'otu n'otu ma dee ọrụ ahụ na kaadị ọrụ", standard: "ebe e dere nsogbu ahụ, ọnụahịa unu kwekọrịtara na nkwenye onye ahịa tupu ọrụ amalite" },
    { id: "O3", condition: "Mgbe onye ahịa hapụụrụ gị ekwentị ya", action: "ichebe ozi onye ahịa site n'ịrịọ ya ka o mee backup ma ghara mgbe ọ bụla iṅomi, ilele ma ọ bụ ikesa faịlụ ya", standard: "n'arịọghị PIN ma ọ bụ okwuntughe ọ bụla ị na-achọghị" },
    { id: "O4", condition: "Mgbe e nyere gị ọnụ akụkụ na oge ndozi na-ewe", action: "ịgbakọ ọnụahịa ndozi ma dee ndepụta ọnụahịa nwere usoro nkwa", standard: "nke na-ekpuchi akụkụ, ụgwọ ọrụ na mmefu ụlọ ahịa ma nwee uru, ya na nkwa doro anya" },
    { id: "O5", condition: "Mgbe i nwere batrị nwụrụ anwụ, ihuenyo gbajiri agbaji ma ọ bụ ekwentị ị na-enyo enyo na e zuru ezu", action: "ịhọrọ ihe na-enweghị ihe egwu ma kwekọọ n'iwu: idebe ihe mkpofu eletrọnịkị ma nyefee ya onye na-anakọta ya, na ịjụ ekwentị na-enweghị ihe akaebe nwe ya", standard: "n'agbaghị ọkụ, n'atụfughị n'ebe ọ bụla, n'azụtaghịkwa ekwentị na-enweghị ihe akaebe" }
  ],
  chapters: [
    {
      name: "Isi 1: Ọrụ na-enweghị ihe egwu na ịchọta nsogbu",
      lessons: [
        {
          title: "Tebụl ndozi na-enweghị ihe egwu",
          objectives: ["O1"],
          minutes: 4,
          goal: "Hazie tebụl ndozi na-enweghị ihe egwu, dị ọcha ma dị njikere maka ọrụ.",
          text: [
            "Tebụl gị bụ ebe ihe mberede na-eme ma ọ bụ ebe a na-egbochi ha. Ezigbo tebụl dị nkụ, nwee ìhè zuru ezu, ma dịrị anya n'ọkụ esi nri, mmanụ ụgbọ ala na mmiri. O nwere ute na-anaghị ere ọkụ (heat-resistant mat), obere efere maka ịnyịnya (screws), na ohere doro anya ka obere akụkụ ghara ifu efu.",
            "Ngwaọrụ: screwdriver kwesịrị ekwesị, ngwaọrụ plastik e ji emeghe ekwentị (spudger), tweezers, iko na-arapara (suction cup), multimeter, na ngwaọrụ ikuku ọkụ (hot air) ma ọ bụ ígwè soldering ma ọ bụrụ na a zụrụ gị iji ha. Ngwaọrụ ọkụ ga-anọ n'ihe ndebe ya, ọ bụghị n'elu akwụkwọ ma ọ bụ akwa, a ga-agbanyụkwa ha mgbe ị hapụrụ tebụl.",
            "Chebe onwe gị na ekwentị ahụ: yiri ugogbe anya nchekwa mgbe ị na-emeghe ihuenyo ma ọ bụ na-arụ ọrụ na iko, yiri eriri aka anti-static ma ọ bụ metụ ígwè na-enweghị ihe e kpuchiri ya aka iji wepụ static tupu i metụ bọọdụ aka, ma debe tin ígwè nwere aja kpọrọ nkụ n'akụkụ tebụl maka batrị mebiri emebi. Mara ụzọ isi pụọ n'ụlọ ahịa gị ma hụ na ọ dị oghe."
          ],
          steps: ["Họrọ ebe dị nkụ, nwee ìhè, dịkwa anya n'ọkụ esi nri, mmanụ ụgbọ ala na mmiri.", "Tọgbọ ute na-anaghị ere ọkụ na efere ịnyịnya.", "Debe ngwaọrụ ọkụ n'ihe ndebe ha ma gbanyụọ ha mgbe ị na-apụ.", "Yiri ugogbe anya nchekwa; wepụ static tupu i metụ bọọdụ aka.", "Debe tin ígwè nwere aja kpọrọ nkụ n'akụkụ tebụl, na ụzọ ọpụpụ dị oghe."],
          words: [["Spudger", "ngwaọrụ plastik e ji emeghe ekwentị ma bulie akụkụ n'akpụghị ha ma ọ bụ ime ka ha kpata short."], ["Multimeter", "ihe nlele na-atụ voltage, current na resistance (ike ọkụ eletrik)."], ["Static", "obere ọkụ eletrik dị n'ahụ gị nke nwere ike imebi bọọdụ ekwentị."]],
          slides: [
            { title: "Ebe ị ga-etinye tebụl gị", bullets: ["Dị nkụ, nwee ìhè zuru ezu", "Dịrị anya n'ọkụ esi nri, mmanụ ụgbọ ala na mmiri", "Ụzọ doro anya isi pụọ n'ụlọ ahịa"] },
            { title: "Ngwaọrụ ndị bụ isi", bullets: ["Screwdriver, spudger plastik, tweezers, suction cup", "Multimeter", "Ngwaọrụ ọkụ naanị ma a zụrụ gị; mgbe niile n'ihe ndebe ya"] },
            { title: "Chebe onwe gị na ekwentị", bullets: ["Ugogbe anya nchekwa maka iko na ihuenyo", "Wepụ static tupu i metụ bọọdụ aka", "Tin ígwè nwere aja kpọrọ nkụ maka batrị mebiri emebi"] }
          ],
          tryIt: "See obere eserese tebụl gị (ma ọ bụ tebụl ị chọrọ): ebe ngwaọrụ ọ bụla ga-anọ, ebe ngwaọrụ ọkụ ga-eguzo, ebe tin aja dị, na ụzọ ọpụpụ. Depụta ihe ị ka ga-azụta.",
          youCanNow: "ịhazi tebụl ndozi na-enweghị ihe egwu, dị ọcha, nwere ngwaọrụ kwesịrị ekwesị na ihe nchekwa.",
          quickCheck: [
            { objective: "O1", q: "Ebee ka ngwaọrụ ikuku ọkụ (hot air) kwesịrị ịnọ mgbe ị tọgbọrọ ya?", options: ["N'elu ikpo akwụkwọ", "N'elu ekwentị onye ahịa", "N'ihe ndebe ya, n'ebe dị anya n'akwa na akwụkwọ", "N'ala"], answer: 2, why: "Ihe ndebe na-eme ka isi ọkụ ahụ dịrị anya n'ihe ndị nwere ike ire ọkụ." },
            { objective: "O1", q: "Gịnị mere i ji debe tin ígwè nwere aja kpọrọ nkụ n'akụkụ tebụl gị?", options: ["Iji debe ịnyịnya", "Iji jide batrị mebiri emebi n'enweghị ihe egwu", "Iji hichaa ihuenyo", "Iji tụọ ịdị arọ akụkụ"], answer: 1, why: "Tin ígwè nwere aja bụ ebe ka mma maka batrị mebiri emebi karịa tebụl ma ọ bụ ebe mkpofu." }
          ]
        },
        {
          title: "Ihe egwu dị na batrị lithium",
          objectives: ["O1"],
          minutes: 5,
          goal: "Hụ batrị zara aza, na-ekpo ọkụ ma ọ bụ mebiri emebi, ma jikwaa ya n'ebuteghị ọkụ.",
          text: [
            "Ihe fọrọ nke nta ka ọ bụrụ ekwentị niile nwere batrị lithium-ion. Ọ na-ejide ike dị ukwuu. Ọ bụrụ na a dụrụ ya mma, gbagọọ ya, pịaa ya, mee ka ọ kpoo ọkụ karịa ma ọ bụ mee ka ọ kpata short, ọ nwere ike ịgba ọkụ ngwa ngwa, wepụta anwụrụ ọkụ nwere nsi, ma malitekwa ịgba ọkụ ọzọ mgbe o yiri ka ọ kwụsịrị.",
            "Ihe ịrịba ama: ọzịza (azụ ekwentị ma ọ bụ ihuenyo bulitere elu), okpomọkụ, isi ọjọọ, ụda ịsụ ma ọ bụ ụda ịgbawa, ma ọ bụ anwụrụ ọkụ. A ga-agbanwe batrị zara aza; apịala ya ka ọ dị larịị, adụla ya, achajila ya.",
            "Omume nchekwa: buru ụzọ wepụ njikọ batrị (connector) tupu i rụọ ọrụ na bọọdụ. Ejila ngwaọrụ ígwè wepụ batrị; jiri ngwaọrụ plastik na ihe kwesịrị ekwesị e ji agbaze gluu, ma jiri nwayọọ mee ya. Ejila ngwaọrụ ikuku ọkụ n'akụkụ batrị. Chaja ekwentị naanị site n'ezigbo chaja, n'elu ihe siri ike, n'ebe ị na-ahụ ha.",
            "Ọ bụrụ na batrị amalite ịgba anwụrụ ọkụ ma ọ bụ ịsụ: mee ka ndị mmadụ pụọ, ekuchikwala anwụrụ ọkụ ahụ. Naanị ma ọ bụrụ na ị nwere ike ime ya n'enweghị ihe egwu, jiri ihe njide ogologo (tongs) tinye ya na tin aja gị, n'èzí. Ọ bụrụ na e nwere ọkụ ị na-enweghị ike ijide, mee ka onye ọ bụla pụọ ma kpọọ ndị ọrụ mgbanyụ ọkụ."
          ],
          steps: ["Lelee ma ọ̀ dị ọzịza, okpomọkụ, isi, ụda ma ọ bụ anwụrụ ọkụ tupu i meghee ekwentị ọ bụla.", "Wepụ njikọ batrị tupu i rụọ ọrụ na bọọdụ.", "Jiri ngwaọrụ plastik, ọ bụghị ígwè, wepụ batrị; egbagọla ya, adụla ya.", "Mee ka ngwaọrụ ọkụ dịrị anya na batrị.", "Ọ bụrụ na ọ na-agba anwụrụ: mee ka ndị mmadụ pụọ, jiri tongs na tin aja naanị ma ọ dịghị ihe egwu, kpọọ ndị ọrụ mgbanyụ ọkụ ma ọ bụrụ ọkụ."],
          words: [["Batrị lithium-ion", "batrị a na-achaji n'ekwentị; ọ na-ejide ike dị ukwuu, ọ nwekwara ike ịgba ọkụ ma ọ bụrụ na o mebiri."], ["Batrị zara aza", "batrị fụliri elu n'ihi na gas na-agbakọ n'ime ya; ọ dị egwu."], ["Short circuit", "mgbe ọkụ eletrik siri n'ụzọ na-ezighi ezi, dịka ọmụmaatụ site na ngwaọrụ ígwè, na-ebute okpomọkụ ma ọ bụ ọkụ."]],
          slides: [
            { title: "Ihe mere batrị lithium ji dị egwu", bullets: ["Ọ na-ejide ike dị ukwuu", "Mmebi, okpomọkụ ma ọ bụ short nwere ike ibute ọkụ ngwa ngwa", "Anwụrụ ọkụ ya nwere nsi; ọkụ nwere ike ịmalite ọzọ"] },
            { title: "Ihe ịrịba ama", bullets: ["Ọzịza: azụ ma ọ bụ ihuenyo bulitere elu", "Okpomọkụ, isi ọjọọ", "Ụda ịsụ, ụda ịgbawa ma ọ bụ anwụrụ ọkụ"] },
            { title: "Omume nchekwa", bullets: ["Buru ụzọ wepụ njikọ batrị", "Naanị ngwaọrụ plastik; egbagọla ya, adụla ya", "Ọ dịghị ngwaọrụ ọkụ n'akụkụ batrị"] },
            { title: "Ọ bụrụ na ọ na-agba anwụrụ", bullets: ["Mee ka ndị mmadụ pụọ; ekuchila anwụrụ ọkụ ahụ", "Naanị ma ọ dịghị ihe egwu: tongs, tinye na tin aja, n'èzí", "Ọkụ ị na-enweghị ike ijide: pụọ, kpọọ ndị ọrụ mgbanyụ ọkụ"] }
          ],
          sources: [NFPA],
          tryIt: "Dee kaadị nchekwa batrị gị n'ahịrị ise maka mgbidi ụlọ ahịa gị: ihe ịrịba ama, omume nchekwa, na ihe ị ga-eme ma batrị amalite ịgba anwụrụ ọkụ. Chọpụta nọmba ekwentị ndị ọrụ mgbanyụ ọkụ kacha nso gị.",
          youCanNow: "ịhụ batrị dị egwu, ijikwa batrị n'enweghị ihe egwu n'oge ndozi, na ime ihe n'enweghị ihe egwu ma batrị amalite ịgba anwụrụ ọkụ.",
          quickCheck: [
            { objective: "O1", q: "Azụ ekwentị bulitere elu n'ihi na batrị ya zara aza. Gịnị ka ị ga-eme?", options: ["Pịa ya ka ọ dị larịị ma mechie ekwentị", "Chaja ya iji nwalee ya", "Dụọ ya ka gas ahụ pụta", "Gbanwee ya, na-ejide ya nke ọma n'agbagọghị ya ma ọ bụ dụọ ya"], answer: 3, why: "Batrị zara aza dị egwu; a ga-eji nlezianya wepụ ya ma gbanwee ya, apịaghị ya, adụghị ya, achajighịkwa ya." },
            { objective: "O1", q: "Gịnị ka ị ga-ebu ụzọ mee tupu i rụọ ọrụ na bọọdụ ekwentị?", options: ["Wepụ njikọ batrị", "Kpoo bọọdụ ọkụ", "Chaja ekwentị", "Wepụ naanị trey SIM"], answer: 0, why: "Iwepụ njikọ batrị na-egbochi short nwere ike imebi bọọdụ ma ọ bụ bute ọkụ." }
          ]
        },
        {
          title: "Ịchọta nsogbu na ide kaadị ọrụ",
          objectives: ["O2"],
          minutes: 6,
          goal: "Chọta nsogbu nwere ike ịdị site na nlele nzọụkwụ n'otu n'otu ma dee ọrụ ahụ na kaadị ọrụ.",
          text: [
            "Bido site n'ige ntị. Jụọ onye ahịa ihe mere: ọ dara ada, mmiri batara ya, ọ na-aga nwayọọ, ọ naghị achaji, ọ naghị ama ụda? Olee mgbe ọ malitere? Wee lelee site n'ihe kacha dị mfe ruo n'ihe kacha sie ike. Ọtụtụ ekwentị \"nwụrụ anwụ\" chọrọ naanị ezigbo chaja, ọdụ chaja dị ọcha ma ọ bụ ịmalitegharị sọftwia.",
            "Usoro dị mfe: (1) lelee ma ọ̀ dị mmebi, ọzịza ma ọ bụ akara mmiri; (2) nwaa chaja na eriri ị maara na ọ dị mma; (3) jiri nwayọọ hichaa ọdụ chaja site n'obere osisi ma ọ bụ ihe plastik; (4) malitegharịa ya, ma lelee ma nsogbu ahụ ọ̀ bụ sọftwia; (5) naanị mgbe ahụ ka ị ga-emeghe ekwentị ma nwalee akụkụ ya.",
            "Tupu ịmalite ọrụ ọ bụla a ga-akwụ ụgwọ, dee kaadị ọrụ ma gosi onye ahịa ya. Ọ na-edekọ: ụbọchị, aha onye ahịa na nọmba ekwentị ya, ụdị ekwentị (model) na IMEI, ihe mebiri, mmebi ọ bụla ị hụrụ (mgbawa, mkpụkọ), ihe ị ga-eme, ọnụahịa unu kwekọrịtara, ụbọchị a na-atụ anya ya, na mbinye aka onye ahịa ma ọ bụ \"ee\" e dekọrọ. Nye onye ahịa otu mbipụta ma ọ bụ nọmba tiketi. Nke a na-echebe unu abụọ.",
            "Ọmụmaatụ: Kwame nọ na Accra nwetara ekwentị \"na-anaghị achaji\". Ọ nwara ezigbo eriri, hichapụ ájá dị n'ọdụ chaja, ọ wee chajie. Ọ na-ana naanị obere ụgwọ nhicha, onye ahịa ahụ na-alọghachikwa ya maka ndozi ọ bụla e mesịrị."
          ],
          steps: ["Jụọ ihe mere na mgbe ọ malitere.", "Lelee ma ọ̀ dị mmebi, ọzịza ma ọ bụ akara mmiri.", "Nwaa chaja na eriri ị maara na ọ dị mma; jiri nwayọọ hichaa ọdụ chaja.", "Malitegharịa ya ma lelee ma ọ̀ bụ nsogbu sọftwia.", "Dee kaadị ọrụ nwere nsogbu ahụ, mmebi ị hụrụ, ọnụahịa na ụbọchị, ma nweta \"ee\" onye ahịa tupu i meghee ekwentị."],
          words: [["Kaadị ọrụ (job card)", "ndekọ e dere ede nke otu ndozi: ekwentị ahụ, nsogbu ya, ọnụahịa, ụbọchị na nkwenye onye ahịa."], ["IMEI", "nọmba pụrụ iche nke ekwentị nwere mkpụrụ 15; kpọọ *#06# ka ị hụ ya."], ["Nsogbu sọftwia", "nsogbu dị na mmemme ekwentị, ọ bụghị n'akụkụ ya; a na-edozikarị ya site n'ịmalitegharị ma ọ bụ mmelite (update)."]],
          slides: [
            { title: "Buru ụzọ gee ntị", bullets: ["Gịnị mere? Ọ dara, mmiri batara, ọ na-aga nwayọọ, ọ naghị achaji?", "Olee mgbe ọ malitere?", "Ọtụtụ ekwentị \"nwụrụ anwụ\" chọrọ naanị ndozi dị mfe"] },
            { title: "Site n'ihe dị mfe ruo n'ihe siri ike", bullets: ["Lelee: mmebi, ọzịza, akara mmiri", "Ezigbo chaja; jiri nwayọọ hichaa ọdụ chaja", "Malitegharịa maka sọftwia; wee meghee ma nwalee akụkụ"] },
            { title: "Kaadị ọrụ", bullets: ["Onye ahịa, ụdị ekwentị, IMEI (kpọọ *#06#)", "Nsogbu, mmebi ị hụrụ, ọrụ a ga-arụ", "Ọnụahịa, ụbọchị, \"ee\" onye ahịa; nye mbipụta ma ọ bụ tiketi"] }
          ],
          tryIt: "See kaadị ọrụ nke gị n'otu peeji nwere igbe niile e kwuru na nkuzi a. Dejupụta ya maka ekwentị omume (nke gị ma ọ bụ nke enyi gị) nwere nsogbu i chepụtara.",
          youCanNow: "ilele ekwentị site n'ihe kacha dị mfe ruo n'ihe kacha sie ike ma dee ọrụ ọ bụla na kaadị ọrụ tupu ịmalite.",
          quickCheck: [
            { objective: "O2", q: "Onye ahịa kwuru na ekwentị ya anaghị achaji. Gịnị ka ị ga-ebu ụzọ lelee?", options: ["Gbanwee bọọdụ", "Chaja na eriri ị maara na ọ dị mma, na ọdụ chaja dị ọcha", "Gbanwee ihuenyo", "Ree ya ekwentị ọhụrụ"], answer: 1, why: "Bido n'ihe ndị kacha dị mfe; eriri ọjọọ ma ọ bụ ọdụ chaja ruru unyi na-emekarị." },
            { objective: "O2", q: "Gịnị mere i ji dee mmebi ị hụrụ, dị ka nkuku gbawara agbawa, na kaadị ọrụ tupu ịmalite?", options: ["Ka onye ahịa kwụọ ụgwọ karịa", "Ọ dịghị mkpa", "Iji jupụta ohere", "Ka onye ọ bụla ghara ịta gị ụta ma emechaa maka mmebi dịbu adị"], answer: 3, why: "Ide mmebi dịbu adị na-echebe gị na onye ahịa pụọ n'esemokwu." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ọrụ na-enweghị ihe egwu na ịchọta nsogbu",
        questions: [
          { objective: "O1", q: "Kedu nke bụ ihe ịrịba ama nke batrị dị egwu?", options: ["Ekwentị ahụ dị ọhụrụ", "Ọzịza, okpomọkụ, isi, ụda ịsụ ma ọ bụ anwụrụ ọkụ", "Batrị ahụ na-acha oji", "Ekwentị ahụ nwere kees (case)"], answer: 1, why: "Ọzịza, okpomọkụ, isi, ụda na anwụrụ ọkụ bụ ihe ịrịba ama." },
          { objective: "O1", q: "Kedu ngwaọrụ ị ga-eji wepụ batrị?", options: ["Ngwaọrụ plastik, nwayọọ nwayọọ", "Screwdriver ígwè", "Mma kichin", "Ezé gị"], answer: 0, why: "Ígwè nwere ike ịdụ batrị ma ọ bụ mee ka ọ kpata short; ngwaọrụ plastik ka mma." },
          { objective: "O1", q: "Batrị dị na tebụl gị malitere ịsụ na ịgba anwụrụ ọkụ. Kedu nzọụkwụ mbụ ziri ezi?", options: ["Fụọ ya ikuku n'ọnụ", "Tinye ya n'akpa uwe gị", "Mee ka ndị mmadụ pụọ ma zere anwụrụ ọkụ ahụ", "Gaa n'ihu n'ọrụ"], answer: 2, why: "Nchekwa ndị mmadụ bụ ihe mbụ; anwụrụ ọkụ ahụ nwere nsi." },
          { objective: "O2", q: "Ebee ka ị ga-ahụ IMEI ekwentị ngwa ngwa?", options: ["Na chaja", "Na kaadị SIM", "N'akpa onye ahịa", "Site n'ịkpọ *#06#"], answer: 3, why: "Ịkpọ *#06# na-egosi IMEI n'ihe fọrọ nke nta ka ọ bụrụ ekwentị niile." },
          { objective: "O2", q: "Olee mgbe onye ahịa kwesịrị ikwenye n'ọnụahịa?", options: ["Tupu ịmalite, e dere ya na kaadị ọrụ", "Mgbe i mechara", "Ọ dịghị mgbe", "Mgbe ọ na-eme mkpesa"], answer: 0, why: "Ikwekọrịta na mbụ, n'ihe e dere ede, na-egbochi esemokwu." }
        ]
      }
    },
    {
      name: "Isi 2: Ịrụ azụmahịa nwere ezi omume na-enweghị ihe egwu",
      lessons: [
        {
          title: "Ichebe ozi ndị ahịa gị",
          objectives: ["O3"],
          minutes: 5,
          goal: "Chebe ozi onye ahịa ọ bụla mgbe ekwentị ya nọ n'ụlọ ahịa gị.",
          text: [
            "Ekwentị na-ejide ndụ mmadụ: foto, ozi, mobile money, app ụlọ akụ na nọmba ndị ọ maara. Ndị ahịa na-atụkwasị gị obi na ya. Otu foto gbasara agbasa ma ọ bụ ego mobile money e zuru ezu nwere ike imebi aha ụlọ ahịa gị, n'ọtụtụ mba ọ nwekwara ike imebi iwu.",
            "Tupu ndozi: rịọ onye ahịa ka o mee backup nke ekwentị ya ma ọ bụrụ na o nwere ike, ma pụọ (sign out) na app mobile money na app ụlọ akụ ma ọ bụ wepụ kaadị SIM. Ọtụtụ ndozi achọghị koodu mkpọchi ekwentị. Ọ bụrụ na ị chọrọ ya n'ezie iji nwalee ekwentị ahụ, rịọ onye ahịa ka o meghee ya n'ihu gị, ma ọ bụ tọọ koodu nwa oge ma gbanwee ya mgbe e mechara. Arịọla mgbe ọ bụla PIN mobile money ma ọ bụ nke ụlọ akụ. Ọ dịghị ndozi ọ bụla chọrọ ya.",
            "N'oge ndozi na mgbe e mechara: emeghela foto, ozi ma ọ bụ app ndị na-esoghị na ndozi ahụ. Eṅomila ihe ọ bụla, ekwekwala ka ndị ọzọ jide ekwentị ndị ahịa. Debe ekwentị n'ime drọwa a kpọchiri akpọchi. Bechasịa kaadị ọrụ ma ọ bụ debe ha nke ọma, n'ihi na ha nwere aha na nọmba ndị mmadụ.",
            "Mba nwere iwu na ọfịs na-echebe ozi nzuzo, dịka ọmụmaatụ Office of the Data Protection Commissioner na Kenya, Nigeria Data Protection Commission, na Data Protection Commission na Ghana, ebe azụmahịa ndị na-edebe ozi nzuzo ndị mmadụ ga-edebanye aha ha. Chọpụta ihe ọfịs mba gị na-atụ anya site n'obere azụmahịa dị ka nke gị."
          ],
          steps: ["Rịọ onye ahịa ka o mee backup nke ekwentị ma pụọ n'app ego, ma ọ bụ wepụ SIM.", "Arịọla koodu mkpọchi ma ọ bụrụ na ị chọghị ya n'ezie; ka onye ahịa meghee ya n'ihu gị.", "Arịọla mgbe ọ bụla PIN mobile money ma ọ bụ nke ụlọ akụ.", "Meghee naanị ihe ndozi ahụ chọrọ; eṅomila ihe ọ bụla.", "Kpọchie ekwentị na kaadị ọrụ; chọpụta iwu nchekwa ozi nke mba gị."],
          words: [["Ozi nzuzo onwe (personal data)", "ozi gbasara mmadụ, dị ka aha ya, nọmba ya, foto ya na ozi ya."], ["Backup", "mbipụta ozi dị n'ekwentị e chekwara n'ebe ọzọ, ka ihe ọ bụla ghara ifu efu ma ndozi ahụ emehie."], ["Iwu nchekwa ozi", "iwu na-ekwu otu azụmahịa ga-esi anakọta, debe ma chebe ozi nzuzo ndị mmadụ."]],
          slides: [
            { title: "Ekwentị na-ejide ndụ mmadụ", bullets: ["Foto, ozi, nọmba ndị ọ maara", "Mobile money na app ụlọ akụ", "Otu ozi gbasara agbasa nwere ike imebi ezigbo aha ụlọ ahịa gị"] },
            { title: "Tupu ndozi", bullets: ["Onye ahịa na-eme backup nke ekwentị", "Ọ na-apụ n'app ego, ma ọ bụ wepụ SIM", "Koodu mkpọchi naanị ma ọ dị mkpa n'ezie; ọ dịghị PIN mgbe ọ bụla"] },
            { title: "N'oge ndozi na mgbe e mechara", bullets: ["Meghee naanị ihe ndozi ahụ chọrọ", "Eṅomila ihe ọ bụla; onye ọzọ ejidela ekwentị", "Kpọchie ekwentị na kaadị ọrụ"] },
            { title: "Mara iwu", bullets: ["Kenya: Office of the Data Protection Commissioner", "Naịjirịa: Nigeria Data Protection Commission", "Ghana: Data Protection Commission; ndị ọzọ: ọfịs nke mba gị"] }
          ],
          sources: [KE_ODPC, NDPC, GH_DPC],
          tryIt: "Dee nkwa ozi ndị ahịa gị: opekata mpe ahịrị mkpụmkpụ anọ ị ga-egosi onye ahịa ọ bụla, dị ka \"Anyị anaghị arịọ PIN mobile money gị mgbe ọ bụla.\" Dee aha ọfịs nchekwa ozi nke mba gị.",
          youCanNow: "ichebe ozi ndị ahịa gị tupu ndozi, n'oge ndozi na mgbe e mechara, na ịmata ọfịs na-etinye iwu ndị ahụ na mba gị.",
          quickCheck: [
            { objective: "O3", q: "Onye na-edozi ekwentị na-arịọ PIN mobile money onye ahịa iji \"nwalee ekwentị\". Gịnị bụ eziokwu?", options: ["Ndozi ọ bụla chọrọ ya", "Ọ dị mma ma ọ bụrụ na o nwere ezi obi", "Ọ dịghị ndozi chọrọ ya; arịọla ya mgbe ọ bụla", "Naanị maka ndozi ihuenyo"], answer: 2, why: "Ọ dịghị ndozi ọ bụla chọrọ PIN mobile money ma ọ bụ nke ụlọ akụ." },
            { objective: "O3", q: "Gịnị ka onye ahịa kwesịrị ime tupu ọ hapụ ekwentị ya, ma ọ bụrụ na o nwere ike?", options: ["Nye gị okwuntughe ya niile", "Mee backup nke ekwentị ma pụọ n'app ego", "Hapụ ekwentị ka ọ ghere oghe ruo mgbe ebighị ebi", "Hichapụ nọmba ndị ọ maara niile"], answer: 1, why: "Backup na ịpụ n'app ego na-echebe ya ma ọ bụrụ na ihe ọ bụla emehie." }
          ]
        },
        {
          title: "Ọnụahịa ndozi, nkwa na ịjụ ekwentị e zuru ezu",
          objectives: ["O4", "O5"],
          minutes: 6,
          goal: "Gbakọọ ọnụahịa ndozi ma dee ndepụta ọnụahịa nwere usoro nkwa.",
          text: [
            "Ọnụahịa kwesịrị ekwesị na-ekpuchi ihe atọ ma hapụ uru: akụkụ ahụ, oge gị (ụgwọ ọrụ), na òkè nke mmefu ụlọ ahịa gị, dị ka ụgwọ ụlọ, ọkụ eletrik, ngwaọrụ na data. Ọmụmaatụ (ọnụ ego bụ naanị ọmụmaatụ): ihuenyo na-efu NGN 15,000. Ụgwọ ọrụ gị bụ NGN 4,000, òkè mmefu ụlọ ahịa gị bụ NGN 1,000. Mmefu: NGN 20,000. Tinye NGN 3,000 uru: ọnụahịa NGN 23,000.",
            "Akụkụ ekwentị nwere ogo dị iche iche. Gwa onye ahịa n'eziokwu akụkụ ị na-eji (nke mbụ/original, ezigbo nṅomi ma ọ bụ nṅomi dị ọnụ ala) na ọnụahịa nke ọ bụla. Akụkụ dị ọnụ ala nke mebiri n'otu izu na-efu gị aha gị.",
            "Nkwa (warranty) bụ ihe i kwere: ọ bụrụ na otu ndozi ahụ emebie n'ime ọnụọgụ ụbọchị a kara aka n'ihi ọrụ gị ma ọ bụ akụkụ ahụ, ị ga-edozi ya n'efu. Dee ụbọchị ole, na ihe ọ na-adịghị ekpuchi (ọdịda ọhụrụ, mmiri, onye ọzọ imeghe ekwentị ahụ). Tinye ndepụta ọnụahịa na nkwa n'ebe ndị ahịa ga-ahụ ha.",
            "Jụ ekwentị nwere ike ịbụ ihe e zuru ezu. Azụtala, emeghela mkpọchi (unlock) ma ọ bụ etipịala ekwentị maka akụkụ ya ọ gwụla ma onye na-ere ya gosiri ihe akaebe na ọ bụ nke ya, dị ka igbe nwere IMEI kwekọrọ ma ọ bụ akwụkwọ nnata ego (receipt). Ọ bụrụ na ekwentị dị ka nke e zuru ezu, arụrịtala ụka; jiri nkwanye ugwu jụ ya. N'ọtụtụ mba, ịzụta ihe e zuru ezu bụ mpụ."
          ],
          steps: ["Gbakọta ọnụ akụkụ, ụgwọ ọrụ gị na òkè mmefu ụlọ ahịa.", "Tinye uru gị ka i nweta ọnụahịa.", "Gosi nhọrọ akụkụ n'eziokwu, na ọnụahịa nke ọ bụla.", "Dee ụbọchị nkwa na ihe ọ na-adịghị ekpuchi.", "Gosi ndepụta ọnụahịa; jụ ekwentị na-enweghị ihe akaebe nwe ya."],
          words: [["Ụgwọ ọrụ (labour)", "ego a na-akwụ maka oge gị na nka gị."], ["Mmefu ụlọ ahịa (overhead)", "ego a na-emefu n'ịrụ ụlọ ahịa, dị ka ụgwọ ụlọ, ọkụ, ngwaọrụ na data, a na-ekesa n'ọrụ niile."], ["Nkwa (warranty)", "nkwa e dere ede na a ga-edozi otu nsogbu ahụ n'efu ruo oge a kara aka."]],
          slides: [
            { title: "Ihe ọnụahịa na-ekpuchi", bullets: ["Akụkụ + ụgwọ ọrụ + òkè mmefu ụlọ ahịa", "Wee tinye uru gị", "Ọmụmaatụ: mmefu NGN 20,000 + NGN 3,000 = NGN 23,000"] },
            { title: "Akụkụ nwere eziokwu", bullets: ["Original, ezigbo nṅomi ma ọ bụ nṅomi dị ọnụ ala", "Gwa onye ahịa nke ọ bụ, na ọnụahịa nke ọ bụla", "Akụkụ dị ọnụ ala na-emebi na-efu gị aha gị"] },
            { title: "Nkwa gị", bullets: ["Otu nsogbu ahụ e dozie n'efu ruo ụbọchị a kara aka", "Ọ naghị ekpuchi: ọdịda ọhụrụ, mmiri, onye ọzọ imeghe ya", "Gosi ndepụta ọnụahịa na nkwa"] },
            { title: "Jụ ekwentị e zuru ezu", bullets: ["Ihe akaebe: igbe nwere IMEI kwekọrọ, ma ọ bụ receipt", "Ọ dịghị ihe akaebe: jiri nkwanye ugwu jụ ya", "Ịzụta ihe e zuru ezu nwere ike ịbụ mpụ"] }
          ],
          tryIt: "Dee ndepụta ọnụahịa gị maka ndozi ise a na-emekarị: maka nke ọ bụla, ọnụ akụkụ, ụgwọ ọrụ, òkè mmefu ụlọ ahịa, uru, ọnụahịa na ụbọchị nkwa. Jiri ego obodo gị.",
          youCanNow: "ịkpebi ọnụahịa ndozi ka o kpuchie mmefu gị niile ma nwee uru, ide nkwa, na ịjụ ekwentị nwere ike ịbụ nke e zuru ezu.",
          quickCheck: [
            { objective: "O4", q: "Akụkụ GHS 150, ụgwọ ọrụ GHS 60, òkè mmefu ụlọ ahịa GHS 20, uru GHS 40. Gịnị bụ ọnụahịa?", options: ["GHS 210", "GHS 230", "GHS 150", "GHS 270"], answer: 3, why: "150 + 60 + 20 + 40 = 270." },
            { objective: "O5", q: "Otu nwa okorobịa chọrọ ire gị ekwentị n'ọnụ ala ma o nweghị igbe ma ọ bụ receipt. Gịnị ka ị ga-eme?", options: ["Jiri nkwanye ugwu jụ ya", "Zụta ya ngwa ngwa tupu ndị ọzọ azụta ya", "Buru ụzọ meghee mkpọchi ya maka ya", "Tipịa ya maka akụkụ ya"], answer: 0, why: "Na-enweghị ihe akaebe nwe ya, ekwentị ahụ nwere ike ịbụ nke e zuru ezu; jụ ya." }
          ]
        },
        {
          title: "Ihe mkpofu eletrọnịkị, batrị nwụrụ anwụ na ngwugwu mmalite ụlọ ahịa gị",
          objectives: ["O5", "O1"],
          minutes: 5,
          goal: "Debe batrị nwụrụ anwụ na akụkụ mebiri emebi n'enweghị ihe egwu ma nyefee ha ezigbo onye na-anakọta ha.",
          text: [
            "Ekwentị ochie, ihuenyo, bọọdụ na batrị bụ ihe mkpofu eletrọnịkị (e-waste). Ha nwere lead, mercury na nsi ndị ọzọ. WHO kwuru na ịgba ihe mkpofu eletrọnịkị ọkụ bụ ụzọ kacha dị egwu e si ejikwa ya, na ọ na-emerụ ụmụaka na ụmụ nwaanyị dị ime ahụ karịa. Na 2022 ụwa mepụtara ihe dị ka nde tọn 62 nke ihe mkpofu eletrọnịkị, ọ bụ naanị 22.3% ka e dere na a nakọtara ma megharịa nke ọma.",
            "Agbala ihe mkpofu eletrọnịkị ọkụ iji nweta ọla kọpa (copper), atụbakwala batrị n'ebe mkpofu, n'ọkụ ma ọ bụ n'ọwa mmiri. Kechie isi (terminals) batrị nwụrụ anwụ na teepu, debe ha na tin ígwè mechiri emechi nwere aja kpọrọ nkụ n'ebe dị anya n'okpomọkụ, ma debe ihuenyo na bọọdụ gbajiri agbaji n'igbe dị iche nke e dere aha ya.",
            "Nyefee ha onye na-anakọta ihe mkpofu eletrọnịkị ma ọ bụ onye na-emegharị ha (recycler). Jụọ kansụl steeti ma ọ bụ obodo gị, ụlọ ọrụ gọọmentị na-ahụ maka gburugburu ebe obibi, ma ọ bụ ndị na-ere ekwentị na ụlọ ahịa netwọk, ndị na-anakọta nke a kwadoro n'ebe ị nọ. Dee ihe i nyefere na mgbe i nyefere ya.",
            "Ugbu a mee ngwugwu mmalite gị: ndepụta ọnụahịa gị, kaadị ọrụ gị, nkwa ozi gị na kaadị nchekwa gị nwere iwu batrị na ebe ihe mkpofu eletrọnịkị gị na-aga."
          ],
          steps: ["Kechie isi batrị nwụrụ anwụ na teepu.", "Debe ha na tin ígwè mechiri emechi nwere aja kpọrọ nkụ, n'ebe dị anya n'okpomọkụ.", "Debe ihuenyo na bọọdụ gbajiri agbaji n'igbe e dere aha ya.", "Jụọ kansụl ma ọ bụ ụlọ ọrụ gburugburu ebe obibi maka onye na-anakọta a kwadoro.", "Nyefee ha ma dee ihe na mgbe. Agbala ihe mkpofu eletrọnịkị ọkụ, atụfukwala ya n'ebe ọ bụla."],
          words: [["Ihe mkpofu eletrọnịkị (e-waste)", "ihe eletrọnịkị na akụkụ ochie ma ọ bụ mebiri emebi, dị ka ekwentị, ihuenyo, bọọdụ na batrị."], ["Terminals", "isi ígwè nke batrị ebe ọ na-ejikọ; ikechi ha na teepu na-egbochi short."], ["Recycler", "azụmahịa na-eji nlezianya etipịa ihe mkpofu eletrọnịkị ma nwetaghachi ihe ndị dị n'ime ya."]],
          slides: [
            { title: "Ihe mkpofu eletrọnịkị nwere nsi", bullets: ["Lead, mercury na nsi ndị ọzọ", "Ịgba ya ọkụ kacha dị egwu (WHO)", "Ọ na-emerụ ụmụaka na ụmụ nwaanyị dị ime karịa"] },
            { title: "Debe ya n'enweghị ihe egwu", bullets: ["Kechie isi batrị nwụrụ anwụ na teepu", "Tin ígwè mechiri emechi nwere aja kpọrọ nkụ, dị anya n'okpomọkụ", "Ihuenyo na bọọdụ n'igbe e dere aha ya"] },
            { title: "Nyefee ya", bullets: ["Jụọ kansụl ma ọ bụ ụlọ ọrụ gburugburu ebe obibi", "Jiri onye na-anakọta ma ọ bụ recycler a kwadoro", "Dee ihe i nyere na mgbe"] },
            { title: "Ngwugwu mmalite ụlọ ahịa gị", bullets: ["Ndepụta ọnụahịa nwere nkwa", "Kaadị ọrụ; nkwa ozi ndị ahịa", "Kaadị nchekwa: iwu batrị na atụmatụ ihe mkpofu eletrọnịkị"] }
          ],
          sources: [WHO_EWASTE, NFPA],
          tryIt: "Mee ngwugwu mmalite ụlọ ahịa gị, dị ka a kọwara n'ọrụ ikpeazụ. Tinye otu ahịrị na kaadị nchekwa gị na-akpọ aha onye ga-anakọta ihe mkpofu eletrọnịkị gị, ma ọ bụ ọfịs ị ga-ajụ.",
          youCanNow: "idebe na inyefe ihe mkpofu eletrọnịkị n'enweghị ihe egwu ma chịkọta ngwugwu mmalite maka ụlọ ahịa idozi ekwentị nwere ezi omume na-enweghị ihe egwu.",
          quickCheck: [
            { objective: "O5", q: "Kedu ụzọ kacha enweghị ihe egwu iji wepụ batrị ekwentị nwụrụ anwụ?", options: ["Gbaa ha ọkụ", "Tụba ha n'ebe mkpofu", "Kechie isi ha na teepu, debe ha na tin aja, nye ha onye na-anakọta a kwadoro", "Lie ha n'ala n'ogige"], answer: 2, why: "Ikechi na teepu, idebe nke ọma na onye na-anakọta a kwadoro na-egbochi ọkụ na mmetọ." },
            { objective: "O5", q: "Dịka WHO si kwuo, kedu ụzọ kacha dị egwu e si ejikwa ihe mkpofu eletrọnịkị?", options: ["Idebe ya n'igbe", "Iburu ya gaa n'aka recycler", "Ide ya n'akwụkwọ", "Ịgba ya ọkụ"], answer: 3, why: "WHO kwuru na ịgba ihe mkpofu eletrọnịkị ọkụ kacha dị egwu n'ihi anwụrụ ọkụ ya nwere nsi." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịrụ azụmahịa nwere ezi omume na-enweghị ihe egwu",
        questions: [
          { objective: "O3", q: "Ndozi chọrọ n'ezie ka e meghee ekwentị iji nwalee ya. Kedu ụzọ kacha mma?", options: ["Rịọ onye ahịa ka o meghee ya n'ihu gị, ma ọ bụ tọọ koodu nwa oge", "Rịọ PIN ụlọ akụ ya", "Kọọ koodu ahụ", "Tọgharịa ekwentị n'ajụghị ajụjụ"], answer: 0, why: "Onye ahịa na-ejide koodu ya n'aka ya, ọ dịghịkwa mgbe PIN ego ọ bụla na-abata." },
          { objective: "O3", q: "Gịnị ka ị ga-eme kaadị ọrụ nwere aha na nọmba ndị ahịa?", options: ["Tụba ha n'okporo ụzọ", "Tinye ha n'ịntanetị", "Kpọchie ha ma ọ bụ bechasịa ha mgbe ọ dịghị mkpa ọzọ", "Nye ha ụlọ ahịa ndị ọzọ"], answer: 2, why: "Kaadị ọrụ nwere ozi nzuzo ndị mmadụ, ya mere a ga-edebe ha nke ọma." },
          { objective: "O4", q: "Kedu mmefu ndị na-amalite idozi ekwentị na-echefukarị n'ọnụahịa ha?", options: ["Akụkụ ahụ", "Òkè nke mmefu ụlọ ahịa dị ka ụgwọ ụlọ na ọkụ", "Ihuenyo", "Aha onye ahịa"], answer: 1, why: "A ga-ekesa mmefu ụlọ ahịa dị ka ụgwọ ụlọ, ọkụ na data n'ọrụ niile, ma ọ bụghị ya ego ga-efu gị." },
          { objective: "O4", q: "Gịnị ka nkwa (warranty) kwesịrị ikwu?", options: ["Ọ dịghị ihe; naanị mụmụọ ọnụ ọchị", "Na nsogbu ọ bụla dị n'efu ruo mgbe ebighị ebi", "Naanị ọnụahịa", "Ụbọchị ole, na ihe ọ na-adịghị ekpuchi"], answer: 3, why: "Nkwa doro anya na-ekwu ụbọchị na ihe ndị ọ na-adịghị ekpuchi." },
          { objective: "O5", q: "Gịnị mere ịzụta ekwentị na-enweghị ihe akaebe nwe ya ji bụrụ nsogbu?", options: ["O nwere ike ịbụ nke e zuru ezu, ịzụta ihe e zuru ezu nwekwara ike ịbụ mpụ", "Ọ na-akakarị ọnụ mgbe niile", "Ekwentị na-enweghị igbe anaghị arụ ọrụ", "Ọ bụghị nsogbu"], answer: 0, why: "Na-enweghị ihe akaebe, ekwentị ahụ nwere ike ịbụ nke e zuru ezu, nke na-ebute nsogbu iwu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ịmalite Azụmahịa Idozi Ekwentị",
    questions: [
      { objective: "O1", q: "Ebee bụ ebe kacha mma maka tebụl ndozi gị?", options: ["N'akụkụ ọkụ esi nri", "Ebe dị nkụ, nwee ìhè, dịkwa anya na mmanụ ụgbọ ala na mmiri", "N'èzí n'ime mmiri ozuzo", "N'elu ihe e ji etinye mmanụ ụgbọ ala"], answer: 1, why: "Tebụl dị nkụ, nwee ìhè, dịkwa anya na mmanụ ụgbọ ala na mmiri kacha enweghị ihe egwu." },
      { objective: "O1", q: "Gịnị ka ị ga-eyi mgbe ị na-emeghe ihuenyo gbawara agbawa?", options: ["Ugogbe anya nchekwa", "Ọ dịghị ihe pụrụ iche", "Uwe aka e ji ígwè mee", "Ugogbe anya anwụ naanị n'abalị"], answer: 0, why: "Ugogbe anya nchekwa na-echebe anya gị pụọ n'iberibe iko." },
      { objective: "O1", q: "Gịnị mere na ị gaghị eji ngwaọrụ ikuku ọkụ n'akụkụ batrị mgbe ọ bụla?", options: ["Ọ na-emefu ọkụ eletrik", "Ọ na-eme ka ihuenyo ruo unyi", "Okpomọkụ nwere ike ime ka batrị gbaa ọkụ", "Ọ na-aga nwayọọ nke ukwuu"], answer: 2, why: "Ime ka batrị lithium kpoo ọkụ karịa nwere ike ibute ọkụ." },
      { objective: "O1", q: "Gịnị ka ị na-ekwesịghị ime MGBE Ọ BỤLA na batrị zara aza?", options: ["Jiri nlezianya wepụ ya", "Debe ya na tin aja", "Gwa onye ahịa", "Pịa ya ka ọ dị larịị ma ọ bụ dụọ ya"], answer: 3, why: "Ịpịa ma ọ bụ ịdụ batrị zara aza nwere ike ime ka ọ gbaa ọkụ." },
      { objective: "O2", q: "Gịnị bụ usoro nlele ziri ezi?", options: ["Buru ụzọ meghee ekwentị, wee jụọ ajụjụ", "Ihe kacha dị mfe na mbụ: lee anya, chaja, ọdụ chaja, malitegharịa, wee meghee", "Buru ụzọ gbanwee bọọdụ", "Buru ụzọ nara onye ahịa ego"], answer: 1, why: "Ịmalite n'ihe dị mfe na-echekwa oge na ego ma na-egbochi imeghe ekwentị n'efu." },
      { objective: "O2", q: "Kedu ihe kwesịrị ịdị na kaadị ọrụ?", options: ["PIN mobile money onye ahịa", "Okwuntughe ụlọ akụ onye ahịa", "Ụdị ekwentị, IMEI, nsogbu, mmebi a hụrụ, ọnụahịa na ụbọchị", "Igodo ụlọ onye ahịa"], answer: 2, why: "Kaadị ọrụ na-edekọ ọrụ ahụ, ọ bụghị ihe nzuzo dị ka PIN ma ọ bụ okwuntughe." },
      { objective: "O2", q: "Ekwentị \"anaghị achaji\". Ị hichapụrụ ájá dị n'ọdụ chaja, ọ wee chajie. Ego ole ka ị ga-ana?", options: ["Ọnụahịa bọọdụ ọhụrụ", "Obere ụgwọ kwesịrị ekwesị maka ọrụ i rụrụ", "Ọ dịghị ihe, ma jụ ọrụ n'ọdịnihu", "Ọnụahịa ekwentị ọhụrụ"], answer: 1, why: "Ọnụahịa nwere eziokwu maka ezi ọrụ e rụrụ na-ewulite ntụkwasị obi na ndị ahịa na-alọghachi." },
      { objective: "O2", q: "Gịnị mere i ji nweta \"ee\" onye ahịa tupu i meghee ekwentị?", options: ["Ka ha kwenye n'ọrụ na ọnụahịa, nke na-egbochi esemokwu", "Ọ dịghị mkpa", "Ka i nwee ike ịna ego karịa ma emechaa", "Iji mata PIN ha"], answer: 0, why: "Nkwekọrịta e dere ede na-echebe unu abụọ." },
      { objective: "O3", q: "Kedu ihe ndozi ekwentị na-adịghị achọ mgbe ọ bụla?", options: ["Ụdị ekwentị", "Nkọwa nsogbu ahụ", "Nọmba ekwentị onye ahịa", "PIN mobile money onye ahịa"], answer: 3, why: "Ọ dịghị ndozi ọ bụla chọrọ PIN mobile money ma ọ bụ nke ụlọ akụ." },
      { objective: "O3", q: "Mgbe ị na-edozi ihuenyo, ị hụrụ ebe foto onye ahịa dị. Gịnị ka ị ga-eme?", options: ["Meghee naanị ihe ndozi ahụ chọrọ, elekwala ihe ọzọ", "Lelee foto ndị ahụ", "Ṅomie ha n'ekwentị gị", "Gosi enyi gị ha"], answer: 0, why: "Ịsọpụrụ nzuzo pụtara imeghe naanị ihe ndozi ahụ chọrọ." },
      { objective: "O3", q: "Kedu ọfịs na-etinye iwu nchekwa ozi na Naịjirịa?", options: ["Ndị ọrụ mgbanyụ ọkụ", "Nigeria Data Protection Commission", "Otu egwuregwu bọọlụ", "Ọ dịghị ọfịs"], answer: 1, why: "E guzobere Nigeria Data Protection Commission n'okpuru Nigeria Data Protection Act 2023." },
      { objective: "O3", q: "Ebee ka a ga-edebe ekwentị ndị na-eche ndozi?", options: ["N'elu kawnta ka onye ọ bụla were", "N'ime drọwa a kpọchiri akpọchi", "N'aka onye agbata obi", "N'èzí ụlọ ahịa"], answer: 1, why: "Ikpochi ekwentị na-echebe ha na ozi dị n'ime ha." },
      { objective: "O4", q: "Akụkụ KES 2,500, ụgwọ ọrụ KES 800, òkè mmefu ụlọ ahịa KES 200, uru KES 500. Gịnị bụ ọnụahịa?", options: ["KES 3,300", "KES 3,500", "KES 4,000", "KES 2,500"], answer: 2, why: "2,500 + 800 + 200 + 500 = 4,000." },
      { objective: "O4", q: "Onye ahịa nwere ike ịkwụ ụgwọ ihuenyo nṅomi dị ọnụ ala ma ọ bụ original. Gịnị bụ eziokwu?", options: ["Gwa ya akụkụ nke ọ bụ, na ọnụahịa nke ọ bụla, ma hapụ ya ka ọ họrọ", "Sị na nṅomi ahụ bụ original", "Tinye nke kacha dị ọnụ ala ma nara ego original", "Jụ ikwu"], answer: 0, why: "Nhọrọ akụkụ nwere eziokwu na-ewulite ntụkwasị obi ma na-egbochi mkpesa." },
      { objective: "O4", q: "Kedu nke nkwa ndozi anaghị ekpuchikarị?", options: ["Otu akụkụ ahụ imebi n'ihi ọrụ gị", "Nsogbu dị n'akụkụ i tinyere", "Mperi gị n'itinye ya", "Ọdịda ọhụrụ ma ọ bụ mmebi mmiri"], answer: 3, why: "Mmebi ọhụrụ mgbe ndozi gachara anaghị adịkarị n'okpuru nkwa; dee nke ahụ na nkwa gị." },
      { objective: "O5", q: "Onye na-ere ekwentị nwere igbe nwere IMEI kwekọrọ na ekwentị ahụ (kpọọ *#06#) na receipt. Gịnị ka nke a na-egosi?", options: ["Ihe akaebe na ekwentị ahụ nwere ike ịbụ nke ya", "Na e zuru ekwentị ahụ", "Ọ dịghị ihe ọ bụla", "Na o mebiri emebi"], answer: 0, why: "IMEI kwekọrọ na receipt bụ ihe akaebe na mmadụ nwe ekwentị." },
      { objective: "O5", q: "Gịnị mere na ị gaghị agba bọọdụ ochie ọkụ mgbe ọ bụla iji nweta ọla kọpa?", options: ["Ọla kọpa enweghị uru", "Ọ na-ewe oge nke ukwuu", "Anwụrụ ọkụ ya nwere nsi, ọ na-emerụ ụmụaka na ụmụ nwaanyị dị ime karịa", "Ọ naghị eme mkpọtụ"], answer: 2, why: "Ịgba ihe mkpofu eletrọnịkị ọkụ na-ewepụta anwụrụ ọkụ nwere nsi, nke WHO kwuru na ọ kacha dị egwu." },
      { objective: "O5", q: "Olee otu ị ga-esi debe batrị nwụrụ anwụ tupu a bịa anakọta ha?", options: ["Ghere oghe na drọwa ya na ngwaọrụ", "E kechiri isi ha na teepu, na tin ígwè mechiri emechi nwere aja kpọrọ nkụ, dị anya n'okpomọkụ", "Na bọket mmiri n'anwụ", "N'akpa uwe gị"], answer: 1, why: "Ikechi na teepu na tin aja na-egbochi short na ọkụ." },
      { objective: "O5", q: "Onye nwere ike ịgwa gị maka ndị na-anakọta ihe mkpofu eletrọnịkị a kwadoro?", options: ["Naanị ndị ahịa gị", "Ọ dịghị onye", "Onye ọ bụla na-agba ihe ọkụ n'akụkụ ụzọ", "Kansụl ma ọ bụ ụlọ ọrụ gọọmentị na-ahụ maka gburugburu ebe obibi"], answer: 3, why: "Kansụl na ụlọ ọrụ gburugburu ebe obibi maara ndị na-anakọta a kwadoro." },
      { objective: "O1", q: "Batrị malitere ịgba ọkụ, ị nweghịkwa ike ijide ya. Gịnị ka ị ga-eme?", options: ["Mee ka onye ọ bụla pụọ ma kpọọ ndị ọrụ mgbanyụ ọkụ", "Gaa n'ihu na ndozi", "Wụsa ya mmanụ ụgbọ ala", "Jiri aka gị bulie ya"], answer: 0, why: "Ọkụ a na-enweghị ike ijide pụtara ịpụ na ịkpọ ndị ọrụ mgbanyụ ọkụ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 4, 5, 8, 10, 12, 14, 16] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke ngwugwu mmalite gị ma nwaa ọzọ.",
    criteria: [
      { name: "Kaadị nchekwa batrị", objective: "O1", notYet: "Enweghị kaadị, ma ọ bụ na ọ hapụrụ ihe ịrịba ama ma ọ bụ ihe a ga-eme ma batrị amalite ịgba anwụrụ ọkụ.", meets: "Kaadị ahụ depụtara ihe ịrịba ama, omume nchekwa na ihe a ga-eme ma batrị na-agba anwụrụ ọkụ ma ọ bụ ọkụ.", exceeds: "Ọ na-egosikwa nọmba ndị ọrụ mgbanyụ ọkụ na ebe e debere tin aja." },
      { name: "Kaadị ọrụ", objective: "O2", notYet: "Kaadị ọrụ ahụ enweghị nsogbu ahụ, ọnụahịa ma ọ bụ nkwenye onye ahịa.", meets: "Ọ na-edekọ onye ahịa, ụdị ekwentị, IMEI, nsogbu, mmebi a hụrụ, ọrụ, ọnụahịa, ụbọchị na \"ee\" onye ahịa.", exceeds: "O nwekwara nọmba tiketi na igbe maka ụbọchị nkwa ga-agwụ." },
      { name: "Nkwa ozi ndị ahịa", objective: "O3", notYet: "Enweghị nkwa, ma ọ bụ na ọ na-arịọ PIN ma ọ bụ okwuntughe.", meets: "Opekata mpe ahịrị anọ doro anya, gụnyere na anaghị arịọ PIN ego mgbe ọ bụla na na anaghị eṅomi ihe ọ bụla.", exceeds: "Ọ na-akpọkwa aha ọfịs nchekwa ozi nke mba ahụ na otu e si edebe kaadị ọrụ nke ọma." },
      { name: "Ndepụta ọnụahịa", objective: "O4", notYet: "Ọnụahịa bụ nkọ, ma ọ bụ na mgbakọ ezighi ezi.", meets: "Opekata mpe ndozi ise, nke ọ bụla nwere akụkụ, ụgwọ ọrụ, mmefu ụlọ ahịa, uru, ọnụahịa na ụbọchị nkwa, nke a gbakọrọ nke ọma.", exceeds: "Ọ na-egosikwa nhọrọ akụkụ (original ma ọ bụ nṅomi) na ihe nkwa ahụ na-adịghị ekpuchi." },
      { name: "Ihe mkpofu eletrọnịkị na ekwentị e zuru ezu", objective: "O5", notYet: "Enweghị atụmatụ, ma ọ bụ na atụmatụ ahụ gụnyere ịgba ọkụ ma ọ bụ ịtụfu n'ebe ọ bụla.", meets: "E debere batrị na akụkụ nke ọma ma nyefee ha onye na-anakọta ma ọ bụ ọfịs a kpọrọ aha; a na-ajụ ekwentị na-enweghị ihe akaebe.", exceeds: "Ọ na-edekọkwa ihe e nyefere na mgbe e nyefere ya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe kwuru na ha na-eji kaadị ọrụ na ndepụta ọnụahịa n'ụlọ ahịa ha n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ọ dịghị ọkụ batrị ma ọ bụ mkpesa gbasara ozi n'ụlọ ahịa ha n'ime ụbọchị 90",
      "Ndị na-amụ ihe kwuru na ha nyefere ihe mkpofu eletrọnịkị onye na-anakọta ya kama ịgba ya ọkụ ma ọ bụ ịtụfu ya n'ime ụbọchị 90"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị nkịtị nwere ihe mgbakọ (calculator)",
      "Akwụkwọ na mkpịsị ode maka eserese tebụl, kaadị ọrụ, ndepụta ọnụahịa, nkwa ozi na kaadị nchekwa",
      "Ọ bụrụ na o kwere omume, ekwentị ochie (nke onye nkuzi wepụrụ batrị ya nke ọma) maka omume na kaadị ọrụ",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke"
    ],
    facilitatorNotes: [
      "Na mmemme ndị ntorobịa ma ọ bụ nke ọzụzụ aka ọrụ: meenụ ule mbido ọnụ, wee mee otu isi n'otu nnọkọ; jikọta ihe ọmụmụ a na omume aka site n'aka onye na-edozi ekwentị a zụrụ azụ.",
      "Ekwela mgbe ọ bụla ka ndị na-amụ ihe mee omume na batrị zara aza ma ọ bụ mebiri emebi; gosi ha foto kama.",
      "Tupu ihe ọmụmụ a, chọpụta ndị na-anakọta ihe mkpofu eletrọnịkị a kwadoro na ọfịs nchekwa ozi na-arụ ọrụ n'ebe unu nọ, ka ndị na-amụ ihe nwee ike ide ezi aha.",
      "Arịọla mgbe ọ bụla ka ndị na-amụ ihe kesaa PIN ma ọ bụ okwuntughe na klaasị.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
