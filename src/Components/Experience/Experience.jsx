// import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
// import { FaGoogle } from "react-icons/fa";
// import { RiNetflixFill } from "@remixicon/react";
// import { FaAmazon } from "react-icons/fa";
import logo from "../../assets/Bridge-Logo-o.png";

export default function Experience() {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Exprience</h1>
      <div className="flex md:flex-row flex-col items-center justify-between">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 md:pl-0 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572b6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
        </div>
        <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
          {/* <FaGoogle color="#4285F4" size={50} /> */}
          <img className="object-contain w-8 C-logo" src={logo} alt="" />
          <span className="text-white">
            <h2 className="leading-tight">Web Developer, Bridge Software Solution</h2>
            <p className="text-sm leading-tight font-thin">Sept 2023 - Present</p>
            <ul className="text-sm p-2">
              <li>- Work as Webdeveloper developer</li>
              <li>- Responsive SEO friendly Websites</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
}
