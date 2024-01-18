import React, { useState } from "react";

function Header({ onHeaderClick }) {
  /* Using state to set initial value for mobile nav */
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <>
      <header className="min-w-100 bg-ykb-500 py-4 text-white">
        <button
          id="hamburger-button"
          className="ml-auto mr-5 flex cursor-pointer text-4xl hover:text-ykb-50 active:text-ykb-200 sm:hidden"
          onClick={toggleNav}
        >
          {isNavVisible ? "X" : "Menu ☰"}
        </button>
        <nav
          className={`${isNavVisible ? "sm:flex sm:hidden" : "hidden sm:flex"} container w-full flex-col items-center justify-between py-4 text-center text-2xl sm:mx-5 sm:flex-row lg:mx-10 lg:text-3xl`}
        >
          <h1
            onClick={() => onHeaderClick("openingPage")}
            className=" hover:text-ykb-50 active:text-ykb-200"
          >
            About Me
          </h1>
          <h1
            onClick={() => onHeaderClick("coding")}
            className="ml-0 hover:text-ykb-50 active:text-ykb-200"
          >
            Coding
          </h1>
          <h1
            onClick={() => onHeaderClick("design")}
            className="hover:text-ykb-50 active:text-ykb-200"
          >
            Design
          </h1>
          <h1
            onClick={() => onHeaderClick("contact")}
            className="hover:text-ykb-50 active:text-ykb-200"
          >
            Contact
          </h1>
          <a href="https://cv.jackkershaw.net"><h1>CV</h1></a>
        </nav>
      </header>
    </>
  );
}

export default Header;
