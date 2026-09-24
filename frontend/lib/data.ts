
export const skills = {
  technical: [
    "Python", "SQL", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "React", "Next.js", "Node.js", "AWS", "GCP", "Azure"
  ],
  product: [
    "Product Strategy", "Roadmapping", "Agile/Scrum", "User Research", "A/B Testing", "Data Analysis", "Stakeholder Management", "Go-to-Market"
  ],
  ai: [
    "LLMs", "Generative AI", "Computer Vision", "NLP", "Reinforcement Learning", "MLOps", "RAG", "Prompt Engineering"
  ]
};

export const testimonials = [
  {
    id: 1,
    name: "Joëlle Drouin",
    role: "Director, Marketing & Recruitment",
    content: "I'm happy to recommend Abdoulaye Bah. He's a brilliant, kind product leader with an exceptional work ethic who drives TFO's educational digital products from discovery to delivery. Data-driven and AI-literate, he turns complex needs into testable solutions, builds trust across teams, and consistently connects strategy to impact.",
    avatar: "/testimonials/Joelle.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/jo%C3%ABlle-drouin-3713361b/"
  },
  {
    id: 2,
    name: "Erika Aslanoglou",
    role: "Product Manager",
    content: "Abdoulaye consistently delivered high-quality work on various projects. His ability to navigate complex challenges and deliver results made him an invaluable member of our team. In the fast-paced environment of WHO, his forward-thinking approach and dependability were crucial to our success.",
    avatar: "/testimonials/Erika.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/erika-aslanoglou/"
  },
  {
    id: 3,
    name: "Manuel Loistl",
    role: "Fighting Health Emergencies @WHO",
    content: "Abdoulaye was a very proactive and reliable team member on health informatics projects in Liberia. He showed a strong interest in his work, made suggestions on how to improve solutions and products, welcomed new responsibilities, and consistently delivered the expected results.",
    avatar: "/testimonials/Manuel.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/manuelloistl/"
  },
  {
    id: 4,
    name: "Aïssa Ghouti",
    role: "Chief Technology Officer",
    content: "Abdoulaye is a serious hard worker we can always rely on. He worked with us on several electronic health projects in English and French-speaking developing countries, both as Software Engineer and external IT Consultant.",
    avatar: "/testimonials/Aissa.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/aissaghouti/"
  },
  {
    id: 5,
    name: "Wisdom Nwokocha",
    role: "Senior Technical Writer & Software Engineer",
    content: "Abdoulaye did an exceptional job on a tight deadline project. He built a secure REST API with Node.js, Express.js, and MongoDB with vast technical knowledge. He is proactive, a great team player, and communicates effectively in both French and English.",
    avatar: "/testimonials/Wisdom.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/joklinztech/"
  },
  {
    id: 6,
    name: "Mandy Govender",
    role: "Digital Health Strategist",
    content: "Abdoulaye is an absolute pleasure to work with. He is committed to producing his best, willing to think outside the box, and is a valued team player.",
    avatar: "https://ui-avatars.com/api/?name=Mandy+Govender&background=db2777&color=fff&size=150",
    linkedinUrl: "https://www.linkedin.com/in/mandyhuggenbergergovender/"
  }
];

