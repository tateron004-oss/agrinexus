"use strict";

// Koach Learn course (Igbo translation of africa-life/afr-online-freelancing.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const THREE_MTT = { name: "3MTT (3 Million Technical Talent), Naịjirịa: Federal Ministry of Communications, Innovation and Digital Economy na NITDA", url: "https://3mtt.nitda.gov.ng/" };
const AJIRA = { name: "Kenya News Agency: a gbara ndị ntorobịa ume ka ha nabata Ajira Digital Program (mmemme gọọmentị maka ọrụ n'ịntanetị)", url: "https://www.kenyanews.go.ke/youth-urged-to-embrace-ajira-digital-program/" };
const KRA = { name: "Kenya Revenue Authority (ụtụ isi ego mmadụ na-enweta, gụnyere ego e nwetara n'ịntanetị)", url: "https://www.kra.go.ke" };
const GRA = { name: "Ghana Revenue Authority (ọfịs ụtụ isi Ghana)", url: "https://gra.gov.gh" };
const SEC_NG = { name: "Nairametrics (14 May 2026): SEC Naịjirịa na-adọ aka na ntị maka atụmatụ a na-akpọsa na WhatsApp, TikTok na Instagram", url: "https://nairametrics.com/2026/05/14/sec-warns-nigerians-against-rising-ponzi-schemes-on-whatsapp-tiktok-instagram/" };

