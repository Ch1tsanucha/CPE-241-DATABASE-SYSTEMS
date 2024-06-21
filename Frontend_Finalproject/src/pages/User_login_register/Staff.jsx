import React, { useState } from 'react';
import Header from "../../component/Header_login_staff";
import Footer from "../../component/Footer_staff";

import BG from "../../assets/UserloginBG.svg";
import IMGBG from "../../assets/Userloginimg.svg";

export default function Staff() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can perform any action like sending data to a server or storing it locally
    // For now, let's just log the user data
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div
      className="object-fill"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Header />
      <div className="flex mt-20">
        <div className="grid grid-cols-2 w-full">
          <img src={IMGBG} className="h-full" alt="Background" />
          <div className="flex flex-col justify-center gap-5">
            <form className="flex flex-col justify-center gap-5" onSubmit={handleSubmit}>
              <div className="w-1/2">
                <input className="bg-Fontpurple appearance-none rounded-xl w-full py-2 px-4 text-white leading-tight focus:outline-none focus:border-purple-500" id="email" type="text" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="w-1/2">
                <input className="bg-Fontpurple appearance-none rounded-xl w-full py-2 px-4 text-white leading-tight focus:outline-none focus:border-purple-500" id="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="w-1/2 flex justify-center">
                <button className="bg-Fontpurple hover:bg-opacity-50 text-white py-1 px-10 rounded-2xl" type="submit">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
