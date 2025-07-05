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
      <div className="flex md:flex-row flex-col justify-between">
        <div className="grid slg:grid-cols-4 grid-cols-2 flex-1/2 gap-8 md:p-12 md:pl-0 py-10">
          <span className="p-3 bg-zinc-950 flex justify-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex justify-center rounded-2xl">
            <FaCss3 color="#1572b6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex justify-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex justify-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex justify-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
        </div>
        <div className="flex gap-10 bg-slate-950 bg-opacity-45 rounded-lg p-4 py-10 items-center flex-1/2">
          {/* <FaGoogle color="#4285F4" size={50} /> */}
          <div className="w-1/5 flex justify-center">
            <img className="object-contain w-8 C-logo" src={logo} alt="" />
          </div>
          <span className="text-white">
            <h3 className="leading-tight slg:text-4xl text-3xl font-semibold">Web Developer</h3>
            <p className="text-lg text-slate-500">Bridge Software Solution</p>
            <p className="text-sm leading-tight text-slate-500">Jan 2025 - Present</p>
            <ul className="text-sm mt-4 flex flex-col gap-1">
              <li>-Work as Webdeveloper developer</li>
              <li>-Responsive SEO friendly Websites</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
}
