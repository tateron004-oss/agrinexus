"use strict";

// Koach Learn course (Igbo translation of non-profits/nonprofit-volunteer-management.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "nonprofit-volunteer-management-ig",
  lang: "ig",
  translationOf: "nonprofit-volunteer-management",
  category: "Non Profits",
  name: "Ilekọta Ndị Ọrụ Afọ Ofufo",
  skills: "Ide nkọwa ọrụ onye ọrụ afọ ofufo, Ịchọta na inyocha ndị ọrụ afọ ofufo, Ịnabata na ịzụ ha, Ịhazi oge na ilekọta ha, Ịkele ha na idobe ha, Idekọ awa ọrụ ha",
  outcome: "ịgba ọsọ mmemme ndị ọrụ afọ ofufo site na mmalite ruo njedebe: ide nkọwa ọrụ doro anya, ịchọta ndị ọrụ afọ ofufo ma nyochaa ha n'enweghị nsogbu, ịnabata ma zụọ ha, ịhazi oge ha ma lekọta ha, ịkele ha n'ụzọ ga-eme ka ha na-alọghachi, na idekọ awa ọrụ ha.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị na-ahazi ndị ọrụ afọ ofufo, ndị ọrụ nọ n'òtù na-anaghị achọ uru (nonprofit), ndị ndu ụka na ozi Chineke, òtù ndị nne na nna n'ụlọ akwụkwọ, òtù egwuregwu ụmụaka, ụlọ nri ndị nọ ná mkpa (food bank), na onye ọ bụla na-adabere na ndị ọrụ afọ ofufo.",
    "Ndị ọrụ afọ ofufo na-enye oge ha n'efu, ya mere otu i si elekọta ha na-ekpebi ma ha ga-alọghachi. Ị ga-amụta ide nkọwa ọrụ, ịchọta na inyocha ndị kwesịrị ekwesị (gụnyere nyocha ndabere maka ọrụ metụtara ụmụaka ma ọ bụ ndị okenye na-adịghị ike), ịzụ ha, ịhazi oge ha na ilekọta ha, ịkele ha na idobe ha, na idekọ awa ọrụ ha.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\" ị nwere ike iji maka ezi ọrụ afọ ofufo. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Maka ajụjụ gbasara iwu, inshọransị na ụtụ isi, jụọ ọkachamara na isi iyi gọọmentị a kpọtụrụ aha na nkuzi. (Ọ bụrụ na ịchọrọ iji AI chọta ndị ọrụ afọ ofufo, lee ihe ọmụmụ gbasara AI maka ịchọta ndị ọrụ afọ ofufo.)"
  ],
  finalTask: "Wuo ngwugwu ndị ọrụ afọ ofufo maka otu ezi ọrụ: nkọwa ọrụ, ozi ịkpọ ndị mmadụ na nzọụkwụ nyocha (ya na nyocha ndabere ma ọ bụrụ na ọrụ ahụ metụtara ụmụaka ma ọ bụ ndị okenye na-adịghị ike), usoro nnabata nke nkeji 30, usoro oge ọnwa nwere onye nlekọta a kpọrọ aha, echiche abụọ maka ikele ha, na mpempe akwụkwọ mbanye ma ọ bụ spreadsheet dị mfe na-edekọ awa.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị na-ahazi ndị ọrụ afọ ofufo, ndị ọrụ òtù nonprofit, ndị ndu ụka na ozi Chineke, òtù ndị nne na nna n'ụlọ akwụkwọ, òtù egwuregwu ụmụaka, ụlọ nri ndị nọ ná mkpa, na onye ọ bụla ọrụ ya na-adabere na ndị ọrụ afọ ofufo.",
    startingPoint: "Ha achọtala ma ọ bụ soro ndị ọrụ afọ ofufo rụọ ọrụ n'ụzọ nkịtị, ọtụtụ mgbe site n'okwu ọnụ. Ọ bụ mmadụ ole na ole na-eji nkọwa ọrụ e dere ede, nyocha dabere n'ihe egwu, nnabata a hazirela ahazi, ma ọ bụ usoro idekọ awa.",
    gap: "Ndị ọrụ afọ ofufo na-enye oge ha n'efu, ya mere enweghị nhazi, enweghị ọzụzụ ma ọ bụ enweghị ekele na-eme ka ha pụọ, nyocha na-adịghị ike nwekwara ike itinye ụmụaka na ndị okenye na-adịghị ike n'ihe egwu. Ngwugwu ndị ọrụ afọ ofufo zuru ezu na-enyere òtù aka idobe ezigbo ndị ọrụ afọ ofufo, ichebe ndị ha na-eje ozi, ma gosi ndị na-enye ego ihe ha rụpụtara.",
    constraints: [
      "Ndị na-ahazi na-arụkarị ọrụ oge nta ma ọ bụ bụrụ ndị ọrụ afọ ofufo n'onwe ha; nkuzi nkeji 5",
      "Ngwa n'efu ma ọ bụ dị ọnụ ala: akwụkwọ, spreadsheet, fọm ndebanye aha n'efu",
      "Iwu nyocha ndabere dị iche site na steeti, mmemme na ụlọ ọrụ inshọransị; ndị na-amụ ihe na-ajụ ụlọ ọrụ inshọransị ha na ọka iwu",
      "Nzuzo: ndekọ ndị ọrụ afọ ofufo na ndị a na-eje ozi bụ nzuzo; enweghị aha ma ọ bụ foto ndị a na-eje ozi n'enweghị ikike",
      "Enweghị ndụmọdụ ụtụ isi; a na-eduga ndị ọrụ afọ ofufo na IRS Publication 526 na ọkachamara ụtụ isi"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Maka otu ọrụ afọ ofufo òtù gị chọrọ", action: "ide nkọwa ọrụ na-ekwu uru ọ na-eweta, ọrụ ndị a ga-arụ, oge, nka a chọrọ na onye onye ọrụ afọ ofufo ahụ ga-akọrọ", standard: "nwere akụkụ ise niile na ahịrịokwu mmalite gbasara uru ọ na-eweta" },
    { id: "O2", condition: "Mgbe e nyere gị ọrụ afọ ofufo na ndị ọ na-eje ozi", action: "ide ozi ịkpọ ndị mmadụ ma họrọ nzọụkwụ nyocha dabara n'ihe egwu dị n'ọrụ ahụ", standard: "gụnyere ndị na-agba akaebe na nyocha ndabere nwere ikike e dere ede maka ọrụ ọ bụla metụtara ụmụaka ma ọ bụ ndị okenye na-adịghị ike" },
    { id: "O3", condition: "Maka ndị ọrụ afọ ofufo ọhụrụ n'ọrụ gị", action: "ịhazi nnabata nke nkeji 30 ma zụọ ha n'ọrụ ahụ na nzọụkwụ anọ: kọwaa, gosi, ka ha nwaa, nye ndụmọdụ", standard: "na-ekpuchi nchekwa, nzuzo, mbanye na otu esi akagbu" },
    { id: "O4", condition: "Site n'iji spreadsheet, kalenda a na-ekerịta ma ọ bụ akwụkwọ", action: "ime usoro oge otu ọnwa nwere onye ndu oge ọrụ a kpọrọ aha, ndị nnọchi na ozi ncheta", standard: "ebe oge ọrụ ọ bụla nwere onye na-arụ ya na onye ndu a kpọrọ aha" },
    { id: "O5", condition: "Maka ndị ọrụ afọ ofufo ị na-elekọta", action: "ịhazi ekele doro anya ma mata ihe ndị na-emekarị ka ndị ọrụ afọ ofufo pụọ", standard: "nwere otu obere ekele na otu oge ekele buru ibu" },
    { id: "O6", condition: "Maka otu ọrụ afọ ofufo", action: "ịkwadebe mpempe akwụkwọ mbanye ma ọ bụ spreadsheet na-edekọ awa ndị ọrụ afọ ofufo ma jiri ngụkọ ya", standard: "na-edekọ aha, ụbọchị, mmalite, njedebe, awa na ọrụ ma na-edobe ndekọ ahụ na nzuzo" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịkpọbata ndị ọrụ afọ ofufo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ide nkọwa ọrụ onye ọrụ afọ ofufo",
          minutes: 5,
          goal: "Dee nkọwa ọrụ doro anya na-adọrọ mmasị maka otu ọrụ afọ ofufo.",
          text: [
            "Ndị ọrụ afọ ofufo na-arụ ọrụ nke ọma mgbe ha maara kpọmkwem ihe a chọrọ n'aka ha. Nkọwa ọrụ dị ka obere nkọwa ọrụ ndị na-akwụ ụgwọ: ọ na-ekwu ihe ọrụ ahụ bụ, ihe mere o ji dị mkpa, ihe onye ọrụ afọ ofufo ga-eme, oge a chọrọ, nka ma ọ bụ àgwà a chọrọ, ọzụzụ ma ọ bụ nyocha ọ bụla, na onye ha ga-akọrọ.",
            "Mee ka ọ dọrọ mmasị. Bido n'uru ọ na-eweta: \"Nyere ezinụlọ 200 aka ịnweta nri kwa Satọdee.\" Kwuo eziokwu banyere oge, gụnyere ogologo oge ị na-atụ anya ka ha nọrọ (otu mmemme, ma ọ bụ ọnwa isii). Nye ọrụ dị mkpụmkpụ, nke na-agbanwe agbanwe, tinyere ndị ogologo; ọtụtụ mmadụ nwere ike inye awa abụọ mana ọ bụghị kwa izu.",
            "Dee nkọwa dị iche maka ọrụ ọ bụla. Ụlọ nri ndị nọ ná mkpa nwere ike inwe ndị na-anabata ndị mmadụ, ndị na-ahazi ngwaahịa, ndị ọkwọ ụgbọala na onye na-enyere aka itinye data, nke ọ bụla nwere mkpa dị iche."
          ],
          steps: ["Kpọọ aha ọrụ ahụ ma kwuo ihe mere o ji dị mkpa.", "Depụta ihe onye ọrụ afọ ofufo ga-eme.", "Kwuo mgbe, ogologo oge ole, na ruo ọnwa ole.", "Depụta nka, àgwà na oke afọ ọ bụla.", "Kwuo ọzụzụ, nyocha na onye ha ga-akọrọ."],
          words: [["Nkọwa ọrụ (role description)", "obere ihe e dere banyere ọrụ afọ ofufo: gịnị, mgbe, ihe kpatara ya, na ihe a chọrọ."], ["Onye na-ahazi ndị ọrụ afọ ofufo (volunteer coordinator)", "onye na-achọta, na-ahazi ma na-akwado ndị ọrụ afọ ofufo."]],
          slides: [
            { title: "Nkọwa ọrụ na-ekwu", bullets: ["Ọrụ ahụ na ihe mere o ji dị mkpa", "Ihe ha ga-eme, mgbe na ogologo oge ole", "Nka a chọrọ, ọzụzụ na nyocha", "Onye ha ga-akọrọ"] },
            { title: "Mee ka ọ dọrọ mmasị", bullets: ["Bido n'uru: \"Nyere ezinụlọ 200 aka kwa Satọdee\"", "Kwuo eziokwu banyere oge", "Nyekwa ọrụ dị mkpụmkpụ, na-agbanwe agbanwe"] },
            { title: "Otu ọrụ, otu nkọwa", bullets: ["Onye nnabata, onye nhazi, onye ọkwọ ụgbọala, onye data", "Ọrụ dị iche, mkpa dị iche"] }
          ],
          tryIt: "Họrọ otu ọrụ afọ ofufo òtù gị chọrọ. Dee nkọwa ọrụ ya site n'iji akụkụ ise ahụ niile. Bido n'otu ahịrịokwu gbasara uru ọ na-eweta.",
          youCanNow: "ide nkọwa ọrụ doro anya na-agwa ndị ọrụ afọ ofufo kpọmkwem ihe a chọrọ na ihe mere o ji dị mkpa.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ nkọwa ọrụ onye ọrụ afọ ofufo?", options: ["Kaadị ekele maka ndị ọrụ afọ ofufo", "Obere nkọwa ọrụ na-ekwu ihe ọrụ ahụ bụ, ihe mere o ji dị mkpa na ihe a chọrọ", "Mpempe akwụkwọ mbanye", "Fọm nyocha ndabere"], answer: 1, why: "Nkọwa ọrụ na-agwa ndị ọrụ afọ ofufo kpọmkwem ihe a chọrọ n'aka ha, dị ka obere nkọwa ọrụ." },
            { objective: "O1", q: "Nkọwa gị na-ekwu \"Nyere aka mgbe ụfọdụ.\" Gịnị ka ị ga-ebu ụzọ tinye?", options: ["Ọ dịghị ihe; ihe na-edoghị anya dị mma karị", "Ndepụta iwu niile ị nwere", "Ụgwọ ọnwa onye ọrụ afọ ofufo", "Mgbe na ogologo oge ole, na uru ọrụ ahụ na-eweta"], answer: 3, why: "Ndị ọrụ afọ ofufo chọrọ ozi eziokwu banyere oge na ihe mere ọrụ ahụ ji dị mkpa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịchọta na inyocha ndị ọrụ afọ ofufo",
          minutes: 6,
          goal: "Chọta ndị ọrụ afọ ofufo maka otu ọrụ ma họrọ nzọụkwụ nyocha kwesịrị ekwesị maka ya.",
          text: [
            "Ihe kachasị eme ka ndị mmadụ bụrụ ndị ọrụ afọ ofufo bụ na mmadụ rịọrọ ha. Rịọ ndị mmadụ n'onwe gị, site na ndị ọrụ afọ ofufo dị ugbu a, ebe ofufe, ụlọ akwụkwọ, ndị were mmadụ n'ọrụ nwere mmemme ọrụ afọ ofufo, bọọdụ ọkwa obodo na soshal midia. Kesaa nkọwa ọrụ ahụ na ụzọ dị mfe isi debanye aha.",
            "Nyocha na-echebe ndị ị na-eje ozi, ndị ọrụ afọ ofufo gị na òtù gị. Mee ka o dabara n'ihe egwu dị n'ọrụ ahụ. Ọrụ ọ bụla: fọm ntinye akwụkwọ nwere ozi kọntaktị na onye a ga-akpọ ma ihe mberede mee, na obere mkparịta ụka. Ọrụ nwere ihe egwu karịa, karịsịa ọrụ ọ bụla metụtara ụmụaka ma ọ bụ ndị okenye na-adịghị ike (ndị agadi, ndị nwere nkwarụ), chọkwara ilele ndị na-agba akaebe na nyocha ndabere, nke e mere site n'ikike e dere ede nke onye ahụ, site n'ụlọ ọrụ a ma ama.",
            "Iwu gbasara nyocha ndabere maka ndị ọrụ afọ ofufo dị iche site na steeti na mmemme, ụlọ ọrụ inshọransị gị nwekwara ike inwe ihe ọ chọrọ. Jụọ ụlọ ọrụ inshọransị gị na ọka iwu ihe metụtara gị. Tinyekwa iwu nchekwa: dịka ọmụmaatụ, ọ dịghị okenye ga-anọ naanị ya na nwata ebe a na-adịghị ahụ ha anya, a na-akọkwa nchegbu ọ bụla nye otu onye a kpọrọ aha."
          ],
          steps: ["Rịọ ndị mmadụ n'onwe gị; jiri ndị ọrụ afọ ofufo dị ugbu a na ndị mmekọ obodo.", "Kesaa nkọwa ọrụ na ụzọ dị mfe isi debanye aha.", "Maka ọrụ ọ bụla: fọm ntinye akwụkwọ, onye a ga-akpọ ma ihe mberede mee, na obere mkparịta ụka.", "Maka ọrụ metụtara ụmụaka ma ọ bụ ndị okenye na-adịghị ike: ndị na-agba akaebe na nyocha ndabere nwere ikike e dere ede.", "Lelee iwu steeti na ihe ụlọ ọrụ inshọransị gị chọrọ.", "Debe iwu nchekwa, dị ka ọ dịghị okenye ga-anọ naanị ya na nwata ebe a na-adịghị ahụ ha."],
          words: [["Nyocha (screening)", "nzọụkwụ ị na-eme iji hụ na onye ọrụ afọ ofufo kwesịrị ma dị mma maka ọrụ."], ["Nyocha ndabere (background check)", "ịchọgharị ndekọ ọha, dị ka ndekọ mpụ, nke e mere site n'ikike onye ahụ."], ["Okenye na-adịghị ike (vulnerable adult)", "okenye nwere ike ịchọ nchekwa pụrụ iche, dị ka ụfọdụ ndị agadi ma ọ bụ ndị nwere nkwarụ."]],
          slides: [
            { title: "Chọta ndị mmadụ site n'ịrịọ ha", bullets: ["Ọtụtụ mmadụ na-arụ ọrụ afọ ofufo n'ihi na mmadụ rịọrọ ha", "Ndị ọrụ afọ ofufo dị ugbu a, ebe ofufe, ụlọ akwụkwọ", "Ndị were mmadụ n'ọrụ, bọọdụ ọkwa obodo, soshal midia"] },
            { title: "Nyochaa dabere n'ihe egwu", bullets: ["Ọrụ ọ bụla: fọm, onye a ga-akpọ ma ihe mberede mee, mkparịta ụka", "Ụmụaka ma ọ bụ ndị okenye na-adịghị ike: ndị akaebe + nyocha ndabere", "Mgbe niile site n'ikike e dere ede"] },
            { title: "Lelee iwu", bullets: ["Iwu steeti dị iche", "Ụlọ ọrụ inshọransị gị nwere ike inwe ihe ọ chọrọ", "Jụọ ụlọ ọrụ inshọransị gị na ọka iwu"] },
            { title: "Iwu nchekwa", bullets: ["Ọ dịghị okenye ga-anọ naanị ya na nwata ebe a na-adịghị ahụ ha", "Kọọ nchegbu ọ bụla nye otu onye a kpọrọ aha"] }
          ],
          tryIt: "Maka ọrụ ị kọwara na Nkuzi 1, dee obere ozi ịkpọ ndị mmadụ ma depụta ebe atọ ị ga-ekesa ya. Wee depụta nzọụkwụ nyocha ọrụ ahụ chọrọ ma kọwaa ihe kpatara ya, dabere n'ihe egwu dị na ya.",
          youCanNow: "ịchọta ndị ọrụ afọ ofufo site n'ịrịọ ha n'onwe gị na ịhọrọ nzọụkwụ nyocha dabara n'ihe egwu dị n'ọrụ ọ bụla.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka ọrụ afọ ofufo ọ bụla, ọbụlagodi nke enweghị ihe egwu, kwesịrị inwe na nyocha?", options: ["Fọm ntinye akwụkwọ nwere ozi kọntaktị na onye a ga-akpọ ma ihe mberede mee, na obere mkparịta ụka", "Nyocha ndabere maka onye ọ bụla", "Enweghị nyocha ọ bụla", "Nyocha akụkọ ụgwọ (credit check)"], answer: 0, why: "Ọrụ ọ bụla na-enweta fọm, onye a ga-akpọ ma ihe mberede mee na obere mkparịta ụka; ọrụ nwere ihe egwu karịa na-agbakwụnye ihe ndị ọzọ." },
            { objective: "O2", q: "Ọrụ ọhụrụ nwere ndị ọrụ afọ ofufo na-agụrụ ndị agadi akwụkwọ n'ụlọ nlekọta. Gịnị ka ị ga-agbakwụnye?", options: ["Ọ dịghị ihe ọzọ", "Akwụkwọ ekele ka ogologo", "Ndị na-agba akaebe na nyocha ndabere nwere ikike e dere ede", "Ozi soshal midia gbasara ndị bi n'ebe ahụ"], answer: 2, why: "Ọrụ metụtara ndị okenye na-adịghị ike chọrọ ilele ndị akaebe na nyocha ndabere e mere site n'ikike." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịnabata na ịzụ ndị ọrụ afọ ofufo",
          minutes: 5,
          goal: "Hazie obere nnabata na ọzụzụ ọrụ nke na-eme ka ndị ọrụ afọ ofufo ọhụrụ dị njikere ma nwee mmasị.",
          text: [
            "Ụbọchị mbụ na-ekpebi ma ọtụtụ ndị ọrụ afọ ofufo ga-alọghachi. Nnabata (onboarding) bụ ihe niile na-eme site na mgbe ha kwuru \"ee\" ruo mgbe ha nwere obi ike n'ọrụ ahụ: ozi nnabata, nnọkọ mmalite, ọzụzụ maka ọrụ ahụ na oge ọrụ mbụ dị mma.",
            "Nnọkọ mmalite (orientation) na-ekpuchi ebumnuche òtù ahụ na ndị unu na-eje ozi, ebe ihe dị, onye a ga-ajụ, nchekwa na nzọụkwụ ihe mberede, iwu nzuzo (dịka ọmụmaatụ, ekesala aha ma ọ bụ foto ndị a na-eje ozi), na otu esi abanye ma kagbuo oge ọrụ. Ọzụzụ ọrụ na-egosi ha otu esi arụ ọrụ ahụ: kọwaa, gosi, ka ha nwaa, wee nye ndụmọdụ. Obere ndepụta ma ọ bụ vidiyo na-enyere ha aka icheta.",
            "Jikọọ ndị ọrụ afọ ofufo ọhụrụ na enyi nwere ahụmịhe maka oge ọrụ mbụ ha, ma jụọ ha ase mgbe e mechara: \"Olee otu o si gaa? Gịnị gbagwojuru gị anya?\""
          ],
          steps: ["Zipu ozi nnabata nwere oge, ebe na onye ha ga-achọ.", "Mee nnọkọ mmalite: ebumnuche, ebe ihe dị, nchekwa, nzuzo, mbanye na ikagbu.", "Zụọ ha n'ọrụ ahụ: kọwaa, gosi, ka ha nwaa, nye ndụmọdụ.", "Nye obere ndepụta dị mfe.", "Jikọọ ha na enyi.", "Jụọ ha ase mgbe oge ọrụ mbụ gachara."],
          words: [["Nnabata (onboarding)", "nzọụkwụ ndị na-enyere onye ọrụ afọ ofufo ọhụrụ aka ịmalite ma nwee mmasị."], ["Nnọkọ mmalite (orientation)", "nnọkọ mbụ na-akọwa òtù ahụ, iwu na nchekwa."], ["Nzuzo (confidentiality)", "idebe ozi nzuzo gbasara ndị ị na-eje ozi na nzuzo."]],
          slides: [
            { title: "Ụbọchị mbụ dị mkpa", bullets: ["Ozi nnabata", "Nnọkọ mmalite", "Ọzụzụ ọrụ", "Oge ọrụ mbụ dị mma"] },
            { title: "Nnọkọ mmalite na-ekpuchi", bullets: ["Ebumnuche na ndị unu na-eje ozi", "Ebe ihe dị, onye a ga-ajụ, nchekwa", "Iwu nzuzo", "Mbanye na ikagbu oge ọrụ"] },
            { title: "Ọzụzụ na-adịgide", bullets: ["Kọwaa, gosi, ka ha nwaa, nye ndụmọdụ", "Obere ndepụta ma ọ bụ vidiyo"] },
            { title: "Mgbe oge ọrụ mbụ gachara", bullets: ["Jikọọ ha na enyi", "Jụọ: \"Olee otu o si gaa? Gịnị gbagwojuru gị anya?\""] }
          ],
          tryIt: "Dee usoro nnọkọ mmalite nke nkeji 30 maka ọrụ gị, nwere oge maka akụkụ ọ bụla. Wee dee ọzụzụ ọrụ ahụ na nzọụkwụ anọ: kọwaa, gosi, ka ha nwaa, nye ndụmọdụ.",
          youCanNow: "ịnabata na ịzụ ndị ọrụ afọ ofufo ọhụrụ ka ha nọrọ na nchekwa, nwee obi ike ma chọọ ịlọghachi.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ nnabata (onboarding)?", options: ["Naanị email mbụ ị zitere", "Ịkwụsị ọrụ onye ọrụ afọ ofufo", "Ihe niile site na \"ee\" ruo mgbe ha nwere obi ike n'ọrụ ahụ", "Ịgụ awa ndị ọrụ afọ ofufo"], answer: 2, why: "Nnabata gụnyere ozi nnabata, nnọkọ mmalite, ọzụzụ ọrụ na oge ọrụ mbụ dị mma." },
            { objective: "O3", q: "Onye ọrụ afọ ofufo ọhụrụ na-amalite na Satọdee. Gịnị na-enyere aka karịa n'oge ọrụ mbụ?", options: ["Jikọọ ha na enyi nwere ahụmịhe ma jụọ ha ase mgbe e mechara", "Hapụ ha ka ha chọpụta ya n'onwe ha", "Nye ha ọrụ kachasị sie ike", "Wụfee nnọkọ mmalite ka oge ghara ịla n'iyi"], answer: 0, why: "Enyi na-enye ha onye ha ga-ajụ, ịjụ ase na-egosikwa ihe gbagwojuru ha anya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịkpọbata ndị ọrụ afọ ofufo",
        questions: [
          { objective: "O1", q: "Olee ụzọ kacha mma isi malite nkọwa ọrụ onye ọrụ afọ ofufo?", options: ["Site n'iwu", "Site n'uru ọrụ ahụ na-eweta", "Site n'ụbọchị njedebe", "Site na nyocha ndabere"], answer: 1, why: "Ịmalite n'uru ọ na-eweta na-eme ka ọrụ ahụ dọrọ mmasị." },
          { objective: "O2", q: "Gịnị bụ ihe kachasị eme ka ndị mmadụ malite ọrụ afọ ofufo?", options: ["Mmadụ rịọrọ ha", "Bọọdụ mgbasa ozi n'okporo ụzọ", "Fọm ụtụ isi", "Email ọ bụla e zitere ha"], answer: 0, why: "Ịrịọ mmadụ n'onwe gị bụ ngwa kachasị ike maka ịchọta ndị ọrụ afọ ofufo." },
          { objective: "O2", q: "Onye ọrụ afọ ofufo ga-akụzi ụmụaka mgbe ụlọ akwụkwọ gachara. Nyocha dị aṅaa ka a chọrọ?", options: ["Ọ dịghị", "Naanị aha", "Naanị ịmụmụ ọnụ ọchị n'ọnụ ụzọ", "Fọm ntinye akwụkwọ, ndị na-agba akaebe na nyocha ndabere nwere ikike e dere ede"], answer: 3, why: "Ọrụ metụtara ụmụaka chọrọ nyocha kachasị ike." },
          { objective: "O2", q: "Onye ka ị ga-ajụ banyere iwu nyocha ndabere maka ndị ọrụ afọ ofufo gị?", options: ["Enyi onye ọrụ afọ ofufo", "Ọ dịghị onye", "Ụlọ ọrụ inshọransị gị na ọka iwu", "Ozi soshal midia"], answer: 2, why: "Iwu dị iche site na steeti, ụlọ ọrụ inshọransị nwekwara ike inwe ihe ha chọrọ." },
          { objective: "O3", q: "Kedu nke dabara na nnọkọ mmalite ndị ọrụ afọ ofufo?", options: ["Iwu nzuzo gbasara ndị unu na-eje ozi", "Adreesị ụlọ ndị a na-eje ozi", "Ụgwọ ọnwa ndị ọrụ", "Asịrị gbasara ndị na-enye onyinye"], answer: 0, why: "Ndị ọrụ afọ ofufo ga-amarịrị otu esi echebe nzuzo ndị mmadụ." }
        ]
      }
    },
    {
      name: "Isi 2: Idobe ndị ọrụ afọ ofufo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịhazi oge na ilekọta ndị ọrụ afọ ofufo",
          minutes: 5,
          goal: "Mee usoro oge ndị ọrụ afọ ofufo nwere ndị nnọchi ma lekọta ndị ọrụ afọ ofufo n'ụzọ na-akwado ha.",
          text: [
            "Mee ka usoro oge dị mfe ịhụ na mfe ịgbanwe. Kalenda a na-ekerịta, ngwa ndebanye aha n'efu ma ọ bụ spreadsheet dị mfe na-arụ ọrụ. Tinye oge ọrụ n'oge, zipu ncheta otu ma ọ bụ ụbọchị abụọ tupu oge ahụ, ma mee ka ikagbu dị mfe ka ndị mmadụ gwa gị kama ịghara ịbịa. Hazie ndepụta ndị nnọchi maka oge ọrụ ndị dị mkpa.",
            "Oge ọrụ ọ bụla kwesịrị inwe onye nlekọta ma ọ bụ onye ndu ndị ọrụ afọ ofufo a kpọrọ aha, onye na-anabata ndị mmadụ, na-ekesa ọrụ, na-aza ajụjụ ma na-edozi nsogbu. Ilekọta ndị ọrụ afọ ofufo dị ka ilekọta ndị ọrụ, mana ọ dị mfe karị: ọrụ doro anya, ịjụ ase mgbe niile, na ndụmọdụ ngwa ngwa nwere obiọma.",
            "Ọ bụrụ na ihe anaghị aga nke ọma n'aka onye ọrụ afọ ofufo, gwa ya okwu na nzuzo, kwuo kpọmkwem ihe ahụ ma jụọ ihe ga-enyere ya aka. Mgbe ụfọdụ, ọrụ ọzọ na-adabara ya karịa. Ọ bụrụ na mmadụ mebiri iwu nchekwa ma ọ bụ iwu omume, gbasoo iwu òtù gị, nke nwere ike ịgụnye ịkwụsị ọrụ afọ ofufo ya."
          ],
          steps: ["Jiri kalenda a na-ekerịta, ngwa ndebanye aha ma ọ bụ spreadsheet.", "Tinye oge ọrụ n'oge ma zipu ncheta.", "Mee ka ikagbu dị mfe; nwee ndepụta ndị nnọchi.", "Kpọọ aha onye nlekọta maka oge ọrụ ọ bụla.", "Nye ọrụ doro anya na ndụmọdụ ngwa ngwa nwere obiọma.", "Dozie nsogbu na nzuzo; gbasoo iwu maka mmebi nchekwa."],
          words: [["Oge ọrụ (shift)", "oge a kara aka mgbe onye ọrụ afọ ofufo na-arụ ọrụ."], ["Onye ndu oge ọrụ (shift lead)", "onye na-elekọta ndị ọrụ afọ ofufo n'oge ọrụ."], ["Ndepụta ndị nnọchi (backup list)", "ndị ọrụ afọ ofufo ị nwere ike ịkpọ mgbe mmadụ kagburu."]],
          slides: [
            { title: "Usoro oge na-arụ ọrụ", bullets: ["Dị mfe ịhụ, dị mfe ịgbanwe", "Tinye ya n'oge, chetara ha otu ma ọ bụ ụbọchị abụọ tupu", "Ikagbu dị mfe na ndepụta ndị nnọchi"] },
            { title: "Onye ndu a kpọrọ aha n'oge ọrụ ọ bụla", bullets: ["Na-anabata ndị mmadụ", "Na-ekesa ọrụ, na-aza ajụjụ", "Na-edozi nsogbu"] },
            { title: "Ilekọta ndị ọrụ afọ ofufo", bullets: ["Ọrụ doro anya na ịjụ ase", "Ndụmọdụ ngwa ngwa nwere obiọma", "Ọ naghị aga nke ọma? Gwa ya na nzuzo; nwaa ọrụ ọzọ"] }
          ],
          tryIt: "Mee usoro oge otu ọnwa maka ọrụ gị na spreadsheet ma ọ bụ n'akwụkwọ: ụbọchị, oge ọrụ, aha ndị ọrụ afọ ofufo, onye ndu oge ọrụ a kpọrọ aha na aha ndị nnọchi abụọ. Dee ozi ncheta ị ga-ezipu.",
          youCanNow: "ime usoro oge ndị ọrụ afọ ofufo nwere ncheta na ndị nnọchi, na ilekọta ndị ọrụ afọ ofufo n'ụzọ doro anya na-akwado ha.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ ndepụta ndị nnọchi?", options: ["Mbipụta mmefu ego", "Ndepụta ndị ọrụ afọ ofufo kwụsịrị", "Usoro oge ochie", "Ndị ị nwere ike ịkpọ mgbe mmadụ kagburu oge ọrụ dị mkpa"], answer: 3, why: "Ndepụta ndị nnọchi na-eme ka e nwee ndị na-arụ oge ọrụ dị mkpa mgbe atụmatụ gbanwere." },
            { objective: "O4", q: "Onye ọrụ afọ ofufo na-emehie ihe mgbe niile n'ọrụ ya. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Gwa otu niile banyere ya", "Gwa ya okwu na nzuzo, kwuo kpọmkwem ihe ahụ ma jụọ ihe ga-enyere ya aka", "Kwụsị itinye ya n'usoro oge n'agwaghị ya ihe kpatara ya", "Leghara ya anya"], answer: 1, why: "Dozie nsogbu na nzuzo na n'obiọma; ọrụ ọzọ nwere ike ịdabara ya karịa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ikele na idobe ndị ọrụ afọ ofufo",
          minutes: 5,
          goal: "Hazie ekele dabara ndị ọrụ afọ ofufo gị ma mata ihe na-eme ka ndị ọrụ afọ ofufo pụọ.",
          text: [
            "Ndị ọrụ afọ ofufo na-akwụsịkarị ịbịa n'ihi na ha chere na a chọghị ha, na enweghị nhazi, na a zụghị ha, ma ọ bụ na a kelighị ha, ma ọ bụ n'ihi na ndụ ha ghọrọ ọrụ n'aka. Idobe ha dị ọnụ ala ma dịkwa mfe karịa ịchọta ndị ọhụrụ.",
            "Na-ekele ndị mmadụ ugboro ugboro na n'ụzọ doro anya: \"Oge ọrụ gị na Satọdee nyeere anyị aka kwakọọ igbe 600 n'ọnwa a.\" Kesaa akụkọ gbasara uru ọrụ ahụ, site n'ikike ndị a na-eje ozi. Jikọọ obere ekele kwa ụbọchị (akwụkwọ ozi, ito mmadụ n'ihu ọha, ozi ederede) na oge ekele buru ibu (mmemme ekele, asambodo, akwụkwọ ntụnye aka maka ọrụ ma ọ bụ ụlọ akwụkwọ).",
            "Jụọ ndị ọrụ afọ ofufo ihe ha chọrọ: nka ọhụrụ, ndị enyi, ọkwa ndu, oge na-agbanwe agbanwe. Nye ha ohere itolite, dị ka ịzụ ndị ọrụ afọ ofufo ọhụrụ ma ọ bụ idu oge ọrụ. Jụọ ndị na-apụ ihe kpatara ya, ma jiri ihe ị mụtara."
          ],
          steps: ["Na-ekele ndị mmadụ ugboro ugboro na n'ụzọ doro anya.", "Kesaa akụkọ gbasara uru, site n'ikike.", "Jikọọ obere ekele na oge ekele buru ibu.", "Jụọ onye ọrụ afọ ofufo ọ bụla ihe ọ chọrọ n'ọrụ ahụ.", "Nye ọrụ ga-enyere ha aka itolite.", "Jụọ ndị na-apụ ihe kpatara ya."],
          words: [["Idobe (retention)", "ime ka ndị ọrụ afọ ofufo na-alọghachi ogologo oge."], ["Ekele (recognition)", "igosi ndị ọrụ afọ ofufo na a hụrụ ọrụ ha ma kwanyere ya ugwu."]],
          slides: [
            { title: "Ihe na-eme ka ndị ọrụ afọ ofufo pụọ", bullets: ["Ha chere na a chọghị ha ma ọ bụ na a zụghị ha", "Enweghị nhazi", "A kelighị ha, ma ọ bụ ndụ ghọrọ ọrụ n'aka"] },
            { title: "Kelee ha nke ọma", bullets: ["Ugboro ugboro na n'ụzọ doro anya", "Kesaa akụkọ uru, site n'ikike", "Obere ekele na oge ekele buru ibu"] },
            { title: "Nyere ha aka itolite", bullets: ["Jụọ ihe ha chọrọ", "Nye ọrụ ọzụzụ na ọrụ ndu", "Jụọ ndị na-apụ ihe kpatara ya"] }
          ],
          tryIt: "Dee echiche abụọ maka ikele ndị ọrụ afọ ofufo gị: otu obere ekele ị nwere ike inye n'izu a na otu oge ekele buru ibu maka afọ a. Wee dee ajụjụ atọ ị ga-ajụ onye ọrụ afọ ofufo banyere ihe ọ chọrọ n'ọrụ ahụ.",
          youCanNow: "ikele ndị ọrụ afọ ofufo n'ụzọ dị ha mkpa na ime ihe gbasara ihe na-eme ka ndị ọrụ afọ ofufo pụọ.",
          quickCheck: [
            { objective: "O5", q: "Kedu nke bụ ihe na-emekarị ka ndị ọrụ afọ ofufo kwụsị ịbịa?", options: ["Ha chere na a chọghị ha ma ọ bụ na a kelighị ha", "A kelere ha ugboro ugboro", "E hazire oge ọrụ nke ọma", "Ha nwere enyi"], answer: 0, why: "Iche na a chọghị ha, enweghị nhazi, enweghị ọzụzụ ma ọ bụ enweghị ekele na-emekarị ka ndị ọrụ afọ ofufo pụọ." },
            { objective: "O5", q: "Onye ọrụ afọ ofufo kwesịrị ntụkwasị obi kwuru na ọ chọrọ ịmụta nka ndu. Gịnị ka ị ga-enye?", options: ["Ọ dịghị ihe; ndị ọrụ afọ ofufo anaghị etolite", "Ọrụ ahụ ọzọ", "Ohere idu oge ọrụ ma ọ bụ ịzụ ndị ọrụ afọ ofufo ọhụrụ", "Ọrụ dị nta karị"], answer: 2, why: "Ọrụ na-enyere aka itolite, dị ka idu oge ọrụ, na-enyere aka idobe ndị ọrụ afọ ofufo chọrọ ihe karịa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Idekọ awa ndị ọrụ afọ ofufo",
          minutes: 5,
          goal: "Hazie usoro dị mfe iji dekọọ awa ndị ọrụ afọ ofufo ma jiri ọnụ ọgụgụ ndị ahụ.",
          text: [
            "Dekọọ onye rụrụ ọrụ afọ ofufo, mgbe, ogologo oge ole na n'ọrụ dị aṅaa. Mpempe akwụkwọ mbanye nke a na-edeghachi na spreadsheet na-arụ ọrụ maka obere otu; fọm n'efu ma ọ bụ app ndị ọrụ afọ ofufo nwere ike ịrụ ọrụ maka otu buru ibu. Mee ka ọ dị mfe ka ndị mmadụ wee banye ma pụọ n'ezie.",
            "Ọnụ ọgụgụ ndị ahụ na-enyere gị aka: ha na-egosi uru n'akụkọ grant na nye bọọdụ gị, na-enyere gị aka ịhazi ndị ọrụ, ma na-enyere gị aka ikele ndị ọrụ afọ ofufo kachasị kwesị ntụkwasị obi. Ọtụtụ ndị ọrụ afọ ofufo chọkwara akaebe awa maka ụlọ akwụkwọ, ego agụmakwụkwọ (scholarship), ụlọikpe ma ọ bụ ọrụ obodo a chọrọ n'aka ha, ma ọ bụ ịrịọ ọrụ. Dị njikere ịbịanye aka n'akwụkwọ ozi ma ọ bụ fọm na-akwado awa ha.",
            "Debe ndekọ ndị ọrụ afọ ofufo na nzuzo na n'ebe nchekwa, ma nakọta naanị ihe ị chọrọ. Ihe gbasara ụtụ isi maka ndị ọrụ afọ ofufo: IRS (ụlọ ọrụ ụtụ isi US) kwuru na e nweghị ike iwepụ uru oge onye ọrụ afọ ofufo n'ụtụ isi, mana e nwere ike iwepụ ụfọdụ ego ha jiri aka ha mefuo nke a na-akwụghachighị ha. Duga ndị ọrụ afọ ofufo na IRS Publication 526 na ọkachamara ụtụ isi kama inye ndụmọdụ ụtụ isi."
          ],
          steps: ["Họrọ ụzọ mbanye: mpempe akwụkwọ, fọm ma ọ bụ app.", "Dekọọ aha, ụbọchị, oge mmalite na njedebe, na ọrụ.", "Tinye data ahụ n'otu spreadsheet kwa izu.", "Gụkọta awa site n'onye ọrụ afọ ofufo, site n'ọnwa na site na mmemme.", "Jiri ngụkọ ahụ n'akụkọ, n'atụmatụ na n'ekele.", "Debe ndekọ na nzuzo; bịanye aka n'akwụkwọ akaebe awa mgbe a rịọrọ."],
          words: [["Mpempe akwụkwọ mbanye (sign-in sheet)", "fọm dị mfe ebe ndị ọrụ afọ ofufo na-ede aha ha na oge ha bidoro na oge ha kwụsịrị."], ["Akaebe awa (proof of hours)", "akwụkwọ ozi ma ọ bụ fọm e bịanyere aka na-akwado awa ole mmadụ rụrụ ọrụ afọ ofufo."], ["Akụkọ grant (grant report)", "akụkọ e zigara onye nyere ego na-egosi ihe e ji ego ya mee."]],
          slides: [
            { title: "Dekọọ ihe ndị bụ isi", bullets: ["Onye, mgbe, ogologo oge ole, ọrụ dị aṅaa", "Akwụkwọ, fọm n'efu, ma ọ bụ app", "Mee ka ọ dị mfe"] },
            { title: "Jiri ọnụ ọgụgụ ndị ahụ", bullets: ["Akụkọ grant na ozi nye bọọdụ", "Ịhazi oge ọrụ", "Ikele ndị ọrụ afọ ofufo kwesịrị ntụkwasị obi"] },
            { title: "Akaebe awa", bullets: ["Maka ụlọ akwụkwọ, scholarship, ụlọikpe ma ọ bụ ọrụ", "Dị njikere ịbịanye aka n'akwụkwọ ozi ma ọ bụ fọm"] },
            { title: "Nzuzo na ụtụ isi", bullets: ["Nakọta naanị ihe ị chọrọ; debe ya n'ebe nchekwa", "E nweghị ike iwepụ oge ọrụ afọ ofufo n'ụtụ isi (IRS)", "Duga ha na IRS Publication 526 na ọkachamara ụtụ isi"] }
          ],
          sources: [{ name: "IRS Publication 526, Charitable Contributions", url: "https://www.irs.gov/publications/p526" }],
          tryIt: "Ọrụ ikpeazụ: wuo ngwugwu ndị ọrụ afọ ofufo gị maka otu ọrụ: nkọwa ọrụ, ozi ịkpọ ndị mmadụ na nzọụkwụ nyocha, usoro nnọkọ mmalite nke nkeji 30, usoro oge ọnwa nwere onye ndu oge ọrụ, echiche abụọ maka ikele ha, na mpempe akwụkwọ mbanye ma ọ bụ spreadsheet nwere kọlụm maka aha, ụbọchị, mmalite, njedebe, awa na ọrụ.",
          youCanNow: "idekọ awa ndị ọrụ afọ ofufo n'ụzọ dị mfe ma jiri ọnụ ọgụgụ ndị ahụ maka akụkọ, atụmatụ, ekele na akaebe awa.",
          quickCheck: [
            { objective: "O6", q: "Gịnị mere a ga-eji dekọọ awa ndị ọrụ afọ ofufo?", options: ["Iji mee ka ndị ọrụ afọ ofufo kwụọ ụgwọ", "Iji gosi uru n'akụkọ grant na nke bọọdụ ma hazie ndị ọrụ", "Iji kesaa ozi ndị ọrụ afọ ofufo n'ihu ọha", "N'ihi na a na-akwụ ndị ọrụ afọ ofufo ụgwọ kwa awa"], answer: 1, why: "Ngụkọ awa na-egosi uru, na-enyere aka n'atụmatụ ma na-enyere gị aka ikele ndị ọrụ afọ ofufo kwesịrị ntụkwasị obi." },
            { objective: "O6", q: "Onye ọrụ afọ ofufo jụrụ ma o nwere ike iwepụ uru oge ya n'ụtụ isi ya. Gịnị ka ị ga-eme?", options: ["Kwuo ee, n'ọnụ ahịa ọ bụla kwa awa", "Mee ụtụ isi ya maka ya", "Leghara ajụjụ ahụ anya", "Duga ya na IRS Publication 526 na ọkachamara ụtụ isi"], answer: 3, why: "Nkuzi ahụ kwuru ka ị ghara inye ndụmọdụ ụtụ isi; duga ndị ọrụ afọ ofufo na IRS Publication 526 na ọkachamara ụtụ isi." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Idobe ndị ọrụ afọ ofufo",
        questions: [
          { objective: "O4", q: "Ndị ọrụ afọ ofufo na-ahapụ oge ọrụ n'agwaghị gị. Gịnị na-ebu ụzọ enyere aka?", options: ["Machibido ha niile", "Kwụsị ịhazi oge", "Zipu ncheta ma mee ka ikagbu dị mfe", "Mee ka oge ọrụ dị okpukpu abụọ"], answer: 2, why: "Ncheta na ikagbu dị mfe na-ebelata ndị na-anaghị abịa." },
          { objective: "O4", q: "Onye ka a ga-akpọ aha maka oge ọrụ ọ bụla?", options: ["Onye na-enye onyinye", "Onye ndu oge ọrụ ma ọ bụ onye nlekọta", "Onye ọrụ afọ ofufo kacha ọhụrụ", "Ọ dịghị onye"], answer: 1, why: "Onye ndu a kpọrọ aha na-anabata, na-eduzi ma na-edozi nsogbu." },
          { objective: "O5", q: "Kedu ekele nwere ike ịdị onye ọrụ afọ ofufo mkpa karịa?", options: ["\"Daalụ, unu niile.\"", "Enweghị ekele; ọ bụ ọrụ afọ ofufo", "Email nkịtị otu ugboro n'afọ", "\"Oge ọrụ gị na Satọdee nyeere anyị aka kwakọọ igbe 600 n'ọnwa a.\""], answer: 3, why: "Ekele doro anya nke na-akpọ uru ọrụ ahụ aha kacha dị mkpa." },
          { objective: "O6", q: "Nwata nọ n'afọ iri na ụma chọrọ akaebe awa 40 nke ọrụ afọ ofufo maka ụlọ akwụkwọ. Ị kwesịrị:", options: ["Iji ndekọ awa gị bịanye aka n'akwụkwọ ozi na-akwado ha", "Ịjụ", "Ịkọ awa ahụ n'echiche", "Ịgwa ya ka ọ jụọ IRS"], answer: 0, why: "Ezigbo ndekọ na-enye gị ohere ịkwado awa n'ụzọ ziri ezi." },
          { objective: "O6", q: "Dịka IRS si kwuo, onye ọrụ afọ ofufo nwere ike iwepụ uru oge ya n'ụtụ isi?", options: ["Ee, n'ọnụ ahịa ọ bụla ọ họọrọ", "Ee, n'ụgwọ kacha nta (minimum wage)", "Mba, e nweghị ike iwepụ uru oge ma ọ bụ ọrụ", "Naanị na ngwụsị izu"], answer: 2, why: "IRS Publication 526 kwuru na e nweghị ike iwepụ uru oge gị." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ilekọta Ndị Ọrụ Afọ Ofufo",
    questions: [
      { objective: "O1", q: "Nkọwa ọrụ onye ọrụ afọ ofufo kwesịrị ịgụnye:", options: ["Naanị aha ọrụ ahụ", "Ihe ha ga-eme, mgbe, ihe mere o ji dị mkpa na onye ha ga-akọrọ", "Ụgwọ ọnwa onye ọrụ afọ ofufo", "Aha ndị na-enye onyinye"], answer: 1, why: "Nkọwa doro anya na-enyere ndị ọrụ afọ ofufo aka ime nke ọma." },
      { objective: "O1", q: "Gịnị mere a ga-eji nye ọrụ dị mkpụmkpụ, na-agbanwe agbanwe?", options: ["Ọtụtụ mmadụ nwere ike inye obere oge mana ọ bụghị kwa izu", "Ha dị mfe ichefu", "Ha achọghị ọzụzụ", "Ha na-anọchi ndị ọrụ"], answer: 0, why: "Ọrụ na-agbanwe agbanwe na-emeghere ndị ọrụ afọ ofufo ọzọ ụzọ." },
      { objective: "O1", q: "Ụlọ nri ndị nọ ná mkpa chọrọ ndị nnabata, ndị nhazi na ndị ọkwọ ụgbọala. Nkọwa ọrụ ole?", options: ["Otu maka ha niile", "Ọ dịghị", "Otu maka ọrụ ọ bụla", "Naanị maka ndị ọkwọ ụgbọala"], answer: 2, why: "Ọrụ ọ bụla nwere ọrụ na mkpa dị iche." },
      { objective: "O2", q: "Kedu ụzọ ịchọta ndị ọrụ afọ ofufo na-arụkarị ọrụ nke ọma?", options: ["Ichere ka ndị mmadụ chọta gị", "Itinye ozi otu ugboro na ịtụ anya", "Ịjụ naanị ndị ọrụ", "Ịrịọ ndị mmadụ n'onwe gị, gụnyere site na ndị ọrụ afọ ofufo dị ugbu a"], answer: 3, why: "Ịrịọ mmadụ n'onwe gị na-eweta ndị ọrụ afọ ofufo kachasị." },
      { objective: "O2", q: "Nyocha kwesịrị ịdabara:", options: ["Ihe egwu dị n'ọrụ ahụ", "Ọdịdị onye ọrụ afọ ofufo", "Ihu igwe", "Ọnọdụ obi onye na-ahazi"], answer: 0, why: "Ọrụ nwere ihe egwu karịa chọrọ nyocha karịa." },
      { objective: "O2", q: "A ga-eme nyocha ndabere:", options: ["Na nzuzo", "Site n'ikike e dere ede nke onye ahụ", "Naanị mgbe ihe mere", "Site n'ịjụ ndị agbata obi"], answer: 1, why: "A chọrọ ikike, ọ bụkwa nkwanye ugwu." },
      { objective: "O2", q: "Kedu nke bụ ezigbo iwu nchekwa maka mmemme ụmụaka?", options: ["Okenye ọ bụla nwere ike ịnọ naanị ya na nwata ebe ọ bụla", "A na-ezo nchegbu", "Ọ dịghị okenye ga-anọ naanị ya na nwata ebe a na-adịghị ahụ ha", "Nyocha bụ nhọrọ"], answer: 2, why: "Iwu a na-echebe ụmụaka na ndị ọrụ afọ ofufo." },
      { objective: "O2", q: "Iwu maka nyocha ndabere ndị ọrụ afọ ofufo:", options: ["Bụ otu ebe niile", "Adịghị", "Bụ ndị ọrụ afọ ofufo na-ede ya", "Dị iche site na steeti na mmemme; jụọ ụlọ ọrụ inshọransị gị na ọka iwu"], answer: 3, why: "Ihe a chọrọ dị iche iche, ya mere lelee ihe metụtara gị." },
      { objective: "O3", q: "Nnabata (onboarding) pụtara:", options: ["Ihe niile na-enyere onye ọrụ afọ ofufo ọhụrụ aka ịmalite ma nwee mmasị", "Ịchụ onye ọrụ afọ ofufo", "Ịchọ ego", "Ịzụta ngwaọrụ"], answer: 0, why: "Ọ na-ekpuchi ozi nnabata, nnọkọ mmalite, ọzụzụ na oge ọrụ mbụ." },
      { objective: "O3", q: "Nzọụkwụ anọ nke ọzụzụ ọrụ bụ:", options: ["Gụọ, bịanye aka, pụọ, chefuo", "Kọwaa, gosi, ka ha nwaa, nye ndụmọdụ", "Gwa, nwalee, daa, megharịa", "Lee, chere, kọọ n'echiche, gaa"], answer: 1, why: "Ọzụzụ igosi na ịnwa na-ewu nka na obi ike." },
      { objective: "O3", q: "Ijikọ onye ọrụ afọ ofufo ọhụrụ na enyi na-enyere aka n'ihi na:", options: ["Ọ na-eme ka akwụkwọ dị okpukpu abụọ", "Ọ na-anọchi nnọkọ mmalite", "Ha nwere onye ha ga-ajụ n'oge ọrụ mbụ ha", "Enyi na-arụ ọrụ niile"], answer: 2, why: "Enyi na-eme ka oge ọrụ mbụ dị mfe ma dị ụtọ." },
      { objective: "O3", q: "Onye ọrụ afọ ofufo tinyere foto onye a na-eje ozi n'ịntanetị. Kedu isiokwu nnọkọ mmalite a hapụrụ?", options: ["Ebe a na-adọba ụgbọala", "Iwu nzuzo", "Nri nta", "Ịchọ ego"], answer: 1, why: "Ndị ọrụ afọ ofufo ga-edobe onye ndị a na-eje ozi bụ na nzuzo." },
      { objective: "O4", q: "Ezigbo usoro oge ndị ọrụ afọ ofufo:", options: ["Dị mfe ịhụ ma dị mfe ịgbanwe", "Dị naanị n'isi otu onye", "A na-etinye ya n'abalị tupu ụbọchị ahụ", "A naghị ekesa ya"], answer: 0, why: "Ịhụ ya na ịgbanwe ya n'ụzọ dị mfe na-ebelata oghere." },
      { objective: "O4", q: "Ndepụta ndị nnọchi bụ maka:", options: ["Ịchụ ndị ọrụ afọ ofufo", "Akụkọ grant", "Ichekwa usoro oge ochie", "Ịkpọ mgbe mmadụ kagburu oge ọrụ dị mkpa"], answer: 3, why: "Ndị nnọchi na-eme ka e nwee ndị na-arụ oge ọrụ dị mkpa." },
      { objective: "O4", q: "Onye ọrụ afọ ofufo na-agba mbọ n'ọrụ itinye data mana ọ hụrụ ịgwa ndị mmadụ okwu n'anya. Ị nwere ike:", options: ["Ileghara ya anya", "Ime ya ihere n'ihu ọha", "Ịgwa ya okwu na nzuzo ma nye ya ọrụ onye nnabata", "Iwepụ ya n'ekwughị okwu"], answer: 2, why: "Ọrụ dabara ya karịa na-edozikarị nsogbu ahụ." },
      { objective: "O5", q: "Kedu nke bụ ihe na-emekarị ka ndị ọrụ afọ ofufo kwụsị ịbịa?", options: ["A kelere ha nke ukwuu", "Ha chere na a chọghị ha ma ọ bụ na a kelighị ha mgbe ọ bụla", "E hazire oge ọrụ nke ọma", "Ha nwere ọzụzụ doro anya"], answer: 1, why: "Iche na a chọghị ha ma ọ bụ na a kelighị ha na-achụpụ ndị mmadụ." },
      { objective: "O5", q: "Mgbe ị na-ekesa akụkọ uru gbasara ndị ị na-eje ozi, ị kwesịrị:", options: ["Inweta ikike ha", "Iji aha ha zuru ezu n'ajụghị ha", "Ichepụta ihe", "Ikesa adreesị ụlọ ha"], answer: 0, why: "Nkwanye ugwu na nzuzo bụ ụzọ." },
      { objective: "O5", q: "Onye rụworo ọrụ afọ ofufo ogologo oge chọrọ itolite. Ị nwere ike:", options: ["Idobe ya n'otu ọrụ ahụ ruo mgbe ebighị ebi", "Ịrịọ ya ka ọ pụọ", "Inye ya naanị ọrụ nhicha ọzọ", "Ịkpọ ya ka ọ zụọ ndị ọrụ afọ ofufo ọhụrụ ma ọ bụ duo oge ọrụ"], answer: 3, why: "Ọrụ na-enyere aka itolite na-eme ka ndị ọrụ afọ ofufo kwere nkwa nọgide." },
      { objective: "O6", q: "Ndekọ mbanye onye ọrụ afọ ofufo kwesịrị ịgụnye:", options: ["Ozi ụlọ akụ ha", "Aha, ụbọchị, oge mmalite na njedebe, na ọrụ", "Okwuntughe ha", "Naanị mbinye aka"], answer: 1, why: "Ihe ndị a bụ isi na-enye gị ohere ịgụkọ awa n'ụzọ ziri ezi." },
      { objective: "O6", q: "Onye ọrụ afọ ofufo jụrụ ma o nwere ike iwepụ ego mmanụ ụgbọala ọ na-eji aga ọrụ afọ ofufo n'ụtụ isi. Ị kwesịrị:", options: ["Ikwu ee, ego ọ bụla", "Ikwu na ọ megidere iwu", "Iduga ya na IRS Publication 526 na ọkachamara ụtụ isi", "Ileghara ajụjụ ahụ anya"], answer: 2, why: "E nwere ike iwepụ ụfọdụ ego ha jiri aka ha mefuo; ha kwesịrị ilele isi iyi gọọmentị." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      2,
      4,
      6,
      8,
      11,
      12,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Nkọwa ọrụ",
        objective: "O1",
        notYet: "Enweghị oge, ọrụ ndị a ga-arụ ma ọ bụ onye ha ga-akọrọ.",
        meets: "Akụkụ ise niile, na-amalite n'uru ọ na-eweta.",
        exceeds: "Na-enyekwa nhọrọ dị mkpụmkpụ, na-agbanwe agbanwe maka ndị nwere obere oge."
      },
      {
        name: "Ịchọta na inyocha",
        objective: "O2",
        notYet: "Enweghị nyocha, ma ọ bụ ọrụ metụtara ụmụaka ma ọ bụ ndị okenye na-adịghị ike enweghị nyocha ndabere.",
        meets: "Ozi ịkpọ ndị mmadụ na nyocha dabara n'ihe egwu dị n'ọrụ ahụ, nwere ikike e dere ede maka nyocha.",
        exceeds: "Na-agbakwụnyekwa iwu nchekwa ma kwuo ka a jụọ ụlọ ọrụ inshọransị na ọka iwu."
      },
      {
        name: "Nnọkọ mmalite na ọzụzụ",
        objective: "O3",
        notYet: "Enweghị atụmatụ nnọkọ mmalite, ma ọ bụ nchekwa na nzuzo adịghị.",
        meets: "Usoro nkeji 30 nwere oge, na-ekpuchi nchekwa, nzuzo, mbanye na ikagbu, tinyere kọwaa, gosi, ka ha nwaa, nye ndụmọdụ.",
        exceeds: "Na-agụnyekwa enyi na ịjụ ase mgbe oge ọrụ mbụ gachara."
      },
      {
        name: "Usoro oge na nlekọta",
        objective: "O4",
        notYet: "Oge ọrụ enweghị onye ndu ma ọ bụ enweghị ndị nnọchi.",
        meets: "Usoro oge otu ọnwa nwere onye ndu oge ọrụ a kpọrọ aha, ndị nnọchi abụọ na ozi ncheta.",
        exceeds: "Na-ekwukwa otu ndị ọrụ afọ ofufo si akagbu na onye na-edozi nsogbu."
      },
      {
        name: "Ekele na awa",
        objective: "O5",
        notYet: "Enweghị atụmatụ ekele ma ọ bụ enweghị ụzọ isi dekọọ awa.",
        meets: "Otu obere echiche ekele na otu buru ibu, na mpempe akwụkwọ mbanye nwere aha, ụbọchị, mmalite, njedebe, awa na ọrụ.",
        exceeds: "Na-ekwukwa otu a ga-esi jiri ngụkọ awa n'akụkọ na n'ekele."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị ọrụ afọ ofufo ka na-arụ ọrụ ụbọchị 90 mgbe oge ọrụ mbụ ha gachara, ma e jiri ya tụnyere tupu ihe ọmụmụ a",
      "Ọrụ metụtara ụmụaka ma ọ bụ ndị okenye na-adịghị ike nwere nyocha na iwu nchekwa e dere ede",
      "Ngụkọ awa ndị ọrụ afọ ofufo e dekọrọ ma kọọ nye bọọdụ ma ọ bụ n'akụkọ grant"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa ma ọ bụ ekwentị nwere spreadsheet ma ọ bụ ngwa ndebanye aha n'efu, ma ọ bụ akwụkwọ",
      "Otu ezi ọrụ afọ ofufo a ga-eme atụmatụ maka ya",
      "Akwụkwọ ma ọ bụ dọkụmentị maka ngwugwu ndị ọrụ afọ ofufo",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Mee ka onye ọ bụla na-amụ ihe wuo ngwugwu ahụ maka ezi ọrụ n'òtù nke ya ka o wee dị njikere iji.",
      "Maka ọrụ metụtara ụmụaka ma ọ bụ ndị okenye na-adịghị ike, mesie nyocha na iwu nchekwa ike, ma gwa ndị na-amụ ihe ka ha kwado ihe a chọrọ n'aka ụlọ ọrụ inshọransị ha na ọka iwu.",
      "Chetara ndị na-amụ ihe ka ha ghara ịnakọta ozi ndị ọrụ afọ ofufo karịa ihe ha chọrọ, ma debe ndekọ na nzuzo.",
      "Jikọọ ndị na-amụ ihe abụọ abụọ ka ha gbanwerịta ma lelee nkọwa ọrụ na usoro nnọkọ mmalite ibe ha.",
      "Jiri rubric tụọ akara ngwugwu ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
