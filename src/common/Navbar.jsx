import  { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center w-full justify-between	">
              <div className="flex items-center ">
              <div className="flex-shrink-0">
                <Link to='/'>
                <img
                  className="h-8 w-auto"
                  src={logo}
                  alt="Workflow"
                />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className=" hover:bg-[#0076CE] hover:text-white  px-3 py-2 rounded-md text-lg  decoration-black	font-bold"
                  >
                    Solutions
                  </a>

                  <a
                    href="#"
                    className="hover:bg-[#0076CE] hover:text-white px-3 py-2 rounded-md text-lg  decoration-black	font-bold"
                  >
                    Features
                  </a>

                  <a
                    href="#"
                    className=" hover:bg-[#0076CE] hover:text-white px-3 py-2 rounded-md text-lg font-bold  decoration-black	"
                  >
                    Blog
                  </a>

                  <a
                    href="#"
                    className="decoration-black	 hover:bg-[#0076CE] hover:text-white px-3 py-2 rounded-md text-lg font-bold"
                  >
                    About
                  </a>

                 
                </div>
              </div>
              </div>
              <div className="flex gap-4">
                <button className=" text-[#0076CE] border-2 border-[#0076CE] px-4 py-1 rounded-lg mx-3" >Login</button>

                <button className="bg-[#0076CE] text-white px-4 py-1 border-2 border-[#0076CE]  rounded-lg" >Register</button>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-[#0076CE] mx-4 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="hover:bg-[#0076CE] text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="#"
                  className="text-black hover:bg-[#0076CE] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </a>

                <a
                  href="#"
                  className="text-black hover:bg-[#0076CE] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="text-black hover:bg-[#0076CE] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Calendar
                </a>

                <a
                  href="#"
                  className="text-black hover:bg-[#0076CE] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Reports
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>

     
    </div>
  );
}

