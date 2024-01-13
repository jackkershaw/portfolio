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
          className="ml-auto mr-5 flex cursor-pointer text-4xl hover:text-ykb-50 active:text-ykb-200 md:hidden"
          onClick={toggleNav}
        >
          {isNavVisible ? "X" : "Menu ☰"}
        </button>
        <nav
          className={`${isNavVisible ? "sm:hidden md:flex" : "hidden md:flex"} container w-full flex-col items-center justify-between py-4 text-center text-2xl md:mx-5 md:flex-row lg:mx-10 lg:text-3xl`}
        >
          <h1
            onClick={() => onHeaderClick("openingPage")}
            className=" hover:text-ykb-50 active:text-ykb-200"
          >
            About
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
            onClick={() => onHeaderClick("videos")}
            className="hover:text-ykb-50 active:text-ykb-200"
          >
            Video
          </h1>
          <h1
            onClick={() => onHeaderClick("contact")}
            className="hover:text-ykb-50 active:text-ykb-200"
          >
            Contact
          </h1>
        </nav>
      </header>
    </>
  );
}

export default Header;
