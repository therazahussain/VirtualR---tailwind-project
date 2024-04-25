import React, { useState } from "react";
import { Menu, Sidebar, X } from "lucide-react";
import { navItems } from "../constants";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <nav className="backdrop-blur-lg flex w-screen fixed top-0 items-center justify-between py-4 px-12 text-sm border-b border-zinc-800 z-100">
        <div className="flex justify-start items-center flex-1 text-lg gap-3 cursor-pointer">
          <img src={logo} alt="Logo" className="w-10" />
          <p>Virtual R</p>
        </div>

        <ul className="hidden lg:flex flex-1 items-center justify-between gap-6 cursor-pointer">
          {navItems.map((items, key) => (
            <li
              key={key}
              className="hover:bg-orange-500 p-2 rounded-lg transition ease-in-out duration-500"
              href={items.href}
            >
              {items.label}
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex gap-3 flex-1 justify-end">
          <button className="border-2 border-white px-[5px] rounded-md p-1">
            Sign In
          </button>
          <button className="bg-orange-500 px-[5px] border-2 border-orange-500 rounded-md">
            Create an Account
          </button>
        </div>

        <div className="lg:hidden" onClick={() => setOpenSidebar(!openSidebar)}>
          {openSidebar ? <X /> : <Menu />}
        </div>
      </nav>

      {openSidebar && (
        <div className="fixed flex flex-col top-16 w-screen py-4 gap-4  bg-neutral-900">
          <ul className="flex flex-col items-center justify-between gap-5 cursor-pointer">
            {navItems.map((items, key) => (
              <li
                key={key}
                className="hover:bg-orange-500 p-2 rounded-lg transition ease-in-out duration-500"
                href={items.href}
              >
                {items.label}
              </li>
            ))}
          </ul>

          <div className="flex gap-5 flex-1 justify-center items-center">
            <button className="border-2 border-white px-[3px] rounded-md p-1">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 rounded-md p-1">
              Create an Account
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
