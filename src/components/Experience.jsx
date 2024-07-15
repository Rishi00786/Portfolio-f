/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    date={experience.date}
    icon={<img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />}
  >
    <div>
      <h3>{experience.title}</h3>
      <p>{experience.company_name}</p>
    </div>

    <ul className="mt-5">
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`}>{point}</li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => (
  <>
    <p>What I have done so far</p>
    <h2>Work Experience.</h2>

    <div className="mt-20">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default SectionWrapper(Experience, "work");
