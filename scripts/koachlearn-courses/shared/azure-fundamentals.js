"use strict";

// Koach Learn course (shared): "Microsoft Azure Fundamentals". Listed for Undeserved Community; category = the first one catalog.js gives (Undeserved Community).
// Shape and rules: scripts/koachlearn-courses/README.md. Model: re-entry/reentry-ai-digital-confidence.js.
// Exam facts checked 27 October 2026 on learn.microsoft.com (skills measured as of July 20, 2026).

const CERT = { name: "Microsoft Learn: Microsoft Certified: Azure Fundamentals", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/" };
const STUDY = { name: "Microsoft Learn: Study guide for Exam AZ-900", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900" };
const FREE = { name: "Microsoft Azure: Free services", url: "https://azure.microsoft.com/en-us/pricing/free-services" };
const CALC = { name: "Microsoft Azure: Pricing calculator", url: "https://azure.microsoft.com/en-us/pricing/calculator/" };

module.exports = {
  id: "azure-fundamentals",
  category: "Undeserved Community",
  name: "Microsoft Azure Fundamentals",
  skills: "Explaining cloud concepts, Telling IaaS, PaaS and SaaS apart, Organizing Azure resources, Matching needs to core Azure services, Estimating and controlling cloud costs, Planning for the AZ-900 exam",
  outcome: "plan a small Azure setup for a real community need: choose the right services, explain how they are organized and secured, estimate the monthly cost with the Azure pricing calculator, and map out your own path to the Azure Fundamentals (AZ-900) certification.",
  about: [
    "Microsoft Azure is one of the biggest cloud platforms in the world, and cloud skills open doors to IT support, help desk and cloud jobs. This course is a free, plain-language start for people new to tech, career changers and community members who want a recognized first certification.",
    "You will learn the ideas the Microsoft Azure Fundamentals (AZ-900) exam covers: cloud concepts, Azure's building blocks and core services, and how Azure is managed, secured and paid for. You do not need an Azure account: the hands-on parts use Microsoft's free public tools, like the pricing calculator and the free practice assessment.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task. A knowledge check closes each chapter and a 20-question quiz closes the course. This course helps you prepare; it is not the official exam, and Microsoft's own pages have the final word on exam details."
  ],
  finalTask: "Write a one-page Azure plan for a small community organization's website and file storage: name the service type (IaaS, PaaS or SaaS) and the Azure services you would use, the region and resource group, how people will sign in safely, how you will control costs (budget, tags), and the estimated monthly cost from the Azure pricing calculator. Then take Microsoft's free AZ-900 practice assessment and list your two weakest areas to study next.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults in underserved communities who are new to tech or changing careers, plus community members who want a recognized first certification. Many are aiming at IT support, help desk or entry-level cloud jobs.",
    startingPoint: "Can use a computer and web browser, email and everyday apps. Little or no experience with servers, networks or cloud platforms, and no Azure account is assumed.",
    gap: "Entry-level IT and cloud jobs often ask for cloud basics and a first certification such as AZ-900. Learners need the core ideas and words, and the habit of planning, securing and pricing a small setup, to apply with confidence and to avoid surprise cloud bills.",
    constraints: [
      "Reading level: plain words and short sentences; technical terms are explained the first time",
      "Devices: a computer or tablet with a web browser; a phone is hard for the pricing calculator",
      "Cost: no Azure account or payment card needed; the hands-on parts use Microsoft's free public tools",
      "Time: 5 minute lessons, about 60 minutes in total plus the practice assessment",
      "Exam details and prices change; learners check Microsoft's official pages"
    ],
    prerequisites: "None. \"Cloud Computing Basics\" is a gentler start for learners who have never heard the word cloud."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given an everyday example such as a busy food bank website", action: "explain what cloud computing is and name its main benefits and cloud models", standard: "in your own words, with at least two correct benefits" },
    { id: "O2", condition: "Given a cloud service", action: "sort it into IaaS, PaaS or SaaS and say what the provider and the customer each protect", standard: "getting at least 4 of 5 right" },
    { id: "O3", condition: "For a small Azure project", action: "choose a region and a resource group and describe how they fit into a subscription", standard: "with a reason for the region you choose" },
    { id: "O4", condition: "Given a common need such as a website, a full server or backups", action: "match the need to the right core Azure service", standard: "getting at least 4 of 5 right" },
    { id: "O5", condition: "For the people and resources in your plan", action: "list how you will protect sign-in and access and enforce rules with MFA, RBAC, tags, Azure Policy or resource locks", standard: "naming at least three of these tools and what each does" },
    { id: "O6", condition: "Using the free Azure pricing calculator and Microsoft Learn", action: "estimate a monthly cost for your plan and write an AZ-900 study plan", standard: "with an estimated total and your two weakest exam areas" }
  ],
  chapters: [
    {
      name: "Chapter 1: Cloud concepts and Azure's building blocks",
      lessons: [
        {
          objectives: ["O1"],
          title: "What the cloud is and why organizations use it",
          minutes: 5,
          goal: "Explain cloud computing and its main benefits with an everyday example.",
          text: [
            "Cloud computing means renting computing power, storage and software over the internet instead of buying and running your own servers. Microsoft Azure, Amazon Web Services and Google Cloud are the biggest cloud providers.",
            "It is like electricity: you do not build a power plant, you plug in and pay for what you use. This is called the consumption-based or pay-as-you-go model. Instead of a big upfront purchase (capital expense, CapEx), you pay a running cost (operating expense, OpEx).",
            "Main benefits: scalability (add more power when a food bank's sign-up page gets busy, then shrink it), high availability (it keeps running if one machine fails), reliability, security tools, and easier management. There are three cloud models: public (shared provider like Azure), private (used by one organization only) and hybrid (a mix of both)."
          ],
          words: [["Cloud computing", "renting computing power, storage and software over the internet."], ["Consumption-based model", "you pay only for what you use."], ["CapEx / OpEx", "capital expense is a big upfront purchase; operating expense is an ongoing cost."], ["Scalability", "adding or removing resources as demand changes."], ["High availability", "a service keeps running even when parts fail."], ["Hybrid cloud", "a mix of public cloud and an organization's own private systems."]],
          slides: [
            { title: "Cloud computing is", bullets: ["Renting computing over the internet", "Like electricity: plug in, pay for use", "Azure, AWS and Google Cloud are the big three"] },
            { title: "Paying for it", bullets: ["Consumption-based: pay for what you use", "CapEx: big upfront purchase", "OpEx: ongoing running cost"] },
            { title: "Main benefits", bullets: ["Scalability and high availability", "Reliability and security tools", "Easier management"] },
            { title: "Three cloud models", bullets: ["Public: shared provider", "Private: one organization only", "Hybrid: a mix of both"] }
          ],
          sources: [STUDY],
          tryIt: "Pick a local organization you know (a church, clinic, school, food bank or small shop). Write two ways it could use the cloud and which benefit (scalability, availability, pay-as-you-go) each one gives it.",
          youCanNow: "explain cloud computing, the pay-as-you-go model, its benefits and the three cloud models.",
          quickCheck: [
            { objective: "O1", q: "What is OpEx in cloud computing?", options: ["A big upfront purchase of servers", "A running cost you pay as you use the service", "A type of virtual machine", "A free trial that never ends"], answer: 1, why: "Pay-as-you-go turns a big upfront purchase (CapEx) into a running operating expense (OpEx)." },
            { objective: "O1", q: "A clinic must keep some data on its own servers but wants Azure for its website. Which cloud model fits?", options: ["Public only", "Private only", "No cloud at all", "Hybrid"], answer: 3, why: "Hybrid cloud mixes an organization's own servers with a public cloud like Azure." }
          ]
        },
        {
          objectives: ["O2"],
          title: "IaaS, PaaS, SaaS and who is responsible for what",
          minutes: 5,
          goal: "Sort a service into IaaS, PaaS or SaaS and say who handles what.",
          text: [
            "Cloud services come in three types. IaaS (infrastructure as a service): you rent virtual machines and networks and manage almost everything on them yourself, like renting an empty apartment. PaaS (platform as a service): the provider runs the servers and system software; you bring your app or data, like a furnished apartment. SaaS (software as a service): you just use finished software, like Outlook email or Microsoft Teams, like a hotel room.",
            "Serverless is a kind of PaaS where your code runs only when something triggers it and you pay per use, with no server to manage at all (Azure Functions is an example).",
            "The shared responsibility model says who protects what. The provider always secures the physical datacenters. You are always responsible for your data, your accounts and who has access. In between, the more you move from IaaS to SaaS, the more the provider handles."
          ],
          steps: ["Ask: do we manage the operating system? If yes, it is IaaS.", "Do we only bring our app or data? Then it is PaaS.", "Do we just log in and use the software? Then it is SaaS.", "Remember: your data and accounts are always your job."],
          words: [["IaaS", "infrastructure as a service: you rent virtual machines and manage them."], ["PaaS", "platform as a service: the provider runs the platform; you bring your app."], ["SaaS", "software as a service: ready-to-use software over the internet."], ["Serverless", "code that runs only when triggered, with no server for you to manage."], ["Shared responsibility model", "how security jobs are split between the cloud provider and you."]],
          slides: [
            { title: "Three service types", bullets: ["IaaS: empty apartment, you manage most", "PaaS: furnished, you bring your app", "SaaS: hotel room, just use it"] },
            { title: "Serverless", bullets: ["Code runs only when triggered", "Pay per use, no server to manage", "Example: Azure Functions"] },
            { title: "Shared responsibility", bullets: ["Provider: always the physical datacenter", "You: always your data, accounts, access", "IaaS to SaaS: provider does more"] }
          ],
          sources: [STUDY],
          tryIt: "Sort these into IaaS, PaaS or SaaS: Microsoft Outlook email, an Azure virtual machine, Azure App Service for a website, Microsoft Teams, Azure Functions. Then write one thing you are always responsible for, no matter which type.",
          youCanNow: "tell IaaS, PaaS and SaaS apart and explain the shared responsibility model.",
          quickCheck: [
            { objective: "O2", q: "Which type is like renting a furnished apartment: the provider runs the servers and you bring your app?", options: ["PaaS", "IaaS", "SaaS", "A private cloud"], answer: 0, why: "In PaaS the provider runs servers and system software; you bring your app or data." },
            { objective: "O2", q: "Your nonprofit moves from IaaS to SaaS. What happens to its security work?", options: ["It must now guard the datacenter", "Nothing changes at all", "The provider handles more, but your data and accounts are still your job", "The provider becomes responsible for your passwords"], answer: 2, why: "Moving toward SaaS shifts more work to the provider, but your data and access always stay yours." }
          ]
        },
        {
          objectives: ["O3"],
          title: "How Azure is organized: regions, zones and resource groups",
          minutes: 6,
          goal: "Describe where Azure runs and how resources are organized and found in the Azure portal.",
          text: [
            "Azure runs in datacenters around the world grouped into regions, such as East US or South Africa North. You choose a region for each thing you build: closer to your users is usually faster, and some data has rules about which country it must stay in. Many regions have availability zones: separate datacenters with their own power and cooling, so if one fails, another keeps running. Regions are also paired with another region in the same geography for disaster recovery.",
            "Everything you create (a virtual machine, a database, a storage account) is a resource. Resources go into resource groups, folders for things that belong together, like everything for one website. Resource groups sit in a subscription, which is the billing account. Large organizations group subscriptions with management groups.",
            "You manage all of it in the Azure portal, a website at portal.azure.com. You can also use Azure Cloud Shell, the Azure CLI or Azure PowerShell to manage it by typing commands."
          ],
          steps: ["Choose a region close to your users that meets any data rules.", "Use availability zones when the service must stay up.", "Put related resources in one resource group.", "Know which subscription pays for them.", "Manage it all in the Azure portal or with command-line tools."],
          words: [["Region", "a geographic area with one or more Azure datacenters."], ["Availability zone", "a separate datacenter in a region with its own power, cooling and network."], ["Resource", "anything you create in Azure, like a virtual machine or database."], ["Resource group", "a folder that holds related resources."], ["Subscription", "the account that Azure charges are billed to."], ["Management group", "a way to group several subscriptions under shared rules."], ["Azure portal", "the website for managing Azure."]],
          slides: [
            { title: "Where Azure runs", bullets: ["Datacenters grouped into regions", "Pick a region near your users and rules", "Availability zones: separate datacenters"] },
            { title: "How it is organized", bullets: ["Resource: one thing you create", "Resource group: related resources", "Subscription: billing", "Management group: many subscriptions"] },
            { title: "How you manage it", bullets: ["Azure portal at portal.azure.com", "Cloud Shell, Azure CLI, Azure PowerShell"] }
          ],
          sources: [STUDY],
          tryIt: "Plan the structure for a community center that wants a website and a place to store sign-up forms: name a resource group, list two resources that go in it, and pick a region near you. Write one reason for your region choice.",
          youCanNow: "explain regions, availability zones, resources, resource groups, subscriptions and management groups.",
          quickCheck: [
            { objective: "O3", q: "What is a resource group in Azure?", options: ["A team of Microsoft employees", "A type of virtual machine", "A billing account", "A folder for resources that belong together, like one website"], answer: 3, why: "Resource groups hold related resources; the subscription is the billing account." },
            { objective: "O3", q: "Your users are in South Africa and their data must stay in the country. How do you pick a region?", options: ["Pick the cheapest region anywhere", "Pick a region close to your users that meets the data rules", "Pick a region at random", "Use every region at once"], answer: 1, why: "Choose a region close to users that also meets any rules about where data must stay." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Cloud concepts and Azure's building blocks",
        questions: [
          { objective: "O1", q: "What is the consumption-based model?", options: ["You buy all servers upfront", "Everything is always free", "You pay only for what you use", "You pay one fixed price forever"], answer: 2, why: "Cloud services are usually pay-as-you-go." },
          { objective: "O1", q: "A food bank's website gets very busy once a month. Which cloud benefit helps most?", options: ["Scalability", "Private cloud", "CapEx", "SaaS"], answer: 0, why: "Scalability adds resources when demand rises and removes them later." },
          { objective: "O2", q: "Microsoft Teams used through a web browser is an example of:", options: ["IaaS", "PaaS", "A region", "SaaS"], answer: 3, why: "It is ready-to-use software delivered over the internet." },
          { objective: "O2", q: "Under the shared responsibility model, what is ALWAYS your job?", options: ["Building the datacenter", "Your data and who has access to it", "Cooling the servers", "Replacing broken hard drives"], answer: 1, why: "Customers always own their data, accounts and access." },
          { objective: "O3", q: "What holds related Azure resources, like everything for one website?", options: ["A region", "A resource group", "An availability zone", "A password"], answer: 1, why: "Resource groups organize resources that belong together." }
        ]
      }
    },
    {
      name: "Chapter 2: Core services, cost and your certification",
      lessons: [
        {
          objectives: ["O4"],
          title: "Core Azure services: compute, networking, storage and databases",
          minutes: 6,
          goal: "Match a common need to the right core Azure service.",
          text: [
            "Compute runs your programs. Azure Virtual Machines give you a full computer in the cloud (IaaS). Azure App Service hosts websites and web apps without managing servers (PaaS). Containers package an app with everything it needs so it runs the same anywhere. Azure Functions runs small pieces of code when triggered (serverless). Azure Virtual Desktop gives people a Windows desktop they can reach from any device.",
            "Networking connects things. An Azure virtual network is your private network in the cloud. A VPN Gateway links it to your office over the internet; ExpressRoute is a private connection that does not go over the public internet. Azure DNS turns names into addresses.",
            "Storage keeps files and data. A storage account holds Blob storage (photos, videos, backups), Azure Files (shared folders), queues and tables. Storage tiers (hot, cool, cold, archive) cost less the less often you open the files. Redundancy options keep extra copies so a failure does not lose data. For databases, Azure has managed options such as Azure SQL Database and Azure Cosmos DB."
          ],
          steps: ["Need a website? Look at Azure App Service.", "Need full control of a server? Azure Virtual Machines.", "Need code to run on an event? Azure Functions.", "Need to store files or backups? A storage account with Blob storage.", "Rarely opened files? Use a cooler, cheaper tier."],
          words: [["Virtual machine (VM)", "a computer that runs as software in the cloud."], ["Azure App Service", "a PaaS service for hosting websites and web apps."], ["Container", "a package of an app and everything it needs to run."], ["Virtual network", "a private network for your Azure resources."], ["Blob storage", "storage for large files like photos, videos and backups."], ["Storage tier", "a price level based on how often you open the data: hot, cool, cold or archive."], ["Redundancy", "keeping extra copies so data survives a failure."]],
          slides: [
            { title: "Compute", bullets: ["Virtual Machines: full computer (IaaS)", "App Service: websites (PaaS)", "Functions: code on a trigger", "Containers and Virtual Desktop"] },
            { title: "Networking", bullets: ["Virtual network: your private cloud network", "VPN Gateway: link to your office", "ExpressRoute: private connection", "Azure DNS: names to addresses"] },
            { title: "Storage and databases", bullets: ["Storage account: Blob, Files, queues, tables", "Tiers: hot, cool, cold, archive", "Redundancy keeps extra copies", "Azure SQL Database, Azure Cosmos DB"] }
          ],
          sources: [STUDY],
          tryIt: "For the community center from Lesson 3, choose a service for each need: a public website, a place to keep scanned sign-up forms, and old photos that are almost never opened. Write which service and, for the photos, which storage tier.",
          youCanNow: "match common needs to Azure compute, networking, storage and database services.",
          quickCheck: [
            { objective: "O4", q: "Which Azure service runs small pieces of code only when something triggers it?", options: ["Azure Virtual Machines", "Azure DNS", "Azure Functions", "ExpressRoute"], answer: 2, why: "Azure Functions is serverless: code runs when triggered, and you pay per use." },
            { objective: "O4", q: "A youth center needs a shared folder its staff can all open. What would you suggest?", options: ["Azure Files in a storage account", "Azure Virtual Desktop", "A VPN Gateway", "Azure SQL Database"], answer: 0, why: "Azure Files in a storage account provides shared folders." }
          ]
        },
        {
          objectives: ["O5","O6"],
          title: "Security, governance and controlling costs",
          minutes: 6,
          goal: "Name the Azure tools that keep accounts safe, enforce rules and stop surprise bills.",
          text: [
            "Identity: Microsoft Entra ID is Azure's sign-in and directory service. Turn on multifactor authentication (MFA), which asks for a second proof such as a code in an app, so a stolen password is not enough. Single sign-on (SSO) lets people use one account for many apps. Role-based access control (RBAC) gives each person only the access their job needs. Zero Trust means never assume a request is safe; always verify.",
            "Governance: Azure Policy sets rules, such as \"only create resources in these regions\". Resource locks stop important resources from being deleted or changed by accident. Tags are labels like department=youth or project=website that help you sort and track costs. Microsoft Defender for Cloud checks your setup for security problems.",
            "Costs: what you pay depends on the service, its size, the region, how long it runs and how much data leaves Azure. The free Azure pricing calculator estimates a monthly cost before you build anything. Cost Management lets you set budgets and alerts. A simple rule: delete what you do not use."
          ],
          steps: ["Turn on MFA for every account.", "Give people only the access their job needs (RBAC).", "Add tags to every resource.", "Use Azure Policy and resource locks for important rules.", "Estimate costs first in the pricing calculator, then set a budget alert."],
          words: [["Microsoft Entra ID", "Microsoft's cloud sign-in and directory service."], ["Multifactor authentication (MFA)", "signing in with a password plus a second proof."], ["RBAC", "role-based access control: access based on a person's job."], ["Zero Trust", "a security approach: never assume trust, always verify."], ["Azure Policy", "a tool that enforces rules on what can be created."], ["Resource lock", "stops a resource being deleted or changed by mistake."], ["Tag", "a label on a resource used to sort it and track costs."]],
          slides: [
            { title: "Identity and access", bullets: ["Microsoft Entra ID for sign-in", "MFA: a second proof", "RBAC: only the access a job needs", "Zero Trust: always verify"] },
            { title: "Governance", bullets: ["Azure Policy: enforce rules", "Resource locks: stop accidents", "Tags: sort and track costs", "Defender for Cloud: find weak spots"] },
            { title: "Control costs", bullets: ["Cost depends on service, size, region and time", "Pricing calculator: estimate first", "Budgets and alerts in Cost Management", "Delete what you do not use"] }
          ],
          sources: [STUDY, CALC],
          tryIt: "Write three safety and cost rules for the community center's Azure setup, one each for sign-in, access and spending. Example: \"Every volunteer account uses MFA.\" Then write two tags you would put on every resource.",
          youCanNow: "describe how Azure keeps accounts safe, enforces rules and keeps costs under control.",
          quickCheck: [
            { objective: "O5", q: "What does Zero Trust mean?", options: ["Trust every request from inside the office", "Always verify; never assume a request is safe", "Turn off passwords", "Only trust the cloud provider"], answer: 1, why: "Zero Trust means every request is checked instead of assumed safe." },
            { objective: "O5", q: "A volunteer's password was stolen, but the thief could not sign in. Which setting most likely stopped them?", options: ["A tag on the resource", "A cooler storage tier", "A resource group", "Multifactor authentication (MFA)"], answer: 3, why: "MFA asks for a second proof, so a stolen password alone is not enough." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Estimating costs and planning your AZ-900 path",
          minutes: 6,
          goal: "Estimate a monthly cost in the pricing calculator and make a study plan for AZ-900.",
          text: [
            "The pricing calculator is free on Microsoft's website. You add the services you plan to use, choose a region and options like size and hours, and it shows an estimated monthly cost. Prices change and depend on region, so always use the calculator instead of a number you read somewhere.",
            "If you want to practice in Azure itself, Microsoft offers a free account with some services free for 12 months and over 65 services free every month up to set amounts, for new customers. Read the current terms on Microsoft's free services page before you sign up, set a budget alert, and delete practice resources when you finish. Students may qualify for a separate Azure for Students offer with an academic email.",
            "The exam for the Microsoft Certified: Azure Fundamentals certification is AZ-900. Microsoft's study guide lists three areas: cloud concepts (25-30%), Azure architecture and services (35-40%), and Azure management and governance (30-35%). You need a score of 700 or more to pass. The exam page lists 45 minutes for the assessment, and the price depends on the country where you take it, so check it there. Microsoft Learn has free training and a free practice assessment."
          ],
          steps: ["Open the Azure pricing calculator.", "Add the services from your plan, choose your region and sizes.", "Write down the estimated monthly total.", "Open the AZ-900 page on Microsoft Learn and take the free practice assessment.", "List your two weakest areas and the free Microsoft Learn modules for them."],
          words: [["Pricing calculator", "Microsoft's free tool to estimate Azure costs before you build."], ["AZ-900", "the exam code for Microsoft Certified: Azure Fundamentals."], ["Practice assessment", "free practice questions on Microsoft Learn that show your readiness."], ["Microsoft Learn", "Microsoft's free training and certification website."]],
          slides: [
            { title: "Estimate before you build", bullets: ["Free Azure pricing calculator", "Add services, region and sizes", "Prices change: always recheck"] },
            { title: "Practicing safely", bullets: ["Read the free account terms first", "Set a budget alert", "Delete practice resources when done"] },
            { title: "The AZ-900 exam", bullets: ["Cloud concepts: 25-30%", "Architecture and services: 35-40%", "Management and governance: 30-35%", "Pass mark: 700; price varies by country"] },
            { title: "Your next step", bullets: ["Free practice assessment on Microsoft Learn", "Study your two weakest areas"] }
          ],
          sources: [CALC, FREE, CERT, STUDY],
          tryIt: "Final task: write the one-page Azure plan for a community organization's website and file storage (services and type, region, resource group, safe sign-in, tags and budget), add the monthly estimate from the pricing calculator, then take the free AZ-900 practice assessment and list your two weakest areas.",
          youCanNow: "plan and price a small Azure setup and follow a clear path to the AZ-900 certification.",
          quickCheck: [
            { objective: "O6", q: "Why use the Azure pricing calculator instead of a price you read online?", options: ["Prices change and depend on region, so the calculator gives a current estimate", "The calculator makes Azure free", "Online prices are always higher", "The calculator signs you up automatically"], answer: 0, why: "Prices change and differ by region, so estimate with the calculator for your own choices." },
            { objective: "O6", q: "You took the free AZ-900 practice assessment. What is the best next step?", options: ["Book the exam today without studying", "Retake it until you memorize the answers", "List your two weakest areas and find the free Microsoft Learn modules for them", "Stop, because practice scores do not matter"], answer: 2, why: "Your weakest areas show where to study next, and Microsoft Learn has free modules for each." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Core services, cost and your certification",
        questions: [
          { objective: "O4", q: "Which Azure service hosts a website without you managing servers?", options: ["Azure Virtual Machines", "ExpressRoute", "Resource locks", "Azure App Service"], answer: 3, why: "App Service is PaaS web hosting." },
          { objective: "O4", q: "Old photos are almost never opened. Which storage choice saves money?", options: ["A cooler tier such as cool, cold or archive", "The hot tier", "A bigger virtual machine", "A second subscription"], answer: 0, why: "Cooler tiers cost less for data you rarely open." },
          { objective: "O5", q: "Which tool stops an important resource from being deleted by mistake?", options: ["A tag", "The pricing calculator", "A resource lock", "A region"], answer: 2, why: "Locks prevent accidental deletion or changes." },
          { objective: "O5", q: "What does MFA add to signing in?", options: ["A longer username", "A free subscription", "A new region", "A second proof, such as a code in an app"], answer: 3, why: "MFA means a stolen password alone is not enough." },
          { objective: "O6", q: "Where should you get the current price of the AZ-900 exam?", options: ["A friend's guess", "An old blog post", "Microsoft's official exam page for your country", "Any AI chatbot"], answer: 2, why: "The price depends on the country, and the official page is current." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Microsoft Azure Fundamentals",
    questions: [
      { objective: "O1", q: "Cloud computing means:", options: ["Storing files only on a USB stick", "Renting computing power and services over the internet", "Weather forecasting", "Buying a new laptop"], answer: 1, why: "Cloud means using a provider's computers over the internet." },
      { objective: "O1", q: "Paying a big amount upfront to buy servers is:", options: ["CapEx", "OpEx", "SaaS", "Serverless"], answer: 0, why: "Capital expense is an upfront purchase." },
      { objective: "O1", q: "A service keeps running even when one machine fails. This is:", options: ["A tag", "A management group", "High availability", "CapEx"], answer: 2, why: "High availability keeps services up through failures." },
      { objective: "O1", q: "An organization uses its own servers plus Azure together. That is:", options: ["Hybrid cloud", "Private cloud only", "Public cloud only", "SaaS"], answer: 0, why: "Hybrid mixes private and public." },
      { objective: "O2", q: "You rent a virtual machine and manage its operating system. That is:", options: ["SaaS", "PaaS", "A region", "IaaS"], answer: 3, why: "Managing the OS on rented machines is IaaS." },
      { objective: "O2", q: "Code that runs only when triggered, with no server to manage, is called:", options: ["A resource lock", "Serverless", "Archive storage", "A VPN"], answer: 1, why: "Serverless runs on demand; Azure Functions is an example." },
      { objective: "O2", q: "Who always secures the physical datacenter?", options: ["The customer", "The cloud provider", "The user's bank", "Nobody"], answer: 1, why: "Physical security is always the provider's job." },
      { objective: "O3", q: "An Azure region is:", options: ["A billing account", "A type of database", "A password rule", "A geographic area with one or more datacenters"], answer: 3, why: "Regions are where Azure's datacenters are." },
      { objective: "O3", q: "Availability zones are:", options: ["Separate datacenters in a region with their own power and cooling", "Price levels for storage", "User groups", "Countries"], answer: 0, why: "Zones protect against one datacenter failing." },
      { objective: "O3", q: "Which is the billing account that holds resource groups?", options: ["A tag", "A container", "A subscription", "A region"], answer: 2, why: "Subscriptions are billed and contain resource groups." },
      { objective: "O3", q: "Where do you manage Azure in a web browser?", options: ["An app store", "A storage tier", "ExpressRoute", "The Azure portal"], answer: 3, why: "The Azure portal is the management website." },
      { objective: "O4", q: "Which service gives you a full computer in the cloud?", options: ["Azure DNS", "Azure Policy", "Azure Virtual Machines", "Tags"], answer: 2, why: "Virtual Machines are IaaS compute." },
      { objective: "O4", q: "Which is a private connection to Azure that does not use the public internet?", options: ["VPN Gateway", "ExpressRoute", "Azure DNS", "Blob storage"], answer: 1, why: "ExpressRoute is a private connection." },
      { objective: "O4", q: "Where would you store backups and videos?", options: ["Blob storage in a storage account", "Azure Policy", "A management group", "Microsoft Entra ID"], answer: 0, why: "Blob storage holds large files." },
      { objective: "O5", q: "Which is Azure's sign-in and directory service?", options: ["Azure Advisor", "Azure Functions", "Microsoft Entra ID", "Archive tier"], answer: 2, why: "Entra ID manages identities and sign-in." },
      { objective: "O5", q: "A volunteer only needs to read reports. Which idea limits them to that?", options: ["Role-based access control (RBAC)", "Hybrid cloud", "Scalability", "Archive storage"], answer: 0, why: "RBAC gives only the access a role needs." },
      { objective: "O5", q: "You want to stop anyone creating resources outside your region. Which tool?", options: ["Tags", "The pricing calculator", "A container", "Azure Policy"], answer: 3, why: "Azure Policy enforces rules like allowed regions." },
      { objective: "O5", q: "Labels like project=website on resources are called:", options: ["Locks", "Tags", "Zones", "Tiers"], answer: 1, why: "Tags sort resources and help track costs." },
      { objective: "O6", q: "Before building anything, how do you estimate the monthly cost?", options: ["Guess", "Use the Azure pricing calculator", "Wait for the first bill", "Ask a stranger online"], answer: 1, why: "The calculator estimates costs before you build." },
      { objective: "O6", q: "What score do you need to pass AZ-900, according to Microsoft's study guide?", options: ["500", "600", "700 or more", "900 or more"], answer: 2, why: "Microsoft's study guide says a score of 700 or greater is required." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      3,
      4,
      6,
      7,
      9,
      11,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Service type and services",
        objective: "O4",
        notYet: "The plan names no Azure services, or they do not fit a website and file storage.",
        meets: "Names the service type (IaaS, PaaS or SaaS) and fitting services, such as App Service and a storage account.",
        exceeds: "Says why each service fits better than another choice."
      },
      {
        name: "Region and organization",
        objective: "O3",
        notYet: "No region or resource group is named.",
        meets: "Names a region with a reason and puts the resources in one resource group.",
        exceeds: "Also names the subscription that pays and whether availability zones are needed."
      },
      {
        name: "Safe sign-in and rules",
        objective: "O5",
        notYet: "Does not say how people sign in or who can do what.",
        meets: "Uses MFA and gives each person only the access they need (RBAC).",
        exceeds: "Also adds tags, a policy or a resource lock and says what each protects."
      },
      {
        name: "Cost estimate",
        objective: "O6",
        notYet: "No estimate, or a number not taken from the pricing calculator.",
        meets: "Gives an estimated monthly total from the pricing calculator and a budget alert.",
        exceeds: "Names one change that would lower the cost, such as a cooler storage tier."
      },
      {
        name: "Study plan",
        objective: "O6",
        notYet: "The practice assessment was not taken.",
        meets: "Took the free practice assessment and listed the two weakest areas.",
        exceeds: "Linked each weak area to a free Microsoft Learn module and a date to study it."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who take the official AZ-900 exam within 90 days, and how many pass",
      "Learners who apply for or start an IT support, help desk or cloud job or internship",
      "Community organizations that use a learner's plan to move a website or files to the cloud"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer or tablet with a web browser and internet",
      "Microsoft's free Azure pricing calculator and a free Microsoft Learn account for the practice assessment",
      "A one-page plan template or paper and pen",
      "About 60 minutes for lessons, checks and the plan, plus about 45 minutes for the practice assessment"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then do one chapter per session; work through the pricing calculator on a shared screen.",
      "No Azure account is needed. If learners choose to open a free account, have them read the current terms, set a budget alert and delete practice resources when they finish.",
      "Use a real local organization, such as a food bank or youth center, as the example for the one-page plan.",
      "Remind learners that exam details and prices change; send them to Microsoft's official exam page for their country.",
      "Score the plan with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
