"use strict";

// Koach Learn course (Swahili translation of shared/real-estate-license-prep.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Kozi hii inahusu leseni za mawakala wa nyumba na ardhi nchini Marekani; majina ya ofisi, fomu na sheria za Marekani yamebaki kama yalivyo.

const SRC = {
  arello: { name: "ARELLO (Chama cha Maafisa wa Sheria za Leseni za Nyumba na Ardhi): Ofisi za udhibiti", url: "https://arello.org/resources/regulatory-agencies/" },
  caDre: { name: "California Department of Real Estate: Masharti ya leseni ya salesperson", url: "https://www.dre.ca.gov/Examinees/RequirementsSales.html" },
  txTrec: { name: "Texas Real Estate Commission: Kuwa sales agent", url: "https://www.trec.texas.gov/become-licensed/sales-agent" },
  hudFha: { name: "HUD: Muhtasari wa Fair Housing Act (sheria ya haki sawa katika makazi)", url: "https://www.hud.gov/helping-americans/fair-housing-act-overview" },
  cfpbLe: { name: "CFPB: Loan Estimate ni nini?", url: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-loan-estimate-en-1995/" },
  cfpbCd: { name: "CFPB: Closing Disclosure ni nini?", url: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-closing-disclosure-en-1983/" },
  cfpbHome: { name: "CFPB: Kununua nyumba (Owning a Home)", url: "https://www.consumerfinance.gov/owning-a-home/" }
};

module.exports = {
  id: "real-estate-license-prep-sw",
  lang: "sw",
  translationOf: "real-estate-license-prep",
  category: "Workforce Development",
  name: "Maandalizi ya Mtihani wa Leseni ya Wakala wa Nyumba na Ardhi",
  skills: "Kupata hatua za leseni za jimbo lako, Kutumia maneno ya mali na umiliki, Kutumia sheria za uwakala na haki sawa katika makazi, Kufuata mkataba hadi kukamilisha mauzo, Kutatua hesabu za mtihani, Kuandaa mpango wa masomo na mtihani wenye tarehe",
  outcome: "kupata hatua za leseni ya wakala wa nyumba na ardhi za jimbo lako kwenye ukurasa rasmi, kueleza mawazo makuu yanayopimwa kwenye mtihani (mali, uwakala, haki sawa katika makazi, mikataba na kukamilisha mauzo), kutatua hesabu za kawaida za mtihani, na kufuata mpango wa masomo na mtihani wenye tarehe ulioandaa mwenyewe.",
  about: [
    "Kozi hii ni ya watu wazima wanaotaka kuwa salesperson mwenye leseni ya nyumba na ardhi (real estate; katika baadhi ya majimbo anaitwa sales agent): watu wanaobadilisha kazi, wanaoanza biashara ndogo, wanajeshi wastaafu (veterans), wazazi wanaorudi kazini na yeyote anayetaka kazi anayoweza kukua nayo. Mawakala wengi hufanya kazi kama wakandarasi huru chini ya broker mwenye leseni, kwa hiyo inawafaa pia wajasiriamali.",
    "Nchini Marekani, kila jimbo linatoa leseni kwa mawakala wa nyumba na ardhi. Ofisi ya udhibiti ya jimbo inaweka madarasa ya kabla ya leseni yanayohitajika, mtihani, ukaguzi wa historia na ada. Kozi hii INAKUANDAA; haitoi leseni na haichukui nafasi ya madarasa ya kabla ya leseni yaliyoidhinishwa na jimbo lako. Kila somo linakuonyesha mahali pa kukagua sheria za jimbo lako.",
    "Utajifunza mawazo makuu yanayopimwa katika mitihani mingi ya majimbo, utafanya mazoezi ya hesabu kwa namba za kubuni, na utamaliza na mpango wako wa masomo na mtihani wenye tarehe. Kila somo linachukua kama dakika tano na linaisha na kazi ya \"Jaribu sasa\" kwenye karatasi au simu. Kozi hii inafundisha jinsi biashara ya nyumba na ardhi inavyofanya kazi; haitoi ushauri wa kununua mali au kuwekeza."
  ],
  finalTask: "Andaa Mpango wako wa Masomo na Mtihani wa Leseni ya Wakala wa Nyumba na Ardhi (ukurasa mmoja au miwili): (1) ofisi ya udhibiti ya jimbo lako, ukurasa rasmi uliotumia, na hatua unazoorodhesha (umri, masomo ya kabla ya leseni, mtihani, alama za vidole au ukaguzi wa historia, broker mdhamini), kila moja na tarehe lengwa; (2) mada kutoka muhtasari wa maudhui ya mtihani wa jimbo lako, mada zako tatu dhaifu zaidi zikiwa zimewekwa alama na mpango kwa kila moja; (3) karatasi ya ukurasa mmoja ya sheria kuhusu wajibu wa uwakala, makundi saba yanayolindwa na sheria ya shirikisho ya haki sawa katika makazi, na sehemu za mkataba halali; (4) maswali matano ya mazoezi ya hesabu (kamisheni, loan-to-value, kodi ya mali, mgawanyo kwa siku, eneo) yakionyesha jinsi ulivyopata jibu; (5) ratiba ya masomo ya kila wiki hadi tarehe yako lengwa ya mtihani.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima nchini Marekani wanaojiandaa kwa leseni ya jimbo ya salesperson (sales agent) wa nyumba na ardhi: wanaobadilisha kazi, wamiliki wa biashara ndogo, wajasiriamali, wanajeshi wastaafu, wanaorudi kazini na vijana walio na zaidi ya miaka 18. Baadhi wamemaliza sekondari au GED tu; baadhi wanazungumza Kiingereza kama lugha ya pili.",
    startingPoint: "Wanaweza kusoma fomu rahisi na kufanya hesabu za msingi kwa kikokotoo. Wengi hawajui nani anatoa leseni kwa mawakala katika jimbo lao, mpangilio wa hatua za leseni, au maneno ya kisheria yanayotumika kwenye mtihani (fee simple, easement, fiduciary, consideration, proration).",
    gap: "Watu wengi hulipia madarasa au mtihani bila mpango, husahau hatua (kama alama za vidole au broker mdhamini), au hufeli mtihani kwa sababu ya maneno na hesabu. Mwanafunzi anayejua hatua rasmi, mawazo makuu na hesabu za mtihani, na mwenye mpango wenye tarehe, ana nafasi kubwa zaidi ya kufaulu na kuanza kazi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 7 hadi 8); kila neno la kisheria linaelezwa",
      "Vifaa: simu au kompyuta ya maktaba kusoma ukurasa rasmi wa jimbo; karatasi, kalamu na kikokotoo cha kawaida kwa kila kazi",
      "Muda: masomo ya dakika 4 hadi 6 yanayoingia kando ya kazi",
      "Sheria zinatofautiana kwa jimbo: saa za masomo, muundo wa mtihani, alama za kufaulu na ada zinakaguliwa kwenye ukurasa wa ofisi ya udhibiti ya jimbo, hazikisiwi kamwe",
      "Kozi hii inaandaa; haichukui nafasi ya masomo ya kabla ya leseni yaliyoidhinishwa na jimbo wala haitoi leseni",
      "Hakuna ushauri wa uwekezaji, wa kisheria wala wa kodi; hesabu zinatumia namba za kubuni kwa mazoezi tu"
    ],
    prerequisites: "Hakuna. Wanafunzi wanaotaka kukumbushwa asilimia wanaweza kuanza na kozi \"Hesabu za Kila Siku\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia tovuti rasmi ya ofisi ya udhibiti ya nyumba na ardhi ya jimbo lako", action: "kuorodhesha hatua za kupata leseni ya salesperson kwa mpangilio sahihi", standard: "bila kukosa hatua yoyote na ukitaja ukurasa rasmi" },
    { id: "O2", condition: "Ukipewa maelezo mafupi ya mali au hali ya umiliki", action: "kutambua neno sahihi la nyumba na ardhi kwa hali hiyo", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O3", condition: "Ukipewa hali inayomhusu mteja au mtu anayetafuta nyumba", action: "kuchagua kitendo kinachofuata wajibu wa uwakala na sheria ya haki sawa katika makazi", standard: "ukipata angalau hali 4 kati ya 5 sahihi na ukitaja sheria" },
    { id: "O4", condition: "Ukipewa mfano wa ofa ya kununua", action: "kukagua kwamba ina sehemu za mkataba halali na kupanga hatua za kukamilisha mauzo kwa mpangilio", standard: "bila sehemu inayokosekana na muda wa fomu za shirikisho ukiwa sahihi" },
    { id: "O5", condition: "Ukipewa swali la maneno la mtindo wa mtihani na kikokotoo", action: "kukokotoa kamisheni, loan-to-value, kodi ya mali, mgawanyo kwa siku na eneo", standard: "ukipata angalau 4 kati ya 5 sahihi na ukionyesha jinsi ulivyopata jibu" },
    { id: "O6", condition: "Ukitumia muhtasari wa maudhui ya mtihani wa jimbo lako na kalenda", action: "kuandika mpango wa masomo na mtihani wenye tarehe", standard: "unaojumuisha kila mada ya muhtasari na mada zako tatu dhaifu zaidi" }
  ],
  chapters: [
    {
      name: "Sura 1: Leseni na mawazo makuu",
      lessons: [
        {
          title: "Jinsi leseni ya nyumba na ardhi inavyofanya kazi katika jimbo lako",
          objectives: ["O1"],
          minutes: 5,
          goal: "Orodhesha hatua za jimbo lako za kupata leseni ya salesperson kutoka ukurasa rasmi.",
          text: [
            "Nchini Marekani hakuna leseni ya kitaifa ya nyumba na ardhi. Kila jimbo lina ofisi yake ya udhibiti, mara nyingi inaitwa real estate commission au department of real estate. Ofisi hiyo inaamua madarasa, mtihani, ukaguzi wa historia na ada. ARELLO, chama cha maafisa wa sheria za leseni, kina orodha ya ofisi hizi unayoweza kutumia kupata ya jimbo lako.",
            "Katika majimbo mengi hatua zinafanana: kutimiza sharti la umri, kumaliza madarasa ya kabla ya leseni yaliyoidhinishwa na jimbo, kutuma maombi, kupita ukaguzi wa historia (mara nyingi kwa alama za vidole), kufaulu mtihani, na kufanya kazi chini ya broker mwenye leseni. Mitihani mingi ina sehemu ya kitaifa na sehemu ya sheria za jimbo.",
            "Maelezo yanatofautiana sana. California inataka kozi tatu za kiwango cha chuo (Real Estate Principles, Real Estate Practice na kozi moja ya kuchagua). Texas inataka saa 180 za darasani katika kozi sita, alama za vidole kwa polisi wa jimbo, na mitihani inayotolewa na Pearson. Jimbo lako linaweza kuwa tofauti, kwa hiyo soma ukurasa wa jimbo lako kila wakati."
          ],
          steps: ["Tafuta ofisi ya udhibiti ya nyumba na ardhi ya jimbo lako (tumia orodha ya ARELLO au tafuta jina la jimbo lako pamoja na \"real estate commission\" na uangalie .gov).", "Fungua ukurasa wa leseni mpya ya salesperson au sales agent.", "Andika kila hatua kwa mpangilio: umri, madarasa, maombi, ukaguzi wa historia, mtihani, broker.", "Andika anwani ya ukurasa na tarehe uliyoukagua."],
          words: [["Ofisi ya udhibiti (real estate regulator)", "ofisi ya jimbo inayotoa leseni kwa mawakala na kusimamia sheria, kama real estate commission."], ["Salesperson (sales agent)", "leseni ya kwanza ya nyumba na ardhi; unafanya kazi chini ya broker."], ["Broker", "leseni ya juu zaidi; broker anaweza kuendesha ofisi ya nyumba na ardhi na kuwasimamia salespeople."], ["Masomo ya kabla ya leseni (pre-license education)", "madarasa yaliyoidhinishwa na jimbo unayopaswa kumaliza kabla ya mtihani au leseni."], ["Broker mdhamini (sponsoring broker)", "broker anayekubali kukusimamia ukishapata leseni."]],
          slides: [
            { title: "Leseni inatolewa na jimbo", bullets: ["Hakuna leseni ya kitaifa ya nyumba na ardhi", "Ofisi ya udhibiti ya jimbo lako inaweka madarasa, mtihani na ada", "ARELLO ina orodha ya ofisi hizi"] },
            { title: "Hatua katika majimbo mengi", bullets: ["Sharti la umri na madarasa ya kabla ya leseni", "Maombi na ukaguzi wa historia", "Mtihani (mara nyingi sehemu ya kitaifa na ya jimbo)", "Kufanya kazi chini ya broker mwenye leseni"] },
            { title: "Majimbo yanatofautiana: mifano miwili", bullets: ["California: kozi tatu za kiwango cha chuo", "Texas: saa 180 katika kozi sita, mitihani ya Pearson", "Soma ukurasa wa jimbo lako kila wakati"] }
          ],
          sources: [SRC.arello, SRC.caDre, SRC.txTrec],
          tryIt: "Tafuta ofisi ya udhibiti ya nyumba na ardhi ya jimbo lako. Kwenye karatasi, orodhesha kila hatua ya kupata leseni ya salesperson kwa mpangilio, pamoja na anwani ya ukurasa na tarehe ya leo. Zungushia duara hatua yoyote ambayo hukuijua.",
          youCanNow: "kupata ofisi ya udhibiti ya nyumba na ardhi ya jimbo lako na kuorodhesha hatua za kupata leseni ya salesperson kwa mpangilio.",
          quickCheck: [
            { objective: "O1", q: "Nani anaamua madarasa na mtihani wa leseni ya salesperson wa nyumba na ardhi?", options: ["Bodi ya kitaifa ya nyumba na ardhi", "Kampuni ya nyumba na ardhi unayojiunga nayo", "Ofisi ya udhibiti ya nyumba na ardhi ya jimbo lako", "Benki inayowakopesha wanunuzi"], answer: 2, why: "Leseni za nyumba na ardhi zinatolewa na kila jimbo, na ofisi ya udhibiti ya jimbo inaweka masharti." },
            { objective: "O1", q: "Tovuti uliyoipata inasema madarasa yanachukua saa 60. Unafanya nini?", options: ["Kukagua saa hizo kwenye ukurasa rasmi wa ofisi ya udhibiti ya jimbo lako", "Kuiamini ikiwa inaonekana ya kitaalamu", "Kulipia darasa la bei rahisi zaidi sasa hivi", "Kumuuliza rafiki aliye katika jimbo jingine"], answer: 0, why: "Saa zinatofautiana kwa jimbo na hubadilika, kwa hiyo ukurasa rasmi wa jimbo lako tu ndio wa kuaminika." }
          ]
        },
        {
          title: "Maneno ya mali na umiliki yanayotumika kwenye mtihani",
          objectives: ["O2"],
          minutes: 6,
          goal: "Tambua neno sahihi kwa hali ya mali au umiliki.",
          text: [
            "Real property (mali isiyohamishika) ni ardhi na kila kitu kilichoshikamana nayo, kama nyumba, uzio au mti, pamoja na haki zinazokuja nayo. Personal property (mali inayohamishika) inaweza kuhamishwa, kama kochi. Fixture ilikuwa mali inayohamishika lakini sasa imeshikamana, kama feni ya darini au mashine ya kuosha vyombo iliyojengwa ndani, kwa hiyo kwa kawaida inaenda pamoja na nyumba.",
            "Kumiliki real property kunamaanisha kushika kifurushi cha haki (bundle of rights): kuwa nayo, kuitumia, kuifurahia, kuwazuia wengine, na kuiuza au kuirithisha. Fee simple ndiyo aina kamili zaidi ya umiliki. Watu wawili au zaidi wanapomiliki pamoja, joint tenancy kwa kawaida inajumuisha haki ya kurithi kwa walio hai (right of survivorship: sehemu ya anayefariki inaenda kwa wamiliki wengine), lakini tenancy in common haina haki hiyo.",
            "Deed (hati ya uhamisho) inahamisha umiliki; title ni haki ya umiliki yenyewe. Vitu vinavyozuia au kuilemea mali vinaitwa encumbrances: lien (dai la pesa, kama mkopo wa nyumba au kodi ambayo haijalipwa) na easement (haki ya kutumia ardhi ya mtu mwingine, kama njia ya waya wa umeme). Ardhi inaelezwa kwa njia tatu kuu: metes and bounds, mfumo wa upimaji wa mistatili (rectangular au government survey), na lot and block kutoka ramani iliyosajiliwa."
          ],
          words: [["Real property", "ardhi, kilichoshikamana nayo, na haki za umiliki."], ["Fixture", "kitu kilichoshikamana na mali, kwa hiyo kinachukuliwa kuwa sehemu yake."], ["Fee simple", "aina kamili zaidi ya umiliki."], ["Right of survivorship", "mmiliki mwenza mmoja akifariki, sehemu yake inaenda kwa wamiliki wenza wengine."], ["Encumbrance", "kitu chochote kinachozuia au kuilemea mali, kama lien au easement."], ["Lien", "dai la kisheria la pesa juu ya mali."], ["Easement", "haki ya kutumia sehemu ya ardhi ya mtu mwingine kwa kusudi maalum."]],
          slides: [
            { title: "Real property dhidi ya personal property", bullets: ["Real: ardhi na kilichoshikamana nayo", "Personal: vitu vinavyohamishika", "Fixture: imeshikamana, kwa hiyo kwa kawaida inabaki"] },
            { title: "Umiliki", bullets: ["Kifurushi cha haki: kuwa nayo, kutumia, kufurahia, kuzuia, kuuza", "Fee simple: umiliki kamili zaidi", "Joint tenancy ina survivorship; tenancy in common haina"] },
            { title: "Title na vizuizi", bullets: ["Deed inahamisha umiliki; title ni umiliki wenyewe", "Lien: dai la pesa", "Easement: haki ya kutumia ardhi ya mtu mwingine"] },
            { title: "Kueleza ardhi", bullets: ["Metes and bounds", "Upimaji wa mistatili (government survey)", "Lot and block kutoka ramani iliyosajiliwa"] }
          ],
          tryIt: "Tengeneza kadi 10 za kujifunzia kwenye karatasi: neno upande wa mbele, na maana yako rahisi pamoja na mfano mmoja upande wa nyuma (real property, personal property, fixture, fee simple, joint tenancy, tenancy in common, deed, title, lien, easement). Jipime mara mbili.",
          youCanNow: "kutaja neno sahihi la nyumba na ardhi kwa hali za kawaida za mali na umiliki.",
          quickCheck: [
            { objective: "O2", q: "Kampuni ya umeme ina haki ya kupitisha waya nyuma ya uwanja wa nyumba. Hii ni:", options: ["Fixture", "Fee simple", "Personal property", "Easement"], answer: 3, why: "Easement ni haki ya kutumia sehemu ya ardhi ya mtu mwingine kwa kusudi maalum." },
            { objective: "O2", q: "Dada wawili wanamiliki nyumba. Mmoja akifariki, sehemu yake inaenda kwa mwingine moja kwa moja. Kuna uwezekano mkubwa wanashika title kama:", options: ["Tenants in common", "Joint tenants", "Wapangaji", "Wenye lien"], answer: 1, why: "Joint tenancy kwa kawaida inajumuisha right of survivorship; tenancy in common haina." }
          ]
        },
        {
          title: "Wajibu wa uwakala na haki sawa katika makazi",
          objectives: ["O3"],
          minutes: 6,
          goal: "Chagua kitendo kinachofuata wajibu wa uwakala na sheria ya haki sawa katika makazi katika hali uliyopewa.",
          text: [
            "Unapomwakilisha mteja, wewe ni wakala wake na una wajibu wa uaminifu (fiduciary duties) kwake. Vitabu vingi vinaviorodhesha kama OLDCAR: Obedience (utii kwa maagizo halali), Loyalty (uaminifu), Disclosure (kueleza mambo muhimu), Confidentiality (kutunza siri), Accounting (kuhesabu pesa unazoshika) na Reasonable care (uangalifu wa kutosha). Sheria ya jimbo lako inaweka wajibu kamili na fomu za kueleza.",
            "Kumwakilisha mnunuzi na muuzaji katika mauzo moja kunaitwa dual agency. Baadhi ya majimbo yanaruhusu tu kwa ridhaa ya maandishi ya pande zote mbili, na baadhi yanaiwekea mipaka au yanaipiga marufuku. Kagua sheria za jimbo lako.",
            "Sheria ya shirikisho, Fair Housing Act, inakataza ubaguzi katika makazi kwa sababu ya rangi ya ngozi (race), rangi (color), asili ya taifa, dini, jinsia, hali ya familia (kama kuwa na watoto) au ulemavu. Majimbo na miji yanaweza kuongeza makundi mengine. Vitendo visivyo halali ni pamoja na steering (kuwaelekeza watu kwenda au kuepuka maeneo fulani kwa sababu ya kundi linalolindwa), blockbusting (kuwashinikiza wamiliki wauze kwa kuwaonya kwamba kundi fulani linahamia) na redlining (kukataa mikopo au bima katika maeneo fulani)."
          ],
          steps: ["Jiulize: mteja wangu ni nani, na nina wajibu gani kwake?", "Jiulize: je, ombi hili linamtendea mtu tofauti kwa sababu ya kundi linalolindwa?", "Kama ndiyo, usilifanye; eleza sheria kwa adabu.", "Andika kilichotokea na umwambie broker wako."],
          words: [["Wakala (agent)", "mtu aliyepewa mamlaka ya kutenda kwa niaba ya mwingine (mteja au principal)."], ["Fiduciary", "mtu aliye katika nafasi ya kuaminiwa ambaye lazima aweke maslahi ya mteja mbele."], ["Dual agency", "wakala mmoja au ofisi moja inayomwakilisha mnunuzi na muuzaji katika mauzo hayo hayo."], ["Kundi linalolindwa (protected class)", "kundi ambalo sheria inalilinda dhidi ya ubaguzi, kama rangi ya ngozi au ulemavu."], ["Steering", "kuwaelekeza watu kwenda au kuepuka maeneo fulani kwa sababu ya kundi linalolindwa; si halali."]],
          slides: [
            { title: "Wajibu kwa mteja wako (OLDCAR)", bullets: ["Utii, Uaminifu, Kueleza mambo muhimu", "Kutunza siri, Kuhesabu pesa, Uangalifu wa kutosha", "Sheria ya jimbo lako inaweka wajibu kamili"] },
            { title: "Dual agency", bullets: ["Kuwakilisha pande zote mbili katika mauzo moja", "Sheria zinatofautiana: ridhaa, mipaka au marufuku", "Kagua jimbo lako"] },
            { title: "Fair Housing Act: makundi 7", bullets: ["Rangi ya ngozi, rangi, asili ya taifa, dini", "Jinsia, hali ya familia, ulemavu", "Majimbo na miji yanaweza kuongeza mengine"] },
            { title: "Vitendo visivyo halali", bullets: ["Steering", "Blockbusting", "Redlining"] }
          ],
          sources: [SRC.hudFha],
          tryIt: "Andika hali tatu fupi ambapo muuzaji au mnunuzi anakuomba ufanye kitu kisicho cha haki (kwa mfano, \"Usionyeshe nyumba yangu kwa familia zenye watoto\"). Kwa kila moja, andika kundi linalolindwa linalohusika na sentensi moja ya adabu ambayo ungesema badala yake.",
          youCanNow: "kutumia wajibu wa uwakala na sheria ya haki sawa katika makazi kuchagua kitendo sahihi na wateja.",
          quickCheck: [
            { objective: "O3", q: "Muuzaji anasema, \"Onyesha nyumba yangu kwa watu wasio na watoto tu.\" Unafanya nini?", options: ["Kueleza kwamba hali ya familia inalindwa na lazima uionyeshe kwa kila mtu", "Kukubali, kwa kuwa muuzaji ni mteja wako", "Kuionyesha siku za kazi tu", "Kuwauliza wanunuzi wana watoto wangapi"], answer: 0, why: "Hali ya familia ni kundi linalolindwa chini ya Fair Housing Act, na utii unahusu maagizo halali tu." },
            { objective: "O3", q: "Muuzaji wako anakuambia bei ya chini kabisa atakayokubali. Mnunuzi anakuuliza bei hiyo. Wajibu upi unahusika?", options: ["Kuhesabu pesa (accounting)", "Kutunza siri (confidentiality)", "Kumweleza mnunuzi (disclosure)", "Kumtii mnunuzi (obedience)"], answer: 1, why: "Wakala anatunza siri za mteja, kama bei yake ya chini kabisa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Leseni na mawazo makuu",
        questions: [
          { objective: "O1", q: "Kwa kawaida ni hatua ipi ya KWANZA kuelekea leseni ya salesperson?", options: ["Kujiunga na ofisi ya broker mdhamini", "Kufanya mtihani wa jimbo", "Kupata mteja wako wa kwanza", "Kusoma masharti ya ofisi ya udhibiti ya jimbo lako"], answer: 3, why: "Unahitaji orodha rasmi ya hatua kabla ya kulipia madarasa au mtihani." },
          { objective: "O2", q: "Mashine ya kuosha vyombo iliyojengwa ndani na kushikamana na jiko kuna uwezekano mkubwa ni:", options: ["Personal property", "Fixture", "Easement", "Lien"], answer: 1, why: "Kitu kilichoshikamana na mali ni fixture na kwa kawaida kinaenda pamoja na nyumba." },
          { objective: "O2", q: "Bili ya kodi ya mali ambayo haijalipwa inaipa kaunti dai juu ya nyumba. Hii ni:", options: ["Lien", "Deed", "Fee simple", "Joint tenancy"], answer: 0, why: "Lien ni dai la kisheria la pesa juu ya mali." },
          { objective: "O3", q: "Wakala anamwambia mnunuzi, \"Utajisikia vizuri zaidi katika mtaa wenye watu wa dini yako.\" Hii ni:", options: ["Huduma nzuri kwa mteja", "Blockbusting", "Steering, ambayo si halali", "Redlining"], answer: 2, why: "Kuwaelekeza watu kwenda au kuepuka maeneo fulani kwa sababu ya kundi linalolindwa ni steering." },
          { objective: "O3", q: "Lipi SI kundi linalolindwa chini ya sheria ya shirikisho, Fair Housing Act?", options: ["Ulemavu", "Asili ya taifa", "Hali ya familia", "Timu ya michezo unayoipenda"], answer: 3, why: "Makundi saba ya shirikisho ni rangi ya ngozi, rangi, asili ya taifa, dini, jinsia, hali ya familia na ulemavu." }
        ]
      }
    },
    {
      name: "Sura 2: Mikataba, hesabu na mpango wako wa mtihani",
      lessons: [
        {
          title: "Mikataba na njia ya kukamilisha mauzo",
          objectives: ["O4"],
          minutes: 6,
          goal: "Kagua ofa ya kununua uone kama ina sehemu za mkataba halali, na upange hatua za kukamilisha mauzo.",
          text: [
            "Mkataba halali unahitaji: pande zenye uwezo wa kisheria kusaini (competent), ofa na kukubali (makubaliano ya pande zote), consideration (kitu chenye thamani kinachotolewa na kila upande), na kusudi halali. Mkataba wa kununua au kuuza nyumba au ardhi kwa kawaida lazima uwe wa maandishi ili utekelezwe kisheria; sheria hii inaitwa statute of frauds.",
            "Mkataba ni void (batili) ikiwa haukuwahi kuwa halali (kwa mfano, kusudi lisilo halali). Ni voidable ikiwa upande mmoja unaweza kuuvunja, kwa mfano mtoto mdogo alipousaini. Ofa nyingi za kununua zina contingencies (masharti), kama kupata mkopo au ukaguzi mzuri wa nyumba, na earnest money, amana inayoonyesha kwamba mnunuzi yuko makini.",
            "Njia ya kawaida ni: ofa, kukubali, kufungua escrow au wakala wa kukamilisha mauzo (closing agent), ukaguzi wa nyumba, tathmini ya thamani (appraisal) na idhini ya mkopo, ukaguzi wa mwisho (walk-through), na kukamilisha mauzo (closing). Sheria za shirikisho zinamlinda mkopaji: mkopeshaji anatoa Loan Estimate ndani ya siku tatu za kazi baada ya maombi ya mkopo, na Closing Disclosure angalau siku tatu za kazi kabla ya closing, ili mnunuzi azilinganishe."
          ],
          steps: ["Kagua kwamba pande zimetajwa na zina uwezo wa kusaini.", "Kagua kwamba kuna ofa iliyo wazi na kukubali kulikosainiwa.", "Kagua bei, earnest money na kile kila upande unatoa (consideration).", "Kagua kwamba ni wa maandishi na una kusudi halali.", "Orodhesha contingencies na tarehe zake za mwisho.", "Panga hatua za kukamilisha mauzo kwa mpangilio, pamoja na muda wa Loan Estimate na Closing Disclosure."],
          words: [["Consideration", "kitu chenye thamani kinachotolewa na kila upande, kama pesa au ahadi."], ["Statute of frauds", "sheria kwamba mikataba ya nyumba na ardhi kwa kawaida lazima iwe ya maandishi ili itekelezwe."], ["Void / voidable", "void: haukuwahi kuwa mkataba halali; voidable: ni halali, lakini upande mmoja unaweza kuuvunja."], ["Contingency", "sharti ambalo lazima litimie ili mauzo yaendelee, kama idhini ya mkopo."], ["Earnest money", "amana anayoweka mnunuzi kuonyesha kwamba yuko makini."], ["Closing Disclosure", "fomu ya mwisho ya mkopeshaji yenye masharti ya mkopo na gharama za kukamilisha mauzo."]],
          slides: [
            { title: "Sehemu za mkataba halali", bullets: ["Pande zenye uwezo", "Ofa na kukubali", "Consideration na kusudi halali", "Wa maandishi kwa nyumba na ardhi"] },
            { title: "Void, voidable, contingent", bullets: ["Void: haukuwahi kuwa halali", "Voidable: upande mmoja unaweza kuuvunja", "Contingency: sharti, kama idhini ya mkopo"] },
            { title: "Njia ya kukamilisha mauzo", bullets: ["Ofa, kukubali, escrow", "Ukaguzi, tathmini ya thamani, idhini ya mkopo", "Walk-through, kisha closing"] },
            { title: "Fomu za mkopo za shirikisho (CFPB)", bullets: ["Loan Estimate: ndani ya siku 3 za kazi baada ya kuomba", "Closing Disclosure: siku 3+ za kazi kabla ya closing"] }
          ],
          sources: [SRC.cfpbLe, SRC.cfpbCd, SRC.cfpbHome],
          tryIt: "Andika ofa fupi ya kubuni ya kununua (majina, anwani, bei, earnest money, contingency moja, sahihi). Kisha uikague kwa hatua sita hapo juu na uorodheshe kinachokosekana. Malizia kwa hatua za kukamilisha mauzo kwa mpangilio.",
          youCanNow: "kukagua ofa ya kununua uone kama ina sehemu za mkataba halali na kupanga hatua za kukamilisha mauzo kwa mpangilio.",
          quickCheck: [
            { objective: "O4", q: "Mnunuzi na muuzaji wanakubaliana kuuza nyumba kwa simu tu. Chini ya statute of frauds makubaliano haya:", options: ["Yanatekelezwa kikamilifu", "Yanatekelezwa baada ya wiki moja", "Kwa kawaida hayatekelezwi hadi yawe ya maandishi", "Si halali"], answer: 2, why: "Mikataba ya nyumba na ardhi kwa kawaida lazima iwe ya maandishi ili itekelezwe." },
            { objective: "O4", q: "Mkopaji lazima apate Closing Disclosure lini?", options: ["Angalau siku tatu za kazi kabla ya closing", "Siku ya closing", "Ndani ya mwezi mmoja baada ya closing", "Kabla ya kutoa ofa"], answer: 0, why: "CFPB inasema mkopeshaji anatoa Closing Disclosure angalau siku tatu za kazi kabla ya closing." }
          ]
        },
        {
          title: "Hesabu za mtihani wa nyumba na ardhi",
          objectives: ["O5"],
          minutes: 6,
          goal: "Kokotoa kamisheni, loan-to-value, kodi ya mali, mgawanyo kwa siku na eneo.",
          text: [
            "Kwa mazoezi tu: namba zote hapa ni za kubuni. Kamisheni: bei ya mauzo mara kiwango. Mauzo ya $300,000 kwa 6% ni $18,000. Ofisi iliyotangaza nyumba (listing office) ikipata nusu, hiyo ni $9,000; mgao wa wakala ukiwa 60%, wakala anapata $5,400.",
            "Loan-to-value (LTV) ni mkopo ukigawanywa kwa thamani. Mkopo wa $240,000 kwa nyumba ya $300,000 ni 0.80, au 80%. Kodi ya mali ni thamani iliyokadiriwa mara kiwango cha kodi: $200,000 mara 1.5% ni $3,000 kwa mwaka, au $250 kwa mwezi.",
            "Mgawanyo kwa siku (proration) unagawanya gharama kwa siku. Kodi ya mwaka ikiwa $3,650 na mwaka una siku 365, hiyo ni $10 kwa siku; muuzaji akimiliki nyumba siku 120 na mnunuzi akalipa bili baadaye, muuzaji anamdai mnunuzi $1,200. Eneo: urefu mara upana. Kiwanja cha futi 50 kwa futi 120 ni futi za mraba 6,000. Ekari moja ni futi za mraba 43,560. Kagua kama mtihani wako unatumia mwaka wa siku 360 au 365."
          ],
          steps: ["Soma swali na upigie mstari kile linachouliza.", "Andika fomula (sehemu = jumla mara kiwango).", "Badilisha asilimia kuwa desimali (6% = 0.06).", "Fanya hatua moja kwa wakati kwenye karatasi.", "Jiulize: je, jibu lina maana?"],
          words: [["Kamisheni (commission)", "malipo ya kuuza, kwa kawaida asilimia ya bei ya mauzo."], ["Mgao (split)", "jinsi kamisheni inavyogawanywa kati ya ofisi au kati ya broker na wakala."], ["Loan-to-value (LTV)", "kiasi cha mkopo kikigawanywa kwa thamani ya mali, kama asilimia."], ["Thamani iliyokadiriwa (assessed value)", "thamani ambayo serikali ya eneo inatumia kukokotoa kodi ya mali."], ["Proration", "kugawanya gharama kati ya mnunuzi na muuzaji kwa siku ambazo kila mmoja anamiliki mali."]],
          slides: [
            { title: "Kamisheni", bullets: ["Bei ya mauzo x kiwango", "$300,000 x 6% = $18,000", "Nusu kwa listing office = $9,000; mgao wa 60% = $5,400"] },
            { title: "LTV na kodi ya mali", bullets: ["LTV = mkopo / thamani: $240,000 / $300,000 = 80%", "Kodi = thamani iliyokadiriwa x kiwango: $200,000 x 1.5% = $3,000"] },
            { title: "Proration na eneo", bullets: ["$3,650 / 365 = $10 kwa siku; siku 120 = $1,200", "Futi 50 x futi 120 = futi za mraba 6,000", "Ekari 1 = futi za mraba 43,560"] },
            { title: "Njia", bullets: ["Pigia mstari swali", "Andika fomula, tumia desimali", "Kagua kwamba jibu lina maana"] }
          ],
          tryIt: "Kwa mazoezi tu. Tatua kwenye karatasi kwa kikokotoo: (1) kamisheni ya 5% kwa $250,000; (2) LTV ya mkopo wa $180,000 kwa nyumba ya $200,000; (3) kodi ya mwaka kwa thamani iliyokadiriwa ya $150,000 kwa 2%; (4) sehemu ya muuzaji ya kodi ya mwaka ya $1,825 kwa siku 73 (mwaka wa siku 365); (5) futi za mraba katika kiwanja cha futi 80 kwa futi 100. Majibu: $12,500; 90%; $3,000; $365; 8,000.",
          youCanNow: "kutatua hesabu za kawaida za mtihani wa nyumba na ardhi na kuonyesha jinsi ulivyopata jibu.",
          quickCheck: [
            { objective: "O5", q: "Kwa mazoezi tu: LTV ya mkopo wa $270,000 kwa nyumba ya $300,000 ni ngapi?", options: ["80%", "85%", "111%", "90%"], answer: 3, why: "$270,000 ukigawanya kwa $300,000 ni 0.90, au 90%." },
            { objective: "O5", q: "Kwa mazoezi tu: kiwanja ni futi 100 kwa futi 150. Kina futi za mraba ngapi?", options: ["250", "15,000", "1,500", "43,560"], answer: 1, why: "Eneo ni urefu mara upana: 100 mara 150 ni futi za mraba 15,000." }
          ]
        },
        {
          title: "Mpango wako wa masomo na mtihani",
          objectives: ["O6", "O1"],
          minutes: 5,
          goal: "Andika mpango wa masomo na mtihani wenye tarehe kutoka muhtasari wa maudhui ya mtihani wa jimbo lako.",
          text: [
            "Jimbo lako au kampuni yake ya mitihani inachapisha candidate handbook (kitabu cha mwongozo kwa watahiniwa). Kwa kawaida kina muhtasari wa maudhui ya mtihani (mada na idadi ya maswali kwa kila moja), sheria za siku ya mtihani, kitambulisho unachopaswa kuleta na jinsi ya kupanga tarehe. Kipakue kutoka tovuti rasmi, si kutoka nakala ambayo mtu ameiweka mtandaoni.",
            "Geuza muhtasari kuwa mpango. Orodhesha kila mada, jipe alama 1 hadi 3 kwa kila moja, na uweke alama mada zako tatu dhaifu zaidi. Weka tarehe kubwa kwenye kalenda ukirudi nyuma kutoka tarehe lengwa ya mtihani: kumaliza madarasa, kutuma maombi, kutoa alama za vidole, kupanga mtihani. Kisha weka vipindi vifupi vya kusoma kila wiki, pamoja na maswali ya mazoezi na hesabu kila wiki.",
            "Mitihani ya mazoezi inasaidia zaidi unapopitia kila jibu ulilokosea na kuandika kwa nini jibu sahihi ni sahihi. Jihadhari na tovuti yoyote inayoahidi \"kufaulu kwa uhakika\" au inayouza maswali halisi ya mtihani; huo ni ulaghai au udanganyifu, na majimbo yanaweza kukunyima leseni kwa sababu hiyo."
          ],
          steps: ["Pakua candidate handbook ya jimbo lako kutoka tovuti rasmi.", "Nakili mada za muhtasari wa maudhui ya mtihani.", "Jipe alama 1 hadi 3 kwa kila mada; weka alama mada zako tatu dhaifu zaidi.", "Weka tarehe lengwa ya mtihani na urudi nyuma hadi kila hatua.", "Panga vipindi vya kusoma kila wiki vyenye maswali ya mazoezi na hesabu.", "Pitia kila jibu ulilokosea na uandike kwa nini jibu sahihi ni sahihi."],
          words: [["Candidate handbook", "mwongozo rasmi wa mtihani: mada, sheria, kitambulisho na kupanga tarehe."], ["Muhtasari wa maudhui ya mtihani (exam content outline)", "orodha ya mada za mtihani na uzito wa kila moja."], ["Tarehe lengwa", "tarehe unayolenga kufanya mtihani; unapanga ukirudi nyuma kutoka hapo."]],
          slides: [
            { title: "Anza na mwongozo rasmi", bullets: ["Muhtasari wa maudhui ya mtihani", "Sheria za siku ya mtihani na kitambulisho", "Jinsi ya kupanga tarehe"] },
            { title: "Jenga mpango", bullets: ["Jipe alama 1 hadi 3 kwa kila mada", "Weka alama mada zako tatu dhaifu zaidi", "Rudi nyuma kutoka tarehe lengwa ya mtihani"] },
            { title: "Fanya mazoezi kwa busara", bullets: ["Maswali ya mazoezi na hesabu kila wiki", "Pitia kila jibu ulilokosea", "Hakuna \"kufaulu kwa uhakika\" wala maswali yaliyovujishwa"] }
          ],
          sources: [SRC.arello, SRC.txTrec, SRC.caDre],
          tryIt: "Kazi ya mwisho: andaa Mpango wako wa Masomo na Mtihani wa Leseni ya Wakala wa Nyumba na Ardhi: hatua za jimbo lako zenye tarehe na ukurasa rasmi, mada za muhtasari na mada zako tatu dhaifu zaidi zikiwa na alama, karatasi ya sheria kuhusu uwakala, haki sawa katika makazi na mikataba, maswali matano ya hesabu yaliyotatuliwa, na ratiba ya kila wiki hadi tarehe ya mtihani wako.",
          youCanNow: "kugeuza muhtasari wa mtihani wa jimbo lako kuwa mpango wa masomo na mtihani wenye tarehe na kuufuata.",
          quickCheck: [
            { objective: "O6", q: "Orodha ya mada katika mpango wako wa masomo inapaswa kutoka wapi?", options: ["Chapisho kwenye mitandao ya kijamii", "Muhtasari rasmi wa maudhui ya mtihani wa jimbo lako", "Mada zozote unazozipenda zaidi", "Tovuti inayouza maswali halisi ya mtihani"], answer: 1, why: "Muhtasari rasmi wa maudhui unaonyesha kile ambacho mtihani unapima kweli." },
            { objective: "O6", q: "Unaendelea kukosea maswali ya proration kwenye mitihani ya mazoezi. Mpango bora ni upi?", options: ["Kuiacha proration; ni maswali machache tu", "Kufanya mtihani mapema zaidi", "Kuiwekea alama kama mada dhaifu na kuongeza mazoezi ya hesabu kila wiki", "Kununua kifurushi cha \"kufaulu kwa uhakika\""], answer: 2, why: "Kuweka alama mada dhaifu na kuzifanyia mazoezi kila wiki kunaziba pengo kabla ya siku ya mtihani." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Mikataba, hesabu na mpango wako wa mtihani",
        questions: [
          { objective: "O4", q: "Kipi SI mojawapo ya sehemu za mkataba halali?", options: ["Ofa na kukubali", "Consideration", "Muhuri wa mthibitishaji (notary) kwenye kila ukurasa", "Kusudi halali"], answer: 2, why: "Mkataba halali unahitaji pande zenye uwezo, makubaliano ya pande zote, consideration na kusudi halali; muhuri kwenye kila ukurasa si mojawapo." },
          { objective: "O4", q: "Ofa ya kununua inasema mauzo yataendelea tu ikiwa mnunuzi atapata mkopo. Hii ni:", options: ["Contingency", "Lien", "Easement", "Kamisheni"], answer: 0, why: "Contingency ni sharti ambalo lazima litimie ili mauzo yaendelee." },
          { objective: "O5", q: "Kwa mazoezi tu: mauzo ya $400,000 kwa kamisheni ya 5% ni:", options: ["$2,000", "$4,000", "$200,000", "$20,000"], answer: 3, why: "$400,000 mara 0.05 ni $20,000." },
          { objective: "O5", q: "Kwa mazoezi tu: thamani iliyokadiriwa ya $250,000 kwa kiwango cha kodi cha 2% inaleta kodi ya mwaka ya:", options: ["$5,000", "$500", "$50,000", "$2,500"], answer: 0, why: "$250,000 mara 0.02 ni $5,000." },
          { objective: "O6", q: "Njia bora ya kutumia mtihani wa mazoezi ni ipi?", options: ["Kukariri majibu tu", "Kupitia kila jibu ulilokosea na kuandika kwa nini sahihi ni sahihi", "Kuufanya mara moja na kuacha", "Kusambaza maswali mtandaoni"], answer: 1, why: "Kupitia kwa nini kila jibu ni sahihi kunajenga uelewa ambao mtihani halisi unapima." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Maandalizi ya Mtihani wa Leseni ya Wakala wa Nyumba na Ardhi",
    questions: [
      { objective: "O1", q: "Nani anatoa leseni za salesperson wa nyumba na ardhi nchini Marekani?", options: ["Serikali ya shirikisho", "Ofisi ya udhibiti ya nyumba na ardhi ya kila jimbo", "National Association of Realtors", "Benki ya eneo lako"], answer: 1, why: "Leseni zinatolewa na jimbo, kupitia ofisi ya udhibiti ya nyumba na ardhi ya jimbo." },
      { objective: "O1", q: "Katika majimbo mengi, hatua ipi inakuja kabla ya kuweza kufanya kazi kama salesperson?", options: ["Kumiliki nyumba", "Kuuza nyumba tano", "Kufaulu mtihani wa jimbo na ukaguzi wa historia", "Kuwa broker"], answer: 2, why: "Majimbo mengi yanataka mtihani na ukaguzi wa historia, kisha kazi chini ya broker." },
      { objective: "O1", q: "Salesperson lazima afanye kazi chini ya:", options: ["Broker mwenye leseni", "Benki", "Mkaguzi wa nyumba", "Kampuni ya title"], answer: 0, why: "Salespeople wanasimamiwa na broker mwenye leseni." },
      { objective: "O2", q: "Kipi ni personal property?", options: ["Tanuru la kupasha joto lililojengwa ndani", "Mti uliopo uwanjani", "Ardhi", "Sofa sebuleni"], answer: 3, why: "Personal property inahamishika; sofa haijashikamana na nyumba." },
      { objective: "O2", q: "Aina kamili zaidi ya umiliki ni:", options: ["Easement", "Fee simple", "Lien", "Ukodishaji (lease)"], answer: 1, why: "Fee simple inampa mmiliki kifurushi kamili zaidi cha haki." },
      { objective: "O2", q: "Njia ipi ya kueleza ardhi inatumia ramani iliyosajiliwa ya eneo lililogawanywa viwanja?", options: ["Metes and bounds", "Fee simple", "Lot and block", "Proration"], answer: 2, why: "Lot and block inarejelea viwanja kwenye ramani iliyosajiliwa ya eneo lililogawanywa." },
      { objective: "O2", q: "Wamiliki wenza ambao sehemu zao HAZIENDI moja kwa moja kwa wengine wanapofariki wanashika title kama:", options: ["Tenants in common", "Joint tenants", "Brokers", "Wenye lien"], answer: 0, why: "Tenancy in common haina right of survivorship." },
      { objective: "O3", q: "Kipi ni mojawapo ya wajibu wa uaminifu (fiduciary) wa wakala kwa mteja?", options: ["Kuuambia upande mwingine bei ya chini kabisa ya mteja", "Uaminifu (loyalty)", "Kumchagulia mteja mkopeshaji", "Kupuuza maagizo halali ya mteja"], answer: 1, why: "Uaminifu ni wajibu mkuu wa fiduciary (OLDCAR)." },
      { objective: "O3", q: "Kuwaambia wamiliki wauze haraka kwa sababu kundi fulani linahamia kunaitwa:", options: ["Steering", "Redlining", "Dual agency", "Blockbusting"], answer: 3, why: "Blockbusting inawashinikiza wamiliki wauze kwa kuchochea hofu kuhusu kundi linalohamia." },
      { objective: "O3", q: "Kukataa mikopo katika eneo kwa sababu ya watu wanaoishi huko kunaitwa:", options: ["Redlining", "Proration", "Steering", "Escrow"], answer: 0, why: "Redlining ni kukataa mikopo au bima katika maeneo fulani; si halali." },
      { objective: "O3", q: "Mnunuzi anayetumia kiti cha magurudumu anaomba kuona nyumba. Chini ya Fair Housing Act wewe:", options: ["Unaonyesha nyumba zenye njia za mteremko tu bila kuuliza", "Unakataa kwa sababu ya ngazi", "Unaonyesha nyumba kwa masharti sawa na mtu mwingine yeyote", "Unaomba barua ya daktari"], answer: 2, why: "Ulemavu ni kundi linalolindwa, kwa hiyo mnunuzi anatendewa sawa." },
      { objective: "O4", q: "Mkataba uliosainiwa na mtoto mdogo ambao mtoto huyo anaweza kuuvunja ni:", options: ["Void", "Voidable", "Unatekelezwa kikamilifu", "Lien"], answer: 1, why: "Voidable inamaanisha halali, lakini upande mmoja unaweza kuuvunja." },
      { objective: "O4", q: "Ndani ya siku ngapi za kazi baada ya maombi ya mkopo mkopeshaji lazima atoe Loan Estimate?", options: ["Tatu", "Kumi", "Thelathini", "Moja"], answer: 0, why: "CFPB inasema Loan Estimate inakuja ndani ya siku tatu za kazi baada ya maombi." },
      { objective: "O4", q: "Earnest money ni:", options: ["Kamisheni ya wakala", "Kodi ya mali ya mwaka", "Lien juu ya nyumba", "Amana inayoonyesha kwamba mnunuzi yuko makini"], answer: 3, why: "Earnest money ni amana ya nia njema ya mnunuzi." },
      { objective: "O5", q: "Kwa mazoezi tu: wakala anapata mgao wa 50% wa kamisheni ya $9,000. Wakala anapokea:", options: ["$900", "$9,000", "$4,500", "$18,000"], answer: 2, why: "$9,000 mara 0.50 ni $4,500." },
      { objective: "O5", q: "Kwa mazoezi tu: mkopo wa $160,000 kwa nyumba ya $200,000 una LTV ya:", options: ["60%", "125%", "40%", "80%"], answer: 3, why: "$160,000 ukigawanya kwa $200,000 ni 0.80, au 80%." },
      { objective: "O5", q: "Kwa mazoezi tu: kodi ya mwaka ni $3,650 (mwaka wa siku 365). Muuzaji alimiliki nyumba siku 30. Sehemu ya muuzaji ni:", options: ["$300", "$365", "$100", "$3,000"], answer: 0, why: "$3,650 ukigawanya kwa 365 ni $10 kwa siku; siku 30 ni $300." },
      { objective: "O5", q: "Ekari moja ina futi za mraba ngapi?", options: ["5,280", "43,560", "10,000", "640"], answer: 1, why: "Ekari moja ni futi za mraba 43,560." },
      { objective: "O6", q: "Candidate handbook ya jimbo lako kwa kawaida inakuambia:", options: ["Maswali kamili ya mtihani", "Nyumba ipi ununue", "Muhtasari wa maudhui ya mtihani na sheria za siku ya mtihani", "Mshahara wako wa baadaye"], answer: 2, why: "Mwongozo unatoa muhtasari, sheria, mahitaji ya kitambulisho na kupanga tarehe." },
      { objective: "O6", q: "Mpango mzuri wa masomo unaanza kwa:", options: ["Kuchagua tarehe lengwa ya mtihani na kurudi nyuma hadi kila hatua", "Kununua kozi ya bei ghali zaidi", "Kusoma mada unazozipenda tu", "Kusubiri hadi ujisikie tayari"], answer: 0, why: "Kupanga ukirudi nyuma kutoka tarehe lengwa kunaweka kila hatua na kipindi cha kusoma kwenye kalenda." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 4, 7, 8, 12, 14, 17, 19] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na uikague tena.",
    criteria: [
      { name: "Hatua rasmi", objective: "O1", notYet: "Hatua zinakosekana, haziko kwa mpangilio, au zimenakiliwa kutoka tovuti isiyo rasmi.", meets: "Kila hatua kutoka ukurasa wa ofisi ya udhibiti ya jimbo imeorodheshwa kwa mpangilio, pamoja na anwani ya ukurasa na tarehe ya kukagua.", exceeds: "Pia anaandika gharama na nyaraka za kila hatua kama ukurasa rasmi unavyozieleza." },
      { name: "Maneno makuu", objective: "O2", notYet: "Maneno kadhaa ya mali au umiliki si sahihi au yanakosekana kwenye karatasi ya sheria.", meets: "Karatasi ya sheria inaeleza kwa usahihi maneno makuu ya mali na umiliki kwa maneno rahisi.", exceeds: "Kila neno lina mfano wa maisha halisi aliobuni mwanafunzi mwenyewe." },
      { name: "Uwakala na haki sawa katika makazi", objective: "O3", notYet: "Wajibu wa fiduciary au makundi saba yanayolindwa na sheria ya shirikisho yanakosekana au si sahihi.", meets: "Anaorodhesha wajibu na makundi yote saba ya shirikisho, pamoja na steering, blockbusting na redlining.", exceeds: "Anaongeza makundi mengine yanayolindwa katika jimbo au jiji la mwanafunzi, pamoja na chanzo." },
      { name: "Mkataba na kukamilisha mauzo", objective: "O4", notYet: "Sehemu za mkataba au hatua za kukamilisha mauzo zinakosekana, au muda wa Loan Estimate na Closing Disclosure si sahihi.", meets: "Anaorodhesha kila sehemu ya mkataba halali na hatua za kukamilisha mauzo kwa mpangilio, na muda sahihi wa fomu hizo.", exceeds: "Anaongeza contingencies na tarehe zake za mwisho kutoka mfano wa ofa." },
      { name: "Hesabu", objective: "O5", notYet: "Maswali sahihi ni chini ya 4 kati ya 5, au hajaonyesha jinsi alivyopata jibu.", meets: "Angalau maswali 4 kati ya 5 ni sahihi na ameonyesha jinsi alivyopata jibu.", exceeds: "Yote 5 ni sahihi, pamoja na swali moja la ziada aliloandika na kulitatua mwanafunzi mwenyewe." },
      { name: "Mpango wenye tarehe", objective: "O6", notYet: "Hakuna tarehe lengwa, au mada hazitoki kwenye muhtasari rasmi wa maudhui.", meets: "Unajumuisha kila mada ya muhtasari, unaweka alama mada tatu dhaifu zaidi na una vipindi vya kusoma kila wiki hadi tarehe lengwa.", exceeds: "Unajumuisha tarehe za kupitia mitihani ya mazoezi na tarehe ya akiba ya mtihani." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaomaliza masomo ya kabla ya leseni yaliyoidhinishwa na jimbo ndani ya miezi 6 (utafiti wa kufuatilia)",
      "Wanafunzi wanaofaulu mtihani wa nyumba na ardhi wa jimbo, na katika jaribio la ngapi (wanavyoripoti wenyewe)",
      "Wanafunzi wenye leseni wanaofanya kazi chini ya broker mdhamini ndani ya miezi 12"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta ya kusoma ukurasa rasmi wa ofisi ya udhibiti ya jimbo na candidate handbook",
      "Karatasi, kalamu na kikokotoo cha kawaida",
      "Kalenda (ya karatasi au ya simu) kwa mpango wa masomo na mtihani",
      "Kama dakika 60 hadi 75 kwa jumla, katika vipindi vifupi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Ikiwa kikundi kinatoka jimbo moja, fungueni ukurasa wa ofisi ya udhibiti ya jimbo hilo pamoja katika Somo la 1 na mtumie candidate handbook yake katika Somo la 6.",
      "Eleza wazi kwamba kozi hii inawaandaa wanafunzi; haichukui nafasi ya madarasa ya kabla ya leseni yaliyoidhinishwa na jimbo wala haitoi leseni.",
      "Fanyeni somo la hesabu kwa jozi ubaoni: mmoja anatatua, mwingine anakagua hatua.",
      "Tumieni maigizo kwa hali za haki sawa katika makazi; simameni na mtaje sheria kila mara.",
      "Usitoe ushauri kuhusu kununua mali, kuwekeza, mikopo au kodi; waelekeze wanafunzi kwenye vyanzo rasmi na wataalamu wenye leseni.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
