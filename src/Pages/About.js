import React from "react";
import profile from "../Images/profileimage.png";

const About = () => {
  return (
    <section className="min-h-[90vh] sm:flex items-center">
      <div className="sm:w-[50%]  py-[50px] p-6">
        <p
          className="text-3xl text-green-500 md:text-5xl font-bold text-center sm:text-right  py-[50px] sm:pt-0"
          data-aos="fade-down-right"
        >
          About Me
        </p>
        <p data-aos="fade-up" className="pl-3 font-serif">
          Web developer with a strong passion for creating innovative and
          visually appealing web solutions. Proficient in front-end and back-end
          development, utilizing HTML, CSS, JavaScript, React, Node, Redux,
          MongoDB and some library components like Chakra UI. Skilled in
          building responsive interfaces, optimizing website performance, and
          implementing intuitive user experiences. Completed diverse projects,
          including dynamic web applications. Dedicated to staying up-to-date
          with latest industry trends and technologies to deliver cutting-edge
          solutions.
        </p>
      </div>
      <div className="p-2 sm:w-[50%]">
        <img
          data-aos="fade-up"
          src={profile}
          alt="image"
          className=" mx-auto w-[300px] md:w-[400px] max-w-[90vw]"
        />
      </div>
    </section>
  );
};

export default About;
