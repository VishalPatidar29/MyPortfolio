import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Home, Contact, Resume, Work, SideBar } from './components/index.js';

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  const [isSidebarSticky, setIsSidebarSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const bottomOfPage = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
      setIsSidebarSticky(!bottomOfPage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <Router>
      <div className={`main-div-class md:px-[25px] md:py-[25px] xl:px-[9%] xl:py-10 2xl:max-w-[1440px]  px-4 py-2 items-center mx-auto `}>
        {/* menu bar start Here */}
        <div className='flex justify-end'>
          <div className=' bg-white border-2 w-[100%] md:w-auto  p-2 md:px-6 md:py-3 rounded-xl'>
            <nav>
              <ul className='flex  gap-3 md:gap-6 xl:gap-8 justify-end'>
                <li>
               {/* Button to toggle sidebar on mobile */}
              <button
                className={`${isSidebarOpen ? 'absolute' : 'absolute'} top-8 left-8 z-50 md:hidden text-[20px]`}
                onClick={toggleSidebar}>
                {isSidebarOpen ? "✕"  :  "☰"}
              </button>

                </li>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => `w-[63px] py-3 md:px-4 md:py-4 flex flex-col items-center rounded-xl  md:w-[80px] ${
                  isActive
                    ? 'bg-gradient-to-r from-[#FF9C1A] to-[#E80505] text-white'
                    : 'bg-[#E1E8EF]'
                      }` }
                  >

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>

                    <p className='text-[10px]  md:text-xs font-semibold'>Home</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/resume"
                    className={({ isActive }) => `w-[63px] py-3 p-3 md:px-4 md:py-4 flex flex-col items-center rounded-xl md:w-[80px] ${
                      isActive
                        ? 'bg-gradient-to-r from-[#FF9C1A] to-[#E80505] text-white'
                        : 'bg-[#E1E8EF]'
                          }` }
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                    </svg>

                    <p className='text-[10px]  md:text-xs font-semibold'>Resume</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/work"
                    className={({ isActive }) => `w-[63px] py-3 md:px-4 md:py-4 flex flex-col items-center rounded-xl md:w-[80px] ${
                      isActive
                        ? 'bg-gradient-to-r from-[#FF9C1A] to-[#E80505] text-white'
                        : 'bg-[#E1E8EF]'
                          }` }
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                    </svg>

                    <p className='text-[10px]  md:text-xs font-semibold'> Work</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) => `w-[63px] py-3 md:px-4 md:py-4 flex flex-col items-center rounded-xl md:w-[80px] ${
                      isActive
                        ? 'bg-gradient-to-r from-[#FF9C1A] to-[#E80505] text-white'
                        : 'bg-[#E1E8EF]'
                          }` }
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                    </svg>

                  <p className='text-[10px]  md:text-xs font-semibold'>Contact</p>  
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          </div>
        {/* menu bar  section end Here */}

        <div className={`flex md:gap-8 xl:gap-10 md:mt-4 md:flex-row ${isSidebarOpen ? '' : 'flex-col'}`}>
        <div className={`sidebar-div-class  md:w-[40%] xl:w-1/3  h-full  z-40 ${isSidebarOpen ? '' : 'translate-x-0 w-0'}  ${isSidebarSticky ? 'md:sticky md:top-0' : ''} `} >
          <SideBar  isSidebarOpen={isSidebarOpen} />
        </div>

        <div className='routes-section-class xl:w-2/3 md:w-[60%] w-[100%]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>

      </div>

    </Router>
  );
}

export default App;
