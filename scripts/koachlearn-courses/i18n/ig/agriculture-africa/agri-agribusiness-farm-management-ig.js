"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-agribusiness-farm-management.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const CBK = { name: "Central Bank of Kenya, Ụlọ Akụ Etiti Kenya (lee ndepụta ụlọ ọrụ nwere ikike)", url: "https://www.centralbank.go.ke" };
const CBN = { name: "Central Bank of Nigeria, Ụlọ Akụ Etiti Naịjirịa (nchekwa ndị ahịa na ụlọ ọrụ nwere ikike)", url: "https://www.cbn.gov.ng" };
const FAO_CSA = { name: "FAO: Akwụkwọ ntụaka Climate-Smart Agriculture (otu esi achịkwa ihe egwu n'ugbo)", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };

module.exports = {
  id: "agri-agribusiness-farm-management-ig",
  lang: "ig",
  translationOf: "agri-agribusiness-farm-management",
  category: "Agriculture (Africa)",
  name: "Azụmahịa Ugbo na Nlekọta Ugbo",
  skills: "Idebe ndekọ ugbo dị mfe, Ịgbakọ gross margin nke ihe ubi ma ọ bụ anụ ọ bụla, Ịchọta ahịa na ọnụahịa ka mma, Ịchịkwa mbata na mpụta ego site na mobile money, Ịtụle ọnụ mbinye ego na ịchịkwa ihe egwu, Ide atụmatụ azụmahịa ugbo nwere otu peeji",
  outcome: "ịrụ ugbo gị dị ka azụmahịa: idebe ndekọ, ịmata ihe ubi ma ọ bụ anụ na-eweta uru kachasị n'otu acre, ịhazi ego gị n'afọ niile, ịtụle ma mbinye ego ọ bara uru, na ide atụmatụ azụmahịa ugbo nwere otu peeji ị nwere ike igosi otu nkwado (cooperative), onye na-agbazinye ego ma ọ bụ onye mmekọ.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị ọrụ ugbo nta, ndị ntorobịa na-arụ azụmahịa ugbo, otu ụmụ nwanyị na otu ndị ntorobịa, ndị isi otu nkwado (cooperative) na ndị ndụmọdụ ugbo (extension officers) na Kenya, Naịjirịa na Afrịka niile, ndị chọrọ ka ugbo ha mepụta ego karịa ma nwee obere ihe egwu.",
    "Isi 1 na-ele ugbo anya dị ka azụmahịa: idebe ndekọ dị mfe, ịgbakọ gross margin nke ọrụ ugbo ọ bụla (dị ka ọka, agwa, tomato, ọkụkọ ma ọ bụ ehi mmiri ara), na ịchọta ahịa na ọnụahịa ka mma. Isi 2 gbasara ego na uto: iji mobile money chịkwaa mbata na mpụta ego, ikpebi ma ị ga-agbazite ego na otu esi achịkwa ihe egwu, na ide atụmatụ azụmahịa nwere otu peeji.",
    "Ọmụmaatụ ego niile dị n'ihe ọmụmụ a bụ nọmba e mepụtara iji gosi usoro ahụ; jiri ọnụahịa obodo gị. Ihe ọmụmụ a anaghị enye ndụmọdụ itinye ego ma ọ bụ mbinye ego: tupu ị gbazite ego, tụnyere ihe e nyere gị, lelee na onye na-agbazinye ego nwere ikike, ma gwa onye ndụmọdụ i tụkwasịrị obi okwu, dị ka otu nkwado gị, SACCO ma ọ bụ onye ndụmọdụ ugbo. Nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ ahụ."
  ],
  finalTask: "Dee atụmatụ azụmahịa nwere otu peeji maka ugbo gị (ma ọ bụ ugbo ọmụmaatụ): ihe ị na-emepụta na ala ole; gross margin nke opekata mpe ọrụ ugbo abụọ (jiri ọnụahịa na mmefu obodo gị); ndị ị ga-erere na otu ị ga-esi ree; ndepụta mbata na mpụta ego nke ọnwa 12 na-egosi mgbe ego na-abata na mgbe ọ na-apụ; mbinye ego ọ bụla ị na-atụle, ya na ọnụ ya niile na otu ị ga-esi kwụghachi ya; ihe egwu gị ndị bụ isi na otu ị ga-esi belata ha; na ebumnuche atọ maka oge ọrụ ugbo na-abịa.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ọrụ ugbo nta, ndị ntorobịa na-arụ azụmahịa ugbo, otu ụmụ nwanyị na otu ndị ntorobịa, ndị isi otu nkwado na ndị ndụmọdụ ugbo na Kenya, Naịjirịa na Afrịka niile, ndị chọrọ ka ugbo ha mepụta ego karịa ma nwee obere ihe egwu.",
    startingPoint: "Ha maara ịkọ ihe ubi na ịzụ anụ, ma mara ihe dị ka ihe ha na-emefu na ihe ha na-enweta. Mmadụ ole na ole na-edebe ndekọ e dere ede, na-agbakọ gross margin, na-ahazi mbata na mpụta ego n'afọ niile ma ọ bụ na-atụnyere ọnụ mbinye ego niile.",
    gap: "N'enweghị ndekọ na nọmba, ndị ọrụ ugbo enweghị ike ịhụ ọrụ ugbo na-akwụ ụgwọ, ego na-agwụ ha n'ọnwa agụụ, ha na-ere n'ọnụahịa kachasị ala, ha nwekwara ike ịgbazite ego ha enweghị ike ịkwụghachi. Usoro azụmahịa dị mfe na-enyere ha aka inweta ego karịa, ịgbazite ego n'enweghị nsogbu, na igosi ndị na-agbazinye ego na ndị na-azụ ihe atụmatụ doro anya.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; ọtụtụ ndị na-amụ ihe na-eji Bekee dị ka asụsụ nke abụọ",
      "Ngwaọrụ: akwụkwọ ndetu ma ọ bụ ekwentị nkịtị; spreadsheet n'ekwentị na-enye aka ma ọ dịghị mkpa",
      "Mgbakọ: ịgbakọ ọnụ, iwepụ na ngụkọta dị mfe; nọmba ọmụmaatụ bụ ndị e mepụtara, ndị na-amụ ihe na-eji ọnụahịa obodo ha",
      "Nchekwa ego: ekesala PIN ma ọ bụ koodu mobile money, jiri naanị ndị na-agbazinye ego nwere ikike",
      "Ọnụahịa, ndị na-agbazinye ego na ndị na-achịkwa ha dị iche site na mba na oge: ndị na-amụ ihe na-elele n'otu nkwado, ndị ndụmọdụ ugbo na ndị gọọmentị na-achịkwa ha"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji akwụkwọ ndetu ma ọ bụ spreadsheet n'ekwentị", action: "idebe ndekọ ego na-abata n'ugbo, ego na-apụ na ihe a mepụtara", standard: "na-ede ihe ọ bụla n'otu ụbọchị ahụ, gụnyere ụbọchị ọrụ ezinụlọ" },
    { id: "O2", condition: "Mgbe e nyere gị mkpụrụ ihe ubi, ọnụahịa na mmefu na-agbanwe agbanwe", action: "ịgbakọ gross margin n'otu acre nke ọrụ ugbo abụọ ma tụnyere ha", standard: "na mgbakọ ziri ezi, na-atụlekwa ihe egwu na ọrụ aka, ọ bụghị naanị gross margin" },
    { id: "O3", condition: "Mgbe e nyere gị ihe ubi gị bụ isi", action: "ịtụnyere opekata mpe ụzọ atọ e si ere ya ma họrọ nke kacha mma", standard: "na ọnụahịa site n'ọtụtụ ndị na-azụ ihe, ogo nke onye ọ bụla chọrọ, na usoro nkwekọrịta ọ bụla e dere ede" },
    { id: "O4", condition: "Maka ọnwa 12 na-abịa", action: "ịhazi mbata na mpụta ego ugbo gị ma jiri mobile money n'enweghị nsogbu", standard: "na-akara ọnwa agụụ na atụmatụ maka nke ọ bụla, na-ekesaghịkwa PIN ma ọ bụ koodu mgbe ọ bụla" },
    { id: "O5", condition: "Mgbe e nyere gị ihe e ji agbazinye ego", action: "ịgbakọ ọnụ mbinye ego ahụ niile ma kpebie ma ọ dabara na mbata na mpụta ego gị", standard: "na-agbakwunye ụgwọ ọ bụla ma na-elele na onye na-agbazinye ego ahụ nwere ikike" },
    { id: "O6", condition: "Site n'iji ndekọ na nọmba gị", action: "ide atụmatụ azụmahịa ugbo nwere otu peeji, ya na ihe egwu gị ndị bụ isi na otu ị ga-esi belata ha", standard: "na akụkụ ọ bụla a chọrọ na ebumnuche atọ nwere nọmba" }
  ],
  chapters: [
    {
      name: "Isi 1: Ugbo dị ka azụmahịa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Idebe ndekọ ugbo dị mfe",
          minutes: 5,
          goal: "Malite ndekọ dị mfe nke ego na-abata n'ugbo, ego na-apụ na ihe a mepụtara.",
          text: [
            "Ị pụghị ịchịkwa ihe ị naghị atụ. Ọtụtụ ndị ọrụ ugbo maara ihe dị ka ihe ha na-emefu na ihe ha na-enweta, mana n'enweghị ndekọ, ọ na-esi ike ịhụ ihe ubi na-akwụ ụgwọ, ime atụmatụ, ma ọ bụ inweta mbinye ego ma ọ bụ nkwekọrịta onye na-azụ ihe.",
            "Debe ndekọ atọ dị mfe. Ego na-apụ: ụbọchị, ihe e ji ya mee (mkpụrụ, fatịlaịza, ọrụ aka, njem, dọkịta anụ), ihe ubi ma ọ bụ anụ ọ bụ maka ya, ego ole. Ego na-abata: ụbọchị, ihe i rere, ole, onye i rere ya, ego ole. Ihe a mepụtara: ụbọchị ịkụ ihe, ihe e tinyere, owuwe ihe ubi n'ala ọ bụla, akwa ma ọ bụ mmiri ara kwa ụbọchị. Akwụkwọ ndetu na-arụ ọrụ; spreadsheet n'ekwentị na-arụkwa. Akwụkwọ ndekọ mobile money (statement) na-enyekwa gị aka icheta.",
            "Dee ndekọ n'otu ụbọchị ahụ. Kewapụ ego ugbo na ego ezinụlọ n'ime ndekọ gị, ọbụlagodi ma ha si n'otu akpa, ma gụọkwa ụbọchị ọrụ ezinụlọ, n'ihi na oge gị bara uru."
          ],
          steps: ["Họrọ akwụkwọ ndetu ma ọ bụ spreadsheet n'ekwentị.", "Mee peeji ma ọ bụ shiit atọ: ego na-apụ, ego na-abata, ihe a mepụtara.", "Dee ihe ọ bụla n'otu ụbọchị ahụ: ụbọchị, ihe, ihe ubi ma ọ bụ anụ ọ bụ, ego ole.", "Jiri statement mobile money dejupụta ihe ị chefuru.", "Gụọ ụbọchị ọrụ ezinụlọ yana ọrụ aka a kwụrụ ụgwọ."],
          words: [["Ndekọ (record keeping)", "ide ihe na-eme n'ugbo: ego, ihe e tinyere na ihe a mepụtara."], ["Ọrụ ugbo (enterprise)", "otu ihe a na-eme n'ugbo, dị ka ọka, agwa, ọkụkọ ma ọ bụ ehi mmiri ara."]],
          slides: [
            { title: "Gịnị mere ndekọ?", bullets: ["Ịhụ ihe ubi na-akwụ ụgwọ", "Ịhazi oge ọrụ ugbo", "Inweta mbinye ego ma ọ bụ nkwekọrịta onye na-azụ ihe"] },
            { title: "Ndekọ atọ dị mfe", bullets: ["Ego na-apụ: ụbọchị, ihe, ọrụ ugbo ọ bụ, ego ole", "Ego na-abata: ụbọchị, ihe e rere, onye zụrụ ya, ego ole", "Ihe a mepụtara: ịkụ ihe, ihe e tinyere, owuwe ihe ubi, akwa, mmiri ara"] },
            { title: "Omume ọma", bullets: ["Dee ya n'otu ụbọchị ahụ", "Ego ugbo dị iche na ego ezinụlọ", "Gụọkwa ọrụ ezinụlọ"] }
          ],
          tryIt: "Malite ndekọ gị taa. Mee shiit atọ ahụ ma dejupụta opekata mpe ihe ise sitere n'ọnwa gara aga, site n'ihe i chetara na statement mobile money gị.",
          youCanNow: "idebe ndekọ dị mfe nke ego na-abata, ego na-apụ na ihe a mepụtara maka ọrụ ugbo ọ bụla.",
          quickCheck: [
            { objective: "O1", q: "Kedu ndekọ ugbo atọ dị mfe dị n'ihe ọmụmụ a?", options: ["Ego na-apụ, ego na-abata na ihe a mepụtara", "Ihu igwe, ọnụahịa na akụkọ", "Aha, ekwentị na adreesị", "Mkpụrụ, ngwa ọrụ na ụlọ"], answer: 0, why: "Ndekọ atọ ndị a na-egosi ihe ị na-emefu, ihe ị na-enweta na ihe ị na-emepụta." },
            { objective: "O1", q: "Ị chefuru ide fatịlaịza i zụrụ n'izu gara aga. Gịnị nwere ike inyere gị aka icheta?", options: ["Kọọ nọmba ọ bụla", "Statement mobile money gị", "Hapụ ya", "Gwa AI ka o mepụta ya"], answer: 1, why: "Statement mobile money na-enyere gị aka idejupụta ihe ị chefuru n'ime ndekọ gị." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Gross margin: kedu ihe ubi na-akwụ ụgwọ kachasị?",
          minutes: 6,
          goal: "Gbakọọ gross margin n'otu acre nke ọrụ ugbo abụọ ma tụnyere ha.",
          text: [
            "Gross margin = ego si n'otu ọrụ ugbo bata wepụ mmefu ndị bụ nke ya (mmefu na-agbanwe agbanwe: mkpụrụ, fatịlaịza, ọgwụ, ndị ọrụ e goro, akpa, njem). Gbakọọ ya n'otu acre (ma ọ bụ n'otu hectare, ma ọ bụ n'ọkụkọ 100) ka i nwee ike ịtụnyere ọrụ ugbo n'ụzọ ziri ezi.",
            "Ọmụmaatụ nwere nọmba e mepụtara na shilling Kenya, otu acre nke ọ bụla. Ọka: akpa 18 n'ọnụ 3,500 = ego 63,000 bata; mmefu 34,000 (mkpụrụ 3,000, fatịlaịza 14,000, ọrụ aka 12,000, ọgwụ 2,000, akpa na njem 3,000); gross margin 29,000. Agwa: akpa 5 n'ọnụ 9,000 = ego 45,000 bata; mmefu 18,000; gross margin 27,000. Gross margin abụọ ahụ dị nso, mana agwa na-agbakwunye nitrogen n'ala, a na-ewekwa ya ngwa ngwa. Jiri ọnụahịa nke gị: ha dị iche site n'ebe na oge.",
            "Tụnyerekwa gross margin n'otu ụbọchị ọrụ aka na ihe egwu: ihe ubi nwere gross margin dị elu mana nwere ohere dị elu ịda ada nwere ike ọ gaghị abụ nhọrọ kacha mma. Mmefu na-adịgide adịgide (ụgwọ ala, ngwa ọrụ, tank mmiri) bụ ngụkọta gross margin niile na-akwụ ha."
          ],
          steps: ["Họrọ ọrụ ugbo abụọ.", "Dee mkpụrụ ị tụrụ anya ya na ọnụahịa otu ihe iji nweta ego na-abata.", "Depụta mmefu na-agbanwe agbanwe nke ọ bụla.", "Gross margin = ego na-abata - mmefu na-agbanwe agbanwe, n'otu acre.", "Tụnyere gross margin, ọrụ aka na ihe egwu."],
          words: [["Gross margin", "ego si n'otu ọrụ ugbo bata wepụ mmefu ndị bụ nke ya."], ["Mmefu na-agbanwe agbanwe (variable costs)", "mmefu na-agbanwe dabere n'otú ị kụrụ, dị ka mkpụrụ, fatịlaịza na ọrụ aka."], ["Mmefu na-adịgide adịgide (fixed costs)", "mmefu na-anọ otu ihe ọ bụla ị kụrụ, dị ka ụgwọ ala ma ọ bụ tank mmiri."]],
          slides: [
            { title: "Usoro mgbakọ", bullets: ["Gross margin = ego na-abata - mmefu na-agbanwe agbanwe", "N'otu acre, hectare ma ọ bụ ọkụkọ 100"] },
            { title: "Ọmụmaatụ (KSh e mepụtara, acre 1)", bullets: ["Ọka: 63,000 - 34,000 = 29,000", "Agwa: 45,000 - 18,000 = 27,000", "Jiri ọnụahịa obodo gị"] },
            { title: "Tụnyerekwa", bullets: ["Gross margin n'otu ụbọchị ọrụ aka", "Ihe egwu ịda ada", "Gross margin niile na-akwụ mmefu na-adịgide adịgide"] }
          ],
          tryIt: "Gbakọọ gross margin n'otu acre maka ọrụ ugbo abụọ n'ugbo gị (ma ọ bụ abụọ ị na-atụle), jiri ọnụahịa obodo gị. Kedu nke dị elu, kedu nke nwere ihe egwu karịa?",
          youCanNow: "ịgbakọ na ịtụnyere gross margin iji kpebie ihe ị ga-akụ ma ọ bụ zụọ.",
          quickCheck: [
            { objective: "O2", q: "Kedu nke bụ mmefu na-adịgide adịgide, ọ bụghị mmefu na-agbanwe agbanwe?", options: ["Mkpụrụ", "Fatịlaịza", "Tank mmiri", "Ndị ọrụ e goro ịkpa ahịhịa"], answer: 2, why: "A na-akwụ ụgwọ tank mmiri ihe ọ bụla ị kụrụ, ya mere ọ bụ mmefu na-adịgide adịgide." },
            { objective: "O2", q: "Tomato na-ewebata 50,000 n'otu acre, mmefu na-agbanwe agbanwe ya bụ 30,000. Kedu gross margin ya?", options: ["80,000", "30,000", "50,000", "20,000"], answer: 3, why: "Gross margin bụ ego na-abata wepụ mmefu na-agbanwe agbanwe: 50,000 - 30,000 = 20,000." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịchọta ahịa na ọnụahịa ka mma",
          minutes: 5,
          goal: "Tụnyere opekata mpe ụzọ atọ e si ere ihe ubi ma họrọ nke kacha mma.",
          text: [
            "Ọnụahịa na-adakarị ozugbo a gbachara owuwe ihe ubi, mgbe onye ọ bụla na-ere, ma na-arị elu ọnwa ole na ole ka e mesịrị. Ire naanị gị, ntakịrị ntakịrị, nye onye ahịa mbụ bịara n'ọnụ ugbo dị mfe mana ọ na-akwụkarị ụgwọ kachasị ala. Tụnyere: ahịa obodo, ndị ahịa na-azụ ihe, otu nkwado na-achịkọta ihe ubi ọnụ, ndị na-emezi ihe ubi (processors) na ụlọ akwụkwọ ma ọ bụ họtel, nkwekọrịta ugbo (contract farming) na onye na-azụ ihe, na ebe ha dị, ụlọ nchekwa nwere asambodo na-echekwa ọka ma nwee ike inyere ndị ọrụ ugbo aka inweta mbinye ego site na ya.",
            "Chọta ozi ọnụahịa: jụọ ọtụtụ ndị na-azụ ihe, lelee ọrụ na-ekwu ọnụahịa ahịa na redio, ma gwa otu nkwado gị okwu. Mara ogo onye na-azụ ihe chọrọ (mmiri dị n'ime ya, nhazi ogo, nha, ịdị ọcha) ma mezuo ya: ihe ubi dị ọcha, kpọrọ nkụ ma a họchara ahọcha na-ewebata ego karịa ma na-adịte aka.",
            "Nkwekọrịta nwere ike inye gị ahịa doro anya, mana gụọ usoro ya: ọnụahịa ma ọ bụ otu a ga-esi kpebie ya, ọnụ ọgụgụ, ogo a chọrọ, ụbọchị nnyefe, onye na-akwụ ụgwọ njem, ụbọchị na ụzọ ịkwụ ụgwọ, na ihe ga-eme ma owuwe ihe ubi daa. Nweta ya n'akwụkwọ e dere ede, ma rịọ otu nkwado gị ma ọ bụ onye ndụmọdụ ugbo ka ha lelee ya."
          ],
          steps: ["Depụta opekata mpe ụzọ atọ e si ere ihe ubi gị.", "Nweta ọnụahịa site n'ọtụtụ ndị na-azụ ihe na ọrụ ozi ahịa.", "Mụta ogo onye na-azụ ihe ọ bụla chọrọ.", "Tụlee ịchịkọta ihe ubi ọnụ na otu ma ọ bụ ichekwa ya maka ọnụahịa ka mma.", "Gụọ usoro nkwekọrịta ọ bụla ma nweta ya n'akwụkwọ."],
          words: [["Ịchịkọta ọnụ (bulking)", "itinye ihe ubi ọtụtụ ndị ọrụ ugbo ọnụ iji ree ya n'ọtụtụ buru ibu n'ọnụahịa ka mma."], ["Nkwekọrịta ugbo (contract farming)", "nkwekọrịta ịkụ na ire ihe ubi nye onye na-azụ ihe n'usoro a kwadoro."], ["Ogo a chọrọ (quality standard)", "iwu onye na-azụ ihe maka mmiri dị n'ime ya, nha, ogo na ịdị ọcha."]],
          slides: [
            { title: "Oge dị mkpa", bullets: ["Ọnụahịa na-adịkarị ala ozugbo e wechara ihe ubi", "Ọ na-adị elu ọnwa ole na ole ka e mesịrị", "Nchekwa na ịchịkọta ọnụ nwere ike inye aka"] },
            { title: "Ụzọ e si ere", bullets: ["Ahịa, ndị ahịa, otu nkwado", "Ndị na-emezi ihe ubi, ụlọ akwụkwọ, họtel", "Nkwekọrịta, ụlọ nchekwa nwere asambodo"] },
            { title: "Nweta ego karịa", bullets: ["Tụnyere ọtụtụ ọnụahịa", "Mezuo ogo a chọrọ", "Gụọ nkwekọrịta; nweta ha n'akwụkwọ"] }
          ],
          tryIt: "Maka ihe ubi gị bụ isi, dee ụzọ atọ i nwere ike isi ree ya, ọnụahịa onye ọ bụla ga-akwụ taa (jụọ ma ọ bụ chee echiche), ogo nke ọ bụla chọrọ, na nke ị ga-ahọrọ na ihe mere i ji họrọ ya.",
          youCanNow: "ịtụnyere ahịa ma họrọ ụzọ kacha mma isi ree ihe ubi.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ ịchịkọta ọnụ (bulking)?", options: ["Ire ọnụ dị ka otu iji nweta ọtụtụ buru ibu", "Itinye mmiri n'ọka", "Ịzụ mkpụrụ n'obere akpa", "Ichekwa ọka n'ime ụlọ"], answer: 0, why: "Ịchịkọta ọnụ na otu nkwado ma ọ bụ otu na-eme ka ihe ubi buru ibu, nke nwere ike inweta ọnụahịa ka mma." },
            { objective: "O3", q: "Onye na-azụ ihe chọrọ agwa gị mana o kwughị mgbe ọ ga-akwụ ụgwọ. Gịnị ka ị ga-eme?", options: ["Nyefee ya ma nwee olileanya", "Rịọ ụbọchị na ụzọ ịkwụ ụgwọ n'akwụkwọ", "Ree ya ya agbanyeghị", "Belata ọnụahịa gị"], answer: 1, why: "Nkwekọrịta kwesịrị ịkọwa ụbọchị na ụzọ ịkwụ ụgwọ n'akwụkwọ e dere ede." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ugbo dị ka azụmahịa",
        questions: [
          { objective: "O1", q: "Gịnị mere a ga-eji debe ndekọ ugbo?", options: ["Ha bụ naanị maka ndị ọrụ ụtụ isi", "Ịhụ ọrụ ugbo na-akwụ ụgwọ, ime atụmatụ, na inweta mbinye ego ma ọ bụ nkwekọrịta", "Iji mefuo oge", "Ndekọ abaghị uru"], answer: 1, why: "Ndekọ na-agbanwe echiche efu ka ọ bụrụ mkpebi." },
          { objective: "O2", q: "Gross margin bụ:", options: ["Ala ugbo niile", "Ego na-abata wepụ mmefu na-agbanwe agbanwe nke otu ọrụ ugbo", "Ọnụahịa fatịlaịza", "Ego a gbaziri agbazi"], answer: 1, why: "Ọ na-egosi ihe ọrụ ugbo ọ bụla na-enweta tupu mmefu na-adịgide adịgide." },
          { objective: "O2", q: "Kedu nke bụ mmefu na-agbanwe agbanwe?", options: ["Mkpụrụ", "Ala nke gị", "Tank mmiri e wuworo", "Ụlọ gị"], answer: 0, why: "Mkpụrụ na-agbanwe dabere n'otú ị kụrụ." },
          { objective: "O3", q: "Onye na-azụ ihe na-enye gị nkwekọrịta. Gịnị ka ị ga-elele?", options: ["Naanị aha onye na-azụ ihe", "Ọ dịghị ihe; nkwekọrịta na-adị mma mgbe niile", "Naanị agba akpa ndị ahụ", "Ọnụahịa, ọnụ ọgụgụ, ogo, nnyefe, ịkwụ ụgwọ na ihe ga-eme ma owuwe ihe ubi daa"], answer: 3, why: "Usoro ya na-ekpebi ma nkwekọrịta ahụ ọ ga-enyere gị aka." },
          { objective: "O3", q: "Gịnị mere ọnụahịa ji adakarị ozugbo e wechara ihe ubi?", options: ["Ihe ubi na-ebelata", "Ndị na-azụ ihe na-akwụsị iri nri", "Ọtụtụ ndị ọrụ ugbo na-ere n'otu oge", "Gọọmentị na-edobe ha ala"], answer: 2, why: "Ihe ubi dị ukwuu n'oge owuwe na-eme ka ọnụahịa daa." }
        ]
      }
    },
    {
      name: "Isi 2: Ego, ihe egwu na uto",
      lessons: [
        {
          objectives: ["O4"],
          title: "Mobile money na mbata na mpụta ego",
          minutes: 5,
          goal: "Hazie mbata na mpụta ego nke ọnwa 12 ma jiri mobile money n'enweghị nsogbu maka ugbo.",
          text: [
            "Ọtụtụ ugbo nwere nsogbu ego ọ bụghị n'ihi na ha na-efu ego, kama n'ihi na ego na-abata otu ugboro ma ọ bụ ugboro abụọ n'afọ ma na-apụ n'afọ niile. Atụmatụ mbata na mpụta ego na-egosi, otu ọnwa n'otu oge, ego a tụrụ anya ka ọ bata na ka ọ pụọ, ka i nwee ike ịhụ ọnwa agụụ ka ọ na-abịa ma mee atụmatụ.",
            "Mobile money (dị ka M-Pesa na Kenya, na obere akpa ego n'ekwentị (mobile wallets) na app ụlọ akụ na Naịjirịa) na-eme ka ọ dị mfe ịkwụ ndị ọrụ na ndị na-ere ihe ụgwọ, ịnata ụgwọ site n'aka ndị na-azụ ihe, ịchekwa ego, na idebe ndekọ. Ụfọdụ ndị ọrụ ugbo na-edebe wallet ma ọ bụ akaụntụ dị iche maka ugbo ka ego ugbo na ego ezinụlọ ghara ịgwakọ.",
            "Chekwaa onwe gị: ekesala PIN gị ma ọ bụ koodu otu oge (one-time code) gị na onye ọ bụla, gụnyere ndị na-ekwu na ha si n'ụlọ ọrụ mobile money ma ọ bụ na ha bụ ndị na-azụ ihe; lelee aha tupu i zipu; ma kpachara anya maka ozi \"wrong transfer\" (ego e zitere n'ezighị ezi) na-atụghị anya nke na-arịọ ka i zighachi ego. Kọọrọ ụlọ ọrụ ahụ nsogbu site n'ụzọ ya gọọmentị kwadoro (official channels)."
          ],
          steps: ["Dee kọlụm 12 maka ọnwa.", "Dee ego ị tụrụ anya ka ọ bata kwa ọnwa (ire ihe, ego ndị ọzọ).", "Dee ego ị tụrụ anya ka ọ pụọ (ihe e tinyere n'ugbo, ọrụ aka, ụgwọ ụlọ akwụkwọ, nri).", "Chọta ọnwa ebe ego na-apụ karịrị nke na-abata, ma hazie nchekwa ego ma ọ bụ oge.", "Jiri wallet ma ọ bụ akaụntụ dị iche maka ego ugbo; ekesala PIN gị mgbe ọ bụla."],
          words: [["Mbata na mpụta ego (cash flow)", "oge ego na-abata na oge ọ na-apụ."], ["Ọnwa agụụ", "ọnwa ego ma ọ bụ nri na-agwụ, ọ na-abụkarị tupu owuwe ihe ubi."], ["PIN", "nọmba nzuzo na-echebe akaụntụ mobile money gị."]],
          slides: [
            { title: "Mbata na mpụta ego, ọ bụghị naanị uru", bullets: ["Ego na-abata otu ugboro ma ọ bụ ugboro abụọ n'afọ", "Ego na-apụ n'afọ niile", "Mee atụmatụ maka ọnwa agụụ"] },
            { title: "Mobile money na-enye aka", bullets: ["Ịkwụ ndị ọrụ na ndị na-ere ihe ụgwọ", "Ịnata ụgwọ ndị na-azụ ihe", "Ịchekwa ego na idebe ndekọ"] },
            { title: "Chekwaa onwe gị", bullets: ["Ekesala PIN ma ọ bụ koodu", "Lelee aha tupu i zipu", "Kpachara anya maka aghụghọ \"wrong transfer\""] }
          ],
          tryIt: "Dee atụmatụ mbata na mpụta ego gị nke ọnwa 12, ya na ego na-abata na ego na-apụ. Gbaa ọnwa agụụ gburugburu ma dee otu ụzọ ị ga-esi jikere maka nke ọ bụla (chekwaa ego site n'owuwe ihe ubi, kesaa oge ire ihe, obere ọrụ ugbo n'oge na-abụghị oge ọrụ ugbo).",
          youCanNow: "ịhazi mbata na mpụta ego ugbo gị n'afọ niile ma jiri mobile money n'enweghị nsogbu.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka atụmatụ mbata na mpụta ego nke ọnwa 12 na-enyere gị aka ịhụ?", options: ["Ihe ubi na-eto ogologo karịa", "Ihu igwe kwa ọnwa", "Ọnwa agụụ tupu ha abịa", "Ego ndị agbata obi gị na-enweta"], answer: 2, why: "Ọ na-egosi ọnwa ego na-apụ karịrị ego na-abata." },
            { objective: "O4", q: "Ụgwọ ụlọ akwụkwọ ga-eru n'ọnwa enweghị ego si n'ire ihe ubi. Kedu otu ụzọ isi jikere?", options: ["Mefuo ego owuwe ihe ubi niile n'otu oge", "Nara mbinye ego ọ bụla e zitere n'ozi ekwentị", "Leghara ya anya ruo mgbe ahụ", "Chekwaa akụkụ ego owuwe ihe ubi ma ọ bụ kesaa oge ire ihe"], answer: 3, why: "Ịchekwa ego site n'owuwe ihe ubi ma ọ bụ ikesa oge ire ihe na-ekpuchi ọnwa agụụ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Mbinye ego na ihe egwu: ịgbazite ego nke ọma",
          minutes: 6,
          goal: "Gbakọọ ọnụ mbinye ego niile ma kpebie ma ọ bara uru maka ugbo.",
          text: [
            "Mbinye ego nwere ike inye aka ịzụ ihe e tinyere n'ugbo ma ọ bụ ngwa ọrụ na-ewebata ego karịa ọnụ ha. O nwekwara ike ịghọ ọnyà. Tupu ị gbazite ego, jụọ: gịnị ka ego ahụ ga-azụ, ego ole ọzọ ka ọ ga-ewebata, na mgbe ole? Ị ga-enwe ike ịkwụghachi n'ụbọchị onye na-agbazinye ego kara aka, ọbụlagodi ma owuwe ihe ubi adịghị mma?",
            "Tụnyere ihe e nyere gị site na ngụkọta ego ị ga-akwụghachi, ọ bụghị naanị ọnụego ọmụrụ nwa (interest rate): gbakọọ ọmụrụ nwa niile, ụgwọ ndị ọzọ na ụgwọ inshọrans. Dịka ọmụmaatụ (nọmba e mepụtara), ịgbazite 20,000 na ịkwụghachi 2,000 kwa ọnwa ruo ọnwa 12 pụtara ịkwụghachi 24,000: mbinye ego ahụ na-efu 4,000. Lelee na ụbọchị ịkwụghachi dabara n'oge ego gị na-abata. Mbinye ego dijitalụ dị mkpụmkpụ nwere ike ịdị oke ọnụ mgbe ị gbakọrọ ụgwọ ya niile.",
            "Jiri ndị na-agbazinye ego nwere ikike: ụlọ akụ, ụlọ akụ microfinance, SACCO na otu nkwado, na ndị na-agbazinye ego dijitalụ ụlọ akụ etiti ma ọ bụ onye na-achịkwa ha kwadoro (na Kenya, Central Bank of Kenya na-ebipụta ndepụta ụlọ ọrụ nwere ikike; na Naịjirịa, Central Bank of Nigeria). Belata ihe egwu site na nchekwa ego, ịkụ ụdị ihe ubi dị iche iche, inshọrans ebe ọ dị, na ịgbazite naanị ihe atụmatụ ahụ chọrọ. Gwa onye ndụmọdụ i tụkwasịrị obi okwu tupu ị bịanye aka."
          ],
          steps: ["Dee ihe mbinye ego ahụ ga-azụ na ego ole ọzọ ọ kwesịrị iwebata.", "Gbakọọ ngụkọta ị ga-akwụghachi: ọmụrụ nwa, ụgwọ ndị ọzọ, inshọrans.", "Tụnyere ụbọchị ịkwụghachi na atụmatụ mbata na mpụta ego gị.", "Lelee na onye na-agbazinye ego nwere ikike.", "Mee atụmatụ maka oge ọrụ ugbo ọjọọ: nchekwa ego, inshọrans, obere mbinye ego.", "Jụọ onye ndụmọdụ i tụkwasịrị obi tupu ị bịanye aka."],
          words: [["Ọmụrụ nwa (interest)", "ọnụ ị na-akwụ iji gbazite ego."], ["Ngụkọta ọnụ mbinye ego (total cost of credit)", "ihe niile ị na-akwụghachi karịa ihe i gbaziri: ọmụrụ nwa na ụgwọ ndị ọzọ."], ["SACCO", "otu nkwado nchekwa ego na mbinye ego nke ndị otu ya nwe."], ["Ihe nkwado (collateral)", "ihe i kwere onye na-agbazinye ego nkwa ma ọ bụrụ na ị nweghị ike ịkwụghachi."]],
          slides: [
            { title: "Tupu ị gbazite ego", bullets: ["Gịnị ka ọ ga-azụ?", "Ego ole ọzọ ka ọ ga-ewebata, na mgbe ole?", "Ị nwere ike ịkwụghachi ma owuwe ihe ubi adịghị mma?"] },
            { title: "Tụnyere ngụkọta ya", bullets: ["Ọmụrụ nwa + ụgwọ ndị ọzọ + inshọrans", "Gbazite 20,000, kwụghachi 24,000: ọnụ ya 4,000", "Ịkwụghachi ọ dabara na mbata na mpụta ego gị?"] },
            { title: "Jiri ndị na-agbazinye ego nwere ikike", bullets: ["Ụlọ akụ, microfinance, SACCO, otu nkwado", "Kenya: ndepụta CBK; Naịjirịa: CBN", "Buru ụzọ gwa onye ndụmọdụ i tụkwasịrị obi okwu"] }
          ],
          sources: [CBK, CBN],
          tryIt: "Were ezi mbinye ego ma ọ bụ nke ọmụmaatụ e nyere gị. Dee ego i gbaziri, ịkwụghachi ọ bụla na ụgwọ ọ bụla, ngụkọta ego a kwụghachiri na ngụkọta ọnụ ya. Wee tụnyere ọnwa ịkwụghachi na atụmatụ mbata na mpụta ego gị ma dee ma ọ bara uru.",
          youCanNow: "ịgbakọ ezi ọnụ mbinye ego ma tụlee ma ịgbazite ego ọ bara uru maka ugbo gị.",
          quickCheck: [
            { objective: "O5", q: "Olee otu ị ga-esi tụnyere mbinye ego abụọ e nyere gị?", options: ["Site na ngụkọta ego ị ga-akwụghachi, gụnyere ụgwọ niile", "Site n'otu ego ahụ si eru ngwa ngwa", "Site naanị n'ọnụego ọmụrụ nwa", "Site na mgbasa ozi onye na-agbazinye ego"], answer: 0, why: "Ngụkọta ego a kwụghachiri na-egosi ezi ọnụ mbinye ego ọ bụla." },
            { objective: "O5", q: "Ịkwụghachi mbinye ego na-amalite n'ọnwa na-esote ịkụ ihe, tupu owuwe ihe ubi. Gịnị ka ị ga-eme?", options: ["Bịanye aka ngwa ngwa", "Tụnyere ya na mbata na mpụta ego gị ma rịọ ụbọchị dabara n'oge ego gị na-abata", "Gbazite ọzọ iji kpuchie ya", "Jiri PIN gị mee ka ọ gaa ngwa ngwa"], answer: 1, why: "Ụbọchị ịkwụghachi kwesịrị ịdaba n'ọnwa ego gị na-abata." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ide atụmatụ azụmahịa ugbo nwere otu peeji",
          minutes: 5,
          goal: "Dee atụmatụ azụmahịa nwere otu peeji i nwere ike igosi otu nkwado, onye na-agbazinye ego ma ọ bụ onye mmekọ.",
          text: [
            "Atụmatụ azụmahịa bụ akụkọ ugbo gị na nọmba na ebumnuche. Ndị na-agbazinye ego, otu nkwado, ndị na-azụ ihe na ndị mmekọ chọrọ ịhụ na ị maara ugbo gị, ahịa gị na ihe egwu gị. Otu peeji doro anya ka mma karịa peeji iri edoghị anya.",
            "Tinye: onye ị bụ na ugbo gị (ebe ọ dị, ala, ihe ị na-emepụta); ọrụ ugbo gị na gross margin ha; ahịa gị (onye na-azụ, otu, n'ọnụahịa ole); ndepụta mbata na mpụta ego gị; ihe ị chọrọ (ihe e tinyere n'ugbo, ngwa ọrụ, mbinye ego) na otu ọ ga-esi kwụghachi onwe ya; ihe egwu gị ndị bụ isi (ihu igwe, ụmụ ahụhụ, ọnụahịa) na ihe ị na-eme maka ha; na ebumnuche atọ nwere nọmba maka oge ọrụ ugbo na-abịa.",
            "Debe ndekọ na mgbakọ gị n'azụ atụmatụ ahụ, ka i nwee ike ịza ajụjụ. Melite ya kwa oge ọrụ ugbo site n'ihe mere n'ezie."
          ],
          steps: ["Nchịkọta ugbo: ebe ọ dị, ala, ọrụ ugbo.", "Gross margin nke ọrụ ugbo ọ bụla.", "Ahịa: ndị na-azụ ihe, ụzọ e si ere, ọnụahịa.", "Ndepụta mbata na mpụta ego na ihe ị chọrọ.", "Ihe egwu na otu ị na-esi achịkwa ha.", "Ebumnuche atọ nwere nọmba; melite ya kwa oge ọrụ ugbo."],
          words: [["Atụmatụ azụmahịa (business plan)", "obere akwụkwọ na-akọwa ihe azụmahịa na-eme, otu o si enweta ego, ihe ọ chọrọ na ebumnuche ya."], ["Ebumnuche (goal)", "ihe mgbaru ọsọ doro anya nwere nọmba na ụbọchị."]],
          slides: [
            { title: "Akụkọ ugbo gị na nọmba", bullets: ["Maka ndị na-agbazinye ego, otu nkwado, ndị na-azụ ihe, ndị mmekọ", "Otu peeji doro anya ka mma karịa peeji iri edoghị anya"] },
            { title: "Ihe na-abanye n'ime ya", bullets: ["Nchịkọta ugbo na ọrụ ugbo", "Gross margin na ahịa", "Mbata na mpụta ego, ihe ị chọrọ, ịkwụghachi"] },
            { title: "Mechie ya nke ọma", bullets: ["Ihe egwu na otu ị na-esi achịkwa ha", "Ebumnuche atọ nwere nọmba", "Melite ya kwa oge ọrụ ugbo"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ azụmahịa ugbo gị nwere otu peeji, ya na gross margin nke ọrụ ugbo abụọ, ahịa, mbata na mpụta ego nke ọnwa 12, mbinye ego ọ bụla na ngụkọta ọnụ ya, ihe egwu na otu ị ga-esi zaghachi ha, na ebumnuche atọ maka oge ọrụ ugbo na-abịa.",
          youCanNow: "ide atụmatụ azụmahịa ugbo nwere otu peeji nke ndekọ na nọmba nke gị kwadoro.",
          quickCheck: [
            { objective: "O6", q: "Gịnị mere i ji debe ndekọ na mgbakọ n'azụ atụmatụ gị nwere otu peeji?", options: ["Iji mee ka atụmatụ ahụ dị ogologo", "Ndị na-agbazinye ego anaghị agụ atụmatụ", "Ka i nwee ike ịza ajụjụ gbasara nọmba gị", "Iji zoo ezi ego ị na-enweta"], answer: 2, why: "Ndekọ na-akwado atụmatụ gị mgbe onye na-agbazinye ego ma ọ bụ onye na-azụ ihe jụrụ ajụjụ." },
            { objective: "O6", q: "Ọka gị emeghị nke ọma dị ka e mere atụmatụ n'oge ọrụ ugbo a. Gịnị ka ị ga-eme atụmatụ azụmahịa gị?", options: ["Tụfuo ya", "Debe nọmba ochie", "Gbanwee naanị ebumnuche", "Melite ya site n'ihe mere n'ezie"], answer: 3, why: "A na-emelite atụmatụ kwa oge ọrụ ugbo site n'ezi nsonaazụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ego, ihe egwu na uto",
        questions: [
          { objective: "O4", q: "Gịnị mere ugbo na-enweta uru ka nwere ike inwe ụkọ ego?", options: ["Uru abụghị eziokwu", "Ego na-abata otu ugboro ma ọ bụ ugboro abụọ n'afọ mana ọ na-apụ n'afọ niile", "Mobile money na-efu ya", "Ndekọ na-akpata ya"], answer: 1, why: "Oge mbata na mpụta ego, ọ bụghị naanị uru, na-ekpebi ma ị nwere ike ịkwụ ụgwọ gị." },
          { objective: "O4", q: "Onye na-akpọ oku si \"ụlọ ọrụ mobile money gị\" na-arịọ PIN gị. Ị kwesịrị:", options: ["Nye ya ngwa ngwa", "Nye ya ọkara ya", "Ekesala ya mgbe ọ bụla; kpọtụrụ ụlọ ọrụ ahụ site n'ụzọ gọọmentị kwadoro", "Zigara ha ya n'ozi ekwentị"], answer: 2, why: "Ezi ụlọ ọrụ anaghị arịọ PIN gị mgbe ọ bụla." },
          { objective: "O5", q: "Ị gbaziri 20,000 ma kwụghachi 2,000 kwa ọnwa ruo ọnwa 12. Mbinye ego ahụ na-efu:", options: ["4,000", "2,000", "20,000", "Ọ dịghị ihe"], answer: 0, why: "Ị na-akwụghachi 24,000, nke karịrị ihe i gbaziri ji 4,000." },
          { objective: "O5", q: "Tupu ị nara mbinye ego, lelee na onye na-agbazinye ego ahụ:", options: ["Bụ enyi onye agbata obi gị", "Na-eme ngwa ngwa", "Nọ na soshal midia", "Nwere ikike site n'ụlọ akụ etiti ma ọ bụ onye kwesịrị ịchịkwa ya"], answer: 3, why: "Ndị na-agbazinye ego nwere ikike na-agbaso iwu na-echebe ndị na-agbazite ego." },
          { objective: "O6", q: "Atụmatụ azụmahịa ugbo dị mma bụ:", options: ["Ogologo ma edoghị anya", "Otu peeji doro anya nke ndekọ na nọmba kwadoro", "Naanị ndepụta ọchịchọ", "Ihe nzuzo nye onye ọ bụla"], answer: 1, why: "Atụmatụ dị mkpụmkpụ ma doo anya dị mfe ime ma dịkwa mfe ịtụkwasị obi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Azụmahịa Ugbo na Nlekọta Ugbo",
    questions: [
      { objective: "O1", q: "Kedu nke bụ ndekọ ugbo dị mfe?", options: ["Ego na-apụ: ụbọchị, ihe, ọrụ ugbo, ego ole", "Foto igwe", "Ndepụta egwu", "Ọ dịghị ihe e dere ede"], answer: 0, why: "Ide ego na-apụ dabere n'ọrụ ugbo na-egosi mmefu." },
      { objective: "O1", q: "Olee mgbe i kwesịrị ide ndekọ?", options: ["Otu ugboro n'afọ", "N'otu ụbọchị ahụ", "Naanị mgbe a jụrụ gị", "Ọ dịghị mgbe"], answer: 1, why: "Ndekọ e dere n'otu ụbọchị ahụ na-ezi ezi." },
      { objective: "O1", q: "Gịnị mere a ga-eji gụọ ụbọchị ọrụ ezinụlọ?", options: ["Ha bụ n'efu", "Iji kwụọ ụtụ isi", "Oge gị bara uru ma na-emetụta ọrụ ugbo na-akwụ ụgwọ", "Ọ dịghị mkpa"], answer: 2, why: "Ọrụ a na-akwụghị ụgwọ ka bụ ezi mmefu oge." },
      { objective: "O2", q: "Ọrụ ugbo (enterprise) bụ:", options: ["Ụlọ akụ", "Traktọ", "Ahịa", "Otu ihe a na-eme n'ugbo, dị ka ọka ma ọ bụ ọkụkọ"], answer: 3, why: "A na-atụ ọrụ ugbo ọ bụla iche iche." },
      { objective: "O2", q: "Ego na-abata 63,000, mmefu na-agbanwe agbanwe 34,000. Gross margin bụ:", options: ["29,000", "34,000", "63,000", "97,000"], answer: 0, why: "63,000 - 34,000 = 29,000." },
      { objective: "O2", q: "Gịnị mere a ga-eji gbakọọ gross margin n'otu acre?", options: ["Iji mee ka nọmba buru ibu", "Iji tụnyere ọrụ ugbo n'ụzọ ziri ezi", "N'ihi na ndị na-azụ ihe na-ajụ", "Iji kwụọ ụgwọ ala"], answer: 1, why: "Otu nha ala na-eme ka ntụnyere ziri ezi." },
      { objective: "O2", q: "Ụgwọ ala ị na-akwụ ihe ọ bụla ị kụrụ bụ:", options: ["Mmefu na-agbanwe agbanwe", "Gross margin", "Mmefu na-adịgide adịgide", "Ire ihe"], answer: 2, why: "Mmefu na-adịgide adịgide anaghị agbanwe dabere n'otú ị kụrụ." },
      { objective: "O2", q: "Ihe ubi abụọ nwere gross margin yiri ibe ya, mana otu na-ada ada mgbe niile. I kwesịrị:", options: ["Leghara ihe egwu anya", "Kụọ naanị nke nwere ihe egwu", "Họrọ site n'agba", "Tụlee ihe egwu yana gross margin"], answer: 3, why: "Gross margin dị elu anaghị aba uru nke ukwuu ma ọ bụrụ na ịda ada nwere ike ime." },
      { objective: "O3", q: "Ịchịkọta ọnụ na otu nkwado na-enye aka n'ihi na:", options: ["Ọtụtụ buru ibu nwere ike inweta ọnụahịa ka mma", "Ihe ubi na-eto ngwa ngwa", "A chọghị ogo ọ bụla", "Ndị na-azụ ihe na-akwụ obere"], answer: 0, why: "Ndị na-azụ ihe na-akwụ karịa maka ihe buru ibu na-abịa mgbe niile." },
      { objective: "O3", q: "Ihe ubi dị ọcha, kpọrọ nkụ ma a họchara ahọcha:", options: ["Na-ewebata obere ego", "Na-ewebata ego karịa ma na-adịte aka", "Onye ọ bụla achọghị ya", "Na-emebi ngwa ngwa"], answer: 1, why: "Imezu ogo a chọrọ na-ebuli ọnụahịa na ogologo oge nchekwa." },
      { objective: "O3", q: "Tupu ị bịanye aka na nkwekọrịta ugbo (contract farming), i kwesịrị:", options: ["Bịanye aka ozugbo", "Kwekọrịta naanị n'ekwentị", "Gụọ usoro ya ma nweta ya n'akwụkwọ", "Gwa onye na-azụ ihe ka o kpebie ihe niile"], answer: 2, why: "Usoro e dere ede na-echebe gị." },
      { objective: "O4", q: "Atụmatụ mbata na mpụta ego na-egosi:", options: ["Naanị ngụkọta uru", "Ụdị ihe ubi", "Mmiri ozuzo", "Ego na-abata na ego na-apụ otu ọnwa n'otu oge"], answer: 3, why: "Oge ego na-abata na-apụ bụ ihe mbata na mpụta ego pụtara." },
      { objective: "O4", q: "Ọnwa agụụ bụ:", options: ["Ọnwa ego ma ọ bụ nri na-agwụ", "Ọnwa owuwe ihe ubi", "Ezumike", "Ụbọchị ahịa"], answer: 0, why: "Ime atụmatụ maka ha na-egbochi mbinye ego ma ọ bụ ire ihe n'oge nsogbu." },
      { objective: "O4", q: "Otu uru wallet ma ọ bụ akaụntụ ugbo dị iche na-enye bụ:", options: ["Ọnụahịa dị elu", "Ego ugbo na ego ezinụlọ anaghị agwakọ", "Ọ dịghị mkpa ndekọ", "Fatịlaịza n'efu"], answer: 1, why: "Ikewapụ ha na-egosi ihe ugbo na-enweta na ihe ọ na-emefu n'ezie." },
      { objective: "O4", q: "Ozi na-ekwu na ị natara ego n'ezighị ezi ma na-arịọ ka i zighachi ya. I kwesịrị:", options: ["Zighachi ya ozugbo", "Zipu okpukpu abụọ", "Lelee ezi ego dị n'akaụntụ gị na statement gị, ma kpọtụrụ ụlọ ọrụ ahụ site n'ụzọ gọọmentị kwadoro", "Kesaa PIN gị"], answer: 2, why: "Ozi \"wrong transfer\" adịghị adị bụ aghụghọ a na-ahụkarị." },
      { objective: "O5", q: "Iji tụnyere mbinye ego, lee:", options: ["Naanị mgbasa ozi", "Naanị ọnụego ọmụrụ nwa", "Naanị otu e si akwụ ya ngwa ngwa", "Ngụkọta ego ị ga-akwụghachi, gụnyere ụgwọ niile"], answer: 3, why: "Ụgwọ ndị ọzọ nwere ike ime ka mbinye ego nwere obere ọnụego dị oke ọnụ." },
      { objective: "O5", q: "SACCO bụ:", options: ["Otu nkwado nchekwa ego na mbinye ego nke ndị otu nwe", "Ụmụ ahụhụ na-emebi ihe ubi", "Ụtụ isi gọọmentị", "Drone"], answer: 0, why: "SACCO na-achịkọta ego ndị otu chekwara ma na-agbazinye ndị otu ya." },
      { objective: "O5", q: "Ụbọchị ịkwụghachi mbinye ego kwesịrị:", options: ["Ka a leghara ha anya", "Ịdaba n'ọnwa ego gị na-abata", "Ịbụ kwa izu mgbe niile", "Ka e kpebie ha mgbe i mefuchara ego ahụ"], answer: 1, why: "Ime ka ịkwụghachi daba n'oge ego na-abata na-egbochi ịdaba n'ụgwọ." },
      { objective: "O6", q: "Kedu nke na-ebelata ihe egwu ugbo?", options: ["Ịgbazite ego dị ukwuu dị ka o kwere mee", "Ịkụ naanị otu ihe ubi", "Nchekwa ego, ụdị ihe ubi dị iche iche na inshọrans ebe ọ dị", "Ire ihe niile n'oge owuwe"], answer: 2, why: "Ikesa ihe egwu na-echebe ugbo n'oge ọrụ ugbo ọjọọ." },
      { objective: "O6", q: "A ga-emelite atụmatụ azụmahịa:", options: ["Ọ dịghị mgbe", "Kwa afọ iri", "Naanị mgbe onye na-agbazinye ego jụrụ", "Kwa oge ọrụ ugbo site n'ihe mere n'ezie"], answer: 3, why: "Imelite ya na-eme ka atụmatụ ahụ bụrụ eziokwu ma baa uru." }
    ]
  },
  // ---- ADDIE: Ntụle ----
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 4, 7, 8, 11, 14, 15, 17, 19] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Gross margin", objective: "O2", notYet: "Ọrụ ugbo erughị abụọ, ma ọ bụ mperi na mgbakọ.", meets: "Gross margin n'otu acre maka ọrụ ugbo abụọ, na ọnụahịa obodo na mgbakọ ziri ezi.", exceeds: "Na-atụnyerekwa ọrụ aka na ihe egwu yana gross margin." },
      { name: "Ahịa", objective: "O3", notYet: "Ọ dịghị onye na-azụ ihe ma ọ bụ ụzọ e si ere a kpọrọ aha.", meets: "Na-akpọ aha onye ga-azụ, otu, na n'ọnụahịa ole.", exceeds: "Na-atụnyere opekata mpe ụzọ atọ e si ere na ogo nke ọ bụla chọrọ." },
      { name: "Mbata na mpụta ego", objective: "O4", notYet: "Ọ dịghị ndepụta otu ọnwa n'otu oge.", meets: "Ndepụta ọnwa 12 nke ego na-abata na ego na-apụ, a karakwara ọnwa agụụ.", exceeds: "Atụmatụ maka ọnwa agụụ ọ bụla." },
      { name: "Mbinye ego", objective: "O5", notYet: "E depụtara mbinye ego n'enweghị ngụkọta ọnụ ya ma ọ bụ atụmatụ ịkwụghachi.", meets: "Mbinye ego ọ bụla na-egosi ngụkọta a kwụghachiri, ngụkọta ọnụ ya na otu ịkwụghachi si daba na mbata na mpụta ego, ma ọ bụ na a chọghị mbinye ego.", exceeds: "Na-akpọ aha onye na-agbazinye ego nwere ikike na atụmatụ maka oge ọrụ ugbo ọjọọ." },
      { name: "Ihe egwu na ebumnuche", objective: "O6", notYet: "Ọ dịghị ihe egwu ma ọ bụ ebumnuche.", meets: "Ihe egwu ndị bụ isi na otu esi belata ha, na ebumnuche atọ nwere nọmba.", exceeds: "O ruru n'otu peeji doro anya nke ndekọ kwadoro." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị ọrụ ugbo na-edebe ndekọ opekata mpe ọnwa atọ (nnyocha nsochi)",
      "Ego ugbo ma ọ bụ gross margin e tụnyere na nke oge ọrụ ugbo gara aga, dị ka ndị ọrụ ugbo ma ọ bụ ndị mmekọ kọrọ",
      "Ndị ọrụ ugbo sonyere n'otu nkwado, bịanyere aka na nkwekọrịta e dere ede na onye na-azụ ihe, ma ọ bụ nwetara mbinye ego site n'aka onye nwere ikike ya na atụmatụ"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Akwụkwọ ndetu na mkpịsị ode, ma ọ bụ spreadsheet n'ekwentị",
      "Ihe mgbakọ (calculator) (ekwentị nkịtị nwere otu)",
      "Ọnụahịa na mmefu obodo nke onye na-amụ ihe n'onwe ya, ma ọ bụ ọmụmaatụ ihe ọmụmụ a",
      "Statement mobile money ma ọ bụrụ na onye na-amụ ihe nwere otu",
      "Ihe dị ka nkeji 60 nke nkuzi, yana oge ịchịkọta ọnụahịa na ide atụmatụ ahụ"
    ],
    facilitatorNotes: [
      "Gbakọọnụ otu gross margin ọnụ site n'ezi ọnụahịa obodo nke otu ahụ tupu ndị na-amụ ihe emee nke ha.",
      "Chetara ndị na-amụ ihe na nọmba dị n'ihe ọmụmụ a bụ ndị e mepụtara; ọnụahịa dị iche site n'ebe na oge.",
      "Kwusie ike na nchekwa mobile money: ekesala PIN ma ọ bụ koodu mgbe ọ bụla, kọọ nsogbu naanị site n'ụzọ gọọmentị kwadoro.",
      "Kpọọ onye ọrụ otu nkwado ma ọ bụ SACCO ka ọ kọwaa mbinye ego nwere ikike; enyela ndụmọdụ mbinye ego n'onwe gị.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
