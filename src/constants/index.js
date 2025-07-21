import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  mysql,
  git,
  html,
  vscode,
  microsoft_excel,
  eclipse,
  sapabap,
  sapbtp,
  project2,
  project3,
  emeLogo,
  genzeeLogo,
  pacelabLogo,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "SAP ABAP Developer", icon: backend },
  { title: "Cloud Integration Engineer", icon: web },
  { title: "Database Engineer", icon: mobile },
  { title: "System Design Enthusiast", icon: creator },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "Git", icon: git },
  { name: "GitHub", icon: github },
  { name: "MySQL", icon: mysql },
  { name: "SAP ABAP", icon: sapabap },
  { name: "SAP BTP", icon: sapbtp },
  { name: "Microsoft Excel", icon: microsoft_excel },
  { name: "Eclipse IDE", icon: eclipse },
  { name: "VS Code", icon: vscode },
];

const experiences = [
  {
    title: "SAP ABAP Training",
    company_name: "EME Education Center, Kochi",
    icon: emeLogo,
    iconBg: "#383E56",
    date: "June 2025 – Present",
    points: [
      "Currently undergoing SAP ABAP training focused on cloud backend development.",
      "Hands-on experience using Eclipse IDE, ABAP editor, and Microsoft Excel tools.",
      "Learning report creation, modularization, and performance tuning in ABAP.",
      "Preparing for Microsoft Excel certification exam.",
    ],
  },
  {
    title: "Cybersecurity Intern",
    company_name: "Genzee Technologies, Kochi",
    icon: genzeeLogo,
    iconBg: "#E6DEDD",
    date: "July 2024",
    points: [
      "Studied cybersecurity principles, malware analysis, and ethical hacking basics.",
      "Explored penetration testing frameworks and data security protocols.",
      "Understood risk mitigation strategies in modern IT systems.",
      "Hands-on exposure to secure system environments.",
    ],
  },
  {
    title: "Python Development Intern",
    company_name: "Pace Lab, Kochi",
    icon: pacelabLogo,
    iconBg: "#383E56",
    date: "May 2023",
    points: [
      "Completed 14-day internship focused on Python development basics.",
      "Developed small backend tools using core Python logic and file handling.",
      "Gained confidence in syntax, loops, and modular programming.",
      "Worked on real-time exercises like calculators and data processors.",
    ],
  },
];

const projects = [
  {
    name: "NutriVision",
    description:
      "NutriVision detects vitamin deficiencies using image processing and neural networks on non-invasive visual features such as eyes, nails, tongue, and skin. It explores CNN, ResNet, DenseNet models and addresses challenges like data scarcity and accuracy.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "cnn", color: "green-text-gradient" },
      { name: "image-processing", color: "pink-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/Abhi-sys511/NutriVision",
  },
  {
    name: "CampusTrace",
    description:
      "CampusTrace is a lost and found tracking platform that simplifies item recovery within campus. It ensures rightful ownership, supports privacy, requires admin claim authentication, and improves return efficiency using a user-friendly interface.",
    tags: [
      { name: "web-app", color: "blue-text-gradient" },
      { name: "privacy", color: "green-text-gradient" },
      { name: "security", color: "pink-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/Abhi-sys511/CampusTrace",
  },
];

const publicationAndResume = {
  publication: {
    title: "📄 Published Conference Paper: CampusTrace",
    description:
      "CampusTrace transforms the systems of lost and found items in campus environments by improving the process of reporting lost or found items and ensures the proper returns of the item to its rightful owners. The system encourages cooperation, protects privacy, and improves recovery through a user-friendly experience.",
    link: "https://irojournals.com/tcsst/article/view/6/2/6",
  },
  resume: {
    title: "📂 Download My Resume",
    link: "/abhiram_resume.pdf", // Make sure this file is in the public/ folder
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  publicationAndResume,
};
