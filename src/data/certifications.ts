import { Certification } from "@/types";

export const certifications: Certification[] = [
  {
    id: "aws-cp",
    title: "AWS Certified Cloud Practitioner",
    shortTitle: "Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    badgeImage: "/assets/aws-cloud-practitioner.png",
    credentialUrl: "https://www.credly.com/badges/2dcfa2ac-b43e-4994-8b9c-78b10f74388f/linked_in_profile",
    accentColor: "#f59e0b",
    glowColor: "rgba(245,158,11,0.2)",
    description: "Validates comprehensive understanding of AWS Cloud fundamentals — services, architecture, security, pricing models, and support plans.",
    skills: ["Cloud Computing", "AWS Services", "Security", "Pricing", "Architecture"],
  },
  {
    id: "aws-ai",
    title: "AWS Certified AI Practitioner",
    shortTitle: "AI Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    badgeImage: "/assets/aws-ai-practitioner.png",
    credentialUrl: "https://www.credly.com/badges/1f71a38a-d1d4-48a4-af21-0549093302a4/linked_in_profile",
    accentColor: "#22d3ee",
    glowColor: "rgba(34,211,238,0.2)",
    description: "Validates foundational knowledge of AI/ML and Generative AI concepts on AWS — Amazon Bedrock, SageMaker, responsible AI, and enterprise AI patterns.",
    skills: ["Generative AI", "Amazon Bedrock", "SageMaker", "Responsible AI", "MLOps"],
  },
];
