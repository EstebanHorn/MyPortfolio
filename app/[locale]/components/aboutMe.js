import { AiOutlineGithub } from "react-icons/ai";
import { SiTailwindcss, SiNextdotjs, SiMysql } from "react-icons/si";
import { BiLogoMongodb, BiLogoNodejs, BiLogoGoLang } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { useTranslations } from "next-intl";
import  "./transition.css"

export default function AboutMe() {
  const t = useTranslations("AboutMe");

  return (
    <main
      className="w-full md:gap-10 gap-5 md:p-20 md:min-h-screen  md:my-0 my-10 p-5 flex md:flex-row flex-col justify-between"
      id="aboutMe"
    >
      <section className="flex  flex-col gap-14">
        <div className="md:w-2/3 flex flex-col gap-2">
          <h1 className="md:text-6xl text-5xl py-2 font-normal text-left">
            {t("title.item1")}{" "}
            <tag className="text-blue-700 font-bold">{t("title.item2")}</tag>{" "}
          </h1>
          <h2 className="md:text-2xl text-xl">
            {t("im")}{" "}
            <tag className="font-bold tracking-wide">Esteban Horn</tag> |
            FullStack Developer
          </h2>
          <p style={{ textWrap: "balance" }} className="text-left md:pr-12">
            {t("about")}
          </p>
        </div>
        <div className="md:w-1/4 2xl:w-1/2  flex flex-col items-center gap-2 ">
          <div className="w-full">
            <h3 className="md:text-4xl text-2xl py-2 font-bold text-left text-blue-700">
              {t("skills.title")}
            </h3>
            <h4 className="font-bold md:text-base text-sm">
              {t("skills.subtitle")}
            </h4>
          </div>

          <ul className="flex gap-1 md:gap-5 2xl:gap-8 md:text-4xl flex-wrap text-2xl w-full mt-5 ">
            <li className="m-auto md:m-0">
              <FaReact className="hover:text-cyan-600 hover:scale-110 duration-200 transition-all" />
            </li>
            <li className="m-auto md:m-0">
              <SiNextdotjs className="hover:text-gray-600 hover:scale-110 duration-200 transition-all" />
            </li>

            <li className="m-auto md:m-0">
              <SiTailwindcss className="hover:text-blue-600 hover:scale-110 duration-200 transition-all" />
            </li>
            <li className="m-auto md:m-0">
              <BiLogoGoLang className="hover:text-sky-700 hover:scale-110 duration-200 transition-all" />
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
      <div id="me2" className=""></div>
     

    </main>
  );
}
