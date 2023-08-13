import Image from "next/image";
import me from "../assets/yo.jpg";
import {  AiOutlineGithub } from "react-icons/ai";
import { SiTailwindcss, SiNextdotjs, SiMysql } from "react-icons/si";
import { BiLogoMongodb, BiLogoNodejs, BiLogoGoLang } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  MdSignalCellularAlt1Bar,
  MdSignalCellularAlt2Bar,
  MdSignalCellularAlt,
} from "react-icons/md";

export default function AboutMe() {
  return (
    <main className="w-full  md:gap-10 gap-5  md:h-screen md:p-10 md:my-0 my-10 p-5" id="aboutMe">
      <section className="flex md:flex-row flex-col gap-10">
        <div className="md:w-2/3 flex flex-col gap-2">
          <h1 className="text-6xl py-2 font-bold text-left">
            {" "}
            About <tag className="text-violet-800">Me </tag>{" "}
          </h1>
          <h2 className="text-2xl">
            Im <tag className="font-bold tracking-wide">Esteban Horn</tag> |
            FullStack Developer
          </h2>
          <p style={{ textWrap: "balance" }} className="text-left">
            I have a deep enthusiasm for merging the creativity of React for
            modern interfaces with the scalable power of Node.js on the backend.
            With freelance project experience and a collaborative approach, I
            take on technical and design challenges with determination. I always
            pursue innovative solutions while keeping up with the latest trends,
            striving to create exceptional web experiences and contribute to
            cutting-edge projects.
          </p>
        </div>
        <div className="md:w-1/3 flex flex-col items-center gap-2 ">
          <div className="w-full">
            <h1 className="text-6xl py-2 font-bold text-left text-violet-800">
              Skills
            </h1>
            <h2 className="text-2xl">I always strive to be up to date</h2>
          </div>

          <ul className="grid grid-cols-3 gap-4 md:text-5xl text-3xl w-full mt-5">
            <li className="m-auto md:m-0">
              <FaReact className="hover:text-teal-600 hover:scale-110 duration-200 transition-all" />
            </li>
            <li className="m-auto md:m-0">
              <SiNextdotjs className="hover:text-gray-600 hover:scale-110 duration-200 transition-all" />
            </li>

            <li className="m-auto md:m-0">
              <SiTailwindcss className="hover:text-cyan-600 hover:scale-110 duration-200 transition-all" />
            </li>
            <li className="m-auto md:m-0">
              <BiLogoGoLang className="hover:text-cyan-700 hover:scale-110 duration-200 transition-all" />
            </li>
            <li className="m-auto md:m-0">
              <IoLogoJavascript className="hover:text-yellow-500 hover:scale-110 duration-200 transition-all" />
            </li>

            <li className="m-auto md:m-0">
              <BiLogoNodejs className="hover:text-green-700 hover:scale-110 duration-200 transition-all" />
            </li>
            <li className="m-auto md:m-0">
              <SiMysql className="hover:text-blue-700 hover:scale-110 duration-200 transition-all" />
            </li>
            <li className="m-auto md:m-0">
              <BiLogoMongodb className="hover:text-green-600 hover:scale-110 duration-200 transition-all" />
            </li>

            <li className="m-auto md:m-0">
              <AiOutlineGithub className="hover:text-gray-600  hover:scale-110 duration-200 transition-all" />
            </li>
          </ul>
        </div>
      </section>

      <div className="flex flex-col mt-10 md:mt-0">
        <h1 className="text-6xl py-2 font-bold text-left text-violet-800">
          Services
        </h1>
        <h3 className="font-bold md:text-base text-sm">
          Unique web experiences, designed just for you
        </h3>
      </div>
      <ul className="md:w-2/3 grid md:grid-cols-3 gap-5 mt-10">
        <li className="p-5 group text-left bg-slate-100 hover:bg-slate-50 hover:scale-105 hover:-translate-y-2 transition-all duration-300">
          <div className="w-full flex justify-between">
            <h4 className="text-xl font-bold group-hover:text-violet-800">
              Simple Page
            </h4>
            <MdSignalCellularAlt1Bar className="text-xl" />
          </div>

          <p className="mt-5 md:text-base text-sm " style={{ textWrap: "balance" }}>
            Boost your online presence with an engaging and effective landing
            page that captures the attention of your visitors and guides them to
            the action you want.
          </p>
        </li>

        <li className="p-5 group text-left bg-slate-100 hover:bg-slate-50 hover:scale-105 hover:-translate-y-2 transition-all duration-300">
          <div className="w-full flex justify-between">
            <h4 className="text-xl font-bold group-hover:text-violet-800">
              Medium Page
            </h4>
            <MdSignalCellularAlt2Bar className="text-xl" />
          </div>

          <p className="mt-5 md:text-base text-sm" style={{ textWrap: "balance" }}>
            Boost your brand with a complete website. Present your history,
            services and news. Convert visitors into customers while optimizing
            the user experience.{" "}
          </p>
        </li>
        <li className="p-5 group text-left bg-slate-100 hover:bg-slate-50 hover:scale-105 hover:-translate-y-2 transition-all duration-300">
          <div className="w-full flex justify-between">
            <h4 className="text-xl font-bold group-hover:text-violet-800">
              Advanced Page
            </h4>
            <MdSignalCellularAlt className="text-xl" />
          </div>

          <p className="mt-5 md:text-base text-sm" style={{ textWrap: "balance" }}>
            Take your site to the next level. Dynamic interaction, user
            authentication and custom functionality. Turn ideas into reality
            with powerful web capabilities.
          </p>
        </li>
      </ul>
    </main>
  );
}
