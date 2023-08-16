import Image from "next/image";
import me from "../assets/yo.jpg";
export default function Header() {
    return( <header className="w-full flex md:flex-row flex-col h-screen" id="home">
    <section className="md:w-1/2 flex flex-col items-start justify-center gap-2 md:p-20 p-5">
      <h1 className="md:text-7xl text-5xl">Hi There</h1>
      <h2 className="md:text-6xl text-4xl tracking-wider">
        Im <tag className="text-violet-800 font-bold">Esteban</tag>
      </h2>
      <h4 className="md:text-xl text-sm bg-violet-800 p-1 text-white">
        FullStack developer
      </h4>
      <p className="md:mt-10 mt-5 md:line-clamp-none line-clamp-3 md:text-base text-sm" style={{textWrap: 'balance'}}>
        I am a Full Stack Web Developer with a passion for
        learning and applying my knowledge. I am highly focused and
        adaptable, with a dedication to delivering high quality solutions
        that meet the unique needs of each project. I am eager to further
        develop my skills and grow professionally in the IT industry.
      </p>
      <a className="md:text-base text-sm p-2 bg-violet-800 rounded-3xl text-white mt-1 hover:bg-violet-600 transition-all duration-200" href='/#contact'>Connect whit me</a>
    </section>
    <Image className="md:w-1/2 w-full h-full object-cover" src={me} />
  </header>)
}