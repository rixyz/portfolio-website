interface Experience {
  company: string;
  title: string;
  years: string;
  description: string;
  toolsUsed: string[];
}

interface Education {
  school: string;
  degree: string;
  graduation: string;
  description: string;
}

interface Award {
  name: string;
  issuedBy: string;
  date: string;
  url: string;
  description: string;
}

interface Social {
  name: string;
  url: string;
}

interface Skill {
  skillName: string;
  icon: string;
}

interface Contact {
  phone?: string;
  address?: string;
  email?: string;
}

interface User {
  github: string;
  name: string;
  image: string;
  title: string;
  resumeLink: string;
  about: string;
}

interface Repo {
  private: boolean;
  name: string;
  description: string;
  stars: number;
  stargazers_count: number;
  forks: number;
  image: string;
  html_url: string;
  owner: {
    login: string;
  };
  languages_url: string;
  languages?: Record<string, number>;
  totalBytes?: number;
}

interface Work {
  name: string;
  description: string;
  url: string;
  imageUrl?: string;
  type: string;
  toolsUsed: string[];
}

export type {
  Work,
  Repo,
  User,
  Contact,
  Skill,
  Education,
  Experience,
  Award,
  Social,
};
