"use strict";

// Koach Learn course (Swahili translation of entrepreneurs/entrepreneurs-ai-ethics-legal.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Legal points come from the English course (ftc.gov and copyright.gov, checked 27 October 2026). Not legal advice.

module.exports = {
  id: "entrepreneurs-ai-ethics-legal-sw",
  lang: "sw",
  translationOf: "entrepreneurs-ai-ethics-legal",
  category: "Entrepreneurs",
  name: "Maadili ya AI, Hatari na Masuala ya Kisheria",
  skills: "Kutambua hatari za AI katika biashara, Kukagua kazi ya AI kwa usahihi na upendeleo, Kulinda taarifa za wateja, Kutoa madai ya kweli kuhusu AI, Kuelewa hakimiliki kwa kazi iliyotengenezwa na AI, Kuandika sera ya matumizi ya AI",
  outcome: "kutambua hatari kuu za kutumia AI katika biashara yako, kuweka ukaguzi wa usahihi, upendeleo na faragha, kutoa madai ya kweli tu kuhusu AI, kuelewa misingi ya hakimiliki kwa kazi iliyotengenezwa na AI, na kuandika sera ya ukurasa mmoja ya matumizi ya AI kwa biashara yako.",
  about: [
    "AI inaweza kuiokolea biashara ndogo muda mwingi, lakini inaleta hatari za kweli: majibu yasiyo sahihi, matokeo yasiyo ya haki, taarifa za wateja kuvuja, matangazo yanayopotosha na matatizo ya hakimiliki. Kozi hii ni kwa wamiliki wanaotaka kutumia AI kwa uwajibikaji na kuepuka matatizo.",
    "Katika Sura 1 utajifunza hatari kuu, jinsi ya kukagua kazi ya AI kwa usahihi na upendeleo, na jinsi ya kulinda taarifa za wateja. Katika Sura 2 utajifunza mashirika ya serikali ya Marekani yanasema nini kuhusu madai ya AI katika matangazo, uidhinishaji (endorsements) na maoni ya wateja (reviews), na kuhusu kazi iliyotengenezwa na AI na hakimiliki. Unamaliza kwa kuandika sera ya matumizi ya AI kwa biashara yako.",
    "Kila somo linachukua kama dakika tano na lina kazi ya vitendo. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Mambo ya kisheria yalikaguliwa kwenye tovuti rasmi za serikali ya Marekani (ftc.gov na copyright.gov) na yameorodheshwa katika kila somo. Kozi hii ni elimu, si ushauri wa kisheria: sheria hubadilika na hutofautiana kwa jimbo na nchi, kwa hiyo ongea na wakili kuhusu hali yako mwenyewe."
  ],
  finalTask: "Andika sera ya ukurasa mmoja ya matumizi ya AI kwa biashara yako inayoeleza: zana gani za AI zimeidhinishwa, taarifa gani hazipaswi kamwe kuingia ndani yake, kazi gani za AI zinahitaji ukaguzi wa mtu (ukweli, pesa, sheria, afya, na chochote wateja wanachokiona), jinsi unavyotoa madai ya kweli kuhusu AI na kuweka wazi uidhinishaji uliolipiwa, jinsi unavyoshughulikia hakimiliki kwa maudhui yaliyotengenezwa na AI, umuulize nani ukiwa na shaka (pamoja na wakili), na lini utaipitia upya sera hiyo.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wamiliki wa biashara ndogo nchini Marekani ambao tayari wanatumia, au wanapanga kutumia, AI kwa matangazo, huduma kwa wateja, kuajiri au maudhui, na wanataka kufanya hivyo kwa uwajibikaji.",
    startingPoint: "Wanatumia zana moja au zaidi za AI kwa kazi za biashara. Wachache wana orodha iliyoandikwa ya hatari, hatua ya ukaguzi, sheria kwa taarifa za wateja, au uelewa wa msingi wa sheria za matangazo za FTC na hakimiliki kwa kazi iliyotengenezwa na AI.",
    gap: "AI inaweza kutoa ukweli usio sahihi, matokeo yasiyo ya haki, uvujaji wa taarifa, madai yanayopotosha na matatizo ya hakimiliki, na mmiliki ndiye anayewajibika kwa yote. Wamiliki wanahitaji ukaguzi rahisi na sera iliyoandikwa ya matumizi ya AI ili waendelee kuaminiwa na wateja na waepuke matatizo ya kisheria.",
    constraints: [
      "Maneno rahisi; hii ni elimu, si ushauri wa kisheria, na sheria hutofautiana kwa jimbo na nchi",
      "Vifaa: simu au kompyuta yenye zana za AI anazotumia mmiliki sasa, na tovuti au kurasa zake za mitandao ya kijamii",
      "Muda: kama dakika tano kwa kila somo, pamoja na kupitia vitu vya biashara ya mmiliki mwenyewe",
      "Mambo ya kisheria yanategemea tu kurasa rasmi za ftc.gov na copyright.gov zilizotajwa katika masomo",
      "Hakuna taarifa halisi za wateja zinazotumika katika zoezi lolote"
    ],
    prerequisites: "Kozi \"Utangulizi wa AI kwa Wajasiriamali\", au matumizi ya kawaida ya zana za AI katika biashara."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa angalau njia tatu ambazo biashara yako inatumia AI", action: "kuorodhesha hatari kuu za AI zinazohusika na kupima ukubwa wa kila moja", standard: "ukiandika ukaguzi mmoja kwa kila hatari kubwa" },
    { id: "O2", condition: "Ukipewa kazi ya AI ambayo wateja wanaiona au inayoathiri uamuzi", action: "kuikagua kwa ukweli usio sahihi, hesabu zisizo sahihi, madai yasiyoweza kuthibitishwa na matokeo yasiyo ya haki", standard: "ukitumia hatua ya ukaguzi iliyoandikwa na kuacha maamuzi ya kuajiri, mikopo na makazi kwa mtu" },
    { id: "O3", condition: "Ukipewa taarifa za wateja ulizo nazo", action: "kuandika orodha ya \"kamwe-kwenye-AI\" na kukagua mipangilio ya faragha ya zana yako kuu ya AI", standard: "ukifuata kanuni tano za FTC kuhusu taarifa" },
    { id: "O4", condition: "Ukipewa tovuti yako au machapisho yako ya mitandao ya kijamii", action: "kuweka alama kwenye kila dai kuhusu AI au matokeo (bakiza, rekebisha au ondoa) na kukagua machapisho yaliyolipiwa na maoni ya wateja", standard: "ili kila dai liwe la kweli na linaloweza kuthibitishwa, kila chapisho lililolipiwa liwe wazi, na hakuna maoni ya uongo au yaliyonunuliwa" },
    { id: "O5", condition: "Ukipewa vitu vya biashara vilivyotengenezwa kwa AI", action: "kueleza nani anaweza kumiliki kazi iliyosaidiwa na AI na kupanga kazi ya ubunifu ya binadamu utakayoongeza", standard: "ukitaja kitu chochote kinachohitaji ushauri wa wakili" },
    { id: "O6", condition: "Kwa biashara yako mwenyewe", action: "kuandika sera ya ukurasa mmoja ya matumizi ya AI yenye sehemu zote saba", standard: "ukitaja nani anawajibika, lini kumuuliza wakili na tarehe ya kuipitia upya" }
  ],
  chapters: [
    {
      name: "Sura 1: Jua hatari na ukague kazi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Hatari kuu za AI katika biashara",
          minutes: 5,
          goal: "Taja hatari kuu za AI na utafute zinapojitokeza katika biashara yako.",
          text: [
            "Hatari tano zinajitokeza tena na tena. Usahihi: AI inaweza kubuni ukweli, bei au sheria. Haki: AI inaweza kutendea makundi ya watu isivyo haki kwa sababu ya mifumo katika kile ilichojifunza. Faragha: taarifa za wateja unazoandika zinaweza kuhifadhiwa au kutumiwa. Ukweli: madai ya matangazo kuhusu AI, au maoni ya wateja yaliyotengenezwa na AI, yanaweza kupotosha. Umiliki: nani anamiliki kazi iliyotengenezwa na AI, na kama inanakili kazi ya mtu mwingine.",
            "Kuwa na maadili katika kutumia AI ni kuwa mkweli, wa haki na mwangalifu na taarifa za watu, na kuhakikisha mtu ndiye anayewajibika. Mara nyingi, kufanya jambo la kimaadili pia kunakuweka upande sahihi wa sheria.",
            "Tengeneza orodha ya hatari kwa biashara yako: unatumia AI wapi, nini kinaweza kwenda vibaya, madhara yangekuwa makubwa kiasi gani, na ukaguzi gani utaongeza."
          ],
          steps: ["Orodhesha kila mahali unapotumia au unapopanga kutumia AI.", "Kwa kila kimoja, uliza ni hatari zipi kati ya zile tano zinahusika.", "Pima kosa lingekuwa baya kiasi gani: dogo, la kati au kubwa.", "Andika ukaguzi mmoja kwa kila hatari ya kati au kubwa."],
          words: [["Maadili", "mawazo kuhusu kilicho sahihi na cha haki."], ["Hatari", "kitu kinachoweza kwenda vibaya, na madhara kiasi gani kingeleta."], ["Upendeleo (bias)", "matokeo yasiyo ya haki kwa baadhi ya makundi ya watu."]],
          slides: [
            { title: "Hatari tano za AI", bullets: ["Usahihi: ukweli uliobuniwa", "Haki: matokeo yasiyo ya haki", "Faragha: taarifa za wateja", "Ukweli na umiliki"] },
            { title: "Matumizi ya AI yenye maadili", bullets: ["Ukweli, haki, uangalifu na taarifa", "Mtu anabaki kuwajibika", "Maadili mara nyingi pia yanakuweka ndani ya sheria"] },
            { title: "Orodha yako ya hatari", bullets: ["Unatumia AI wapi", "Nini kinaweza kwenda vibaya, kwa ukubwa gani", "Ukaguzi mmoja kwa kila hatari kubwa"] }
          ],
          tryIt: "Tengeneza orodha ya hatari yenye angalau njia tatu ambazo biashara yako inatumia AI. Weka alama hatari zipi kati ya zile tano zinahusika, pima kila moja, na uandike ukaguzi mmoja kwa zile kubwa.",
          youCanNow: "kutaja hatari kuu za AI na kuzihusisha na biashara yako mwenyewe.",
          quickCheck: [
            { objective: "O1", q: "Ipi ni hatari ya faragha ya AI katika biashara?", options: ["Taarifa za wateja kuvuja kupitia zana ya AI", "AI kuandika polepole sana", "Zana kugharimu pesa", "AI kutumia sentensi ndefu"], answer: 0, why: "Kuweka taarifa za wateja kwenye zana za AI kunaweza kuziweka wazi." },
            { objective: "O1", q: "Chatbot yako ya AI inajibu maswali ya wateja kuhusu usafirishaji. Unaiwekaje kwenye orodha yako ya hatari?", options: ["Usiiweke; ni chatbot tu", "Iorodheshe, ipime na uandike ukaguzi wa majibu yasiyo sahihi", "Zima AI yote", "Waache wateja watafute makosa"], answer: 1, why: "Chochote wateja wanachokiona kinaingia kwenye orodha ya hatari pamoja na ukaguzi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kukagua kazi ya AI kwa usahihi na haki",
          minutes: 5,
          goal: "Weka hatua ya ukaguzi wa mtu inayokamata ukweli usio sahihi na matokeo yasiyo ya haki.",
          text: [
            "Chochote AI inachotengeneza ambacho mteja ataona, au kinachoathiri pesa, sheria, afya au usalama, kinahitaji ukaguzi wa mtu. Kagua ukweli kwa kulinganisha na kumbukumbu zako au vyanzo rasmi, rudia hesabu, na uondoe dai lolote usiloweza kuthibitisha.",
            "Kagua pia haki. Ukitumia AI kuchuja waombaji kazi, kuweka bei, kuidhinisha wateja au kuandika matangazo ya kazi, angalia kama inawatendea watu tofauti kwa sababu ya rangi, jinsia, umri, ulemavu, dini, nchi ya asili au sifa kama hizo. Sheria za kupinga ubaguzi bado zinatumika hata kompyuta inaposaidia kufanya uamuzi.",
            "Kwa maamuzi mazito, kama kuajiri, kufukuza kazi, kutoa mikopo, makazi au chochote kuhusu afya, usiiache AI iamue. Itumie kupanga taarifa, acha uamuzi kwa mtu, na ongea na wakili kuhusu sheria zinazokuhusu."
          ],
          steps: ["Weka alama kazi zipi za AI wateja wanaziona au zinaathiri pesa, sheria, afya au usalama.", "Kwa hizo, kagua ukweli, hesabu na madai kila mara.", "Angalia maamuzi yanayosaidiwa na AI kama kuna tofauti zisizo za haki kati ya makundi.", "Acha maamuzi mazito kwa mtu.", "Muulize wakili kuhusu sheria za maamuzi ya kuajiri, mikopo au makazi."],
          words: [["Ukaguzi wa mtu", "mtu anakagua kazi ya AI kabla haijatumika."], ["Uamuzi mzito", "chaguo linaloathiri sana kazi, pesa, nyumba au afya ya mtu."], ["Ubaguzi", "kuwatendea watu isivyo haki kwa sababu ya walivyo."]],
          slides: [
            { title: "Kinachohitaji ukaguzi wa mtu", bullets: ["Chochote wateja wanachokiona", "Chochote kuhusu pesa, sheria, afya au usalama"] },
            { title: "Kagua haki", bullets: ["Kuajiri, bei, kuidhinisha, matangazo ya kazi", "Matokeo tofauti kwa makundi tofauti?", "Sheria za kupinga ubaguzi bado zinatumika"] },
            { title: "Uamuzi mzito = mtu anaamua", bullets: ["Kuajiri, kufukuza kazi, mikopo, makazi, afya", "AI inapanga taarifa; mtu anaamua", "Muulize wakili kuhusu sheria"] }
          ],
          tryIt: "Chagua kazi moja ya AI ambayo wateja wako wanaiona. Ikague kwa ukweli, hesabu, madai yasiyoweza kuthibitishwa na maneno yasiyo ya haki. Andika hatua ya ukaguzi utakayotumia kila mara.",
          youCanNow: "kukagua kazi ya AI kwa usahihi na haki kabla haijaathiri wateja au maamuzi.",
          quickCheck: [
            { objective: "O2", q: "Upendeleo (bias) katika matokeo ya AI ni nini?", options: ["Kosa la kuandika", "Jibu la polepole", "Matokeo yasiyo ya haki kwa baadhi ya makundi", "Jibu fupi"], answer: 2, why: "Upendeleo ni AI kuwatendea baadhi ya makundi ya watu isivyo haki." },
            { objective: "O2", q: "AI inakupangia waombaji kazi kwa mpangilio. Unafanya nini?", options: ["Kuajiri jina la juu", "Kukataa nusu ya chini", "Kuiacha AI itume matokeo kwa barua pepe", "Kukagua mpangilio kama una upendeleo na kufanya uamuzi mwenyewe"], answer: 3, why: "Mtu ndiye anayefanya maamuzi ya kuajiri, na sheria za kupinga ubaguzi bado zinatumika." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kulinda taarifa za wateja",
          minutes: 5,
          goal: "Amua taarifa zipi zinaweza na zipi haziwezi kuingia kwenye zana za AI, ukitumia kanuni tano za FTC.",
          text: [
            "FTC (Federal Trade Commission, tume ya serikali ya Marekani inayolinda wateja) ina mwongozo kwa biashara kuhusu kulinda taarifa binafsi wenye kanuni tano: take stock (jua taarifa binafsi ulizo nazo), scale down (weka tu unachohitaji), lock it (linda unachoweka), pitch it (ondoa usichohitaji tena) na plan ahead (kuwa na mpango kwa tatizo la usalama).",
            "Zitumie kwa AI. Usiweke namba za Social Security, namba za kadi au benki, nywila, taarifa za afya au orodha kamili za mawasiliano ya wateja kwenye zana za mazungumzo za AI. Tumia vishika-nafasi au muhtasari. Kagua mipangilio ya faragha na masharti ya kila zana, na kama lazima utumie taarifa za wateja, chagua mipango ya biashara inayoahidi kutofundisha AI kwa taarifa zako.",
            "Kuwa mkweli katika taarifa yako ya faragha: ukitumia zana za AI zinazoshughulikia taarifa za wateja, sema hivyo. Sheria za faragha hutofautiana kwa jimbo na nchi; muulize wakili zipi zinakuhusu."
          ],
          steps: ["Take stock: orodhesha taarifa za wateja ulizo nazo.", "Scale down: acha kukusanya usichohitaji.", "Andika orodha ya kamwe-kwenye-AI: namba za utambulisho, namba za kadi na benki, nywila, taarifa za afya.", "Kagua mipangilio ya faragha na masharti ya kila zana ya AI.", "Tengeneza mpango mfupi wa utakachofanya taarifa zikivuja."],
          words: [["Taarifa binafsi", "taarifa zinazomtambulisha mtu, kama jina pamoja na anwani, namba za utambulisho au namba za kadi."], ["Taarifa ya faragha", "maelezo yanayowaambia wateja taarifa gani unakusanya na unazitumiaje."], ["Tukio la usalama", "taarifa zinapopotea, kuibiwa au kuonwa na mtu asiyepaswa kuziona."]],
          slides: [
            { title: "Kanuni tano za FTC", bullets: ["Take stock, scale down", "Lock it, pitch it", "Plan ahead"] },
            { title: "Kamwe kwenye zana za mazungumzo za AI", bullets: ["Namba za utambulisho, kadi au benki", "Nywila na taarifa za afya", "Orodha kamili za mawasiliano ya wateja"] },
            { title: "Matumizi salama zaidi", bullets: ["Vishika-nafasi na muhtasari", "Kagua mipangilio ya faragha na masharti", "Mipango ya biashara isiyofundisha AI kwa taarifa zako"] },
            { title: "Kuwa mkweli", bullets: ["Sema katika taarifa ya faragha kama AI inashughulikia taarifa", "Sheria hutofautiana; muulize wakili"] }
          ],
          sources: [{ name: "FTC: Kulinda Taarifa Binafsi, Mwongozo kwa Biashara", url: "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business" }],
          tryIt: "Orodhesha taarifa za wateja ulizo nazo, andika orodha yako ya kamwe-kwenye-AI, na ukague mipangilio ya faragha ya zana ya AI unayotumia zaidi.",
          youCanNow: "kuamua taarifa zipi za wateja zinaweza kuingia kwenye zana za AI na kulinda zilizobaki.",
          quickCheck: [
            { objective: "O3", q: "\"Scale down\" inamaanisha nini katika kanuni za FTC kuhusu taarifa?", options: ["Kuweka tu taarifa unazohitaji", "Kutumia herufi ndogo", "Kuajiri wafanyakazi wachache", "Kufuta tovuti yako"], answer: 0, why: "Ukiweka taarifa chache, ni chache zinazoweza kupotea." },
            { objective: "O3", q: "Unataka AI ifupishe barua pepe za wateja. Unakagua nini kwanza?", options: ["Zana ina kasi kiasi gani", "Masharti ya faragha ya zana na mipangilio kuhusu kufundisha AI kwa taarifa zako", "Rangi za zana", "Hakuna kitu"], answer: 1, why: "Jua zana inavyohifadhi na kutumia taarifa kabla taarifa za wateja hazijaingia." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Jua hatari na ukague kazi",
        questions: [
          { objective: "O1", q: "Ipi ni hatari ya usahihi?", options: ["AI inatumia rangi za chapa yako", "AI inabuni bei ambayo hukuwahi kuweka", "AI inaandika barua pepe fupi", "AI inatengeneza orodha"], answer: 1, why: "Ukweli uliobuniwa ndiyo hatari ya usahihi." },
          { objective: "O2", q: "Unatumia AI kupanga maombi ya kazi. Nini kingine lazima ukague?", options: ["Hali ya hewa", "Herufi tu", "Hakuna, AI haina upande", "Kama inawatendea makundi ya watu isivyo haki"], answer: 3, why: "Sheria za kupinga ubaguzi bado zinatumika AI inaposaidia kuamua." },
          { objective: "O2", q: "Nani anapaswa kufanya uamuzi wa kuajiri?", options: ["Mtu, AI ikipanga taarifa tu", "AI peke yake", "Zana yoyote", "Mwombaji kazi"], answer: 0, why: "Maamuzi mazito yanabaki kwa mtu." },
          { objective: "O3", q: "Ipi ni mojawapo ya kanuni tano za FTC kuhusu taarifa?", options: ["Kushiriki taarifa na zana zote", "Kukusanya kila kitu milele", "Scale down: weka tu unachohitaji", "Kutopanga mbele kamwe"], answer: 2, why: "Scale down ni mojawapo ya kanuni tano." },
          { objective: "O3", q: "Kipi kisiingie kamwe kwenye zana ya mazungumzo ya AI?", options: ["Muhtasari usio na majina", "Saa zako za kufungua", "Namba ya kadi ya mteja", "Orodha ya huduma zako"], answer: 2, why: "Namba za kadi ni taarifa binafsi nyeti." }
        ]
      }
    },
    {
      name: "Sura 2: Madai ya kweli, umiliki na sera yako",
      lessons: [
        {
          objectives: ["O4"],
          title: "Madai ya kweli kuhusu AI, uidhinishaji na maoni ya wateja",
          minutes: 5,
          goal: "Kagua matangazo yako kwa madai ya AI yanayopotosha, uidhinishaji usiowekwa wazi na maoni ya uongo.",
          text: [
            "FTC inasema matangazo lazima yawe ya kweli, yasiyopotosha na yenye ushahidi, na hilo linahusu madai kuhusu AI. Usiseme bidhaa yako \"inatumia AI\" kama haitumii, na usizidishe kile AI inachofanya au usahihi wake. Mwaka 2026 FTC ilikamilisha amri dhidi ya makampuni yaliyodai kuwa huduma yao ya matangazo ya AI ilisikiliza mazungumzo ya watu kupitia vifaa janja, wakati haikufanya hivyo.",
            "Ukimlipa mtu au ukimpa bidhaa bure ili akutangaze, uhusiano huo lazima uwekwe wazi, kama \"#ad\" mwanzoni mwa chapisho au ndani ya video yenyewe. Wewe unawajibika kwa kile wanachosema wanaokutangaza.",
            "Sheria ya FTC kuhusu maoni ya uongo inapiga marufuku maoni na ushuhuda wa uongo, pamoja na maoni yaliyotengenezwa na AI ya watu wasiokuwepo, na inapiga marufuku zawadi zinazotolewa tu kwa maoni mazuri. Ongea na wakili kama huna uhakika kama dai au kampeni inaruhusiwa."
          ],
          steps: ["Orodhesha kila dai ambalo matangazo yako yanatoa kuhusu AI au matokeo.", "Bakiza madai ya kweli tu ambayo unaweza kuthibitisha.", "Hakikisha kila tangazo lililolipiwa au la zawadi lina maelezo ya wazi.", "Hakikisha kila maoni ni ya kweli na hayakulipiwa kwa zawadi ya kutoa alama nzuri.", "Muulize wakili ukiwa na shaka."],
          words: [["Kuthibitisha (substantiate)", "kuunga mkono dai kwa ushahidi."], ["Uhusiano wa kimaslahi (material connection)", "kiungo kama malipo au bidhaa za bure kati ya biashara na mtu anayeitangaza."]],
          slides: [
            { title: "Madai ya kweli kuhusu AI", bullets: ["Ya kweli, yasiyopotosha, yenye ushahidi", "Usiseme \"inatumia AI\" kama haitumii", "Usizidishe usahihi"] },
            { title: "Mfano wa hatua za FTC", bullets: ["Amri za 2026 kuhusu madai ya uongo ya huduma ya matangazo ya AI", "Ilidai kutumia sauti za watu; haikufanya hivyo"] },
            { title: "Uidhinishaji na maoni ya wateja", bullets: ["Weka wazi matangazo yaliyolipiwa au ya zawadi", "Maoni ya uongo na yaliyotengenezwa na AI yamepigwa marufuku", "Hakuna zawadi kwa maoni mazuri tu"] }
          ],
          sources: [{ name: "FTC: Misingi ya Matangazo na Masoko", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }, { name: "FTC: Amri dhidi ya Cox Media Group na makampuni mengine mawili kuhusu madai ya masoko ya AI (2026)", url: "https://www.ftc.gov/news-events/news/press-releases/2026/08/ftc-finalizes-orders-cox-media-group-two-other-firms-settling-charges-they-deceived-customers-about" }, { name: "FTC: Miongozo ya Uidhinishaji, Maswali Yanayoulizwa na Watu", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" }, { name: "FTC: Sheria ya mwisho inayopiga marufuku maoni na ushuhuda wa uongo (taarifa kwa vyombo vya habari)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" }],
          tryIt: "Pitia tovuti yako au machapisho yako ya mitandao ya kijamii. Orodhesha kila dai kuhusu AI au matokeo, na uweke alama: bakiza (la kweli na linaloweza kuthibitishwa), rekebisha, au ondoa. Kagua kila chapisho lililolipiwa kama lina maelezo ya wazi.",
          youCanNow: "kukagua matangazo yako kwa madai ya kweli kuhusu AI, maelezo sahihi ya uwazi na maoni halisi ya wateja.",
          quickCheck: [
            { objective: "O4", q: "Nini kinafanya dai la AI katika tangazo likubalike chini ya sheria za FTC?", options: ["Linasikika la kusisimua", "Washindani nao wanalisema", "Ni la kweli, halipotoshi na lina ushahidi", "Liko kwa herufi ndogo"], answer: 2, why: "Sheria za matangazo za FTC zinahusu madai ya AI kama madai mengine yoyote." },
            { objective: "O4", q: "Mtengeneza maudhui uliyemlipa anachapisha kuhusu duka lako bila kuweka wazi. Unafanya nini?", options: ["Hakuna; ni chapisho lake", "Kulisambaza zaidi", "Kumlipa tena", "Kumwomba aongeze maelezo ya wazi kama \"#ad\" mwanzoni"], answer: 3, why: "Biashara inawajibika kwa kile wanachosema wanaoitangaza kwa malipo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Hakimiliki na kazi iliyotengenezwa na AI",
          minutes: 5,
          goal: "Eleza nani anaweza kumiliki kazi iliyosaidiwa na AI na jinsi ya kupunguza hatari ya kunakili.",
          text: [
            "Ripoti ya US Copyright Office (Ofisi ya Hakimiliki ya Marekani) kuhusu kazi zinazoweza kupata hakimiliki (Januari 2025) inasema hakimiliki inalinda uandishi wa binadamu. Kazi iliyotengenezwa na AI peke yake hailindwi, na kuandika prompt tu hakukufanyi kuwa mwandishi wa matokeo. Lakini kutumia AI kama chombo hakuzuii ulinzi: mpangilio wako wa ubunifu, marekebisho yako, au kazi uliyoifanya mwenyewe inayoonekana katika matokeo inaweza kulindwa.",
            "Maana yake kwa biashara: kama unahitaji kumiliki kitu, kama nembo yako, miundo ya bidhaa au kitabu, weka ubunifu halisi wa binadamu ndani yake na uhifadhi kumbukumbu za ulichofanya. Unaposajili kazi yenye maudhui yaliyotengenezwa na AI, Ofisi ina mwongozo kuhusu kuweka hilo wazi.",
            "Hatari nyingine ni kunakili. Matokeo ya AI wakati mwingine yanaweza kufanana na kazi au chapa ya mtu mwingine. Usiiombe AI inakili msanii aliye hai, nembo ya chapa au mhusika maarufu, na ukague matokeo muhimu. Sheria ya hakimiliki kuhusu AI bado inabadilika, na kesi mahakamani zinaendelea; ongea na wakili kabla ya kutegemea kazi iliyotengenezwa na AI kwa jambo muhimu."
          ],
          steps: ["Weka alama vitu vipi vya biashara unahitaji kumiliki (nembo, miundo, vitabu, kozi).", "Kwa hivyo, ongeza kazi halisi ya ubunifu ya binadamu na uhifadhi maelezo au rasimu.", "Usiiombe AI inakili msanii, chapa au mhusika fulani.", "Kagua matokeo muhimu kama yanafanana na kazi za wengine.", "Ongea na wakili kabla ya kusajili au kutegemea kazi iliyosaidiwa na AI."],
          words: [["Hakimiliki (copyright)", "haki ya kisheria ya kudhibiti kunakiliwa kwa kazi asili ya ubunifu."], ["Uandishi wa binadamu", "maamuzi ya ubunifu yaliyofanywa na mtu, ambayo hakimiliki inayalinda."], ["Kusajili", "kuwasilisha kazi kwa Ofisi ya Hakimiliki ili kurekodi dai lako."]],
          slides: [
            { title: "Ofisi ya Hakimiliki inasema nini", bullets: ["Hakimiliki inalinda uandishi wa binadamu", "Kazi ya AI peke yake: hailindwi", "Prompt peke yake haikufanyi kuwa mwandishi"] },
            { title: "AI kama chombo ni sawa", bullets: ["Marekebisho na mpangilio wako wa ubunifu unaweza kulindwa", "Sehemu ulizofanya mwenyewe zinazoonekana katika matokeo"] },
            { title: "Kumiliki kilicho muhimu", bullets: ["Ongeza ubunifu halisi wa binadamu", "Hifadhi rasimu na maelezo", "Fuata mwongozo wa Ofisi kuhusu kuweka AI wazi"] },
            { title: "Epuka kunakili", bullets: ["Usinakili wasanii, nembo au wahusika", "Sheria bado inabadilika: muulize wakili"] }
          ],
          sources: [{ name: "US Copyright Office: Hakimiliki na Akili Bandia (AI)", url: "https://www.copyright.gov/ai/" }, { name: "US Copyright Office: Tangazo la ripoti ya Sehemu ya 2 kuhusu kazi zinazoweza kupata hakimiliki (Januari 2025)", url: "https://www.copyright.gov/newsnet/2025/1060.html" }],
          tryIt: "Orodhesha vitu vitatu vya biashara ulivyotengeneza au unavyopanga kutengeneza kwa AI. Kwa kila kimoja, andika kama unahitaji kukimiliki na kazi gani ya ubunifu ya binadamu utaongeza, na uandike vile vinavyohitaji ushauri wa wakili.",
          youCanNow: "kueleza misingi ya hakimiliki kwa kazi iliyotengenezwa na AI na kupunguza hatari yako ya kunakili.",
          quickCheck: [
            { objective: "O5", q: "Kwa mujibu wa US Copyright Office, nini kinalindwa katika kazi iliyosaidiwa na AI?", options: ["Michango ya ubunifu ya binadamu", "Kila kitu ambacho AI ilitengeneza", "Prompt tu", "Hakuna kitu kamwe"], answer: 0, why: "Kazi ya ubunifu ya binadamu inaweza kulindwa; kazi ya AI peke yake hailindwi." },
            { objective: "O5", q: "Unahitaji kumiliki nembo yako mpya. Unafanya nini?", options: ["Kutumia picha ya AI peke yake kama ilivyo", "Kuongeza kazi halisi ya ubunifu ya binadamu, kuhifadhi kumbukumbu na kumuuliza wakili ukiwa na shaka", "Kunakili nembo maarufu", "Kuacha kuwa na nembo"], answer: 1, why: "Kazi ya ubunifu ya binadamu na kumbukumbu hufanya ulinzi uwezekane zaidi; wakili anaweza kukushauri." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuandika sera yako ya matumizi ya AI",
          minutes: 6,
          goal: "Andika sera ya ukurasa mmoja ya matumizi ya AI kwa biashara yako.",
          text: [
            "Sera ya matumizi ya AI ni sheria chache fupi kuhusu jinsi wewe na yeyote anayefanya kazi nawe mnavyotumia AI. Inageuza kila kitu katika kozi hii kuwa mazoea. Inawasaidia wasaidizi wapya, inawapa wateja amani, na inaonyesha ulikuwa mwangalifu kitu kikienda vibaya.",
            "Sera rahisi ina sehemu saba: zana zilizoidhinishwa; taarifa za kamwe-kwenye-AI; kazi za AI zinazohitaji ukaguzi wa mtu kila mara; madai ya kweli na uwazi; hakimiliki na umiliki; umuulize nani ukiwa na shaka (pamoja na wakili); na tarehe ya kuipitia upya.",
            "AI inaweza kuandika rasimu: ipe orodha yako ya hatari na sheria za kozi hii, na uombe sera ya ukurasa mmoja kwa maneno rahisi. Kisha irekebishe ili kila sheria iwe kitu utakachofanya kweli, ishiriki na yeyote anayekusaidia, na uipitie upya kila miezi sita."
          ],
          steps: ["Kusanya orodha yako ya hatari, orodha ya kamwe-kwenye-AI na ukaguzi wa madai kutoka masomo yaliyopita.", "Iombe AI sera ya ukurasa mmoja yenye sehemu saba, kwa maneno rahisi.", "Rekebisha kila sheria ili iwe kweli kwa biashara yako.", "Ishiriki na yeyote anayekusaidia.", "Weka tarehe ya kuipitia upya miezi sita kuanzia sasa."],
          words: [["Sera ya matumizi ya AI", "sheria chache fupi kuhusu jinsi biashara inavyotumia AI."], ["Tarehe ya kupitia upya", "siku utakayokagua na kusasisha sera."]],
          slides: [
            { title: "Kwa nini sera", bullets: ["Inageuza sheria nzuri kuwa mazoea", "Inawaongoza wasaidizi, inawapa wateja amani"] },
            { title: "Sehemu saba", bullets: ["Zana zilizoidhinishwa; taarifa za kamwe-kwenye-AI", "Ukaguzi wa mtu; madai ya kweli na uwazi", "Hakimiliki; umuulize nani; tarehe ya kupitia upya"] },
            { title: "Ifanye iwe halisi", bullets: ["Iache AI iandike rasimu kutoka maelezo yako", "Rekebisha kila sheria ikufae", "Ishiriki, ipitie upya kila miezi sita"] }
          ],
          tryIt: "Kazi ya mwisho: andika sera yako ya ukurasa mmoja ya matumizi ya AI yenye sehemu zote saba, irekebishe ifae biashara yako, na uweke tarehe ya kuipitia upya.",
          youCanNow: "kuendesha matumizi ya AI katika biashara yako chini ya sera iliyo wazi, ya kweli na iliyoandikwa, na kujua lini kumpigia wakili.",
          quickCheck: [
            { objective: "O6", q: "Sera ya matumizi ya AI ni nini?", options: ["Orodha ya bei za zana za AI", "Makala ya blogu iliyoandikwa na AI", "Sheria zilizoandikwa kuhusu jinsi biashara yako inavyotumia AI", "Mkataba na mteja"], answer: 2, why: "Sera inamwambia kila mtu jinsi AI inavyotumika kwa usalama katika biashara." },
            { objective: "O6", q: "Zana mpya ya AI imetoka na wafanyakazi wako wanataka kuitumia. Sera yako inakuambia ufanye nini?", options: ["Kuwaacha wote waijaribu kwa taarifa za wateja", "Kupiga marufuku AI yote", "Kupuuza sera", "Kuikagua kwa kufuata sera kabla ya kuiongeza kwenye orodha ya zana zilizoidhinishwa"], answer: 3, why: "Sera inaorodhesha zana zilizoidhinishwa na jinsi zana mpya zinavyoongezwa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Madai ya kweli, umiliki na sera yako",
        questions: [
          { objective: "O4", q: "App yako haitumii AI. Unaweza kuitangaza kama \"inaendeshwa na AI\"?", options: ["Hapana, hilo ni dai la uongo", "Ndiyo, kila mtu anafanya hivyo", "Kwa herufi ndogo tu", "Mtandaoni tu"], answer: 0, why: "Madai ya matangazo, pamoja na madai ya AI, lazima yawe ya kweli." },
          { objective: "O4", q: "Ni desturi ipi ya maoni ya wateja ambayo sheria ya FTC inapiga marufuku?", options: ["Kuonyesha maoni halisi kwa ruhusa", "Kuwaomba wateja maoni ya kweli", "Kujibu maoni", "Kuchapisha maoni yaliyotengenezwa na AI ya watu wasiokuwepo"], answer: 3, why: "Sheria inapiga marufuku maoni ya uongo, pamoja na yale yaliyotengenezwa na AI." },
          { objective: "O5", q: "Kwa mujibu wa US Copyright Office, kuandika prompt kunakufanya kuwa mwandishi wa matokeo ya AI?", options: ["Ndiyo, kila mara", "Hapana, prompt peke yake haitoshi", "Kwa prompt ndefu tu", "Kwa picha tu"], answer: 1, why: "Ofisi inasema prompt peke yake haimfanyi mtu kuwa mwandishi." },
          { objective: "O5", q: "Unawezaje kufanya kazi iliyosaidiwa na AI iwe na nafasi zaidi ya kulindwa?", options: ["Kuongeza kazi halisi ya ubunifu ya binadamu na kuhifadhi kumbukumbu", "Kutumia prompt nyingi zaidi", "Kuongeza neno \"copyright\"", "Kutumia zana ya AI ya kulipia"], answer: 0, why: "Michango ya ubunifu ya binadamu inaweza kulindwa." },
          { objective: "O6", q: "Unapaswa kuipitia upya sera yako ya matumizi ya AI mara ngapi?", options: ["Baada ya kushtakiwa tu", "Kamwe", "Kwa tarehe iliyopangwa, kama kila miezi sita", "Kila siku"], answer: 2, why: "Zana na sheria hubadilika, kwa hiyo kuipitia mara kwa mara kunaiweka sasa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Maadili ya AI, Hatari na Masuala ya Kisheria",
    questions: [
      { objective: "O1", q: "Ipi SI mojawapo ya hatari tano za AI katika kozi hii?", options: ["Usahihi", "Muda wa betri kudumu", "Faragha", "Haki"], answer: 1, why: "Hatari tano ni usahihi, haki, faragha, ukweli na umiliki." },
      { objective: "O6", q: "Kuwa na maadili katika kutumia AI kunajumuisha:", options: ["Kukusanya taarifa zote unazoweza", "Kuiacha AI iamue kila kitu", "Kuficha matumizi ya AI kwa kila mtu", "Kuhakikisha mtu ndiye anayewajibika"], answer: 3, why: "Mtu anabaki kuwajibika kwa matumizi ya AI." },
      { objective: "O1", q: "Orodha ya hatari inarekodi:", options: ["Wafuasi wako wa mitandao ya kijamii", "Nywila za washindani wako", "Bei za zana zako tu", "Unatumia AI wapi, nini kinaweza kwenda vibaya, kwa ukubwa gani, na ukaguzi"], answer: 3, why: "Hilo linafanya hatari ziweze kudhibitiwa." },
      { objective: "O2", q: "Kazi ipi ya AI inahitaji ukaguzi wa mtu kila mara?", options: ["Mawazo yako binafsi utakayoyatupa", "Orodha ya bei ambayo wateja wataiona", "Orodha ya mawazo ya chakula cha mchana", "Utani kwa ajili yako mwenyewe"], answer: 1, why: "Taarifa za pesa zinazoonwa na wateja lazima zikaguliwe." },
      { objective: "O2", q: "Upendeleo (bias) katika AI ni:", options: ["Kosa la tahajia", "Jibu la polepole", "Matokeo yasiyo ya haki kwa baadhi ya makundi", "Aina ya zana"], answer: 2, why: "Hiyo ndiyo maana yake." },
      { objective: "O2", q: "Sheria za kupinga ubaguzi zinatumika AI inaposaidia kufanya uamuzi wa kuajiri?", options: ["Ndiyo", "Hapana, kompyuta zimesamehewa", "Kwa makampuni makubwa ya nje tu", "Kwa maombi ya karatasi tu"], answer: 0, why: "Sheria inahusu uamuzi, bila kujali umefanywaje." },
      { objective: "O2", q: "Kwa maamuzi ya mikopo au makazi, AI inapaswa:", options: ["Kufichwa kwa mteja", "Kuamua peke yake", "Kupanga taarifa huku mtu akiamua", "Kuchukua nafasi ya wakili wako"], answer: 2, why: "Maamuzi mazito yanabaki kwa mtu." },
      { objective: "O3", q: "\"Take stock\" katika mwongozo wa FTC inamaanisha:", options: ["Kujua taarifa binafsi ulizo nazo", "Kununua hisa", "Kuhesabu bidhaa zako tu", "Kufuta kila kitu"], answer: 0, why: "Ni kanuni ya kwanza kati ya zile tano." },
      { objective: "O3", q: "\"Pitch it\" katika mwongozo wa FTC inamaanisha:", options: ["Kutoa maelezo ya mauzo", "Kuondoa ipasavyo taarifa usizohitaji tena", "Kurusha mpira", "Kuziweka mtandaoni"], answer: 1, why: "Taarifa za zamani usizohitaji ni hatari." },
      { objective: "O3", q: "Kama lazima utumie taarifa za wateja na zana ya AI, chagua:", options: ["Kujitumia kwa barua pepe", "Zana yoyote ya bure bila kusoma masharti", "Kuziweka hadharani", "Mpango ambao masharti yake yanasema hautafundisha AI kwa taarifa zako"], answer: 3, why: "Masharti ya biashara yanaweza kulinda taarifa vizuri zaidi." },
      { objective: "O3", q: "Kama zana za AI zinashughulikia taarifa za wateja, taarifa yako ya faragha inapaswa:", options: ["Kusema hivyo kwa ukweli", "Kulificha", "Kusema hutumii kompyuta kamwe", "Kuondolewa"], answer: 0, why: "Ukweli kwa wateja unahitajika na ni wa kimaadili." },
      { objective: "O4", q: "Sheria za matangazo za FTC zinasema madai lazima yawe:", options: ["Yameidhinishwa na zana ya AI", "Ya kuchekesha", "Mafupi", "Ya kweli, yasiyopotosha na yenye ushahidi"], answer: 3, why: "Hicho ndicho kiwango cha ukweli katika matangazo." },
      { objective: "O4", q: "Amri za FTC za 2026 zilizojadiliwa katika kozi hii zilihusu:", options: ["Saa za kufungua duka", "Kuchelewa kuwasilisha kodi", "Madai ya uongo kuhusu kile huduma ya matangazo ya AI ilichofanya", "Kuchelewa kwa usafirishaji"], answer: 2, why: "Makampuni yalidai kutumia sauti za watu wakati hayakufanya hivyo." },
      { objective: "O4", q: "Mtu maarufu mtandaoni uliyemlipa anachapisha kuhusu wewe. Lazima:", options: ["Alifiche kwenye maoni", "Aliweke wazi, kama \"#ad\" mwanzoni", "Asiseme chochote", "Alitaje mara moja kwa mwaka"], answer: 1, why: "Uhusiano wa kimaslahi lazima uwekwe wazi." },
      { objective: "O4", q: "Nani anawajibika kwa kile wanachosema kuhusu wewe wanaokutangaza kwa malipo?", options: ["Hakuna", "Mtangazaji peke yake", "Jukwaa la mtandaoni", "Wewe, biashara"], answer: 3, why: "FTC inasema biashara zinawajibika kwa madai ya wanaozitangaza." },
      { objective: "O4", q: "Kutoa punguzo kwa wateja wanaoacha maoni ya nyota 5 tu ni:", options: ["Lazima", "Wazo zuri sana", "Imepigwa marufuku na sheria ya FTC kuhusu maoni ya uongo", "Sawa kama limeelezwa kwa herufi ndogo sana"], answer: 2, why: "Zawadi zinazotegemea maoni mazuri zimepigwa marufuku." },
      { objective: "O5", q: "Kwa mujibu wa Ofisi ya Hakimiliki, kazi iliyotengenezwa na AI peke yake:", options: ["Hailindwi na hakimiliki", "Ni yako moja kwa moja", "Inamilikiwa na AI", "Inalindwa kwa miaka 100"], answer: 0, why: "Hakimiliki inahitaji uandishi wa binadamu." },
      { objective: "O5", q: "Kutumia AI kama chombo katika kazi yako ya ubunifu:", options: ["Kila mara kunafuta hakimiliki", "Peke yake hakuzuii hakimiliki kwa michango yako ya binadamu", "Kunafanya kila kitu kuwa mali ya umma", "Ni kinyume cha sheria"], answer: 1, why: "Ofisi inasema kazi zilizosaidiwa na AI zinaweza kulindwa pale ubunifu wa binadamu unapoonekana." },
      { objective: "O5", q: "Ombi lipi linaongeza hatari ya kunakili?", options: ["\"Nipe mawazo ya nembo ya duka la mikate\"", "\"Tengeneza nembo inayofanana kabisa na ya [chapa maarufu]\"", "\"Pendekeza rangi kwa biashara ya usafi\"", "\"Andika kauli mbiu kuhusu mkate mpya\""], answer: 1, why: "Kunakili nembo ya chapa kunaweza kuvunja haki za alama ya biashara au hakimiliki." },
      { objective: "O6", q: "Ukiwa na shaka kuhusu swali la kisheria kwa biashara yako, unapaswa:", options: ["Kuongea na wakili kuhusu hali yako", "Kuamini chochote AI inachosema", "Kulipuuza", "Kunakili anachofanya mshindani"], answer: 0, why: "Sheria hubadilika na hutofautiana kwa mahali; wakili anaweza kukushauri." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      1,
      3,
      4,
      7,
      9,
      11,
      13,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Zana zilizoidhinishwa na taarifa",
        objective: "O3",
        notYet: "Hakuna orodha ya zana zilizoidhinishwa au hakuna orodha ya kamwe-kwenye-AI.",
        meets: "Zana zilizoidhinishwa zimetajwa, na kuna orodha wazi ya taarifa ambazo hazipaswi kamwe kuingia ndani yake.",
        exceeds: "Inataja mpangilio wa faragha uliokaguliwa katika kila zana iliyoidhinishwa."
      },
      {
        name: "Ukaguzi wa mtu",
        objective: "O2",
        notYet: "Haisemi kazi zipi za AI zinahitaji mtu kuzikagua.",
        meets: "Ukweli, pesa, sheria, afya na chochote wateja wanachokiona vyote vinahitaji ukaguzi wa mtu.",
        exceeds: "Inataja nani anakagua na anaangalia nini, pamoja na haki."
      },
      {
        name: "Madai ya kweli na uidhinishaji",
        objective: "O4",
        notYet: "Hakuna sheria kuhusu madai ya AI, uidhinishaji uliolipiwa au maoni ya wateja.",
        meets: "Madai lazima yawe ya kweli na yanayoweza kuthibitishwa; machapisho yaliyolipiwa yawekwe wazi; hakuna maoni ya uongo au yaliyonunuliwa.",
        exceeds: "Inajumuisha matokeo ya ukaguzi wa mmiliki wa bakiza, rekebisha au ondoa."
      },
      {
        name: "Hakimiliki",
        objective: "O5",
        notYet: "Hakuna sheria kwa maudhui yaliyotengenezwa na AI.",
        meets: "Inasema lini kazi ya ubunifu ya binadamu inaongezwa na lini kumuuliza wakili kuhusu umiliki.",
        exceeds: "Inaorodhesha vitu muhimu vya biashara vilivyosaidiwa na AI na jinsi kila kimoja kinavyoshughulikiwa."
      },
      {
        name: "Uwajibikaji na kupitia upya",
        objective: "O6",
        notYet: "Hakuna aliyetajwa kuwajibika, au hakuna tarehe ya kupitia upya.",
        meets: "Inataja nani anawajibika, lini kumpigia wakili na tarehe ya kupitia upya.",
        exceeds: "Inarudi kwenye orodha ya hatari ili kila hatari kubwa iwe na sheria."
      }
    ]
  },
  evaluation: {
    results: [
      "Wamiliki wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wamiliki wanaoanza kutumia sera yao ya matumizi ya AI na kuishiriki na wafanyakazi ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wamiliki wanaorekebisha au kuondoa angalau dai moja linalopotosha kwenye tovuti yao au kurasa za mitandao ya kijamii",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya wajasiriamali ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye zana za AI ambazo biashara inatumia",
      "Tovuti ya biashara, kurasa za mitandao ya kijamii na orodha ya taarifa za wateja zilizopo",
      "Kiolezo cha sera cha ukurasa mmoja chenye sehemu saba",
      "Kama dakika 60 hadi 75 kwa jumla kwa masomo, ukaguzi, majaribio na sera"
    ],
    facilitatorNotes: [
      "Sema mwanzoni kwamba kozi hii ni elimu, si ushauri wa kisheria, na kwamba sheria hutofautiana kwa jimbo na nchi.",
      "Waache wamiliki wakague madai ya tovuti zao wawili wawili, wakiweka alama bakiza, rekebisha au ondoa.",
      "Usitumie taarifa halisi za wateja katika mazoezi; tumia aina za taarifa badala yake.",
      "Kuwa na orodha ya huduma za msaada wa kisheria kwa biashara ndogo au za kupendekeza mawakili katika eneo lako ili uishiriki.",
      "Pima sera kwa rubriki, mstari mmoja wa Bado kwa wakati."
    ]
  }
};
