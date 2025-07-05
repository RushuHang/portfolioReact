import React from "react";
import AboutImg from "../../assets/about.png";
import { IoArrowForward } from "react-icons/io5";

export default function About() {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-warp md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="" />
          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal text-blue-200">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Can develop visual and interactive websites using HTML, CSS,
                  JavaScript,Tailwind CSS, Bootstrap and React.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal text-blue-200">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Can handle server logic, connect to database, manage user
                  authentication and other backend responsibilities using php.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal text-blue-200">
                  Database
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Have complete knowledge about relational database using mysql.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
