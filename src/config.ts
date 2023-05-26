import {
  User,
  Education,
  Experience,
  Award,
  Social,
  Contact,
  Skill,
  Work,
} from "./Type";

const experiences: Experience[] = [
  {
    company: "ABC Company",
    title: "Frontend Developer",
    years: "2018 - Present",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    toolsUsed: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    company: "XYZ Agency",
    title: "UI/UX Designer",
    years: "2016 - 2018",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    toolsUsed: ["Adobe Photoshop", "Adobe Illustrator", "Figma"],
  },
];

const educations: Education[] = [
  {
    school: "University of ABC",
    degree: "Bachelor of Science",
    graduation: "2012 - 2016",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    school: "XYZ College",
    degree: "High School Diploma",
    graduation: "2008 - 2012",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const awards: Award[] = [
  {
    name: "Best Web Design",
    issuedBy: "ABC Organization",
    date: "2019",
    url: "#",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Outstanding Achievement",
    issuedBy: "XYZ Association",
    date: "2017",
    url: "#",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const socials: Social[] = [
  {
    name: "github",
    url: "https://github.com/username",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/username",
  },
];

const skills: Skill[] = [
  {
    skillName: "HTML",
    icon: "fab fa-html5",
  },
  {
    skillName: "CSS",
    icon: "fab fa-css3-alt",
  },
  {
    skillName: "JavaScript",
    icon: "fab fa-js",
  },
  {
    skillName: "React",
    icon: "fab fa-react",
  },
  {
    skillName: "Node.js",
    icon: "fab fa-node",
  },
];

const contact: Contact = {
  email: "example@example.com",
  address: "123 Street, City, Country",
  phone: "+1234567890",
};

const user: User = {
  name: "John Doe",
  github: "username",
  image: "https://example.com/profile-image.png",
  title: "Frontend Developer",
  resumeLink: "https://example.com/resume.pdf",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo odio ut turpis condimentum, vitae pulvinar massa consequat.",
};

const otherWorks: Work[] = [
  {
    name: "Project XYZ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "#",
    imageUrl: "#",
    toolsUsed: ["HTML", "CSS", "JavaScript", "React"],
    type: "Web Development",
  },
  {
    name: "Design Project",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "#",
    imageUrl: "#",
    toolsUsed: ["Adobe Photoshop", "Adobe Illustrator", "Figma"],
    type: "Design",
  },
];

export {
  otherWorks,
  contact,
  experiences,
  educations,
  awards,
  socials,
  skills,
  user,
};
