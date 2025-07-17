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
  email: "deepthisree1012@gmail.com",
  phone: "704-352-3141",
  linkedin: "https://www.linkedin.com/in/deepthi-sree-sampathirao-b81440164"
};

export const experiences: Experience[] = [
  {
    title: "Software Engineering Analyst",
    company: "Accenture Solutions Pvt Ltd",
    location: "Hyderabad, Telangana, India",
    period: "March 2023 – July 2024",
    description: [
      "Developed and enhanced features for a high-traffic survey applications using React, FastAPI, and Python, improving performance and scalability for 100K+ users",
      "Addressed a frontend bundle size issue (1.5MB), cutting load time by 3 seconds through dynamic imports",
      "Implemented a job scheduler for pulling the latest logs, recomputing aggregates, or syncing external data that previously required someone to run a script early hours once in a week before the start of business hours",
      "Actively participated in daily code concaves, contributing to architectural discussions, code reviews, and best practices to improve code quality and maintainability"
    ]
  },
  {
    title: "Application Development Associate",
    company: "Accenture Solutions Pvt Ltd",
    location: "Hyderabad, Telangana, India",
    period: "October 2021 – March 2023",
    description: [
      "Worked on to clean up inconsistent UI spacing and styles using Bootstrap, CSS — made the application feel more consistent",
      "Joined bug triage meetings regularly and picked up smaller bugs no one had time for — fixed issues like incorrect validation messages or button glitches, setting up alerts for critical pipelines failures",
      "Took notes during daily standups for 2 weeks while the team lead was away, helped keep everyone aligned"
    ]
  }
];

export const education: Education[] = [
  {
    degree: "Master's of Science",
    field: "Computer Science",
    school: "University of North Carolina Charlotte",
    location: "Charlotte, NC",
    period: "Aug 2024 – Dec 2026",
    gpa: "4.0",
    description: "Currently pursuing advanced studies in Computer Science with focus on software engineering and system design."
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
  },
  {
    title: "To-Do List App",
    period: "June 2024 - July 2024",
    description: "Created a responsive web application with Bootstrap CSS for task management. Implemented local storage functionality for persistent data and intuitive user interface for task operations.",
    technologies: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    icon: "tasks"
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
