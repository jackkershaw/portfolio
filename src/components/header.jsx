import { useState } from "react";

function Header({ onHeaderClick }) {
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
          className="ml-auto mr-5 flex cursor-pointer text-4xl hover:text-orangepeel active:text-white sm:hidden"
          onClick={toggleNav}
        >
          {isNavVisible ? "X" : "Menu ☰"}
        </button>
        <nav
          className={`${isNavVisible ? "sm:flex" : "hidden sm:flex"} container w-full flex-col items-center justify-between py-4 text-center text-2xl sm:mx-5 sm:flex-row lg:mx-10 lg:text-3xl`}
        >
          <a href="/openingPage" className={getHeaderStyle("openingPage")} onClick={() => handleHeaderClick("openingPage")}>
            About Me
          </a>
          <a href="/coding" className={getHeaderStyle("coding")} onClick={() => handleHeaderClick("coding")}>
            Coding
          </a>
          <a href="/design" className={getHeaderStyle("design")} onClick={() => handleHeaderClick("design")}>
            Design
          </a>
          <a href="/contact" className={getHeaderStyle("contact")} onClick={() => handleHeaderClick("contact")}>
            Contact
          </a>
          <a href="/cv" className={getHeaderStyle("cv")} onClick={() => handleHeaderClick("cv")}>
            CV
          </a>
        </nav>
      </header>
    </>
  );
}

export default Header;
