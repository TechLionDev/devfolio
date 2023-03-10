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
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  tld,
  budget,
  chat,
  ecommerce,
  meet,
  quiz,
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
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "TechLion Dev",
    icon: tld,
    iconBg: "#0088ff",
    date: "January 2020 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
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
];

const projects = [
  {
    name: "Video Chat",
    description:
      "A video chat application that allows users to chat with each other in real time with both video and audio as well as a few other features such as screen sharing and audio sharing. This utillizes the 1000ms SDK as well as the Next.js framework.",
    tags: [
      {
        name: "1000ms",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: meet,
    source_code_link: "https://github.com/TechLionDev/TLD-All-In-One-Video-Chat/tree/main",
    live_demo: "https://voice.techlion.dev/preview/64038de7cd8175701aac053f/guest",
  },
  {
    name: "Chat App",
    description:
      "A chat application that allows users to chat with each other in real time. This utillizes firebase as well as the Next.js framework. The authenication is handled through firebase authentication. AKA \"Sign In With Google\".",
    tags: [
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/TechLionDev/Next.js-Chat-App",
    live_demo: "https://chat-app.techlion.dev/",	
  },
  {
    name: "Quiz App",
    description:
      "A quiz app that allows users to test their knowledge of different topics. This utillizes React.js and tailwind. You even get to see your score at the end!",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: quiz,
    source_code_link: "https://github.com/TechLionDev/quiz-app",
    live_demo: "https://jis-quiz-app.vercel.app/",
  },{
    name: "Ecommerce Template",
    description:
      "A ecommerce template that allows users to buy products online. This utillizes React.js and tailwind. This also has a hidden feature... Alan AI. A Voice Assistant that helps you shop.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "alan-ai",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/TechLionDev/Ecommerce-Template/tree/main",
    live_demo: "https://jis-ecommerce-template.vercel.app/",
  },{
    name: "Budget Tracking App",
    description:
      "A budget tracking app that allows users to track their budget. This tracks their spending and also tracks their spending history. It can be very useful for the management of your budget. This demonstrates my ability to use custom hooks.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "hooks",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: budget,
    source_code_link: "https://github.com/TechLionDev/react-budget-app",
    live_demo: "https://your-budget-jeremiahisamuelmms.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
