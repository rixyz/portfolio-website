interface WorkProps {
  company: string;
  title: string;
  duration?: {
    start: string;
    end: string;
  };
  description?: string[];
  toolsUsed: string[];
}

interface EducationProps {
  school: string;
  degree: string;
  graduation: string;
  description: string;
}

interface AwardProps {
  name: string;
  issuedBy: string;
  date: string;
  url?: string;
  description: string;
}

interface SocialProps {
  name: string;
  url: string;
}

interface SkillProps {
  name: string;
  icon: string;
}

interface ContactProps {
  phone?: string;
  address?: string;
  email?: string;
}

interface UserProps {
  github: string;
  name: string;
  avatar: string;
  title: string;
  resumeLink: string;
  about: string;
}

interface GithubRepo {
  name: string;
  description: string | null;
  stargazers_count: number;
  forks: number;
  html_url: string;
  owner: { login: string };
  language: string | null;
  pushed_at: string;
}

interface Project {
  name: string;
  description: string | null;
  stars: number;
  forks: number;
  image: string;
  html_url: string;
  language: string | null;
}

interface ExtraProjectProps {
  name: string;
  description: string;
  url: string;
  imageUrl?: string;
  type: string;
  toolsUsed: string[];
}

interface VolunteeringProps {
  title: string;
  organization: string;
  points: string[];
}

interface ProjectFilterProps {
  limit?: number;
  ignore?: string[];
  only?: string[];
}

export type {
  ProjectFilterProps,
  VolunteeringProps,
  ExtraProjectProps,
  GithubRepo,
  Project,
  UserProps,
  ContactProps,
  SkillProps,
  EducationProps,
  WorkProps,
  AwardProps,
  SocialProps,
};
