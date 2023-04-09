import {
  agoran,
  backend,
  bosch,
  boschInternalTool,
  creator,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  kardiachain,
  mobile,
  mongodb,
  nodejs,
  raramuri,
  reactjs,
  redux,
  tailwind,
  tanca,
  tancaWeb,
  threejs,
  tma,
  tmaProject,
  typescript,
  web,
  werunweshare,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Web3 Blockchain",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "3D Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Tanca",
    icon: tanca,
    iconBg: "#FFFFFF",
    date: "2020",
    points: [
      "Developing and maintaining web applications using React.js, PHP and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "TMA Solutions",
    icon: tma,
    iconBg: "#FFFFFF",
    date: "2021",
    points: [
      "Developing and maintaining web applications using Angular, Python and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Report the status of working weekly with US customers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Bosch",
    icon: bosch,
    iconBg: "#FFFFFF",
    date: "2021 - 2022",
    points: [
      "Developing and maintaining web applications using React.js, Angular, Java, Node Js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Report the status of working daily with German customers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Kardiachain - Whydah",
    icon: kardiachain,
    iconBg: "#FFFFFF",
    date: "2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Unity and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Agoran",
    description:
      "This project builds a marketplace for exchanging NFT of My Defi Pet, Mytheria, Overleague, and Krabot, ...",
    tags: [
      {
        name: "next-js",
        color: "green-text-gradient",
      },
      {
        name: "web3",
        color: "orange-text-gradient",
      },
      {
        name: "material-ui",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: agoran,
    source_code_link: "https://agoran.io/",
  },
  {
    name: "Raramuri",
    description:
      "This project builds a platform for hosting an event marathon on metaverse. You can run anywhere and interact with a thousand runners in the world.",
    tags: [
      {
        name: "next-js",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "material-ui",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: raramuri,
    source_code_link: "https://raramuri.io/",
  },
  {
    name: "We Run We Share",
    description:
      "This project creates a website to attract partners to participate in charity fundraising events.",
    tags: [
      {
        name: "next-js",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: werunweshare,
    source_code_link: "https://werunweshare.com/",
  },
  {
    name: "Tanca",
    description:
      "This project provides software for customers to manage HR effectively. Their employees could check in, check out shifts by phone and AI Camera.",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: tancaWeb,
    source_code_link: "https://tanca.io/",
  },
  {
    name: "Security Platform",
    description:
      "This project builds a security platform that protects end-users from malware, viruses, by the way, isolating websites that users access.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "orange-text-gradient",
      },
      {
        name: "linux",
        color: "pink-text-gradient",
      },
    ],
    image: tmaProject,
    source_code_link: "https://www.tma.vn/",
  },
  {
    name: "Bosch Internal Tool",
    description:
      "I'm joining the internal Bosch project as a full-stack developer. This project builds a website to support factories to manage and coordinate their products.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "node-js",
        color: "pink-text-gradient",
      },
      {
        name: "java",
        color: "orange-text-gradient",
      },
    ],
    image: boschInternalTool,
    source_code_link: "https://www.bosch.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
