
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
    role: "Director, Marketing & Recruitment · Collège La Cité",
    content: "I'm happy to recommend Abdoulaye Bah. He's a brilliant, kind product leader with an exceptional work ethic who drives TFO's educational digital products from discovery to delivery. Data-driven and AI-literate, he turns complex needs into testable solutions, builds trust across teams, and consistently connects strategy to impact.",
    avatar: "/testimonials/Joelle.jpeg"
  },
  {
    id: 2,
    name: "Erika Aslanoglou",
    role: "Product Manager · WHO Partners Platform, RAP Unit",
    content: "Abdoulaye consistently delivered high-quality work on various projects. His ability to navigate complex challenges and deliver results made him an invaluable member of our team. In the fast-paced environment of WHO, his forward-thinking approach and dependability were crucial to our success.",
    avatar: "/testimonials/Erika.jpeg"
  },
  {
    id: 3,
    name: "Manuel Loistl",
    role: "Health Emergencies · WHO | Investor · Extropy Ventures",
    content: "Abdoulaye was a very proactive and reliable team member on health informatics projects in Liberia. He showed a strong interest in his work, made suggestions on how to improve solutions and products, welcomed new responsibilities, and consistently delivered the expected results.",
    avatar: "/testimonials/Manuel.jpeg"
  },
  {
    id: 4,
    name: "Aïssa Ghouti",
    role: "Chief Technology Officer · Savics",
    content: "Abdoulaye is a serious hard worker we can always rely on. He worked with us on several electronic health projects in English and French-speaking developing countries, both as Software Engineer and external IT Consultant.",
    avatar: "/testimonials/Aissa.jpeg"
  },
  {
    id: 5,
    name: "Wisdom Nwokocha",
    role: "Senior Technical Writer & Software Engineer",
    content: "Abdoulaye did an exceptional job on a tight deadline project. He built a secure REST API with Node.js, Express.js, and MongoDB with vast technical knowledge. He is proactive, a great team player, and communicates effectively in both French and English.",
    avatar: "/testimonials/Wisdom.jpeg"
  },
  {
    id: 6,
    name: "Mandy Govender",
    role: "Digital Health Strategist",
    content: "Abdoulaye is an absolute pleasure to work with. He is committed to producing his best, willing to think outside the box, and is a valued team player.",
    avatar: "https://ui-avatars.com/api/?name=Mandy+Govender&background=db2777&color=fff&size=150"
  }
];

