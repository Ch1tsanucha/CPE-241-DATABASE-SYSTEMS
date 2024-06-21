import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Ticket_Zone from "./Ticket";
import IMG from "../../assets/ProfileBG.svg";
import userimg from "../../assets/userimg.svg";

import Copper from "../../assets/Copper.svg";
import Silver from "../../assets/Silver.svg";
import Gold from "../../assets/Gold.svg";

export default function Userprofile() {
  return (
    <div>
      <Header />
      <div
        className="bg-cover bg-center mt-20 h-screen"
        style={{ backgroundImage: `url(${IMG})` }}
      >
        <div className="bg-black h-2/5">
          <div className="grid grid-cols-2 h-full">
            <div className="flex flex-col justify-center items-center gap-10">
              <div className="flex justify-between gap-10">
                <img
                  src={userimg}
                  alt=""
                  className="size-52 rounded-full object-cover"
                />
                <div className="flex items-center">
                  <ul>
                    <li>User Name</li>
                    <li>User Gmail</li>
                  </ul>
                  <div className="flex justify-center items-center h-12 w-12">
                    <img src={Gold} alt="" className="h-10 w-10 rounded-full" />
                  </div>
                </div>
              </div>
              <div
                className="grid grid-cols-2 w-full"
                style={{ gridTemplateColumns: "0.8fr 1fr" }}
              >
                <div></div>
                <div>
                  <div className="flex gap-10 w-full">
                    <button class="bg-Purplekbutton hover:bg-opacity-50 text-black font-bold py-1 px-4 rounded-2xl">
                      Upcoming
                    </button>
                    <button class="bg-Purplekbutton hover:bg-opacity-50 text-black font-bold py-1 px-4 rounded-2xl">
                      History
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button class="bg-Blackbutton hover:bg-opacity-50 text-white font-bold py-2 px-4 rounded-2xl">
                Edit Profile
              </button>
            </div>
          </div>

          <div className="h-full">
            <Ticket_Zone />
          </div>
        </div>
      </div>
      <div className="bottom-0">
        <Footer />
      </div>
    </div>
  );
}
