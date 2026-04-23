export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  field: string;
  school: string;
  location: string;
  period: string;
  gpa: string;
  description: string;
}

export interface Project {
  title: string;
  period: string;
  description: string;
  technologies: string[];
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface ContactInfo {
  github: string;
  email: string;
  phone: string;
  linkedin: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon: string;
}

export const contactInfo: ContactInfo = {
  github:"https://github.com/deepu-crypto",
  email: "deepthisree1012@gmail.com",
  phone: "704-352-3141",
  linkedin: "https://www.linkedin.com/in/deepthi-sree-sampathirao-b81440164"
};

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Goldman Sachs",
    location: "Hybrid",
    period: "August 2025 – Present",
    description: [
      "Initiated and validated a PoC for LLM-backed document intelligence using AWS Bedrock, demonstrating a 73% reduction in analyst research retrieval time across a controlled dataset of 50,000 fixed income documents; results directly secured executive approval to scale into full production within 8 weeks.",
      "Spearheaded the architectural evolution of a Java Spring Boot research portal into a GenAI-augmented platform using AWS Bedrock and LangChain4j, enabling investment analysts to query 5 years of fixed income and equity research through a React-based conversational interface.",
      "Built a RAG pipeline ingesting 3.2M financial documents from S3 into Amazon OpenSearch Serverless as dense vector embeddings, enabling semantic search across analyst queries and cutting research retrieval time by 38 minutes per query.",
      "Designed a multi-agent workflow layer using LangChain4j agents to handle intent classification, document retrieval, and response synthesis as discrete agent steps, reducing hallucination incidents by 64% compared to the single-prompt baseline",
      "Implemented a prompt governance module via Spring AI to enforce token budgeting, context injection standards, and response schema validation across all Bedrock invocations, holding average cost to under $0.003 per analyst query.",
      "Exposed LLM orchestration endpoints through Spring Boot APIs secured behind AWS API Gateway with IAM-based consumer authentication, governing access across 11 internal trading desk groups",
      "Deployed all platform services on Amazon EKS with Helm-managed releases via GitHub Actions pipelines, maintaining 99.97% production availability and enabling zero-downtime rollouts across every release." ,
      "Surfaced embedding pipeline health and query quality degradation signals through AWS CloudWatch custom dashboards, reducing undetected ingestion failures from weekly occurrences to near-zero within the first 60 days post-launch."
    ]
  },
  {
    title: "Software Engineer",
    company: "Accenture Client :IQVIA",
    location: "Hyderabad, Telangana, India",
    period: "October 2021 – July 2024",
    description: [
      "Built a React.js clinical data visibility portal supporting 4,200+ global clinical operations users across 18 countries, enabling real-time access to trial site performance metrics previously available only through weekly Excel exports.",
      "Developed Spring Boot microservices exposing RESTful APIs integrated with IQVIA's CDISC-compliant clinical data repositories, reducing data preparation time for regulatory submissions by 52% across 30+ active Phase III trials.",
      "Configured Azure Service Bus topic subscriptions to decouple clinical event ingestion from downstream safety reporting and data warehouse services, processing 920,000 daily study events with zero message loss under peak load.",
      "Governed all platform API traffic through Azure API Management with OAuth2 and JWT enforcement, sustaining 4.8 million monthly API calls at 99.9% gateway availability across all trial sponsor integrations.",
      "Secured access to sensitive patient-level study data using Azure Active Directory role-based conditional access aligned with 21 CFR Part 11 compliance requirements, achieving zero data access violations in all regulatory assessments.",
      "Provisioned AKS clusters and Azure SQL instances using Terraform across three environments, compressing infrastructure setup time from 5 hours to 28 minutes per release cycle.",
      "Accelerated release frequency from monthly to bi-weekly by implementing Azure Pipelines CI/CD with mandatory JUnit 5 and Mockito quality gates, raising code coverage from 58% to 84% over three release cycles.",
      "Reduced front-end defect escape rate to near-zero by integrating Cypress end-to-end test suites into the pipeline, intercepting 91% of UI regressions before staging promotion."
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "ebay",
    location: "Hyderabad, Telangana, India",
    period: "Jan 2020 – Sep 2021",
    description: [
      "Built a React.js clinical data visibility portal supporting 4,200+ global clinical operations users across 18 countries, enabling real-time access to trial site performance metrics previously available only through weekly Excel exports.Developed Java Spring Boot services powering eBay's seller performance evaluation engine, processing 2.6 million daily seller transaction events to compute quality scores across fulfilment, returns, and buyer satisfaction dimensions.",
      "Built Angular seller dashboard components enabling 180,000+ active marketplace sellers to view performance trends and listing recommendations in a single self-service interface, reducing seller support ticket volume by 34%..",
      "Designed a GCP Cloud Pub/Sub event pipeline to decouple seller score computation from listing recommendation generation, eliminating synchronous bottlenecks that previously caused 6–8 weekly timeout incidents during peak traffic."
    ]
  }
];

export const education: Education[] = [
  {
    degree: "Master's of Science",
    field: "Computer Science",
    school: "University of North Carolina Charlotte",
    location: "Charlotte, NC",
    period: "Aug 2024 – Dec 2025",
    gpa: "4.0",
    description: "Graduated with MS in Computer Science with focus on software engineering and system design."
  },
  {
    degree: "Bachelor's in Technology",
    field: "Computer Science",
    school: "Aditya Institute of Technology and Management",
    location: "AP, India",
    period: "Aug 2017 – July 2021",
    gpa: "3.86",
    description: "Comprehensive foundation in computer science fundamentals, programming, and software development practices."
  }
];

export const projects: Project[] = [
   {
    title: "System Design Simulator",
    period: "April 2026 - Present",
    description: "Developed an intelligent chess game using React and JavaScript with AI opponent implementing Alpha-Beta pruning algorithm. Achieved highest score among 60 students for effective implementation.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "AI", "Multi-Agent Systems","Crew-AI"],
    icon: "tasks"
  },
  {
     title: "Chess Game with AI",
    period: "Mar 2025 - Apr 2025",
    description: "Developed an intelligent chess game using React and JavaScript with AI opponent implementing Alpha-Beta pruning algorithm. Achieved highest score among 60 students for effective implementation.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "AI", "Alpha-Beta Pruning"],
    icon: "chess"
  },
  {
      title: "FoodMunch",
    period: "Aug 2024 – Sep 2024",
    description: "Built a complete CI/CD pipeline using Azure DevOps and provisioned cloud infrastructure with Terraform. Implemented automated deployment across multiple environments with database management in Cosmos DB.",
    technologies: ["Azure DevOps", "Terraform", "Azure Functions", "Cloud Infrastructure", "Git"],
    icon: "utensils"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "code",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "Bootstrap", level: 80 }
    ]
  },
  {
    title: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Python", level: 85 },
      { name: "Flask", level: 75 },
      { name: "FastAPI", level: 80 }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: [
      { name: "Azure", level: 85 },
      { name: "AWS", level: 75 },
      { name: "DevOps", level: 80 },
      { name: "Shell Scripting", level: 70 }
    ]
  }
];

export const certifications: Certification[] = [
{
    name: "AWS Certified AI Practitioner Associate",
    issuer: "AWS",
    date: "March 2026- March 2029",
    icon: "aws"
  },
  {
    name: "Microsoft Azure Fundamentals",
    issuer: "AZ-900 Certified",
    date: "No Expiry",
    icon: "microsoft"
  },
  {
    name: "ACE Award",
    issuer: "Accenture Solutions (Dec 2022)",
    date: "Dec 2022",
    icon: "trophy"
  }
];
