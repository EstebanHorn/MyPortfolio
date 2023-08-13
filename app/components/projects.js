import Image from "next/image";
import weather from "../assets/weather.png";
import roma from "../assets/roma.png";
import summoners from "../assets/summoners.png";
import movies from "../assets/movies.png";
import Link from "next/link";

export default function Porojects() {
  return (
    <section
      className="w-full flex flex-col md:h-screen md:p-10 md:pr-20 md:gap-20 p-5 gap-10 md:my-0 my-10"
      id="projects"
    >
      <h1 className="md:text-6xl text-5xl">
        My <tag className="text-violet-800 font-bold">projects</tag> &{" "}
        <tag className="text-violet-800 font-bold">Works</tag>
      </h1>
      <section className="w-full grid md:grid-cols-3 gap-8">
        <Link href="https://weatherkorn.web.app/" className="flex flex-col items-center gap-4 pt-2 group bg-slate-100 hover:bg-slate-50 hover:scale-105 hover:-translate-y-1  transition-all duration-200">
          <h2 className="text-xl font-bold group-hover:text-violet-800 transition-all duration-200">Weather App</h2>
          <Image src={weather} className="h-full object-cover"/>
        </Link>
        <Link href="https://summoners-handbook.netlify.app/" className="flex flex-col items-center gap-4 pt-2 group bg-slate-100 hover:bg-slate-50 hover:scale-105 hover:-translate-y-1  transition-all duration-200">
          <h2 className="text-xl font-bold group-hover:text-violet-800 transition-all duration-200">Sommonres Handbook</h2>
          <Image src={summoners} className="h-full object-cover"/>
        </Link>
        <Link href="https://movies-b3476.web.app/" className="flex flex-col items-center gap-4 pt-2 group bg-slate-100 hover:bg-slate-50 hover:scale-105 hover:-translate-y-1  transition-all duration-200">
        <h2 className="text-xl font-bold group-hover:text-violet-800 transition-all duration-200">Movies page</h2>

          <Image src={movies} className="h-full object-cover "/>
          
        </Link>
        <Link href="https://www.romastudio.com.ar/" className="flex flex-col items-center gap-4 pt-2 group bg-slate-100 hover:bg-slate-50 hover:scale-105 hover:-translate-y-1  transition-all duration-200">
        <h2 className="text-xl font-bold group-hover:text-violet-800 transition-all duration-200">Roma Studio</h2>

          <Image src={roma} className="h-full object-cover "/>
           
        </Link>
      </section>
    </section>
  );
}
