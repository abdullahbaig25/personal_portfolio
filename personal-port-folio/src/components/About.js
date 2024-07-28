import React from "react";
import Heading from "./Heading";

const About = () => {
  return (
    <>
    <Heading title={"About me"}/>
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 mb-20" >
      <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center ">
        <img src="https://picsum.photos/id/1/400/400" alt="About me" className="w-full md:w-auto" />
        <div className="md:w-3/5">
          {/* <h2 className="text-4xl text-gray-800 font-semibold mb-4 md:w-4/5">About me</h2> */}
          <p className="md:w-3/4 text-sm text-gray-600 mb-8">
            I am a Computer Engineer with a passion for frontend development. 
            I am highly motivated and have worked extensively with React.js and Tailwind CSS, 
            developing responsive and dynamic web applications. My experience includes working in a management team, where I honed my communication skills and leadership abilities. While my background covers both hardware and software, my focus and enthusiasm lie in software development, particularly in creating seamless and engaging web experiences.
          </p>
          <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold">Matriculation</h3>
              <p className="text-sm text-gray-600">Divisional Public School Model Town Lahore, 2016-2018</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">College</h3>
              <p className="text-sm text-gray-600">Government Degree College for boys Model Town, 2018-2020</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Graduation</h3>
              <p className="text-sm text-gray-600">Information Technology University, 2020-2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
