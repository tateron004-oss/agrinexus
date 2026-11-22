"use strict";

// Koach Learn course (Igbo translation of youth/youth-ai-activism.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "youth-ai-activism-ig",
  lang: "ig",
  translationOf: "youth-ai-activism",
  category: "Youth",
  name: "AI maka Ọrụ Mgbanwe na Enyemaka Obodo",
  skills: "Ịhọrọ nsogbu dị n'obodo gị, Iji AI chọpụta ihe na ịlele eziokwu, Ime atụmatụ obere omume, Ide ozi nye onye nwere ike ime mkpebi, Ịgbasa ozi n'enweghị nsogbu na nkwanye ugwu",
  outcome: "ime atụmatụ obere omume n'enweghị nsogbu maka nsogbu dị n'ụlọ akwụkwọ ma ọ bụ n'obodo gị nke ị na-eche banyere ya, iji AI chọpụta ihe banyere ya, ịlele eziokwu na isi iyi a pụrụ ịtụkwasị obi, ide ozi nwere nkwanye ugwu nye onye nwere ike ime mkpebi, na ime atụmatụ dị mfe iji gbasaa ya.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị nọ n'afọ iri na ụma chọrọ ime mgbanwe: ogige ọha dị ọcha karị, ebe ịgafe okporo ụzọ dị nchebe n'akụkụ ụlọ akwụkwọ, ihe nchekwa ihe mkpofu (recycling) ndị ọzọ, mkpokọta nri, ma ọ bụ otu (club) na-anabata ụmụ akwụkwọ ọhụrụ. Obere omume n'obodo gị bụ ezigbo ebe ịmalite.",
    "Ị ga-ahọrọ otu nsogbu, jiri ngwa enyemaka AI dị ka ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini chọpụta ihe banyere ya ma chepụta azịza, lelee eziokwu ọ bụla na isi iyi a pụrụ ịtụkwasị obi, mee atụmatụ otu obere omume, dee akwụkwọ ozi ma ọ bụ email nwere nkwanye ugwu nye onye nwere ike inye aka, ma gbasaa ozi gị n'enweghị nsogbu.",
    "Lelee iwu ụlọ akwụkwọ gị banyere AI na iwu afọ nke ngwa ọ bụla, ma tinye nne na nna gị, onye nlekọta gị ma ọ bụ onye nkuzi gị tupu ị debanye aha n'ihe ọ bụla, kpọtụrụ ndị ọchịchị, ma ọ bụ hazie mmemme. Nkuzi ọ bụla na-ejedebe n'ọrụ \"Nwalee ya ugbu a\", e nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee atụmatụ omume nke otu peeji maka nsogbu dị n'ụlọ akwụkwọ ma ọ bụ n'obodo gị nke ị na-eche banyere ya: nsogbu ahụ n'otu ahịrịokwu, eziokwu abụọ i lelere na isi iyi a pụrụ ịtụkwasị obi, otu obere omume nwere ụbọchị na ndị enyemaka, na onye okenye na-akwado gị. Jiri AI nyere gị aka ide akwụkwọ ozi ma ọ bụ email nwere nkwanye ugwu nye onye nwere ike ime mkpebi (onye isi ụlọ akwụkwọ, school board ma ọ bụ onye otu kansụl obodo), lelee ya ma degharịa ya n'okwu nke gị, ma mee atụmatụ dị mfe iji gbasaa ozi gị n'enweghị nsogbu.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nọ n'afọ iri na ụma chọrọ ime mgbanwe n'ụlọ akwụkwọ ma ọ bụ n'obodo ha, dị ka ogige ọha dị ọcha karị, ebe ịgafe okporo ụzọ dị nchebe, ihe nchekwa ihe mkpofu ndị ọzọ, mkpokọta nri ma ọ bụ otu na-anabata mmadụ nke ọma.",
    startingPoint: "Ha na-eche banyere nsogbu ma na-ahụ nsogbu gburugburu ha, ha na-ejikwa soshal midia, ma eleghị anya ngwa enyemaka AI. Ọ bụ mmadụ ole na ole lelere eziokwu na isi iyi a pụrụ ịtụkwasị obi, mee atụmatụ omume nwere ikike, ma ọ bụ dee ozi nye onye nwere ike ime mkpebi.",
    gap: "Ọchịchọ na-enweghị atụmatụ nwere ike ịnwụ anwụ, AI nwekwara ike ịgbasa eziokwu e chepụtara echepụta ma ọ bụ foto adịgboroja na-emebi ntụkwasị obi. Ndị nọ n'afọ iri na ụma kwesịrị ịhọrọ mgbanwe ha nwere ike ime, lelee eziokwu ọ bụla, mee atụmatụ n'enweghị nsogbu ya na onye okenye, ma jiri nkwanye ugwu gwa ndị nwere ike inye aka okwu, ka olu ha weta ezi mgbanwe.",
    constraints: [
      "Iwu afọ na iwu AI nke ụlọ akwụkwọ; nne na nna, onye nlekọta ma ọ bụ onye nkuzi na-esonye tupu a kpọtụrụ ndị ọchịchị ma ọ bụ hazie mmemme",
      "Nchekwa: ikike maka mmemme, ọ dịghị mgbe a na-aga naanị gị, ọ dịghịkwa ozi nzuzo n'ịntanetị",
      "A ga-elelerịrị eziokwu na isi iyi a pụrụ ịtụkwasị obi; ọ dịghị foto ma ọ bụ okwu e kwuru adịgboroja",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa ụlọ akwụkwọ ma ọ bụ ọba akwụkwọ nwere ngwa n'efu",
      "Nkuzi dị mkpụmkpụ na okwu dị mfe"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe ị na-eche banyere ụlọ akwụkwọ ma ọ bụ obodo gị", action: "ịhọrọ otu nsogbu dị n'obodo gị ma kọwaa ya n'otu ahịrịokwu na ndị ọ na-emetụta na onye nwere ike idozi ya", standard: "site n'ịhọrọ nsogbu ị nwere ike ịrụ ọrụ na ya n'enweghị nsogbu" },
    { id: "O2", condition: "Site n'iji ngwa enyemaka AI na isi iyi a pụrụ ịtụkwasị obi", action: "ịchọpụta ihe banyere nsogbu gị ma lelee eziokwu ọ bụla, ma chịkọta ihe akaebe nke gị", standard: "site n'iji naanị eziokwu saịtị gọọmentị ma ọ bụ ezi mmadụ kwadoro" },
    { id: "O3", condition: "Mgbe e nyere gị nsogbu gị", action: "ime atụmatụ otu obere omume nwere ụbọchị, ndị enyemaka, ikike ndị a chọrọ na onye okenye na-akwado gị", standard: "na ikike adịlarị tupu ị malite" },
    { id: "O4", condition: "Mgbe e nyere gị eziokwu i lelere", action: "ide ozi dị mkpụmkpụ nwere nkwanye ugwu nye onye nwere ike ime mkpebi, nwere arịrịọ doro anya", standard: "nke e degharịrị n'okwu nke gị, nke onye okenye gụrụ tupu e zipu ya" },
    { id: "O5", condition: "Mgbe ị na-ekesa omume gị", action: "ime pọsta ma ọ bụ post na-ekwu gịnị, mgbe, ebee na ihe mere o ji dị mkpa, ma kesaa ya n'enweghị nsogbu", standard: "site n'akaụntụ a kwadoro, na-enweghị ozi nzuzo na-enweghị mkparị onye ọ bụla" },
    { id: "O6", condition: "Tupu ị kesaa ihe ọ bụla gbasara ihe ị na-akwado", action: "ịlele na ọ bụ eziokwu, na e lelere ya, na ọ dị mma nye mmadụ niile, ịkpọ foto AI aha, na ide atụmatụ omume nke otu peeji", standard: "na-ejighị foto adịgboroja ma ọ bụ okwu adịgboroja nke ezi mmadụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Site n'iche echiche ruo n'atụmatụ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịhọrọ nsogbu ị nwere ike ịgbanwe n'ezie",
          minutes: 4,
          goal: "Họrọ otu nsogbu dị n'obodo gị ma kọwaa ya n'otu ahịrịokwu doro anya.",
          text: [
            "Enyemaka obodo (social impact) pụtara ime ka ihe ka mma nye ndị ọzọ. Ọrụ mgbanwe (activism) pụtara ịrụ ọrụ maka mgbanwe. Ọ dịghị mkpa ka i dozie ụwa niile. Obere nsogbu dị n'obodo gị nke ị na-ahụ anya, dị ka ebe a na-aṅụ mmiri n'ụlọ akwụkwọ mebiri emebi ma ọ bụ ihe mkpofu n'ebe a na-eche bọs, dị mfe ịgbanwe, ọ na-akụzikwara gị otu mgbanwe si eme.",
            "Jụọ: Onye ka ọ na-emetụta? Kedu ka ọ ga-adị ma ọ ka mma? Onye nwere ike idozi ya, dị ka onye isi ụlọ akwụkwọ, onye ndụmọdụ otu, school board ma ọ bụ kansụl obodo?",
            "Ngwa enyemaka AI nwere ike inyere gị aka ichepụta echiche: \"Adị m afọ 15. Kedu obere nsogbu ndị nọ n'afọ iri na ụma nwere ike inye aka dozie n'ụlọ akwụkwọ sekọndrị ma ọ bụ n'agbata obi?\" Wee họrọ otu dị gị mkpa nke ị nwere ike ịrụ ọrụ na ya n'enweghị nsogbu."
          ],
          words: [["Enyemaka obodo (social impact)", "ime ka ihe ka mma nye ndị ọzọ."], ["Ọrụ mgbanwe (activism)", "ịrụ ọrụ maka mgbanwe n'ụlọ akwụkwọ gị, n'obodo gị ma ọ bụ n'ụwa."], ["Onye nwere ike ime mkpebi", "mmadụ ma ọ bụ otu nwere ike ime mgbanwe ahụ."]],
          slides: [
            { title: "Malite n'obere ihe dị nso", bullets: ["Nsogbu ị na-ahụ anya", "Ọ dị mfe ịgbanwe", "Ọ na-akụzi otu mgbanwe si eme"] },
            { title: "Ajụjụ atọ", bullets: ["Onye ka ọ na-emetụta?", "Kedu ka ọ ga-adị ma ọ ka mma?", "Onye nwere ike idozi ya?"] },
            { title: "Chepụta echiche na AI", bullets: ["Rịọ echiche ndị ntorobịa nwere ike ịrụ", "Họrọ otu dị gị mkpa", "Họrọ otu ị nwere ike ime n'enweghị nsogbu"] }
          ],
          tryIt: "Dee nsogbu gị n'otu ahịrịokwu, dị ka \"Ụlọ akwụkwọ anyị enweghị ihe nchekwa ihe mkpofu (recycling) n'ụlọ nri, ya mere a na-atụba kansụ n'ihe mkpofu nkịtị.\" Tinye ndị ọ na-emetụta na onye nwere ike idozi ya.",
          youCanNow: "ịhọrọ nsogbu dị n'obodo gị ma kwuo ndị ọ na-emetụta na onye nwere ike ịgbanwe ya.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka ọrụ mgbanwe (activism) pụtara?", options: ["Ide ihe banyere onwe gị n'ịntanetị", "Idozi ụwa niile n'otu oge", "Ịrụ ọrụ maka mgbanwe", "Ịrụ ụka n'ịntanetị"], answer: 2, why: "Ọrụ mgbanwe pụtara ịrụ ọrụ maka mgbanwe; enyemaka obodo pụtara ime ka ihe ka mma nye ndị ọzọ." },
            { objective: "O1", q: "Ọtụtụ nsogbu na-echegbu gị. Kedu nke kacha mma ịhọrọ na mbụ?", options: ["Ihe mkpofu n'ebe a na-eche bọs nke ị na-ahụ ma nwee ike inye aka dozie", "Ịkwụsị mmetọ gburugburu ebe obibi n'ụwa niile", "Nsogbu dị na mba ị na-amaghị ihe ọ bụla banyere ya", "Ihe ọ bụla na-ewu ewu n'ịntanetị"], answer: 0, why: "Obere nsogbu dị n'obodo gị dị mfe ịgbanwe, ọ na-akụzikwara gị otu mgbanwe si eme." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Iji AI chọpụta ihe na ịlele eziokwu ọ bụla",
          minutes: 6,
          goal: "Jiri AI malite nchọpụta, wee kwado eziokwu na isi iyi a pụrụ ịtụkwasị obi.",
          text: [
            "AI bụ ezigbo ebe mmalite: \"Kọwaa ihe mere ụlọ akwụkwọ ji eme recycling na ihe na-egbochikarị ha. Tụọ ajụjụ m kwesịrị ịjụ onye isi ụlọ akwụkwọ m.\" Mana AI nwere ike ime mperi ma ọ bụ nwee ozi ochie, ọ na-echepụtakwa nọmba ma ọ bụ isi iyi mgbe ụfọdụ. A na-akpọ nke a hallucination.",
            "Eziokwu ọ bụla ị chọrọ iji n'ozi ga-abụrịrị nke e lelere. Isi iyi a pụrụ ịtụkwasị obi gụnyere weebụsaịtị ụlọ akwụkwọ gị ma ọ bụ district, weebụsaịtị gọọmentị obodo gị, saịtị gọọmentị (ọtụtụ na-ejedebe na .gov), na ezi mmadụ dị ka onye nkuzi, onye na-elekọta ọba akwụkwọ ma ọ bụ ọfịs na-ahụ maka ya.",
            "Ihe akaebe nke gị dịkwa mkpa. Gụọ ọnụ ọgụgụ ite ihe mkpofu jupụtara n'oke, see foto nsogbu ahụ (ọ bụghị foto ndị mmadụ n'enweghị ikike ha), ma ọ bụ mee obere nnyocha (survey) n'etiti ụmụ klas gị mgbe onye nkuzi kwere."
          ],
          steps: ["Rịọ AI ka ọ kọwaa nsogbu ahụ ma tụọ ajụjụ.", "Dee eziokwu ọ bụla ị chọrọ iji.", "Lelee eziokwu ọ bụla na saịtị gọọmentị ma ọ bụ ya na ezi mmadụ.", "Chịkọta ihe akaebe nke gị: ọnụ ọgụgụ, foto ebe, obere nnyocha.", "Tụpụ eziokwu ọ bụla ị na-enweghị ike ịkwado."],
          words: [["Hallucination", "mgbe AI dere ihe dị ka eziokwu mana ọ bụ ihe e chepụtara echepụta."], ["Ihe akaebe", "eziokwu ma ọ bụ ihe ngosi na-akwado ihe ị na-ekwu."], ["Nnyocha (survey)", "obere ajụjụ ị na-ajụ ọtụtụ mmadụ."]],
          slides: [
            { title: "AI bụ ebe mmalite", bullets: ["Ọ na-akọwa nsogbu ahụ", "Ọ na-atụ ajụjụ ị ga-ajụ", "O nwere ike ime mperi ma ọ bụ chepụta ihe"] },
            { title: "Lelee eziokwu ọ bụla", bullets: ["Weebụsaịtị ụlọ akwụkwọ ma ọ bụ obodo", "Saịtị gọọmentị, na-ejedebekarị na .gov", "Ndị nkuzi, ndị ọba akwụkwọ, ọfịs na-ahụ maka ya"] },
            { title: "Ihe akaebe nke gị", bullets: ["Ọnụ ọgụgụ na foto ebe", "Obere nnyocha, mgbe onye nkuzi kwere", "Ọ dịghị foto mmadụ n'enweghị ikike"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI ka ọ kọwaa nsogbu gị ma nye gị eziokwu atọ. Lelee eziokwu ọ bụla na isi iyi a pụrụ ịtụkwasị obi ma dee \"e kwadoro\" ma ọ bụ \"e kwadoghị\" n'akụkụ ya. Wee chịkọta otu ihe akaebe nke gị.",
          youCanNow: "iji AI chọpụta ihe banyere nsogbu ma debe naanị eziokwu i kwadoro na isi iyi a pụrụ ịtụkwasị obi.",
          quickCheck: [
            { objective: "O2", q: "Kedu isi iyi a pụrụ ịtụkwasị obi maka iwu school district?", options: ["Post soshal midia ọ bụla", "Azịza AI na-enweghị isi iyi", "Ihe enyi gị chere", "Weebụsaịtị ụlọ akwụkwọ gị ma ọ bụ district"], answer: 3, why: "Saịtị gọọmentị nke ụlọ akwụkwọ, district, obodo na gọọmentị bụ isi iyi a pụrụ ịtụkwasị obi." },
            { objective: "O2", q: "Ị chọrọ foto iji gosi nsogbu ihe mkpofu. Gịnị ka ị ga-ese?", options: ["Ndị ị na-amaghị na-atụba ihe mkpofu", "Ebe ihe mkpofu dị, ọ bụghị ndị mmadụ n'enweghị ikike", "Ihu ụmụ klas gị", "Adreesị ụlọ gị"], answer: 1, why: "Foto nsogbu ahụ bụ ezigbo ihe akaebe; esela foto ndị mmadụ n'enweghị ikike." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ime atụmatụ otu obere omume",
          minutes: 5,
          goal: "Gbanwee nsogbu gị ka ọ bụrụ otu obere omume nwere ụbọchị, ndị enyemaka na onye okenye na-akwado gị.",
          text: [
            "Ezigbo omume doro anya: ụbọchị ihicha ebe, arịrịọ nye onye isi ụlọ akwụkwọ maka ihe nchekwa recycling, mkpokọta ihe ndị a chọrọ, okwu n'nzukọ kansụl ụmụ akwụkwọ. Họrọ otu ị nwere ike ime n'izu ole na ole na-abịa.",
            "Jụọ AI: \"Nyere m aka mee atụmatụ ihicha ogige ọha otu awa maka ụmụ akwụkwọ 10. Depụta ihe a ga-eji, iwu nchekwa, onye a ga-arịọ ikike na usoro oge dị mfe.\" Wee lelee atụmatụ ahụ ya na onye okenye.",
            "Nchekwa bụ nke mbụ: nweta ikike n'aka ụlọ akwụkwọ gị ma ọ bụ onye nwe ogige ahụ, tinye nne na nna gị, onye nlekọta gị ma ọ bụ onye nkuzi, agala naanị gị mgbe ọ bụla, ma gbasoo iwu ọ bụla gbasara uwe aka (gloves), okporo ụzọ ma ọ bụ ihe mkpofu."
          ],
          steps: ["Họrọ otu omume doro anya.", "Rịọ AI ndepụta: ihe a ga-eji, nzọụkwụ, usoro oge, ikike.", "Họrọ ụbọchị na ndị enyemaka.", "Rịọ nne na nna, onye nlekọta, onye nkuzi ma ọ bụ onye ndụmọdụ ka o kwado gị.", "Nweta ikike ọ bụla ị chọrọ tupu ị malite."],
          words: [["Atụmatụ omume", "ndepụta ihe ị ga-eme, mgbe, na ndị ga-enye aka."], ["Onye na-akwado gị", "onye okenye na-enyere gị aka ma na-elele atụmatụ gị."]],
          slides: [
            { title: "Otu omume doro anya", bullets: ["Ihicha ebe, arịrịọ, mkpokọta ihe ma ọ bụ okwu", "Ihe ị nwere ike ime n'izu ole na ole"] },
            { title: "Mee atụmatụ na AI", bullets: ["Ihe a ga-eji na nzọụkwụ", "Usoro oge", "Onye a ga-arịọ ikike"] },
            { title: "Nchekwa bụ nke mbụ", bullets: ["Nweta ikike", "Onye okenye na-esonye", "Agala naanị gị; gbasoo iwu"] }
          ],
          tryIt: "Jiri ngwa enyemaka AI mee atụmatụ otu obere omume maka nsogbu gị. Dee ụbọchị, ndị enyemaka abụọ, ikike ị chọrọ, na onye okenye ga-akwado gị.",
          youCanNow: "ịgbanwe nsogbu ka ọ bụrụ atụmatụ omume doro anya n'enweghị nsogbu, nke onye okenye na-akwado.",
          quickCheck: [
            { objective: "O3", q: "Gịnị na-eme ka omume doo anya?", options: ["O nwere gịnị doro anya, ụbọchị na ndị na-enye aka", "Ọ buru ibu nke ukwuu", "O nweghị ụbọchị njedebe", "Ọ bụ naanị echiche"], answer: 0, why: "Omume doro anya na-ekwu ihe ị ga-eme, mgbe, na ndị gị na ha ga-eme ya." },
            { objective: "O3", q: "Ị na-eme atụmatụ ihicha ogige ọha nke obodo. Gịnị ka ị ga-eme tupu ụbọchị ahụ?", options: ["Naanị gaa ebe ahụ", "Gaa naanị gị n'isi ụtụtụ", "Nweta ikike n'aka onye nwe ogige ahụ ma tinye onye okenye", "Tinye adreesị ụlọ gị n'ịntanetị maka ndị enyemaka"], answer: 2, why: "Nchekwa bụ nke mbụ: nweta ikike, tinye onye okenye, agala naanị gị mgbe ọ bụla." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Site n'iche echiche ruo n'atụmatụ",
        questions: [
          { objective: "O1", q: "Kedu nsogbu kacha mma ịmalite na ya?", options: ["Ịkwụsị agụụ n'ụwa niile tupu Fraịde", "Inweta ihe nchekwa recycling n'ụlọ nri ụlọ akwụkwọ gị", "Ịgbanwe iwu niile", "Idozi ịntanetị niile"], answer: 1, why: "Obere nsogbu dị n'obodo gị dị mfe ịgbanwe, ha na-akụzikwara gị otu esi eme ya." },
          { objective: "O1", q: "Onye bụ onye nwere ike ime mkpebi?", options: ["Mmadụ ma ọ bụ otu nwere ike ime mgbanwe ahụ", "Onye ọ bụla na-eji soshal midia", "Ngwa enyemaka AI", "Onye klas gị kwenyere na gị"], answer: 0, why: "Ndị nwere ike ime mkpebi, dị ka onye isi ụlọ akwụkwọ ma ọ bụ kansụl, nwere ike ime mgbanwe ahụ." },
          { objective: "O2", q: "AI nyere gị ọnụ ọgụgụ (statistic) maka akwụkwọ ozi gị. Gịnị ka ị ga-eme?", options: ["Jiri ya ozugbo", "Mee ka ọ buru ibu karị", "Lelee ya na isi iyi a pụrụ ịtụkwasị obi tupu i jiri ya", "Jụọ AI ma o ji n'aka wee jiri ya"], answer: 2, why: "AI nwere ike ịchepụta nọmba; kwado ha na isi iyi a pụrụ ịtụkwasị obi." },
          { objective: "O2", q: "Kedu nke bụ ihe akaebe nke gị?", options: ["Asịrị", "Ihe e chere echiche", "Akụkọ e chepụtara echepụta", "Ọnụ ọgụgụ ite ihe mkpofu jupụtara n'oke"], answer: 3, why: "Ọnụ ọgụgụ na foto ebe bụ ihe akaebe ị na-achịkọta n'onwe gị." },
          { objective: "O3", q: "Tupu ihicha ogige ọha, gịnị ka ị ga-emerịrị?", options: ["Gaa naanị gị n'abalị", "Nweta ikike ma tinye onye okenye", "Hapụ iwu nchekwa", "Tinye adreesị gị n'ịntanetị"], answer: 1, why: "Ikike na nkwado onye okenye na-eme ka omume ahụ dị nchebe." }
        ]
      }
    },
    {
      name: "Isi 2: Ikwu okwu na ịgbasa ozi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ide ozi nwere nkwanye ugwu nye onye nwere ike ime mkpebi",
          minutes: 5,
          goal: "Jiri AI dee akwụkwọ ozi ma ọ bụ email doro anya, nwere nkwanye ugwu, wee mee ka ọ bụrụ nke gị.",
          text: [
            "Ozi siri ike dị mkpụmkpụ ma nwee nkwanye ugwu: onye ị bụ (aha mbụ gị, klas gị, ụlọ akwụkwọ ma ọ bụ agbata obi), nsogbu ahụ n'otu ahịrịokwu, otu ma ọ bụ eziokwu abụọ e lelere, arịrịọ doro anya, na ekele.",
            "Jụọ AI: \"Nyere m aka dee email dị mkpụmkpụ, nwere nkwanye ugwu, nye onye isi ụlọ akwụkwọ m, na-arịọ maka ihe nchekwa recycling n'ụlọ nri. Anọ m na klas 10. Nke a bụ eziokwu m: [eziokwu i lelere]. Mee ka ọ ghara ịgafe okwu 150.\" Wee degharịa ya n'okwu nke gị ma wepụ ihe ọ bụla i lereghị.",
            "Iji chọta onye ị ga-akpọtụrụ, lee weebụsaịtị ụlọ akwụkwọ gị ma ọ bụ district, ma ọ bụ weebụsaịtị gọọmentị obodo gị. USA.gov nwere peeji na-ejikọ gị na ndị a họpụtara n'ọchịchị na gọọmentị etiti, steeti na obodo. Mee ka nne na nna gị, onye nlekọta gị ma ọ bụ onye nkuzi gị gụọ ozi gị tupu i zipu ya."
          ],
          steps: ["Kwuo onye ị bụ n'enweghị ozi nzuzo karịa aha mbụ na klas gị.", "Kwuo nsogbu ahụ n'otu ahịrịokwu.", "Tinye otu ma ọ bụ eziokwu abụọ e lelere.", "Mee arịrịọ doro anya ma kelee.", "Degharịa ihe mbụ AI dere n'okwu nke gị ma mee ka onye okenye gụọ ya tupu i zipu ya."],
          words: [["Arịrịọ doro anya", "ihe kpọmkwem ị chọrọ ka onye ahụ mee."], ["Onye a họpụtara n'ọchịchị", "onye a tụụrụ vootu ka ọ rụọ ọrụ, dị ka onye otu kansụl obodo."]],
          slides: [
            { title: "Ozi siri ike", bullets: ["Onye ị bụ", "Nsogbu ahụ n'otu ahịrịokwu", "Otu ma ọ bụ eziokwu abụọ e lelere", "Arịrịọ doro anya na ekele"] },
            { title: "AI na-ede ihe mbụ, gị na-ekpebi", bullets: ["Nye ya naanị eziokwu e lelere", "Degharịa ya n'okwu nke gị", "Mee ka ọ ghara ịgafe okwu 150"] },
            { title: "Onye ị ga-akpọtụrụ", bullets: ["Weebụsaịtị ụlọ akwụkwọ ma ọ bụ district", "Weebụsaịtị gọọmentị obodo", "Peeji ndị a họpụtara n'ọchịchị na USA.gov"] }
          ],
          sources: [{ name: "USA.gov: Chọta ndị a họpụtara n'ọchịchị (Find your elected officials)", url: "https://www.usa.gov/elected-officials" }],
          tryIt: "Jiri ngwa enyemaka AI dee ozi mbụ nye onye nwere ike ime mkpebi maka nsogbu gị, site n'iji naanị eziokwu i kwadoro. Degharịa ya n'okwu nke gị ma rịọ onye okenye ka ọ gụọ ya. Ezipula ya ruo mgbe ha gụrụ ya.",
          youCanNow: "ide ozi dị mkpụmkpụ, nwere nkwanye ugwu, nke e lelere eziokwu ya, na-arịọ onye nwere ike ime mkpebi maka mgbanwe doro anya.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ \"arịrịọ doro anya\" n'ozi?", options: ["Ogologo ndepụta mkpesa", "Arịrịọ doro anya, dị ka itinye ihe nchekwa recycling n'ụlọ nri", "Ajụjụ banyere ihu igwe", "Nọmba ekwentị gị"], answer: 1, why: "Arịrịọ doro anya na-agwa onye nwere ike ime mkpebi kpọmkwem ihe ị chọrọ ka o mee." },
            { objective: "O4", q: "Ihe mbụ AI dere nwere nọmba i lebeghị anya. Gịnị ka ị ga-eme?", options: ["Hapụ ya; ọ na-ada mma", "Mee ka ọ buru ibu karị", "Mee ka o gbaa ojii", "Wepụ ya ma ọ bụ lelee ya tupu i zipu"], answer: 3, why: "Degharịa ihe mbụ ahụ ma wepụ ihe ọ bụla i lereghị." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịgbasa ozi n'enweghị nsogbu",
          minutes: 5,
          goal: "Mee pọsta ma ọ bụ post dị mfe banyere omume gị ma kesaa ya n'enweghị nsogbu.",
          text: [
            "Ndị mmadụ na-esonye mgbe ozi doro anya: gịnị, mgbe, ebee na ihe mere o ji dị mkpa. AI nwere ike inyere gị aka ide obere okwu mkpọsa (slogan) ma ọ bụ post, ngwa n'efu dị ka Canva nwekwara ike inyere gị aka ime pọsta. Lelee ụbọchị, oge na ebe ọ bụla.",
            "Nọrọ n'udo n'ịntanetị: kesaa site n'akaụntụ otu ụlọ akwụkwọ ma ọ bụ akaụntụ ezinụlọ gị kwadoro ma ọ bụrụ na ị nwere ike, debe aha gị zuru ezu, nọmba ekwentị na adreesị ụlọ gị na nzuzo, ekesakwala foto ndị ọzọ n'enweghị ikike ha.",
            "Ụfọdụ ndị agaghị ekwenye. Nke ahụ dị mma. Zaa ha n'udo ma ọ bụ azaghị ha ma ọlị, ma etinyela mkparị onye ọ bụla mgbe ọ bụla. Ọ bụrụ na mmadụ na-eyi gị egwu ma ọ bụ na-akpagbu gị, azala ya; chekwaa ya, gbochie ya (block), kọọ ya (report) ma gwa onye okenye ị tụkwasịrị obi."
          ],
          steps: ["Dee gịnị, mgbe, ebee na ihe mere n'okwu ole na ole.", "Rịọ AI echiche slogan atọ ma họrọ ma ọ bụ degharịa otu.", "Mee pọsta ma ọ bụ post ma lelee ihe ọ bụla dị na ya.", "Kesaa site n'akaụntụ otu ma ọ bụ nke ezinụlọ kwadoro.", "Debe ozi nzuzo n'ebe ọ na-adịghị ma gwa onye okenye banyere iyi egwu ọ bụla."],
          words: [["Slogan", "obere okwu na-adọrọ mmasị banyere ihe ị na-akwado."], ["Mkpagbu (harassment)", "ozi ọjọọ ma ọ bụ ozi iyi egwu a na-ezite ugboro ugboro."]],
          slides: [
            { title: "Ozi doro anya", bullets: ["Gịnị, mgbe, ebee, ihe mere", "Obere slogan", "Lelee ihe ọ bụla dị na ya"] },
            { title: "Kesaa n'enweghị nsogbu", bullets: ["Akaụntụ otu ma ọ bụ nke ezinụlọ kwadoro", "Ọ dịghị nọmba ekwentị ma ọ bụ adreesị ụlọ", "Ọ dịghị foto ndị ọzọ n'enweghị ikike"] },
            { title: "Mgbe ndị mmadụ ekwenyeghị", bullets: ["Zaa n'udo ma ọ bụ azala", "Ọ dịghị mkparị onye ọ bụla", "Iyi egwu: chekwaa, block, report, gwa onye okenye"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI echiche slogan atọ maka omume gị. Họrọ otu, mee pọsta ma ọ bụ post dị mfe nwere gịnị, mgbe, ebee na ihe mere, ma mee ka onye okenye lelee ya tupu ị kesaa ya.",
          youCanNow: "ime ozi doro anya banyere ihe ị na-akwado ma kesaa ya n'enweghị nsogbu na nkwanye ugwu.",
          quickCheck: [
            { objective: "O5", q: "Kedu ihe anọ pọsta maka omume gị kwesịrị ịgwa ndị mmadụ?", options: ["Gịnị, mgbe, ebee na ihe mere", "Aha gị zuru ezu, ekwentị, adreesị na ụlọ akwụkwọ", "Naanị slogan", "Onye a ga-ata ụta"], answer: 0, why: "Ozi doro anya na-ekwu gịnị, mgbe, ebee na ihe mere o ji dị mkpa." },
            { objective: "O5", q: "Mmadụ dere okwu ọjọọ na-akpọ gị aha ọjọọ. Gịnị ka ị ga-eme?", options: ["Kparịa ya azụ", "Tinye ozi nzuzo ya n'ịntanetị", "Zaa n'udo ma ọ bụ azala ma ọlị, ma gwa onye okenye ma ọ bụrụ na ọ ghọọ iyi egwu", "Hichapụ mkpọsa gị niile"], answer: 2, why: "Etinyela mkparị onye ọ bụla; chekwaa, block, report ma gwa onye okenye banyere iyi egwu." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Iji AI nke ọma n'ọrụ mgbanwe, na atụmatụ omume gị",
          minutes: 6,
          goal: "Zere ihe na-eduhie mmadụ ma mechaa atụmatụ omume nke otu peeji.",
          text: [
            "AI na-eme ka ọ dị mfe ime foto adịgboroja, okwu adịgboroja na akụkọ adịgboroja. Iji ha, ọbụlagodi maka ezi ihe, na-emebi ntụkwasị obi ma nwee ike ịgbasa ụgha. Emela foto ma ọ bụ okwu adịgboroja nke ezi mmadụ mgbe ọ bụla, ma kpọọ foto ọ bụla AI mere nke ị na-eji aha.",
            "Tupu ị kesaa ihe ọ bụla, jụọ: Ọ bụ eziokwu? Ò lelere m ya? Ọ dị mma nye ndị ọ metụtara? Ọ ga-adị m mma ma ọ bụrụ na onye m na-ede banyere ya gụrụ ya?",
            "Ugbu a, tinye ya niile n'otu peeji: nsogbu ahụ, eziokwu abụọ e lelere, otu omume nwere ụbọchị na ndị enyemaka, onye okenye na-akwado gị, ozi gị nye onye nwere ike ime mkpebi, na otu ị ga-esi kesaa ya. Wee chee echiche: gịnị rụrụ ọrụ, gịnịkwa ka ị ga-eme ọzọ?"
          ],
          steps: ["Lelee na foto na okwu ọ bụla bụ ezi ihe ma ọ bụ e dere n'ụzọ doro anya na AI mere ya.", "Jụọ: ọ bụ eziokwu, e lelere ya, ọ dịkwa mma nye mmadụ niile?", "Dee atụmatụ omume gị nke otu peeji.", "Tinye ozi gị na atụmatụ ịkesa ya.", "Mgbe omume gị gachara, dee ihe rụrụ ọrụ na ihe na-esote."],
          words: [["Ozi ụgha (misinformation)", "ozi ezighi ezi, a kesara n'amaghị ama ma ọ bụ n'ebumnuche."], ["Akara (label)", "ndetu na-ekwu na e ji AI mee ihe."]],
          slides: [
            { title: "Ọ dịghị ihe adịgboroja", bullets: ["Ọ dịghị foto ma ọ bụ okwu adịgboroja nke ezi mmadụ", "Kpọọ foto AI mere aha", "Ihe adịgboroja na-emebi ntụkwasị obi, ọbụlagodi maka ezi ihe"] },
            { title: "Tupu ị kesaa", bullets: ["Ọ bụ eziokwu?", "Ò lelere m ya?", "Ọ dị mma nye mmadụ niile?"] },
            { title: "Atụmatụ gị nke otu peeji", bullets: ["Nsogbu na eziokwu abụọ e lelere", "Otu omume, ụbọchị, ndị enyemaka, onye okenye", "Ozi na atụmatụ ịkesa ya"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ omume gị nke otu peeji nwere nsogbu ahụ, eziokwu abụọ e lelere, otu omume nwere ụbọchị na ndị enyemaka, onye okenye na-akwado gị, ozi gị e degharịrị nye onye nwere ike ime mkpebi, na atụmatụ gị ịkesa ya n'enweghị nsogbu.",
          youCanNow: "iji AI nke ọma mee atụmatụ, kwuo okwu ma kesaa obere omume na-eweta ezi mgbanwe.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ ozi ụgha (misinformation)?", options: ["Eziokwu e lelere", "Akara dị na foto AI", "Ụdị pọsta", "Ozi ezighi ezi a kesara n'amaghị ama ma ọ bụ n'ebumnuche"], answer: 3, why: "Ozi ụgha bụ ozi ezighi ezi, AI na-emekwa ka ọ dị mfe ime ya." },
            { objective: "O6", q: "Okwu e chepụtara echepụta site n'ọnụ onye ndu obodo ga-eme ka mkpọsa gị gbasaa ebe niile. Gịnị ka ị ga-eme?", options: ["Jiri ya otu ugboro", "Ejila ya; okwu adịgboroja na-emebi ntụkwasị obi ma na-agbasa ụgha", "Jiri ya ma kpuchie aha ahụ", "Rịọ AI ka o mee ka ọ dị ka ezi okwu"], answer: 1, why: "Okwu ma ọ bụ foto adịgboroja nke ezi mmadụ na-emebi ntụkwasị obi, ọbụlagodi maka ezi ihe." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ikwu okwu na ịgbasa ozi",
        questions: [
          { objective: "O4", q: "Kedu nke kwesịrị ịdị n'ozi nye onye nwere ike ime mkpebi?", options: ["Arịrịọ doro anya na ekele", "Mkparị", "Eziokwu i lereghị", "Adreesị ụlọ gị na nọmba ekwentị gị"], answer: 0, why: "Arịrịọ doro anya na nkwanye ugwu na-eme ka ozi sie ike." },
          { objective: "O4", q: "Ebee ka ị ga-ahụ njikọ gaa na ndị a họpụtara n'ọchịchị gị?", options: ["Post soshal midia ọ bụla", "Ihe AI chere", "Peeji ndị a họpụtara n'ọchịchị na USA.gov", "Email a na-ezigharị ezigharị (chain email)"], answer: 2, why: "USA.gov na-ejikọ gị na ndị ọchịchị nke gọọmentị etiti, steeti na obodo." },
          { objective: "O5", q: "Mmadụ dere iyi egwu na post mkpọsa gị. Gịnị ka ị ga-eme?", options: ["Zaa ya site n'iyi ya egwu", "Kesaa adreesị ya", "Leghara ya anya ma agwala onye ọ bụla", "Chekwaa ya, block, report ma gwa onye okenye ị tụkwasịrị obi"], answer: 3, why: "A ga-echekwa iyi egwu, block, report ya ma gwa onye okenye." },
          { objective: "O6", q: "Enyi gị tụrụ aro foto AI adịgboroja nke onye isi obodo (mayor) ka ndị mmadụ lee anya. Ị ga-:", options: ["Sị mba; ihe adịgboroja na-agbasa ụgha ma na-emebi ntụkwasị obi", "Mee ya ma ghara ịkpọ ya aha", "Mee ya maka ezi ihe", "Tinye ya n'ịntanetị ma hichapụ ya emechaa"], answer: 0, why: "Foto adịgboroja nke ezi mmadụ na-eduhie mmadụ, ọbụlagodi maka ezi ihe." },
          { objective: "O6", q: "Gịnị ka ị kwesịrị ịjụ tupu ị kesaa ihe ọ bụla gbasara ihe ị na-akwado?", options: ["Ọ ga-agbasa ebe niile?", "Ọ bụ eziokwu, e lelere ya, ọ dịkwa mma nye mmadụ niile?", "Ọ bụ post kacha ogologo?", "Ọ bụ AI dere ya niile?"], answer: 1, why: "Eziokwu, ilele na ime ihe ziri ezi na-eme ka ndị mmadụ tụkwasị mkpọsa gị obi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Ọrụ Mgbanwe na Enyemaka Obodo",
    questions: [
      { objective: "O1", q: "Enyemaka obodo (social impact) pụtara:", options: ["Ime ka ihe ka mma nye ndị ọzọ", "Inweta likes", "Imeri n'ụka", "Iji AI nke ukwuu"], answer: 0, why: "Enyemaka obodo bụ ime ka ndụ ndị ọzọ ka mma." },
      { objective: "O1", q: "Gịnị mere a ga-eji malite na obere nsogbu dị n'obodo gị?", options: ["Ọ dịghị mkpa", "Ọ dị mfe ịgbanwe, ọ na-akụzikwara gị otu mgbanwe si eme", "Nsogbu buru ibu megidere iwu", "Ndị okenye chọrọ ya"], answer: 1, why: "Obere mmeri na-ewulite nka na obi ike." },
      { objective: "O1", q: "Kedu nke bụ nsogbu doro anya n'otu ahịrịokwu?", options: ["\"Ihe adịghị mma\"", "\"Ihe niile kwesịrị ịgbanwe\"", "\"Ụlọ nri anyị enweghị ihe nchekwa recycling, ya mere a na-atụba kansụ n'ihe mkpofu nkịtị\"", "\"Ndị mmadụ na-akpasu iwe\""], answer: 2, why: "Ọ na-ekwu ihe nsogbu ahụ bụ na ihe mere o ji dị mkpa." },
      { objective: "O1", q: "Onye nwere ike idozi nsogbu ebe a na-aṅụ mmiri n'ụlọ akwụkwọ?", options: ["Ụlọ ọrụ egwuregwu vidiyo", "Ngwa enyemaka AI", "Onye na-eso gị n'ịntanetị ị na-amaghị", "Onye isi ụlọ akwụkwọ ma ọ bụ school district"], answer: 3, why: "Ndị isi ụlọ akwụkwọ nwere ike ime ndozi n'ụlọ akwụkwọ." },
      { objective: "O2", q: "Hallucination n'AI pụtara:", options: ["AI dere ihe dị ka eziokwu mana e chepụtara ya", "AI mebiri emebi", "AI nwere nkà okike nke ukwuu", "AI na-adị nwayọọ"], answer: 0, why: "AI nwere ike ịchepụta eziokwu na isi iyi." },
      { objective: "O2", q: "Kedu isi iyi a pụrụ ịtụkwasị obi maka iwu obodo?", options: ["Meme", "Weebụsaịtị gọọmentị obodo ahụ", "Okwu onye na-akpọghị aha ya", "Naanị azịza AI"], answer: 1, why: "Saịtị gọọmentị bụ ebe a na-akwado iwu." },
      { objective: "O2", q: "Ị pụghị ịkwado eziokwu AI nyere gị. Ị kwesịrị:", options: ["Iji ya n'agbanyeghị", "Ime ka ọ dị ka ihe e ji n'aka karị", "Ịhapụ ya", "Ikwu na AI nyere ya"], answer: 2, why: "Jiri naanị eziokwu i kwadoro." },
      { objective: "O2", q: "Tupu ị mee obere nnyocha n'etiti ụmụ klas gị, ị kwesịrị:", options: ["Ịrịọ adreesị ụlọ ha", "Ime ya na nzuzo", "Ịrịọ okwuntughe ha", "Inweta nkwado onye nkuzi"], answer: 3, why: "Onye nkuzi kwesịrị ịkwado nnyocha a na-eme n'ụlọ akwụkwọ." },
      { objective: "O3", q: "Kedu omume doro anya?", options: ["Ihicha ogige ọha otu awa na Satọde ụbọchị 14 ya na ụmụ akwụkwọ 10", "\"Mee ihe otu ụbọchị\"", "\"Dozie gburugburu ebe obibi\"", "\"Nwee obi ọma karị\""], answer: 0, why: "O nwere gịnị, mgbe na ndị." },
      { objective: "O3", q: "Gịnị ka ị kwesịrị ịjụ AI mgbe ị na-eme atụmatụ omume?", options: ["Ka o mee ya maka gị", "Ihe a ga-eji, nzọụkwụ, usoro oge na onye a ga-arịọ ikike", "Ozi nzuzo ndị mmadụ", "Ka o mee ihe akaebe adịgboroja"], answer: 1, why: "AI nwere ike ime ndepụta bara uru nke ị ga-emesịa lelee ya na onye okenye." },
      { objective: "O3", q: "Kedu nke bụ iwu nchekwa maka omume n'obodo?", options: ["Gaa naanị gị", "Hapụ ikike", "Tinye nne na nna, onye nlekọta ma ọ bụ onye nkuzi", "Rụọ ọrụ n'akụkụ okporo ụzọ n'enweghị atụmatụ"], answer: 2, why: "Nkwado onye okenye na ikike na-eme ka onye ọ bụla nọrọ n'udo." },
      { objective: "O4", q: "Kedu nke kwesịrị ịdị n'ozi gị nye onye isi ụlọ akwụkwọ?", options: ["Nọmba ekwentị gị maka ndị ị na-amaghị", "Mkparị", "Asịrị e lereghị", "Aha mbụ gị, klas gị na arịrịọ doro anya"], answer: 3, why: "Kwuo onye ị bụ n'ụzọ dị mfe ma rịọ n'ụzọ doro anya." },
      { objective: "O4", q: "Mgbe AI dechara ihe mbụ nke akwụkwọ ozi gị, ị kwesịrị:", options: ["Ịdegharị ya n'okwu nke gị ma wepụ eziokwu e lereghị", "Iziga ya ozugbo", "Ime ka ọ dị ogologo karị", "Itinye okwu adịgboroja"], answer: 0, why: "Ozi gị kwesịrị ịbụ nke gị ma bụrụ eziokwu." },
      { objective: "O4", q: "Onye kwesịrị ịgụ ozi gị tupu i zipu ya?", options: ["Ọ dịghị onye", "Nne na nna, onye nlekọta ma ọ bụ onye nkuzi", "Onye ị na-amaghị n'ịntanetị", "Naanị AI"], answer: 1, why: "Onye okenye nwere ike ịhụ mperi ma chebe gị." },
      { objective: "O5", q: "Pọsta siri ike na-agwa ndị mmadụ:", options: ["Adreesị ụlọ gị", "Naanị slogan", "Gịnị, mgbe, ebee na ihe mere", "Ogologo edemede"], answer: 2, why: "Ihe ndị ahụ na-enyere ndị mmadụ aka isonye." },
      { objective: "O5", q: "Kedu akaụntụ kacha mma maka ịkesa mkpọsa gị?", options: ["Akaụntụ onye ị na-amaghị", "Akaụntụ nwere nọmba ekwentị gị na bio", "Akaụntụ adịgboroja", "Akaụntụ otu ụlọ akwụkwọ ma ọ bụ nke ezinụlọ kwadoro"], answer: 3, why: "Akaụntụ a kwadoro na-eme ka ị nọrọ n'udo karị." },
      { objective: "O5", q: "Mmadụ ekwenyeghị na post gị n'ụzọ nwere nkwanye ugwu. Ị ga-:", options: ["Zaa n'udo ma ọ bụ azala ma ọlị", "Kparịa ya", "Kesaa ozi nzuzo ya", "Mee post adịgboroja banyere ya"], answer: 0, why: "Nkwanye ugwu na-eme ka ihe ị na-akwado sie ike." },
      { objective: "O6", q: "Ozi ụgha (misinformation) bụ:", options: ["Ụdị pọsta", "Ozi ezighi ezi a kesara n'amaghị ama ma ọ bụ n'ebumnuche", "Eziokwu e lelere", "Nnyocha"], answer: 1, why: "Ozi ụgha bụ ozi ezighi ezi." },
      { objective: "O6", q: "Ị na-eji foto AI mere nke ogige ọha dị ọcha na pọsta gị. Ị kwesịrị:", options: ["Ikwu na ọ bụ ezi foto", "Izo ya n'obere mkpụrụ edemede", "Ikpọ ya aha dị ka ihe AI mere", "Iwepụ ụbọchị"], answer: 2, why: "Akara na-eme ka ị kwụwa aka ọtọ nye ndị na-ele gị." },
      { objective: "O6", q: "Mgbe omume gị gachara, ezigbo nzọụkwụ ikpeazụ bụ:", options: ["Ihichapụ ihe niile", "Ịghara ime ya ọzọ", "Ịta ndị ọzọ ụta", "Ide ihe rụrụ ọrụ na ihe ị ga-eme ọzọ"], answer: 3, why: "Iche echiche banyere ya na-eme ka omume gị ọzọ ka mma." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [0, 2, 4, 6, 8, 10, 11, 13, 14, 17]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Nsogbu doro anya",
        objective: "O1",
        notYet: "Nsogbu ahụ edoghị anya ma ọ bụ buru oke ibu ịrụ ọrụ na ya.",
        meets: "Nsogbu ahụ n'otu ahịrịokwu, na ndị ọ na-emetụta na onye nwere ike idozi ya.",
        exceeds: "Ọ na-ekwukwa otu ọ ga-adị ma ọ ka mma."
      },
      {
        name: "Eziokwu e lelere",
        objective: "O2",
        notYet: "E lereghị eziokwu ahụ ma ọ bụ ha si naanị n'AI.",
        meets: "Eziokwu abụọ e kwadoro na isi iyi a pụrụ ịtụkwasị obi, ma e kpọọ aha isi iyi ndị ahụ.",
        exceeds: "O nwekwara ihe akaebe nke onye na-amụ ihe n'onwe ya, dị ka ọnụ ọgụgụ ma ọ bụ nnyocha."
      },
      {
        name: "Omume na nchekwa",
        objective: "O3",
        notYet: "Ọ dịghị ụbọchị, ndị enyemaka ma ọ bụ onye okenye na-akwado, ma ọ bụ ọ dịghị ikike.",
        meets: "Otu obere omume nwere ụbọchị, ndị enyemaka, onye okenye na-akwado na ikike a chọrọ.",
        exceeds: "O nwere obere ndepụta nchekwa maka ụbọchị ahụ."
      },
      {
        name: "Ozi nye onye nwere ike ime mkpebi",
        objective: "O4",
        notYet: "Ozi ahụ enweghị nkwanye ugwu, edoghị anya ma ọ bụ na-eji eziokwu e lereghị.",
        meets: "Ozi dị mkpụmkpụ, nwere nkwanye ugwu, nwere nsogbu ahụ, eziokwu e lelere, arịrịọ doro anya na ekele, n'okwu onye na-amụ ihe n'onwe ya.",
        exceeds: "Onye okenye agụọla ya, ọ na-akpọkwa aha onye kwesịrị ekwesị a ga-akpọtụrụ."
      },
      {
        name: "Ịkesa n'enweghị nsogbu na n'eziokwu",
        objective: "O6",
        notYet: "Atụmatụ ịkesa nwere ozi nzuzo, foto adịgboroja ma ọ bụ ihe AI mere a na-akpọghị aha.",
        meets: "Atụmatụ ịkesa site n'akaụntụ a kwadoro na-enweghị ozi nzuzo, a kpọkwara foto AI ọ bụla aha.",
        exceeds: "Ọ na-ekwukwa otu onye na-amụ ihe ga-esi zaa ndị na-ekwenyeghị."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe mere omume ha haziri n'ime ụbọchị 60 ya na onye okenye na-akwado ha",
      "Ozi e zigara ndị nwere ike ime mkpebi na azịza ma ọ bụ mgbanwe ọ bụla sochiri ya",
      "Ndị na-amụ ihe sonyere ma ọ bụ malite otu ọrụ enyemaka, ọrụ kansụl ụmụ akwụkwọ ma ọ bụ otu obodo n'ime ụbọchị 90"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa ụlọ akwụkwọ ma ọ bụ ọba akwụkwọ nwere ịntanetị",
      "Ngwa enyemaka AI n'efu nke e kwere onye na-amụ ihe iji, na ngwa imewe n'efu dị ka Canva",
      "Akwụkwọ ma ọ bụ dọkụmentị maka atụmatụ omume nke otu peeji",
      "Onye okenye na-akwado: nne na nna, onye nlekọta, onye nkuzi ma ọ bụ onye ndụmọdụ",
      "Ihe dị ka nkeji 60 n'ozuzu, gbakwunye oge maka omume ahụ n'onwe ya"
    ],
    facilitatorNotes: [
      "Nyere ndị na-amụ ihe aka ịhọrọ nsogbu ha nwere ike ịrụ ọrụ na ya n'enweghị nsogbu na n'obodo ha; dụpụ ha n'ihe ọ bụla chọrọ ka ha gaa naanị ha ma ọ bụ ka ha chee mmadụ ihu n'ike.",
      "Kwado ikike na onye okenye na-akwado tupu mmemme ọ bụla ma ọ bụ tupu e zipu ozi ọ bụla.",
      "Gụọ ozi na pọsta ọ bụla tupu ọ pụọ iji lelee eziokwu, ụda okwu na nzuzo.",
      "Kparịta otu esi aza ndị na-ekwenyeghị na mkpagbu n'ịntanetị, ma kpọọ aha onye ndị na-amụ ihe kwesịrị ịgwa.",
      "Jiri rubric tụọ akara atụmatụ omume ahụ, ma sochie mgbe omume ahụ gachara iji nyere ndị na-amụ ihe aka iche echiche banyere ya."
    ]
  }
};
