"use strict";

// Koach Learn course (Igbo translation of africa-life/afr-tailoring-fashion-business.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const KE_BRS = { name: "Business Registration Service (Kenya): ndebanye aha azụmahịa site na eCitizen", url: "https://brs.go.ke/" };
const NG_CAC = { name: "Corporate Affairs Commission (Nigeria): ndebanye aha azụmahịa na ụlọ ọrụ", url: "https://www.cac.gov.ng/" };
const GH_ORC = { name: "Office of the Registrar of Companies (Ghana): aha azụmahịa (onye nwe naanị ya)", url: "https://orc.gov.gh/" };

module.exports = {
  id: "afr-tailoring-fashion-business-ig",
  lang: "ig",
  translationOf: "afr-tailoring-fashion-business",
  category: "Africa: Life and Work",
  name: "Ịgba Azụmahịa Ịkwa Akwa na Ejiji",
  skills: "Idebe ebe ọrụ dị nchebe, Ịtụ ihe ọtụtụ na kaadị ịtụ ọda, Ịgbakọ ọnụ ahịa uwe, Ịhazi ọda na ụbọchị nnyefe, Idebe ndekọ ego n'enweghị nsogbu, Igosi ndị ahịa ọrụ gị",
  outcome: "ịgba ọrụ ịkwa akwa gị dị ka azụmahịa: idebe ebe ọrụ dị nchebe, ịnara ọda na kaadị ịtụ ọda doro anya, itinye ọnụ ahịa uwe ọ bụla ka ọ kwụọ ụgwọ, ịhazi izu gị ka i nyefee n'oge, idebe ndekọ ego, na igosi ndị ahịa ọhụrụ ọrụ gị.",
  about: [
    "Ọtụtụ ndị na-akwa akwa na-akwa nke ọma ma ka na-enwe nsogbu: ọnụ ahịa na-ekwughị ụgwọ lining na eri, onye ahịa na-alọghị ịbịa were uwe ya, ọda agbamakwụkwọ atọ ga-adị njikere n'otu Satọde ahụ, ego mbụ (deposit) onye ọ bụla na-edeghị ede. Ihe ọmụmụ a bụ maka ndị na-akwa akwa, ndị na-emepụta ejiji na ndị na-amụ ọrụ n'obodo mepere emepe na n'ime obodo na Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire, Cameroon, Morocco na n'Africa niile.",
    "Ị ga-eme ka ebe ọrụ gị dịkwuo nchebe, jiri kaadị ịtụ ọda maka ọrụ ọ bụla, gbakọọ ihe uwe na-efu n'ezie na ihe ị ga-ana, hazie izu gị dabere n'oge ị nwere, debe obere akwụkwọ ego, chebe mobile money gị pụọ n'aghụghọ, mata otu esi edebanye aha azụmahịa gị, ma gosi ọrụ gị na WhatsApp ma ọ bụ n'ụlọ ahịa gị.",
    "Ihe ọmụmụ a bụ maka ịgba azụmahịa ahụ, ọ bụghị maka usoro ịkwa akwa. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\" maka ebe ọrụ gị. Ọnụ ego niile e dere bụ ọmụmaatụ, ọ bụghị ezi ọnụ ahịa."
  ],
  finalTask: "Mee ngwa mmalite maka azụmahịa ịkwa akwa gị: ndepụta ọnụ ahịa maka opekata mpe uwe ise ị na-akwa, nke ọ bụla nwere ihe ọ na-efu e gbakọrọ; kaadị ịtụ ọda efu ị ga-eji maka ọrụ ọ bụla; atụmatụ maka otu izu ọrụ juru eju nke dabara n'ezi oge gị; otu peeji akwụkwọ ego nwere ego mbụ e nyere na ego e mefuru; na otu post ma ọ bụ ihe na katalọgụ na-egosi uwe e mechara, ya na ọnụ ahịa ya na otu esi atụ ọda.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị na-akwa akwa, ndị na-emepụta ejiji, ndị na-amụ ọrụ na ndị ntorobịa na-emecha ọzụzụ ha, n'obodo mepere emepe na n'ime obodo n'Africa niile. Ọtụtụ na-arụ ọrụ naanị ha ma ọ bụ ya na otu ma ọ bụ mmadụ abụọ na-enyere ha aka, n'obere ụlọ ahịa, n'ọnọdụ ahịa ma ọ bụ n'ụlọ.",
    startingPoint: "Ha maara ịkwa na imecha uwe, ha na-anatakwa ọda site n'aka ezinụlọ, ndị agbata obi na ndị ụka ma ọ bụ ụlọ alakụba. Ọtụtụ na-etinye ọnụ ahịa site n'omume ma ọ bụ ihe ndị ọzọ na-ana, na-ede ihe ọtụtụ n'iberibe akwụkwọ, ma na-edebe ego n'isi ha ma ọ bụ n'otu akpa.",
    gap: "Na-enweghị ịgbakọ ọnụ ahịa, kaadị ịtụ ọda, atụmatụ izu na ndekọ ego, ndị na-akwa akwa na-atụfu ego n'ọrụ e nyere ọnụ ala, na-agafe ụbọchị nnyefe n'oge ọrụ juru eju, na-ese okwu na ndị ahịa maka ihe e kwekọrịtara, ma ha enweghị ike igosi onye na-agbazinye ego ma ọ bụ nnukwu onye ahịa otu azụmahịa ahụ si aga. Ngwa ndị a dị mfe na-eme ka nka ịkwa akwa ghọọ ego na-abata mgbe niile.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; ọtụtụ na-amụ ihe na-asụ bekee dị ka asụsụ nke abụọ",
      "Ngwaọrụ: ekwentị nkịtị ma ọ bụ smartphone, data na-adịkarị oke ọnụ; akwụkwọ ndetu, mkpịsị ode na igwe mgbakọ",
      "Ego: obere ego; achọghị software ma ọ bụ igwe dị oke ọnụ",
      "Iwu: iwu na ụgwọ ndebanye aha azụmahịa dị iche site na mba gaa na mba ma na-agbanwe; ndị na-amụ ihe na-elele n'ụlọ ndebanye aha mba ha",
      "Oge: nkuzi nkeji 4 ruo 6 nke dabara n'etiti ndị ahịa"
    ],
    prerequisites: "Ịmara ịkwa opekata mpe otu ụdị uwe site na mbido ruo na njedebe. Ịgbakọ, ịmụba na ikewa dị mfe."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe ị nwere ebe ịkwa akwa gị, igwe na ngwa gị", action: "ilele ebe ọrụ ịkwa akwa maka ihe egwu sitere na agịga, mkpa, ígwè mgbapụ uwe, ọkụ eletrik na ọkụ, ma dozie ha", standard: "ịchọta na idozi opekata mpe ihe egwu atọ" },
    { id: "O2", condition: "Mgbe onye ahịa chọrọ ka a kwaara ya uwe", action: "ịtụ ihe ọtụtụ onye ahịa ahụ ma dejupụta kaadị ịtụ ọda nwere ụdị, akwa, ọnụ ahịa, ego mbụ na ụbọchị nnyefe", standard: "na aka niile e dejupụtara ma gụghachi ya nye onye ahịa ahụ" },
    { id: "O3", condition: "Mgbe e nyere gị ngwa, oge na ụgwọ ọrụ ụbọchị niile maka otu uwe", action: "ịgbakọ ihe niile uwe ahụ na-efu ma tinye ọnụ ahịa na-ekpuchi ya ma nwee uru", standard: "na-agụnye ngwa, oge gị na ụgwọ ọrụ ụbọchị niile, ma tụnyere ya na ahịa obodo" },
    { id: "O4", condition: "Mgbe e nyere gị ọda ndị na-emechabeghị na awa ị nwere ike ịrụ ọrụ", action: "ịhazi otu izu ọda nwere ụbọchị nnyefe kwere omume", standard: "n'anaraghị ọrụ karịa ihe awa gị kwere, ma debe oge maka ntụnye uwe na oge ọrụ juru eju" },
    { id: "O5", condition: "Mgbe e nyere gị otu izu ego mbụ, ụgwọ e kwụrụ na ego e mefuru", action: "ide ego batara na ego pụrụ n'akwụkwọ ego ma mata aghụghọ mobile money", standard: "na ego fọdụrụ ziri ezi, n'ekesaghị PIN mgbe ọ bụla" },
    { id: "O6", condition: "Mgbe e nyere gị uwe e mechara na ekwentị", action: "ime post ma ọ bụ ihe na katalọgụ na-egosi uwe ahụ, ọnụ ahịa ya na otu esi atụ ọda", standard: "na foto doro anya, n'egosighị ozi nzuzo onye ahịa ọ bụla n'enweghị ikike ya" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịnara ọda na-akwụ ụgwọ",
      lessons: [
        {
          title: "Ebe ọrụ dị nchebe ma dị ọcha",
          objectives: ["O1"],
          minutes: 5,
          goal: "Lelee ebe ọrụ gị maka ihe egwu ma dozie opekata mpe atọ.",
          text: [
            "Aka gị, anya gị na azụ gị bụ azụmahịa gị. Mmerụ ahụ nwere ike ịkwụsị ọrụ gị ruo ọtụtụ izu, ọkụ nwekwara ike ịgba akwa ndị ahịa niile. Omume ole na ole na-echebe gị na ndị na-amụ ọrụ n'aka gị.",
            "Ngwa dị nkọ: debe mkpịsị aka gị n'ebe dị anya site n'agịga ma jiri presser foot; akwala n'elu ntụtụ mgbe ọ bụla; tinye mkpa, mma na seam ripper n'otu ebe, isi ha chere ala; debe agịga na ntụtụ na pin cushion ma ọ bụ n'obere igbe, ọ bụghị n'ọnụ gị mgbe ọ bụla. Tụba agịga gbajiri agbaji n'igbe mechiri emechi, ọ bụghị n'ala ebe ụmụaka na ndị ahịa na-aga.",
            "Okpomọkụ na ọkụ eletrik: ahapụla ígwè mgbapụ uwe na-ekpo ọkụ ma ọ bụ nke unyi naanị ya mgbe ọ bụla, ma guzobe ya ebe ọ na-agaghị ada; debe akwa na akwụkwọ n'ebe dị anya site na ya. Lelee waya igwe na ígwè maka ebe ha bepụrụ na plọg tọgburu atọgbu. Etinyela ọtụtụ plọg n'otu soket. Wepụ plọg igwe na ígwè mgbe ị na-emechi. Debe bọket ájá ma ọ bụ mmiri, ma ọ bụ igwe mgbanyụ ọkụ ma ọ bụrụ na ị nwere ike, n'akụkụ ọnụ ụzọ.",
            "Ahụ gị: nọdụ ala ka e kwado azụ gị, tebụl ruo ọkpụkpụ aka gị (elbow), jiri ezigbo ìhè, ma bilie gbatịa ahụ gị kwa awa. Hapụ ụzọ ije ka ọ dị ọcha, na-enweghị mpịakọta akwa na waya, ka onye ọ bụla ghara ịsụ ngọngọ."
          ],
          steps: ["Jee ije nwayọọ gburugburu ebe ọrụ gị.", "Chọọ ngwa dị nkọ, ígwè na-ekpo ọkụ, waya mebiri emebi, soket juru eju, ihe a na-asụ ngọngọ na ya na ìhè na-ezughị ezu.", "Dee ihe egwu ọ bụla ị hụrụ.", "Dozie atọ taa, dịka ọmụmaatụ igbe ntụtụ, ebe nchebe maka ígwè na ụzọ ije dị ọcha.", "Kụziere ndị na-amụ ọrụ n'aka gị otu iwu ndị a."],
          words: [["Presser foot", "akụkụ igwe ịkwa akwa na-ejide akwa ka ọ dị larịị n'okpuru agịga."], ["Soket juru eju", "ọtụtụ plọg n'otu ebe ọkụ; ọ nwere ike ikpo ọkụ ma malite ọkụ."], ["Onye na-amụ ọrụ (apprentice)", "nwata na-amụ ọrụ site n'ịrụ ya na gị."]],
          slides: [
            { title: "Ahụ gị bụ azụmahịa gị", bullets: ["Mmerụ ahụ nwere ike ịkwụsị ọrụ ruo ọtụtụ izu", "Ọkụ nwere ike ịgba akwa ndị ahịa niile", "Omume dị mfe na-echebe gị"] },
            { title: "Ngwa dị nkọ", bullets: ["Mkpịsị aka n'ebe dị anya site n'agịga; akwala n'elu ntụtụ", "Mkpa na mma n'otu ebe, isi chere ala", "Ntụtụ na cushion ma ọ bụ igbe, ọ bụghị n'ọnụ gị"] },
            { title: "Okpomọkụ na ọkụ eletrik", bullets: ["Ahapụla ígwè na-ekpo ọkụ ma ọ bụ nke unyi naanị ya", "Lelee waya; etinyela ọtụtụ plọg n'otu soket", "Wepụ plọg mgbe ị na-emechi; ájá, mmiri ma ọ bụ igwe mgbanyụ ọkụ n'ọnụ ụzọ"] },
            { title: "Ahụ gị na ebe gị", bullets: ["Azụ e kwadoro, ezigbo ìhè", "Bilie gbatịa ahụ kwa awa", "Ụzọ ije dị ọcha: ọ dịghị mpịakọta akwa ma ọ bụ waya n'ala"] }
          ],
          tryIt: "Jee gburugburu ebe ọrụ gị ugbu a. Dee ihe egwu ọ bụla ị hụrụ. Dozie atọ n'ime ha taa ma kaa ha akara na ndepụta gị.",
          youCanNow: "ilele ebe ọrụ gị maka ihe egwu sitere na ngwa dị nkọ, okpomọkụ, ọkụ eletrik na ịsụ ngọngọ, ma dozie ha.",
          quickCheck: [
            { objective: "O1", q: "Ebee ka ị ga-edebe ntụtụ mgbe ị na-arụ ọrụ?", options: ["Na pin cushion ma ọ bụ n'obere igbe", "N'ọnụ gị, ka ọ dị ngwa iwere", "N'ala n'akụkụ oche gị", "N'ime mpịakọta akwa"], answer: 0, why: "Cushion ma ọ bụ igbe na-edebe ntụtụ n'ebe dị anya site n'ọnụ gị, ala na akwa onye ahịa." },
            { objective: "O1", q: "Plọg ise dị n'otu soket ma ọ na-ekpo ọkụ. Gịnị ka ị ga-eme?", options: ["Gaa n'ihu; ọ bụ ihe nkịtị", "Wepụ ụfọdụ ma kesaa ha ma ọ bụ jiri extension dị nchebe", "Wụsa ya mmiri ka ọ jụọ oyi", "Kpuchie ya akwa"], answer: 1, why: "Soket juru eju na-ekpo ọkụ nwere ike ịmalite ọkụ; belata ihe dị na ya ma ejila mmiri mgbe ọ bụla n'akụkụ ọkụ eletrik." }
          ]
        },
        {
          title: "Ihe ọtụtụ na kaadị ịtụ ọda",
          objectives: ["O2"],
          minutes: 5,
          goal: "Tụọ ihe ọtụtụ onye ahịa ma dejupụta kaadị ịtụ ọda zuru ezu.",
          text: [
            "Ọtụtụ esemokwu na ndị ahịa na-amalite n'ihi na e deghị ihe ọ bụla. \"Asị m aka ogologo.\" \"Ị sịrị Fraịde.\" \"Akwụọla m gị ọkara.\" Kaadị ịtụ ọda na-akwụsị nke a. Ọ bụ otu peeji ma ọ bụ otu kaadị maka ọrụ ọ bụla, ya na mbipụta ma ọ bụ foto maka onye ahịa.",
            "Kaadị ịtụ ọda na-egosi: aha onye ahịa na nọmba ekwentị ya; ụbọchị; ụdị uwe (ihe osise ma ọ bụ foto ụdị ọ chọrọ); ihe ọtụtụ; akwa (onye na-ebute ya, yaadị ma ọ bụ mita ole, obere iberibe akwa e tinyere n'ime kaadị); ọnụ ahịa, ego mbụ e kwụrụ na ego fọdụrụ; ụbọchị ntụnye uwe na ụbọchị nnyefe; na mbinye aka gị na nke ya.",
            "Tụọ ihe ọtụtụ otu ụzọ ahụ mgbe niile, n'otu usoro, jiri ezigbo teepụ ọtụtụ. Dee ụdị ọtụtụ (cm ma ọ bụ inch). Gụghachi ihe ọtụtụ na nkọwa ndị ahụ nye onye ahịa tupu ọ pụọ. Maka ọda aso ebi na Lagos, kaba na slit na Kumasi ma ọ bụ boubou na Dakar maka Tabaski, kaadị ahụ bụ otu: gị na onye ahịa ahụ maara kpọmkwem ihe unu kwekọrịtara."
          ],
          steps: ["Dee aha onye ahịa, nọmba ekwentị ya na ụbọchị.", "See ụdị uwe ahụ ma ọ bụ tinye foto.", "Tụọ n'usoro gị nkịtị ma dee ụdị ọtụtụ.", "Dee nkọwa akwa ma tinye obere iberibe akwa n'ime kaadị.", "Dee ọnụ ahịa, ego mbụ, ego fọdụrụ, ụbọchị ntụnye uwe na ụbọchị nnyefe.", "Gụghachi ya niile, unu abụọ bịanye aka, ma nye onye ahịa mbipụta ma ọ bụ kwe ka ọ see foto."],
          words: [["Kaadị ịtụ ọda", "ndekọ e dere ede maka otu ọrụ: gịnị, maka onye, ole na mgbe."], ["Ego mbụ (deposit)", "ego e kwụrụ tupu ị malite ọrụ ahụ."], ["Ego fọdụrụ (balance)", "ego a ka ji ụgwọ mgbe e kwụrụ ego mbụ."]],
          slides: [
            { title: "Ihe mere a ga-eji dee ya", bullets: ["\"Asị m aka ogologo.\" \"Ị sịrị Fraịde.\"", "Kaadị na-akwụsị esemokwu ahụ", "Otu kaadị maka ọrụ ọ bụla; mbipụta maka onye ahịa"] },
            { title: "Ihe kaadị na-egosi", bullets: ["Aha, ekwentị, ụbọchị; ihe osise ma ọ bụ foto ụdị uwe", "Ihe ọtụtụ na ụdị ọtụtụ", "Nkọwa akwa na obere iberibe ya"] },
            { title: "Ego na ụbọchị", bullets: ["Ọnụ ahịa, ego mbụ e kwụrụ, ego fọdụrụ", "Ụbọchị ntụnye uwe na ụbọchị nnyefe", "Unu abụọ bịanye aka"] },
            { title: "Tupu onye ahịa apụọ", bullets: ["Gụghachi nkọwa ọ bụla", "Dozie mperi ọ bụla ugbu a", "Onye ahịa na-edebe mbipụta ma ọ bụ foto"] }
          ],
          tryIt: "See kaadị ịtụ ọda nke gị n'otu peeji nwere akụkụ niile si na nkuzi a. Dejupụta ya maka enyi ma ọ bụ onye ezinụlọ dị ka a ga-asị na ha tụrụ ọda uwe, wee gụghachi ya nye ha.",
          youCanNow: "ịtụ ihe ọtụtụ otu ụzọ ahụ mgbe niile ma dejupụta kaadị ịtụ ọda gị na onye ahịa kwekọrịtara.",
          quickCheck: [
            { objective: "O2", q: "Onye ahịa sịrị, \"Ị gwaghị m Fraịde mgbe ọ bụla.\" Gịnị gaara egbochi nke a?", options: ["Akara ụlọ ahịa ka ukwuu", "Ịkwa ngwa ngwa", "Kaadị ịtụ ọda nwere ụbọchị nnyefe unu abụọ bịanyere aka", "Ịna obere ego"], answer: 2, why: "Kaadị e bịanyere aka nwere ụbọchị nnyefe na-egosi ihe e kwekọrịtara." },
            { objective: "O2", q: "I mechaala ịtụ ihe ọtụtụ. Gịnị ka ị ga-eme tupu onye ahịa apụọ?", options: ["Tụpụ iberibe akwụkwọ ahụ", "Rịọ naanị ọnụ ahịa zuru ezu", "Malite ịkpụ akwa ozugbo", "Gụghachi nkọwa ọ bụla ma nye ya mbipụta ma ọ bụ foto kaadị ahụ"], answer: 3, why: "Ịgụghachi na-ejide mperi, mbipụta pụtakwara na unu abụọ nwere otu ndekọ ahụ." }
          ]
        },
        {
          title: "Ịgbakọ ihe uwe na-efu na ọnụ ahịa ya",
          objectives: ["O3"],
          minutes: 6,
          goal: "Gbakọọ ihe niile otu uwe na-efu ma tinye ọnụ ahịa na-ewetara uru.",
          text: [
            "Ọtụtụ ndị na-akwa akwa na-eṅomi ọnụ ahịa ụlọ ahịa dị n'akụkụ ha. Mana ọ bụrụ na ihe ọrụ gị na-efu karịrị nke ha, ị nwere ike na-arụ ọrụ n'efu. Buru ụzọ gbakọọ ihe ọ na-efu gị, wee kpebie ọnụ ahịa.",
            "Ngwa: ihe niile na-abanye n'uwe ahụ ma ọ bụrụ na ị zụtara ya, dị ka lining, interfacing, eri, zip, bọtịn, eri ịchọ mma na ihe nkwakọ. Ọ bụrụ na onye ahịa butere akwa ya, agụla akwa ahụ, mana gụọ ihe ndị ọzọ niile.",
            "Oge gị: awa ole uwe ahụ na-ewe (ịkpụ, ịkwa, ntụnye uwe, imecha) mụbaa ya na ihe ị chọrọ inweta kwa awa. Ụgwọ ọrụ ụbọchị niile: ụgwọ ụlọ, ọkụ eletrik ma ọ bụ mmanụ maka jenereto, idozi igwe, agịga, data ekwentị, òkè maka uwe ọ bụla. Ụzọ dị mfe: gbakọọ ụgwọ ọrụ otu ọnwa ma kee ya site na ọnụ ọgụgụ uwe ị na-akwa n'otu ọnwa.",
            "Ọmụmaatụ (ọnụ ego bụ naanị ọmụmaatụ): uwe nwaanyị na Kenya. Ngwa KES 450, oge awa 4 na KES 200 = KES 800, ụgwọ ọrụ ụbọchị niile KES 250. Ihe ọ na-efu = KES 1,500. Tinye uru, dịka ọmụmaatụ 30%, nke bụ KES 450. Ọnụ ahịa = KES 1,950. Wee tụnyere ya na ahịa. Ọ bụrụ na ọnụ ahịa n'ahịa dị ala nke ukwuu, chọọ ụzọ dị ọnụ ala ma ọ bụ ụdị uwe dị mfe karịa. Ebutela ọnụ ahịa gị n'okpuru ihe ọ na-efu."
          ],
          steps: ["Depụta ma gbakọọ ngwa maka otu uwe.", "Mụbaa awa ya na ihe ị chọrọ inweta kwa awa.", "Tinye òkè nke ụgwọ ọrụ otu ọnwa.", "Gbakọọ ihe atọ ahụ: nke ahụ bụ ihe ọ na-efu.", "Tinye uru iji nweta ọnụ ahịa gị.", "Tụnyere ya na ahịa ma gbanwee ụdị uwe ma ọ bụ ụzọ, ọ bụghị naanị uru."],
          words: [["Ihe ọ na-efu (cost)", "ego na oge niile ọ na-ewe ịkwa otu uwe."], ["Ụgwọ ọrụ ụbọchị niile (running costs)", "ego ị na-emefu iji mee ka ebe ọrụ dị oghe, dị ka ụgwọ ụlọ na ọkụ eletrik."], ["Uru (profit)", "ihe fọdụrụ maka gị na azụmahịa ahụ mgbe e kwụchara ụgwọ niile."], ["Margin", "uru ị na-agbakwunye n'elu ihe ọ na-efu."]],
          slides: [
            { title: "Ihe ọ na-efu mbụ, ọnụ ahịa nke abụọ", bullets: ["Iṅomi ụlọ ahịa dị n'akụkụ nwere ike ịpụta ịrụ ọrụ n'efu", "Mara ihe ọ na-efu gị"] },
            { title: "Akụkụ atọ nke ihe ọ na-efu", bullets: ["Ngwa: lining, eri, zip, bọtịn, ihe nkwakọ", "Oge gị: awa x ihe ị chọrọ kwa awa", "Ụgwọ ọrụ ụbọchị niile: ụgwọ ụlọ, ọkụ, idozi igwe, data"] },
            { title: "Ọmụmaatụ (KES, naanị ọmụmaatụ)", bullets: ["Ngwa 450 + oge 800 + ụgwọ ọrụ 250 = 1,500", "Tinye uru 30%: 450", "Ọnụ ahịa: KES 1,950"] },
            { title: "Ọ bụrụ na ahịa dị ala", bullets: ["Ụdị uwe dị mfe ma ọ bụ ụzọ dị ọnụ ala", "Chọta ndị ahịa na-akwanyere ọrụ ọma gị ugwu", "Etinyela ọnụ ahịa n'okpuru ihe ọ na-efu"] }
          ],
          tryIt: "Họrọ uwe ị na-akwakarị. Gbakọọ ngwa ya, oge gị na òkè ya nke ụgwọ ọrụ ụbọchị niile. Tinye uru ma dee ọnụ ahịa. Tụnyere ya na ihe ị na-ana ugbu a.",
          youCanNow: "ịgbakọ ihe otu uwe na-efu gị n'ezie ma tinye ọnụ ahịa na-akwụ gị na azụmahịa ahụ ụgwọ.",
          quickCheck: [
            { objective: "O3", q: "Onye ahịa butere akwa nke ya. Gịnị ka ị ka ga-agụ na ngwa?", options: ["Ọ dịghị ihe ọ bụla", "Lining, eri, zip na bọtịn ị zụtara", "Naanị akwa ahụ", "Ụgwọ ụgbọ onye ahịa"], answer: 1, why: "Ọ bụrụ na ị zụtara lining, eri, zip na bọtịn, ha bụ ihe na-efu gị ọbụlagodi mgbe akwa abụghị nke gị." },
            { objective: "O3", q: "Ngwa GHS 60, oge GHS 90, ụgwọ ọrụ ụbọchị niile GHS 30. Gịnị bụ ihe ọ na-efu tupu uru? (Ọnụ ego ọmụmaatụ.)", options: ["GHS 150", "GHS 120", "GHS 180", "GHS 90"], answer: 2, why: "60 + 90 + 30 = 180; a na-agbakwunye uru n'elu nke a." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịnara ọda na-akwụ ụgwọ",
        questions: [
          { objective: "O1", q: "Onye na-amụ ọrụ n'aka gị hapụrụ ígwè unyi ka o guzoro n'elu akwa ka ọ na-aza ekwentị. Gịnị ka ị ga-akụziri ya?", options: ["Ígwè dị mma n'elu akwa", "Tụgharịa ígwè ahụ ka ihu ya chee tebụl", "Ahapụla ígwè na-ekpo ọkụ naanị ya mgbe ọ bụla, ma guzobe ya ebe ọ na-agaghị ada, n'ebe dị anya site n'akwa", "Zaa ekwentị ngwa ngwa"], answer: 2, why: "Ígwè na-ekpo ọkụ a hapụrụ n'elu akwa ma ọ bụ n'akụkụ ya nwere ike ịmalite ọkụ n'ime sekọnd ole na ole." },
          { objective: "O2", q: "Kedu n'ime ihe ndị a dị na kaadị ịtụ ọda?", options: ["PIN onye ahịa", "Ụbọchị nnyefe, ọnụ ahịa, ego mbụ na ego fọdụrụ", "Ọnụ ahịa onye agbata obi gị", "Nọmba ID onye ahịa"], answer: 1, why: "Kaadị ahụ na-edekọ ọrụ, ego na ụbọchị; nọmba nzuzo adịghị na ya." },
          { objective: "O2", q: "Gịnị mere a ga-eji tinye obere iberibe akwa n'ime kaadị ahụ?", options: ["Ka i jikọta akwa ziri ezi na ọda ziri ezi", "Iji ya mee pin cushion", "N'ihi na iwu chọrọ ya", "Iji na ego karịa"], answer: 0, why: "Iberibe akwa na-egbochi mgbagwoju anya mgbe akwa ọtụtụ ndị ahịa dị n'ụlọ ahịa." },
          { objective: "O3", q: "Onye agbata obi gị na-ana NGN 8,000 maka ụdị uwe nke na-efu gị NGN 9,000 ịkwa. Gịnị ka ị ga-eme? (Ọnụ ego ọmụmaatụ.)", options: ["Na NGN 7,500 iji nweta ndị ahịa", "Na NGN 8,000 ma tụfuo NGN 1,000 oge ọ bụla", "Kwụsị ịkwa ụdị uwe ahụ ruo mgbe ebighị ebi", "Chọọ ụzọ dị ọnụ ala ma ọ bụ ụdị uwe dị mfe, ma tinye ọnụ ahịa karịrị ihe ọ na-efu gị"], answer: 3, why: "Ọnụ ahịa n'okpuru ihe ọ na-efu na-atụfu ego n'uwe ọ bụla; gbanwee ụzọ ma ọ bụ ụdị uwe kama." },
          { objective: "O3", q: "Olee otu ị ga-esi gbakọọ òkè uwe ọ bụla nke ụgwọ ụlọ na ọkụ eletrik?", options: ["Chepụta otu nọmba", "Gbakọọ ụgwọ ọrụ otu ọnwa ma kee ya site n'uwe ị na-akwa n'otu ọnwa", "Rịọ onye ahịa ka ọ kwụọ ụgwọ ụlọ", "Hapụ ya; ọ dị ntakịrị"], answer: 1, why: "Ikesa ụgwọ ọrụ otu ọnwa n'uwe otu ọnwa na-enye òkè ziri ezi maka nke ọ bụla." }
        ]
      }
    },
    {
      name: "Isi 2: Ịgba azụmahịa ahụ",
      lessons: [
        {
          title: "Ịhazi izu gị na ụbọchị nnyefe gị",
          objectives: ["O4"],
          minutes: 5,
          goal: "Hazie otu izu ọda ka ụbọchị nnyefe ọ bụla dabara n'ezi awa gị.",
          text: [
            "Oge kachasị ọrụ, dị ka Krismas, Eid, Tabaski, Ista, mmeghe ụlọ akwụkwọ na oge agbamakwụkwọ, bụ mgbe ndị na-akwa akwa na-atụfu ndị ahịa site n'ikwe nkwa karịrị akarị. Atụmatụ izu dị mfe na-enyere gị aka ikwe naanị ihe ị nwere ike imecha.",
            "Nke mbụ, gụọ ezi awa ịkwa akwa gị n'otu izu, na-agụnyeghị oge maka ndị ahịa, ịzụ ngwa, mgbe ọkụ na-anyụ na izu ike. Nke ọzọ, dee awa ole ọda ọ bụla na-emechabeghị chọrọ (site n'ịgbakọ gị). Wee tinye ọda ọ bụla n'otu ụbọchị, nke ụbọchị nnyefe ya bịara nso buru ụzọ, ntụnye uwe tupu imecha. Hapụ ihe dị ka otu awa n'ime ise ka ọ dị efu maka ihe mberede dị ka ọkụ anyụ ma ọ bụ igwe mebiri.",
            "Mgbe izu ahụ jupụtara, ọ jupụtala. Nye ụbọchị efu na-esote, rịọ ego mbụ iji jide oge ahụ, ma ọ bụ jiri nkwanye ugwu kwuo mba. N'oge ọrụ juru eju, kpebie ụbọchị ikpeazụ maka ọda ọhụrụ, dịka ọmụmaatụ izu abụọ tupu Tabaski na Dakar ma ọ bụ tupu Krismas na Accra, ma gwa ndị ahịa n'oge na status gị na n'ụlọ ahịa."
          ],
          steps: ["Gụọ ezi awa ịkwa akwa gị n'izu a.", "Depụta ọda na-emechabeghị ya na awa nke ọ bụla chọrọ na ụbọchị nnyefe.", "Tinye ọda n'ụbọchị, nke ụbọchị nnyefe ya bịara nso buru ụzọ, ntụnye uwe tupu imecha.", "Hapụ ihe dị ka otu awa n'ime ise ka ọ dị efu maka ihe mberede.", "Mgbe izu ahụ jupụtara, nye ụbọchị efu na-esote ma ọ bụ jiri nkwanye ugwu kwuo mba."],
          words: [["Ụbọchị nnyefe", "ụbọchị i kwere nkwa na uwe ahụ ga-adị njikere."], ["Ntụnye uwe (fitting)", "mgbe onye ahịa na-anwale uwe ahụ ka i wee dozie ya."], ["Ụbọchị ikpeazụ maka ọda", "ụbọchị ikpeazụ ị na-anara ọda ọhụrụ tupu ezumike juru eju."]],
          slides: [
            { title: "Oge ọrụ juru eju na-emebi nkwa", bullets: ["Krismas, Eid, Tabaski, Ista, agbamakwụkwọ, mmeghe ụlọ akwụkwọ", "Kwee naanị nkwa awa gị kwere"] },
            { title: "Hazie izu ahụ", bullets: ["Gụọ ezi awa ịkwa akwa gị", "Awa ọda ọ bụla chọrọ", "Ụbọchị nnyefe bịara nso buru ụzọ; ntụnye uwe tupu imecha"] },
            { title: "Debe oge efu", bullets: ["Ihe dị ka otu awa n'ime ise maka ihe mberede", "Ọkụ anyụ, igwe mebiri, ụbọchị ọrịa"] },
            { title: "Mgbe izu ahụ jupụtara", bullets: ["Nye ụbọchị efu na-esote", "Ego mbụ na-ejide oge ahụ", "Kwupụta ụbọchị ikpeazụ maka ọda ezumike n'oge"] }
          ],
          tryIt: "Dee ezi awa ịkwa akwa gị maka izu na-abịa. Depụta ọda gị na-emechabeghị ya na awa nke ọ bụla chọrọ na ụbọchị nnyefe ya. Tinye ha n'ụbọchị. Ọ dị nke ga-egbu oge? Kpebie ugbu a ihe ị ga-agwa onye ahịa ahụ.",
          youCanNow: "ịhazi otu izu ọda dabara n'awa gị ma kpebie ụbọchị ikpeazụ maka ọda n'oge ọrụ juru eju.",
          quickCheck: [
            { objective: "O4", q: "I nwere ezi awa ịkwa akwa 30 n'izu a na ọda chọrọ 40. Gịnị ka ị ga-eme?", options: ["Kwee nkwa maka ha niile n'agbanyeghị", "Kwaa akwa abalị niile kwa abalị", "Leghara ụbọchị nnyefe anya", "Gbanwee ụfọdụ ụbọchị nnyefe na ndị ahịa ugbu a, ma ọ bụ anarala ọda ọhụrụ"], answer: 3, why: "Ịgwa ndị ahịa n'oge na ịnara naanị ihe awa gị kwere na-edebe nkwa gị na aha ọma gị." },
            { objective: "O4", q: "Gịnị mere ị ga-eji hapụ ihe dị ka otu awa n'ime ise ka ọ dị efu n'atụmatụ gị?", options: ["Maka ihe mberede dị ka ọkụ anyụ ma ọ bụ igwe mebiri", "Ịga ahịa", "N'ihi na ndị ahịa na-achọ ichere", "Ọ dịghị mkpa"], answer: 0, why: "Oge efu na-anara ihe mberede ka ha ghara ime ka ọda gbuo oge." }
          ]
        },
        {
          title: "Ndekọ ego, nchekwa mobile money na ndebanye aha",
          objectives: ["O5"],
          minutes: 6,
          goal: "Dee ego batara na ego pụrụ maka otu izu ma mata aghụghọ mobile money.",
          text: [
            "Kewaa ego azụmahịa na ego ezinụlọ. Akwụkwọ ego dị mfe nwere kọlụm anọ: ụbọchị, ihe ọ bụ, ego batara, ego pụrụ. Dee ego mbụ ọ bụla, ego fọdụrụ e kwụrụ na ihe ọ bụla e zụtara n'otu ụbọchị ahụ. Na njedebe izu, gbakọọ ego batara, wepụ ego pụrụ, ma tụnyere ihe ọ pụtara na ego aka na mobile money ị nwere n'ezie. Na Côte d'Ivoire ma ọ bụ Senegal ị nwere ike ide na XOF; na Cameroon na XAF; ụzọ ahụ bụ otu.",
            "Mobile money dị ngwa, ndị aghụghọ makwaara nke a. Ihe ịdọ aka na ntị: ozi na-asị na e zitere gị ego \"na mperi\" ma rịọ ka i zighachi ya (buru ụzọ lelee ezi ego dị n'akaụntụ gị, ma rịọ onye na-enye gị ọrụ ahụ ka o weghachi ya, ezighachila ya n'onwe gị mgbe ọ bụla); onye ọ bụla na-arịọ PIN gị ma ọ bụ koodu e zitere n'ekwentị gị; oku sitere n'aka \"onye ọrụ customer care\" na nọmba nkịtị; nnukwu ọda ngwa ngwa sitere n'aka onye ị na-amaghị chọrọ ka i buru ụzọ kwụọ \"ụgwọ nnyefe\". Ezi onye na-enye ọrụ mobile money anaghị arịọ PIN gị mgbe ọ bụla.",
            "Idebanye aha azụmahịa gị nwere ike inyere gị aka imeghe akaụntụ azụmahịa n'ụlọ akụ, itinye akwụkwọ maka nkwekọrịta na ụlọ akwụkwọ na ụlọ ọrụ, ma mee ka ndị ahịa hụ na ị dị njikere. Na Kenya, Business Registration Service na-eme ya site na eCitizen; na Nigeria, Corporate Affairs Commission; na Ghana, Office of the Registrar of Companies; na Senegal, jụọ APIX. Iwu, usoro na ụgwọ na-agbanwe, ya mere lelee weebụsaịtị ma ọ bụ ọfịs gọọmentị, ma kpachara anya maka ndị nnọchite adịgboroja na-ekwe nkwa \"ndebanye aha n'efu\"."
          ],
          steps: ["Meghee akwụkwọ ndetu ma ọ bụ ndetu ekwentị nwere kọlụm anọ: ụbọchị, gịnị, batara, pụrụ.", "Dee ego mbụ ọ bụla, ụgwọ ọ bụla na ihe ọ bụla e zụtara n'otu ụbọchị ahụ.", "Na njedebe izu: ngụkọta ego batara wepụ ngụkọta ego pụrụ.", "Tụnyere ihe ọ pụtara na ezi ego aka gị na ego mobile money gị.", "Ekesala PIN gị mgbe ọ bụla; lelee \"ego e zitere na mperi\" ọ bụla na onye na-enye gị ọrụ tupu i mee ihe ọ bụla."],
          words: [["Akwụkwọ ego", "ndekọ dị mfe nke ego na-abata na ego na-apụ."], ["PIN", "nọmba nzuzo gị maka mobile money; naanị gị kwesịrị ịmara ya."], ["Nweghachi ego (reversal)", "mgbe onye na-enye ọrụ ahụ weghachiri ego gara n'aka onye na-ezighi ezi."], ["Ndebanye aha azụmahịa", "itinye aha azụmahịa gị na ndepụta gọọmentị."]],
          slides: [
            { title: "Akwụkwọ ego dị mfe", bullets: ["Ụbọchị, gịnị, ego batara, ego pụrụ", "Dee ya n'otu ụbọchị ahụ", "Ego azụmahịa iche, ego ezinụlọ iche"] },
            { title: "Lelee kwa izu", bullets: ["Ngụkọta batara wepụ ngụkọta pụrụ", "Tụnyere ya na ezi ego aka na mobile money", "Chọta oghere ahụ mgbe ị ka na-echeta"] },
            { title: "Ihe ịrịba ama aghụghọ mobile money", bullets: ["\"E zitere ya na mperi, biko zighachi ya\"", "Onye ọ bụla na-arịọ PIN gị ma ọ bụ koodu", "\"Customer care\" na nọmba nkịtị; ụgwọ tupu nnukwu ọda", "Ezi onye na-enye ọrụ anaghị arịọ PIN gị mgbe ọ bụla"] },
            { title: "Debanye aha azụmahịa gị", bullets: ["Kenya: BRS site na eCitizen; Nigeria: CAC", "Ghana: Registrar of Companies; Senegal: jụọ APIX", "Iwu na ụgwọ na-agbanwe: lelee weebụsaịtị gọọmentị"] }
          ],
          sources: [KE_BRS, NG_CAC, GH_ORC],
          tryIt: "Malite akwụkwọ ego gị taa. Dee ego ọ bụla ị na-echeta site n'ụbọchị atọ gara aga. Wee dee ụlọ ndebanye aha gọọmentị maka mba gị na otu ihe ị ga-elele n'ebe ahụ.",
          youCanNow: "idebe akwụkwọ ego kwa izu, ịmata aghụghọ mobile money na ịmara ọfịs na-edebanye aha azụmahịa na mba gị.",
          quickCheck: [
            { objective: "O5", q: "Ozi ederede kwuru na e zitere gị KES 5,000 na mperi ma rịọ ka i zighachi ya. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Zighachi ya ozugbo", "Kesaa PIN gị ka ha dozie ya", "Lelee ezi ego dị n'akaụntụ gị ma kpọtụrụ onye na-enye gị ọrụ site n'ụzọ gọọmentị ya", "Zaa ya na nọmba ID gị"], answer: 2, why: "Ọtụtụ ozi \"ego e zitere na mperi\" bụ adịgboroja; onye na-enye ọrụ ahụ na-eweghachi ezi ego." },
            { objective: "O5", q: "Na njedebe izu, akwụkwọ ego gị na-egosi ego karịrị ihe ị nwere n'ezie. Gịnị ka ị ga-eme?", options: ["Leghara ya anya", "Chọọ ụgwọ ma ọ bụ ihe e zụtara i chefuru ide", "Dọpụ peeji ahụ", "Gbaziri ego ka ọ dakọ"], answer: 1, why: "Oghere na-apụtakarị na e deghị ihe ụfọdụ; chọta ya mgbe ị ka na-echeta." }
          ]
        },
        {
          title: "Igosi ọrụ gị na ịchọta ndị ahịa",
          objectives: ["O6"],
          minutes: 5,
          goal: "Mee post ma ọ bụ ihe na katalọgụ na-egosi uwe e mechara, ọnụ ahịa ya na otu esi atụ ọda.",
          text: [
            "Mgbasa ozi kacha mma gị bụ ọrụ gị. Foto doro anya nke uwe e mechara, e kesara na WhatsApp status, katalọgụ WhatsApp Business, Facebook, Instagram ma ọ bụ TikTok, ma ọ bụ e bipụtara n'elu mgbidi ụlọ ahịa gị, na-ewetara gị ndị ahịa ọhụrụ. Onye na-emepụta ejiji na Casablanca nwere ike igosi caftan, onye na-akwa akwa na Kumasi egosi uwe kente, n'otu ụzọ ahụ.",
            "Ezigbo foto: ìhè ehihie, azụ dị larịị na-enweghị ihe ọ bụla, uwe ahụ niile, wee otu foto dị nso nke ihe ịchọ mma ma ọ bụ mmecha ya. Ọ bụrụ na onye ahịa yi ya, buru ụzọ jụọ ma ị nwere ike ikesa foto ahụ, ma ekesala aha ya, nọmba ekwentị ya ma ọ bụ ihe ọtụtụ ya mgbe ọ bụla. Ụfọdụ ndị ahịa na-asị mba; kwanyere nke ahụ ugwu.",
            "Post ọ bụla na-ekwu ihe ọ bụ, ọnụ ahịa ma ọ bụ ọnụ ahịa \"site na\", oge ole ọ na-ewe, na otu esi atụ ọda (nọmba ekwentị gị ma ọ bụ \"zitere m ozi\"). Ndepụta ọnụ ahịa n'elu mgbidi ma ọ bụ dị ka foto n'ekwentị gị na-enyekwa aka: uwe ise ruo iri bụ isi ị na-akwa ya na ọnụ ahịa ha, dabere n'ịgbakọ gị. Belata ụgwọ data site n'ikesa otu ezigbo foto kama ọtụtụ."
          ],
          steps: ["Họrọ otu uwe e mechara.", "See foto n'ìhè ehihie n'azụ dị larịị, gbakwunye otu foto dị nso.", "Jụọ ikike ma ọ bụrụ na onye ahịa nọ na foto ahụ.", "Dee ihe ọ bụ, ọnụ ahịa, oge ole ọ na-ewe na otu esi atụ ọda.", "Bipụta ya, ma ọ bụ tinye ya na katalọgụ gị ma ọ bụ ndepụta ọnụ ahịa."],
          words: [["Katalọgụ (catalogue)", "ndepụta ngwaahịa gị nwere foto na ọnụ ahịa, dịka ọmụmaatụ na WhatsApp Business."], ["Ndepụta ọnụ ahịa", "ndepụta uwe bụ isi ị na-akwa na ihe nke ọ bụla na-efu ịtụ ọda ya."], ["Ikike (permission)", "onye ahịa ikwe ee tupu i kesaa foto ya."]],
          slides: [
            { title: "Ọrụ gị bụ mgbasa ozi gị", bullets: ["WhatsApp status ma ọ bụ katalọgụ, Facebook, Instagram, TikTok", "Ma ọ bụ e bipụtara n'elu mgbidi ụlọ ahịa gị"] },
            { title: "Ezigbo foto", bullets: ["Ìhè ehihie, azụ dị larịị", "Uwe ahụ niile gbakwunyere otu foto dị nso", "Onye ahịa nọ na ya? Buru ụzọ jụọ"] },
            { title: "Ihe post ọ bụla na-ekwu", bullets: ["Ihe ọ bụ", "Ọnụ ahịa ma ọ bụ ọnụ ahịa \"site na\"; oge ole ọ na-ewe", "Otu esi atụ ọda"] },
            { title: "Chebe ndị ahịa", bullets: ["Ọ dịghị aha, nọmba ekwentị ma ọ bụ ihe ọtụtụ na post", "Ọ bụrụ na ha sịrị mba, ekesala"] }
          ],
          tryIt: "See foto otu uwe e mechara n'ìhè ehihie. Dee post nwere ihe ọ bụ, ọnụ ahịa si n'ịgbakọ gị, oge ole ọ na-ewe na otu esi atụ ọda. Kesaa ya na status gị ma ọ bụ chekwaa ya maka katalọgụ gị.",
          youCanNow: "igosi ọrụ gị na foto doro anya, ọnụ ahịa na otu esi atụ ọda, ma na-echebe ozi nzuzo ndị ahịa gị.",
          quickCheck: [
            { objective: "O6", q: "Gịnị ka post gbasara uwe gị ga-enwerịrị?", options: ["Ihe ọtụtụ onye ahịa", "Naanị foto, ọ dịghị ihe ọzọ", "Ọnụ ahịa i ji zụta eri", "Ihe ọ bụ, ọnụ ahịa, oge ole ọ na-ewe na otu esi atụ ọda"], answer: 3, why: "Ndị ahịa kwesịrị ịmara ihe ọ bụ, ihe ọ na-efu, mgbe ha ga-enweta ya na otu esi atụ ọda." },
            { objective: "O6", q: "Ị chọrọ ikesa foto onye ahịa yi uwe gị. Gịnị ka ị ga-eme?", options: ["Buru ụzọ jụọ ya, ma ekesala aha ma ọ bụ nọmba ekwentị", "Bipụta ya na aha ya ka ndị mmadụ jụọ ya", "Bipụta ya; ọ bụ onye ahịa gị", "Bipụtakwa ihe ọtụtụ ya"], answer: 0, why: "Foto na ozi onye ahịa bụ nke ya; buru ụzọ jụọ ma hapụ ozi nzuzo." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịgba azụmahịa ahụ",
        questions: [
          { objective: "O4", q: "Tabaski fọdụrụ izu atọ, izu gị ejupụtalarị. Onye ahịa ọhụrụ chọrọ boubou. Gịnị ka ị ga-eme?", options: ["Kwee nkwa ya maka Tabaski n'agbanyeghị", "Jiri eziokwu nye ụbọchị efu na-esote, ma ọ bụ jiri nkwanye ugwu kwuo mba", "Nara ya ma nye ya onye na-enyere aka na-amụbeghị ọrụ", "Nara ego mbụ ma ekwula ihe ọ bụla gbasara ụbọchị"], answer: 1, why: "Ụbọchị eziokwu na-edebe aha ọma gị; ikwe nkwa karịrị akarị n'oge ọrụ juru eju na-atụfu ndị ahịa." },
          { objective: "O4", q: "N'atụmatụ izu gị, kedu ọda na-ebu ụzọ?", options: ["Nke ụbọchị nnyefe ya bịara nso", "Nke kacha dị mfe", "Nke si n'aka enyi gị", "Nke kacha akwụ ụgwọ"], answer: 0, why: "Ụbọchị nnyefe bịara nso buru ụzọ na-eme ka nkwa ọ bụla mezuo n'oge." },
          { objective: "O5", q: "Onye kpọrọ oku dị ka \"customer care mobile money\" rịọrọ PIN gị iji dozie akaụntụ gị. Gịnị bụ eziokwu?", options: ["Ị ga-enyerịrị ya", "Nye naanị ọkara PIN", "Nye ya ma ọ bụrụ na ha maara aha gị", "Ezi onye na-enye ọrụ anaghị arịọ PIN gị mgbe ọ bụla; kwụsị oku ahụ"], answer: 3, why: "Onye ọ bụla na-arịọ PIN gị bụ onye aghụghọ, ọbụlagodi ma ha maara aha gị." },
          { objective: "O5", q: "Gịnị mere ị ga-eji kewaa ego azụmahịa na ego ezinụlọ?", options: ["Ka i wee hụ ma azụmahịa ahụ na-eweta uru n'ezie", "N'ihi na ụlọ akụ kwuru ya", "Ka ezinụlọ ghara iri nri", "Ọ dịghị mkpa"], answer: 0, why: "Ịgwakọta ha na-ezo ma azụmahịa ahụ na-enweta ego ma ọ bụ na-atụfu ego." },
          { objective: "O6", q: "Kedu foto kacha egosi ọrụ gị nke ọma?", options: ["E sere n'abalị na flash n'ime ụlọ ruru unyi", "Ọkara uwe ahụ n'azụ ahịa jupụtara n'ihe", "Ìhè ehihie, azụ dị larịị, uwe ahụ niile gbakwunyere foto dị nso", "Foto ọrụ onye ọzọ"], answer: 2, why: "Ìhè doro anya, azụ dị larịị na foto dị nso na-egosi ọma ọrụ gị." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ịgba Azụmahịa Ịkwa Akwa na Ejiji",
    questions: [
      { objective: "O1", q: "Ebee bụ ebe kacha nchebe maka agịga gbajiri agbaji?", options: ["N'ala", "N'igbe mechiri emechi", "N'akpa onye ahịa", "N'akpa uwe gị"], answer: 1, why: "Igbe mechiri emechi na-edebe agịga gbajiri agbaji n'ebe dị anya site n'ụkwụ, aka na ụmụaka." },
      { objective: "O1", q: "Ị hụrụ waya igwe bepụrụ ebe waya ime ya na-apụta. Gịnị ka ị ga-eme?", options: ["Kechie ya akwa ma gaa n'ihu ịkwa", "Gaa n'ihu na-eji ya nwayọọ", "Wepụ plọg ya ma mee ka a rụzie ma ọ bụ gbanwee waya ahụ tupu i jiri ya", "Hapụ onye na-amụ ọrụ ka o jiri ya kama"], answer: 2, why: "Waya mebiri emebi nwere ike ịma gị ọkụ ma ọ bụ malite ọkụ; kwụsị ma rụzie ya mbụ." },
      { objective: "O1", q: "Kedu omume na-echebe azụ gị na anya gị?", options: ["Ịkwa akwa n'akụkụ gbara ọchịchịrị", "Ịnọdụ ala ehulata awa isii", "Ịrụ ọrụ naanị n'abalị", "Ezigbo ìhè, azụ e kwadoro na ịgbatị ahụ kwa awa"], answer: 3, why: "Ìhè, ọnọdụ ahụ na ezumike na-egbochi nsogbu n'ogologo ụbọchị ịkwa akwa." },
      { objective: "O2", q: "Gịnị na-aga na kaadị ịtụ ọda?", options: ["Ụdị, ihe ọtụtụ, akwa, ọnụ ahịa, ego mbụ, ego fọdụrụ, ntụnye uwe na ụbọchị nnyefe", "Naanị aha onye ahịa", "Naanị ọnụ ahịa", "PIN ụlọ akụ onye ahịa"], answer: 0, why: "Kaadị zuru ezu na-edekọ nkwekọrịta ahụ niile; nọmba nzuzo anaghị abanye na ya mgbe ọ bụla." },
      { objective: "O2", q: "Gịnị mere ị ga-eji dee ụdị ọtụtụ (cm ma ọ bụ inch) na ihe ọtụtụ?", options: ["Ọ na-adị mma ilele", "Ka gị ma ọ bụ onye na-enyere aka ghara ịkpụ n'ọtụtụ na-ezighi ezi", "Onye ahịa na-arịọ ya", "Ọ dịghị mkpa"], answer: 1, why: "Ịgwakọta cm na inch na-emebi uwe." },
      { objective: "O2", q: "Onye ahịa sịrị na ọ kwụrụ karịa ihe kaadị ahụ gosiri. Gịnị kacha enyere aka?", options: ["Iti mkpu", "Ịjụ imecha uwe ahụ", "Kaadị e bịanyere aka na ihe i dere n'akwụkwọ ego gị maka ụbọchị ahụ", "Ịjụ onye agbata obi"], answer: 2, why: "Ndekọ e dere ede ma bịanye aka na-egosi ihe e kwụrụ na mgbe." },
      { objective: "O2", q: "Tupu onye ahịa aso ebi apụọ, gịnị ka ị ga-eme na kaadị ịtụ ọda?", options: ["Zoo ya", "Tụpụ ya mgbe i kpụchara akwa", "Dejupụta ya mgbe e mesịrị site n'ihe ị na-echeta", "Gụghachi ya, unu abụọ bịanye aka, ma nye mbipụta ma ọ bụ kwe ka ha see foto"], answer: 3, why: "Ịgụghachi na ikesa kaadị ahụ pụtara na unu abụọ kwekọrịtara n'otu nkọwa ahụ." },
      { objective: "O3", q: "Kedu akụkụ atọ mejupụtara ihe uwe na-efu?", options: ["Ngwa, oge gị na ụgwọ ọrụ ụbọchị niile", "Akwa, uru na ụgwọ ụgbọ", "Ụgwọ ụlọ, ekwentị na nri", "Naanị ngwa"], answer: 0, why: "Ngwa, oge na ụgwọ ọrụ ụbọchị niile bụ ezi ihe ọ na-efu; uru na-aga n'elu ya." },
      { objective: "O3", q: "Ihe ọ na-efu bụ GHS 200, ị gbakwunyere uru 25%. Gịnị bụ ọnụ ahịa? (Ọnụ ego ọmụmaatụ.)", options: ["GHS 225", "GHS 250", "GHS 275", "GHS 200"], answer: 1, why: "25% nke 200 bụ 50, ya mere ọnụ ahịa bụ 250." },
      { objective: "O3", q: "Gịnị mere ị ga-eji gụnye oge gị n'ihe ọ na-efu?", options: ["Ọ dịghị mkpa ma ọ bụrụ na ụlọ ahịa bụ nke gị", "Naanị oge ndị na-amụ ọrụ ka a na-agụ", "Awa ọrụ gị bara ego; na-enweghị ha ị na-arụ ọrụ n'efu", "Ndị ahịa na-arịọ ịhụ ya"], answer: 2, why: "Ọ bụrụ na oge gị adịghị n'ọnụ ahịa, azụmahịa ahụ anaghị akwụ gị ụgwọ." },
      { objective: "O3", q: "Ọnụ ahịa gị karịrị nke ahịa. Gịnị bụ ezigbo nzọụkwụ mbụ?", options: ["Bute ya n'okpuru ihe ọ na-efu gị", "Mechie azụmahịa ahụ", "Ṅomie ụdị uwe onye ọzọ na-akwa akwa", "Lelee ụdị uwe dị mfe ma ọ bụ ụzọ dị ọnụ ala, ma ọ bụ ndị ahịa na-akwanyere ọrụ ọma gị ugwu"], answer: 3, why: "Gbanwee otu i si akwa ya ma ọ bụ ndị ị na-erere tupu i belata ihe ọ na-efu gị." },
      { objective: "O4", q: "Gịnị bụ nzọụkwụ mbụ n'ịhazi izu gị?", options: ["Gụọ ezi awa ịkwa akwa gị", "Nara ọda ọ bụla bịara", "Zụtakwuo akwa", "Bipụta na soshal midia"], answer: 0, why: "Ị pụghị ịhazi ọda ruo mgbe ị maara awa ole ị nwere n'ezie." },
      { objective: "O4", q: "Gịnị mere ị ga-eji kpebie ụbọchị ikpeazụ maka ọda tupu Krismas ma ọ bụ Eid?", options: ["Iji kpasuo ndị ahịa iwe", "Ka i wee nara naanị ihe ị nwere ike imecha n'oge", "Iji bulie ọnụ ahịa", "Ọ bụ iwu"], answer: 1, why: "Ụbọchị ikpeazụ na-echebe nkwa gị n'izu ndị kachasị ọrụ." },
      { objective: "O4", q: "Ebee ka ntụnye uwe na-aga n'atụmatụ gị?", options: ["Mgbe ụbọchị nnyefe gafere", "Ọ dịghị mkpa", "Tupu imecha, ya na oge idozi ya", "N'otu awa ahụ e nyefere ya"], answer: 2, why: "Ntụnye uwe tupu imecha na-ahapụ oge iji mee mgbanwe tupu ụbọchị nnyefe." },
      { objective: "O5", q: "Kedu nke bụ ihe ịrịba ama aghụghọ mobile money?", options: ["Ego dị n'akaụntụ gị na-abawanye mgbe i rere ihe", "Nnata ego sitere na nọmba gọọmentị nke onye na-enye gị ọrụ", "Onye ahịa na-akwụ ego fọdụrụ", "Onye ị na-amaghị na-arịọ ka i kwụọ \"ụgwọ nnyefe\" tupu nnukwu ọda"], answer: 3, why: "Onye ị na-amaghị ịrịọ ụgwọ mbụ bụ ụzọ aghụghọ a na-ahụkarị." },
      { objective: "O5", q: "Ugboro ole ka ị ga-ede n'akwụkwọ ego gị?", options: ["N'otu ụbọchị ahụ e nyere ego mbụ, kwụọ ụgwọ ma ọ bụ zụta ihe", "Otu ugboro n'afọ", "Naanị mgbe nsogbu dị", "Mgbe ọ bụla; debe ya n'isi gị"], answer: 0, why: "Ide ya n'otu ụbọchị ahụ na-eme ka ndekọ ahụ zie ezi ma zuo ezu." },
      { objective: "O5", q: "Ị chọrọ idebanye aha azụmahịa gị na Nigeria. Ebee ka ị ga-elele usoro na ụgwọ ugbu a?", options: ["Otu nwoke nọ n'ọdụ ụgbọ ala", "Weebụsaịtị gọọmentị ma ọ bụ ọfịs Corporate Affairs Commission", "Peeji soshal midia ọ bụla", "Ndị ahịa gị"], answer: 1, why: "Ụlọ ndebanye aha gọọmentị na-enye iwu na ụgwọ ugbu a; ndị nnọchite adịgboroja dị ọtụtụ." },
      { objective: "O6", q: "Gịnị ka ndepụta ọnụ ahịa kwesịrị igosi?", options: ["Ọnụ ahịa ndị gị na ha na-asọ mpi", "Aha ndị ahịa", "Uwe bụ isi ị na-akwa ya na ọnụ ahịa dabere n'ịgbakọ gị", "Akwụkwọ ego gị"], answer: 2, why: "Ndepụta ọnụ ahịa e wuru site n'ịgbakọ gị na-agwa ndị ahịa ihe ha ga-atụ anya ya ma na-echebe uru gị." },
      { objective: "O6", q: "Data dị oke ọnụ maka ndị ahịa gị. Olee otu ị ga-esi bipụta?", options: ["Zipu vidiyo iri abụọ kwa ụbọchị", "Ebipụtala ihe ọ bụla", "Zipu foto ọ bụla i sere", "Kesaa otu foto doro anya ya na ọnụ ahịa na otu esi atụ ọda"], answer: 3, why: "Otu ezigbo foto nwere nkọwa doro anya na-arụ ọrụ ma na-echekwa data." },
      { objective: "O6", q: "Gịnị ka a na-agaghị egosi mgbe ọ bụla na post gbasara uwe onye ahịa?", options: ["Aha ya, nọmba ekwentị ya ma ọ bụ ihe ọtụtụ ya n'enweghị ikike ya", "Aha ụdị uwe ahụ", "Ọnụ ahịa", "Otu esi atụ ọda"], answer: 0, why: "Ozi nzuzo onye ahịa bụ nke ya; ekesala ya mgbe ọ bụla n'enweghị ikike ya." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [1, 3, 7, 9, 11, 14, 17, 19] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ebe ọrụ dị nchebe", objective: "O1", notYet: "E depụtaghị ihe egwu ọ bụla, ma ọ bụ e depụtara ihe egwu mana e dozighị nke ọ bụla.", meets: "A chọtara ma dozie opekata mpe ihe egwu atọ, dị ka igbe ntụtụ, ebe nchebe maka ígwè na ụzọ ije dị ọcha.", exceeds: "E depụtara ma dozie ihe egwu niile, ma kụziere ndị na-amụ ọrụ iwu ndị ahụ." },
      { name: "Kaadị ịtụ ọda", objective: "O2", notYet: "Kaadị ahụ enweghị ọnụ ahịa, ego mbụ, ego fọdụrụ ma ọ bụ ụbọchị nnyefe.", meets: "Kaadị ahụ nwere ụdị, ihe ọtụtụ na ụdị ọtụtụ, akwa, ọnụ ahịa, ego mbụ, ego fọdụrụ, ntụnye uwe na ụbọchị nnyefe, na ohere maka mbinye aka abụọ.", exceeds: "E jiri ya mee ihe na ezi onye ahịa, gụghachi ya ma kesaa ya dị ka mbipụta ma ọ bụ foto." },
      { name: "Ndepụta ọnụ ahịa e gbakọrọ", objective: "O3", notYet: "E ṅomiri ma ọ bụ chepụta ọnụ ahịa, na-enweghị ihe ọ na-efu e gbakọrọ.", meets: "Opekata mpe uwe ise, nke ọ bụla nwere ngwa, oge na ụgwọ ọrụ ụbọchị niile e gbakọrọ na ọnụ ahịa karịrị ihe ọ na-efu.", exceeds: "E tụnyekwara ọnụ ahịa ọ bụla na ahịa obodo, ya na ndetu maka ihe a ga-agbanwe ma ọ bụrụ na ọ dị elu nke ukwuu." },
      { name: "Atụmatụ izu", objective: "O4", notYet: "Atụmatụ ahụ nwere awa ọrụ karịrị awa dị, ma ọ bụ enweghị ụbọchị nnyefe.", meets: "E tinyere ọda dabere n'ụbọchị nnyefe n'ime ezi awa, ntụnye uwe tupu imecha, ma debe oge ụfọdụ efu.", exceeds: "Na-agụnye ụbọchị ikpeazụ maka ọda n'oge ọrụ juru eju na-abịa na otu a ga-esi gwa ndị ahịa." },
      { name: "Akwụkwọ ego", objective: "O5", notYet: "Enweghị ndekọ, ma ọ bụ e gwakọtara ego azụmahịa na ego ezinụlọ.", meets: "Otu izu ego mbụ, ụgwọ e kwụrụ na ego e mefuru nwere ego fọdụrụ ziri ezi, ma e dee iwu PIN ahụ.", exceeds: "E lelere ego fọdụrụ ahụ na ezi ego aka na mobile money, ma dee ụlọ ndebanye aha maka mba onye na-amụ ihe." },
      { name: "Igosi ọrụ ahụ", objective: "O6", notYet: "Enweghị foto, ma ọ bụ foto na-enweghị ọnụ ahịa ma ọ bụ ụzọ isi tụọ ọda.", meets: "Foto doro anya e sere n'ìhè ehihie nwere ihe ọ bụ, ọnụ ahịa, oge na otu esi atụ ọda, na-enweghị ozi nzuzo onye ahịa ọ bụla.", exceeds: "E tinyere ya na katalọgụ ma ọ bụ ndepụta ọnụ ahịa, ma dee ikike maka onye ahịa ọ bụla nọ na foto ahụ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe na-eji kaadị ịtụ ọda maka ọrụ ọ bụla n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe bulitere ma ọ bụ dozie opekata mpe otu ọnụ ahịa mgbe ha gbakọchara ya",
      "Ọda na-egbu oge na esemokwu na ndị ahịa belatara n'oge ọrụ juru eju na-esote",
      "Ndị na-amụ ihe debanyere aha azụmahịa ma ọ bụ mepee akaụntụ azụmahịa n'ime ọnwa 6"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Akwụkwọ ndetu, mkpịsị ode na igwe mgbakọ (ma ọ bụ igwe mgbakọ ekwentị)",
      "Teepụ ọtụtụ na ebe ọrụ onye na-amụ ihe n'onwe ya iji lelee",
      "Ekwentị nwere igwefoto maka post ikpeazụ (ekwentị nkịtị na foto e bipụtara na-arụkwa ọrụ)",
      "Ihe dị ka nkeji 60 ruo 90 n'ozuzu, n'oge nkenke: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Ọ na-arụ ọrụ nke ọma na otu ndị na-akwa akwa, otu ụmụ nwaanyị na ndị ntorobịa, ụlọ ọzụzụ aka ọrụ na mmemme ịmụ ọrụ; meenụ ule mbido ọnụ.",
      "Rịọ ndị na-amụ ihe ka ha bute ezi ọnụ ahịa ha na otu ezi ọda; ịgbakọ ihe uwe nke ha na-efu bụ ebe ọtụtụ na-achọpụta na ọnụ ahịa ha dị ala.",
      "Jiri ego obodo na ezumike (Krismas, Eid, Tabaski, Ista, oge agbamakwụkwọ) n'ọmụmaatụ ọ bụla.",
      "Arịọla ndị na-amụ ihe mgbe ọ bụla ka ha gosi otu ahụ PIN ha, ego dị n'akaụntụ ha ma ọ bụ nọmba nzuzo; jiri ọnụ ego ọmụmaatụ mee omume.",
      "Iwu na ụgwọ ndebanye aha na-agbanwe: lelee weebụsaịtị gọọmentị nke ụlọ ndebanye aha mba ahụ tupu nkuzi ma kesaa naanị ihe ọ kwuru.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
