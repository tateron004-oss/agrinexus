"use strict";

// Koach Learn course (Igbo translation of shared/ai-in-business.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-in-business-ig",
  lang: "ig",
  translationOf: "ai-in-business",
  category: "Small Business",
  name: "AI n'Azụmahịa: Atụmatụ na Ojiji",
  skills: "Ịhụ ohere iji AI, Ịhọrọ ngwa AI dabara ọrụ, Ịtụ uru na ihe egwu, Ide akwụkwọ ikpe azụmahịa peeji otu, Ime obere nnwale (pilot), Ịtụ nsonaazụ",
  outcome: "ịchọta ebe kacha mma iji AI n'azụmahịa ma ọ bụ nzukọ, ịtụ ya maka uru na ihe egwu, ide akwụkwọ ikpe azụmahịa peeji otu, na ime ma tụọ obere nnwale izu abụọ.",
  about: [
    "AI abụrụla akụkụ nke azụmahịa kwa ụbọchị: ide ihe, ilekọta ndị ahịa, ịhazi oge, ire ahịa, idebe akaụntụ na ime atụmatụ. Ihe siri ike abụghị ngwa ahụ. Ọ bụ ịhọrọ ọrụ kwesịrị ya na igosi na ọ na-enyere aka.",
    "Ihe ọmụmụ a bụ maka ndị nwe obere azụmahịa, ndị isi nzukọ na-adịghị maka uru (nonprofit), ndị njikwa, ndị ntorobịa na-azụ ahịa na onye ọ bụla chọrọ iwebata AI n'ebe ọrụ ya n'ụzọ amamihe na n'enweghị nsogbu. Ọmụmaatụ gụnyere ụlọ ntutu isi, ebe a na-enye nri, otu ndị na-elekọta ubi na ụlọ ahịa ụmụ akwụkwọ na-elekọta.",
    "Ị ga-ahụ ebe oge na-aga na nzukọ, họrọ ohere AI kacha mma, kọwaa ihe mere o ji kwesị, ma nwalee ya site n'obere nnwale. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\". Nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ ahụ."
  ],
  finalTask: "Maka ezi nzukọ ma ọ bụ nke omume, dee akwụkwọ ikpe azụmahịa AI peeji otu: ọrụ ahụ, ngwa AI ahụ, oge ma ọ bụ ego a tụrụ anya ịchekwa, ihe egwu na otu ị ga-esi jikwaa ha, na ihe ịga nke ọma ga-adị ka ya. Wee mee nnwale izu abụọ (ma ọ bụ nke omume otu ụbọchị), dee nọmba tupu na mgbe e mechara, ma dee ndụmọdụ nwere ahịrịokwu atọ: gbasaa, gbanwee ma ọ bụ kwụsị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nwe obere azụmahịa, ndị njikwa na ndị ọrụ, na ndị isi nzukọ nonprofit na nzukọ obodo chọrọ iji AI chekwaa oge ma ọ bụ lekọta ndị ahịa nke ọma karị.",
    startingPoint: "Ha maara azụmahịa ma ọ bụ nzukọ ha nke ọma, ụfọdụ anwalela ngwa enyemaka AI. Ole na ole tụrụla ebe oge ndị ọrụ na-aga, tụlee ihe egwu AI, ma ọ bụ nwalee ngwa ọhụrụ n'ụzọ a haziri ahazi.",
    gap: "Ọtụtụ ndị nwe azụmahịa na-ezere AI ma ọ bụ na-anwale ya n'enweghị atụmatụ wee kwụsị. Ndị na-amụ ihe chọrọ ụzọ dị mfe, nke a na-emegharị, iji họrọ ọrụ kwesịrị ekwesị, tụọ uru na ihe egwu, nweta nkwado site n'akwụkwọ ikpe azụmahịa dị mkpụmkpụ, ma gosi nsonaazụ site n'obere nnwale, ka AI chekwaa ezi oge n'etinyeghị ozi ma ọ bụ ntụkwasị obi ndị ahịa n'ihe egwu.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu azụmahịa dị mfe; ọ dịghị mkpa ka ị mara teknụzụ",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa; spreadsheet na-enyere aka maka nyocha oge",
      "Oge: nkuzi nkeji 5, gbakwunyere nnwale izu abụọ ma ọ bụ nke omume otu ụbọchị",
      "Nzuzo: etinyela ozi nzuzo ndị ahịa, ndị ọrụ ma ọ bụ ndị na-enye onyinye, okwuntughe ma ọ bụ nọmba ụlọ akụ na ngwa AI",
      "Ahapụla AI ka o mee mkpebi iwu, ahụike ma ọ bụ ụtụ isi; mmadụ na-elele ma na-ekpebi"
    ],
    prerequisites: "Ọ dịghị. Ndị ọhụrụ na ngwa enyemaka AI nwere ike ibu ụzọ were ihe ọmụmụ mmalite AI."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ndepụta ọrụ azụmahịa", action: "ịmata ndị ngwa AI nke oge a na-eme nke ọma na ndị chọrọ ka mmadụ lelee ma ọ bụ kpebie", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi" },
    { id: "O2", condition: "Maka ezi nzukọ ma ọ bụ nke omume", action: "idepụta ọrụ a na-emegharị n'izu nkịtị ma gbakọọ awa ọ bụla na-ewe", standard: "ma tụgharịa okirikiri na ọrụ ise kacha ewe awa" },
    { id: "O3", condition: "Mgbe e nyere gị ọrụ AI kacha dabara gị", action: "ịtụ nke ọ bụla maka uru, mgbalị na ihe egwu ma họrọ otu ị ga-ebu ụzọ mee", standard: "ma deturu ozi nzuzo ọ bụla dị na ya" },
    { id: "O4", condition: "Maka ọrụ ị họrọ", action: "ide akwụkwọ ikpe azụmahịa AI peeji otu", standard: "nwere akụkụ isii niile na ezi nọmba site na nyocha oge gị" },
    { id: "O5", condition: "Maka obere nnwale AI", action: "ịhazi ma mee nnwale ahụ nwere nọmba mbido (baseline), iwu doro anya na ndetu kwa ụbọchị", standard: "na-edekọ otu nọmba ahụ tupu na mgbe e mechara" },
    { id: "O6", condition: "Mgbe e nyere gị nọmba mbido na nke nnwale gị", action: "itụnyere nsonaazụ ma tụọ aro ka a gbasaa, gbanwee ma ọ bụ kwụsị", standard: "na-agụnye oge e ji dozie mperi AI, n'ahịrịokwu atọ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịchọta ohere AI kwesịrị ekwesị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe AI na-eme nke ọma n'azụmahịa taa",
          minutes: 5,
          goal: "Kpọọ aha ụdị ọrụ azụmahịa ngwa AI nke oge a na-eme nke ọma na nke ọ na-adịghị eme nke ọma.",
          text: [
            "Ọtụtụ AI azụmahịa taa bụ generative AI: ngwa dị ka ChatGPT, Microsoft Copilot na Google Gemini na-ede ihe, na-achịkọta ihe, na-ahazi ihe ma na-aza ajụjụ n'okwu nkịtị. AI ndị ọzọ dị n'ime mmemme ị nwere ike na-eji ugbu a, dị ka nzacha email, amụma ire ahịa na ịdọ aka na ntị maka wayo.",
            "AI siri ike n'ide ihe mbụ (email, ozi, atụmatụ arịrịọ), nchịkọta (nzukọ, akwụkwọ ogologo, nyocha ndị ahịa), ịhazi na ịkpọ aha (ajụjụ ndị ahịa, risit), ịtụ aro echiche, na ịza ajụjụ a na-ajụkarị site n'ozi nke gị.",
            "AI adịghị ike n'eziokwu kpọmkwem e nyeghị ya, mkpebi ikpeazụ gbasara mmadụ ma ọ bụ ego, ihe ọ bụla chọrọ ikike ọrụ (ndụmọdụ iwu, ahụike, ụtụ isi), na ọnọdụ ebe mperi dị oke ọnụ ma sie ike ịhụ. N'ọnọdụ ndị ahụ, mmadụ ga-elele ma ọ bụ kpebie."
          ],
          words: [["Generative AI", "AI na-emepụta ederede, foto ma ọ bụ ihe ndị ọzọ site n'arịrịọ."], ["Ojiji (use case)", "otu ọrụ kpọmkwem e ji ngwa eme."]],
          slides: [
            { title: "AI siri ike na", bullets: ["Ihe mbụ (draft) na nchịkọta", "Ịhazi na ịkpọ aha", "Ịtụ aro echiche na ajụjụ a na-ajụkarị"] },
            { title: "AI adịghị ike na", bullets: ["Eziokwu kpọmkwem e nyeghị ya", "Mkpebi ikpeazụ gbasara mmadụ ma ọ bụ ego", "Ndụmọdụ chọrọ ikike: iwu, ahụike, ụtụ isi"] },
            { title: "Iwu nkịtị", bullets: ["AI na-ede ihe mbụ; mmadụ na-ekpebi", "Ka mperi dị oke ọnụ, ka ilele ga-abawanye"] }
          ],
          tryIt: "Depụta ọrụ ise n'azụmahịa ma ọ bụ nzukọ ị maara. Kaa nke ọ bụla akara \"AI siri ike\", \"AI ya na ilele\" ma ọ bụ \"hapụ ya n'aka mmadụ\", ya na otu ihe kpatara ya.",
          youCanNow: "ịmata ọrụ azụmahịa AI na-eme nke ọma na ndị chọrọ mmadụ.",
          quickCheck: [
            { objective: "O1", q: "Kedu ọrụ AI nke oge a adịghị ike na ya?", options: ["Ịchịkọta nzukọ ogologo", "Ide ozi mbụ maka soshal midia", "Inye ndụmọdụ ụtụ isi ikpeazụ maka azụmahịa gị", "Ịhazi ajụjụ ndị ahịa site n'isiokwu"], answer: 2, why: "Ihe ọ bụla chọrọ ikike ọrụ, dị ka ndụmọdụ ụtụ isi, chọrọ mmadụ ma ọ bụ ọkachamara." },
            { objective: "O1", q: "Ụlọ ahịa gị na-enweta ọtụtụ narị nyocha n'ịntanetị. Kedu otu AI ga-ebu ụzọ nyere aka?", options: ["Ịchịkọta ha iji chọta mkpesa a na-ahụkarị", "Ịzaghachi ndị ahịa iwe na-ewe n'enweghị onye na-elele", "Ikpebi ndị ọrụ a ga-achụ site na nyocha", "Ihichapụ nyocha ọjọọ"], answer: 0, why: "Ịchịkọta ọtụtụ nyocha bụ ike AI, mmadụ ka na-ekpebi ihe a ga-eme." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịhụ ebe oge na-aga",
          minutes: 5,
          goal: "Depụta ọrụ a na-emegharị na nzukọ ma hụ ọrụ kacha dabara AI.",
          text: [
            "Ohere AI kacha mma na-ezo n'ọrụ a na-emegharị, nke na-ewe oge. Gaa n'izu nkịtị ma depụta ọrụ site na ngalaba ma ọ bụ ọrụ onye ọ bụla: ire ahịa, ilekọta ndị ahịa, mgbasa ozi, ọrụ ọfịs, ego, na ọrụ kwa ụbọchị.",
            "Maka ọrụ ọ bụla, chepụta ugboro ole ọ na-eme na oge ole ọ na-ewe. Ọrụ a na-eme ugboro 20 n'izu, nke na-ewe nkeji 10, karịrị awa atọ n'izu. Ebe ahụ ka AI na-akwụ ụgwọ ya.",
            "Chọọ ihe na-emegharị: ịza otu ajụjụ ahụ, ide email yiri ibe ha, idegharị ozi site n'otu ebe gaa n'ebe ọzọ, ịchịkọta ndetu, ịhazi oge ọrụ. Ndị a bụ ọrụ a ma ama dabara AI ma ọ bụ akpaaka (automation)."
          ],
          steps: ["Depụta ọrụ a na-eme n'izu nkịtị, site n'ọrụ onye ọ bụla.", "Chepụta ugboro ole na oge ole maka nke ọ bụla.", "Mụbaa ha ka ị nweta awa n'izu.", "Tụgharịa okirikiri na ọrụ ise kacha ewe awa.", "Kaa akara na ndị n'ime ha dabara ike AI."],
          words: [["Ọrụ a na-emegharị", "ọrụ a na-eme n'otu ụzọ ahụ ugboro ugboro."], ["Nyocha oge (time audit)", "ndepụta ọrụ na oge ole nke ọ bụla na-ewe."]],
          slides: [
            { title: "Chọọ ọrụ a na-emegharị", bullets: ["Otu ajụjụ ahụ, email yiri ibe ha", "Idegharị ozi site n'otu ebe gaa n'ebe ọzọ", "Nchịkọta na usoro oge"] },
            { title: "Gbakọọ ya", bullets: ["Ugboro ole x oge ole = awa n'izu", "Ugboro 20 x nkeji 10 = karịrị awa 3"] },
            { title: "Họrọ ndị dabara", bullets: ["Ise kacha ewe awa", "Jikọọ ha na ike AI"] }
          ],
          tryIt: "Mee nyocha oge maka otu ọrụ n'ezi nzukọ ma ọ bụ nke omume. Depụta opekata mpe ọrụ asatọ na awa ha n'izu, ma tụgharịa okirikiri na atọ kacha dabara AI.",
          youCanNow: "ịhụ ọrụ a na-emegharị na nzukọ na ịchọta ndị kacha dabara AI.",
          quickCheck: [
            { objective: "O2", q: "A na-eme otu ọrụ ugboro 12 n'izu, ọ na-ewe nkeji 15 oge ọ bụla. Awa ole n'izu ka nke ahụ bụ?", options: ["Awa 1", "Awa 2", "Awa 12", "Awa 3"], answer: 3, why: "Ugboro 12 x nkeji 15 bụ nkeji 180, nke bụ awa 3." },
            { objective: "O2", q: "Ị na-ahụ ebe oge na-aga na nzukọ nonprofit. Kedu ọrụ ị ga-ebu ụzọ lee maka AI?", options: ["Ntuli aka ndị isi otu ugboro n'afọ", "Ide otu email ekele ahụ nye ndị na-enye onyinye kwa izu", "Ịhọrọ onye isi ọhụrụ", "Ịbịanye aka na nkwekọrịta"], answer: 1, why: "Ọrụ ide ihe a na-emegharị, nke yiri ibe ya, bụ ebe AI kacha akwụ ụgwọ ya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịtụ ohere maka uru na ihe egwu",
          minutes: 5,
          goal: "Tụọ echiche AI maka uru, mgbalị na ihe egwu ma họrọ otu ị ga-eme.",
          text: [
            "Ọ bụghị echiche AI ọ bụla kwesịrị ka e bu ụzọ mee ya. Nye nke ọ bụla akara site na 1 ruo 5 n'ihe atọ. Uru: oge, ego ma ọ bụ obi ụtọ ndị ahịa ole ọ na-agbakwunye. Mgbalị: otu o siri ike ịhazi na ịmụta ya. Ihe egwu: ihe ga-eme ma AI mehie, na ma ozi nzuzo dị na ya.",
            "Họrọ mmeri ngwa ngwa: uru dị elu, mgbalị dị ala, ihe egwu dị ala. Ide azịza mbụ maka email ndị ahịa a na-ahụkarị, ebe mmadụ na-elele ha, bụ mmeri ngwa ngwa a ma ama. Iji AI kpebie onye a ga-ewe n'ọrụ ma ọ bụ onye a ga-enye enyemaka nwere ihe egwu dị elu, ọ bụghịkwa ọrụ mbụ.",
            "Lelee ozi na nzuzo n'oge. Ọ bụrụ na ọrụ ahụ na-eji ozi ndị ahịa, ndị ọrụ, ndị na-enye onyinye ma ọ bụ ozi ahụike, chọpụta ihe ngwa AI gị na-eme na ozi ahụ na ma ọ dị mkpa iji ụdị azụmahịa nke nwere nchedo nzuzo siri ike karị."
          ],
          steps: ["Depụta ọrụ atọ kacha dabara gị.", "Nye nke ọ bụla akara 1-5 maka uru, mgbalị na ihe egwu.", "Họrọ uru dị elu, mgbalị dị ala, ihe egwu dị ala.", "Dee ozi nzuzo ọ bụla dị na ya.", "Họrọ otu ị ga-ebu ụzọ mee."],
          words: [["Mmeri ngwa ngwa (quick win)", "ọrụ na-enye uru doro anya ngwa ngwa, n'enweghị oke mgbalị na ihe egwu."], ["Ihe egwu (risk)", "ohere na ọnụ ahịa nke ihe ịga njọ."]],
          slides: [
            { title: "Nye akara 1 ruo 5", bullets: ["Uru: oge, ego, obi ụtọ ndị ahịa", "Mgbalị: ịhazi na ịmụta", "Ihe egwu: ọnụ mperi, ozi nzuzo"] },
            { title: "Malite na mmeri ngwa ngwa", bullets: ["Uru dị elu, mgbalị dị ala, ihe egwu dị ala", "Ọmụmaatụ: AI na-ede azịza mbụ, mmadụ na-elele"] },
            { title: "Ọ bụghị ọrụ mbụ", bullets: ["Mkpebi iwe mmadụ n'ọrụ ma ọ bụ inye enyemaka", "Ihe ọ bụla gbasara mkpebi ahụike ma ọ bụ ego"] }
          ],
          tryIt: "Tụọ ọrụ AI atọ kacha dabara gị maka uru, mgbalị na ihe egwu n'obere tebụl. Họrọ otu mmeri ngwa ngwa ma dee ahịrịokwu abụọ na-ekwu ihe mere.",
          youCanNow: "ịtụ echiche AI maka uru, mgbalị na ihe egwu na ịhọrọ ọrụ mbụ amamihe.",
          quickCheck: [
            { objective: "O3", q: "Mgbe ị na-atụ echiche AI, gịnị ka \"mgbalị\" pụtara?", options: ["Otu o siri ike ịhazi na ịmụta ya", "Ego ole ọ na-ewebata", "Ndị ahịa ole hụrụ ya n'anya", "Otu ozi ahụ si bụrụ nzuzo"], answer: 0, why: "Mgbalị bụ otu echiche ahụ siri ike ịhazi na ịmụta." },
            { objective: "O3", q: "Echiche abụọ nwere otu uru. Otu na-eji akwụkwọ ahụike, nke ọzọ na-eji eziokwu ngwaahịa ọha. Kedu nke ị ga-ebu ụzọ họrọ?", options: ["Nke akwụkwọ ahụike, n'ihi na ọ siri ike karị", "Ọ dịghị nke ọ bụla; AI enweghị nchekwa mgbe ọ bụla", "Nke eziokwu ngwaahịa, n'ihi na ihe egwu ya dị ala", "Ha abụọ n'otu oge"], answer: 2, why: "Mgbe uru ha hà, họrọ echiche nwere ihe egwu dị ala nke na-adịghị eji ozi nzuzo." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịchọta ohere AI kwesịrị ekwesị",
        questions: [
          { objective: "O1", q: "Kedu ọrụ generative AI nke oge a kacha sie ike na ya?", options: ["Ikpebi onye a ga-ewe n'ọrụ", "Inye ndụmọdụ ụtụ isi", "Ide azịza mbụ maka email onye ahịa a na-ahụkarị", "Ịbịanye aka na nkwekọrịta"], answer: 2, why: "Ihe mbụ bụ isi ike ya; mkpebi na ndụmọdụ chọrọ ikike chọrọ mmadụ." },
          { objective: "O2", q: "A na-eme otu ọrụ ugboro 30 n'izu, ọ na-ewe nkeji 6. Awa ole n'izu ka nke ahụ bụ?", options: ["Awa 3", "Awa 30", "Awa 6", "Ọkara awa"], answer: 0, why: "30 x nkeji 6 = nkeji 180 = awa 3." },
          { objective: "O3", q: "Gịnị bụ mmeri ngwa ngwa?", options: ["Ihe egwu dị elu, mgbalị dị elu", "Ọrụ ọ bụla nwere AI n'aha ya", "Ngwa kacha dị oke ọnụ", "Uru dị elu, mgbalị dị ala, ihe egwu dị ala"], answer: 3, why: "Mmeri ngwa ngwa na-egosi uru ngwa ngwa n'enweghị oke ihe egwu." },
          { objective: "O3", q: "Gịnị mere iji AI nabata ma ọ bụ jụ ndị na-arịọ ọrụ ji abụ ọrụ mbụ na-adịghị mma?", options: ["Ọ dị mfe nke ukwuu", "O nwere ihe egwu dị elu: mperi na-emerụ mmadụ ahụ ma nwee ike ịbụ ajọ mkpebi na-ezighi ezi", "AI enweghị ike ịgụ ihe", "Ọ naghị echekwa oge"], answer: 1, why: "Mkpebi gbasara mmadụ nwere ihe egwu dị elu, chọọkwa njikwa mmadụ nke ọma." },
          { objective: "O3", q: "Otu ọrụ na-eji ozi ndị na-enye onyinye ma ọ bụ ndị ahịa. Gịnị ka ị ga-elele n'oge?", options: ["Agba ngwa ahụ", "Ihe ngwa AI ahụ na-eme na ozi ahụ", "Ọ dịghị ihe", "Emoji ole ọ na-eji"], answer: 1, why: "A ga-elele nzuzo tupu ozi nzuzo abanye na ngwa." }
        ]
      }
    },
    {
      name: "Isi 2: Ịkọwa ikpe ahụ na igosi ya",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ide akwụkwọ ikpe azụmahịa AI peeji otu",
          minutes: 5,
          goal: "Dee akwụkwọ ikpe azụmahịa peeji otu nke onye isi, ndị isi otu ma ọ bụ onye mmekọ ga-ekwe ya.",
          text: [
            "Akwụkwọ ikpe azụmahịa (business case) na-akọwa ihe mere ọrụ ji kwesị ime. Mee ka ọ bụrụ peeji otu ka ndị nwere ọrụ ukwuu gụọ ya.",
            "Tinye akụkụ isii: nsogbu ahụ (n'awa ma ọ bụ dọla), ngwọta AI na ngwa a tụrụ aro, uru a tụrụ anya, ọnụ ahịa (ego ndenye aha, oge ọzụzụ), ihe egwu na otu ị ga-esi jikwaa ha, na otu ị ga-esi tụọ ịga nke ọma.",
            "Jiri ezi nọmba site na nyocha oge gị. \"Ndị ọrụ na-eji awa 4 n'izu aza otu ajụjụ 10 ahụ. Ọba azịza AI dere, nke ndị ọrụ lelere, nwere ike ibelata ya ruo awa 1.5, na-echekwa ihe dị ka awa 10 kwa ọnwa.\" AI nwere ike inyere gị aka ide peeji ahụ; gị na-enye eziokwu."
          ],
          steps: ["Nsogbu: ihe ọ na-efu ugbu a n'oge ma ọ bụ ego.", "Ngwọta: ngwa AI ahụ na otu a ga-esi jiri ya.", "Uru: ego ma ọ bụ oge a tụrụ anya ịchekwa, ma ọ bụ ihe ga-aka mma.", "Ọnụ ahịa: ego na oge ọzụzụ.", "Ihe egwu na njikwa: onye na-elele ọrụ AI.", "Ihe ntụle ịga nke ọma: nọmba ị ga-esochi."],
          words: [["Akwụkwọ ikpe azụmahịa (business case)", "obere akwụkwọ na-akọwa ihe mere ọrụ ji kwesị ime."], ["Njikwa (control)", "nzọụkwụ na-ebelata ihe egwu, dị ka mmadụ na-elele ihe AI mepụtara."]],
          slides: [
            { title: "Mee ka ọ bụrụ peeji otu", bullets: ["Ndị nwere ọrụ ukwuu na-agụ akwụkwọ dị mkpụmkpụ", "Jiri ezi nọmba"] },
            { title: "Akụkụ isii", bullets: ["Nsogbu, ngwọta, uru", "Ọnụ ahịa, ihe egwu na njikwa", "Ihe ntụle ịga nke ọma"] },
            { title: "AI na-ede, gị na-enye eziokwu", bullets: ["Tinye nọmba nyocha oge gị", "Lelee nọmba ọ bụla n'ihe ahụ e dere"] }
          ],
          tryIt: "Dee akwụkwọ ikpe azụmahịa peeji otu maka mmeri ngwa ngwa ị họrọ, nwere akụkụ isii niile. Ị nwere ike ịrịọ AI ka o mee ka okwu ya dị mma, mana lelee nọmba ọ bụla.",
          youCanNow: "ide obere akwụkwọ ikpe azụmahịa dabere na nọmba maka ọrụ AI.",
          quickCheck: [
            { objective: "O4", q: "Kedu akụkụ akwụkwọ ikpe azụmahịa na-ekwu onye na-elele ọrụ AI?", options: ["Nsogbu ahụ", "Ihe egwu na njikwa", "Uru ahụ", "Ọnụ ahịa"], answer: 1, why: "Ihe egwu na njikwa na-ekwu ihe nwere ike ịga njọ na onye na-elele ihe AI mepụtara." },
            { objective: "O4", q: "Onye isi gị jụrụ ihe mere ọrụ AI ahụ ji kwesị. Gịnị na-eme ka ikpe gị sie ike karịa?", options: ["Akụkọ ogologo na-enweghị nọmba", "Ikwu na AI bụ ọdịnihu", "Ndepụta ngwa AI ọ bụla ị hụrụ", "Ezi nọmba site na nyocha oge gị na-egosi awa a chekwara"], answer: 3, why: "Ezi nọmba site na nyocha oge nke gị na-egosi uru a tụrụ anya nke ọma." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ime obere nnwale (pilot)",
          minutes: 5,
          goal: "Hazie ma mee nnwale AI izu abụọ nwere iwu doro anya na ntụle tupu na mgbe e mechara.",
          text: [
            "Nnwale (pilot) bụ obere ule nwere oge a kara aka. Ọ na-eme ka ị mụta ihe n'ọnụ ala tupu ị mefuo ego karịa. Izu abụọ ya na mmadụ otu ma ọ bụ abụọ na-ezukarị.",
            "Tụọ tupu ị malite. Soro nọmba ugbu a ụbọchị ole na ole: oge e ji, ọnụ ọgụgụ ọrụ, mperi ma ọ bụ mkpesa ndị ahịa. Wee mee nnwale ahụ ma soro otu nọmba ahụ.",
            "Debe iwu doro anya: ọrụ ndị na-eji AI, onye na-elele ihe ọ mepụtara, ozi a na-agaghị etinye na ngwa ahụ mgbe ọ bụla (ozi nzuzo ndị ahịa, ndị ọrụ ma ọ bụ ndị na-enye onyinye, okwuntughe, nọmba ụlọ akụ), na ihe a ga-eme ma AI mehie."
          ],
          steps: ["Họrọ mmadụ otu ma ọ bụ abụọ na oge izu abụọ.", "Dee nọmba mbido (baseline) ụbọchị ole na ole.", "Dee iwu dị mfe: ọrụ, onye na-elele, ihe a na-agaghị etinye.", "Mee nnwale ahụ ma dee obere ndetu kwa ụbọchị.", "Dee otu nọmba ahụ na njedebe."],
          words: [["Nnwale (pilot)", "obere ule echiche ọhụrụ nwere oge a kara aka."], ["Nọmba mbido (baseline)", "nọmba tupu mgbanwe, nke e ji atụnyere ihe mgbe e mechara."]],
          slides: [
            { title: "Obere, nwere oge a kara aka", bullets: ["Izu abụọ, mmadụ otu ma ọ bụ abụọ", "Mụta n'ọnụ ala tupu ị mefuo karịa"] },
            { title: "Tụọ tupu na mgbe e mechara", bullets: ["Oge e ji, ọrụ e mere", "Mperi ma ọ bụ mkpesa"] },
            { title: "Iwu nnwale", bullets: ["Ọrụ ndị na-eji AI na onye na-elele", "Ozi nzuzo adịghị na ngwa ahụ", "Ihe a ga-eme ma AI mehie"] }
          ],
          tryIt: "Dee atụmatụ nnwale maka mmeri ngwa ngwa gị: ndị mmadụ, ụbọchị, nọmba mbido, iwu na ụdị ndetu kwa ụbọchị. Ọ bụrụ na ị nwere ike, mee nke omume otu ụbọchị ma dee nọmba ya.",
          youCanNow: "ịhazi na ime obere nnwale AI nwere iwu na nọmba tupu na mgbe e mechara.",
          quickCheck: [
            { objective: "O5", q: "Ogologo oge ole ka obere nnwale AI na-ewekarị n'ihe ọmụmụ a?", options: ["Otu afọ", "Ọnwa isii", "Izu abụọ", "Otu awa"], answer: 2, why: "Izu abụọ ya na mmadụ otu ma ọ bụ abụọ na-ezukarị iji mụta ihe n'ọnụ ala." },
            { objective: "O5", q: "Ị na-achọ ịmalite nnwale echi. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Dee nọmba mbido ụbọchị ole na ole", "Zụta atụmatụ kacha dị oke ọnụ", "Nye ngwa ahụ ozi onye ahịa ọ bụla", "Gwa ndị ọrụ ka ha kwụsị ilele ihe AI mepụtara"], answer: 0, why: "Nọmba mbido na-eme ka ị tụnyere tupu na mgbe e mechara." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịtụ nsonaazụ na ikpebi ihe na-esote",
          minutes: 5,
          goal: "Tụnyere nsonaazụ nnwale na nọmba mbido ma tụọ aro ka a gbasaa, gbanwee ma ọ bụ kwụsị.",
          text: [
            "Na njedebe nnwale ahụ, tụnyere. Oge ọ belatara? Ịdị mma ọ kwụsiri ike ma ọ bụ ka mma? Ndị ahịa ma ọ bụ ndị ọrụ ọ hụrụ ya? Nọmba dị mkpa, mana jụọkwa ndị jiri ya ihe nyere aka na ihe gbochiri ha.",
            "Kpachara anya maka ọnụ ahịa zoro ezo: oge e ji dozie mperi AI, mgbagwoju anya ndị ọrụ, ma ọ bụ ndị ahịa na-enweghị mmasị na mgbanwe ahụ. Ngwa na-echekwa awa 3 mana na-ebute awa 2 nke ndozi na-echekwa naanị 1.",
            "Mee ndụmọdụ doro anya. Gbasaa ya ma ọ rụọ ọrụ. Gbanwee ya ma ọ rụọ ọrụ ọkara. Kwụsị ya ma ọ rụghị ọrụ, ma kwuo ihe ị mụtara. Ịkwụsị nnwale abụghị ọdịda; o chebere gị pụọ na mperi ka ukwuu."
          ],
          steps: ["Tinye nọmba mbido na nke nnwale n'akụkụ ibe ha.", "Wepụ oge e ji dozie mperi AI.", "Jụọ ndị jiri ya ajụjụ abụọ: gịnị nyere aka, gịnị gbochiri.", "Tụọ aro ka a gbasaa, gbanwee ma ọ bụ kwụsị, n'ahịrịokwu atọ."],
          words: [["Ọnụ ahịa zoro ezo (hidden cost)", "ọnụ ahịa dị mfe ichefu, dị ka oge e ji dozie mperi."], ["Ndụmọdụ (recommendation)", "aro gị maka ihe a ga-eme ọzọ, ya na ihe kpatara ya."]],
          slides: [
            { title: "Tụnyere n'eziokwu", bullets: ["Oge, ịdị mma, otu ndị ahịa si were ya", "Jụọ ndị jiri ya"] },
            { title: "Gụọ ọnụ ahịa zoro ezo", bullets: ["Oge e ji dozie mperi AI", "Mgbagwoju anya ma ọ bụ ndị ahịa na-enweghị obi ụtọ"] },
            { title: "Kpebie", bullets: ["Gbasaa, gbanwee ma ọ bụ kwụsị", "Ịkwụsị nnwale bụ ihe mmụta, ọ bụghị ọdịda"] }
          ],
          tryIt: "Ọrụ ikpeazụ: tinye nọmba gị tupu na mgbe e mechara na tebụl (ezi nọmba ma ọ bụ site n'ụbọchị omume gị), wepụ ọnụ ahịa zoro ezo, ma dee ndụmọdụ ahịrịokwu atọ ga-eso akwụkwọ ikpe azụmahịa peeji otu gị.",
          youCanNow: "ịchọta, ịkọwa ihe kpatara, ịnwale na ikpe ikpe ọrụ AI n'azụmahịa ma ọ bụ nzukọ.",
          quickCheck: [
            { objective: "O6", q: "Gịnị mere ị ga-eji jụọ ndị jiri ngwa AI ihe gbochiri ha?", options: ["Iji ta ha ụta", "N'ihi na nọmba anaghị aba uru mgbe ọ bụla", "Iji mee ka nnwale ahụ dị ogologo", "Iji chọta nsogbu nọmba nwere ike ọ gaghị egosi"], answer: 3, why: "Ndị jiri ya nwere ike ịkpọ aha ọnụ ahịa zoro ezo na nsogbu nọmba na-agaghị egosi." },
            { objective: "O6", q: "Nnwale ahụ chekwara oge mana ndị ahịa mere mkpesa maka azịza ọhụrụ ahụ. Gịnị ka ị ga-atụ aro?", options: ["Gbasaa ya ruo onye ọ bụla ozugbo", "Gbanwee ya, dị ka itinye nzọụkwụ ndị ọrụ ga-elele, ma nwalee ọzọ", "Zoo mkpesa ndị ahụ", "Kwụsị ịtụ ihe"], answer: 1, why: "Ọ bụrụ na ọ rụrụ ọrụ ọkara, gbanwee ya ma nwalee ọzọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịkọwa ikpe ahụ na igosi ya",
        questions: [
          { objective: "O4", q: "Kedu nke kwesịrị ịdị n'akwụkwọ ikpe azụmahịa AI?", options: ["Okwuntughe ndị ọrụ", "Ndepụta ngwa AI ọ bụla e mepụtara", "Nọmba ekwentị ndị ahịa", "Ihe egwu na onye na-elele ọrụ AI"], answer: 3, why: "Ihe egwu na njikwa bụ otu n'ime akụkụ isii ahụ." },
          { objective: "O5", q: "Gịnị bụ nọmba mbido (baseline)?", options: ["Nọmba tupu mgbanwe, e ji atụnyere ihe", "Naanị okwu egwuregwu", "Ọnụ ahịa AI", "Akụkọ ikpeazụ"], answer: 0, why: "Ị na-atụnyere nsonaazụ nnwale na nọmba mbido." },
          { objective: "O5", q: "Kedu nke bụ ezigbo iwu nnwale?", options: ["Hapụ AI ka o zipu ihe niile n'enweghị onye na-elele", "Ahapụ ịtụ ihe", "Etinyela ozi nzuzo ndị ahịa na ngwa AI mgbe ọ bụla", "Bu ụzọ mee ya afọ atọ"], answer: 2, why: "Ịhapụ ozi nzuzo n'èzí bụ isi iwu." },
          { objective: "O6", q: "AI chekwara awa 3 mana ndị ọrụ ji awa 2 dozie mperi ya. Gịnị bụ ezi ego oge a chekwara?", options: ["Awa 5", "Awa 3", "Ọ dịghị nke ọ bụla gụrụ", "Awa 1"], answer: 3, why: "A na-ewepụ ọnụ ahịa zoro ezo n'ihe a chekwara." },
          { objective: "O6", q: "Nnwale ahụ echekwaghị oge. Gịnị ka ị ga-atụ aro?", options: ["Gbasaa ya ruo ụlọ ọrụ niile", "Zoo nsonaazụ ya", "Kwụsị ma ọ bụ gbanwee ya, ma dee ihe ị mụtara", "Zụta atụmatụ dị oke ọnụ karị n'anwaleghị ya"], answer: 2, why: "Nsonaazụ eziokwu na-eduzi nzọụkwụ na-esote." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI n'Azụmahịa: Atụmatụ na Ojiji",
    questions: [
      { objective: "O1", q: "Generative AI bụ AI nke:", options: ["Na-agbakọ naanị mgbakọ", "Na-emepụta ederede, foto ma ọ bụ ihe ndị ọzọ site n'arịrịọ", "Na-anọchi ndị ọrụ niile", "Na-arụ ọrụ naanị n'enweghị ịntanetị"], answer: 1, why: "Ọ na-emepụta ihe site n'arịrịọ." },
      { objective: "O1", q: "Kedu nke bụ ezigbo ojiji AI n'obere azụmahịa?", options: ["Ịchịkọta nyocha ndị ahịa iji chọta mkpesa a na-ahụkarị", "Ikpebi ụgwọ ọnwa ndị ọrụ n'onwe ya", "Inye ndị ahịa ndụmọdụ iwu", "Ịbịanye aka na cheque"], answer: 0, why: "Ịchịkọta bụ isi ike AI." },
      { objective: "O1", q: "Onye kwesịrị ime mkpebi ikpeazụ gbasara mmadụ ma ọ bụ ego?", options: ["AI", "Ọ dịghị onye", "Mmadụ", "Onye na-ere mmemme ahụ"], answer: 2, why: "AI na-ede ihe mbụ; mmadụ na-ekpebi." },
      { objective: "O2", q: "Nyocha oge na-edepụta:", options: ["Ọrụ na oge ole nke ọ bụla na-ewe", "Ụbọchị ọmụmụ ndị ọrụ", "Naanị ọnụ ahịa mmemme", "Ndị na-eso gị na soshal midia"], answer: 0, why: "Ọ na-egosi ebe oge na-aga." },
      { objective: "O2", q: "Kedu ọrụ bụ ọrụ a ma ama dabara AI?", options: ["Nleba anya ụlọ otu ugboro", "Ịkwe onye ahịa ọhụrụ aka", "Ịbịanye aka na nkwekọrịta mgbazinye ụlọ", "Ide email yiri ibe ha ugboro ugboro"], answer: 3, why: "Ọrụ ide ihe a na-emegharị dabara AI." },
      { objective: "O2", q: "Ọrụ 15 n'izu, nkeji 20 nke ọ bụla, ruru:", options: ["Awa 5", "Awa 15", "Awa 20", "Nkeji 35"], answer: 0, why: "15 x 20 = nkeji 300 = awa 5." },
      { objective: "O3", q: "Mgbe ị na-atụ echiche AI, \"ihe egwu\" pụtara:", options: ["Ọnụ ahịa ngwa ahụ", "Ohere na ọnụ ahịa nke ihe ịga njọ", "Otu ọ na-atọ ụtọ", "Mmadụ ole hụrụ ya n'anya"], answer: 1, why: "Ihe egwu gbasara mperi na ọnụ ahịa ha." },
      { objective: "O3", q: "Kedu nke bụ ọrụ AI mbụ kacha mma?", options: ["AI na-ekpebi onye na-enweta ọrụ enyemaka", "AI na-ahọrọ ndị ọrụ a ga-achụ", "AI na-enye ndụmọdụ ahụike", "AI na-ede azịza mbụ maka email a na-ahụkarị, mmadụ na-elele"], answer: 3, why: "O nwere uru dị elu, mgbalị dị ala na ihe egwu dị ala." },
      { objective: "O3", q: "Gịnị mere ị ga-eji lelee ihe ngwa AI na-eme na ozi?", options: ["A ga-echebe ozi nzuzo ndị ahịa ma ọ bụ ndị na-enye onyinye", "Ọ na-agbanwe ụdị mkpụrụ edemede", "Ọ dịghị mkpa", "Naanị maka nnukwu ụlọ ọrụ"], answer: 0, why: "Nzuzo dị mkpa maka nzukọ ọ bụla." },
      { objective: "O4", q: "Akwụkwọ ikpe azụmahịa kwesịrị ịbụ:", options: ["Peeji iri ise", "Nke e dere n'enweghị nọmba", "Mkpụmkpụ, ihe dị ka peeji otu, nwere ezi nọmba", "Ihe nzuzo nye ndị na-eme mkpebi"], answer: 2, why: "Ndị nwere ọrụ ukwuu na-agụ akwụkwọ dị mkpụmkpụ, doo anya." },
      { objective: "O4", q: "Kedu nke bụ \"njikwa\"?", options: ["Ịzụta ngwa AI ndị ọzọ", "Ịgbanyụ kọmputa", "Ileghara mperi anya", "Mmadụ na-elele ihe AI mepụtara tupu e zipu ya"], answer: 3, why: "Njikwa na-ebelata ihe egwu." },
      { objective: "O4", q: "AI dere akwụkwọ ikpe azụmahịa gị. Ọrụ gị bụ:", options: ["Iziga ya n'agụghị ya", "Iwepụ nọmba niile", "Ilele nọmba na eziokwu ọ bụla", "Itinye ego a chekwara adịgboroja"], answer: 2, why: "Gị na-enye ma na-elele eziokwu." },
      { objective: "O5", q: "Nnwale (pilot) bụ:", options: ["Iwebata ya n'ụlọ ọrụ niile", "Obere ule nwere oge a kara aka", "Ụdị ihe nlereanya AI", "Nkwekọrịta na-adịgide adịgide"], answer: 1, why: "Nnwale na-eme ka ị mụta ihe n'ọnụ ala." },
      { objective: "O5", q: "Mgbe ole ka ị ga-edekọ nọmba mbido?", options: ["Tupu nnwale ahụ amalite", "Naanị mgbe ọ gwụrụ", "Ọ dịghị mgbe", "Otu afọ ka e mechara"], answer: 0, why: "Ị chọrọ nọmba tupu iji tụnyere." },
      { objective: "O5", q: "Kedu nke a na-agaghị etinye MGBE Ọ BỤLA na ngwa AI n'oge nnwale?", options: ["Ajụjụ ọmụmaatụ", "Email mbụ nkịtị", "Nọmba ụlọ akụ na okwuntughe ndị ahịa", "Oge mmeghe azụmahịa gị"], answer: 2, why: "Ozi nzuzo na nke ego na-anọ n'èzí." },
      { objective: "O5", q: "Ndetu kwa ụbọchị n'oge nnwale na-enyere gị aka:", options: ["Icheta ihe rụrụ ọrụ na ihe gara njọ", "Ịzo nsogbu", "Ịzere ịtụ ihe", "Ịhapụ nyocha"], answer: 0, why: "Ndetu na-eme ka nyocha ikpeazụ ziri ezi." },
      { objective: "O6", q: "Kedu nke bụ ọnụ ahịa zoro ezo?", options: ["Ọnụ ahịa e depụtara maka ngwa ahụ", "Ụbọchị nnwale ahụ malitere", "Ọnụ ọgụgụ ndị ji ya", "Oge e ji dozie mperi AI"], answer: 3, why: "Ọ dị mfe ichefu ndozi mperi." },
      { objective: "O6", q: "E wezụga nọmba, gịnị ka ị ga-anakọta na njedebe nnwale?", options: ["Okwuntughe ha", "Ihe ndị jiri ya kwuru nyere aka ma ọ bụ gbochiri ha", "Adreesị ụlọ ha", "Ọ dịghị ihe"], answer: 1, why: "Echiche ndị jiri ya na-akọwa nọmba." },
      { objective: "O6", q: "Nnwale rụrụ ọrụ ọkara. Ndụmọdụ amamihe bụ:", options: ["Gbasaa ya ebe niile n'otu oge", "Gbanwee ya ma nwalee ọzọ", "Zoo ya", "Anwalela AI ọzọ"], answer: 1, why: "Ịga nke ọma ọkara pụtara dozie ma nwalee ọzọ." },
      { objective: "O6", q: "Ịkwụsị nnwale na-arụghị ọrụ bụ:", options: ["Ọdịda mgbe niile", "Megidere iwu", "Ihe na-agaghị ekwe omume", "Ihe mmụta bara uru nke zeere mperi ka ukwuu"], answer: 3, why: "Nnwale dị iji chọpụta ihe n'ọnụ ala." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      1,
      2,
      4,
      5,
      7,
      10,
      12,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Ọrụ na ngwa",
        objective: "O3",
        notYet: "Ọrụ ahụ nwere ihe egwu dị elu, dị ka mkpebi iwe mmadụ n'ọrụ, ma ọ bụ a kpọghị aha ngwa ọ bụla.",
        meets: "Ọrụ a na-emegharị nwere ihe egwu dị ala na ngwa AI a kpọrọ aha, ya na ozi nzuzo ọ bụla e deturu.",
        exceeds: "Na-egosi akara uru, mgbalị na ihe egwu mere e ji họrọ ya."
      },
      {
        name: "Akwụkwọ ikpe azụmahịa",
        objective: "O4",
        notYet: "Akụkụ ụfọdụ adịghị, ma ọ bụ nọmba adịghị.",
        meets: "Peeji otu nwere nsogbu, ngwọta, uru, ọnụ ahịa, ihe egwu na njikwa, na ihe ntụle ịga nke ọma.",
        exceeds: "Nọmba ọ bụla si na nyocha oge, ọ dịkwa mfe ilele."
      },
      {
        name: "Atụmatụ oge a ga-echekwa",
        objective: "O2",
        notYet: "Oge a ga-echekwa bụ echiche na-enweghị nyocha oge.",
        meets: "Oge a ga-echekwa dabere n'ugboro ole a na-eme ọrụ ahụ na oge ole ọ na-ewe.",
        exceeds: "Na-atụkwa oge a chọrọ iji lelee ọrụ AI."
      },
      {
        name: "Nnwale na nọmba mbido",
        objective: "O5",
        notYet: "Ọ dịghị nọmba mbido, ma ọ bụ nnwale ahụ enweghị iwu.",
        meets: "E dekọrọ nọmba mbido na nke njedebe, ya na iwu gbasara ọrụ, onye na-elele na ihe a na-agaghị etinye.",
        exceeds: "Ndetu kwa ụbọchị na-egosi ihe rụrụ ọrụ na ihe gara njọ."
      },
      {
        name: "Ndụmọdụ",
        objective: "O6",
        notYet: "Ọ dịghị ndụmọdụ doro anya, ma ọ bụ ọ na-eleghara nọmba anya.",
        meets: "Ahịrịokwu atọ na-atụ aro ka a gbasaa, gbanwee ma ọ bụ kwụsị, dabere na nọmba tupu na mgbe e mechara.",
        exceeds: "Na-ewepụ oge e ji dozie mperi AI ma gụnye ihe ndị jiri ya kwuru."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Nzukọ ndị mere nnwale n'ime ụbọchị 30 (nnyocha nsochi)",
      "Awa n'izu a chekwara n'ọrụ e nwalere, dịka nzukọ ahụ kọrọ",
      "Nzukọ ndị gbasara, gbanwere ma ọ bụ kwụsịrị nnwale ha dabere na nsonaazụ a tụrụ atụ"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị",
      "Ngwa enyemaka AI n'efu (ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini), ma ọ bụ ngwa nzukọ ahụ na-eji ugbu a",
      "Spreadsheet (Google Sheets ma ọ bụ Excel) maka nyocha oge na nọmba nnwale",
      "Ihe dị ka nkeji 60 maka nkuzi na nnwale, gbakwunyere nnwale izu abụọ ma ọ bụ nke omume otu ụbọchị"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee mee otu isi n'otu nnọkọ; wuo nyocha oge ọmụmaatụ n'ihuenyo ndị niile na-ahụ.",
      "Gwa ndị na-amụ ihe ka ha weta ezi ndepụta ọrụ otu izu site na nzukọ nke ha.",
      "Tupu nnwale ọ bụla, lelee iwu ndị ahụ ka ozi nzuzo ndị ahịa, ndị ọrụ ma ọ bụ ndị na-enye onyinye ghara ịbanye na ngwa AI.",
      "Kpọọ ndị na-amụ ihe ka ha gosi otu ahụ akwụkwọ ikpe azụmahịa peeji otu ha maka ndụmọdụ.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
