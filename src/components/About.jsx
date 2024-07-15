/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";
import Tilt from "react-parallax-tilt"; // Updated import for react-parallax-tilt

import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt tiltMaxAngleX={45} tiltMaxAngleY={45} scale={1} speed={450} className="xs:w-[250px] w-full">
    <div className="w-full p-[1px] rounded-[20px] shadow-card">
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <p>Introduction</p>
      <h2>Overview.</h2>

      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I&apos;m a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like Reactjs, Nextjs, Node.js, MySQL, and MongoDB.
        I&apos;m a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let&apos;s work together to bring your ideas to life!
      </p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} title={service.title} icon={service.icon} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
