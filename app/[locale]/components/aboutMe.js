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
import {useTranslations} from 'next-intl';


export default function AboutMe() {
  const t = useTranslations('AboutMe');

  return (
    <main className="w-full  md:gap-10 gap-5  md:h-screen md:p-10 md:my-0 my-10 p-5" id="aboutMe">
      <section className="flex md:flex-row flex-col gap-14">
        <div className="md:w-2/3 flex flex-col gap-2">
          <h1 className="md:text-6xl text-5xl py-2 font-normal text-left">
            {t('title.item1')} <tag className="text-violet-800 font-bold">{t('title.item2')}</tag>{" "}
          </h1>
          <h2 className="md:text-2xl">
          {t('im')} <tag className="font-bold tracking-wide">Esteban Horn</tag> |
            FullStack Developer
          </h2>
          <p style={{ textWrap: "balance" }} className="text-left md:pr-12">
          {t('about')}
          </p>
        </div>
        <div className="md:w-1/3 flex flex-col items-center gap-2 ">
          <div className="w-full">
            <h1 className="md:text-6xl text-5xl py-2 font-bold text-left text-violet-800">
            {t('skills.title')}
            </h1>
            <h2 className="md:text-2xl">{t('skills.subtitle')}</h2>
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
        <h1 className="md:text-6xl text-5xl py-2 font-bold text-left text-violet-800">
        {t('services.title')}
        </h1>
        <h3 className="font-bold md:text-base text-sm">
        {t('services.subtitle')}
        </h3>
      </div>
      <ul className="md:w-2/3 grid md:grid-cols-3 gap-5 mt-10">
        <li className="p-5 group text-left bg-slate-100 hover:bg-slate-50 hover:scale-105 hover:-translate-y-2 transition-all duration-300">
          <div className="w-full flex justify-between">
            <h4 className="text-xl font-bold group-hover:text-violet-800">
            {t('services.plan1.title')}

            </h4>
            <MdSignalCellularAlt1Bar className="text-xl" />
          </div>

          <p className="mt-5 md:text-base text-sm " style={{ textWrap: "balance" }}>
          {t('services.plan1.description')}

          </p>
        </li>

        <li className="p-5 group text-left bg-slate-100 hover:bg-slate-50 hover:scale-105 hover:-translate-y-2 transition-all duration-300">
          <div className="w-full flex justify-between">
            <h4 className="text-xl font-bold group-hover:text-violet-800">
            {t('services.plan2.title')}

            </h4>
            <MdSignalCellularAlt2Bar className="text-xl" />
          </div>

          <p className="mt-5 md:text-base text-sm" style={{ textWrap: "balance" }}>
          {t('services.plan2.description')}

          </p>
        </li>
        <li className="p-5 group text-left bg-slate-100 hover:bg-slate-50 hover:scale-105 hover:-translate-y-2 transition-all duration-300">
          <div className="w-full flex justify-between">
            <h4 className="text-xl font-bold group-hover:text-violet-800">
            {t('services.plan3.title')}
            </h4>
            <MdSignalCellularAlt className="text-xl" />
          </div>

          <p className="mt-5 md:text-base text-sm" style={{ textWrap: "balance" }}>
          {t('services.plan3.description')}

          </p>
        </li>
      </ul>
    </main>
  );
}
