"use strict";

// Koach Learn course (shared): "Cloud Computing Basics". Goes in Youth, Veterans (military), Workforce Development and Undeserved Community, so the examples are everyday and job-focused: school projects,
// a résumé folder, a small business's files, a team at work. Shape: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "cloud-computing-basics",
  category: "Youth",
  name: "Cloud Computing Basics",
  skills: "Explaining what the cloud is, Telling SaaS, PaaS and IaaS apart, Storing and syncing files in the cloud, Sharing files safely, Keeping a cloud account secure",
  outcome: "explain what cloud computing is and its three main service types, then use a free cloud storage service to store, organize and safely share files, with your account protected by two-step verification.",
  about: [
    "Every time you stream a video, save a photo to Google Photos or iCloud, or work on a Google Doc with a classmate, you are using cloud computing. Businesses run websites, apps and AI on it, and cloud skills are wanted in many jobs.",
    "This course explains what the cloud is in plain words, the main kinds of cloud services and who the big providers are. Then you will use a free cloud storage service to save, organize and share files safely, the way teams at school and work do.",
    "Each lesson takes about five minutes. Read the lesson, watch the slides, then do the \"Try it now\" task. There is a short knowledge check after each chapter and a 20-question quiz at the end. If you want to go further, the Microsoft Azure Fundamentals course builds on this one."
  ],
  finalTask: "In Google Drive or Microsoft OneDrive: create a folder called \"Career Documents\", upload or create two files in it (for example a résumé and a list of references), share one file with a friend or family member as view-only, check who has access, then remove their access. Make sure two-step verification is on for the account. Finally, write three sentences that explain the cloud, and name one SaaS, one PaaS and one IaaS example.",
  chapters: [
    {
      name: "Chapter 1: What the cloud is",
      lessons: [
        {
          title: "The cloud in plain words",
          minutes: 4,
          goal: "Explain in your own words what cloud computing is.",
          text: [
            "\"The cloud\" means computers in large buildings called data centers that you use over the internet. Instead of keeping everything on your own phone or laptop, your files, apps and computing power live on those computers, and you reach them from any device.",
            "Think of electricity. You do not build a power plant at home; you plug in and pay for what you use. Cloud computing works the same way: a company owns the computers, and people and businesses use what they need, when they need it.",
            "Everyday examples: Gmail and Outlook email, Google Drive, OneDrive, iCloud and Dropbox for files, Netflix and Spotify for streaming, and AI assistants like ChatGPT or Copilot, which run on cloud computers."
          ],
          words: [["Cloud computing", "using computers, storage and software over the internet instead of on your own device."], ["Data center", "a large building full of computers that run cloud services."], ["Server", "a powerful computer that provides a service to other computers over a network."]],
          slides: [
            { title: "What the cloud is", bullets: ["Computers in data centers", "You use them over the internet", "From any device"] },
            { title: "Like electricity", bullets: ["You do not build a power plant", "You plug in and pay for what you use"] },
            { title: "You already use it", bullets: ["Gmail, Outlook", "Google Drive, OneDrive, iCloud, Dropbox", "Netflix, Spotify, AI assistants"] }
          ],
          tryIt: "List five apps or websites you used this week. Next to each, write \"cloud\" if your stuff is stored or run on the company's computers rather than only on your device.",
          youCanNow: "explain cloud computing in your own words and point to cloud services you already use."
        },
        {
          title: "Why people and businesses use the cloud",
          minutes: 5,
          goal: "Name the main benefits and risks of the cloud.",
          text: [
            "Benefits: you can get to your files from any device; a lost phone does not mean lost photos; teams can work on the same document at once; and businesses can start small and grow, paying for more computing only when they need it, instead of buying expensive servers.",
            "Risks: you need an internet connection; if someone steals your password, they can reach your files from anywhere; free plans have storage limits; and your data is held by a company, so you should know its privacy settings.",
            "Big cloud providers for businesses include Amazon Web Services (AWS), Microsoft Azure and Google Cloud. For everyday people, Google, Microsoft, Apple and Dropbox offer free cloud storage with paid upgrades. Check each company's own page for the current free storage amount."
          ],
          words: [["Scalability", "the ability to grow or shrink computing power as needed."], ["Provider", "the company that runs the cloud service."], ["Storage limit", "the most data your plan lets you keep."]],
          slides: [
            { title: "Benefits", bullets: ["Your files on any device", "A lost phone does not mean lost photos", "Teams work on the same file", "Businesses grow without buying servers"] },
            { title: "Risks", bullets: ["Needs internet", "A stolen password opens everything", "Free plans have limits"] },
            { title: "Big providers", bullets: ["Business: AWS, Microsoft Azure, Google Cloud", "Everyday: Google, Microsoft, Apple, Dropbox"] }
          ],
          tryIt: "Think of a small business you know, like a barbershop, food truck or church office. Write two ways the cloud could help it and one risk it should plan for.",
          youCanNow: "name the main benefits and risks of the cloud and the big cloud providers."
        },
        {
          title: "SaaS, PaaS and IaaS: the three service types",
          minutes: 5,
          goal: "Sort cloud services into SaaS, PaaS and IaaS.",
          text: [
            "Cloud services come in three main types, depending on how much the provider does for you. Use a pizza example: you can buy a ready pizza, rent a kitchen with ingredients, or rent just the oven.",
            "SaaS (Software as a Service): finished software you use in a browser or app, like Gmail, Google Docs, Microsoft 365 or Zoom. The provider runs everything. PaaS (Platform as a Service): a ready platform where developers build and run their own apps without managing servers, like Google App Engine or Azure App Service. IaaS (Infrastructure as a Service): raw virtual computers, storage and networks you set up yourself, like Amazon EC2 or Azure Virtual Machines.",
            "In every type, security is shared. The provider protects its data centers; you are always responsible for your own password, who you share with, and what you upload."
          ],
          steps: ["Ask: do I just use finished software? That is SaaS.", "Do I build my own app on a ready platform? That is PaaS.", "Do I set up my own virtual computers? That is IaaS.", "In all three, protect your own account and data."],
          words: [["SaaS", "Software as a Service: finished software you use over the internet."], ["PaaS", "Platform as a Service: a ready platform for building and running your own apps."], ["IaaS", "Infrastructure as a Service: virtual computers, storage and networks you rent and manage."], ["Shared responsibility", "the provider secures the cloud; you secure your account and data in it."]],
          slides: [
            { title: "Three service types", bullets: ["SaaS: a ready pizza", "PaaS: a rented kitchen with ingredients", "IaaS: just the oven"] },
            { title: "Examples", bullets: ["SaaS: Gmail, Google Docs, Microsoft 365, Zoom", "PaaS: Google App Engine, Azure App Service", "IaaS: Amazon EC2, Azure Virtual Machines"] },
            { title: "Shared responsibility", bullets: ["Provider: secures the data centers", "You: your password, sharing and uploads"] }
          ],
          tryIt: "Sort these into SaaS, PaaS or IaaS: Gmail, Azure Virtual Machines, Google App Engine, Zoom, Amazon EC2, Microsoft 365. Check your answers against the examples in this lesson.",
          youCanNow: "sort cloud services into SaaS, PaaS and IaaS and explain shared responsibility."
        }
      ],
      check: {
        title: "Knowledge Check 1: What the cloud is",
        questions: [
          { q: "What does \"the cloud\" mean?", options: ["The weather", "Computers in data centers you use over the internet", "A kind of phone case", "Only your laptop's hard drive"], answer: 1, why: "Cloud services run on remote computers reached over the internet." },
          { q: "Which is a risk of the cloud?", options: ["You can reach files from any device", "Teams can share documents", "A stolen password can open your files from anywhere", "A lost phone does not mean lost photos"], answer: 2, why: "Account security matters because the cloud is reachable from anywhere." },
          { q: "Gmail and Zoom are examples of:", options: ["IaaS", "PaaS", "Data centers", "SaaS"], answer: 3, why: "They are finished software used over the internet." },
          { q: "A company rents virtual computers and sets them up itself. This is:", options: ["IaaS", "SaaS", "A browser", "A password"], answer: 0, why: "Renting virtual computers you manage is Infrastructure as a Service." },
          { q: "Under shared responsibility, who protects your password?", options: ["The data center guard", "You", "The internet", "Nobody"], answer: 1, why: "Your account and what you share are always your job." }
        ]
      }
    },
    {
      name: "Chapter 2: Using the cloud yourself",
      lessons: [
        {
          title: "Storing and organizing files in cloud storage",
          minutes: 5,
          goal: "Upload, create and organize files in Google Drive or OneDrive.",
          text: [
            "Google Drive comes with a free Google account, and OneDrive comes with a free Microsoft account. Both work in a web browser (drive.google.com or onedrive.com) and as phone apps from the official app store.",
            "Use the New button to create a folder or a document, or Upload to add a file from your device. Give files clear names, like \"Resume - Jordan Lee - 2026\", so you can find them later. Put related files into folders.",
            "Syncing keeps a file the same on every device: change it on your laptop and the new version appears on your phone. Many cloud services also keep older versions, so you can go back if you make a mistake."
          ],
          steps: ["Sign in at drive.google.com or onedrive.com (or open the app).", "Press New and choose Folder; name it clearly.", "Open the folder; press New to create a document, or Upload to add a file.", "Rename files with clear names.", "Open the same file on another device to see it sync."],
          words: [["Upload", "copy a file from your device to the cloud."], ["Sync", "keep files the same on all your devices automatically."], ["Version history", "older saved copies of a file you can go back to."]],
          slides: [
            { title: "Free cloud storage", bullets: ["Google Drive with a Google account", "OneDrive with a Microsoft account", "Browser or official app"] },
            { title: "Organize", bullets: ["New: folder or document", "Upload: add a file", "Clear names and folders"] },
            { title: "Sync and versions", bullets: ["Same file on every device", "Go back to an older version if needed"] }
          ],
          tryIt: "In Google Drive or OneDrive, create a folder called \"Career Documents\". Create or upload two files into it and give them clear names. Then open the folder on a second device if you have one.",
          youCanNow: "upload, create, name and organize files in cloud storage and know they sync across devices."
        },
        {
          title: "Sharing files safely",
          minutes: 5,
          goal: "Share a file with the right person and the right level of access, and remove access.",
          text: [
            "Cloud files are easy to share, which is useful and risky. Press Share on a file and add a person's email address, or copy a link. Choose what they can do: view, comment or edit.",
            "Give the least access needed. A résumé for an employer: view only. A group project: edit for your team. Be careful with links set so that \"anyone with the link\" can open the file; anyone who gets the link can see it, even if it is forwarded.",
            "Check who has access from the Share or Manage access screen, and remove people when a project ends. Never put files with Social Security numbers, bank details or passwords in a shared folder."
          ],
          steps: ["Select the file and press Share.", "Add the person's email, or copy a link.", "Choose View, Comment or Edit; pick the least they need.", "Avoid \"anyone with the link\" for private files.", "Later, open Share or Manage access and remove people who no longer need it."],
          words: [["Permission level", "what someone can do with your file: view, comment or edit."], ["Least access", "giving people only the access they truly need."]],
          slides: [
            { title: "How to share", bullets: ["Press Share", "Add an email or copy a link", "Choose View, Comment or Edit"] },
            { title: "Least access", bullets: ["Résumé for an employer: view only", "Team project: edit for the team", "Careful with \"anyone with the link\""] },
            { title: "Clean up", bullets: ["Check Manage access", "Remove people when the project ends", "No private numbers in shared folders"] }
          ],
          tryIt: "Share one file from your \"Career Documents\" folder with a friend or family member as view-only. Ask them to open it. Then open Manage access and remove them.",
          youCanNow: "share a cloud file with the right permission level and remove access when it is no longer needed."
        },
        {
          title: "Keeping your cloud account secure",
          minutes: 5,
          goal: "Turn on two-step verification and review your account's security.",
          text: [
            "Your cloud account holds your files, email and photos, so it is a target. The most important step is two-step verification (also called two-factor or multi-factor authentication): after your password, you also confirm with your phone. A thief with only your password cannot get in.",
            "Use a long, unique password, ideally kept in a password manager. Google and Microsoft both have a security check-up page in your account settings that shows devices signed in, recent activity and recovery options.",
            "Watch for phishing: fake emails saying \"your storage is full\" or \"someone shared a file with you\" that lead to a fake sign-in page. Go to drive.google.com or onedrive.com yourself rather than clicking. Remember shared responsibility: the provider protects its data centers; you protect your account."
          ],
          steps: ["Open your Google or Microsoft account security settings.", "Turn on two-step verification.", "Check recovery phone and email are correct.", "Review signed-in devices and remove any you do not know.", "Go to cloud sites yourself instead of clicking email links."],
          words: [["Two-step verification", "a second check, like a code or a tap on your phone, after your password."], ["Password manager", "an app that creates and stores strong passwords for you."], ["Phishing", "a fake message that tries to trick you into giving your password."]],
          slides: [
            { title: "Your account is a target", bullets: ["It holds files, email and photos", "Turn on two-step verification"] },
            { title: "Security check-up", bullets: ["Long, unique password", "Correct recovery phone and email", "Remove devices you do not know"] },
            { title: "Beware phishing", bullets: ["\"Your storage is full\"", "\"Someone shared a file with you\"", "Go to the site yourself"] }
          ],
          tryIt: "Final task practice: open your Google or Microsoft account's security settings, turn on two-step verification, and review signed-in devices. Then finish the final task with your \"Career Documents\" folder.",
          youCanNow: "protect your cloud account with two-step verification, a security check-up and phishing awareness."
        }
      ],
      check: {
        title: "Knowledge Check 2: Using the cloud yourself",
        questions: [
          { q: "What does \"sync\" mean?", options: ["Delete a file", "Keep files the same on all your devices", "Print a file", "Share a file with strangers"], answer: 1, why: "Syncing updates files everywhere you sign in." },
          { q: "You share your résumé with an employer. Which permission is best?", options: ["Edit", "Owner", "View only", "Anyone with the link can edit"], answer: 2, why: "Give the least access needed; they only need to read it." },
          { q: "A group project ended last month. What should you do with the shared folder?", options: ["Remove people who no longer need access", "Make it public", "Add more people", "Share the link on social media"], answer: 0, why: "Removing old access keeps your files private." },
          { q: "An email says \"Your storage is full, sign in here.\" What do you do?", options: ["Click and sign in", "Reply with your password", "Forward it to friends", "Go to drive.google.com or onedrive.com yourself"], answer: 3, why: "This may be phishing; go to the real site yourself." },
          { q: "What is the most important step to protect a cloud account?", options: ["A short password", "Two-step verification", "Sharing your password with a friend", "Turning off sync"], answer: 1, why: "A thief with only your password still cannot get in." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Cloud Computing Basics",
    questions: [
      { q: "A data center is:", options: ["A building full of computers that run cloud services", "A phone store", "A school computer lab", "A type of app"], answer: 0, why: "Cloud services run in data centers." },
      { q: "Cloud computing is like electricity because:", options: ["It is always free", "You use what you need without owning the power plant", "It only works at night", "It needs no internet"], answer: 1, why: "You use and pay for what you need, like a utility." },
      { q: "Which is a cloud service you might use every day?", options: ["A paper notebook", "A calculator with no internet", "Google Drive", "A desk lamp"], answer: 2, why: "Google Drive stores files on cloud computers." },
      { q: "A business benefit of the cloud is:", options: ["You must buy expensive servers first", "It never needs internet", "Passwords are not needed", "You can grow and pay for more computing only when needed"], answer: 3, why: "This is called scalability." },
      { q: "Which is a big cloud provider for businesses?", options: ["Microsoft Azure", "A local bakery", "A printer brand", "A web browser"], answer: 0, why: "AWS, Azure and Google Cloud are the biggest." },
      { q: "Which is a real risk of using the cloud?", options: ["Files on any device", "Teams sharing documents", "Needing an internet connection", "Automatic backups"], answer: 2, why: "Without internet, you may not reach your files." },
      { q: "SaaS stands for:", options: ["Storage as a Server", "Software as a Service", "Security and a System", "Sync and a Screen"], answer: 1, why: "SaaS is finished software used over the internet." },
      { q: "Microsoft 365 is an example of:", options: ["IaaS", "PaaS", "SaaS", "A data center"], answer: 2, why: "It is finished software you use online." },
      { q: "A developer runs their app on Azure App Service without managing servers. This is:", options: ["SaaS", "PaaS", "IaaS", "A password manager"], answer: 1, why: "A ready platform for your own apps is PaaS." },
      { q: "Amazon EC2 virtual computers are an example of:", options: ["SaaS", "PaaS", "A browser", "IaaS"], answer: 3, why: "Renting virtual computers you manage is IaaS." },
      { q: "Under shared responsibility, the provider protects:", options: ["Its data centers", "Your password", "Who you share files with", "What you choose to upload"], answer: 0, why: "You still protect your own account and data." },
      { q: "Which file name is clearest?", options: ["\"doc1\"", "\"stuff\"", "\"Resume - Jordan Lee - 2026\"", "\"new new final\""], answer: 2, why: "Clear names make files easy to find." },
      { q: "To add a file from your device to the cloud, you:", options: ["Delete it", "Upload it", "Print it", "Email it to a stranger"], answer: 1, why: "Uploading copies it to cloud storage." },
      { q: "Version history lets you:", options: ["Go back to an older copy of a file", "See other people's files", "Get more free storage", "Change your password"], answer: 0, why: "It keeps older saved versions." },
      { q: "\"Anyone with the link\" sharing means:", options: ["Only you can open it", "Only your contacts can open it", "Nobody can open it", "Anyone who gets the link can open it, even if it is forwarded"], answer: 3, why: "Links can travel further than you meant." },
      { q: "The least-access idea means:", options: ["Give everyone edit access", "Give people only the access they need", "Never share anything", "Share everything publicly"], answer: 1, why: "Less access means less risk." },
      { q: "Which should never go in a shared cloud folder?", options: ["A group project outline", "A class schedule", "A file with your Social Security number", "A team photo"], answer: 2, why: "Private numbers should not be in shared folders." },
      { q: "Two-step verification means:", options: ["Typing your password twice", "A second check on your phone after your password", "Two accounts", "Two folders"], answer: 1, why: "It blocks thieves who only have your password." },
      { q: "In a security check-up you should:", options: ["Remove signed-in devices you do not recognize", "Turn off your recovery phone", "Share your password", "Delete all your files"], answer: 0, why: "Unknown devices may mean someone else is signed in." },
      { q: "An email says \"Someone shared a file with you\" from a sender you do not know. The safest step is:", options: ["Click and sign in on the page it opens", "Reply with your password", "Forward it to everyone", "Go to your cloud storage site yourself to check"], answer: 3, why: "Fake share emails lead to fake sign-in pages." }
    ]
  }
};
