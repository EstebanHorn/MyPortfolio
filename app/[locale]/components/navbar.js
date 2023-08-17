'use client'
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineCode,
  AiOutlineMessage,
} from "react-icons/ai";
import {usePathname} from 'next-intl/client';

export default function Navbar() {
  const path = usePathname()
  return (
    <nav className="md:h-[50%] w-[90%] right-[5%] bottom-3 md:bottom-auto bg-violet-800 fixed md:right-5 md:top-[25%] md:w-11 rounded-3xl md:py-10 px-5 text-white">
      <ul className="flex md:flex-col flex-row items-center md:gap-10 gap-2 justify-around text-xl h-full">
        <li className="md:w-auto w-full">
          <a
            className="hover:bg-violet-500 transition-all duration-200 w-full p-2 rounded-full flex justify-center"
            href={"#home"}
          >
            <AiOutlineHome />
          </a>
        </li>
        <li className="md:w-auto w-full">
          <a
            className="hover:bg-violet-500 transition-all duration-200 w-full p-2 rounded-full flex justify-center"
            href="#aboutMe"
          >
            <AiOutlineUser />
          </a>
        </li>
        <li className="md:w-auto w-full">
          <a
            className="hover:bg-violet-500 transition-all duration-200 w-full p-2 rounded-full flex justify-center"
            href="#formation"
          >
            <AiOutlineBook />
          </a>
        </li>
        <li className="md:w-auto w-full">
          <a
            className="hover:bg-violet-500 transition-all duration-200 w-full p-2 rounded-full flex justify-center"
            href="#projects"
          >
            <AiOutlineCode />
          </a>
        </li>
        <li className="md:w-auto w-full">
          <a
            className="hover:bg-violet-500 transition-all duration-200 w-full p-2 rounded-full flex justify-center"
            href="#contact"
          >
            <AiOutlineMessage />
          </a>
        </li>
      </ul>
    </nav>
  );
}
