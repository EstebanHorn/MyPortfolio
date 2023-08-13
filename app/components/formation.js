
export default function Formation() {
  return (
    <section className="w-full flex md:flex-row flex-col md:gap-0 gap-10 md:h-screen md:p-10 md:pr-20 p-5" id="formation">
      <section className="md:w-1/2 flex flex-col items-start justify-center gap-2">
        <h2 className="text-6xl tracking-wider">
          My <tag className="text-violet-800 font-bold">formation</tag>
        </h2>
        <p className="mt-10" style={{ textWrap: "balance" }}>
        My professional training is being developed at the <tag className='font-bold'>Universidad del Centro de la Provincia de Buenos Aires
            </tag>, where I am pursuing a degree in Systems Engineering. Through this educational path, I am acquiring the essential skills to address the constantly evolving challenges in the field of technology and computer science.
        </p>
      </section>
      <section className="md:w-1/2 flex flex-col items-start justify-center gap-2">
        <h2 className="text-6xl font-bold">Courses</h2>
        <ul className="flex flex-col gap-5 mt-3">
        <li className="w-full group p-5 flex flex-col items-start bg-slate-100 hover:bg-slate-50 hover:scale-105 hover:-translate-y-2 transition-all duration-300">
          <h1 className="font-bold text-xl group-hover:text-violet-800">
            Argentina Programa
          </h1>
          <p className="text-sm">
            It is a national and federal program that aims to train people in
            languages and knowledge about programming, testing and digital
            skills to enhance employability in the software and technology
            sector.
          </p>
          <a
            href="https://www.linkedin.com/posts/esteban-horn-907a98206_argentinaprograma-activity-7032051549237329920-4YsW/?utm_source=share&utm_medium=member_desktop"
            className="text-violet-800 hover:text-violet-600 transition-all duration-200 font-bold self-end mt-2"
          >
            certificate
          </a>
        </li>
        <li className="w-full group p-5 flex flex-col items-start bg-slate-100 hover:bg-slate-50 hover:scale-105 hover:-translate-y-2 transition-all duration-300">
          <h1 className="font-bold text-xl group-hover:text-violet-800">
            Golang
          </h1>
          <p className="text-sm">
          This Go course on Udemy starts from scratch and covers a wide range of topics, from language fundamentals to building web applications and implementing microservices. The course also includes creating command-line applications and database management.
          </p>
          <a
            href="https://www.udemy.com/certificate/UC-5d691842-4cbf-4145-8074-27226a4c3133/"
            className="text-violet-800 hover:text-violet-600 transition-all duration-200 font-bold self-end mt-2"
          >
            certificate
          </a>
        </li>
        <li className="w-full group p-5 flex flex-col items-start bg-slate-100 hover:bg-slate-50 hover:scale-105 hover:-translate-y-2 transition-all duration-300">
          <h1 className="font-bold text-xl group-hover:text-violet-800">
Linux          </h1>
          <p className="text-sm">
          I acquired practical skills in the installation of distributions and fundamental concepts such as regular expressions, bash scripting and Linux environment tools for data manipulation and task automation.
          </p>
          <a
            href="https://www.mastermind.ac/certificates/dncpval6if"
            className="text-violet-800 hover:text-violet-600 transition-all duration-200 font-bold self-end mt-2"
          >
            certificate
          </a>
        </li>
        </ul>
        
      </section>
    </section>
  );
}
