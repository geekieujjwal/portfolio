import React from "react";
import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";
import animationData from "../Images/home-lottie.json";

const HeroComponent = () => {
  const viewUrl =
    "https://www.dropbox.com/scl/fi/66x3ufjdzh59du6kujtmz/Ujjwal-Resume.pdf?rlkey=mntunb1e84n04muv3sriuy238&dl=0";

  const resumeUrl =
    "https://www.dropbox.com/scl/fi/66x3ufjdzh59du6kujtmz/Ujjwal-Resume.pdf?rlkey=mntunb1e84n04muv3sriuy238&dl=1";

  return (
    <section className="min-h-[90vh] Home">
      <div className="md:flex-row flex flex-col-reverse w-full min-h-[90vh] items-center">
        <div className="md:w-[40%]">
          <Lottie
            data-aos="fade-right"
            className="mx-auto"
            animationData={JSON.parse(JSON.stringify(animationData))}
            style={{ width: "80%", maxWidth: "400px" }}
          />
        </div>
        <div className="md:w-[60%] flex flex-col gap-4 items-center py-[50px] px-2 md:items-start">
          <p
            className="text-xl md:text-2xl font-bold"
            data-aos="fade-down-left"
          >
            HELLO I'M
          </p>
          <h1
            className="text-green-500 text-3xl sm:text-5xl md:text-6xl font-bold"
            data-aos="fade-left"
          >
            <Typewriter
              options={{
                strings: ["UJJWAL JAGURI", "WEB DEVELOPER", "UI/UX DESIGNER"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p
            className="text-base text-center  md:text-left w-[80%] sm:w-[60%] md:w-[80%] font-serif"
            data-aos="fade-up-left"
          >
            A proactive learner and team player, I strive for user-centered
            design. Let's build something amazing together!
          </p>
          <div className="flex gap-4 flex-col sm:flex-row">
            <a
              href={resumeUrl}
              download="Ujjwal Jaguri Resume.pdf"
              className="py-3 px-6 bg-green-700 text-white rounded-3xl text-center text-lg hover:scale-110 hover:bg-green-500 cursor-pointer"
              data-aos="fade-up"
            >
              Download Resume
            </a>

            <a
              href={viewUrl}
              target="_blank"
              download="Ujjwal Jaguri Resume.pdf"
              className="py-3 px-6 bg-green-700 text-white rounded-3xl text-center text-lg hover:scale-110 hover:bg-green-500 cursor-pointer"
              data-aos="fade-up"
              rel="noreferrer"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
