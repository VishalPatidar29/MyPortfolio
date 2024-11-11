import React from "react";
import profileImage from "../assets/images/profile-picture.png";

function SideBar({isSidebarOpen}) {


  return (
    <>
     
      <aside className={`top-0 left-0 md:h-auto h-full bg-white  p-5 md:p-5 w-full md:block  fixed  md:rounded-3xl overflow-y-auto  ${isSidebarOpen ? 'w-[100%]' : 'hidden'}`}>
      {/* <aside className={`fixed top-0 left-0 h-full bg-white p-5 md:p-5 md:relative rounded-3xl overflow-y-auto transition-all duration-300 ${
      isSidebarOpen ? 'w-64' : 'w-0'
    }`}> */}
        {/* profile section start Here */}
        <div className="flex flex-col items-center">
          <img
            className="h-[200px] w-[200px]"
            src={profileImage}
            alt="profile Picture"
          />
          <h2 className="text-xl font-bold">Beatrice Wambui</h2>
          <p className="text-sm text-slate-400">FullStack Developer</p>
        </div>
        {/* profile section End Here */}


        {/* social section start Here */}
        <div className="flex  justify-around my-7">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/src/assets/images/Facebook.png" alt="" className="h-[60px] w-[60px]" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/src/assets/images/Linkedin.png" alt="" className="h-[60px] w-[60px]" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/src/assets/images/Twitter.png" alt="" className="h-[60px] w-[60px]" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/src/assets/images/Github.png" alt="" className="h-[60px] w-[60px]" />
          </a>
        </div>

        {/* social section End Here */}


        {/* Address section start Here */}
        <div className="bg-[#F2F5F9] px-4 py-6 rounded-xl ">

          <div className="flex border-b border-[#E3E3E3] pb-4">
            <img src="/src/assets/images/Phone.png" alt="" />
            <div className="flex flex-col  justify-center">
              <p className="text-slate-400 text-sm md:text-xs font-semibold">Phone</p>
              <p className="font-semibold text-sm md:text-xs">+918770669245</p>
            </div>
          </div>
          <div className="flex border-b border-[#E3E3E3] pb-4 pt-4">
            <img src="/src/assets/images/Email.png" alt="" />
            <div className="flex flex-col  justify-center">
              <p className="text-slate-400 text-sm md:text-xs font-semibold">Email</p>
              <p className="font-semibold text-sm md:text-xs">er.vishalpatidar29@gmail.com</p>
            </div>
          </div>
          <div className="flex border-b border-[#E3E3E3] pb-4 pt-4">
            <img src="/src/assets/images/Location.png" alt="" />
            <div className="flex flex-col  justify-center">
              <p className="text-slate-400 text-sm md:text-xs font-semibold">Location</p>
              <p className="font-semibold md:text-xs text-sm">Indore</p>
            </div>
          </div>

          {/* Button section start Here */}
          <div className="flex justify-center my-5">
            <a href="path-to-resume" download className="bg-gradient-to-r from-[#FF9C1A] to-[#E80505] px-4 py-2 rounded-3xl">
              {" "}
              {/* Update with actual resume file */}
              <button className="text-white">Download Resume</button>
            </a>
          </div>
          {/* Button section End Here */}

        </div>
        {/* Address section End Here */}


      </aside>
    </>
  );
}

export default SideBar;
