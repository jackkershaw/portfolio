import React, { useState } from "react";

function Header({ onHeaderClick }) {
  /* Using state to set initial value for mobile nav */
  const [isNavVisible, setNavVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState("openingPage");

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  const handleHeaderClick = (section) => {
    onHeaderClick(section);
    setCurrentPage(section);
    toggleNav();
  };

  const getHeaderStyle = (pageName) => {
    return `cursor-pointer hover:text-orangepeel active:text-white ${
      currentPage === pageName ? "text-orangepeel" : ""
    }`;
  };

  return (
    <>
      <header className="min-w-100 bg-ykb py-4 text-white">
        <button
          id="hamburger-button"
          className="hover:text-orangepeel ml-auto mr-5 flex cursor-pointer text-4xl active:text-white sm:hidden"
          onClick={toggleNav}
        >
          {isNavVisible ? "X" : "Menu ☰"}
        </button>
        <nav
          className={`${isNavVisible ? "sm:flex" : "hidden sm:flex"} container w-full flex-col items-center justify-between py-4 text-center text-2xl sm:mx-5 sm:flex-row lg:mx-10 lg:text-3xl`}
        >
          <h1
            onClick={() => handleHeaderClick("openingPage")}
            className={getHeaderStyle("openingPage")}
          >
            About Me
          </h1>
          <h1
            onClick={() => handleHeaderClick("coding")}
            className={getHeaderStyle("coding")}
          >
            Coding
          </h1>
          <h1
            onClick={() => handleHeaderClick("design")}
            className={getHeaderStyle("design")}
          >
            Design
          </h1>
          <h1
            onClick={() => handleHeaderClick("contact")}
            className={getHeaderStyle("contact")}
          >
            Contact
          </h1>
          <a
            href="https://cv.jackkershaw.net"
            target="_blank"
            className={getHeaderStyle("cv")}
          >
            <h1>CV</h1>
          </a>
        </nav>
      </header>
    </>
  );
}

export default Header;
