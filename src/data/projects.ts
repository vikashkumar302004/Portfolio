import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "nexgen-code",
    title: "NexGen Code",
    emoji: "🌌",
    tagline: "The Architectural Code Intelligence Engine",
    headline: "Paste any code. Get architectural blueprints, complexity analysis, and multilingual documentation instantly.",
    description: `A next-generation AI orchestration platform that deconstructs complex codebases into interactive architectural blueprints and deep algorithmic insights. Built with a proprietary multi-agent routing system powered by Groq LLaMA-3-70B and Google Gemini 1.5 Flash, NexGen Code bridges the gap between raw code and human understanding.`,
    features: [
      { icon: "GitBranch", text: "Neural Flowcharting — Dynamic Mermaid.js architecture diagrams with animated edges" },
      { icon: "TrendingUp", text: "Big O Scoring — Instant Time & Space complexity with maintainability index" },
      { icon: "Layers", text: "Expert Infrastructure Mapping — Infers AWS services, databases, APIs from code" },
      { icon: "Globe", text: "Multilingual Support — English, Hindi, Hinglish explanations for global teams" },
      { icon: "Zap", text: "Multi-key LLM rotation — zero-downtime inference with automatic failover" },
    ],
    techStack: ["React 18", "Vite", "FastAPI", "Python", "Groq LLaMA-3-70B", "Gemini 1.5 Flash", "Mermaid.js", "Monaco Editor", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://nexgen-code.vercel.app/",
    githubUrl: "https://github.com/vikashkumar302004/Nexgen-code",
    badge: "Featured",
    isFeatured: true,
    isLive: true,
  },
  {
    id: "letscode-hub",
    title: "Let's Code Hub",
    emoji: "⚡",
    tagline: "DSA Practice × AWS Certification Prep",
    description: `A unified learning platform combining Data Structures & Algorithms practice with AWS Certification exam preparation. Designed for engineers who want to master competitive programming fundamentals and cloud computing in one focused environment.`,
    features: [
      { icon: "Code2", text: "Curated DSA problem sets with progressive difficulty" },
      { icon: "Cloud", text: "AWS certification mock exam questions" },
      { icon: "BarChart2", text: "Progress analytics and performance tracking" },
    ],
    techStack: ["React", "JavaScript", "AWS", "Vercel"],
    liveUrl: "https://aws-exam-hub-private.vercel.app/#/",
    githubUrl: "https://github.com/vikashkumar302004",
    badge: "Ed-Tech",
    isFeatured: false,
    isLive: true,
  }
];
