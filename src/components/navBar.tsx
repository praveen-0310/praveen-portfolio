import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "./themeContext";

export default function Navbar() {
  const navbarData = [
    { title: "About Me", href: "#about" },
    { title: "Experience", href: "#experience" },
    { title: "Skills", href: "#skills" },
    { title: "Achievements", href: "#achievements" },
    { title: "Certification", href: "#certification" },
  ];

  const { isDark, toggleTheme } = useTheme();
  const [toggle, setToggle] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const showNav = () => {
    setToggle(!toggle);
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      let current = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click to ensure underline updates
  const handleClick = (id: string) => {
    setActiveSection(id); // Update the active section immediately
    setToggle(false); // Close the menu if open
  };

  return (
    <nav
      className={`${
        isDark ? "bg-black" : "bg-white"
      } fixed top-0 w-full items-center flex p-4 mb-4 shadow-md z-50`}
    >
      <div className="flex justify-between items-center w-full flex-wrap">
        <h1
          className={`${
            isDark ? "text-white" : "text-black"
          } text-xl font-bold`}
        >
          Praveen Portfolio
        </h1>
        <div className="md:hidden">
          {!toggle ? (
            <FiMenu
              onClick={showNav}
              color={isDark ? "white" : "black"}
              size={27}
            />
          ) : (
            <IoClose
              onClick={showNav}
              color={isDark ? "white" : "black"}
              size={27}
            />
          )}
        </div>

        <ul
          className={`${toggle ? "flex h-screen" : "hidden"} ${
            isDark ? "bg-black" : "bg-white"
          } flex-col items-center w-full md:flex-row md:w-auto md:space-x-5 md:flex md:h-auto`}
        >
          {navbarData.map((link, index) => (
            <li
              key={index}
              className={`nav-list-trans ${
                isDark ? "text-white" : "text-black"
              } md:mt-0 mt-10 ${
                activeSection === link.href.substring(1) ? "underline" : ""
              }`}
            >
              <a
                href={link.href}
                onClick={() => handleClick(link.href.substring(1))}
              >
                {link.title}
              </a>
            </li>
          ))}
          <div
            className={`light-dark-icon ${
              !isDark ? "bg-black" : "bg-white"
            } p-1 rounded-full mt-10 md:mt-0`}
            onClick={toggleTheme}
          >
            {isDark ? (
              <MdDarkMode color="black" size={30} />
            ) : (
              <MdOutlineLightMode color="white" size={30} />
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
}
