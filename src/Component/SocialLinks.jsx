import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const socialPlatform = [
    {
      id: 1,
      child: (
        <>
          GitHub
          <FaGithub size={30} />
        </>
      ),
      href: "www.github.com",
    },
    {
      id: 2,
      child: (
        <>
          Linkedin
          <FaLinkedin size={30} />
        </>
      ),
      href: "www.Linkedin.com",
    },
    {
      id: 3,
      child: (
        <>
          Mail
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:hmtlohacoding3579@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "./public/Resume (3).pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="flex-col flex top-[35%] left-0  fixed">
      <ul>
        {socialPlatform.map(({ id, href, child, style, download }) => (
          <li
            key={id}
            className={
              "ml-[-100px] hover:ml-[-10px] hover:rounded-md  duration-300 flex justify-between items-center w-40 h-14 px-4 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white
          "
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;