import { useTranslations } from "next-intl";

export default function Formation() {
  const t = useTranslations("Formation");

  return (
    <section
      className="w-full flex md:flex-row flex-col md:gap-0 gap-10 md:h-screen md:p-10 md:pr-20 p-5 md:my-0 my-10"
      id="formation"
    >
      <section className="md:w-1/2 flex flex-col items-start justify-center gap-2">
        <h2 className="md:text-6xl text-5xl tracking-wider">
          {t("title.item1")}{" "}
          <tag className="text-violet-800 font-bold">{t("title.item2")}</tag>
        </h2>
        <p
          className="mt-10 md:text-base text-sm"
          style={{ textWrap: "balance" }}
        >
          {t("description.item1")}{" "}
          <tag className="font-bold">
             Universidad del Centro de la Provincia de Buenos Aires
          </tag>
          {t("description.item2")}
        </p>
      </section>
      <section className="md:w-1/2 flex flex-col items-center justify-center gap-2">
        <h2 className="md:text-6xl text-5xl font-bold">{t("courses.title")}</h2>
        <ul className="flex flex-col ite gap-5 mt-3">
          <li className="w-full group p-5 flex flex-col items-start bg-slate-100 hover:bg-slate-50 hover:scale-105 hover:-translate-y-2 transition-all duration-300">
            <h1 className="font-bold text-xl group-hover:text-violet-800">
              Argentina Programa
            </h1>
            <p className="md:text-sm text-xs">{t("courses.course1")}</p>
            <a
              href="https://www.linkedin.com/posts/esteban-horn-907a98206_argentinaprograma-activity-7032051549237329920-4YsW/?utm_source=share&utm_medium=member_desktop"
              className="text-violet-800 hover:text-violet-600 transition-all duration-200 font-bold self-end mt-2"
            >
              {t("courses.certificate")}
            </a>
          </li>
          <li className="w-full group p-5 flex flex-col items-start bg-slate-100 hover:bg-slate-50 hover:scale-105 hover:-translate-y-2 transition-all duration-300">
            <h1 className="font-bold text-xl group-hover:text-violet-800">
              Golang
            </h1>
            <p className="md:text-sm text-xs">{t("courses.course2")}</p>
            <a
              href="https://www.udemy.com/certificate/UC-5d691842-4cbf-4145-8074-27226a4c3133/"
              className="text-violet-800 hover:text-violet-600 transition-all duration-200 font-bold self-end mt-2"
            >
              {t("courses.certificate")}
            </a>
          </li>
          <li className="w-full group p-5 flex flex-col items-start bg-slate-100 hover:bg-slate-50 hover:scale-105 hover:-translate-y-2 transition-all duration-300">
            <h1 className="font-bold text-xl group-hover:text-violet-800">
              Linux{" "}
            </h1>
            <p className="md:text-sm text-xs">{t("courses.course3")}</p>
            <a
              href="https://www.mastermind.ac/certificates/dncpval6if"
              className="text-violet-800 hover:text-violet-600 transition-all duration-200 font-bold self-end mt-2"
            >
              {t("courses.certificate")}
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
}
