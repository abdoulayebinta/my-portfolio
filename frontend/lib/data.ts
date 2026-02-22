
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
    name: "Sarah Chen",
    role: "VP of Product at TechCorp",
    content: "One of the most strategic product minds I've worked with. Their ability to bridge the gap between complex AI technologies and user needs is unmatched.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: 2,
    name: "Michael Ross",
    role: "Engineering Director at DataFlow",
    content: "Rarely do you find a PM who understands the technical constraints of ML systems so well while still pushing for an exceptional user experience.",
    avatar: "https://i.pravatar.cc/150?u=michael"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Head of AI at FutureScale",
    content: "Transformed our vague AI concepts into a concrete product roadmap that delivered 300% growth in user engagement.",
    avatar: "https://i.pravatar.cc/150?u=elena"
  }
];

export const caseStudies = [
  {
    slug: "enterprise-predictive-analytics",
    title: "Enterprise Predictive Analytics Platform",
    description: "Building a 0-1 predictive maintenance platform for manufacturing giants using IoT data and deep learning.",
    tags: ["B2B", "IoT", "Deep Learning", "0-1"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
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
    slug: "future-of-product-management-ai",
    title: "The Future of Product Management in the Age of AI",
    excerpt: "How Generative AI is reshaping the PM role, from writing PRDs to strategic decision making.",
    date: "2023-10-15",
    readTime: "5 min read",
    tags: ["Product Management", "AI", "Career"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    content: `
      ## The Shift is Here
      
      Artificial Intelligence is not just a feature we add to products; it's fundamentally changing how we build them. As Product Managers, we are at the forefront of this shift.

      ### From Execution to Strategy
      
      With AI tools capable of drafting user stories, analyzing feedback at scale, and even generating initial UI mockups, the "execution" tax on PMs is decreasing. This frees us up to focus on what really matters: **Strategy, Empathy, and Vision**.

      ### The New Skill Stack
      
      1. **Data Fluency**: You don't need to be a data scientist, but you need to understand how models work, their limitations, and how to evaluate them.
      2. **Ethical Thinking**: As we deploy autonomous agents, understanding the societal impact of our products is no longer optional.
      3. **Prompt Engineering**: Knowing how to communicate with LLMs is becoming as important as communicating with engineers.

      ## Conclusion
      
      The PMs who embrace AI will not be replaced; they will replace those who don't. The future belongs to the "AI-Native" Product Manager.
    `
  },
  {
    slug: "building-trust-in-ai-systems",
    title: "Building Trust in AI Systems: A UX Perspective",
    excerpt: "Why accuracy isn't enough. Designing for transparency, explainability, and user control.",
    date: "2023-11-02",
    readTime: "7 min read",
    tags: ["UX", "AI Ethics", "Design"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    content: `
      ## The Black Box Problem
      
      Users are skeptical of "magic" algorithms. When a system recommends a movie or denies a loan application, the "why" matters just as much as the "what".

      ### Principles of Trusted AI
      
      1. **Transparency**: Be clear about when AI is being used.
      2. **Explainability**: Provide rationale for decisions (e.g., "We recommended this because you liked X").
      3. **Control**: Allow users to override or give feedback to the model.

      ### Case Study: Smart Feed
      
      When we introduced an algorithmic feed, engagement dropped. Users felt a loss of agency. By adding a simple "Show me more like this" and "Show me less" control, trust—and engagement—returned.
    `
  }
];

