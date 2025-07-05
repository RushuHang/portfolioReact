// import React from "react";
// import AboutImg from "../../assets/about.png";
// import { IoArrowForward } from "react-icons/io5";
import Reveal from "../utils/Reveal";

export default function About() {
  return (
    <Reveal
      delay={0.5}
      duration={1}
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-warp md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg md:p-12 p-8"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About Me</h2>
        <div className="mt-8">
          <p>
            Hi, I’m Rushu Hang Limbu, a passionate frontend web developer dedicated to crafting clean, responsive user experiences. <br />
            With over 6 months of hands-on experience, I’ve worked with{" "}
            <span className="text-amber-200 font-semibold">HTML5, CSS, Bootstrap, Tailwind CSS, JavaScript,</span> and{" "}
            <span className="text-amber-200 font-semibold">PHP</span>—bringing designs to life using frameworks like{" "}
            <span className="text-amber-200 font-semibold">React</span> and <span className="text-amber-200 font-semibold">Laravel</span>, and
            managing data with <span className="text-amber-200 font-semibold">MySQL</span>.
          </p>
          <p className="mt-4">
            Currently, I’m in my 6th semester of a Bachelor of Computer Applications (BCA), where I’m expanding my knowledge of full‑stack development
            and software architecture. Whether I’m building pixel‑perfect layouts or optimizing application performance, I’m always eager to learn new
            tools and techniques to improve and grow.
          </p>
          {/* <img className="md:h-80" src={AboutImg} alt="" /> */}
          {/* <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal text-blue-200">Frontend developer</h1>
                <p className="text-sm md:text-md leading-tight">
                  Can develop visual and interactive websites using HTML, CSS, JavaScript,Tailwind CSS, Bootstrap and React.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal text-blue-200">Backend developer</h1>
                <p className="text-sm md:text-md leading-tight">
                  Can handle server logic, connect to database, manage user authentication and other backend responsibilities using php.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal text-blue-200">Database</h1>
                <p className="text-sm md:text-md leading-tight">Have complete knowledge about relational database using mysql.</p>
              </span>
            </div>
          </ul> */}
        </div>
      </div>
    </Reveal>
  );
}
