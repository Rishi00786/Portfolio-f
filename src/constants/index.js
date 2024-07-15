import {
  web,
  mobile,
  backend,
  creator,
  starbucks,
  tesla,
  shopify,
  meta,
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

export { services , experiences}