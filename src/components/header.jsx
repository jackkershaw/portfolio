import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className=" bg-ykb py-5 text-white">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-white hover:text-white focus:outline-none flex flex-row items-center justify-between mx-auto text-2xl"
        >
          {menuOpen ? (
            <span class="icon-[mdi--arrow-up]"></span>
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
        </nav>
      </header>
    </>
  );
}

export default Header;
