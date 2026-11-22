"use strict";

// Koach Learn course (Igbo translation of veterans/veterans-ai-consulting.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "veterans-ai-consulting-ig",
  lang: "ig",
  translationOf: "veterans-ai-consulting",
  category: "Veterans (military)",
  name: "Ohere Ọrụ Ndụmọdụ (Consulting) na AI",
  skills: "Ime ka ahụmahụ gị bụrụ onyinye ndụmọdụ, Ịchọta enyemaka azụmahịa n'efu maka ndị agha mbụ, Ide ozi mmalite, Iji AI dee atụmatụ ọrụ, Ichebe ozi onye ahịa",
  outcome: "ime ka ahụmahụ ndị agha gị bụrụ onyinye ndụmọdụ doro anya, ma jiri ngwa enyemaka AI dee atụmatụ ọrụ (proposal) otu peeji maka onye ahịa, ma mara ebe ị ga-enweta enyemaka gọọmentị n'efu iji malite azụmahịa ahụ.",
  about: [
    "Onye ndụmọdụ (consultant) bụ onye a na-akwụ ụgwọ ka o dozie otu nsogbu nye onye ahịa. Ndị agha mbụ (veterans) nwere nka ọtụtụ obere azụmahịa, òtù na-adịghị achọ uru (nonprofit) na ndị na-arụ ọrụ nkwekọrịta na-enweghị: ịhazi atụmatụ, nchekwa, ibuga ngwaahịa (logistics), ọzụzụ, nche na iduzi otu. Ugbu a, ngwa AI na-enyere ndị ndụmọdụ aka ịchọpụta ihe, ide ihe na ịrụcha ọrụ ngwa ngwa.",
    "N'ihe ọmụmụ a, ị ga-ahọrọ onyinye dabere n'ihe ị maara, mụta ebe ndị agha mbụ na-enweta enyemaka azụmahịa gọọmentị n'efu, dee ozi mmalite mbụ gị, ma jiri ngwa enyemaka AI dee atụmatụ ọrụ otu peeji. Ị ga-amụtakwa iwu ndị na-echebe ozi onye ahịa.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Ihe ọmụmụ a anaghị enye ndụmọdụ iwu ma ọ bụ ụtụ isi: maka ịmalite azụmahịa, jiri ọfịs gọọmentị a kpọrọ aha ebe a ma ọ bụ ọkachamara ruru eru."
  ],
  finalTask: "Dee atụmatụ ọrụ ndụmọdụ otu peeji maka onye ahịa e chepụtara echepụta ma ọ bụ ezi onye ahịa dị nso gị: nsogbu ahụ, ihe ị ga-eme, ihe ha ga-enweta, oge ọrụ ahụ, ọnụahịa gị (nke gị n'onwe gị setịrị, ọ bụghị AI), na otu ị ga-esi chebe ozi ha. Jiri ngwa enyemaka AI dee ya nke mbụ, wee dezie ya ka ihe ọ bụla i kwuru bụrụ eziokwu, ma dee otu ọfịs azụmahịa gọọmentị n'efu ị ga-akpọtụrụ ọzọ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị agha mbụ chọrọ inweta ego dị ka ndị ndụmọdụ, site n'iji nka dị ka ịhazi atụmatụ, nchekwa, logistics, ọzụzụ, nche na iduzi otu, maka obere azụmahịa, òtù nonprofit na ndị na-arụ ọrụ nkwekọrịta.",
    startingPoint: "Ha nwere ahụmahụ miri emi, ha marakwa ịkọwa ihe (briefing) na ide iwu ọrụ (orders), ha nwekwara ike iji kọmputa. Ọtụtụ akọwabeghị onyinye ndụmọdụ, kpọtụrụ ndị ahịa, setịa ọnụahịa ọrụ ma ọ bụ dee atụmatụ ọrụ, ma ole na ole ejirila AI dee ihe azụmahịa.",
    gap: "Ahụmahụ na-eweta ego naanị mgbe e nyere ya n'ụzọ doro anya nye onye ahịa chọrọ ya. Ndị na-amụ ihe kwesịrị ime ka nka ha bụrụ onyinye doro anya, kpọtụrụ ndị ahịa mbụ n'eziokwu, jiri AI dee atụmatụ ọrụ nke ha n'onwe ha setịrị ọnụahịa ma lelee, chebe ozi onye ahịa, ma jiri enyemaka azụmahịa gọọmentị n'efu.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; anaghị atụ anya na ha mụrụ azụmahịa",
      "Ngwaọrụ: kọmputa ma ọ bụ smartphone nwere ịntanetị na ngwa enyemaka AI n'efu",
      "Nzuzo: etinyela ozi nzuzo onye ahịa na ngwa AI ọha ma ọ bụrụ na onye ahịa ekwenyeghị ma a nabataghị ngwa ahụ; jiri ihe nnọchi n'omume",
      "Eziokwu: ihe ọ bụla e kwuru n'ozi na n'atụmatụ ọrụ ga-abụrịrị eziokwu; onye na-amụ ihe, ọ bụghị AI, na-esetịa ọnụahịa",
      "Ajụjụ gbasara akwụkwọ ikike (license), ụtụ isi na ndebanye aha na-aga n'ọfịs azụmahịa steeti, irs.gov ma ọ bụ onye ndụmọdụ VBOC"
    ],
    prerequisites: "Ọ dịghị. \"AI maka Ịrụ Ọrụ Nke Ọma na Idu Ndị Mmadụ\" bụ ihe ọmụmụ ọzọ ga-enyere aka."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ọmụmaatụ ọrụ ndụmọdụ", action: "ịkọwa ihe onye ndụmọdụ na-eme na ụzọ atọ AI si enyere ya aka", standard: "ma kpọọ aha opekata mpe nsogbu abụọ ndị ahịa nwere dabara na nka ndị agha gị" },
    { id: "O2", condition: "Site n'iji ahụmahụ ndị agha gị", action: "ide onyinye otu ahịrịokwu na-akpọ aha ndị ị na-enyere aka, nsogbu ahụ na nsonaazụ ya", standard: "nke i nwalere site n'ịjụ opekata mpe otu onye nọ n'ọrụ ahụ" },
    { id: "O3", condition: "Mgbe ị na-ezube azụmahịa gị", action: "ịmata enyemaka azụmahịa gọọmentị n'efu maka ndị agha mbụ dị nso gị na ihe ọfịs ọ bụla na-eme", standard: "nwere ozi ịkpọtụrụ Veterans Business Outreach Center kacha nso gị na otu ajụjụ ị ga-ajụ" },
    { id: "O4", condition: "Maka onyinye gị", action: "ide ozi mmalite dị mkpụmkpụ, nke eziokwu, na-arịọ onye nwere ike ịbụ onye ahịa oku nkeji 15", standard: "ebe ihe ọ bụla i kwuru bụ eziokwu, ma nwee mmadụ atọ ị ga-ezigara ya" },
    { id: "O5", condition: "Mgbe e nyere gị onyinye gị na nsogbu onye ahịa", action: "iji AI dee atụmatụ ọrụ otu peeji ma dezie ya ruo mgbe ọ ziri ezi", standard: "nwere oke ọrụ (scope) doro anya, oge ọrụ na ọnụahịa gị n'onwe gị setịrị" },
    { id: "O6", condition: "Mgbe ị na-eji AI n'ọrụ onye ahịa", action: "ide iwu na-echebe ozi onye ahịa ma lelee ọrụ AI tupu i nyefee ya", standard: "nwere ahịrị gbasara iji AI n'atụmatụ ọrụ ahụ, na-enweghị ozi onye ahịa na ngwa ọha n'enweghị ikike" }
  ],
  chapters: [
    {
      name: "Isi 1: Iwu onyinye ndụmọdụ gị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe ndị ndụmọdụ na-eme na ebe AI dabara",
          minutes: 4,
          goal: "Kọwaa ihe onye ndụmọdụ na-eme na ụzọ atọ AI si enyere ya aka.",
          text: [
            "Onye ndụmọdụ bụ ọkachamara si n'èzí nke onye ahịa na-ewe maka otu ọrụ, maka oge a kara aka. Ọmụmaatụ: ịhazi usoro nchekwa maka ụlọ ọrụ na-ewu ụlọ, iwu atụmatụ ọzụzụ maka ndị ọrụ afọ ofufo nke òtù nonprofit, ma ọ bụ ịhazi otu ụlọ nkwakọba ngwaahịa ga-esi dị.",
            "AI na-enyere ndị ndụmọdụ aka ịchọpụta ihe gbasara isiokwu ngwa ngwa, ide akwụkwọ nke mbụ dị ka atụmatụ ọrụ na akụkọ, na ime ka ndetu bụrụ ndepụta ma ọ bụ slaịdị. Ọ naghị anọchi ahụmahụ gị: ndị ahịa na-akwụ ụgwọ maka uche na mkpebi gị.",
            "Ndụmọdụ AI gụnyekwara inyere obere òtù aka ịmalite iji ngwa AI n'enweghị nsogbu, dịka ọmụmaatụ ide iwu dị mfe gbasara iji AI ma ọ bụ ịzụ ndị ọrụ. Omume ndị agha gị nke usoro a kara aka na ọzụzụ doro anya na-adaba nke ọma ebe a."
          ],
          words: [["Onye ndụmọdụ (consultant)", "ọkachamara si n'èzí a na-akwụ ụgwọ ka o dozie otu nsogbu nye onye ahịa."], ["Onye ahịa (client)", "onye ma ọ bụ òtù na-akwụ ụgwọ maka ọrụ gị."], ["Ihe a ga-enyefe (deliverable)", "ihe ị na-enyefe na njedebe, dị ka atụmatụ, akụkọ ma ọ bụ ọzụzụ."]],
          slides: [
            { title: "Onye ndụmọdụ bụ...", bullets: ["Ọkachamara si n'èzí", "A na-ewe ya maka otu ọrụ, maka oge a kara aka", "A na-akwụ ya ụgwọ maka uche na nsonaazụ"] },
            { title: "Otu AI si enyere aka", bullets: ["Ịchọpụta ihe ngwa ngwa", "Ide atụmatụ ọrụ na akụkọ nke mbụ", "Ime ka ndetu bụrụ ndepụta ma ọ bụ slaịdị"] },
            { title: "Ọrụ ndụmọdụ AI", bullets: ["Inyere obere òtù aka iji AI n'enweghị nsogbu", "Ide iwu dị mfe gbasara iji AI", "Ịzụ ndị ọrụ"] }
          ],
          tryIt: "Jụọ ngwa enyemaka AI: \"Kedu nsogbu obere azụmahịa ndị dị nso m na-ewekarị ndị ndụmọdụ maka ha?\" Gbaa okirikiri gburugburu abụọ dabara n'ihe i mere n'ọrụ ndị agha.",
          youCanNow: "ịkọwa ihe onye ndụmọdụ na-eme na otu AI si akwado ọrụ ahụ.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ ihe a ga-enyefe (deliverable)?", options: ["Ihe ị na-enyefe na njedebe, dị ka atụmatụ ma ọ bụ akụkọ", "Ego onye ahịa kwụrụ", "Kaadị azụmahịa gị", "Oku ekwentị mbụ"], answer: 0, why: "Ihe a ga-enyefe bụ ọrụ e mechara nke onye ahịa na-anata." },
            { objective: "O1", q: "AI nyere gị ndepụta nsogbu obere azụmahịa na-ewe ndị ndụmọdụ maka ha. Gịnị ka ị ga-eme?", options: ["Kwe nkwa idozi ha niile", "Leghara ndepụta ahụ anya", "Gbaa okirikiri gburugburu ndị dabara n'ihe i mere n'ọrụ ndị agha", "Họrọ nke kacha akwụ ụgwọ, ọbụlagodi na i nweghị nka na ya"], answer: 2, why: "Onyinye gị kwesịrị ijikọ ezi nsogbu na nka i nweburu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ime ka ahụmahụ gị bụrụ onyinye",
          minutes: 5,
          goal: "Dee onyinye otu ahịrịokwu: ndị ị na-enyere aka, nsogbu ahụ na nsonaazụ ya.",
          text: [
            "Onyinye doro anya nwere akụkụ atọ: ndị ị na-enyere aka, nsogbu ị na-edozi, na nsonaazụ ha ga-enweta. Dịka ọmụmaatụ: \"Ana m enyere obere ụlọ ọrụ na-ewu ụlọ aka iwu usoro nchekwa e dere ede ka ha gafee nyocha ma belata mmerụ ahụ.\"",
            "Bido n'ihe i mere ugboro ugboro ma mee nke ọma n'ọrụ ndị agha, wee chọta òtù ndị nkịtị nwere otu nsogbu ahụ. Onye bụbu NCO logistics nwere ike inyere obere ndị na-ekesa ngwaahịa aka ịhazi ngwaahịa ha. Onye bụbu onye nkuzi nwere ike inyere òtù nonprofit aka ịnabata ma zụọ ndị ọrụ afọ ofufo ọhụrụ.",
            "Jiri ngwa enyemaka AI chepụta echiche, wee nwalee onyinye ahụ site n'ịjụ mmadụ abụọ ma ọ bụ atọ nọ n'ọrụ ahụ n'ezie: \"Ọ bụ nsogbu a ka ị ga-akwụ ụgwọ ka e dozie?\""
          ],
          steps: ["Depụta ihe atọ i mere ugboro ugboro ma mee nke ọma n'ọrụ ndị agha.", "Jụọ ngwa enyemaka AI: \"Kedu azụmahịa ndị nkịtị nwere nsogbu a?\"", "Dee: \"Ana m enyere [ndị] aka [idozi gịnị] ka ha [nsonaazụ].\"", "Jụọ mmadụ abụọ ma ọ bụ atọ nọ n'ọrụ ahụ ma ha ga-akwụ ụgwọ maka ya."],
          words: [["Onyinye (offer)", "nkọwa doro anya nke ndị ị na-enyere aka, ihe ị na-enyere ha aka na ya, na nsonaazụ ya."], ["Niche", "otu obere òtù ndị ahịa a kapịrị ọnụ ị na-elekwasị anya."]],
          slides: [
            { title: "Akụkụ atọ nke onyinye", bullets: ["Ndị ị na-enyere aka", "Nsogbu ị na-edozi", "Nsonaazụ ha ga-enweta"] },
            { title: "Bido n'ọrụ ndị agha gị", bullets: ["Ihe i mere ugboro ugboro ma mee nke ọma", "Kedu ndị nkịtị nwere otu nsogbu ahụ?"] },
            { title: "Nwalee ya n'ezi mmadụ", bullets: ["\"Ọ bụ nsogbu a ka ị ga-akwụ ụgwọ ka e dozie?\"", "Jụọ mmadụ abụọ ma ọ bụ atọ nọ n'ọrụ ahụ"] }
          ],
          tryIt: "Dee onyinye otu ahịrịokwu gị site n'iji \"Ana m enyere [ndị] aka [idozi gịnị] ka ha [nsonaazụ].\" Rịọ ngwa enyemaka AI ka o mee ka o doo anya karị, wee gụọrọ ya otu onye nọ n'ọrụ ahụ.",
          youCanNow: "ide onyinye ndụmọdụ doro anya dabere n'ahụmahụ ndị agha gị.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ niche?", options: ["Onye ahịa ọ bụla e nwere ike inwe", "Ụdị nkwekọrịta", "Mmemme gọọmentị n'efu", "Otu obere òtù ndị ahịa a kapịrị ọnụ ị na-elekwasị anya"], answer: 3, why: "Niche bụ òtù a kapịrị ọnụ ị na-ejere ozi, nke na-eme ka onyinye gị doo anya." },
            { objective: "O2", q: "I dere \"Ana m enyere azụmahịa aka n'ihe dị iche iche.\" Gịnị ka ị ga-eme?", options: ["Jiri ya otu o si dị", "Degharịa ya ka ọ bụrụ \"Ana m enyere [ndị] aka [idozi gịnị] ka ha [nsonaazụ]\"", "Mee ka ọ dị ogologo site n'itinye okwu ndị a ma ama", "Wepụ nsonaazụ ya"], answer: 1, why: "Onyinye doro anya na-akpọ aha ndị ị na-enyere aka, nsogbu ahụ na nsonaazụ ya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Enyemaka gọọmentị n'efu maka ndị agha mbụ nwere azụmahịa",
          minutes: 5,
          goal: "Chọta enyemaka azụmahịa n'efu maka ndị agha mbụ dị nso gị ma mara ihe ọfịs ọ bụla na-eme.",
          text: [
            "U.S. Small Business Administration (SBA, ụlọ ọrụ gọọmentị US na-enyere obere azụmahịa aka) na-eme Boots to Business, nke bụ akụkụ nke Transition Assistance Program (TAP) nke ndị agha, na Boots to Business Reboot maka ndị agha mbụ nke oge ọ bụla. Veterans Business Outreach Centers (VBOC) na-enye ọmụmụ ihe gbasara atụmatụ azụmahịa, ndụmọdụ onye ndu (mentoring) na ọzụzụ.",
            "Ọ bụrụ na ị chọrọ nkwekọrịta gọọmentị, SBA na-enye asambodo nye obere azụmahịa ndị agha mbụ nwere na nke ndị agha mbụ merụrụ ahụ n'ọrụ nwere, site na mmemme ya a na-akpọ Veteran Small Business Certification, ma ọ bụ VetCert, na certifications.sba.gov. Mgbe anyị lelere n'ọnwa Ọktoba 2026, VA kwuru na azụmahịa ndị na-arụ ọrụ na VA ga-edebanyerịrị aha site na SBA.",
            "VA depụtakwara ọzụzụ ịmalite azụmahịa dị ka otu ụzọ isi jiri ụfọdụ uru GI Bill. Steeti gị na IRS (ụlọ ọrụ ụtụ isi US) na-esetịa iwu gbasara aha azụmahịa, akwụkwọ ikike na ụtụ isi, ya mere lelee ọfịs azụmahịa steeti gị na irs.gov, ma ọ bụ jụọ onye ndụmọdụ VBOC."
          ],
          steps: ["Meghee peeji SBA maka azụmahịa ndị agha mbụ nwere.", "Chọta Veterans Business Outreach Center kacha nso gị.", "Lee ụbọchị Boots to Business ma ọ bụ Reboot.", "Ọ bụrụ na ị chọrọ ọrụ gọọmentị, gụọ maka VetCert na certifications.sba.gov.", "Lelee ọfịs azụmahịa steeti gị maka akwụkwọ ikike na ndebanye aha."],
          words: [["SBA", "U.S. Small Business Administration, ụlọ ọrụ gọọmentị etiti US na-enyere obere azụmahịa aka."], ["VBOC", "Veterans Business Outreach Center: ebe SBA na-akwụ ụgwọ ha na-enyere ndị agha mbụ nwere azụmahịa aka."], ["VetCert", "asambodo SBA maka obere azụmahịa ndị agha mbụ nwere na nke ndị agha mbụ merụrụ ahụ n'ọrụ nwere."]],
          slides: [
            { title: "Enyemaka SBA n'efu maka ndị agha mbụ", bullets: ["Boots to Business (akụkụ nke TAP)", "Boots to Business Reboot, oge ọ bụla", "Veterans Business Outreach Centers"] },
            { title: "Nkwekọrịta gọọmentị", bullets: ["VetCert na certifications.sba.gov", "Maka azụmahịa ndị agha mbụ na ndị merụrụ ahụ n'ọrụ nwere", "Ịrụ ọrụ na VA chọrọ ndebanye aha SBA"] },
            { title: "Iwu ịmalite azụmahịa", bullets: ["Aha, akwụkwọ ikike na ụtụ isi: steeti gị na IRS", "Jụọ onye ndụmọdụ VBOC", "Ọ bụghị naanị AI ka ị ga-ajụ ndụmọdụ iwu ma ọ bụ ụtụ isi"] }
          ],
          sources: [
            { name: "SBA: Veteran-owned businesses", url: "https://www.sba.gov/business-guide/grow-your-business/veteran-owned-businesses" },
            { name: "SBA: Veteran contracting assistance (VetCert)", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/veteran-contracting-assistance-programs" },
            { name: "VA: Veteran-owned small business support", url: "https://www.va.gov/careers-employment/veteran-owned-business-support/" },
            { name: "VA: How to use your GI Bill benefits", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/" }
          ],
          tryIt: "Chọta Veterans Business Outreach Center kacha nso gị na sba.gov. Dee aha ya, otu esi akpọtụrụ ya, na otu ajụjụ ị ga-ajụ gbasara ịmalite azụmahịa ndụmọdụ.",
          youCanNow: "ịchọta enyemaka gọọmentị n'efu maka ịmalite azụmahịa ndụmọdụ nke onye agha mbụ nwere.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka Veterans Business Outreach Center na-enye?", options: ["Mbinye ego na-enweghị akwụkwọ ọ bụla", "Mgbasa ozi a na-akwụ ụgwọ maka azụmahịa gị", "Enyemaka n'efu n'atụmatụ azụmahịa na ndụmọdụ onye ndu maka ndị agha mbụ", "Onye ahịa mbụ e kwere nkwa ya"], answer: 2, why: "VBOC na-enye ndị agha mbụ enyemaka n'efu n'ịhazi azụmahịa na ndụmọdụ onye ndu." },
            { objective: "O3", q: "I nwere ajụjụ gbasara akwụkwọ ikike azụmahịa ị chọrọ. Ebee ka ị ga-ajụ ya?", options: ["Ọfịs azụmahịa steeti gị, irs.gov ma ọ bụ onye ndụmọdụ VBOC", "Naanị ngwa enyemaka AI", "Otu òtù na soshal midia", "Onye gị na ya na-asọ mpi"], answer: 0, why: "Ajụjụ gbasara akwụkwọ ikike na ụtụ isi na-aga n'ọfịs gọọmentị ma ọ bụ ndị ndụmọdụ, ọ bụghị AI." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Iwu onyinye ndụmọdụ gị",
        questions: [
          { objective: "O1", q: "Gịnị bụ onye ndụmọdụ?", options: ["Onye nyocha gọọmentị", "Onye ọrụ oge niile ruo ọnwụ", "Ọkachamara si n'èzí a na-akwụ ụgwọ ka o dozie otu nsogbu", "Onye na-ere naanị otu ngwaahịa"], answer: 2, why: "A na-ewe ndị ndụmọdụ maka otu ọrụ na oge a kara aka." },
          { objective: "O1", q: "Gịnị bụ isi ihe ndị ahịa na-akwụ onye ndụmọdụ ụgwọ maka ya?", options: ["Uche na nsonaazụ ya", "Ego ọ na-akwụ maka AI", "Uwe ndị agha ya", "Otu o si ede ngwa ngwa"], answer: 0, why: "AI na-enyere aka, mana ndị ahịa na-akwụ ụgwọ maka ọkachamara." },
          { objective: "O2", q: "Kedu nke bụ onyinye doro anya?", options: ["\"Kpọọ m.\"", "\"Ana m eme ihe dị iche iche.\"", "\"Abụ m onye agha mbụ.\"", "\"Ana m enyere obere ụlọ ọrụ na-ewu ụlọ aka iwu usoro nchekwa ka ha gafee nyocha.\""], answer: 3, why: "Ọ na-akpọ aha ndị ahụ, nsogbu ahụ na nsonaazụ ya." },
          { objective: "O2", q: "Kedu otu ị ga-esi nwalee ma onyinye gị bụ ezi ihe?", options: ["Jụọ naanị AI", "Jụọ ndị nọ n'ọrụ ahụ ma ha ga-akwụ ụgwọ ka e dozie nsogbu ahụ", "Kọọ nkọ", "Bipụta kaadị azụmahịa mbụ"], answer: 1, why: "Ezi ndị ga-azụ ga-agwa gị ma nsogbu ahụ kwesịrị ịkwụ ụgwọ maka ya." },
          { objective: "O3", q: "Ebee ka ndị agha mbụ nwere ike inweta enyemaka n'efu n'atụmatụ azụmahịa na ndụmọdụ onye ndu?", options: ["Onye na-ere ụgbọala", "Veterans Business Outreach Center", "Mgbasa ozi na soshal midia", "Otu òtù crypto"], answer: 1, why: "VBOC bụ ebe SBA na-akwụ ụgwọ ha maka ndị agha mbụ nwere azụmahịa." }
        ]
      }
    },
    {
      name: "Isi 2: Inweta ọrụ na ịrụ ya",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ide ozi mmalite mbụ gị",
          minutes: 5,
          goal: "Dee ozi dị mkpụmkpụ, nke eziokwu, na-arịọ onye nwere ike ịbụ onye ahịa oku nkeji 15.",
          text: [
            "Ndị ahịa mbụ gị na-esikarị na ndị maburu gị: ndị bụbu ndị isi gị, òtù ndị agha mbụ, òtù azụmahịa obodo gị na òtù nonprofit ị na-arụrụ ọrụ afọ ofufo.",
            "Ezigbo ozi mmalite dị mkpụmkpụ: onye ị bụ, nsogbu ị na-enyere aka na ya, otu ihe akaebe (nsonaazụ site n'ọrụ ndị agha ma ọ bụ ọrụ gara aga), na obere arịrịọ, dị ka oku nkeji 15.",
            "AI nwere ike ide ya nke mbụ, mana mee ka ọ dị ka okwu gị ma wepụ ihe ọ bụla na-abụghị eziokwu. Ekwula mgbe ọ bụla na i nwere asambodo, ikike nzuzo (clearance) ma ọ bụ nsonaazụ i nweghị."
          ],
          steps: ["Depụta mmadụ ma ọ bụ òtù iri maara gị ma ọ bụ nọ n'otu ọrụ gị.", "Rịọ ngwa enyemaka AI ka o dee ozi ahịrịokwu 5: onye ị bụ, nsogbu ahụ, otu akaebe, oku nkeji 15.", "Dezie ya ka ọ dị ka okwu gị.", "Lelee na ihe ọ bụla i kwuru bụ eziokwu.", "Zigara mmadụ atọ ya."],
          words: [["Ozi mmalite (outreach)", "ịkpọtụrụ ndị nwere ike ịbụ ndị ahịa iji malite mkparịta ụka."], ["Akaebe (proof)", "ezi nsonaazụ na-egosi na ị nwere ike ịrụ ọrụ ahụ."]],
          slides: [
            { title: "Bido na ndị maara gị", bullets: ["Ndị bụbu ndị isi gị na òtù ndị agha mbụ", "Òtù azụmahịa obodo gị", "Òtù nonprofit ị na-arụrụ ọrụ afọ ofufo"] },
            { title: "Ozi dị mkpụmkpụ", bullets: ["Onye ị bụ na nsogbu ị na-edozi", "Otu ezi akaebe", "Obere arịrịọ: oku nkeji 15"] },
            { title: "Kwuo eziokwu", bullets: ["Mee ka ọ dị ka okwu gị", "Ekwula ihe ị na-enweghị ike igosi"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI ka o dee ozi mmalite ahịrịokwu ise maka onyinye gị. Dezie ya ka ọ dị ka okwu gị ma ihe ọ bụla i kwuru bụrụ eziokwu, wee dee aha mmadụ atọ ị ga-ezigara ya.",
          youCanNow: "ide ozi mmalite nke eziokwu na-arịọ onye nwere ike ịbụ onye ahịa obere oku.",
          quickCheck: [
            { objective: "O4", q: "Kedu ezigbo obere arịrịọ n'ozi mmalite?", options: ["Bịanye aka na nkwekọrịta otu afọ taa", "Oku nkeji 15", "Kwụọ ego mbụ ugbu a", "Kesaa akwụkwọ ego ha"], answer: 1, why: "Obere arịrịọ dị mfe dị ka oku dị mkpụmkpụ na-eme ka \"ee\" mbụ dịkwuo mfe." },
            { objective: "O4", q: "Ozi mmalite AI dere kwuru na i nwere \"afọ 20 nke ahụmahụ ndụmọdụ\". I nweghị nke ọ bụla. Gịnị ka ị ga-eme?", options: ["Hapụ ya; ọ dị mma ịnụ", "Gbanwee ya ka ọ bụrụ afọ 10", "Zigara ọtụtụ mmadụ ya", "Wepụ ya ma kwuo ezi ahụmahụ ndị agha gị"], answer: 3, why: "Ihe ọ bụla i kwuru ga-abụrịrị eziokwu; ezi ahụmahụ gị bụ akaebe gị." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Iji AI dee atụmatụ ọrụ (proposal)",
          minutes: 6,
          goal: "Jiri AI dee atụmatụ ọrụ otu peeji ma dezie ya ruo mgbe ọ ziri ezi.",
          text: [
            "Atụmatụ ọrụ (proposal) bụ atụmatụ gị maka nsogbu onye ahịa. Ọ na-arụ ọrụ dị ka iwu ọrụ ndị agha (operations order): ọnọdụ (nsogbu ahụ), ozi ọrụ (ihe ị ga-eme), mmejupụta (nzọụkwụ na oge ọrụ), na ihe onye ahịa ga-enweta (ihe a ga-enyefe).",
            "Nye AI ndetu gị site n'oku gị na onye ahịa, na-enweghị ozi nzuzo onye ahịa, ma rịọ ya atụmatụ ọrụ otu peeji na-eji isiokwu ndị ahụ. Wee dezie ya nke ọma: wepụ ihe ọ bụla na-edoghị anya, dozie ụbọchị, ma mee ka oke ọrụ (scope) doo anya ka ọrụ ahụ ghara ịna-abawanye.",
            "Gị, ọ bụghị AI, na-esetịa ọnụahịa. Chee echiche maka awa gị, ego ị ga-efu, na uru nsonaazụ ahụ bara nye onye ahịa. Jụọ onye ndụmọdụ VBOC ma ọ bụ ndị ndụmọdụ ndị ọzọ nọ n'ọrụ gị ihe bụ ọnụahịa nkịtị."
          ],
          steps: ["Dee ndetu gị site na mkparịta ụka gị na onye ahịa (na-enweghị ozi nzuzo).", "Rịọ ngwa enyemaka AI atụmatụ ọrụ otu peeji: nsogbu ahụ, ihe m ga-eme, oge ọrụ, ihe a ga-enyefe, ọnụahịa.", "Mee ka oke ọrụ doo anya: ihe dị n'ime ya na ihe na-adịghị.", "Tinye ọnụahịa nke gị.", "Gụọ ya dị ka onye ahịa: ọ nwere ihe na-edoghị anya?"],
          words: [["Atụmatụ ọrụ (proposal)", "atụmatụ e dere ede na ọnụahịa maka idozi nsogbu onye ahịa."], ["Oke ọrụ (scope)", "kpọmkwem ọrụ dị n'ime ya na nke na-adịghị."], ["Scope creep", "mgbe ọrụ na-abawanye karịa ihe e kwekọrịtara."]],
          slides: [
            { title: "Atụmatụ ọrụ = iwu ọrụ ndị agha", bullets: ["Ọnọdụ: nsogbu ahụ", "Ozi ọrụ: ihe ị ga-eme", "Mmejupụta: nzọụkwụ na oge ọrụ", "Ihe a ga-enyefe: ihe ha ga-enweta"] },
            { title: "AI na-ede nke mbụ, gị na-edezi", bullets: ["Tinye ndetu, ọ dịghị ozi nzuzo onye ahịa", "Wepụ okwu na-edoghị anya, dozie ụbọchị", "Oke ọrụ doro anya na-egbochi scope creep"] },
            { title: "Gị na-esetịa ọnụahịa", bullets: ["Awa gị na ego ị ga-efu", "Uru nsonaazụ ahụ bara", "Jụọ onye ndụmọdụ VBOC ihe bụ nkịtị"] }
          ],
          tryIt: "Jiri onyinye gị na onye ahịa e chepụtara echepụta. Rịọ ngwa enyemaka AI atụmatụ ọrụ otu peeji nwere isiokwu ise ahụ, wee dezie oke ọrụ ma tinye ọnụahịa nke gị.",
          youCanNow: "iji enyemaka AI dee ma dezie atụmatụ ọrụ ndụmọdụ otu peeji doro anya.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka oke ọrụ (scope) pụtara n'atụmatụ ọrụ?", options: ["Kpọmkwem ọrụ dị n'ime ya na nke na-adịghị", "Adreesị onye ahịa", "Ụdị mkpụrụ akwụkwọ ị na-eji", "Naanị ego ị na-ana kwa awa"], answer: 0, why: "Oke ọrụ na-esetịa oke doro anya n'ọrụ ahụ, nke na-egbochi scope creep." },
            { objective: "O5", q: "AI tụrụ aro ọnụahịa maka atụmatụ ọrụ gị. Gịnị ka ị ga-eme?", options: ["Jiri ọnụahịa AI", "Hapụ ọnụahịa n'ime ya", "Setịa ọnụahịa nke gị dabere n'awa gị, ego ị ga-efu na uru ya", "Rịọ onye ahịa ka ọ họrọ ọnụahịa ọ bụla"], answer: 2, why: "Gị na-esetịa ọnụahịa; AI amaghị ego ị ga-efu ma ọ bụ uru ọrụ gị." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịrụcha ọrụ na ichebe onye ahịa",
          minutes: 5,
          goal: "Setịa iwu maka iji AI n'ọrụ onye ahịa nke na-echebe ozi onye ahịa.",
          text: [
            "Ndị ahịa na-atụkwasị gị obi n'ozi ha: aha ndị ọrụ ha, ego, atụmatụ na nsogbu ha. Etinyela ozi nzuzo onye ahịa na ngwa AI ọha belụsọ na onye ahịa ekwenyela ma a nabatala ngwa ahụ maka ya.",
            "Lelee ihe ọ bụla AI mepụtara tupu onye ahịa ahụ ya: eziokwu, nọmba, aha na iwu. Gị bụ onye ọrụ ahụ dịịrị, ọ bụghị AI.",
            "Gwa ha eziokwu banyere otu ị si eji AI. Otu ahịrị dị mfe n'atụmatụ ọrụ gị zuru: \"Ana m eji ngwa AI ede akwụkwọ nke mbụ; ana m elele ọrụ niile, anaghịkwa m ekesa ozi nzuzo gị na ha.\""
          ],
          steps: ["Ewepụla ozi nzuzo onye ahịa na ngwa AI ọha.", "Jiri ihe nnọchi dị ka [aha onye ahịa] mgbe ị na-ede.", "Lelee eziokwu, nọmba na iwu ọ bụla tupu i nyefee.", "Tinye otu ahịrị n'atụmatụ ọrụ gị gbasara otu ị si eji AI."],
          words: [["Nzuzo (confidential)", "ozi onye ahịa chọrọ ka e debe na nzuzo."], ["Ngwa a nabatara (approved tool)", "ngwa AI onye ahịa kwenyere na ị nwere ike iji ya n'ozi ha."]],
          slides: [
            { title: "Chebe ozi onye ahịa", bullets: ["Ọ dịghị ozi nzuzo onye ahịa na ngwa AI ọha", "Jiri ihe nnọchi dị ka [aha onye ahịa]"] },
            { title: "Ọrụ ahụ dịịrị gị", bullets: ["Lelee eziokwu, nọmba, aha na iwu", "Ọ bụghị AI ka ọ dịịrị; ọ dịịrị gị"] },
            { title: "Kwuo eziokwu banyere AI", bullets: ["Kwuo otu ị si eji ya n'atụmatụ ọrụ", "\"Ana m elele ọrụ niile ma chebe ozi gị\""] }
          ],
          tryIt: "Ọrụ ikpeazụ: mechaa atụmatụ ọrụ otu peeji gị. Tinye ahịrị gbasara iji AI, lelee na ihe ọ bụla i kwuru bụ eziokwu, ma dee aha ọfịs azụmahịa gọọmentị n'efu ị ga-akpọtụrụ ọzọ.",
          youCanNow: "inye ọrụ ndụmọdụ dabere n'ahụmahụ ndị agha gị, iji AI dee atụmatụ ọrụ, na ichebe ozi onye ahịa gị.",
          quickCheck: [
            { objective: "O6", q: "Gịnị ka ihe nnọchi dị ka [aha onye ahịa] na-eme?", options: ["Ọ na-ezo aha nke gị", "Ọ na-eme ka atụmatụ ọrụ dị ogologo", "Ọ na-ezipu atụmatụ ọrụ n'onwe ya", "Ọ na-ekwe ka i jiri AI dee ihe n'ekesaghị ozi nzuzo"], answer: 3, why: "Ihe nnọchi na-ewepụ ozi onye ahịa na AI mgbe ị na-ede." },
            { objective: "O6", q: "Onye ahịa zitere atụmatụ nzuzo ma ị chọrọ enyemaka AI. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Tinye ha na AI ọha ọ bụla", "Lelee na onye ahịa kwenyere ma a nabatara ngwa ahụ maka ya", "Tinye ha n'ịntanetị ka ndị mmadụ kwuo uche ha", "Kesaa ha na onye ahịa ọzọ"], answer: 1, why: "Ozi nzuzo onye ahịa na-aba na ngwa AI naanị mgbe onye ahịa kwenyere ma a nabatara ngwa ahụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Inweta ọrụ na ịrụ ya",
        questions: [
          { objective: "O4", q: "Ebee ka ndị ahịa ndụmọdụ mbụ na-esikarị?", options: ["Ebe ọ bụla", "Mgbasa ozi na-apụta na mberede", "Naanị oku nye ndị ị na-amaghị", "Ndị mmadụ na òtù maburu gị"], answer: 3, why: "Ntụkwasị obi site n'aka ndị maara gị na-emeghe ụzọ ngwa ngwa." },
          { objective: "O4", q: "Kedu ezigbo obere arịrịọ n'ozi mmalite?", options: ["Oku nkeji 15", "Nkwekọrịta otu afọ", "Ozi akaụntụ ụlọ akụ ha", "Nnukwu ego a ga-akwụ tupu ọrụ"], answer: 0, why: "Oku dị mkpụmkpụ dị mfe ịsị \"ee\" na ya." },
          { objective: "O5", q: "Onye kwesịrị ịsetịa ọnụahịa gị?", options: ["Weebụsaịtị ọ bụla", "AI", "Gị, dabere n'awa, ego ị ga-efu na uru ya", "Naanị onye ahịa"], answer: 2, why: "Ịsetịa ọnụahịa bụ mkpebi azụmahịa gị." },
          { objective: "O5", q: "Gịnị bụ scope creep?", options: ["Inyefe ọrụ ngwa ngwa", "Ụdị AI", "Fọm iwu", "Mgbe ọrụ na-abawanye karịa ihe e kwekọrịtara"], answer: 3, why: "Oke ọrụ doro anya na-egbochi ọrụ ịbawanye n'akwụghị ụgwọ." },
          { objective: "O6", q: "Ị nwere ike itinye atụmatụ nzuzo onye ahịa na ngwa AI ọha?", options: ["Ee, ọ bụrụ na ọ ga-azọpụta oge", "Mgbe niile", "Naanị ma ọ bụrụ na onye ahịa kwenyere ma a nabatara ngwa ahụ maka ya", "Ee, ọ bụrụ na ị ga-ehichapụ ya emesịa"], answer: 2, why: "Ozi onye ahịa chọrọ nkwenye ya na ngwa a nabatara." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ohere Ọrụ Ndụmọdụ (Consulting) na AI",
    questions: [
      { objective: "O1", q: "Ihe a ga-enyefe (deliverable) bụ:", options: ["Ụgbọala gị", "Ihe ị na-enyefe na njedebe, dị ka atụmatụ ma ọ bụ akụkọ", "Nọmba akwụkwọ ụgwọ gị", "Ngwa AI"], answer: 1, why: "Ihe a ga-enyefe bụ nsonaazụ onye ahịa na-anata." },
      { objective: "O1", q: "Kedu otu ụzọ AI si enyere ndị ndụmọdụ aka?", options: ["Ide atụmatụ ọrụ na akụkọ nke mbụ", "Ịnọchi uche niile", "Ịbịanye aka na nkwekọrịta", "Ijide ikike nzuzo (clearance)"], answer: 0, why: "AI na-eme ka ide ihe nke mbụ dị ngwa; gị ka na-ekpebi." },
      { objective: "O1", q: "Ndụmọdụ AI nwere ike ịgụnye:", options: ["Ire ozi onye ahịa", "Ịbanye na kọmputa ndị gị na ha na-asọ mpi n'ụzọ ezighi ezi", "Inyere obere òtù aka ide iwu dị mfe gbasara iji AI", "Ikwe nkwa uru"], answer: 2, why: "Inyere ndị mmadụ aka ịmalite iji AI n'enweghị nsogbu bụ ezi mkpa ndụmọdụ." },
      { objective: "O2", q: "Akụkụ atọ nke onyinye bụ:", options: ["Ndị ị na-enyere aka, nsogbu ahụ na nsonaazụ ya", "Akara (logo), agba na ụdị mkpụrụ akwụkwọ", "Ọkwa, otu ndị agha na ogige", "Ọnụahịa, ụtụ isi na ego ndị ọzọ"], answer: 0, why: "Ihe ndị a na-eme ka onyinye doo anya nye onye ga-azụ." },
      { objective: "O2", q: "Niche bụ:", options: ["App AI", "Ụdị ụtụ isi", "Baajị ndị agha", "Otu obere òtù ndị ahịa a kapịrị ọnụ ị na-elekwasị anya"], answer: 3, why: "Ilekwasị anya na-eme ka ire onyinye gị dịkwuo mfe." },
      { objective: "O2", q: "Onye bụbu onye nkuzi nwere ike inye onyinye:", options: ["Ịnya ụgbọelu n'enweghị akwụkwọ ikike", "Inyere òtù nonprofit aka ịnabata ma zụọ ndị ọrụ afọ ofufo ọhụrụ", "Inye ndụmọdụ iwu", "Ire crypto"], answer: 1, why: "Nka ọzụzụ na-agafe ozugbo." },
      { objective: "O3", q: "Onye na-eme Boots to Business?", options: ["Ụlọ akụ nkeonwe", "SBA, dị ka akụkụ nke Transition Assistance Program", "Netwọk soshal midia", "IRS"], answer: 1, why: "SBA na-eme ya n'ime TAP." },
      { objective: "O3", q: "Boots to Business Reboot bụ maka:", options: ["Naanị ụmụ akwụkwọ", "Naanị ndị ọchịagha nọ n'ọrụ ugbu a", "Naanị ndị nkịtị", "Ndị agha mbụ nke oge ọ bụla, gụnyere Guard na Reserve"], answer: 3, why: "SBA kwuru na Reboot na-ejere ndị agha mbụ nke oge ọ bụla ozi." },
      { objective: "O3", q: "VetCert bụ:", options: ["Asambodo SBA maka obere azụmahịa ndị agha mbụ na ndị agha mbụ merụrụ ahụ n'ọrụ nwere", "Fọm ụtụ isi", "Bọọdụ ọrụ", "Ego GI Bill"], answer: 0, why: "SBA na-eme VetCert maka nkwekọrịta gọọmentị." },
      { objective: "O3", q: "Ebee ka ị na-etinye akwụkwọ maka VetCert?", options: ["Mkparịta ụka AI ọ bụla", "Njikọ n'ozi ederede", "certifications.sba.gov", "Peeji soshal midia"], answer: 2, why: "Saịtị asambodo SBA na-anabata arịrịọ." },
      { objective: "O3", q: "Ebe kacha mma ị ga-ajụ ajụjụ gbasara akwụkwọ ikike azụmahịa na ụtụ isi bụ:", options: ["Ọ dịghị onye", "Naanị mkparịta ụka AI", "Ebe mkparịta ụka ọ bụla n'ịntanetị", "Ọfịs azụmahịa steeti gị, irs.gov ma ọ bụ onye ndụmọdụ VBOC"], answer: 3, why: "Ọfịs gọọmentị na ndị ndụmọdụ na-enye iwu dị ugbu a." },
      { objective: "O4", q: "Ezigbo ozi mmalite nwere:", options: ["Nọmba Social Security gị", "Akụkọ ndụ gị niile", "Onye ị bụ, nsogbu ahụ, otu akaebe na obere arịrịọ", "Ịmanye ka a kwụọ ụgwọ"], answer: 2, why: "Ozi dị mkpụmkpụ ma doo anya na-enweta azịza." },
      { objective: "O4", q: "Ihe AI dere kwuru na i nwere asambodo i nweghị. Ị kwesịrị:", options: ["Idebe ya", "Iwepụ ya", "Itinye abụọ ọzọ", "Ịrịọ onye ahịa ka ọ ghara ilele ya"], answer: 1, why: "Ihe ọ bụla i kwuru ga-abụrịrị eziokwu." },
      { objective: "O5", q: "Atụmatụ ọrụ (proposal) yiri akwụkwọ ndị agha dị ole?", options: ["Iwu ọrụ (operations order)", "Fọm ezumike", "Nyocha uwe", "Akwụkwọ ụgwọ ọnwa"], answer: 0, why: "Ha abụọ na-akọwa ọnọdụ, ozi ọrụ na mmejupụta." },
      { objective: "O5", q: "Oke ọrụ (scope) n'atụmatụ ọrụ pụtara:", options: ["Naanị ọnụahịa", "Ihe e ji ele anya na egbe", "Kpọmkwem ọrụ dị n'ime ya na nke na-adịghị", "Adreesị onye ahịa"], answer: 2, why: "Oke ọrụ doro anya na-egbochi esemokwu." },
      { objective: "O5", q: "Mgbe ị na-arịọ AI ka o dee atụmatụ ọrụ, nye ya:", options: ["Ndetu gị na-enweghị ozi nzuzo onye ahịa", "Ozi akaụntụ ụlọ akụ onye ahịa", "Adreesị ụlọ ndị ọrụ", "Okwuntughe"], answer: 0, why: "Wepụ ozi nzuzo onye ahịa." },
      { objective: "O6", q: "Onye ka mperi dị n'ọrụ onye ahịa AI dere dịịrị?", options: ["Onye ahịa", "Ụlọ ọrụ AI", "Ọ dịghị onye", "Gị"], answer: 3, why: "Gị na-enyefe ọrụ ahụ, ya mere ọ dịịrị gị." },
      { objective: "O6", q: "Gịnị ka ị kwesịrị ilele tupu i nyefee ọrụ AI dere?", options: ["Naanị ụdị mkpụrụ akwụkwọ", "Eziokwu, nọmba, aha na iwu", "Ọ dịghị ihe", "Naanị nsụpe"], answer: 1, why: "AI nwere ike ime mperi n'eziokwu." },
      { objective: "O6", q: "Kedu otu ị ga-esi gwa ndị ahịa maka iji AI?", options: ["Zoo ya", "Otu ahịrị doro anya n'atụmatụ ọrụ banyere otu ị si eji ya ma chebe ozi ha", "Kwuo na AI mere ihe niile", "Ekwula ya mgbe ọ bụla"], answer: 1, why: "Ikwu eziokwu na-ewu ntụkwasị obi." },
      { objective: "O6", q: "Ihe nnọchi dị ka [aha onye ahịa] na-enyere gị aka:", options: ["Inweta asambodo", "Ịnata ụgwọ ngwa ngwa", "Ịhapụ atụmatụ ọrụ", "Iji AI dee ihe n'ekesaghị ozi nzuzo"], answer: 3, why: "Ihe nnọchi na-ewepụ ezi aha na ngwa AI." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 6, 8, 11, 12, 14, 16, 19] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Nsogbu na onyinye", objective: "O2", notYet: "Nsogbu onye ahịa ma ọ bụ ihe ị ga-eme edoghị anya.", meets: "Ọ na-ekwu nsogbu onye ahịa na ihe ị ga-eme, dabara n'onyinye gị.", exceeds: "Ọ na-eji okwu onye ahịa n'onwe ya kọwaa nsogbu ahụ." },
      { name: "Oke ọrụ, ihe a ga-enyefe na oge ọrụ", objective: "O5", notYet: "Ọ dịghị oke ọrụ, ihe a ga-enyefe ma ọ bụ oge ọrụ doro anya.", meets: "Oke ọrụ doro anya (ihe dị n'ime ya na nke na-adịghị), ihe onye ahịa ga-enweta na oge ọrụ.", exceeds: "Ọ na-ekwu otu a ga-esi lekọta mgbanwe n'oke ọrụ." },
      { name: "Ọnụahịa gị", objective: "O5", notYet: "Ọ dịghị ọnụahịa, ma ọ bụ e jiri ọnụahịa AI otu o si dị.", meets: "Ọnụahịa onye na-amụ ihe n'onwe ya setịrị.", exceeds: "Onye na-amụ ihe nwere ike ịkọwa ọnụahịa ahụ site n'awa, ego ọ ga-efu na uru ya." },
      { name: "E chebere ozi onye ahịa", objective: "O6", notYet: "Ọ dịghị ahịrị gbasara iji AI, ma ọ bụ e tinyere ozi onye ahịa na AI ọha.", meets: "Ahịrị doro anya gbasara otu e si eji AI na otu e si echebe ozi onye ahịa.", exceeds: "E jiri ihe nnọchi n'ihe niile e dere site n'AI." },
      { name: "Eziokwu na nzọụkwụ ọzọ", objective: "O3", notYet: "Otu ihe e kwuru abụghị eziokwu, ma ọ bụ a kpọghị aha ọfịs ọ bụla.", meets: "Ihe ọ bụla e kwuru bụ eziokwu, e depụtakwara otu ọfịs azụmahịa gọọmentị n'efu dị ka onye a ga-akpọtụrụ ọzọ.", exceeds: "Onye na-amụ ihe nwere ajụjụ dị njikere maka ọfịs ahụ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe zitere opekata mpe ozi mmalite atọ n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe kpọtụrụ VBOC ma ọ bụ banye na Boots to Business n'ime ụbọchị 60",
      "Ndị na-amụ ihe nwetara onye ahịa ndụmọdụ mbụ na-akwụ ụgwọ n'ime ọnwa 6"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa ma ọ bụ smartphone nwere ịntanetị",
      "Ngwa enyemaka AI n'efu: ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini",
      "Weebụsaịtị sba.gov n'efu iji chọta Veterans Business Outreach Center",
      "Mmemme ide ihe (word processor) maka atụmatụ ọrụ otu peeji",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Mee ka ndị na-amụ ihe kwuo onyinye otu ahịrịokwu ha n'olu dị elu nye onye ibe ha ma mee ka ọ ka mma otu ugboro.",
      "Jiri ndị ahịa e chepụtara echepụta na klas, ma chọọ ihe nnọchi maka ozi onye ahịa ọ bụla.",
      "Atụla aro ọnụahịa; rịọ onye na-amụ ihe ọ bụla ka ọ kọwaa otu o si setịa nke ya.",
      "Kpọọ onye ndụmọdụ VBOC ma ọ bụ SBA ka ọ bịa nnọkọ ikpeazụ iji zaa ajụjụ gbasara ịmalite azụmahịa.",
      "Jiri rubric tụọ akara atụmatụ ọrụ ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
