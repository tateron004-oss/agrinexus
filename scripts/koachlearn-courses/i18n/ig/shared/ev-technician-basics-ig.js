"use strict";

// Koach Learn course (Igbo translation of shared/ev-technician-basics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ev-technician-basics-ig",
  lang: "ig",
  translationOf: "ev-technician-basics",
  category: "Workforce Development",
  name: "Mmalite Ọrụ Teknịshan Ụgbọala Eletrik (EV)",
  skills: "Ịkpọ aha akụkụ EV, Ịgbaso iwu nchekwa ọkụ eletrik dị elu (high-voltage), Ịgbakọ oge nchaja, Ịhazi ọrụ low-voltage na EV, Ịhazi ụzọ gị gaa n'asambodo ASE",
  outcome: "ịkọwa otu ụgbọala eletrik si arụ ọrụ, ịgbaso iwu nchekwa high-voltage nke onye ọrụ ọhụrụ n'ụlọ ọrụ mmezi ụgbọala ga-edebe, ịgbakọ oge nchaja n'omume, ịhazi ọrụ mmezi kwa ụbọchị EV chọrọ, na ide atụmatụ nke gị nwere ụbọchị gaa n'asambodo ASE na ọrụ teknịshan EV.",
  about: [
    "Ụgbọala eletrik na hybrid na-aba ụba n'okporo ụzọ kwa afọ, ndị ụlọ ọrụ mmezi ụgbọala (shop) chọkwara teknịshan ghọtara ha. Ihe ọmụmụ a bụ maka ndị na-achọ ọrụ, ndị agha lara ezumike, ndị ntorobịa, ndị na-edozi ụgbọala ugbu a, na onye ọ bụla chọrọ ịmata ọrụ EV.",
    "Ị ga-amụta akụkụ ndị bụ isi nke EV, ihe egwu high-voltage na iwu na-echebe gị, otu nchaja si arụ ọrụ, ọrụ mmezi EV ka chọrọ, na ezi ụzọ asambodo: ule ASE A6 na A8, mgbe ahụ ule L3 maka ụgbọala hybrid na eletrik. Ihe ọmụmụ a na-akwado gị. Ọ naghị enye gị asambodo, ọ naghịkwa agwa gị ka i metụ akụkụ high-voltage aka. A na-amụta ọrụ ahụ naanị n'ọzụzụ a kwadoro, n'ihu onye nkuzi, na ezi ngwa nchekwa.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Gụọ ya, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\" na akwụkwọ, mkpịsị ode na igwe mgbakọ dị n'ekwentị. Obere nnwale na-esote nkuzi ọ bụla na isi ọ bụla, ule nwere ajụjụ 20 na-emechi ihe ọmụmụ ahụ. Nkuzi ikpeazụ na-ewu Atụmatụ Mmalite Teknịshan EV nke gị."
  ],
  finalTask: "Mee Atụmatụ Mmalite Teknịshan EV gị n'otu peeji: (1) kọwaa n'ahịrịokwu 3 ruo 4 otu EV si arụ ọrụ, na-akpọ aha akụkụ ya ndị bụ isi; (2) dee iwu nchekwa high-voltage ị ga-agbaso dị ka onye ọrụ ọhụrụ n'ụlọ ọrụ mmezi; (3) gbakọọ ajụjụ omume abụọ gbasara oge nchaja ma gosi otu i si gbakọọ ya; (4) dee ndepụta ọrụ mmezi low-voltage maka EV; (5) dee ụzọ asambodo gị nwere ezi ụbọchị (mmemme ọzụzụ, ASE A6 na A8, mgbe ahụ L3, na ọzụzụ ọ bụla site n'onye were gị n'ọrụ ma ọ bụ ụlọ ọrụ mere ụgbọala), ya na peeji gọọmentị maka nke ọ bụla; na (6) dee akụkụ \"Nka EV\" nwere ahịrị 3 maka résumé gị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye na ndị ntorobịa na-achọ ọrụ nka n'ọrụ mmezi ụgbọala: ndị na-achọ ọrụ, ndị agha lara ezumike (ọtụtụ nwere ahụmịhe n'ụgbọala ma ọ bụ eletrik), ndị ntorobịa, ndị si mba ọzọ bịa, na ndị na-agbanwe mmanụ ma ọ bụ taya ugbu a chọrọ ịrị elu. Ụfọdụ edoziela ụgbọala mmanụ ụgbọala; ọtụtụ arụbeghị ọrụ na EV.",
    startingPoint: "Ha nwere ike ime mgbakọ dị mfe na igwe mgbakọ ma gụọ ntụziaka dị mkpụmkpụ. Ụfọdụ maara injin mmanụ ụgbọala na nlekọta ụgbọala dị mfe; ọtụtụ amaghị akụkụ EV, ihe egwu high-voltage ma ọ bụ asambodo ndị ụlọ ọrụ mmezi na-achọ.",
    gap: "Ụlọ ọrụ mmezi chọrọ ndị ọrụ nwere ike ilekọta EV n'enweghị nsogbu ma mara mgbe ha ga-akwụsị. Onye ọrụ ọhụrụ metụrụ akụkụ high-voltage oroma (orange) aka n'enweghị ọzụzụ nwere ike ịnwụ. Ndị na-amụ ihe chọrọ okwu, iwu nchekwa, ọrụ mmezi EV kwa ụbọchị na ụzọ asambodo doro anya ka e were ha n'ọrụ ma rịa elu.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ (ihe dị ka klas 6 ruo 8)",
      "Enweghị ọrụ aka na high-voltage n'ihe ọmụmụ a: emetụla eriri oroma, ngwugwu batrị ma ọ bụ akụkụ dị n'ime chaja aka mgbe ọ bụla",
      "Naanị ngwaọrụ efu: akwụkwọ, mkpịsị ode, igwe mgbakọ ekwentị na weebụsaịtị gọọmentị",
      "Iwu asambodo na ụgwọ na-agbanwe: ndị na-amụ ihe na-elele ase.com na peeji gọọmentị ndị ọzọ",
      "Oge: nkuzi nkeji 4 ruo 6 nke dabara n'etiti ọrụ na oge ịhụ ndị ọrụ"
    ],
    prerequisites: "Ọ dịghị. \"Skilled Trades Careers\" na \"Ihe Ndabere nke Nchekwa n'Ebe Ọrụ (OSHA)\" na-enyere aka mana ọ bụghị iwu."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ndepụta ma ọ bụ eserese akụkụ EV", action: "ịkpọ aha akụkụ ndị bụ isi nke ụgbọala eletrik ma kwuo ihe nke ọ bụla na-arụ", standard: "ma nweta opekata mpe 5 n'ime akụkụ 6 ziri ezi" },
    { id: "O2", condition: "Mgbe e nyere gị ọnọdụ n'ụlọ ọrụ mmezi nwere EV", action: "idepụta ihe egwu high-voltage na iwu nchekwa maka nke ọ bụla", standard: "gụnyere \"emetụla eriri oroma ma ọ bụ ngwugwu batrị aka n'enweghị ọzụzụ\" na lockout/tagout" },
    { id: "O3", condition: "Mgbe e nyere gị nọmba omume maka batrị na chaja", action: "ịgbakọ ike (energy) achọrọ na oge nchaja", standard: "n'enweghị mperi mgbakọ, na-egosi otu i si gbakọọ ya" },
    { id: "O4", condition: "Mgbe EV bịara maka mmezi nkịtị", action: "ide ndepụta ọrụ mmezi low-voltage nke na-agbaso ozi mmezi (service information) nke ụlọ ọrụ mere ụgbọala ahụ", standard: "nwere opekata mpe ihe 6 ziri ezi na enweghị ọrụ high-voltage ọ bụla" },
    { id: "O5", condition: "Site n'iji ase.com na peeji gọọmentị ndị ọzọ", action: "idepụta nzọụkwụ asambodo gaa n'ọrụ teknịshan EV", standard: "na-akpọ aha peeji isi iyi maka nzọụkwụ ọ bụla" },
    { id: "O6", condition: "Site n'iji ndetu gị site n'ihe ọmụmụ a", action: "ide Atụmatụ Mmalite Teknịshan EV nwere ụbọchị na akụkụ nka maka résumé", standard: "nke ruru eru n'ahịrị ọ bụla nke rubric" }
  ],
  chapters: [
    {
      name: "Isi 1: Otu EV si arụ ọrụ na otu ị ga-esi nọrọ na nchekwa",
      lessons: [
        {
          title: "Akụkụ nke ụgbọala eletrik",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kpọọ aha akụkụ ndị bụ isi nke EV ma kwuo ihe nke ọ bụla na-arụ.",
          text: [
            "Ụgbọala eletrik (EV) na-agba site n'ọkụ eletrik echekwara n'ime nnukwu ngwugwu batrị high-voltage, nke na-anọkarị n'okpuru ala ụgbọala. N'ọtụtụ EV, batrị a na-arụ ọrụ n'ihe dị ka volt 400 ruo 1,000. Nke ahụ karịrị ọkụ dị na soket ụlọ nke ukwuu, o nwekwara ike igbu mmadụ.",
            "Batrị na-echekwa ọkụ DC. Inverter na-agbanwe ya ka ọ bụrụ AC nke moto eletrik na-eji. Moto na-atụgharị wiil. Mgbe onye na-anya ụgbọala na-ebelata ọsọ, moto na-arụ ọrụ azụ dị ka jenerẹtọ ma tinyeghachi ụfọdụ ike n'ime batrị. A na-akpọ nke a regenerative braking.",
            "Onboard charger na-agbanwe AC si n'ebe nchaja ka ọ bụrụ DC iji jupụta batrị. DC-to-DC converter na-ebelata high voltage iji chaja batrị nkịtị nke volt 12, nke ka na-akwado ọkụ ụgbọala, redio na kọmputa. Eriri high-voltage na-abụkarị oroma na-egbuke egbuke.",
            "Hybrid (HEV) nwere ma injin mmanụ ụgbọala ma moto eletrik nwere obere batrị. Plug-in hybrid (PHEV) nwere batrị ka ukwuu ị nwere ike chaja site na plọg, gbakwunyere injin mmanụ ụgbọala."
          ],
          words: [["EV (ụgbọala eletrik)", "ụgbọala na-agba naanị site n'ọkụ eletrik si na batrị."], ["Hybrid (HEV)", "ụgbọala nwere injin mmanụ ụgbọala na moto eletrik nke a naghị etinye na plọg."], ["Plug-in hybrid (PHEV)", "hybrid nwere batrị ka ukwuu ị nwere ike chaja site na plọg."], ["Ngwugwu batrị high-voltage", "nnukwu batrị na-enye moto ike; o nwere ike igbu mmadụ."], ["Inverter", "akụkụ na-agbanwe DC si na batrị ka ọ bụrụ AC maka moto."], ["Regenerative braking", "ibelata ọsọ ụgbọala site n'iji moto dị ka jenerẹtọ, nke na-etinyeghachi ike na batrị."], ["Onboard charger", "akụkụ dị n'ime ụgbọala na-agbanwe AC si na chaja ka ọ bụrụ DC maka batrị."], ["DC-to-DC converter", "akụkụ na-ebelata high voltage iji chaja batrị volt 12."]],
          slides: [
            { title: "Nnukwu batrị", bullets: ["Ngwugwu high-voltage, na-anọkarị n'okpuru ala ụgbọala", "Ọtụtụ mgbe ihe dị ka volt 400 ruo 1,000: ọ na-egbu egbu", "Eriri oroma na-ebu high voltage"] },
            { title: "Ime ka ụgbọala gaa", bullets: ["Inverter: DC batrị gaa na AC moto", "Moto na-atụgharị wiil", "Regenerative braking na-etinyeghachi ike"] },
            { title: "Nchaja na batrị volt 12", bullets: ["Onboard charger: AC si n'ebe nchaja gaa na DC maka ngwugwu batrị", "DC-to-DC converter na-chaja batrị volt 12"] },
            { title: "EV, HEV, PHEV", bullets: ["EV: naanị batrị", "HEV: injin mmanụ ụgbọala na moto, enweghị plọg", "PHEV: batrị ka ukwuu ị nwere ike itinye na plọg, na injin mmanụ ụgbọala"] }
          ],
          sources: [{ name: "U.S. Department of Energy, Alternative Fuels Data Center: Mmezi na nchekwa ụgbọala eletrik", url: "https://afdc.energy.gov/vehicles/electric-maintenance" }],
          tryIt: "Na akwụkwọ, see ụgbọala dị mfe site n'akụkụ. See ma dee aha akụkụ isii: ngwugwu batrị high-voltage, inverter, moto eletrik, onboard charger, DC-to-DC converter na batrị volt 12. Jiri agba ọzọ see eriri oroma. N'akụkụ akụkụ ọ bụla, dee otu ahịrị gbasara ihe ọ na-arụ.",
          youCanNow: "ịkpọ aha akụkụ ndị bụ isi nke EV ma kwuo ihe nke ọ bụla na-arụ.",
          quickCheck: [
            { objective: "O1", q: "Kedu agba eriri high-voltage na-adịkarị na EV?", options: ["Ojii", "Akwụkwọ ndụ", "Oroma", "Ọcha"], answer: 2, why: "Eriri high-voltage na-abụkarị oroma na-egbuke egbuke ka ndị ọrụ hụ ihe egwu ahụ." },
            { objective: "O1", q: "Gịnị ka regenerative braking na-eme?", options: ["Ọ na-eji moto ebelata ọsọ ụgbọala ma tinyeghachi ike na batrị", "Ọ na-agbakwunye mmiri breki n'onwe ya", "Ọ na-chaja ụgbọala site na tank mmanụ ụgbọala", "Ọ na-agbanyụ batrị volt 12"], answer: 0, why: "Moto na-arụ ọrụ dị ka jenerẹtọ mgbe a na-ebelata ọsọ, na-ezighachi ike na batrị." }
          ]
        },
        {
          title: "Nchekwa high-voltage: mara mgbe ị ga-akwụsị",
          objectives: ["O2"],
          minutes: 6,
          goal: "Depụta ihe egwu high-voltage dị n'ụlọ ọrụ mmezi na iwu nchekwa maka nke ọ bụla.",
          text: [
            "Usoro high-voltage nwere ike ịkpata ọkụ eletrik ịma mmadụ (shock), ọkụ ịgba mmadụ na arc flash. Ọ nwere ike ịnọgide na-adị ize ndụ mgbe a gbanyụrụ ụgbọala, batrị mebiri emebi nwekwara ike ịgba ọkụ, ọbụlagodi ọtụtụ awa ma ọ bụ ụbọchị mgbe e mesịrị.",
            "Iwu mbụ maka onye ọrụ ọhụrụ: emetụla eriri oroma, ngwugwu batrị, ma ọ bụ akụkụ ọ bụla nwere akara ịdọ aka na ntị high-voltage aka. Naanị teknịshan a zụrụ azụ, nwere ikike, na-arụ ọrụ na usoro high-voltage. Ha na-agbaso ozi mmezi nke ụlọ ọrụ mere ụgbọala ahụ iji gbanyụọ usoro ahụ, chere oge o kwuru, ma nwalee na ọkụ adịghịzi na ya.",
            "Teknịshan a zụrụ azụ na-eyi glọv insulated e mere maka volt ahụ, nke a na-elele tupu oge ọ bụla e ji ya, ma na-eji lockout/tagout ka onye ọ bụla ghara ịgbanwughachi ọkụ mgbe ha na-arụ ọrụ. Iwu lockout/tagout nke OSHA (ụlọ ọrụ gọọmentị US na-ahụ maka nchekwa ọrụ) bụ 29 CFR 1910.147.",
            "Iwu ndị ọzọ nke ụlọ ọrụ mmezi ka dị: bulie ụgbọala naanị n'ebe ibuli (lift points) ụlọ ọrụ mere ya kwuru (ngwugwu batrị dị n'okpuru), mee ka ebe ahụ dị ọcha, ma gwa onye isi gbasara batrị ọ bụla mebiri emebi, na-agba mmiri, na-anwụ anwụrụ ọkụ ma ọ bụ na-ekpo ọkụ. Pụọ n'ebe ọ nọ, anwala idozi ya."
          ],
          steps: ["Lelee maka eriri oroma na akara ịdọ aka na ntị high-voltage.", "Emetụla ha aka ma ọ bụrụ na a zụbeghị gị ma nye gị ikike.", "Bulie naanị n'ebe ibuli ụlọ ọrụ mere ụgbọala kwuru.", "Kọọ batrị ọ bụla mebiri emebi, na-ekpo ọkụ, na-anwụ anwụrụ ọkụ ma ọ bụ na-agba mmiri, ma pụọ n'ebe ọ nọ.", "Teknịshan a zụrụ azụ: gbanyụọ, chere, nwalee, mee lockout/tagout, dị ka ozi mmezi si kwuo."],
          words: [["Electric shock", "mmerụ ahụ mgbe ọkụ eletrik gafere n'ahụ gị."], ["Arc flash", "mgbawa ọkụ na ìhè na mberede site n'ọkụ eletrik na-awụfe n'ikuku."], ["Nwere ikike (authorized)", "onye were gị n'ọrụ kwere ka i mee ya n'ihi na i nwere ọzụzụ kwesịrị ekwesị."], ["Glọv insulated", "glọv rọba pụrụ iche e mere iji chebe gị pụọ na volt ụfọdụ."], ["Lockout/tagout", "nzọụkwụ na-agbanyụ ma kpọchie ọkụ ka onye ọ bụla ghara ịgbanwughachi ya mgbe a na-arụ ọrụ."], ["Ozi mmezi (service information)", "nzọụkwụ mmezi gọọmentị nke ụlọ ọrụ mere ụgbọala ahụ."], ["Ebe ibuli (lift point)", "ebe dị n'okpuru ụgbọala ebe ọ dị mma ibuli ya."]],
          slides: [
            { title: "Ihe egwu ndị ahụ", bullets: ["Shock, ọkụ ịgba mmadụ na arc flash", "Ọ nwere ike ịdị ize ndụ mgbe a gbanyụrụ ụgbọala", "Batrị mebiri emebi nwere ike ịgba ọkụ mgbe e mesịrị"] },
            { title: "Iwu mbụ maka ndị ọrụ ọhụrụ", bullets: ["Emetụla eriri oroma ma ọ bụ ngwugwu batrị aka", "Emetụla akụkụ nwere akara high-voltage aka", "Naanị teknịshan a zụrụ azụ, nwere ikike, na-arụ ọrụ ahụ"] },
            { title: "Otu teknịshan a zụrụ azụ si arụ ọrụ", bullets: ["Ha na-agbaso ozi mmezi nke ụlọ ọrụ mere ụgbọala", "Gbanyụọ, chere, nwalee na ọkụ adịghịzi", "Glọv insulated kwesịrị ekwesị; lockout/tagout"] },
            { title: "Iwu kwa ụbọchị n'ụlọ ọrụ mmezi", bullets: ["Bulie naanị n'ebe ibuli ụlọ ọrụ mere ụgbọala kwuru", "Kọọ batrị mebiri emebi, na-ekpo ọkụ ma ọ bụ na-anwụ anwụrụ ọkụ", "Pụọ n'ebe ọ nọ; anwala idozi ya"] }
          ],
          sources: [
            { name: "OSHA: Ịchịkwa ike dị ize ndụ (lockout/tagout)", url: "https://www.osha.gov/control-hazardous-energy" },
            { name: "U.S. Department of Energy, Alternative Fuels Data Center: Nchekwa EV na nzaghachi mberede", url: "https://afdc.energy.gov/vehicles/electric-maintenance" },
            { name: "U.S. Bureau of Labor Statistics: Teknịshan mmezi ụgbọala na ndị mekanik", url: "https://www.bls.gov/ooh/installation-maintenance-and-repair/automotive-service-technicians-and-mechanics.htm" }
          ],
          tryIt: "Ọnọdụ omume: EV bịara mgbe obere ihe mberede gasịrị. E nwere ebe danyere n'okpuru ụgbọala n'akụkụ batrị, na isi ọjọọ na-esi ike. Onye ọrụ ibe gị kwuru, \"Naanị wepụ eriri oroma ahụ ka anyị bulie ya.\" Na akwụkwọ, mee ndepụta nwere kọlụm abụọ: Ihe egwu na Ihe m ga-eme. Dee opekata mpe ahịrị anọ.",
          youCanNow: "ịhụ ihe egwu high-voltage n'ụlọ ọrụ mmezi ma kwuo iwu nchekwa maka nke ọ bụla, gụnyere mgbe ị ga-akwụsị ma kpọọ teknịshan a zụrụ azụ.",
          quickCheck: [
            { objective: "O2", q: "Ị bụ onye ọhụrụ, ị hụkwara eriri oroma n'okpuru ụgbọala ị na-arụ ọrụ na ya. Gịnị ka ị ga-eme?", options: ["Wepụ ya ka ihe dị mma", "Dọpụ ya n'ụzọ", "Kechie ya na tape", "Emetụla ya aka; gwa teknịshan a zụrụ azụ"], answer: 3, why: "Eriri oroma na-ebu high voltage; naanị teknịshan a zụrụ azụ, nwere ikike, na-arụ ọrụ na ha." },
            { objective: "O2", q: "Gịnị ka lockout/tagout bụ maka ya?", options: ["Ịkpọchi ụlọ ọrụ mmezi n'abalị", "Ịhụ na onye ọ bụla enweghị ike ịgbanwughachi ọkụ mgbe a na-arụ ọrụ", "Itinye akara na taya maka ndebe", "Ịkpọchi igodo onye ahịa"], answer: 1, why: "Lockout/tagout na-eme ka ọkụ nọrọ gbanyụọ mgbe mmadụ na-arụ ọrụ na usoro ahụ." }
          ]
        },
        {
          title: "Ntọala nchaja na mgbakọ nchaja (naanị omume)",
          objectives: ["O3"],
          minutes: 6,
          goal: "Gbakọọ ike achọrọ na oge nchaja site na nọmba omume.",
          text: [
            "E nwere ọkwa nchaja atọ a na-ahụkarị na US. Level 1 na-eji soket volt 120 nkịtị, ọ dịkwa nwayọọ. Level 2 na-eji volt 240 n'ụlọ ma ọ bụ volt 208 n'ọtụtụ azụmahịa; ọ bụ chaja ọha a na-ahụkarị. DC fast charging na-ezipu DC ozugbo na batrị, ọ bụkwa nke kacha ọsọ.",
            "Plọg a na-ahụkarị bụ J1772 (Level 1 na 2), CCS (J1772 gbakwunyere pin abụọ maka DC fast charging) na J3400, nke a na-akpọkwa NACS, nke sitere na nhazi Tesla. Itinye chaja n'ụlọ ma ọ bụ n'azụmahịa bụ ọrụ eletrik maka onye eletrik nwere akwụkwọ ikike (licensed electrician).",
            "A na-atụ nha batrị na kilowatt-hour (kWh). A na-atụ ike chaja na kilowatt (kW). Usoro omume: awa = kWh achọrọ / kW chaja. Nọmba niile ebe a bụ nke e mepụtara naanị maka omume. Nchaja n'ezie na-adị nwayọọ ka batrị na-ejupụta, ike na-efunahụkwa, nke na-eme ka ọ were ogologo oge."
          ],
          steps: ["Chọta nha batrị na kWh.", "Gbakọọ ole n'ime ya ị chọrọ: kWh batrị x (pasent ị ga-agbakwunye / 100).", "Kee kWh achọrọ site na kW chaja.", "Dee azịza na awa ma kwuo na ọ bụ atụmatụ (estimate)."],
          words: [["Level 1", "nchaja nwayọọ site na soket volt 120 nkịtị."], ["Level 2", "nchaja ka ọsọ na volt 240 ma ọ bụ 208."], ["DC fast charging", "nchaja kacha ọsọ, na-ezipu DC ozugbo na batrị."], ["Kilowatt-hour (kWh)", "ihe e ji atụ ike (energy); a na-atụ nha batrị na kWh."], ["Kilowatt (kW)", "ihe e ji atụ ike (power); a na-atụ ọsọ chaja na kW."], ["J1772, CCS, J3400 (NACS)", "aha plọg nchaja EV a na-ahụkarị na US."]],
          slides: [
            { title: "Ọkwa nchaja atọ", bullets: ["Level 1: soket volt 120, nwayọọ", "Level 2: volt 240 ma ọ bụ 208, ọtụtụ chaja ọha", "DC fast: DC ozugbo na batrị"] },
            { title: "Plọg", bullets: ["J1772 maka Level 1 na 2", "CCS na-agbakwunye pin DC fast", "J3400 (NACS), sitere na nhazi Tesla"] },
            { title: "Mgbakọ nchaja (naanị omume)", bullets: ["Awa = kWh achọrọ / kW chaja", "Ọmụmaatụ: 60 kWh x 50% = 30 kWh; 30 / 7.5 kW = awa 4"] },
            { title: "N'ezie ọ na-adị nwayọọ karị", bullets: ["Nchaja na-adị nwayọọ ka batrị na-ejupụta", "Azịza bụ atụmatụ", "Itinye chaja bụ ọrụ onye eletrik nwere akwụkwọ ikike"] }
          ],
          sources: [
            { name: "U.S. Department of Energy, Alternative Fuels Data Center: Ịchaja ụgbọala eletrik", url: "https://afdc.energy.gov/fuels/electricity-stations" },
            { name: "EVITP: Electric Vehicle Infrastructure Training Program (maka ndị eletrik nwere akwụkwọ ikike)", url: "https://evitp.org/" }
          ],
          tryIt: "Naanị omume. Gbakọọ na akwụkwọ ma gosi otu i si gbakọọ ya: (a) Batrị 80 kWh si na 20% gaa na 80%. kWh ole ka nke ahụ bụ? (b) Ogologo oge ole ka nke ahụ ga-ewe na chaja Level 2 nke 9.6 kW? (c) Batrị 40 kWh chọrọ 10 kWh na soket Level 1 nke 1.25 kW. Awa ole? Azịza iji lelee onwe gị: (a) 48 kWh, (b) awa 5, (c) awa 8.",
          youCanNow: "ịkpọ aha ọkwa nchaja na plọg, ma gbakọọ oge nchaja site na nọmba omume.",
          quickCheck: [
            { objective: "O3", q: "Naanị omume: ị chọrọ 24 kWh, chaja na-enye 6 kW. Ihe dị ka ogologo oge ole?", options: ["Awa 2", "Awa 18", "Awa 4", "Awa 30"], answer: 2, why: "Awa = kWh / kW, ya mere 24 / 6 = awa 4." },
            { objective: "O3", q: "Kedu ọkwa nchaja na-eji soket volt 120 nkịtị dị n'ụlọ?", options: ["Level 1", "Level 2", "DC fast charging", "Naanị J3400"], answer: 0, why: "Level 1 na-eji soket volt 120 nkịtị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Otu EV si arụ ọrụ na otu ị ga-esi nọrọ na nchekwa",
        questions: [
          { objective: "O1", q: "Kedu akụkụ na-agbanwe DC si na batrị ka ọ bụrụ AC maka moto?", options: ["Batrị volt 12", "Inverter", "Brake pad", "Ọnụ ụzọ ebe nchaja"], answer: 1, why: "Inverter na-agbanwe DC batrị ka ọ bụrụ AC maka moto." },
          { objective: "O1", q: "Gịnị ka DC-to-DC converter na-eme?", options: ["Ọ na-ejupụta nnukwu batrị site na mgbidi", "Ọ na-atụgharị wiil", "Ọ na-chaja batrị volt 12 site n'usoro high-voltage", "Ọ na-eme ka ime ụgbọala dị jụụ"], answer: 2, why: "Ọ na-ebelata high voltage iji mee ka batrị volt 12 nọrọ na chaja." },
          { objective: "O2", q: "A gbanyụrụ ụgbọala. Ọ dị mma imetụ usoro high-voltage aka?", options: ["Ee, mgbe niile", "Ee, ma ọ bụrụ na redio gbanyụrụ", "Ee, mgbe otu nkeji gasịrị", "Ọ bụghị n'ezie; naanị teknịshan a zụrụ azụ na-agbaso nzọụkwụ ịgbanyụ na ịnwale"], answer: 3, why: "High voltage nwere ike ịnọgide na-adị ize ndụ mgbe a gbanyụrụ ụgbọala; teknịshan a zụrụ azụ na-ebu ụzọ gbanyụọ, chere ma nwalee." },
          { objective: "O2", q: "Batrị dị n'okpuru ụgbọala na-ekpo ọkụ ma na-anwụ anwụrụ ọkụ. Gịnị ka ị ga-eme?", options: ["Pụọ n'ebe ọ nọ ma gwa onye isi ozugbo", "Gbaa ya mmiri n'onwe gị", "Bulie ụgbọala ka i lee ya", "Wepụ eriri oroma"], answer: 0, why: "Batrị mebiri emebi nwere ike ịgba ọkụ; pụọ ma kọọ ya." },
          { objective: "O3", q: "Naanị omume: batrị 60 kWh, gbakwunye 50%. kWh ole ka nke ahụ bụ?", options: ["50 kWh", "110 kWh", "30 kWh", "10 kWh"], answer: 2, why: "60 x 50 / 100 = 30 kWh." }
        ]
      }
    },
    {
      name: "Isi 2: Ọrụ mmezi na ụzọ gị gaa n'ọrụ",
      lessons: [
        {
          title: "Ọrụ mmezi EV kwa ụbọchị",
          objectives: ["O4"],
          minutes: 5,
          goal: "Dee ndepụta ọrụ mmezi low-voltage maka EV nke na-agbaso ozi mmezi nke ụlọ ọrụ mere ụgbọala ahụ.",
          text: [
            "EV chọrọ nlekọta na-erughị nke ụgbọala mmanụ ụgbọala: ọ dịghị mgbanwe mmanụ injin, spark plug ma ọ bụ ọkpọ anwụrụ (exhaust). Mana ha ka chọrọ mmezi, ọtụtụ n'ime ya bụkwa ọrụ low-voltage nke teknịshan ọhụrụ nwere ike ịmụta.",
            "Taya: EV na-adịkarị arọ, ya mere lelee ikuku taya, ahịrị taya (tread) na otu o si gwụ, ma gbanwee ọnọdụ taya (rotate) dị ka ụlọ ọrụ mere ya kwuru. Breki: regenerative braking pụtara na pad na-agwụ nwayọọ, mana a ka ga-elele breki, akụkụ a na-ejighị eme ihe nke ukwuu nwekwara ike ịmị nchara ma ọ bụ kpọchie. Lelekwa wiper, ọkụ, suspension na akụkụ steering, cabin air filter na batrị volt 12.",
            "Ụfọdụ EV na-eji mmiri coolant maka batrị na ihe eletrọnịk. Nlele na mgbanwe na-agbaso usoro oge na nzọụkwụ nke ụlọ ọrụ mere ụgbọala; emeghela akụkụ jụrụ oyi high-voltage ọ bụla ma ọ bụrụ na a zụbeghị gị.",
            "Jiri ozi mmezi nke ụlọ ọrụ mere ụgbọala ahụ mgbe niile maka ezi ụgbọala ahụ: usoro oge, ebe ibuli na nzọụkwụ. Ọ bụrụ na ọrụ metụrụ ihe ọ bụla oroma ma ọ bụ nwere akara high voltage, kwụsị ma nyefee ya teknịshan a zụrụ azụ."
          ],
          steps: ["Chọọ ozi mmezi maka ezi make, model na afọ ụgbọala ahụ.", "Bulie naanị n'ebe ibuli e depụtara.", "Lelee taya, breki, wiper, ọkụ, suspension na steering.", "Lelee cabin air filter na batrị volt 12.", "Lelee coolant naanị dị ka ozi mmezi si kwuo.", "Kwụsị ma nyefee ihe ọ bụla oroma ma ọ bụ nwere akara high voltage."],
          words: [["Low-voltage", "usoro volt 12 nkịtị, dị ka ọkụ na redio, nke ka mma ịrụ ọrụ na ya."], ["Mgbanwe taya (tire rotation)", "ịkwaga taya n'ebe dị iche iche ka ha gwụ otu ụdị."], ["Cabin air filter", "filter na-eme ka ikuku na-abata n'ime ụgbọala dị ọcha."], ["Coolant", "mmiri na-egbochi akụkụ ikpo ọkụ karịa."], ["Usoro oge mmezi (service schedule)", "ndepụta ụlọ ọrụ mere ụgbọala gbasara ihe a ga-elele na mgbe."]],
          slides: [
            { title: "Nlekọta na-erughị, ọ bụghị enweghị", bullets: ["Enweghị mgbanwe mmanụ injin, spark plug ma ọ bụ exhaust", "Ọ ka chọrọ nlele oge niile"] },
            { title: "Taya na breki", bullets: ["Ụgbọala dị arọ: lelee ikuku, tread na otu o si gwụ", "Breki na-agwụ nwayọọ mana nwere ike ịmị nchara ma ọ bụ kpọchie", "Gbanwee ọnọdụ taya dị ka ụlọ ọrụ mere ya kwuru"] },
            { title: "Nlele ndị ọzọ", bullets: ["Wiper, ọkụ, suspension, steering", "Cabin air filter na batrị volt 12", "Coolant naanị dị ka ozi mmezi si kwuo"] },
            { title: "Mara oke gị", bullets: ["Jiri ozi mmezi maka ezi ụgbọala ahụ", "Bulie naanị n'ebe e depụtara", "Oroma ma ọ bụ akara high-voltage? Kwụsị ma nyefee ya"] }
          ],
          sources: [{ name: "U.S. Department of Energy, Alternative Fuels Data Center: Mmezi ụgbọala eletrik", url: "https://afdc.energy.gov/vehicles/electric-maintenance" }],
          tryIt: "Họrọ ụdị EV ọ bụla ị hụtụrụla. Na akwụkwọ, dee ndepụta ọrụ mmezi nwere opekata mpe ihe 8 maka nleta nkịtị. Kaa nke ọ bụla akara LV (low-voltage, ọ dị mma maka gị) ma ọ bụ STOP (high-voltage, nyefee ya). Mgbe ahụ lelee: i tinyere ihe ọ bụla oroma na kọlụm LV? Dozie ya ma ọ bụrụ na i mere ya.",
          youCanNow: "ide ndepụta ọrụ mmezi low-voltage maka EV ma kwuo ọrụ ndị ị ga-enyefe teknịshan high-voltage a zụrụ azụ.",
          quickCheck: [
            { objective: "O4", q: "Kedu ọrụ EV ACHỌGHỊ?", options: ["Mgbanwe ọnọdụ taya", "Mgbanwe mmanụ injin", "Nlele breki", "Nlele cabin air filter"], answer: 1, why: "Ụgbọala eletrik zuru oke enweghị mmanụ injin a ga-agbanwe." },
            { objective: "O4", q: "Ebee ka ị ga-ahụ ezi ebe ibuli na usoro oge mmezi maka EV?", options: ["Ịkọ nkọ site n'ụgbọala ọzọ", "Vidiyo na soshal midia", "Ihe onye ahịa chetara", "Ozi mmezi nke ụlọ ọrụ mere ụgbọala maka ezi ụgbọala ahụ"], answer: 3, why: "Ozi mmezi nke ụlọ ọrụ mere ụgbọala nwere ezi ebe ibuli na usoro oge." }
          ]
        },
        {
          title: "Asambodo na ọzụzụ maka ọrụ EV",
          objectives: ["O5"],
          minutes: 5,
          goal: "Depụta nzọụkwụ asambodo gaa n'ọrụ teknịshan EV, ya na isi iyi gọọmentị maka nke ọ bụla.",
          text: [
            "Ọtụtụ teknịshan ụgbọala na-amalite na mmemme ọzụzụ n'ụlọ akwụkwọ sekọndrị, community college ma ọ bụ ụlọ akwụkwọ teknụzụ, ma ọ bụ malite dị ka onye na-agbanwe mmanụ ma ọ bụ taya ma mụta n'ọrụ. Apprenticeship na mmemme ọzụzụ nke ụlọ ọrụ mere ụgbọala bụ ụzọ ndị ọzọ isi banye.",
            "ASE (National Institute for Automotive Service Excellence) na-enye asambodo teknịshan a kacha mara. Ule L3 ya, Light Duty Hybrid/Electric Vehicle Specialist, na-ekpuchi ịchọpụta nsogbu usoro batrị, usoro na-akwọ ụgbọala, power electronics na ihe ndị ọzọ. Tupu i nwee ike ideba aha maka L3, ị ga-agafe A6 (Electrical/Electronic Systems) na A8 (Engine Performance). Asambodo ASE chọkwara ahụmịhe ọrụ aka; lelee iwu dị ugbu a na ase.com.",
            "Ọtụtụ ụlọ ọrụ na-eme ụgbọala na-azụkwa teknịshan n'EV nke ha. Ndị eletrik na-etinye chaja nwere ike ịga ọzụzụ EVITP, nke bụ maka ndị eletrik nwere akwụkwọ ikike. Ụgwọ, iwu ule na ihe achọrọ maka ahụmịhe na-agbanwe, ya mere lelee peeji gọọmentị ọ bụla tupu i kwụọ ụgwọ.",
            "Ihe ọmụmụ a na-akwado gị ịmalite. Ọ naghị enye gị asambodo."
          ],
          steps: ["Chọọ mmemme teknụzụ ụgbọala na apprenticeship dị nso gị.", "Gụọ peeji ASE L3 ma dee ihe ọ chọrọ tupu (A6 na A8).", "Gụọ iwu ASE gbasara ahụmịhe ọrụ.", "Jụọ ụlọ ọrụ mmezi na ndị na-ere ụgbọala dị nso asambodo na ọzụzụ ụlọ ọrụ mere ụgbọala ha chọrọ.", "Dee nzọụkwụ ọ bụla, ụbọchị ebumnuche na peeji gọọmentị."],
          words: [["ASE", "National Institute for Automotive Service Excellence, nke na-enye teknịshan ụgbọala asambodo."], ["Asambodo (certification)", "ihe akaebe na i gafere ule ma mezuo iwu ahụmịhe."], ["Ihe achọrọ tupu (prerequisite)", "ihe ị ga-emecha tupu i nwee ike ịmalite nzọụkwụ na-esote."], ["Ịchọpụta nsogbu (diagnose)", "ịchọpụta ihe mebiri na ihe kpatara ya."], ["EVITP", "Electric Vehicle Infrastructure Training Program, nke na-azụ ndị eletrik nwere akwụkwọ ikike ka ha tinye chaja."]],
          slides: [
            { title: "Ụzọ isi banye", bullets: ["Mmemme ụgbọala n'ụlọ akwụkwọ ma ọ bụ community college", "Malite dị ka onye na-agbanwe mmanụ ma ọ bụ taya", "Apprenticeship na ọzụzụ ụlọ ọrụ mere ụgbọala"] },
            { title: "Ụzọ ASE gaa n'ọrụ EV", bullets: ["Gafee A6 Electrical/Electronic Systems", "Gafee A8 Engine Performance", "Mgbe ahụ L3 Light Duty Hybrid/Electric Vehicle Specialist"] },
            { title: "Ihe ndị ọzọ ị ga-ama", bullets: ["ASE chọkwara ahụmịhe ọrụ aka", "Ụlọ ọrụ mere ụgbọala na-azụ ndị mmadụ n'EV nke ha", "EVITP bụ maka ndị eletrik nwere akwụkwọ ikike na-etinye chaja"] },
            { title: "Lelee tupu i kwụọ ụgwọ", bullets: ["Iwu na ụgwọ na-agbanwe: jiri ase.com", "Dee nzọụkwụ ọ bụla, ụbọchị na isi iyi", "Ihe ọmụmụ a na-akwado gị; ọ naghị enye gị asambodo"] }
          ],
          sources: [
            { name: "ASE: Ule L3 Light Duty Hybrid/Electric Vehicle Specialist", url: "https://www.ase.com/tests/l3/" },
            { name: "ASE: Ule", url: "https://www.ase.com/tests" },
            { name: "EVITP: Electric Vehicle Infrastructure Training Program", url: "https://evitp.org/" },
            { name: "U.S. Bureau of Labor Statistics: Otu esi aghọ teknịshan mmezi ụgbọala", url: "https://www.bls.gov/ooh/installation-maintenance-and-repair/automotive-service-technicians-and-mechanics.htm" }
          ],
          tryIt: "Meghee peeji ule ASE L3. Dee ule abụọ ị ga-ebu ụzọ gafee na isiokwu atọ L3 na-ekpuchi. Mgbe ahụ chọọ mmemme teknụzụ ụgbọala ma ọ bụ apprenticeship dị nso gị ma dee aha ya na adreesị weebụ ya.",
          youCanNow: "ịkpọ aha ụzọ ASE gaa n'ọrụ EV (A6, A8, mgbe ahụ L3), kwuo ihe ọzọ ọ chọrọ, ma chọta ọzụzụ dị nso gị na peeji gọọmentị.",
          quickCheck: [
            { objective: "O5", q: "Kedu ule ASE bụ ule ọkachamara ụgbọala hybrid/eletrik?", options: ["A1", "L3", "A5", "T2"], answer: 1, why: "L3 bụ ule ASE Light Duty Hybrid/Electric Vehicle Specialist." },
            { objective: "O5", q: "Gịnị ka ị ga-agafe tupu i debanye aha maka ASE L3?", options: ["A6 na A8", "Ule CDL", "Ule sayensị GED", "EPA Section 608"], answer: 0, why: "ASE chọrọ A6 Electrical/Electronic Systems na A8 Engine Performance tupu L3." }
          ]
        },
        {
          title: "Atụmatụ Mmalite Teknịshan EV gị",
          objectives: ["O6"],
          minutes: 6,
          goal: "Dee Atụmatụ Mmalite Teknịshan EV nwere ụbọchị na akụkụ nka maka résumé.",
          text: [
            "Ugbu a, chịkọta ihe niile n'otu peeji ị nwere ike iburu gaa na mmemme ọzụzụ, ụlọ ọrụ mmezi ma ọ bụ onye na-ere ụgbọala. Atụmatụ nwere ezi ụbọchị na-egosi na ị dị njikere n'ezie.",
            "Atụmatụ gị nwere akụkụ isii: otu EV si arụ ọrụ n'okwu nke gị; iwu nchekwa high-voltage gị; ajụjụ nchaja omume abụọ na-egosi otu i si gbakọọ ha; ndepụta ọrụ mmezi low-voltage; ụzọ asambodo gị nwere ụbọchị na isi iyi; na akụkụ résumé \"Nka EV\".",
            "Maka résumé, dee ihe bụ eziokwu ị nwere ike ime ugbu a, n'ahịrị dị mkpụmkpụ na-amalite n'okwu omume. Dịka ọmụmaatụ: \"Ama m akụkụ ndị bụ isi nke EV na usoro na-akwọ ụgbọala hybrid.\" \"A zụrụ m n'ịmara nchekwa high-voltage: ana m amata eriri oroma ma kwụsị kpọọ teknịshan tozuru oke.\" \"Enwere m ike ịgbakọ oge nchaja site na nha batrị na chaja.\" Tinye ọrụ gara aga na-enyere aka: nlekọta ụgbọala, ọrụ taya ma ọ bụ mmanụ, ụgbọala ndị agha, ọrụ inyeaka eletrik ma ọ bụ ngwaọrụ ụlọ nkwakọba ngwaahịa.",
            "Ndị agha lara ezumike: ọtụtụ nka ụgbọala ndị agha na eletrik na-aba uru ebe a. Jụọ ebe enyemaka ọrụ (workforce center) dị nso gị gbasara enyemaka maka ọzụzụ."
          ],
          steps: ["Dee nkọwa ahịrịokwu 3 ruo 4 gị gbasara otu EV si arụ ọrụ.", "Dee iwu nchekwa high-voltage gị.", "Tinye ajụjụ nchaja omume abụọ na otu i si gbakọọ ha.", "Tinye ndepụta ọrụ mmezi low-voltage gị.", "Dee ụzọ asambodo gị nwere ụbọchị ebumnuche na peeji isi iyi.", "Dee ahịrị résumé 3 na-amalite n'okwu omume."],
          words: [["Résumé", "obere akwụkwọ na-edepụta nka gị, ọrụ gị na ọzụzụ gị maka ndị were mmadụ n'ọrụ."], ["Ụbọchị ebumnuche (target date)", "ụbọchị ị na-eme atụmatụ imecha nzọụkwụ."], ["Ebe enyemaka ọrụ (workforce center)", "ọfịs ọha efu na-enyere ndị mmadụ aka ịchọta ọrụ na ọzụzụ; a na-akpọ ọtụtụ n'ime ha American Job Centers."]],
          slides: [
            { title: "Otu peeji, akụkụ isii", bullets: ["Otu EV si arụ ọrụ; iwu nchekwa", "Mgbakọ nchaja; ndepụta ọrụ mmezi", "Ụzọ asambodo nwere ụbọchị; akụkụ résumé"] },
            { title: "Ezi ụbọchị", bullets: ["Mgbe ị ga-amalite mmemme ọzụzụ", "Mgbe ị na-achọ ịgafe A6 na A8", "Mgbe ị na-achọ L3, mgbe ahụmịhe ọrụ gasịrị"] },
            { title: "Résumé: Nka EV", bullets: ["Ahịrị dị mkpụmkpụ na-amalite n'okwu omume", "Naanị ihe eziokwu ị nwere ike ime", "Tinye ọrụ gara aga gbasara ụgbọala, ngwaọrụ ma ọ bụ eletrik"] },
            { title: "Nweta enyemaka", bullets: ["American Job Centers na enyemaka ndị agha lara ezumike", "Jụọ ụlọ ọrụ mmezi na ndị na-ere ụgbọala dị nso ihe ha chọrọ"] }
          ],
          sources: [{ name: "CareerOneStop: Chọta American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }],
          tryIt: "Ọrụ ikpeazụ: mee Atụmatụ Mmalite Teknịshan EV gị n'otu peeji nwere akụkụ isii niile. Tinye ezi ụbọchị n'akụkụ nzọụkwụ ọzụzụ na asambodo ọ bụla, na adreesị weebụ maka ihe ọ bụla achọrọ i lelere. Gụpụta ahịrị résumé gị n'olu dị elu dị ka à ga-asị na ị nọ n'ajụjụ ọnụ ọrụ (interview).",
          youCanNow: "igosi ụlọ ọrụ mmezi ma ọ bụ mmemme ọzụzụ atụmatụ e dere ede maka ịmalite ọrụ EV, nwere ụbọchị, isi iyi na akụkụ nka maka résumé.",
          quickCheck: [
            { objective: "O6", q: "Kedu ahịrị résumé kacha mma maka ọrụ mbido n'ụlọ ọrụ mmezi EV?", options: ["\"ASE L3 certified.\" (mgbe ọ bụghị eziokwu)", "\"Onye hụrụ ụgbọala n'anya.\"", "\"Enwere m ike ịgbakọ oge nchaja site na nha batrị na chaja.\"", "\"Tesla na-amasị m.\""], answer: 2, why: "Ọ bụ eziokwu ma doo anya; ekwula mgbe ọ bụla na i nwere asambodo i na-enweghị." },
            { objective: "O6", q: "Atụmatụ gị kwuru \"Nweta asambodo ASE.\" Gịnị ga-eme ka ọ sie ike karị?", options: ["Iwepụ ya", "Ide ya na mkpụrụedemede ukwu", "Itinye aha enyi gị", "Ịkpọ aha A6, A8 na L3 ya na ụbọchị ebumnuche na peeji ase.com"], answer: 3, why: "Aha ule, ụbọchị na isi iyi gọọmentị na-eme ka ọchịchọ ghọọ atụmatụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ọrụ mmezi na ụzọ gị gaa n'ọrụ",
        questions: [
          { objective: "O4", q: "Gịnị mere a ka ji elele breki EV n'agbanyeghị na ha na-agwụ nwayọọ?", options: ["Akụkụ a na-ejighị eme ihe nke ukwuu nwere ike ịmị nchara ma ọ bụ kpọchie", "EV enweghị breki", "Breki na-chaja batrị zuru oke", "Ọ dịghị mgbe ha chọrọ nlele"], answer: 0, why: "Regenerative braking pụtara na a na-eji breki eme ihe ntakịrị, ya mere akụkụ breki nwere ike ịmị nchara ma ọ bụ kpọchie." },
          { objective: "O4", q: "N'ime ndepụta ọrụ mmezi gị, otu ọrụ metụtara eriri oroma. Kedu akara ị ga-enye ya?", options: ["LV, ọ dị mma maka m", "Hapụ ya ma ọ gwala onye ọ bụla", "STOP: nyefee ya teknịshan high-voltage a zụrụ azụ", "Mee ya ngwa ngwa"], answer: 2, why: "Ihe ọ bụla oroma ma ọ bụ nwere akara high voltage na-aga n'aka teknịshan a zụrụ azụ, nwere ikike." },
          { objective: "O5", q: "Gịnị ọzọ ka asambodo ASE chọrọ ma e wezụga ịgafe ule?", options: ["Akara mmụta mahadum", "Ahụmịhe ọrụ aka", "CDL", "Inwe EV"], answer: 1, why: "Asambodo ASE chọrọ ahụmịhe ọrụ tinyere ịgafe ule." },
          { objective: "O5", q: "Onye ka ọzụzụ itinye chaja EVITP bụ maka ya?", options: ["Onye ọ bụla nwere ekwentị", "Ndị na-ere ụgbọala", "Ndị ahịa", "Ndị eletrik nwere akwụkwọ ikike"], answer: 3, why: "EVITP na-azụ ndị eletrik nwere akwụkwọ ikike na-etinye chaja EV." },
          { objective: "O6", q: "Gịnị ka nzọụkwụ ọ bụla n'Atụmatụ Mmalite Teknịshan EV gị kwesịrị inwe?", options: ["Ụbọchị ebumnuche na peeji gọọmentị i lelere", "Ọnụ ahịa i chere na ọ dị", "Mbịanye aka enyi gị", "Ọ dịghị ihe ọzọ"], answer: 0, why: "Ụbọchị na isi iyi na-eme ka nzọụkwụ ọ bụla bụrụ eziokwu ma bụrụ ihe a pụrụ ilele." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmalite Ọrụ Teknịshan Ụgbọala Eletrik (EV)",
    questions: [
      { objective: "O1", q: "Ebee ka a na-ahụkarị ngwugwu batrị high-voltage na EV?", options: ["N'ime mkpuchi trunk", "N'okpuru ala ụgbọala", "N'azụ redio", "N'ime steering wheel"], answer: 1, why: "Ọtụtụ ngwugwu batrị EV na-anọ n'okpuru ala ụgbọala." },
      { objective: "O1", q: "Gịnị na-enye ọkụ ụgbọala na redio ike na EV?", options: ["Batrị volt 12", "Taya", "Eriri nchaja", "Tank mmanụ ụgbọala"], answer: 0, why: "Batrị volt 12 nkịtị ka na-akwado usoro low-voltage." },
      { objective: "O1", q: "Gịnị bụ plug-in hybrid (PHEV)?", options: ["Ụgbọala na-enweghị batrị", "Ụgbọala mmanụ ụgbọala nwere chaja ekwentị", "EV na-enweghị moto", "Hybrid nwere batrị ka ukwuu ị nwere ike chaja site na plọg"], answer: 3, why: "PHEV nwere injin mmanụ ụgbọala na batrị ka ukwuu a na-etinye na plọg." },
      { objective: "O1", q: "Kedu akụkụ na-agbanwe AC si n'ebe nchaja ka ọ bụrụ DC maka batrị?", options: ["Moto", "Brake pad", "Onboard charger", "Cabin air filter"], answer: 2, why: "Onboard charger na-agbanwe AC si n'ebe nchaja ka ọ bụrụ DC maka ngwugwu batrị." },
      { objective: "O2", q: "Dị ka onye ọrụ ọhụrụ, kedu akụkụ ị na-ekwesịghị IMETỤ aka MGBE Ọ BỤLA n'enweghị ọzụzụ?", options: ["Wiper blade", "Eriri high-voltage oroma", "Okpu valvụ taya", "Cabin air filter"], answer: 1, why: "Eriri oroma na-ebu high voltage na-egbu egbu." },
      { objective: "O2", q: "Gịnị bụ arc flash?", options: ["Mgbawa ọkụ na ìhè na mberede site n'ọkụ eletrik na-awụfe n'ikuku", "Ntọala ọkụ ihu ụgbọala", "Ụdị taya", "Plọg nchaja"], answer: 0, why: "Arc flash bụ mgbawa eletrik nwere ike ịgba ọkụ ma merụọ ahụ." },
      { objective: "O2", q: "Tupu teknịshan a zụrụ azụ arụọ ọrụ na high voltage, gịnị ka ọ na-eme?", options: ["Ọ na-eme ka redio daa ụda", "Ọ na-emeghe naanị mkpuchi injin", "Ọ na-eyi glọv owu", "Ọ na-agbanyụ, chere, nwalee na ọkụ adịghịzi, ma mee lockout dị ka ozi mmezi si kwuo"], answer: 3, why: "Ịgbanyụ, ichere, ịnwale na lockout/tagout na-agbaso nzọụkwụ ụlọ ọrụ mere ụgbọala." },
      { objective: "O2", q: "Ebee ka ị ga-ebuli EV na lift ụlọ ọrụ mmezi?", options: ["N'okpuru ngwugwu batrị", "N'ebe ọ bụla dị larịị", "Naanị n'ebe ibuli ụlọ ọrụ mere ụgbọala kwuru", "Site na bompa"], answer: 2, why: "Batrị dị n'okpuru; ebe ibuli e depụtara na-echebe ya na gị." },
      { objective: "O3", q: "Naanị omume: achọrọ 36 kWh na chaja 9 kW. Ogologo oge ole?", options: ["Awa 4", "Awa 45", "Awa 27", "Awa 3"], answer: 0, why: "36 / 9 = awa 4." },
      { objective: "O3", q: "A na-atụ nha batrị na:", options: ["Miles per gallon", "Kilowatt-hour (kWh)", "Pounds per square inch", "Gallon"], answer: 1, why: "A na-atụ ike batrị na kilowatt-hour." },
      { objective: "O3", q: "Kedu ụzọ kacha ọsọ ịchaja n'ọtụtụ oge?", options: ["Level 1", "Level 2", "Jumper volt 12", "DC fast charging"], answer: 3, why: "DC fast charging na-ezipu DC ozugbo na batrị n'ike dị elu." },
      { objective: "O3", q: "Gịnị mere azịza oge nchaja ji bụrụ naanị atụmatụ?", options: ["Chaja anaghị arụ ọrụ mgbe ọ bụla", "Batrị enweghị nha", "Nchaja na-adị nwayọọ ka batrị na-ejupụta, ike na-efunahụkwa", "kWh na kW pụtara otu ihe"], answer: 2, why: "Nchaja n'ezie na-adị nwayọọ ka ọ na-eru njupụta, ụfọdụ ike na-efunahụkwa." },
      { objective: "O4", q: "Kedu ihe dị mma maka ndepụta ọrụ mmezi EV?", options: ["Lelee ikuku taya na tread", "Gbanwee mmanụ injin", "Gbanwee spark plug", "Dozie ọkpọ exhaust"], answer: 0, why: "EV chọrọ nlele taya; ha enweghị mmanụ injin, spark plug ma ọ bụ exhaust." },
      { objective: "O4", q: "Gịnị mere ị ga-eji lekwasị anya n'otu taya EV si agwụ?", options: ["EV enweghị taya", "EV na-adịkarị arọ", "Taya na-chaja batrị", "Taya EV anaghị agwụ agwụ"], answer: 1, why: "Ụgbọala dị arọ nwere ike ime ka taya gwụ ngwa ngwa, ya mere lelee ha oge niile." },
      { objective: "O4", q: "Ebee ka ị ga-ahụ ezi nzọụkwụ coolant maka EV?", options: ["Akwụkwọ ntụziaka ụgbọala mmanụ ụgbọala ọ bụla", "Ịkọ nkọ", "Ihe onye ọrụ ibe gị chetara", "Ozi mmezi nke ụlọ ọrụ mere ụgbọala ahụ"], answer: 3, why: "Nlele coolant EV ọ bụla na-agbaso ozi mmezi nke ụlọ ọrụ mere ya." },
      { objective: "O5", q: "Gịnị ka ASE pụtara?", options: ["Auto Sales Experts", "Association of Safe Electricians", "National Institute for Automotive Service Excellence", "American Solar Energy"], answer: 2, why: "ASE bụ National Institute for Automotive Service Excellence." },
      { objective: "O5", q: "Ebee ka ị ga-elele iwu na ụgwọ ule ASE dị ugbu a?", options: ["ase.com", "Ihe e dere na soshal midia", "Mgbasa ozi ahịa", "Ndetu ochie enyi gị"], answer: 0, why: "Weebụsaịtị gọọmentị ASE nwere iwu dị ugbu a." },
      { objective: "O5", q: "Ihe ọmụmụ a ọ na-enye gị asambodo dị ka teknịshan EV?", options: ["Ee, mgbe ule gasịrị", "Mba; ọ na-akwado gị, asambodo na-esi na ASE na mmemme ndị ọzọ", "Ee, ma ọ bụrụ na i mechaa ya n'otu ụbọchị", "Naanị maka hybrid"], answer: 1, why: "Ihe ọmụmụ a na-akwado gị; asambodo na-esi na ASE, ụlọ ọrụ mere ụgbọala na mmemme a kwadoro." },
      { objective: "O6", q: "Kedu nke dabara n'Atụmatụ Mmalite Teknịshan EV gị?", options: ["Okwuntughe ụlọ akụ gị", "Asambodo i na-enweghị", "Agba ụgbọala kacha amasị gị", "Ụbọchị ebumnuche maka A6, A8 na L3"], answer: 3, why: "Ụbọchị maka nzọụkwụ ọ bụla na-eme ka atụmatụ ahụ bụrụ eziokwu." },
      { objective: "O6", q: "Ezigbo ahịrị résumé kwesịrị ịbụ:", options: ["Ogologo ma edoghị anya", "Gbasara nka ị na-atụ anya ịmụta", "Eziokwu, doro anya ma malite n'okwu omume", "E depụtaghachiri site n'onye ị na-amaghị"], answer: 2, why: "Ndị were mmadụ n'ọrụ na-atụkwasị obi n'ahịrị dị mkpụmkpụ, eziokwu, doro anya." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị gbasara EV?", from: [0, 3, 4, 7, 8, 10, 12, 15, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Otu EV si arụ ọrụ", objective: "O1", notYet: "Ọ hapụrụ ngwugwu batrị ma ọ bụ inverter, ma ọ bụ gbagwojuo ọrụ ha anya.", meets: "Ọ na-akpọ aha ngwugwu batrị, inverter, moto, onboard charger, DC-to-DC converter na batrị volt 12, ma kwuo ihe nke ọ bụla na-arụ.", exceeds: "Ọ na-akọwakwa regenerative braking na ọdịiche dị n'etiti EV, HEV na PHEV." },
      { name: "Iwu nchekwa high-voltage", objective: "O2", notYet: "Ọ naghị ekwu ka a zere eriri oroma na ngwugwu batrị.", meets: "Ọ na-ekwu ka a ghara imetụ akụkụ oroma ma ọ bụ nwere akara high-voltage aka n'enweghị ọzụzụ, ka e jiri ebe ibuli ụlọ ọrụ mere ụgbọala, na ka a kọọ batrị mebiri emebi.", exceeds: "Ọ na-akọwakwa ịgbanyụ, ichere, ịnwale na lockout/tagout, na onye e kwere ka o mee ha." },
      { name: "Mgbakọ nchaja", objective: "O3", notYet: "Mperi mgbakọ, ma ọ bụ e gosighị otu e si gbakọọ ya.", meets: "Ajụjụ abụọ ahụ ziri ezi, e gosikwara usoro na unit.", exceeds: "Ọ na-akọwakwa ihe mere oge n'ezie ga-eji dị ogologo karị." },
      { name: "Ndepụta ọrụ mmezi", objective: "O4", notYet: "O nwere mgbanwe mmanụ injin ma ọ bụ ọrụ high-voltage e kara akara na ọ dị mma.", meets: "Opekata mpe ihe low-voltage 6 ziri ezi, e kara ọrụ high-voltage akara STOP.", exceeds: "Ọ na-ekwu na ihe ọ bụla na-agbaso ozi mmezi nke ụlọ ọrụ mere ụgbọala maka ezi ụgbọala ahụ." },
      { name: "Ụzọ asambodo", objective: "O5", notYet: "Enweghị ụbọchị, ma ọ bụ nzọụkwụ na-enweghị isi iyi.", meets: "Ọ na-akpọ aha ụzọ ọzụzụ na ASE A6, A8 na L3, nke ọ bụla nwere ụbọchị ebumnuche na adreesị weebụ.", exceeds: "Ọ na-agbakwunye mmemme ọzụzụ ụlọ ọrụ mere ụgbọala ma ọ bụ onye were mmadụ n'ọrụ dị nso, na atụmatụ ndabere." },
      { name: "Akụkụ résumé", objective: "O6", notYet: "Ahịrị edoghị anya ma ọ bụ na-ekwu na onye na-amụ ihe nwere asambodo ọ na-enweghị.", meets: "Ahịrị eziokwu atọ na-amalite n'okwu omume ma dabara n'ọrụ ụlọ ọrụ mmezi EV.", exceeds: "Ọ na-ejikọ ọrụ gara aga (nlekọta ụgbọala, ụgbọala ndị agha, eletrik) na ọrụ EV." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe debanyere aha na mmemme teknụzụ ụgbọala, apprenticeship ma ọ bụ ọzụzụ ụlọ ọrụ mere ụgbọala n'ime ụbọchị 90",
      "Ndị na-amụ ihe gafere ASE A6 ma ọ bụ A8 n'ime ọnwa 12 (ha kọọrọ n'onwe ha)",
      "Ndị na-amụ ihe e were n'ọrụ n'ụlọ ọrụ mmezi ụgbọala ma ọ bụ n'ọrụ mmezi nke onye na-ere ụgbọala n'ime ọnwa 6 (nnyocha nsochi ma ọ bụ akụkọ ndị mmekọ)"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị, tablet ma ọ bụ kọmputa nwere ịntanetị iji gụọ nkuzi ma lelee peeji gọọmentị",
      "Akwụkwọ, mkpịsị ode, mkpịsị ode nwere agba na igwe mgbakọ (igwe mgbakọ ekwentị dị mma)",
      "Ọ bụghị iwu: foto e biri ebi nke akụkụ EV iji dee aha ha",
      "Ihe dị ka nkeji 60 ruo 75 n'ozuzu, na nnọkọ dị mkpụmkpụ"
    ],
    facilitatorNotes: [
      "Ọ dịghị onye na-emetụ usoro high-voltage nke ụgbọala aka n'ihe ọmụmụ a. Ọ bụrụ na unu eleta ụlọ ọrụ mmezi ma ọ bụ gosi ụgbọala, teknịshan a zụrụ azụ, nwere ikike, na-edu, ndị na-amụ ihe na-ele naanị anya.",
      "Weenụ ule mbido ọnụ, wee mee otu isi kwa nnọkọ, ma gbakọọ mgbakọ nchaja na whiteboard.",
      "Mee ka ndị na-amụ ihe meghee peeji ASE L3 n'onwe ha ma chọta ihe ọ chọrọ tupu.",
      "Kpọọ onye isi ngalaba mmezi nke onye na-ere ụgbọala dị nso, onye nkuzi ụgbọala na community college ma ọ bụ teknịshan EV nwere asambodo ASE ka ha kwuo okwu gbasara iwe mmadụ n'ọrụ.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge.",
      "Duzie ndị agha lara ezumike na ndị na-alọghachi n'ọrụ gaa American Job Centers maka enyemaka ọzụzụ."
    ]
  }
};
