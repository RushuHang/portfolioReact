import React from "react";
import avatarimg from "../../assets/avatarImg.webp";
import TextChanger from "../TextChanger";

export default function Home() {
  return (
    <section className="relative h-[690px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="0,0 100,0 0,100" className="fill-[#1F263D]" />
        </svg>
      </div>

      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="100,0 100,100 0,100" className="fill-[#0F1423]" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold flex leading-normal tracking-tighter">
          <TextChanger />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-2">
          I build <span className="text-blue-300">interactive interfaces</span>{" "}
          that not only look good — but feel good to use.
        </p>
      </div>
    </section>
  );
}
