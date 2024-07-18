import Image from "next/image";
import weather from "../assets/weather.png";
import aleph from "../assets/aleph.png";
import almendra from "../assets/almendra.png";
import weatherv2 from "../assets/weatherv2.png";
import summoners from "../assets/summoners.png";
import mah from "../assets/mah.png";
import retrorides from "../assets/retrorides.png";
import Link from "next/link";
import { useTranslations } from "next-intl";


export default function Porojects() {
  const t = useTranslations("Projects"); 

  return (
    <section
      className="w-full flex flex-col md:min-h-screen md:p-20 md:gap-10 p-5 gap-10 md:my-0 my-10"
      id="projects"
    >
      <h1 className="md:text-6xl text-5xl md:text-start text-center">
      {t("my")}<tag className="text-blue-700 font-bold "> {t("projects")} </tag> &{" "}
        <tag className="text-blue-700 font-bold">{t("works")} </tag>
      </h1>
      <section className="w-full grid md:grid-cols-4 gap-8">

        <Link href="https://weatherkorn.web.app/" className="flex flex-col items-center gap-4 pt-2 group bg-slate-100 hover:bg-slate-50 hover:scale-105 hover:-translate-y-1  transition-all duration-200">
          <h2 className="text-lg font-bold group-hover:text-blue-700 transition-all duration-200">Weather App</h2>
          <Image src={weather} className="h-full object-cover" alt="weather app screenshot"/>
        </Link>
        <Link href="https://summoner-s-handbook.vercel.app/" className="flex flex-col items-center gap-4 pt-2 group bg-slate-100 hover:bg-slate-50 hover:scale-105 hover:-translate-y-1  transition-all duration-200">
          <h2 className="text-lg font-bold group-hover:text-blue-700 transition-all duration-200">Summoners Handbook</h2>
          <Image src={summoners} className="h-full object-cover" alt="Summoners Handbook screenshot"/>
        </Link>
        <Link href="https://www.techosyservicios.com.ar/" className="flex flex-col items-center gap-4 pt-2 group bg-slate-100 hover:bg-slate-50 hover:scale-105 hover:-translate-y-1  transition-all duration-200">
        <h2 className="text-lg font-bold group-hover:text-blue-700 transition-all duration-200">MAH Construcciones</h2>
          <Image src={mah} className="h-full object-cover" alt="PalabraDeHoy app screenshot"/>
        </Link>

        <Link href="https://www.retrorides.com.ar/" className="flex flex-col items-center gap-4 pt-2 group bg-slate-100 hover:bg-slate-50 hover:scale-105 hover:-translate-y-1  transition-all duration-200">
        <h2 className="text-lg font-bold group-hover:text-blue-700 transition-all duration-200">Retro Rides</h2>
          <Image src={retrorides} className="h-full object-cover" alt="PalabraDeHoy app screenshot"/>
        </Link>
        <Link href="https://www.alephstudio.com.ar/" className="flex flex-col items-center gap-4 pt-2 group bg-slate-100 hover:bg-slate-50 hover:scale-105 hover:-translate-y-1  transition-all duration-200">
        <h2 className="text-lg font-bold group-hover:text-blue-700 transition-all duration-200">Aleph</h2>
          <Image src={aleph} className="h-full object-cover" alt="PalabraDeHoy app screenshot"/>
        </Link>
        <Link href="https://www.almendrasaludable.com.ar/" className="flex flex-col items-center gap-4 pt-2 group bg-slate-100 hover:bg-slate-50 hover:scale-105 hover:-translate-y-1  transition-all duration-200">
        <h2 className="text-lg font-bold group-hover:text-blue-700 transition-all duration-200">Almendra</h2>
          <Image src={almendra} className="h-full object-cover" alt="PalabraDeHoy app screenshot"/>
        </Link>
       
        <Link href="https://weather-v2-nine.vercel.app/" className="flex flex-col items-center gap-4 pt-2 group bg-slate-100 hover:bg-slate-50 hover:scale-105 hover:-translate-y-1  transition-all duration-200">
        <h2 className="text-lg font-bold group-hover:text-blue-700 transition-all duration-200">Weather v2</h2>
          <Image src={weatherv2} className="h-full object-cover" alt="PalabraDeHoy app screenshot"/>
        </Link>
      </section>
    </section>
  );
}
