"use strict";

// Koach Learn course: Athletes -> "Influencer Marketing for Athletes". Skill-building course: by the end the student can DO the skill in `outcome`.
// NIL and endorsement rules change: sources are the FTC, NCAA and College Sports Commission pages checked 27-28 October 2026; students are told to confirm with their school and state.
// Shape: scripts/koachlearn-courses/README.md. Model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "athletes-influencer-marketing",
  category: "Athletes",
  name: "Influencer Marketing for Athletes",
  skills: "Finding brands that fit you, Building a one-page media kit, Writing a brand pitch with AI, Spotting contract red flags, Disclosing sponsored posts and following NIL rules",
  outcome: "build a one-page media kit, pitch one brand that fits you with an AI-drafted message, review a deal for red flags with a trusted adult, and post sponsored content with a clear FTC-style disclosure while following your school's and state's NIL rules.",
  about: [
    "This course is for athletes who want to work with brands on social media through name, image and likeness (NIL) deals, and for coaches and parents who guide them.",
    "Influencer marketing means a brand pays you, in money or products, to share its product with your audience. You will learn how to find brands that fit, show your value with a media kit, pitch professionally, spot bad deals, and stay honest and within the rules.",
    "NIL rules are different for high school, college divisions and states, and they change. This course teaches the skills and shows you the official pages; always confirm current rules with your school's compliance office or your state high school athletic association before you sign anything. It is not legal or tax advice."
  ],
  finalTask: "Create a one-page media kit, choose one brand that fits your values and audience, write a pitch message with AI and edit it in your voice, and write a checklist of the red flags and rules you will check before signing (including who at your school or state you will ask). If you get a deal, post it with a clear disclosure in the post itself.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "High school and college athletes who want to work with brands on social media through name, image and likeness (NIL) deals, and the coaches and parents who guide them.",
    startingPoint: "Have social media accounts and some followers and have heard of NIL deals. Few know the NCAA or state rules, have a media kit, have pitched a brand, or can spot red flags in a contract.",
    gap: "Athletes can lose eligibility, money or rights to their own image by signing bad deals, breaking school or state rules, or skipping disclosures. Knowing the rules, presenting real numbers, and checking deals with a trusted adult lets them earn safely and honestly.",
    constraints: [
      "Plain language at about a grade 8 reading level",
      "A phone with social media, a free AI assistant and Canva",
      "About 60 minutes in total",
      "NCAA, NAIA, state association and school NIL rules differ and change; check with the compliance office or athletic director",
      "Athletes under 18 involve a parent or guardian; this is education, not legal or tax advice"
    ],
    prerequisites: "None. \"Social Media Branding for Athletes\" is a helpful first step."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given your level of sport", action: "explain what an NIL deal is and which rules apply to you, including what is not allowed", standard: "naming who to ask at your school or state and that NIL income is generally taxable" },
    { id: "O2", condition: "Given the products and local businesses you use", action: "list five brands that fit your values and audience", standard: "with every restricted category for your school or state crossed out" },
    { id: "O3", condition: "Using your app insights and a Canva template", action: "create a one-page media kit with your bio, channels, real numbers, audience, offers and a safe contact", standard: "with every number real, current and dated" },
    { id: "O4", condition: "Using an AI draft", action: "write a pitch message to one brand's official contact", standard: "under 150 words, in your voice, with a specific true reason, one idea and your media kit, and a parent involved if you are under 18" },
    { id: "O5", condition: "Given a written deal", action: "check it for red flags with a trusted adult before signing", standard: "checking work, pay, length and how to end it, and refusing to sign under pressure" },
    { id: "O6", condition: "For any post where a brand gave you something", action: "write a sponsored post with a clear disclosure near the start", standard: "said and shown in video, not hidden in hashtags or your bio, and with no claim you cannot prove" }
  ],
  chapters: [
    {
      name: "Chapter 1: Getting ready to work with brands",
      lessons: [
        {
          objectives: ["O1"],
          title: "How athlete influencer deals work",
          minutes: 5,
          goal: "Explain what an NIL deal is and what is allowed for college athletes.",
          text: [
            "An NIL deal pays you, in money, products or services, for letting a business use your name, image or likeness: social posts, appearances, camps, autographs or commercials.",
            "For NCAA college athletes, the NCAA's NIL page says deals should pay you for the use of your NIL, have a real business purpose, and pay within a reasonable range. Pay-for-play, meaning pay to attend or play for a school or pay tied to your performance, is not allowed. At the time of writing, Division I athletes must report third-party deals of $600 or more through NIL Go, run by the College Sports Commission; ask your compliance office for current details.",
            "High school NIL rules are set by each state's high school athletic association and state law; some states allow it with limits. Check yours before any deal. NIL income is generally taxable, so keep records and talk with a tax professional."
          ],
          steps: ["Find your level: high school, NCAA division, NAIA, junior college or pro.", "Read your school's NIL policy or your state association's rules.", "Talk with your compliance office or athletic director.", "Keep a record of every deal and payment."],
          words: [["NIL", "name, image and likeness: earning from your name, photo or personal brand."], ["Pay-for-play", "pay to attend or compete for a school, or pay tied to athletic performance; not allowed under NCAA rules."], ["Compliance office", "the school office that explains and checks athletic rules."]],
          slides: [
            { title: "An NIL deal", bullets: ["Paid in money, products or services", "Posts, appearances, camps, autographs"] },
            { title: "NCAA basics (check current rules)", bullets: ["Real business purpose, reasonable pay", "No pay-for-play", "DI: report deals of $600+ via NIL Go"] },
            { title: "High school and taxes", bullets: ["Rules set by your state association", "NIL income is generally taxable", "Keep records; ask a tax professional"] }
          ],
          sources: [
            { name: "NCAA: Name, Image and Likeness", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" },
            { name: "College Sports Commission: Student-Athlete NIL Deals", url: "https://www.collegesportscommission.org/nil/" },
            { name: "IRS: Self-Employed Individuals Tax Center", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }
          ],
          tryIt: "Find your school's or state association's NIL page and write down three rules that apply to you and who you would ask with questions.",
          youCanNow: "explain how athlete NIL deals work and find the rules that apply to you.",
          quickCheck: [
            { objective: "O1", q: "What can an NIL deal pay you in?", options: ["Only cash", "Only school credit", "Only game tickets", "Money, products or services"], answer: 3, why: "NIL deals can pay in money, products or services for using your name, image or likeness." },
            { objective: "O1", q: "You get your first NIL payment. What do you do?", options: ["Keep a record of it and talk with a tax professional", "Spend it and forget it", "Hide it from your school", "Give it back"], answer: 0, why: "NIL income is generally taxable, so keep records and get tax advice." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Finding brands that fit you",
          minutes: 5,
          goal: "Make a list of five brands that match your values and audience.",
          text: [
            "The best deals are with brands you already use and believe in, that your audience cares about. A local gym, a sports drink you actually drink, a training app you use, or a family restaurant near your school.",
            "Start local. Local businesses are often more open to young athletes, and your local audience matters to them. Bigger brands often work through agencies or NIL marketplaces your school may use; ask your compliance office which ones are approved.",
            "Avoid brands that clash with your values, your school's rules or your age, and many schools and states restrict categories like alcohol, tobacco, vaping, gambling and adult products."
          ],
          steps: ["List products and local businesses you really use.", "Mark the ones your audience cares about.", "Cross out any category your school or state restricts.", "Keep your top five."],
          words: [["Brand fit", "how well a brand matches your values, image and audience."], ["NIL marketplace", "a website or app that connects athletes with brands for deals."]],
          slides: [
            { title: "Best fit", bullets: ["Brands you already use and believe in", "Your audience cares about them"] },
            { title: "Start local", bullets: ["Gyms, restaurants, shops near you", "Ask compliance about approved marketplaces"] },
            { title: "Avoid", bullets: ["Brands that clash with your values", "Restricted categories: alcohol, vaping, gambling"] }
          ],
          tryIt: "Write a list of ten products or businesses you use. Ask an AI assistant which ones best fit an audience like yours, then pick your top five yourself.",
          youCanNow: "choose brands that fit your values, audience and rules.",
          quickCheck: [
            { objective: "O2", q: "Why start with local businesses?", options: ["They never say no", "They are often open to young athletes and care about your local audience", "They pay the most", "They do not need contracts"], answer: 1, why: "Local businesses are often more open to young athletes and value a local audience." },
            { objective: "O2", q: "A vape shop offers you a deal. What do you do?", options: ["Accept if the pay is good", "Ask for more money", "Cross it off; many schools and states restrict that category", "Post about it without a deal"], answer: 2, why: "Avoid categories your school or state restricts, such as vaping." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Building your media kit",
          minutes: 6,
          goal: "Make a one-page media kit that shows brands your value.",
          text: [
            "A media kit is a one-page summary brands use to decide if you are a fit. It shows who you are, who your audience is, and what you can do for them.",
            "Include: a good photo and short bio; your sport, team and achievements; your channels with follower counts and average engagement (likes, comments, shares or views per post) from your app's insights; who your audience is (location, age range if the app shows it); past partnerships; what you offer (posts, videos, appearances, camps); and contact info, using a sports email or a parent or agent for minors.",
            "Use a Canva template to design it and an AI assistant to tighten the wording. Every number must be real and current. Do not buy followers; brands check engagement."
          ],
          steps: ["Collect your real numbers from your app insights.", "Write a two-sentence bio.", "List what you offer.", "Design it in a Canva media kit template.", "Check every number; date it."],
          words: [["Media kit", "a one-page summary of who you are, your audience and what you offer brands."], ["Engagement rate", "how much people interact with your posts compared to how many follow or see them."]],
          slides: [
            { title: "What a media kit shows", bullets: ["Who you are", "Who your audience is", "What you can do for a brand"] },
            { title: "Include", bullets: ["Photo, bio, sport and achievements", "Channels, followers, average engagement", "What you offer and safe contact"] },
            { title: "Honesty", bullets: ["Real, current numbers", "Never buy followers", "Brands check engagement"] }
          ],
          tryIt: "Build your one-page media kit in Canva using your real numbers. Ask an AI assistant to make your bio shorter and clearer.",
          youCanNow: "build an honest one-page media kit.",
          quickCheck: [
            { objective: "O3", q: "What does engagement show in your media kit?", options: ["How much people interact with your posts", "How many brands you know", "Your grade point average", "Your jersey number"], answer: 0, why: "Engagement is likes, comments, shares or views per post." },
            { objective: "O3", q: "Your follower count changed since you made your media kit last month. What do you do?", options: ["Leave the old number", "Round it up a lot", "Buy followers to match", "Update it with the real current number and date"], answer: 3, why: "Every number must be real and current." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting ready to work with brands",
        questions: [
          { objective: "O1", q: "What does NIL stand for?", options: ["National Influencer League", "New Income Law", "Name, image and likeness", "No Ink Limits"], answer: 2, why: "NIL is earning from your name, image and likeness." },
          { objective: "O1", q: "Under NCAA rules, which is NOT allowed?", options: ["Being paid to attend a specific school", "Paid social posts for a local shop", "Running a paid camp", "Signing autographs for pay"], answer: 0, why: "That's pay-for-play, which NCAA rules do not allow." },
          { objective: "O1", q: "A high school athlete wants an NIL deal. Whose rules matter?", options: ["Only the brand's", "Nobody's", "A pro league's", "Their state high school athletic association and school"], answer: 3, why: "High school NIL rules are set state by state." },
          { objective: "O2", q: "Which brand is likely the best first fit?", options: ["A vape company", "A local gym you train at and believe in", "A random brand you've never used", "A betting app"], answer: 1, why: "Real use and local audience make the best fit." },
          { objective: "O3", q: "What must every number in your media kit be?", options: ["Rounded up a lot", "Real and current", "Guessed", "From a friend's account"], answer: 1, why: "Brands check, and trust is everything." }
        ]
      }
    },
    {
      name: "Chapter 2: Pitching, deals and disclosure",
      lessons: [
        {
          objectives: ["O4"],
          title: "Pitching a brand",
          minutes: 5,
          goal: "Write a short, professional pitch message to one brand.",
          text: [
            "A pitch is a short message asking to work together. Send it from your professional email or the brand's official contact, not random DMs to employees.",
            "A good pitch: who you are in one line; why you love this brand (something specific and true); your audience and one number; one clear idea (\"three training videos using your recovery app\"); and your media kit attached. Keep it under 150 words.",
            "Ask an AI assistant to draft it, then rewrite it in your voice. If you are under 18, have a parent or guardian involved. Follow up once after a week or two. Many brands will say no or not answer; that is normal."
          ],
          steps: ["Find the brand's official contact.", "Ask AI for a short pitch under 150 words.", "Add a specific, true reason you love the brand.", "Attach your media kit.", "Follow up once after one to two weeks."],
          words: [["Pitch", "a short message proposing to work together."], ["Follow-up", "one polite reminder if you have not heard back."]],
          slides: [
            { title: "Where to send", bullets: ["Your professional email", "The brand's official contact"] },
            { title: "A good pitch", bullets: ["Who you are", "Why you love the brand (true)", "Audience and one number", "One clear idea + media kit"] },
            { title: "After", bullets: ["Under 18: parent involved", "Follow up once", "No reply is normal"] }
          ],
          tryIt: "Pick one of your five brands. Use AI to draft a pitch, rewrite it in your voice, and have a coach or parent read it before you send.",
          youCanNow: "write and send a short, professional brand pitch.",
          quickCheck: [
            { objective: "O4", q: "Where should you send a brand pitch?", options: ["Random DMs to employees", "The brand's official contact", "The brand's competitor", "A public comment"], answer: 1, why: "Send it from your professional email to the brand's official contact." },
            { objective: "O4", q: "A brand has not answered your pitch after two weeks. What do you do?", options: ["Message them every day", "Post about them angrily", "Follow up once, then move on if there is no answer", "Send it to every employee"], answer: 2, why: "Follow up once; many brands will say no or not answer, and that is normal." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Reading a deal: red flags",
          minutes: 6,
          goal: "Spot red flags in a deal before you sign.",
          text: [
            "Before you agree to anything, get it in writing and read it with a trusted adult. For bigger deals, a lawyer, agent or your school's NIL support can help. Do not sign under pressure.",
            "Red flags: they ask you to pay money first; they want your passwords or login codes; the deal lasts a very long time or says they own your name or image forever; you cannot post for other brands at all (exclusivity) without fair pay; pay is unclear or only \"exposure\"; they want you to post things that are not true; or anything your school's or state's rules do not allow, such as using school logos without permission.",
            "Check what you must do (how many posts, when, what), how and when you are paid, how long it lasts, and how to end it. College athletes: check if it must be reported and do that on time."
          ],
          steps: ["Get the deal in writing.", "Read it with a trusted adult or adviser.", "Check work, pay, length and how to end it.", "Look for the red flags.", "Check your school and state rules and any reporting.", "Never sign under pressure."],
          words: [["Contract", "a written agreement both sides must follow."], ["Exclusivity", "a rule that you cannot work with competing brands."], ["Usage rights", "how and for how long a brand can use your photos, videos and name."]],
          slides: [
            { title: "Before you sign", bullets: ["Get it in writing", "Read it with a trusted adult", "Never sign under pressure"] },
            { title: "Red flags", bullets: ["You pay first, or they want passwords", "They own your image forever", "Unclear pay or \"exposure\" only", "Asked to say untrue things"] },
            { title: "Check", bullets: ["Work, pay, length, how to end it", "School and state rules", "Reporting deadlines"] }
          ],
          sources: [
            { name: "NCAA: Name, Image and Likeness", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" },
            { name: "College Sports Commission: Student-Athlete NIL Deals", url: "https://www.collegesportscommission.org/nil/" }
          ],
          tryIt: "Ask an AI assistant to write a short sample NIL deal with three hidden red flags (it's practice). Find them, then write your own red-flag checklist.",
          youCanNow: "spot red flags in a deal and know who to read it with before signing.",
          quickCheck: [
            { objective: "O5", q: "Which is a red flag in a deal?", options: ["They want your passwords or login codes", "Clear pay and dates", "A way to end the deal", "A set number of posts"], answer: 0, why: "Never give a brand your passwords or login codes." },
            { objective: "O5", q: "A brand says you must sign today or lose the deal. What do you do?", options: ["Sign now", "Sign and read it later", "Ask a friend to sign for you", "Do not sign under pressure; read it with a trusted adult first"], answer: 3, why: "Never sign under pressure; get it in writing and read it with an adult." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Disclosing sponsored posts the right way",
          minutes: 5,
          goal: "Write a sponsored post with a clear, correct disclosure.",
          text: [
            "The FTC, the US agency that enforces advertising law, says you must disclose any material connection to a brand, which includes payment, free or discounted products, or a family or work tie, whenever you mention the brand.",
            "Make it clear and hard to miss: put it with the post, near the start, using simple words like \"Ad\", \"Sponsored\" or \"Thanks [brand] for the free shoes\". In videos, say it and show it on screen; in live streams, repeat it. On photos and stories, put it on the image. Do not hide it in a pile of hashtags, only in your bio, or behind \"more\". Vague words like \"sp\", \"collab\" or \"ambassador\" alone are not clear.",
            "Only say what is true: do not promote a product you have not tried, and never make health claims the brand cannot prove, like \"this drink cures cramps\"."
          ],
          steps: ["Decide: is there any payment, free product or tie? Then disclose.", "Put \"Ad\" or a clear thank-you near the start of the caption.", "In video: say it and show it.", "Use the app's paid-partnership label too, if it has one.", "Check that every claim is true."],
          words: [["Material connection", "a tie to a brand, like payment, free products or family, that people might not expect."], ["Sponsored post", "a post a brand paid for or gave you something for."]],
          slides: [
            { title: "When to disclose", bullets: ["Paid, free or discounted products", "Family or work ties to the brand"] },
            { title: "How", bullets: ["\"Ad\" or \"Thanks [brand] for...\" near the start", "Video: say it and show it", "Not hidden in hashtags or bio"] },
            { title: "Stay honest", bullets: ["Only products you've tried", "No health claims they can't prove"] }
          ],
          sources: [
            { name: "FTC: Disclosures 101 for Social Media Influencers", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" },
            { name: "FTC: Endorsement Guides, What People Are Asking", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides" }
          ],
          tryIt: "Final task: finish your media kit, brand pitch and red-flag checklist (with the names of who at your school or state you will ask). Then write a practice sponsored caption with a correct disclosure.",
          youCanNow: "post sponsored content with a clear, correct disclosure and stay within NIL rules.",
          quickCheck: [
            { objective: "O6", q: "Which counts as a material connection you must disclose?", options: ["A product you bought yourself", "A free or discounted product from the brand", "A brand you have never heard of", "Your favorite team"], answer: 1, why: "Payment, free or discounted products, or a family or work tie must be disclosed." },
            { objective: "O6", q: "You are doing a sponsored live stream. How do you disclose?", options: ["Once in your bio", "Only in hashtags", "Say \"collab\" once", "Disclose clearly and repeat it during the stream"], answer: 3, why: "In live streams, repeat the disclosure." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Pitching, deals and disclosure",
        questions: [
          { objective: "O4", q: "What should a pitch include?", options: ["A 3-page essay", "Your password", "A demand for money first", "Who you are, why you love the brand, your audience, one idea and your media kit"], answer: 3, why: "Short, specific and professional gets replies." },
          { objective: "O5", q: "A \"brand\" asks you to pay a fee to join their athlete program. This is:", options: ["A red flag", "Normal", "Required by the NCAA", "A great deal"], answer: 0, why: "Real brands pay you, not the other way around." },
          { objective: "O5", q: "A contract says the brand owns your image forever. You should:", options: ["Sign fast", "Ignore it", "Treat it as a red flag and get advice", "Ask for more forever"], answer: 2, why: "Forever usage rights are a major red flag." },
          { objective: "O6", q: "Which disclosure is clear?", options: ["\"#sp\" at the end", "\"collab\"", "Only in your bio", "\"Ad\" near the start of the caption"], answer: 3, why: "The FTC says clear and hard to miss." },
          { objective: "O6", q: "In a sponsored video, the disclosure should be:", options: ["Only in the description", "Said and shown in the video", "In a comment", "Left out"], answer: 1, why: "Video disclosures belong in the video itself." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Influencer Marketing for Athletes",
    questions: [
      { objective: "O1", q: "Influencer marketing means:", options: ["Buying followers", "Coaching a team", "A brand pays you to share its product with your audience", "Selling tickets"], answer: 2, why: "Brands pay for your reach and trust." },
      { objective: "O1", q: "NCAA NIL deals should have:", options: ["A real business purpose and reasonable pay", "No work required", "Pay tied to points scored", "Pay to choose a school"], answer: 0, why: "That's how the NCAA describes allowed deals." },
      { objective: "O1", q: "Pay tied to your athletic performance is:", options: ["Pay-for-play, not allowed under NCAA rules", "Encouraged", "Required", "A tax form"], answer: 0, why: "NCAA rules prohibit pay-for-play." },
      { objective: "O1", q: "Where do Division I athletes report third-party NIL deals (at the time of writing)?", options: ["Their social bio", "A group chat", "NIL Go, run by the College Sports Commission", "Nowhere"], answer: 2, why: "Confirm current details with your compliance office." },
      { objective: "O1", q: "NIL income is generally:", options: ["Always tax-free", "Taxable", "Illegal", "Paid to the school"], answer: 1, why: "The NCAA says NIL income is generally taxable." },
      { objective: "O1", q: "Who sets high school NIL rules?", options: ["The NFL", "The brand", "Nobody", "Each state's high school association and state law"], answer: 3, why: "It varies by state." },
      { objective: "O2", q: "Best first brands are often:", options: ["Brands you've never heard of", "Betting apps", "Local businesses you use and believe in", "Vape shops"], answer: 2, why: "Local fit and real use make strong deals." },
      { objective: "O2", q: "Which category do many schools and states restrict?", options: ["Local bakeries", "Bookstores", "Running shoes", "Gambling and alcohol"], answer: 3, why: "Restricted categories are common in NIL rules." },
      { objective: "O3", q: "A media kit is:", options: ["A one-page summary of you, your audience and what you offer", "A first-aid kit", "A camera bag", "A contract"], answer: 0, why: "Brands use it to decide fit." },
      { objective: "O3", q: "Engagement rate shows:", options: ["Your height", "How much people interact compared to followers or views", "Your GPA", "Your jersey number"], answer: 1, why: "Brands care more about engagement than raw followers." },
      { objective: "O3", q: "Buying followers is:", options: ["Smart marketing", "Required", "Dishonest and brands can spot it", "Free"], answer: 2, why: "Fake followers ruin trust." },
      { objective: "O4", q: "Where should you send a pitch?", options: ["The brand's official contact", "Random employees' personal DMs", "Their competitors", "Nowhere"], answer: 0, why: "Official contacts are professional and safe." },
      { objective: "O4", q: "A pitch should be about:", options: ["Five pages", "One emoji", "A video call at midnight", "Under 150 words"], answer: 3, why: "Short pitches get read." },
      { objective: "O4", q: "If you are under 18 when pitching, you should:", options: ["Hide it", "Involve a parent or guardian", "Lie about your age", "Use a fake name"], answer: 1, why: "Adults help protect minors in deals." },
      { objective: "O5", q: "Before signing a deal you should:", options: ["Sign on the spot", "Get it in writing and read it with a trusted adult", "Share your password", "Pay a fee"], answer: 1, why: "Written terms protect you." },
      { objective: "O5", q: "Exclusivity means:", options: ["You get paid more", "The deal is short", "You own the brand", "You cannot work with competing brands"], answer: 3, why: "It limits other deals, so it should be fair." },
      { objective: "O5", q: "A deal pays only in \"exposure\". This is:", options: ["A red flag", "Great pay", "Required", "A tax rule"], answer: 0, why: "Unclear pay is a warning sign." },
      { objective: "O6", q: "A brand gave you free shoes. Do you need to disclose?", options: ["No, only cash counts", "Only if you like them", "Yes, free products count", "Only on TikTok"], answer: 2, why: "The FTC says free products are a material connection." },
      { objective: "O6", q: "Where should a disclosure NOT be only?", options: ["Near the start of the caption", "On the image in a story", "Said in the video", "Hidden in hashtags or your bio"], answer: 3, why: "Disclosures must be hard to miss." },
      { objective: "O6", q: "A brand asks you to say its drink cures cramps. You:", options: ["Say it", "Refuse; don't make health claims they can't prove", "Say it louder", "Say it without disclosure"], answer: 1, why: "The FTC warns against unproven health claims." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      5,
      6,
      8,
      12,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Media kit",
        objective: "O3",
        notYet: "Numbers missing, made up or out of date, or private contact details shown.",
        meets: "One page with bio, channels, real dated numbers, audience, offers and a safe contact.",
        exceeds: "Includes average engagement per post and a clear list of past partnerships or community work."
      },
      {
        name: "Brand fit",
        objective: "O2",
        notYet: "The chosen brand clashes with the athlete's values or a restricted category.",
        meets: "One brand the athlete really uses that fits their audience and school and state rules.",
        exceeds: "The choice is backed by a list of five fitting brands with reasons."
      },
      {
        name: "Pitch message",
        objective: "O4",
        notYet: "Long, generic or copied AI text, or sent to a random DM.",
        meets: "Under 150 words, in the athlete's voice, with a true reason, one idea and the media kit, to an official contact.",
        exceeds: "A parent or guardian is involved where needed and a follow-up date is set."
      },
      {
        name: "Red-flag and rules checklist",
        objective: "O5",
        notYet: "Missing key red flags or does not name who will be asked.",
        meets: "Lists the red flags, what to check (work, pay, length, ending) and who at school or state to ask.",
        exceeds: "Adds reporting deadlines and record-keeping for taxes."
      },
      {
        name: "Disclosure",
        objective: "O6",
        notYet: "No disclosure, or it is hidden or vague.",
        meets: "A clear \"Ad\" or thank-you near the start, said and shown in video, with only true claims.",
        exceeds: "Also uses the app's paid-partnership label and checks every claim with the brand."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the final task and score Meets or Exceeds on every rubric row",
      "Learners who report pitching at least one brand within 30 days (follow-up survey)",
      "Learners who report a deal checked with a trusted adult or compliance office, or a bad deal refused",
      "Learners who report every sponsored post with a clear disclosure and every required deal reported on time"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone with social media apps and their insights",
      "A free Canva account",
      "A free AI assistant (ChatGPT, Microsoft Copilot or Google Gemini)",
      "Your school's NIL policy or your state association's rules",
      "About 60 minutes"
    ],
    facilitatorNotes: [
      "Invite the compliance office or athletic director to explain current NIL rules and reporting; rules and dollar thresholds change.",
      "For athletes under 18, involve parents or guardians in every pitch and deal.",
      "Never tell an athlete a specific deal is fine; send contracts to a trusted adult, lawyer, agent or school NIL support.",
      "Teach that buying followers or inflating numbers is dishonest and can end deals.",
      "Practice writing disclosures together and check sponsored drafts before they are posted."
    ]
  }
};