export const caseStudies = [
  {
    slug: "idellia-ai-pedagogical-copilot",
    title: "IDÉLLIA: Building the AI Pedagogical Co-Pilot for Franco-Ontarian Education",
    description: "How I designed a RAG-based instructional assistant that transforms 15,000 certified educational assets into curriculum-aligned \"Learning Journeys\" — in under 2 minutes.",
    tags: ["RAG", "EdTech", "GenAI", "0-1"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
    metadata: {
      role: "Product Manager",
      timeline: "PRD Complete · In Development",
      team: "TFO (Télévision française de l'Ontario)",
      stack: ["RAG", "LLMs", "Anonymous Class Code System", "idello.org"],
      projectType: "PROTOTYPE"
    },
    content: {
      context: "TFO's platform Idéllo hosts over 15,000 certified educational assets used by Franco-Ontarian teachers across Canada. Despite the richness of the content library, teachers struggled to discover and sequence relevant resources into coherent lesson plans — a process that could take hours.",
      problem: "Franco-Ontarian educators lacked a fast, curriculum-aligned way to build structured learning sequences from Idéllo's vast content library. Discovery was manual, time-consuming, and disconnected from Ontario curriculum expectations.",
      vision: "To build IDÉLLIA — an AI pedagogical co-pilot that acts as a knowledgeable teaching assistant, capable of generating fully structured, curriculum-aligned Learning Journeys from 15,000+ assets in under 2 minutes.",
      aiOpportunity: "Retrieval-Augmented Generation (RAG) was the core architectural choice: embedding Idéllo's asset metadata and curriculum tags into a vector store, then using an LLM to generate coherent, sequenced Learning Journeys grounded in real content — not hallucinated resources.",
      systemDesign: "Designed an Anonymous Class Code System to allow teachers to share AI-generated journeys with students without requiring student accounts — a key privacy and adoption unlock. The RAG pipeline retrieves assets by curriculum strand, grade level, and learning objective, then passes them to the generation layer.",
      decisions: "Chose RAG over fine-tuning to keep the system grounded in real, licensed Idéllo content. Prioritized teacher trust by surfacing source assets alongside generated journeys, so educators could verify and edit before sharing.",
      execution: "Led end-to-end product definition: user research with Franco-Ontarian teachers, PRD authoring, RAG architecture decisions, and coordination with engineering and curriculum experts. Defined the v1 scope to focus on Learning Journey generation before expanding to real-time classroom features.",
      metrics: "PRD complete and development underway. Target: reduce lesson planning time from ~2 hours to under 2 minutes. Designed for 145K+ monthly active users on the Idéllo platform.",
      lessons: "The biggest insight was that teachers didn't just want AI to suggest content — they wanted to stay in control. Building edit/override flows into the UX from day one was critical to adoption strategy."
    }
  },
  {
    slug: "unmc-digital-health-screening",
    title: "SMART / UNMC — Digital Health Screening Platform",
    description: "Translated complex clinical and research workflows into requirements for an integrated Android and web platform supporting sickle cell and malaria screening in Nigeria.",
    tags: ["HealthTech", "Diagnostics", "Mobile", "Integrations"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    metadata: {
      role: "Business Analyst",
      timeline: "In Development",
      team: "University of Nebraska Medical Center (UNMC)",
      stack: ["Android", "Web", "Portable Diagnostics", "Clinical Workflows"],
      keyOutcome: "97.2% diagnostic accuracy"
    },
    content: {
      context: "To be developed",
      problem: "To be developed",
      vision: "To be developed",
      aiOpportunity: "To be developed",
      systemDesign: "To be developed",
      decisions: "To be developed",
      execution: "To be developed",
      metrics: "To be developed",
      lessons: "To be developed"
    }
  },
  {
    slug: "eidsr-digitizing-outbreak-response-west-africa",
    title: "eIDSR — National Disease Surveillance Platform",
    description: "Digitizing fragmented disease reporting into an offline-first national surveillance platform designed to improve outbreak detection and response.",
    tags: ["HealthTech", "Data Platform", "Offline-first", "Integrations"],
    image: "/visuals/eidsr-card.png",
    metadata: {
      role: "Software Developer",
      timeline: "Jan 2016 – Mar 2017",
      team: "eHealth Africa",
      stack: ["DHIS2", "Windows Standalone (Offline Tracker)", "mHero (SMS)", "Web"],
      keyOutcome: "78 health facilities · Pilot deployment"
    },
    content: {
      context: "Following the 2014–2015 West African Ebola epidemic, the Liberian Ministry of Health prioritized WHO's Integrated Disease Surveillance and Response (IDSR) guidelines to safeguard national health security. The mission-critical objective was to detect potential outbreaks within a 24–48 hour window across a massive nationwide infrastructure of 745 facilities and 90 districts. I served on the founding technical team starting in early 2016 to architect a digital ecosystem for near-real-time data dissemination and rapid response.",
      problem: "The existing infrastructure relied on manual paper forms and unsecured Excel files transmitted via public email, causing critical reporting lags of several weeks. Data quality was severely compromised by frequent entry errors and \"impossible\" clinical values, leading to massive data inconsistencies between district and national case counts. Furthermore, manual aggregation was cumbersome and error-prone, while sensitive patient data faced significant security risks during transmission.",
      vision: "To build eidsr — a digitized, offline-first Electronic Integrated Disease Surveillance and Response system — enabling near-real-time outbreak detection from community health workers up to national ministries of health.",
      aiOpportunity: "",
      systemDesign: "Three-layer architecture: (1) Windows Standalone offline tracker for field data capture without internet, (2) DHIS2 web platform for national aggregation and dashboards, (3) mHero SMS layer for remote community health workers. Sync logic designed to reconcile offline data on reconnection.",
      decisions: "Prioritized offline-first design over a pure web solution — a non-negotiable constraint in rural West Africa where connectivity was unreliable. Chose DHIS2 as the national backbone given its adoption by Ministries of Health and WHO alignment.",
      execution: "Part of the founding technical team at eHealth Africa. Contributed to system design, development, and field deployment. Worked directly with national health authorities to configure disease indicators, reporting cadences, and alert thresholds aligned with WHO case definitions.",
      metrics: "Successfully piloted and prepared for national scale-up. System enabled near-real-time reporting across multiple districts, replacing a process that previously took days with one that took hours.",
      lessons: "Connectivity assumptions are the first thing to throw out when building for low-resource settings. Offline-first is not a feature — it's the foundation. Equally important: designing for health workers with limited digital literacy required radical simplicity in the field UI."
    }
  },
  {
    slug: "generative-customer-support",
    title: "GenAI Customer Support Agent",
    description: "Designed a RAG-based conversational support assistant to explore retrieval, answer quality, and automated customer-service workflows.",
    tags: ["GenAI", "LLM", "RAG", "B2C"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop",
    metadata: {
      role: "Senior PM",
      timeline: "8 Months",
      team: "3 AI Engineers, 2 Full Stack, 1 UX Researcher",
      stack: ["OpenAI API", "Pinecone", "LangChain", "Next.js"],
      projectType: "PERSONAL BUILD"
    },
    content: {
      context: "Support costs were scaling linearly with user growth. CSAT scores were dropping due to long wait times.",
      problem: "L1 support agents were overwhelmed with repetitive queries. Traditional chatbots were rigid and frustrating for users.",
      vision: "A conversational AI that feels like a helpful expert, capable of resolving complex queries and taking action on behalf of the user.",
      aiOpportunity: "Using LLMs (GPT-4) with Retrieval Augmented Generation (RAG) to ground answers in our help center documentation and user data.",
      systemDesign: "Vector database (Pinecone) for knowledge retrieval. LangChain for orchestration. Custom guardrails to prevent hallucinations and ensure brand safety.",
      decisions: "We decided to use a hybrid approach: AI handles the initial triage and simple resolution, but seamlessly hands off to a human with full context if sentiment turns negative.",
      execution: "Collaborated closely with Legal and Trust & Safety teams to define boundaries. Ran A/B tests on different prompting strategies.",
      metrics: "Deflected 60% of incoming tickets. Improved CSAT by 15 points. Reduced average resolution time from 4 hours to 2 minutes.",
      lessons: "Latency was a challenge. We optimized by caching common queries and using smaller, fine-tuned models for specific intents."
    }
  },
  {
    slug: "healthcare-diagnostic-assistant",
    title: "Boukili — Digital Reading Platform Modernization",
    description: "Modernizing a French-language digital reading platform for children with improved accessibility, user experience, platform capabilities, and new learning features.",
    tags: ["EdTech", "Product Modernization", "Accessibility", "Platform"],
    image: "/visuals/boukili-featured.png",
    metadata: {
      role: "Product Manager",
      timeline: "Currently Building",
      team: "TFO (Télévision française de l'Ontario)",
      stack: ["React", "Next.js", "Node.js", "Educational Platform"],
      keyOutcome: "2.2M+ reads since Jan 2026",
      status: "Currently Building"
    },
    content: {
      context: "Radiologists are overworked, leading to burnout and potential diagnostic errors.",
      problem: "High volume of scans means less time per patient. Subtle anomalies are easily missed in early stages.",
      vision: "An AI 'second pair of eyes' that highlights potential regions of interest, prioritizing the worklist for radiologists.",
      aiOpportunity: "Convolutional Neural Networks (CNNs) trained on large datasets of annotated X-rays to detect specific pathologies.",
      systemDesign: "Edge deployment for privacy and speed. DICOM integration. FDA clearance workflow built into the development process.",
      decisions: "We focused on high sensitivity (recall) to ensure no potential issues were missed, accepting a higher false positive rate which the radiologist could easily dismiss.",
      execution: "Partnered with 3 major hospitals for data and validation. Navigated complex regulatory landscape (HIPAA, FDA).",
      metrics: "Improved detection rate of early-stage nodules by 20%. Reduced average review time per scan by 30%.",
      lessons: "User trust is paramount in healthcare. Explainability (Grad-CAM heatmaps) was just as important as model accuracy."
    }
  }
];


