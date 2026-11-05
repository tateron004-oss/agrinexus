"use strict";

// Koach Learn course, Hausa (ha) translation of small-business/smallbiz-government-contracts.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "smallbiz-government-contracts-ha",
  lang: "ha",
  translationOf: "smallbiz-government-contracts",
  category: "Small Business",
  name: "Samun Kwangilolin Gwamnati",
  skills: "Yin rajista a SAM.gov, Zaɓar lambobin NAICS, Amfani da takardun shaidar SBA da na California, Nemo damar kwangila, Karanta takardar neman tayi, Rubuta takardar bayanin iyawa",
  outcome: "yi wa kasuwancinku rajista don sayar wa gwamnati, zaɓar lambobin NAICS ɗinku, nemo damar kwangila da suka dace da ku, karanta takardar neman tayi (solicitation) don yanke shawarar ko za ku yi tayi, da rubuta takardar bayanin iyawa (capability statement) mai shafi ɗaya.",
  about: [
    "Gwamnatin tarayya, ta jiha da ta ƙananan hukumomi suna sayen kusan komai: tsaftacewa, abinci, gine-gine, kula da lambu, bugu, IT, horo, jigilar kaya da sauransu. An ware wani kaso na wannan saye don ƙananan kasuwanci, wani kuma don ƙananan kasuwancin mata, na tsofaffin sojoji da sauran ƙananan kasuwanci masu takardar shaida.",
    "Wannan kwas ɗin yana bi da ku ta matakai bisa tsari: yin rajista a SAM.gov da samun Unique Entity ID (UEI), zaɓar lambobin NAICS, fahimtar takardun shaidar SBA da na California na Small Business da DVBE, nemo damarmaki, karanta takardar neman tayi, da rubuta takardar bayanin iyawa da za ku iya aika wa masu saye.",
    "Dokoki, iyakoki da shafukan intanet suna canjawa. Kowane darasi yana nuna shafin hukuma da za ku duba. Akwai taimako kyauta daga APEX Accelerators, ofisoshin SBA na yanki da Small Business Development Centers (cibiyoyin bunƙasa ƙananan kasuwanci); ba sai kun biya kowa don yin rajista ba.",
    "Kowane darasi yana ɗaukar kusan minti biyar, kuma yana ƙarewa da aikin da za ku yi nan take. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku rubuta takardar bayanin iyawa mai shafi ɗaya don kasuwancinku mai sassa huɗu: ƙwarewar asali, ayyukan da kuka yi a baya, abin da ya bambanta ku, da bayanan kamfani (sunan doka, UEI, lambobin NAICS, takardun shaida, hanyoyin tuntuɓa). Sannan ku nemo dama ɗaya ta gaske a SAM.gov ko Cal eProcure da ta dace da lambar NAICS da ke kan takardarku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu ƙananan kasuwanci, da yawa daga cikinsu 'yan tsiraru, mata da tsofaffin sojoji a California, waɗanda ke sayar da hidimomi ko kayayyaki kamar tsaftacewa, abinci, gine-gine, kula da lambu, bugu, IT, horo ko jigilar kaya, kuma suke son sayar wa gwamnatin tarayya, ta jiha da ta ƙananan hukumomi.",
    startingPoint: "Suna gudanar da kasuwanci mai aiki da abokan ciniki, kuma sun san hidimominsu sosai. Yawancinsu ba su taɓa yin rajista a SAM.gov ba, ko neman lambar NAICS, ko karanta takardar neman tayi ta gwamnati ba.",
    gap: "Masu saye na gwamnati suna kashe kuɗi mai yawa a ƙananan kasuwanci da masu takardar shaida, amma matakan rajista, lambobi da dogayen takardun neman tayi suna hana masu kasuwanci da yawa shiga, kuma kamfanonin zamba suna karɓar kuɗi kan rajistar da ke kyauta. Masu koyo suna buƙatar yin rajista da kansu kyauta, nemo tayin da suka dace, yanke shawarar lokacin yin tayi, da gabatar da kasuwancinsu da takardar bayanin iyawa.",
    constraints: [
      "Dokoki, ma'aunin girma da iyakokin takardun shaida suna canjawa; masu koyo suna duba SAM.gov, SBA da California Department of General Services (DGS)",
      "Sirri: bayanan banki da EIN suna shiga SAM.gov kaɗai, ba a cikin kayan AI ko imel ba",
      "Haɗarin zamba: tayin da ke kama da na hukuma don yin rajista ko sabuntawa da kuɗi",
      "Lokaci: kusan minti 60 gaba ɗaya, da ƙarin lokaci don rajistar ta gaske",
      "Kalmomi masu sauƙi don masu kasuwanci da sabbin shiga cikin sayen gwamnati"
    ],
    prerequisites: "Kasuwanci mai rajista da sunan doka, adireshi da EIN ko lambar haraji."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da sunan doka na kasuwancinku, adireshi, EIN da bayanan banki", action: "yi wa kasuwancinku rajista a SAM.gov da kanku kuma ku sami UEI", standard: "kyauta, kuna sabuntawa duk bayan kwanaki 365, kuma kuna watsi da tayin rajista na kuɗi" },
    { id: "O2", condition: "Ta amfani da shafin NAICS na Census da Size Standards Tool na SBA", action: "zaɓar babbar lambar NAICS da duba ko kasuwancinku ƙarami ne a ƙarƙashinta", standard: "lambar ta dace da babbar hidimarku" },
    { id: "O3", condition: "Idan kuna da ainihin dokokin takardun shaidar SBA da na California", action: "gane takardun shaidar da kasuwancinku zai iya cancanta da inda za a nema", standard: "kuna ambaton shafin da ya dace na kowanne" },
    { id: "O4", condition: "Ta amfani da SAM.gov da Cal eProcure", action: "nemo damarmaki da suka dace da lambobin NAICS ɗinku da ajiye binciken", standard: "ta yadda sababbin damarmaki masu dacewa za su zo imel ɗinku" },
    { id: "O5", condition: "Idan an ba ku takardar neman tayi", action: "nemo bayanin aikin, umarni, ma'aunin zaɓe da ranar ƙarshe, da yanke shawarar ko za ku yi tayi", standard: "kuna amsa kowace tambayar yin tayi ko a'a" },
    { id: "O6", condition: "Don masu saye na gwamnati da manyan 'yan kwangila", action: "rubuta takardar bayanin iyawa mai shafi ɗaya mai ƙwarewar asali, ayyukan baya, abubuwan da suka bambanta ku da bayanan kamfani", standard: "ba tare da lambobin sirri kamar bayanan banki ko EIN ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Shiryawa don sayar wa gwamnati",
      lessons: [
        {
          objectives: ["O1"],
          title: "Yin rajista a SAM.gov da samun UEI",
          minutes: 6,
          goal: "Tattara abin da kuke buƙata ku yi wa kasuwancinku rajista a SAM.gov da kanku, kyauta.",
          text: [
            "SAM.gov (System for Award Management) shi ne shafin hukuma na gwamnatin Amurka don yin kasuwanci da hukumomin tarayya. Don yin tayi da samun kwangilolin tarayya, dole kasuwancinku ya yi rajista a can. Rajistar tana ba ku Unique Entity ID (UEI), lamba mai haruffa da lambobi 12 da ke gane kasuwancinku.",
            "Kuna iya neman UEI kaɗai ba tare da cikakkiyar rajista ba, amma da UEI kaɗai ba za ku iya neman kyaututtukan tarayya (awards) kai tsaye ba. Don kwangiloli, ku kammala cikakkiyar rajista. Dole ku sabunta ta duk bayan kwanaki 365 don ta ci gaba da aiki.",
            "Yin rajista a SAM.gov kyauta ne. Wasu kamfanoni suna aika imel ko wasiƙu masu kama da na hukuma suna tayin yi muku rajista ko sabuntawa da kuɗi, ko suna gargaɗin cewa rajistarku na gab da ƙarewa. Ba sai kun biya su ba. Ku yi rajista a sam.gov kaɗai, kuma ku sami taimako kyauta daga APEX Accelerator idan kun tsaya.",
            "Kafin ku fara, ku tattara sunan doka na kasuwancinku da adireshin wurin daidai yadda IRS (hukumar haraji ta Amurka) ke da su, Employer Identification Number (EIN) ko lambar haraji, da bayanan banki don karɓar biya. Ku rubuta waɗannan a SAM.gov kaɗai, ba a cikin kayan AI ko imel ba."
          ],
          steps: ["Ku tattara sunan doka na kasuwancinku, adireshin wurin, EIN da bayanan banki.", "Ku je sam.gov ku ƙirƙiri asusun shiga.", "Ku zaɓi yi wa kasuwancinku rajista (register your entity), ba samun UEI kaɗai ba.", "Ku amsa kowane sashe; sunan kasuwanci da adireshi dole su yi daidai da bayanan IRS.", "Ku rubuta UEI ɗinku da ranar da rajistarku za ta ƙare.", "Ku saka tunatarwa don sabuntawa kafin kwanaki 365."],
          words: [["SAM.gov", "System for Award Management, shafin tarayya inda kasuwanci ke yin rajista don sayar wa gwamnati."], ["UEI", "Unique Entity ID: lamba mai haruffa 12 da ke gane kasuwancinku ga gwamnati."], ["EIN", "Employer Identification Number: lambar harajin kasuwancinku daga IRS."], ["APEX Accelerator", "cibiyar shawara kyauta da ke taimakon kasuwanci su sayar wa gwamnati."]],
          slides: [
            { title: "SAM.gov ita ce ƙofar shiga", bullets: ["Ku yi rajista don yin tayi kan kwangilolin tarayya", "Kuna samun Unique Entity ID mai haruffa 12", "Ku sabunta duk bayan kwanaki 365"] },
            { title: "UEI kaɗai da cikakkiyar rajista", bullets: ["UEI kaɗai: ba za ku iya neman kyaututtukan tarayya ba", "Cikakkiyar rajista: ana buƙatarta don kwangiloli"] },
            { title: "Kyauta ce", bullets: ["Ku yi watsi da tayin kuɗi don yi muku rajista ko sabuntawa", "Ku yi rajista a sam.gov kaɗai", "Taimako kyauta: APEX Accelerators"] },
            { title: "Ku shirya", bullets: ["Sunan doka da adireshi da suka yi daidai da na IRS", "EIN ko lambar haraji da bayanan banki", "Ku rubuta su a SAM.gov kaɗai"] }
          ],
          sources: [
            { name: "SAM.gov: Rajistar kasuwanci (entity registration)", url: "https://sam.gov/content/entity-registration" },
            { name: "SBA: Ainihin buƙatun kwangilolin gwamnati", url: "https://www.sba.gov/federal-contracting/contracting-guide/basic-requirements" }
          ],
          tryIt: "Ku yi jerin abubuwan rajistar SAM.gov don kasuwancinku: sunan doka, adireshin wurin, EIN, bayanan banki, mutumin tuntuɓa. Ku yi alama kan waɗanda kuke da su. Idan kun riga kun yi rajista, ku duba ranar ƙarewarta ku saka tunatarwar sabuntawa.",
          youCanNow: "shirya don rajistar SAM.gov kyauta da kammala ta, bayyana mene ne UEI, da gane zambar rajista ta kuɗi.",
          quickCheck: [
            { objective: "O1", q: "Da me sunan doka da adireshinku a SAM.gov dole su yi daidai?", options: ["Abin da IRS ke da shi game da kasuwancinku", "Shafinku na kafofin sada zumunta", "Tambarinku (logo)", "Adireshin wasiƙunku na kanku"], answer: 0, why: "Sunan doka da adireshinku dole su yi daidai da na IRS sosai." },
            { objective: "O1", q: "Kun tsaya a wani mataki na rajistar SAM.gov. A ina za ku sami taimako kyauta?", options: ["Kamfanin da ya aiko muku imel yana tayin taimako da $300", "APEX Accelerator", "Kayan AI, ta hanyar saka bayanan bankinku", "Babu inda; dole ku biya wani"], answer: 1, why: "APEX Accelerators suna ba da taimako kyauta; ba sai kun biya don yin rajista ba." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Zaɓar lambobin NAICS da duba girmanku",
          minutes: 5,
          goal: "Zaɓi babbar lambar NAICS ku duba ko kasuwancinku ƙarami ne a ƙarƙashinta.",
          text: [
            "Lambobin NAICS (North American Industry Classification System) suna rarraba kasuwanci bisa abin da suke sayarwa. Ana ba kowace kwangilar gwamnati lambar NAICS ɗaya, kuma masu saye suna neman kasuwanci ta lamba. Misali, akwai lambobi don hidimar tsaftacewa, bugun kasuwanci da tsara tsarin kwamfuta.",
            "Ku nemi lambobi a shafin NAICS na US Census Bureau (census.gov/naics) ta hanyar rubuta kalmomin da ke bayyana aikinku. Ku zaɓi babbar lamba ɗaya don babbar hidimarku, ku ƙara wasu don sauran abubuwan da kuke sayarwa.",
            "Kowace lambar NAICS tana da ma'aunin girma (size standard): mafi girman da kasuwanci zai iya zama har yanzu a ɗauke shi ƙarami a ƙarƙashin wannan lamba, ana auna shi da kuɗin shiga na shekara ko yawan ma'aikata. Yawancin masana'antu masu ma'aikata 500 ko ƙasa da haka, da yawancin waɗanda ba masana'antu ba masu matsakaicin ƙasa da $7.5 million a shekara ana ɗaukar su ƙanana, amma ya bambanta. Ku duba naku da Size Standards Tool na SBA.",
            "Kasancewa ƙarami a ƙarƙashin wata lamba yana ba ku damar fafatawa kan kwangilolin da aka ware wa ƙananan kasuwanci a ƙarƙashin wannan lamba."
          ],
          steps: ["Ku jera abin da kuke sayarwa da kalmomi masu sauƙi.", "Ku nemi lambobin da suka dace a census.gov/naics.", "Ku zaɓi babbar lamba ɗaya da wasu biyu ko uku.", "Ku duba kowace lamba da Size Standards Tool na SBA.", "Ku ƙara lambobin a rajistarku ta SAM.gov."],
          words: [["Lambar NAICS", "lambar da ke bayyana irin kasuwancin da kuke yi."], ["Babbar lambar NAICS", "lambar babban kayanku ko hidimarku."], ["Ma'aunin girma (size standard)", "mafi girman da kasuwanci zai iya zama har yanzu a ɗauke shi ƙarami a ƙarƙashin lambar NAICS."], ["Ware wa (set-aside)", "kwangilar da wasu kasuwanci kaɗai, kamar ƙananan kasuwanci, za su iya fafatawa a kai."]],
          slides: [
            { title: "Aikin lambobin NAICS", bullets: ["Suna rarraba kasuwanci bisa abin da suke sayarwa", "Kowace kwangila tana da lamba ɗaya", "Masu saye suna neman kasuwanci ta lamba"] },
            { title: "Nemo lambobinku", bullets: ["Ku nema a census.gov/naics", "Babbar lamba ɗaya don babbar hidimarku", "Ku ƙara lambobi don sauran abin da kuke sayarwa"] },
            { title: "Ma'aunin girma", bullets: ["Kowace lamba tana da iyakar ƙaramin kasuwanci", "Ta kuɗin shiga na shekara ko yawan ma'aikata", "Ku duba da Size Standards Tool na SBA"] }
          ],
          sources: [
            { name: "SBA: Ma'aunin girma (size standards)", url: "https://www.sba.gov/federal-contracting/contracting-guide/size-standards" },
            { name: "US Census Bureau: NAICS", url: "https://www.census.gov/naics/" }
          ],
          tryIt: "Ku nemi babbar hidimarku a census.gov/naics, ku rubuta babbar lambar NAICS ɗinku da wasu biyu. Sannan ku duba ɗaya daga cikinsu a Size Standards Tool na SBA ku rubuta ko kasuwancinku ƙarami ne.",
          youCanNow: "zaɓar lambobin NAICS don kasuwancinku da duba ko ku ƙanana ne a ƙarƙashin kowace ɗaya.",
          quickCheck: [
            { objective: "O2", q: "Lambobin NAICS nawa ake ba kowace kwangilar gwamnati?", options: ["Babu", "Goma", "Ɗaya", "Duk yawan da mai tayi yake so"], answer: 2, why: "Ana ba kowace kwangila lambar NAICS ɗaya, kuma masu saye suna nema ta lamba." },
            { objective: "O2", q: "Kuna da kamfanin tsaftacewa da ke kuma sayar da wasu kayan aiki. Yaya za ku zaɓi lambobi?", options: ["Ku zaɓi lamba ɗaya kawai ba tare da tunani ba", "Ku zaɓi lambar kayan aiki kaɗai", "Ku bar lambobi; masu saye suna nema ta suna", "Ku zaɓi tsaftacewa a matsayin babbar lamba, ku ƙara wasu don sauran abin da kuke sayarwa"], answer: 3, why: "Ku zaɓi babbar lamba ɗaya don babbar hidimarku, ku ƙara wasu don sauran abubuwan da kuke sayarwa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Takardun shaidar SBA da na California",
          minutes: 6,
          goal: "Yanke shawarar takardun shaidar tarayya da na California da kasuwancinku zai iya cancanta.",
          text: [
            "Takardun shaida (certifications) suna ba ku damar fafatawa kan kwangilolin da aka keɓe wa wasu ƙananan kasuwanci. Ana neman takardun shaidar tarayya a certifications.sba.gov. Kowanne yana da dokoki; waɗannan su ne ainihin abubuwan, don haka ku duba shafukan SBA don cikakken jeri.",
            "8(a) Business Development: don ƙananan kasuwanci da aƙalla 51% mallakar 'yan ƙasar Amurka ne masu fama da koma baya na zamantakewa da tattalin arziki, kuma su ke iko da shi, da iyakokin dukiyar mutum, kuɗin shiga da kadarori, yawanci shekaru biyu ana kasuwanci, da shiri na lokaci ɗaya har zuwa shekaru tara. HUBZone: babban ofishinku yana cikin HUBZone (Historically Underutilized Business Zone, yankin da ba a cika amfani da shi wajen kasuwanci ba) kuma aƙalla 35% na ma'aikata suna zaune a ɗaya. Women-Owned Small Business (WOSB): aƙalla 51% mallakar mata 'yan ƙasar Amurka ne kuma su ke iko da shi; gwamnati tana burin ba WOSB 5% na kuɗin kwangiloli. Na tsofaffin sojoji (VOSB) da na tsofaffin sojoji masu nakasa daga aiki (SDVOSB): shirin VetCert na SBA ne ke ba da takardar shaida tun 2023.",
            "California tana da nata takardun shaida daga Office of Small Business and DVBE Services na Department of General Services, ana nema a Cal eProcure. Small Business (SB): mallaka mai zaman kanta, babban ofis a California, kuma, tare da kamfanonin da ke da alaƙa, ma'aikata 100 ko ƙasa da haka da matsakaicin jimillar kuɗin shiga na shekara $19 million ko ƙasa da haka (ko masana'anta mai ma'aikata 100 ko ƙasa da haka). Disabled Veteran Business Enterprise (DVBE): aƙalla 51% mallakar tsofaffin sojoji masu nakasa ne kuma su ke gudanar da shi, masu nakasa daga aikin soja ta aƙalla 10%.",
            "Birane, gundumomi da hukumomin makarantu da yawa suna karɓar takardun shaidar jiha ma. Ku tambayi APEX Accelerator waɗanne ne suka dace da ku."
          ],
          words: [["8(a)", "shirin SBA don ƙananan kasuwancin mutanen da ke fama da koma baya na zamantakewa da tattalin arziki."], ["HUBZone", "Historically Underutilized Business Zone; kasuwanci a can suna iya samun taimako wajen kwangila."], ["WOSB", "Women-Owned Small Business (ƙaramin kasuwancin mata)."], ["SDVOSB", "Service-Disabled Veteran-Owned Small Business (ƙaramin kasuwancin tsohon soja mai nakasa daga aiki)."], ["DVBE", "Disabled Veteran Business Enterprise, takardar shaidar California."]],
          slides: [
            { title: "Me yasa za a nemi takardar shaida", bullets: ["Fafatawa kan kwangilolin da aka keɓe wa wasu kasuwanci", "Na tarayya: certifications.sba.gov"] },
            { title: "Takardun shaidar tarayya", bullets: ["8(a): masu mallaka masu koma baya, har zuwa shekaru 9", "HUBZone: ofis a cikin yanki, 35% na ma'aikata suna zaune a ɗaya", "WOSB: 51% mallakar mata; VOSB/SDVOSB: SBA VetCert"] },
            { title: "Takardun shaidar California", bullets: ["Ku nema a Cal eProcure (DGS)", "SB: ofis a CA, ma'aikata 100 ko ƙasa, kuɗin shiga har $19M", "DVBE: 51% mallakar tsofaffin sojoji masu nakasa"] },
            { title: "Ku sami taimako kyauta", bullets: ["APEX Accelerators", "Ofisoshin SBA na yanki", "Ku duba cikakkun dokokin kowane shiri"] }
          ],
          sources: [
            { name: "SBA: Shirin 8(a) Business Development", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/8a-business-development-program" },
            { name: "SBA: Shirin HUBZone", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/hubzone-program" },
            { name: "SBA: Shirin Women-Owned Small Business", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/women-owned-small-business-federal-contract-program" },
            { name: "SBA: Taimakon kwangila ga tsofaffin sojoji (VetCert)", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/veteran-contracting-assistance-programs" },
            { name: "California DGS: Neman takardar shaidar Small Business da DVBE", url: "https://www.dgs.ca.gov/PD/Services/Page-Content/Procurement-Division-Services-List-Folder/Apply-for-or-Re-apply-as-Small-Business-Disabled-Veteran-Business-Enterprise" }
          ],
          tryIt: "Ku yi tebur na takardun shaida shida na wannan darasi (8(a), HUBZone, WOSB, VOSB ko SDVOSB, California SB, California DVBE). Ga kowanne, ku rubuta i, wataƙila ko a'a don kasuwancinku, da doka ɗaya da ke yanke hukunci. Ku zagaye wanda za ku fara dubawa.",
          youCanNow: "ambaton manyan takardun shaidar SBA da na California, duba waɗanda kasuwancinku zai iya cancanta, da sanin inda za a nema.",
          quickCheck: [
            { objective: "O3", q: "A ina ake neman takardun shaidar SBA na tarayya?", options: ["certifications.sba.gov", "census.gov/naics", "Kowane ofishin gunduma", "Shafin intanet na kamfani mai zaman kansa da ke karɓar kuɗi"], answer: 0, why: "Ana neman takardun shaidar tarayya a certifications.sba.gov." },
            { objective: "O3", q: "Ku tsohon soja ne mai nakasa da ke da kasuwanci a California. Wace takardar shaidar jiha za ku duba?", options: ["HUBZone", "DVBE ta hanyar Cal eProcure", "WOSB", "Babu; California ba ta da takardun shaida"], answer: 1, why: "DVBE ta California don kasuwancin da aƙalla 51% mallakar tsofaffin sojoji masu nakasa ne kuma su ke gudanar da shi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Shiryawa don sayar wa gwamnati",
        questions: [
          { objective: "O1", q: "Me kuke samu idan kun yi rajista a SAM.gov?", options: ["Bashin banki", "Unique Entity ID (UEI)", "Kwangilar da aka tabbatar", "Lasisin kasuwanci"], answer: 1, why: "Rajistar SAM.gov tana ba kasuwancinku Unique Entity ID mai haruffa 12." },
          { objective: "O1", q: "Wani kamfani ya aiko imel cewa zai sabunta rajistarku ta SAM.gov da $500. Me za ku yi?", options: ["Ku biya da sauri kafin ta ƙare", "Ku aika musu EIN da bayanan bankinku", "Ku amsa da kalmar sirrinku", "Ku yi watsi da shi ku sabunta da kanku kyauta a sam.gov"], answer: 3, why: "Rajistar SAM.gov kyauta ce; ba sai kun biya wani kamfani ba." },
          { objective: "O1", q: "Sau nawa dole ku sabunta rajistarku ta SAM.gov?", options: ["Duk bayan kwanaki 365", "Duk bayan shekaru 10", "Ba a taɓa ba", "Kowane mako"], answer: 0, why: "SAM.gov ta ce dole ku sabunta duk bayan kwanaki 365 don ta ci gaba da aiki." },
          { objective: "O2", q: "Me lambar NAICS ke bayyanawa?", options: ["Asusun bankinku", "Adireshin gidanku", "Irin kasuwancin da kuke yi da abin da kuke sayarwa", "Matsayin bashinku (credit score)"], answer: 2, why: "Lambobin NAICS suna rarraba kasuwanci bisa kayayyakinsu ko hidimominsu." },
          { objective: "O3", q: "Babban ofishinku yana cikin HUBZone kuma 40% na ma'aikatanku suna zaune a ɗaya. Wace takardar shaida za ku duba?", options: ["WOSB", "DVBE", "8(a) kaɗai", "HUBZone"], answer: 3, why: "HUBZone tana buƙatar babban ofis a cikin HUBZone da aƙalla 35% na ma'aikata da ke zaune a ɗaya." }
        ]
      }
    },
    {
      name: "Babi na 2: Nemo da samun kwangiloli",
      lessons: [
        {
          objectives: ["O4"],
          title: "Nemo damarmaki",
          minutes: 5,
          goal: "Bincika SAM.gov da Cal eProcure don damarmakin da suka dace da lambobin NAICS ɗinku, ku ajiye binciken.",
          text: [
            "Hukumomin tarayya suna saka damar kwangila a SAM.gov. Ku bincika Contract Opportunities ta lambar NAICS ɗinku, jiharku da irin keɓewar (set-aside), kamar ƙaramin kasuwanci, 8(a), HUBZone, WOSB ko SDVOSB. Ku ajiye binciken ta yadda sababbin damarmaki masu dacewa za su zo imel ɗinku.",
            "Hukumomin jihar California suna saka tayi a Cal eProcure (caleprocure.ca.gov). Ku yi rajista a can, ku ƙara kalmomin bincike da lambobin kaya na UNSPSC a bayananku, ku kunna sanarwa. Cal eProcure tana kuma nuna abin da sassan gwamnati suka saya a baya da farashinsu, wanda ke taimaka muku sa naku farashin.",
            "Ba sai kun fara samun babbar kwangila ba. Ƙananan kasuwanci da yawa suna farawa a matsayin ƙananan 'yan kwangila (subcontractors) ga manyan 'yan kwangila (prime contractors). Sassan gwamnatin California suna da SB/DVBE Advocates (masu kare muradun SB/DVBE) da ke taimakon kasuwanci masu takardar shaida, kuma APEX Accelerators suna taimaka muku nemo tayi kyauta.",
            "Ku nemi damarmakin da suka dace da abin da kuka riga kuka iya sosai, a yankin da za ku iya yi wa hidima, a girman da za ku iya ɗauka."
          ],
          steps: ["A SAM.gov, ku bincika Contract Opportunities ta lambar NAICS ɗinku da jiharku.", "Ku tace ta keɓewar da kuka cancanta.", "Ku ajiye binciken don sababbin damarmaki su zo ta imel.", "Ku yi rajista a Cal eProcure ku ƙara kalmomin bincike da lambobin UNSPSC don sanarwa.", "Ku tuntuɓi APEX Accelerator ko SB/DVBE Advocate don samun bayanan damarmaki."],
          words: [["Damar kwangila (contract opportunity)", "sanarwar da aka saka cewa gwamnati na son sayen wani abu."], ["Babban ɗan kwangila (prime contractor)", "kasuwancin da ke riƙe da kwangilar da gwamnati."], ["Ƙaramin ɗan kwangila (subcontractor)", "kasuwancin da babban ɗan kwangila ya ɗauka don yin wani ɓangare na aikin."], ["UNSPSC", "lambar kaya da hidima da tsarin tayi na California ke amfani da ita."]],
          slides: [
            { title: "Na tarayya: SAM.gov", bullets: ["Ku bincika Contract Opportunities ta NAICS da jiha", "Ku tace ta keɓewar da kuka cancanta", "Ku ajiye binciken don sanarwar imel"] },
            { title: "California: Cal eProcure", bullets: ["Ku yi rajista ku ƙara kalmomin bincike da lambobin UNSPSC", "Ku kunna sanarwar tayi", "Ku ga sayayyar baya da farashinsu"] },
            { title: "Ku fara inda za ku iya nasara", bullets: ["Ku yi aiki a ƙarƙashin babban ɗan kwangila", "SB/DVBE Advocates da APEX Accelerators suna taimakawa", "Ku dace da ƙwarewarku, yankinku da girmanku"] }
          ],
          sources: [
            { name: "SAM.gov", url: "https://sam.gov/" },
            { name: "California DGS: Yadda ake kasuwanci da Jihar California", url: "https://www.dgs.ca.gov/PD/Resources/Page-Content/Procurement-Division-Resources-List-Folder/How-to-do-business-with-the-state-of-California" },
            { name: "Cal eProcure: Nemo damar yin tayi", url: "https://caleprocure.ca.gov/pages/Events-BS3/event-search.aspx" }
          ],
          tryIt: "Ku bincika Contract Opportunities a SAM.gov da babbar lambar NAICS ɗinku da jiharku. Ku rubuta damarmaki biyu: hukumar, abin da suke so, keɓewar da ranar ƙarshe. Ku ajiye binciken.",
          youCanNow: "nemo damar kwangilolin tarayya da na California da suka dace da lambobinku, da saita sanarwa.",
          quickCheck: [
            { objective: "O4", q: "A ina hukumomin jihar California ke saka tayi?", options: ["SAM.gov kaɗai", "Kafofin sada zumunta", "Cal eProcure", "Census Bureau"], answer: 2, why: "Hukumomin jihar California suna saka tayi a Cal eProcure." },
            { objective: "O4", q: "Kun sami babbar kwangila mai nisa da yankinku da ba za ku iya ɗauka ba. Me za ku yi?", options: ["Ku yi tayi duk da haka", "Ku nemi AI ya yi muku tayi", "Ku kwafi tayin wani kamfani", "Ku nemi damarmakin da suka dace da abin da kuka iya sosai, a girman da za ku iya ɗauka"], answer: 3, why: "Ku nemi aikin da kuka iya sosai, a yankin da za ku iya yi wa hidima, a girman da za ku iya ɗauka." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Karanta takardar neman tayi",
          minutes: 6,
          goal: "Karanta muhimman sassan takardar neman tayi ku yanke shawarar ko za ku yi tayi.",
          text: [
            "Takardar neman tayi (solicitation) ita ce buƙatar gwamnati ta neman tayi. Ana iya kiranta Request for Quote (RFQ), Request for Proposal (RFP) ko Invitation for Bid (IFB). Suna iya yin tsawo, amma sai ku fara nemo wasu muhimman sassa kaɗan kawai.",
            "Ku nemo waɗannan: bayanin aiki (statement of work, abin da suke son a yi), umarni (abin da za a aika da yadda), ma'aunin zaɓe (evaluation criteria, yadda za su zaɓi wanda ya yi nasara, kamar farashi mafi ƙanƙanta ko mafi kyawun daraja), ranar ƙarshe da lokaci, ranar ƙarshe ta yin tambayoyi, da sunan jami'in kwangila. Ku kuma duba gyare-gyare (amendments), waɗanda canje-canje ne da aka saka daga baya.",
            "Sannan ku yanke shawarar yin tayi ko a'a. Ku tambaya: Za mu iya yin wannan aiki da kyau? Muna cika kowace buƙata, kamar lasisi, inshora da keɓewar? Za mu iya kawowa a kan lokaci kuma a farashin da har yanzu yake da riba? Muna da irin aikin baya da za mu nuna?",
            "Rasa umarni ɗaya, kamar iyakar shafuka ko fom da ake buƙata, zai iya sa a ƙi tayi. Ku yi jerin abubuwa daga umarnin ku yi alama kan kowanne kafin ku aika. Mataimakin AI zai iya taimaka muku taƙaita doguwar takardar neman tayi ta jama'a, amma dole ku karanta ainihin umarnin da kanku."
          ],
          steps: ["Ku nemo bayanin aiki, umarni da ma'aunin zaɓe.", "Ku rubuta ranar ƙarshe da lokaci, ranar ƙarshe ta tambayoyi da jami'in kwangila.", "Ku duba gyare-gyare.", "Ku amsa tambayoyi huɗu na yin tayi ko a'a.", "Idan za ku yi tayi, ku mayar da umarnin jerin abubuwa ku yi alama kan kowanne."],
          words: [["Takardar neman tayi (solicitation)", "buƙatar gwamnati ta neman tayi, kamar RFQ, RFP ko IFB."], ["Bayanin aiki (statement of work)", "sashen da ke faɗin ainihin aikin da ake so."], ["Ma'aunin zaɓe (evaluation criteria)", "yadda gwamnati za ta zaɓi wanda ya yi nasara."], ["Gyara (amendment)", "canji ga takardar neman tayi da aka saka bayan ta fara fitowa."], ["Jami'in kwangila (contracting officer)", "ma'aikacin gwamnati mai ikon sa hannu kan kwangilar."]],
          slides: [
            { title: "Sunayen da za ku gani", bullets: ["RFQ: Request for Quote (neman farashi)", "RFP: Request for Proposal (neman shawara)", "IFB: Invitation for Bid (gayyatar yin tayi)"] },
            { title: "Ku fara nemo waɗannan sassa", bullets: ["Bayanin aiki da umarni", "Ma'aunin zaɓe", "Ranar ƙarshe, ranar ƙarshe ta tambayoyi, gyare-gyare"] },
            { title: "Yin tayi ko a'a?", bullets: ["Za mu iya yi da kyau?", "Muna cika kowace buƙata?", "Za mu kawo a kan lokaci da riba? Aikin baya?"] },
            { title: "Ku bi kowane umarni", bullets: ["Rasa ɗaya zai iya sa a ƙi ku", "Ku yi jerin abubuwa ku yi alama kan kowanne"] }
          ],
          tryIt: "Ku buɗe ɗaya daga cikin damarmakin da kuka samu a darasin da ya gabata. Ku rubuta bayanin aiki a jimla ɗaya, ma'aunin zaɓe, ranar ƙarshe da lokaci, da ranar ƙarshe ta tambayoyi. Sannan ku amsa tambayoyi huɗu na yin tayi ko a'a ku yanke shawara.",
          youCanNow: "nemo muhimman sassan takardar neman tayi da yanke shawara mai sarari ta yin tayi ko a'a.",
          quickCheck: [
            { objective: "O5", q: "Wanne ne wani sunan takardar neman tayi?", options: ["Request for Proposal (RFP)", "Takardar bayanin iyawa", "UEI", "Ma'aunin girma"], answer: 0, why: "Ana iya kiran takardar neman tayi RFQ, RFP ko IFB." },
            { objective: "O5", q: "Umarnin sun saka iyakar shafuka 10. Me za ku yi?", options: ["Ku aika shafuka 15 don nuna ƙari", "Ku ƙara shi a jerin abubuwanku ku yi alama a kai kafin ku aika", "Ku bar AI ya yanke tsawon", "Ku yi watsi da shi; shawara ce kawai"], answer: 1, why: "Rasa umarni ɗaya, kamar iyakar shafuka, zai iya sa a ƙi tayinku." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rubuta takardar bayanin iyawa",
          minutes: 6,
          goal: "Rubuta takardar bayanin iyawa mai shafi ɗaya da ke faɗa wa mai saye abin da kuke yi da yadda zai same ku.",
          text: [
            "Takardar bayanin iyawa (capability statement) taƙaitaccen bayani ne mai shafi ɗaya game da kasuwancinku don masu saye na gwamnati da manyan 'yan kwangila. Kuna aika ta idan kun haɗu da masu saye, a taron wayar da kai, da lokacin da kuka gabatar da kanku ga jami'in kwangila ko SB/DVBE Advocate.",
            "Tana da sassa huɗu. Ƙwarewar asali (core competencies): abin da kuka fi iya, a gajerun layuka. Ayyukan baya (past performance): ayyuka biyu ko uku da kuka yi, da irin abokin ciniki, abin da kuka yi da sakamakon. Abubuwan da suka bambanta ku (differentiators): abin da ya sa kuka bambanta, kamar sauri, wata ƙwarewa ta musamman ko kasancewa a yankin. Bayanan kamfani: sunan doka, UEI, lambar CAGE idan kuna da ita, lambobin NAICS, takardun shaida, da hanyoyin tuntuɓa.",
            "Ku bar ta a shafi ɗaya, mai sauƙin dubawa, da tambarinku da hanyoyin tuntuɓa a sama. Ku yi amfani da kalmomin mai saye daga bayanin aiki idan sun dace. Ku yi nau'i ga kowane irin mai saye idan kuna sayar da hidimomi daban-daban.",
            "Mataimakin AI zai iya taimaka muku gajarta layuka ko sa su fi sarari. Kada ku saka lambobin sirri kamar bayanan bankinku ko EIN; UEI da lambobin NAICS ɗinku ba laifi a nuna su."
          ],
          steps: ["Ku rubuta ƙwarewar asali uku zuwa biyar a gajerun layuka.", "Ku ƙara misalan ayyukan baya biyu ko uku: irin abokin ciniki, aiki, sakamako.", "Ku rubuta abubuwa biyu ko uku da suka bambanta ku.", "Ku ƙara bayanan kamfani: sunan doka, UEI, lambar CAGE, lambobin NAICS, takardun shaida da hanyoyin tuntuɓa.", "Ku sa ta a shafi ɗaya ku ajiye ta a matsayin PDF."],
          words: [["Takardar bayanin iyawa (capability statement)", "taƙaitaccen bayani mai shafi ɗaya game da kasuwancinku don masu saye na gwamnati."], ["Ƙwarewar asali (core competencies)", "abubuwan da kasuwancinku ya fi iya."], ["Ayyukan baya (past performance)", "aikin da kuka yi a baya da ke nuna za ku iya kawowa."], ["Abin da ya bambanta ku (differentiator)", "wani abu da ya sa kasuwancinku ya bambanta da sauran."], ["Lambar CAGE", "lambar da ke gane kasuwancin da ke yi wa gwamnati aiki, ana ba da ita tare da rajistar SAM."]],
          slides: [
            { title: "Mece ce", bullets: ["Shafi ɗaya game da kasuwancinku", "Don masu saye na gwamnati da manyan 'yan kwangila", "Ku aika ta lokacin da kuka gabatar da kanku"] },
            { title: "Sassa huɗu", bullets: ["Ƙwarewar asali", "Ayyukan baya", "Abubuwan da suka bambanta ku", "Bayanan kamfani: UEI, NAICS, takardun shaida, tuntuɓa"] },
            { title: "Ku sa ta mai sauƙin dubawa", bullets: ["Shafi ɗaya, tambari da hanyoyin tuntuɓa a sama", "Ku yi amfani da kalmomin mai saye idan sun dace", "Nau'i ga kowane irin mai saye"] },
            { title: "Amfani da AI don gyarawa", bullets: ["Gajarta layuka ku sa su fi sarari", "Babu bayanan banki ko EIN a cikin prompt", "UEI da lambobin NAICS ba laifi a nuna su"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta takardar bayanin iyawarku mai shafi ɗaya da ƙwarewar asali, ayyukan baya, abubuwan da suka bambanta ku da bayanan kamfani. Sannan ku nemo dama ɗaya ta gaske a SAM.gov ko Cal eProcure da ta dace da lambar NAICS da ke kan takardarku, ku rubuta sunanta da ranar ƙarshe.",
          youCanNow: "rubuta takardar bayanin iyawa mai shafi ɗaya da daidaita ta da damarmakin gwamnati na gaske.",
          quickCheck: [
            { objective: "O6", q: "Yaya tsawon takardar bayanin iyawa ya kamata ya zama?", options: ["Shafuka goma", "Mafi tsawo da zai yiwu", "Shafi ɗaya", "Jimla ɗaya"], answer: 2, why: "Taƙaitaccen bayani ne mai shafi ɗaya mai sauƙin dubawa." },
            { objective: "O6", q: "Kuna rubuta sashen bayanan kamfaninku. Me za ku bari waje?", options: ["UEI ɗinku", "Lambobin NAICS ɗinku", "Hanyoyin tuntuɓarku", "Bayanan bankinku da EIN"], answer: 3, why: "UEI da lambobin NAICS ba laifi a nuna su; lambobin sirri kamar bayanan banki da EIN ba haka ba ne." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Nemo da samun kwangiloli",
        questions: [
          { objective: "O4", q: "A ina hukumomin tarayya ke saka damar kwangila?", options: ["SAM.gov", "Shafin kafofin sada zumunta", "Shafin bankinku", "Ofishin motoci (DMV)"], answer: 0, why: "Ana saka damar kwangilolin tarayya a SAM.gov." },
          { objective: "O5", q: "Wane sashe na takardar neman tayi ke faɗa muku yadda za a zaɓi wanda ya yi nasara?", options: ["Shafin farko", "Ma'aunin zaɓe", "Tambarin hukumar", "Lambobin shafuka"], answer: 1, why: "Ma'aunin zaɓe yana bayyana yadda ake auna tayi." },
          { objective: "O5", q: "Ba za ku iya kawowa a ranar da ake buƙata ba. Mene ne shawara mai hikima?", options: ["Ku yi tayi duk da haka ku yi fata", "Ku yi alƙawari ku yi jinkiri", "Ku yanke shawarar kada ku yi tayi kan wannan", "Ku yi watsi da ranar"], answer: 2, why: "Idan ba za ku iya cika wata muhimmiyar buƙata ba, rashin yin tayi yana kare mutuncinku." },
          { objective: "O6", q: "Wanne ne ya dace a sashen bayanan kamfani na takardar bayanin iyawa?", options: ["Lambar asusun bankinku", "EIN ɗinku", "Kalmar sirrinku", "UEI da lambobin NAICS ɗinku"], answer: 3, why: "UEI, lambobin NAICS, takardun shaida da hanyoyin tuntuɓa suna taimakon masu saye su same ku su duba ku." },
          { objective: "O6", q: "Mene ne hanya mai kyau ga sabon ƙaramin kasuwanci ya fara?", options: ["Yin tayi kan manyan kwangiloli kaɗai", "Yin aiki a ƙarƙashin babban ɗan kwangila", "Biyan wani don ya samo muku kwangiloli", "Jiran gwamnati ta kira"], answer: 1, why: "Yin aiki a ƙarƙashin babban ɗan kwangila yana gina ayyukan baya da ƙaramin haɗari." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Samun Kwangilolin Gwamnati",
    questions: [
      { objective: "O1", q: "Mene ne SAM.gov?", options: ["Shafin tarayya inda kasuwanci ke yin rajista don sayar wa gwamnati", "Shirin bashi", "Fom ɗin haraji", "Shafin jiha kaɗai"], answer: 0, why: "SAM.gov ita ce System for Award Management." },
      { objective: "O1", q: "UEI yana da haruffa nawa?", options: ["4", "12", "20", "100"], answer: 1, why: "UEI lamba ce mai haruffa da lambobi 12." },
      { objective: "O1", q: "Da UEI kaɗai ba tare da cikakkiyar rajista ba, ku:", options: ["Kuna iya samun kowace kwangila", "Ana biyan ku kai tsaye", "Ba za ku iya neman kyaututtukan tarayya kai tsaye ba", "Kun sami takardar shaidar 8(a)"], answer: 2, why: "SAM.gov ta ce UEI kaɗai ba ya ba ku damar neman kyaututtukan tarayya." },
      { objective: "O1", q: "Nawa ne kuɗin rajistar SAM.gov?", options: ["$500", "$99 a shekara", "Kaso na kowace kwangila", "Babu komai; kyauta ce"], answer: 3, why: "Rajista kyauta ce; ku yi watsi da tayin kuɗi don yi muku rajista." },
      { objective: "O1", q: "A ina ya kamata ku rubuta bayanan bankinku don SAM.gov?", options: ["A SAM.gov kanta kaɗai", "A cikin mataimakin AI", "A imel zuwa ga baƙo", "A kafofin sada zumunta"], answer: 0, why: "Bayanan sirri suna shiga shafin hukuma kaɗai." },
      { objective: "O2", q: "A ina za ku iya neman lambobin NAICS?", options: ["Wani bulogi kawai", "census.gov/naics", "Kyamarar wayarku", "Saƙon tes"], answer: 1, why: "US Census Bureau ce ke wallafa lambobin NAICS." },
      { objective: "O2", q: "Ma'aunin girma yana faɗa muku:", options: ["Girman tambarinku", "Yadda ofishinku dole ya kai girma", "Mafi girman da za ku iya zama har yanzu a ɗauke ku ƙanana a ƙarƙashin lambar NAICS", "Kwangiloli nawa za ku iya samu"], answer: 2, why: "Ma'aunin girma yana saita iyakar ƙaramin kasuwanci ga kowace lambar NAICS." },
      { objective: "O2", q: "Keɓewa (set-aside) ita ce:", options: ["Mayar da haraji", "Bashi", "Tarar jinkiri", "Kwangilar da wasu kasuwanci kaɗai za su iya fafatawa a kai"], answer: 3, why: "Keɓewa tana ajiye kwangiloli don rukuni kamar ƙananan kasuwanci." },
      { objective: "O3", q: "A ina ake neman takardun shaidar SBA na tarayya kamar WOSB da VetCert?", options: ["certifications.sba.gov", "Mai ba da shawara na kuɗi kaɗai", "Ɗakin karatun gundumarku", "irs.gov"], answer: 0, why: "Ana neman takardun shaidar SBA a certifications.sba.gov." },
      { objective: "O3", q: "Wace takardar shaida ce don kasuwancin da aƙalla 51% mallakar mata 'yan ƙasar Amurka ne kuma su ke iko da shi?", options: ["HUBZone", "WOSB", "DVBE", "8(a) kaɗai"], answer: 1, why: "WOSB tana nufin Women-Owned Small Business." },
      { objective: "O3", q: "Wane ne ke ba da takardar shaida ga ƙananan kasuwancin tsofaffin sojoji da na tsofaffin sojoji masu nakasa daga aiki don kwangilolin tarayya yanzu?", options: ["IRS", "Garinku", "SBA, ta hanyar VetCert", "Babu kowa"], answer: 2, why: "Shirin VetCert na SBA ya karɓi aikin ba da takardar shaida a 2023." },
      { objective: "O3", q: "A ina ake neman takardar shaidar Small Business da DVBE ta California?", options: ["SAM.gov", "FBI", "Banki", "Cal eProcure, ta hanyar Department of General Services"], answer: 3, why: "Ana yin takardar shaidar SB da DVBE ta California ta hanyar Cal eProcure." },
      { objective: "O3", q: "DVBE ta California dole aƙalla 51% ya zama mallakar:", options: ["Tsofaffin sojoji masu nakasa", "Kowane abokin tsofaffin sojoji", "Masu saka jari daga wajen jihar", "Ma'aikatan gwamnati"], answer: 0, why: "DVBE aƙalla 51% mallakar tsofaffin sojoji masu nakasa ne kuma su ke gudanar da shi." },
      { objective: "O4", q: "Yaya za a riƙa turo muku sababbin damarmaki na SAM.gov?", options: ["Ku kira kowace hukuma kowace rana", "Ku ajiye binciken ku don damarmaki masu dacewa su zo ta imel", "Ku biya kuɗin sanarwa", "Ba zai yiwu ba"], answer: 1, why: "Binciken da aka ajiye yana aika sababbin damarmaki masu dacewa ta imel." },
      { objective: "O6", q: "Babban ɗan kwangila (prime contractor) shi ne:", options: ["Ma'aikacin gwamnati", "Banki", "Kasuwancin da ke riƙe da kwangilar da gwamnati", "Takardar shaida"], answer: 2, why: "Babban ɗan kwangila yana riƙe da kwangilar kuma yana iya ɗaukar ƙananan 'yan kwangila." },
      { objective: "O4", q: "Wane ne zai iya taimaka muku nemo tayi kyauta?", options: ["Kamfanin da ke karɓar kuɗi don yi muku rajista", "Baƙo a intanet", "Babu kowa", "APEX Accelerator"], answer: 3, why: "APEX Accelerators suna ba da taimako kyauta kan kwangilolin gwamnati." },
      { objective: "O5", q: "Mene ne gyara (amendment) ga takardar neman tayi?", options: ["Canjin da aka saka bayan ta fara fitowa", "Tambarin kamfaninku", "Fom ɗin haraji", "Ajiyar kuɗi a banki"], answer: 0, why: "Gyare-gyare suna canja takardar neman tayi, don haka koyaushe ku duba su." },
      { objective: "O5", q: "Wane sashe ne ke faɗin ainihin aikin da ake so?", options: ["Ranar ƙarshe", "Bayanin aiki (statement of work)", "Muƙamin jami'in kwangila", "Adireshin hukumar"], answer: 1, why: "Bayanin aiki yana bayyana aikin." },
      { objective: "O5", q: "Me yasa za a mayar da umarnin takardar neman tayi jerin abubuwa?", options: ["Don a ƙara tsawonta", "Don tsallake matakai", "Rasa umarni ɗaya zai iya sa a ƙi tayinku", "SAM.gov ce ke buƙata"], answer: 2, why: "Jerin abubuwa yana taimaka muku cika kowane umarni." },
      { objective: "O6", q: "Wanne ne sashe na takardar bayanin iyawa?", options: ["Kalmar sirrin bankinku", "Adireshin gidanku kaɗai", "Tarihi mai shafuka goma", "Ayyukan baya"], answer: 3, why: "Ayyukan baya suna nuna wa masu saye cewa za ku iya kawowa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      5,
      9,
      13,
      17,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Ƙwarewar asali",
        objective: "O6",
        notYet: "Ba ta da sarari ko babu ita, kamar \"muna yin komai\".",
        meets: "Gajerun layuka na abin da kasuwancin ya fi iya.",
        exceeds: "Tana amfani da kalmomin mai saye daga bayanin aiki inda suka dace."
      },
      {
        name: "Ayyukan baya",
        objective: "O6",
        notYet: "Babu ayyukan baya, ko ayyuka ba tare da sakamako ba.",
        meets: "Ayyuka biyu ko uku da irin abokin ciniki, abin da aka yi da sakamakon.",
        exceeds: "Ta zaɓi ayyukan da suka fi kama da aikin da masu saye na gwamnati ke so."
      },
      {
        name: "Abubuwan da suka bambanta",
        objective: "O6",
        notYet: "Babu abin da ya bambanta kasuwancin.",
        meets: "Ta faɗi a sarari abin da ya sa kasuwancin ya bambanta.",
        exceeds: "Ta goyi bayan kowane batu da gaskiya daga aiki na gaske, kamar sauri ko kasancewa a yankin."
      },
      {
        name: "Bayanan kamfani",
        objective: "O2",
        notYet: "Babu UEI ko lambobin NAICS, ko tana nuna bayanan banki ko EIN.",
        meets: "Sunan doka, UEI, lambobin NAICS, takardun shaida da hanyoyin tuntuɓa, ba tare da lambobin sirri ba.",
        exceeds: "An duba babbar lambar NAICS da ma'aunin girma."
      },
      {
        name: "Damar da ta dace",
        objective: "O4",
        notYet: "Ba a sami dama ba, ko ba ta dace da lambar NAICS da ke kan takardar ba.",
        meets: "Dama ɗaya ta gaske a SAM.gov ko Cal eProcure da ta dace da lambar NAICS da ke kan takardar.",
        exceeds: "An ajiye binciken kuma an rubuta shawarar yin tayi ko a'a."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Kasuwancin da ke da rajistar SAM.gov mai aiki cikin kwanaki 60 (binciken biyo baya)",
      "Kasuwancin da suka nemi takardar shaidar SBA ko ta California, ko suka aika tayinsu na farko ko tayin aiki a ƙarƙashin babban ɗan kwangila",
      "Kwangiloli ko ƙananan kwangiloli da aka samu cikin watanni 12, kamar yadda masu koyo ko abokan aiki suka bayar da rahoto"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai intanet",
      "Sunan doka na kasuwancinku, adireshi, EIN da bayanan banki, ana rubuta su a SAM.gov kaɗai",
      "Mataimakin AI kyauta don gajarta layukan takardar bayanin iyawa",
      "Kusan minti 60 gaba ɗaya, da ƙarin lokaci don kammala rajistar ta gaske"
    ],
    facilitatorNotes: [
      "Ku haɗa kai da APEX Accelerator ko SB/DVBE Advocate na yankinku don amsa tambayoyi kan rajista da takardun shaida.",
      "Ku nuna misalin gaske na imel ɗin zambar rajista ta kuɗi don masu koyo su iya gane shi.",
      "Ku tunatar da masu koyo kada su taɓa rubuta bayanan banki ko EIN ɗinsu a cikin kayan AI ko imel.",
      "Ku yi amfani da takardar neman tayi ta jama'a ta gaske don atisayen yin tayi ko a'a, kuma ku sa masu koyo su gina jerin abubuwan umarni tare.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
