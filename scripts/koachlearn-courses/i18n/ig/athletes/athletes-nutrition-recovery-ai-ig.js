"use strict";

// Koach Learn course (Igbo translation of athletes/athletes-nutrition-recovery-ai.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.
// General education only: every health lesson sends the student to a coach, athletic trainer, doctor or registered dietitian. No doses, calorie targets or medical advice.

module.exports = {
  id: "athletes-nutrition-recovery-ai-ig",
  lang: "ig",
  translationOf: "athletes-nutrition-recovery-ai",
  category: "Athletes",
  name: "Nri na Ezumike Ahụ site n'iji AI",
  skills: "Ịhazi nri zuru oke gburugburu mmega ahụ, Ịhazi usoro nri na mmiri maka ụbọchị egwuregwu, Iji AI maka ndepụta ihe a ga-azụ na echiche nri, Ịlekọta ụra na omume ezumike ahụ, Ịmara mgbe ị ga-ahụ ọkachamara",
  outcome: "iji ngwa enyemaka AI hazie nri dị mfe ma zuru oke maka otu izu, na usoro ezumike ahụ, gburugburu usoro mmega ahụ gị, wee gosi atụmatụ ahụ onye ọkachamara nri (registered dietitian), onye na-elekọta ahụ ndị egwuregwu (athletic trainer) ma ọ bụ dọkịta ka ha lelee ya.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị egwuregwu na ndị nkuzi (coach) ha chọrọ ịghọta ihe ndị bụ isi gbasara iri nri, ịṅụ mmiri na izu ike nke ọma, na iji AI mee ka ịhazi ihe dị mfe. Ọ bụ agụmakwụkwọ izugbe, ọ bụghị ndụmọdụ ahụike ma ọ bụ ndụmọdụ nri.",
    "Ahụ onye ọ bụla dị iche. Afọ gị, egwuregwu gị, ahụike gị na ebumnuche gị na-agbanwe ihe ị chọrọ. Ọ bụ ya mere atụmatụ ị ga-eme ebe a ji bụrụ ihe mbụ (draft) ị ga-egosi onye ọkachamara nri, onye na-elekọta ahụ ndị egwuregwu ma ọ bụ dọkịta gị.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\". E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Jiri ngwa enyemaka AI dee atụmatụ nri na ezumike ahụ maka otu izu gburugburu ezi usoro mmega ahụ na egwuregwu gị: efere nri zuru oke, usoro nri na mmiri maka ụbọchị egwuregwu, ndepụta ihe a ga-azụ dabara n'ego gị, na usoro ụra. Wepụ ozi nzuzo ọ bụla gbasara ahụike gị, wee gosi atụmatụ ahụ onye ọkachamara nri, onye na-elekọta ahụ ndị egwuregwu ma ọ bụ dọkịta, ma gbanwee ya dịka ihe ha kwuru si dị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị egwuregwu nọ n'ụlọ akwụkwọ sekọndrị, mahadum na otu egwuregwu (club), na ndị nkuzi na-akwado ha, ndị chọrọ iri nri, ịṅụ mmiri na izu ike nke ọma, ma jiri AI mee ka ịhazi ihe dị mfe.",
    startingPoint: "Ha na-eri nri ma na-ehi ụra n'etiti usoro mmega ahụ, klas na egwuregwu jupụtara n'ọrụ, ma na-eji smartphone kwa ụbọchị. Ọtụtụ na-ahapụ nri, na-ekpe nkọ maka nri na mmiri n'ụbọchị egwuregwu, na-ehi ụra ntakịrị, ma amaghị mgbe mgbu ahụ chọrọ ọkachamara.",
    gap: "Nri, mmiri na ụra na-ezughị ezu na-egbochi ndị egwuregwu ime nke ọma, ma na-eme ka ihe egwu mmerụ ahụ na ọrịa okpomọkụ dịkwuo elu. Ndụmọdụ AI ma ọ bụ nke ịntanetị gbasara calorie na supplement (ọgwụ mgbakwunye nri) nwere ike ịdị ize ndụ. Atụmatụ izu dị mfe nke ọkachamara lelere na-enyere ndị egwuregwu aka izu ike ma nọgide na-adị mma.",
    constraints: [
      "Okwu dị mfe, ihe dị ka ọkwa ịgụ akwụkwọ klas 7",
      "Agụmakwụkwọ izugbe naanị, ọ bụghị ndụmọdụ ahụike ma ọ bụ nri; ọnụ ọgụgụ kpọmkwem si n'aka onye ọkachamara nri, onye na-elekọta ahụ ndị egwuregwu ma ọ bụ dọkịta",
      "Ekwentị ma ọ bụ kọmputa nwere ngwa enyemaka AI n'efu; atụmatụ ga-adaba n'ezi ego nri na kichin onye ahụ",
      "Ihe dị ka nkeji 60 n'ozuzu",
      "Etinyela akwụkwọ ahụike, ọgwụ ma ọ bụ ozi nzuzo ahụike n'ime AI; ụdị ahụ na ibu ahụ bụ isiokwu dị nro"
    ],
    prerequisites: "Ọ dịghị"
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji nri ị na-eri ugbu a", action: "ime efere nri zuru oke nwere carbohydrate, protein, na mkpụrụ osisi na akwụkwọ nri", standard: "nke akụkụ atọ ahụ niile dị n'efere ahụ, ma e mere atụmatụ nri karịa maka ụbọchị mmega ahụ siri ike" },
    { id: "O2", condition: "Mgbe e nyere gị oge egwuregwu ma ọ bụ mmega ahụ siri ike ga-amalite", action: "ịhazi usoro nri na mmiri maka ụbọchị egwuregwu site na nri tupu ya ruo nri ezumike mgbe ọ gwụchara", standard: "ya na nri na nri nta ị maara nke ọma, mmiri ụbọchị niile, na nri nta ezumike nwere carbohydrate na protein" },
    { id: "O3", condition: "Site n'iji ngwa enyemaka AI n'efu", action: "ime echiche nri maka otu izu na ndepụta ihe a ga-azụ dabara n'usoro oge gị, ego gị na kichin gị", standard: "ebe a kọwara nri na-arịa gị ọrịa (allergy) n'okwu izugbe, na-arịọghị ọnụ ọgụgụ calorie, atụmatụ ibelata ibu ma ọ bụ ọnụ ọgụgụ supplement" },
    { id: "O4", condition: "Mgbe e nyere gị usoro mmega ahụ na egwuregwu gị", action: "ịhazi usoro ụra nwere oge iteta ụra kwa ụbọchị, oge ịlakpu ụra na oge imechi ihuenyo", standard: "ma dekọọ usoro ahụ maka otu izu" },
    { id: "O5", condition: "Mgbe e nyere gị nkọwa mgbu ahụ nkịtị, ezigbo mgbu ma ọ bụ ịkụ isi", action: "ịkọwa ma ọ bụ mgbu ahụ nkịtị ka ọ bụ ihe ịrịba ama ịkwụsị ma gwa onye na-elekọta ahụ ndị egwuregwu", standard: "na-enweta ọnọdụ ọ bụla nwere mgbu dị nkọ, ọzịza ma ọ bụ ihe ịrịba ama ịkụ isi n'ụzọ ziri ezi" },
    { id: "O6", condition: "Site n'iji usoro oge gị na ngwa enyemaka AI", action: "ime atụmatụ nri na ezumike ahụ maka otu izu ma mee ka onye ọkachamara nri, onye na-elekọta ahụ ndị egwuregwu ma ọ bụ dọkịta lelee ya", standard: "ebe e wepụrụ ozi nzuzo ahụike ma melite atụmatụ ahụ site na ndụmọdụ ha" }
  ],
  chapters: [
    {
      name: "Isi 1: Inye ahụ ike gburugburu mmega ahụ",
      lessons: [
        {
          title: "Efere nri zuru oke nke onye egwuregwu",
          objectives: ["O1"],
          minutes: 5,
          goal: "Mee efere nri zuru oke site na nri ị na-eri ugbu a.",
          text: [
            "Nri na-enye gị ike ime mmega ahụ na ihe ahụ chọrọ iji wughachi onwe ya. Ụzọ dị mfe isi chee maka nri bụ efere nwere akụkụ atọ bụ isi: carbohydrate maka ike (osikapa, pasta, achịcha, nduku, mkpụrụ osisi), protein na-enyere akwara aka idozi onwe ya (akwa, agwa, azụ, ọkụkọ, yogọt), na mkpụrụ osisi na akwụkwọ nri maka vitamin na mineral.",
            "Ndị egwuregwu na-eme mmega ahụ siri ike na-achọkarị ike karịa ndị na-anaghị eme egwuregwu, ụbọchị siri ike na-achọkarịkwa carbohydrate karịa. Otú ị chọrọ ha ka dabere n'ahụ gị, egwuregwu gị na mmega ahụ gị. Ọ bụ ya mere onye ọkachamara nri (registered dietitian) ji bụrụ onye kwesịrị ịgwa gị ọnụ ọgụgụ kpọmkwem.",
            "Ịhapụ nri ma ọ bụ iwepụ ụdị nri niile ka i wee yie otu ụdị nwere ike imebi otu i si egwu egwuregwu na ahụike gị. Ọ bụrụ na nri, ibu ahụ ma ọ bụ ụdị ahụ gị na-enye gị nsogbu, gwa onye ị tụkwasịrị obi, na onye na-elekọta ahụ ndị egwuregwu ma ọ bụ dọkịta gị."
          ],
          words: [["Carbohydrate", "nri dị ka osikapa, achịcha, pasta, nduku na mkpụrụ osisi na-enye ike ọsọ ọsọ."], ["Protein", "nri dị ka akwa, agwa, azụ, anụ na yogọt na-enyere ahụ aka idozi akwara."], ["Registered dietitian (RD ma ọ bụ RDN)", "onye ọkachamara nri na ndozi ahụ nwere akwụkwọ ikike."]],
          slides: [
            { title: "Akụkụ atọ nke efere nri", bullets: ["Carbohydrate: ike", "Protein: ndozi akwara", "Mkpụrụ osisi na akwụkwọ nri: vitamin na mineral"] },
            { title: "Ụbọchị siri ike, nri karịa", bullets: ["Ụbọchị mmega ahụ na-achọkarị ike karịa", "Ọnụ ọgụgụ kpọmkwem: jụọ onye ọkachamara nri"] },
            { title: "Kpachara anya maka", bullets: ["Ịhapụ nri", "Iwepụ ụdị nri niile", "Nsogbu gbasara nri ma ọ bụ ahụ: gwa mmadụ"] }
          ],
          sources: [{ name: "Academy of Nutrition and Dietetics: Find a Nutrition Expert", url: "https://www.eatright.org/find-a-nutrition-expert" }],
          tryIt: "Dee ihe i riri ụnyaahụ n'otu nri. Kaa akara n'carbohydrate, n'protein na n'mkpụrụ osisi ma ọ bụ akwụkwọ nri. Gịnị ka ị nwere ike itinye ka ọ bụrụ efere nri zuru oke?",
          youCanNow: "ime efere nri zuru oke nwere carbohydrate, protein, na mkpụrụ osisi na akwụkwọ nri.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ isi ọrụ protein n'efere nri onye egwuregwu?", options: ["Ike ọsọ ọsọ", "Inyere akwara aka idozi onwe ya", "Itinye naanị vitamin", "Ime ka ahụ gị jụọ oyi"], answer: 1, why: "Protein na-enye ihe akwara chọrọ iji dozie onwe ya." },
            { objective: "O1", q: "Echi bụ ụbọchị mmega ahụ siri ike. Kedu mgbanwe n'efere gị nwere isi?", options: ["Ahapụ nri ụtụtụ", "Iwepụ carbohydrate", "Itinyekwu carbohydrate maka ike", "Iri naanị akwụkwọ nri"], answer: 2, why: "Ụbọchị siri ike na-achọkarị carbohydrate karịa maka ike." }
          ]
        },
        {
          title: "Usoro nri na mmiri n'ụbọchị egwuregwu",
          objectives: ["O2"],
          minutes: 5,
          goal: "Hazie ihe ị ga-eri na ịṅụ, na oge ị ga-eme ya, n'ụbọchị egwuregwu ma ọ bụ mmega ahụ siri ike.",
          text: [
            "Oge dị mkpa. Ọtụtụ ndị egwuregwu na-eri nri nkịtị zuru oke awa ole na ole tupu egwuregwu, na obere nri nta dị mfe mgbe oge mmalite ruru nso, dị ka mkpụrụ osisi ma ọ bụ biskit. Nri ị maara nke ọma kacha mma n'ụbọchị egwuregwu: anwala ihe ọhụrụ.",
            "Mmiri dị mkpa ụbọchị niile, ọ bụghị naanị n'oge egwuregwu. Weta karama mmiri, na-aṅụ mmiri oge niile, ma ṅụkwuo mgbe okpomọkụ dị. Akpịrị ịkpọ nkụ, mamịrị gbara ọchịchịrị, isi ọwụwa na akwara ịdọ (cramp) nwere ike igosi na ị chọrọ mmiri karịa. Ọ bụrụ na isi na-agba gị gburugburu, uche gị agbagwojuola, ma ọ bụ ahụ adịghị gị nke ukwuu n'okpomọkụ, nke ahụ bụ ihe mberede: kwụsị ma gwa onye nkuzi gị ma ọ bụ onye na-elekọta ahụ ndị egwuregwu ozugbo.",
            "Mgbe mmega ahụ siri ike gachara, iri nri ma ọ bụ nri nta nwere carbohydrate na protein na-enyere ahụ aka izu ike. Onye na-elekọta ahụ ndị egwuregwu ma ọ bụ onye ọkachamara nri gị nwere ike ịgwa gị ihe dabara n'ahụ gị na egwuregwu gị."
          ],
          steps: ["Dee oge egwuregwu ma ọ bụ mmega ahụ gị ga-amalite.", "Hazie nri nkịtị zuru oke awa ole na ole tupu ya.", "Hazie obere nri nta ị maara nke ọma mgbe oge mmalite ruru nso.", "Hazie karama mmiri gị maka ụbọchị niile.", "Hazie nri ma ọ bụ nri nta ezumike mgbe ọ gwụchara."],
          words: [["Hydration", "idebe mmiri zuru ezu n'ahụ gị."], ["Nri ezumike (recovery meal)", "nri mgbe mmega ahụ gachara nke na-enyere ahụ gị aka inweta ike ọzọ na idozi onwe ya."]],
          slides: [
            { title: "Tupu egwuregwu", bullets: ["Nri zuru oke awa ole na ole tupu ya", "Obere nri nta ị maara mgbe mmalite ruru nso", "Ihe ọhụrụ ọ bụla adịghị n'ụbọchị egwuregwu"] },
            { title: "Mmiri ụbọchị niile", bullets: ["Buru karama mmiri", "Ṅụkwuo n'okpomọkụ", "Isi na-agba gị ma ọ bụ uche agbagwoju n'okpomọkụ? Kwụsị ma gwa ndị ọrụ ozugbo"] },
            { title: "Mgbe ọ gwụchara", bullets: ["Carbohydrate na protein", "Jụọ onye na-elekọta ahụ ndị egwuregwu ihe dabara gị"] }
          ],
          tryIt: "Dee usoro oge maka egwuregwu ma ọ bụ mmega ahụ siri ike gị na-esote: nri, nri nta, mmiri, na nri ezumike, ya na oge ha.",
          youCanNow: "ịhazi usoro nri na mmiri dị mfe maka ụbọchị egwuregwu.",
          quickCheck: [
            { objective: "O2", q: "Olee mgbe ọtụtụ ndị egwuregwu na-eri nri nkịtị zuru oke n'ụbọchị egwuregwu?", options: ["Awa ole na ole tupu egwuregwu", "Ozugbo egwuregwu malitere", "Naanị mgbe egwuregwu gwụchara", "Naanị n'abalị tupu ụbọchị ahụ"], answer: 0, why: "Nri nkịtị awa ole na ole tupu ya na obere nri nta mgbe mmalite ruru nso bụ usoro a na-ahụkarị." },
            { objective: "O2", q: "Ọ bụ ụbọchị okpomọkụ, ị nwekwara mmega ahụ ogologo. Gịnị ka ị ga-ahazi?", options: ["Ịṅụ mmiri naanị mgbe onye nkuzi kwuru", "Ịghara ịṅụ mmiri ka akwara ghara ịdọ gị", "Ichere ịṅụ mmiri ruo mgbe mmega ahụ gwụrụ", "Iweta karama mmiri ma na-aṅụ oge niile ụbọchị niile, karịa n'okpomọkụ"], answer: 3, why: "Mmiri dị mkpa ụbọchị niile, ị chọkwara karịa n'okpomọkụ." }
          ]
        },
        {
          title: "Iji AI maka echiche nri na ndepụta ihe a ga-azụ",
          objectives: ["O3"],
          minutes: 5,
          goal: "Jiri ngwa enyemaka AI mee echiche nri maka otu izu na ndepụta ihe a ga-azụ dabara n'ego gị.",
          text: [
            "Ngwa enyemaka AI maara nke ọma inye echiche nri, otu esi esi nri na ndepụta ihe a ga-azụ. Gwa ya usoro oge gị, ego gị, kichin gị na ihe na-atọ gị ụtọ. Ọmụmaatụ: \"Abụ m onye egwuregwu mahadum nwere microwave n'ụlọ obibi ụmụ akwụkwọ, ego nri m kwa izu bụ $50. Mmega ahụ bụ 3-6 pm. Nye m nri dị mfe zuru oke maka ụbọchị 7 na ndepụta ihe a ga-azụ.\"",
            "Gwa ya banyere nri na-arịa gị ọrịa (allergy) ma ọ bụ iwu okpukpe ma ọ bụ omenala gbasara nri n'okwu izugbe, ka echiche ya dabara gị. Etinyela akwụkwọ ahụike ma ọ bụ ọgwụ gị.",
            "Arịọla AI ọnụ ọgụgụ calorie, atụmatụ ibelata ibu ma ọ bụ ọnụ ọgụgụ supplement. Ndị ahụ dabere n'ahụike gị, azịza ya nwekwara ike ịbụ ihe ezighi ezi ma ọ bụ ihe ize ndụ. Nke ahụ bụ ọrụ onye ọkachamara nri ma ọ bụ dọkịta."
          ],
          steps: ["Nye usoro oge gị, ego gị na kichin gị.", "Kwuo nri na-atọ gị ụtọ na nri ọ bụla ị na-anaghị eri.", "Rịọ echiche nri zuru oke maka ụbọchị 7.", "Rịọ ndepụta ihe a ga-azụ, kewara dịka akụkụ ụlọ ahịa si dị.", "Lelee ọnụ ahịa n'ụlọ ahịa gị ma gbanwee ya."],
          words: [["Ego e kenyere (budget)", "ego ị chọrọ imefu."], ["Allergy", "mgbe ahụ gị na-emeghachi omume ọjọọ n'otu nri; ọ nwere ike ịdị njọ."]],
          slides: [
            { title: "Nye AI nkọwa", bullets: ["Usoro oge na ego", "Kichin: ụlọ obibi ụmụ akwụkwọ, ụlọ, ọ dịghị", "Nri na-atọ gị ụtọ na nri ị na-anaghị eri"] },
            { title: "Rịọ maka", bullets: ["Echiche nri zuru oke maka ụbọchị 7", "Ndepụta ihe a ga-azụ dịka akụkụ ụlọ ahịa"] },
            { title: "ARỊỌLA AI", bullets: ["Ọnụ ọgụgụ calorie ma ọ bụ atụmatụ ibelata ibu", "Ọnụ ọgụgụ supplement", "Ndụmọdụ ahụike"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI nri dị mfe zuru oke maka ụbọchị asaa na ndepụta ihe a ga-azụ maka ezi ego na kichin gị. Lelee ọnụ ahịa ihe atọ n'ụlọ ahịa gị.",
          youCanNow: "iji AI nweta echiche nri na ndepụta ihe a ga-azụ dabara n'ego gị na usoro oge gị.",
          quickCheck: [
            { objective: "O3", q: "Kedu nkọwa na-enyere ngwa enyemaka AI aka inye echiche nri bara uru?", options: ["Akwụkwọ ahụike gị", "Usoro oge gị, ego gị na kichin gị", "Ọgwụ gị", "Ebumnuche ibu ahụ gị"], answer: 1, why: "Usoro oge, ego na kichin na-eme ka echiche ahụ dabara ndụ gị n'ekesaghị ozi nzuzo ahụike." },
            { objective: "O3", q: "Ị chọrọ ịmata kpọmkwem calorie ole ị ga-eri iji belata ibu. Onye ka ị ga-ajụ?", options: ["Ngwa enyemaka AI", "Onye otu egwuregwu gị", "Onye ọkachamara nri ma ọ bụ dọkịta", "Onye a ma ama na soshal midia"], answer: 2, why: "Ọnụ ọgụgụ calorie dabere n'ahụike gị, ọ bụkwa ọrụ onye ọkachamara nri ma ọ bụ dọkịta." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Inye ahụ ike gburugburu mmega ahụ",
        questions: [
          { objective: "O1", q: "Gịnị bụ isi ọrụ carbohydrate maka ndị egwuregwu?", options: ["Naanị ndozi akwara", "Naanị vitamin", "Ike", "Ọ dịghị ihe"], answer: 2, why: "Carbohydrate bụ isi ebe ahụ na-esi enweta ike ọsọ ọsọ." },
          { objective: "O1", q: "Onye kwesịrị ịgwa gị ọnụ ọgụgụ nri kpọmkwem ị ga-eri?", options: ["Onye ọkachamara nri (registered dietitian)", "Ngwa enyemaka AI", "Onye a ma ama na soshal midia", "Onye otu egwuregwu gị"], answer: 0, why: "Ndị ọkachamara nri na-enye ndụmọdụ nri dabara onye ọ bụla." },
          { objective: "O2", q: "N'ụbọchị egwuregwu, kedu nri nta kacha mma?", options: ["Ihe ọṅụṅụ ike ọhụrụ ị na-aṅụbeghị", "Ọ dịghị ihe ụbọchị niile", "Nri buru ibu jupụtara na mmanụ ozugbo tupu ya", "Obere nri nta ị maara, dị ka mkpụrụ osisi"], answer: 3, why: "Nri ị maara, dị mfe, kacha enweghị nsogbu n'ụbọchị egwuregwu." },
          { objective: "O2", q: "Isi na-agba onye otu egwuregwu gị gburugburu, uche ya agbagwojukwa n'oge mmega ahụ n'okpomọkụ. Gịnị ka ị ga-eme?", options: ["Gwa ya ka ọ gaa n'ihu", "Gwa onye nkuzi ma ọ bụ onye na-elekọta ahụ ndị egwuregwu ozugbo", "Chere ruo mgbe mmega ahụ gwụrụ", "Nye ya ihe ọṅụṅụ ike ma hapụ ya"], answer: 1, why: "Ihe ịrịba ama ndị ahụ nwere ike ịbụ ihe mberede; ndị ọrụ ga-eme ihe ugbu a." },
          { objective: "O3", q: "Kedu arịrịọ NA-EKWESỊGHỊ ịga n'ngwa enyemaka AI?", options: ["Ndepụta ihe a ga-azụ na ego $50", "Ọnụ ọgụgụ supplement maka gị", "Echiche nri microwave", "Otu esi esi nri nwere agwa"], answer: 1, why: "Ọnụ ọgụgụ dabere n'ahụike gị; jụọ onye ọkachamara nri ma ọ bụ dọkịta." }
        ]
      }
    },
    {
      name: "Isi 2: Omume ezumike ahụ",
      lessons: [
        {
          title: "Ụra: ngwa ezumike gị kacha mma",
          objectives: ["O4"],
          minutes: 5,
          goal: "Mee usoro ụra dị mfe dabara n'usoro oge gị.",
          text: [
            "Ụra bụ oge ahụ gị na-edozi onwe ya, ụbụrụ gị na-echekwakwa ihe i mere na mmega ahụ. Ndị nọ n'afọ iri na ụma (teens) na-achọkarị ụra karịa ndị okenye, ọtụtụ ndị egwuregwu anaghịkwa ehi ụra zuru ezu.",
            "Usoro ụra na-enyere aka: oge ịlakpu ụra na oge iteta ụra kwa ụbọchị, imechi ihuenyo tupu ụra, ime ụlọ jụrụ oyi ma gbaa ọchịchịrị, na caffeine naanị n'isi ụtụtụ. AI nwere ike inyere gị aka ime atụmatụ ụra gburugburu mmega ahụ n'isi ụtụtụ ma ọ bụ egwuregwu na-agwụ n'abalị.",
            "Ọ bụrụ na ụra anaghị abịa gị ọtụtụ oge, ị na-ete ụra n'olu dị elu, ma ọ bụ ike na-agwụ gị nke ukwuu ọbụlagodi mgbe i hiri ụra, gwa dọkịta gị."
          ],
          steps: ["Họrọ oge iteta ụra kwa ụbọchị.", "Gụọ azụ ruo oge ịlakpu ụra ga-enye gị ụra zuru ezu.", "Họrọ oge imechi ihuenyo tupu ụra.", "Ṅụọ caffeine naanị n'isi ụtụtụ.", "Dekọọ awa ụra gị maka otu izu."],
          words: [["Usoro ụra", "otu nzọụkwụ ahụ n'otu oge ahụ kwa abalị iji nyere gị aka ihi ụra."], ["Caffeine", "ihe na-akpali ahụ dị na kọfị, tii, soda na ihe ọṅụṅụ ike nke nwere ike igbochi gị ihi ụra."]],
          slides: [
            { title: "Ihe mere ụra ji dị mkpa", bullets: ["Ahụ na-edozi onwe ya", "Ụbụrụ na-echekwa nka", "Ndị teens chọrọ ụra karịa ndị okenye"] },
            { title: "Usoro dị mfe", bullets: ["Otu oge ịlakpu ụra na iteta ụra", "Mechie ihuenyo tupu ụra", "Ime ụlọ jụrụ oyi ma gbaa ọchịchịrị", "Caffeine naanị n'isi ụtụtụ"] },
            { title: "Hụ dọkịta gị ma ọ bụrụ na", bullets: ["Ụra anaghị abịa gị ọtụtụ oge", "Ị na-ete ụra n'olu dị elu", "Ike na-agwụ gị mgbe niile"] }
          ],
          tryIt: "Jụọ ngwa enyemaka AI: \"Enwere m mmega ahụ n'elekere 6 nke ụtụtụ n'ụbọchị ọrụ, egwuregwu na-agwụkwa n'elekere 9 nke abalị na Fraịde. Nyere m aka mee usoro ụra dị mfe.\" Họrọ oge ịlakpu ụra gị ma dekọọ ụra gị maka abalị atọ na-esote.",
          youCanNow: "ime ma soro usoro ụra dị mfe.",
          quickCheck: [
            { objective: "O4", q: "Kedu nke bụ akụkụ nke ezigbo usoro ụra?", options: ["Caffeine n'abalị", "Oge ịlakpu ụra dị iche kwa abalị", "Ime ụlọ na-enwu ọkụ ma dị ọkụ", "Oge ịlakpu ụra na iteta ụra kwa ụbọchị"], answer: 3, why: "Otu oge kwa ụbọchị, imechi ihuenyo, ime ụlọ jụrụ oyi ma gbaa ọchịchịrị na caffeine n'isi ụtụtụ na-enyere ụra aka." },
            { objective: "O4", q: "Mmega ahụ na-amalite n'elekere 6 nke ụtụtụ. Olee otu ị ga-esi họrọ oge ịlakpu ụra?", options: ["Họrọ oge iteta ụra, wee gụọ azụ ruo oge ịlakpu ụra ga-enye ụra zuru ezu", "Lakpuo ụra mgbe ọ bụla i mechara ekwentị gị", "Hiekwuo ụra n'ụbọchị mmega ahụ", "Ahila ụra tupu mmega ahụ n'isi ụtụtụ"], answer: 0, why: "Ịgụ azụ site n'oge iteta ụra kwa ụbọchị na-enye oge ịlakpu ụra nwere ụra zuru ezu." }
          ]
        },
        {
          title: "Ụbọchị ezumike, mgbu ahụ nkịtị na ezigbo mgbu",
          objectives: ["O5"],
          minutes: 5,
          goal: "Mata ọdịiche dị n'etiti mgbu ahụ nkịtị site na mmega ahụ na mgbu chọrọ ọkachamara.",
          text: [
            "Ụbọchị ezumike bụ akụkụ nke mmega ahụ, ọ bụghị ezumike pụọ na ya. Onye nkuzi gị na-ahazi ha ka ahụ gị nwee ike ịmụ ọrụ ọhụrụ ma sie ike karịa.",
            "Mgbu ahụ nkịtị (soreness) na-adị ka ike ọgwụgwụ akwara na-adịghị nkọ, n'ebe niile, otu ụbọchị ma ọ bụ abụọ mgbe mmega ahụ siri ike gachara, ọ na-akakwa mma nwayọọ nwayọọ. Mgbu dị nkọ, nke dị na nkwonkwo ma ọ bụ ọkpụkpụ, nke na-eme ka ị na-adọkpụ ụkwụ, na-akpata ọzịza, ma ọ bụ na-akawanye njọ dị iche: kwụsị ma gwa onye na-elekọta ahụ ndị egwuregwu.",
            "Mmerụ isi chọrọ nlekọta pụrụ iche. Ọ bụrụ na gị ma ọ bụ onye otu egwuregwu gị kụrụ isi, ma isi na-awa, isi na-agba gburugburu, uche agbagwojuola, ma ọ bụ ahụ adịghị \"ka o kwesịrị\", kwụsị egwuregwu ma gwa onye nkuzi ma ọ bụ onye na-elekọta ahụ ndị egwuregwu. Ọzụzụ HEADS UP n'efu nke CDC (ụlọ ọrụ ahụike ọha nke US) na-akọwa ihe ịrịba ama ndị ahụ."
          ],
          steps: ["Lee ebe na otu o si egbu gị mgbu.", "Ọ dịghị nkọ, ọ dị n'ebe niile, ọ na-akakwa mma: mgbu ahụ nkịtị.", "Ọ dị nkọ, ọ dị na nkwonkwo, ọzịza, ịdọkpụ ụkwụ ma ọ bụ na-akawanye njọ: gwa onye na-elekọta ahụ ndị egwuregwu.", "Ịkụ isi ọ bụla nwere ihe ịrịba ama: kwụsị ma gwa ndị ọrụ."],
          words: [["Mgbu ahụ nkịtị (soreness)", "ike ọgwụgwụ akwara na-adịghị nkọ mgbe mmega ahụ siri ike gachara, nke na-ala n'otu ụbọchị ma ọ bụ abụọ."], ["Concussion", "mmerụ ụbụrụ site n'ịkụ ma ọ bụ ịma jijiji isi ma ọ bụ ahụ."]],
          slides: [
            { title: "Ụbọchị ezumike bụ mmega ahụ", bullets: ["Ahụ gị na-ahazi onwe ya n'ụbọchị ezumike", "Soro atụmatụ onye nkuzi gị"] },
            { title: "Mgbu ahụ nkịtị na ezigbo mgbu", bullets: ["Mgbu nkịtị: adịghị nkọ, n'ebe niile, na-ala", "Ezigbo mgbu: dị nkọ, nkwonkwo, ọzịza, ịdọkpụ ụkwụ, na-akawanye njọ"] },
            { title: "Ị kụrụ isi?", bullets: ["Isi ọwụwa, isi ịgba gburugburu, uche agbagwoju, ahụ adịghị \"ka o kwesịrị\"", "Kwụsị egwuregwu ma gwa ndị ọrụ", "Mụta ihe ịrịba ama: CDC HEADS UP"] }
          ],
          sources: [{ name: "CDC: HEADS UP concussion training", url: "https://www.cdc.gov/heads-up/index.html" }],
          tryIt: "Dee ndepụta abụọ: ihe ịrịba ama mgbu ahụ nkịtị na ihe ịrịba ama mgbu ị ga-akọ. Wee dee onye ị ga-agwa n'otu egwuregwu gị na otu ị ga-esi kpọtụrụ ya.",
          youCanNow: "ịmata ọdịiche dị n'etiti mgbu ahụ nkịtị na mgbu chọrọ onye na-elekọta ahụ ndị egwuregwu, na ịmara ihe ị ga-eme mgbe a kụrụ isi.",
          quickCheck: [
            { objective: "O5", q: "Kedu nke bụ ihe ịrịba ama mgbu chọrọ onye na-elekọta ahụ ndị egwuregwu?", options: ["Ike ọgwụgwụ na-adịghị nkọ n'ụkwụ gị ụbọchị na-eso mmega ahụ siri ike", "Mgbu dị nkọ na nkwonkwo na-akawanye njọ", "Obere mgbu ahụ na-ala n'ụbọchị abụọ", "Agụụ na-agụ gị mgbe mmega ahụ gachara"], answer: 1, why: "Mgbu dị nkọ, mgbu nkwonkwo ma ọ bụ ọkpụkpụ, ọzịza, ịdọkpụ ụkwụ ma ọ bụ mgbu na-akawanye njọ chọrọ ọkachamara." },
            { objective: "O5", q: "Onye otu egwuregwu gị kụrụ isi ma kwuo na isi na-agba ya gburugburu. Gịnị ga-eme?", options: ["Ọ ga-aga n'ihu na-egwu ma ọ bụrụ na ọ chọrọ", "Ọ ga-ezu ike maka otu oge egwuregwu", "Ọ ga-akwụsị egwuregwu, ị ga-agwakwa onye nkuzi ma ọ bụ onye na-elekọta ahụ ndị egwuregwu", "Ọ ga-aṅụ mmiri wee laghachi n'egwuregwu"], answer: 2, why: "Ịkụ isi nwere ihe ịrịba ama pụtara ịkwụsị egwuregwu na ịgwa ndị ọrụ." }
          ]
        },
        {
          title: "Ime atụmatụ ezumike ahụ gị",
          objectives: ["O6"],
          minutes: 5,
          goal: "Tinye nri, mmiri na ụra n'otu atụmatụ ezumike ahụ kwa izu ma gosi ọkachamara ka o lelee ya.",
          text: [
            "Ugbu a, jikọta ha ọnụ. Atụmatụ izu gị nwere nri gburugburu mmega ahụ, usoro ụbọchị egwuregwu, omume ịṅụ mmiri na usoro ụra.",
            "Rịọ ngwa enyemaka AI ka o jikọta ha: \"Nke a bụ usoro mmega ahụ na egwuregwu m, ego m na kichin m. Mee tebụl otu izu nwere nri, nri nta, ncheta ịṅụ mmiri na oge ịlakpu ụra.\" Buru ụzọ wepụ ozi nzuzo ahụike ọ bụla.",
            "Wee buru ya gaa n'aka onye ọkachamara nri, onye na-elekọta ahụ ndị egwuregwu ma ọ bụ dọkịta gị. Jụọ: \"Nke a ọ dabara n'ahụ m na egwuregwu m? Gịnị ka ị ga-agbanwe?\" Atụmatụ ha nyere gị aka idozi bụ nke ị ga-agbaso. Ụlọ akwụkwọ, otu egwuregwu ma ọ bụ ụlọ ahụike ụmụ akwụkwọ nwere ike ijikọ gị na otu onye."
          ],
          steps: ["Chịkọta usoro oge gị, ego gị na ozi gbasara kichin gị.", "Rịọ AI tebụl otu izu: nri, nri nta, mmiri, oge ịlakpu ụra.", "Wepụ ozi nzuzo ahụike.", "Gosi ya onye ọkachamara nri, onye na-elekọta ahụ ndị egwuregwu ma ọ bụ dọkịta.", "Melite ya site na ndụmọdụ ha."],
          words: [["Atụmatụ ezumike ahụ (recovery plan)", "usoro izu gị maka nri, mmiri, ụra na ezumike nke na-enyere ahụ gị aka ịlaghachi n'ike."]],
          slides: [
            { title: "Atụmatụ ezumike ahụ gị", bullets: ["Nri gburugburu mmega ahụ", "Usoro ụbọchị egwuregwu", "Omume ịṅụ mmiri", "Usoro ụra"] },
            { title: "AI na-ede ihe mbụ", bullets: ["Tebụl otu izu", "Ọ dịghị ozi nzuzo ahụike"] },
            { title: "Ọkachamara na-elele ya", bullets: ["Onye ọkachamara nri, onye na-elekọta ahụ ndị egwuregwu ma ọ bụ dọkịta", "\"Gịnị ka ị ga-agbanwe?\"", "Gbasoo atụmatụ e doziri edozi"] }
          ],
          sources: [{ name: "Academy of Nutrition and Dietetics: Find a Nutrition Expert", url: "https://www.eatright.org/find-a-nutrition-expert" }],
          tryIt: "Ọrụ ikpeazụ: jiri ngwa enyemaka AI dee atụmatụ nri na ezumike ahụ gị maka otu izu, wepụ ozi nzuzo ahụike, ma gosi ya onye ọkachamara nri, onye na-elekọta ahụ ndị egwuregwu ma ọ bụ dọkịta.",
          youCanNow: "iji AI mee atụmatụ izu maka nri, mmiri na ụra, ma mee ka ọkachamara lelee ya.",
          quickCheck: [
            { objective: "O6", q: "Gịnị na-aba n'atụmatụ ezumike ahụ gị maka otu izu?", options: ["Nri na nri nta, ncheta ịṅụ mmiri na oge ịlakpu ụra", "Naanị mmega ahụ gị", "Naanị usoro egwuregwu gị", "Ndepụta supplement"], answer: 0, why: "Atụmatụ ahụ na-ejikọta nri, mmiri na ụra gburugburu usoro oge gị." },
            { objective: "O6", q: "Onye na-elekọta ahụ ndị egwuregwu gị tụrụ aro mgbanwe n'atụmatụ AI dere. Gịnị ka ị ga-eme?", options: ["Debe nke AI dere", "Rịọ AI ka ọ rụrịta ụka", "Jiri ọkara nke ọ bụla", "Melite atụmatụ ahụ site na ndụmọdụ ha ma gbasoo ya"], answer: 3, why: "Atụmatụ ọkachamara nyere gị aka idozi bụ nke ị ga-agbaso." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Omume ezumike ahụ",
        questions: [
          { objective: "O4", q: "Gịnị mere ụra ji dị mkpa maka ndị egwuregwu?", options: ["Ọ dịghị mkpa", "Ọ na-anọchi mmega ahụ", "Naanị maka ibu ahụ", "Ahụ na-edozi onwe ya, ụbụrụ na-echekwakwa nka"], answer: 3, why: "Ụra bụ oge ndozi ahụ na mmụta na-eme." },
          { objective: "O4", q: "Kedu nke bụ akụkụ nke ezigbo usoro ụra?", options: ["Imechi ihuenyo tupu ụra", "Ihe ọṅụṅụ ike n'abalị", "Oge ịlakpu ụra dị iche kwa abalị", "Ekwentị n'akwa ruo mgbe ụra buru gị"], answer: 0, why: "Imechi ihuenyo tupu ụra na-enyere gị aka ihi ụra." },
          { objective: "O5", q: "Ikpere gị na-egbu mgbu dị nkọ ma zaa aza mgbe mmega ahụ gachara. Gịnị ka ị ga-eme?", options: ["Leghara ya anya", "Rịọ AI ọgwụgwọ", "Gwa onye na-elekọta ahụ ndị egwuregwu gị", "Gbaa ọsọ karịa ka o wee tọpụ"], answer: 2, why: "Mgbu dị nkọ na ọzịza chọrọ ọkachamara." },
          { objective: "O5", q: "Isi na-agba onye otu egwuregwu gị gburugburu, ahụ adịghịkwa ya \"ka o kwesịrị\" mgbe ọ kụrụ isi. Gịnị kwesịrị ime?", options: ["Ọ ga-aga n'ihu na-egwu", "Ọ ga-ezu ike ntakịrị wee laghachi", "Ọ ga-ajụ app", "Ọ ga-akwụsị egwuregwu ma gwa ndị ọrụ"], answer: 3, why: "O nwere ike ịbụ concussion: kwụsị ma gwa onye nkuzi ma ọ bụ onye na-elekọta ahụ ndị egwuregwu." },
          { objective: "O6", q: "Onye kwesịrị ilele atụmatụ ezumike ahụ AI dere gị?", options: ["Ebe nkọwa ọ bụla n'ịntanetị", "Onye ọkachamara nri, onye na-elekọta ahụ ndị egwuregwu ma ọ bụ dọkịta", "AI ọzọ", "Ọ dịghị onye"], answer: 1, why: "Ọkachamara nwere ike ime ka atụmatụ ahụ dabara ahụ gị na egwuregwu gị." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Nri na Ezumike Ahụ site n'iji AI",
    questions: [
      { objective: "O1", q: "Kedu nri bụ isi protein?", options: ["Osikapa", "Apụl", "Akwa", "Achịcha"], answer: 2, why: "Akwa bụ nri protein." },
      { objective: "O1", q: "Akụkụ atọ bụ isi nke efere nri zuru oke bụ:", options: ["Carbohydrate, protein, mkpụrụ osisi na akwụkwọ nri", "Swiit, soda, chips", "Naanị protein", "Naanị akwụkwọ nri"], answer: 0, why: "Akụkụ atọ ndị ahụ na-enye ike, ndozi na vitamin." },
      { objective: "O1", q: "Ụbọchị mmega ahụ siri ike na-achọkarị:", options: ["Nri karịa", "Ịhapụ nri", "Enweghị mmiri", "Naanị nri nta"], answer: 0, why: "Mmega ahụ karịa na-achọkarị ike karịa." },
      { objective: "O1", q: "Nri ma ọ bụ ụdị ahụ gị na-enye gị nsogbu. Ị kwesịrị:", options: ["Ịkwụsị iri nri", "Izo ya", "Ịgwa onye ị tụkwasịrị obi, na onye na-elekọta ahụ ndị egwuregwu ma ọ bụ dọkịta gị", "Ịrịọ AI atụmatụ nri"], answer: 2, why: "Nchegbu ndị a kwesịrị ezi nkwado." },
      { objective: "O2", q: "N'ụbọchị egwuregwu, rie:", options: ["Nri ọhụrụ kpam kpam", "Nri ị maara nke ọma", "Ọ dịghị ihe ụbọchị niile", "Supplement ọhụrụ"], answer: 1, why: "Nri ị maara kacha enweghị nsogbu." },
      { objective: "O2", q: "Olee mgbe ị kwesịrị ịṅụ mmiri?", options: ["Naanị n'oge egwuregwu", "Ọ bụghị mgbe ọ bụla tupu egwuregwu", "Naanị mgbe a gwara gị", "Ụbọchị niile, karịa n'okpomọkụ"], answer: 3, why: "Ịṅụ mmiri bụ omume ụbọchị niile." },
      { objective: "O2", q: "Kedu nke nwere ike igosi na ị chọrọ mmiri karịa?", options: ["Ịnọ n'ezumike", "Iche echiche nke ọma", "Mamịrị gbara ọchịchịrị na isi ọwụwa", "Ezigbo ụra"], answer: 2, why: "Mamịrị gbara ọchịchịrị, isi ọwụwa na akwara ịdọ nwere ike igosi na mmiri adịghị ezu." },
      { objective: "O2", q: "Mgbe mmega ahụ siri ike gachara, nri nta ezumike nwere:", options: ["Naanị mmiri", "Naanị swiit", "Ọ dịghị ihe", "Carbohydrate na protein"], answer: 3, why: "Carbohydrate na-eweghachi ike; protein na-enyere aka idozi ahụ." },
      { objective: "O3", q: "Gịnị ka ị ga-enye AI iji nweta echiche nri bara uru?", options: ["Usoro oge gị, ego gị na kichin gị", "Akwụkwọ ahụike gị", "Okwuntughe gị", "Kaadị ụlọ akụ gị"], answer: 0, why: "Nkọwa ndị ahụ na-eme ka echiche ahụ dabara ndụ gị." },
      { objective: "O3", q: "Kedu nke ị na-ekwesịghị ịrịọ AI?", options: ["Otu esi esi nri na microwave", "Ọnụ ọgụgụ calorie maka ibelata ibu", "Ndepụta ihe a ga-azụ", "Echiche nri nwere agwa"], answer: 1, why: "Ọnụ ọgụgụ calorie dabere n'ahụike gị; jụọ onye ọkachamara nri." },
      { objective: "O3", q: "Olee otu ị ga-esi kọọrọ AI banyere nri na-arịa gị ọrịa (allergy)?", options: ["Site n'itinye faịlụ ahụike gị", "Site n'ide ndetu dọkịta gị", "N'okwu izugbe, dị ka \"enweghị ahụekere (peanuts)\"", "Ekwula ya"], answer: 2, why: "Okwu izugbe na-enweta echiche n'enweghị nsogbu n'ekesaghị akwụkwọ ahụike." },
      { objective: "O3", q: "Mgbe AI mere ndepụta ihe a ga-azụ, ị kwesịrị:", options: ["Ilele ọnụ ahịa n'ụlọ ahịa gị", "Ikwere ọnụ ahịa ya", "Ịzụ ihe niile ugboro abụọ", "Itinye ya n'ịntanetị"], answer: 0, why: "AI enweghị ike ịmata ezi ọnụ ahịa ụlọ ahịa gị." },
      { objective: "O3", q: "Supplement nwere ihe ize ndụ n'ihi na:", options: ["Iwu machibidoro ha mgbe niile", "Ha bụ n'efu", "Ndị nkuzi na-ere ha", "FDA (ụlọ ọrụ gọọmentị US) anaghị elele ha tupu e ree ha, ụfọdụ nwekwara ihe a machibidoro iwu"], answer: 3, why: "USADA (ụlọ ọrụ US na-alụ ọgụ megide ọgwụ a machibidoro na egwuregwu) na-adọ aka na ntị gbasara supplement rụrụ arụ na nke e dere ihe ezighi ezi na ya." },
      { objective: "O4", q: "Kedu nke na-enyere gị aka ihi ụra?", options: ["Caffeine n'abalị", "Ime ụlọ jụrụ oyi ma gbaa ọchịchịrị", "Ịgagharị n'ekwentị n'akwa", "Oge ịlakpu ụra dị iche kwa abalị"], answer: 1, why: "Ime ụlọ jụrụ oyi ma gbaa ọchịchịrị na-akwado ụra." },
      { objective: "O4", q: "Ike na-agwụ gị mgbe niile ọbụlagodi mgbe i hiri ụra. Ị kwesịrị:", options: ["Ịṅụkwu ihe ọṅụṅụ ike", "Ịgwa dọkịta gị", "Ileghara ya anya", "Ime mmega ahụ siri ike karịa"], answer: 1, why: "Ike ọgwụgwụ na-adịgide adịgide bụ ihe mere ị ga-eji hụ dọkịta." },
      { objective: "O5", q: "Ụbọchị ezumike bụ:", options: ["Umengwụ", "Ihe a machibidoro", "Naanị maka ndị merụrụ ahụ", "Akụkụ nke mmega ahụ"], answer: 3, why: "Ahụ gị na-ahazi onwe ya ma sie ike n'ụbọchị ezumike." },
      { objective: "O5", q: "Kedu nke yiri mgbu ahụ nkịtị?", options: ["Ike ọgwụgwụ akwara na-adịghị nkọ nke na-ala n'otu ụbọchị ma ọ bụ abụọ", "Mgbu nkwonkwo dị nkọ", "Ọzịza na ịdọkpụ ụkwụ", "Mgbu na-akawanye njọ"], answer: 0, why: "Mgbu ahụ nkịtị adịghị nkọ, ọ na-alakwa." },
      { objective: "O5", q: "Ebee ka ị nwere ike ịmụta ihe ịrịba ama concussion n'efu?", options: ["Meme ọ bụla", "Mgbasa ozi ihe ọṅụṅụ egwuregwu", "CDC HEADS UP", "Ọ dịghị ebe"], answer: 2, why: "CDC na-enye ọzụzụ HEADS UP n'efu." },
      { objective: "O6", q: "Tupu i tinye atụmatụ gị n'ime AI, wepụ:", options: ["Oge mmega ahụ", "Ego gị", "Nri kacha atọ gị ụtọ", "Ozi nzuzo ahụike"], answer: 3, why: "Ozi ahụike na-anọgide na nzuzo." },
      { objective: "O6", q: "Atụmatụ ị kwesịrị ịgbaso bụ:", options: ["Ihe mbụ AI dere", "Nke e doziri ya na onye ọkachamara nri, onye na-elekọta ahụ ndị egwuregwu ma ọ bụ dọkịta", "Atụmatụ onye a ma ama na soshal midia", "Atụmatụ onye mmegide gị"], answer: 1, why: "Ọkachamara na-eme ka atụmatụ ahụ dabara gị." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [1, 4, 8, 9, 13, 16, 18, 19] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Nri zuru oke", objective: "O1", notYet: "Nri na-ahapụ otu ụdị nri niile, ma ọ bụ nri adịghị gburugburu mmega ahụ.", meets: "Isi nri ọ bụla nwere carbohydrate, protein, na mkpụrụ osisi ma ọ bụ akwụkwọ nri.", exceeds: "E mere atụmatụ nri karịa n'ụbọchị siri ike, nri ahụ na-ejikwa nri na-atọ onye egwuregwu ahụ ụtọ." },
      { name: "Usoro ụbọchị egwuregwu", objective: "O2", notYet: "Enweghị oge, enweghị atụmatụ mmiri, ma ọ bụ nri ọhụrụ n'ụbọchị egwuregwu.", meets: "Nri ị maara awa ole na ole tupu ya, obere nri nta mgbe mmalite ruru nso, mmiri ụbọchị niile na nri nta ezumike mgbe ọ gwụchara.", exceeds: "O nwere atụmatụ okpomọkụ na ihe ịrịba ama na-egosi na ị ga-akwụsị ma gwa ndị ọrụ." },
      { name: "Ndepụta ihe a ga-azụ dabara n'ego", objective: "O3", notYet: "Enweghị ndepụta ihe a ga-azụ, ma ọ bụ atụmatụ ahụ na-arịọ AI ọnụ ọgụgụ calorie ma ọ bụ ọnụ ọgụgụ supplement.", meets: "Ndepụta ihe a ga-azụ dabara n'ego na kichin a kpọrọ aha, ebe a kọwara allergy n'okwu izugbe.", exceeds: "E lelere ọnụ ahịa n'ụlọ ahịa onye egwuregwu ahụ ma gbanwee ndepụta ahụ." },
      { name: "Usoro ụra", objective: "O4", notYet: "Enweghị oge iteta ụra ma ọ bụ oge ịlakpu ụra kwa ụbọchị.", meets: "Oge iteta ụra, oge ịlakpu ụra na oge imechi ihuenyo kwa ụbọchị dabara n'usoro oge.", exceeds: "E dekọrọ awa ụra maka otu izu ma gbanwee usoro ahụ gburugburu mmega ahụ n'isi ụtụtụ ma ọ bụ egwuregwu na-agwụ n'abalị." },
      { name: "Nlele ọkachamara", objective: "O6", notYet: "E gosighị ọkachamara atụmatụ ahụ, ma ọ bụ o nwere ozi nzuzo ahụike.", meets: "E wepụrụ ozi nzuzo, gosi onye ọkachamara nri, onye na-elekọta ahụ ndị egwuregwu ma ọ bụ dọkịta atụmatụ ahụ, ma melite ya site na ndụmọdụ ha.", exceeds: "Onye egwuregwu ahụ dere ihe a gbanwere na ihe mere e ji gbanwee ya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ọrụ ikpeazụ ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla",
      "Ndị na-amụ ihe kwuru na ha ka na-agbaso atụmatụ nri na ụra e lelere ụbọchị 30 mgbe e mesịrị (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha na onye ọkachamara nri, onye na-elekọta ahụ ndị egwuregwu ma ọ bụ dọkịta kparịtara ụka banyere atụmatụ ha",
      "Ndị na-amụ ihe kwuru na ha gwara ndị ọrụ banyere mgbu dị nkọ, ihe ịrịba ama ọrịa okpomọkụ ma ọ bụ ịkụ isi kama ịga n'ihu na-egwu"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị",
      "Ngwa enyemaka AI n'efu (ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini)",
      "Usoro mmega ahụ na egwuregwu gị, ego nri gị kwa izu na ozi gbasara kichin gị",
      "Ozi kọntaktị maka onye ọkachamara nri, onye na-elekọta ahụ ndị egwuregwu, ụlọ ahụike ụmụ akwụkwọ ma ọ bụ dọkịta",
      "Ihe dị ka nkeji 60, gbakwunyere oge iji hụ ọkachamara ahụ"
    ],
    facilitatorNotes: [
      "Kwuo nke ọma na nke a bụ agụmakwụkwọ izugbe; enyela onye ọ bụla ndụmọdụ calorie, ibu ahụ ma ọ bụ supplement n'otu.",
      "Kpachara anya gbasara ibu ahụ na ụdị ahụ: atụla ibu ndị egwuregwu ma ọ bụ tụnyere ha mgbe ọ bụla, ma mara onye ị ga-ezigara onye ọ bụla na-enwe nsogbu.",
      "Hazie ụzọ isi nweta onye ọkachamara nri, onye na-elekọta ahụ ndị egwuregwu ma ọ bụ ụlọ ahụike ụmụ akwụkwọ tupu ọrụ ikpeazụ ka onye egwuregwu ọ bụla nwee ike ime ka e lelee atụmatụ ya.",
      "Gaa n'ihe ịrịba ama ọrịa okpomọkụ na ịkụ isi na otu niile ma hụ na ndị egwuregwu maara onye ha ga-agwa.",
      "Kwanyere ego nri, allergy na iwu omenala ma ọ bụ okpukpe gbasara nri ugwu mgbe ị na-ekesa ọmụmaatụ nri."
    ]
  }
};
