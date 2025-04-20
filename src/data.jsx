import { FaPaintBrush } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import {
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
    devry,
    nucamp,
    // css,
    // javascript,
    tailwind,
    react,
    python,
    linkedin,
    github,
    emailicon,
    gsap,
    threejs,
    sentry,
    nextjs,
    supabase,
    nextauth,
    reactrouter,
    reactquery,
    redux,
} from "./assets";

export const menu = [
    { name: "About" },
    { name: "Skills" },
    { name: "Projects" },
    { name: "Experience" },
    { name: "Contact" },
];

export const projects = [
    {
        title: "Apple iPhone Clone",
        image: project1,
        category: "UI/UX",
        description: `Dynamic site blending GSAP animations and cutting-edge 3D graphics technology for engaging experiences`,
        demoLink: "/apple-iphone",
        githubLink: "https://github.com/ricky-antonio/apple-clone",
        stacks: [
            {
                name: "ReactJs",
                logo: react,
            },
            {
                name: "GSAP",
                logo: gsap,
            },
            {
                name: "three.js",
                logo: threejs,
            },
            {
                name: "tailwind",
                logo: tailwind,
            },
            {
                name: "sentry",
                logo: sentry,
            },
        ],
    },
    {
        title: "Brainwave Landing Page",
        image: project2,
        category: "UI/UX",
        description: `Modern portfolio site powered by Tailwind CSS, showcasing sleek design and professional expertise.`,
        demoLink: "/brainwave",
        githubLink: "https://github.com/ricky-antonio/brainwave",
        stacks: [
            {
                name: "ReactJs",
                logo: react,
            },
            {
                name: "tailwind",
                logo: tailwind,
            },
        ],
    },
    {
        title: "The Wild Oasis",
        image: project3,
        category: "Web App",
        description: `Modern booking platform for luxury rentals, featuring user authentication and a secure database.`,
        demoLink: "https://wild-oasis-gules-ten.vercel.app/",
        githubLink: "https://github.com/ricky-antonio/wild-oasis-website",
        stacks: [
            {
                name: "ReactJs",
                logo: react,
            },
            {
                name: "next.js",
                logo: nextjs,
            },
            {
                name: "nextauth",
                logo: nextauth,
            },
            {
                name: "supabase",
                logo: supabase,
            },
            {
                name: "Tailwind",
                logo: tailwind,
            },
        ],
    },
    {
        title: "Admin Dashboard - Wild Oasis",
        image: project4,
        category: "Web App",
        description: `Admin dashboard enabling business management of bookings, analytics, and user insights.`,
        demoLink: "https://ricmonterrosa.com/wild-oasis-admin/dashboard",
        githubLink: "https://github.com/ricky-antonio/wild-oasis-admin",
        stacks: [
            {
                name: "ReactJs",
                logo: react,
            },
            {
                name: "ReactJs",
                logo: reactrouter,
            },
            {
                name: "supabase",
                logo: supabase,
            },
            {
                name: "react query",
                logo: reactquery,
            },
        ],
    },
    {
        title: "Cryptoverse Stats & Insights",
        image: project5,
        category: "Web App",
        description: `Comprehensive crypto stats app leveraging Coinranking and News APIs, featuring dynamic price charts.`,
        demoLink: "/cryptoverse",
        githubLink: "https://github.com/ricky-antonio/react-api-cryptoverse",
        stacks: [
            {
                name: "ReactJs",
                logo: react,
            },
            {
                name: "redux",
                logo: redux,
            },
            {
                name: "react router",
                logo: reactrouter,
            },
        ],
    },
    {
        title: "Lights Out",
        image: project6,
        category: "Web App",
        description: `Interactive React-based game showcasing core concepts like state, props, and component reusability.`,
        demoLink: "/lights",
        githubLink: "https://github.com/ricky-antonio/react-lightsout",
        stacks: [
            {
                name: "ReactJs",
                logo: react,
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
        logo: devry,
    },
    {
        title: "Full stack web development",
        school: "Nucamp coding bootcamp",
        location: "San Diego, CA",
        logo: nucamp,
    },
];

export const experience = [
    {
        title: "Web Developer",
        employer: "La Jolla Institute",
        location: "San Diego, CA",
        dates: "2022 – 2025",
        highlights: [
            "Designed and developed custom WordPress themes using PHP, improving user experience and functionality.",
            "Integrated APIs to dynamically update website content, ensuring data accuracy and seamless updates.",
            "Automated repetitive tasks and streamlined workflows using Salesforce, increasing operational efficiency.",
        ],
    },
    {
        title: "Senior Web Developer",
        employer: "Digital Rocket",
        location: "San Diego, CA",
        dates: "2021",
        highlights: [
            "Managed project lifecycles, leading junior developers to deliver high-quality web applications on schedule.",
            "Built and deployed websites using WordPress and Elementor, optimizing workflows for client satisfaction.",
            "Defined project scopes with stakeholders and ensured alignment with client goals through clear communication.",
        ],
    },
    {
        title: "Software Engineer Student",
        employer: "Nucamp",
        location: "San Diego, CA",
        dates: "2020 – 2021",
        highlights: [
            "Built responsive web applications with React, Node.js, and Bootstrap, implementing scalable solutions.",
            "Collaborated on Agile team projects, developing dynamic front-end applications and integrating RESTful APIs.",
            "Completed full-stack projects such as a task manager app and a blog platform with authentication.",
        ],
    },
    // {
    //   title: "Project Administrator",
    //   employer: "Honeywell",
    //   location: "Chicago, IL",
    //   dates: "2018 – 2019",
    //   highlights: [
    //     "Coordinated production timelines by streamlining workflows and aligning cross-functional teams.",
    //     "Managed full-cycle proposal and procurement processes, meeting 100% of customer requirements on schedule.",
    //     "Developed process maps to reduce inefficiencies and improve communication between engineering and manufacturing teams."
    //   ]
    // },
    // {
    //   title: "Administrative Services Analyst II",
    //   employer: "County of Riverside",
    //   location: "Riverside, CA",
    //   dates: "2014 – 2017",
    //   highlights: [
    //     "Designed and optimized SQL relational databases, improving data accessibility for multiple departments.",
    //     "Managed large-scale equipment deployment projects across departments, ensuring timely implementation.",
    //     "Produced actionable insights with data-driven reports, supporting strategic decision-making processes."
    //   ]
    // }
];

export const skills = [
    {
        title: "Technical Skills",
        data: [
            {
                skill: "React",
                logo: react,
            },
            {
                skill: "Tailwind",
                logo: tailwind,
            },
              {
                skill: "Next.js",
                logo: nextjs,
            },
            {
                skill: "Redux",
                logo: redux,
            },
            {
                skill: "React Router",
                logo: reactrouter,
            },
            {
                skill: "React Query",
                logo: reactquery,
            },
            {
                skill: "Supabase",
                logo: supabase,
            },
            {
                skill: "Python",
                logo: python,
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
];
export const socialHandles = [
    {
        name: "Github",
        icon: <AiFillGithub />,
        logo: github,
        link: "https://github.com/ricky-antonio",
    },
    {
        name: "LinkedIn",
        icon: <AiFillLinkedin />,
        logo: linkedin,
        link: "https://www.linkedin.com/in/ricardomonterrosa/",
    },
];
