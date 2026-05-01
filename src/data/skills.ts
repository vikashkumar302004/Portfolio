import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    category: "Programming Languages",
    icon: "Code2",
    accentColor: "#6366f1",
    glowColor: "rgba(99,102,241,0.3)",
    skills: [
      { name: "C++", icon: "SiCplusplus", level: "core" },
      { name: "JavaScript", icon: "SiJavascript", level: "core" },
      { name: "TypeScript", icon: "SiTypescript", level: "core" },
      { name: "Python", icon: "SiPython", level: "core" },
    ]
  },
  {
    id: "backend",
    category: "Backend",
    icon: "Server",
    accentColor: "#22d3ee",
    glowColor: "rgba(34,211,238,0.3)",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs", level: "core" },
      { name: "Express.js", icon: "SiExpress", level: "core" },
      { name: "FastAPI", icon: "SiFastapi", level: "core" },
      { name: "GraphQL", icon: "SiGraphql", level: "proficient" },
    ]
  },
  {
    id: "database",
    category: "Databases",
    icon: "Database",
    accentColor: "#10b981",
    glowColor: "rgba(16,185,129,0.3)",
    skills: [
      { name: "MongoDB", icon: "SiMongodb", level: "core" },
      { name: "SQL", icon: "SiMysql", level: "core" },
      { name: "Vector DB", icon: "SiPinecone", level: "proficient" },
    ]
  },
  {
    id: "genai",
    category: "Gen AI & LLM",
    icon: "Brain",
    accentColor: "#f59e0b",
    glowColor: "rgba(245,158,11,0.3)",
    skills: [
      { name: "LangChain", icon: "SiLangchain", level: "core" },
      { name: "LangGraph", icon: "SiLangchain", level: "proficient" },
      { name: "RAG", icon: "SiOpenai", level: "core" },
      { name: "LLM APIs", icon: "SiOpenai", level: "core" },
      { name: "Vector DB", icon: "SiPinecone", level: "proficient" },
    ]
  },
  {
    id: "cloud",
    category: "Cloud & DevOps",
    icon: "Cloud",
    accentColor: "#8b5cf6",
    glowColor: "rgba(139,92,246,0.3)",
    skills: [
      { name: "AWS", icon: "SiAmazonaws", level: "core" },
      { name: "Docker", icon: "SiDocker", level: "proficient" },
      { name: "Git", icon: "SiGit", level: "core" },
      { name: "GitHub", icon: "SiGithub", level: "core" },
      { name: "Linux", icon: "SiLinux", level: "proficient" },
      { name: "Yarn", icon: "SiYarn", level: "proficient" },
    ]
  },
];