module.exports = {
  id: "afr-online-freelancing-ig",
  lang: "ig",
  translationOf: "afr-online-freelancing",
  category: "Africa: Life and Work",
  name: "Ọrụ Freelance na Ọrụ Site n'Ebe Dị Anya n'Ịntanetị site n'Afrịka",
  skills: "Ịhọrọ ọrụ ị nwere ike ire n'ịntanetị, Ide profaịlụ na ime obere portfolio, Ide proposal maka mgbasa ozi ọrụ, Ikwekọrịta n'ọrụ na iweta ya n'oge, Ịnata ụgwọ na idebe ndekọ, Ịmata ọrụ adịgboroja na aghụghọ ịkwụ ụgwọ",
  outcome: "ime ka nka ị nweburu ghọọ ọrụ ị na-ere n'ịntanetị: ide profaịlụ nwere ihe nlereanya nke ọrụ gị, ide proposal maka ezi mgbasa ozi ọrụ, ikwekọrịta n'ọrụ ahụ n'ederede, ịnata ụgwọ n'enweghị nsogbu, idebe ndekọ, na ịjụ ọrụ adịgboroja.",
  about: [
    "Ndị ntorobịa na ndị okenye n'Afrịka niile na-akpata ego n'ịntanetị site n'ide ihe, ịsụgharị asụsụ, ịse ihe (design), itinye data, inyere ndị ahịa aka, ide okwu e kwuru ekwu, idebe akwụkwọ ego, ilekọta soshal midia na inye enyemaka dị ka onye inyeaka n'ebe dị anya, maka ndị ahịa nọ na mba ha na mba ọzọ. Ụfọdụ na-arụ ọrụ site na nyiwe (platform) dị ka Upwork, Fiverr na LinkedIn; ndị ọzọ na-achọta ndị ahịa site na WhatsApp, Facebook na ndị ha maara.",
    "Ihe ọmụmụ a bụ maka ndị na-achọ ọrụ, ụmụ akwụkwọ, ndị gụchara akwụkwọ, nne na nna nọ n'ụlọ, na onye ọ bụla nwere ekwentị ma ọ bụ kọmputa na otu nka. Ị ga-ahọrọ otu ọrụ, dee profaịlụ, chịkọta obere ihe nlereanya nke ọrụ gị, dee proposal, kwekọrịta n'ọrụ, nata ụgwọ, ma mata ọtụtụ ọrụ adịgboroja na-elekwasị ndị freelancer ọhụrụ anya. Gọọmentị na-enyekwa ọzụzụ n'efu, dị ka Ajira Digital na Kenya na 3MTT na Naịjirịa.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\" ị nwere ike ime n'ekwentị. E nwere obere nnwale mgbe nkuzi na isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Ụgwọ nyiwe na ụzọ ịkwụ ụgwọ dị iche iche site na mba ruo mba ma na-agbanwe, ya mere ị ga-amụta ịgụ ha na peeji enyemaka nke nyiwe ọ bụla n'onwe ya."
  ],
  finalTask: "Mee ngwugwu mmalite freelance gị: ahịrị okwu otu nke na-akọwa ọrụ gị, profaịlụ (isiokwu na nkọwa dị mkpụmkpụ), ihe nlereanya abụọ ma ọ bụ atọ nke ọrụ gị, otu proposal e dere maka ezi mgbasa ozi ọrụ ma ọ bụ nke ọmụmaatụ, na ndepụta nchekwa na ịkwụ ụgwọ (otu a ga-esi kwụọ gị ụgwọ, ndekọ ị ga-edebe, ebe ị ga-ajụ maka ụtụ isi, na ihe ịrịba ama nke ọrụ adịgboroja).",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ntorobịa na ndị okenye n'Afrịka niile, n'obodo ukwu na obodo nta: ndị gụchara akwụkwọ na ndị kwụsịrị akwụkwọ na-achọ ọrụ, ndị nwere ọrụ na-achọ ego ọzọ, nne na nna na-arụ ọrụ n'ụlọ, na ndị ọka nka na ndị nwe obere azụmahịa nwere nka ha ga-ere. Ọmụmaatụ sitere na Kenya, Naịjirịa, Ghana, Senegal, Côte d'Ivoire, Cameroon, Egypt na Morocco; ọtụtụ na-asụ Bekee, Frenchi ma ọ bụ Arabik, nke n'onwe ya bụ nka a pụrụ ire.",
    startingPoint: "Ha nwere ike iji smartphone, WhatsApp na soshal midia; ụfọdụ nwere laptọp ma ọ bụ na-eji cyber café. Ọtụtụ nwere nka (ide ihe, asụsụ, design, ịpị mkpụrụ okwu, akaụntụ, ire ahịa) mana ha akọwabeghị ya dị ka ọrụ, edebeghị proposal, ma ọ bụ nweta ụgwọ site n'aka onye ahịa nọ ná mba ọzọ. Ọtụtụ ahụla mgbasa ozi \"rụọ ọrụ n'ụlọ\" nke mechara bụrụ aghụghọ.",
    gap: "Ndị na-amụ ihe kwesịrị igosi otu ọrụ doro anya, dee proposal ga-enweta ọrụ, kwekọrịta n'usoro n'ederede, nata ụgwọ n'enweghị nsogbu, ma zere ọrụ adịgboroja na-arịọ ka ha kwụọ ụgwọ, ka ọrụ n'ịntanetị ghọọ ezi ego e nwetara kama data na ego furu efu.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a sụgharịrị ya n'asụsụ Frenchi na Arabik",
      "Ngwaọrụ: ọtụtụ mgbe naanị smartphone; data dị oke ọnụ; ọkụ latrik nwere ike ịbụ nke a na-apụghị ịtụkwasị obi",
      "Oge: nkuzi nkeji 4 ruo 6",
      "Ụgwọ nyiwe, iwu na ụzọ ịkwụ ụgwọ dị iche iche site na mba ruo mba ma na-agbanwe; iwu ụtụ isi dịkwa iche site na mba ruo mba",
      "Ekesala okwuntughe, PIN, koodu otu oge ma ọ bụ akwụkwọ njirimara (ID) mgbe ọ bụla na onye ahịa ma ọ bụ onye na-ewe ndị ọrụ"
    ],
    prerequisites: "Nka iji ekwentị nke mbido na otu nka ị nwere ike iji rụọrọ ndị ọzọ ọrụ. Adreesị email."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji ndepụta nka nke gị", action: "ịhọrọ otu ọrụ ị nwere ike ire n'ịntanetị ma dee ya dị ka onyinye ahịrị okwu otu", standard: "na-ekwu ihe ị na-eme, onye ị na-emere ya na ihe onye ahịa ga-enweta" },
    { id: "O2", condition: "Na nyiwe ma ọ bụ na peeji dị mfe n'ịntanetị", action: "ide isiokwu na nkọwa profaịlụ ma tinye ihe nlereanya abụọ ma ọ bụ atọ nke ọrụ gị", standard: "n'enweghị ozi nzuzo, ya na ihe nlereanya i mere n'onwe gị" },
    { id: "O3", condition: "Mgbe e nyere gị mgbasa ozi ọrụ", action: "ide obere proposal na-aza mkpa onye ahịa, na-egosi ihe nlereanya metụtara ya, ma na-ajụ otu ajụjụ", standard: "n'okwu na-erughị 150, e dere maka mgbasa ozi ahụ, ọ bụghị nke e detuuru" },
    { id: "O4", condition: "Tupu ị malite ọrụ", action: "ikwekọrịta n'ihe ọrụ ahụ gụnyere, ọnụahịa, ụbọchị njedebe na ọnụ ọgụgụ mgbanwe n'ederede ma weta ọrụ ahụ n'oge", standard: "ya na atụmatụ ndabere ma ọkụ ma ọ bụ data bepụ" },
    { id: "O5", condition: "Mgbe unu kwekọrịtara n'ọrụ", action: "ịhọrọ ụzọ n'enweghị nsogbu a ga-esi kwụọ gị ụgwọ ma debe ndekọ ụgwọ ọ bụla", standard: "na-edebe ọrụ na ịkwụ ụgwọ n'ime nyiwe ahụ mgbe ị na-eji otu, ma na-edekọ ụgwọ ọ bụla n'ime otu izu" },
    { id: "O6", condition: "Mgbe e nyere gị onyinye ọrụ ma ọ bụ ozi ise", action: "ịmata ndị adịgboroja ma kpọọ aha ihe ịrịba ama dị na nke ọ bụla", standard: "na-enweta opekata mpe 4 n'ime 5 ziri ezi, tupu ị kwụọ ụgwọ ma ọ bụ kesaa ozi ọ bụla" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịkwado ịrụ ọrụ n'ịntanetị",
      lessons: [
        {
          title: "Ịhọrọ ọrụ ị nwere ike ire",
          objectives: ["O1"],
          minutes: 5,
          goal: "Họrọ otu ọrụ ma dee ya dị ka onyinye ahịrị okwu otu.",
          text: [
            "Freelancing pụtara ịrụrụ ndị ahịa ọrụ a na-akwụ ụgwọ, otu ọrụ n'otu oge, kama ịrụrụ otu onye were gị n'ọrụ. Ọrụ site n'ebe dị anya (remote work) pụtara ọrụ, nke oge niile ma ọ bụ nke oge ụfọdụ, a na-arụ n'ụlọ ma ọ bụ n'ebe ọ bụla n'ịntanetị. Ha abụọ na-amalite site na nka ndị ahịa chọrọ.",
            "Depụta ihe ị maralarị ime: ide ihe, ịsụgharị n'etiti Bekee, Frenchi, Arabik ma ọ bụ asụsụ obodo, ịpị mkpụrụ okwu na itinye data, iji Excel ma ọ bụ Google Sheets, design na Canva, soshal midia, inyere ndị ahịa aka, idebe akwụkwọ ego, ide okwu e kwuru ekwu, ịkụzi ihe. Họrọ NAANỊ OTU ka i jiri malite; ndị ahịa na-ewe ndị ọkachamara.",
            "Dee onyinye ahịrị okwu otu: ihe ị na-eme, onye ị na-emere ya, na ihe ha ga-enweta. Ọmụmaatụ: \"Ana m asụgharị akwụkwọ azụmahịa site na Bekee gaa na Frenchi maka obere ụlọ ọrụ, nke ọma ma n'ime awa 48.\" Ọmụmaatụ: Kofi nọ n'Accra: \"Ana m eji Canva emepụta mpempe akwụkwọ mgbasa ozi dị mfe na ihe e biri na soshal midia maka ụlọ ahịa na ụka.\"",
            "Ọ bụrụ na ị chọrọ nka ọzọ, jiri ọzụzụ n'efu. Gọọmentị Kenya na-eme Ajira Digital maka ọrụ n'ịntanetị, mmemme 3MTT nke Naịjirịa na-azụkwa ndị ntorobịa na nka dị ka data, design na software."
          ],
          steps: ["Depụta ihe ise ị nwere ike imere ndị ọzọ.", "Gbaa gburugburu nke ị kacha mara ime ma nwee mmasị na ya.", "Jụọ: onye na-akwụ ụgwọ maka nke a?", "Dee: Ana m eme [ihe] maka [onye] ka ha nweta [ihe ga-esi na ya pụta].", "Ọ bụrụ na ị chọrọ nka ọzọ, chọọ ọzụzụ n'efu."],
          words: [["Freelancer", "onye na-arụrụ ndị ahịa ọrụ a na-akwụ ụgwọ, otu ọrụ n'otu oge."], ["Ọrụ site n'ebe dị anya (remote work)", "ọrụ a na-arụ n'ịntanetị site n'ụlọ ma ọ bụ n'ebe ọ bụla."], ["Onyinye ọrụ (service offer)", "otu ahịrịokwu na-ekwu ihe ị na-eme, onye ị na-emere ya na ihe ha ga-enweta."]],
          slides: [
            { title: "Malite site n'ihe ị maara ime", bullets: ["Ide ihe, ịsụgharị, ịpị mkpụrụ okwu, spreadsheet", "Design, soshal midia, inyere ndị ahịa aka", "Idebe akwụkwọ ego, ide okwu e kwuru ekwu, ịkụzi ihe"] },
            { title: "Họrọ NAANỊ OTU ọrụ", bullets: ["Ndị ahịa na-ewe ndị ọkachamara", "Họrọ nke ị kacha mara ime ma nwee mmasị na ya"] },
            { title: "Onyinye ahịrị okwu otu gị", bullets: ["Ana m eme [ihe] maka [onye] ka ha nweta [ihe ga-esi na ya pụta]", "\"Ana m asụgharị Bekee gaa na Frenchi maka obere ụlọ ọrụ, n'ime awa 48\""] },
            { title: "Ọzụzụ n'efu", bullets: ["Kenya: Ajira Digital", "Naịjirịa: 3MTT", "Lelee oge ndebanye aha ugbu a na saịtị gọọmentị"] }
          ],
          sources: [AJIRA, THREE_MTT],
          tryIt: "Depụta ihe ise ị nwere ike imere ndị ọzọ. Họrọ otu ma dee onyinye ahịrị okwu otu gị: Ana m eme [ihe] maka [onye] ka ha nweta [ihe ga-esi na ya pụta].",
          youCanNow: "ịhọrọ otu ọrụ ma kọwaa ya n'onyinye ahịrị okwu otu doro anya.",
          quickCheck: [
            { objective: "O1", q: "Kedu onyinye ahịrị okwu otu kacha doo anya?", options: ["\"Enwere m ike ime ihe ọ bụla n'ịntanetị\"", "\"Biko were m n'ọrụ\"", "\"Ana m apị fọm e ji aka dee n'ime Excel maka ụlọ ọgwụ, nke ọma ma ngwa ngwa\"", "\"Freelancer, nka niile\""], answer: 2, why: "Ọ na-ekwu ihe, onye a na-emere ya na ihe onye ahịa ga-enweta." },
            { objective: "O1", q: "Gịnị mere ị ga-eji họrọ NAANỊ OTU ọrụ ka i jiri malite?", options: ["Ndị ahịa na-achọ ndị ọkachamara", "Nyiwe na-ekwe naanị otu okwu", "Ọ bụ iwu", "Ọ na-eri obere data"], answer: 0, why: "Ọ dị mfe ka ndị ahịa tụkwasị obi ma were onye nwere otu ọkachamara doro anya." }
          ]
        },
        {
          title: "Profaịlụ gị na obere portfolio",
          objectives: ["O2"],
          minutes: 5,
          goal: "Dee isiokwu na nkọwa profaịlụ ma tinye ihe nlereanya abụọ ma ọ bụ atọ nke ọrụ gị.",
          text: [
            "Profaịlụ gị bụ windo ụlọ ahịa gị. Isiokwu (headline) na-ekwu ọrụ gị n'okwu ole na ole: \"Onye Nsụgharị Bekee na Frenchi maka Akwụkwọ Azụmahịa\". Nkọwa (overview), paragraf ole na ole dị mkpụmkpụ, na-ekwu onye ị na-enyere aka, ihe ị na-eme, otu ị na-arụ ọrụ na otu ihe akaebe dị ka ọrụ i rụburu ma ọ bụ ọzụzụ.",
            "Ndị ahịa chọrọ ihe akaebe. Portfolio bụ ihe nlereanya ole na ole nke ọrụ gị. Ọ bụrụ na i nwebeghị onye ahịa, mee ihe nlereanya n'onwe gị: sụgharịa obere ọkwa ọha, mepụta mpempe akwụkwọ mgbasa ozi maka ụlọ ahịa e chepụtara echepụta, hazie obere spreadsheet ọmụmaatụ. Ejila ọrụ onye ọzọ mgbe ọ bụla, ekesakwala ezi ozi onye ahịa n'enweghị ikike.",
            "Edebela ozi nzuzo na profaịlụ gị: enweghị adreesị ụlọ, nọmba ID ma ọ bụ ozi ụlọ akụ. Jiri foto doro anya, nke na-egosi obi ọma, ma ọ bụrụ na nyiwe ahụ rịọrọ ya.",
            "Chekwaa data: buru ụzọ dee profaịlụ gị na app ndetu, wee tinye ya otu ugboro. Belata nha foto tupu i bulite ha. Ọmụmaatụ: Mariam nọ na Casablanca na-ede profaịlụ Arabik na Frenchi ya n'enweghị ịntanetị, wee bulite ya na cyber café n'ime nkeji iri."
          ],
          steps: ["Dee isiokwu: ọrụ gị n'okwu ole na ole.", "Dee nkọwa: onye ị na-enyere aka, ihe ị na-eme, otu ị na-arụ ya, otu ihe akaebe.", "Mee ihe nlereanya abụọ ma ọ bụ atọ n'onwe gị.", "Lelee: enweghị ozi nzuzo, enweghị ọrụ onye ọzọ.", "Buru ụzọ dee ya n'enweghị ịntanetị, wee tinye ya."],
          words: [["Profaịlụ (profile)", "peeji gị na nyiwe na-agwa ndị ahịa onye ị bụ na ihe ị na-eme."], ["Portfolio", "ihe nlereanya ole na ole nke ọrụ gị na-egosi nka gị."], ["Isiokwu (headline)", "obere ahịrị n'okpuru aha gị na-ekwu ọrụ gị."]],
          slides: [
            { title: "Isiokwu na nkọwa", bullets: ["Isiokwu: ọrụ gị n'okwu ole na ole", "Nkọwa: onye ị na-enyere aka, ihe ị na-eme, otu, otu ihe akaebe"] },
            { title: "Portfolio: gosi ihe akaebe", bullets: ["Ihe nlereanya abụọ ma ọ bụ atọ dị nta", "I nwebeghị onye ahịa? Mee ihe nlereanya n'onwe gị", "Ejila ọrụ ndị ọzọ mgbe ọ bụla"] },
            { title: "Mee ka ọ dị nchebe ma dị mfe", bullets: ["Enweghị adreesị, ID ma ọ bụ ozi ụlọ akụ", "Dee n'enweghị ịntanetị, tinye ya otu ugboro", "Belata nha foto iji chekwaa data"] }
          ],
          tryIt: "Dee isiokwu gị na obere nkọwa n'app ndetu. Wee mee otu obere ihe nlereanya maka ọrụ gị, dịka ọmụmaatụ paragraf a sụgharịrị, mpempe akwụkwọ mgbasa ozi ma ọ bụ spreadsheet a haziri.",
          youCanNow: "ide profaịlụ doro anya ma gosi nka gị site n'obere ihe nlereanya nke ọrụ gị.",
          quickCheck: [
            { objective: "O2", q: "I nwebeghị onye ahịa. Olee otu ị ga-esi wuo portfolio?", options: ["Detuo ọrụ onye design a ma ama", "Mee obere ihe nlereanya n'onwe gị", "Jiri ọrụ enyi gị tinye aha gị", "Chere ruo mgbe onye ahịa ga-ewe gị"], answer: 1, why: "Ihe nlereanya i mere n'onwe gị bụ ihe akaebe eziokwu nke nka gị." },
            { objective: "O2", q: "Gịnị ka ị na-ekwesịghị itinye na profaịlụ gị?", options: ["Isiokwu gị", "Ọrụ gị", "Ihe nlereanya nke ọrụ gị", "Adreesị ụlọ gị na nọmba ID gị"], answer: 3, why: "Ndị mmadụ nwere ike iji ozi nzuzo mee ihe ọjọọ; profaịlụ gị chọrọ naanị nka gị na ihe akaebe." }
          ]
        },
        {
          title: "Ịchọta ọrụ na ide proposal",
          objectives: ["O3"],
          minutes: 6,
          goal: "Dee obere proposal na-aza mkpa onye ahịa.",
          text: [
            "Ebe ị ga-achọta ọrụ: nyiwe freelance (dị ka Upwork na Fiverr), LinkedIn, bọọdụ ọrụ (job boards), na ndị ị maara, dị ka azụmahịa obodo, ụka, NGO na ụlọ akwụkwọ chọrọ enyemaka n'ịntanetị. Ndị ahịa mbụ gị na-anọkarị gị nso.",
            "Gụọ mgbasa ozi ọrụ ahụ ugboro abụọ. Chọta mkpa onye ahịa, ụbọchị njedebe na ajụjụ ọ bụla ha jụrụ. Hapụ mgbasa ozi na-edoghị anya, na-akwụghị ihe ọ bụla, ma ọ bụ na-arịọ gị ka ị kwụọ ụgwọ.",
            "Proposal bụ obere azịza gị. Mee ka ọ ghara ịgafe okwu 150: 1. Gosi n'otu ahịrịokwu na ị ghọtara mkpa ahụ. 2. Kwuo otu ị ga-esi mee ya. 3. Gosi otu ihe nlereanya metụtara ya. 4. Jụọ otu ajụjụ bara uru. Dee ya maka mgbasa ozi ahụ; ndị ahịa nwere ike ịmata ozi e detuuru.",
            "Ọmụmaatụ: onye ahịa chọrọ ka a pịnye aha ngwaahịa 200 n'ime spreadsheet. Ngozi nọ na Lagos dere: \"Ị chọrọ ka a pịnye aha ngwaahịa 200 na ọnụahịa ha n'ime spreadsheet tupu Fraịde. Aga m apịnye ma lelee ahịrị ọ bụla ugboro abụọ. Nke a bụ spreadsheet ọmụmaatụ m mere. Ọnụahịa ọ ga-adị na naịra ka ọ bụ na dọla?\""
          ],
          steps: ["Gụọ mgbasa ozi ahụ ugboro abụọ; dee mkpa, ụbọchị njedebe na ajụjụ ọ bụla.", "Hapụ mgbasa ozi na-edoghị anya ma ọ bụ nke na-arịọ gị ka ị kwụọ ụgwọ.", "Ahịrịokwu 1: mkpa onye ahịa n'okwu gị.", "Ahịrịokwu 2: otu ị ga-esi mee ya.", "Tinye otu ihe nlereanya metụtara ya.", "Jụọ otu ajụjụ bara uru.", "Mee ka ọ ghara ịgafe okwu 150."],
          words: [["Mgbasa ozi ọrụ (job post)", "nkọwa onye ahịa dere maka ọrụ ọ chọrọ."], ["Proposal", "obere azịza gị nye mgbasa ozi ọrụ, na-ekwu otu ị ga-esi rụọ ọrụ ahụ."]],
          slides: [
            { title: "Ebe ị ga-achọta ọrụ", bullets: ["Nyiwe dị ka Upwork na Fiverr", "LinkedIn na bọọdụ ọrụ", "Azụmahịa obodo, NGO, ụka, ụlọ akwụkwọ"] },
            { title: "Gụọ mgbasa ozi ahụ ugboro abụọ", bullets: ["Mkpa ahụ, ụbọchị njedebe, ajụjụ ọ bụla", "Hapụ mgbasa ozi na-edoghị anya na nke na-arịọ gị ka ị kwụọ ụgwọ"] },
            { title: "Proposal nwere akụkụ anọ", bullets: ["1. Mkpa ahụ n'okwu gị  2. Otu ị ga-esi mee ya", "3. Otu ihe nlereanya metụtara ya  4. Otu ajụjụ bara uru", "Ọ gaghị agafe okwu 150, e dere ya maka mgbasa ozi a"] }
          ],
          tryIt: "Chọta otu ezi mgbasa ozi ọrụ maka ọrụ gị (ma ọ bụ jiri ọmụmaatụ spreadsheet ahụ). Dee proposal na-erughị okwu 150 nwere akụkụ anọ ahụ.",
          youCanNow: "ide obere proposal na-egosi onye ahịa na ị ghọtara mkpa ya.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka ahịrịokwu mbụ nke proposal kwesịrị ime?", options: ["Gosi na ị ghọtara mkpa onye ahịa", "Kọọ akụkọ ndụ gị", "Buru ụzọ rịọ ụgwọ", "Depụta nka niile i nwere"], answer: 0, why: "Igosi na ị ghọtara mkpa ahụ na-adọta uche onye ahịa." },
            { objective: "O3", q: "Gịnị mere ị ga-eji dee proposal ọ bụla maka mgbasa ozi ọrụ ahụ?", options: ["Nyiwe chọrọ proposal dị ogologo", "Ndị ahịa nwere ike ịmata ozi e detuuru ma hapụ ya", "Ọ na-eri obere data", "Proposal e detuuru megidere iwu"], answer: 1, why: "Proposal e dere maka mgbasa ozi ahụ na-egosi nlebara anya na nghọta." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịkwado ịrụ ọrụ n'ịntanetị",
        questions: [
          { objective: "O1", q: "Kedu ihe atọ onyinye ahịrị okwu otu na-ekwu?", options: ["Afọ gị, obodo gị na ụlọ akwụkwọ gị", "Ọnụahịa gị, ekwentị gị na ụlọ akụ gị", "Ihe ị na-eme, onye ị na-emere ya na ihe ha ga-enweta", "Ihe ntụrụndụ gị, ezinụlọ gị na ebumnuche gị"], answer: 2, why: "Ihe, onye a na-emere ya na ihe ga-esi na ya pụta na-eme ka onyinye doo anya." },
          { objective: "O1", q: "Ị na-asụ Arabik na Frenchi nke ọma. Kedu ọrụ ị nwere ike inye?", options: ["Nsụgharị n'etiti Arabik na Frenchi", "Ịrụzi ụgbọala n'ịntanetị", "Ire akaụntụ ndị ọzọ", "Ọ dịghị; asụsụ abụghị nka"], answer: 0, why: "Asụsụ bụ nka ọtụtụ ndị ahịa na-akwụ ụgwọ maka ya." },
          { objective: "O2", q: "Gịnị bụ portfolio?", options: ["Akwụkwọ ụlọ akụ gị", "Ihe nlereanya ole na ole nke ọrụ gị na-egosi nka gị", "Kaadị ID gị", "Ndepụta okwuntughe ndị ahịa"], answer: 1, why: "Portfolio na-egosi ndị ahịa ihe ị nwere ike ime." },
          { objective: "O3", q: "Ezigbo proposal bụ:", options: ["Nke dị ogologo, nwere nka niile i nwere", "Otu ozi ahụ e zigara mgbasa ozi ọ bụla", "Arịrịọ maka ụgwọ mbụ", "Nke dị mkpụmkpụ, e dere maka mgbasa ozi ahụ, nwere otu ihe nlereanya na otu ajụjụ"], answer: 3, why: "Proposal dị mkpụmkpụ ma doo anya nwere ihe akaebe na-enweta ọrụ karịa." },
          { objective: "O3", q: "Mgbasa ozi ọrụ na-arịọ gị ka ị kwụọ ụgwọ iji tinye akwụkwọ. Gịnị ka ị ga-eme?", options: ["Kwụọ ngwa ngwa", "Kwụọ ọkara", "Hapụ ya", "Zipu ID gị kama"], answer: 2, why: "Ezi ndị ahịa na-akwụ gị ụgwọ; ha anaghị arịọ gị ka ị kwụọ ụgwọ iji tinye akwụkwọ." }
        ]
      }
    },
    {
      name: "Isi 2: Ịrụ ọrụ na ịnata ụgwọ",
      lessons: [
        {
          title: "Ikwekọrịta n'ọrụ na iweta ya n'oge",
          objectives: ["O4"],
          minutes: 5,
          goal: "Kwekọrịta n'ihe ọrụ gụnyere, ọnụahịa, ụbọchị njedebe na mgbanwe n'ederede tupu ị malite.",
          text: [
            "Tupu ị malite, kwekọrịta n'ederede (n'ozi nyiwe ahụ ma ọ bụ n'obere email) n'ihe anọ: ihe ọrụ gụnyere (scope: kpọmkwem ihe ị ga-eweta), ọnụahịa, ụbọchị njedebe (ya na mpaghara oge), na ugboro ole e nwere ike ịgbanwe ya.",
            "Ọmụmaatụ: \"Ihe ọrụ gụnyere: mepụta ihe 3 e biri na soshal midia maka ụlọ achịcha gị. Ọnụahịa: dị ka anyị kwekọrịtara na nkwekọrịta. Ụbọchị njedebe: Tọsde elekere 5 nke mgbede n'oge gị (London). Mgbanwe: ruo ugboro 2.\" Ọ bụrụ na onye ahịa rịọ ihe ọzọ ma emechaa, were nkwanye ugwu nye ya ọnụahịa ọhụrụ maka ọrụ ọzọ ahụ.",
            "Kwado maka mbepụ ọkụ na data. Chaja ekwentị gị na power bank, na-echekwa ọrụ gị ugboro ugboro na cloud storage, mara ebe ndabere ị ga-arụ ọrụ (cyber café, hub, ọba akwụkwọ), ahapụkwala ọrụ ruo ụbọchị ikpeazụ. Ọ bụrụ na ihe adịghị mma, gwa onye ahịa n'oge na n'eziokwu; ọtụtụ ndị ahịa na-anabata obere igbu oge ha nụrụ tupu oge eruo.",
            "Ọmụmaatụ: Ibrahima nọ na Thiès na-amalite ọrụ n'elekere 6 nke ụtụtụ, tupu mbepụ ọkụ na-amalitekarị, ma na-edebe otu nnomi faịlụ ọ bụla na Google Drive."
          ],
          steps: ["Dee ihe ọrụ gụnyere: kpọmkwem ihe ị ga-eweta.", "Dee ọnụahịa na ụbọchị njedebe, ya na mpaghara oge.", "Dee ugboro ole e nwere ike ịgbanwe ya.", "Nweta \"ee\" onye ahịa n'ederede.", "Na-echekwa ọrụ ugboro ugboro; nwee ndabere maka ọkụ na data.", "Ọ bụrụ na ị ga-egbu oge, gwa onye ahịa n'oge."],
          words: [["Ihe ọrụ gụnyere (scope)", "kpọmkwem ọrụ ị ga-eweta."], ["Mpaghara oge (time zone)", "oge mpaghara n'otu ebe; London, Lagos na Nairobi nwere ike ịdị iche n'ọtụtụ awa."], ["Mgbanwe (revision)", "mgbanwe onye ahịa na-arịọ mgbe ọ hụrụ ọrụ gị."]],
          slides: [
            { title: "Kwekọrịta n'ihe anọ n'ederede", bullets: ["Scope: kpọmkwem ihe ị ga-eweta", "Ọnụahịa", "Ụbọchị njedebe, ya na mpaghara oge", "Ugboro ole e nwere ike ịgbanwe ya"] },
            { title: "Ọrụ ọzọ = ọnụahịa ọhụrụ", bullets: ["Arịrịọ ọzọ bụ ọrụ ọhụrụ", "Were nkwanye ugwu nye ọnụahịa ọhụrụ"] },
            { title: "Kwado maka mbepụ", bullets: ["Power bank; na-echekwa na cloud ugboro ugboro", "Ebe ndabere ị ga-arụ ọrụ", "Ị ga-egbu oge? Gwa onye ahịa n'oge"] }
          ],
          tryIt: "Dee obere ozi scope maka ọrụ n'ime ọrụ gị: ihe ọrụ gụnyere, ọnụahịa (dị ka ọmụmaatụ), ụbọchị njedebe ya na mpaghara oge, na ugboro ole e nwere ike ịgbanwe ya. Wee dee atụmatụ ndabere gị maka mbepụ ọkụ ma ọ bụ data.",
          youCanNow: "ikwekọrịta n'ihe ọrụ gụnyere, ọnụahịa, ụbọchị njedebe na mgbanwe n'ederede, ma weta ọrụ n'oge ya na atụmatụ ndabere.",
          quickCheck: [
            { objective: "O4", q: "Kedu nke ỌBỤGHỊ otu n'ime ihe anọ a ga-ekwekọrịta tupu ịmalite?", options: ["Ihe ọrụ gụnyere (scope)", "Ọnụahịa", "Ụbọchị njedebe", "Egwu kacha amasị gị"], answer: 3, why: "Scope, ọnụahịa, ụbọchị njedebe na mgbanwe bụ ihe anọ ahụ." },
            { objective: "O4", q: "Ọkụ apụọla, ị nwekwara ike ịgafe ụbọchị njedebe echi. Gịnị ka ị ga-eme?", options: ["Ekwula ihe ọ bụla ma nwee olileanya", "Gwa onye ahịa n'oge ma nye oge ọhụrụ", "Hichapụ ọrụ ahụ", "Rịọ onye ahịa ego ọzọ"], answer: 1, why: "Ozi n'oge na n'eziokwu na-edobe ntụkwasị obi onye ahịa." }
          ]
        },
        {
          title: "Ịnata ụgwọ na idebe ndekọ",
          objectives: ["O5"],
          minutes: 5,
          goal: "Họrọ ụzọ n'enweghị nsogbu a ga-esi kwụọ gị ụgwọ ma dekọọ ụgwọ ọ bụla.",
          text: [
            "Na nyiwe, debe ọrụ, ozi na ịkwụ ụgwọ n'ime nyiwe ahụ. Nchekwa ịkwụ ụgwọ ya na-arụ ọrụ naanị n'ebe ahụ. Ndị ahịa na-arịọ gị ka ị pụọ na nyiwe ahụ ka ha kwụọ gị \"ozugbo\" na-abụkarị ndị aghụghọ, ọ nwekwara ike imebi iwu nyiwe ahụ.",
            "Nyiwe na-akwụ ụgwọ n'ụzọ dị iche iche: n'akaụntụ ụlọ akụ, n'ọrụ dị ka Payoneer, ma ọ bụ n'ụzọ ndị ọzọ. Ihe na-arụ ọrụ dabere na nyiwe ahụ na mba gị, ụgwọ ha na-agbanwekwa. Gụọ peeji ịkwụ ụgwọ na ụgwọ dị n'ebe enyemaka nke nyiwe ahụ n'onwe ya tupu ị were ọrụ mbụ gị.",
            "Na ndị ahịa ị maara ị na-arụrụ ọrụ ozugbo, kwekọrịta otu ha ga-esi kwụọ tupu ị malite: ịnyefe ego n'ụlọ akụ ma ọ bụ mobile money, na mgbe (dịka ọmụmaatụ ọkara tupu, ọkara mgbe i wetara ọrụ). Buru ụzọ weta ihe nlereanya ma ọ bụ nlele mbụ ma ọ bụrụ na obi esighị gị ike.",
            "Dekọọ ụgwọ ọ bụla: ụbọchị, onye ahịa, ọrụ, ego na ụdị ego (USD, EUR, KES, NGN, GHS, XOF, MAD), ụgwọ e wepụrụ na ego ị natara. Ego e nwetara n'ịntanetị nwere ike ịkwụ ụtụ isi. Jụọ ọfịs ụtụ isi mba gị, dịka ọmụmaatụ Kenya Revenue Authority ma ọ bụ Ghana Revenue Authority, ma ọ bụ onye ndụmọdụ ụtụ isi, ihe ị ga-edebanye aha na ihe ị ga-akwụ."
          ],
          steps: ["Na nyiwe, debe ọrụ na ịkwụ ụgwọ n'ime ya.", "Gụọ peeji ịkwụ ụgwọ na ụgwọ nke nyiwe ahụ n'onwe ya.", "Na ndị ahịa ozugbo, kwekọrịta otu na mgbe ha ga-akwụ tupu ị malite.", "Dekọọ ụgwọ ọ bụla n'ime otu izu: ụbọchị, onye ahịa, ọrụ, ego, ụdị ego, ụgwọ e wepụrụ, ego ị natara.", "Jụọ ọfịs ụtụ isi mba gị ihe metụtara gị."],
          words: [["Nchekwa ịkwụ ụgwọ (payment protection)", "usoro nyiwe na-ejide ma ọ bụ na-ekwe nkwa ịkwụ ụgwọ maka ọrụ a rụrụ n'ime ya."], ["Ụdị ego (currency)", "ụdị ego: dọla US, euro, naịra, cedi, shilling, CFA franc, dirham."], ["Ọfịs ụtụ isi (tax authority)", "ọfịs gọọmentị na-anakọta ụtụ isi, dị ka KRA na Kenya ma ọ bụ GRA na Ghana."]],
          slides: [
            { title: "Nọrọ n'ime nyiwe ahụ", bullets: ["Ọrụ, ozi na ịkwụ ụgwọ n'ime ya", "Nchekwa na-arụ ọrụ naanị n'ebe ahụ", "\"Aga m akwụ gị ozugbo na-abụghị na nyiwe\" = ihe ịdọ aka na ntị"] },
            { title: "Ụzọ ịnata ụgwọ", bullets: ["Ụlọ akụ, Payoneer ma ọ bụ ndị ọzọ: dabere na mba", "Gụọ peeji enyemaka nke nyiwe ahụ n'onwe ya", "Ụgwọ na-agbanwe: lelee tupu ọrụ mbụ gị"] },
            { title: "Ndekọ na ụtụ isi", bullets: ["Ụbọchị, onye ahịa, ọrụ, ego, ụdị ego, ụgwọ e wepụrụ", "Dekọọ ụgwọ ọ bụla n'ime otu izu", "Jụọ KRA, GRA ma ọ bụ ọfịs ụtụ isi mba gị"] }
          ],
          sources: [KRA, GRA],
          tryIt: "Mee tebụl ndekọ ụgwọ nwere kọlụm ndị a: ụbọchị, onye ahịa, ọrụ, ego, ụdị ego, ụgwọ e wepụrụ, ego ị natara. Tinye otu ahịrị ọmụmaatụ. Wee chọta peeji enyemaka ịkwụ ụgwọ nke otu nyiwe ị nwere ike iji.",
          youCanNow: "ịhọrọ ụzọ n'enweghị nsogbu a ga-esi kwụọ gị ụgwọ, idebe ndekọ ụgwọ ọ bụla, na ịmara ebe ị ga-ajụ maka ụtụ isi.",
          quickCheck: [
            { objective: "O5", q: "Onye ahịa ọhụrụ na nyiwe rịọrọ gị ka ị gaa na WhatsApp ka ọ kwụọ gị \"ozugbo\". Gịnị bụ ihe egwu ya?", options: ["Ị ga-atụfu nchekwa ịkwụ ụgwọ nke nyiwe ahụ, ọ na-abụkarịkwa aghụghọ", "Ọ dịghị; ọ na-eme ngwa ngwa", "A ga-akwụ gị ugboro abụọ", "Nyiwe ahụ ga-akwụ ụgwọ ahụ"], answer: 0, why: "Nchekwa ịkwụ ụgwọ na-arụ ọrụ naanị n'ime nyiwe ahụ; arịrịọ ịpụ na ya bụ ihe ịrịba ama aghụghọ a na-ahụkarị." },
            { objective: "O5", q: "Onye nwere ike ịgwa gị ụtụ isi i ji n'ego e nwetara n'ịntanetị?", options: ["Onye ahịa gị", "Otu WhatsApp", "Ọfịs ụtụ isi mba gị ma ọ bụ onye ndụmọdụ ụtụ isi", "Ọ dịghị onye; ego e nwetara n'ịntanetị anaghị akwụ ụtụ isi"], answer: 2, why: "Iwu ụtụ isi dị iche site na mba ruo mba; ọfịs ụtụ isi ma ọ bụ onye ndụmọdụ nwere ike ịgwa gị." }
          ]
        },
        {
          title: "Ọrụ adịgboroja na aghụghọ ịkwụ ụgwọ",
          objectives: ["O6"],
          minutes: 6,
          goal: "Mata onyinye ọrụ adịgboroja ma kpọọ aha ihe ịrịba ama dị na nke ọ bụla.",
          text: [
            "Ndị freelancer ọhụrụ bụ ndị a na-elekwasị anya nke ukwuu. Ihe ịrịba ama: 1. Ha na-arịọ GỊ ka ị kwụọ ụgwọ: maka ndebanye aha, ọzụzụ, \"ngwugwu mmalite\" (starter kit) ma ọ bụ software. 2. Ụgwọ dị oke elu maka ọrụ dị mfe, dị ka \"nweta USD 500 kwa ụbọchị site n'ịpị like na vidiyo\". 3. Ha na-arịọ okwuntughe gị, PIN, koodu otu oge ma ọ bụ akwụkwọ ID gị. 4. Ha chọrọ ka ị pụọ na nyiwe ahụ ozugbo. 5. Ha \"na-akwụfe\" ego site na cheque ma ọ bụ ịnyefe ego ma rịọ ka i zighachi ego fọdụrụ. 6. Ọrụ \"task\" ma ọ bụ \"itinye ego (investment)\" ebe ị ga-etinye ego iji mepee ọrụ ma ọ bụ ego ị ga-enweta, nke a na-akpọsakarị na WhatsApp, Telegram na TikTok.",
            "SEC nke Naịjirịa adọla aka na ntị maka atụmatụ a na-akpọsa na soshal midia na-ekwe nkwa uru dị elu. Ezi ndị ahịa na-akwụ gị ụgwọ maka ọrụ; ha anaghị arịọ gị mgbe ọ bụla ka ị kwụọ ụgwọ iji rụọ ọrụ.",
            "Chebe akaụntụ gị: okwuntughe siri ike, dị iche maka email gị na nyiwe ọ bụla, gbanye nkwenye nzọụkwụ abụọ (two-step verification), ekesakwala koodu. Ekwela ka onye ọ bụla \"gbazinye\" ma ọ bụ jiri akaụntụ gị e nyochara; enwere ike iji ya mee aghụghọ n'aha gị.",
            "Wee chịkọta ngwugwu mmalite gị: onyinye gị, profaịlụ, ihe nlereanya, otu proposal, na ndepụta nchekwa na ịkwụ ụgwọ gị."
          ],
          steps: ["Jụọ: ha chọrọ ka m kwụọ ụgwọ?", "Jụọ: ụgwọ ahụ ọ dị oke mma maka ọrụ ahụ?", "Jụọ: ha chọrọ okwuntughe, koodu ma ọ bụ ID?", "Jụọ: ha na-eme ngwa ngwa ka m pụọ na nyiwe?", "Ọ bụrụ na ọ bụla bụ \"ee\": kwụsị, akwụla ụgwọ, kọọrọ nyiwe ahụ.", "Gbanye nkwenye nzọụkwụ abụọ, ekesakwala koodu mgbe ọ bụla."],
          words: [["Aghụghọ ịkwụfe ụgwọ (overpayment scam)", "ịkwụ ụgwọ adịgboroja karịrị ego e kwekọrịtara, wee rịọ ka i zighachi ego fọdụrụ tupu ụgwọ adịgboroja ahụ alaghachi."], ["Nkwenye nzọụkwụ abụọ (two-step verification)", "nlele nke abụọ, dị ka koodu e zitere n'ekwentị gị, mgbe ị na-abanye."], ["Aghụghọ task (task scam)", "ọrụ adịgboroja ebe ị ga-etinye ego iji mepee ọrụ ma ọ bụ ego ị ga-enweta."]],
          slides: [
            { title: "Ihe ịrịba ama nke ọrụ adịgboroja", bullets: ["Ha na-arịọ gị ka ị kwụọ ụgwọ iji rụọ ọrụ", "Ụgwọ dị oke elu maka ọrụ dị mfe", "Ha chọrọ okwuntughe, koodu ma ọ bụ ID"] },
            { title: "Aghụghọ ndị ọzọ", bullets: ["Ime ngwa ngwa ka ị pụọ na nyiwe", "Ịkwụfe ụgwọ, wee \"zighachi ego fọdụrụ\"", "Itinye ego iji mepee ọrụ ma ọ bụ ego"] },
            { title: "Chebe akaụntụ gị", bullets: ["Okwuntughe siri ike, dị iche iche", "Gbanye nkwenye nzọụkwụ abụọ", "Agbazinyela akaụntụ gị e nyochara mgbe ọ bụla"] },
            { title: "Ngwugwu mmalite gị", bullets: ["Onyinye, profaịlụ, ihe nlereanya", "Otu proposal", "Ndepụta nchekwa na ịkwụ ụgwọ"] }
          ],
          sources: [SEC_NG],
          tryIt: "Ọrụ ikpeazụ: chịkọta ngwugwu mmalite freelance gị: onyinye ahịrị okwu otu, isiokwu na nkọwa profaịlụ, ihe nlereanya abụọ ma ọ bụ atọ, otu proposal maka ezi mgbasa ozi ọrụ ma ọ bụ nke ọmụmaatụ, na ndepụta nwere ụzọ a ga-esi kwụọ gị ụgwọ, tebụl ndekọ gị, ebe ị ga-ajụ maka ụtụ isi na ihe ịrịba ama isii nke ọrụ adịgboroja.",
          youCanNow: "ịmata ọrụ adịgboroja na aghụghọ ịkwụ ụgwọ ma gosi onwe gị dị ka freelancer dị njikere ka e were gị n'ọrụ.",
          quickCheck: [
            { objective: "O6", q: "\"Onye na-ewe ndị ọrụ\" nyere ọrụ itinye data mana ọ na-arịọ USD 20 maka starter kit. Gịnị bụ ihe ịrịba ama ahụ?", options: ["Ọrụ ahụ bụ itinye data", "Onye ahụ nwere nkwanye ugwu", "Ọrụ ahụ bụ nke oge ụfọdụ", "Ha na-arịọ gị ka ị kwụọ ụgwọ iji rụọ ọrụ"], answer: 3, why: "Ezi ndị ahịa na-akwụ gị ụgwọ; ịrịọ gị ka ị kwụọ ụgwọ bụ ihe ịrịba ama ọrụ adịgboroja a ma ama." },
            { objective: "O6", q: "Onye ahịa zitere ego karịrị nke unu kwekọrịtara ma rịọ ka i zighachi ego fọdụrụ ngwa ngwa. Gịnị bụ nke a?", options: ["Onye ahịa nwere obi mmapụta", "Aghụghọ ịkwụfe ụgwọ", "Onyinye nyiwe", "Nkwụghachi ụtụ isi"], answer: 1, why: "Ụgwọ mbụ ahụ na-abụkarị adịgboroja ma na-alaghachi mgbe i zighachiri ego nke gị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịrụ ọrụ na ịnata ụgwọ",
        questions: [
          { objective: "O4", q: "Gịnị mere ị ga-eji kwekọrịta n'ọnụ ọgụgụ mgbanwe tupu ị malite?", options: ["Ka mgbanwe na-enweghị njedebe ghara iri oge gị n'enweghị ụgwọ", "Ka onye ahịa kwụọ obere ego", "N'ihi na nyiwe chọrọ mgbanwe ise", "Ọ dịghị mkpa"], answer: 0, why: "Mgbanwe e kwekọrịtara na-echebe oge gị; ọrụ ọzọ na-enweta ọnụahịa ọhụrụ." },
          { objective: "O4", q: "Onye ahịa gị nọ na London, ị nọkwa na Nairobi. Gịnị mere ị ga-eji dee mpaghara oge ya na ụbọchị njedebe?", options: ["Ọ bụ nkwanye ugwu", "Oge dị iche, ya mere unu abụọ ga-ama kpọmkwem mgbe ọ ga-eru", "Ọ na-eme ka ọrụ ahụ dị oke ọnụ", "Nyiwe machibidoro ụbọchị njedebe na-enweghị ya"], answer: 1, why: "Oge dị iche n'etiti mba; mpaghara oge na-ewepụ mgbagwoju anya." },
          { objective: "O5", q: "Kedu nke kwesịrị ịdị na ndekọ ụgwọ gị?", options: ["Okwuntughe gị", "PIN gị", "Ụbọchị, onye ahịa, ọrụ, ego, ụdị ego na ụgwọ e wepụrụ", "Adreesị nzuzo onye ahịa"], answer: 2, why: "Ozi ndị a na-esochi ego ị na-enweta ma na-enyere aka n'ụtụ isi." },
          { objective: "O6", q: "Kedu onyinye kachasị yie ezi ihe?", options: ["\"Kwụọ USD 30 iji mepee ọrụ\"", "\"Zipu koodu ịbanye gị ka anyị hazie akaụntụ gị\"", "\"Nweta USD 500 kwa ụbọchị site n'ịpị like na vidiyo\"", "Onye ahịa na nyiwe kwekọrịtara n'ihe ọrụ gụnyere na ọnụahịa ma kwụọ ụgwọ site na nyiwe ahụ"], answer: 3, why: "Ezi ọrụ nwere scope na ọnụahịa doro anya, a na-akwụkwa ya site n'ụzọ n'enweghị nsogbu." },
          { objective: "O6", q: "Mmadụ chọrọ \"ịgbazite\" akaụntụ freelancer gị e nyochara. Gịnị ka ị ga-eme?", options: ["Jụ; enwere ike iji ya mee aghụghọ n'aha gị", "Kwere maka obere ego", "Kesaa naanị okwuntughe", "Buru ụzọ kesaa ya na enyi gị"], answer: 0, why: "Akaụntụ gị jikọtara na onye ị bụ; ndị ọzọ nwere ike iji ya mee ihe ọjọọ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ọrụ Freelance na Ọrụ Site n'Ebe Dị Anya n'Ịntanetị site n'Afrịka",
    questions: [
      { objective: "O1", q: "Onye bụ freelancer?", options: ["Onye na-arụ ọrụ n'efu", "Onye na-arụrụ ndị ahịa ọrụ a na-akwụ ụgwọ, otu ọrụ n'otu oge", "Onye ọrụ gọọmentị", "Onye nwe nyiwe"], answer: 1, why: "Ndị freelancer na-ere ọrụ ha otu ọrụ n'otu oge nye ndị ahịa dị iche iche." },
      { objective: "O1", q: "Kedu onyinye ahịrị okwu otu siri ike?", options: ["\"Ana m eme ihe niile\"", "\"Ezigbo onye ọrụ, were m\"", "\"Ọrụ ịntanetị\"", "\"Ana m ede nkọwa ngwaahịa maka ụlọ ahịa ịntanetị nke na-enyere ha aka ire ahịa\""], answer: 3, why: "Ọ na-ekwu ihe, onye a na-emere ya na ihe ga-esi na ya pụta." },
      { objective: "O1", q: "Ị chọrọ nka ọzọ tupu ị malite. Kedu ezigbo nhọrọ n'efu na Naịjirịa?", options: ["Mmemme 3MTT", "\"Academy\" WhatsApp a na-akwụ ụgwọ na-ekwe nkwa ọrụ", "Ịzụta akaụntụ e nyochara", "App task na-arịọ ka i tinye ego"], answer: 0, why: "3MTT bụ mmemme ọzụzụ gọọmentị; ndị ọzọ bụ ihe ịrịba ama aghụghọ." },
      { objective: "O2", q: "Isiokwu profaịlụ kwesịrị:", options: ["Igosi nọmba ekwentị gị", "Ikwu ọrụ gị n'okwu ole na ole", "Ịkọ akụkọ ndụ gị niile", "Igosi nọmba ID gị"], answer: 1, why: "Obere isiokwu na-agwa ndị ahịa ihe ị na-eme n'otu ugboro ha lere ya anya." },
      { objective: "O2", q: "Kedu ihe nlereanya ọrụ nke eziokwu?", options: ["Mpempe akwụkwọ mgbasa ozi i mepụtara maka ụlọ ahịa e chepụtara echepụta", "Ọrụ onye design a ma ama", "Edemede enyi gị", "Faịlụ nzuzo onye ahịa e kesara n'enweghị ikike"], answer: 0, why: "Ihe nlereanya i mere n'onwe gị bụ ihe akaebe eziokwu." },
      { objective: "O2", q: "Olee otu ị ga-esi chekwaa data mgbe ị na-eme profaịlụ gị?", options: ["Bulite foto buru ibu nke ukwuu", "Degharịa ya n'ịntanetị ọtụtụ ugboro", "Buru ụzọ dee ya n'enweghị ịntanetị, wee tinye ya otu ugboro", "Jiri naanị oku vidiyo"], answer: 2, why: "Ide n'enweghị ịntanetị na ibelata nha foto na-echekwa data dị oke ọnụ." },
      { objective: "O3", q: "Olee ogologo proposal mbụ kwesịrị ịdị n'ọtụtụ oge?", options: ["Peeji abụọ", "Otu okwu", "Ogologo dịka o kwere mee", "Ihe na-erughị okwu 150"], answer: 3, why: "A na-agụ proposal dị mkpụmkpụ; a na-ahapụ ndị dị ogologo." },
      { objective: "O3", q: "Kedu nke kwesịrị ịdị na proposal?", options: ["Ihe nlereanya metụtara ya na otu ajụjụ bara uru", "PIN ụlọ akụ gị", "Arịrịọ maka ụgwọ mbụ", "Nnomi ID gị"], answer: 0, why: "Ihe akaebe na ezigbo ajụjụ na-egosi na ị nwere ike ịrụ ọrụ ahụ." },
      { objective: "O3", q: "Ebee ka a na-achọtakarị ndị ahịa mbụ?", options: ["Naanị ná mba ọzọ", "Naanị n'otu weebụsaịtị", "Azụmahịa obodo, NGO, ụlọ akwụkwọ na ụka, tinyekwa nyiwe", "Ebe ọ bụla, ma ọ bụrụ na ị kwụghị onye na-ewe ndị ọrụ ụgwọ"], answer: 2, why: "Ọtụtụ ndị freelancer na-amalite site na ndị mmadụ na azụmahịa nọ ha nso." },
      { objective: "O4", q: "Gịnị ka \"scope\" pụtara?", options: ["Mba onye ahịa", "Kpọmkwem ihe ị ga-eweta", "Ọnụahịa gị", "Ụgwọ nyiwe"], answer: 1, why: "Scope bụ kpọmkwem ọrụ e kwekọrịtara." },
      { objective: "O4", q: "Onye ahịa rịọrọ design ọhụrụ na-anọghị na scope e kwekọrịtara. Gịnị ka ị ga-eme?", options: ["Mee ya n'efu, ọtụtụ ugboro", "Leghara ozi ahụ anya", "Kagbuo ọrụ ahụ", "Were nkwanye ugwu nye ọnụahịa ọhụrụ maka ọrụ ọzọ ahụ"], answer: 3, why: "Ọrụ ọzọ na-adịghị na scope bụ ọrụ ọhụrụ nwere ọnụahịa ọhụrụ." },
      { objective: "O4", q: "Kedu ezigbo atụmatụ ndabere maka mbepụ ọkụ?", options: ["Chaja power bank ma na-echekwa ọrụ na cloud ugboro ugboro", "Nwee olileanya na ọkụ agaghị apụ", "Rụọ ọrụ naanị n'abalị tupu ụbọchị njedebe", "Agwala onye ahịa ihe ọ bụla"], answer: 0, why: "Power bank, ichekwa na cloud na ebe ndabere na-eme ka ị weta ọrụ n'oge." },
      { objective: "O5", q: "Gịnị mere ị ga-eji debe ọrụ na ịkwụ ụgwọ n'ime nyiwe?", options: ["Ọ na-eme nwayọọ", "Nchekwa ịkwụ ụgwọ ya na-arụ ọrụ naanị n'ebe ahụ", "Ọ nweghị ụgwọ ọ bụla", "Onye ahịa na-ahọrọ ya"], answer: 1, why: "Ịpụ na nyiwe na-ewepụ nchekwa ya, ọ bụkwa ụzọ aghụghọ a na-ahụkarị." },
      { objective: "O5", q: "Ebee ka ị ga-amụta ụzọ ịnata ụgwọ na ụgwọ nyiwe dị ugbu a?", options: ["Okwu e dere n'okpuru vidiyo YouTube", "Echiche enyi gị", "Ebe enyemaka nke nyiwe ahụ n'onwe ya", "Onye ahịa"], answer: 2, why: "Ụzọ na ụgwọ dị iche site na mba ruo mba ma na-agbanwe; peeji nke nyiwe ahụ n'onwe ya bụ nke ọhụrụ." },
      { objective: "O5", q: "Olee mgbe ị ga-edekọ ụgwọ?", options: ["N'ime otu izu", "Na njedebe afọ", "Mgbe ọ bụla", "Naanị ụgwọ buru ibu"], answer: 0, why: "Idekọ ngwa ngwa na-eme ka ndekọ gị zuo ezu maka atụmatụ na ụtụ isi." },
      { objective: "O5", q: "Na Ghana, onye nwere ike ịgwa gị maka ụtụ isi n'ego ị na-enweta n'ịntanetị?", options: ["Onye ahịa gị", "Vidiyo TikTok", "Ghana Revenue Authority ma ọ bụ onye ndụmọdụ ụtụ isi", "Chat bot nke nyiwe ahụ"], answer: 2, why: "Ọfịs ụtụ isi mba na-ahazi ma na-akọwa iwu ụtụ isi." },
      { objective: "O6", q: "Kedu ihe ịrịba ama nke ọrụ adịgboroja?", options: ["Scope na ọnụahịa doro anya", "Ha na-arịọ gị ka ị kwụọ ụgwọ maka ndebanye aha ma ọ bụ starter kit", "Ịkwụ ụgwọ site na nyiwe", "Ụbọchị njedebe nwere mpaghara oge"], answer: 1, why: "Ezi ndị ahịa anaghị arịọ gị mgbe ọ bụla ka ị kwụọ ụgwọ iji rụọ ọrụ." },
      { objective: "O6", q: "\"Ọrụ\" na-arịọ gị ka i tinye ego iji mepee task ndị na-akwụ ụgwọ karịa. Nke a bụ:", options: ["Ọrụ nkịtị", "Ụgwọ ọzụzụ", "Ụtụ isi", "Aghụghọ task"], answer: 3, why: "Itinye ego iji mepee task ma ọ bụ ego ị ga-enweta bụ aghụghọ a na-ahụkarị." },
      { objective: "O6", q: "Gịnị na-echebe akaụntụ freelancer na email gị?", options: ["Otu okwuntughe maka ihe niile", "Ikesa koodu na ndị ahịa", "Okwuntughe siri ike, dị iche iche na nkwenye nzọụkwụ abụọ", "Ịgbazinye ndị ọzọ akaụntụ gị"], answer: 2, why: "Okwuntughe dị iche iche na nlele nke abụọ mgbe ị na-abanye na-egbochi ọtụtụ mwakpo akaụntụ." },
      { objective: "O6", q: "Onye na-ewe ndị ọrụ na-arịọ foto ID gị na okwuntughe email gị \"iji nyochaa gị\". Gịnị ka ị ga-eme?", options: ["Jụ ma kọọ ya", "Zipu ha abụọ", "Zipu naanị okwuntughe", "Zipu naanị ID"], answer: 0, why: "Ezi ndị ahịa anaghị achọ okwuntughe gị mgbe ọ bụla; arịrịọ ID site n'aka ndị ị na-amaghị bụ ihe egwu aghụghọ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 6, 9, 12, 14, 16, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Onyinye doro anya", objective: "O1", notYet: "Onyinye ahụ edoghị anya (\"Ana m eme ihe niile n'ịntanetị\").", meets: "Otu ọrụ, na-ekwu ihe ị na-eme, onye ị na-emere ya na ihe onye ahịa ga-enweta.", exceeds: "Onyinye ahụ na-akpọ aha otu ụdị onye ahịa na ihe doro anya ga-esi na ya pụta ma ọ bụ oge a ga-eji weta ya." },
      { name: "Profaịlụ na ihe nlereanya", objective: "O2", notYet: "Enweghị isiokwu ma ọ bụ nkọwa, enweghị ihe nlereanya, ma ọ bụ e gosiri ozi nzuzo.", meets: "Isiokwu, obere nkọwa na ihe nlereanya abụọ ma ọ bụ atọ onye na-amụ ihe mere, n'enweghị ozi nzuzo.", exceeds: "Ihe nlereanya dabara nke ọma n'onyinye ahụ, nkọwa ahụ nwekwara otu ihe akaebe (ọzụzụ ma ọ bụ ọrụ e rụburu)." },
      { name: "Proposal", objective: "O3", notYet: "Ọ dị ogologo, e detuuru ya, ma ọ bụ o kwughị maka mkpa onye ahịa.", meets: "Ọ erughị okwu 150, e dere ya maka mgbasa ozi ahụ: mkpa ahụ, otu, otu ihe nlereanya, otu ajụjụ.", exceeds: "Ajụjụ ahụ na-egosi ezi echiche gbasara ọrụ ahụ, proposal ahụ dabakwara n'ụda okwu onye ahịa." },
      { name: "Ikwekọrịta n'ọrụ", objective: "O4", notYet: "Enweghị scope ma ọ bụ ụbọchị njedebe e dere ede.", meets: "Ozi scope nwere ihe ọrụ gụnyere, ọnụahịa, ụbọchị njedebe ya na mpaghara oge na mgbanwe, tinyekwa atụmatụ ndabere maka ọkụ ma ọ bụ data.", exceeds: "Ọ gụnyekwara otu a ga-esi kpebie ọnụahịa ọrụ ọzọ." },
      { name: "Ịkwụ ụgwọ na ndekọ", objective: "O5", notYet: "Enweghị ụzọ ịkwụ ụgwọ ma ọ bụ tebụl ndekọ.", meets: "Ụzọ ịkwụ ụgwọ n'enweghị nsogbu (n'ime nyiwe, ma ọ bụ nke e kwekọrịtara tupu oge eruo na onye ahịa a maara), tebụl ndekọ, na ebe a ga-ajụ maka ụtụ isi.", exceeds: "E lelere ụzọ ịkwụ ụgwọ ahụ na peeji enyemaka nke nyiwe ahụ n'onwe ya." },
      { name: "Ịmara aghụghọ", objective: "O6", notYet: "Ihe ịrịba ama na-erughị anọ, ma ọ bụ atụmatụ ịkwụ ụgwọ iji nweta ọrụ.", meets: "Ọ depụtara ihe ịrịba ama isii nke ọrụ adịgboroja ma kwuo na nkwenye nzọụkwụ abụọ gbanyere.", exceeds: "Ọ gbakwụnyere ezi onyinye adịgboroja onye na-amụ ihe hụrụ na otu o si mata ya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe zipuru opekata mpe proposal atọ n'ime ụbọchị 30",
      "Ndị na-amụ ihe kwuru na ha nwetara ọrụ mbụ a kwụrụ ụgwọ n'ịntanetị n'ime ụbọchị 90",
      "Ndị na-amụ ihe kwuru na ha jụrụ ọrụ adịgboroja ma ọ bụ aghụghọ ịkwụ ụgwọ n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone ma ọ bụ kọmputa nwere ntakịrị data, na adreesị email",
      "App ndetu ma ọ bụ akwụkwọ iji dee profaịlụ na proposal mbụ",
      "Ngwa n'efu maka ihe nlereanya, dị ka Google Docs ma ọ bụ Sheets, Canva ma ọ bụ Microsoft 365",
      "Ihe dị ka nkeji 75 n'ozuzu, n'oge nkenke, tinyekwa oge iji mee ihe nlereanya"
    ],
    facilitatorNotes: [
      "Ọ na-arụ ọrụ nke ọma n'ebe ndị ntorobịa na-ezukọ (youth hub), ebe Ajira, otu 3MTT, ọba akwụkwọ na otu ndị ntorobịa nke ụka ma ọ bụ ụlọ alakụba: meenụ ule mbido ọnụ, wee mee otu isi n'otu nnọkọ.",
      "Bute mgbasa ozi ọrụ ọmụmaatụ e biri ebi ka ndị na-amụ ihe nwee ike ịmụ ide proposal n'ejighị data.",
      "Akwadola \"academy freelance\" a na-akwụ ụgwọ ma ọ bụ ndị na-ere akaụntụ; zipu ndị mmadụ n'ọzụzụ gọọmentị n'efu.",
      "Ejila mgbe ọ bụla rịọ ndị na-amụ ihe ka ha kesaa okwuntughe, koodu, akwụkwọ ID ma ọ bụ ozi ịnata ụgwọ n'ime klas.",
      "Kee ndị na-amụ ihe abụọ abụọ ka ha jiri rubric lelee proposal ibe ha tupu ha ezipu ha.",
      "Tupu nnọkọ ahụ, lelee peeji enyemaka ịkwụ ụgwọ nke nyiwe ọ bụla dị ugbu a maka mba gị; ha na-agbanwe."
    ]
  }
};
