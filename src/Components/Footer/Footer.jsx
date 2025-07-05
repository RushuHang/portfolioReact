import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default function Footer() {
  return (
    <div
      id="Footer"
      className="bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div className="flex justify-between max-w-5xl mx-auto">
        <div>
          <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
          <h3 className="text-sm md:text-2xl font-normal">
            Feel free to reach out
          </h3>
        </div>

        <div>
          <ul className="text-sm md:text-xl">
            <li className="flex gap-1 items-center leading-0">
              <MdOutlineEmail size={20} />
              <span className="flex text-center">rushuhanglimbu@gamil.com</span>
            </li>
            <li className="flex gap-1 items-center">
              <FaGithub size={20} />
              RushuHang
            </li>
            <li className="flex gap-1 items-center">
              <CiLinkedin size={20} />
              Rushu hang Limbu
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
