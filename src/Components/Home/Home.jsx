import React from "react";
import avatarimg from "../../assets/avatarImg.webp";
import TextChanger from "../TextChanger";

export default function Home() {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-5xl font-bold flex leading-normal tracking-tighter">
          <TextChanger />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          And I m <span className="text-blue-300">Frontend Developer</span> and
          <span className="text-blue-300"> Backend Developer </span>.
        </p>
        <button className="mt-5 md:md-10 text-white py-02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact me
        </button>
      </div>
      <div>
        <img className="" src={avatarimg} alt="" />
      </div>
    </div>
  );
}
