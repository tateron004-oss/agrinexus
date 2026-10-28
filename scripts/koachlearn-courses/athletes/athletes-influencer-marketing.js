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
  chapters: [
    {
      name: "Chapter 1: Getting ready to work with brands",
      lessons: [
        {
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
          youCanNow: "explain how athlete NIL deals work and find the rules that apply to you."
        },
        {
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
          youCanNow: "choose brands that fit your values, audience and rules."
        },
        {
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
          youCanNow: "build an honest one-page media kit."
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting ready to work with brands",
        questions: [
          { q: "What does NIL stand for?", options: ["National Influencer League", "New Income Law", "Name, image and likeness", "No Ink Limits"], answer: 2, why: "NIL is earning from your name, image and likeness." },
          { q: "Under NCAA rules, which is NOT allowed?", options: ["Being paid to attend a specific school", "Paid social posts for a local shop", "Running a paid camp", "Signing autographs for pay"], answer: 0, why: "That's pay-for-play, which NCAA rules do not allow." },
          { q: "A high school athlete wants an NIL deal. Whose rules matter?", options: ["Only the brand's", "Nobody's", "A pro league's", "Their state high school athletic association and school"], answer: 3, why: "High school NIL rules are set state by state." },
          { q: "Which brand is likely the best first fit?", options: ["A vape company", "A local gym you train at and believe in", "A random brand you've never used", "A betting app"], answer: 1, why: "Real use and local audience make the best fit." },
          { q: "What must every number in your media kit be?", options: ["Rounded up a lot", "Real and current", "Guessed", "From a friend's account"], answer: 1, why: "Brands check, and trust is everything." }
        ]
      }
    },
    {
      name: "Chapter 2: Pitching, deals and disclosure",
      lessons: [
        {
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
          youCanNow: "write and send a short, professional brand pitch."
        },
        {
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
          youCanNow: "spot red flags in a deal and know who to read it with before signing."
        },
        {
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
          youCanNow: "post sponsored content with a clear, correct disclosure and stay within NIL rules."
        }
      ],
      check: {
        title: "Knowledge Check 2: Pitching, deals and disclosure",
        questions: [
          { q: "What should a pitch include?", options: ["A 3-page essay", "Your password", "A demand for money first", "Who you are, why you love the brand, your audience, one idea and your media kit"], answer: 3, why: "Short, specific and professional gets replies." },
          { q: "A \"brand\" asks you to pay a fee to join their athlete program. This is:", options: ["A red flag", "Normal", "Required by the NCAA", "A great deal"], answer: 0, why: "Real brands pay you, not the other way around." },
          { q: "A contract says the brand owns your image forever. You should:", options: ["Sign fast", "Ignore it", "Treat it as a red flag and get advice", "Ask for more forever"], answer: 2, why: "Forever usage rights are a major red flag." },
          { q: "Which disclosure is clear?", options: ["\"#sp\" at the end", "\"collab\"", "Only in your bio", "\"Ad\" near the start of the caption"], answer: 3, why: "The FTC says clear and hard to miss." },
          { q: "In a sponsored video, the disclosure should be:", options: ["Only in the description", "Said and shown in the video", "In a comment", "Left out"], answer: 1, why: "Video disclosures belong in the video itself." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Influencer Marketing for Athletes",
    questions: [
      { q: "Influencer marketing means:", options: ["Buying followers", "Coaching a team", "A brand pays you to share its product with your audience", "Selling tickets"], answer: 2, why: "Brands pay for your reach and trust." },
      { q: "NCAA NIL deals should have:", options: ["A real business purpose and reasonable pay", "No work required", "Pay tied to points scored", "Pay to choose a school"], answer: 0, why: "That's how the NCAA describes allowed deals." },
      { q: "Pay tied to your athletic performance is:", options: ["Pay-for-play, not allowed under NCAA rules", "Encouraged", "Required", "A tax form"], answer: 0, why: "NCAA rules prohibit pay-for-play." },
      { q: "Where do Division I athletes report third-party NIL deals (at the time of writing)?", options: ["Their social bio", "A group chat", "NIL Go, run by the College Sports Commission", "Nowhere"], answer: 2, why: "Confirm current details with your compliance office." },
      { q: "NIL income is generally:", options: ["Always tax-free", "Taxable", "Illegal", "Paid to the school"], answer: 1, why: "The NCAA says NIL income is generally taxable." },
      { q: "Who sets high school NIL rules?", options: ["The NFL", "The brand", "Nobody", "Each state's high school association and state law"], answer: 3, why: "It varies by state." },
      { q: "Best first brands are often:", options: ["Brands you've never heard of", "Betting apps", "Local businesses you use and believe in", "Vape shops"], answer: 2, why: "Local fit and real use make strong deals." },
      { q: "Which category do many schools and states restrict?", options: ["Local bakeries", "Bookstores", "Running shoes", "Gambling and alcohol"], answer: 3, why: "Restricted categories are common in NIL rules." },
      { q: "A media kit is:", options: ["A one-page summary of you, your audience and what you offer", "A first-aid kit", "A camera bag", "A contract"], answer: 0, why: "Brands use it to decide fit." },
      { q: "Engagement rate shows:", options: ["Your height", "How much people interact compared to followers or views", "Your GPA", "Your jersey number"], answer: 1, why: "Brands care more about engagement than raw followers." },
      { q: "Buying followers is:", options: ["Smart marketing", "Required", "Dishonest and brands can spot it", "Free"], answer: 2, why: "Fake followers ruin trust." },
      { q: "Where should you send a pitch?", options: ["The brand's official contact", "Random employees' personal DMs", "Their competitors", "Nowhere"], answer: 0, why: "Official contacts are professional and safe." },
      { q: "A pitch should be about:", options: ["Five pages", "One emoji", "A video call at midnight", "Under 150 words"], answer: 3, why: "Short pitches get read." },
      { q: "If you are under 18 when pitching, you should:", options: ["Hide it", "Involve a parent or guardian", "Lie about your age", "Use a fake name"], answer: 1, why: "Adults help protect minors in deals." },
      { q: "Before signing a deal you should:", options: ["Sign on the spot", "Get it in writing and read it with a trusted adult", "Share your password", "Pay a fee"], answer: 1, why: "Written terms protect you." },
      { q: "Exclusivity means:", options: ["You get paid more", "The deal is short", "You own the brand", "You cannot work with competing brands"], answer: 3, why: "It limits other deals, so it should be fair." },
      { q: "A deal pays only in \"exposure\". This is:", options: ["A red flag", "Great pay", "Required", "A tax rule"], answer: 0, why: "Unclear pay is a warning sign." },
      { q: "A brand gave you free shoes. Do you need to disclose?", options: ["No, only cash counts", "Only if you like them", "Yes, free products count", "Only on TikTok"], answer: 2, why: "The FTC says free products are a material connection." },
      { q: "Where should a disclosure NOT be only?", options: ["Near the start of the caption", "On the image in a story", "Said in the video", "Hidden in hashtags or your bio"], answer: 3, why: "Disclosures must be hard to miss." },
      { q: "A brand asks you to say its drink cures cramps. You:", options: ["Say it", "Refuse; don't make health claims they can't prove", "Say it louder", "Say it without disclosure"], answer: 1, why: "The FTC warns against unproven health claims." }
    ]
  }
};
