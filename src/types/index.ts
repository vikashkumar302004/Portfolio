export interface Skill {
  name: string;
  icon: string;
  level?: 'core' | 'proficient' | 'learning';
}

export interface SkillCategory {
  id: string;
  category: string;
  icon: string;
  accentColor: string;
  glowColor: string;
  skills: Skill[];
}

export interface ProjectFeature {
  icon: string;
  text: string;
}

export interface Project {
  id: string;
  title: string;
  emoji: string;
  tagline: string;
  headline?: string;
  description: string;
  features: ProjectFeature[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  badge: string;
  isFeatured: boolean;
  isLive: boolean;
}

export interface Certification {
  id: string;
  title: string;
  shortTitle: string;
  issuer: string;
  year: string;
  badgeImage: string;
  credentialUrl: string;
  accentColor: string;
  glowColor: string;
  description: string;
  skills: string[];
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}
