import { FaPaintBrush } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaCodeCompare } from "react-icons/fa6";
import { GiIdea } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  profile2,
  profile3,
  profile4,
  profile5,
  devry,
  nucamp,
  figma,
  sketch,
  xd,
  css,
  html,
  javascript,
  tailwind,
  bootstrap,
  react,
  reactnative,
  emailicon,
  messengericon,
  whatsappicon,
} from "./assets";

export const menu = [
  { name: "About" },
  { name: "Skills" },
  { name: "Projects" },
  { name: "Experience" },
  { name: "Contact" },
];

export const services = [
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush />,
    description: `Crafting visually stunning and user-centric designs that ensure seamless user experiences. 
                  From wireframes to high-fidelity prototypes, I focus on creating intuitive interfaces that 
                  blend creativity and functionality, enhancing engagement and usability.`,
  },
  {
    title: "Web Development",
    icon: <FaCodeCompare />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `Building responsive, dynamic, and high-performance websites tailored to your needs. 
    Using modern technologies like React, Node.js, and more, I ensure your site is optimized 
    for speed, scalability, and accessibility, delivering a robust online presence.`,
  },
  {
    title: "Content Creation",
    icon: <GiIdea />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `Producing compelling digital content that resonates with your audience. From blogs 
                  and technical documentation to engaging website copy, I ensure your brand's message 
                  is clear, impactful, and aligned with your business goals.`,
  },
];

