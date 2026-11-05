"use strict";

// Koach Learn course (Igbo translation of africa-life/afr-nutrition-local-foods.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const WHO_DIET = { name: "Akwụkwọ ozi WHO: Nri na-edozi ahụ (mkpụrụ osisi na akwụkwọ nri, nnu, shuga na abụba)", url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet" };
const WHO_IYCF = { name: "Akwụkwọ ozi WHO: Inye ụmụ ọhụrụ na ụmụaka nri", url: "https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding" };
const WHO_ANAEMIA = { name: "Akwụkwọ ozi WHO: Anaemia (ndị ọ na-adakarị, nri nwere iron, nri na-egbochi iron)", url: "https://www.who.int/news-room/fact-sheets/detail/anaemia" };
const WHO_FIVE_KEYS = { name: "WHO: Akwụkwọ ntụziaka banyere ụzọ ise e si eme ka nri dị nchebe", url: "https://www.who.int/publications/i/item/9789241594639" };

module.exports = {
  id: "afr-nutrition-local-foods-ig",
  lang: "ig",
  translationOf: "afr-nutrition-local-foods",
  category: "Africa: Life and Work",
  name: "Nri Na-edozi Ahụ n'Ego Nta site na Nri Obodo",
  skills: "Ikewa nri obodo n'otu nri, Ịhazi efere nri ziri ezi, Ibelata nnu, shuga na mmanụ ma debe nri n'enweghị nsogbu, Iji ọnụahịa nri tụnyere ibe ya ịchọta nke kacha baa uru, Inye ụmụaka na ụmụnwaanyị dị ime ma ọ bụ na-enye nwa ara nri, Ide atụmatụ nri izu n'ego nta",
  outcome: "ide atụmatụ nri izu maka ezinụlọ gị nke na-eji nri obodo si n'ọtụtụ otu nri kwa ụbọchị, dabara n'ego nri gị, na-agbaso ndụmọdụ WHO banyere nnu, shuga na nri dị nchebe, ma na-enye ụmụaka na ụmụnwaanyị dị ime ma ọ bụ na-enye nwa ara ihe ha chọrọ.",
  about: [
    "Ihe ọmụmụ a bụ maka onye ọ bụla na-azụ ma ọ bụ na-esi nri maka ezinụlọ n'Africa: ndị nne na ndị nna, nne nne, ụmụ akwụkwọ bi naanị ha, na ndị na-ere nri esiri esi. Ọ dịghị mkpa ego maka nri pụrụ iche. Nri na-edozi ahụ na-esi n'agwa, akwụkwọ nri, mkpụrụ ọka, azụ, akwa na mkpụrụ osisi dịlarị n'ahịa gị.",
    "Isi 1 na-akụzi ịmata nri gị: otu nri na ihe atụ obodo, ịhazi efere nri ziri ezi, na ibelata nnu, shuga na mmanụ ma na-edebe nri n'enweghị nsogbu. Isi 2 na-akụzi iri nri ọma n'ego nta: iji ọnụahịa tụnyere ibe ya, inye ndị kacha chọọ ya nri, na ide atụmatụ nri izu.",
    "Ihe ọmụmụ a na-agbaso ndụmọdụ World Health Organization (WHO, Otu Ahụike Ụwa). Ọ naghị enye nri maka ọrịa dị ka diabetes (ọrịa shuga), HIV ma ọ bụ ụkọ nri n'ahụ, ma ọ bụ ndụmọdụ banyere ọgwụ mgbakwunye (supplements); maka ndị ahụ, gwa ụlọ ọgwụ, ọkachamara nri ma ọ bụ onye ọrụ ahụike obodo. Ọnụahịa niile bụ ihe atụ; jiri ọnụahịa dị n'ahịa gị. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Dee atụmatụ nri otu izu maka ezinụlọ gị (ma ọ bụ ihe atụ, dị ka ezinụlọ mmadụ ise na Kisumu, ezinụlọ mmadụ anọ na Ibadan, ma ọ bụ nwa akwụkwọ na Accra): maka ụbọchị ọ bụla, nri ndị ahụ na otu nri ha na-ekpuchi, nwee mkpụrụ osisi ma ọ bụ akwụkwọ nri kwa ụbọchị; nri maka nwatakịrị ọ bụla ma ọ bụ nwaanyị dị ime ma ọ bụ na-enye nwa ara; ndepụta ihe ị ga-azụ n'ahịa nwere ọnụahịa ahịa gị na ngụkọta izu ahụ tụnyere ego gị; na omume atọ ị ga-eji (nnu belatara, shuga belatara, na otu ụzọ nri dị nchebe).",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị na-azụ ma ọ bụ na-esi nri maka ezinụlọ na Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire, Cameroon, Morocco, Egypt na n'Africa niile: ndị nne na nna, nne nne, ndị ntorobịa bi naanị ha na ndị na-ere obere nri esiri esi. Ọtụtụ nwere ego nta nke na-agbanwe agbanwe, ma na-eji ekwentị nkịtị.",
    startingPoint: "Ọtụtụ na-esi nri na-eju afọ (ugali, osikapa, garri, fufu, banku, attiéké, achịcha) kwa ụbọchị, mana ọ na-enwekarị obere akwụkwọ nri, agwa ma ọ bụ nri anụmanụ. Ọtụtụ na-etinye nnu, kubu ose (stock cubes), shuga ma ọ bụ mmanụ nke ukwuu. Mmadụ ole na ole na-eji ọnụahịa nri tụnyere uru ha ma ọ bụ na-ahazi nri otu izu, ọtụtụ amaghịkwa otu esi enye nwa nri site n'ọnwa 6.",
    gap: "Ọtụtụ ezinụlọ na-eri nri ruru iju afọ mana ụdị nri adịghị iche iche, nke a na-ebute anaemia, ụmụaka anaghị etolite nke ọma, na, karịa karịa, ọbara mgbali elu na diabetes n'etiti ndị okenye. Ndị na-amụ ihe nwere ike iri nri ka mma n'otu ego ahụ site n'ịhọrọ nri obodo si n'ọtụtụ otu, ibelata nnu na shuga, na ịhazi ihe ha ga-azụ.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu nri ọ bụla",
      "Ego: nta ma na-agbanwe; ihe ọmụmụ a anaghị enye ezi ọnụahịa, naanị ihe atụ, ndị na-amụ ihe na-eji ọnụahịa ahịa ha",
      "Nri dị iche site n'obodo ruo n'obodo na site n'oge ruo n'oge: ihe atụ si Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire, Morocco na Egypt",
      "Ọ dịghị nri maka ọrịa, ọgwụ mgbakwunye ma ọ bụ ọgwụ: ajụjụ ndị ahụ na-aga n'ụlọ ọgwụ ma ọ bụ n'aka ọkachamara nri",
      "Ngwaọrụ: ekwentị nkịtị maka igwe mgbakọ na ndetu, ma ọ bụ akwụkwọ"
    ],
    prerequisites: "Ọ dịghị. Mgbakọ na mwepụ dị mfe na-enyere aka na Nkuzi 4; igwe mgbakọ ekwentị zuru."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ndepụta nri a na-ere n'ahịa gị", action: "ikewa nri obodo n'otu nri na-enye ike, nke na-ewu ahụ na nke na-echebe ahụ", standard: "ma nweta opekata mpe 8 n'ime 10 ziri ezi" },
    { id: "O2", condition: "Site na nri dị na kichin gị", action: "ịhazi efere nri ziri ezi nwere nri na-eju afọ, nri na-ewu ahụ na akwụkwọ nri ma ọ bụ mkpụrụ osisi", standard: "ka akwụkwọ nri ma ọ bụ mkpụrụ osisi juo ihe dị ka ọkara efere ahụ" },
    { id: "O3", condition: "Mgbe e nyere gị otu nri ezinụlọ ma ọ bụ usoro isi ya", action: "ịgbanwe usoro isi nri ahụ ka o jiri obere nnu, shuga na mmanụ, ma gbasoo ụzọ ise WHO maka nri dị nchebe", standard: "ma kpọọ opekata mpe mgbanwe abụọ na ụzọ ise ahụ" },
    { id: "O4", condition: "Site n'iji ọnụahịa si n'ahịa gị", action: "iji ọnụahịa nri dị n'otu otu nri tụnyere ibe ya ịchọta nke ka baa uru", standard: "ma họrọ nke dị ọnụ ala nke na-enye otu ihe ahụ na-edozi ahụ, ma mgbakọ ya ziri ezi" },
    { id: "O5", condition: "Maka nwatakịrị dị ọnwa 6 ruo 23, ma ọ bụ nwaanyị dị ime ma ọ bụ na-enye nwa ara", action: "ịhazi nri otu ụbọchị nke na-agbaso ndụmọdụ WHO banyere inye nri", standard: "ma nwee ọnụọgụ nri ziri ezi maka afọ nwatakịrị ahụ, ma ọ bụ nri nwere iron gbakwunyere maka nwaanyị ahụ" },
    { id: "O6", condition: "Mgbe e nyere gị ọnụọgụ ezinụlọ gị na ego nri gị", action: "ide atụmatụ nri izu na ndepụta ihe ị ga-azụ n'ahịa", standard: "nke na-ekpuchi ọtụtụ otu nri kwa ụbọchị ma ghara ịgafe ego ahụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Mata nri gị",
      lessons: [
        {
          title: "Otu nri na nri obodo",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kewaa nri a na-ere n'ahịa gị n'otu nri na-enye ike, nke na-ewu ahụ na nke na-echebe ahụ.",
          text: [
            "Ọ dịghị otu nri na-enye ahụ ihe niile ọ chọrọ. Ụzọ dị mfe isi cheta ya bụ otu atọ. Nri na-enye ike (nri \"go\") na-enye ume: ọka, osikapa, ọka okpoko (millet), ọka sorghum, akpụ, ji, ogede, ji uto (sweet potato), achịcha, na mmanụ kwa. Nri na-ewu ahụ (nri \"grow\") na-ewu akwara na ọbara: agwa, lentil, akidi (cowpeas), ahụekere, akwa, azụ, anụ, ọkụkọ na mmiri ara ehi. Nri na-echebe ahụ (nri \"glow\") na-enyere aka ịlụso ọrịa ọgụ: akwụkwọ nri na mkpụrụ osisi.",
            "Ihe atụ obodo: na Kenya, ugali (ike), githeri ma ọ bụ omena (iwu ahụ) na sukuma wiki (nchebe). Na Nigeria, garri ma ọ bụ ji (ike), agwa ma ọ bụ egusi (iwu ahụ) na ugu ma ọ bụ onugbu (nchebe). Na Ghana, banku ma ọ bụ kenkey (ike), azụ ma ọ bụ ofe ahụekere (iwu ahụ) na kontomire (nchebe). Na Senegal, osikapa ma ọ bụ ọka okpoko na niébé (akidi) na akwụkwọ nri. Na Egypt, achịcha na ful (agwa fava) na salad.",
            "Ụfọdụ nri bụ ndị enyemaka pụrụ iche. Akwụkwọ nri na-acha akwụkwọ ndụ gbara ọchịchịrị (inine/amaranth, akwụkwọ akpụ, moringa, kontomire) na nri na-acha oroma (ji uto na-acha oroma, mkpụrụ pawpaw, mango, carrot) nwere ọtụtụ vitamin. Agwa, obere azụ a mịrị amị, akwa, imeju na akwụkwọ nri na-acha akwụkwọ ndụ gbara ọchịchịrị na-enye iron, nke na-egbochi anaemia."
          ],
          steps: ["Dee nri ezinụlọ gị riri ụnyaahụ.", "Kaa akara n'otu ọ bụla: ike, iwu ahụ ma ọ bụ nchebe.", "Lee otu nri na-adịghị ma ọ bụ dị ntakịrị.", "Kpọọ aha otu nri obodo ị nwere ike itinye maka otu ahụ."],
          words: [["Otu nri (food group)", "nri ndị na-arụ ụdị ọrụ yiri ibe ya n'ahụ."], ["Nri na-eju afọ (staple)", "isi nri a na-eri ọtụtụ ụbọchị, dị ka ugali, osikapa, garri ma ọ bụ achịcha."], ["Anaemia", "ọbara na-adịghị ike, nke na-esikarị n'iron dị ntakịrị; ọ na-eme ka ike gwụ mmadụ ma mee ya adịghị ike."]],
          slides: [
            { title: "Otu nri atọ", bullets: ["Ike (go): ọka, osikapa, akpụ, ji, ogede, achịcha", "Iwu ahụ (grow): agwa, ahụekere, akwa, azụ, anụ, mmiri ara ehi", "Nchebe (glow): akwụkwọ nri na mkpụrụ osisi"] },
            { title: "Efere nri obodo", bullets: ["Kenya: ugali, omena, sukuma wiki", "Nigeria: garri ma ọ bụ ji, agwa, ugu", "Ghana: banku, azụ, kontomire; Egypt: achịcha, ful, salad"] },
            { title: "Ndị enyemaka pụrụ iche", bullets: ["Akwụkwọ nri gbara ọchịchịrị na nri na-acha oroma: vitamin", "Agwa, obere azụ a mịrị amị, akwa, imeju, akwụkwọ nri: iron"] }
          ],
          sources: [WHO_DIET, WHO_ANAEMIA],
          tryIt: "Dee nri niile ezinụlọ gị riri ụnyaahụ. Kaa akara n'nri ọ bụla E (ike), B (iwu ahụ) ma ọ bụ P (nchebe). Gbaa okirikiri gburugburu otu nri unu riri nke kacha nta, ma dee otu nri obodo ị nwere ike itinye echi.",
          youCanNow: "ikewa nri obodo n'otu nri na-enye ike, nke na-ewu ahụ na nke na-echebe ahụ, ma hụ ihe na-adịghị.",
          quickCheck: [
            { objective: "O1", q: "Kedu nke bụ nri na-ewu ahụ?", options: ["Akpụ", "Agwa", "Osikapa", "Shuga"], answer: 1, why: "Agwa nwere ọtụtụ protein, nke na-ewu ahụ." },
            { objective: "O1", q: "Otu ezinụlọ na Accra riri naanị banku na ofe ose ụbọchị niile. Kedu otu nri na-adịghị nke ukwuu?", options: ["Nri na-enye ike", "Nnu", "Nri na-ewu ahụ na nri na-echebe ahụ", "Ọ dịghị"], answer: 2, why: "Banku bụ nri na-enye ike; nri ahụ chọrọ azụ ma ọ bụ agwa na akwụkwọ nri." }
          ]
        },
        {
          title: "Ịhazi efere nri ziri ezi",
          objectives: ["O2"],
          minutes: 5,
          goal: "Hazie efere nri ziri ezi nwere nri na-eju afọ, nri na-ewu ahụ na akwụkwọ nri ma ọ bụ mkpụrụ osisi.",
          text: [
            "Ntụziaka dị mfe maka isi nri ọ bụla: ihe dị ka ọkara efere ahụ bụ akwụkwọ nri na mkpụrụ osisi, ihe dị ka otu ụzọ n'ụzọ anọ bụ nri na-eju afọ, ihe dị ka otu ụzọ n'ụzọ anọ bụ nri na-ewu ahụ. Ọ dịghị mkpa ka i nwee ezi efere; chee banyere efere miri emi ma ọ bụ tree a na-ekerịta n'otu akụkụ ndị ahụ.",
            "WHO na-adụ ndị okenye ọdụ ka ha rie opekata mpe gram 400 nke mkpụrụ osisi na akwụkwọ nri kwa ụbọchị, nke dị ka aka ise juru eju. Akwụkwọ nri esiri n'ofe ma ọ bụ stew na-agụ. Mkpụrụ ọka zuru oke na nri a na-egwechaghị egwecha, dị ka osikapa na-acha aja aja, ọka okpoko, sorghum ma ọ bụ ntụ ọka zuru oke, na-eme ka afọ jupụta ogologo oge.",
            "Mee obere mgbanwe, ọ bụghị kichin ọhụrụ. Tinye otu aka akwụkwọ nri n'ime stew. Tinye agwa n'osikapa (waakye na Ghana, osikapa na agwa na Nigeria, githeri na Kenya). Tinye obere azụ ma ọ bụ akwa maka ụmụaka. Rie mkpụrụ osisi dị n'oge ya kama nri ụtọ.",
            "Iji nyere ahụ aka iji iron si n'agwa na akwụkwọ nri, rie ha na nri nwere vitamin C dị ka tomato, oroma, gova ma ọ bụ mango. Ṅụọ tii ma ọ bụ kọfị n'etiti oge nri, ọ bụghị ya na nri, n'ihi na ha na-eme ka o sie ike ịnara iron."
          ],
          steps: ["Were obi gị hụ efere ahụ n'akụkụ anọ.", "Jupụta ihe dị ka ọkara ya na akwụkwọ nri na mkpụrụ osisi.", "Jupụta ihe dị ka otu ụzọ n'ụzọ anọ na nri na-eju afọ.", "Jupụta ihe dị ka otu ụzọ n'ụzọ anọ na nri na-ewu ahụ.", "Tinye nri nwere vitamin C; debe tii maka n'etiti oge nri."],
          words: [["Ziri ezi (balanced)", "nri nwere ngwakọta otu nri kwesịrị ekwesị."], ["Mkpụrụ ọka zuru oke (whole grain)", "mkpụrụ ọka a hapụrụ akpụkpọ ya n'elu, dị ka osikapa na-acha aja aja, ọka okpoko ma ọ bụ ntụ ọka zuru oke."]],
          slides: [
            { title: "Efere nri ziri ezi", bullets: ["Ihe dị ka ọkara: akwụkwọ nri na mkpụrụ osisi", "Ihe dị ka otu ụzọ n'ụzọ anọ: nri na-eju afọ", "Ihe dị ka otu ụzọ n'ụzọ anọ: nri na-ewu ahụ"] },
            { title: "Mkpụrụ osisi na akwụkwọ nri", bullets: ["WHO: opekata mpe 400 g kwa ụbọchị maka ndị okenye", "Ihe dị ka aka ise juru eju", "Akwụkwọ nri n'ofe ma ọ bụ stew na-agụ"] },
            { title: "Obere mgbanwe", bullets: ["Akwụkwọ nri na stew; agwa n'osikapa", "Akwa ma ọ bụ azụ maka ụmụaka", "Mkpụrụ osisi dị n'oge ya kama swiit"] },
            { title: "Nyere iron aka ịrụ ọrụ", bullets: ["Rie agwa na akwụkwọ nri na tomato, oroma ma ọ bụ mango", "Tii na kọfị n'etiti oge nri, ọ bụghị ya na nri"] }
          ],
          sources: [WHO_DIET, WHO_ANAEMIA],
          tryIt: "Hazie isi nri echi site na nri i nweelarị. See efere (ma ọ bụ efere miri emi) ahụ ma dee ihe ga-abanye n'akụkụ ọ bụla. Tinye otu nri nwere vitamin C.",
          youCanNow: "ịhazi efere nri ziri ezi nwere nri na-eju afọ, nri na-ewu ahụ na ọtụtụ akwụkwọ nri ma ọ bụ mkpụrụ osisi.",
          quickCheck: [
            { objective: "O2", q: "N'efere nri ziri ezi, ihe dị ka ole kwesịrị ịbụ akwụkwọ nri na mkpụrụ osisi?", options: ["Ihe dị ka ọkara", "Ọ dịghị", "Obere nkuku", "Ya niile"], answer: 0, why: "Ihe dị ka ọkara efere akwụkwọ nri na mkpụrụ osisi bụ ntụziaka dị mfe." },
            { objective: "O2", q: "Gịnị mere a ga-eji rie tomato ma ọ bụ oroma na agwa na akwụkwọ nri?", options: ["Ha na-etinye nnu", "Ha na-enyere ahụ aka ịnara iron", "Ha na-anọchi agwa", "Ha na-eme ka nri ahụ dịgide ogologo oge"], answer: 1, why: "Vitamin C na-enyere ahụ aka iji iron si na nri osisi." }
          ]
        },
        {
          title: "Obere nnu, shuga na mmanụ, na nri dị nchebe",
          objectives: ["O3"],
          minutes: 5,
          goal: "Gbanwee usoro isi nri ka o jiri obere nnu, shuga na mmanụ, ma gbasoo ụzọ ise maka nri dị nchebe.",
          text: [
            "Nnu karịrị akarị na-ebuli ọbara mgbali, nke nwere ike ibute ọrịa strok na ọrịa obi. WHO na-adụ ndị okenye ọdụ ka ha rie nnu na-erughị gram 5 kwa ụbọchị, nke na-erughị otu ngaji tii dị larịị, gụnyere nnu niile dị na kubu ose, ntụ ose (seasoning), azụ e tinyere nnu na achịcha. Jiri obere nnu na kubu ole na ole, ma tinye ụtọ site na yabasị, galik, jinja, ose na akwụkwọ nri na-esi ísì ụtọ. Ọ bụrụ na ị na-eji nnu, họrọ nnu nwere iodine (iodized salt).",
            "Shuga: WHO na-adụ ọdụ ka a debe shuga efu (shuga a gbakwunyere na nri na ihe ọṅụṅụ, na shuga dị na mmanụ aṅụ, mmanya ụtọ (soda) na mmiri mkpụrụ osisi) ka ọ ghara ịgafe 10% nke ike ụbọchị, ma nke dị ala karị ka mma. Maka ọtụtụ ndị okenye, nke ahụ na-erughị ihe dị ka ngaji tii 12 dị larịị kwa ụbọchị. Tii ụtọ, soda na mmiri mkpụrụ osisi na-agbakọ ngwa ngwa. Mmanụ: jiri ntakịrị, ghee nri ugboro ole na ole; sie, sie n'uzuoku ma ọ bụ mee stew kama.",
            "Nri dị nchebe na-egbochi afọ ọsịsa na nsị nri. Ụzọ ise WHO maka nri dị nchebe: debe ihe ọcha (saa aka na ebe ị na-arụ ọrụ); kewapụ nri na-esibeghị na nri esiri esi; sie nri nke ọma, karịsịa anụ, azụ na akwa; debe nri n'okpomọkụ dị mma (ahapụla nri esiri esi n'èzí ọtụtụ awa); ma jiri mmiri dị ọcha na nri ọhụrụ dị mma.",
            "Iwu ndị a dị mkpa karịa ma ọ bụrụ na ị na-ere nri esiri esi, n'ihi na otu mmejọ nwere ike ime ka ọtụtụ ndị na-azụ ihe daa ọrịa."
          ],
          steps: ["Gụọ nnu, kubu na shuga dị n'otu usoro isi nri ị na-emekarị.", "Belata nke ọ bụla ntakịrị, ma tinye yabasị, galik, ose ma ọ bụ akwụkwọ na-esi ísì ụtọ.", "Họrọ ime stew ma ọ bụ isi kama ighe nri otu ugboro n'izu.", "Lelee usoro isi nri ahụ na ụzọ ise maka nri dị nchebe."],
          words: [["Nnu nwere iodine (iodized salt)", "nnu a gbakwunyere iodine, nke ahụ chọrọ."], ["Shuga efu (free sugars)", "shuga a gbakwunyere na nri na ihe ọṅụṅụ, gbakwunyere shuga dị na mmanụ aṅụ, sirop na mmiri mkpụrụ osisi."], ["Nsị nri (food poisoning)", "ọrịa na-esi n'iri nri nwere nje ma ọ bụ nsi n'ime ya."]],
          slides: [
            { title: "Obere nnu", bullets: ["WHO: na-erughị 5 g kwa ụbọchị, na-erughị otu ngaji tii dị larịị", "Gụọ kubu, ntụ ose, azụ nwere nnu na achịcha", "Tinye yabasị, galik, ose, akwụkwọ ísì ụtọ; jiri nnu nwere iodine"] },
            { title: "Obere shuga na mmanụ", bullets: ["WHO: shuga efu na-erughị 10% nke ike, nke dị ala ka mma", "Tii ụtọ, soda na mmiri mkpụrụ osisi na-agbakọ ngwa ngwa", "Ghee obere: sie, sie n'uzuoku ma ọ bụ mee stew"] },
            { title: "Ụzọ ise maka nri dị nchebe (WHO)", bullets: ["Debe ihe ọcha; kewapụ nri na-esibeghị na nke esiri esi", "Sie nke ọma; debe nri n'okpomọkụ dị mma", "Jiri mmiri dị ọcha na nri dị mma"] }
          ],
          sources: [WHO_DIET, WHO_FIVE_KEYS],
          tryIt: "Were otu nri ezinụlọ gị na-erikarị, dị ka jollof rice, ofe egusi, thieboudienne ma ọ bụ stew agwa. Dee mgbanwe abụọ na-ebelata nnu, shuga ma ọ bụ mmanụ, na otu ụzọ nri dị nchebe ị ga-eme mgbe ị na-esi ya.",
          youCanNow: "ịgbanwe usoro isi nri ka o jiri obere nnu, shuga na mmanụ, ma debe nri n'enweghị nsogbu site n'ụzọ ise ahụ.",
          quickCheck: [
            { objective: "O3", q: "Kedu mgbanwe na-ebelata nnu na stew?", options: ["Tinye kubu abụọ ọzọ", "Tinye azụ nwere nnu na nnu ọzọ", "Jiri kubu ole na ole ma tinye yabasị, galik na ose", "Tinye ntụ ose ọzọ"], answer: 2, why: "Kubu na ntụ ose nwere nnu; akwụkwọ ísì ụtọ na ngwa nri na-enye ụtọ na-enweghị nnu." },
            { objective: "O3", q: "Kedu nke bụ otu n'ime ụzọ ise WHO maka nri dị nchebe?", options: ["Hapụ nri esiri esi n'èzí ụbọchị niile", "Kewapụ nri na-esibeghị na nri esiri esi", "Jiri otu osisi ebe a na-egbu anụ maka anụ na-esibeghị na salad n'asaghị ya", "Detụ anụ na-esibeghị ire ka ị lelee ya"], answer: 1, why: "Ikewapụ nri na-esibeghị na nri esiri esi na-egbochi nje ịgbasa." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Mata nri gị",
        questions: [
          { objective: "O1", q: "Kedu nke bụ nri na-echebe ahụ (glow)?", options: ["Kontomire (akwụkwọ ede)", "Garri", "Mmanụ nkwụ", "Achịcha ọcha"], answer: 0, why: "Akwụkwọ nri na-acha akwụkwọ ndụ bụ nri na-echebe ahụ jupụtara na vitamin." },
          { objective: "O1", q: "Kedu nri na-enye iron iji nyere aka gbochie anaemia?", options: ["Shuga", "Soda", "Obere azụ a mịrị amị dị ka omena", "Tii"], answer: 2, why: "Obere azụ a mịrị amị, agwa, akwa na akwụkwọ nri gbara ọchịchịrị na-enye iron." },
          { objective: "O2", q: "Kedu nri kacha zie ezi?", options: ["Osikapa na soda", "Ugali, agwa na sukuma wiki", "Achịcha na tii ụtọ", "Garri na shuga"], answer: 1, why: "O nwere nri na-eju afọ, nri na-ewu ahụ na akwụkwọ nri." },
          { objective: "O2", q: "Ihe dị ka ole mkpụrụ osisi na akwụkwọ nri ka WHO na-adụ ndị okenye ọdụ ka ha rie kwa ụbọchị?", options: ["Otu iberi", "Ọ dịghị", "Naanị na Sọnde", "Opekata mpe 400 g, ihe dị ka aka ise juru eju"], answer: 3, why: "WHO na-adụ ọdụ opekata mpe 400 g kwa ụbọchị maka ndị okenye." },
          { objective: "O3", q: "WHO na-adụ ndị okenye ọdụ ka nnu ha ghara ịgafe:", options: ["5 g kwa ụbọchị, na-erughị otu ngaji tii dị larịị", "Otu iko kwa ụbọchị", "Ngaji tii iri kwa ụbọchị", "Ọ dịghị oke"], answer: 0, why: "Nnu na-erughị 5 g kwa ụbọchị na-ebelata ihe ize ndụ nke ọbara mgbali elu." }
        ]
      }
    },
    {
      name: "Isi 2: Iri nri ọma n'ego nta",
      lessons: [
        {
          title: "Iji ọnụahịa nri tụnyere ibe ya maka uru",
          objectives: ["O4"],
          minutes: 5,
          goal: "Jiri ọnụahịa nri dị n'otu otu tụnyere ibe ya ịchọta nke ka baa uru.",
          text: [
            "Nri ọma adịghị mkpa ịdị oke ọnụ. Aghụghọ ya bụ iji nri na-arụ otu ọrụ ahụ tụnyere ibe ya. Maka nri na-ewu ahụ, jiri ihe otu nri ezinụlọ nke ọ bụla na-efu tụnyere agwa, lentil, akidi, ahụekere, akwa, obere azụ a mịrị amị na anụ. Agwa na obere azụ na-enyekarị ọtụtụ ihe n'obere ego.",
            "Otu esi atụnyere: dee ọnụahịa na ole ị na-enweta, wee gbakọọ ego maka otu nri ezinụlọ. Ihe atụ (nọmba e chepụtara echepụta, ọ bụghị ezi ọnụahịa): otu iko agwa kpọrọ nkụ na-efu NGN 600 ma na-azụ ezinụlọ otu ugboro; anụ maka otu nri ahụ na-efu NGN 3,000. Agwa dị ọnụ ala ugboro ise maka nri ahụ. Jiri ọnụahịa ahịa gị; ha na-agbanwe site n'oge ruo n'oge.",
            "Ụzọ isi chekwaa ego: zụta mkpụrụ osisi na akwụkwọ nri n'oge ha, mgbe ha kacha dị ọnụ ala. Zụta nri kpọrọ nkụ (agwa, mkpụrụ ọka, azụ a mịrị amị) n'ọtụtụ ya na ndị agbata obi gị ma ọ bụ otu nchekwa ego gị ma kerịta ya. Kụọ akwụkwọ nri dị ka inine (amaranth), kale, moringa ma ọ bụ spinach n'obere ubi, n'akpa ma ọ bụ n'ime tin. Belata soda, swiit na nri nta n'akpa, ndị na-efu ọtụtụ ego ma na-enye obere uru.",
            "Emefula ihe: debe nri kpọrọ nkụ n'ihe nchekwa mechiri emechi, kpọrọ nkụ, nke dị anya site na mmiri na ụmụ ahụhụ, ma jiri nri fọdụrụ n'enweghị nsogbu n'echi ya."
          ],
          steps: ["Họrọ otu otu nri, dịka ọmụmaatụ nri na-ewu ahụ.", "Dee ọnụahịa na ole maka nri atọ dị n'otu ahụ.", "Gbakọọ ego maka otu nri ezinụlọ nke ọ bụla.", "Họrọ nke kacha baa uru, ma dee nri ndị dị n'oge ha."],
          words: [["Uru (value)", "ole nri ọma ị na-enweta n'ego gị."], ["N'oge ya (in season)", "oge n'afọ mgbe a na-ewe ihe ubi, ya mere ọ dị ukwuu ma dị ọnụ ala."]],
          slides: [
            { title: "Tụnyere ihe yiri ibe ya", bullets: ["Otu otu nri, otu ọrụ", "Ego maka otu nri ezinụlọ", "Agwa na obere azụ na-enyekarị ọtụtụ ihe n'obere ego"] },
            { title: "Otu esi atụnyere", bullets: ["Dee ọnụahịa na ole", "Gbakọọ ego maka otu nri ezinụlọ", "Jiri ọnụahịa ahịa gị; ha na-agbanwe"] },
            { title: "Ụzọ isi chekwaa ego", bullets: ["Zụta n'oge ya", "Zụta nri kpọrọ nkụ n'ọtụtụ ya na ndị agbata obi", "Kụọ akwụkwọ nri n'akpa ma ọ bụ tin; belata soda na nri nta"] }
          ],
          tryIt: "N'ahịa ma ọ bụ ụlọ ahịa gị, dee ọnụahịa na ole maka nri atọ na-ewu ahụ (dịka ọmụmaatụ agwa, akwa na azụ a mịrị amị). Jiri igwe mgbakọ ekwentị gị gbakọọ ego maka otu nri ezinụlọ nke ọ bụla. Gbaa okirikiri gburugburu nke kacha baa uru. Dee ego ahụ (KES, NGN, GHS, XOF, MAD ma ọ bụ nke gị).",
          youCanNow: "iji ego otu nri tụnyere ọnụahịa nri ma họrọ nke kacha baa uru n'otu nri ọ bụla.",
          quickCheck: [
            { objective: "O4", q: "Kedu ụzọ kacha ziri ezi isi tụnyere agwa na anụ?", options: ["Agba akpa ahụ", "Ụlọ ahịa kacha nso", "Nke dị arọ karịa", "Ego otu nri ezinụlọ nke ọ bụla"], answer: 3, why: "Ego maka otu nri na-atụnyere ihe ị na-enweta n'ezie n'ego ahụ." },
            { objective: "O4", q: "Naanị ihe atụ: agwa maka otu nri na-efu XOF 500, azụ maka otu nri na-efu XOF 1,500. Agwa dị ọnụ ala ugboro ole?", options: ["Ugboro 2", "Ugboro 3", "Ugboro 5", "Otu ihe ahụ"], answer: 1, why: "1,500 kewara 500 bụ 3." }
          ]
        },
        {
          title: "Inye ụmụaka na ụmụnwaanyị dị ime ma ọ bụ na-enye nwa ara nri",
          objectives: ["O5"],
          minutes: 6,
          goal: "Hazie nri otu ụbọchị maka nwatakịrị ma ọ bụ nwaanyị dị ime ma ọ bụ na-enye nwa ara, na-agbaso ndụmọdụ WHO.",
          text: [
            "Ụmụaka na-eto ngwa ngwa ma nwee obere afọ, ya mere ha chọrọ obere nri ugboro ugboro jupụtara na nri ọma. WHO na-adụ ọdụ ka a nye naanị mmiri ara nne n'ime ọnwa 6 mbụ. Site n'ihe dị ka ọnwa 6, tinye nri ezinụlọ dị nro, a kụrụ akụ, ma gaa n'ihu na-enye ara ruo afọ 2 ma ọ bụ karịa. Malite n'obere, ma nwayọọ nwayọọ nye ọzọ, nri gbara ogbu karịa na ụdị dị iche iche.",
            "Ugboro ole (WHO): nri 2 ruo 3 kwa ụbọchị maka ụmụ ọhụrụ dị ọnwa 6 ruo 8; nri 3 ruo 4 kwa ụbọchị maka ụmụaka dị ọnwa 9 ruo 23, gbakwunyere nri nta 1 ruo 2 ma ọ bụrụ na ọ dị mkpa. Mee ka akamụ (pap) gbaa ogbu ruo na ọ ga-anọ n'ngaji, ma tinye ihe si n'otu nri ọzọ: agwa a kụrụ akụ ma ọ bụ ahụekere a gwere egwe, akwa, obere azụ a gwere ka ọ bụrụ ntụ, akwụkwọ nri a kụrụ akụ ma ọ bụ mkpụrụ pawpaw. Nye nwatakịrị ahụ efere nke ya ka ị hụ ole ọ na-eri.",
            "Ụmụnwaanyị dị ime na ndị na-enye nwa ara chọrọ nri ọma karịa, ọ bụghị naanị nri na-eju afọ karịa. Tinye obere nri ọzọ ma ọ bụ nri nta kwa ụbọchị, nwere nri nwere iron (agwa, obere azụ, akwa, imeju, akwụkwọ nri gbara ọchịchịrị) e riri ya na nri nwere vitamin C. Gaa nleta ime (antenatal) niile ma were naanị ọgwụ mgbakwunye ụlọ ọgwụ nyere gị.",
            "Mgbe nwatakịrị na-arịa ọrịa, WHO na-adụ ọdụ ka e nye ya ihe ọṅụṅụ karịa na ara karịa, na nri dị nro ọ kacha hụ n'anya. Mgbe ọrịa ahụ gachara, nye ya nri gbakwunyere ka o nwee ike ịlaghachi. Ọ bụrụ na nwatakịrị anaghị eto nke ọma ma ọ bụ dị oke ọkpụkpụ ma ọ bụ zaa aza, gaa n'ụlọ ọgwụ."
          ],
          steps: ["Lelee afọ nwatakịrị ahụ n'ọnwa.", "Hazie ọnụọgụ nri maka afọ ahụ.", "Mee ka nri ọ bụla gbaa ogbu ma tinye otu nri ọzọ.", "Maka nwaanyị dị ime ma ọ bụ na-enye nwa ara: tinye nri nta nwere nri nwere iron na vitamin C."],
          words: [["Nri mgbakwunye (complementary feeding)", "inye nri ezinụlọ site n'ihe dị ka ọnwa 6 mgbe a na-aga n'ihu na-enye ara."], ["Nri nta (snack)", "obere nri n'etiti oge nri, dị ka ogede, ahụekere ma ọ bụ akwa."]],
          slides: [
            { title: "Ụmụ ọhụrụ na ụmụaka (WHO)", bullets: ["Ọnwa 0-6: naanị mmiri ara nne", "Site n'ihe dị ka ọnwa 6: nri ezinụlọ dị nro na mmiri ara nne", "Gaa n'ihu na-enye ara ruo afọ 2 ma ọ bụ karịa"] },
            { title: "Ugboro ole", bullets: ["Ọnwa 6-8: nri 2-3 kwa ụbọchị", "Ọnwa 9-23: nri 3-4 kwa ụbọchị, gbakwunyere nri nta 1-2", "Akamụ gbara ogbu na otu nri ọzọ"] },
            { title: "Ụmụnwaanyị dị ime na ndị na-enye nwa ara", bullets: ["Obere nri ọzọ ma ọ bụ nri nta", "Nri nwere iron na vitamin C", "Naanị ọgwụ mgbakwunye ụlọ ọgwụ nyere"] },
            { title: "Nwatakịrị na-arịa ọrịa", bullets: ["Ihe ọṅụṅụ karịa na ara karịa", "Nri dị nro ọ hụrụ n'anya; nri gbakwunyere mgbe e mesịrị", "Anaghị eto nke ọma: gaa n'ụlọ ọgwụ"] }
          ],
          sources: [WHO_IYCF, WHO_ANAEMIA],
          tryIt: "Hazie nri otu ụbọchị maka nwatakịrị dị ọnwa 10 (dịka ọmụmaatụ na Douala ma ọ bụ Kumasi) ma ọ bụ maka nne na-enye nwa ara. Dee nri ọ bụla na nri nta ọ bụla na otu nri ha na-ekpuchi.",
          youCanNow: "ịhazi nri otu ụbọchị maka nwatakịrị ma ọ bụ nwaanyị dị ime ma ọ bụ na-enye nwa ara nke na-agbaso ndụmọdụ WHO.",
          quickCheck: [
            { objective: "O5", q: "Nri ole kwa ụbọchị ka WHO na-adụ ọdụ maka nwa ọhụrụ dị ọnwa 7?", options: ["2 ruo 3", "1", "6 ruo 8", "Ọ dịghị; naanị mmiri ara nne"], answer: 0, why: "WHO na-adụ ọdụ nri 2 ruo 3 kwa ụbọchị n'ọnwa 6 ruo 8, ya na inye ara." },
            { objective: "O5", q: "Kedu akamụ kacha mma maka nwa dị ọnwa 9?", options: ["Akamụ dị mmiri mmiri nwere shuga", "Naanị tii", "Akamụ gbara ogbu nwere ahụekere a gwere egwe ma ọ bụ akwa a kụrụ akụ", "Soda"], answer: 2, why: "Akamụ gbara ogbu nwere otu nri ọzọ na-enye ihe na-edozi ahụ karịa n'obere afọ." }
          ]
        },
        {
          title: "Ide atụmatụ nri izu n'ego nta",
          objectives: ["O6"],
          minutes: 6,
          goal: "Dee atụmatụ nri izu na ndepụta ihe ị ga-azụ n'ahịa dabara n'ego gị.",
          text: [
            "Atụmatụ na-echekwa ego ma na-eme ka iri nri ọma dị mfe. Malite n'ego nri gị maka izu ahụ. Wee hazie isi nri, na-eji nri na-eju afọ dị ọnụ ala, agwa ma ọ bụ obere azụ ọtụtụ ụbọchị, na akwụkwọ nri kwa ụbọchị. Hazie akwa, anụ ma ọ bụ ọkụkọ maka ụfọdụ ụbọchị ma ọ bụrụ na ego ahụ kwere.",
            "Megharịa nri ezinụlọ gị hụrụ n'anya, mana gbanwee akwụkwọ nri ma ọ bụ agwa ka ụdị nri dị iche iche. Sie agwa otu ugboro ma jiri ya mee nri abụọ. Buru ụzọ hazie nri nwatakịrị na nri nta maka nwaanyị dị ime ma ọ bụ na-enye nwa ara, ka ha ghara ịbụ ndị a hapụrụ mgbe ọ bụla.",
            "Site n'atụmatụ ahụ, dee ndepụta ihe ị ga-azụ n'ahịa nwere ọnụahịa ahịa gị, gbakọọ ha ma tụnyere ya na ego gị. Ọ bụrụ na ọ gafere, gbanwee nri dị oke ọnụ were nri dị ọnụ ala n'otu otu ahụ, ọ bụghị were ihe efu. Ihe atụ (nọmba e chepụtara echepụta): otu ezinụlọ na Nakuru nwere ego izu KES 2,500 na-agbanwe nri anụ abụọ were omena na agwa ka ha ghara ịgafe ya.",
            "Kwụba atụmatụ ahụ na mgbidi ma ọ bụ chekwaa foto ya n'ekwentị gị. Na njedebe izu, lelee ihe i mefuru na ihe i tụfuru, ma gbanwee atụmatụ izu na-esote."
          ],
          steps: ["Dee ego nri izu gị.", "Hazie isi nri maka ụbọchị asaa nwere ọtụtụ otu nri kwa ụbọchị.", "Buru ụzọ hazie nri maka ụmụaka na ụmụnwaanyị dị ime ma ọ bụ na-enye nwa ara.", "Dee ndepụta ihe ị ga-azụ n'ahịa nwere ọnụahịa gị ma gbakọọ ya.", "Ọ bụrụ na ọ gafere ego, gbanwee n'ime otu otu nri ahụ."],
          words: [["Ego nri (budget)", "ego ị na-ezube imefu."], ["Atụmatụ nri (meal plan)", "ndepụta ihe ị ga-esi maka ụbọchị ọ bụla."]],
          slides: [
            { title: "Malite n'ego gị", bullets: ["Ego nri izu", "Nri na-eju afọ dị ọnụ ala, agwa ma ọ bụ obere azụ", "Akwụkwọ nri kwa ụbọchị"] },
            { title: "Hazie nke ọma", bullets: ["Megharịa nri a hụrụ n'anya, gbanwee akwụkwọ nri", "Sie agwa otu ugboro, jiri ya ugboro abụọ", "Ụmụaka na ndị nne mbụ"] },
            { title: "Ndepụta ihe ị ga-azụ", bullets: ["Ọnụahịa ahịa gị", "Gbakọọ ma tụnyere ya na ego gị", "Ọ gafere? Gbanwee n'ime otu otu nri ahụ"] },
            { title: "Lelee ma dozie", bullets: ["Gịnị ka i mefuru?", "Gịnị ka a tụfuru?", "Gbanwee atụmatụ izu na-esote"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ nri otu izu gị. Maka ụbọchị ọ bụla depụta nri na otu nri, nwee mkpụrụ osisi ma ọ bụ akwụkwọ nri kwa ụbọchị; kaa akara n'nri maka nwatakịrị ọ bụla ma ọ bụ nwaanyị dị ime ma ọ bụ na-enye nwa ara; dee ndepụta ihe ị ga-azụ nwere ọnụahịa gị ma gbakọọ ya tụnyere ego gị; ma dee omume atọ ị ga-eji.",
          youCanNow: "ide atụmatụ nri izu na ndepụta ihe ị ga-azụ n'ahịa nke na-azụ ezinụlọ nke ọma n'ime ego gị.",
          quickCheck: [
            { objective: "O6", q: "Ndepụta ihe ị ga-azụ gafere ego gị. Kedu mgbanwe kacha mma?", options: ["Wepụ akwụkwọ nri niile", "Gbanwee nri dị oke ọnụ were nke dị ọnụ ala n'otu otu ahụ", "Nye ụmụaka obere nri", "Zụta soda ọzọ"], answer: 1, why: "Ịgbanwe n'ime otu otu nri na-eme ka nri ahụ zie ezi ma dị ọnụ ala." },
            { objective: "O6", q: "Nri onye ka ị ga-ebu ụzọ hazie?", options: ["Ndị ọbịa", "Naanị ndị okenye", "Ọ dịghị onye pụrụ iche", "Ụmụaka na ụmụnwaanyị dị ime ma ọ bụ na-enye nwa ara"], answer: 3, why: "Ha chọrọ nri ọma kacha, ya mere a gaghị ahapụ ha mgbe ọ bụla." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iri nri ọma n'ego nta",
        questions: [
          { objective: "O4", q: "Kedu ezigbo ụzọ isi chekwaa ego n'akwụkwọ nri?", options: ["Zụta naanị mgbe ha anọghị n'oge ha", "Zụta ha n'oge ha ma ọ bụ kụọ akwụkwọ nri n'akpa", "Zụta naanị nri nta n'akpa", "Zụta ugboro ole na ole ma hapụ ha ka ha rere ure"], answer: 1, why: "Ihe ubi dị n'oge ya dị ọnụ ala, akwụkwọ nri na-etokwa ngwa ngwa n'ụlọ." },
          { objective: "O4", q: "Naanị ihe atụ: 1 kg lentil na Casablanca na-efu MAD 20 ma na-eme nri ezinụlọ 4. Ego ole ka otu nri na-efu?", options: ["MAD 80", "MAD 4", "MAD 5", "MAD 24"], answer: 2, why: "20 kewara nri 4 bụ 5." },
          { objective: "O5", q: "Ruo afọ ole ka WHO na-adụ ọdụ ka a gaa n'ihu na-enye ara?", options: ["Afọ 2 ma ọ bụ karịa", "Ọnwa 6", "Otu ọnwa", "Ọ ga-akwụsị mgbe nri malitere"], answer: 0, why: "Inye ara na-aga n'ihu ya na nri ezinụlọ ruo afọ 2 ma ọ bụ karịa." },
          { objective: "O5", q: "Gịnị ka nne na-enye nwa ara kwesịrị itinye kwa ụbọchị?", options: ["Tii ụtọ ọzọ", "Ọ dịghị ihe", "Naanị osikapa ọzọ", "Obere nri ọzọ ma ọ bụ nri nta nwere nri nwere iron"], answer: 3, why: "Ọ chọrọ nri ọma karịa, karịsịa nri nwere iron." },
          { objective: "O6", q: "Gịnị bụ ihe mbụ ị ga-ede mgbe ị na-ahazi nri izu?", options: ["Ego nri izu gị", "Ndepụta ndị ọbịa", "Ịtụ soda", "Ọ dịghị ihe; naanị gaa zụta"], answer: 0, why: "Ego ahụ na-ekpebi ihe atụmatụ ahụ nwere ike ịgụnye." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Nri Na-edozi Ahụ n'Ego Nta site na Nri Obodo",
    questions: [
      { objective: "O1", q: "Kedu nke bụ nri na-enye ike (go)?", options: ["Sukuma wiki", "Ji", "Akwa", "Oroma"], answer: 1, why: "Ji bụ nri na-eju afọ nke na-enye ike." },
      { objective: "O1", q: "Kedu nke bụ nri na-ewu ahụ (grow)?", options: ["Ahụekere", "Akpụ", "Shuga", "Pawpaw"], answer: 0, why: "Ahụekere na-enye protein." },
      { objective: "O1", q: "Ji uto na-acha oroma, pawpaw na mango nwere ọtụtụ:", options: ["Nnu", "Ọ dịghị ihe bara uru", "Vitamin", "Mmanụ"], answer: 2, why: "Nri na-acha oroma nwere ọtụtụ vitamin." },
      { objective: "O1", q: "Anaemia na-esikarị na obere:", options: ["Shuga", "Nnu", "Mmanụ", "Iron"], answer: 3, why: "Ụkọ iron bụ ihe nri kacha ebute anaemia." },
      { objective: "O2", q: "N'efere nri ziri ezi, ihe dị ka otu ụzọ n'ụzọ anọ bụ:", options: ["Swiit", "Nri na-ewu ahụ", "Nnu", "Soda"], answer: 1, why: "Ihe dị ka otu ụzọ n'ụzọ anọ nri na-eju afọ, otu ụzọ n'ụzọ anọ nri na-ewu ahụ, ọkara akwụkwọ nri na mkpụrụ osisi." },
      { objective: "O2", q: "Olee mgbe ị ga-aṅụ tii ma ọ bụrụ na ị chọrọ inweta iron site na nri gị?", options: ["N'etiti oge nri", "Ya na nri ọ bụla", "Kama iri nri", "Ọ dịghị mkpa"], answer: 0, why: "Tii ya na nri na-eme ka o sie ike ịnara iron." },
      { objective: "O2", q: "Kedu obere mgbanwe na-eme ka osikapa zie ezi karịa?", options: ["Tinye nnu ọzọ", "Tinye shuga", "Tinye agwa na akwụkwọ nri", "Tinye soda"], answer: 2, why: "Agwa na akwụkwọ nri na-etinye nri na-ewu ahụ na nri na-echebe ahụ." },
      { objective: "O3", q: "Kedu nke na-ezo ọtụtụ nnu?", options: ["Tomato ọhụrụ", "Kubu ose na ntụ ose", "Agwa nkịtị", "Mkpụrụ osisi ọhụrụ"], answer: 1, why: "Kubu na ntụ ose nwere nnu nke ukwuu." },
      { objective: "O3", q: "Kedu ihe ọṅụṅụ na-etinye shuga efu kacha?", options: ["Mmiri dị ọcha", "Tii na-enweghị shuga", "Mmiri ara ehi nkịtị", "Otu karama soda"], answer: 3, why: "Soda jupụtara na shuga a gbakwunyere." },
      { objective: "O3", q: "Onye na-ere nri na Abidjan hapụrụ attiéké na azụ esiri esi n'èzí n'okpomọkụ n'ehihie niile. Kedu ụzọ ka o mebiri?", options: ["Debe nri n'okpomọkụ dị mma", "Sie nke ọma", "Jiri nnu nwere iodine", "Rie akwụkwọ nri karịa"], answer: 0, why: "Nje na-amụba ngwa ngwa na nri esiri esi a hapụrụ ka ọ dị ọkụ ọtụtụ awa." },
      { objective: "O3", q: "Ụzọ dị ọnụ ala ma dị mma karịa isi nri karịa ighe ya n'ọtụtụ mmanụ bụ:", options: ["Mmanụ ọzọ", "Ime stew, isi ma ọ bụ isi n'uzuoku", "Ighe ya ugboro abụọ", "Itinye shuga"], answer: 1, why: "Ime stew, isi na isi n'uzuoku na-eji obere mmanụ." },
      { objective: "O4", q: "Iji tụnyere uru, ị na-agbakọ:", options: ["Akpa kacha buo ibu n'anya", "Aha onye na-ere ya", "Ego maka otu nri ezinụlọ", "Ụlọ ahịa kacha nwee ndị mmadụ"], answer: 2, why: "Ego maka otu nri na-egosi ihe ị na-enweta n'ezie." },
      { objective: "O4", q: "Mkpụrụ osisi na akwụkwọ nri na-adịkarị ọnụ ala:", options: ["Mgbe ha anọghị n'oge ha", "Mgbe ha nọ n'oge ha", "N'akpa", "Naanị n'abalị"], answer: 1, why: "N'oge ha, ha dị ukwuu ma dị ọnụ ala." },
      { objective: "O4", q: "Naanị ihe atụ: akwa maka otu nri na-efu GHS 30, agwa na-efu GHS 10. Kedu nke ka baa uru maka nri ahụ?", options: ["Akwa", "Ha bụ otu", "Ọ dịghị nke ọ bụla", "Agwa"], answer: 3, why: "Ha abụọ bụ nri na-ewu ahụ, agwa na-efukwa otu ụzọ n'ụzọ atọ nke ego akwa." },
      { objective: "O5", q: "N'ime ọnwa 6 mbụ, nwa ọhụrụ chọrọ:", options: ["Naanị mmiri ara nne", "Mmiri na akamụ", "Tii", "Mmiri ara ehi na shuga"], answer: 0, why: "WHO na-adụ ọdụ naanị mmiri ara nne n'ime ọnwa 6 mbụ." },
      { objective: "O5", q: "Nwatakịrị dị ọnwa 12 kwesịrị iri ihe dị ka nri ole kwa ụbọchị?", options: ["Otu", "3 ruo 4, gbakwunyere nri nta 1 ruo 2 ma ọ dị mkpa", "Naanị mmiri ara nne", "Iri"], answer: 1, why: "WHO na-adụ ọdụ nri 3 ruo 4 maka ọnwa 9 ruo 23, gbakwunyere nri nta ma ọ dị mkpa." },
      { objective: "O5", q: "Mgbe nwatakịrị na-arịa ọrịa, WHO na-adụ ọdụ:", options: ["Kwụsị nri niile", "Kwụsị inye ara", "Ihe ọṅụṅụ karịa, ara karịa na nri dị nro ọ hụrụ n'anya", "Naanị mmiri"], answer: 2, why: "Ihe ọṅụṅụ na nri gbakwunyere na-enyere nwatakịrị aka ịgbake." },
      { objective: "O6", q: "Ezigbo atụmatụ nri izu nwere:", options: ["Naanị otu nri na-eju afọ, kwa ụbọchị", "Akwụkwọ nri naanị na Sọnde", "Enweghị ego e zubere", "Ọtụtụ otu nri kwa ụbọchị"], answer: 3, why: "Ụdị nri dị iche iche kwa ụbọchị bụ ebumnuche ya." },
      { objective: "O6", q: "Ụzọ dị ọnụ ala isi mee ka agwa gaa n'ihu n'atụmatụ ahụ bụ:", options: ["Isi ya otu ugboro ma jiri ya mee nri abụọ", "Ịtụfu nri fọdụrụ", "Isi ya kwa awa", "Ịzụta ya n'obere akpa"], answer: 0, why: "Isi otu ugboro na-echekwa nkụ ma ọ bụ gas na oge, nri fọdụrụ e debere nke ọma na-emekwa nri nke abụọ." },
      { objective: "O6", q: "Na njedebe izu, ị kwesịrị:", options: ["Ịtụfu atụmatụ ahụ", "Ilele ihe i mefuru na ihe i tụfuru, ma gbanwee atụmatụ izu na-esote", "Ime ka ego ahụ dị okpukpu abụọ", "Ịkwụsị ịhazi atụmatụ"], answer: 1, why: "Ilele ya na-enyere gị aka ime ka atụmatụ na-esote ka mma." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 5, 7, 9, 11, 14, 15, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Otu nri kwa ụbọchị", objective: "O1", notYet: "Ọtụtụ ụbọchị nwere naanị nri na-eju afọ, ma ọ bụ a kpọrọ otu nri aha n'ụzọ ezighi ezi.", meets: "Ụbọchị ọ bụla nwere nri na-enye ike, nri na-ewu ahụ na nri na-echebe ahụ, a kpọrọ ha aha nke ọma.", exceeds: "Ọ gụnyekwara akwụkwọ nri gbara ọchịchịrị ma ọ bụ nri na-acha oroma na nri nwere iron ọtụtụ ụbọchị." },
      { name: "Nri ziri ezi", objective: "O2", notYet: "Akwụkwọ nri ma ọ bụ mkpụrụ osisi adịghị n'ụbọchị ụfọdụ.", meets: "Akwụkwọ nri ma ọ bụ mkpụrụ osisi kwa ụbọchị, isi nri na-agbasokwa efere nri ziri ezi.", exceeds: "E jikọtara nri nwere iron na nri nwere vitamin C, a na-aṅụkwa tii n'etiti oge nri." },
      { name: "Nnu, shuga na nchebe", objective: "O3", notYet: "Ọ dịghị omume e depụtara, ma ọ bụ ha anaghị ebelata nnu ma ọ bụ shuga.", meets: "Ọ depụtara otu omume nnu, otu omume shuga na otu n'ime ụzọ ise maka nri dị nchebe.", exceeds: "Ọ na-egosi mgbanwe ndị ahụ n'usoro isi nri a kpọrọ aha n'atụmatụ ahụ." },
      { name: "Ego na ndepụta ihe a ga-azụ", objective: "O4", notYet: "Ọ dịghị ọnụahịa, ma ọ bụ ngụkọta ezighi ezi ma ọ bụ gafere ego n'enweghị mgbanwe.", meets: "Ndepụta ihe a ga-azụ nwere ọnụahịa ahịa nke ya na ngụkọta ziri ezi n'ime ego ahụ.", exceeds: "Ọ na-egosi opekata mpe otu mgbanwe maka uru n'ime otu otu nri ma dee nri dị n'oge ha." },
      { name: "Inye ndị kacha chọọ ya nri", objective: "O5", notYet: "Ọ dịghị atụmatụ maka nwatakịrị ma ọ bụ nwaanyị dị ime ma ọ bụ na-enye nwa ara n'ezinụlọ ahụ.", meets: "Nri na nri nta na-agbaso ndụmọdụ WHO maka afọ nwatakịrị ahụ ma ọ bụ maka nwaanyị ahụ.", exceeds: "E dere akamụ gbara ogbu nwere otu nri ọzọ, na ọnụọgụ nri ziri ezi, maka ụbọchị ọ bụla." },
      { name: "Atụmatụ izu", objective: "O6", notYet: "Ụbọchị ụfọdụ adịghị.", meets: "Nri ụbọchị asaa, dị njikere ịkwụba na mgbidi ma ọ bụ itinye n'ekwentị.", exceeds: "Ọ na-eji nri fọdụrụ n'enweghị nsogbu ma na-emegharị nri a hụrụ n'anya n'ụdị dị iche iche." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe kwuru na ha na-eri akwụkwọ nri ma ọ bụ mkpụrụ osisi kwa ụbọchị na agwa ma ọ bụ obere azụ ọtụtụ ụbọchị mgbe ụbọchị 30 gachara (nnyocha nsochi)",
      "Ezinụlọ ndị kwuru na ha na-eji atụmatụ nri izu ma na-anọgide n'ime ego nri ha",
      "Ndị na-amụ ihe kwuru na ha belatara kubu ose, nnu ma ọ bụ ihe ọṅụṅụ nwere shuga",
      "Ụlọ ọgwụ mmekọ ma ọ bụ ndị ọrụ ahụike obodo na-akọ na e nwere ka mma n'inye ụmụaka dị ọnwa 6 ruo 23 nri n'ezinụlọ ndị na-amụ ihe"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị nkịtị nwere igwe mgbakọ, ma ọ bụ akwụkwọ na mkpịsị ode",
      "Ọnụahịa si n'ahịa ma ọ bụ ụlọ ahịa obodo maka nkuzi ọnụahịa",
      "Efere, efere miri emi ma ọ bụ ihe e sere ese iji gosi efere nri ziri ezi",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke"
    ],
    facilitatorNotes: [
      "Ezigbo ndị mmekọ: otu ụmụnwaanyị, otu nchekwa ego, ụlọ akwụkwọ, ụlọ ọgwụ na ndị ọrụ ahụike obodo; igosi otu esi esi nri site na nri obodo na-arụ ọrụ nke ọma.",
      "Jiri nri na ọnụahịa nke obodo gị; ọnụahịa dị n'ihe ọmụmụ a bụ naanị ihe atụ.",
      "Enyela nri maka ọrịa ma ọ bụ ndụmọdụ banyere ọgwụ mgbakwunye; zipu ajụjụ ndị ahụ n'ụlọ ọgwụ ma ọ bụ n'aka ọkachamara nri.",
      "Nwee obi nghọta: ụfọdụ ndị na-amụ ihe nwere ike ọ gaghị enwe nri zuru ezu. Lekwasị anya na mgbanwe dị ọnụ ala ma gosi ha enyemaka nri obodo ebe ọ dị.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
