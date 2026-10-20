"use strict";

// A checked guide to two long-term conditions, diabetes and high blood pressure, for a person living with one, or worried about one: what it is, what the numbers mean, and how to look after yourself day to day. It is information
// from official pages, nothing more. Kyro never diagnoses, never says whether a person's OWN reading is normal for them, and never names a medicine or a dose (those questions, and a reading with symptoms, go to the safety layer, the
// health tool and the medicine rules, which come first: see public/kyro-chronic-topics.js for exactly what is and is not taken). Saving a person's own readings is a different tool and needs a full signed-in account.
//
// Every statement below was read from the pages listed in SOURCES on CHECKED_ON, through a summarising fetch tool, so the wording should be compared with the pages before this is relied on, and it needs clinician review like
// the women's health guide. The United States version (CDC, NIH institutes) is for a person in the United States; everyone else gets the WHO version of the topic, whose numbers differ (WHO treats 140/90 as high blood
// pressure, the United States guidance 130/80).
//
// chronicConditionAnswer(id, { us }) -> { topic, title, text, sources: [{ name, url }] } or null.   The matching of a question to a topic is in public/kyro-chronic-topics.js.

const CHECKED_ON = "19 October 2026";

const SOURCES = Object.freeze({
  cdcDiabetes: { name: "CDC: about diabetes", url: "https://www.cdc.gov/diabetes/about/index.html" },
  cdcDiabetesSymptoms: { name: "CDC: symptoms of diabetes", url: "https://www.cdc.gov/diabetes/signs-symptoms/index.html" },
  cdcType2: { name: "CDC: type 2 diabetes", url: "https://www.cdc.gov/diabetes/about/about-type-2-diabetes.html" },
  cdcDiabetesLiving: { name: "CDC: living with diabetes", url: "https://www.cdc.gov/diabetes/living-with/index.html" },
  niddkTests: { name: "NIDDK (NIH): diabetes tests and diagnosis", url: "https://www.niddk.nih.gov/health-information/diabetes/overview/tests-diagnosis" },
  niddkManaging: { name: "NIDDK (NIH): managing diabetes", url: "https://www.niddk.nih.gov/health-information/diabetes/overview/managing-diabetes" },
  niddkLowGlucose: { name: "NIDDK (NIH): low blood glucose (hypoglycemia)", url: "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/low-blood-glucose-hypoglycemia" },
  niddkFeet: { name: "NIDDK (NIH): diabetes and foot problems", url: "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/foot-problems" },
  cdcBp: { name: "CDC: about high blood pressure", url: "https://www.cdc.gov/high-blood-pressure/about/index.html" },
  cdcBpLiving: { name: "CDC: managing high blood pressure", url: "https://www.cdc.gov/high-blood-pressure/living-with/index.html" },
  cdcBpMeasure: { name: "CDC: measuring your blood pressure", url: "https://www.cdc.gov/high-blood-pressure/measure/index.html" },
  nhlbiBp: { name: "NHLBI (NIH): high blood pressure", url: "https://www.nhlbi.nih.gov/health/high-blood-pressure" },
  nhlbiDash: { name: "NHLBI (NIH): the DASH eating plan", url: "https://www.nhlbi.nih.gov/health/dash-eating-plan" },
  whoDiabetes: { name: "WHO: diabetes fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/diabetes" },
  whoHypertension: { name: "WHO: hypertension fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/hypertension" }
});

