import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import userimg from "../assets/userimg.svg";
import Dropdown from "./Dropdown";
import Logo from "../assets/Logotop.svg";
export default function StaffHeader() {
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <nav class="bg-black fixed right-0 left-0 top-0 py-1">
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

        <div class="w-full grid grid-cols-2"
         style={{ gridTemplateColumns: "0.5fr 2fr" }}
        >
          <div></div>
          <div className="flex gap-5 justify-end">
          <div>
              <a href="/MovieAdd">
                <button class="bg-Purplekbutton hover:bg-opacity-50 text-black font-bold py-1 px-5 rounded-2xl">
                  Add Movie
                </button>
              </a>
            </div>
            <div>
              <a href="/MovieEdit">
                <button class="bg-Purplekbutton hover:bg-opacity-50 text-black font-bold py-1 px-5 rounded-2xl">
                  Edit Movie
                </button>
              </a>
            </div>
            <div>
              <a href="/SeatControl">
                <button class="bg-Purplekbutton hover:bg-opacity-50 text-black font-bold py-1 px-5 rounded-2xl">
                  Seat Control
                </button>
              </a>
            </div>
            <div>
              <a href="Staff">
                <button class="bg-white hover:bg-opacity-50 text-black font-bold py-1 px-5 rounded-2xl ">
                  Logout
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
