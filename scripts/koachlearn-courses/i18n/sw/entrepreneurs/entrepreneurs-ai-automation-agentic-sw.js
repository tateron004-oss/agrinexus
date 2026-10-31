"use strict";

// Koach Learn course (Swahili translation of entrepreneurs/entrepreneurs-ai-automation-agentic.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "entrepreneurs-ai-automation-agentic-sw",
  lang: "sw",
  translationOf: "entrepreneurs-ai-automation-agentic",
  category: "Entrepreneurs",
  name: "Uendeshaji Kiotomatiki kwa AI na Mawakala wa AI",
  skills: "Kuchora mtiririko wa kazi, Kufikiri kwa kichocheo na kitendo, Kujenga mfumo wa kiotomatiki bila kuandika msimbo, Kuongeza hatua ya AI, Kuweka mipaka kwa mawakala wa AI, Kufuatilia na kurekebisha mifumo ya kiotomatiki",
  outcome: "kuchora mchakato mmoja wa biashara unaorudiwa, kuujengea mfumo wa kiotomatiki unaofanya kazi bila kuandika msimbo wenye hatua ya AI, kuongeza hatua ya idhini ya mtu, na kuujaribu na kuufuatilia ili ukikwama usilete madhara.",
  about: [
    "Uendeshaji kiotomatiki (automation) maana yake kompyuta inakufanyia kazi inayorudiwa kitu fulani kinapotokea: fomu imejazwa, barua pepe imefika, oda imelipiwa. AI inaongeza uwezo wa kusoma, kupanga na kuandika ndani ya kazi hiyo. Zana za \"agentic\" (mawakala wa AI) zinaenda mbali zaidi: unazipa lengo, nazo zinapanga na kuchukua hatua kadhaa zenyewe.",
    "Kozi hii ni kwa wamiliki wa biashara wanaotaka kuacha kunakili na kubandika taarifa zilezile siku nzima. Utachora mchakato, utajifunza kufikiri kwa kichocheo na kitendo, utajenga mfumo halisi wa kiotomatiki kwa zana isiyohitaji msimbo (kama Zapier, Make au Microsoft Power Automate), utaongeza hatua ya AI, na utaweka mipaka ili hakuna jambo muhimu linalotokea bila idhini yako.",
    "Kila somo linachukua kama dakika tano pamoja na kazi ya kufanya kwa vitendo. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Huduma za zana na mipaka ya mpango wa bure hubadilika mara kwa mara, kwa hiyo kagua kurasa za bei na za msaada za kila zana yenyewe."
  ],
  finalTask: "Jenga na ujaribu mfumo mmoja wa kiotomatiki kwa biashara yako, kwa mfano: mteja anapojaza fomu yako ya maswali, ongeza ombi lake kwenye spreadsheet (jedwali), AI iandike rasimu ya jibu, na rasimu itumwe kwako uidhinishe kabla chochote hakijaenda kwa mteja. Andika rekodi ya ukurasa mmoja: ramani ya mtiririko wa kazi, kichocheo na vitendo, maagizo ya AI, hatua ya idhini, matokeo ya majaribio matatu na utakachokagua kila wiki.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wamiliki wa biashara ndogo wanaotumia saa nyingi kunakili taarifa zilezile kati ya fomu, barua pepe na spreadsheet, na wanataka kompyuta iwafanyie kazi hiyo.",
    startingPoint: "Wanatumia fomu za mtandaoni, barua pepe na spreadsheet, na wamewahi kutumia msaidizi wa AI. Wachache wamewahi kujenga mfumo wa kiotomatiki au kufikiria wakala wa AI anapaswa na hapaswi kufanya nini peke yake.",
    gap: "Kunakili mara kwa mara kunapoteza saa nyingi na kuleta makosa, lakini mifumo ya kiotomatiki na mawakala wanaofanya kazi bila mipaka wanaweza kutuma majibu yasiyo sahihi, kutumia pesa au kuvujisha taarifa za wateja. Wamiliki wanahitaji kujenga mfumo mmoja mdogo wenye hatua ya AI, hatua ya idhini, majaribio na ukaguzi wa kila wiki, ili uokoe muda na ukikwama usilete madhara.",
    constraints: [
      "Hakuna kuandika msimbo; maneno rahisi na mpango wa bure wa zana isiyohitaji msimbo",
      "Vifaa: kompyuta yenye zana ya fomu, spreadsheet na barua pepe",
      "Muda: kama dakika tano kwa kila somo pamoja na muda wa kujenga na kujaribu",
      "Huduma za zana na mipaka ya mpango wa bure hubadilika mara kwa mara; kagua kurasa za bei na za msaada za kila zana yenyewe",
      "Jaribu kwa taarifa za kubuni, na usiweke namba za kadi wala taarifa nyingine binafsi kwenye hatua za AI"
    ],
    prerequisites: "Kozi \"Zana za AI Ambazo Kila Mjasiriamali Anapaswa Kuzijua\", au uzoefu wa kutumia fomu za mtandaoni na spreadsheet."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa mchakato unaorudia kila wiki", action: "kuuchora kama hatua kutoka mwanzo hadi mwisho, ukiweka alama kila hatua kama kunakili, uamuzi au kuandika", standard: "ukiwa umesahihisha chochote ambacho AI ilikosea" },
    { id: "O2", condition: "Ukipewa ramani yako ya mtiririko wa kazi", action: "kuandika mtiririko huo kama kichocheo kimoja na orodha ya vitendo", standard: "ukiwa umeweka alama kitendo cha AI na hatua ya idhini" },
    { id: "O3", condition: "Ukitumia mpango wa bure wa zana isiyohitaji msimbo", action: "kujenga mfumo wa kiotomatiki unaohamisha majibu ya fomu kwenda kwenye spreadsheet na kukujulisha", standard: "ukiwa umejaribiwa kwa taarifa za kubuni na unafanya kazi" },
    { id: "O4", condition: "Ukipewa mfumo wako wa kiotomatiki unaofanya kazi", action: "kuongeza hatua ya AI inayoandika rasimu ya jibu au kupanga ombi na kukutumia wewe", standard: "kwa sheria zilizo wazi, ukiwa umejaribiwa kwa maombi matatu tofauti, bila taarifa binafsi kupita ndani yake" },
    { id: "O5", condition: "Kwa mfumo wako wa kiotomatiki au wakala wowote wa AI", action: "kuandika orodha ya mipaka ya kile unachoweza kufanya peke yake na kile kinachohitaji idhini yako kila wakati", standard: "ambapo kutuma kwa wateja na kutumia pesa kunahitaji idhini kila wakati" },
    { id: "O6", condition: "Kabla na baada ya kuwasha mfumo wako wa kiotomatiki", action: "kuujaribu kwa taarifa zisizo za kawaida, kuwasha arifa za hitilafu na kupanga ukaguzi wa kila wiki", standard: "ili usimame na kukujulisha jambo linapoharibika" }
  ],
  chapters: [
    {
      name: "Sura 1: Fikiri kwa mtiririko wa kazi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuchora mchakato unaourudia",
          minutes: 5,
          goal: "Chora mchakato wa biashara unaorudiwa kama orodha ya hatua kutoka mwanzo hadi mwisho.",
          text: [
            "Kabla ya kufanya chochote kiwe kiotomatiki, kiandike. Mtiririko wa kazi (workflow) ni hatua ambazo kazi fulani hupitia kutoka mwanzo hadi mwisho. Mfano, swali jipya la mteja: fomu inafika, unanakili taarifa kwenye spreadsheet, unaandika jibu, unaongeza kikumbusho cha kufuatilia.",
            "Chagua mchakato unaotokea mara nyingi, unaofuata hatua zilezile kila wakati, na unaokupotezea muda kwa kunakili, kubandika au kuandika upya. Hiyo ndiyo michakato bora ya kufanya kiotomatiki.",
            "AI inaweza kukusaidia kuuchora. Eleza unachofanya kwa maneno yako mwenyewe kisha uulize: \"Geuza hii iwe mtiririko wa kazi wenye namba. Weka alama hatua zipi ni kunakili taarifa, zipi zinahitaji uamuzi, na zipi zinahitaji kuandika.\""
          ],
          steps: ["Chagua mchakato unaoufanya angalau kila wiki.", "Ueleze kwa msaidizi wa AI kwa maneno yako mwenyewe.", "Omba mtiririko wa kazi wenye namba, wenye alama za hatua za kunakili, uamuzi na kuandika.", "Linganisha ramani na unachofanya kweli na uisahihishe."],
          words: [["Mtiririko wa kazi (workflow)", "hatua ambazo kazi fulani hupitia kutoka mwanzo hadi mwisho."], ["Kufanya kiotomatiki (automate)", "kuweka kompyuta ifanye kazi inayorudiwa bila wewe kufanya kila hatua."]],
          slides: [
            { title: "Kiandike kwanza", bullets: ["Mtiririko wa kazi = hatua kutoka mwanzo hadi mwisho", "Mfano: fomu, spreadsheet, jibu, kikumbusho"] },
            { title: "Michakato bora ya kufanya kiotomatiki", bullets: ["Inatokea mara nyingi", "Hatua zilezile kila wakati", "Kunakili na kuandika upya kwingi"] },
            { title: "Ichore kwa msaada wa AI", bullets: ["Eleza unachofanya", "Omba hatua zenye namba", "Weka alama hatua za kunakili, uamuzi na kuandika"] }
          ],
          tryIt: "Chora mchakato mmoja unaourudia kila wiki kwa msaada wa AI. Weka alama kila hatua kama kunakili, uamuzi au kuandika, na usahihishe chochote ambacho AI ilikosea.",
          youCanNow: "kuchora mchakato wa biashara unaorudiwa kama hatua zilizo wazi.",
          quickCheck: [
            { objective: "O1", q: "Mtiririko wa kazi ni nini?", options: ["Hatua ambazo kazi hupitia kutoka mwanzo hadi mwisho", "Aina ya spreadsheet", "Malalamiko ya mteja", "App ya AI"], answer: 0, why: "Mtiririko wa kazi unaorodhesha kila hatua ya mchakato kwa mpangilio." },
            { objective: "O1", q: "Ramani ya AI ya mchakato wako wa oda imeacha hatua ya kukagua bidhaa zilizopo stoo. Unafanya nini?", options: ["Kutumia ramani kama ilivyo", "Kuongeza hatua iliyokosekana wewe mwenyewe", "Kuanza kufanya kiotomatiki hata hivyo", "Kufuta ramani yote"], answer: 1, why: "Wewe ndiye unayeujua mchakato wako vizuri zaidi, kwa hiyo unasahihisha ramani ya AI." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Vichocheo na vitendo",
          minutes: 5,
          goal: "Geuza ramani yako ya mtiririko wa kazi iwe kichocheo kimoja na orodha ya vitendo.",
          text: [
            "Kila mfumo wa kiotomatiki una kichocheo kimoja (trigger) na kitendo kimoja au zaidi (actions). Kichocheo ni tukio linaloanzisha mfumo: \"jibu jipya la fomu\", \"barua pepe mpya yenye neno ankara\", \"oda mpya iliyolipiwa\". Vitendo ni kinachofuata: \"ongeza mstari kwenye spreadsheet\", \"nitumie ujumbe\", \"tengeneza tukio kwenye kalenda\".",
            "Hatua za kunakili zinageuka kuwa vitendo kwa urahisi. Hatua za kuandika zinaweza kuwa vitendo vya AI. Hatua za uamuzi kwa kawaida zinabaki kwako, au zinakuwa hatua ya idhini ambapo mfumo unasubiri ukubali.",
            "Zana zisizohitaji msimbo (no-code) kama Zapier, Make na Microsoft Power Automate zinaunganisha apps unazotumia tayari kwa vichocheo na vitendo. Nyingi zina mipango ya bure yenye mipaka; kagua ukurasa wa bei wa kila zana kuona kilichojumuishwa leo."
          ],
          steps: ["Tafuta tukio linaloanzisha mtiririko wako wa kazi: hicho ndicho kichocheo.", "Geuza kila hatua ya kunakili iwe kitendo.", "Geuza hatua za kuandika ziwe vitendo vya AI.", "Geuza hatua za uamuzi ziwe hatua ya idhini au uzifanye mwenyewe.", "Uandike hivi: [Kichocheo] kinapotokea, basi [kitendo 1], [kitendo 2]..."],
          words: [["Kichocheo (trigger)", "tukio linaloanzisha mfumo wa kiotomatiki."], ["Kitendo (action)", "hatua ambayo mfumo wa kiotomatiki unafanya baada ya kichocheo."], ["Zana isiyohitaji msimbo (no-code tool)", "zana inayokuwezesha kujenga mifumo ya kiotomatiki kwa kubofya na kuchagua, si kwa kuandika programu."]],
          slides: [
            { title: "Kichocheo kimoja, vitendo kadhaa", bullets: ["Kichocheo: tukio linaloanzisha mfumo", "Vitendo: kinachofuata"] },
            { title: "Geuza hatua ziwe vitendo", bullets: ["Hatua za kunakili: vitendo rahisi", "Hatua za kuandika: vitendo vya AI", "Maamuzi: hatua ya idhini au wewe"] },
            { title: "Zana zisizohitaji msimbo", bullets: ["Zapier, Make, Microsoft Power Automate", "Zinaunganisha apps unazotumia tayari", "Kagua mipaka ya mpango wa bure kwenye tovuti zao"] }
          ],
          sources: [{ name: "Zapier: Bei", url: "https://zapier.com/pricing" }, { name: "Make: Bei", url: "https://www.make.com/en/pricing" }],
          tryIt: "Andika mtiririko wako wa kazi hivi: \"[Kichocheo] kinapotokea, basi [vitendo]\". Weka alama kitendo kipi ni cha AI na wapi unataka hatua ya idhini.",
          youCanNow: "kueleza mfumo wowote wa kiotomatiki kama kichocheo pamoja na vitendo, huku maamuzi yakibaki chini ya udhibiti wako.",
          quickCheck: [
            { objective: "O2", q: "Katika \"Malipo yanapofika, tuma risiti\", kitendo ni kipi?", options: ["Malipo yanafika", "Mteja", "Tuma risiti", "Benki"], answer: 2, why: "Kitendo ni kinachotokea baada ya kichocheo." },
            { objective: "O2", q: "Hatua moja katika mtiririko wako ni kuamua kama urudishe pesa kwa mteja. Unaishughulikiaje?", options: ["Mfumo wa kiotomatiki uamue", "AI iamue", "Kuiondoa hatua hiyo", "Kuiacha iwe hatua ya idhini yako"], answer: 3, why: "Hatua za uamuzi zinakuwa za idhini au zinabaki kwako." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kujenga mfumo wako wa kwanza wa kiotomatiki bila msimbo",
          minutes: 6,
          goal: "Jenga mfumo wa kiotomatiki unaofanya kazi, unaohamisha majibu ya fomu kwenda spreadsheet na kukujulisha.",
          text: [
            "Anza na mfumo rahisi na salama: mtu anapojaza fomu yako ya maswali (kwa mfano Google Form au Microsoft Form), ongeza majibu yake kwenye spreadsheet na ukutumie taarifa. Hakuna kinachoenda kwa mteja bado.",
            "Kwenye zana yako isiyohitaji msimbo, tengeneza mfumo mpya, chagua app ya fomu kama kichocheo, unganisha akaunti yako, na uchague fomu. Kisha ongeza kitendo cha spreadsheet, na ulinganishe kila swali la fomu na safu (column) yake. Ongeza kitendo cha pili cha kukutumia barua pepe au ujumbe.",
            "Ujaribu kwa swali la kubuni ukitumia jina la kubuni kama \"Test Customer\". Hakikisha mstari umeonekana kwenye safu sahihi na kwamba umepokea ujumbe. Hapo tu ndipo uuwashe."
          ],
          steps: ["Tengeneza fomu fupi ya maswali yenye jina, barua pepe na ombi.", "Kwenye zana isiyohitaji msimbo, chagua fomu kama kichocheo.", "Ongeza kitendo cha spreadsheet na ulinganishe maswali na safu.", "Ongeza kitendo cha kukujulisha.", "Jaribu kwa taarifa za \"Test Customer\", kagua matokeo, kisha uuwashe."],
          words: [["Kuunganisha akaunti", "kuipa zana ya kiotomatiki ruhusa ya kutumia moja ya apps zako."], ["Kulinganisha sehemu (field mapping)", "kupeleka kila kipande cha taarifa mahali kinapopaswa kwenda, kama swali la fomu kwenda safu ya spreadsheet."]],
          slides: [
            { title: "Anza rahisi na salama", bullets: ["Majibu ya fomu kwenda spreadsheet", "Taarifa kwako", "Hakuna kinachoenda kwa mteja bado"] },
            { title: "Ujenge", bullets: ["Kichocheo: jibu jipya la fomu", "Kitendo: ongeza mstari wa spreadsheet, linganisha sehemu", "Kitendo: kukujulisha"] },
            { title: "Jaribu kabla ya kuwasha", bullets: ["Tumia taarifa za \"Test Customer\"", "Kagua safu na taarifa uliyopokea", "Kisha uuwashe"] }
          ],
          tryIt: "Jenga mfumo wa fomu kwenda spreadsheet pamoja na taarifa kwako, kwa mpango wa bure wa zana isiyohitaji msimbo. Ujaribu kwa taarifa za kubuni na uhakikishe unafanya kazi.",
          youCanNow: "kujenga na kujaribu mfumo rahisi wa kiotomatiki bila msimbo kati ya apps unazotumia.",
          quickCheck: [
            { objective: "O3", q: "Kulinganisha sehemu (field mapping) ni nini katika zana isiyohitaji msimbo?", options: ["Kupeleka kila kipande cha taarifa mahali kinapoenda", "Kuchora ramani ya duka lako", "Kuchagua mtindo wa herufi", "Kulipia mpango"], answer: 0, why: "Kulinganisha sehemu kunapeleka kila jibu kwenye safu sahihi." },
            { objective: "O3", q: "Mfumo wako wa kiotomatiki umejengwa. Unafanya nini kabla ya kuuwasha?", options: ["Kuutuma kwa wateja wote", "Kuujaribu kwa taarifa za kubuni kama \"Test Customer\"", "Kufuta fomu", "Kuruka majaribio ili kuokoa muda"], answer: 1, why: "Kujaribu kwa taarifa za kubuni kunaonyesha matatizo bila hatari." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Fikiri kwa mtiririko wa kazi",
        questions: [
          { objective: "O1", q: "Mchakato upi ni bora kuanza kuufanya kiotomatiki?", options: ["Uamuzi wa kisheria wa mara moja", "Unaotokea mara nyingi kwa hatua zilezile na kunakili kwingi", "Kitu unachofanya mara moja kwa mwaka", "Kuajiri mfanyakazi wako wa kwanza"], answer: 1, why: "Kazi ya kunakili inayorudiwa mara nyingi inaokoa muda mwingi zaidi." },
          { objective: "O2", q: "Katika \"Jibu jipya la fomu linapofika, ongeza mstari wa spreadsheet\", kichocheo ni kipi?", options: ["Barua pepe yako", "Ongeza mstari wa spreadsheet", "Spreadsheet", "Jibu jipya la fomu linafika"], answer: 3, why: "Kichocheo ni tukio linaloanzisha mfumo wa kiotomatiki." },
          { objective: "O2", q: "Kwa kawaida nini kinatokea kwa hatua za uamuzi katika mfumo wa kiotomatiki?", options: ["Zinakuwa hatua ya idhini au zinabaki kwako", "Zana inakisia", "Zinafutwa", "Mteja anaamua"], answer: 0, why: "Maamuzi yanahitaji busara yako." },
          { objective: "O3", q: "Kulinganisha sehemu (field mapping) ni nini?", options: ["Kuchagua mtindo wa herufi", "Kuchora ramani ya shamba", "Kupeleka kila kipande cha taarifa mahali kinapoenda", "Kulipa bili"], answer: 2, why: "Kunaunganisha maswali ya fomu na safu za spreadsheet." },
          { objective: "O3", q: "Utumie taarifa gani kujaribu mfumo mpya wa kiotomatiki?", options: ["Nywila yako", "Namba ya kadi ya mteja halisi", "Taarifa za kubuni za majaribio kama \"Test Customer\"", "Bila kujaribu kabisa"], answer: 2, why: "Taarifa za kubuni zinakuwezesha kujaribu kwa usalama." }
        ]
      }
    },
    {
      name: "Sura 2: Ongeza AI na ubaki na udhibiti",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuongeza hatua ya AI",
          minutes: 5,
          goal: "Ongeza kitendo cha AI kinachoandika rasimu ya jibu au kupanga ombi.",
          text: [
            "Zana nyingi zisizohitaji msimbo zinakuruhusu kuongeza kitendo cha AI: kutuma maandishi kwa modeli ya AI pamoja na maagizo na kupata jibu lake kama sehemu ya mfumo. Matumizi ya kawaida: kupanga swali katika kundi, kutoa taarifa muhimu, au kuandika rasimu ya jibu. Kwenye baadhi ya zana hatua ya AI iko kwenye mipango ya kulipia tu (ilipokaguliwa Oktoba 2026, hatua za AI za Zapier zilihitaji mpango wa kulipia); kagua ukurasa wa bei. Kama yako haijumuishi, mfumo ukutumie ombi, kisha ulibandike mwenyewe kwenye msaidizi wa AI wa bure.",
            "Andika maagizo ya AI kwa uangalifu, kama prompt (maagizo) utakayotumia tena na tena: \"Soma ombi hili la mteja. Jibu kwa maneno yasiyozidi 100, kwa urafiki na uwazi. Tumia tu taarifa za biashara zilizotolewa hapa: [saa za kazi, huduma]. Usitaje bei kamwe. Kama huna uhakika, andika [CHECK].\"",
            "Tuma rasimu ya AI kwako WEWE, si kwa mteja. Fikiria ni taarifa gani za mteja zinapita kwenda kwenye huduma ya AI; kagua masharti ya data na faragha ya zana hiyo, na usitume namba za kadi, namba za vitambulisho au taarifa za afya kupitia hapo."
          ],
          steps: ["Ongeza kitendo cha AI baada ya hatua ya spreadsheet.", "Andika maagizo makini yenye sheria na taarifa za biashara yako.", "Ipe AI maandishi ya ombi inayoyahitaji tu.", "Tuma rasimu ya AI kwako uikague.", "Jaribu kwa maombi matatu tofauti ya kubuni."],
          words: [["Kitendo cha AI", "hatua katika mfumo wa kiotomatiki inayotuma maandishi kwa AI na kutumia jibu lake."], ["Masharti ya data", "sheria za jinsi zana inavyohifadhi na kutumia taarifa unazoituma."]],
          slides: [
            { title: "Hatua ya AI inaweza kufanya nini", bullets: ["Kupanga ombi katika kundi", "Kutoa taarifa muhimu", "Kuandika rasimu ya jibu", "Huenda ikahitaji mpango wa kulipia: kagua ukurasa wa bei"] },
            { title: "Maagizo makini", bullets: ["Urefu na sauti ya jibu", "Tumia tu taarifa zilizotolewa", "Usitaje bei kamwe; andika [CHECK] kama huna uhakika"] },
            { title: "Iweke salama", bullets: ["Rasimu inakuja kwako, si kwa mteja", "Tuma kile tu AI inachohitaji", "Kagua masharti ya data ya zana"] }
          ],
          sources: [{ name: "Zapier: Bei (hatua za AI na mipaka ya mipango)", url: "https://zapier.com/pricing" }],
          tryIt: "Ongeza hatua ya AI kwenye mfumo wako inayoandika rasimu ya jibu na kukutumia. Ijaribu kwa maombi matatu tofauti ya kubuni na uandike makosa yoyote.",
          youCanNow: "kuongeza hatua ya AI kwenye mfumo wa kiotomatiki yenye sheria zilizo wazi, bila taarifa binafsi kupita ndani yake.",
          quickCheck: [
            { objective: "O4", q: "Sheria ipi inafaa kuwa katika maagizo ya hatua ya AI?", options: ["\"Buni bei kama huna uhakika\"", "\"Tuma moja kwa moja kwa mteja\"", "\"Tumia tu taarifa zilizotolewa; usitaje bei kamwe\"", "\"Weka namba ya kadi\""], answer: 2, why: "Sheria zilizo wazi zinafanya rasimu za AI ziwe sahihi na salama." },
            { objective: "O4", q: "Fomu yako inaomba namba ya kadi. Unafanya nini kuhusu hatua ya AI?", options: ["Kutuma kila kitu kwa AI", "Kuiomba AI iifiche", "Kuiweka katika jibu", "Kuiacha sehemu hiyo nje ya kile hatua ya AI inachopokea"], answer: 3, why: "Namba za kadi na taarifa binafsi hazipaswi kupita kwenye hatua ya AI." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Mawakala na mipaka",
          minutes: 5,
          goal: "Amua kile wakala wa AI anaweza kufanya peke yake na kile kinachohitaji idhini yako.",
          text: [
            "Wakala wa AI (AI agent) anapewa lengo, kisha anapanga na kuchukua hatua kadhaa yeye mwenyewe, kama kutafuta, kujaza fomu, au kutumia apps zako. Mawakala wanaweza kuokoa muda, lakini wanaweza pia kufanya makosa haraka na kwa kiwango kikubwa.",
            "Mipaka (guardrails) ni vizuizi unavyoweka. Sheria rahisi: wakala anaweza kusoma, kupanga na kuandika rasimu peke yake, lakini lazima apate idhini yako kabla ya kutuma chochote kwa mteja, kutumia pesa, kufuta chochote, kubadilisha bei au kujisajili kwa chochote. Mpe ruhusa ya kufikia apps na folda anazohitaji tu.",
            "Weka rekodi ya kile wakala alichofanya (zana nyingi zina historia au log) na anza na kazi ndogo zisizo na hatari kubwa. Mpe uhuru zaidi tu baada ya kufanya kazi vizuri kwa muda."
          ],
          steps: ["Orodhesha kile wakala atakachofanya.", "Weka alama kila kitendo: anaweza peke yake, au kinahitaji idhini yako.", "Weka sharti la idhini kwa kutuma, kutumia pesa, kufuta, bei na kujisajili.", "Mpe ruhusa ya kufikia apps na folda anazohitaji tu.", "Kagua historia au log yake mara kwa mara."],
          words: [["Wakala wa AI (AI agent)", "zana ya AI inayochukua hatua kadhaa yenyewe kuelekea lengo."], ["Mpaka (guardrail)", "kizuizi kinachozuia mfumo wa kiotomatiki au wakala kufanya jambo la hatari."], ["Log", "rekodi ya kile mfumo wa kiotomatiki au wakala alichofanya na lini."]],
          slides: [
            { title: "Wakala ni nini", bullets: ["Anapewa lengo", "Anapanga na kuchukua hatua kadhaa peke yake", "Ni wa haraka, hata katika makosa"] },
            { title: "Kunahitaji idhini yako", bullets: ["Kutuma kwa wateja", "Kutumia pesa au kubadilisha bei", "Kufuta au kujisajili kwa vitu"] },
            { title: "Mwekee mipaka na umfuatilie", bullets: ["Ruhusa kwa anachohitaji tu", "Kagua historia au log yake", "Anza kidogo, ongeza uhuru polepole"] }
          ],
          tryIt: "Andika orodha ya mipaka kwa mfumo wako: kile unachoweza kufanya peke yake, na mambo matano yanayohitaji idhini yako kila wakati. Ongeza hatua ya idhini kama zana yako inaruhusu.",
          youCanNow: "kuweka mipaka ili mifumo ya kiotomatiki na mawakala wasifanye kamwe hatua za hatari bila wewe.",
          quickCheck: [
            { objective: "O5", q: "Mpaka (guardrail) ni nini katika mfumo wa kiotomatiki?", options: ["Kizuizi kinachozuia vitendo vya hatari", "Kichocheo cha haraka zaidi", "Safu ya spreadsheet", "Huduma ya kulipia"], answer: 0, why: "Mipaka inazuia mfumo kufanya mambo ya hatari peke yake." },
            { objective: "O5", q: "Zana ya wakala inaomba ruhusa ya kufikia folda zako zote na benki yako. Unaipa nini?", options: ["Kila inachoomba", "Apps na folda inazohitaji tu", "Nywila yako", "Haki za msimamizi (admin)"], answer: 1, why: "Ruhusa ndogo inapunguza madhara jambo likiharibika." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kujaribu, kufuatilia na kukwama bila madhara",
          minutes: 5,
          goal: "Jaribu mfumo wako kutafuta matatizo na uweke ukaguzi wa kila wiki.",
          text: [
            "Mifumo ya kiotomatiki huharibika: app inabadilika, swali la fomu linapewa jina jipya, nywila inaisha muda, au AI inatoa jibu la ajabu. Jaribu kwa taarifa zisizo za kawaida: sehemu iliyo tupu, ujumbe mrefu sana, ujumbe kwa lugha nyingine, ujumbe usio na adabu.",
            "Uweke ukwame bila madhara: jambo likiharibika, mfumo usimame na ukujulishe, si kutuma ujumbe ulioandikwa nusu. Zana nyingi zinaweza kukutumia barua pepe mzunguko (run) unaposhindwa; washa huduma hiyo.",
            "Mara moja kwa wiki, angalia log: mizunguko mingapi, mingapi imeshindwa, na rasimu mbili au tatu za AI. Hesabu dakika ulizookoa. Kama unaleta kazi zaidi kuliko unayookoa, ubadilishe au uuzime."
          ],
          steps: ["Jaribu kwa sehemu iliyo tupu, ujumbe mrefu sana na ujumbe usio wa kawaida.", "Washa arifa za hitilafu.", "Hakikisha hitilafu inasimamisha mzunguko badala ya kutuma kitu.", "Kila wiki, kagua mizunguko, hitilafu na rasimu chache za AI.", "Uendelee nao, uubadilishe au uuzime kulingana na muda unaookolewa."],
          words: [["Kukwama bila madhara (fail safely)", "jambo likiharibika, kusimama na kumjulisha mtu badala ya kufanya kitu chenye madhara."], ["Mzunguko (run)", "mara moja ambapo mfumo wa kiotomatiki unaanza na kupitia hatua zake."]],
          slides: [
            { title: "Mifumo ya kiotomatiki huharibika", bullets: ["Apps zinabadilika", "Maswali ya fomu yanapewa majina mapya", "AI inatoa majibu ya ajabu"] },
            { title: "Jaribu taarifa zisizo za kawaida", bullets: ["Sehemu iliyo tupu", "Ujumbe mrefu sana", "Lugha nyingine au ujumbe usio na adabu"] },
            { title: "Kukwama bila madhara", bullets: ["Usimame na ukujulishe", "Usitume kamwe ujumbe ulioandikwa nusu", "Washa barua pepe za hitilafu"] },
            { title: "Ukaguzi wa kila wiki", bullets: ["Mizunguko na hitilafu kwenye log", "Soma rasimu chache za AI", "Hesabu dakika ulizookoa"] }
          ],
          tryIt: "Kazi ya mwisho: jaribu mfumo wako kwa taarifa tatu zisizo za kawaida, washa arifa za hitilafu, na uandike rekodi yako ya ukurasa mmoja: ramani, kichocheo na vitendo, maagizo ya AI, hatua ya idhini, matokeo ya majaribio na ukaguzi wa kila wiki.",
          youCanNow: "kujenga, kuwekea mipaka, kujaribu na kufuatilia mfumo wa kiotomatiki wa AI kwa biashara yako.",
          quickCheck: [
            { objective: "O6", q: "Jaribio la taarifa zisizo za kawaida ni nini?", options: ["Kujaribu wikendi tu", "Kujaribu na mteja wako bora", "Kujaribu kwa taarifa zisizo za kawaida, kama sehemu iliyo tupu", "Kujaribu kwa namba halisi za kadi"], answer: 2, why: "Taarifa zisizo za kawaida zinaonyesha jinsi mfumo unavyoshughulikia matatizo." },
            { objective: "O6", q: "Ukaguzi wako wa kila wiki unaonyesha mizunguko mitano iliyoshindwa. Unafanya nini?", options: ["Kuipuuza", "Kuzima arifa za hitilafu", "Kuupa mfumo ruhusa zaidi", "Kutafuta chanzo, kukirekebisha na kujaribu tena"], answer: 3, why: "Ufuatiliaji ni wa kugundua na kurekebisha hitilafu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Ongeza AI na ubaki na udhibiti",
        questions: [
          { objective: "O4", q: "Rasimu ya jibu ya AI iende wapi katika mfumo wako wa kwanza?", options: ["Kwako uikague", "Moja kwa moja kwa mteja", "Kwenye mitandao ya kijamii", "Popote pale"], answer: 0, why: "Unakagua rasimu kabla wateja hawajaziona." },
          { objective: "O4", q: "Taarifa ipi HAIPASWI kupita kwenye hatua ya AI?", options: ["Orodha ya huduma zako", "Maandishi ya ombi", "Saa zako za kufungua", "Namba ya kadi ya mteja"], answer: 3, why: "Namba za kadi na taarifa kama hizo hazipaswi kamwe kutumwa kwa zana za AI." },
          { objective: "O5", q: "Kitendo kipi kinapaswa kuhitaji idhini yako kila wakati?", options: ["Kusoma barua pepe", "Kutumia pesa", "Kupanga ombi", "Kukuandikia rasimu ya jibu"], answer: 1, why: "Kutumia pesa ni kitendo chenye hatari kubwa." },
          { objective: "O6", q: "\"Kukwama bila madhara\" maana yake nini?", options: ["Kusimama na kumjulisha mtu jambo linapoharibika", "Kuendelea vyovyote vile", "Kufuta taarifa", "Kutuma barua pepe kwa kila mteja"], answer: 0, why: "Kusimama kunazuia vitendo vyenye madhara vilivyofanywa nusu." },
          { objective: "O6", q: "Mfumo wako unaleta marekebisho mengi kuliko muda unaookoa. Unafanya nini?", options: ["Kuupuuza", "Kuongeza hatua zaidi za AI", "Kuubadilisha au kuuzima", "Kuupa ruhusa zaidi"], answer: 2, why: "Mifumo ya kiotomatiki inapaswa kuokoa muda, si kuupoteza." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Uendeshaji Kiotomatiki kwa AI na Mawakala wa AI",
    questions: [
      { objective: "O1", q: "Uendeshaji kiotomatiki maana yake:", options: ["Kuajiri watu zaidi", "Kompyuta inafanya kazi inayorudiwa kitu fulani kinapotokea", "Kuandika kila barua pepe kwa mkono", "Kuzima kompyuta yako"], answer: 1, why: "Hilo ndilo wazo la msingi." },
      { objective: "O1", q: "Hatua ya kwanza kabla ya kufanya kitu kiotomatiki ni:", options: ["Kufuta taarifa za zamani", "Kununua zana ya bei ghali zaidi", "Kumpa wakala ruhusa kamili", "Kuchora mchakato kama hatua"], answer: 3, why: "Unaweza kufanya kiotomatiki kile tu unachokielewa." },
      { objective: "O1", q: "Mtiririko wa kazi ni:", options: ["Nywila", "Aina ya spreadsheet", "Malipo", "Hatua ambazo kazi hupitia kutoka mwanzo hadi mwisho"], answer: 3, why: "Hiyo ndiyo maana yake." },
      { objective: "O1", q: "Hatua ipi ni rahisi zaidi kufanya kiotomatiki?", options: ["Kuamua kama umwajiri mtu", "Kunakili majibu ya fomu kwenda spreadsheet", "Kusaini mkataba wa kukodisha", "Kuchagua jina la biashara"], answer: 1, why: "Kunakili ni kazi inayorudiwa na inayofuata sheria." },
      { objective: "O2", q: "Kichocheo ni:", options: ["Modeli ya AI", "Hatua ya mwisho", "Tukio linaloanzisha mfumo wa kiotomatiki", "Bei"], answer: 2, why: "Vichocheo vinaanzisha mifumo ya kiotomatiki." },
      { objective: "O2", q: "Kipi ni kitendo?", options: ["Kuongeza mstari kwenye spreadsheet", "Jibu jipya la fomu", "Oda mpya iliyolipiwa", "Barua pepe mpya inafika"], answer: 0, why: "Vingine ni vichocheo." },
      { objective: "O3", q: "Zapier, Make na Microsoft Power Automate ni:", options: ["Mitandao ya kijamii", "Benki", "Zana za kiotomatiki zisizohitaji msimbo", "Printa"], answer: 2, why: "Zinaunganisha apps kwa vichocheo na vitendo." },
      { objective: "O3", q: "Ukague wapi mipaka ya mpango wa bure wa zana isiyohitaji msimbo?", options: ["Ukurasa wake wa bei wenyewe", "Kwa kukisia", "Video ya zamani", "Kwa mteja"], answer: 0, why: "Mipango na mipaka hubadilika." },
      { objective: "O3", q: "Kabla ya kuwasha mfumo wa kiotomatiki unapaswa:", options: ["Kuutuma kwa wateja wote", "Kuujaribu kwa taarifa za kubuni", "Kuruka majaribio", "Kuondoa taarifa za kukujulisha"], answer: 1, why: "Majaribio yanagundua makosa kwa usalama." },
      { objective: "O4", q: "Kitendo cha AI katika mfumo wa kiotomatiki kinaweza:", options: ["Kujiidhinisha chenyewe", "Kusaini mikataba", "Kulipa kodi zako", "Kupanga ombi au kuandika rasimu ya jibu"], answer: 3, why: "Kusoma, kupanga na kuandika rasimu ni matumizi mazuri ya AI." },
      { objective: "O4", q: "Maagizo mazuri ya AI yanajumuisha:", options: ["Sheria kama \"Tumia tu taarifa zilizotolewa; usitaje bei kamwe\"", "\"Fanya chochote unachotaka\"", "Nywila yako", "Namba za kadi za wateja"], answer: 0, why: "Sheria zinapunguza makosa." },
      { objective: "O4", q: "Kwa nini ukague masharti ya data ya zana ya kiotomatiki?", options: ["Hakuna haja", "Kubadilisha nembo yako", "Kupata punguzo", "Kujua jinsi taarifa za wateja unazotuma zinavyohifadhiwa na kutumiwa"], answer: 3, why: "Taarifa za wateja zinapita kwenye zana hizi." },
      { objective: "O5", q: "Wakala wa AI ni:", options: ["Spreadsheet", "Wakala wa mauzo ambaye ni mtu", "Zana ya AI inayochukua hatua kadhaa yenyewe kuelekea lengo", "Dereva wa kusafirisha mizigo"], answer: 2, why: "Mawakala wanapanga na kutenda wenyewe." },
      { objective: "O5", q: "Mpaka (guardrail) ni:", options: ["Aina ya kichocheo", "Kizuizi kinachozuia vitendo vya hatari", "Laini ya intaneti ya kasi", "App mpya"], answer: 1, why: "Mipaka inakuweka katika udhibiti." },
      { objective: "O5", q: "Wakala anapaswa kupata idhini yako kabla ya:", options: ["Kukuandikia rasimu ya ujumbe", "Kusoma barua pepe", "Kupanga orodha", "Kutuma chochote kwa mteja"], answer: 3, why: "Kutuma kwa wateja kuna hatari kubwa." },
      { objective: "O5", q: "Wakala apewe ruhusa kiasi gani?", options: ["Taarifa zako za kuingia benki", "Kila kitu ulicho nacho", "Apps na folda anazohitaji tu", "Mafaili yote ya wateja"], answer: 2, why: "Ruhusa ndogo inapunguza madhara ya makosa." },
      { objective: "O5", q: "Unapompa wakala uhuru zaidi, unapaswa:", options: ["Kuanza kidogo na kuongeza uhuru baada ya kufanya kazi vizuri", "Kumpa uhuru kamili siku ya kwanza", "Kutokagua log yake kamwe", "Kuzima arifa"], answer: 0, why: "Uaminifu unajengwa kwa rekodi nzuri ya kazi." },
      { objective: "O6", q: "Jaribio zuri la taarifa zisizo za kawaida ni lipi?", options: ["Jumbe kamili tu", "Ujumbe wenye sehemu iliyo tupu", "Bila kujaribu", "Namba halisi ya kadi ya mteja wako"], answer: 1, why: "Taarifa zisizo za kawaida zinaonyesha udhaifu." },
      { objective: "O6", q: "Mzunguko wa mfumo wa kiotomatiki ukishindwa, unapaswa:", options: ["Kutuma ujumbe ulioandikwa nusu", "Kusimama na kukujulisha", "Kufuta spreadsheet yako", "Kujaribu tena milele kimya kimya"], answer: 1, why: "Huko ndiko kukwama bila madhara." },
      { objective: "O6", q: "Katika ukaguzi wako wa kila wiki unaangalia:", options: ["Mizunguko, hitilafu, rasimu chache za AI na dakika ulizookoa", "Nembo ya zana tu", "Hakuna kitu", "Nywila za washindani"], answer: 0, why: "Hii inaonyesha kama mfumo bado unafanya kazi na una faida." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      1,
      4,
      6,
      8,
      9,
      13,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Ramani ya mtiririko wa kazi",
        objective: "O1",
        notYet: "Hatua zinakosekana au hazina alama.",
        meets: "Kila hatua kutoka mwanzo hadi mwisho, yenye alama ya kunakili, uamuzi au kuandika.",
        exceeds: "Inaonyesha kila hatua inachukua muda gani ikifanywa kwa mkono leo."
      },
      {
        name: "Kichocheo na vitendo",
        objective: "O2",
        notYet: "Kichocheo au vitendo havieleweki.",
        meets: "Kichocheo kimoja kilicho wazi na orodha ya vitendo, hatua ya AI na idhini zikiwa na alama.",
        exceeds: "Ulinganishaji wa sehemu umeandikwa kwa kila kipande cha taarifa."
      },
      {
        name: "Mfumo wa kiotomatiki unaofanya kazi",
        objective: "O3",
        notYet: "Haufanyi kazi, au ulijaribiwa kwa taarifa halisi za wateja.",
        meets: "Fomu kwenda spreadsheet pamoja na taarifa inafanya kazi, imejaribiwa kwa taarifa za kubuni.",
        exceeds: "Inaonyesha mipaka ya mpango wa bure iliyokaguliwa kwenye ukurasa wa bei wa zana yenyewe."
      },
      {
        name: "Hatua ya AI na mipaka",
        objective: "O5",
        notYet: "AI inaweza kutuma kwa wateja au kufanya hatua za hatari bila idhini.",
        meets: "Rasimu za AI zinaenda kwa mmiliki kwa idhini; orodha ya mipaka yenye mambo matano ya idhini.",
        exceeds: "Maagizo ya AI yana sheria zilizo wazi na sehemu za taarifa binafsi zimewekwa nje ya hatua ya AI."
      },
      {
        name: "Majaribio na ufuatiliaji",
        objective: "O6",
        notYet: "Majaribio chini ya matatu, au hakuna arifa ya hitilafu.",
        meets: "Majaribio matatu ya taarifa zisizo za kawaida, arifa za hitilafu zimewashwa na ukaguzi wa kila wiki umeandikwa.",
        exceeds: "Ukaguzi wa kila wiki unajumuisha dakika zilizookolewa na sheria ya lini kuuzima."
      }
    ]
  },
  evaluation: {
    results: [
      "Wamiliki wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wamiliki ambao mfumo wao wa kiotomatiki bado unafanya kazi kwa usalama baada ya siku 30 (utafiti wa kufuatilia)",
      "Dakika zinazookolewa kila wiki katika kunakili na kujibu, kama wamiliki wanavyoripoti",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya wajasiriamali ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye zana ya fomu ya bure, spreadsheet na akaunti ya barua pepe",
      "Mpango wa bure wa zana isiyohitaji msimbo kama Zapier, Make au Microsoft Power Automate",
      "Taarifa za kubuni za majaribio, kwa mfano \"Test Customer\"",
      "Kama dakika 75 kwa jumla kwa masomo, kujenga, kujaribu na rekodi ya ukurasa mmoja"
    ],
    facilitatorNotes: [
      "Jenga mfumo mmoja wa mfano mbele ya wanafunzi wote kabla hawajajenga wao wenyewe.",
      "Kagua mipaka ya sasa ya mpango wa bure kwenye ukurasa wa bei wa kila zana kabla ya kipindi.",
      "Usiwaruhusu wanafunzi kuunganisha akaunti za benki wala kutuma chochote kwa wateja halisi wakati wa kozi.",
      "Wanafunzi wabadilishane orodha za mipaka na watafute kitendo chochote cha hatari kilichoachwa bila idhini.",
      "Pima rekodi ya ukurasa mmoja kwa rubriki, mstari mmoja wa Bado kwa wakati."
    ]
  }
};
