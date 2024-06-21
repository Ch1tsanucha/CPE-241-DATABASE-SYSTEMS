import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import userimg from "../assets/userimg.svg";
import Logo from "../assets/Logotop.svg";
import Dropdown from "./Dropdown";
export default function Header() {
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <nav class="bg-Nav fixed right-0 left-0 top-0">
      <div class="max-w-screen grid grid-cols-2 items-center justify-between mx-auto p-4">
        <div>
          <a
            href="/"
            class="flex items-center space-x-3 rtl:space-x-reverse h-10 ml-20"
          >
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <img src={Logo} alt="" className="size-36"/>
            </span>
          </a>
        </div>

        <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 justify-end">
            <li className="mr-20">
              <button
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
                onClick={() => setOpenProfile((prev) => !prev)}
              >
                <img src={userimg} alt="" className="size-12" />
              </button>
              {openProfile && (
                <div
                  className=""
                >
                  <Dropdown />
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
