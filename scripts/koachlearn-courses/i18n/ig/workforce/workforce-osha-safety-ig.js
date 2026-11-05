"use strict";

// Koach Learn course (Igbo translation of workforce/workforce-osha-safety.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.
// Facts from osha.gov and dol.gov, as in the English course. Not a substitute for an OSHA Outreach course or for job-specific training.

module.exports = {
  id: "workforce-osha-safety-ig",
  lang: "ig",
  translationOf: "workforce-osha-safety",
  category: "Workforce Development",
  name: "Ihe Ndabere nke Nchekwa n'Ebe Ọrụ (OSHA)",
  skills: "Ịhụ ihe egwu, Ịhọrọ na iji PPE, Igbochi ịmịfụ, ịsụ ngọngọ na ịda, Iburu ibu n'enweghị nsogbu, Ịgụ akwụkwọ ozi nchekwa kemịkalụ (SDS), Ịkọ mmerụ ahụ na iji ikike nchekwa gị",
  outcome: "ịgagharị n'ebe ọrụ hụ ihe egwu, ịhọrọ PPE kwesịrị ekwesị, iburu na ibughari ibu n'enweghị nsogbu, ịchọta ihe ị chọrọ n'akwụkwọ ozi nchekwa kemịkalụ (SDS), ịkọ mmerụ ahụ ma ọ bụ ihe egwu n'ụzọ ziri ezi, na ịkọwa ikike gị inwe ọrụ dị nchebe na ihe OSHA 10 na OSHA 30 bụ.",
  about: [
    "Ihe ọmụmụ a bụ maka onye ọ bụla na-amalite ọrụ ma ọ bụ na-arụ ọrụ n'ụlọ nkwakọba ngwaahịa, ọrụ owuwu ụlọ, kichin, ọrụ nhicha, ụlọ ahịa, ụlọ ọrụ mmepụta ihe, ọrụ ahụike, ma ọ bụ ọrụ ọ bụla ebe mmadụ nwere ike imerụ ahụ. Ọ na-akụzi ihe ndabere nke nchekwa ndị were mmadụ n'ọrụ na-atụ anya n'ụbọchị mbụ.",
    "Ị ga-eme omume ịgagharị chọọ ihe egwu, mụta otu esi eji ngwa nchekwa, gbochie mmerụ ahụ a na-ahụkarị (ịmịfụ, ịsụ ngọngọ, ịda, na mmerụ akwara site n'iburu ibu), gụọ akwụkwọ ozi nchekwa nke kemịkalụ, ma mara otu esi akọ mmerụ ahụ ma ọ bụ ihe egwu. Ị ga-amụtakwa ikike gị n'okpuru Occupational Safety and Health Administration (OSHA, ụlọ ọrụ gọọmentị US na-ahụ maka nchekwa n'ebe ọrụ) na ihe kaadị OSHA awa 10 na awa 30 bụ.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Gụọ nkuzi ahụ, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\". E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Ihe ọmụmụ a bụ nkuzi nchekwa n'ozuzu. Gbasoo mgbe niile ọzụzụ na iwu onye were gị n'ọrụ maka ọrụ gị kpọmkwem, ma lelee osha.gov maka iwu dị ugbu a."
  ],
  finalTask: "Mee ịgagharị chọọ ihe egwu nkeji 10 n'ezi ebe (ebe ọrụ gị, ụlọ nchekwa ngwaahịa, ụlọ ụgbọala ma ọ bụ ụlọ gị). Dee akụkọ ihe egwu nke nwere opekata mpe ihe egwu ise, ụdị nke ọ bụla (ịmịfụ/ịsụ ngọngọ/ịda, iburu ibu, kemịkalụ, igwe, ọkụ eletrik, ihe ọzọ), PPE ma ọ bụ ndozi ọ chọrọ, na onye ị ga-akọrọ nke ọ bụla. Tinye akụkụ SDS ndị ị ga-agụ maka otu kemịkalụ ị hụrụ, ma dee nzọụkwụ ị ga-eme ma ọ bụrụ na mmadụ merụrụ ahụ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị na-achọ ọrụ na ndị ọrụ ọhụrụ ma ọ bụ ndị na-arụ ọrụ ugbu a n'ụlọ nkwakọba ngwaahịa, ọrụ owuwu ụlọ, kichin, ọrụ nhicha, ụlọ ahịa, ụlọ ọrụ mmepụta ihe na ọrụ ahụike, gụnyere ndị ọrụ na-eto eto, ndị na-agbanwe ụdị ọrụ, na ndị na-alọghachi n'ọrụ.",
    startingPoint: "Ha nwere ahụmịhe ọrụ ma ọ bụ nke ụlọ ma na-ahụ ihe egwu doro anya, mana a kụzibeghị ha ịgagharị chọọ ihe egwu, ịgụ akwụkwọ ozi nchekwa kemịkalụ, ịkọ mmerụ ahụ, ma ọ bụ ikike ha n'okpuru OSHA.",
    gap: "Ndị were mmadụ n'ọrụ na-atụ anya omume nchekwa ndabere n'ụbọchị mbụ. Ndị ọrụ na-enweghị ike ịhụ ihe egwu, ịhọrọ PPE, iburu ibu n'enweghị nsogbu ma ọ bụ ịkọ mmerụ ahụ n'ụzọ ziri ezi nwere ike imerụ ahụ karịa, ha nwekwara ike itufu ikike workers' compensation ha. Ịmara ihe ndabere ndị a na-enyekwa ha aka inweta ọrụ na ikwu okwu n'enweghị egwu.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ (ihe dị ka klas 6)",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa a na-ekekọrịta; omume na-eji otu ọnụ ụlọ n'ụlọ ma ọ bụ n'ebe ọrụ",
      "Oge: nkuzi ihe dị ka nkeji ise nke dabara n'etiti oge ọrụ",
      "Naanị nkuzi nchekwa n'ozuzu: ndị na-amụ ihe na-agbaso ọzụzụ onye were ha n'ọrụ ma na-elele osha.gov maka iwu dị ugbu a",
      "Omume ga-adị nchebe: ọ dịghị ịrị elu, iburu ibu dị arọ naanị gị ma ọ bụ ịgwakọta kemịkalụ"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe ị na-agagharị n'ebe ọrụ, ụlọ nchekwa ngwaahịa ma ọ bụ n'ụlọ", action: "ịmata ihe egwu, ịkpọ aha ụdị nke ọ bụla, na ikpebi ma ị ga-edozi ya ma ọ bụ kọọ ya", standard: "na-edepụta opekata mpe ihe egwu ise nwere ụdị ziri ezi" },
    { id: "O2", condition: "Mgbe e nyere gị ọrụ na ihe egwu ya", action: "ịhọrọ na ilele PPE kwesịrị ekwesị maka ihe egwu ọ bụla", standard: "na-eme ka ngwa ahụ dabara ihe egwu ọ bụla ma na-ahụ ngwa mebiri emebi" },
    { id: "O3", condition: "Mgbe ị na-arụ ọrụ n'ala, n'ubube ma ọ bụ na-ebu ibu", action: "igosi nzọụkwụ ndị na-egbochi ịmịfụ, ịsụ ngọngọ na ịda, na otu esi ebu ibu n'enweghị nsogbu", standard: "na-agbaso nzọụkwụ ọ bụla n'atụghị azụ gị" },
    { id: "O4", condition: "Mgbe e nyere gị ngwaahịa kemịkalụ", action: "ịchọta ihe egwu ya, PPE ya na enyemaka mbụ ya na leebụ ya na akwụkwọ ozi nchekwa ya (SDS)", standard: "na-akpọ aha akụkụ SDS ziri ezi (2, 4 na 8)" },
    { id: "O5", condition: "Mgbe mmadụ merụrụ ahụ ma ọ bụ ị hụrụ ihe egwu", action: "idepụta nzọụkwụ a ga-eme na ide obere akụkọ mmerụ ahụ ma ọ bụ ihe egwu", standard: "gụnyere ihe mere, oge, ebe na onye hụrụ ya, a kọọ ya ozugbo" },
    { id: "O6", condition: "Mgbe e nyere gị nsogbu nchekwa a na-edozighị ma ọ bụ ọrụ ị chọrọ", action: "ịkọwa ikike nchekwa gị, otu esi etinye mkpesa na OSHA, na ma OSHA 10 ma ọ bụ OSHA 30 dabara", standard: "na-akpọ nzọụkwụ ziri ezi na ihe ọmụmụ ziri ezi n'enweghị onye nyere gị aka" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịhụ na igbochi ihe egwu",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịhụ ihe egwu site n'ịgagharị chọọ ha",
          minutes: 5,
          goal: "Gagharịa n'otu ebe ma depụta ihe egwu ị hụrụ dịka ụdị ha si dị.",
          text: [
            "Ihe egwu bụ ihe ọ bụla n'ebe ọrụ nwere ike imerụ mmadụ ahụ: ala mmiri dị na ya, waya gafere n'ụzọ mmadụ na-aga, igbe dị arọ n'elu shelf dị elu, igwe na-enweghị ihe nchebe ya, kemịkalụ na-ehepụta, mkpọtụ dị elu, ma ọ bụ ụzọ ọpụpụ e gbochiri.",
            "Ịgagharị chọọ ihe egwu bụ ile ebe gburugburu nwayọọ, n'ụzọ e zubere. Lee ala (ala, waya, ihe wụfuru), lee elu (shelf dị elu, ibu dị n'elu isi, ubube), lee gburugburu (igwe, ụgbọala, kemịkalụ, ụzọ ọpụpụ, ihe e ji emenyụ ọkụ), ma gee ntị (mkpọtụ dị elu, mkpu ịdọ aka na ntị, ụda dị iche site n'igwe).",
            "Kewaa ihe ị hụrụ: ịmịfụ, ịsụ ngọngọ na ịda; iburu ibu na mmerụ akwara; kemịkalụ; igwe na akụkụ ya na-agagharị; ọkụ eletrik; ụgbọala dị ka forklift; okpomọkụ, oyi na mkpọtụ; na ọkụ na ụzọ ọpụpụ.",
            "Mgbe ị hụrụ ihe egwu, dozie ya ozugbo ma ọ bụrụ na ọ dị nta ma dị nchebe ime ya (hichaa ihe wụfuru, wepụ igbe n'ụzọ), wee gwa onye isi gị. Ọ bụrụ na ọ dịghị nchebe ma ọ bụ na a kụzighị gị ya, mee ka ndị mmadụ ghara ịbịaru ya nso ma kọọ ya."
          ],
          steps: ["Họrọ otu ebe ma jee ije nwayọọ.", "Lee ala: ala, waya, ihe wụfuru.", "Lee elu: shelf, ibu dị n'elu isi, ubube.", "Lee gburugburu: igwe, ụgbọala, kemịkalụ, ụzọ ọpụpụ.", "Dee ihe egwu ọ bụla na ụdị ya.", "Dozie ndị dị nta ma ọ bụrụ na ọ dị nchebe, ma kọọ ihe niile nye onye isi gị."],
          words: [["Ihe egwu (hazard)", "ihe n'ebe ọrụ nwere ike ịkpata mmerụ ahụ ma ọ bụ ọrịa."], ["Ịgagharị chọọ ihe egwu (hazard walk)", "ije nwayọọ, n'ụzọ e zubere, n'otu ebe iji chọọ ihe egwu."], ["Ihe nchebe igwe (guard)", "mkpuchi ma ọ bụ ihe mgbochi n'igwe nke na-eme ka aka na ahụ ghara ịbịaru akụkụ ya na-agagharị nso."]],
          slides: [
            { title: "Ihe ihe egwu bụ", bullets: ["Ihe ọ bụla nwere ike imerụ mmadụ ahụ", "Ala mmiri, waya rụrụ arụ, igwe na-enweghị ihe nchebe", "Kemịkalụ, mkpọtụ, ụzọ ọpụpụ e gbochiri"] },
            { title: "Lee ala, elu na gburugburu", bullets: ["Ala: ala, waya, ihe wụfuru", "Elu: shelf dị elu, ibu dị n'elu isi", "Gburugburu: igwe, ụgbọala, ụzọ ọpụpụ"] },
            { title: "Ụdị ihe egwu", bullets: ["Ịmịfụ, ịsụ ngọngọ na ịda; iburu ibu", "Kemịkalụ; igwe; ọkụ eletrik", "Ụgbọala; okpomọkụ, oyi, mkpọtụ; ọkụ"] },
            { title: "Ihe ị ga-eme", bullets: ["Dozie ihe egwu dị nta ma ọ bụrụ na ọ dị nchebe", "Mee ka ndị mmadụ ghara ịbịaru nke dị ukwuu nso", "Gwa onye isi gị mgbe niile"] }
          ],
          tryIt: "Mee ịgagharị chọọ ihe egwu nkeji ise n'otu ọnụ ụlọ n'ụlọ gị, n'ụlọ nchekwa ngwaahịa ma ọ bụ n'ebe ọrụ gị. Dee opekata mpe ihe egwu ise na ụdị nke ọ bụla.",
          youCanNow: "ịgagharị n'otu ebe, ịhụ ihe egwu dịka ụdị ha si dị, na ikpebi ma ị ga-edozi ma ọ bụ kọọ nke ọ bụla.",
          quickCheck: [
            { objective: "O1", q: "Mgbe ị na-agagharị chọọ ihe egwu, gịnị ka \"lee ala\" pụtara ilele?", options: ["Ala, waya na ihe wụfuru", "Shelf dị elu na ubube", "Igwe na ụgbọala", "Mkpu ịdọ aka na ntị na ụda dị iche"], answer: 0, why: "Ile ala pụtara ilele ala maka waya, ihe wụfuru na ihe ị nwere ike ịsụ ngọngọ na ya." },
            { objective: "O1", q: "Ị hụrụ na ihe nchebe igwe adịghị n'igwe a na-akụzighị gị ka esi edozi. Gịnị ka ị ga-eme?", options: ["Dozie ya n'onwe gị ngwa ngwa", "Mee ka ndị mmadụ ghara ịbịaru ya nso ma kọọ ya", "Leghara ya anya ruo oge ezumike", "Na-eji igwe ahụ nke ọma"], answer: 1, why: "Ọ bụrụ na ihe egwu adịghị nchebe ka i dozie, mee ka ndị mmadụ ghara ịbịaru ya nso ma kọọ ya." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Iji PPE n'ụzọ ziri ezi",
          minutes: 5,
          goal: "Họrọ, lelee ma yiri ngwa nchekwa kwesịrị ekwesị maka otu ọrụ.",
          text: [
            "Personal protective equipment (PPE, ngwa nchekwa onwe) bụ ngwa ị na-eyi iji chebe ahụ gị: ugogbe anya nchekwa ma ọ bụ goggles, ihe mkpuchi ihu, okpu siri ike, uwe aka (gloves), akpụkpọ ụkwụ nwere isi ụkwụ siri ike, ihe nchebe ntị (earplugs ma ọ bụ earmuffs), uwe mwụda na-egbuke egbuke, respirator, na eriri nchebe ịda (harness).",
            "Mee ka ngwa ahụ dabara ihe egwu ahụ: ugogbe anya maka iberibe ihe na-efe efe ma ọ bụ mmiri na-agba; uwe aka kwesịrị ọrụ ahụ (nke na-anaghị egbu egbu maka mma, uwe aka kemịkalụ maka kemịkalụ, dịka akwụkwọ ozi nchekwa kemịkalụ si kwuo); ihe nchebe ntị maka ngwa ọrụ na-eme mkpọtụ; okpu siri ike ebe ihe nwere ike ịda; uwe mwụda na-egbuke egbuke n'akụkụ ụgbọala.",
            "Lelee ya tupu oge ọ bụla i ji ya: ọ dịghị mgbawa, oghere ma ọ bụ eriri gbazere agbaze. Ọ ga-adaba gị. A ga-eme fit test maka respirator, a ga-akụzikwara gị tupu i jiri ya.",
            "PPE bụ ihe nchebe ikpeazụ. Ọ ka mma ibu ụzọ wepụ ihe egwu ahụ, dịka ọmụmaatụ site n'itinye ihe nchebe n'igwe ma ọ bụ idebe ihe dị arọ n'ala. N'okpuru iwu OSHA, ndị were mmadụ n'ọrụ ga-enyekarị PPE a chọrọ ma kụziere gị otu esi eji ya."
          ],
          steps: ["Lee ọrụ ahụ na ihe egwu ya.", "Họrọ PPE dabara ihe egwu ọ bụla.", "Lelee ya ma ọ mebiri emebi.", "Yiri ya ma lelee ma ọ dabara gị.", "Hichaa ma chekwaa ya mgbe i jiri ya; kọọ ngwa mebiri emebi."],
          words: [["PPE", "personal protective equipment: ngwa ị na-eyi iji chebe onwe gị pụọ n'ihe egwu."], ["Respirator", "ihe mkpuchi ọnụ na imi na-echebe ngụgụ gị pụọ na uzuzu, anwụrụ ma ọ bụ gas; ọ chọrọ fit test na ọzụzụ."], ["Fit test", "nlele na respirator na-emechi nke ọma n'ihu gị."]],
          slides: [
            { title: "PPE a na-ahụkarị", bullets: ["Anya na ihu: ugogbe anya, goggles, ihe mkpuchi ihu", "Isi, aka, ụkwụ: okpu siri ike, uwe aka, akpụkpọ ụkwụ", "Ntị, ngụgụ, ịhụ gị: earplugs, respirator, uwe mwụda"] },
            { title: "Mee ka ngwa dabara ihe egwu", bullets: ["Iberibe ihe na-efe efe: ugogbe anya nchekwa", "Kemịkalụ: uwe aka akwụkwọ ozi nchekwa kemịkalụ kpọrọ aha", "Ngwa ọrụ na-eme mkpọtụ: ihe nchebe ntị"] },
            { title: "Lelee tupu oge ọ bụla i ji ya", bullets: ["Ọ dịghị mgbawa, oghere ma ọ bụ eriri gbazere agbaze", "Ọ ga-adaba gị", "Respirator chọrọ fit test na ọzụzụ"] },
            { title: "Ihe nchebe ikpeazụ", bullets: ["Buru ụzọ wepụ ihe egwu ma ọ bụrụ na ị nwere ike", "Ndị were mmadụ n'ọrụ ga-enyekarị PPE a chọrọ"] }
          ],
          sources: [
            { name: "OSHA: Personal protective equipment (ngwa nchekwa onwe)", url: "https://www.osha.gov/personal-protective-equipment" }
          ],
          tryIt: "Họrọ ọrụ atọ: iji mma igbe (box cutter) gbuo igbe, iji kemịkalụ nhicha hichaa ala, na iji igwe na-afụ akwụkwọ osisi (leaf blower). Maka nke ọ bụla, dee PPE ị ga-eyi na ihe kpatara ya.",
          youCanNow: "ịhọrọ, ilele na iyi PPE kwesịrị ekwesị maka otu ọrụ, na ịmara na ọ bụ ihe nchebe ikpeazụ.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ isi ihe mere ị ga-eji lelee PPE tupu oge ọ bụla i ji ya?", options: ["Ịhụ ma ọ bụ ụdị kacha ọhụrụ", "Ịhụ na agba ya dabara", "Ịchọta mgbawa, oghere ma ọ bụ eriri gbazere agbaze", "Ịgụ ole ị nwere"], answer: 2, why: "Ngwa mebiri emebi nwere ike ọ gaghị echebe gị, ya mere ị na-elele ya tupu oge ọ bụla i ji ya." },
            { objective: "O2", q: "Ị ga-eji mma igbe gbuo igbe ụbọchị niile. Kedu uwe aka ị ga-ahọrọ?", options: ["Uwe aka kemịkalụ", "Uwe aka ákwà dị gịrịgịrị", "Ọ dịghị uwe aka", "Uwe aka na-anaghị egbu egbu (cut-resistant)"], answer: 3, why: "Uwe aka na-anaghị egbu egbu dabara ihe egwu nke mma." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịmịfụ, ịsụ ngọngọ, ịda na iburu ibu n'enweghị nsogbu",
          minutes: 5,
          goal: "Gbochie ịmịfụ, ịsụ ngọngọ na ịda ma buru ibu n'enweghị nsogbu.",
          text: [
            "Ịmịfụ, ịsụ ngọngọ na ịda so na mmerụ ahụ a na-ahụkarị n'ebe ọrụ. Gbochie ha: hichaa ihe wụfuru ozugbo ma tinye akara \"ala mmiri dị\"; mee ka ụzọ mmadụ na-aga ghara inwe waya, igbe na paịpụ mmiri; jide ihe njide aka n'steepụ; yiri akpụkpọ ụkwụ na-ejide ala nke ọma; ma mee ka ebe ọrụ nwee ìhè zuru ezu.",
            "Ịrụ ọrụ n'elu: jiri ubube kwesịrị ekwesị, tinye ya n'ala siri ike na nke dị larịị, jide ebe atọ mgbe niile (aka abụọ na otu ụkwụ, ma ọ bụ ụkwụ abụọ na otu aka), ma ọ dịghị mgbe ị ga-eguzo n'elu steepụ kacha elu. A chọrọ nchebe ịda, dị ka ihe mgbochi (guardrail) ma ọ bụ harness, n'ịdị elu ụfọdụ; iwu OSHA n'ozuzu bụ ụkwụ 4 (4 feet) n'ọrụ ụlọ ọrụ n'ozuzu na ụkwụ 6 (6 feet) n'ọrụ owuwu ụlọ. Gbasoo ọzụzụ ebe ọrụ gị.",
            "Iburu ibu: zube otu ị ga-esi buru ya ma lelee ịdị arọ ya. Rịọ enyemaka ma ọ bụ jiri ụgbọ aka (cart), dolly ma ọ bụ forklift maka ibu dị arọ ma ọ bụ nke na-esi ike ijide. Guzoro nso, kewaa ụkwụ gị, gbadaa ikpere gị, mee ka azụ gị kwụ ọtọ, jide ibu ahụ nso n'ahụ gị, jiri ụkwụ gị bulie ya, ma jiri ụkwụ gị tụgharịa kama ịtụ azụ gị.",
            "Kọọ mgbu ngwa ngwa. Obere mmerụ akwara na-aka njọ ma ọ bụrụ na ị na-arụ ọrụ n'agbanyeghị ya."
          ],
          steps: ["Hichaa ihe wụfuru ma tinye akara n'ala mmiri dị.", "Mee ka ụzọ mmadụ na-aga dị ọcha.", "N'ubube: ala siri ike, jide ebe atọ, eguzola n'elu steepụ kacha elu.", "Tupu i buru ibu: lelee ịdị arọ ya ma rịọ enyemaka ma ọ bụ jiri ụgbọ aka ma ọ bụrụ na ọ dị mkpa.", "Bulie: gbadaa ikpere, azụ kwụ ọtọ, ibu dị nso, jiri ụkwụ bulie, jiri ụkwụ tụgharịa."],
          words: [["Ijide ebe atọ (three points of contact)", "inwe aka abụọ na otu ụkwụ, ma ọ bụ ụkwụ abụọ na otu aka, n'ubube mgbe niile."], ["Nchebe ịda (fall protection)", "ihe mgbochi (guardrail), ụgbụ nchekwa ma ọ bụ harness na-akwụsị ma ọ bụ na-egbochi ịda site n'ebe dị elu."]],
          slides: [
            { title: "Kwụsị ịmịfụ na ịsụ ngọngọ", bullets: ["Hichaa ihe wụfuru; jiri akara ala mmiri", "Wepụ waya na igbe n'ụzọ mmadụ na-aga", "Ezigbo akpụkpọ ụkwụ na ìhè zuru ezu"] },
            { title: "Ubube na ebe dị elu", bullets: ["Ala siri ike, dị larịị", "Jide ebe atọ; ọ bụghị steepụ kacha elu", "Nchebe ịda: ụkwụ 4 n'ụlọ ọrụ n'ozuzu, ụkwụ 6 n'owuwu ụlọ"] },
            { title: "Iburu ibu n'enweghị nsogbu", bullets: ["Lelee ịdị arọ; rịọ enyemaka ma ọ bụ jiri ụgbọ aka", "Gbadaa ikpere, azụ kwụ ọtọ, ibu dị nso", "Jiri ụkwụ bulie; jiri ụkwụ tụgharịa"] },
            { title: "Kọọ mgbu ngwa ngwa", bullets: ["Obere mmerụ akwara na-aka njọ ma ọ bụrụ na a leghara ya anya"] }
          ],
          sources: [
            { name: "OSHA: Fall protection (nchebe ịda)", url: "https://www.osha.gov/fall-protection" },
            { name: "OSHA: Walking-working surfaces (ala e ji aga ije na arụ ọrụ)", url: "https://www.osha.gov/walking-working-surfaces" }
          ],
          tryIt: "Mee omume iburu ibu n'enweghị nsogbu site n'iji igbe akwụkwọ ma ọ bụ ihe e zụtara n'ahịa: lelee ịdị arọ ya, guzoro nso, gbadaa ikpere gị, mee ka azụ gị kwụ ọtọ, jiri ụkwụ gị bulie ma jiri ụkwụ gị tụgharịa. Wee dee ihe atọ ị ga-edozi iji kwụsị ịmịfụ na ịsụ ngọngọ ebe ị na-arụ ọrụ ma ọ bụ ebe ị bi.",
          youCanNow: "igbochi ịmịfụ, ịsụ ngọngọ na ịda, iji ubube n'enweghị nsogbu, na iburu ibu n'ụzọ ziri ezi.",
          quickCheck: [
            { objective: "O3", q: "Kedu ebe ị na-agaghị eguzo mgbe ọ bụla mgbe ị na-eji ubube?", options: ["Steepụ kacha elu", "Steepụ kacha ala", "Steepụ dị n'etiti", "Ala siri ike, dị larịị"], answer: 0, why: "Iguzo n'elu steepụ kacha elu na-eme ka ọ dị mfe itufu nguzozi ma daa." },
            { objective: "O3", q: "Ị ga-atụgharị mgbe ị na-ebu igbe. Kedu otu ị ga-esi mee ya?", options: ["Tụgharịa n'úkwù", "Jiri ụkwụ gị tụgharịa", "Jide igbe ahụ tere aka n'ahụ gị", "Mee ka ikpere gị kwụ ọtọ ma gbaa gburugburu"], answer: 1, why: "Iji ụkwụ gị tụgharịa na-eme ka azụ gị kwụ ọtọ ma gbochie mmerụ akwara." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịhụ na igbochi ihe egwu",
        questions: [
          { objective: "O1", q: "Ị hụrụ waya ọkụ gafere n'ụzọ mmadụ na-aga. Kedu ụdị ihe egwu ọ bụ?", options: ["Kemịkalụ", "Mkpọtụ", "Ịmịfụ, ịsụ ngọngọ ma ọ bụ ịda", "Okpomọkụ"], answer: 2, why: "Waya gafere n'ụzọ na-eme ka mmadụ sụọ ngọngọ." },
          { objective: "O1", q: "Gịnị ka ị ga-eme maka obere ihe wụfuru nke ị nwere ike ihicha n'enweghị nsogbu?", options: ["Gafere ya", "Hichaa ya, tinye akara ma ala ka dị mmiri, ma gwa onye isi gị", "Jiri igbe kpuchie ya", "Chere ndị ọrụ ga-abịa n'oge ọzọ"], answer: 1, why: "Idozi ihe egwu dị nta ozugbo na ịkọ ha na-egbochi mmerụ ahụ." },
          { objective: "O2", q: "Kedu PPE dabara ọrụ iji leaf blower na-eme mkpọtụ?", options: ["Ihe nchebe ntị", "Naanị okpu siri ike", "Harness nchebe ịda", "Ọ dịghị ihe"], answer: 0, why: "Ihe nchebe ntị na-echebe pụọ na mkpọtụ dị elu." },
          { objective: "O2", q: "Gịnị mere a na-akpọ PPE ihe nchebe ikpeazụ?", options: ["Ọ kacha dị oke ọnụ", "Ọ bụ nhọrọ", "Ọ na-akwụsị mmerụ ahụ niile mgbe niile", "Ọ ka mma ibu ụzọ wepụ ihe egwu ahụ"], answer: 3, why: "Iwepụ ma ọ bụ ichebe ihe egwu na-echebe onye ọ bụla; PPE na-echebe naanị onye yi ya." },
          { objective: "O3", q: "Kedu omume iburu ibu n'enweghị nsogbu?", options: ["Tụgharịa azụ gị ka ị tụgharịa", "Jide ibu ahụ tere aka n'ahụ gị", "Gbadaa ikpere gị, jide ibu ahụ nso, ma jiri ụkwụ gị tụgharịa", "Buru ibu dị arọ naanị gị ka ị chekwaa oge"], answer: 2, why: "Nke a na-eme ka ike ahụ dị n'ụkwụ gị, ọ bụghị n'azụ gị." }
        ]
      }
    },
    {
      name: "Isi 2: Kemịkalụ, mmerụ ahụ na ikike gị",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kemịkalụ na akwụkwọ ozi nchekwa (SDS)",
          minutes: 5,
          goal: "Chọta ihe egwu, PPE na enyemaka mbụ maka kemịkalụ n'akwụkwọ ozi nchekwa ya.",
          text: [
            "Ọtụtụ ebe ọrụ na-eji kemịkalụ dị egwu: ihe nhicha, bleach, ihe na-ehicha mmanụ (degreaser), agba (paint), mmanụ ụgbọala, ọgwụ ụmụ ahụhụ. Iwu OSHA a na-akpọ Hazard Communication Standard na-ekwu na ndị ọrụ nwere ikike ịmara banyere kemịkalụ ha ji arụ ọrụ.",
            "Ihe ndọba ga-enwe leebụ na-egosi aha ngwaahịa ahụ, pictogram (akara nwere ọnụ uhie), okwu ịdọ aka na ntị (\"Danger\" maka ihe egwu ka njọ, \"Warning\" maka ndị na-adịchaghị njọ), na okwu na-akọwa ihe egwu na ihe nlezianya.",
            "Kemịkalụ ọ bụla dị egwu nwere akwụkwọ ozi nchekwa (SDS) nwere akụkụ 16 n'otu usoro. Ndị bara uru: Akụkụ 2, ihe egwu; Akụkụ 4, enyemaka mbụ; Akụkụ 7, otu esi ejide na echekwa ya; Akụkụ 8, njikwa mmetụta na PPE. Onye were gị n'ọrụ ga-edebe SDS maka kemịkalụ ndị ị na-eji ma kụziere gị banyere ha. Jụọ ebe a na-edebe ha.",
            "Omume nchekwa: ọ dịghị mgbe ị ga-agwakọta kemịkalụ (bleach na ammonia na-eme gas na-egbu egbu), debe kemịkalụ n'ihe ndọba nwere leebụ, jiri PPE dị n'Akụkụ 8, ma rụọ ọrụ ebe ikuku na-abata nke ọma."
          ],
          steps: ["Gụọ leebụ ihe ndọba ahụ: aha, pictogram, okwu ịdọ aka na ntị.", "Chọta SDS maka ngwaahịa ahụ.", "Akụkụ 2: gịnị bụ ihe egwu ya?", "Akụkụ 8: kedu PPE m chọrọ?", "Akụkụ 4: gịnị bụ enyemaka mbụ?", "Agwakọtala kemịkalụ mgbe ọ bụla, ma debe ha na leebụ."],
          words: [["Akwụkwọ ozi nchekwa (SDS)", "safety data sheet: akwụkwọ nwere akụkụ 16 banyere kemịkalụ: ihe egwu ya, otu esi ejide ya, PPE na enyemaka mbụ."], ["Pictogram", "akara dị n'ime ọdịdị diamond uhie na leebụ kemịkalụ nke na-egosi ụdị ihe egwu."], ["Okwu ịdọ aka na ntị (signal word)", "\"Danger\" (ka njọ) ma ọ bụ \"Warning\" (adịchaghị njọ) na leebụ kemịkalụ."]],
          slides: [
            { title: "Ikike gị ịmara", bullets: ["Leebụ n'ihe ndọba ọ bụla", "SDS maka kemịkalụ ọ bụla dị egwu", "Ọzụzụ banyere kemịkalụ ndị ị na-eji"] },
            { title: "Gụọ leebụ", bullets: ["Aha ngwaahịa", "Pictogram n'ime diamond uhie", "Okwu ịdọ aka na ntị: Danger ma ọ bụ Warning"] },
            { title: "Akụkụ SDS ị ga-amara", bullets: ["2: ihe egwu", "4: enyemaka mbụ", "7: ijide na ichekwa", "8: njikwa mmetụta na PPE"] },
            { title: "Omume nchekwa", bullets: ["Agwakọtala kemịkalụ mgbe ọ bụla", "Debe ihe niile na leebụ", "Jiri PPE dị n'Akụkụ 8"] }
          ],
          sources: [
            { name: "OSHA: Hazard Communication (ịkọ banyere kemịkalụ dị egwu)", url: "https://www.osha.gov/hazcom" }
          ],
          tryIt: "Chọta ihe nhicha n'ụlọ ma ọ bụ n'ebe ọrụ. Gụọ leebụ ya (pictogram na okwu ịdọ aka na ntị). Wee chọọ aha ngwaahịa ahụ tinyere \"safety data sheet\" na weebụsaịtị onye mere ya, ma dee ihe Akụkụ 2, 4 na 8 kwuru.",
          youCanNow: "ịgụ leebụ kemịkalụ na ịchọta ihe egwu, PPE na enyemaka mbụ n'akwụkwọ ozi nchekwa ya.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ pictogram na leebụ kemịkalụ?", options: ["Ọnụ ahịa ngwaahịa ahụ", "Nọmba ekwentị onye mere ya", "Akara nwere ọnụ uhie na-egosi ihe egwu", "Ụbọchị e mere ya"], answer: 2, why: "Pictogram bụ akara nwere ọnụ uhie na-egosi ụdị ihe egwu." },
            { objective: "O4", q: "Ngwaahịa gbara n'anya onye gị na ya na-arụ ọrụ. Kedu akụkụ SDS ị ga-ele?", options: ["Akụkụ 2", "Akụkụ 7", "Akụkụ 8", "Akụkụ 4"], answer: 3, why: "Akụkụ 4 nke akwụkwọ ozi nchekwa na-enye nzọụkwụ enyemaka mbụ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịkọ mmerụ ahụ na ihe egwu",
          minutes: 5,
          goal: "Mee nzọụkwụ ziri ezi mgbe mmadụ merụrụ ahụ ma kọọ ya n'ụzọ ziri ezi.",
          text: [
            "Ọ bụrụ na mmadụ merụrụ ahụ nke ukwuu, buru ụzọ kpọọ 911 (ma ọ bụ nọmba mberede ebe ọrụ gị). Ebughari ya belụsọ na ọ nọ n'ihe egwu. Kpọọ onye a zụrụ maka enyemaka mbụ ma ọ bụrụ na ebe ọrụ gị nwere otu.",
            "Kọọ mmerụ ahụ ma ọ bụ ọrịa ọ bụla n'ọrụ nye onye isi gị ozugbo, ọbụlagodi ndị dị nta dị ka ebe e gbuchara ma ọ bụ mmerụ akwara. Ịkọ ngwa ngwa na-eme ka ị nweta nlekọta, na-echebe ikike gị nye workers' compensation na steeti gị, ma na-enyere aka idozi ihe egwu ahụ ka ọ ghara imerụ onye ọzọ. Dee ihe mere, oge, ebe na onye hụrụ ya.",
            "Ndị were mmadụ n'ọrụ nwekwara ọrụ ha ga-arụ. Ha ga-akọrọ OSHA n'ime awa 8 ma ọ bụrụ na onye ọrụ nwụrụ site n'ihe mere n'ọrụ, na n'ime awa 24 ma ọ bụrụ na a nabatara onye ọrụ n'ụlọ ọgwụ dị ka onye a na-edebe n'ime ya (in-patient), e bipụrụ akụkụ ahụ ya, ma ọ bụ tufuo otu anya. Ọtụtụ ndị were mmadụ n'ọrụ ga-edebekwa ndekọ mmerụ ahụ, ndị ọrụ nwekwara ikike ịhụ ha.",
            "Kọọ ihe egwu n'otu ụzọ ahụ: gwa onye isi gị, dee ya, ma mee ka ndị mmadụ ghara ịbịaru ya nso ruo mgbe e doziri ya. Iwu OSHA na-eme ka ọ bụrụ mmebi iwu ka onye were gị n'ọrụ taa gị ahụhụ maka ịkọ mmerụ ahụ ma ọ bụ ihe egwu."
          ],
          steps: ["Mmerụ ahụ dị ukwuu: buru ụzọ kpọọ 911 ma ọ bụ nọmba mberede ebe ọrụ.", "Nweta enyemaka mbụ site n'aka onye a zụrụ azụ.", "Gwa onye isi gị ozugbo, ọbụlagodi maka mmerụ ahụ dị nta.", "Dee ihe mere, oge, ebe na onye hụrụ ya.", "Jụọ maka workers' compensation ma soro hụ na e doziri ya."],
          words: [["Workers' compensation", "mkpuchi (insurance) steeti na-akwụ ụgwọ ọgwụ na ụfọdụ ụgwọ ọrụ furu efu maka mmerụ ahụ n'ọrụ."], ["Ndekọ mmerụ ahụ (injury log)", "ndekọ onye were mmadụ n'ọrụ nke mmerụ ahụ na ọrịa n'ọrụ; ndị ọrụ nwere ikike ịhụ ya."]],
          slides: [
            { title: "Mmerụ ahụ dị ukwuu", bullets: ["Kpọọ 911 ma ọ bụ nọmba mberede ebe ọrụ", "Ebughari ya belụsọ na ọ nọ n'ihe egwu", "Kpọọ onye a zụrụ maka enyemaka mbụ"] },
            { title: "Kọọ mmerụ ahụ ọ bụla", bullets: ["Gwa onye isi gị ozugbo", "Dee ihe mere, oge, ebe, onye hụrụ ya", "Ọ na-echebe arịrịọ workers' compensation gị"] },
            { title: "Ọrụ onye were mmadụ n'ọrụ", bullets: ["Ọnwụ: kọọrọ OSHA n'ime awa 8", "Ụlọ ọgwụ, ibipụ akụkụ ahụ, itufu anya: awa 24", "Debe ndekọ mmerụ ahụ ndị ọrụ nwere ike ịhụ"] },
            { title: "A na-echebe ịkọ ihe", bullets: ["Ịta gị ahụhụ maka ịkọ ihe bụ mmebi iwu"] }
          ],
          sources: [
            { name: "OSHA: Report a fatality or severe injury (ịkọ ọnwụ ma ọ bụ mmerụ ahụ dị ukwuu)", url: "https://www.osha.gov/report" },
            { name: "OSHA: 29 CFR 1904.39 (iwu ịkọ ihe)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1904/1904.39" }
          ],
          tryIt: "Dee nzọụkwụ ị ga-eme ma ọ bụrụ na onye gị na ya na-arụ ọrụ jiri mma igbe gbuo aka ya nke ukwuu. Wee dee obere akụkọ mmerụ ahụ: ihe mere, oge, ebe, onye hụrụ ya, na ihe kwesịrị ịgbanwe.",
          youCanNow: "ime ihe mgbe mmadụ merụrụ ahụ, ịkọ ya n'ụzọ ziri ezi na n'oge, na ịmara ihe onye were gị n'ọrụ ga-akọ.",
          quickCheck: [
            { objective: "O5", q: "Kedu ihe ga-adị n'akụkọ mmerụ ahụ?", options: ["Ihe mere, oge, ebe na onye hụrụ ya", "Naanị aha onye ọrụ merụrụ ahụ", "Onye i chere na ọ bụ ya kpatara ya", "Echiche gị banyere onye isi gị"], answer: 0, why: "Akụkọ doro anya na-ekwu ihe mere, oge, ebe na onye hụrụ ya." },
            { objective: "O5", q: "Ị merụrụ azụ gị mgbe ị na-ebu ibu mana ọ na-afụ naanị ntakịrị. Gịnị ka ị ga-eme?", options: ["Gaa n'ihu na-arụ ọrụ ma ghara ikwu ihe ọ bụla", "Gwa onye isi gị ozugbo", "Chere otu ọnwa ka ị hụ ma ọ ga-aka njọ", "Gwa naanị onye gị na ya na-arụ ọrụ"], answer: 1, why: "Ịkọ ngwa ngwa na-eme ka ị nweta nlekọta ma na-echebe ikike workers' compensation gị." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ikike nchekwa gị, OSHA 10 na OSHA 30",
          minutes: 5,
          goal: "Kọwaa ikike gị inwe ọrụ dị nchebe, otu esi etinye mkpesa na OSHA, na ihe OSHA 10 na 30 bụ.",
          text: [
            "N'okpuru Occupational Safety and Health Act (iwu US gbasara nchekwa na ahụike n'ọrụ), onye were gị n'ọrụ ga-enye ebe ọrụ na-enweghị ihe egwu dị ukwuu a maara. Ị nwere ikike inweta ọzụzụ n'asụsụ ị ghọtara, inweta ngwa nchekwa a chọrọ, ịhụ ndekọ mmerụ ahụ na nsonaazụ nnwale banyere ihe egwu, ịkọ ihe egwu, na ịrịọ OSHA ka ha bịa nyochaa ebe ọrụ gị.",
            "Ọ bụrụ na e dozighị ihe egwu, ị nwere ike itinye mkpesa na OSHA n'ịntanetị, site n'ekwentị na 1-800-321-OSHA (6742), site n'akwụkwọ ozi ma ọ bụ n'ọfịs OSHA, ma rịọ ka a ghara ịgwa onye were gị n'ọrụ aha gị. Ọ bụrụ na onye were gị n'ọrụ taa gị ahụhụ maka ikwu okwu banyere nchekwa, tinye mkpesa whistleblower na OSHA ozugbo i nwere ike; n'okpuru iwu gọọmentị etiti (federal), oge njedebe bụ ụbọchị 30.",
            "OSHA 10 na OSHA 30 bụ ihe ọmụmụ n'Outreach Training Program nke OSHA, nke onye ọ bụla na-ahọrọ n'onwe ya. OSHA 10 bụ ihe ọmụmụ awa 10 maka ndị ọrụ na-amalite ọrụ, banyere ịmata ihe egwu na ikike ndị ọrụ. OSHA 30 bụ ihe ọmụmụ awa 30 maka ndị isi ọrụ na ndị ọrụ nwere ọrụ nchekwa. E nwere ụdị maka ọrụ owuwu ụlọ na maka ụlọ ọrụ n'ozuzu (general industry). Ị na-enweta kaadị na-egosi na i mechara ihe ọmụmụ ahụ.",
            "Kaadị ndị a abụghị akwụkwọ ikike (license) ma ọ bụ asambodo (certification), mana ọtụtụ ndị were mmadụ n'ọrụ, otu ndị ọrụ (union) na ụfọdụ steeti na-arịọ ha. Naanị ndị nkuzi OSHA nyere ikike nwere ike inye ezi kaadị, ya mere were ihe ọmụmụ ahụ n'aka onye nkuzi ma ọ bụ ụlọ ọrụ e nyere ikike, ma kpachara anya maka onyinye dị ka ọ dị ọnụ ala nke ukwuu ma ọ bụ ngwa ngwa nke ukwuu."
          ],
          steps: ["Buru ụzọ kọọrọ onye isi gị ihe egwu, ma ọ bụrụ na ọ dị nchebe.", "Ọ bụrụ na e dozighị ya, tinye mkpesa OSHA n'ịntanetị ma ọ bụ na 1-800-321-6742.", "Rịọ ka e debe aha gị na nzuzo ma ọ bụrụ na ị chọrọ.", "Ọ bụrụ na a tara gị ahụhụ maka ịkọ ihe, tinye mkpesa whistleblower n'ime ụbọchị 30.", "Họrọ OSHA 10 (maka ndị na-amalite) ma ọ bụ OSHA 30 (maka ndị isi), owuwu ụlọ ma ọ bụ ụlọ ọrụ n'ozuzu, n'aka onye nkuzi e nyere ikike."],
          words: [["OSHA", "Occupational Safety and Health Administration, ụlọ ọrụ gọọmentị etiti US na-ahụ maka nchekwa n'ebe ọrụ."], ["Outreach Training Program", "mmemme OSHA nke ihe ọmụmụ nchekwa awa 10 na awa 30, nke onye ọ bụla na-ahọrọ n'onwe ya, nke ndị nkuzi e nyere ikike na-akụzi."], ["Whistleblower", "onye ọrụ na-akọ nsogbu; iwu na-echebe ya ka a ghara ịta ya ahụhụ maka ya."]],
          slides: [
            { title: "Ikike gị inwe ọrụ dị nchebe", bullets: ["Ebe ọrụ na-enweghị ihe egwu dị ukwuu a maara", "Ọzụzụ n'asụsụ ị ghọtara", "Ịhụ ndekọ mmerụ ahụ; ịrịọ maka nyocha"] },
            { title: "Itinye mkpesa", bullets: ["osha.gov ma ọ bụ 1-800-321-6742", "Ị nwere ike ịrịọ ka e debe aha gị na nzuzo", "A tara gị ahụhụ? Mkpesa whistleblower n'ime ụbọchị 30"] },
            { title: "OSHA 10 na OSHA 30", bullets: ["Awa 10: ndị ọrụ na-amalite ọrụ", "Awa 30: ndị isi na ndị nwere ọrụ nchekwa", "Ụdị maka owuwu ụlọ ma ọ bụ ụlọ ọrụ n'ozuzu"] },
            { title: "Banyere kaadị ndị a", bullets: ["Nhọrọ; ọ bụghị license ma ọ bụ asambodo", "Ọtụtụ ndị were mmadụ n'ọrụ na union na-arịọ ha", "Naanị ndị nkuzi e nyere ikike na-enye ezi kaadị"] }
          ],
          sources: [
            { name: "OSHA: Workers' rights (ikike ndị ọrụ)", url: "https://www.osha.gov/workers" },
            { name: "OSHA: File a safety and health complaint (itinye mkpesa)", url: "https://www.osha.gov/workers/file-complaint" },
            { name: "OSHA: Outreach Training Program", url: "https://www.osha.gov/training/outreach" },
            { name: "OSHA: The facts about obtaining an OSHA card (eziokwu banyere kaadị OSHA)", url: "https://www.osha.gov/training/oshacardfacts" }
          ],
          tryIt: "Ọrụ ikpeazụ: mee ịgagharị chọọ ihe egwu nkeji 10 ma dee akụkọ ihe egwu gị: ihe egwu ise, ụdị ha, PPE ma ọ bụ ndozi, onye ị ga-akọrọ nke ọ bụla, akụkụ SDS maka otu kemịkalụ, na nzọụkwụ gị maka mmerụ ahụ. N'okpuru ya, dee ma OSHA 10 ma ọ bụ OSHA 30 dabara ọrụ gị na ihe kpatara ya.",
          youCanNow: "ịkọwa ikike gị inwe ọrụ dị nchebe, itinye mkpesa na OSHA, na ịhọrọ n'etiti OSHA 10 na OSHA 30.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ kaadị OSHA 10 ma ọ bụ OSHA 30?", options: ["Akwụkwọ ikike steeti iji rụọ ọrụ", "Asambodo ọkachamara", "Kaadị na-egosi na i mechara ihe ọmụmụ, site n'aka onye nkuzi e nyere ikike", "Kaadị na-anọchi ọzụzụ onye were gị n'ọrụ"], answer: 2, why: "Kaadị ndị a na-egosi na i mechara ihe ọmụmụ outreach nke bụ nhọrọ; ha abụghị license." },
            { objective: "O6", q: "Ị gwara onye isi gị banyere ụzọ ọpụpụ ọkụ e gbochiri, ma ọ dịghị ihe gbanwere. Gịnị ka ị nwere ike ime ọzọ?", options: ["Ọ dịghị ihe; naanị ndị njikwa nwere ike ime ihe", "Hapụ ọrụ ozugbo", "Buru ụzọ dee banyere ya n'ịntanetị", "Tinye mkpesa na OSHA ma rịọ ka e debe aha gị na nzuzo"], answer: 3, why: "Ọ bụrụ na e dozighị ihe egwu, ị nwere ike itinye mkpesa OSHA ma rịọ ka a ghara ikesa aha gị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Kemịkalụ, mmerụ ahụ na ikike gị",
        questions: [
          { objective: "O4", q: "Kedu akụkụ nke akwụkwọ ozi nchekwa (SDS) na-agwa gị PPE ị ga-eyi?", options: ["Akụkụ 1", "Akụkụ 4", "Akụkụ 16", "Akụkụ 8"], answer: 3, why: "Akụkụ 8 na-ekwu maka njikwa mmetụta na nchebe onwe." },
          { objective: "O4", q: "Na leebụ kemịkalụ, kedu okwu ịdọ aka na ntị pụtara ihe egwu ka njọ?", options: ["Danger", "Warning", "Caution", "Notice"], answer: 0, why: "A na-eji \"Danger\" maka ihe egwu ka njọ; \"Warning\" maka ndị na-adịchaghị njọ." },
          { objective: "O5", q: "I nwetara obere ebe e gbuchara n'ọrụ. Gịnị ka ị ga-eme?", options: ["Zoo ya", "Chere ruo mgbe ọ ga-aka njọ", "Gwa onye isi gị ozugbo ma dee ihe mere", "Hapụ ọrụ"], answer: 2, why: "Kọọ mmerụ ahụ ọ bụla ngwa ngwa, ọbụlagodi ndị dị nta." },
          { objective: "O5", q: "N'ime oge ole ka onye were mmadụ n'ọrụ ga-akọrọ OSHA ọnwụ metụtara ọrụ?", options: ["Ụbọchị 30", "Awa 8", "Otu izu", "Ọ dịghị mkpa"], answer: 1, why: "Iwu OSHA bụ awa 8 maka ọnwụ." },
          { objective: "O6", q: "Gịnị bụ OSHA 10?", options: ["Akwụkwọ ikike onye ọrụ ọkụ eletrik a chọrọ", "Ụgwọ ntaramahụhụ", "Ihe ọmụmụ nchekwa awa 10, nhọrọ, maka ndị ọrụ na-amalite ọrụ", "Leebụ kemịkalụ"], answer: 2, why: "Ọ bụ ihe ọmụmụ Outreach Training nwere kaadị ngụcha, ọ bụghị license." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ihe Ndabere nke Nchekwa n'Ebe Ọrụ (OSHA)",
    questions: [
      { objective: "O1", q: "Gịnị bụ ihe egwu?", options: ["Ihe ọ bụla n'ebe ọrụ nwere ike ịkpata mmerụ ahụ ma ọ bụ ọrịa", "Akwụkwọ mmado nchekwa", "Ụdị PPE", "Ọnụ ụlọ ezumike"], answer: 0, why: "Ihe egwu bụ ihe nwere ike ịkpata mmerụ." },
      { objective: "O1", q: "Mgbe ị na-agagharị chọọ ihe egwu, \"lee elu\" pụtara ilele:", options: ["Ala maka ihe wụfuru", "Ekwentị gị", "Shelf dị elu, ibu dị n'elu isi na ubube", "Oge"], answer: 2, why: "Ihe dị n'elu nwere ike ịda ma ọ bụ mee ka mmadụ daa." },
      { objective: "O1", q: "E wepụrụ ihe nchebe igwe. Ị kwesịrị:", options: ["Iji ya nke ọma", "Ịghara iji ya, mee ka ndị mmadụ ghara ịbịaru ya nso ma kọọ ya", "Itinye aka gị n'ime ya ilele ya", "Ileghara ya anya"], answer: 1, why: "Igwe na-enweghị ihe nchebe na-akpata mmerụ ahụ dị ukwuu; kọọ ya ma nọrọ ya anya." },
      { objective: "O2", q: "Kedu uwe aka ị ga-eyi mgbe ị na-eji kemịkalụ nhicha?", options: ["Uwe aka ọ bụla", "Ọ dịghị uwe aka", "Uwe aka na-anaghị egbu egbu", "Ụdị akwụkwọ ozi nchekwa (SDS) kpọrọ aha"], answer: 3, why: "SDS na-edepụta nchebe kwesịrị ekwesị maka kemịkalụ ahụ." },
      { objective: "O2", q: "Tupu i jiri respirator, ị chọrọ:", options: ["Ọ dịghị ihe", "Fit test na ọzụzụ", "Naanị ile ya anya ngwa ngwa", "Ihe mkpuchi ọnụ onye gị na ya na-arụ ọrụ"], answer: 1, why: "Respirator ga-emechi nke ọma ma a ga-eji ya n'ụzọ ziri ezi." },
      { objective: "O2", q: "Onye ga-enyekarị PPE a chọrọ?", options: ["Onye were mmadụ n'ọrụ", "Onye ọrụ", "Onye gị na ya na-arụ ọrụ", "Ọ dịghị onye"], answer: 0, why: "N'okpuru iwu OSHA, ndị were mmadụ n'ọrụ ga-enyekarị PPE a chọrọ." },
      { objective: "O3", q: "Kedu ezigbo ụzọ isi gbochie ịmịfụ?", options: ["Hapụ ihe wụfuru maka oge ọzọ", "Yiri akpụkpọ ụkwụ ala ya dị mmụọ", "Gbanyụọ ọkụ", "Hichaa ihe wụfuru ozugbo ma jiri akara ala mmiri"], answer: 3, why: "Ihicha ngwa ngwa na ịdọ aka na ntị na-egbochi ịda." },
      { objective: "O3", q: "N'ubube, \"ijide ebe atọ\" pụtara:", options: ["Mmadụ atọ na-ejide ubube ahụ", "Ubube atọ jikọtara ọnụ", "Aka abụọ na otu ụkwụ, ma ọ bụ ụkwụ abụọ na otu aka, n'ubube", "Iguzo n'elu steepụ atọ kacha elu"], answer: 2, why: "Ọ na-eme ka ị kwụsie ike mgbe ị na-arị elu." },
      { objective: "O3", q: "N'ọrụ owuwu ụlọ, ịdị elu OSHA n'ozuzu maka nchebe ịda bụ:", options: ["Ụkwụ 6 (6 feet)", "Ụkwụ 1", "Ụkwụ 20", "Ọ dịghị iwu"], answer: 0, why: "Ịdị elu n'ozuzu maka owuwu ụlọ bụ ụkwụ 6; nke ụlọ ọrụ n'ozuzu bụ ụkwụ 4." },
      { objective: "O3", q: "Igbe dị arọ ma na-esi ike ijide. Gịnị ka ị ga-eme?", options: ["Bulie ya ngwa ngwa", "Tụgharịa mgbe ị na-ebuli ya", "Rịọ enyemaka ma ọ bụ jiri ụgbọ aka ma ọ bụ dolly", "Buru ya tere aka n'ahụ gị"], answer: 2, why: "Enyemaka ma ọ bụ ngwa na-egbochi mmerụ azụ." },
      { objective: "O4", q: "Gịnị ka SDS pụtara?", options: ["Standard delivery slip", "Staff duty schedule", "Shift duty sign", "Safety data sheet (akwụkwọ ozi nchekwa)"], answer: 3, why: "Akwụkwọ ozi nchekwa na-akọwa ihe egwu kemịkalụ na otu esi eji ya n'enweghị nsogbu." },
      { objective: "O4", q: "Kedu akụkụ SDS na-enye enyemaka mbụ?", options: ["Akụkụ 2", "Akụkụ 4", "Akụkụ 16", "Akụkụ 8"], answer: 1, why: "Akụkụ 4 na-edepụta usoro enyemaka mbụ." },
      { objective: "O4", q: "Gịnị mere ị na-agaghị agwakọta bleach na ammonia mgbe ọ bụla?", options: ["Ha dị oke ọnụ", "Isi ha na-apụ", "Ha na-emebi ala", "Ha na-eme gas na-egbu egbu"], answer: 3, why: "Ịgwakọta ha na-ewepụta gas dị egwu." },
      { objective: "O5", q: "Onye gị na ya na-arụ ọrụ merụrụ ahụ nke ukwuu. Gịnị bụ nzọụkwụ mbụ?", options: ["Kpọọ 911 ma ọ bụ nọmba mberede ebe ọrụ", "Mechaa ọrụ gị", "Tinye foto n'ịntanetị", "Bughari ya ozugbo"], answer: 0, why: "Enyemaka mberede na-ebu ụzọ; ebughari ya belụsọ na ọ nọ n'ihe egwu." },
      { objective: "O5", q: "Gịnị mere ị ga-eji kọọ ọbụlagodi obere mmerụ ahụ?", options: ["Inweta ụbọchị ezumike", "Ọ dịghị mkpa", "Inweta nlekọta, ichebe ikike workers' compensation gị, na idozi ihe egwu ahụ", "Ịta mmadụ ụta"], answer: 2, why: "Ịkọ ngwa ngwa na-echebe gị na ndị ọzọ." },
      { objective: "O5", q: "Onye ọrụ tufuru otu anya n'ihe mberede n'ọrụ. Onye were ya n'ọrụ ga-akọrọ OSHA n'ime:", options: ["Awa 8", "Awa 24", "Otu afọ", "Ụbọchị 30"], answer: 1, why: "A ga-akọ nnabata n'ụlọ ọgwụ, ibipụ akụkụ ahụ na itufu anya n'ime awa 24." },
      { objective: "O6", q: "Kedu nọmba ekwentị na-eru OSHA?", options: ["1-800-321-6742", "1-800-669-4000", "911", "411"], answer: 0, why: "1-800-321-OSHA (6742) bụ nọmba OSHA; 1-800-669-4000 bụ nke EEOC." },
      { objective: "O6", q: "E wepụrụ gị n'usoro oge ọrụ maka ịkọ ihe egwu. N'okpuru iwu gọọmentị etiti, tinye mkpesa whistleblower n'ime:", options: ["Otu afọ", "Ọ dịghị oge njedebe", "Afọ ise", "Ụbọchị 30"], answer: 3, why: "Oge njedebe gọọmentị etiti maka mkpesa ntaramahụhụ gbasara nchekwa bụ ụbọchị 30." },
      { objective: "O6", q: "Onye ka OSHA 30 bụ maka ya karịsịa?", options: ["Naanị ndị na-anya gwongworo", "Ndị isi ọrụ na ndị ọrụ nwere ọrụ nchekwa", "Ụmụaka", "Ndị chọrọ license onye ọrụ ọkụ eletrik"], answer: 1, why: "OSHA 30 na-enye ọzụzụ miri emi maka ndị isi na ndị nwere ọrụ nchekwa." },
      { objective: "O6", q: "Kedu nke bụ eziokwu banyere kaadị OSHA 10 na 30?", options: ["Ha bụ license", "Onye ọ bụla nwere ike ibipụta otu", "Ha bụ kaadị ọzụzụ nhọrọ nke naanị ndị nkuzi e nyere ikike nwere ike inye", "Ha anaghị agwụ agwụ n'ebe ọ bụla"], answer: 2, why: "Ha abụghị asambodo, ọ bụkwa naanị ndị nkuzi e nyere ikike na-enye ezi kaadị." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 3, 7, 9, 11, 13, 14, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ihe egwu a hụrụ", objective: "O1", notYet: "Ihe egwu erughị ise, ma ọ bụ ụdị ha adịghị ma ọ bụ ezighi ezi.", meets: "Opekata mpe ihe egwu ise, nke ọ bụla nwere ụdị ziri ezi.", exceeds: "Ọ na-ekwukwa ihe egwu a ga-edozi ugbu a na ndị a ga-akọ." },
      { name: "PPE na ndozi", objective: "O2", notYet: "Ọ dịghị PPE ma ọ bụ ndozi, ma ọ bụ ngwa na-adabaghị ihe egwu ahụ.", meets: "Ihe egwu ọ bụla nwere PPE ma ọ bụ ndozi dabara ya.", exceeds: "Ọ na-akpọ aha ụzọ isi wepụ ihe egwu ahụ tupu ịdabere na PPE." },
      { name: "Akwụkwọ ozi nchekwa (SDS)", objective: "O4", notYet: "Ọ dịghị kemịkalụ, ma ọ bụ akụkụ SDS ezighi ezi.", meets: "Ọ na-akpọ aha Akụkụ 2, 4 na 8 maka otu kemịkalụ na ihe nke ọ bụla na-ekwu.", exceeds: "Ọ na-edekwa okwu ịdọ aka na ntị na pictogram dị na leebụ ahụ." },
      { name: "Ịkọ ihe", objective: "O5", notYet: "Ọ dịghị onye a kpọrọ aha a ga-akọrọ, ma ọ bụ nzọụkwụ mmerụ ahụ adịghị.", meets: "Ọ na-akpọ aha onye a ga-akọrọ ihe egwu ọ bụla ma depụta nzọụkwụ mmerụ ahụ n'usoro.", exceeds: "Nzọụkwụ mmerụ ahụ gụnyere ide ihe mere, oge, ebe na onye hụrụ ya." },
      { name: "Ikike na ọzụzụ", objective: "O6", notYet: "Ọ dịghị ekwu ma OSHA 10 ma ọ bụ 30 dabara.", meets: "Ọ na-ahọrọ OSHA 10 ma ọ bụ OSHA 30 ma nye ihe kpatara ya dabara ọrụ ya.", exceeds: "Ọ na-akọwakwa otu esi etinye mkpesa OSHA ma ọ bụrụ na e dozighị ihe egwu." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe debanyere aha n'ihe ọmụmụ OSHA 10 ma ọ bụ OSHA 30 n'aka onye nkuzi e nyere ikike n'ime ụbọchị 90",
      "Ndị na-amụ ihe nwetara ma ọ bụ debere ọrụ aka n'ime ụbọchị 90 (nnyocha nsochi)",
      "Ndị mmekọ mmepe ọrụ na-akọ mmerụ ahụ belatara ma ọ bụ ihe egwu a kọrọ karịa n'etiti ndị sonyere na mmemme ahụ"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa iji gụọ nkuzi ndị ahụ",
      "Ọnụ ụlọ maka ịgagharị chọọ ihe egwu: ụlọ, ụlọ nchekwa ngwaahịa ma ọ bụ ebe ọrụ (site n'ikike)",
      "Ihe nhicha ụlọ nwere leebụ, na ịntanetị iji chọta akwụkwọ ozi nchekwa ya",
      "Akwụkwọ na mkpịsị ode maka akụkọ ihe egwu",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Buru ụzọ meenụ ịgagharị chọọ ihe egwu ọnụ n'ọnụ ụlọ ọzụzụ, wee hapụ ndị na-amụ ihe ka ha mee nke ha.",
      "Mee omume iburu ibu n'enweghị nsogbu naanị site n'iji igbe dị mfe; ọ dịghị onye ga-arị ubube ma ọ bụ buru ibu dị arọ n'oge ọzụzụ.",
      "Ekwela ka ndị na-amụ ihe meghee ma ọ bụ gwakọta kemịkalụ n'oge omume; ha na-agụ naanị leebụ na SDS.",
      "Chetara ndị na-amụ ihe na ihe ọmụmụ a anaghị anọchi kaadị OSHA 10 ma ọ bụ OSHA 30 ma ọ bụ ọzụzụ onye were ha n'ọrụ.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
