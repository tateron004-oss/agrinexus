"use strict";

// Koach Learn course (Igbo translation of athletes/athletes-seo-website-ai.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-seo-website-ai-ig",
  lang: "ig",
  translationOf: "athletes-seo-website-ai",
  category: "Athletes",
  name: "SEO na Iwu Weebụsaịtị Gị site n'AI",
  skills: "Ịhazi weebụsaịtị otu peeji maka onye egwuregwu, Iji AI dee ederede peeji, Iwu saịtị n'efu na Google Sites, Ihe ndabere SEO: aha peeji, isiokwu, nkọwa na alt text, Ịlele saịtị gị na Google",
  outcome: "iwu ma bipụta weebụsaịtị otu peeji n'efu maka onye egwuregwu na Google Sites, nke AI nyere aka dee, nwere aha peeji doro anya, isiokwu, alt text maka foto na ụzọ isi kpọtụrụ gị, ka ndị nkuzi egwuregwu na ụlọ ọrụ (brands) wee chọta ma ghọta gị.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị egwuregwu chọrọ otu ebe n'ịntanetị ha na-achịkwa, ebe ndị nkuzi egwuregwu (coaches), ndị na-achọ ndị egwuregwu (recruiters), ụlọ ọrụ na ndị na-akwado ha ga-ahụ onye ha bụ, na maka ndị nkuzi na-enyere ha aka.",
    "Soshal midia na-agbanwe, ọ na-enwekwa mkpọtụ. Weebụsaịtị dị mfe na-enye gị peeji dị ọcha nwere akụkọ gị, ọnụ ọgụgụ gị (stats), ihe ngosi kacha mma gị (highlights) na otu esi akpọtụrụ gị. SEO, ma ọ bụ search engine optimization, na-enyere ndị mmadụ aka ịchọta ya na Google.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\". Ị ga-ahazi, dee, wuo ma bipụta saịtị otu peeji n'efu. E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Bipụta weebụsaịtị otu peeji maka onye egwuregwu na Google Sites nwere: aha peeji nwere aha gị na egwuregwu gị, ngalaba About nke AI nyere aka dee ma i dezie ya, ngalaba ọnụ ọgụgụ na highlights, ụzọ isi kpọtụrụ gị nke na-adịghị egosi ozi nzuzo gị, alt text maka foto, na njikọ (link) gaa na ya site n'otu profaịlụ soshal midia gị. Wee chọọ aha gị na egwuregwu gị na Google ma dee ihe pụtara.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị egwuregwu nọ n'ụlọ akwụkwọ sekọndrị, mahadum na mmalite ọrụ ha, chọrọ otu ebe n'ịntanetị ha na-achịkwa, ebe ndị nkuzi egwuregwu, ndị na-achọ ndị egwuregwu, ụlọ ọrụ na ndị na-akwado ha ga-ahụ onye ha bụ, na ndị nkuzi na-enyere ha aka.",
    startingPoint: "Ha na-eji soshal midia na smartphone kwa ụbọchị, ụfọdụ nwekwara profaịlụ recruiting ma ọ bụ vidiyo highlights. Mmadụ ole na ole wuola weebụsaịtị, ọtụtụ anụbeghị maka aha peeji, alt text ma ọ bụ ihe ndabere SEO ndị ọzọ.",
    gap: "Ihe dị na soshal midia na-esiri ndị nkuzi na ụlọ ọrụ ike ịgụ, ha nwekwara ike ịgbanwe ma ọ bụ funahụ. Saịtị dị mfe, nke na-enweghị nsogbu, nke igwe nchọta (search engines) na-aghọta, na-enye ndị egwuregwu otu peeji doro anya na-enyere ndị kwesịrị ekwesị aka ịchọta ma kpọtụrụ ha.",
    constraints: [
      "Okwu dị mfe, ihe dị ka ọkwa ịgụ akwụkwọ klas 8",
      "Kọmputa ma ọ bụ ekwentị, akaụntụ Google n'efu, Google Sites na ngwa enyemaka AI n'efu",
      "Ihe dị ka nkeji 60 n'ozuzu",
      "Enweghị ozi nzuzo na peeji ahụ; ndị egwuregwu na-erubeghị afọ 18 na-edepụta nne ma ọ bụ nna, ma ọ bụ onye nkuzi, dị ka onye a ga-akpọtụrụ",
      "Ikike iji foto na iwu ụlọ akwụkwọ gbasara logo; nsonaazụ nchọta nwere ike iwe oge tupu ọ pụta"
    ],
    prerequisites: "Ọ dịghị. \"Ime Aha Gị Ka Ọ Pụta Ìhè na Social Media maka Ndị Egwuregwu\" na-enyere gị aka ibu ụzọ dee nkwupụta brand gị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Tupu i wuo saịtị gị", action: "ịhọrọ ndị bụ isi ị na-achọ iru na idepụta ihe ha chọrọ na ngalaba anọ", standard: "nwere About, Stats ma ọ bụ Services, Highlights na Contact dabara ndị ahụ" },
    { id: "O2", condition: "Site n'iji eziokwu gị na ngwa enyemaka AI", action: "ide ngalaba About ma họrọ ụzọ isi kpọtụrụ gị n'enweghị nsogbu", standard: "ebe e lelere eziokwu ọ bụla, ọ dịghị ihe ụgha, ọ dị n'okwu gị, ọ dịghịkwa adreesị ụlọ, nọmba ekwentị, ụbọchị ọmụmụ zuru ezu ma ọ bụ usoro oge gị" },
    { id: "O3", condition: "Maka saịtị otu peeji gị", action: "ide aha peeji, isiokwu ngalaba, nkọwa dị mkpụmkpụ na alt text maka foto ndị na-enyere nchọta aka", standard: "nwere aha gị na egwuregwu gị n'aha peeji, alt text na foto ọ bụla, na-enweghị keyword stuffing" },
    { id: "O4", condition: "Site n'iji Google Sites", action: "iwu saịtị otu peeji nwere ngalaba anọ, foto, vidiyo highlights etinyere n'ime ya na bọtịnụ kọntaktị", standard: "na-eji naanị foto i nwere ikike iji ma na-agbaso iwu logo ụlọ akwụkwọ gị" },
    { id: "O5", condition: "Mgbe saịtị gị dị njikere", action: "ibipụta ya, nwalee ya na ekwentị ma kesaa njikọ ya na bio gị", standard: "ebe njikọ, bọtịnụ na vidiyo niile na-arụ ọrụ, onye nkuzi ma ọ bụ nne ma ọ bụ nna lelekwara saịtị ahụ" },
    { id: "O6", condition: "Mgbe i bipụtachara", action: "ịhazi usoro mmelite na ịlele otu saịtị gị si apụta na nchọta", standard: "nwere ncheta mmelite mgbe oge egwuregwu ọ bụla gwụrụ na ndetu ihe pụtara mgbe ị chọrọ aha gị na egwuregwu gị" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịhazi na ide saịtị gị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe mere onye egwuregwu ji chọọ weebụsaịtị dị mfe",
          minutes: 4,
          goal: "Kpebie onye saịtị gị bụ maka ya na ihe ọ ga-egosi.",
          text: [
            "Weebụsaịtị bụ peeji ị na-achịkwa. App soshal midia nwere ike ịgbanwe iwu ha ma ọ bụ mee ka akaụntụ gị funahụ; saịtị gị na-anọgide otu ahụ. Ọ na-adịkwa mfe karịa nye onye nkuzi ma ọ bụ ụlọ ọrụ ịgụ karịa ịgagharị na feed.",
            "Kpebie onye ọ bụ maka ya. Saịtị recruiting chọrọ ọnụ ọgụgụ (stats), akara ụlọ akwụkwọ, highlights na ndị nkuzi ga-agba akaebe maka gị. Saịtị maka ụlọ ọrụ (brands) chọrọ ndị na-eso gị, mmekọ i merela na media kit gị. Saịtị maka nkuzi ma ọ bụ kampụ chọrọ ọrụ gị (services), usoro oge na ndebanye aha.",
            "Bido na naanị otu peeji, nwere ngalaba: About, Stats ma ọ bụ Services, Highlights, na Contact."
          ],
          steps: ["Họrọ ndị bụ isi ị na-achọ iru: ndị nkuzi, ụlọ ọrụ ma ọ bụ ndị ahịa.", "Depụta ihe ha kwesịrị ịhụ.", "Kewaa ya na ngalaba anọ: About, Stats ma ọ bụ Services, Highlights, Contact."],
          words: [["Weebụsaịtị", "peeji dị n'ịntanetị n'adreesị ị na-ekesa, dị ka njikọ (link)."], ["Ngalaba (section)", "otu akụkụ peeji, nwere isiokwu nke ya."]],
          slides: [
            { title: "Ihe mere weebụsaịtị", bullets: ["Peeji ị na-achịkwa", "Ọ dị mfe ịgụ karịa feed"] },
            { title: "Onye ọ bụ maka ya?", bullets: ["Ndị nkuzi: stats, akara ụlọ akwụkwọ, highlights", "Ụlọ ọrụ: ndị na-eso gị, mmekọ", "Ndị ahịa: services na ndebanye aha"] },
            { title: "Bido na otu peeji", bullets: ["About", "Stats ma ọ bụ Services", "Highlights", "Contact"] }
          ],
          tryIt: "Dee ndị bụ isi saịtị gị bụ maka ha, ma depụta ihe ha kwesịrị ịhụ n'okpuru isiokwu ngalaba anọ ahụ.",
          youCanNow: "ịhazi saịtị otu peeji maka onye egwuregwu nke dabara ndị doro anya.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka saịtị onye egwuregwu maka ụlọ ọrụ (brands) kwesịrị igosi?", options: ["Naanị usoro oge klas gị", "Ndị na-eso gị, mmekọ i merela na media kit gị", "Adreesị ụlọ gị", "Akara egwuregwu ọ bụla site na mgbe ị bụ nwata"], answer: 1, why: "Ụlọ ọrụ chọrọ ịhụ ndị na-eso gị, mmekọ gị na media kit gị." },
            { objective: "O1", q: "Ị na-akụzi kampụ nka maka ụmụaka, ị chọkwara saịtị maka ya. Kedu ngalaba dabara?", options: ["About, Services, Highlights na Contact nwere ndebanye aha", "Naanị ebe foto", "Naanị stats gị", "Ndepụta ndị iro gị n'egwuregwu"], answer: 0, why: "Saịtị nkuzi ma ọ bụ kampụ chọrọ services, usoro oge na ndebanye aha." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Iji AI dee peeji gị",
          minutes: 5,
          goal: "Jiri ngwa enyemaka AI dee draft ngalaba About gị na ederede ngalaba ndị ọzọ, wee dezie ya.",
          text: [
            "Nye ngwa enyemaka AI eziokwu gị ma rịọ ya draft: \"I'm a 2027 graduate, 6'1\" outside hitter, 3.6 GPA, team captain, want to study engineering. Write a 100-word About section for my recruiting website in first person, friendly and confident.\" (Ị nwekwara ike ide ya n'Igbo ma ọ bụ n'asụsụ ọ bụla i ji ede.)",
            "Lelee eziokwu ọ bụla. AI nwere ike itinye ihe na-abụghị eziokwu, dị ka onyinye mmeri i nwetaghị. Wepụ ihe ọ bụla ị na-enweghị ike igosi na ọ bụ eziokwu, ma dee ya n'okwu nke gị.",
            "Edebela ozi nzuzo na peeji ahụ: enweghị adreesị ụlọ, nọmba ekwentị, ụbọchị ọmụmụ zuru ezu ma ọ bụ usoro oge ụlọ akwụkwọ gị. Maka kọntaktị, jiri email ọzọ i mere naanị maka egwuregwu, ma ọ bụ fọm kọntaktị. Ọ bụrụ na ị ka bụ nwata (erubeghị afọ 18), depụtakwa nne ma ọ bụ nna gị, ma ọ bụ onye nkuzi gị, dị ka onye a ga-akpọtụrụ."
          ],
          steps: ["Depụta eziokwu gị.", "Rịọ AI ka o dee draft About dị mkpụmkpụ.", "Lelee eziokwu ọ bụla ma wepụ ihe ọ bụla na-abụghị eziokwu.", "Degharịa ya n'okwu nke gị.", "Kpebie ụzọ isi kpọtụrụ gị n'enweghị nsogbu."],
          words: [["Onye mbụ (first person)", "ide ihe site n'iji \"m\" na \"nke m\"."], ["Fọm kọntaktị (contact form)", "igbe dị na saịtị ebe ndị ọbịa na-ezitere gị ozi n'ahụghị email gị."]],
          slides: [
            { title: "Nye AI eziokwu gị", bullets: ["Afọ ị ga-agụcha, ọnọdụ gị n'egwuregwu, ogo gị", "Akara ụlọ akwụkwọ, idu ndú, ebumnuche", "Rịọ maka okwu 100, n'onye mbụ"] },
            { title: "Lelee eziokwu ọ bụla", bullets: ["AI nwere ike ichepụta onyinye mmeri", "Wepụ ihe ị na-enweghị ike igosi", "Jiri okwu nke gị"] },
            { title: "Kọntaktị n'enweghị nsogbu", bullets: ["Email egwuregwu dị iche ma ọ bụ fọm", "Enweghị adreesị, ekwentị ma ọ bụ ụbọchị ọmụmụ", "Ụmụaka: depụtakwa nne/nna ma ọ bụ onye nkuzi"] }
          ],
          tryIt: "Jiri ngwa enyemaka AI dee draft ngalaba About gị. Lelee eziokwu ọ bụla, dezie ya ka ọ dị n'okwu gị, ma mepụta email egwuregwu dị iche ma ọ bụrụ na i nweghị otu.",
          youCanNow: "iji enyemaka AI dee ederede weebụsaịtị ziri ezi na ịhọrọ ụzọ isi kpọtụrụ gị n'enweghị nsogbu.",
          quickCheck: [
            { objective: "O2", q: "Kedu ozi kwesịrị ịnọ n'ebe ọ na-adịghị na saịtị gị?", options: ["Egwuregwu gị na ọnọdụ gị n'egwuregwu", "Afọ ị ga-agụcha", "Adreesị ụlọ gị", "Njikọ highlights gị"], answer: 2, why: "Edebela adreesị ụlọ, nọmba ekwentị, ụbọchị ọmụmụ zuru ezu na usoro oge na peeji ahụ." },
            { objective: "O2", q: "Draft AI kwuru na ị bụ \"all-state\", mana ị bụghị. Gịnị ka ị ga-eme?", options: ["Hapụ ya; ọ dịghị onye na-elele", "Gbanwee ya ka ọ bụrụ \"fọrọ nke nta ka ọ bụrụ all-state\"", "Rịọ AI ka ọ tinyekwuo onyinye mmeri", "Wepụ ya ma dee naanị eziokwu"], answer: 3, why: "Lelee eziokwu ọ bụla ma wepụ ihe ọ bụla ị na-enweghị ike igosi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ihe ndabere SEO: inyere Google aka ịghọta peeji gị",
          minutes: 5,
          goal: "Dee aha peeji, isiokwu, nkọwa dị mkpụmkpụ na alt text maka foto ndị na-enyere nchọta aka.",
          text: [
            "SEO, ma ọ bụ search engine optimization, pụtara ime ka peeji gị dị mfe nye igwe nchọta dị ka Google ịghọta, ka ndị kwesịrị ekwesị wee chọta ya.",
            "SEO Starter Guide nke Google n'onwe ya na-atụ aro ihe ndabere ole na ole: aha peeji doro anya, nke pụrụ iche (dịka ọmụmaatụ \"Jordan Lee | Volleyball Outside Hitter, Class of 2027\"), isiokwu na-ahazi peeji ahụ, ederede bara uru, nke ọhụrụ, e dere maka mmadụ, nkọwa peeji dị mkpụmkpụ, na alt text dị mkpụmkpụ na-akọwa foto.",
            "Buru ụzọ dee maka mmadụ. Ejila keyword juputa ya (keyword stuffing); naanị jiri okwu onye nkuzi ma ọ bụ ụlọ ọrụ ga-ede, dị ka aha gị, egwuregwu gị, ọnọdụ gị n'egwuregwu, afọ ị ga-agụcha na obodo ma ọ bụ mpaghara gị."
          ],
          steps: ["Dee aha peeji nwere aha gị, egwuregwu gị na ọnọdụ gị ma ọ bụ ọrụ gị.", "Jiri isiokwu maka ngalaba ọ bụla.", "Dee nkọwa peeji nke nwere otu ahịrịokwu ma ọ bụ abụọ.", "Tinye alt text dị mkpụmkpụ na foto ọ bụla.", "Jiri okwu ndị ị na-achọ iru ga-eji chọọ."],
          words: [["SEO", "search engine optimization: inyere igwe nchọta aka ịghọta peeji gị ka ndị mmadụ chọta ya."], ["Alt text", "obere nkọwa e dere maka foto, nke igwe nchọta na ngwa na-agụpụta ihuenyo (screen readers) na-eji."], ["Keyword", "okwu ma ọ bụ nkebi okwu ndị mmadụ na-ede n'igwe nchọta."]],
          slides: [
            { title: "SEO n'otu ahịrị", bullets: ["Nyere Google aka ịghọta peeji gị", "Ka ndị kwesịrị ekwesị chọta ya"] },
            { title: "Ihe ndabere Google", bullets: ["Aha peeji doro anya, pụrụ iche", "Isiokwu maka ngalaba ọ bụla", "Nkọwa dị mkpụmkpụ na ederede bara uru", "Alt text na foto"] },
            { title: "Dee maka mmadụ", bullets: ["Aha, egwuregwu, ọnọdụ, afọ ịgụcha, mpaghara", "Enweghị keyword stuffing"] }
          ],
          sources: [{ name: "Google Search Central: SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" }],
          tryIt: "Dee aha peeji gị, isiokwu ngalaba anọ ahụ, nkọwa peeji nwere otu ahịrịokwu, na alt text maka foto abụọ ị chọrọ iji.",
          youCanNow: "ide aha peeji, isiokwu, nkọwa na alt text na-enyere ndị mmadụ aka ịchọta peeji gị.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka SEO na-enyere aka?", options: ["Inyere igwe nchọta aka ịghọta peeji gị ka ndị kwesịrị ekwesị chọta ya", "Ime ka foto peeji gị bata ngwa ngwa", "Izobe peeji gị pụọ na Google", "Ịkwụ ụgwọ maka mgbasa ozi"], answer: 0, why: "SEO pụtara ime ka peeji gị dị mfe nye igwe nchọta ịghọta." },
            { objective: "O3", q: "Ị na-etinye foto gị ka ị na-agba ọsọ hurdle. Kedu alt text ị ga-ede?", options: ["\"IMG_4432\"", "\"foto\"", "\"Sam Ortiz na-awụfe hurdle n'asọmpi county\"", "\"hurdles hurdles hurdles track track\""], answer: 2, why: "Alt text bụ obere ahịrị na-akọwa foto ahụ, n'ejighị keyword juputa ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịhazi na ide saịtị gị",
        questions: [
          { objective: "O1", q: "Gịnị mere i ji kwesịrị inwe weebụsaịtị nke gị?", options: ["Soshal midia megidere iwu", "Ndị nkuzi na-agụ naanị akwụkwọ", "Ọ bụ peeji ị na-achịkwa nke dị mfe ịgụ", "Ọ na-anọchi anya mmega ahụ"], answer: 2, why: "Saịtị gị na-anọgide otu ahụ, ọ dịkwa mfe nye ndị nkuzi na ụlọ ọrụ ilegharị anya." },
          { objective: "O2", q: "AI tinyere onyinye mmeri i nwetaghị na ngalaba About gị. Gịnị ka ị ga-eme?", options: ["Wepụ ya", "Hapụ ya", "Tinyekwuo onyinye mmeri", "Zoo ya n'obere mkpụrụ edemede"], answer: 0, why: "Tinye naanị eziokwu ị nwere ike igosi." },
          { objective: "O2", q: "Kedu ụzọ kọntaktị enweghị nsogbu maka nwata?", options: ["Nọmba ekwentị ụlọ", "Adreesị ụlọ", "Usoro oge klas", "Email egwuregwu ma ọ bụ fọm, tinyere kọntaktị nne/nna ma ọ bụ onye nkuzi"], answer: 3, why: "Ọ na-eme ka ndị mmadụ ruo gị aka n'egosighị ozi nzuzo." },
          { objective: "O3", q: "Kedu aha peeji siri ike?", options: ["\"Home\"", "\"Jordan Lee | Volleyball Outside Hitter, Class of 2027\"", "\"Welcome!!!\"", "\"Page 1\""], answer: 1, why: "Ọ na-agwa ndị mmadụ na Google kpọmkwem ihe peeji ahụ bụ." },
          { objective: "O3", q: "Gịnị bụ alt text?", options: ["Okwuntughe nzuzo", "Obere nkọwa foto", "Weebụsaịtị nke abụọ", "Hashtag"], answer: 1, why: "Alt text na-akọwa foto maka igwe nchọta na ngwa na-agụpụta ihuenyo." }
        ]
      }
    },
    {
      name: "Isi 2: Iwu na ibipụta",
      lessons: [
        {
          objectives: ["O4"],
          title: "Iwu peeji gị na Google Sites",
          minutes: 6,
          goal: "Wuo saịtị otu peeji gị na Google Sites.",
          text: [
            "Google Sites bụ ngwa iwu weebụsaịtị n'efu nke Google. Ị chọrọ akaụntụ Google. Meghee sites.google.com, malite saịtị ọhụrụ efu ma ọ bụ template, ma tinye ngalaba gị.",
            "Jiri ngwa iwu ahụ tinye igbe ederede, foto, isiokwu na bọtịnụ, na itinye (embed) vidiyo highlights YouTube gị. Họrọ theme dị mfe nwere agba otu egwuregwu gị na ederede dị mfe ịgụ. Jiri naanị foto i sere ma ọ bụ nke i nwere ikike iji, ma gbasoo iwu ụlọ akwụkwọ gị gbasara logo.",
            "Mee ka ọ dị ọcha: otu peeji, ngalaba anọ, ederede buru ibu dị mfe ịgụ, na otu bọtịnụ doro anya maka ịkpọtụrụ gị ma ọ bụ ikiri highlights."
          ],
          steps: ["Gaa na sites.google.com ma banye (sign in).", "Malite saịtị efu ma ọ bụ template.", "Tinye aha peeji gị na ngalaba anọ nwere isiokwu.", "Mado ederede i deziri.", "Tinye foto nwere alt text ma tinye (embed) vidiyo highlights gị.", "Tinye otu bọtịnụ kọntaktị ma ọ bụ njikọ fọm."],
          words: [["Template", "nhazi e meworo emecha nke ị na-ejuputa."], ["Embed", "igosi vidiyo ma ọ bụ ihe si na saịtị ọzọ n'ime peeji gị."]],
          slides: [
            { title: "Google Sites", bullets: ["Ngwa iwu weebụsaịtị n'efu", "Ọ chọrọ akaụntụ Google", "sites.google.com"] },
            { title: "Tinye ihe gị", bullets: ["Aha peeji na ngalaba anọ", "Foto nwere alt text", "Vidiyo highlights etinyere n'ime ya"] },
            { title: "Mee ka ọ dị ọcha", bullets: ["Ederede dị mfe ịgụ, agba otu egwuregwu gị", "Otu bọtịnụ doro anya", "Foto gị; gbasoo iwu logo"] }
          ],
          tryIt: "Wuo peeji gị na Google Sites nwere aha gị, ngalaba anọ, opekata mpe otu foto nwere alt text, na vidiyo highlights gị ma ọ bụ ihe nnọchi ya.",
          youCanNow: "iwu weebụsaịtị otu peeji dị ọcha maka onye egwuregwu na Google Sites.",
          quickCheck: [
            { objective: "O4", q: "Ebee ka ị ga-aga ịmalite peeji Google Sites?", options: ["sites.google.com", "Weebụsaịtị ụlọ akwụkwọ gị", "App soshal midia", "Search Console"], answer: 0, why: "Meghee sites.google.com ma banye site n'akaụntụ Google." },
            { objective: "O4", q: "Ị chọrọ ka vidiyo highlights gị dị na saịtị gị. Gịnị ka ị ga-eme?", options: ["Mado screenshot ya", "Kọwaa ya naanị n'okwu", "Zigara ndị ọbịa ya n'email", "Tinye (embed) vidiyo YouTube gị n'ime peeji ahụ"], answer: 3, why: "Google Sites nwere ike itinye (embed) vidiyo highlights YouTube." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ibipụta na ịlele saịtị gị",
          minutes: 5,
          goal: "Bipụta saịtị gị, nwalee ya na ekwentị ma kesaa njikọ ya.",
          text: [
            "Mgbe peeji gị dị njikere, jiri bọtịnụ publish ma họrọ adreesị weebụ saịtị gị. Họrọ adreesị dị mkpụmkpụ nwere aha gị na egwuregwu gị.",
            "Nwalee ya na ekwentị, n'ihi na ọtụtụ ndị nkuzi na ndị na-akwado gị ga-emeghe ya n'ebe ahụ. Lelee na njikọ na bọtịnụ ọ bụla na-arụ ọrụ, vidiyo na-akpọ, ederede dịkwa mfe ịgụ. Rịọkwa onye nkuzi ma ọ bụ nne ma ọ bụ nna gị ka ha lelee ya.",
            "Kesaa njikọ ahụ na bio soshal midia gị, n'ihe mbinye aka email gị na profaịlụ recruiting gị. Ọ bụrụ na ị gbanwee ozi kọntaktị gị, melite saịtị ahụ ozugbo."
          ],
          steps: ["Pịa publish ma họrọ adreesị weebụ dị mkpụmkpụ.", "Meghee ya na ekwentị.", "Nwalee njikọ, bọtịnụ na vidiyo ọ bụla.", "Rịọ onye nkuzi ma ọ bụ nne ma ọ bụ nna ka ha lelee ya.", "Tinye njikọ ahụ na bio gị na ihe mbinye aka email gị."],
          words: [["Bipụta (publish)", "ime ka saịtị gị pụta ìhè n'ịntanetị ka onye ọ bụla hụ ya."], ["URL", "adreesị weebụ, dị ka njikọ ị na-ekesa."]],
          slides: [
            { title: "Bipụta", bullets: ["Họrọ adreesị dị mkpụmkpụ nwere aha gị na egwuregwu gị"] },
            { title: "Nwalee na ekwentị", bullets: ["Njikọ na bọtịnụ na-arụ ọrụ?", "Vidiyo na-akpọ?", "Ederede dị mfe ịgụ?"] },
            { title: "Kesaa ya", bullets: ["Bio soshal midia", "Ihe mbinye aka email", "Profaịlụ recruiting"] }
          ],
          tryIt: "Bipụta saịtị gị, nwalee ya na ekwentị, rịọ otu okenye ka o lelee ya, ma tinye njikọ ya n'otu profaịlụ soshal midia.",
          youCanNow: "ibipụta, ịnwale na ikesa weebụsaịtị gị dị ka onye egwuregwu.",
          quickCheck: [
            { objective: "O5", q: "Gịnị na-eme ka adreesị weebụ saịtị dị mma?", options: ["Ogologo ahịrị nọmba", "Dị mkpụmkpụ, nwere aha gị na egwuregwu gị", "Nọmba ekwentị gị", "Naanị aha ụlọ akwụkwọ gị"], answer: 1, why: "Họrọ adreesị dị mkpụmkpụ nwere aha gị na egwuregwu gị." },
            { objective: "O5", q: "Ị gbanwere email egwuregwu gị. Gịnị ka ị ga-eme na saịtị gị?", options: ["Hapụ ya; ọ dịghị onye na-agụ ya", "Hichapụ saịtị ahụ", "Melite ozi kọntaktị ozugbo", "Chere ruo oge egwuregwu ọzọ"], answer: 2, why: "Ọ bụrụ na ozi kọntaktị gị agbanwee, melite saịtị ahụ ozugbo." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Idebe ya ọhụrụ na ịlele nchọta",
          minutes: 5,
          goal: "Hazie usoro mmelite ma hụ otu saịtị gị si apụta na nchọta.",
          text: [
            "Igwe nchọta na ndị ọbịa na-amasị peeji ndị dị ọhụrụ. Melite stats gị, highlights gị na usoro oge gị mgbe oge egwuregwu ọ bụla ma ọ bụ mmemme dị mkpa gwụrụ, ma gbanwee ụbọchị dị na ngalaba About gị.",
            "Saịtị ọhụrụ nwere ike iwe oge tupu ha apụta na nsonaazụ nchọta. Chọọ aha gị tinyere egwuregwu gị na Google ma hụ ihe pụtara. Google na-enye ngwa n'efu a na-akpọ Search Console nke ndị nwe saịtị nwere ike iji hụ otu saịtị ha si eme na nchọta; SEO Starter Guide na-akọwa ya.",
            "Ọnwa ole na ole ọ bụla, jụọ ngwa enyemaka AI: \"Nke a bụ ederede weebụsaịtị m. Tụọ aro ụzọ atọ m ga-esi mee ka o doo anya karị nye ndị nkuzi mahadum.\" Wee kpebie ihe ị ga-agbanwe."
          ],
          steps: ["Debe ncheta ka ị melite mgbe oge egwuregwu ọ bụla gwụrụ.", "Chọọ aha gị tinyere egwuregwu gị ma dee ihe pụtara.", "Gụọ banyere Search Console na ntuziaka Google.", "Rịọ AI aro atọ ga-eme ka ọ doo anya ma họrọ nke ị ga-eji."],
          words: [["Search Console", "ngwa n'efu nke Google na-egosi ndị nwe saịtị otu saịtị ha si apụta na Google Search."], ["Nsonaazụ nchọta (search results)", "ndepụta peeji igwe nchọta na-egosi maka nchọta."]],
          slides: [
            { title: "Debe ya ọhụrụ", bullets: ["Melite stats na highlights kwa oge egwuregwu", "Gbanwee ụbọchị na ngalaba About gị"] },
            { title: "Lelee nchọta", bullets: ["Saịtị ọhụrụ nwere ike iwe oge tupu ọ pụta", "Chọọ aha gị tinyere egwuregwu gị", "Search Console maka ndị nwe saịtị"] },
            { title: "Mee ka ọ ka mma site n'AI", bullets: ["Rịọ aro atọ ga-eme ka ọ doo anya", "Gị na-ekpebi ihe ị ga-agbanwe"] }
          ],
          sources: [{ name: "Google Search Central: SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" }],
          tryIt: "Ọrụ ikpeazụ: hụ na saịtị i bipụtara nwere aha peeji doro anya, ederede About nke AI nyere aka dee ma i dezie, stats na highlights, ụzọ kọntaktị enweghị nsogbu, alt text maka foto na njikọ soshal gaa na ya. Chọọ aha gị na egwuregwu gị na Google ma dee ihe pụtara.",
          youCanNow: "idebe saịtị gị ọhụrụ na ịlele otu o si apụta na nchọta.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ Google Search Console?", options: ["Ngwa Google n'efu na-egosi otu saịtị gị si eme na nchọta", "Ọrụ mgbasa ozi a na-akwụ ụgwọ", "Ngwa iwu weebụsaịtị", "App soshal midia"], answer: 0, why: "Search Console na-eme ka ndị nwe saịtị hụ otu saịtị ha si eme na nchọta." },
            { objective: "O6", q: "Oge egwuregwu gị kwụsịrị ugbu a. Gịnị ka usoro mmelite gị kwuru ka i mee?", options: ["Ọ dịghị ihe ruo mgbe ị gụchara akwụkwọ", "Hichapụ naanị highlights ochie", "Gbanwee adreesị saịtị gị", "Melite stats gị, highlights gị na ụbọchị dị na ngalaba About gị"], answer: 3, why: "Melite mgbe oge egwuregwu ọ bụla ma ọ bụ mmemme dị mkpa gwụrụ ka peeji ahụ dịrị ọhụrụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iwu na ibipụta",
        questions: [
          { objective: "O4", q: "Gịnị ka ị chọrọ iji Google Sites?", options: ["Atụmatụ a na-akwụ ụgwọ", "Asambodo n'ide koodu", "Sava (server)", "Akaụntụ Google"], answer: 3, why: "Google Sites bụ n'efu site n'akaụntụ Google." },
          { objective: "O4", q: "Kedu foto ị nwere ike itinye na saịtị gị?", options: ["Foto i sere ma ọ bụ nke i nwere ikike iji", "Foto ọ bụla ị hụrụ n'ịntanetị", "Foto ndị egwuregwu ndị ọzọ", "Logo ụlọ akwụkwọ n'ajụghị ajụjụ"], answer: 0, why: "Jiri naanị foto nke gị ma ọ bụ nke e kwere ka i jiri." },
          { objective: "O5", q: "Gịnị mere i ji nwalee saịtị gị na ekwentị?", options: ["A machiri ekwentị iwu", "Ọ na-adị njọ na kọmputa", "Ọtụtụ ndị ọbịa ga-emeghe ya na ekwentị", "Ọ dịghị ihe kpatara ya"], answer: 2, why: "Ndị nkuzi na ndị na-akwado gị na-emeghekarị njikọ na ekwentị." },
          { objective: "O6", q: "Saịtị gị apụtaghị na Google n'ụbọchị i bipụtara ya. Gịnị nwere ike ịkpata nke a?", options: ["Ọ mebiri ruo mgbe ebighị ebi", "Google machiri ndị egwuregwu", "Ị ga-akwụ ụgwọ", "Saịtị ọhụrụ nwere ike iwe oge tupu ọ pụta"], answer: 3, why: "Igwe nchọta chọrọ oge ịchọta peeji ọhụrụ." },
          { objective: "O6", q: "Olee mgbe ị ga-emelite stats na highlights gị?", options: ["Mgbe ọ bụla", "Mgbe oge egwuregwu ọ bụla ma ọ bụ mmemme dị mkpa gwụrụ", "Otu ugboro n'afọ iri", "Naanị mgbe onye nkuzi mere mkpesa"], answer: 1, why: "Ihe ọhụrụ na-enyere ndị ọbịa na nchọta aka." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: SEO na Iwu Weebụsaịtị Gị site n'AI",
    questions: [
      { objective: "O3", q: "SEO pụtara:", options: ["Social everyday output", "Sports event organizer", "Search engine optimization", "Site editing online"], answer: 2, why: "Ọ pụtara inyere igwe nchọta aka ịghọta peeji gị." },
      { objective: "O1", q: "Saịtị recruiting kwesịrị igosi:", options: ["Stats, akara ụlọ akwụkwọ, highlights", "Adreesị ụlọ gị", "Okwuntughe gị", "Asịrị gbasara ndị iro gị"], answer: 0, why: "Nke ahụ bụ ihe ndị nkuzi chọrọ." },
      { objective: "O1", q: "Peeji ole ka ị ga-eji bido?", options: ["Otu", "Iri abụọ", "Efu", "Otu narị"], answer: 0, why: "Otu peeji doro anya zuru ezu ịmalite." },
      { objective: "O1", q: "Kedu ngalaba na-enyere ndị mmadụ aka ịkpọtụrụ gị?", options: ["Ihe nka n'ala peeji", "Agba theme", "Contact", "Ụdị mkpụrụ edemede (fonts)"], answer: 2, why: "Contact na-agwa ndị mmadụ otu ha ga-esi ruo gị aka." },
      { objective: "O2", q: "Mgbe AI dere draft ngalaba About gị, ị ghaghị:", options: ["Ibipụta ya n'agụghị ya", "Ịlele eziokwu ọ bụla", "Itinye onyinye mmeri ndị ọzọ", "Ime ka ọ dị ogologo"], answer: 1, why: "AI nwere ike ichepụta eziokwu." },
      { objective: "O2", q: "Kedu nke na-ekwesịghị ịdị na saịtị gị?", options: ["Ọnọdụ gị n'egwuregwu", "Vidiyo highlights gị", "Afọ ị ga-agụcha", "Ụbọchị ọmụmụ gị zuru ezu na adreesị ụlọ gị"], answer: 3, why: "Ndị ahụ bụ ozi nzuzo." },
      { objective: "O2", q: "Fọm kọntaktị na-ekwe ka ndị mmadụ:", options: ["Hụ okwuntughe gị", "Dezie saịtị gị", "Zitere gị ozi n'ahụghị email gị", "Kwụọ gị ụgwọ"], answer: 2, why: "Ọ na-echebe adreesị email gị." },
      { objective: "O3", q: "Kedu nke na-enyere Google aka ịghọta peeji gị?", options: ["Mkpụrụ edemede ukwu niile", "Ederede ezoro ezo", "Enweghị okwu ọ bụla", "Aha peeji doro anya na isiokwu"], answer: 3, why: "Ntuziaka Google na-atụ aro aha peeji na isiokwu doro anya." },
      { objective: "O3", q: "Keyword stuffing pụtara:", options: ["Ikwughachi okwu nchọta n'ụzọ na-adịghị nkịtị", "Ide maka mmadụ", "Itinye alt text", "Iji isiokwu"], answer: 0, why: "Dee maka mmadụ, ọ bụghị keyword juputara." },
      { objective: "O3", q: "Ezigbo alt text maka foto egwuregwu na-aga n'ihu bụ:", options: ["\"IMG_2034\"", "\"Jordan Lee na-akụ bọọlụ n'asọmpi semifinal steeti\"", "\"foto\"", "Ihe efu"], answer: 1, why: "Ọ dị mkpụmkpụ ma na-akọwa ihe." },
      { objective: "O3", q: "Nkọwa peeji kwesịrị ịbụ:", options: ["Edemede zuru ezu", "Ndepụta okwuntughe", "Otu ahịrịokwu ma ọ bụ abụọ gbasara peeji ahụ", "Ihe efu"], answer: 2, why: "Nkọwa dị mkpụmkpụ nwere ike ịpụta na nsonaazụ nchọta." },
      { objective: "O4", q: "Google Sites bụ:", options: ["Ngwa iwu weebụsaịtị n'efu", "Naanị app a na-akwụ ụgwọ", "Netwọk soshal", "Egwuregwu vidiyo"], answer: 0, why: "Ọ bụ ngwa iwu n'efu nke Google." },
      { objective: "O4", q: "Iji gosi vidiyo highlights gị na saịtị gị, ị ga-:", options: ["Kọwaa ya naanị", "Zigara ndị ọbịa ya n'email", "Bipụta ya n'akwụkwọ", "Tinye (embed) ya"], answer: 3, why: "Itinye (embed) ya na-eme ka ọ kpọọ na peeji gị." },
      { objective: "O4", q: "Tupu i jiri logo ụlọ akwụkwọ gị, ị kwesịrị:", options: ["Isegharị ya", "Ịgbaso iwu logo ụlọ akwụkwọ gị", "Ileghara iwu anya", "Ire ya"], answer: 1, why: "Ụlọ akwụkwọ na-achịkwa logo ha." },
      { objective: "O5", q: "Ezigbo adreesị saịtị bụ:", options: ["Nọmba enweghị usoro", "Dị mkpụmkpụ, nwere aha gị na egwuregwu gị", "Ogologo nke ukwuu", "Okwuntughe gị"], answer: 1, why: "Ọ dị mfe icheta na ikesa." },
      { objective: "O5", q: "Mgbe i bipụtachara, onye kwesịrị ilele saịtị gị?", options: ["Ọ dịghị onye", "Onye ị na-amaghị n'ịntanetị", "Onye iro gị n'egwuregwu", "Onye nkuzi ma ọ bụ nne ma ọ bụ nna"], answer: 3, why: "Anya nke abụọ na-ahụ mperi." },
      { objective: "O5", q: "Ebee ka ị ga-ekesa njikọ saịtị gị?", options: ["Bio, ihe mbinye aka email na profaịlụ recruiting", "Ebe ọ bụla", "Naanị n'akwụkwọ", "N'ozi spam"], answer: 0, why: "Ndị ahụ bụ ebe ndị nkuzi na ụlọ ọrụ na-ele anya." },
      { objective: "O6", q: "Search Console bụ:", options: ["Igwe egwuregwu vidiyo", "Mgbasa ozi a na-akwụ ụgwọ", "Ngwa Google n'efu na-egosi otu saịtị gị si apụta na nchọta", "App soshal"], answer: 2, why: "Ndị nwe saịtị na-eji ya elele otu saịtị ha si eme na nchọta." },
      { objective: "O6", q: "Kedu otu ị ga-esi lelee otu saịtị gị si apụta na nchọta?", options: ["Rịọ AI ka o chee echiche", "Lelee ihu igwe", "Malitegharịa ekwentị gị", "Chọọ aha gị tinyere egwuregwu gị"], answer: 3, why: "Ịchọ ya na-egosi ihe ndị ọzọ na-ahụ." },
      { objective: "O6", q: "AI tụrụ aro mgbanwe atọ maka saịtị gị. Ị ga-:", options: ["Jiri ha niile n'ike", "Kpebie nke ị ga-eji", "Ghara iji nke ọ bụla", "Hichapụ saịtị gị"], answer: 1, why: "AI na-atụ aro; gị na-ekpebi." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [1, 4, 7, 9, 11, 14, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Aha peeji na ihe ndabere SEO", objective: "O3", notYet: "Aha peeji enweghị aha gị ma ọ bụ egwuregwu gị, ma ọ bụ foto enweghị alt text.", meets: "Aha peeji nwere aha na egwuregwu, isiokwu maka ngalaba ọ bụla, nkọwa dị mkpụmkpụ na alt text na foto ọ bụla.", exceeds: "Na-eji okwu ndị a na-achọ iru ga-eji chọọ, dị ka ọnọdụ n'egwuregwu, afọ ịgụcha na mpaghara, n'enweghị keyword stuffing." },
      { name: "Ngalaba About", objective: "O2", notYet: "Nwere eziokwu ụgha ma ọ bụ ọ dị ka ederede AI e detuuru.", meets: "Eziokwu ọ bụla bụ eziokwu, e lelere ya, e dekwara ya n'okwu onye egwuregwu ahụ.", exceeds: "Dabara ndị bụ isi a na-achọ iru, dị ka akara ụlọ akwụkwọ na agwa maka ndị nkuzi mahadum." },
      { name: "Stats na highlights", objective: "O4", notYet: "Enweghị ya, ọ dị ochie, ma ọ bụ na-eji foto n'enweghị ikike.", meets: "Stats nke ugbu a na vidiyo highlights etinyere n'ime ya, naanị foto e nyere ikike, a gbasokwara iwu logo ụlọ akwụkwọ.", exceeds: "Na-egosi ụbọchị e meliteere stats ikpeazụ na obere nkọwa maka highlight ọ bụla." },
      { name: "Kọntaktị n'enweghị nsogbu", objective: "O2", notYet: "Na-egosi adreesị ụlọ, nọmba ekwentị onwe ma ọ bụ ụbọchị ọmụmụ zuru ezu.", meets: "Email egwuregwu ma ọ bụ fọm kọntaktị, tinyere kọntaktị nne/nna ma ọ bụ onye nkuzi maka ụmụaka.", exceeds: "E nwalere bọtịnụ kọntaktị, azịza na-agakwa n'akaụntụ a na-elele mgbe niile." },
      { name: "E bipụtara, jikọọ ma lelee ya", objective: "O5", notYet: "E bipụtaghị ya, njikọ mebiri emebi, ma ọ bụ enweghị njikọ site na profaịlụ.", meets: "E bipụtara ya n'adreesị dị mkpụmkpụ, nwalee ya na ekwentị, onye nkuzi ma ọ bụ nne ma ọ bụ nna lelere ya, e jikọkwara ya site n'otu profaịlụ soshal.", exceeds: "E dere nsonaazụ nchọta maka aha na egwuregwu, e debekwara ncheta mmelite." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe bipụtara saịtị ha ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla",
      "Ndị na-amụ ihe saịtị ha pụtara mgbe ha chọrọ aha ha na egwuregwu ha na nsochi ụbọchị 30",
      "Ndị na-amụ ihe kọrọ na onye nkuzi, onye na-achọ ndị egwuregwu ma ọ bụ ụlọ ọrụ kpọtụrụ ha site na saịtị ha",
      "Ndị na-amụ ihe meliteere saịtị ha mgbe oge egwuregwu ha ọzọ ma ọ bụ mmemme dị mkpa gwụrụ"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa (nke kacha mfe) ma ọ bụ ekwentị nwere ịntanetị",
      "Akaụntụ Google n'efu maka Google Sites",
      "Ngwa enyemaka AI n'efu (ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini)",
      "Stats gị, njikọ vidiyo highlights na foto i nwere ikike iji",
      "Ihe dị ka nkeji 60"
    ],
    facilitatorNotes: [
      "Nyere ndị egwuregwu aka imepụta email egwuregwu dị iche ma ọ bụ fọm kọntaktị ka ozi onwe ha nọrọ na nzuzo.",
      "Maka ụmụaka, mee ka nne ma ọ bụ nna ma ọ bụ onye nlekọta lelee saịtị ahụ tupu e bipụta ya ma depụta ya dị ka kọntaktị.",
      "Lelee iwu ụlọ akwụkwọ gbasara logo na foto tupu nkuzi iwu saịtị.",
      "Mee ka ndị egwuregwu gbanwee ekwentị ma nwalee saịtị ibe ha maka njikọ mebiri emebi na ịdị mfe ịgụ.",
      "Chetara ndị na-amụ ihe na saịtị ọhụrụ nwere ike iwe oge tupu ha apụta na nchọta; lelee ọzọ na nsochi ụbọchị 30."
    ]
  }
};
