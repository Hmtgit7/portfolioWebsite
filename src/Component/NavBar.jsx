import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const Links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 1, link: "Portfolio" },
    { id: 2, link: "Experience" },
    { id: 2, link: "Contact" },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black">
      <div>
        <h1 className="text-5xl font-signature ml-9">Hemant</h1>
      </div>
      <div>
        <ul className="hidden md:flex">
          {Links.map(({ id, link }) => (
            <li
              key={link.id}
              className="cursor-pointer capitalize font-medium text-gray-500 px-4 hover:scale-105 duration-200"
            >
              <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        
        className="cursor-pointer pr-4 z-10 text-gray-500  md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0  w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {Links.map(({ id, link }) => (
            <li
              key={link.id}
              className="cursor-pointer capitalize text-4xl py-6 px-4 text-gray-500 px-4 hover:scale-105 duration-200"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
