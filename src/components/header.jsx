import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className=" bg-ykb pt-6 sm:py-6 text-white">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-white hover:text-white focus:outline-none flex flex-row items-center justify-between mx-auto text-2xl"
        >
          {menuOpen ? (
            <span class="icon-[mdi--menu-close]"></span>
          ) : (
            <span class="icon-[mdi--hamburger-menu]"></span>
          )}
          <h1 className="text-3xl px-10">Jack Kershaw</h1>
        </button>
        <nav
          className={`pt-8 sm:pt-0 text-white sm:slate-600 items-center justify-start space-x-5 text-center text-2xl sm:mx-10 space-y-10 sm:space-y-0 ${
            menuOpen
              ? "flex sm:flex-row flex-col"
              : "hidden sm:flex sm:flex-row"
          }`}
        >
          {" "}
          <a
            href="/"
            className="active:text-white sm:hover:bg-ykbdark sm:active:bg-ykblight sm:p-5 rounded-lg w-30"
          >
            About
          </a>
          <a
            href="/coding"
            className="active:text-white sm:hover:bg-ykbdark sm:active:bg-ykblight sm:p-5 rounded-lg w-30"
          >
            Coding
          </a>
          <a
            href="/design"
            className="active:text-white sm:hover:bg-ykbdark sm:active:bg-ykblight sm:p-5 rounded-lg w-30"
          >
            Design
          </a>
          <a
            href="/blog"
            className="active:text-white sm:hover:bg-ykbdark sm:active:bg-ykblight sm:p-5 rounded-lg w-30"
          >
            Blog
          </a>
          <div className="container flex flex-col items-center justify-between sm:mx-5 sm:flex-row lg:mx-10">
            <div className="flex space-x-6 pt-4 sm:pt-0 ml-auto align-items-center">
              {" "}
              <a href="https://github.com/jones58" target="_blank">
                <span className="icon-[mdi--github] w-10 h-10 cursor-pointer hover:text-orangepeel active:text-white"></span>
              </a>
              <a href="/cv" target="_blank">
                <span className="icon-[mdi--resume] w-10 h-10 cursor-pointer hover:text-orangepeel active:text-white"></span>
              </a>
              <a
                href="https://www.linkedin.com/in/jackkershaw"
                target="_blank"
              >
                <span className="icon-[mdi--linkedin] w-11 h-11 cursor-pointer hover:text-orangepeel active:text-white"></span>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
