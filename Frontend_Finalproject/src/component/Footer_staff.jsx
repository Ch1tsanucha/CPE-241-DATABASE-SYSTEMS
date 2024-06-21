import Line from "../assets/line.svg";
import Call from "../assets/call.svg";
import Logo from "../assets/Logo.svg";
export default function Footer() {
  return (
    <div className="h-64">
      <div className="bg-black h-full">
        <div
          className="grid grid-cols-2 h-full items-center"
          style={{ gridTemplateColumns: "0.5fr 2fr" }}
        >
          <div className="size-full flex justify-end text-black items-center">
            <div className=" size-2/3 flex justify-center items-center">
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className=" h-full mr-10 pl-48">
            <div className="flex flex-col h-full justify-center gap-2">
              <div className="">
                <div className="grid grid-cols-3 h-full ">
                  <div className="text-white flex justify-start">
                    <ul>
                      <li className="font-bold text-base mb-2">Corporate</li>
                      <li className="text-sm mb-2 h-8 flex items-center">
                        Major Group
                      </li>
                      <li className="text-sm mb-2 h-8 flex items-center">
                        Work With Us
                      </li>
                      <li className="text-sm mb-2 h-8 flex items-center">
                        Privacy Policy
                      </li>
                    </ul>
                  </div>
                  <div className="h-full text-white flex justify-start">
                    <ul>
                      <li className="font-bold text-base mb-2">
                        Customer Support
                      </li>
                      <li className="flex items-center mb-2">
                        <img
                          src={Line}
                          alt="line logo"
                          className="size-8 mr-1"
                        />
                        <span className="text-sm">@phile</span>
                      </li>
                      <li className="text-sm mb-2 h-8 flex items-center">Call us : Thailand</li>
                      <li className="flex items-center mb-2">
                        <img
                          src={Call}
                          alt="line logo"
                          className="size-8 mr-1"
                        />
                        <span className="text-sm">+(66)2 426 0413</span>
                      </li>
                    </ul>
                  </div>
                  <div className="h-full text-white flex justify-start">
                    <ul>
                      <li className="font-bold text-base mb-2 ">Need help?</li>
                      <li className="text-sm mb-2 h-8 flex items-center">
                        How to buy ticket
                      </li>
                      <li className="text-sm mb-2 h-8 flex items-center">
                        How to use ticket
                      </li>
                      <li className="text-sm mb-2 h-8 flex items-center">
                        Help Center
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white h-1 rounded"></div>

              <div className="px-">
                <div className="grid grid-cols-4 h-full">

                <div></div>
                  <div className="">
                    <ul className="flex justify-start">
                      <a href="#">
                        <li className="font-bold text-base">About</li>
                      </a>
                    </ul>
                  </div>
                
                
                  <div className=" h-full">
                    <ul className="flex justify-start">
                      <li className="font-bold text-base">Contact Us</li>
                    </ul>
                  </div>

                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