export const projects = [
  {
    title: "AI Powered School",
    image: project1,
    category: "UI/UX",
    description: `Transforming education with AI, our School UI Design project revolutionizes the 
                     learning experience. Seamlessly integrating intelligent features, personalized interfaces, 
                     and intuitive navigation, our design empowers educators and students alike. Experience 
                     innovation at its finest as we pave the way for a smarter, more efficient educational 
                     journey.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "XD",
        logo: xd,
      },
    ],
  },
  {
    title: "E-Commerce Application",
    image: project2,
    category: "Web",
    description: `Enhance your online shopping experience with our E-Commerce Application 
      UI design project. Seamlessly blending aesthetics with functionality, our intuitive 
      interface offers easy navigation, personalized recommendations, and secure 
      transactions. Elevate your digital storefront and captivate customers with a visually 
      stunning design tailored to your brand`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "ReactJs",
        logo: react,
      },
      {
        name: "XD",
        logo: xd,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
    ],
  },
  {
    title: "Robotic Engineering Web Application",
    image: project3,
    category: "Web",
    description: `Unlock the future of robotics with our Robotic Engineering Web Application
      project. Seamlessly integrating cutting-edge technology, data analytics, 
      and collaborative tools, our platform empowers engineers to design, simulate, 
      and optimize robotic systems. Experience innovation at its peak as we redefine the 
      boundaries of robotic engineering.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "ReactJs",
        logo: react,
      },
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "Tailwind",
        logo: tailwind,
      },
    ],
  },
  {
    title: "Project Management application",
    image: project4,
    category: "Apps",
    description: `Simplify project coordination with our intuitive Project Management application. Track tasks, collaborate in real-time, and streamline workflows effortlessly. With customizable features and robust reporting, stay organized and efficient.
                     Elevate your project management experience and achieve success with ease.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "React Native",
        logo: reactnative,
      },
      {
        name: "XD",
        logo: xd,
      },
      {
        name: "CSS",
        logo: css,
      },
    ],
  },
  {
    title: "Mobile bank - App Design",
    image: project5,
    category: "UI/UX",
    description: `Experience banking at your fingertips with our sleek Mobile Bank app design. Seamlessly manage your finances on-the-go with intuitive navigation, secure transactions, and personalized insights. Enjoy a modern interface that prioritizes convenience and accessibility, revolutionizing your banking experience.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "Figma",
        logo: figma,
      },
    ],
  },
  {
    title: "Quiz App Development",
    image: project6,
    category: "Apps",
    description: `Elevate engagement and knowledge retention with our Quiz App 
                    Development project. Seamlessly crafted for interactive learning 
                    experiences, our app offers customizable quizzes, real-time feedback, 
                    and captivating visuals. Empower users to test their knowledge anytime,
                     anywhere, fostering a dynamic learning environment tailored to their 
                     needs.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "React Native",
        logo: reactnative,
      },
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "XD",
        logo: xd,
      },
      {
        name: "Bootstrap",
        logo: bootstrap,
      },
    ],
  },
];

export const education = [
  {
    title: "Computer Engineering",
    degree: "Bachelor of Science",
    school: "Devry University",
    location: "Pomona, CA",
    logo: devry
  },
  {
    title: "Full stack web development",
    school: "Nucamp coding bootcamp",
    location: "San Diego, CA",
    logo: nucamp
  },
]

export const experience = [
  {
    title: "Web Developer",
    employer: "La Jolla Institute",
    location: "San Diego, CA",
    dates: "2022 – 2025",
    highlights: [
      "Designed and developed custom WordPress themes using PHP, improving user experience and functionality.",
      "Integrated APIs to dynamically update website content, ensuring data accuracy and seamless updates.",
      "Automated repetitive tasks and streamlined workflows using Salesforce, increasing operational efficiency."
    ]
  },
  {
    title: "Senior Web Developer",
    employer: "Digital Rocket",
    location: "San Diego, CA",
    dates: "2021",
    highlights: [
      "Managed project lifecycles, leading junior developers to deliver high-quality web applications on schedule.",
      "Built and deployed websites using WordPress and Elementor, optimizing workflows for client satisfaction.",
      "Defined project scopes with stakeholders and ensured alignment with client goals through clear communication."
    ]
  },
  {
    title: "Software Engineer Student",
    employer: "Nucamp",
    location: "San Diego, CA",
    dates: "2020 – 2021",
    highlights: [
      "Built responsive web applications with React, Node.js, and Bootstrap, implementing scalable solutions.",
      "Collaborated on Agile team projects, developing dynamic front-end applications and integrating RESTful APIs.",
      "Completed full-stack projects such as a task manager app and a blog platform with authentication."
    ]
  },
  {
    title: "Project Administrator",
    employer: "Honeywell",
    location: "Chicago, IL",
    dates: "2018 – 2019",
    highlights: [
      "Coordinated production timelines by streamlining workflows and aligning cross-functional teams.",
      "Managed full-cycle proposal and procurement processes, meeting 100% of customer requirements on schedule.",
      "Developed process maps to reduce inefficiencies and improve communication between engineering and manufacturing teams."
    ]
  },
  {
    title: "Administrative Services Analyst II",
    employer: "County of Riverside",
    location: "Riverside, CA",
    dates: "2014 – 2017",
    highlights: [
      "Designed and optimized SQL relational databases, improving data accessibility for multiple departments.",
      "Managed large-scale equipment deployment projects across departments, ensuring timely implementation.",
      "Produced actionable insights with data-driven reports, supporting strategic decision-making processes."
    ]
  }
];


export const skills = [
  {
    title: "Technical Skills",
    data: [
      // {
      //   skill: "Figma",
      //   level: "Experienced",
      //   logo: figma,
      // },
      // {
      //   skill: "Sketch",
      //   level: "Intermediate",
      //   logo: sketch,
      // },
      {
        skill: "XD",
        level: "Intermediate",
        logo: xd,
      },
      {
        skill: "HTML",
        level: "Experienced",
        logo: html,
      },
      {
        skill: "CSS",
        level: "Experienced",
        logo: css,
      },
      {
        skill: "JavaScript",
        level: "Experienced",
        logo: javascript,
      },
      {
        skill: "Tailwind",
        level: "Intermediate",
        logo: tailwind,
      },
      {
        skill: "Bootstrap",
        level: "Experienced",
        logo: bootstrap,
      },
      {
        skill: "React",
        level: "Experienced",
        logo: react,
      },
      {
        skill: "React Native",
        level: "Experienced",
        logo: reactnative,
      },
    ],
  },
];
export const contactInfo = [
  {
    name: "Email",
    value: "mradinuba@gmail.com",
    link: "mailto:mradinuba@gmail.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },
  {
    name: "Messenger",
    value: "Emmanuel Eze",
    link: "http://m.me/profile?id=profile-i",
    icon: messengericon,
    btnIcon: <RiMessengerLine />,
    color: "rgb(139,74,251)",
  },
  {
    name: "WhatsApp",
    value: "+2348149121918",
    link: "https://api.whatsapp.com/send?phone=+2348149121918",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
];
export const socialHandles = [
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "",
  },
];

export const testimonials = [
  {
    avatar: profile2,
    name: "Samuel Eze",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile3,
    name: "Emmanuel Joseph",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile4,
    name: "Gloria Chiwendu",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile5,
    name: "Precious Stone",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
];
