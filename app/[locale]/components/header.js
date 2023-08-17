import Image from "next/image";
import me from "../assets/yo.jpg";
import {useTranslations} from 'next-intl';

export default function Header() {
  const t = useTranslations('Header');

    return( <header className="w-full flex md:flex-row flex-col h-screen" id="home">
    <section className="md:w-1/2 flex flex-col items-start justify-center gap-2 md:p-20 p-5">
      <h1 className="md:text-7xl text-5xl font-medium">{t('greeting')}</h1>
      <h2 className="md:text-6xl text-4xl tracking-wider">
      {t('im')} <tag className="text-violet-800 font-bold">Esteban</tag>
      </h2>
      <h4 className="md:text-xl text-sm bg-violet-800 p-1 px-2 text-white">
        FullStack developer
      </h4>
      <p className="md:mt-10 mt-5 md:line-clamp-none line-clamp-3 md:text-base text-sm" style={{textWrap: 'balance'}}>
      {t('description')}
      </p>
      <a className="md:text-base text-sm p-2 bg-violet-800 rounded-3xl text-white mt-1 hover:bg-violet-600 transition-all duration-200" href='/#contact'>Connect whit me</a>
    </section>
    <Image className="md:w-1/2 w-full h-full object-cover" src={me} alt="esteban pic"/>
  </header>)
}