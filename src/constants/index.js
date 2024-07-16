import {
  web,
  mobile,
  backend,
  creator,
  starbucks,
  tesla,
  shopify,
  meta,
  discord_img,
  ElectStore,
  Social,
  news
} from '../assets';

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining mobile applications using React Native.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining both frontend and backend web applications using modern frameworks and technologies.",
      "Staying up-to-date with emerging technologies and industry trends to ensure the company stays ahead in a competitive market.",
      "Designing and managing databases, servers, and ensuring seamless integration between frontend and backend systems.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

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
     title: "React Native Developer",
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

const projects = [
  {
    name: "Discord Clone",
    description:
      "A real-time communication platform clone built with Next.js for the frontend and Node.js using Socket.IO for seamless messaging , voice chat and video chat functionalities. Emphasizing user experience and scalability, with integration of third-party APIs for authentication and data management.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "Clerk",
        color: "green-text-gradient",
      },
      {
        name: "mySQL",
        color: "pink-text-gradient",
      },
    ],
    image: discord_img,
    source_code_link: "https://github.com/Rishi00786/Discord-Clone",
  },
  {
    name: "Latest BHARAT News",
    description:
      "Stay updated with the latest news from across India with our app. Powered by an API, it offers real-time news across various categories. Explore politics, sports, entertainment, and more in a user-friendly interface. Stay informed effortlessly with Latest Bharat News.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "api-integrations",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: news,
    source_code_link: "https://github.com/Rishi00786/Bharat-News",
  },
  {
    name: "Social-App",
    description:
      "Discover our React-powered Electronics Store offering a seamless shopping experience. Browse a curated selection of gadgets and appliances, easily add items to your cart, and securely checkout. Explore now for your tech essentials!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-router-dom",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: Social,
    source_code_link: "https://github.com/Rishi00786/Social-App",
  },
  {
    name: "Electronics Store",
    description:
      "Discover our React-powered Electronics Store offering a seamless shopping experience. Browse a curated selection of gadgets and appliances, easily add items to your cart, and securely checkout. Explore now for your tech essentials!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-router-dom",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: ElectStore,
    source_code_link: "https://github.com/Rishi00786/Electronics_Store",
  },
];

export { services , experiences , projects}