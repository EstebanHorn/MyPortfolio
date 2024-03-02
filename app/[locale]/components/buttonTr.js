'use client';
import { FaLanguage } from "react-icons/fa";
import {usePathname, useRouter} from 'next-intl/client';
 


export default function ButtonTr() {
  const pathname = usePathname();
const router = useRouter();
 
  return (
    <div className="dropdown text-black fixed md:right-5 top-3 right-2 md:top-24 w-11 rounded-3xl z-20 ">
      <label className="btn py-1 bg-sky-700  px-2 text-2xl" tabIndex="0">
        <FaLanguage className="" />
      </label>
      <div className="dropdown-menu md:dropdown-menu-left dropdown-menu-left-bottom w-20 flex bg-white border border-gray-10">
        <a className="dropdown-item text-sm flex items-center hover:bg-gray-50 hover:text-sky-800  hover:scale-105 transition-all duration-200">
          {" "}
          <button onClick={() => {router.replace(pathname, {locale: 'en'});}}>
            <h1>English</h1>
          </button>
        </a>
        <a
          tabIndex="-1"
          className="dropdown-item text-sm items-center hover:bg-gray-50 hover:text-sky-800  hover:scale-105 transition-all duration-200"
        >
          <button onClick={() => {router.replace(pathname, {locale: 'es'});}}>
            <h1>Español</h1>
          </button>
        </a>
      </div>
    </div>
  );
}
