"use strict";

// Koach Learn course (Igbo translation of shared/manufacturing-technician.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.
// Ihe ọmụmụ nkwadebe: ọ naghị enye asambodo; MSSC na-enye asambodo CPT, a na-amụtakwa ọrụ igwe n'ihu onye nkuzi ruru eru.

const MSSC_CPT = { name: "MSSC: Certified Production Technician (CPT 4.0)", url: "https://www.msscusa.org/certification/production-certification-cpt/" };
const MSSC_COURSES = { name: "MSSC: CPT 4.0 modules and courses", url: "https://www.msscusa.org/certified-production-technician-cpt-courses/" };
const OSHA_LOTO = { name: "OSHA: Control of Hazardous Energy (Lockout/Tagout)", url: "https://www.osha.gov/control-hazardous-energy" };
const OSHA_147 = { name: "OSHA 29 CFR 1910.147: The control of hazardous energy (lockout/tagout)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147" };
const OSHA_GUARD = { name: "OSHA: Machine Guarding", url: "https://www.osha.gov/machine-guarding" };
const OSHA_212 = { name: "OSHA 29 CFR 1910.212: General requirements for all machines (guarding)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.212" };
const DOL_YOUTH = { name: "U.S. Department of Labor: Jobs that are off-limits to workers under 18", url: "https://www.dol.gov/agencies/whd/child-labor/what-jobs-are-off-limits" };
const APPRENTICE = { name: "Apprenticeship.gov: Apprenticeship Finder (U.S. Department of Labor)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" };

