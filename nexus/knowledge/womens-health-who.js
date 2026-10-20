"use strict";

// The WHO (and, where a page could be read, Kenyan) version of the women's health guide, for everyone outside the United States. Read from the pages listed in SOURCES on 13 October 2026 (see womens-health.js for
// how these are used and for the rules that apply to all of it). Nothing is stated that a page did not say. Not stated, because no readable official page was found: Nigeria's HPV and family planning programmes, any
// Nigerian helpline number, Kenya's screening ages and whether services are free, and the Kenyan community health volunteer system. The pages were read through a summarising fetch tool, so a person should check the
// wording against the pages before this is relied on.

const SOURCES = Object.freeze({
  whoCervical: { name: "WHO: cervical cancer fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/cervical-cancer" },
  whoBreast: { name: "WHO: breast cancer fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/breast-cancer" },
  whoFamilyPlanning: { name: "WHO: family planning and contraception fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/family-planning-contraception" },
  whoEmergencyContraception: { name: "WHO: emergency contraception fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/emergency-contraception" },
  whoMenstrual: { name: "WHO: menstrual health fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/menstrual-health" },
  whoMenopause: { name: "WHO: menopause fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/menopause" },
  whoAnc: { name: "WHO: new guidelines on antenatal care (2016)", url: "https://www.who.int/news/item/07-11-2016-new-guidelines-on-antenatal-care-for-a-positive-pregnancy-experience" },
  whoPregnancyServices: { name: "WHO: getting the health services you need during pregnancy", url: "https://www.who.int/tools/your-life-your-health/life-phase/pregnancy--birth-and-after-childbirth/getting-the-health-services-you-need-during-pregnancy" },
  whoKeepingWell: { name: "WHO: keeping well during pregnancy and after childbirth", url: "https://www.who.int/tools/your-life-your-health/life-phase/pregnancy--birth-and-after-childbirth/keeping-well-during-pregnancy-and-after-childbirth" },
  whoPreeclampsia: { name: "WHO: pre-eclampsia fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/pre-eclampsia" },
  whoMaternal: { name: "WHO: maternal mortality fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/maternal-mortality" },
  whoPostnatal: { name: "WHO: quality care for women and newborns in the first weeks after childbirth (2022)", url: "https://www.who.int/news/item/30-03-2022-who-urges-quality-care-for-women-and-newborns-in-critical-first-weeks-after-childbirth" },
  whoAfterChildbirth: { name: "WHO: getting the health services you need after childbirth", url: "https://www.who.int/tools/your-life-your-health/life-phase/pregnancy--birth-and-after-childbirth/getting-the-health-services-you-need-after-childbirth" },
  whoNewborn: { name: "WHO: newborn mortality fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/newborn-mortality" },
  whoPerinatalMentalHealth: { name: "WHO: guide for integration of perinatal mental health (2022)", url: "https://www.who.int/news/item/19-09-2022-launch-of-the-who-guide-for-integration-of-perinatal-mental-health" },
  kenyaPlan: { name: "WHO Africa: Kenya's National Cervical Cancer Elimination Action Plan 2026-2030", url: "https://www.afro.who.int/countries/kenya/news/kenya-launches-national-cervical-cancer-elimination-action-plan-2026-2030" },
  kenyaSingleDose: { name: "WHO Africa: Kenya moves to a single-dose HPV schedule", url: "https://www.afro.who.int/countries/kenya/photo-story/cervical-cancer-elimination-kenya-transitions-single-dose-hpv" },
  kenyaMoh: { name: "Kenya Ministry of Health: efforts to combat cervical cancer (February 2025)", url: "https://www.health.go.ke/kenya-intensifies-efforts-combat-cervical-cancer-amid-rising-burden" },
  unwomen1195: { name: "UN Women Africa: Kenya's national toll-free helpline 1195", url: "https://africa.unwomen.org/en/stories/news/2024/10/kenyas-national-toll-free-helpline-1195-a-lifeline-for-gender-based-violence-survivors" },
  // read again on 19 October 2026 for the topics added then
  whoSti: { name: "WHO: sexually transmitted infections (STIs) fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/sexually-transmitted-infections-(stis)" },
  whoPcos: { name: "WHO: polycystic ovary syndrome fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/polycystic-ovary-syndrome" },
  whoCvd: { name: "WHO: cardiovascular diseases fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)" },
  whoInfantFeeding: { name: "WHO: infant and young child feeding fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding" }
});
const NEW_TOPICS_CHECKED_ON = "19 October 2026";

