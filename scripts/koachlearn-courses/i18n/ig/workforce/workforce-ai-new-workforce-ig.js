"use strict";

// Koach Learn course (Igbo translation of workforce/workforce-ai-new-workforce.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const BLS_OOH = { name: "US Bureau of Labor Statistics (ụlọ ọrụ gọọmentị US na-ahụ maka ọnụ ọgụgụ ọrụ): Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" };
const CAREERONESTOP = { name: "CareerOneStop (US Department of Labor): chọta ọzụzụ na American Job Centers", url: "https://www.careeronestop.org/" };

module.exports = {
  id: "workforce-ai-new-workforce-ig",
  lang: "ig",
  translationOf: "workforce-ai-new-workforce",
  category: "Workforce Development",
  name: "AI n'Ụwa Ọrụ Ọhụrụ",
  skills: "Ịghọta otu AI si agbanwe ọrụ, Ikewa ọrụ gị n'obere ọrụ, Ịhụ ọrụ AI nwere ike inyere aka, Ịchọta ezi ozi gbasara ọdịnihu ọrụ, Ime atụmatụ ụbọchị 90 maka ịmụ nka ọhụrụ, Ịkọrọ ndị were mmadụ n'ọrụ banyere nka AI gị",
  outcome: "ikewa ọrụ gị ugbu a ma ọ bụ ọrụ ị chọrọ n'obere ọrụ, kaa akara ndị AI nwere ike inyere aka na ndị chọrọ nka mmadụ, lelee ọdịnihu ọrụ gị n'isi iyi gọọmentị, ma mee ya ka ọ ghọọ atụmatụ ụbọchị 90 maka ịmụ nka ọhụrụ na obere ụzọ eziokwu isi kọwaa nka AI gị nye onye were gị n'ọrụ.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị na-achọ ọrụ na ndị na-arụ ọrụ na-anụ mgbe niile na AI ga-agbanwe ọrụ, ma chọọ ịmata ihe ọ pụtara nye ha: ndị ọrụ ụlọ nkwakọba ngwaahịa na mbufe ngwaahịa, ndị ọrụ ụlọ ahịa na ndị na-elekọta ndị ahịa, ndị ọrụ ọfịs, ndị na-enyere aka n'ahụike, ndị ọrụ aka na ndị ọkwọ ụgbọala.",
    "Ị ga-amụta na AI na-agbanwekarị obere ọrụ kama ọrụ dum, lee ọrụ gị otu otu, chọta ezi ozi gbasara ọrụ gị, ma mee atụmatụ bara uru iji wulite nka ga-eme ka ị ka bụrụ onye bara uru. Ị ga-emecha site n'ịmụ otu esi ekwu maka nka AI n'ajụjụ ọnụ ọrụ ma ọ bụ mgbe gị na onye isi gị na-akparịta ụka.",
    "Anyị anaghị ebu amụma ọrụ ndị ga-apụ n'anya, ọ dịghịkwa ihe ọmụmụ nwere ike ikwe nkwa ọrụ ma ọ bụ mmụba ụgwọ ọnwa. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee atụmatụ ọrụ AI nke gị: ndepụta obere ọrụ dị n'ọrụ gị ugbu a ma ọ bụ ọrụ ị chọrọ, nke ọ bụla nwere akara \"AI nwere ike inye aka\", \"nka mmadụ\" ma ọ bụ \"ha abụọ\"; eziokwu atọ gbasara ọrụ gị site na BLS Occupational Outlook Handbook; atụmatụ ụbọchị 90 nwere nka atọ, ihe enyemaka n'efu na oge kwa izu; na azịza sekọnd 30 nye \"Kedu otu i si eji AI n'ọrụ gị?\" nke bụ eziokwu ma doo anya.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị na-achọ ọrụ na ndị okenye na-arụ ọrụ na-anụ mgbe niile na AI ga-agbanwe ọrụ: ndị ọrụ ụlọ nkwakọba ngwaahịa na mbufe ngwaahịa, ndị ọrụ ụlọ ahịa na ndị na-elekọta ndị ahịa, ndị ọrụ ọfịs, ndị na-enyere aka n'ahụike, ndị ọrụ aka na ndị ọkwọ ụgbọala.",
    startingPoint: "Ha maara ọrụ ha nke ọma, ha nwekwara ike iji smartphone ma ọ bụ kọmputa. Ọtụtụ na-atụ egwu ma ọ bụ enweghị obi ike banyere AI, ha elebeghị ozi gọọmentị gbasara ọdịnihu ọrụ, ha enweghịkwa atụmatụ e dere ede maka ịmụ nka ọhụrụ.",
    gap: "AI na-agbanwe obere ọrụ ndị na-ewe oge n'ọtụtụ ọrụ. Ndị na-amụ ihe kwesịrị ịhụ obere ọrụ ha AI nwere ike inyere aka na ndị chọrọ nka mmadụ, lelee ọdịnihu ọrụ ha n'isi iyi gọọmentị, ma gbasoo atụmatụ ezi uche iji wulite nka ha nwere ike ịkọwa n'eziokwu nye onye were ha n'ọrụ.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a naghị atụ anya ihe ọmụma teknụzụ",
      "Ngwaọrụ: smartphone ma ọ bụ kọmputa nwere ịntanetị; ọtụtụ na-eji kọmputa ọba akwụkwọ ma ọ bụ nke American Job Center",
      "Oge: nkuzi nke ihe dị ka nkeji 5, na atụmatụ awa ole na ole kwa izu n'akụkụ ọrụ na ezinụlọ",
      "Nzuzo na iwu: enweghị ozi nzuzo ma ọ bụ ozi nzuzo ụlọ ọrụ n'ime ngwa AI; iwu AI nke onye were gị n'ọrụ na-ebu ụzọ",
      "Nọmba ọdịnihu ọrụ na-esi na peeji gọọmentị BLS, ọ bụghị site n'AI"
    ],
    prerequisites: "Ọ dịghị. Ndị bụ ndị ọhụrụ n'iji ngwa enyemaka AI nwere ike iwere \"Essential AI Tools for the Workplace\" (Ngwa AI Dị Mkpa n'Ebe Ọrụ) n'otu oge ahụ."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ọrụ gị ugbu a ma ọ bụ nke ikpeazụ", action: "idepụta opekata mpe obere ọrụ asatọ dị n'ọrụ ahụ ma kọwaa otu AI si emetụta obere ọrụ kama ọrụ dum", standard: "n'okwu nke gị" },
    { id: "O2", condition: "Mgbe e nyere gị ndepụta obere ọrụ gị", action: "ịkpọ obere ọrụ ọ bụla aha \"AI nwere ike inye aka\", \"nka mmadụ\" ma ọ bụ \"ha abụọ\"", standard: "ebe obere ọrụ ọ bụla nwere aha, gị onwe gị na-ekpebi n'ikpeazụ" },
    { id: "O3", condition: "Maka ọrụ gị ugbu a ma ọ bụ ọrụ ị chọrọ", action: "ịchọ ọdịnihu ọrụ ahụ na BLS Occupational Outlook Handbook ma chọta American Job Center kacha nso gị", standard: "nwere eziokwu atọ e wepụtara site na peeji gọọmentị ahụ" },
    { id: "O4", condition: "Mgbe e nyere gị mgbasa ozi ọrụ atọ n'ezie maka ọrụ ị chọrọ", action: "ịhọrọ nka atọ ị ga-amụ ma kọwaa ihe mere nke ọ bụla ji dị mkpa", standard: "nwere otu nka ngwa AI, otu nka ọrụ gị na otu nka mmadụ" },
    { id: "O5", condition: "Maka nka atọ gị", action: "ide atụmatụ ụbọchị 90 maka ịmụ nka ọhụrụ nwere ihe enyemaka, oge kwa izu na ihe akaebe maka nka ọ bụla", standard: "ebe izu abụọ mbụ nke ọmụmụ dị na kalenda gị" },
    { id: "O6", condition: "Mgbe onye were mmadụ n'ọrụ jụrụ otu i si eji AI", action: "inye azịza sekọnd 30 nke Ọrụ-Ngwa-Nlele-Nsonaazụ", standard: "nke bụ eziokwu, doo anya ma na-agbaso iwu AI nke onye were gị n'ọrụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Otu AI si agbanwe ọrụ",
      lessons: [
        {
          objectives: ["O1"],
          title: "AI na-agbanwe obere ọrụ, ọ bụghị naanị ọrụ dum",
          minutes: 5,
          goal: "Kọwaa otu AI si emetụta obere ọrụ dị n'ime otu ọrụ.",
          text: [
            "Ọrụ ọ bụla bụ ụyọkọ obere ọrụ. Onye nnabata n'ụlọ ọgwụ na-aza ekwentị, na-edebe oge nhụ dọkịta, na-elele inshọrans, na-ekele ndị ọrịa ma na-eme ka ndị na-echegbu onwe ha dajụọ. Onye ndu n'ụlọ nkwakọba ngwaahịa na-ahazi oge ọrụ (shift), na-agụ ngwaahịa dị n'ụlọ ahịa, na-azụ ndị ọrụ ọhụrụ ma na-edozi nsogbu n'ebe ọrụ.",
            "Ngwa AI maara ime ụfọdụ ọrụ nke ọma: ide ozi mbụ, ịchịkọta ihe n'obere, ịchọ ihe n'ime ọtụtụ ozi, idejupụta fọm, ịhazi ihe na ịhụ ụkpụrụ. Ha adịghị ike n'ọrụ ndị ọzọ: ọrụ aka na ọrụ ike, ịghọta otu ndị mmadụ nọ n'ụlọ si eche, iwulite ntụkwasị obi, ilekọta ihe ọhụrụ, na ịnara ibu ọrụ.",
            "N'ihi ya, n'ọtụtụ ọrụ, AI na-agbanwe obere ọrụ ndị na-ewe oge. Ndị na-amụta iji AI maka obere ọrụ nkịtị na-enwekarị oge ka ukwuu maka ọrụ mmadụ, nke a nwekwara ike ime ka ha ka baa uru."
          ],
          words: [["Obere ọrụ (task)", "otu akụkụ ọrụ n'ime ọrụ dum, dị ka idebe oge nhụ dọkịta."], ["Ọrụ nkịtị (routine task)", "obere ọrụ a na-eme n'otu ụzọ ahụ ugboro ugboro."], ["Ịmụ nka ọhụrụ (upskilling)", "ịmụta nka ọhụrụ iji rụọ ọrụ gị nke ọma karịa ma ọ bụ bulie elu."]],
          slides: [
            { title: "Ọrụ bụ ụyọkọ obere ọrụ", bullets: ["Onye nnabata: ekwentị, oge nhụ, inshọrans, ekele", "Onye ndu ụlọ nkwakọba: oge ọrụ, ngwaahịa, ọzụzụ, nsogbu"] },
            { title: "Ihe AI maara ime nke ọma", bullets: ["Ide ihe mbụ na ịchịkọta n'obere", "Ịchọ ihe na idejupụta fọm", "Ịhazi ihe na ịhụ ụkpụrụ"] },
            { title: "Ihe mmadụ kacha mara ime", bullets: ["Ọrụ aka na ọrụ ike", "Ịghọta ndị mmadụ na iwulite ntụkwasị obi", "Ilekọta ihe ọhụrụ; ịnara ibu ọrụ"] }
          ],
          tryIt: "Dee aha ọrụ gị ugbu a ma ọ bụ nke ikpeazụ, ma depụta opekata mpe obere ọrụ asatọ ị na-arụ (ma ọ bụ i rụrụ) n'izu nkịtị.",
          youCanNow: "ịkọwa otu AI si emetụta obere ọrụ dị n'ime otu ọrụ.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ ọrụ, mgbe ị na-eche otu AI si agbanwe ọrụ?", options: ["Otu obere ọrụ naanị", "Naanị aha ọrụ", "Ụyọkọ obere ọrụ", "Ndepụta ngwa"], answer: 2, why: "Ọrụ bụ ụyọkọ obere ọrụ, AI na-agbanwekwa ụfọdụ obere ọrụ karịa ndị ọzọ." },
            { objective: "O1", q: "Ị chọrọ ịhụ otu AI nwere ike isi metụta ọrụ gị. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Depụta obere ọrụ ị na-arụ n'izu nkịtị", "Hapụ ọrụ ma chọọ ọrụ ọhụrụ", "Jụọ AI ma ọ ga-anọchi gị", "Leghara AI anya kpamkpam"], answer: 0, why: "Idepụta obere ọrụ gị na-egosi ndị AI nwere ike inyere aka na ndị dabere na gị." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịkpọ obere ọrụ gị aha: AI nwere ike inye aka, nka mmadụ, ma ọ bụ ha abụọ",
          minutes: 5,
          goal: "Kewaa obere ọrụ dị n'ọrụ gị dabere n'ebe AI nwere ike inye aka.",
          text: [
            "Were ndepụta obere ọrụ gị ma kaa akara n'otu ọ bụla. \"AI nwere ike inye aka\": ide email, ime ndepụta nlele, ịchịkọta iwu ogologo n'obere. \"Nka mmadụ\": ime ka onye ahịa iwe na-ewe dajụọ ihu na ihu, ibuli ma bunye ibu n'enweghị nsogbu, ịrụzi igwe. \"Ha abụọ\": ide akụkọ ebe AI na-ede ihe mbụ ma gị na-elele eziokwu, ma ọ bụ ịhazi oge ọrụ ebe AI na-atụ aro ma gị na-ekpebi.",
            "Ị nwere ike ịrịọ ngwa enyemaka AI ka o nyere gị aka iche echiche: \"Abụ m onye ndu shift n'ụlọ ahịa. Nke a bụ obere ọrụ m. Kedu ndị ngwa enyemaka AI nwere ike inyere aka, oleekwa otu?\" Wee jiri uche nke gị; ị maara ọrụ ahụ karịa ya.",
            "Lee obere ọrụ ndị nwere akara \"nka mmadụ\". Ndị a bụ ike ị ga-azụlite ma kọọrọ ndị were mmadụ n'ọrụ: ikwurịta okwu, ịrụkọ ọrụ ọnụ, idozi nsogbu, nchekwa, na nlekọta."
          ],
          steps: ["Kaa akara n'obere ọrụ ọ bụla: AI nwere ike inye aka, nka mmadụ, ma ọ bụ ha abụọ.", "Rịọ ngwa enyemaka AI maka echiche, wee kpebie n'onwe gị.", "Gbaa okirikiri gburugburu obere ọrụ abụọ nwere \"AI nwere ike inye aka\" ị ga-anwale n'ọnwa a.", "Dọọ ahịrị n'okpuru obere ọrụ \"nka mmadụ\" i kacha sie ike na ha."],
          words: [["Nka mmadụ (human skills)", "nka dị ka ikwurịta okwu, ịrụkọ ọrụ ọnụ, ikpe ikpe ziri ezi na nlekọta nke mmadụ kacha mara ime; a na-akpọkwa ha soft skills ma ọ bụ durable skills."]],
          slides: [
            { title: "Aha atọ", bullets: ["AI nwere ike inye aka: email, ndepụta nlele, nchịkọta", "Nka mmadụ: ime ka ndị mmadụ dajụọ, ibuli ibu nke ọma, ịrụzi ihe", "Ha abụọ: AI na-ede ihe mbụ, gị na-elele ma kpebie"] },
            { title: "Jụọ AI, wee kpebie", bullets: ["\"Kedu obere ọrụ m AI nwere ike inyere aka?\"", "Ị maara ọrụ ahụ karịa ya"] },
            { title: "Ike gị", bullets: ["Ikwurịta okwu na ịrụkọ ọrụ ọnụ", "Idozi nsogbu na nchekwa", "Nlekọta na ikpe ikpe ziri ezi"] }
          ],
          tryIt: "Kpọọ obere ọrụ ọ bụla dị na ndepụta gị aha. Gbaa okirikiri gburugburu obere ọrụ abụọ nwere \"AI nwere ike inye aka\" ị ga-anwale n'ọnwa a, ma dọọ ahịrị n'okpuru obere ọrụ nka mmadụ abụọ i kacha sie ike na ha.",
          youCanNow: "ikewa obere ọrụ dị n'ọrụ gị dabere n'ebe AI nwere ike inye aka na ebe nka mmadụ gị kacha dị mkpa.",
          quickCheck: [
            { objective: "O2", q: "Kedu obere ọrụ bụ nka mmadụ?", options: ["Idegharị nọmba n'ime fọm", "Ide otu akụkọ ahụ kwa ụbọchị", "Ịhazi email site n'ụbọchị", "Ime ka onye ahịa iwe na-ewe dajụọ"], answer: 3, why: "Iwulite ntụkwasị obi na ime ka ndị mmadụ dajụọ dabere na nka mmadụ." },
            { objective: "O2", q: "AI kpọrọ obere ọrụ gị \"ilekọta mkpesa ndị ahịa\" naanị \"AI nwere ike inye aka\". Ị kwenyeghị. Gịnị ka ị ga-eme?", options: ["Nabata aha AI nyere", "Kpebie n'ikpeazụ n'onwe gị; o nwere ike ịbụ \"ha abụọ\"", "Hichapụ obere ọrụ ahụ", "Jụọ AI ọzọ ruo mgbe o kwenyere"], answer: 1, why: "Ị maara ọrụ gị karịa, ya mere gị na-ekpebi n'ikpeazụ maka aha ọ bụla." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịchọta ezi ozi gbasara ọrụ gị",
          minutes: 5,
          goal: "Chọọ ọdịnihu ọrụ gị n'isi iyi gọọmentị.",
          text: [
            "Isi akụkọ gbasara AI na ọrụ na-atụkarị egwu ma ọ bụ na-ebuli ihe karịa ka ọ dị. Kama nke ahụ, jiri isi iyi gọọmentị dabere na data. Na US, Bureau of Labor Statistics (BLS, ụlọ ọrụ gọọmentị na-ahụ maka ọnụ ọgụgụ ọrụ) na-ebipụta Occupational Outlook Handbook na bls.gov/ooh. Maka ọtụtụ narị ọrụ, ọ na-egosi ihe ọrụ ahụ gụnyere, ọzụzụ a na-achọkarị, ụgwọ ọnwa na ọdịnihu ọrụ a tụrụ anya.",
            "Chọọ ọrụ gị, wee dee: ihe ndị ọrụ ahụ na-eme, otu esi abụ otu n'ime ha, ụgwọ etiti (median pay), na ọdịnihu ọrụ. Lekwa ọrụ ndị yiri ya; ha nwere ike igosi nzọụkwụ ndị ọzọ.",
            "CareerOneStop, site na US Department of Labor (ngalaba gọọmentị US na-ahụ maka ọrụ), na-enyere gị aka ịchọta mmemme ọzụzụ na American Job Center dị n'obodo gị, nke nwere ike inye enyemaka ọrụ n'efu. Rịọ AI ka ọ kọwaa ihe ọ bụla na-agbagwoju anya na peeji ndị a, mana were nọmba ndị ahụ site na peeji ahụ n'onwe ya."
          ],
          steps: ["Gaa na bls.gov/ooh ma chọọ ọrụ gị.", "Dee: ihe ha na-eme, otu esi abụ otu n'ime ha, ụgwọ etiti, ọdịnihu ọrụ.", "Lelee ọrụ abụọ yiri ya.", "Chọta American Job Center dị n'obodo gị na CareerOneStop."],
          words: [["BLS", "Bureau of Labor Statistics: ụlọ ọrụ gọọmentị US na-ebipụta data gbasara ọrụ na ụgwọ ọnwa."], ["Ọdịnihu ọrụ (job outlook)", "mgbanwe a tụrụ anya na ọnụ ọgụgụ ọrụ dị n'otu ụdị ọrụ."], ["Ụgwọ etiti (median pay)", "ụgwọ dị n'etiti: ọkara na-enweta karịa, ọkara na-enweta ihe na-erughị ya."]],
          slides: [
            { title: "Hapụ okwu mkpatụ", bullets: ["Jiri isi iyi gọọmentị dabere na data", "BLS Occupational Outlook Handbook: bls.gov/ooh"] },
            { title: "Ihe ị ga-ede", bullets: ["Ihe ndị ọrụ ahụ na-eme", "Otu esi abụ otu n'ime ha", "Ụgwọ etiti na ọdịnihu ọrụ"] },
            { title: "Enyemaka n'efu dị nso", bullets: ["CareerOneStop: ọzụzụ na ebe enyemaka ọrụ", "American Job Centers na-enye enyemaka ọrụ", "Were nọmba site na peeji ahụ, ọ bụghị AI"] }
          ],
          sources: [BLS_OOH, CAREERONESTOP],
          tryIt: "Chọọ ọrụ gị ugbu a ma ọ bụ ọrụ ị chọrọ na bls.gov/ooh. Dee eziokwu atọ site na peeji ahụ, wee chọta American Job Center kacha nso gị na CareerOneStop.",
          youCanNow: "ịchọta ezi ozi gbasara ọdịnihu na ọzụzụ maka ọrụ gị.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka Occupational Outlook Handbook na-egosi?", options: ["Ihe ndị ọrụ na-eme, otu esi abụ otu n'ime ha, ụgwọ na ọdịnihu ọrụ", "Ọrụ e nwere nso gị taa", "Akara kredit gị", "Nyocha ụlọ ọrụ"], answer: 0, why: "OOH nke BLS na-akọwa ọrụ ọ bụla, ụgwọ ya na ọdịnihu ya." },
            { objective: "O3", q: "AI gwara gị na ọrụ gị ga-eto 30%. Gịnị ka ị ga-eme?", options: ["Kọọrọ ndị enyi gị ya", "Hazie ndụ ọrụ gị gburugburu ya", "Lelee nọmba ahụ na peeji gọọmentị BLS", "Leghara data ọrụ niile anya"], answer: 2, why: "Nọmba ọdịnihu ọrụ na-esi na peeji gọọmentị, ọ bụghị AI." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Otu AI si agbanwe ọrụ",
        questions: [
          { objective: "O1", q: "N'ọtụtụ ọrụ, ihe AI na-agbanwekarị bụ:", options: ["Ọ dịghị ihe ọ bụla", "Obere ọrụ ndị na-ewe oge", "Obere ọrụ niile kpamkpam", "Naanị aha ọrụ"], answer: 1, why: "AI na-emetụta obere ọrụ dị n'ime ọrụ." },
          { objective: "O2", q: "Kedu obere ọrụ AI na-amakarị ime nke ọma?", options: ["Ịrụzi forklift", "Ime ka onye ahịa iwe na-ewe dajụọ ihu na ihu", "Ibuli igbe n'enweghị nsogbu", "Ide email nkịtị mbụ"], answer: 3, why: "Ide ihe bụ otu n'ime ike ngwa AI." },
          { objective: "O2", q: "Ide akụkọ ebe AI na-ede ihe mbụ ma gị na-elele eziokwu nwere aha:", options: ["Ha abụọ", "Naanị nka mmadụ", "Naanị AI", "Ọ dịghị nke ọ bụla"], answer: 0, why: "AI na-enye aka, mmadụ na-elelekwa." },
          { objective: "O3", q: "Ebee ka ị ga-achọta ọdịnihu ọrụ gọọmentị US maka otu ụdị ọrụ?", options: ["Ihe AI chere", "Vidiyo gbasapụrụ n'ịntanetị", "BLS Occupational Outlook Handbook", "Ebe ndị mmadụ na-ede nkọwa"], answer: 2, why: "BLS na-ebipụta data ọdịnihu ọrụ gọọmentị." },
          { objective: "O3", q: "Gịnị ka American Job Center nwere ike inye?", options: ["Mbinye ego", "Ọrụ e kwere nkwa ya", "Enyemaka ọrụ n'efu na ozi gbasara ọzụzụ", "Nzere mahadum"], answer: 2, why: "Ha na-enye enyemaka ọrụ; ha anaghị ekwe nkwa ọ bụla." }
        ]
      }
    },
    {
      name: "Isi 2: Ime atụmatụ gị",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịhọrọ nka atọ ị ga-amụ",
          minutes: 5,
          goal: "Họrọ nka atọ dabara ọrụ gị na ebumnuche gị.",
          text: [
            "Họrọ ngwakọta: otu nka ngwa AI, otu nka maka ọrụ gị, na otu nka mmadụ. Ọmụmaatụ maka onye ọrụ ụlọ nkwakọba ngwaahịa chọrọ ịbụ onye ndu: (1) iji ngwa enyemaka AI dee ndetu shift doro anya, (2) ịmụta sistemụ njikwa ụlọ nkwakọba ngwaahịa na ihe ndabere nke ịgụ ngwaahịa, (3) ịkụziri na ịzụ ndị ọrụ ọhụrụ.",
            "Jiri ihe ị chọtara: akụkụ BLS \"How to become one\" (otu esi abụ otu n'ime ha), mgbasa ozi ọrụ maka ọrụ ị chọrọ, na ndepụta obere ọrụ gị. Nka ndị na-apụta n'ọtụtụ mgbasa ozi ọrụ kwesịrị ịmụta.",
            "Rịọ AI ka o nyere gị aka tụnyere ha: \"Nke a bụ mgbasa ozi ọrụ ise maka onye ndu ụlọ nkwakọba ngwaahịa. Kedu nka na-apụtakarị?\" Tinye naanị mgbasa ozi ndị ahụ, ọ dịghị ozi nzuzo ọ bụla."
          ],
          steps: ["Chịkọta mgbasa ozi ọrụ atọ ruo ise maka ọrụ ị chọrọ.", "Depụta nka ha na-arịọkarị.", "Họrọ otu nka ngwa AI, otu nka ọrụ gị na otu nka mmadụ.", "Dee ihe mere nke ọ bụla ji dị mkpa."],
          words: [["Mgbasa ozi ọrụ (job posting)", "ọkwa maka ọrụ nke na-edepụta ọrụ a ga-arụ na nka a chọrọ."], ["Nka ọrụ gị (field skill)", "nka dabara n'ụdị ọrụ gị, dị ka sistemụ ịgụ ngwaahịa ma ọ bụ okwu ahụike."]],
          slides: [
            { title: "Họrọ ngwakọta nke atọ", bullets: ["Otu nka ngwa AI", "Otu nka ọrụ gị", "Otu nka mmadụ"] },
            { title: "Ebe ị ga-ele", bullets: ["BLS \"How to become one\"", "Mgbasa ozi ọrụ maka ọrụ ị chọrọ", "Ndepụta obere ọrụ gị"] },
            { title: "AI nwere ike itunyere mgbasa ozi", bullets: ["\"Kedu nka na-apụtakarị?\"", "Tinye naanị mgbasa ozi, ọ dịghị ozi nzuzo"] }
          ],
          tryIt: "Chọta mgbasa ozi ọrụ atọ maka ọrụ ị chọrọ. Jụọ AI nka na-apụtakarị, wee họrọ nka atọ gị ma dee ihe mere nke ọ bụla ji dị mkpa.",
          youCanNow: "ịhọrọ nka atọ ị ga-amụ dabere na mgbasa ozi ọrụ n'ezie na ebumnuche gị.",
          quickCheck: [
            { objective: "O4", q: "Kedu ezigbo ngwakọta nka atọ ị ga-amụ?", options: ["Ngwa AI atọ", "Otu nka ngwa AI, otu nka ọrụ gị na otu nka mmadụ", "Nka atọ i nwerelarị", "Nka atọ ọ bụla site na mgbasa ozi"], answer: 1, why: "Ngwakọta na-ekpuchi iji AI, ọrụ gị na nka mmadụ ndị AI na-enweghị ike inọchi." },
            { objective: "O4", q: "Ị chọrọ ịmata nka ndị were mmadụ n'ọrụ chọrọ maka ọrụ ị chọrọ. Gịnị ka ị ga-eme?", options: ["Chee echiche ma tụọ aka", "Jụọ enyi nọ n'ụdị ọrụ ọzọ", "Họrọ nka ndị dị ka ha kacha sie ike", "Gụọ mgbasa ozi ọrụ n'ezie ma hụ nka na-apụtakarị"], answer: 3, why: "Nka ndị na-apụta n'ọtụtụ mgbasa ozi ọrụ n'ezie kwesịrị ịmụta." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ime atụmatụ ụbọchị 90 maka ịmụ nka ọhụrụ",
          minutes: 5,
          goal: "Mee ka nka atọ gị ghọọ atụmatụ ụbọchị 90 nwere ezi uche.",
          text: [
            "Atụmatụ na-eme ka ọmụmụ mee. Maka nka ọ bụla, dee: ihe enyemaka n'efu ma ọ bụ nke ọnụ ala, oge kwa izu, na ụzọ isi gosi na ị mụtara ya. Ihe akaebe nwere ike ịbụ asambodo, ọrụ (project), ihe nlele ọrụ gị ma ọ bụ onye isi gị ịhụ ka ị na-eme ya.",
            "Ihe enyemaka n'efu gụnyere ọba akwụkwọ dị n'obodo gị (ọtụtụ na-enye ihe ọmụmụ n'ịntanetị n'efu), American Job Centers, community colleges (kọleji ọha dị n'obodo), ọzụzụ onye were gị n'ọrụ, na ihe ọmụmụ n'efu site n'ụlọ ọrụ teknụzụ ukwu. Lelee ọnụ ahịa na nkọwa ya na saịtị gọọmentị ma ọ bụ nke ezi ụlọ ọrụ ọ bụla.",
            "Mee ka ọ dị obere: awa abụọ ma ọ bụ atọ kwa izu ka mma karịa atụmatụ ukwu ị ga-ahapụ. Jiri ngwa enyemaka AI hazie oge ọmụmụ kwa izu ma nwalee gị, ma mee omume nka AI ahụ n'ezi ọrụ n'ebe ọrụ ma ọ bụrụ na onye were gị n'ọrụ kwere."
          ],
          steps: ["Maka nka ọ bụla: ihe enyemaka, oge kwa izu, ihe akaebe.", "Lelee ọnụ ahịa na nkọwa nke ihe enyemaka ọ bụla na saịtị gọọmentị ya.", "Tinye oge ọmụmụ kwa izu na kalenda gị.", "Nyochaa ya n'ụbọchị 30, 60 na 90."],
          words: [["Ihe akaebe nka (proof of skill)", "ihe na-egosi na ị nwere ike ime ya: asambodo, ọrụ (project) ma ọ bụ ihe nlele ọrụ."], ["Community college", "kọleji ọha dị n'obodo nwere ihe ọmụmụ na asambodo dị ọnụ ala."]],
          slides: [
            { title: "Maka nka ọ bụla", bullets: ["Ihe enyemaka n'efu ma ọ bụ nke ọnụ ala", "Oge kwa izu", "Ụzọ isi gosi ya"] },
            { title: "Ebe ị ga-amụ n'efu", bullets: ["Ihe ọmụmụ n'ịntanetị nke ọba akwụkwọ", "American Job Centers na community colleges", "Ọzụzụ onye were gị n'ọrụ"] },
            { title: "Mee ka ọ dị obere", bullets: ["Awa 2-3 kwa izu ị nwere ike idobe", "AI na-ahazi oge ma nwalee gị", "Nyochaa n'ụbọchị 30, 60 na 90"] }
          ],
          sources: [CAREERONESTOP],
          tryIt: "Dee atụmatụ ụbọchị 90 gị: maka nka atọ gị nke ọ bụla, ihe enyemaka, oge kwa izu na ihe akaebe. Tinye oge ọmụmụ nke izu abụọ mbụ na kalenda gị.",
          youCanNow: "ime atụmatụ ụbọchị 90 nwere ezi uche iji mụta nka ọhụrụ atọ.",
          quickCheck: [
            { objective: "O5", q: "Kedu nke bụ ihe akaebe nka?", options: ["Ikwu na ị maara ya nke ọma", "Ikiri otu vidiyo", "Asambodo, ọrụ (project) ma ọ bụ ihe nlele ọrụ", "Ịchekwa njikọ ihe ọmụmụ"], answer: 2, why: "Ihe akaebe bụ ihe ị nwere ike igosi, dị ka asambodo, ọrụ (project) ma ọ bụ ihe nlele ọrụ." },
            { objective: "O5", q: "Ị na-arụ ọrụ oge zuru ezu. Kedu atụmatụ ọmụmụ ị ga-ede?", options: ["Awa 2 ruo 3 kwa izu, e debere na kalenda gị", "Awa 10 kwa abalị", "Mụọ ihe mgbe ọ masịrị gị", "Mụọ ihe naanị n'izu tupu ajụjụ ọnụ"], answer: 0, why: "Obere oge na-adịgide adịgide na kalenda gị bụ atụmatụ kacha nwee ike ịga nke ọma." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịkọrọ ndị were mmadụ n'ọrụ banyere nka AI gị",
          minutes: 5,
          goal: "Nye azịza mkpụmkpụ, nke eziokwu ma doo anya banyere otu i si eji AI n'ọrụ.",
          text: [
            "Ndị were mmadụ n'ọrụ na-ajụwanye, \"Kedu otu i si eji AI?\" Ezigbo azịza doro anya, bụrụ eziokwu, ma gosi ezi uche. Jiri usoro a: Ọrụ, Ngwa, Nlele, Nsonaazụ.",
            "Ọmụmaatụ: \"M na-eji Microsoft Copilot ede ndetu mbụ m na njedebe shift (ọrụ na ngwa). M na-elele ọnụ ọgụgụ ahụ mgbe niile na akụkọ scanner tupu m ezipu ha (nlele). Ọ na-echekwara m ihe dị ka nkeji 15 kwa shift, onye ndu na-esote na-enwetakwa ndetu doro anya karị (nsonaazụ).\"",
            "Ebulila ihe karịa ka ọ dị. Ekwula na i nwere nka i nweghị, ma gbasoo iwu AI nke onye were gị n'ọrụ: etinyela ozi nzuzo ụlọ ọrụ ma ọ bụ nke ndị ahịa n'ime ngwa AI. Igosi na ị maara oke ya bụ akụkụ nke nka ahụ."
          ],
          steps: ["Họrọ otu ezi ọrụ ebe i jiri AI (ma ọ bụ mee omume ya).", "Kwuo ọrụ ahụ, ngwa ahụ, otu i si lelee ya, na nsonaazụ ya.", "Mee ka ọ dị ihe dị ka sekọnd 30.", "Mee omume ya n'olu dị elu."],
          words: [["Iwu AI (AI policy)", "iwu onye were mmadụ n'ọrụ maka otu ndị ọrụ ga-esi jiri ngwa AI."], ["Ozi nzuzo ụlọ ọrụ (confidential information)", "ozi gbasara ụlọ ọrụ ma ọ bụ ndị ahịa a na-agaghị ekesa n'èzí ụlọ ọrụ ahụ."]],
          slides: [
            { title: "Ọrụ, Ngwa, Nlele, Nsonaazụ", bullets: ["Ihe i mere", "Ngwa AI ole", "Otu i si lelee ya", "Ihe ọ mere ka ọ ka mma"] },
            { title: "Ọmụmaatụ", bullets: ["\"M na-eji Copilot ede ndetu mbụ na njedebe shift.", "M na-elele ọnụ ọgụgụ na akụkọ scanner.", "Ọ na-echekwa nkeji 15 kwa shift.\""] },
            { title: "Gosi ezi uche", bullets: ["Ebulila nka gị karịa ka ọ dị", "Gbasoo iwu AI nke onye were gị n'ọrụ", "Etinyela data nzuzo n'ime AI"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mechaa atụmatụ ọrụ AI gị: ndepụta obere ọrụ nwere aha, eziokwu BLS atọ, atụmatụ ụbọchị 90 gị, na azịza sekọnd 30 nke Ọrụ-Ngwa-Nlele-Nsonaazụ ị na-eme omume ya n'olu dị elu.",
          youCanNow: "ime atụmatụ otu ị ga-esi too n'ụwa ọrụ AI gbanwere, na ịkọrọ ndị were mmadụ n'ọrụ banyere nka AI gị n'eziokwu.",
          quickCheck: [
            { objective: "O6", q: "N'azịza Ọrụ-Ngwa-Nlele-Nsonaazụ, gịnị bụ Nsonaazụ?", options: ["Aha ngwa AI ahụ", "Otu i si lelee ọrụ AI", "Ihe i jụrụ AI", "Ihe ka mma n'ihi ọrụ gị"], answer: 3, why: "Nsonaazụ bụ ihe pụtara, dị ka oge a chekwara ma ọ bụ mperi ole na ole." },
            { objective: "O6", q: "Onye na-ajụ ajụjụ ọnụ jụrụ ma i jirila AI mee akụkọ. Ọ bụ naanị ugboro abụọ ka i nwalere ya. Gịnị ka ị ga-ekwu?", options: ["Kwuo na ị bụ ọkachamara", "Kọwaa n'eziokwu oge abụọ ahụ: ọrụ, ngwa, otu i si lelee na nsonaazụ", "Kwuo na ị nụbeghị maka AI", "Gbanwee isiokwu"], answer: 1, why: "Azịza eziokwu doro anya na-ewulite ntụkwasị obi; ekwula mgbe ọ bụla na i nwere nka i nweghị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ime atụmatụ gị",
        questions: [
          { objective: "O4", q: "Ezigbo ngwakọta nka atọ bụ:", options: ["Otu nka ngwa AI, otu nka ọrụ gị, otu nka mmadụ", "App atọ ọ bụla", "Naanị nka AI", "Ọ dịghị nke ọ bụla"], answer: 0, why: "Ngwakọta na-eme ka ị guzosie ike ma baa uru." },
          { objective: "O4", q: "Ebee ka ị ga-ahụ nka ndị were mmadụ n'ọrụ chọrọ?", options: ["Foto njakịrị (meme)", "Amụma kpakpando", "Ihe AI chere", "Mgbasa ozi ọrụ n'ezie maka ọrụ ị chọrọ"], answer: 3, why: "Mgbasa ozi ọrụ na-edepụta nka a chọrọ." },
          { objective: "O5", q: "Kedu atụmatụ kacha nwee ike ịga nke ọma?", options: ["Awa 40 naanị na ngwụcha izu a", "Awa 2-3 kwa izu, na kalenda gị", "Mgbe ọ bụla ọ masịrị gị", "Enweghị atụmatụ"], answer: 1, why: "Atụmatụ dị obere ma na-aga n'ihu na-emezu." },
          { objective: "O6", q: "N'Ọrụ, Ngwa, Nlele, Nsonaazụ, \"Nlele\" pụtara:", options: ["Otu i si lelee ọrụ AI", "Ụgwọ ọnwa gị", "Akwụkwọ ego ụlọ akụ (cheque)", "Ilele email"], answer: 0, why: "Ilele na-egosi ezi uche." },
          { objective: "O6", q: "Kedu nke ị na-ekwesịghị ime mgbe ị na-akọwa nka AI gị?", options: ["Ikwu otu i si elele ọrụ", "Inye ọmụmaatụ doro anya", "Ikwu na i nwere nka i nweghị", "Ịgbaso iwu onye were gị n'ọrụ"], answer: 2, why: "Eziokwu dị mkpa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI n'Ụwa Ọrụ Ọhụrụ",
    questions: [
      { objective: "O1", q: "Ụzọ kacha mma isi chee banyere ọrụ bụ:", options: ["Otu obere ọrụ naanị", "Ụyọkọ obere ọrụ", "Naanị aha", "Ụgwọ ọnwa"], answer: 1, why: "Ọrụ nwere ọtụtụ obere ọrụ n'ime ya." },
      { objective: "O1", q: "Kedu nke bụ ọrụ nkịtị (routine task)?", options: ["Iduzi nzukọ otu", "Ịkasi onye ọrịa na-atụ egwu obi", "Ilekọta ihe mberede ọhụrụ kpamkpam", "Ide otu akụkọ ahụ kwa ụbọchị"], answer: 3, why: "A na-eme ọrụ nkịtị n'otu ụzọ ahụ ugboro ugboro." },
      { objective: "O1", q: "Gịnị bụ ịmụ nka ọhụrụ (upskilling)?", options: ["Ụdị AI", "Ịhapụ ọrụ", "Ịrụ ọrụ awa ole na ole", "Ịmụta nka ọhụrụ iji rụọ ọrụ nke ọma ma ọ bụ bulie elu"], answer: 3, why: "Ịmụ nka ọhụrụ na-ewulite nka ọhụrụ." },
      { objective: "O2", q: "Kedu nke bụ nka mmadụ?", options: ["Ịhazi spreadsheet", "Iwulite ntụkwasị obi n'etiti gị na ndị ahịa", "Ịchịkọta akwụkwọ n'obere", "Ilele mkpụrụ okwu (spell check)"], answer: 1, why: "Iwulite ntụkwasị obi bụ ike mmadụ." },
      { objective: "O2", q: "Mgbe AI kpọrọ obere ọrụ gị aha, onye na-ekpebi n'ikpeazụ?", options: ["Onye agbata obi gị", "AI", "Gị", "Ọ dịghị onye"], answer: 2, why: "Ị maara ọrụ ahụ karịa." },
      { objective: "O2", q: "Gịnị mere ị ga-eji dọọ ahịrị n'okpuru obere ọrụ nka mmadụ gị?", options: ["Ha bụ ike ị ga-azụlite ma kọọ maka ha", "Iji hichapụ ha", "Iji zoo ha", "Ha adịghị mkpa"], answer: 0, why: "Nka mmadụ na-anọgide na-aba uru." },
      { objective: "O3", q: "BLS pụtara:", options: ["Basic Labor Service", "Business Learning System", "Bureau of Labor Statistics", "Board of Licensed Skills"], answer: 2, why: "BLS na-ebipụta data gbasara ọrụ." },
      { objective: "O3", q: "Occupational Outlook Handbook na-egosi:", options: ["Ihe ndị ọrụ na-eme, otu esi abụ otu n'ime ha, ụgwọ na ọdịnihu ọrụ", "Akụkọ ndị a ma ama", "Ndụmọdụ ịzụ òkè (stock)", "Usoro isi nri"], answer: 0, why: "Ndị ahụ bụ isi akụkụ ya." },
      { objective: "O3", q: "Ebee ka ị ga-esi were nọmba ọdịnihu ọrụ?", options: ["Nchịkọta AI n'eleleghị ya", "Peeji gọọmentị", "Isi akụkọ", "Asịrị"], answer: 1, why: "AI nwere ike ikwu nọmba ezighi ezi." },
      { objective: "O3", q: "CareerOneStop si na:", options: ["Ụlọ ọrụ ekwentị", "Netwọk mgbasa ozi ọha (social network)", "Ụlọ akụ", "US Department of Labor"], answer: 3, why: "Ọ bụ ihe enyemaka nke Department of Labor." },
      { objective: "O4", q: "Nka ndị na-apụta n'ọtụtụ mgbasa ozi ọrụ:", options: ["Kwesịrị ịmụta", "Adịghị mkpa", "Megidere iwu", "Agafeela oge"], answer: 0, why: "O doro anya na ndị were mmadụ n'ọrụ chọrọ ha." },
      { objective: "O4", q: "Mgbe ị na-etinye mgbasa ozi ọrụ n'ime AI, hapụ:", options: ["Ndepụta nka", "Ederede mgbasa ozi ahụ", "Aha ọrụ ahụ", "Ozi nzuzo gị"], answer: 3, why: "Debe ozi nzuzo n'ebe ọ na-adịghị." },
      { objective: "O5", q: "Kedu nke bụ ihe akaebe nka?", options: ["Asịrị", "Ọchịchọ", "Asambodo, ọrụ (project) ma ọ bụ ihe nlele ọrụ", "Ozi n'ịntanetị na-ekwu na ị maara ya nke ọma"], answer: 2, why: "Ihe akaebe na-egosi ihe ị nwere ike ime." },
      { objective: "O5", q: "Ebee ka ị na-ahụkarị ihe ọmụmụ n'ịntanetị n'efu?", options: ["Mgbasa ozi na-apụta na mberede", "Ọba akwụkwọ dị n'obodo gị", "Email aghụghọ (spam)", "Ọ dịghị ebe"], answer: 1, why: "Ọtụtụ ọba akwụkwọ na-enye ihe ọmụmụ n'efu." },
      { objective: "O5", q: "Olee mgbe ị ga-enyocha atụmatụ ụbọchị 90 gị?", options: ["Kwa awa", "Ọ dịghị mgbe", "Naanị n'ụbọchị 1", "N'ụbọchị 30, 60 na 90"], answer: 3, why: "Nyocha oge niile na-eme ka ị nọgide n'ụzọ." },
      { objective: "O6", q: "Ezigbo azịza banyere nka AI bụ:", options: ["Nke e detuuru site na weebụsaịtị", "Nke na-edoghị anya ma buo ibu", "Nke doro anya ma bụrụ eziokwu", "Nke e chepụtara echepụta"], answer: 2, why: "Azịza doro anya na nke eziokwu na-ewulite ntụkwasị obi." },
      { objective: "O6", q: "Kedu nke dabara n'azịza Ọrụ-Ngwa-Nlele-Nsonaazụ?", options: ["\"M na-elele ọnụ ọgụgụ na akụkọ scanner.\"", "\"AI na-arụ ọrụ m niile.\"", "\"M na-etinye data ndị ahịa n'ime chatbot.\"", "\"Anaghị m elele ihe ọ bụla.\""], answer: 0, why: "Ọ na-egosi otu i si elele." },
      { objective: "O6", q: "Tupu i jiri AI n'ọrụ, ị kwesịrị ịmara:", options: ["Okwuntughe onye gị na ya na-arụ ọrụ", "Iwu AI nke onye were gị n'ọrụ", "Nọmba kaadị ndị ahịa", "Ọ dịghị ihe"], answer: 1, why: "Iwu na-ekwu ihe a na-ekwe." },
      { objective: "O6", q: "Ozi nzuzo ụlọ ọrụ kwesịrị:", options: ["Ka e tinye ya n'ime chatbot ọ bụla", "Ịnọ n'èzí ngwa AI ma ọ bụrụ na onye were gị n'ọrụ ekwenyeghị", "Ka e bipụta ya n'ịntanetị", "Ka e kesaa ya ndị enyi"], answer: 1, why: "A ga-echebe ya." },
      { objective: "O6", q: "Gịnị ka ihe ọmụmụ a na-ekwe nkwa ya banyere ọrụ?", options: ["Ọ dịghị ihe; ọ na-enyere gị aka ime atụmatụ ma wulite nka", "Ọrụ e kwere nkwa ya", "Mmụba ụgwọ ọnwa e kwere nkwa ya", "Nkwalite n'ọkwa"], answer: 0, why: "Ọ dịghị ihe ọmụmụ nwere ike ikwe nkwa ihe ga-esi na ya pụta." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 4, 7, 10, 12, 14, 15, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ndepụta obere ọrụ nwere aha", objective: "O2", notYet: "Obere ọrụ na-erughị asatọ, ma ọ bụ obere ọrụ na-enweghị aha.", meets: "Opekata mpe obere ọrụ asatọ, nke ọ bụla nwere aha \"AI nwere ike inye aka\", \"nka mmadụ\" ma ọ bụ \"ha abụọ\".", exceeds: "E gbara okirikiri gburugburu obere ọrụ abụọ nwere \"AI nwere ike inye aka\" a ga-anwale, a dọọkwa ahịrị n'okpuru ike nka mmadụ abụọ." },
      { name: "Eziokwu gọọmentị gbasara ọrụ", objective: "O3", notYet: "Eziokwu adịghị ma ọ bụ si n'AI.", meets: "Eziokwu atọ gbasara ọrụ ahụ site na BLS Occupational Outlook Handbook.", exceeds: "Ọ na-akpọkwa aha American Job Center kacha nso na otu enyemaka ọ na-enye." },
      { name: "Atụmatụ ụbọchị 90", objective: "O5", notYet: "Nka enweghị ihe enyemaka, oge ma ọ bụ ihe akaebe.", meets: "Nka atọ, nke ọ bụla nwere ihe enyemaka n'efu, oge kwa izu na ihe akaebe, e nyochakwara n'ụbọchị 30, 60 na 90.", exceeds: "Izu abụọ mbụ nke ọmụmụ dị na kalenda onye na-amụ ihe." },
      { name: "Azịza AI sekọnd 30", objective: "O6", notYet: "Azịza ahụ edoghị anya ma ọ bụ na-ekwu nka onye na-amụ ihe na-enweghị.", meets: "Azịza Ọrụ-Ngwa-Nlele-Nsonaazụ nke eziokwu e kwupụtara n'olu dị elu n'ihe dị ka sekọnd 30.", exceeds: "Azịza ahụ nwere nọmba ma ọ bụ nsonaazụ doro anya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe ka na-agbaso atụmatụ ụbọchị 90 ha n'ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe nwetara asambodo ma ọ bụ mechaa ihe ọmụmụ site n'atụmatụ ha n'ime ụbọchị 90",
      "Ndị na-amụ ihe nwetara ọrụ ọhụrụ, nkwalite n'ọkwa ma ọ bụ mmụba ụgwọ ọnwa n'ime ọnwa 6"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone ma ọ bụ kọmputa nwere ịntanetị",
      "Ngwa enyemaka AI n'efu: ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini",
      "Weebụsaịtị bls.gov/ooh na CareerOneStop n'efu, na mgbasa ozi ọrụ atọ n'ezie",
      "Akwụkwọ, app ndetu ma ọ bụ kalenda maka ndepụta obere ọrụ na atụmatụ ụbọchị 90",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "N'ebe enyemaka ọrụ ma ọ bụ otu ndị ọrụ: meenụ ule mbido ọnụ, wee kpọọ ndepụta obere ọrụ aha n'abụọ abụọ ka ndị na-amụ ihe nwee ike ịjụ aha ibe ha nyere.",
      "Kwuo eziokwu na ihe ọmụmụ a anaghị ekwe nkwa ọrụ; ọ na-enyere ndị na-amụ ihe aka ime atụmatụ ma wulite nka.",
      "Chetara ndị na-amụ ihe ka ha gbasoo iwu AI nke onye were ha n'ọrụ ma debe ozi nzuzo ụlọ ọrụ n'èzí ngwa AI.",
      "Mee ka ndị na-amụ ihe kwupụta azịza sekọnd 30 ha n'olu dị elu nye onye ha na ya so.",
      "Jiri rubric tụọ akara atụmatụ ọrụ AI ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
