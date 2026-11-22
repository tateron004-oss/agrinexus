"use strict";

// Koach Learn course (Igbo translation of shared/azure-fundamentals.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const CERT = { name: "Microsoft Learn: Microsoft Certified: Azure Fundamentals (asambodo)", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/" };
const STUDY = { name: "Microsoft Learn: Ntuziaka ọmụmụ maka Ule AZ-900", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900" };
const FREE = { name: "Microsoft Azure: Ọrụ ndị n'efu", url: "https://azure.microsoft.com/en-us/pricing/free-services" };
const CALC = { name: "Microsoft Azure: Pricing calculator (ngwa ịgbakọ ọnụahịa)", url: "https://azure.microsoft.com/en-us/pricing/calculator/" };

module.exports = {
  id: "azure-fundamentals-ig",
  lang: "ig",
  translationOf: "azure-fundamentals",
  category: "Undeserved Community",
  name: "Ntọala Microsoft Azure",
  skills: "Ịkọwa echiche cloud, Ịmata ọdịiche dị n'etiti IaaS, PaaS na SaaS, Ịhazi ihe Azure, Ịhọrọ ọrụ Azure dabara mkpa, Ịgbakọ na ịchịkwa ụgwọ cloud, Ịhazi atụmatụ maka ule AZ-900",
  outcome: "ịhazi obere atụmatụ Azure maka ezi mkpa obodo: ịhọrọ ọrụ ndị kwesịrị ekwesị, ịkọwa otu e si hazie ma chebe ha, ịgbakọ ụgwọ kwa ọnwa site na Azure pricing calculator, na ide ụzọ nke gị ruo asambodo Azure Fundamentals (AZ-900).",
  about: [
    "Microsoft Azure bụ otu n'ime ikpo okwu cloud kachasị ukwuu n'ụwa, nka cloud na-emeghekwa ụzọ maka ọrụ IT support, help desk na ọrụ cloud. Ihe ọmụmụ a bụ mmalite n'efu, n'okwu dị mfe, maka ndị ọhụrụ na teknụzụ, ndị na-agbanwe ọrụ na ndị obodo chọrọ asambodo mbụ a ma ama.",
    "Ị ga-amụta echiche ndị ule Microsoft Azure Fundamentals (AZ-900) na-ekpuchi: echiche cloud, ihe ndị e ji ewu Azure na isi ọrụ ya, na otu e si achịkwa Azure, chebe ya ma kwụọ ụgwọ ya. Ị chọghị akaụntụ Azure: ọrụ omume na-eji ngwa ọha n'efu nke Microsoft, dị ka pricing calculator (ngwa ịgbakọ ọnụahịa) na ule omume n'efu.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\". Nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ a. Ihe ọmụmụ a na-enyere gị aka ịkwado; ọ bụghị ezi ule ahụ, ma peeji Microsoft n'onwe ya nwere okwu ikpeazụ gbasara ule ahụ."
  ],
  finalTask: "Dee atụmatụ Azure nke otu peeji maka weebụsaịtị na nchekwa faịlụ nke obere otu obodo: kwuo ụdị ọrụ (IaaS, PaaS ma ọ bụ SaaS) na ọrụ Azure ị ga-eji, region na resource group, otu ndị mmadụ ga-esi banye n'enweghị nsogbu, otu ị ga-esi chịkwaa ụgwọ (budget, tags), na ụgwọ kwa ọnwa e mere atụmatụ ya site na Azure pricing calculator. Wee mee ule omume AZ-900 n'efu nke Microsoft ma dee mpaghara abụọ kacha adịghị ike nke ị ga-amụ ọzọ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye nọ n'obodo na-enweghị enyemaka zuru ezu bụ ndị ọhụrụ na teknụzụ ma ọ bụ na-agbanwe ọrụ, na ndị obodo chọrọ asambodo mbụ a ma ama. Ọtụtụ n'ime ha na-achọ ọrụ IT support, help desk ma ọ bụ ọrụ mbido n'ihe cloud.",
    startingPoint: "Ha nwere ike iji kọmputa na web browser, email na app kwa ụbọchị. Ha enweghị ahụmahụ ma ọ bụ nwee ntakịrị n'ihe gbasara server, netwọk ma ọ bụ ikpo okwu cloud, a tụghịkwa anya na ha nwere akaụntụ Azure.",
    gap: "Ọrụ mbido IT na cloud na-achọkarị ntọala cloud na asambodo mbụ dị ka AZ-900. Ndị na-amụ ihe kwesịrị ịmata isi echiche na okwu ndị a, na omume nke ịhazi, ichebe na ịgbakọ ọnụahịa obere atụmatụ, ka ha wee rịọ ọrụ n'obi ike ma zere ụgwọ cloud na-eju anya.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu teknụzụ na nke mbụ",
      "Ngwaọrụ: kọmputa ma ọ bụ tablet nwere web browser; o siri ike iji ekwentị maka pricing calculator",
      "Ụgwọ: ọ dịghị mkpa akaụntụ Azure ma ọ bụ kaadị ịkwụ ụgwọ; ọrụ omume na-eji ngwa ọha n'efu nke Microsoft",
      "Oge: nkuzi nkeji 5, ihe dị ka nkeji 60 n'ozuzu, gbakwunye ule omume",
      "Ozi ule na ọnụahịa na-agbanwe; ndị na-amụ ihe na-elele peeji gọọmentị Microsoft"
    ],
    prerequisites: "Ọ dịghị. \"Mmalite Cloud Computing\" bụ mmalite dị nro karịa maka ndị na-anụbeghị okwu cloud mgbe ọ bụla."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ọmụmaatụ kwa ụbọchị dị ka weebụsaịtị ụlọ nri ọha (food bank) na-arụ ọrụ nke ukwuu", action: "ịkọwa ihe cloud computing bụ ma kpọọ aha isi uru ya na ụdị cloud ya", standard: "n'okwu nke gị, nwee opekata mpe uru abụọ ziri ezi" },
    { id: "O2", condition: "Mgbe e nyere gị ọrụ cloud", action: "ikewa ya na IaaS, PaaS ma ọ bụ SaaS ma kwuo ihe onye na-enye ọrụ na onye ahịa na-echebe n'otu n'otu", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi" },
    { id: "O3", condition: "Maka obere ọrụ Azure", action: "ịhọrọ region na resource group ma kọwaa otu ha si dabara n'ime subscription", standard: "nwee ihe kpatara region ị họọrọ" },
    { id: "O4", condition: "Mgbe e nyere gị mkpa a na-ahụkarị dị ka weebụsaịtị, server zuru oke ma ọ bụ backup", action: "ijikọ mkpa ahụ na isi ọrụ Azure kwesịrị ekwesị", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi" },
    { id: "O5", condition: "Maka ndị mmadụ na ihe ndị dị n'atụmatụ gị", action: "ide otu ị ga-esi chebe ịbanye na ohere, ma mee ka iwu rụọ ọrụ site na MFA, RBAC, tags, Azure Policy ma ọ bụ resource locks", standard: "kpọọ aha opekata mpe atọ n'ime ngwa ndị a na ihe nke ọ bụla na-eme" },
    { id: "O6", condition: "Site n'iji Azure pricing calculator n'efu na Microsoft Learn", action: "ịgbakọ ụgwọ kwa ọnwa maka atụmatụ gị ma dee atụmatụ ọmụmụ AZ-900", standard: "nwee ngụkọta e mere atụmatụ ya na mpaghara ule abụọ kacha adịghị ike nke gị" }
  ],
  chapters: [
    {
      name: "Isi 1: Echiche cloud na ihe e ji ewu Azure",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe cloud bụ na ihe mere otu dị iche iche ji eji ya",
          minutes: 5,
          goal: "Kọwaa cloud computing na isi uru ya site n'ọmụmaatụ kwa ụbọchị.",
          text: [
            "Cloud computing pụtara ịgbazite ike kọmputa, nchekwa na sọftụwia site n'ịntanetị kama ịzụta na ịrụ server nke gị. Microsoft Azure, Amazon Web Services na Google Cloud bụ ndị kachasị ukwuu na-enye ọrụ cloud.",
            "Ọ dị ka ọkụ eletrik: ị naghị ewu ụlọ ọrụ ọkụ, ị na-etinye plọg ma kwụọ ụgwọ ihe i jiri. A na-akpọ nke a consumption-based ma ọ bụ pay-as-you-go (kwụọ ka i jiri). Kama ịzụta ihe buru ibu n'otu mgbe (capital expense, CapEx), ị na-akwụ ụgwọ na-aga n'ihu (operating expense, OpEx).",
            "Isi uru: scalability (tinye ike karịa mgbe peeji ndebanye aha nke food bank jupụtara, wee belata ya ọzọ), high availability (ọ na-aga n'ihu ọ bụrụ na otu igwe dara), ntụkwasị obi, ngwa nchekwa, na nchịkwa dị mfe. E nwere ụdị cloud atọ: public (onye na-enye ọrụ e kekọrịtara dị ka Azure), private (naanị otu otu na-eji ya) na hybrid (ngwakọta ha abụọ)."
          ],
          words: [["Cloud computing", "ịgbazite ike kọmputa, nchekwa na sọftụwia site n'ịntanetị."], ["Consumption-based model", "ị na-akwụ naanị ụgwọ ihe i jiri."], ["CapEx / OpEx", "capital expense bụ ịzụta ihe buru ibu n'otu mgbe; operating expense bụ ụgwọ na-aga n'ihu."], ["Scalability", "ịgbakwunye ma ọ bụ iwepụ ihe mgbe mkpa na-agbanwe."], ["High availability", "ọrụ na-aga n'ihu ọbụlagodi mgbe akụkụ ya dara."], ["Hybrid cloud", "ngwakọta public cloud na sistemụ private nke otu n'onwe ya."]],
          slides: [
            { title: "Cloud computing bụ", bullets: ["Ịgbazite kọmputa site n'ịntanetị", "Dị ka ọkụ eletrik: tinye plọg, kwụọ ka i jiri", "Azure, AWS na Google Cloud bụ atọ kachasị ukwuu"] },
            { title: "Ịkwụ ụgwọ ya", bullets: ["Consumption-based: kwụọ ihe i jiri", "CapEx: ịzụta ihe buru ibu n'otu mgbe", "OpEx: ụgwọ na-aga n'ihu"] },
            { title: "Isi uru", bullets: ["Scalability na high availability", "Ntụkwasị obi na ngwa nchekwa", "Nchịkwa dị mfe"] },
            { title: "Ụdị cloud atọ", bullets: ["Public: onye na-enye ọrụ e kekọrịtara", "Private: naanị otu otu", "Hybrid: ngwakọta ha abụọ"] }
          ],
          sources: [STUDY],
          tryIt: "Họrọ otu otu dị n'obodo gị i maara (ụka, ụlọ ọgwụ, ụlọ akwụkwọ, food bank ma ọ bụ obere ụlọ ahịa). Dee ụzọ abụọ o nwere ike isi jiri cloud na uru (scalability, availability, pay-as-you-go) nke ọ bụla na-enye ya.",
          youCanNow: "ịkọwa cloud computing, ụzọ pay-as-you-go, uru ya na ụdị cloud atọ.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ OpEx na cloud computing?", options: ["Ịzụta server buru ibu n'otu mgbe", "Ụgwọ na-aga n'ihu ị na-akwụ ka i ji ọrụ ahụ", "Ụdị virtual machine", "Nnwale n'efu na-adịghị agwụ agwụ"], answer: 1, why: "Pay-as-you-go na-eme ka ịzụta ihe buru ibu n'otu mgbe (CapEx) ghọọ ụgwọ ọrụ na-aga n'ihu (OpEx)." },
            { objective: "O1", q: "Ụlọ ọgwụ ga-edebe ụfọdụ data na server nke ya mana ọ chọrọ Azure maka weebụsaịtị ya. Kedu ụdị cloud dabara?", options: ["Naanị public", "Naanị private", "Enweghị cloud ọ bụla", "Hybrid"], answer: 3, why: "Hybrid cloud na-agwakọta server nke otu n'onwe ya na public cloud dị ka Azure." }
          ]
        },
        {
          objectives: ["O2"],
          title: "IaaS, PaaS, SaaS na onye na-ahụ maka gịnị",
          minutes: 5,
          goal: "Kewaa ọrụ na IaaS, PaaS ma ọ bụ SaaS ma kwuo onye na-ahụ maka gịnị.",
          text: [
            "Ọrụ cloud nwere ụdị atọ. IaaS (infrastructure as a service): ị na-agbazite virtual machine na netwọk ma na-achịkwa ihe fọrọ nke nta ka ọ bụrụ ihe niile dị na ha n'onwe gị, dị ka ịgbazite ụlọ efu. PaaS (platform as a service): onye na-enye ọrụ na-arụ server na sọftụwia sistemụ; ị na-ebute app ma ọ bụ data gị, dị ka ụlọ nwere ngwá ụlọ. SaaS (software as a service): ị na-eji naanị sọftụwia emechara, dị ka email Outlook ma ọ bụ Microsoft Teams, dị ka ọnụ ụlọ họtel.",
            "Serverless bụ ụdị PaaS ebe koodu gị na-arụ naanị mgbe ihe kpalitere ya, ị na-akwụkwa ụgwọ ka i jiri, n'enweghị server ọ bụla ị ga-achịkwa (Azure Functions bụ ọmụmaatụ).",
            "Shared responsibility model na-ekwu onye na-echebe gịnị. Onye na-enye ọrụ na-echebe datacenter n'onwe ya mgbe niile. Gị na-ahụ maka data gị, akaụntụ gị na onye nwere ohere mgbe niile. N'etiti, ka ị na-esi na IaaS aga na SaaS, ka onye na-enye ọrụ na-ahụ maka ihe karịa."
          ],
          steps: ["Jụọ: anyị na-achịkwa operating system? Ọ bụrụ ee, ọ bụ IaaS.", "Anyị na-ebute naanị app ma ọ bụ data anyị? Ọ bụ PaaS.", "Anyị na-abanye naanị ma jiri sọftụwia ahụ? Ọ bụ SaaS.", "Cheta: data na akaụntụ gị bụ ọrụ gị mgbe niile."],
          words: [["IaaS", "infrastructure as a service: ị na-agbazite virtual machine ma chịkwaa ha."], ["PaaS", "platform as a service: onye na-enye ọrụ na-arụ ikpo okwu ahụ; ị na-ebute app gị."], ["SaaS", "software as a service: sọftụwia dị njikere iji site n'ịntanetị."], ["Serverless", "koodu na-arụ naanị mgbe a kpalitere ya, n'enweghị server ị ga-achịkwa."], ["Shared responsibility model", "otu e si kewaa ọrụ nchekwa n'etiti onye na-enye ọrụ cloud na gị."]],
          slides: [
            { title: "Ụdị ọrụ atọ", bullets: ["IaaS: ụlọ efu, ị na-achịkwa ọtụtụ ihe", "PaaS: ụlọ nwere ngwá ụlọ, ị na-ebute app gị", "SaaS: ọnụ ụlọ họtel, naanị jiri ya"] },
            { title: "Serverless", bullets: ["Koodu na-arụ naanị mgbe a kpalitere ya", "Kwụọ ka i jiri, enweghị server ị ga-achịkwa", "Ọmụmaatụ: Azure Functions"] },
            { title: "Ọrụ nchekwa e kekọrịtara", bullets: ["Onye na-enye ọrụ: datacenter mgbe niile", "Gị: data, akaụntụ na ohere gị mgbe niile", "Site na IaaS ruo SaaS: onye na-enye ọrụ na-eme karịa"] }
          ],
          sources: [STUDY],
          tryIt: "Kewaa ndị a na IaaS, PaaS ma ọ bụ SaaS: email Microsoft Outlook, Azure virtual machine, Azure App Service maka weebụsaịtị, Microsoft Teams, Azure Functions. Wee dee otu ihe ị na-ahụ maka ya mgbe niile, n'agbanyeghị ụdị ọ bụla.",
          youCanNow: "ịmata ọdịiche dị n'etiti IaaS, PaaS na SaaS ma kọwaa shared responsibility model.",
          quickCheck: [
            { objective: "O2", q: "Kedu ụdị dị ka ịgbazite ụlọ nwere ngwá ụlọ: onye na-enye ọrụ na-arụ server, ị na-ebute app gị?", options: ["PaaS", "IaaS", "SaaS", "Private cloud"], answer: 0, why: "Na PaaS, onye na-enye ọrụ na-arụ server na sọftụwia sistemụ; ị na-ebute app ma ọ bụ data gị." },
            { objective: "O2", q: "Otu enyemaka gị (nonprofit) si na IaaS gaa na SaaS. Gịnị na-eme ọrụ nchekwa ya?", options: ["Ọ ga-eche datacenter nche ugbu a", "Ọ dịghị ihe na-agbanwe", "Onye na-enye ọrụ na-ahụ maka ihe karịa, mana data na akaụntụ gị ka bụ ọrụ gị", "Onye na-enye ọrụ na-ahụ maka okwuntughe gị"], answer: 2, why: "Ịga na SaaS na-ebunye onye na-enye ọrụ ọrụ karịa, mana data na ohere gị bụ nke gị mgbe niile." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Otu e si hazie Azure: regions, zones na resource groups",
          minutes: 6,
          goal: "Kọwaa ebe Azure na-arụ ọrụ na otu e si hazie ma chọta ihe na Azure portal.",
          text: [
            "Azure na-arụ ọrụ na datacenter gburugburu ụwa, e kekọtara ha ka ha bụrụ regions, dị ka East US ma ọ bụ South Africa North. Ị na-ahọrọ region maka ihe ọ bụla ị na-ewu: nke dị nso ndị ọrụ gị na-adịkarị ọsọ, ụfọdụ data nwekwara iwu gbasara mba ọ ga-anọ. Ọtụtụ regions nwere availability zones: datacenter dị iche iche nwere ọkụ na ihe nju oyi nke ha, nke mere na ọ bụrụ na otu dara, nke ọzọ na-aga n'ihu. A na-ejikọkwa region ọ bụla na region ọzọ n'otu mpaghara ụwa maka mgbake mgbe ọdachi mere.",
            "Ihe ọ bụla ị mepụtara (virtual machine, database, storage account) bụ resource. Resources na-abanye na resource groups, folda maka ihe ndị jikọrọ ọnụ, dị ka ihe niile maka otu weebụsaịtị. Resource groups na-anọ n'ime subscription, nke bụ akaụntụ ụgwọ. Otu ndị buru ibu na-ekekọta subscriptions site na management groups.",
            "Ị na-achịkwa ha niile na Azure portal, weebụsaịtị dị na portal.azure.com. Ị nwekwara ike iji Azure Cloud Shell, Azure CLI ma ọ bụ Azure PowerShell chịkwaa ya site n'ide iwu (commands)."
          ],
          steps: ["Họrọ region dị nso ndị ọrụ gị nke na-agbaso iwu data ọ bụla.", "Jiri availability zones mgbe ọrụ ahụ ga-anọgide na-arụ.", "Tinye resources jikọrọ ọnụ n'otu resource group.", "Mara subscription na-akwụ ụgwọ ha.", "Chịkwaa ha niile na Azure portal ma ọ bụ site na ngwa command-line."],
          words: [["Region", "mpaghara ụwa nwere otu datacenter Azure ma ọ bụ karịa."], ["Availability zone", "datacenter dị iche n'ime region nwere ọkụ, ihe nju oyi na netwọk nke ya."], ["Resource", "ihe ọ bụla ị mepụtara na Azure, dị ka virtual machine ma ọ bụ database."], ["Resource group", "folda na-ejide resources jikọrọ ọnụ."], ["Subscription", "akaụntụ a na-ana ụgwọ Azure."], ["Management group", "ụzọ isi kekọta ọtụtụ subscriptions n'okpuru otu iwu."], ["Azure portal", "weebụsaịtị maka ịchịkwa Azure."]],
          slides: [
            { title: "Ebe Azure na-arụ ọrụ", bullets: ["Datacenter e kekọtara ka ha bụrụ regions", "Họrọ region dị nso ndị ọrụ gị na iwu gị", "Availability zones: datacenter dị iche iche"] },
            { title: "Otu e si hazie ya", bullets: ["Resource: otu ihe ị mepụtara", "Resource group: resources jikọrọ ọnụ", "Subscription: ụgwọ", "Management group: ọtụtụ subscriptions"] },
            { title: "Otu ị na-esi achịkwa ya", bullets: ["Azure portal na portal.azure.com", "Cloud Shell, Azure CLI, Azure PowerShell"] }
          ],
          sources: [STUDY],
          tryIt: "Hazie nhazi maka ebe obodo (community center) chọrọ weebụsaịtị na ebe ịchekwa fọm ndebanye aha: kpọọ resource group aha, dee resources abụọ ga-abanye n'ime ya, ma họrọ region dị nso gị. Dee otu ihe kpatara i ji họrọ region ahụ.",
          youCanNow: "ịkọwa regions, availability zones, resources, resource groups, subscriptions na management groups.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ resource group na Azure?", options: ["Otu ndị ọrụ Microsoft", "Ụdị virtual machine", "Akaụntụ ụgwọ", "Folda maka resources jikọrọ ọnụ, dị ka otu weebụsaịtị"], answer: 3, why: "Resource groups na-ejide resources jikọrọ ọnụ; subscription bụ akaụntụ ụgwọ." },
            { objective: "O3", q: "Ndị ọrụ gị nọ na South Africa, data ha ga-anọkwa na mba ahụ. Kedu otu ị ga-esi họrọ region?", options: ["Họrọ region kacha dị ọnụ ala ebe ọ bụla", "Họrọ region dị nso ndị ọrụ gị nke na-agbaso iwu data", "Họrọ region n'amaghị ama", "Jiri regions niile n'otu oge"], answer: 1, why: "Họrọ region dị nso ndị ọrụ nke na-agbasokwa iwu ọ bụla gbasara ebe data ga-anọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Echiche cloud na ihe e ji ewu Azure",
        questions: [
          { objective: "O1", q: "Gịnị bụ consumption-based model?", options: ["Ị na-azụta server niile n'otu mgbe", "Ihe niile bụ n'efu mgbe niile", "Ị na-akwụ naanị ụgwọ ihe i jiri", "Ị na-akwụ otu ọnụahịa ebighị ebi"], answer: 2, why: "Ọrụ cloud na-abụkarị pay-as-you-go." },
          { objective: "O1", q: "Weebụsaịtị food bank na-ejupụta nke ukwuu otu ugboro n'ọnwa. Kedu uru cloud kacha enyere aka?", options: ["Scalability", "Private cloud", "CapEx", "SaaS"], answer: 0, why: "Scalability na-agbakwunye ihe mgbe mkpa na-arị elu ma wepụ ha mgbe e mesịrị." },
          { objective: "O2", q: "Microsoft Teams e ji site na web browser bụ ọmụmaatụ nke:", options: ["IaaS", "PaaS", "Region", "SaaS"], answer: 3, why: "Ọ bụ sọftụwia dị njikere iji, e nyere site n'ịntanetị." },
          { objective: "O2", q: "N'okpuru shared responsibility model, gịnị bụ ọrụ gị MGBE NIILE?", options: ["Iwu datacenter", "Data gị na onye nwere ohere na ya", "Ime ka server jụọ oyi", "Ịgbanwe hard drive mebiri emebi"], answer: 1, why: "Ndị ahịa na-enwe data, akaụntụ na ohere nke ha mgbe niile." },
          { objective: "O3", q: "Gịnị na-ejide resources Azure jikọrọ ọnụ, dị ka ihe niile maka otu weebụsaịtị?", options: ["Region", "Resource group", "Availability zone", "Okwuntughe"], answer: 1, why: "Resource groups na-ahazi resources jikọrọ ọnụ." }
        ]
      }
    },
    {
      name: "Isi 2: Isi ọrụ, ụgwọ na asambodo gị",
      lessons: [
        {
          objectives: ["O4"],
          title: "Isi ọrụ Azure: compute, netwọk, nchekwa na database",
          minutes: 6,
          goal: "Jikọta mkpa a na-ahụkarị na isi ọrụ Azure kwesịrị ekwesị.",
          text: [
            "Compute na-arụ mmemme gị. Azure Virtual Machines na-enye gị kọmputa zuru oke na cloud (IaaS). Azure App Service na-ebu weebụsaịtị na web app n'achịkwaghị server (PaaS). Containers na-akwakọ app na ihe niile ọ chọrọ ka ọ rụọ otu ụzọ ebe ọ bụla. Azure Functions na-arụ obere koodu mgbe a kpalitere ya (serverless). Azure Virtual Desktop na-enye ndị mmadụ desktop Windows ha nwere ike iru site na ngwaọrụ ọ bụla.",
            "Netwọk na-ejikọta ihe. Azure virtual network bụ netwọk private gị na cloud. VPN Gateway na-ejikọta ya na ọfịs gị site n'ịntanetị; ExpressRoute bụ njikọ private na-anaghị agafe n'ịntanetị ọha. Azure DNS na-atụgharị aha ka ha bụrụ adreesị.",
            "Nchekwa (storage) na-edebe faịlụ na data. Storage account na-ejide Blob storage (foto, vidiyo, backup), Azure Files (folda e kekọrịtara), queues na tables. Storage tiers (hot, cool, cold, archive) na-adị ọnụ ala ka ị na-emeghe faịlụ ahụ obere ugboro. Nhọrọ redundancy na-edebe nnomi ndị ọzọ ka ihe dara ghara ifunahụ data. Maka database, Azure nwere nhọrọ a na-elekọta dị ka Azure SQL Database na Azure Cosmos DB."
          ],
          steps: ["Ị chọrọ weebụsaịtị? Lee Azure App Service.", "Ị chọrọ ịchịkwa server zuru oke? Azure Virtual Machines.", "Ị chọrọ ka koodu rụọ mgbe ihe mere? Azure Functions.", "Ị chọrọ ịchekwa faịlụ ma ọ bụ backup? Storage account nwere Blob storage.", "Faịlụ a na-adịghị emeghe mgbe niile? Jiri tier dị jụụ, dị ọnụ ala."],
          words: [["Virtual machine (VM)", "kọmputa na-arụ ọrụ dị ka sọftụwia na cloud."], ["Azure App Service", "ọrụ PaaS maka ibu weebụsaịtị na web app."], ["Container", "ngwugwu nke app na ihe niile ọ chọrọ iji rụọ ọrụ."], ["Virtual network", "netwọk private maka resources Azure gị."], ["Blob storage", "nchekwa maka faịlụ buru ibu dị ka foto, vidiyo na backup."], ["Storage tier", "ọkwa ọnụahịa dabere n'ugboro ole ị na-emeghe data: hot, cool, cold ma ọ bụ archive."], ["Redundancy", "idebe nnomi ndị ọzọ ka data wee dịgide mgbe ihe dara."]],
          slides: [
            { title: "Compute", bullets: ["Virtual Machines: kọmputa zuru oke (IaaS)", "App Service: weebụsaịtị (PaaS)", "Functions: koodu mgbe a kpalitere ya", "Containers na Virtual Desktop"] },
            { title: "Netwọk", bullets: ["Virtual network: netwọk cloud private gị", "VPN Gateway: njikọ na ọfịs gị", "ExpressRoute: njikọ private", "Azure DNS: aha ka ọ bụrụ adreesị"] },
            { title: "Nchekwa na database", bullets: ["Storage account: Blob, Files, queues, tables", "Tiers: hot, cool, cold, archive", "Redundancy na-edebe nnomi ndị ọzọ", "Azure SQL Database, Azure Cosmos DB"] }
          ],
          sources: [STUDY],
          tryIt: "Maka ebe obodo si na Nkuzi 3, họrọ ọrụ maka mkpa ọ bụla: weebụsaịtị ọha, ebe idebe fọm ndebanye aha e nyochara (scan), na foto ochie a na-adịghị emeghe ihe fọrọ nke nta. Dee ọrụ ị họọrọ, ma maka foto ndị ahụ, storage tier ị họọrọ.",
          youCanNow: "ijikọ mkpa ndị a na-ahụkarị na ọrụ Azure maka compute, netwọk, nchekwa na database.",
          quickCheck: [
            { objective: "O4", q: "Kedu ọrụ Azure na-arụ obere koodu naanị mgbe ihe kpalitere ya?", options: ["Azure Virtual Machines", "Azure DNS", "Azure Functions", "ExpressRoute"], answer: 2, why: "Azure Functions bụ serverless: koodu na-arụ mgbe a kpalitere ya, ị na-akwụkwa ụgwọ ka i jiri." },
            { objective: "O4", q: "Ebe ntorobịa (youth center) chọrọ folda e kekọrịtara nke ndị ọrụ ya niile nwere ike imeghe. Gịnị ka ị ga-atụ aro?", options: ["Azure Files n'ime storage account", "Azure Virtual Desktop", "VPN Gateway", "Azure SQL Database"], answer: 0, why: "Azure Files n'ime storage account na-enye folda e kekọrịtara." }
          ]
        },
        {
          objectives: ["O5","O6"],
          title: "Nchekwa, nchịkwa iwu na ịchịkwa ụgwọ",
          minutes: 6,
          goal: "Kpọọ aha ngwa Azure na-echebe akaụntụ, na-eme ka iwu rụọ ọrụ ma na-egbochi ụgwọ na-eju anya.",
          text: [
            "Njirimara: Microsoft Entra ID bụ ọrụ ịbanye na ndekọ aha nke Azure. Gbanye multifactor authentication (MFA), nke na-arịọ ihe akaebe nke abụọ dị ka koodu n'ime app, ka okwuntughe e zuru ezu ghara izu. Single sign-on (SSO) na-ekwe ka ndị mmadụ jiri otu akaụntụ maka ọtụtụ app. Role-based access control (RBAC) na-enye onye ọ bụla naanị ohere ọrụ ya chọrọ. Zero Trust pụtara ịghara iche na arịrịọ ọ bụla dị mma; na-elele mgbe niile.",
            "Nchịkwa iwu (governance): Azure Policy na-etọ iwu, dị ka \"mepụta resources naanị na regions ndị a\". Resource locks na-egbochi ka e hichapụ ma ọ bụ gbanwee resources dị mkpa na mberede. Tags bụ akara dị ka department=youth ma ọ bụ project=website na-enyere gị aka ịhazi na isochi ụgwọ. Microsoft Defender for Cloud na-elele nhazi gị maka nsogbu nchekwa.",
            "Ụgwọ: ihe ị na-akwụ dabere n'ọrụ ahụ, nha ya, region, ogologo oge ọ na-arụ na data ole na-apụ na Azure. Azure pricing calculator n'efu na-egosi ụgwọ kwa ọnwa tupu i wuo ihe ọ bụla. Cost Management na-ekwe ka ị tọọ budget na ịdọ aka na ntị. Iwu dị mfe: hichapụ ihe ị naghị eji."
          ],
          steps: ["Gbanye MFA maka akaụntụ ọ bụla.", "Nye ndị mmadụ naanị ohere ọrụ ha chọrọ (RBAC).", "Tinye tags na resource ọ bụla.", "Jiri Azure Policy na resource locks maka iwu dị mkpa.", "Buru ụzọ gbakọọ ụgwọ na pricing calculator, wee tọọ ịdọ aka na ntị budget."],
          words: [["Microsoft Entra ID", "ọrụ ịbanye na ndekọ aha nke Microsoft na cloud."], ["Multifactor authentication (MFA)", "ịbanye site n'okwuntughe gbakwunyere ihe akaebe nke abụọ."], ["RBAC", "role-based access control: ohere dabere n'ọrụ mmadụ."], ["Zero Trust", "ụzọ nchekwa: atụkwasịla obi n'echeghị echiche, na-elele mgbe niile."], ["Azure Policy", "ngwa na-eme ka iwu rụọ ọrụ gbasara ihe e nwere ike ịmepụta."], ["Resource lock", "na-egbochi ka e hichapụ ma ọ bụ gbanwee resource na mperi."], ["Tag", "akara na resource e ji ahazi ya ma soro ụgwọ."]],
          slides: [
            { title: "Njirimara na ohere", bullets: ["Microsoft Entra ID maka ịbanye", "MFA: ihe akaebe nke abụọ", "RBAC: naanị ohere ọrụ chọrọ", "Zero Trust: na-elele mgbe niile"] },
            { title: "Nchịkwa iwu", bullets: ["Azure Policy: mee ka iwu rụọ ọrụ", "Resource locks: gbochie ihe mberede", "Tags: hazie ma soro ụgwọ", "Defender for Cloud: chọta ebe adịghị ike"] },
            { title: "Chịkwaa ụgwọ", bullets: ["Ụgwọ dabere n'ọrụ, nha, region na oge", "Pricing calculator: buru ụzọ gbakọọ", "Budget na ịdọ aka na ntị na Cost Management", "Hichapụ ihe ị naghị eji"] }
          ],
          sources: [STUDY, CALC],
          tryIt: "Dee iwu nchekwa na ụgwọ atọ maka nhazi Azure nke ebe obodo ahụ, otu maka ịbanye, otu maka ohere na otu maka imefu ego. Ọmụmaatụ: \"Akaụntụ onye ọrụ afọ ofufo ọ bụla na-eji MFA.\" Wee dee tags abụọ ị ga-etinye na resource ọ bụla.",
          youCanNow: "ịkọwa otu Azure si echebe akaụntụ, na-eme ka iwu rụọ ọrụ ma na-ejide ụgwọ n'aka.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka Zero Trust pụtara?", options: ["Tụkwasị obi n'arịrịọ ọ bụla si n'ime ọfịs", "Na-elele mgbe niile; echela na arịrịọ ọ bụla dị mma", "Gbanyụọ okwuntughe", "Tụkwasị naanị onye na-enye ọrụ cloud obi"], answer: 1, why: "Zero Trust pụtara na a na-elele arịrịọ ọ bụla kama iche na ọ dị mma." },
            { objective: "O5", q: "E zuru okwuntughe onye ọrụ afọ ofufo, mana onye ohi ahụ enweghị ike ịbanye. Kedu ntọala nwere ike igbochi ya?", options: ["Tag na resource", "Storage tier dị jụụ", "Resource group", "Multifactor authentication (MFA)"], answer: 3, why: "MFA na-arịọ ihe akaebe nke abụọ, ya mere naanị okwuntughe e zuru ezu ezughị." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịgbakọ ụgwọ na ịhazi ụzọ AZ-900 gị",
          minutes: 6,
          goal: "Gbakọọ ụgwọ kwa ọnwa na pricing calculator ma mee atụmatụ ọmụmụ maka AZ-900.",
          text: [
            "Pricing calculator dị n'efu na weebụsaịtị Microsoft. Ị na-etinye ọrụ ndị ị chọrọ iji, họrọ region na nhọrọ dị ka nha na awa, ọ na-egosikwa ụgwọ kwa ọnwa e mere atụmatụ ya. Ọnụahịa na-agbanwe ma dabere na region, ya mere jiri calculator mgbe niile kama nọmba ị gụrụ n'ebe ọzọ.",
            "Ọ bụrụ na ị chọrọ ime omume n'ime Azure n'onwe ya, Microsoft na-enye akaụntụ n'efu nwere ụfọdụ ọrụ n'efu ruo ọnwa 12 na ihe karịrị ọrụ 65 n'efu kwa ọnwa ruo ọnụ ọgụgụ a kara aka, maka ndị ahịa ọhụrụ. Gụọ usoro dị ugbu a na peeji ọrụ n'efu nke Microsoft tupu i debanye aha, tọọ ịdọ aka na ntị budget, ma hichapụ resources omume mgbe i mechara. Ụmụ akwụkwọ nwere ike iru eru maka onyinye Azure for Students dị iche site na email ụlọ akwụkwọ.",
            "Ule maka asambodo Microsoft Certified: Azure Fundamentals bụ AZ-900. Ntuziaka ọmụmụ Microsoft depụtara mpaghara atọ: echiche cloud (25-30%), Azure architecture na ọrụ ya (35-40%), na nchịkwa Azure na governance (30-35%). Ị chọrọ akara 700 ma ọ bụ karịa iji gafee. Peeji ule ahụ depụtara nkeji 45 maka nyocha ahụ, ọnụahịa ya dabekwara na mba ebe ị na-ede ya, ya mere lelee ya ebe ahụ. Microsoft Learn nwere ọzụzụ n'efu na ule omume n'efu."
          ],
          steps: ["Meghee Azure pricing calculator.", "Tinye ọrụ ndị dị n'atụmatụ gị, họrọ region na nha gị.", "Dee ngụkọta kwa ọnwa e mere atụmatụ ya.", "Meghee peeji AZ-900 na Microsoft Learn ma mee ule omume n'efu.", "Dee mpaghara abụọ kacha adịghị ike nke gị na modul Microsoft Learn n'efu maka ha."],
          words: [["Pricing calculator", "ngwa n'efu nke Microsoft maka ịgbakọ ụgwọ Azure tupu i wuo ihe."], ["AZ-900", "koodu ule maka Microsoft Certified: Azure Fundamentals."], ["Practice assessment", "ajụjụ omume n'efu na Microsoft Learn na-egosi ma ị dị njikere."], ["Microsoft Learn", "weebụsaịtị ọzụzụ na asambodo n'efu nke Microsoft."]],
          slides: [
            { title: "Gbakọọ tupu i wuo", bullets: ["Azure pricing calculator n'efu", "Tinye ọrụ, region na nha", "Ọnụahịa na-agbanwe: na-elele ọzọ mgbe niile"] },
            { title: "Ime omume n'enweghị nsogbu", bullets: ["Buru ụzọ gụọ usoro akaụntụ n'efu", "Tọọ ịdọ aka na ntị budget", "Hichapụ resources omume mgbe i mechara"] },
            { title: "Ule AZ-900", bullets: ["Echiche cloud: 25-30%", "Architecture na ọrụ: 35-40%", "Nchịkwa na governance: 30-35%", "Akara ngafe: 700; ọnụahịa dị iche site na mba"] },
            { title: "Nzọụkwụ gị ọzọ", bullets: ["Ule omume n'efu na Microsoft Learn", "Mụọ mpaghara abụọ kacha adịghị ike nke gị"] }
          ],
          sources: [CALC, FREE, CERT, STUDY],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ Azure nke otu peeji maka weebụsaịtị na nchekwa faịlụ nke otu obodo (ọrụ na ụdị ha, region, resource group, ịbanye n'enweghị nsogbu, tags na budget), tinye ụgwọ kwa ọnwa si na pricing calculator, wee mee ule omume AZ-900 n'efu ma dee mpaghara abụọ kacha adịghị ike nke gị.",
          youCanNow: "ịhazi ma gbakọọ ọnụahịa obere nhazi Azure ma soro ụzọ doro anya ruo asambodo AZ-900.",
          quickCheck: [
            { objective: "O6", q: "Gịnị mere ị ga-eji jiri Azure pricing calculator kama ọnụahịa ị gụrụ n'ịntanetị?", options: ["Ọnụahịa na-agbanwe ma dabere na region, ya mere calculator na-enye atụmatụ dị ugbu a", "Calculator na-eme ka Azure bụrụ n'efu", "Ọnụahịa n'ịntanetị na-adị elu mgbe niile", "Calculator na-edebanye aha gị n'onwe ya"], answer: 0, why: "Ọnụahịa na-agbanwe ma dị iche site na region, ya mere jiri calculator gbakọọ maka nhọrọ nke gị." },
            { objective: "O6", q: "I mere ule omume AZ-900 n'efu. Gịnị bụ nzọụkwụ kacha mma ọzọ?", options: ["Debanye aha maka ule taa n'amụghị ihe", "Megharịa ya ruo mgbe i buru azịza n'isi", "Dee mpaghara abụọ kacha adịghị ike nke gị ma chọta modul Microsoft Learn n'efu maka ha", "Kwụsị, n'ihi na akara omume adịghị mkpa"], answer: 2, why: "Mpaghara gị kacha adịghị ike na-egosi ebe ị ga-amụ ọzọ, Microsoft Learn nwekwara modul n'efu maka nke ọ bụla." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Isi ọrụ, ụgwọ na asambodo gị",
        questions: [
          { objective: "O4", q: "Kedu ọrụ Azure na-ebu weebụsaịtị n'enweghị server ị ga-achịkwa?", options: ["Azure Virtual Machines", "ExpressRoute", "Resource locks", "Azure App Service"], answer: 3, why: "App Service bụ PaaS maka ibu weebụsaịtị." },
          { objective: "O4", q: "A naghị emeghe foto ochie ihe fọrọ nke nta. Kedu nhọrọ nchekwa na-echekwa ego?", options: ["Tier dị jụụ dị ka cool, cold ma ọ bụ archive", "Hot tier", "Virtual machine ka ukwuu", "Subscription nke abụọ"], answer: 0, why: "Tiers dị jụụ na-adị ọnụ ala maka data ị na-adịghị emeghe mgbe niile." },
          { objective: "O5", q: "Kedu ngwa na-egbochi ka e hichapụ resource dị mkpa na mperi?", options: ["Tag", "Pricing calculator", "Resource lock", "Region"], answer: 2, why: "Locks na-egbochi ihichapụ ma ọ bụ mgbanwe na mberede." },
          { objective: "O5", q: "Gịnị ka MFA na-agbakwunye n'ịbanye?", options: ["Aha njirimara ka ogologo", "Subscription n'efu", "Region ọhụrụ", "Ihe akaebe nke abụọ, dị ka koodu n'ime app"], answer: 3, why: "MFA pụtara na naanị okwuntughe e zuru ezu ezughị." },
          { objective: "O6", q: "Ebee ka ị ga-enweta ọnụahịa ule AZ-900 dị ugbu a?", options: ["Ịkọ nkọ enyi gị", "Blog post ochie", "Peeji ule gọọmentị Microsoft maka mba gị", "Chatbot AI ọ bụla"], answer: 2, why: "Ọnụahịa dabere na mba, peeji gọọmentị ahụ na-adịkwa ọhụrụ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ntọala Microsoft Azure",
    questions: [
      { objective: "O1", q: "Cloud computing pụtara:", options: ["Ịchekwa faịlụ naanị na USB stick", "Ịgbazite ike kọmputa na ọrụ site n'ịntanetị", "Amụma ihu igwe", "Ịzụta laptọọpụ ọhụrụ"], answer: 1, why: "Cloud pụtara iji kọmputa onye na-enye ọrụ site n'ịntanetị." },
      { objective: "O1", q: "Ịkwụ nnukwu ego n'otu mgbe iji zụta server bụ:", options: ["CapEx", "OpEx", "SaaS", "Serverless"], answer: 0, why: "Capital expense bụ ịzụta ihe n'otu mgbe na mbụ." },
      { objective: "O1", q: "Ọrụ na-aga n'ihu ọbụlagodi mgbe otu igwe dara. Nke a bụ:", options: ["Tag", "Management group", "High availability", "CapEx"], answer: 2, why: "High availability na-eme ka ọrụ nọgide na-arụ n'agbanyeghị ihe dara." },
      { objective: "O1", q: "Otu na-eji server nke ya na Azure ọnụ. Nke ahụ bụ:", options: ["Hybrid cloud", "Naanị private cloud", "Naanị public cloud", "SaaS"], answer: 0, why: "Hybrid na-agwakọta private na public." },
      { objective: "O2", q: "Ị gbaziri virtual machine ma na-achịkwa operating system ya. Nke ahụ bụ:", options: ["SaaS", "PaaS", "Region", "IaaS"], answer: 3, why: "Ịchịkwa OS na igwe ị gbaziri bụ IaaS." },
      { objective: "O2", q: "Koodu na-arụ naanị mgbe a kpalitere ya, n'enweghị server ị ga-achịkwa, ka a na-akpọ:", options: ["Resource lock", "Serverless", "Archive storage", "VPN"], answer: 1, why: "Serverless na-arụ mgbe a chọrọ ya; Azure Functions bụ ọmụmaatụ." },
      { objective: "O2", q: "Onye na-echebe datacenter n'onwe ya mgbe niile?", options: ["Onye ahịa", "Onye na-enye ọrụ cloud", "Ụlọ akụ onye ọrụ", "Ọ dịghị onye"], answer: 1, why: "Nchekwa n'anụ ahụ bụ ọrụ onye na-enye ọrụ mgbe niile." },
      { objective: "O3", q: "Azure region bụ:", options: ["Akaụntụ ụgwọ", "Ụdị database", "Iwu okwuntughe", "Mpaghara ụwa nwere otu datacenter ma ọ bụ karịa"], answer: 3, why: "Regions bụ ebe datacenter Azure dị." },
      { objective: "O3", q: "Availability zones bụ:", options: ["Datacenter dị iche iche n'ime region nwere ọkụ na ihe nju oyi nke ha", "Ọkwa ọnụahịa maka nchekwa", "Otu ndị ọrụ", "Mba dị iche iche"], answer: 0, why: "Zones na-echebe megide otu datacenter ịda." },
      { objective: "O3", q: "Kedu akaụntụ ụgwọ na-ejide resource groups?", options: ["Tag", "Container", "Subscription", "Region"], answer: 2, why: "A na-ana subscriptions ụgwọ, ha na-ejidekwa resource groups." },
      { objective: "O3", q: "Ebee ka ị na-achịkwa Azure na web browser?", options: ["Ụlọ ahịa app", "Storage tier", "ExpressRoute", "Azure portal"], answer: 3, why: "Azure portal bụ weebụsaịtị nchịkwa." },
      { objective: "O4", q: "Kedu ọrụ na-enye gị kọmputa zuru oke na cloud?", options: ["Azure DNS", "Azure Policy", "Azure Virtual Machines", "Tags"], answer: 2, why: "Virtual Machines bụ compute IaaS." },
      { objective: "O4", q: "Kedu njikọ private na Azure na-anaghị eji ịntanetị ọha?", options: ["VPN Gateway", "ExpressRoute", "Azure DNS", "Blob storage"], answer: 1, why: "ExpressRoute bụ njikọ private." },
      { objective: "O4", q: "Ebee ka ị ga-echekwa backup na vidiyo?", options: ["Blob storage n'ime storage account", "Azure Policy", "Management group", "Microsoft Entra ID"], answer: 0, why: "Blob storage na-ejide faịlụ buru ibu." },
      { objective: "O5", q: "Kedu ọrụ ịbanye na ndekọ aha nke Azure?", options: ["Azure Advisor", "Azure Functions", "Microsoft Entra ID", "Archive tier"], answer: 2, why: "Entra ID na-achịkwa njirimara na ịbanye." },
      { objective: "O5", q: "Onye ọrụ afọ ofufo chọrọ naanị ịgụ akụkọ. Kedu echiche na-ejedebe ya na nke ahụ?", options: ["Role-based access control (RBAC)", "Hybrid cloud", "Scalability", "Archive storage"], answer: 0, why: "RBAC na-enye naanị ohere ọrụ ahụ chọrọ." },
      { objective: "O5", q: "Ị chọrọ igbochi onye ọ bụla ịmepụta resources na mpụga region gị. Kedu ngwa?", options: ["Tags", "Pricing calculator", "Container", "Azure Policy"], answer: 3, why: "Azure Policy na-eme ka iwu dị ka regions a kwadoro rụọ ọrụ." },
      { objective: "O5", q: "Akara dị ka project=website na resources ka a na-akpọ:", options: ["Locks", "Tags", "Zones", "Tiers"], answer: 1, why: "Tags na-ahazi resources ma na-enyere aka isochi ụgwọ." },
      { objective: "O6", q: "Tupu i wuo ihe ọ bụla, kedu otu ị ga-esi gbakọọ ụgwọ kwa ọnwa?", options: ["Kọọ nkọ", "Jiri Azure pricing calculator", "Chere ụgwọ mbụ", "Jụọ onye ọbịa n'ịntanetị"], answer: 1, why: "Calculator na-agbakọ ụgwọ tupu i wuo ihe." },
      { objective: "O6", q: "Kedu akara ị chọrọ iji gafee AZ-900, dị ka ntuziaka ọmụmụ Microsoft si kwuo?", options: ["500", "600", "700 ma ọ bụ karịa", "900 ma ọ bụ karịa"], answer: 2, why: "Ntuziaka ọmụmụ Microsoft kwuru na a chọrọ akara 700 ma ọ bụ karịa." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      3,
      4,
      6,
      7,
      9,
      11,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Ụdị ọrụ na ọrụ ndị ahụ",
        objective: "O4",
        notYet: "Atụmatụ ahụ akpọghị aha ọrụ Azure ọ bụla, ma ọ bụ ha adabaghị maka weebụsaịtị na nchekwa faịlụ.",
        meets: "Na-akpọ aha ụdị ọrụ (IaaS, PaaS ma ọ bụ SaaS) na ọrụ ndị dabara, dị ka App Service na storage account.",
        exceeds: "Na-ekwu ihe mere ọrụ ọ bụla ji dabara karịa nhọrọ ọzọ."
      },
      {
        name: "Region na nhazi",
        objective: "O3",
        notYet: "Ọ dịghị region ma ọ bụ resource group a kpọrọ aha.",
        meets: "Na-akpọ aha region nwere ihe kpatara ya ma tinye resources n'otu resource group.",
        exceeds: "Na-akpọkwa aha subscription na-akwụ ụgwọ na ma a chọrọ availability zones."
      },
      {
        name: "Ịbanye n'enweghị nsogbu na iwu",
        objective: "O5",
        notYet: "Ọ naghị ekwu otu ndị mmadụ si abanye ma ọ bụ onye nwere ike ime gịnị.",
        meets: "Na-eji MFA ma na-enye onye ọ bụla naanị ohere ọ chọrọ (RBAC).",
        exceeds: "Na-agbakwunyekwa tags, policy ma ọ bụ resource lock ma kwuo ihe nke ọ bụla na-echebe."
      },
      {
        name: "Atụmatụ ụgwọ",
        objective: "O6",
        notYet: "Enweghị atụmatụ, ma ọ bụ nọmba e wereghị na pricing calculator.",
        meets: "Na-enye ngụkọta kwa ọnwa e mere atụmatụ ya site na pricing calculator na ịdọ aka na ntị budget.",
        exceeds: "Na-akpọ aha otu mgbanwe ga-ebelata ụgwọ, dị ka storage tier dị jụụ."
      },
      {
        name: "Atụmatụ ọmụmụ",
        objective: "O6",
        notYet: "E meghị ule omume ahụ.",
        meets: "Mere ule omume n'efu ma depụta mpaghara abụọ kacha adịghị ike.",
        exceeds: "Jikọrọ mpaghara ọ bụla na-adịghị ike na modul Microsoft Learn n'efu na ụbọchị a ga-amụ ya."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe dere ezi ule AZ-900 n'ime ụbọchị 90, na ole n'ime ha gafere",
      "Ndị na-amụ ihe rịọrọ ma ọ bụ malitere ọrụ IT support, help desk ma ọ bụ cloud, ma ọ bụ internship",
      "Otu obodo ndị jiri atụmatụ onye na-amụ ihe bufee weebụsaịtị ma ọ bụ faịlụ na cloud"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa ma ọ bụ tablet nwere web browser na ịntanetị",
      "Azure pricing calculator n'efu nke Microsoft na akaụntụ Microsoft Learn n'efu maka ule omume",
      "Ụkpụrụ atụmatụ otu peeji ma ọ bụ akwụkwọ na mkpịsị ode",
      "Ihe dị ka nkeji 60 maka nkuzi, nnwale na atụmatụ ahụ, gbakwunye ihe dị ka nkeji 45 maka ule omume"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee mee otu isi n'otu nnọkọ; rụọ ọrụ na pricing calculator n'ihuenyo onye ọ bụla na-ahụ.",
      "Ọ dịghị mkpa akaụntụ Azure. Ọ bụrụ na ndị na-amụ ihe kpebiri imeghe akaụntụ n'efu, mee ka ha gụọ usoro dị ugbu a, tọọ ịdọ aka na ntị budget ma hichapụ resources omume mgbe ha mechara.",
      "Jiri ezi otu dị n'obodo, dị ka food bank ma ọ bụ ebe ntorobịa, dị ka ọmụmaatụ maka atụmatụ otu peeji ahụ.",
      "Chetara ndị na-amụ ihe na ozi ule na ọnụahịa na-agbanwe; zipu ha na peeji ule gọọmentị Microsoft maka mba ha.",
      "Jiri rubric tụọ akara atụmatụ ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
