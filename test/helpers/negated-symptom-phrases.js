"use strict";

// What people say about a baby or a child, English and Kiswahili, both ways round (see test/nexus/negated-symptoms-care-reader.test.js).
//
// QUIET: a symptom whose ABSENCE is good news (fever, cough, vomiting, diarrhoea, rash, bleeding, pain) said to be absent. Kyro must not read it as the symptom.
// ALARM: something that should be there and is missing ("not feeding", "not breathing", "not waking", "no urine", "not drinking", "no movement", "haamki", "hapumui", "hanyonyi"), a symptom that IS there, and
//        a sentence that has a reassuring "no ..." AND a real danger sign. These must keep alarming, as they did before the negation handling was added.
// When this list and the reader disagree, the safe answer is the alarm: add words to the reader only after a clinician has seen them (the PR says which).

const QUIET = Object.freeze([
  // English: fever
  "my baby has no fever", "my baby does not have a fever", "my baby doesn't have a fever", "my baby doesnt have a fever", "my baby hasn't had a fever", "my baby has had no fever today",
  "my baby is without fever", "my baby never had a fever", "the baby has no fever", "baby has no fever", "my newborn does not have a fever and is feeding well", "my baby is feeding well and has no fever",
  "my baby has no temperature", "my son has no fever", "my child has no fever and is playing", "my 2 year old has no fever and no rash",
  // English: cough, vomiting, diarrhoea, rash, bleeding, pain
  "my baby is not vomiting", "my baby isn't vomiting", "my baby has not vomited", "my baby is not coughing", "my baby has no cough", "my baby has no rash", "my baby has no diarrhoea", "my baby has no diarrhea",
  "my baby is not bleeding", "my baby is not in pain", "my baby has no pain", "my daughter is not vomiting and has no diarrhoea", "my toddler has no vomiting",
  // English: several together
  "my toddler has no fever or cough", "my toddler has no fever, no cough, no vomiting", "my baby has no fever, cough or vomiting", "my toddler has a small cough, no fever, playing", "toddler small cough no fever playing",
  // English: women
  "I gave birth yesterday and I have no bleeding", "I am pregnant and have no bleeding", "I am pregnant with no fever and no pain",
  // Kiswahili
  "mtoto wangu hana homa", "mtoto hana homa", "hakuna homa", "mtoto wangu hakuna homa", "mtoto wangu hana homa anakula vizuri", "mwanangu hana homa anacheza", "mtoto wangu mchanga hana homa",
  "mtoto wangu hatapiki", "mtoto hatapiki wala hana homa", "mtoto wangu hakohoi", "mtoto wangu hana kikohozi", "mtoto wangu hana vipele", "mtoto wangu haharishi", "mtoto wangu hana kuhara",
  "mtoto wangu hana maumivu", "mtoto wangu hatokwi damu", "mtoto wangu hakuna homa wala kutapika", "mtoto wangu hana homa na hana kikohozi", "nina mimba sina kutokwa na damu", "binti yangu hana homa"
]);

const ALARM = Object.freeze([
  // English: something that should be there is missing
  "my baby is not feeding", "my baby won't feed", "my baby is not breathing", "my baby stopped breathing", "my baby is not waking", "my baby can't be woken", "my baby cannot be woken",
  "my baby has not passed urine", "my baby has no urine since morning", "my baby is not passing urine", "my baby is not drinking", "my baby is floppy", "my baby is not crying", "my baby hasn't cried",
  "my baby won't suck", "my baby is not taking the breast", "my baby is very sleepy and not feeding", "my child is not waking", "my child is not breathing", "my child cannot drink", "my child is not drinking",
  // English: the symptom is there
  "my baby has a fever", "my baby has a high temperature", "my baby is breathing very fast", "my baby has fits", "my baby has diarrhoea and is very weak", "my baby is vomiting everything",
  "my child has a fever for 3 days", "my toddler is vomiting", "my child has diarrhoea", "my child has had a cough for 5 days", "my baby is turning blue", "my baby has yellow eyes",
  // English: a reassuring "no ..." and a real danger sign in the same sentence
  "my baby has no fever but is not feeding", "my baby has no fever but she is not feeding and very sleepy", "no fever but my baby is not feeding", "my baby has no cough but is breathing very fast",
  "my baby is not vomiting but won't feed", "my baby has no rash but cannot be woken", "my baby has no fever but is not breathing well", "my baby has no fever, no cough, but has fits",
  "my baby has no diarrhoea but is not passing urine", "my baby is not coughing but the chest is pulling in", "my toddler has no fever but is not waking", "my baby has no vomiting but a bulging fontanelle",
  "my baby has no fever but a stiff neck", "my child has no fever but a stiff neck", "my baby has no fever and is not drinking", "my child has no fever but is unconscious",
  "my baby does not have a fever but is limp", "my baby has no fever but there is no movement and he is cold",
  // English: a list that is not wholly negated
  "my baby has no fever and vomiting everything", "my baby has no fever, vomiting everything",
  // Kiswahili: something that should be there is missing
  "mtoto wangu hanyonyi", "mtoto wangu haamki", "mtoto wangu hapumui", "mtoto hapumui vizuri", "mtoto wangu hajakojoa", "mtoto amelala sana na hanyonyi", "mtoto hawezi kuamka",
  // Kiswahili: the symptom is there
  "mtoto wangu mchanga ana homa na hanyonyi", "mtoto wangu ana degedege", "mtoto wangu anaharisha damu", "mtoto wangu anatapika kila kitu",
  // Kiswahili: a reassuring "no ..." and a real danger sign
  "mtoto wangu hana homa lakini hanyonyi", "mtoto hana homa lakini haamki", "mtoto wangu hatapiki lakini hapumui vizuri", "mtoto wangu hana kikohozi lakini anapumua haraka", "mtoto wangu hana homa lakini ana degedege",
  "mtoto hana homa wala kikohozi lakini hanyonyi na amelala sana", "mwanangu hakuna homa lakini hawezi kuamka", "mtoto wangu hana vipele lakini hapumui", "mtoto hana homa, hajakojoa tangu jana"
]);

module.exports = Object.freeze({ QUIET, ALARM });
