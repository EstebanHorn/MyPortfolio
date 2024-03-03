import { useTranslations } from "next-intl";

export default function Formation() {
  const t = useTranslations("Formation");


  return (
    <section
      className="min-w-full min-h-screen flex md:flex-col flex-col md:gap-20 gap-10  md:p-20  p-5 md:my-0 justify-center"
      id="formation"
    >
      <section className="md:w-full flex flex-col justify-center gap-2">
        <h2 className="md:text-6xl text-5xl tracking-wider">
          {t("title.item1")}{" "}
          <tag className="text-blue-700 font-bold">{t("title.item2")}</tag>
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
      <section className="md:full flex flex-col justify-center gap-2">
        <h2 className="md:text-6xl text-5xl font-bold">{t("courses.title")}</h2>
        <ul className="flex mt-3 flex-wrap  gap-4">
          <li className="md:w-[49%] w-full relative pb-10 group p-5 gap-5 flex flex-col items-start bg-slate-100 hover:bg-slate-50 hover:scale-[1.03] hover:-translate-y-2 transition-all duration-300">
            <h1 className="font-bold text-xl group-hover:text-blue-700">
              Argentina Programa
            </h1>
            <p className="md:text-sm text-xs">{t("courses.course1")}</p>
            <a
              href="https://media.licdn.com/dms/image/C4D22AQHL7b6EuMiCxg/feedshare-shrink_800/0/1676571737039?e=1710979200&v=beta&t=JY8uml_S24tGJglPLx1JG0v0bbFvJooZPFqDY3sNhSY"
              className="text-blue-700 hover:text-blue-600 transition-all duration-200 absolute font-bold bottom-3 right-3"
            >
              {t("courses.certificate")}
            </a>
          </li>
          <li className="md:w-[49%] w-full relative pb-10 group p-5 gap-5 flex flex-col items-start bg-slate-100 hover:bg-slate-50 hover:scale-[1.03] hover:-translate-y-2 transition-all duration-300">
            <h1 className="font-bold text-xl group-hover:text-blue-700">
              Golang
            </h1>
            <p className="md:text-sm text-xs">{t("courses.course2")}</p>
            <a
              href="https://www.udemy.com/certificate/UC-5d691842-4cbf-4145-8074-27226a4c3133/"
              className="text-blue-700 hover:text-blue-600 transition-all duration-200 absolute font-bold bottom-3 right-3"
            >
              {t("courses.certificate")}
            </a>
          </li>
          <li className="md:w-[49%] w-full group p-5 pb-10 gap-5 flex flex-col items-start relative bg-slate-100 hover:bg-slate-50 hover:scale-[1.03] hover:-translate-y-2 transition-all duration-300">
            <h1 className="font-bold text-xl group-hover:text-blue-700">
              Linux{" "}
            </h1>
            <p className="md:text-sm text-xs">{t("courses.course3")}</p>
            <a
              href="https://www.mastermind.ac/certificates/dncpval6if"
              className="text-blue-700 hover:text-blue-600 transition-all duration-200 absolute font-bold bottom-3 right-3"
            >
              {t("courses.certificate")}
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
}