const TOPICS = Object.freeze({
  "cervical-screening": {
    sources: ["whoCervical"],
    text: "Almost all cervical cancer is caused by a long-lasting infection with high-risk HPV. Most HPV infections clear on their own; when one stays, it can become pre-cancer and then cancer, usually over 15 to 20 years. WHO recommends HPV vaccination, with girls aged 9 to 14 the priority, ideally before they are sexually active, given as one or two doses depending on the national schedule. For screening, WHO recommends an HPV test every 5 to 10 years from age 30, and every 3 to 5 years from age 25 for women living with HIV; a sample you take yourself is considered as reliable as one taken by a health worker. Screening still matters after vaccination, because pre-cancer rarely causes symptoms, and pre-cancer can be treated, often at the same visit. See a health worker for bleeding between periods, after sex or after menopause, heavy or foul-smelling discharge, or lasting pelvic, back or leg pain. Cervical cancer can be cured when it is found and treated early. To be reminded, say something like remind me about my screening on 3 March at 9 am.",
    kenya: { sources: ["kenyaPlan", "kenyaSingleDose", "kenyaMoh"], text: " In Kenya, WHO and the Ministry of Health say the HPV vaccine is now a single dose, given at health facilities; the Ministry's February 2025 page says for girls aged 10 to 15, and the national plan for 2026 to 2030 puts HPV testing and self-sampling at primary health care level. Ask your health facility which age and which services apply to you." }
  },
  "breast-health": {
    sources: ["whoBreast"],
    text: "WHO says finding breast cancer early depends on knowing the signs and getting checked, and on screening. Mammography screening is usually for women aged 50 to 69, but WHO says it is not practical in many countries at present, so knowing the signs and getting a prompt check matter most. See a health worker about: a lump or thickening in the breast, often painless; a change in the size, shape or look of the breast; dimpling, redness or other skin changes; changes in the nipple or the skin around it; abnormal or bloody nipple discharge; or a wound on the breast that does not heal. Most breast lumps are not cancer, but have any lump checked even if it does not hurt. Cancer is more likely to be treated successfully when it is small and has not spread. To be reminded to get checked, say something like remind me about my breast check on 3 March at 9 am."
  },
  "contraception": {
    sources: ["whoFamilyPlanning", "whoEmergencyContraception"],
    text: "WHO lists these methods: implants, IUDs and sterilisation, which are highly effective and long-lasting; pills, injections, patches and vaginal rings, which work well when used correctly; condoms; and fertility-awareness methods and withdrawal, which are less reliable. Condoms are the only method that also protects against infections such as HIV. The right choice depends on your health, your wishes and your needs, and a health worker can advise on which methods suit you. Emergency contraception is for after sex, within 5 days, and works better the sooner it is used; WHO says it can prevent over 95% of pregnancies when used within 5 days. A copper IUD is the most effective form, and emergency pills are the other. It does not cause an abortion and cannot end a pregnancy that has begun. Using it often can make periods irregular, so talk to a health worker about regular contraception."
  },
  "periods-cycle": {
    sources: ["whoMenstrual"],
    text: "WHO says more than 2 in 3 people who menstruate have pain with their bleeding, and heavy bleeding is common and can lead to iron-deficiency anaemia. Worrying symptoms are a good reason to get care. WHO names severe or very painful periods, heavy bleeding, low or anxious mood linked to the cycle, and periods that are absent or rare. Unpredictable, very heavy or painful bleeding can point to a condition such as endometriosis, fibroids, polycystic ovary syndrome or a bleeding disorder, which a health worker can look into. Good information before the first period, affordable products, and a private, safe place to change and wash are all part of menstrual health."
  },
  "menopause": {
    sources: ["whoMenopause"],
    text: "Menopause is when your periods end because the ovaries stop releasing eggs. It is a natural stage of life, not a disease. WHO says most women reach it between about 45 and 55; it can come earlier, including after surgery that removes both ovaries or after radiation or chemotherapy. The lead-up, perimenopause, can last several years and ends one year after your last period. Common signs are hot flushes, night sweats, irregular periods, vaginal dryness, pain during sex, passing urine without meaning to, poor sleep and mood changes; some women have few or none. Menopause raises the risk of heart disease and lowers bone density, which can lead to fractures. Treatments that do and do not use hormones can ease symptoms. You can still get pregnant during perimenopause, so WHO advises contraception until 12 months without a period. Talk to a health worker about any symptoms that affect your health, well-being or daily life."
  },
  "prenatal-care": {
    sources: ["whoAnc", "whoPregnancyServices", "whoPreeclampsia", "whoMaternal"],
    text: "WHO recommends at least 8 antenatal contacts with a health worker: the first within the first 12 weeks, then at 20, 26, 30, 34, 36, 38 and 40 weeks. More contacts mean more chances to find and manage problems. Make a plan for the birth and for what to do if something goes wrong. Go to a health facility right away for bleeding, a severe headache, blurred vision or seeing spots, pain in the upper belly, swelling of the hands and face, or a high fever. Pre-eclampsia can have no symptoms, which is why antenatal visits check your blood pressure and your urine. WHO says most deaths of mothers come from severe bleeding, infection, high blood pressure in pregnancy and complications of delivery, and that most are preventable or treatable; bleeding after birth can kill a healthy woman within hours, so having a skilled health worker with you can mean life or death. To be reminded of a visit, say something like remind me about my antenatal visit on Thursday at 10 am."
  },
  "postpartum": {
    sources: ["whoPostnatal", "whoAfterChildbirth", "whoNewborn", "whoKeepingWell", "whoPerinatalMentalHealth"],
    text: "WHO says you and your baby should stay in a health facility for at least 24 hours after the birth; after a birth at home, the first health worker visit should be as early as possible and within 24 hours. At least three more checks should follow, at 48 to 72 hours, 7 to 14 days and 6 weeks, ideally including home visits. Postnatal care should include contraception. For a new mother, abdominal pain and vaginal discharge are signs to report. For the baby, go for care for poor feeding, fast breathing, a high temperature, unusual sleepiness, fits or a cold body. Mood: almost 1 in 5 women have a mental health condition in pregnancy or the year after the birth. Ask a health worker for help if you feel very sad, anxious or exhausted, cannot cope, or have thoughts of harming yourself or your baby; you do not have to wait for your next visit."
  },
  "finding-care": {
    sources: [],
    text: "Go to your nearest public health facility or clinic and ask for the service by name, for example family planning, antenatal care, cervical screening or care after a birth. If you are in danger or have been hurt, go to the nearest health facility. I cannot tell which clinics offer which service, so ask when you call. To see clinics on a map, say: find a clinic near, and then your town.",
    kenya: { sources: ["kenyaPlan", "unwomen1195"], text: " In Kenya, WHO says the national cervical cancer plan brings services to primary health care level and reaches all 47 counties. If you or someone you know is facing violence, the national helpline 1195 is toll-free, open 24 hours, with trained counsellors; UN Women says it can connect you with shelters, legal aid, health providers and the police, and takes reports by SMS in several languages including Swahili." }
  },
  "checkups": {
    sources: ["whoCervical", "whoBreast", "whoSti", "whoAnc"],
    checkedOn: NEW_TOPICS_CHECKED_ON,
    text: "Which checks you can get depends on your country's health programme, so ask a health worker which ones are available to you. WHO says: for cervical cancer, an HPV test every 5 to 10 years from age 30, and every 3 to 5 years from age 25 for women living with HIV. For breast cancer, mammography screening is usually for women aged 50 to 69 but is not practical in many countries at present, so knowing the signs and getting a prompt check matter most. For sexually transmitted infections, screening of people without symptoms is recommended in selected priority populations and settings. In pregnancy, WHO recommends at least 8 antenatal contacts with a health worker, the first within the first 12 weeks. For more on any of these, ask me about cervical screening, breast health, sexually transmitted infections or prenatal care. To be reminded of a check-up, say something like remind me about my check-up on 3 March at 9 am."
  },
  "sti-hiv": {
    sources: ["whoSti"],
    checkedOn: NEW_TOPICS_CHECKED_ON,
    text: "WHO says STIs are often without symptoms, and when symptoms occur they can be non-specific. In 2020 there were an estimated 374 million new infections in people aged 15 to 49. Four STIs are currently curable: syphilis, gonorrhoea, chlamydia and trichomoniasis; herpes and HIV can be managed with antiviral medicines but not cured. Condoms offer one of the most effective methods of protection against STIs, including HIV, but they do not protect against infections that cause sores outside the genitals, such as syphilis or genital herpes. Safe and highly effective vaccines are available for two viral STIs, hepatitis B and HPV. WHO recommends screening for STIs without symptoms in selected priority populations and settings, so ask a health worker which tests apply to you. In women, gonorrhoea and chlamydia are major causes of pelvic inflammatory disease and infertility, and HPV infection causes cervical and other cancers. Mother-to-child transmission of STIs can result in stillbirth, neonatal death, low birth weight and prematurity, and syphilis in pregnancy is a major cause of poor birth outcomes: tell a health worker if you are pregnant or planning to be."
  },
  "pcos": {
    sources: ["whoPcos"],
    checkedOn: NEW_TOPICS_CHECKED_ON,
    text: "WHO says polycystic ovary syndrome (PCOS) is a common hormonal disorder that affects women during their reproductive years and beyond, and that an estimated 10 to 13% of women worldwide are thought to have it, with up to 70% of those women not diagnosed. Symptoms vary and can change over time: irregular, unpredictable or absent periods, difficulty becoming pregnant, extra hair on the face or body, hair thinning, and acne or oily skin. Diagnosis needs at least two of these, once other causes have been excluded: signs of high androgens or a high testosterone level, irregular or absent periods, and polycystic ovaries on an ultrasound; ovarian cysts are not required for a diagnosis. Women with PCOS have a higher risk of obesity, type 2 diabetes, high blood pressure, high cholesterol, heart and blood vessel disease, sleep apnoea, and thickening or cancer of the lining of the womb, and PCOS can affect mental health. There is no cure, but treatment can improve quality of life and lower the long-term risks. Healthy eating and physical activity matter for every woman with PCOS, even without weight loss; combined birth control pills can help regulate the menstrual cycle; other medicines can treat extra hair or acne; and fertility treatments include lifestyle changes, medicines or surgery to start ovulation, and assisted reproduction such as IVF. WHO says seeking care early to manage symptoms can help women protect their health, and recommends that women newly diagnosed have blood tests for insulin resistance and heart and blood vessel risk."
  },
  "heart-health": {
    sources: ["whoCvd"],
    checkedOn: NEW_TOPICS_CHECKED_ON,
    text: "WHO says the main behaviours that raise the risk of heart and blood vessel disease are an unhealthy diet, being inactive, using tobacco and harmful use of alcohol; air pollution also raises it. For a heart attack, the key sign is pain or discomfort in the centre of the chest; it can also be felt in the arms, shoulder, jaw or back, with breathlessness, nausea, light-headedness, a cold sweat or paleness. WHO says women are more likely than men to have shortness of breath, nausea, vomiting, and back or jaw pain. For a stroke, the most common sign is sudden weakness of the face, arm or leg, usually on one side of the body; others are sudden numbness, confusion or trouble speaking, vision problems, loss of balance, a severe headache with no cause, or fainting. People with these symptoms should seek medical care immediately. To lower your risk: stop using tobacco, eat less salt, eat more fruit and vegetables, be active regularly, and avoid harmful use of alcohol. High blood pressure is one of the measurable risk factors, and WHO says medicines for it are necessary to lower the risk of heart attacks and strokes in people who have it, so get your blood pressure checked."
  },
  "breastfeeding": {
    sources: ["whoInfantFeeding"],
    checkedOn: NEW_TOPICS_CHECKED_ON,
    text: "WHO and UNICEF recommend that babies start breastfeeding within 1 hour of birth, are fed only breast milk for the first 6 months, and then, from 6 months, also get safe complementary foods while breastfeeding continues up to 2 years of age or beyond. WHO says mothers and families need to be supported to breastfeed: health services should give feeding counselling at routine contacts such as antenatal, postnatal and immunization visits, and community support includes mother support groups. For mothers living with HIV, WHO says they should breastfeed for at least 12 months and may continue for up to 24 months or longer, with full support to take their antiretroviral treatment; babies of mothers on lifelong treatment can safely begin breastfeeding in the first hour after birth. Ask a health worker about feeding your baby, especially if you have HIV."
  }
});

module.exports = Object.freeze({ SOURCES, TOPICS });
