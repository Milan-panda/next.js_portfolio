import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  cpp,
  angular,
  meta,
  quantiphi,
  robo,
  shopify,
  carrent,
  educatalyst,
  jobit,
  tripguide,
  sorting,
  expense
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
    title: "Programming",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
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
    name: "Angular",
    icon: angular,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "c++",
    icon: cpp,
  },
];

const experiences = [
  {
    title: "Software Development Trainee",
    company_name: "Devohack",
    icon: robo,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - June 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Framework Engineer(Training)",
    company_name: "Quantiphi",
    icon: quantiphi,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using MERN and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Framework Engineer - Software Developer",
    company_name: "Quantiphi",
    icon: quantiphi,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Python and other related technologies.",
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
    name: "Educatalyst",
    description:
      "Web-based platform for college students to get the best and free resources or materials like Books or Tutorials. ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: educatalyst,
    live_link: "https://educatalyst.netlify.app/",
    source_code_link: "https://github.com/Milan-panda/Educatalyst",
  },
  {
    name: "Sorting Visualizer",
    description:
      "Web application that enables users to visualize the different sorting algorithms like Bubble Sort, Heap Sort and many more.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: sorting,
    live_link: "https://milan-panda.github.io/SortingAlgorithm/",
    source_code_link: "https://github.com/Milan-panda/SortingAlgorithm",
  },
  {
    name: "Expense Tracker",
    description:
      "A web application to manage and track day to day expenses and incomes with spend analysis.",
    tags: [
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "AngularJS",
        color: "pink-text-gradient",
      },
      {
        name: "Node",
        color: "orange-text-gradient",
      },
    ],
    image: expense,
    live_link: "https://expenz-tracker.netlify.app/",
    source_code_link: "https://github.com/Milan-panda/ExpenseTracker",
  },
];

export { services, technologies, experiences, testimonials, projects };