module.exports = {
  id: "manufacturing-technician-ig",
  lang: "ig",
  translationOf: "manufacturing-technician",
  category: "Workforce Development",
  name: "Ntọala Onye Teknụzụ Ụlọ Ọrụ Mmepụta",
  skills: "Ịhụ ihe egwu igwe na iji lockout/tagout, Ịtụ nha akụkụ ma tụnyere ya na tolerance, Inyocha ịdị mma na ịchọta isi ihe kpatara nsogbu, Iji 5S, lean na nlekọta igwe kwa ụbọchị, Ịhazi atụmatụ maka MSSC CPT 4.0",
  outcome: "ịhụ ihe egwu dị n'igwe ma họrọ ihe nchebe ziri ezi, ịtụ nha akụkụ ma kpebie ma ọ dị n'ime tolerance, ide ntụpọ (defects) ma chọta isi ihe kpatara ya, iji 5S na nyocha igwe kwa ụbọchị n'ebe ọrụ, na ide atụmatụ nwere ụbọchị iji kwadebe maka ule MSSC Certified Production Technician (CPT 4.0) na ọrụ mmepụta mbụ gị.",
  about: [
    "Ụlọ ọrụ mmepụta (factory) na-eme ụgbọ ala, nri, ọgwụ, arịa ụlọ, akụkụ igwe na ngwá eletrọnịkị, ha na-ewekwa ndị ọrụ mmepụta, ndị na-arụ igwe (machine operators) na ndị teknụzụ n'ọrụ. Ihe ọmụmụ a bụ maka ndị na-achọ ọrụ, ndị ntorobịa, ndị agha mbụ (veterans), ndị si n'ụlọ mkpọrọ na-alọta na onye ọ bụla chọrọ ịmalite ọrụ n'ime ụlọ ọrụ mmepụta.",
    "Ị ga-amụta akụkụ anọ ọrụ mmepụta mbụ na Certified Production Technician (CPT 4.0) nke Manufacturing Skill Standards Council (MSSC, òtù na-enye ule na asambodo a na America) dabere na ha: nchebe, ịdị mma na ịtụ nha, mmepụta, na nghọta nlekọta igwe. Ị ga-eme omume n'akwụkwọ na rula n'ụlọ.",
    "Ihe dị mkpa: ihe ọmụmụ a na-akwado gị; ọ naghị enye gị CPT 4.0 ma ọ bụ asambodo ọ bụla ọzọ. MSSC na-enye ule ma na-enye asambodo. A na-amụta ịrụ igwe, lockout/tagout na iji ngwá ọtụtụ nha dị nkenke n'ihu onye nkuzi ruru eru ma ọ bụ onye nkuzi ụlọ ọrụ, ya na ezi ihe nchebe. Emela omume n'ezi igwe naanị gị.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ọ na-ejedebekwa n'ọrụ \"Nwalee ya ugbu a\". E nwere obere nnwale mgbe nkuzi ọ bụla gwụrụ, nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee ngwugwu njikere onye teknụzụ mmepụta: ndepụta ihe egwu na ihe nchebe maka otu igwe, akwụkwọ ndekọ nha nwere mkpebi n'ime ma ọ bụ n'èzí tolerance maka akụkụ omume ise, 5 Whys maka otu ntụpọ omume, atụmatụ 5S na nyocha kwa ụbọchị maka otu ebe ọrụ, na atụmatụ nwere ụbọchị iji kwadebe maka ule CPT 4.0 anọ, ya na otu ahịrị eziokwu maka résumé gị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye na ndị ntorobịa na-achọ ọrụ mmepụta, ịrụ igwe, ịchịkọta akụkụ (assembler) ma ọ bụ ọrụ teknụzụ: ndị na-achọ ọrụ, ndị agha mbụ, ndị si n'ụlọ mkpọrọ na-alọta, ndị kwagara na mba ọzọ na ndị ntorobịa na-agụcha akwụkwọ. Ụfọdụ arụọla n'ụlọ nkwakọba ngwá ahịa (warehouse) ma ọ bụ n'ahịrị mmepụta; ọtụtụ amụbeghị ihe gbasara mmepụta.",
    startingPoint: "Ha nwere ike ịgbaso nzọụkwụ e dere ede ma mee mgbakọ ọnụọgụ zuru ezu dị mfe. Ọtụtụ ejibeghị caliper, agụbeghị tolerance, ejibeghị lockout/tagout, anụbeghịkwa maka 5S, lean ma ọ bụ nchọpụta isi ihe kpatara nsogbu. Ọtụtụ amaghị na e nwere asambodo ụlọ ọrụ maka ọrụ mmepụta mbụ.",
    gap: "Ndị were mmadụ n'ọrụ chọrọ ndị ọrụ ọhụrụ na-arụ ọrụ n'enweghị nsogbu n'akụkụ igwe, na-atụ nha nke ọma, na-ejide akụkụ ọjọọ ma na-edozi ebe ọrụ ha. Mmerụ ahụ igwe nwere ike ịdị njọ, dị ka igbubi akụkụ ahụ, ya mere omume nchebe ga-ebu ụzọ. Ndị na-amụ ihe chọrọ ihe ọmụma ahụ na ụzọ doro anya gaa n'asambodo a ma ama dị ka MSSC CPT 4.0, ka ha nwee ike ịsọ mpi maka ọrụ mmepụta na apprenticeship.",
    constraints: [
      "Ọkwa ịgụ ihe: okwu dị mfe na ahịrịokwu dị mkpirikpi; MSSC na-atụ aro ihe dị ka mgbakọ klaasị 9 na ịgụ ihe klaasị 10 maka CPT 4.0, ya mere a na-egosi mgbakọ nzọụkwụ na nzọụkwụ",
      "Enweghị ịrụ igwe n'ihe ọmụmụ a: omume aka na-eme naanị n'ihu onye nkuzi ruru eru ma ọ bụ onye nkuzi ụlọ ọrụ",
      "Iwu gọọmentị etiti (federal) gbasara ọrụ ụmụaka machibidoro ndị ọrụ na-erubeghị afọ 18 ọtụtụ igwe ụlọ ọrụ",
      "Ngwá: ekwentị ma ọ bụ kọmputa ọbá akwụkwọ maka peeji gọọmentị; rula ma ọ bụ teepu nha na akwụkwọ n'ụlọ",
      "Ihe a chọrọ, ụgwọ na ụbọchị ule CPT 4.0 na-agbanwe: ndị na-amụ ihe na-elele msscusa.org ma ọ bụ ebe ule"
    ],
    prerequisites: "Mgbakọ ọnụọgụ zuru ezu dị mfe. \"Everyday Math\" na \"Ihe Ndabere nke Nchekwa n'Ebe Ọrụ (OSHA)\" bụ ihe ọmụmụ ndị ọzọ na-enyere aka."
  },
  // ---- ADDIE: Nhazi ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị nkọwa ma ọ bụ foto igwe na otu ọrụ", action: "ịchọpụta ihe egwu ma họrọ ihe nchebe ziri ezi, gụnyere lockout/tagout", standard: "na-akpọ aha opekata mpe ihe egwu 3 na ihe nchebe ziri ezi maka nke ọ bụla" },
    { id: "O2", condition: "Mgbe e nyere gị ọgụgụ rula ma ọ bụ caliper na tolerance akụkụ", action: "ịtụ nha akụkụ ma kpebie ma ọ dị n'ime tolerance", standard: "na-enweta opekata mpe mkpebi omume 4 n'ime 5 ziri ezi" },
    { id: "O3", condition: "Mgbe e nyere gị nsogbu ịdị mma n'ahịrị mmepụta", action: "ide ntụpọ ndị ahụ ma chọta isi ihe nwere ike ịkpata ya site na 5 Whys", standard: "na-ekewapụ akụkụ ọjọọ ma rute n'ihe kpatara ya nke a ga-edozi" },
    { id: "O4", condition: "Mgbe e nyere gị ebe ọrụ na otu igwe", action: "iji 5S na nyocha onye ọrụ kwa ụbọchị n'ebe ahụ", standard: "na-ede otu omume maka S ọ bụla n'ime 5 na opekata mpe ihe nyocha kwa ụbọchị 5" },
    { id: "O5", condition: "Site na peeji MSSC CPT 4.0 na nhọrọ ọzụzụ dị nso gị", action: "ide atụmatụ nwere ụbọchị iji kwadebe maka CPT 4.0 na ọrụ mmepụta mbụ", standard: "nke na-akpọ aha module anọ a chọrọ, ụbọchị ule a ga-akwado, na otu ahịrị résumé eziokwu" }
  ],
  chapters: [
    {
      name: "Isi 1: Ọrụ ahụ, nchebe na ịtụ nha",
      lessons: [
        {
          title: "Ọrụ onye teknụzụ mmepụta na CPT 4.0",
          objectives: ["O5"],
          minutes: 5,
          goal: "Kọwaa ihe onye teknụzụ mmepụta na-eme na asambodo na-egosi ndị were mmadụ n'ọrụ na ị dị njikere.",
          text: [
            "Onye teknụzụ mmepụta na-enyere aka ime ngwá ahịa n'enweghị nsogbu na nke ọma. N'oge ọrụ nkịtị, ị nwere ike ịhazi ma ọ bụ ịrụ igwe, ịchịkọta akụkụ, inyocha akụkụ site na ngwá ọtụtụ nha, ide ọnụọgụ n'akwụkwọ ma ọ bụ na ihuenyo, idebe ebe ọrụ gị ọcha, na ịkọ nsogbu igwe ma ọ bụ akụkụ.",
            "Ọtụtụ ndị were mmadụ n'ọrụ na-achọ Certified Production Technician (CPT 4.0) nke Manufacturing Skill Standards Council (MSSC). O nwere ule ise: Safety; Quality Practices & Measurement; Manufacturing Process & Production; Maintenance Awareness; na Green Production. Ị na-enweta asambodo maka nke ọ bụla ị gafere. Anọ mbụ ọnụ na-enye CPT 4.0 zuru ezu. Green Production bụ nhọrọ.",
            "MSSC kwuru na ule ndị ahụ bụ ajụjụ nhọrọ (multiple choice), a pụkwara ịme ha n'ịntanetị ma ọ bụ n'akwụkwọ. A na-enye ọzụzụ n'ụlọ akwụkwọ community college, mmemme ọrụ (workforce programs) na ụfọdụ ụlọ akwụkwọ sekọndrị. MSSC nwekwara nhọrọ omume aka a na-akpọ CPT+ with Skill Boss. Lelee msscusa.org maka ụgwọ, ebe ule na ihe a chọrọ ugbu a; ihe ọmụmụ a anaghị enye asambodo ahụ.",
            "Ụzọ ndị ọzọ isi banye n'ọrụ a: registered apprenticeship, ebe ị na-akpata ego mgbe ị na-amụ ihe (chọọ na apprenticeship.gov), na ọrụ ebe onye were gị n'ọrụ na-azụ gị. Ndị agha mbụ rụrụ ọrụ nlekọta ma ọ bụ ọrụ ngwá agha n'ime ndị agha na-enwekarị nka ha nwere ike iji rụọ ọrụ a."
          ],
          words: [["Production technician", "onye ọrụ na-arụ, na-ahazi, na-enyocha ma na-elekọta ngwá na-eme ngwá ahịa."], ["MSSC", "Manufacturing Skill Standards Council, òtù na-enye ule na asambodo CPT."], ["Assessment", "ule na-egosi ma ị maara ihe ahụ."], ["Module", "otu isiokwu nke CPT, nwere ule na asambodo nke ya."], ["Registered apprenticeship", "ọrụ a na-akwụ ụgwọ nwere ọzụzụ na onye ndụmọdụ, nke U.S. Department of Labor ma ọ bụ steeti kwadoro."]],
          slides: [
            { title: "Otu ọrụ ahụ si dị", bullets: ["Ịhazi ma ọ bụ ịrụ igwe, ịchịkọta akụkụ", "Ịtụ nha ma nyochaa akụkụ, ide ọnụọgụ", "Idebe ebe ọrụ ọcha, ịkọ nsogbu"] },
            { title: "MSSC CPT 4.0", bullets: ["Safety", "Quality Practices & Measurement", "Manufacturing Process & Production", "Maintenance Awareness"] },
            { title: "Otu o si arụ ọrụ", bullets: ["Asambodo maka module ọ bụla ị gafere", "Module anọ mbụ = CPT 4.0 zuru ezu", "Green Production bụ nhọrọ"] },
            { title: "Ụzọ ndị ọzọ isi banye", bullets: ["Registered apprenticeship: apprenticeship.gov", "Ndị were mmadụ n'ọrụ na-azụ ndị ọrụ ọhụrụ", "Ihe ọmụmụ a na-akwado gị; MSSC na-enye asambodo"] }
          ],
          sources: [MSSC_CPT, MSSC_COURSES, APPRENTICE],
          tryIt: "N'akwụkwọ, dee module CPT 4.0 anọ ị chọrọ maka asambodo zuru ezu. N'akụkụ nke ọ bụla, dee otu ihe ị maraworị gbasara ya na otu ajụjụ ị nwere. Mgbe ahụ, meghee msscusa.org ma dee ebe ị ga-achọ ebe ule.",
          youCanNow: "ịkọwa ihe onye teknụzụ mmepụta na-eme ma kpọọ aha module CPT 4.0 anọ ị chọrọ maka asambodo zuru ezu.",
          quickCheck: [
            { objective: "O5", q: "Module CPT 4.0 ole ka ị ga-agafe maka asambodo zuru ezu?", options: ["Abụọ", "Ise niile, gụnyere Green Production", "Anọ mbụ", "Naanị Safety"], answer: 2, why: "MSSC kwuru na ndị na-ede ule ga-enweta asambodo anọ mbụ maka CPT 4.0 zuru ezu; Green Production bụ nhọrọ." },
            { objective: "O5", q: "Onye na-enye asambodo CPT 4.0?", options: ["Manufacturing Skill Standards Council (MSSC)", "Ihe ọmụmụ a dị n'ịntanetị", "OSHA", "Ọbá akwụkwọ dị nso gị"], answer: 0, why: "MSSC na-enye ule ma na-enye asambodo; ihe ọmụmụ a na-akwado gị naanị." }
          ]
        },
        {
          title: "Nchebe igwe: guard, PPE na lockout/tagout",
          objectives: ["O1"],
          minutes: 6,
          goal: "Chọpụta ihe egwu dị n'igwe ma họrọ ihe nchebe ziri ezi.",
          text: [
            "OSHA (ụlọ ọrụ gọọmentị America na-ahụ maka nchebe ndị ọrụ) kwuru na akụkụ igwe ọ bụla, ọrụ ya ma ọ bụ usoro ya nwere ike imerụ mmadụ ahụ ga-enwe ihe nchebe. Iwu igwe ya na-akpọ aha ihe egwu dị ka point of operation (ebe igwe na-egbutu, na-apịa ma ọ bụ na-akpụ ihe), ingoing nip points (ebe akụkụ abụọ na-atụgharị ọnụ ma nwee ike ịdọta gị n'ime), akụkụ na-agba gburugburu, na chips na ọkụ na-efe efe. Mmerụ ahụ nwere ike ịbụ ịpịazi, igbubi akụkụ ahụ, ọkụ ịgba na ikpu ìsì.",
            "Ihe nchebe gị, site na nke kachasị ike ruo nke kachasị adịghị ike: guard na-eme ka ahụ gị ghara ịbanye n'ebe ihe egwu dị (ewepụla ma ọ bụ gafee otu ọ bụla), usoro dị nchebe, na ngwá nchebe onwe (PPE) dị ka ugogbe anya nchebe, ihe nchebe ntị, glove ebe a kwere ya, na akpụkpọ ụkwụ nwere ígwè n'ihu. Debe uwe na-akwụghị, ntutu ogologo na ihe ịchọ mma n'ebe dị anya site n'akụkụ na-akpa; glove nwere ike ijide n'akụkụ na-agba gburugburu, ya mere gbasoo iwu igwe ọ bụla.",
            "Lockout/tagout (LOTO) bụ iwu OSHA 29 CFR 1910.147. Mgbe a na-elekọta igwe ma ọ bụ na-ewepụ ihe kpọchiri ya (jam), a ga-egbanyụ ike ya (ọkụ eletrik, ike igwe, hydraulic, pneumatic, kemịkalụ ma ọ bụ okpomọkụ) ma kpọchie ya ka ọ ghara ịmalite. Naanị ndị ọrụ a zụrụ azụ, e nyere ikike, na-etinye mkpọchi. A na-agwa ndị ọzọ niile ka ha ghara iwepụ mkpọchi ma ọ bụ ịmalitegharị igwe a kpọchiri akpọchi.",
            "Iwu gọọmentị etiti gbasara ọrụ ụmụaka machibidoro ndị ọrụ na-erubeghị afọ 18 ọtụtụ igwe na-eji ike arụ ọrụ, dị ka igwe na-akpụ ígwè, na-akụ oghere na ígwè na-egbutu ígwè, igwe nkwọ (power saws) na forklift. Lelee peeji Department of Labor ma ọ bụrụ na ị erubeghị afọ 18."
          ],
          steps: ["Kwadebe: mara ebe niile igwe ahụ si enweta ike.", "Gwa ndị ọrụ ọ metụtara na a na-agbanyụ igwe ahụ.", "Gbanyụọ igwe ahụ n'ụzọ nkịtị.", "Kewapụ ike ahụ: gbanyụọ switch, mechie valve, wepụ njikọ.", "Tinye mkpọchi na tag nke gị.", "Hapụ ma ọ bụ gbochie ike echekwara (spring, ikuku, nrụgide, okpomọkụ).", "Nyochaa: nwaa ịmalite ya, wee laghachi ihe njikwa na off."],
          words: [["Point of operation", "ebe igwe na-egbutu, na-ehulata, na-apịa ma ọ bụ na-akpụ ihe."], ["Nip point", "ebe akụkụ abụọ na-akpa na-abịakọta ma nwee ike ịdọta mkpịsị aka, ntutu ma ọ bụ uwe n'ime."], ["Guard", "ihe mgbochi na-eme ka ahụ gị nọrọ n'ebe dị anya site n'akụkụ na-akpa."], ["PPE", "ngwá nchebe onwe, dị ka ugogbe anya nchebe, ihe mkpuchi ntị na akpụkpọ ụkwụ nchebe."], ["Lockout/tagout (LOTO)", "ịgbanyụ ike igwe ma tinye mkpọchi na tag ka ọ ghara ịmalite mgbe mmadụ na-arụ ọrụ na ya."], ["Stored energy", "ike fọdụrụ n'igwe mgbe a gbanyụrụ ya, dị ka spring, nrụgide ikuku ma ọ bụ okpomọkụ."]],
          slides: [
            { title: "Ebe igwe na-emerụ mmadụ ahụ", bullets: ["Point of operation", "Nip points na akụkụ na-agba gburugburu", "Chips na ọkụ na-efe efe"] },
            { title: "Ihe nchebe gị", bullets: ["Guard: ewepụla ma ọ bụ gafee ha", "Usoro dị nchebe", "PPE: ugogbe anya, ihe nchebe ntị, akpụkpọ ụkwụ"] },
            { title: "Lockout/tagout", bullets: ["Maka nlekọta na iwepụ jam", "Gbanyụọ, kewapụ, kpọchie, tinye tag", "Hapụ ike echekwara, wee nyochaa"] },
            { title: "Mara oke ya", bullets: ["Naanị ndị e nyere ikike na-etinye mkpọchi", "Ewepụla mkpọchi onye ọzọ", "N'okpuru afọ 18: a machibidoro ọtụtụ igwe"] }
          ],
          sources: [OSHA_GUARD, OSHA_212, OSHA_LOTO, OSHA_147, DOL_YOUTH],
          tryIt: "Họrọ igwe ị maara ma ọ bụ nke ị nwere ike ikiri na vidiyo: drill press, igwe na-ebisasị akwụkwọ ma ọ bụ conveyor. Dee opekata mpe ihe egwu atọ (point of operation, nip points, akụkụ na-agba gburugburu, chips na-efe efe) na ihe nchebe maka nke ọ bụla. Mgbe ahụ gụọ okwu omume a: akụkụ kpọchiri n'ime igwe press. Dee ihe ga-eme tupu onye ọ bụla etinye aka n'ime.",
          youCanNow: "ịchọpụta ihe egwu dị n'igwe ma họrọ guard, PPE ma ọ bụ lockout/tagout iji chebe onwe gị na ndị ọzọ.",
          quickCheck: [
            { objective: "O1", q: "Guard na-eme ka ọrụ gị dị nwayọọ, onye ọrụ ibe gị gwakwa gị wepụ ya. Gịnị ka ị ga-eme?", options: ["Wepụ ya mgbe onye isi anọghị", "Ehulata ya n'ụzọ", "Wepụ ya naanị otu oge ọrụ", "Hapụ ya n'ọnọdụ ya ma kọọrọ onye isi nsogbu ahụ"], answer: 3, why: "Guard na-eme ka ahụ gị ghara ịbanye n'ebe ihe egwu dị, a gaghịkwa ewepụ ma ọ bụ gafee ha." },
            { objective: "O1", q: "A ga-elekọta igwe. Kedu nzọụkwụ na-esote ozugbo i tinyechara mkpọchi na tag gị?", options: ["Malite igwe ahụ", "Hapụ ma ọ bụ gbochie ike echekwara, wee nyochaa na ọ gaghị amalite", "Wepụ guard ma malite", "Wepụ mkpọchi ka ị nwalee ya"], answer: 1, why: "Mgbe i kpọchiri, ị na-ahapụ ike echekwara ma nyochaa na igwe ahụ enweghị ike ịmalite." }
          ]
        },
        {
          title: "Ịtụ nha akụkụ na ịgụ tolerance",
          objectives: ["O2"],
          minutes: 6,
          goal: "Tụọ nha akụkụ ma kpebie ma ọ dị n'ime tolerance.",
          text: [
            "Akụkụ ọ bụla nwere nha a chọrọ n'eserese ya, a na-akpọ nominal size, na tolerance: otu o nwere ike isi dị anya site na nha ahụ ma ka dị mma. Dịka ọmụmaatụ, 1.250 ± 0.005 inch pụtara na nha ọ bụla site na 1.245 ruo 1.255 inch dị mma. Ihe ọ bụla dị nta ma ọ bụ buru ibu karịa nke ahụ dị n'èzí tolerance.",
            "Ngwá a na-ejikarị: teepu nha ma ọ bụ rula ígwè maka nha na-adịghị nkenke; caliper maka nha mpụga, ime na omimi, ọtụtụ mgbe ruo otu ụzọ n'ime puku nke inch (0.001) ma ọ bụ otu ụzọ n'ime narị nke millimeter (0.01); na micrometer maka nha mpụga dị nkenke karịa. Ọtụtụ ụlọ ọrụ na-eji digital caliper.",
            "Omume ọma: hichaa akụkụ ahụ na ngwá ahụ, mee ka caliper gụọ efu (zero) mgbe agba ya mechiri, jide agba ya ka ha guzoro ọtọ n'akụkụ ahụ n'apịaghị ya, gụọ ọnụọgụ ahụ site n'ihu, ma dee ya ozugbo. Tụọ ya karịa otu ugboro ma ọ bụrụ na ị ejighị n'aka. Mụta iji ngwá dị nkenke n'ihu onye nkuzi, onye ga-akụzikwa ịgụ dial na vernier scale."
          ],
          steps: ["Gụọ eserese: nominal size na tolerance.", "Gbakọọ limits: nominal wepụ ma gbakwụnye tolerance.", "Hichaa akụkụ ahụ na ngwá ahụ; mee caliper efu.", "Tụọ ya ọtọ, n'apịaghị ya; gụọ ọnụọgụ ahụ.", "Dee ya. N'ime limits = ọ dị mma; n'èzí = ọ dị n'èzí tolerance."],
          words: [["Nominal size", "nha a chọrọ nke e gosiri n'eserese."], ["Tolerance", "otu nha nwere ike isi gbanwee site na nha a chọrọ ma ka dị mma."], ["Caliper", "ngwá nwere agba na-amị amị nke na-atụ nha mpụga, ime na omimi."], ["Micrometer", "ngwá dị ka ịkụ (screw) na-atụ nha mpụga nke ọma nke ukwuu."], ["Zero", "ime ka ngwá ahụ gụọ 0 mgbe agba ya mechiri, ka ọgụgụ malite n'ebe ziri ezi."]],
          slides: [
            { title: "Nha a chọrọ na tolerance", bullets: ["Nominal: nha a chọrọ", "Tolerance: otu o nwere ike isi gbanwee", "1.250 ± 0.005 = 1.245 ruo 1.255"] },
            { title: "Ngwá ndị ahụ", bullets: ["Teepu ma ọ bụ rula ígwè: nha na-adịghị nkenke", "Caliper: mpụga, ime, omimi", "Micrometer: nha mpụga dị nkenke nke ukwuu"] },
            { title: "Tụọ nha dị ka ọkachamara", bullets: ["Akụkụ na ngwá dị ọcha; buru ụzọ mee efu", "Agba guzoro ọtọ, enweghị ịpịa", "Gụọ site n'ihu; dee ya"] },
            { title: "Kpebie", bullets: ["N'ime limits: akụkụ dị mma", "N'èzí: ọ dị n'èzí tolerance, kọọ ya"] }
          ],
          sources: [MSSC_COURSES],
          tryIt: "Omume naanị, ọnụọgụ e mepụtara. Akụkụ bụ 2.000 ± 0.010 inch. Gbakọọ limits, wee kpebie ma ọ dị mma ma ọ bụ n'èzí tolerance maka: 1.995, 2.012, 1.989, 2.010, 2.004. Mgbe ahụ, were rula tụọ ihe atọ n'ụlọ (akwụkwọ, ekwentị, ngaji) ugboro abụọ nke ọ bụla ma dee ọgụgụ abụọ ahụ.",
          youCanNow: "ịgbakọ limits nke tolerance, ịtụ nha akụkụ nke ọma ma kpebie ma ọ dị mma ma ọ bụ n'èzí tolerance.",
          quickCheck: [
            { objective: "O2", q: "Akụkụ bụ 0.500 ± 0.002 inch. Kedu oke dị mma?", options: ["0.400 ruo 0.600", "0.498 ruo 0.502", "0.500 ruo 0.502 naanị", "0.490 ruo 0.510"], answer: 1, why: "Wepụ ma gbakwụnye 0.002 na 0.500: oke dị mma bụ 0.498 ruo 0.502." },
            { objective: "O2", q: "Gịnị ka ị na-eme digital caliper tupu ị tụọ nha?", options: ["Pịa agba ya ike", "Tụọ akụkụ ahụ mgbe ọ ka ruru unyi", "Mechie agba ya ma mee ya efu", "Gụọ ya n'akụkụ"], answer: 2, why: "Ime ya efu mgbe agba mechiri na-eme ka ọgụgụ ọ bụla malite n'ebe ziri ezi." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ọrụ ahụ, nchebe na ịtụ nha",
        questions: [
          { objective: "O5", q: "Kedu module bụ nhọrọ maka CPT 4.0 zuru ezu?", options: ["Safety", "Green Production", "Maintenance Awareness", "Quality Practices & Measurement"], answer: 1, why: "MSSC kwuru na Green Production abụghị akụkụ nke asambodo CPT 4.0 zuru ezu." },
          { objective: "O1", q: "Ebe roller abụọ na-atụgharị kwupụta ibe ha ma nwee ike ịdọta aka uwe gị n'ime ka a na-akpọ:", options: ["Data plate", "Tolerance", "Counterweight", "Ingoing nip point"], answer: 3, why: "Ingoing nip point bụ ebe akụkụ abụọ na-akpa na-abịakọta ma nwee ike ịdọta gị n'ime." },
          { objective: "O1", q: "Akụkụ kpọchiri n'ime igwe. Gịnị ga-eme tupu onye ọ bụla etinye aka n'ime?", options: ["Lockout/tagout site n'aka onye e nyere ikike", "Tụgharịa igwe ahụ n'ọsọ nwayọọ", "Yiri glove ma tinye aka n'ime ngwa ngwa", "Gwa onye ọrụ ibe gị ka o lee switch anya"], answer: 0, why: "Iwepụ jam bụ ọrụ nlekọta, ya mere a ga-ebu ụzọ kpọchie ike igwe ahụ." },
          { objective: "O2", q: "Akụkụ bụ 25.00 ± 0.10 mm. Ị tụrụ 25.14 mm. Gịnị bụ eziokwu?", options: ["Ọ dị mma", "Ọ dị mma ma ọ bụrụ na ọ dị mma n'anya", "Ọ dị n'èzí tolerance", "Tolerance anaghị emetụta akụkụ metric"], answer: 2, why: "Limit nke elu bụ 25.10 mm, 25.14 mm karịkwara ya." },
          { objective: "O2", q: "Kedu ngwá kacha mma maka ịtụ obosara ime nke slot?", options: ["Hama", "Level", "Brush agba", "Caliper"], answer: 3, why: "Caliper nwere agba ime e mere maka ịtụ nha ime." }
        ]
      }
    },
    {
      name: "Isi 2: Ịdị mma, mmepụta na inweta ọrụ",
      lessons: [
        {
          title: "Nyocha ịdị mma na ịchọta isi ihe kpatara nsogbu",
          objectives: ["O3"],
          minutes: 6,
          goal: "Dee ntụpọ ma chọta isi ihe nwere ike ịkpata ya site na 5 Whys.",
          text: [
            "Ịdị mma (quality) pụtara na akụkụ ọ bụla ruru specification ya, ihe e dere ede a chọrọ maka nha, ọdịdị na ọrụ ya. Akụkụ na-erughị ya bụ ntụpọ (defect), ma ọ bụ nonconforming part. Ọrụ gị bụ ijide ntụpọ n'oge, idebe ha n'ebe dị anya site n'akụkụ ọma, na ịkọ maka ha.",
            "Jiri check sheet: tebụl dị mfe ebe ị na-akanye akara mgbe ọ bụla ị hụrụ ụdị ntụpọ, dị ka nkọcha, nha ezighị ezi ma ọ bụ oghere efuola. Mgbe oge ọrụ gwụrụ, akara ndị ahụ na-egosi nsogbu na-emekarị. Tinye akụkụ ọjọọ n'ime igbe reject e dere aha ma ọ bụ tinye ha tag ka onye ọ bụla ghara izipụ ha na mberede.",
            "Iji dozie nsogbu kpamkpam, chọta isi ihe kpatara ya (root cause), ọ bụghị naanị ihe ịrịba ama ya. 5 Whys dị mfe: kwuo nsogbu ahụ, jụọ \"Why?\" (Gịnị mere?), wee jụọ \"Why?\" gbasara azịza ahụ, ihe dị ka ugboro ise, ruo mgbe ị ruru ihe kpatara ya ị nwere ike idozi. Ọtụtụ ụlọ ọrụ na-ejizi Plan-Do-Check-Act: hazie ndozi, nwalee ya, lelee nsonaazụ ya, ma mee ya usoro ma ọ bụrụ na ọ rụrụ ọrụ."
          ],
          steps: ["Nyochaa akụkụ megide specification.", "Kanye akara maka ụdị ntụpọ ọ bụla na check sheet.", "Tinye akụkụ ọjọọ tag ma ọ bụ tinye ha n'igbe reject; kọọ maka ha.", "Jụọ \"Why?\" ihe dị ka ugboro ise iji rute isi ihe kpatara ya.", "Tụọ aro ndozi; lelee na ntụpọ belatara."],
          words: [["Specification", "ihe e dere ede nke akụkụ ga-eru."], ["Defect", "akụkụ ma ọ bụ ngwá ahịa na-erughị specification; a na-akpọkwa ya nonconforming."], ["Check sheet", "tebụl maka ịgụ ugboro ole ụdị ntụpọ ọ bụla na-eme."], ["Root cause", "ezi ihe kpatara nsogbu; idozi ya na-akwụsị nsogbu ahụ ịlọghachi."], ["5 Whys", "ịjụ \"Why?\" ọtụtụ ugboro iji si n'ihe ịrịba ama ruo n'isi ihe kpatara ya."], ["Plan-Do-Check-Act", "usoro nzọụkwụ anọ maka ịnwale ndozi ma mee ya usoro."]],
          slides: [
            { title: "Ịdị mma n'ahịrị mmepụta", bullets: ["Akụkụ ọ bụla ruru specification", "Jide ntụpọ n'oge", "Debe akụkụ ọjọọ n'ebe dị anya site n'akụkụ ọma"] },
            { title: "Check sheet", bullets: ["Kanye akara maka ụdị ntụpọ ọ bụla", "Hụ nsogbu na-emekarị", "Tinye tag ma ọ bụ tinye n'igbe reject; kọọ ha"] },
            { title: "5 Whys", bullets: ["Kwuo nsogbu ahụ", "Jụọ \"Why?\" ihe dị ka ugboro ise", "Kwụsị n'ihe kpatara ya ị nwere ike idozi"] },
            { title: "Plan-Do-Check-Act", bullets: ["Hazie ndozi, nwalee ya", "Lelee nsonaazụ ya", "Mee ya usoro ma ọ bụrụ na ọ rụrụ ọrụ"] }
          ],
          sources: [MSSC_COURSES],
          tryIt: "Okwu omume: oghere a gbara na brackets dị n'ebe ezighị ezi n'ihe dị ka otu akụkụ n'ime iri. Mee check sheet nwere ụdị ntụpọ atọ ma jupụta ya akara e mepụtara. Mgbe ahụ dee usoro 5 Whys (dịka ọmụmaatụ: fixture na-akpa, n'ihi na clamp tọrọ atọ, n'ihi na ...) ma jedebe ya na ndozi ị nwere ike ịtụ aro nye onye isi gị.",
          youCanNow: "ide ntụpọ na check sheet, ikewapụ akụkụ ọjọọ, na iji 5 Whys chọta isi ihe kpatara nsogbu.",
          quickCheck: [
            { objective: "O3", q: "Ị hụrụ akụkụ ise nwere nkọcha n'ime igbe akụkụ ọma. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Kewapụ ha ma tinye ha tag, wee kọọ ya", "Zipụ ha; nkọcha ahụ dị obere", "Tụfuo ha ma ekwula ihe ọ bụla", "Kpochaa ha n'onwe gị"], answer: 0, why: "A na-edebe akụkụ ọjọọ n'ebe dị anya site n'akụkụ ọma ma kọọ ha ka a chọta ihe kpatara ya." },
            { objective: "O3", q: "Gịnị bụ ebumnuche 5 Whys?", options: ["Ịta onye ọrụ ibe gị ụta", "Ịgụ akụkụ ndị ahụ", "Ime ka ahịrị mmepụta dị nwayọọ", "Ịchọta isi ihe kpatara ya ị nwere ike idozi"], answer: 3, why: "5 Whys na-esi n'ihe ịrịba ama ruo n'isi ihe kpatara ya, ka ndozi ahụ dịgide." }
          ]
        },
        {
          title: "Lean production, 5S na nlekọta igwe kwa ụbọchị",
          objectives: ["O4"],
          minutes: 6,
          goal: "Jiri 5S na nyocha onye ọrụ kwa ụbọchị n'ebe ọrụ.",
          text: [
            "Lean production pụtara ime ihe onye ahịa chọrọ na mfu dị nta. Mfu (waste) gụnyere ichere, ime ihe karịrị akarị, mmegharị gafere oke, njide gafere oke, ngwá ahịa echekwara karịrị akarị, ntụpọ na nzọụkwụ na-agbakwụnyeghị uru. Ịhụ mfu na ịtụ aro obere mmezi bụ akụkụ nke ọrụ onye teknụzụ.",
            "5S na-eme ka ebe ọrụ dị nchebe ma rụọ ọrụ nke ọma. Sort: wepụ ihe ị na-achọghị. Set in order: ebe e dere aha maka ngwá ọ bụla. Shine: hichaa ebe ahụ na igwe ahụ, nke na-egosikwa mmiri na-agbapụta na mmebi. Standardize: dee otu ebe ahụ kwesịrị isi dị. Sustain: na-eme ya oge ọrụ ọ bụla.",
            "Nghọta nlekọta (maintenance awareness) na-amalite na nlekọta onye ọrụ kwa ụbọchị. Tupu na n'oge ọrụ gị, lee maka mmanụ ma ọ bụ mmiri na-agbapụta, bolt tọrọ atọ, belt gbara agba, mmanụ ma ọ bụ coolant dị ala, mkpọtụ dị iche, okpomọkụ, ịma jijiji, na guard ma ọ bụ waya mebiri emebi. Gbasoo ndepụta nyocha igwe ahụ. Kọọ ihe ị hụrụ; naanị ndị a zụrụ azụ, e nyere ikike, na-arụzi igwe, nrụzi chọrọkwa lockout/tagout.",
            "Preventive maintenance bụ nlekọta a haziri ahazi, dị ka ịte mmanụ na ịgbanwe filter dị ka usoro si dị, ka igwe ghara imebi ọtụtụ mgbe. Ihe ị dere na ndepụta nyocha na-enyere ndị otu nlekọta aka ijide nsogbu n'oge."
          ],
          steps: ["Sort: wepụ ihe ị na-achọghị.", "Set in order: ebe e dere aha maka ngwá ọ bụla.", "Shine: hichaa, ma lee maka mmiri na-agbapụta na mmebi ka ị na-ehicha.", "Standardize: dee ma ọ bụ kwụba otu ebe ahụ kwesịrị isi dị.", "Sustain: mee ya oge ọrụ ọ bụla.", "Nyocha kwa ụbọchị: mmiri na-agbapụta, mkpọtụ, okpomọkụ, ịma jijiji, belt, mmanụ, guard; kọọ nsogbu."],
          words: [["Lean", "ụzọ ọrụ na-ewepụ mfu ka uru ruo onye ahịa."], ["Waste", "ihe ọ bụla na-agbakwụnye oge ma ọ bụ ego mana ọ dịghị uru, dị ka ichere ma ọ bụ mmegharị gafere oke."], ["5S", "Sort, Set in order, Shine, Standardize, Sustain: ụzọ isi debe ebe ọrụ n'usoro."], ["Preventive maintenance", "nlekọta a haziri dị ka usoro si dị ka igwe ghara imebi ọtụtụ mgbe."], ["Vibration", "ịma jijiji nwere ike igosi na akụkụ tọrọ atọ ma ọ bụ gbara agba."]],
          slides: [
            { title: "Lean: belata mfu", bullets: ["Ichere, mmegharị gafere oke, njide gafere oke", "Ime ihe karịrị akarị, ngwá echekwara karịrị akarị", "Ntụpọ na nzọụkwụ na-enweghị uru"] },
            { title: "5S", bullets: ["Sort na Set in order", "Shine: hichaa ma nyochaa", "Standardize na Sustain"] },
            { title: "Nyocha igwe kwa ụbọchị", bullets: ["Mmiri na-agbapụta, bolt tọrọ atọ, belt gbara agba", "Mkpọtụ, okpomọkụ, ịma jijiji", "Mmanụ, guard na waya"] },
            { title: "Kọọ ya, arụzila ya", bullets: ["Dee ya na ndepụta nyocha", "Naanị ndị e nyere ikike na-arụzi", "Nrụzi chọrọ lockout/tagout"] }
          ],
          sources: [MSSC_COURSES, OSHA_147],
          tryIt: "Họrọ otu ebe ọrụ ị na-ahụ ugbu a: elu tebụl kichin, shelf garaji ma ọ bụ tebụl ọrụ. Dee otu omume maka S ọ bụla n'ime 5. Mgbe ahụ dee ndepụta nyocha kwa ụbọchị nwere opekata mpe ihe ise maka igwe ị maara (ụgbọ ala, igwe kwụ otu ebe, igwe ịkwọ ahịhịa ma ọ bụ igwe ịsa akwa) na ihe ị ga-akọ.",
          youCanNow: "ịhụ mfu, iji 5S n'ebe ọrụ ma mee nyocha onye ọrụ kwa ụbọchị, na-akọ nsogbu kama idozi ha n'onwe gị.",
          quickCheck: [
            { objective: "O4", q: "Kedu nzọụkwụ 5S pụtara \"ebe e dere aha maka ngwá ọ bụla\"?", options: ["Sort", "Shine", "Set in order", "Sustain"], answer: 2, why: "Set in order na-enye ngwá ọ bụla ebe e dere aha ka ọ dị mfe ịchọta na ịlaghachi ya." },
            { objective: "O4", q: "N'oge nyocha kwa ụbọchị, ị nụrụ mkpọtụ ọhụrụ dị ka ihe na-egwe. Gịnị ka ị ga-eme?", options: ["Mee ka egwu dị elu", "Dee ya na ndepụta nyocha ma kọọ ya", "Kewasịa igwe ahụ", "Leghara ya anya ruo mgbe ọ ga-emebi"], answer: 1, why: "Ndị na-arụ igwe na-akọ mkpọtụ dị iche; ndị a zụrụ azụ, e nyere ikike, na-arụzi ya." }
          ]
        },
        {
          title: "Atụmatụ gị: nkwadebe CPT 4.0 na ọrụ mmepụta mbụ gị",
          objectives: ["O5"],
          minutes: 5,
          goal: "Dee atụmatụ nwere ụbọchị iji kwadebe maka CPT 4.0 ma tinye akwụkwọ maka ọrụ mmepụta.",
          text: [
            "Malite na peeji gọọmentị. Na msscusa.org, lelee module ndị dị ugbu a, otu a si enye ule, ụgwọ na ebe a na-ede ule. Ọtụtụ community college na ebe ọrụ (a na-akpọkarị American Job Centers) na-enye ọzụzụ CPT, ha nwekwara ike inyere aka ịkwụ ụgwọ ya. Jụọ ma mmemme ahụ gụnyere omume aka na ezi ngwá na igwe.",
            "Hazie otu module n'otu oge. Safety bụ ezigbo module mbụ. Maka nke ọ bụla, debe izu ọmụmụ ihe, ụzọ omume (ndetu, kaadị flash, omume dị n'ihe ọmụmụ a) na ụbọchị ule ị chọrọ nke ị ga-akwado na ebe ule ahụ.",
            "Tinye akwụkwọ ọrụ mgbe ị na-amụ ihe. Chọọ ọrụ production associate, machine operator, assembler na manufacturing technician, ma chọọ registered apprenticeship na apprenticeship.gov. Ụfọdụ ndị were mmadụ n'ọrụ na-ewe ndị nwere ndekọ mpụ; mmemme ọrụ na mmemme nlọghachi (re-entry) nwere ike igosi gị ha.",
            "Na résumé gị, kwuo eziokwu. Dee \"Completed Manufacturing Technician Basics (Koach Learn), 2026\" ma depụta module CPT naanị mgbe ị gafere ha. N'ajụjụ ọnụ ọrụ, buru ụzọ kwuo maka nchebe, ịtụ nha nke ọma, ijide akụkụ ọjọọ na idebe ebe ọrụ gị n'usoro."
          ],
          steps: ["Gụọ peeji CPT 4.0 na msscusa.org; dee module anọ a chọrọ.", "Chọta otu mmemme ọzụzụ ma ọ bụ ebe ule dị nso gị na ihe ọ na-enye.", "Debe izu ọmụmụ ihe na ụbọchị ule maka module ọ bụla; kwado ụbọchị ndị ahụ na ebe ule.", "Depụta aha ọrụ atọ na ndị were mmadụ n'ọrụ ma ọ bụ apprenticeship atọ ị ga-etinye akwụkwọ.", "Dee ahịrị résumé eziokwu na azịza sekọnd 30: \"Why manufacturing?\" (Gịnị mere mmepụta?)"],
          words: [["American Job Center", "ụlọ ọrụ gọọmentị na-enyere ndị mmadụ aka ịchọta ọrụ na ọzụzụ."], ["Production associate", "aha ọrụ mbụ a na-ahụkarị n'ime ụlọ ọrụ mmepụta."], ["Testing site", "ụlọ akwụkwọ ma ọ bụ ebe a kwadoro inye ule ahụ."]],
          slides: [
            { title: "Malite na MSSC", bullets: ["Lelee module, ule, ụgwọ na msscusa.org", "Chọta mmemme ma ọ bụ ebe ule dị nso gị", "Jụọ maka omume aka"] },
            { title: "Otu module n'otu oge", bullets: ["Safety bụ ezigbo module mbụ", "Izu ọmụmụ ihe na ụzọ omume", "Ụbọchị ule ị ga-akwado"] },
            { title: "Tinye akwụkwọ mgbe ị na-amụ ihe", bullets: ["Production associate, operator, assembler", "Registered apprenticeship", "Mmemme ọrụ na mmemme nlọghachi"] },
            { title: "Kwuo eziokwu", bullets: ["Depụta ihe ọmụmụ i mechara", "Depụta module CPT naanị mgbe ị gafere", "Buru ụzọ kwuo maka nchebe na ịdị mma"] }
          ],
          sources: [MSSC_CPT, APPRENTICE],
          tryIt: "Dee atụmatụ gị n'otu peeji: module anọ ahụ, ya na izu ị ga-amalite ọmụmụ ihe na ụbọchị ule maka nke ọ bụla, otu mmemme ma ọ bụ ebe ule ị ga-akpọtụrụ, ọrụ ma ọ bụ apprenticeship atọ ị ga-etinye akwụkwọ, na ahịrị résumé eziokwu gị. Gụpụta azịza sekọnd 30 gị maka \"Why manufacturing?\" n'olu dara ụda.",
          youCanNow: "ide atụmatụ nwere ụbọchị iji kwadebe maka CPT 4.0 na ọrụ mmepụta mbụ, ma kọwaa ọzụzụ gị n'eziokwu.",
          quickCheck: [
            { objective: "O5", q: "Ị gafere naanị module Safety. Kedu ahịrị résumé bụ eziokwu?", options: ["\"Full CPT 4.0 certified\"", "\"Master technician\"", "\"OSHA certified machinist\"", "\"MSSC Safety certificate (CPT 4.0 module), 2026\""], answer: 3, why: "Ọ na-akpọ aha kpọmkwem ihe i nwetara, ọ dịghịkwa ekwu na i nwere CPT 4.0 zuru ezu." },
            { objective: "O5", q: "Ebee ka ị na-akwado ụgwọ CPT na ebe ule ugbu a?", options: ["Saịtị gọọmentị MSSC ma ọ bụ ebe ule a kwadoro", "Mgbasa ozi na social media", "Ihe enyi gị chere", "Saịtị ọrụ ọ bụla"], answer: 0, why: "Ụgwọ na ule na-agbanwe, ya mere lelee MSSC ma ọ bụ ebe ule ahụ ozugbo." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịdị mma, mmepụta na inweta ọrụ",
        questions: [
          { objective: "O3", q: "Gịnị ka check sheet na-egosi gị mgbe oge ọrụ gwụrụ?", options: ["Ụdị ntụpọ na-emekarị", "Ọnụ ahịa igwe ahụ", "Ihu igwe", "Onye bịara n'azụ oge"], answer: 0, why: "Akara na check sheet na-egosi ugboro ole ụdị ntụpọ ọ bụla na-eme." },
          { objective: "O3", q: "Akụkụ dị ogologo karịa. Gịnị mere? Stop ahụ kpaliri. Gịnị mere? Bolt ya tọrọ atọ. Gịnị mere? Ọ dịghị onye na-enyocha ya. Kedu ezigbo ndozi?", options: ["Mee akụkụ ngwa ngwa", "Ta ndị oge ọrụ gara aga ụta", "Tinye bolt stop ahụ na nyocha kwa ụbọchị", "Tụfuo akụkụ niile"], answer: 2, why: "Ndozi ahụ na-elekwasị anya n'isi ihe kpatara ya nke 5 Whys ruru: ọ dịghị mgbe a na-enyocha bolt ahụ." },
          { objective: "O4", q: "Ndị ọrụ na-echere nkeji 20 oge ọrụ ọ bụla ka akụkụ bịa. N'okwu lean nke a bụ:", options: ["Uru", "Mfu", "5S", "Tolerance"], answer: 1, why: "Ichere na-agbakwụnye oge mana ọ dịghị uru, ya mere ọ bụ otu n'ime mfu lean." },
          { objective: "O4", q: "Kedu nzọụkwụ 5S na-enyekwa gị aka ịhụ mmiri na-agbapụta na mmebi?", options: ["Sort", "Sustain", "Standardize", "Shine"], answer: 3, why: "Ihicha igwe n'oge Shine na-egosi mmiri na-agbapụta, mgbawa na ịgba agba." },
          { objective: "O5", q: "Kedu ezigbo nzọụkwụ mbụ maka atụmatụ CPT 4.0?", options: ["Gụọ peeji CPT 4.0 na msscusa.org ma chọta ebe ule", "Zụta asambodo n'ịntanetị", "Dee ule ise niile n'otu ụbọchị n'agụghị akwụkwọ", "Chere ruo mgbe mmadụ gwara gị"], answer: 0, why: "Ịmalite na peeji gọọmentị na-enye gị module, ule na ebe ule dị ugbu a." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ntọala Onye Teknụzụ Ụlọ Ọrụ Mmepụta",
    questions: [
      { objective: "O5", q: "Kedu òtù na-enye Certified Production Technician (CPT 4.0)?", options: ["OSHA", "Naanị onye were gị n'ọrụ", "Manufacturing Skill Standards Council (MSSC)", "Ihe ọmụmụ a"], answer: 2, why: "MSSC na-enye ule CPT ma na-enye asambodo." },
      { objective: "O5", q: "Kedu module ndị mejupụtara CPT 4.0 zuru ezu?", options: ["Safety; Quality Practices & Measurement; Manufacturing Process & Production; Maintenance Awareness", "Ịgbado ọkụ, ọrụ pipe, ịnya ụgbọ na isi nri", "Naanị Green Production", "Forklift, crane, ubube na elu ụlọ"], answer: 0, why: "MSSC kwuru na module anọ mbụ na-enye CPT 4.0 zuru ezu." },
      { objective: "O1", q: "Kedu ihe egwu iwu igwe OSHA kpọrọ aha?", options: ["Ala dị ọcha", "Eserese 5S a kwụbara", "Pensụl dị nkọ", "Akụkụ na-agba gburugburu"], answer: 3, why: "Iwu igwe izugbe OSHA depụtara akụkụ na-agba gburugburu ya na point of operation, nip points na chips na-efe efe." },
      { objective: "O1", q: "Kedu ihe nchebe kachasị ike site n'akụkụ igwe na-akpa?", options: ["Ịrụ ọrụ ngwa ngwa", "Guard na-eme ka ahụ gị ghara ịbanye n'ebe ihe egwu dị", "Glove na-akwụghị", "Iti mkpu ịdọ aka na ntị"], answer: 1, why: "Guard na-edebe gị n'ebe dị anya site n'ihe egwu, a gaghịkwa ewepụ ma ọ bụ gafee ha." },
      { objective: "O1", q: "Ị hụrụ mkpọchi onye ọrụ ọzọ n'igwe ị chọrọ. Gịnị ka ị ga-eme?", options: ["Bee mkpọchi ahụ", "Jụọ onye isi gị; ewepụla mkpọchi onye ọzọ", "Malite igwe ahụ n'agbanyeghị", "Wepụ naanị tag ahụ"], answer: 1, why: "Naanị onye ọrụ tinyere mkpọchi, n'usoro ya, na-ewepụ ya." },
      { objective: "O1", q: "Ị dị afọ 17. Kedu ọrụ iwu gọọmentị etiti gbasara ọrụ ụmụaka machibidoro?", options: ["Ịza ụlọ ezumike", "Ịhazi akwụkwọ", "Iji aka etinye igbe dị mfe n'ebe nchekwa", "Ịrụ igwe na-akụ oghere na ígwè"], answer: 3, why: "Ndị ọrụ na-erubeghị afọ 18 enweghị ike ịrụ igwe na-eji ike na-akpụ ígwè, na-akụ oghere ma ọ bụ na-egbutu ígwè." },
      { objective: "O2", q: "Akụkụ bụ 3.000 ± 0.005 inch. Ị tụrụ 2.996. Ọ dị mma?", options: ["Ee, ọ dị n'ime 2.995 ruo 3.005", "Mba, ọ ga-abụrịrị 3.000 kpọmkwem", "Mba, ọ buru ibu karịa", "Naanị ma ọ bụrụ na ọ na-egbukepụ"], answer: 0, why: "2.996 dị n'ime limits 2.995 ruo 3.005." },
      { objective: "O2", q: "Gịnị bụ tolerance?", options: ["Ịdị arọ akụkụ", "Ọsọ igwe ahụ", "Otu nha nwere ike isi gbanwee site na nha a chọrọ ma ka dị mma", "Ọnụ ahịa akụkụ"], answer: 2, why: "Tolerance na-edobe oke a kwere n'akụkụ nominal size." },
      { objective: "O2", q: "Kedu omume na-enye ezi ọgụgụ caliper?", options: ["Ịpịa agba ya ike dị ka i nwere ike", "Ihicha akụkụ ahụ, ime ngwá ahụ efu na ijide agba ya ọtọ", "Ịtụ nha site n'ime glove", "Ịkọ ọnụọgụ ikpeazụ"], answer: 1, why: "Elu dị ọcha, ngwá e mere efu na agba guzoro ọtọ na-enye ọgụgụ ziri ezi." },
      { objective: "O2", q: "Akụkụ bụ 10.00 ± 0.05 mm. Kedu ọgụgụ dị n'èzí tolerance?", options: ["9.97 mm", "10.04 mm", "10.00 mm", "10.08 mm"], answer: 3, why: "Limit nke elu bụ 10.05 mm, ya mere 10.08 mm buru ibu karịa." },
      { objective: "O3", q: "Akụkụ na-erughị specification ya ka a na-akpọ:", options: ["Nonconforming (ntụpọ)", "Nominal", "Lean", "E mere ya efu"], answer: 0, why: "Akụkụ na-erughị specification bụ ntụpọ, ma ọ bụ nonconforming part." },
      { objective: "O3", q: "Gịnị mere i ji tinye akụkụ ọjọọ tag ma ọ bụ tinye ha n'igbe ozugbo?", options: ["Ime ka igbe ahụ dị arọ", "Ka e nwee ike ite ha agba", "Ka onye ọ bụla ghara ịgwakọta ha na akụkụ ọma ma ọ bụ zipụ ha", "Izochi ha onye isi"], answer: 2, why: "Ikewapụ reject na-egbochi akụkụ ọjọọ iru onye ahịa." },
      { objective: "O3", q: "Na Plan-Do-Check-Act, gịnị na-eme na \"Check\"?", options: ["Ị na-ahazi ndozi ahụ", "Ị na-akwụsị ahịrị mmepụta kpamkpam", "Ị na-enye iwu ka a zụta igwe ọhụrụ", "Ị na-ahụ ma ndozi ahụ rụrụ ọrụ"], answer: 3, why: "Check pụtara ilele nsonaazụ iji hụ ma ndozi ahụ rụrụ ọrụ." },
      { objective: "O4", q: "Kedu mfu lean?", options: ["Ibuga akụkụ n'ihu na azụ n'enweghị mkpa", "Ezigbo akụkụ e zigara onye ahịa", "Ebe ọrụ dị ọcha", "Nyocha nchebe e mechara"], answer: 0, why: "Mmegharị na njide gafere oke na-agbakwụnye oge na ego mana ọ dịghị uru." },
      { objective: "O4", q: "Gịnị ka \"Sustain\" pụtara na 5S?", options: ["Tụfuo ihe a na-adịghị eji", "Na-eme 5S oge ọrụ ọ bụla", "Tee ala agba", "Zụta ngwá ọhụrụ"], answer: 1, why: "Sustain pụtara ime 5S omume ka ebe ahụ nọrọ n'usoro." },
      { objective: "O4", q: "N'oge nyocha kwa ụbọchị, ị hụrụ mmanụ na-agbapụta n'okpuru igwe. Kedu ihe ziri ezi ị ga-eme?", options: ["Hichaa ya ma ekwula ihe ọ bụla", "Rụzie hose ahụ n'onwe gị mgbe ọ na-arụ ọrụ", "Kọọ ya ma gbasoo ndepụta nyocha; hapụ ndị e nyere ikike ka ha rụzie ya", "Kpuchie ya igbe"], answer: 2, why: "Ndị na-arụ igwe na-akọ nsogbu; ndị e nyere ikike na-arụzi ha n'okpuru lockout/tagout." },
      { objective: "O4", q: "Gịnị bụ preventive maintenance?", options: ["Ịrụzi igwe naanị mgbe o mebiri", "Nlekọta a haziri dị ka usoro si dị ka igwe ghara imebi ọtụtụ mgbe", "Ihicha ụlọ ezumike", "Ịzụta uwe ọrụ ndị ọzọ"], answer: 1, why: "Preventive maintenance bụ nlekọta a haziri ahazi na-egbochi mmebi." },
      { objective: "O5", q: "Ị chọrọ ọrụ a na-akwụ ụgwọ nwere ọzụzụ na onye ndụmọdụ. Ebee ka ị nwere ike ịchọ?", options: ["Saịtị lọtrị", "App kupọn", "Apprenticeship Finder nke Apprenticeship.gov", "Ebe mkparịta ụka egwuregwu"], answer: 2, why: "Apprenticeship Finder nke Department of Labor na-edepụta ohere registered apprenticeship." },
      { objective: "O1", q: "Na lockout/tagout, gịnị mere i ji nwaa ịmalite igwe mgbe i kpọchiri ya?", options: ["Ime ka ọ kpoo ọkụ", "Ịnwale agba mkpọchi ahụ", "Imecha ọrụ ngwa ngwa", "Inyocha na ike ahụ agbanyụọla n'ezie tupu ị rụọ ọrụ"], answer: 3, why: "Nyocha na-egosi na e kewapụrụ ike ahụ; mgbe ahụ ị laghachi ihe njikwa na off." },
      { objective: "O3", q: "Agba na-apụ n'ọtụtụ akụkụ. Gịnị mere? Elu ya nwere mmanụ. Gịnị mere? A gafere nzọụkwụ ịsa ya. Kedu azịza dị nso n'isi ihe kpatara ya?", options: ["Akụkụ ndị ahụ dị njọ", "A gafere nzọụkwụ ịsa ya", "Agba na-apụ", "Onye ahịa na-ahọrọ ihe"], answer: 1, why: "Nzọụkwụ ịsa a gafere bụ ihe kpatara ya ị nwere ike idozi; agba na-apụ bụ naanị ihe ịrịba ama." }
    ]
  },
  // ---- ADDIE: Nyocha nsonaazụ ----
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 4, 6, 7, 10, 12, 13, 15] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ndepụta ihe egwu na ihe nchebe", objective: "O1", notYet: "Ihe egwu na-erughị atọ, ma ọ bụ ihe egwu na-enweghị ihe nchebe ma ọ bụ nwere nke ezighị ezi.", meets: "Opekata mpe ihe egwu atọ n'otu igwe, nke ọ bụla nwere guard, PPE ma ọ bụ usoro ziri ezi, na mgbe a chọrọ lockout/tagout.", exceeds: "Ọ na-edepụta nzọụkwụ lockout/tagout n'usoro ma kpọọ aha ebe igwe ahụ si enweta ike." },
      { name: "Akwụkwọ ndekọ nha", objective: "O2", notYet: "E gbakọrọ limits n'ụzọ ezighị ezi, ma ọ bụ mkpebi abụọ ma ọ bụ karịa ezighị ezi.", meets: "Limits ziri ezi, a kpebikwara opekata mpe akụkụ omume 4 n'ime 5 nke ọma.", exceeds: "5 niile ziri ezi, ya na omume ịtụ nha e jiri e dere n'akụkụ akwụkwọ ndekọ ahụ." },
      { name: "Ndekọ ntụpọ na 5 Whys", objective: "O3", notYet: "E kewapụghị akụkụ ọjọọ, ma ọ bụ usoro ahụ kwụsịrị n'ihe ịrịba ama.", meets: "Check sheet, nzọụkwụ itinye akụkụ ọjọọ tag na 5 Whys nke na-ejedebe n'ihe kpatara ya a ga-edozi.", exceeds: "Ọ na-agbakwụnye ndetu Plan-Do-Check-Act gbasara otu a ga-esi lelee ma ndozi ahụ rụrụ ọrụ." },
      { name: "Atụmatụ 5S na nyocha kwa ụbọchị", objective: "O4", notYet: "Otu n'ime S 5 efuola, ma ọ bụ ihe nyocha na-erughị ise.", meets: "Otu omume maka S ọ bụla na opekata mpe ihe nyocha kwa ụbọchị ise ya na ihe a ga-akọ.", exceeds: "Ọ na-akpọ aha opekata mpe mfu lean abụọ n'ebe ahụ na obere mmezi maka nke ọ bụla." },
      { name: "Atụmatụ CPT 4.0 na ọrụ", objective: "O5", notYet: "Module ezighị ezi, enweghị ụbọchị, ma ọ bụ ahịrị résumé na-ekwu maka asambodo a na-enwetabeghị.", meets: "Ọ na-akpọ aha module anọ a chọrọ ya na ụbọchị a ga-akwado, otu mmemme ma ọ bụ ebe ule, ohere ọrụ atọ na ahịrị résumé eziokwu.", exceeds: "Ọ gụnyere azịza sekọnd 30 e meworo omume ya na ụzọ ọzọ dị ka apprenticeship." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a na ngwugwu njikere ruru rubric",
      "Ndị na-amụ ihe debanyere aha n'ọzụzụ CPT 4.0 ma ọ bụ dee module CPT mbụ n'ime ụbọchị 90 (nyocha nsonaazụ)",
      "Ndị na-amụ ihe gafere otu module CPT 4.0 ma ọ bụ karịa (akụkọ nke onwe ya na asambodo MSSC)",
      "Ndị na-amụ ihe e were n'ọrụ mmepụta ma ọ bụ registered apprenticeship (akụkọ ndị mmekọ na nyocha nsonaazụ)"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị maka msscusa.org, osha.gov na apprenticeship.gov",
      "Rula ma ọ bụ teepu nha, akwụkwọ na pen",
      "Nhọrọ: digital caliper na obere akụkụ ole na ole (bolt, washer) iji tụọ nha n'ihu onye nkuzi",
      "Ihe dị ka nkeji 60 n'ozuzu"
    ],
    facilitatorNotes: [
      "Kwuo ya n'isi mbido na ọtụtụ mgbe: ihe ọmụmụ a na-akwado ndị na-amụ ihe; MSSC na-enye asambodo CPT, a na-akụzikwa ọrụ igwe n'ihu mmadụ.",
      "Emela ka ndị na-amụ ihe rụọ igwe ma ọ bụ mee omume lockout/tagout n'igwe nwere ọkụ dị ka akụkụ nke ihe ọmụmụ a. Jiri foto, vidiyo na ihe ngosi a na-ejikọghị n'ọkụ.",
      "Lelee ụgwọ MSSC ugbu a, nhọrọ ule na ebe ule dị nso tupu nzukọ ahụ, ma kesaa enyemaka ego ọ bụla mmemme ọrụ gị na-enye.",
      "Jiri nwayọọ kọwaa mgbakọ tolerance na bọọdụ; ọtụtụ ndị na-amụ ihe chọrọ ihe atụ abụọ ma ọ bụ atọ a gbakọrọ agbakọ.",
      "Lezie anya maka ndị na-amụ ihe na-erubeghị afọ 18: ha nwere ike ịgụ ihe ọmụmụ a, mana a machibidoro ha ọtụtụ igwe ụlọ ọrụ n'ọrụ.",
      "Jiri rubric nye ngwugwu njikere akara ma lelee otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
