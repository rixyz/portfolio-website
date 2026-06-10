import {
  UserProps,
  EducationProps,
  WorkProps,
  AwardProps,
  SocialProps,
  ContactProps,
  SkillProps,
  ExtraProjectProps,
  VolunteeringProps,
  ProjectFilterProps,
} from "./Type";

// ─────────────────────────────────────────────────────────────────────────────
// This is the TEMPLATE config with placeholder data.
// Fork the repo, then edit the values below (and CV.tex) with your own details.
// ─────────────────────────────────────────────────────────────────────────────

// Experiences
const experiences: WorkProps[] = [
  {
    company: "Acme Corp",
    title: "Software Engineer",
    duration: { start: "Jan 2024", end: "Present" },
    description: [
      "Describe your impact here — what you built, the stack, and the outcome.",
    ],
    toolsUsed: ["TypeScript", "React", "Node.js"],
  },
  {
    company: "Startup Inc",
    title: "Full-Stack Developer",
    duration: { start: "Jun 2022", end: "Dec 2023" },
    description: [
      "Built and shipped features across the stack.",
      "Designed REST APIs and integrated third-party services.",
    ],
    toolsUsed: ["Python", "Django", "Postgres"],
  },
  {
    company: "Startup Inc",
    title: "Developer Intern",
    duration: { start: "Jan 2022", end: "Jun 2022" },
    description: ["Contributed to the web app and internal tooling."],
    toolsUsed: ["JavaScript", "Docker"],
  },
];

// Educations
const educations: EducationProps[] = [
  {
    school: "Your University",
    degree: "Bachelor",
    graduation: "",
    description: "Bachelor of Science in Computer Science",
  },
  {
    school: "Your High School",
    degree: "High School Diploma",
    graduation: "",
    description: "High school diploma / A Levels",
  },
];

// Awards
const awards: AwardProps[] = [
  {
    name: "Hackathon Winner",
    issuedBy: "Some Organization",
    date: "2023",
    url: "",
    description: "1st place out of 50 teams.",
  },
  {
    name: "Certification Name",
    issuedBy: "Issuing Body",
    date: "2022",
    url: "",
    description: "",
  },
];

// Socials
const socials: SocialProps[] = [
  {
    name: "github",
    url: "https://github.com/octocat",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/your-handle",
  },
];

// Skills
const skills: SkillProps[] = [
  { name: "Html", icon: "fab fa-html5" },
  { name: "CSS", icon: "fab fa-css3-alt" },
  { name: "JavaScript", icon: "fab fa-js" },
  { name: "ReactJS", icon: "fab fa-react" },
  { name: "NodeJS", icon: "fab fa-node" },
  { name: "Python", icon: "fab fa-python" },
  { name: "Django", icon: "fab fa-python" },
  { name: "Java", icon: "fab fa-java" },
  { name: "postgreSQL", icon: "fas fa-database" },
  { name: "Linux", icon: "fab fa-linux" },
  { name: "Git", icon: "fab fa-git" },
  { name: "Docker", icon: "fab fa-docker" },
  { name: "AWS", icon: "fab fa-aws" },
];

// Contact
const contact: ContactProps = {
  email: "you@example.com",
  address: "Your City, Country",
  phone: "",
};

const user: UserProps = {
  name: "John Doe",
  github: "octocat",
  avatar: "https://github.com/octocat.png",
  title: "Software Engineer",
  resumeLink: "/CV.pdf",
  about:
    "Short bio goes here — who you are and what you build. " +
    "This template auto-fetches your public GitHub repos for the Projects section.\n" +
    "Currently working as a <span class='text-emerald-500'>Software Engineer</span>.",
};

// Filter for the auto-generated Projects (fetched from your GitHub repos).
const projectFilter: ProjectFilterProps = {
  limit: 6, // show only this many (0 = show all)
  ignore: [], // hide these repos by name
  only: [], // show ONLY these repos (in order); leave empty to use blacklist style
};

// Extra Projects (anything not on GitHub — designs, hardware, etc.)
const extraProjects: ExtraProjectProps[] = [
  {
    name: "Design Project",
    description: "A non-code project, e.g. a UI/UX or print design.",
    url: "#",
    imageUrl: "",
    toolsUsed: ["Figma"],
    type: "UI Design",
  },
];

const volunteering: VolunteeringProps[] = [
  {
    title: "Volunteer Role",
    organization: "Some Community / Club",
    points: ["Describe what you did and the impact you had."],
  },
];

export {
  volunteering,
  extraProjects,
  contact,
  experiences,
  educations,
  awards,
  socials,
  skills,
  user,
  projectFilter,
};
