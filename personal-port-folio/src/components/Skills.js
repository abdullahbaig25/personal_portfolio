import React from "react";
import Heading from "./Heading";

const SkillCard = ({ color, iconPath, title, team }) => (
  <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
    <div
      className={`text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl ${color} left-4 -top-6`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath} />
      </svg>
    </div>
    <div className="mt-8">
      <p className="text-xl font-semibold my-2">{title}</p>
      <div className="flex space-x-2 text-gray-400 text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="black"
        >
          <circle cx="12" cy="12" r="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
        <p className="text-black">{team}</p>
      </div>
    </div>
  </div>
);

const Skills = () => {
  const skillsData = [
    {
      color: "bg-pink-500",
      iconPath:
        "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      title: "Web Development",
      team: "React - Redux , Saga",
    },
    {
      color: "bg-green-500",
      iconPath:
        "M5 8a3 3 0 00-3 3v1a3 3 0 003 3h1v-2H5a1 1 0 010-2h1V9H5zm14 0h-1v2h1a1 1 0 110 2h-1v2h1a3 3 0 003-3v-1a3 3 0 00-3-3zm-7 8a1 1 0 100-2h-2v-1h1a1 1 0 000-2h-1v-1h2a1 1 0 100-2h-2V8a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2H7a1 1 0 000 2h2v2a1 1 0 102 0v-2h2z",
      title: "Frameworks",
      team: "Tailwind CSS, Bootstrap and Material UI",
    },
    {
      color: "bg-blue-500",
      iconPath:
        "M12 20a1 1 0 01-1-1v-2a1 1 0 011-1h7a1 1 0 011 1v2a1 1 0 01-1 1h-7zM9 10H4a1 1 0 01-1-1V5a1 1 0 011-1h5a1 1 0 011 1v4a1 1 0 01-1 1zm11-6H10a1 1 0 00-1 1v4a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1zM4 18h5a1 1 0 001-1v-4a1 1 0 00-1-1H4a1 1 0 00-1 1v4a1 1 0 001 1zm7-5h10a1 1 0 011 1v4a1 1 0 01-1 1H11a1 1 0 01-1-1v-4a1 1 0 011-1z",
      title: "Database",
      team: "MySQL",
    },
  ];

  return (
    <>
      <Heading title={"Skills"} />
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
