import Image from "next/image";
import me from "../assets/yo.jpg";
import { useTranslations } from "next-intl";
import  "./transition.css"

export default function Header() {
  const t = useTranslations("Header");

  return (
    <header className="w-full flex md:flex-row flex-col h-screen" id="home">
      <section className="md:w-1/2 flex flex-col items-start justify-center gap-2 md:p-20 p-5">
        <h2 className="md:text-5xl text-3xl font-light">{t("greeting")}</h2>
        <h1 className="md:text-7xl text-5xl tracking-wider">
          {t("im")} <tag className="text-blue-700 font-bold">Esteban</tag>
        </h1>
        <h4 className="md:text-xl text-sm bg-blue-700 p-1 px-2 text-white">
          Full Stack Developer
        </h4>
        <p
          className="md:mt-10 mt-5 md:line-clamp-none line-clamp-3 md:text-base text-sm"
          style={{ textWrap: "balance" }}
        >
          {t("description")}
        </p>
        <a
          className="md:text-base text-sm p-2 px-4 bg-blue-700 rounded-3xl text-white mt-1 hover:bg-blue-600 transition-all duration-200"
          href="/#contact"
        >
          {t("Connect")}
        </a>
      </section>
      <Image
        id="me"
        className="md:w-1/2 w-full h-full object-cover"
        src={me}
        alt="esteban pic"
      />
    </header>
  );
}