export const caseStudies = [
  {
    slug: "enterprise-predictive-analytics",
    title: "Enterprise Predictive Analytics Platform",
    description: "Building a 0-1 predictive maintenance platform for manufacturing giants using IoT data and deep learning.",
    tags: ["B2B", "IoT", "Deep Learning", "0-1"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    metadata: {
      role: "Lead Product Manager",
      timeline: "18 Months",
      team: "5 ML Engineers, 3 Backend, 2 Frontend, 1 Designer",
      stack: ["Python", "TensorFlow", "Kafka", "AWS"]
    },
    content: {
      context: "At IndustrialAI, we noticed that manufacturing clients were losing millions due to unplanned downtime. The existing solutions were rule-based and reactive.",
      problem: "Manufacturers lacked real-time visibility into machine health. Downtime costs averaged $260k/hour. Existing tools generated too many false positives, leading to alert fatigue.",
      vision: "To create an autonomous 'immune system' for factories that predicts failures before they happen and prescribes the optimal maintenance window.",
      aiOpportunity: "Leveraging time-series data from IoT sensors (vibration, temperature, acoustic) to detect anomalies using Autoencoders and predict RUL (Remaining Useful Life) using LSTMs.",
      systemDesign: "We built a scalable pipeline using Kafka for ingestion, Spark for processing, and a microservices architecture for the serving layer. Models were versioned using MLflow.",
      decisions: "We chose to prioritize precision over recall initially to build trust with operators who were skeptical of AI. We also decided to build a 'Human-in-the-loop' feedback mechanism.",
      execution: "Led a cross-functional team of 5 ML engineers, 3 backend devs, and 2 designers. Adopted a dual-track agile process to manage research uncertainty alongside software delivery.",
      metrics: "Reduced unplanned downtime by 40% for pilot customers. Generated $5M in ARR within the first 18 months. Achieved 95% model accuracy on critical failure modes.",
      lessons: "Data quality was the biggest bottleneck. If I were to do it again, I would invest earlier in automated data validation tools."
    }
  },
  {
    slug: "generative-customer-support",
    title: "GenAI Customer Support Agent",
    description: "Reducing support ticket volume by 60% with a RAG-based conversational AI agent.",
    tags: ["GenAI", "LLM", "RAG", "B2C"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop",
    metadata: {
      role: "Senior PM",
      timeline: "8 Months",
      team: "3 AI Engineers, 2 Full Stack, 1 UX Researcher",
      stack: ["OpenAI API", "Pinecone", "LangChain", "Next.js"]
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
    title: "AI Diagnostic Assistant",
    description: "Assisting radiologists in detecting early signs of anomalies in X-rays with Computer Vision.",
    tags: ["Healthcare", "Computer Vision", "Regulated", "Mobile"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    metadata: {
      role: "Product Lead",
      timeline: "24 Months",
      team: "4 Research Scientists, 3 Engineers, Clinical Partners",
      stack: ["PyTorch", "DICOM", "Edge AI", "iPadOS"]
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

export const blogPosts = [
  {
    slug: "ai-in-healthcare-beyond-diagnosis",
    title: "AI in Healthcare: Beyond Diagnosis to Operational Resilience",
    excerpt: "How predictive models are optimizing hospital resource allocation and patient flow during critical surges.",
    date: "2024-01-15",
    readTime: "6 min read",
    tags: ["Healthcare", "AI", "Operations"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    content: `
      ## The Operational Challenge
      
      While diagnostic AI gets the headlines, the immediate value for health systems lies in operational efficiency. Hospitals are complex logistical hubs where bottlenecks cost lives.

      ### Predictive Resource Allocation
      
      By analyzing historical admission rates, local epidemiological data, and real-time ER throughput, we can predict bed shortages 48 hours in advance. This allows administrators to:
      
      1. **Optimize Staffing**: Call in nurses before the surge hits.
      2. **Manage Inventory**: Ensure critical supplies are available.
      3. **Divert Ambulances**: Proactively balance loads across regional networks.

      ### Case Study: Crisis Response
      
      During the recent global health crisis, we deployed a lightweight prediction model that helped regional health ministries reduce patient wait times by 35% through better load balancing.
    `
  },
  {
    slug: "personalized-learning-at-scale",
    title: "The Promise of AI in Education: True Personalization at Scale",
    excerpt: "Moving from standardized curriculums to adaptive learning paths powered by LLMs and knowledge graphs.",
    date: "2023-12-10",
    readTime: "5 min read",
    tags: ["Education", "EdTech", "Personalization"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
    content: `
      ## The "One Size Fits All" Problem
      
      Traditional education forces students to learn at the same pace. AI offers a way out, but only if designed correctly.

      ### Knowledge Graphs + LLMs
      
      By mapping curriculum concepts into a knowledge graph and using LLMs to generate explanations, we can create a tutor that understands *why* a student is stuck.
      
      - **Diagnosis**: Is it a conceptual gap or a calculation error?
      - **Adaptation**: Explain it with a sports analogy if the student loves soccer.
      - **Scaffolding**: Provide hints, not just answers.

      ### The Role of the Teacher
      
      AI doesn't replace teachers; it gives them superpowers. By automating grading and basic remediation, teachers can focus on mentorship and complex problem-solving.
    `
  },
  {
    slug: "decision-intelligence-enterprise",
    title: "Decision Intelligence: The Next Frontier for Enterprise AI",
    excerpt: "Why the next wave of value isn't just generating content, but helping leaders make better, faster decisions.",
    date: "2023-11-28",
    readTime: "7 min read",
    tags: ["Enterprise", "Strategy", "Decision Science"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    content: `
      ## From Dashboards to Decisions
      
      We are drowning in dashboards. Executives don't need more charts; they need recommendations with confidence intervals.

      ### The DI Stack
      
      Decision Intelligence (DI) combines data science, social science, and managerial science.
      
      1. **Causal Inference**: Understanding cause and effect, not just correlation.
      2. **Simulation**: Running "what-if" scenarios (e.g., "What if we raise prices by 5%?").
      3. **Optimization**: Finding the best action under constraints.

      ### Building Trust
      
      For an enterprise to trust an AI decision, the system must be explainable. "The black box said so" is not an acceptable strategy in the boardroom.
    `
  },
  {
    slug: "responsible-ai-product-development",
    title: "Frameworks for Responsible AI Product Development",
    excerpt: "Practical steps for PMs to bake ethics, fairness, and transparency into the product lifecycle from day one.",
    date: "2023-11-05",
    readTime: "8 min read",
    tags: ["Ethics", "Responsible AI", "Product Management"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
    content: `
      ## Ethics as a Non-Functional Requirement
      
      Responsible AI isn't a checklist at the end of development; it's a constraint that shapes the product definition.

      ### The 3-Step Framework
      
      1. **Data Audits**: Before training, analyze your dataset for representation bias. Who is missing?
      2. **Model Cards**: Document the model's intended use, limitations, and performance across different demographics.
      3. **Feedback Loops**: Design UI mechanisms for users to report bias or errors easily.

      ### The "Red Team" Approach
      
      Hire diverse teams to try and break your model. If you can't find the flaws, you aren't looking hard enough.
    `
  },
  {
    slug: "product-strategy-age-of-llms",
    title: "Product Strategy in the Age of LLMs",
    excerpt: "How Generative AI is reshaping the PM role, from writing PRDs to strategic decision making.",
    date: "2023-10-15",
    readTime: "6 min read",
    tags: ["Product Strategy", "LLMs", "GenAI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    content: `
      ## The Shift is Here
      
      Artificial Intelligence is not just a feature we add to products; it's fundamentally changing how we build them. As Product Managers, we are at the forefront of this shift.

      ### From Execution to Strategy
      
      With AI tools capable of drafting user stories, analyzing feedback at scale, and even generating initial UI mockups, the "execution" tax on PMs is decreasing. This frees us up to focus on what really matters: **Strategy, Empathy, and Vision**.

      ### The New Skill Stack
      
      1. **Data Fluency**: You don't need to be a data scientist, but you need to understand how models work, their limitations, and how to evaluate them.
      2. **Ethical Thinking**: As we deploy autonomous agents, understanding the societal impact of our products is no longer optional.
      3. **Prompt Engineering**: Knowing how to communicate with LLMs is becoming as important as communicating with engineers.
    `
  }
];