const TOPICS = Object.freeze({
  "chronic-overview": {
    title: "Diabetes and high blood pressure: what I can help with",
    us: {
      sources: [],
      text: "I can explain, in plain words and with the official source, what diabetes is and how it is tested for, how to look after yourself with diabetes day to day, what high blood pressure is and what the numbers mean, and how to lower and check your blood pressure at home. Ask in your own words, for example: what is type 2 diabetes, how do I keep track of my blood sugar, what is a healthy blood pressure, or how do I check my blood pressure at home. Once you are signed in with a full account I can also keep your own readings (say, for example, my blood pressure is 130 over 85, or my blood sugar is 110) and remind you to take your medicine or to check, and prepare a summary of your readings for your doctor. I cannot diagnose, tell you whether your own reading is normal for you, or advise on medicines or doses. If you have a very high or very low reading with symptoms such as confusion, chest pain or trouble breathing, get help now: call your local emergency number."
    },
    who: {
      sources: [],
      text: "I can explain, in plain words and with the official source, what diabetes is, how to look after yourself with it, what high blood pressure is and how to lower it. Ask in your own words, for example: what is type 2 diabetes, or how can I lower my blood pressure. Once you are signed in with a full account I can also keep your own readings and remind you to take your medicine or to check, and prepare a summary of your readings for your health worker. I cannot diagnose, tell you whether your own reading is normal for you, or advise on medicines or doses. If you have a very high or very low reading with symptoms such as confusion, chest pain or trouble breathing, get help now: call your local emergency number or go to the nearest clinic."
    }
  },
  "diabetes": {
    title: "Diabetes: what it is, symptoms and testing",
    us: {
      sources: ["cdcDiabetes", "cdcDiabetesSymptoms", "cdcType2", "niddkTests"],
      text: "The CDC says diabetes is a chronic, long-lasting health condition that affects how your body turns food into energy. There are three main types. In type 1, the immune system attacks the cells that make insulin, so people need insulin every day. In type 2, the body does not use insulin well; it develops over many years and is usually diagnosed in adults, though it is increasingly seen in children and young adults. Gestational diabetes develops during pregnancy in a woman who did not have diabetes; it usually goes away after the birth but raises the mother's later risk of type 2. More than 40 million Americans have diabetes, and more than 1 in 4 adults with diabetes do not know they have it. Symptoms the CDC lists: frequent urination, increased thirst and hunger, losing weight without trying, tiredness, feeling irritable, blurry vision, and frequent urinary tract or yeast infections. Type 1 symptoms can appear over weeks or months and can be severe; type 2 symptoms often take years to appear and some people have none, but may include cuts or sores that are very slow to heal, dark patches of skin around the neck, armpits or groin, and numbness or tingling in the hands or feet. Gestational diabetes usually has no symptoms, so the CDC says your doctor should test you between 24 and 28 weeks of pregnancy. Testing: the NIDDK says an A1C test shows your average blood glucose over the last 3 months; it lists an A1C of 6.5% or above, or a fasting blood glucose of 126 mg/dL or above, as the diabetes range, and 5.7% to 6.4% (fasting 100 to 125) as prediabetes. Anyone with symptoms should be tested, and so should people without symptoms who have risk factors; adults and children with normal results are retested every 3 years. Only a doctor can diagnose diabetes. Risk factors for type 2 include prediabetes, overweight, being 45 or older, a parent, brother or sister with type 2, being active less than 3 times a week, and some backgrounds (African American, Hispanic or Latino, American Indian, Alaska Native, and some Pacific Islander and Asian American people). The CDC says you can prevent or delay type 2 diabetes with proven lifestyle changes: weight loss when needed, healthy eating and regular physical activity. High blood sugar can cause serious problems such as heart disease, vision loss and kidney disease."
    },
    who: {
      sources: ["whoDiabetes"],
      text: "WHO says diabetes is a chronic condition in which the body cannot make enough insulin, or cannot use it well, and sugar builds up in the blood. In type 1 diabetes the body makes too little insulin, and people with it need insulin injections for survival. Type 2 diabetes affects how your body uses sugar for energy. Gestational diabetes occurs during pregnancy. Symptoms include feeling very thirsty, needing to urinate more often than usual, blurred vision, feeling tired, and losing weight unintentionally. In 2022, 14% of adults aged 18 and older were living with diabetes, up from 7% in 1990. Diabetes causes blindness, kidney failure, heart attacks, stroke and lower limb amputation. Early diagnosis can be made through relatively inexpensive testing of blood glucose, so ask a health worker for a test if you have symptoms or are at risk. To prevent or delay type 2 diabetes, WHO advises keeping a healthy body weight, getting at least 150 minutes of moderate exercise each week, eating a healthy diet that avoids sugar and saturated fat, and not smoking tobacco. Only a health worker can diagnose diabetes."
    }
  },
  "diabetes-care": {
    title: "Living with diabetes: day-to-day care",
    us: {
      sources: ["cdcDiabetesLiving", "niddkManaging", "niddkLowGlucose", "niddkFeet"],
      text: "The CDC's short list for living with diabetes: test your blood sugar often, take medicines as prescribed even if you feel good, eat healthy food, be active most days, and go to checkups. The NIDDK adds that most people get help from a primary care professional, and that a diabetes educator, dietitian, pharmacist and specialists may join the team. You can check your blood glucose at home with a meter; keep a written or app log of the readings to share with your team. The A1C test, done at a clinic or lab, shows your average over the last 3 months, and the NIDDK lists a goal of below 7% for most adults with diabetes; your own goal is one for your team to set. You can still eat your favorite foods but may need smaller portions or fewer servings: work with your team on a meal plan. Try for at least 150 minutes of moderate activity, such as brisk walking, each week, plus muscle-strengthening activity twice a week. Do not skip or ration medicines because of cost: talk with your team about costs and side effects. Low blood sugar: the NIDDK says signs come on quickly and can include feeling shaky, hungry, tired, dizzy or confused, a headache, a racing heartbeat, and trouble seeing or speaking clearly; if your blood glucose is below your target or under 70 mg/dL, eat or drink 15 to 20 grams of glucose or carbohydrate right away, wait 15 minutes and check again, and repeat until you are back in your target range. Very low blood sugar can cause fainting or a seizure and is an emergency: someone should call 911 right away. To help prevent it, carry fast-acting carbohydrate such as glucose tablets or a juice box, and ask your team whether your medicines can cause low blood sugar. Feet: check your feet every day, wash them in warm, not hot, water, wear shoes and socks at all times, and trim toenails straight across; call your provider right away for a cut, blister or bruise that does not start to heal after a few days, or skin that becomes red, warm or painful. See an eye doctor to check for diabetic eye disease. I cannot tell you what your own target is, or whether a reading is right for you: your care team can."
    },
    who: {
      sources: ["whoDiabetes"],
      text: "WHO says people with type 1 diabetes need insulin injections for survival, and that some people with type 2 diabetes need medicines to manage their blood sugar; the WHO page gives no doses, so take what your health worker prescribes. WHO also says people with diabetes often need medicines to lower their blood pressure and to reduce the risk of complications. The healthy habits that help prevent type 2 diabetes also matter if you have it: keep a healthy body weight, get at least 150 minutes of moderate exercise each week, eat a healthy diet that avoids sugar and saturated fat, and do not smoke tobacco. Look after your feet: WHO says nerve damage and poor blood flow can cause foot problems, and some people need foot care to treat ulcers. WHO says diabetes can lead to blindness, kidney failure, heart attacks, stroke and lower limb amputation. I cannot tell you what your own target is, or whether a reading is right for you: your health worker can."
    }
  },
  "high-blood-pressure": {
    title: "High blood pressure: what it is and what the numbers mean",
    us: {
      sources: ["cdcBp", "nhlbiBp"],
      text: "High blood pressure, also called hypertension, is blood pressure that stays higher than normal. Blood pressure has two numbers: the top number is systolic and the bottom is diastolic. The CDC and the NHLBI give these categories: normal is less than 120 over less than 80; elevated is 120 to 129 over less than 80; and high is 130 or higher over 80 or higher (the NHLBI splits that into stage 1, 130 to 139 or 80 to 89, and stage 2, 140 or higher or 90 or higher). The NHLBI says a reading higher than 180 over 120 is a hypertensive crisis: contact your provider immediately. High blood pressure usually causes no warning signs, and the CDC says measuring it is the only way to know whether you have it; the NHLBI recommends checking at least once a year. It matters because the CDC says high blood pressure increases the risk for heart disease and stroke, and the NHLBI says controlling it can help prevent or delay chronic kidney disease, heart attack, heart failure, stroke and possibly vascular dementia. Your health care team looks at your systolic and diastolic numbers to diagnose it and plan treatment: a diagnosis is for your doctor, not for me."
    },
    who: {
      sources: ["whoHypertension"],
      text: "WHO says hypertension is high blood pressure, defined as 140/90 mmHg or higher, and that it is diagnosed when readings on two different days reach that level. An estimated 1.4 billion adults aged 30 to 79 had hypertension worldwide in 2024, about a third of adults in that age group. People with high blood pressure may not feel any symptoms, so it has to be measured to be found. WHO lists poor diet, being inactive, tobacco and alcohol use and excess weight as risk factors you can change, and family history, age over 65 and conditions such as diabetes or kidney disease as ones you cannot. WHO says the blood pressure goal is less than 130/80 if you have diabetes, cardiovascular disease or chronic kidney disease. A diagnosis is for a health worker: get your blood pressure checked."
    }
  },
  "blood-pressure-home": {
    title: "Checking your blood pressure at home",
    us: {
      sources: ["cdcBpMeasure", "cdcBpLiving"],
      text: "The CDC gives these steps for measuring your blood pressure at home. Do not eat, drink, smoke or exercise for 30 minutes first, and empty your bladder. Sit in a comfortable chair with your back supported for at least 5 minutes, with both feet flat on the floor and your legs uncrossed. Rest your arm, with the cuff on it, on a table at chest height; the cuff should be snug but not too tight, and on bare skin, not over clothing. Do not talk while it is measured. Take at least two readings, 1 or 2 minutes apart, at the same time every day, and write each one in a blood pressure log. The CDC says to share your readings with your care team, and that if you are concerned about your numbers, to talk to your care team. For what the numbers mean, ask me what high blood pressure is. Once you are signed in with a full account I can keep your readings for you: say, for example, my blood pressure is 130 over 85."
    },
    who: {
      sources: ["whoHypertension", "cdcBpMeasure"],
      text: "WHO says people with high blood pressure may not feel any symptoms, so it has to be measured to be found: ask a health worker, a clinic or a pharmacy where you can have yours measured. For measuring at home, these are the steps from the CDC in the United States. Do not eat, drink, smoke or exercise for 30 minutes first, and empty your bladder. Sit in a comfortable chair with your back supported for at least 5 minutes, with both feet flat on the floor and your legs uncrossed. Rest your arm, with the cuff on it, on a table at chest height, with the cuff on bare skin, and do not talk while it is measured. Take at least two readings, 1 or 2 minutes apart, at the same time every day, and write each one down. WHO says high blood pressure is 140/90 or higher on two different days: a health worker can tell you what your readings mean. Once you are signed in with a full account I can keep your readings for you."
    }
  },
  "blood-pressure-care": {
    title: "Lowering and checking your blood pressure",
    us: {
      sources: ["cdcBpLiving", "cdcBpMeasure", "nhlbiBp", "nhlbiDash"],
      text: "The CDC and the NHLBI list these steps. Eat a heart-healthy way such as the DASH eating plan: more vegetables, fruits and whole grains; fat-free or low-fat dairy, fish, poultry, beans, nuts and vegetable oils; and less saturated fat, sugary drinks and sweets. The NHLBI gives a sodium limit of 2,300 mg a day and says 1,500 mg lowers blood pressure even further. Be physically active and sit less; keep a healthy weight; do not smoke; and the NHLBI also lists stress reduction and good-quality sleep. Medicines: the NHLBI says your provider may recommend them, and the CDC says to take your blood pressure medicine exactly as your doctor tells you, and not to stop a medicine without talking to your doctor or pharmacist first. For how to check your blood pressure at home, ask me. The CDC says to write your readings in a log and share it with your care team, and if you are concerned about your numbers, to talk to your care team; the NHLBI says a reading higher than 180 over 120 means contact your provider immediately."
    },
    who: {
      sources: ["whoHypertension"],
      text: "WHO says to lower your risk or control high blood pressure by keeping salt low, eating more vegetables and fruit, limiting saturated and trans fats, not using tobacco in any form, limiting alcohol (no more than 1 drink a day for women and 2 for men), and getting at least 150 minutes a week of moderate aerobic activity plus strength exercise on two or more days a week. If you have high blood pressure, WHO says your doctor may recommend one or more medicines, and lifestyle changes remain part of treatment. WHO says the goal is less than 130/80 if you have diabetes, cardiovascular disease or chronic kidney disease. People with high blood pressure may not feel any symptoms, so it has to be measured to be found. Ask me how to check your blood pressure at home."
    }
  }
});

const CLOSING = "This is general information, not medical advice. For your own health, talk to a doctor, nurse or health worker.";

function chronicConditionAnswer(id, { us = true } = {}) {
  const topic = TOPICS[id];
  if (!topic) return null;
  const version = us ? topic.us : topic.who;
  if (!version) return null;
  const all = SOURCES;
  const sources = version.sources.map(key => all[key]);
  const cited = sources.length ? ` Sources: ${sources.map(source => source.name).join("; ")} (checked ${CHECKED_ON}).` : "";
  return { topic: id, title: topic.title, text: `${version.text}${cited} ${CLOSING}`, sources };
}

module.exports = Object.freeze({ CHECKED_ON, SOURCES, TOPICS, chronicConditionAnswer });
